import React, { useEffect, useRef } from 'react';

interface MathFormulaProps {
  latex: string;
  displayMode?: boolean;
  className?: string;
}

declare global {
  interface Window {
    katex?: {
      render: (latex: string, element: HTMLElement, options?: object) => void;
      renderToString: (latex: string, options?: object) => string;
    };
  }
}

export const MathFormula: React.FC<MathFormulaProps> = ({
  latex,
  displayMode = false,
  className = '',
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (window.katex) {
      try {
        window.katex.render(latex, containerRef.current, {
          displayMode,
          throwOnError: false,
        });
      } catch (err) {
        containerRef.current.innerText = latex;
      }
    } else {
      // Fallback if KaTeX CDN is loading
      containerRef.current.innerText = latex;
    }
  }, [latex, displayMode]);

  return (
    <span
      ref={containerRef}
      className={`inline-block font-mono text-physics-dark ${displayMode ? 'my-2 block text-center text-lg' : ''} ${className}`}
    >
      {latex}
    </span>
  );
};
