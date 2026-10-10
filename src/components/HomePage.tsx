import React, { useState } from 'react';
import { GradeLevel, Lesson, Resource } from '../types';
import { matchesSearch } from '../utils/vietnameseSearch';

interface HomePageProps {
  lessons: Lesson[];
  resources: Resource[];
  onSelectGrade: (grade: GradeLevel) => void;
  onSelectLesson: (lesson: Lesson) => void;
  onSelectTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  lessons,
  resources,
  onSelectGrade,
  onSelectLesson,
  onSelectTab,
}) => {
  const [globalSearch, setGlobalSearch] = useState('');

  // Filter only published content for public homepage (Requirement 3)
  const publishedLessons = lessons.filter(l => l.status === 'published');
  const publishedResources = resources.filter(r => r.status === 'published');

  // Global search filtering
  const searchResults = globalSearch.trim()
    ? {
        lessons: publishedLessons.filter(l => 
          matchesSearch(l.title, globalSearch) || 
          matchesSearch(l.chapterName, globalSearch) ||
          l.keyKnowledge.concepts.some(c => matchesSearch(c, globalSearch))
        ),
        resources: publishedResources.filter(r => 
          matchesSearch(r.title, globalSearch) || 
          matchesSearch(r.description, globalSearch) ||
          r.tags.some(t => matchesSearch(t, globalSearch))
        ),
      }
    : null;

  // Featured sections
  const recentLessons = [...publishedLessons].sort((a, b) => 
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  ).slice(0, 4);

  const featuredExperiments = publishedResources.filter(
    r => r.type === 'experiment' || r.type === 'simulation'
  ).slice(0, 3);

  const newVideos = publishedResources.filter(
    r => r.type === 'video_experiment' || r.type === 'video_lesson'
  ).slice(0, 3);

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0f2b5c] via-[#163a75] to-[#1e40af] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-semibold">
            <span>✨</span>
            <span>Không gian số hỗ trợ dạy và học Vật lí THPT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            KHÔNG GIAN HỌC TẬP <br className="hidden sm:inline" />
            <span className="text-teal-300">VẬT LÍ 10–11–12</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Hệ thống học liệu chuẩn mực: kiến thức trọng tâm, thí nghiệm ảo PhET, mô phỏng số học tương tác, bài giảng video và tài liệu học tập theo chương trình GDPT 2018.
          </p>

          {/* Global Search Bar (Section 3) */}
          <div className="max-w-2xl mx-auto pt-2">
            <div className="relative flex items-center shadow-2xl rounded-2xl overflow-hidden bg-white">
              <span className="pl-4 pr-2 text-slate-400 text-lg">🔍</span>
              <input
                type="text"
                value={globalSearch}
                onChange={e => setGlobalSearch(e.target.value)}
                placeholder="Tìm kiếm bài học, công thức, thí nghiệm, video... (hỗ trợ tiếng Việt không dấu)"
                className="w-full py-4 px-2 text-slate-800 placeholder-slate-400 text-xs sm:text-sm focus:outline-none"
              />
              {globalSearch && (
                <button
                  onClick={() => setGlobalSearch('')}
                  className="px-3 text-slate-400 hover:text-slate-600 text-sm font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Decorative Physics background circles */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-5 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Global Search Results Overlay (If user is searching) */}
      {searchResults && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
            <div className="flex justify-between items-center mb-4 pb-2 border-b">
              <h2 className="text-base font-bold text-physics-dark">
                Kết quả tìm kiếm cho: <span className="text-teal-600">"{globalSearch}"</span>
              </h2>
              <span className="text-xs text-slate-500">
                Tìm thấy {searchResults.lessons.length} bài học, {searchResults.resources.length} học liệu
              </span>
            </div>

            {/* Matching Lessons */}
            <div className="mb-6">
              <h3 className="font-bold text-xs uppercase text-slate-500 mb-2">Bài học phù hợp:</h3>
              {searchResults.lessons.length === 0 ? (
                <p className="text-xs text-slate-400 italic">Không tìm thấy bài học nào.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {searchResults.lessons.map(les => (
                    <div
                      key={les.id}
                      onClick={() => onSelectLesson(les)}
                      className="p-3 rounded-lg border border-slate-200 hover:border-physics-teal hover:bg-slate-50 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-physics-navy">
                          Lớp {les.grade}
                        </span>
                        <span className="text-xs font-semibold text-slate-800">{les.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 truncate">{les.chapterName}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Matching Resources */}
            <div>
              <h3 className="font-bold text-xs uppercase text-slate-500 mb-2">Học liệu phù hợp:</h3>
              {searchResults.resources.length === 0 ? (
                <p className="text-xs text-slate-400 italic">Không tìm thấy học liệu nào.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {searchResults.resources.map(res => (
                    <div
                      key={res.id}
                      className="p-3 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-100 text-teal-800 capitalize">
                          {res.type.replace('_', ' ')}
                        </span>
                        <span className="text-[10px] text-slate-400">Lớp {res.grade}</span>
                      </div>
                      <h4 className="text-xs font-semibold text-slate-800 mb-0.5 line-clamp-1">{res.title}</h4>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{res.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 3 Large Grade Entrance Cards (Section 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card Vật lí 10 */}
          <div
            onClick={() => onSelectGrade(10)}
            className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-physics-blue hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                10
              </div>
              <h3 className="text-xl font-bold text-physics-dark mb-2 group-hover:text-blue-600 transition-colors">
                VẬT LÍ 10
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Động học, Động lực học Newton, Công và Năng lượng, Động lượng và Biến dạng của vật rắn.
              </p>
              <div className="space-y-1 text-xs text-slate-600 font-medium">
                <p>• {lessons.filter(l => l.grade === 10).length} bài học trọng tâm</p>
                <p>• Thí nghiệm thực đo gia tốc & Định luật II Newton</p>
              </div>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
              <span>Vào học Vật lí 10</span>
              <span>→</span>
            </div>
          </div>

          {/* Card Vật lí 11 */}
          <div
            onClick={() => onSelectGrade(11)}
            className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-teal-500 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                11
              </div>
              <h3 className="text-xl font-bold text-physics-dark mb-2 group-hover:text-teal-600 transition-colors">
                VẬT LÍ 11
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Dao động điều hòa, Sóng cơ, Điện trường và Các định luật về Dòng điện trong mạch.
              </p>
              <div className="space-y-1 text-xs text-slate-600 font-medium">
                <p>• {lessons.filter(l => l.grade === 11).length} bài học trọng tâm</p>
                <p>• Mô phỏng vòng tròn lượng giác & Mạch điện định luật Ohm</p>
              </div>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-600 group-hover:translate-x-1 transition-transform">
              <span>Vào học Vật lí 11</span>
              <span>→</span>
            </div>
          </div>

          {/* Card Vật lí 12 */}
          <div
            onClick={() => onSelectGrade(12)}
            className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-indigo-500 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                12
              </div>
              <h3 className="text-xl font-bold text-physics-dark mb-2 group-hover:text-indigo-600 transition-colors">
                VẬT LÍ 12
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Vật lí nhiệt, Nhiệt hóa hơi riêng, Mô hình khí lí tưởng, Từ trường và Vật lí hạt nhân.
              </p>
              <div className="space-y-1 text-xs text-slate-600 font-medium">
                <p>• {lessons.filter(l => l.grade === 12).length} bài học trọng tâm</p>
                <p>• Thí nghiệm đo nhiệt hóa hơi & Mô hình khí lí tưởng Boyle</p>
              </div>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600 group-hover:translate-x-1 transition-transform">
              <span>Vào học Vật lí 12</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Bài học mới cập nhật (Section 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-extrabold text-physics-dark">
              Bài học mới cập nhật
            </h2>
            <p className="text-xs text-slate-500">Nội dung bài học bám sát chương trình Giáo dục phổ thông 2018</p>
          </div>
          <button
            onClick={() => onSelectTab('grade10')}
            className="text-xs font-semibold text-physics-navy hover:text-physics-teal"
          >
            Xem tất cả bài học →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {recentLessons.map(lesson => (
            <div
              key={lesson.id}
              onClick={() => onSelectLesson(lesson)}
              className="bg-white rounded-xl shadow-sm border border-slate-200 hover:border-physics-teal hover:shadow-md transition-all p-4 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-physics-navy">
                    Vật lí {lesson.grade}
                  </span>
                  {lesson.isSample && (
                    <span className="text-[9px] font-semibold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                      Mẫu
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-slate-800 text-sm mb-1 leading-snug line-clamp-2">
                  {lesson.title}
                </h3>
                <p className="text-[11px] text-slate-400 mb-2">{lesson.chapterName}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>{lesson.authorName}</span>
                <span className="text-physics-teal font-semibold">Xem bài →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Thí nghiệm & Mô phỏng nổi bật (Section 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-extrabold text-physics-dark">
              Thí nghiệm & Mô phỏng tương tác nổi bật
            </h2>
            <p className="text-xs text-slate-500">Trực quan hóa các định luật và hiện tượng Vật lí</p>
          </div>
          <button
            onClick={() => onSelectTab('experiments')}
            className="text-xs font-semibold text-physics-navy hover:text-physics-teal"
          >
            Kho thí nghiệm mở →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredExperiments.map(exp => (
            <div
              key={exp.id}
              onClick={() => onSelectTab('experiments')}
              className="bg-white rounded-xl shadow-sm border border-slate-200 hover:border-teal-500 hover:shadow-md transition-all p-5 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800 uppercase">
                    {exp.experimentData?.category || 'Mô phỏng'}
                  </span>
                  <span className="text-[10px] text-slate-400">Lớp {exp.grade}</span>
                </div>
                <h3 className="font-bold text-slate-800 text-sm mb-1 line-clamp-2">
                  {exp.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                  {exp.description}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                <span className="text-slate-400 truncate max-w-[150px]">{exp.author}</span>
                <span className="text-teal-600 font-bold">Thực hành 🔬</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Video bài học & Video thí nghiệm mới (Section 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-extrabold text-physics-dark">
              Video bài học & Video thí nghiệm mới
            </h2>
            <p className="text-xs text-slate-500">Xem trực quan các bước thực hiện và phân tích lý thuyết</p>
          </div>
          <button
            onClick={() => onSelectTab('videos')}
            className="text-xs font-semibold text-physics-navy hover:text-physics-teal"
          >
            Xem thư viện video →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newVideos.map(vid => (
            <div
              key={vid.id}
              onClick={() => onSelectTab('videos')}
              className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-video bg-slate-900 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=600&q=80"
                  alt={vid.title}
                  className="w-full h-full object-cover opacity-60"
                  loading="lazy"
                />
                <div className="absolute w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center text-lg shadow">
                  ▶
                </div>
                {vid.duration && (
                  <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-white text-[10px] font-mono">
                    {vid.duration}
                  </span>
                )}
              </div>
              <div className="p-4">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">
                  {vid.type === 'video_experiment' ? 'Video thí nghiệm' : 'Video bài giảng'}
                </span>
                <h3 className="font-bold text-slate-800 text-sm mt-1.5 mb-1 line-clamp-2">
                  {vid.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">{vid.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Hướng dẫn ngắn cho học sinh và giáo viên (Section 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 sm:p-8 border border-blue-200 shadow-sm">
          <h2 className="text-lg font-bold text-physics-dark mb-4 flex items-center gap-2">
            <span>📖</span> Hướng dẫn ngắn cho Học sinh và Giáo viên
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
            <div className="space-y-2">
              <h3 className="font-bold text-physics-navy text-sm">🎓 Dành cho Học sinh:</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Chọn khối lớp (10, 11 hoặc 12) trên thanh điều hướng để mở danh mục bài học.</li>
                <li>Đọc kĩ các thẻ: Mục tiêu, Kiến thức trọng tâm, Công thức KaTeX và Lỗi sai thường gặp.</li>
                <li>Tương tác trực tiếp với các mô phỏng thí nghiệm để tự rút ra quy luật Vật lí.</li>
                <li>Tự làm bài tập luyện tập và mở hướng dẫn giải chi tiết để đối chiếu kết quả.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-teal-800 text-sm">👨‍🏫 Dành cho Giáo viên:</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Bấm vào nút <strong>"Khu vực giáo viên"</strong> ở góc phải để mở bảng điều khiển quản trị.</li>
                <li>Tạo học liệu mới bằng 3 cách: Tải tệp lên, Dán liên kết (YouTube, PhET, Canva) hoặc Soạn nội dung.</li>
                <li>Một học liệu có thể liên kết đồng thời với nhiều bài học khác nhau.</li>
                <li>Bật <strong>"Chế độ trình chiếu"</strong> khi giảng dạy trực tiếp trên lớp với màn hình tương tác.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
