import React, { useState } from 'react';
import { Lesson, Resource } from '../types';
import { MathFormula } from './MathFormula';
import { TextWithKaTeX } from './TextWithKaTeX';
import { InteractiveSimulator } from './InteractiveSimulators';
import { parseEmbedUrl } from '../utils/embedHelpers';
import { ReportModal } from './ReportModal';
import { PresentationMode } from './PresentationMode';

interface LessonDetailProps {
  lesson: Lesson;
  allResources: Resource[];
  onBack: () => void;
  onOpenResource: (resource: Resource) => void;
}

export const LessonDetail: React.FC<LessonDetailProps> = ({
  lesson,
  allResources,
  onBack,
  onOpenResource,
}) => {
  const [activeTab, setActiveTab] = useState<'objectives' | 'knowledge' | 'illustrations' | 'experiments' | 'videos' | 'practice' | 'documents'>('knowledge');
  const [showPresentation, setShowPresentation] = useState(false);
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [reportingResource, setReportingResource] = useState<{ id: string; title: string } | null>(null);
  
  // MCQ state
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [mcqResults, setMcqResults] = useState<Record<string, 'correct' | 'incorrect'>>({});

  // Filter linked resources for this lesson
  const linkedResources = allResources.filter(r => 
    lesson.linkedResourceIds.includes(r.id) || r.linkedLessonIds.includes(lesson.id)
  );

  const experimentResources = linkedResources.filter(r => r.type === 'experiment' || r.type === 'simulation');
  const videoResources = linkedResources.filter(r => r.type === 'video_experiment' || r.type === 'video_lesson');
  const documentResources = linkedResources.filter(r => r.type === 'document' || r.type === 'presentation' || r.type === 'worksheet');

  const toggleSolution = (exId: string) => {
    setRevealedSolutions(prev => ({
      ...prev,
      [exId]: !prev[exId],
    }));
  };

  const handleOptionSelect = (exId: string, option: string, correctAnswer: string | undefined) => {
    setSelectedOptions(prev => ({ ...prev, [exId]: option }));
    if (correctAnswer) {
      setMcqResults(prev => ({
        ...prev,
        [exId]: option.startsWith(correctAnswer.charAt(0)) || option === correctAnswer ? 'correct' : 'incorrect'
      }));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Back button and Meta */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <button
          onClick={onBack}
          className="inline-flex items-center text-xs font-semibold text-physics-navy hover:text-physics-teal transition-colors"
        >
          ← Quay lại danh sách bài học
        </button>

        <div className="flex items-center space-x-2">
          {lesson.isSample && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-300">
              ⚠ Nội dung minh họa – cần giáo viên rà soát
            </span>
          )}
          <button
            onClick={() => setShowPresentation(true)}
            className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-sm transition-all"
          >
            <span>📺</span>
            <span>Chế độ trình chiếu (Esc)</span>
          </button>
        </div>
      </div>

      {/* Lesson Header Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-blue-100 text-physics-navy">
            Vật lí {lesson.grade}
          </span>
          <span className="text-xs text-slate-500">•</span>
          <span className="text-xs font-medium text-slate-600">
            {lesson.chapterName}
          </span>
          <span className="text-xs text-slate-500">•</span>
          <span className="text-xs text-slate-500">
            Bộ sách: Kết nối tri thức với cuộc sống
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-physics-dark tracking-tight mb-2">
          {lesson.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
          <div className="flex items-center space-x-3">
            <span>Biên soạn: <strong className="text-slate-700">{lesson.authorName}</strong></span>
            <span>•</span>
            <span>Cập nhật: {new Date(lesson.updatedAt).toLocaleDateString('vi-VN')}</span>
          </div>
          <span className="text-teal-600 font-medium">
            {linkedResources.length} học liệu liên kết
          </span>
        </div>
      </div>

      {/* Navigation Tabs (Section 5: 7 tabs) */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-6 overflow-hidden">
        <div className="flex border-b border-slate-200 overflow-x-auto text-xs sm:text-sm font-medium scrollbar-thin">
          <button
            onClick={() => setActiveTab('objectives')}
            className={`px-4 py-3 border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'objectives'
                ? 'border-physics-navy text-physics-navy font-bold bg-blue-50/50'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            🎯 1. Mục tiêu
          </button>
          <button
            onClick={() => setActiveTab('knowledge')}
            className={`px-4 py-3 border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'knowledge'
                ? 'border-physics-navy text-physics-navy font-bold bg-blue-50/50'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            📐 2. Kiến thức trọng tâm
          </button>
          <button
            onClick={() => setActiveTab('illustrations')}
            className={`px-4 py-3 border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'illustrations'
                ? 'border-physics-navy text-physics-navy font-bold bg-blue-50/50'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            🖼 3. Minh họa
          </button>
          <button
            onClick={() => setActiveTab('experiments')}
            className={`px-4 py-3 border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'experiments'
                ? 'border-physics-navy text-physics-navy font-bold bg-blue-50/50'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            ⚡ 4. Thí nghiệm – Mô phỏng ({experimentResources.length})
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-4 py-3 border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'videos'
                ? 'border-physics-navy text-physics-navy font-bold bg-blue-50/50'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            🎬 5. Video ({videoResources.length})
          </button>
          <button
            onClick={() => setActiveTab('practice')}
            className={`px-4 py-3 border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'practice'
                ? 'border-physics-navy text-physics-navy font-bold bg-blue-50/50'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            ❓ 6. Luyện tập ({lesson.practiceExercises.length})
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`px-4 py-3 border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'documents'
                ? 'border-physics-navy text-physics-navy font-bold bg-blue-50/50'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            📁 7. Tài liệu & Slide ({documentResources.length})
          </button>
        </div>

        {/* Tab Content Panes */}
        <div className="p-6">
          {/* TAB 1: MỤC TIÊU */}
          {activeTab === 'objectives' && (
            <div className="space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-physics-dark text-base mb-3 flex items-center gap-2">
                  <span className="text-blue-600">📘</span> Yêu cầu cần đạt về Kiến thức
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                  {lesson.objectives.knowledge.map((k, i) => (
                    <li key={i}>{k}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-physics-dark text-base mb-3 flex items-center gap-2">
                  <span className="text-teal-600">🛠</span> Kĩ năng thực hành & Tư duy khoa học
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                  {lesson.objectives.skills.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-physics-dark text-base mb-3 flex items-center gap-2">
                  <span className="text-emerald-600">🌟</span> Kết quả học tập mong đợi
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                  {lesson.objectives.expectedOutcomes.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: KIẾN THỨC TRỌNG TÂM */}
          {activeTab === 'knowledge' && (
            <div className="space-y-8">
              {/* Khái niệm */}
              <div>
                <h3 className="text-base font-bold text-physics-dark mb-3 flex items-center gap-2 border-b pb-2">
                  <span className="text-blue-600">💡</span> 1. Khái niệm cốt lõi
                </h3>
                <ul className="space-y-2 pl-2">
                  {lesson.keyKnowledge.concepts.map((c, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-700 leading-relaxed">
                      <span className="text-physics-teal font-bold mr-2">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Định luật */}
              {lesson.keyKnowledge.laws.length > 0 && (
                <div>
                  <h3 className="text-base font-bold text-physics-dark mb-3 flex items-center gap-2 border-b pb-2">
                    <span className="text-teal-600">⚖</span> 2. Định luật Vật lí
                  </h3>
                  <div className="space-y-2">
                    {lesson.keyKnowledge.laws.map((l, i) => (
                      <div key={i} className="p-3 bg-blue-50/70 border-l-4 border-physics-navy rounded-r-lg text-sm text-slate-800">
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bảng công thức KaTeX chuẩn hóa */}
              <div>
                <h3 className="text-base font-bold text-physics-dark mb-3 flex items-center gap-2 border-b pb-2">
                  <span className="text-indigo-600">📐</span> 3. Hệ thống công thức & Ý nghĩa đại lượng
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {lesson.keyKnowledge.formulas.map((form, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:shadow-sm transition-shadow flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-physics-navy text-sm">{form.name}</h4>
                          <span className="text-[11px] px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-mono">
                            SI
                          </span>
                        </div>
                        <div className="bg-white rounded-lg p-3 my-2 text-center border border-slate-200">
                          <MathFormula latex={form.latex} displayMode={true} className="text-lg text-physics-dark" />
                        </div>
                      </div>
                      <div className="space-y-1 text-xs text-slate-600 mt-2 pt-2 border-t border-slate-200">
                        <p><strong className="text-slate-800">Ý nghĩa:</strong> {form.explanation}</p>
                        <p><strong className="text-slate-800">Đơn vị:</strong> {form.unit}</p>
                        <p><strong className="text-slate-800">Điều kiện:</strong> {form.applicability}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lỗi thường gặp */}
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-5">
                <h3 className="font-bold text-rose-800 text-sm mb-3 flex items-center gap-2">
                  <span>⚠</span> Lỗi sai phổ biến học sinh thường mắc phải
                </h3>
                <ul className="space-y-2 list-disc pl-5 text-xs sm:text-sm text-rose-950">
                  {lesson.keyKnowledge.commonErrors.map((err, i) => (
                    <li key={i}>{err}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: MINH HỌA */}
          {activeTab === 'illustrations' && (
            <div className="space-y-6">
              {lesson.illustrations.length === 0 ? (
                <div className="text-center py-10 text-slate-500 text-sm">
                  Chưa có hình ảnh minh họa cho bài học này.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {lesson.illustrations.map(ill => (
                    <div key={ill.id} className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                      <img
                        src={ill.url}
                        alt={ill.title}
                        className="w-full h-56 object-cover"
                        loading="lazy"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-physics-dark text-sm mb-1">{ill.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{ill.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: THÍ NGHIỆM - MÔ PHỎNG */}
          {activeTab === 'experiments' && (
            <div className="space-y-6">
              {/* Live interactive simulator embedded directly inside lesson! */}
              <div className="mb-6">
                <h3 className="text-base font-bold text-physics-dark mb-2 flex items-center gap-2">
                  <span>🎮</span> Mô phỏng trực quan tương tác tại lớp:
                </h3>
                {lesson.id === 'lesson_10_1' && <InteractiveSimulator type="motion10" />}
                {lesson.id === 'lesson_10_2' && <InteractiveSimulator type="newton10" />}
                {lesson.id === 'lesson_11_1' && <InteractiveSimulator type="oscillator11" />}
                {lesson.id === 'lesson_11_2' && <InteractiveSimulator type="ohm11" />}
                {lesson.id === 'lesson_12_1' && <InteractiveSimulator type="heat12" />}
                {lesson.id === 'lesson_12_2' && <InteractiveSimulator type="gas12" />}
              </div>

              <h3 className="text-base font-bold text-physics-dark mb-3 flex items-center gap-2 border-b pb-2">
                <span>🔬</span> Danh mục học liệu thí nghiệm liên kết ({experimentResources.length}):
              </h3>

              {experimentResources.length === 0 ? (
                <p className="text-xs text-slate-500 italic">Chưa có thí nghiệm liên kết.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {experimentResources.map(res => (
                    <div
                      key={res.id}
                      className="bg-white border border-slate-200 rounded-xl p-4 hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-start gap-2 mb-2">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                            res.type === 'simulation' ? 'bg-teal-100 text-teal-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {res.type === 'simulation' ? 'Mô phỏng tương tác' : 'Thí nghiệm thực'}
                          </span>
                          <button
                            onClick={() => setReportingResource({ id: res.id, title: res.title })}
                            className="text-[11px] text-slate-400 hover:text-rose-600"
                            title="Báo lỗi học liệu"
                          >
                            🚩 Báo lỗi
                          </button>
                        </div>
                        <h4 className="font-bold text-slate-800 text-sm mb-1 line-clamp-2">{res.title}</h4>
                        <p className="text-xs text-slate-500 line-clamp-2 mb-3">{res.description}</p>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                        <span className="text-slate-500 truncate max-w-[150px]">{res.author}</span>
                        <button
                          onClick={() => onOpenResource(res)}
                          className="px-3 py-1 bg-physics-navy hover:bg-physics-blue text-white rounded font-medium transition-colors"
                        >
                          Mở chi tiết →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 5: VIDEO */}
          {activeTab === 'videos' && (
            <div className="space-y-6">
              {videoResources.length === 0 ? (
                <div className="text-center py-10 text-slate-500 text-sm">
                  Chưa có video liên kết với bài học này.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {videoResources.map(vid => {
                    const embed = parseEmbedUrl(vid.url);
                    return (
                      <div key={vid.id} className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
                        <div>
                          {embed.canEmbed && embed.embedUrl ? (
                            <div className="aspect-video w-full bg-black">
                              <iframe
                                src={embed.embedUrl}
                                title={vid.title}
                                className="w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          ) : (
                            <div className="aspect-video w-full bg-slate-800 flex items-center justify-center p-4 text-center">
                              <div>
                                <p className="text-slate-300 text-xs mb-2">Video nguồn liên kết ngoài</p>
                                <a
                                  href={vid.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="px-3 py-1.5 bg-teal-600 text-white rounded text-xs font-semibold hover:bg-teal-500"
                                >
                                  Mở nguồn gốc ↗
                                </a>
                              </div>
                            </div>
                          )}

                          <div className="p-4">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-800">
                                {vid.type === 'video_experiment' ? 'Video thí nghiệm thực hành' : 'Video bài giảng'}
                              </span>
                              {vid.duration && (
                                <span className="text-[11px] font-mono text-slate-500">
                                  ⏱ {vid.duration}
                                </span>
                              )}
                            </div>
                            <h4 className="font-bold text-physics-dark text-sm mb-1">{vid.title}</h4>
                            <p className="text-xs text-slate-600 leading-relaxed mb-3">{vid.description}</p>

                            {vid.guidingQuestions && vid.guidingQuestions.length > 0 && (
                              <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs">
                                <p className="font-bold text-physics-navy mb-1">Câu hỏi định hướng xem video:</p>
                                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                                  {vid.guidingQuestions.map((q, i) => (
                                    <li key={i}>{q}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="p-3 bg-slate-100 border-t border-slate-200 flex justify-between items-center text-xs">
                          <span className="text-slate-500">{vid.source}</span>
                          <button
                            onClick={() => setReportingResource({ id: vid.id, title: vid.title })}
                            className="text-slate-400 hover:text-rose-600"
                          >
                            🚩 Báo lỗi video
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* TAB 6: LUYỆN TẬP */}
          {activeTab === 'practice' && (
            <div className="space-y-6">
              {lesson.practiceExercises.length === 0 ? (
                <div className="text-center py-10 text-slate-500 text-sm">
                  Chưa có bài tập luyện tập cho bài học này.
                </div>
              ) : (
                <div className="space-y-4">
                  {lesson.practiceExercises.map((ex, idx) => {
                    const isRevealed = revealedSolutions[ex.id];
                    return (
                      <div key={ex.id} className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                          <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-physics-navy">
                            {ex.type === 'mcq' ? 'Trắc nghiệm khách quan' : 'Bài tập tự luận'}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">Câu #{idx + 1}</span>
                        </div>

                        <p className="font-medium text-slate-800 text-sm mb-3 leading-relaxed">
                          {ex.question}
                        </p>

                        {/* MCQ options if any */}
                        {ex.options && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                            {ex.options.map((opt, i) => {
                              const isSelected = selectedOptions[ex.id] === opt;
                              const result = mcqResults[ex.id];
                              let buttonClass = "p-2.5 rounded-lg border text-xs text-left transition-colors cursor-pointer ";
                              
                              if (isSelected) {
                                if (result === 'correct') {
                                  buttonClass += "bg-emerald-100 border-emerald-500 text-emerald-800 font-bold";
                                } else if (result === 'incorrect') {
                                  buttonClass += "bg-rose-100 border-rose-500 text-rose-800 font-bold";
                                } else {
                                  buttonClass += "bg-blue-100 border-blue-500 text-blue-800 font-bold";
                                }
                              } else {
                                buttonClass += "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300";
                              }

                              return (
                                <button
                                  key={i}
                                  onClick={() => handleOptionSelect(ex.id, opt, ex.correctAnswer)}
                                  className={buttonClass}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {/* Show / Hide Answer Guide Button */}
                        <div className="pt-2">
                          {ex.isPublishedGuide ? (
                            <div>
                              <button
                                onClick={() => toggleSolution(ex.id)}
                                className="text-xs font-semibold text-physics-navy hover:text-physics-teal transition-colors flex items-center gap-1"
                              >
                                <span>{isRevealed ? '▼ Ẩn hướng dẫn giải & đáp án' : '▶ Mở hướng dẫn giải & đáp án'}</span>
                              </button>

                              {isRevealed && (
                                <div className="mt-3 p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-950 animate-fadeIn">
                                  {ex.correctAnswer && (
                                    <p className="font-bold text-emerald-800 mb-1">
                                      Đáp án đúng: {ex.correctAnswer}
                                    </p>
                                  )}
                                  <p className="font-semibold text-emerald-900 mb-1">Hướng dẫn giải chi tiết:</p>
                                  <TextWithKaTeX text={ex.solutionGuide} />
                                </div>
                              )}
                            </div>
                          ) : (
                            <p className="text-xs text-slate-400 italic">
                              (Hướng dẫn giải đang được giáo viên bảo lưu)
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* TAB 7: TÀI LIỆU & BÀI TRÌNH CHIẾU CANVA / POWERPOINT */}
          {activeTab === 'documents' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-900 flex items-start gap-2">
                <span>💡</span>
                <p>
                  Hỗ trợ xem trực tiếp tài liệu PDF, hình ảnh, bài trình chiếu nhúng từ <strong>Canva</strong> và <strong>PowerPoint Online / OneDrive</strong>. Nhấn vào nút "Xem trước / Trình chiếu" để mở ngay.
                </p>
              </div>

              {documentResources.length === 0 ? (
                <div className="text-center py-10 text-slate-500 text-sm">
                  Chưa có tài liệu hoặc bài trình chiếu liên kết.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {documentResources.map(doc => {
                    const embed = parseEmbedUrl(doc.url);
                    return (
                      <div
                        key={doc.id}
                        className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-start gap-2 mb-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-100 text-slate-700">
                              {doc.fileType || 'tài liệu'}
                            </span>
                            <button
                              onClick={() => setReportingResource({ id: doc.id, title: doc.title })}
                              className="text-[11px] text-slate-400 hover:text-rose-600"
                              title="Báo lỗi học liệu"
                            >
                              🚩 Báo lỗi
                            </button>
                          </div>

                          <h4 className="font-bold text-physics-dark text-sm mb-1">{doc.title}</h4>
                          <p className="text-xs text-slate-500 mb-3 line-clamp-2">{doc.description}</p>

                          {/* Canva / PowerPoint Embed preview if embedded type */}
                          {embed.canEmbed && embed.embedUrl && (
                            <div className="mb-3 rounded-lg overflow-hidden border border-slate-200 bg-slate-900 aspect-video">
                              <iframe
                                src={embed.embedUrl}
                                title={doc.title}
                                className="w-full h-full border-0"
                                allowFullScreen
                              />
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                          <span className="text-slate-500">
                            {doc.fileSize ? `${(doc.fileSize / 1024 / 1024).toFixed(1)} MB` : doc.source}
                          </span>
                          <div className="flex space-x-2">
                            {doc.url ? (
                              <a
                                href={doc.url}
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-1 bg-teal-600 hover:bg-teal-500 text-white rounded font-medium transition-colors"
                              >
                                Mở tệp / Bản gốc ↗
                              </a>
                            ) : (
                              <button
                                onClick={() => onOpenResource(doc)}
                                className="px-3 py-1 bg-physics-navy text-white rounded font-medium"
                              >
                                Xem chi tiết
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Presentation Mode Overlay */}
      {showPresentation && (
        <PresentationMode
          lesson={lesson}
          activeTab={activeTab}
          onClose={() => setShowPresentation(false)}
        />
      )}

      {/* Report Modal */}
      {reportingResource && (
        <ReportModal
          isOpen={Boolean(reportingResource)}
          targetTitle={reportingResource.title}
          onClose={() => setReportingResource(null)}
          onSubmit={(type, desc) => {
            alert(`Đã ghi nhận báo cáo lỗi cho học liệu "${reportingResource.title}". Cảm ơn đóng góp của bạn!`);
          }}
        />
      )}
    </div>
  );
};
