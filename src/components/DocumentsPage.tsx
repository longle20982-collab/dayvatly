import React, { useState } from 'react';
import { GradeLevel, Lesson, Resource } from '../types';
import { matchesSearch } from '../utils/vietnameseSearch';
import { parseEmbedUrl } from '../utils/embedHelpers';
import { ReportModal } from './ReportModal';

interface DocumentsPageProps {
  resources: Resource[];
  lessons: Lesson[];
  onOpenLesson: (lessonId: string) => void;
}

export const DocumentsPage: React.FC<DocumentsPageProps> = ({
  resources,
  lessons,
  onOpenLesson,
}) => {
  const [selectedFormat, setSelectedFormat] = useState<string>('all');
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [reportingItem, setReportingItem] = useState<{ id: string; title: string } | null>(null);

  const documentResources = resources.filter(
    r => (r.type === 'document' || r.type === 'presentation' || r.type === 'worksheet') && r.status === 'published'
  );

  const filteredDocs = documentResources.filter(doc => {
    if (selectedGrade !== 'all' && doc.grade.toString() !== selectedGrade) return false;
    if (selectedFormat !== 'all' && doc.fileType !== selectedFormat) return false;
    if (searchQuery.trim()) {
      const matchTitle = matchesSearch(doc.title, searchQuery);
      const matchDesc = matchesSearch(doc.description, searchQuery);
      const matchTags = doc.tags.some(t => matchesSearch(t, searchQuery));
      if (!matchTitle && !matchDesc && !matchTags) return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-physics-dark">
          Thư viện Tài liệu & Bài giảng điện tử
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Hệ thống phiếu học tập, đề kiểm tra, bài trình chiếu Canva, PowerPoint và bảng tính Excel thí nghiệm Vật lí 10–11–12.
        </p>
      </div>

      {/* Format & Grade Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            type="text"
            placeholder="Tìm phiếu học tập, slide, file Word/Excel..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="text-xs sm:text-sm border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-physics-teal focus:outline-none"
          />

          <select
            value={selectedFormat}
            onChange={e => setSelectedFormat(e.target.value)}
            className="text-xs sm:text-sm border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-physics-teal focus:outline-none text-slate-700 font-medium"
          >
            <option value="all">Tất cả định dạng tệp</option>
            <option value="pdf">Tệp PDF (Phiếu bài tập, đề)</option>
            <option value="pptx">Bài trình chiếu PPTX / Canva</option>
            <option value="docx">Tệp văn bản Word (DOCX)</option>
            <option value="xlsx">Bảng tính Excel (XLSX số liệu)</option>
            <option value="image">Hình ảnh & Sơ đồ tư duy</option>
          </select>

          <select
            value={selectedGrade}
            onChange={e => setSelectedGrade(e.target.value)}
            className="text-xs sm:text-sm border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-physics-teal focus:outline-none text-slate-700 font-medium"
          >
            <option value="all">Tất cả khối lớp</option>
            <option value="10">Vật lí 10</option>
            <option value="11">Vật lí 11</option>
            <option value="12">Vật lí 12</option>
          </select>
        </div>
      </div>

      {/* Documents List / Cards */}
      {filteredDocs.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center border border-slate-200">
          <span className="text-4xl">📁</span>
          <p className="mt-3 text-slate-600 font-medium text-sm">
            Chưa tìm thấy tài liệu phù hợp với bộ lọc tìm kiếm.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map(doc => {
            const embed = parseEmbedUrl(doc.url);
            const linkedLessonNames = lessons
              .filter(l => doc.linkedLessonIds.includes(l.id))
              .map(l => l.title);

            const formatBadgeColors: Record<string, string> = {
              pdf: 'bg-rose-100 text-rose-800 border-rose-200',
              pptx: 'bg-orange-100 text-orange-800 border-orange-200',
              docx: 'bg-blue-100 text-blue-800 border-blue-200',
              xlsx: 'bg-emerald-100 text-emerald-800 border-emerald-200',
              image: 'bg-purple-100 text-purple-800 border-purple-200',
            };

            return (
              <div
                key={doc.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 text-physics-navy">
                      Lớp {doc.grade}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase border ${
                      formatBadgeColors[doc.fileType || 'pdf'] || 'bg-slate-100 text-slate-700'
                    }`}>
                      {doc.fileType || 'tài liệu'}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-800 text-sm mb-2 line-clamp-2 leading-snug">
                    {doc.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed">
                    {doc.description}
                  </p>

                  {/* Linked lessons badge */}
                  {linkedLessonNames.length > 0 && (
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-100 text-[11px] text-slate-600 mb-3">
                      <strong className="text-teal-700 block mb-0.5">Liên kết với bài học:</strong>
                      <div className="space-y-0.5">
                        {linkedLessonNames.map((name, i) => (
                          <div key={i} className="truncate">• {name}</div>
                        ))}
                      </div>
                    </div>
                  )}

                  {doc.fileSize && (
                    <p className="text-[11px] text-slate-400">
                      Dung lượng: {(doc.fileSize / 1024 / 1024).toFixed(1)} MB
                    </p>
                  )}
                </div>

                <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setReportingItem({ id: doc.id, title: doc.title })}
                    className="text-slate-400 hover:text-rose-600 text-[11px]"
                  >
                    🚩 Báo lỗi
                  </button>

                  <div className="flex space-x-2">
                    {doc.url ? (
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1 bg-physics-navy hover:bg-physics-blue text-white rounded font-medium transition-colors"
                      >
                        Mở tài liệu ↗
                      </a>
                    ) : (
                      <span className="text-slate-400 italic">Chưa có liên kết</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Note about Office format compatibility (Section 8) */}
      <div className="mt-10 bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-500 leading-relaxed">
        <strong>Lưu ý về định dạng xem trực tiếp:</strong> Trình duyệt web hỗ trợ hiển thị gốc tệp PDF và hình ảnh. Đối với tệp văn bản Microsoft Office (.docx, .pptx, .xlsx), hệ thống ưu tiên sử dụng trình xem trực tuyến an toàn của Office Online Viewer hoặc Google Drive Preview khi có kết nối ngoài; nếu liên kết nội bộ, người dùng có thể tải tệp về máy để mở bằng ứng dụng tương thích.
      </div>

      {/* Report Modal */}
      {reportingItem && (
        <ReportModal
          isOpen={Boolean(reportingItem)}
          targetTitle={reportingItem.title}
          onClose={() => setReportingItem(null)}
          onSubmit={(type, desc) => {
            alert(`Đã ghi nhận báo cáo tài liệu "${reportingItem.title}".`);
          }}
        />
      )}
    </div>
  );
};
