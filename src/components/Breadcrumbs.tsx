import React from 'react';

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  if (items.length === 0) return null;

  return (
    <nav className="bg-white border-b border-slate-200 py-2.5 px-4 sm:px-6 text-xs sm:text-sm text-slate-600">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              {idx > 0 && <span className="text-slate-400">/</span>}
              {isLast || !item.onClick ? (
                <span className={`font-medium ${isLast ? 'text-physics-navy font-semibold' : 'text-slate-700'}`}>
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={item.onClick}
                  className="hover:text-physics-teal hover:underline transition-colors focus:outline-none"
                >
                  {item.label}
                </button>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
