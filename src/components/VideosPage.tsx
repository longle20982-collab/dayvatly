import React, { useState } from 'react';
import { GradeLevel, Resource } from '../types';
import { matchesSearch } from '../utils/vietnameseSearch';
import { parseEmbedUrl } from '../utils/embedHelpers';
import { ReportModal } from './ReportModal';

interface VideosPageProps {
  resources: Resource[];
  onSelectGrade: (grade: GradeLevel) => void;
}

export const VideosPage: React.FC<VideosPageProps> = ({ resources }) => {
  const [subTab, setSubTab] = useState<'experiment' | 'lesson'>('experiment');
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [playingVideo, setPlayingVideo] = useState<Resource | null>(null);
  const [reportingItem, setReportingItem] = useState<{ id: string; title: string } | null>(null);

  const videoResources = resources.filter(
    r => (r.type === 'video_experiment' || r.type === 'video_lesson') && r.status === 'published'
  );

  const filteredVideos = videoResources.filter(vid => {
    if (subTab === 'experiment' && vid.type !== 'video_experiment') return false;
    if (subTab === 'lesson' && vid.type !== 'video_lesson') return false;
    if (selectedGrade !== 'all' && vid.grade.toString() !== selectedGrade) return false;
    if (searchQuery.trim()) {
      const matchTitle = matchesSearch(vid.title, searchQuery);
      const matchDesc = matchesSearch(vid.description, searchQuery);
      const matchTags = vid.tags.some(t => matchesSearch(t, searchQuery));
      if (!matchTitle && !matchDesc && !matchTags) return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-physics-dark">
          Thư viện Video Vật lí THPT
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Hệ thống video thí nghiệm ghi hình thực tế và video bài giảng chi tiết bám sát chuẩn kiến thức kĩ năng.
        </p>
      </div>

      {/* Sub-tabs: Video thí nghiệm vs Video bài học (Section 7) */}
      <div className="flex border-b border-slate-200 mb-6">
        <button
          onClick={() => setSubTab('experiment')}
          className={`pb-3 px-5 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
            subTab === 'experiment'
              ? 'border-physics-navy text-physics-navy'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>🔬 Video thí nghiệm ({videoResources.filter(v => v.type === 'video_experiment').length})</span>
        </button>
        <button
          onClick={() => setSubTab('lesson')}
          className={`pb-3 px-5 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${
            subTab === 'lesson'
              ? 'border-physics-navy text-physics-navy'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>🎬 Video bài học ({videoResources.filter(v => v.type === 'video_lesson').length})</span>
        </button>
      </div>

      {/* Filter and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Tìm kiếm video bài học, thí nghiệm, chủ đề..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="text-xs sm:text-sm border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-physics-teal focus:outline-none"
          />

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

      {/* Video Grid */}
      {filteredVideos.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center border border-slate-200">
          <span className="text-4xl">🎬</span>
          <p className="mt-3 text-slate-600 font-medium text-sm">
            Chưa tìm thấy video nào phù hợp với bộ lọc hiện tại.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map(vid => (
            <div
              key={vid.id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Thumbnail / Play Preview Placeholder */}
                <div
                  onClick={() => setPlayingVideo(vid)}
                  className="relative aspect-video bg-slate-900 group cursor-pointer overflow-hidden flex items-center justify-center"
                >
                  <img
                    src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=600&q=80"
                    alt={vid.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center text-xl shadow-lg transition-transform group-hover:scale-110">
                      ▶
                    </div>
                  </div>
                  {vid.duration && (
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-white text-[10px] font-mono">
                      {vid.duration}
                    </span>
                  )}
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-blue-900/80 text-white text-[10px] font-bold">
                    Lớp {vid.grade}
                  </span>
                </div>

                <div className="p-4">
                  <h3
                    onClick={() => setPlayingVideo(vid)}
                    className="font-bold text-slate-800 hover:text-physics-teal cursor-pointer text-sm mb-1.5 leading-snug line-clamp-2"
                  >
                    {vid.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed">
                    {vid.description}
                  </p>

                  {vid.guidingQuestions && vid.guidingQuestions.length > 0 && (
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-[11px] text-slate-600">
                      <strong className="text-physics-navy block mb-0.5">Câu hỏi định hướng:</strong>
                      <p className="line-clamp-2">{vid.guidingQuestions[0]}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 truncate max-w-[130px]">{vid.author}</span>
                <button
                  onClick={() => setPlayingVideo(vid)}
                  className="px-3 py-1 bg-physics-navy hover:bg-physics-blue text-white rounded font-medium transition-colors"
                >
                  Xem video ▶
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Video Modal Player (Section 7: Only loads player when opened, no autoplay with sound) */}
      {playingVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-6 animate-scaleIn">
            <div className="flex justify-between items-start pb-3 border-b border-slate-200 mb-4">
              <div>
                <span className="text-xs font-bold text-teal-600 uppercase">
                  {playingVideo.type === 'video_experiment' ? 'Video thí nghiệm thực hành' : 'Video bài giảng Vật lí'}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">{playingVideo.title}</h3>
              </div>
              <button
                onClick={() => setPlayingVideo(null)}
                className="text-slate-400 hover:text-slate-600 text-2xl font-bold ml-4"
              >
                ✕
              </button>
            </div>

            {/* Video Player */}
            {(() => {
              const embed = parseEmbedUrl(playingVideo.url);
              if (embed.canEmbed && embed.embedUrl) {
                return (
                  <div className="aspect-video w-full rounded-xl overflow-hidden bg-black shadow-inner mb-4">
                    <iframe
                      src={embed.embedUrl}
                      title={playingVideo.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                );
              }
              return (
                <div className="aspect-video w-full rounded-xl bg-slate-900 flex flex-col items-center justify-center p-6 text-center mb-4 text-white">
                  <p className="text-sm mb-3">Nguồn video không hỗ trợ nhúng trực tiếp hoặc cần quyền truy cập ngoài.</p>
                  <a
                    href={playingVideo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-teal-600 hover:bg-teal-500 rounded-lg font-semibold text-xs transition-colors"
                  >
                    Mở bản gốc trên YouTube / Nguồn lưu trữ ↗
                  </a>
                </div>
              );
            })()}

            <div className="space-y-3 text-xs text-slate-600">
              <p className="text-slate-700 leading-relaxed">{playingVideo.description}</p>
              {playingVideo.guidingQuestions && playingVideo.guidingQuestions.length > 0 && (
                <div className="bg-blue-50/70 p-3 rounded-lg border border-blue-200">
                  <strong className="text-physics-navy text-xs mb-1 block">Câu hỏi định hướng học tập:</strong>
                  <ul className="list-disc pl-5 space-y-1">
                    {playingVideo.guidingQuestions.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200 flex justify-between items-center text-xs">
              <button
                onClick={() => setReportingItem({ id: playingVideo.id, title: playingVideo.title })}
                className="text-slate-400 hover:text-rose-600"
              >
                🚩 Báo lỗi video này
              </button>
              <button
                onClick={() => setPlayingVideo(null)}
                className="px-4 py-1.5 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Report Modal */}
      {reportingItem && (
        <ReportModal
          isOpen={Boolean(reportingItem)}
          targetTitle={reportingItem.title}
          onClose={() => setReportingItem(null)}
          onSubmit={(type, desc) => {
            alert(`Đã ghi nhận báo cáo video "${reportingItem.title}".`);
          }}
        />
      )}
    </div>
  );
};
