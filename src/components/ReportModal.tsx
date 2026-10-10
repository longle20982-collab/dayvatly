import React, { useState } from 'react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetTitle: string;
  onSubmit: (issueType: string, description: string) => void;
}

export const ReportModal: React.FC<ReportModalProps> = ({
  isOpen,
  onClose,
  targetTitle,
  onSubmit,
}) => {
  const [issueType, setIssueType] = useState('broken_link');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(issueType, description);
    setDescription('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 animate-scaleIn">
        <div className="flex justify-between items-center mb-4 border-b pb-3">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <span className="text-rose-500">⚠</span> Báo lỗi học liệu
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-lg font-bold"
          >
            ✕
          </button>
        </div>

        <p className="text-xs text-slate-500 mb-4">
          Học liệu đang báo cáo: <strong className="text-slate-700">{targetTitle}</strong>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Phân loại vấn đề:
            </label>
            <select
              value={issueType}
              onChange={e => setIssueType(e.target.value)}
              className="w-full text-sm border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-physics-teal focus:outline-none"
            >
              <option value="broken_link">Liên kết bị hỏng / không truy cập được (404, riêng tư)</option>
              <option value="incorrect_content">Nội dung có sai sót về công thức / kiến thức Vật lí</option>
              <option value="audio_video_error">Video / âm thanh không phát được</option>
              <option value="other">Vấn đề khác</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Mô tả chi tiết (tùy chọn):
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Vui lòng mô tả lỗi cụ thể để giáo viên phụ trách kiểm tra..."
              className="w-full text-sm border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-physics-teal focus:outline-none"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-medium transition-colors"
            >
              Gửi báo cáo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
