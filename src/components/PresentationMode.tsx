import React, { useEffect } from 'react';
import { Lesson } from '../types';
import { MathFormula } from './MathFormula';
import { InteractiveSimulator } from './InteractiveSimulators';

interface PresentationModeProps {
  lesson: Lesson;
  activeTab: string;
  onClose: () => void;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({
  lesson,
  activeTab,
  onClose,
}) => {
  // Listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col p-6 overflow-y-auto">
      {/* Top Presentation Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div className="flex items-center space-x-3">
          <span className="px-3 py-1 bg-teal-600 text-white font-bold rounded-lg text-sm">
            Vật lí {lesson.grade}
          </span>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {lesson.title}
            </h1>
            <p className="text-xs text-slate-400">
              Chương: {lesson.chapterName} • Chế độ trình chiếu lớp học (Bấm phím Esc hoặc nút Thoát)
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-lg text-sm flex items-center space-x-1 transition-colors shadow-lg"
        >
          <span>✕</span>
          <span>Thoát trình chiếu (Esc)</span>
        </button>
      </div>

      {/* Main Large Content Area */}
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center py-4">
        {/* Tab 1: Kiến thức trọng tâm / Công thức */}
        {activeTab === 'knowledge' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-300 border-b border-slate-800 pb-2">
              📐 Hệ thống công thức & Kiến thức cốt lõi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lesson.keyKnowledge.formulas.map((f, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between"
                >
                  <p className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    {f.name}
                  </p>
                  <div className="py-4 my-2 bg-slate-950/80 rounded-xl flex items-center justify-center border border-slate-800/80">
                    <MathFormula latex={f.latex} displayMode={true} className="text-2xl text-teal-300" />
                  </div>
                  <div className="space-y-1 text-xs text-slate-400 mt-2">
                    <p><strong className="text-slate-300">Ý nghĩa:</strong> {f.explanation}</p>
                    <p><strong className="text-slate-300">Đơn vị:</strong> {f.unit}</p>
                    <p><strong className="text-slate-300">Điều kiện:</strong> {f.applicability}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl mt-4">
              <h3 className="text-lg font-bold text-amber-400 mb-3">
                ⚠ Lỗi tư duy học sinh thường gặp:
              </h3>
              <ul className="space-y-2 text-sm text-slate-300 list-disc pl-5">
                {lesson.keyKnowledge.commonErrors.map((err, idx) => (
                  <li key={idx}>{err}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Tab 2: Thí nghiệm - Mô phỏng */}
        {activeTab === 'experiments' && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-teal-300">
              ⚡ Mô phỏng thí nghiệm tương tác trực tiếp
            </h2>
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800">
              {lesson.id === 'lesson_10_1' && <InteractiveSimulator type="motion10" />}
              {lesson.id === 'lesson_10_2' && <InteractiveSimulator type="newton10" />}
              {lesson.id === 'lesson_11_1' && <InteractiveSimulator type="oscillator11" />}
              {lesson.id === 'lesson_11_2' && <InteractiveSimulator type="ohm11" />}
              {lesson.id === 'lesson_12_1' && <InteractiveSimulator type="heat12" />}
              {lesson.id === 'lesson_12_2' && <InteractiveSimulator type="gas12" />}
            </div>
          </div>
        )}

        {/* Tab 3: Luyện tập & Thảo luận */}
        {activeTab === 'practice' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-300">
              ❓ Câu hỏi luyện tập & Thảo luận lớp học
            </h2>
            <div className="space-y-4">
              {lesson.practiceExercises.map((ex, idx) => (
                <div key={ex.id} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                  <p className="text-lg font-medium text-white mb-4">
                    <span className="text-teal-400 font-bold mr-2">Câu {idx + 1}:</span>
                    {ex.question}
                  </p>
                  {ex.options && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      {ex.options.map((opt, i) => (
                        <div
                          key={i}
                          className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-sm text-slate-200"
                        >
                          {opt}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="p-4 bg-teal-950/60 border border-teal-800/80 rounded-xl text-sm text-teal-200">
                    <p className="font-bold text-teal-400 mb-1">Đáp án & Phương pháp giải:</p>
                    <p>{ex.solutionGuide}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Default or other tabs */}
        {!['knowledge', 'experiments', 'practice'].includes(activeTab) && (
          <div className="text-center py-12 space-y-4">
            <div className="text-6xl text-teal-400">⚛</div>
            <h2 className="text-3xl font-bold text-white">{lesson.title}</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              {lesson.objectives.knowledge.join(' • ')}
            </p>
            <p className="text-sm text-slate-500">
              Chuyển sang thẻ "Kiến thức trọng tâm", "Mô phỏng" hoặc "Luyện tập" để trình chiếu nội dung chi tiết.
            </p>
          </div>
        )}
      </div>

      {/* Bottom status */}
      <div className="text-center text-xs text-slate-500 border-t border-slate-900 pt-3">
        Nhấn phím <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-300">Esc</kbd> trên bàn phím để trở về màn hình thường
      </div>
    </div>
  );
};
