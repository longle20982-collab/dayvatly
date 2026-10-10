import React from 'react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message?: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2 max-w-sm w-full pointer-events-none">
      {toasts.map(toast => {
        const bgColors = {
          success: 'bg-emerald-600 text-white border-emerald-700',
          error: 'bg-rose-600 text-white border-rose-700',
          warning: 'bg-amber-600 text-white border-amber-700',
          info: 'bg-blue-600 text-white border-blue-700',
        }[toast.type];

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto p-4 rounded-lg shadow-lg border text-sm flex items-start justify-between transition-all transform translate-y-0 ${bgColors}`}
          >
            <div>
              <p className="font-semibold">{toast.title}</p>
              {toast.message && <p className="text-xs mt-1 opacity-90">{toast.message}</p>}
            </div>
            <button
              onClick={() => onDismiss(toast.id)}
              className="ml-3 text-white hover:opacity-75 focus:outline-none"
              aria-label="Đóng thông báo"
            >
              ✕
            </button>
          </div>
        );
      })}
    </div>
  );
};
