import React, { useState } from 'react';
import { Chapter, GradeLevel, Lesson, Resource, TextbookInfo } from '../types';
import { matchesSearch } from '../utils/vietnameseSearch';

interface GradePageProps {
  grade: GradeLevel;
  chapters: Chapter[];
  lessons: Lesson[];
  resources: Resource[];
  textbooks: TextbookInfo[];
  onSelectLesson: (lesson: Lesson) => void;
  onOpenResource: (resource: Resource) => void;
}

export const GradePage: React.FC<GradePageProps> = ({
  grade,
  chapters,
  lessons,
  resources,
  textbooks,
  onSelectLesson,
  onOpenResource,
}) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>('all');
  const [selectedTextbook, setSelectedTextbook] = useState<string>('ket_noi_tri_thuc');
  const [selectedResourceType, setSelectedResourceType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Chapters for this grade
  const gradeChapters = chapters.filter(c => c.grade === grade);
  const regularChapters = gradeChapters.filter(c => !c.isSpecialTopic);
  const specialTopicChapters = gradeChapters.filter(c => c.isSpecialTopic);

  // Filter lessons
  const filteredLessons = lessons.filter(l => {
    if (l.grade !== grade) return false;
    // Only published lessons for public grade view
    if (l.status !== 'published') return false;
    if (selectedChapterId !== 'all' && l.chapterId !== selectedChapterId) return false;
    if (selectedTextbook !== 'all' && l.textbookId !== selectedTextbook) return false;
    if (searchQuery.trim()) {
      const matchTitle = matchesSearch(l.title, searchQuery);
      const matchChapter = matchesSearch(l.chapterName, searchQuery);
      const matchConcept = l.keyKnowledge.concepts.some(c => matchesSearch(c, searchQuery));
      if (!matchTitle && !matchChapter && !matchConcept) return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-physics-dark to-physics-navy rounded-2xl p-6 sm:p-8 text-white shadow-lg mb-8 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-400/30">
            Chương trình GDPT 2018
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-2 mb-2">
            Không gian học tập Vật lí {grade}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {grade === 10 && 'Khám phá thế giới Cơ học: Động học, Động lực học Newton, Năng lượng và Chuyển động của các vật thể.'}
            {grade === 11 && 'Khám phá Dao động cơ, Sóng cơ & Sóng âm, Điện trường và Các định luật về Dòng điện.'}
            {grade === 12 && 'Khám phá Vật lí nhiệt, Thuyết động học phân tử, Khí lí tưởng, Từ trường và Vật lí hạt nhân.'}
          </p>
        </div>
        <div className="absolute right-4 -bottom-6 text-8xl opacity-10 select-none font-black">
          {grade}
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Search box */}
          <div className="relative">
            <input
              type="text"
              placeholder={`Tìm bài học, công thức lớp ${grade}...`}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full text-xs sm:text-sm border border-slate-300 rounded-lg pl-9 pr-3 py-2 focus:ring-2 focus:ring-physics-teal focus:outline-none"
            />
            <span className="absolute left-3 top-2.5 text-slate-400 text-sm">🔍</span>
          </div>

          {/* Textbook selector */}
          <div>
            <select
              value={selectedTextbook}
              onChange={e => setSelectedTextbook(e.target.value)}
              className="w-full text-xs sm:text-sm border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-physics-teal focus:outline-none text-slate-700 font-medium"
            >
              <option value="all">Tất cả bộ sách</option>
              {textbooks.map(tb => (
                <option key={tb.id} value={tb.id}>
                  Bộ sách: {tb.name}
                </option>
              ))}
            </select>
          </div>

          {/* Resource Type filter */}
          <div>
            <select
              value={selectedResourceType}
              onChange={e => setSelectedResourceType(e.target.value)}
              className="w-full text-xs sm:text-sm border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-physics-teal focus:outline-none text-slate-700 font-medium"
            >
              <option value="all">Tất cả loại học liệu</option>
              <option value="experiment">Thí nghiệm & Mô phỏng</option>
              <option value="video">Video bài học & Thí nghiệm</option>
              <option value="document">Tài liệu & Slide Canva/PPTX</option>
            </select>
          </div>
        </div>
      </div>

      {/* Layout: Left Sidebar (Topics) + Right Area (Lessons & Special Topics) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar: Chapters/Topics */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sticky top-20">
            <h3 className="font-bold text-physics-dark text-sm mb-3 flex items-center justify-between">
              <span>📚 Danh mục chủ đề</span>
              <span className="text-[11px] text-teal-600 font-normal">Mẫu khởi tạo</span>
            </h3>

            <div className="space-y-1">
              <button
                onClick={() => setSelectedChapterId('all')}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between ${
                  selectedChapterId === 'all'
                    ? 'bg-physics-navy text-white shadow-sm'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>Tất cả các chủ đề</span>
                <span className="text-[10px] opacity-80">{lessons.filter(l => l.grade === grade && l.status === 'published').length}</span>
              </button>

              {regularChapters.map(ch => {
                const count = lessons.filter(l => l.chapterId === ch.id && l.status === 'published').length;
                return (
                  <button
                    key={ch.id}
                    onClick={() => setSelectedChapterId(ch.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                      selectedChapterId === ch.id
                        ? 'bg-physics-navy text-white shadow-sm font-semibold'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="truncate mr-2">{ch.order}. {ch.name}</span>
                    <span className="text-[10px] opacity-75">{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Special Topic Section in Sidebar */}
            {specialTopicChapters.length > 0 && (
              <div className="mt-4 pt-3 border-t border-slate-200">
                <h4 className="text-[11px] font-bold uppercase text-slate-500 mb-2">
                  Chuyên đề học tập riêng
                </h4>
                {specialTopicChapters.map(ch => (
                  <button
                    key={ch.id}
                    onClick={() => setSelectedChapterId(ch.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                      selectedChapterId === ch.id
                        ? 'bg-teal-700 text-white font-semibold'
                        : 'text-teal-900 bg-teal-50/70 hover:bg-teal-100'
                    }`}
                  >
                    <span className="truncate">🌟 {ch.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Main Area: Lesson Cards */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-800">
              Danh sách bài học ({filteredLessons.length})
            </h2>
            <span className="text-xs text-slate-500">
              Lấy bài học làm trung tâm
            </span>
          </div>

          {filteredLessons.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center border border-slate-200">
              <span className="text-4xl">🔍</span>
              <p className="mt-3 text-slate-600 font-medium text-sm">
                Không tìm thấy bài học nào phù hợp với bộ lọc hiện tại.
              </p>
              <button
                onClick={() => {
                  setSelectedChapterId('all');
                  setSearchQuery('');
                  setSelectedResourceType('all');
                }}
                className="mt-3 text-xs text-physics-teal font-semibold hover:underline"
              >
                Đặt lại bộ lọc
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredLessons.map(lesson => {
                const linkedCount = resources.filter(r => 
                  lesson.linkedResourceIds.includes(r.id) || r.linkedLessonIds.includes(lesson.id)
                ).length;

                return (
                  <div
                    key={lesson.id}
                    className="bg-white rounded-xl shadow-sm border border-slate-200 hover:border-physics-teal hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
                  >
                    <div className="p-5">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold text-physics-navy bg-blue-50 px-2 py-0.5 rounded">
                          {lesson.chapterName}
                        </span>
                        {lesson.isSample && (
                          <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                            Minh họa
                          </span>
                        )}
                      </div>

                      <h3
                        onClick={() => onSelectLesson(lesson)}
                        className="text-base font-bold text-physics-dark hover:text-physics-teal cursor-pointer mb-2 transition-colors leading-snug"
                      >
                        {lesson.title}
                      </h3>

                      <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                        {lesson.objectives.knowledge[0] || 'Mục tiêu bài học...'}
                      </p>

                      <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <div className="flex items-center justify-between">
                          <span>📐 Công thức trọng tâm:</span>
                          <span className="font-semibold text-slate-700">{lesson.keyKnowledge.formulas.length} công thức</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>⚡ Thí nghiệm & Mô phỏng:</span>
                          <span className="font-semibold text-slate-700">Tích hợp tương tác</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>❓ Bài tập luyện tập:</span>
                          <span className="font-semibold text-slate-700">{lesson.practiceExercises.length} câu</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-teal-700 font-medium">
                        🔗 {linkedCount} học liệu liên kết
                      </span>
                      <button
                        onClick={() => onSelectLesson(lesson)}
                        className="px-3.5 py-1.5 bg-physics-navy hover:bg-physics-blue text-white rounded-lg font-semibold transition-colors shadow-sm"
                      >
                        Học bài ngay →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
