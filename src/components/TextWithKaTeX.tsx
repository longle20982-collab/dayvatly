import React, { useEffect, useRef } from 'react';

interface TextWithKaTeXProps {
  text: string;
}

export const TextWithKaTeX: React.FC<TextWithKaTeXProps> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (window.katex) {
      try {
        const parts = text.split(/(\$.*?\$)/g);
        containerRef.current.innerHTML = '';
        
        parts.forEach(part => {
          if (part.startsWith('$') && part.endsWith('$')) {
            const math = part.slice(1, -1);
            const span = document.createElement('span');
            // @ts-ignore
            window.katex.render(math, span, { throwOnError: false });
            containerRef.current?.appendChild(span);
          } else {
            const span = document.createElement('span');
            span.textContent = part;
            containerRef.current?.appendChild(span);
          }
        });
      } catch (err) {
        containerRef.current.innerText = text;
      }
    } else {
      containerRef.current.innerText = text;
    }
  }, [text]);

  return <div ref={containerRef} className="leading-relaxed whitespace-pre-wrap"></div>;
};
