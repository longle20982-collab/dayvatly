import React, { useState } from 'react';
import { GradeLevel, Resource } from '../types';
import { matchesSearch } from '../utils/vietnameseSearch';
import { parseEmbedUrl } from '../utils/embedHelpers';
import { InteractiveSimulator } from './InteractiveSimulators';
import { ReportModal } from './ReportModal';

interface ExperimentsPageProps {
  resources: Resource[];
  onSelectGrade: (grade: GradeLevel) => void;
}

export const ExperimentsPage: React.FC<ExperimentsPageProps> = ({ resources }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalExp, setActiveModalExp] = useState<Resource | null>(null);
  const [reportingItem, setReportingItem] = useState<{ id: string; title: string } | null>(null);

  const experimentResources = resources.filter(
    r => (r.type === 'experiment' || r.type === 'simulation' || r.type === 'video_experiment') && r.status === 'published'
  );

  const filteredExperiments = experimentResources.filter(exp => {
    if (selectedGrade !== 'all' && exp.grade.toString() !== selectedGrade) return false;
    if (selectedCategory !== 'all') {
      const cat = exp.experimentData?.category;
      if (selectedCategory === 'thí nghiệm thực' && cat !== 'thí nghiệm thực') return false;
      if (selectedCategory === 'mô phỏng tương tác' && cat !== 'mô phỏng tương tác' && exp.type !== 'simulation') return false;
      if (selectedCategory === 'video minh họa' && exp.type !== 'video_experiment') return false;
    }
    if (searchQuery.trim()) {
      const matchTitle = matchesSearch(exp.title, searchQuery);
      const matchDesc = matchesSearch(exp.description, searchQuery);
      const matchTags = exp.tags.some(t => matchesSearch(t, searchQuery));
      if (!matchTitle && !matchDesc && !matchTags) return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-physics-dark">
          Kho Thí nghiệm & Mô phỏng tương tác Vật lí
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Hệ thống thí nghiệm thực hành chuẩn hóa, mô phỏng ảo PhET và mô phỏng số học HTML5 từ lớp 10 đến lớp 12.
        </p>
      </div>

      {/* Filter bar */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            type="text"
            placeholder="Tìm kiếm thí nghiệm, dụng cụ đo, từ khóa..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="text-xs sm:text-sm border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-physics-teal focus:outline-none"
          />

          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="text-xs sm:text-sm border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-physics-teal focus:outline-none text-slate-700 font-medium"
          >
            <option value="all">Tất cả thể loại (Thực tế & Mô phỏng)</option>
            <option value="thí nghiệm thực">Thí nghiệm thực</option>
            <option value="mô phỏng tương tác">Mô phỏng tương tác</option>
            <option value="video minh họa">Video minh họa thực nghiệm</option>
          </select>

          <select
            value={selectedGrade}
            onChange={e => setSelectedGrade(e.target.value)}
            className="text-xs sm:text-sm border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-physics-teal focus:outline-none text-slate-700 font-medium"
          >
            <option value="all">Tất cả khối lớp</option>
            <option value="10">Vật lí 10 (Cơ học)</option>
            <option value="11">Vật lí 11 (Dao động, Điện)</option>
            <option value="12">Vật lí 12 (Nhiệt, Khí)</option>
          </select>
        </div>
      </div>

      {/* Experiment Cards Grid */}
      {filteredExperiments.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center border border-slate-200">
          <span className="text-4xl">🔬</span>
          <p className="mt-3 text-slate-600 font-medium text-sm">
            Không tìm thấy thí nghiệm nào phù hợp với tìm kiếm của bạn.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiments.map(exp => {
            const categoryLabel = exp.experimentData?.category || (exp.type === 'simulation' ? 'Mô phỏng tương tác' : 'Thí nghiệm thực');
            return (
              <div
                key={exp.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 text-physics-navy">
                      Lớp {exp.grade}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      categoryLabel === 'mô phỏng tương tác'
                        ? 'bg-teal-100 text-teal-800'
                        : categoryLabel === 'thí nghiệm thực'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {categoryLabel}
                    </span>
                  </div>

                  <h3
                    onClick={() => setActiveModalExp(exp)}
                    className="font-bold text-slate-800 hover:text-physics-teal cursor-pointer text-sm mb-2 leading-snug line-clamp-2"
                  >
                    {exp.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-3 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {exp.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 truncate max-w-[130px]">{exp.author}</span>
                  <button
                    onClick={() => setActiveModalExp(exp)}
                    className="px-3 py-1.5 bg-physics-navy hover:bg-physics-blue text-white rounded-lg font-semibold transition-colors shadow-sm"
                  >
                    Mở thực hành 🔬
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Comprehensive Experiment Modal (Section 6) */}
      {activeModalExp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-6 my-8 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-start pb-4 border-b border-slate-200">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-blue-100 text-physics-navy">
                    Vật lí {activeModalExp.grade}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-teal-100 text-teal-800 capitalize">
                    {activeModalExp.experimentData?.category || 'Mô phỏng'}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-physics-dark">
                  {activeModalExp.title}
                </h2>
              </div>
              <button
                onClick={() => setActiveModalExp(null)}
                className="text-slate-400 hover:text-slate-600 text-2xl font-bold ml-4"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="my-6 space-y-6 text-sm">
              {/* Interactive canvas / embed player */}
              {activeModalExp.embedType === 'custom_sim' && (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-800 text-xs mb-2">Thực hành mô phỏng số học:</h4>
                  {activeModalExp.id === 'res_sim_10_1' && <InteractiveSimulator type="motion10" />}
                  {activeModalExp.id === 'res_sim_11_1' && <InteractiveSimulator type="oscillator11" />}
                  {activeModalExp.id === 'res_sim_11_2' && <InteractiveSimulator type="ohm11" />}
                  {activeModalExp.id === 'res_sim_12_1' && <InteractiveSimulator type="heat12" />}
                  {activeModalExp.id === 'res_sim_12_2' && <InteractiveSimulator type="gas12" />}
                </div>
              )}

              {/* PhET Embed */}
              {activeModalExp.embedType === 'phet' && activeModalExp.url && (
                <div className="rounded-xl overflow-hidden border border-slate-300 shadow-inner">
                  <div className="aspect-video w-full">
                    <iframe
                      src={activeModalExp.url}
                      title={activeModalExp.title}
                      className="w-full h-full border-0"
                      allowFullScreen
                      sandbox="allow-scripts allow-same-origin allow-forms"
                    />
                  </div>
                  <div className="bg-slate-50 p-2.5 flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-mono">Nguồn: University of Colorado Boulder PhET</span>
                    <a
                      href={activeModalExp.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-teal-700 font-semibold hover:underline"
                    >
                      Mở nguồn gốc trên PhET ↗
                    </a>
                  </div>
                </div>
              )}

              {/* Purpose & Theory */}
              {activeModalExp.experimentData && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-4">
                      <h4 className="font-bold text-physics-navy text-xs uppercase mb-1">🎯 Mục đích thí nghiệm</h4>
                      <p className="text-slate-700 text-xs leading-relaxed">{activeModalExp.experimentData.purpose}</p>
                    </div>

                    <div className="bg-teal-50/60 border border-teal-200 rounded-xl p-4">
                      <h4 className="font-bold text-teal-900 text-xs uppercase mb-1">📐 Cơ sở lí thuyết</h4>
                      <p className="text-slate-700 text-xs leading-relaxed">{activeModalExp.experimentData.theory}</p>
                    </div>
                  </div>

                  {/* Assumptions & limits for simulations */}
                  {activeModalExp.experimentData.assumptionsAndLimits && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-950">
                      <strong className="text-amber-800">Giả định & Giới hạn của mô phỏng:</strong> {activeModalExp.experimentData.assumptionsAndLimits}
                    </div>
                  )}

                  {/* Equipment */}
                  {activeModalExp.experimentData.equipment && (
                    <div>
                      <h4 className="font-bold text-slate-800 text-xs uppercase mb-2">🧰 Dụng cụ thí nghiệm</h4>
                      <ul className="list-disc pl-5 space-y-1 text-xs text-slate-700">
                        {activeModalExp.experimentData.equipment.map((eq, i) => (
                          <li key={i}>{eq}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Steps */}
                  {activeModalExp.experimentData.steps && (
                    <div>
                      <h4 className="font-bold text-slate-800 text-xs uppercase mb-2">📋 Các bước tiến hành</h4>
                      <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-700">
                        {activeModalExp.experimentData.steps.map((st, i) => (
                          <li key={i}>{st}</li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* Sample Data Table */}
                  {activeModalExp.experimentData.sampleDataTable && (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-slate-800 text-xs uppercase">📊 Bảng số liệu mẫu & Xử lí số liệu</h4>
                        <button
                          onClick={() => alert(`Đã kích hoạt tải mẫu báo cáo: ${activeModalExp.experimentData?.downloadableTemplateName || 'Mau_bao_cao.xlsx'}`)}
                          className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-semibold rounded transition-colors"
                        >
                          Tải bảng mẫu (Excel) 📥
                        </button>
                      </div>
                      <div className="overflow-x-auto border border-slate-200 rounded-lg">
                        <table className="w-full text-xs text-left">
                          <thead className="bg-slate-100 text-slate-700 font-semibold">
                            <tr>
                              {activeModalExp.experimentData.sampleDataTable.headers.map((h, i) => (
                                <th key={i} className="p-2.5 border-b">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {activeModalExp.experimentData.sampleDataTable.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-slate-50 border-b last:border-0">
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="p-2.5 font-mono text-slate-600">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-2">
                        <strong>Hướng dẫn xử lí số liệu:</strong> {activeModalExp.experimentData.dataAnalysisGuide}
                      </p>
                    </div>
                  )}

                  {/* Safety & Common Mistakes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                      <h4 className="font-bold text-rose-800 text-xs uppercase mb-1">⚡ Lưu ý an toàn</h4>
                      <ul className="list-disc pl-5 space-y-1 text-xs text-rose-950">
                        {activeModalExp.experimentData.safetyNotes.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                      <h4 className="font-bold text-orange-800 text-xs uppercase mb-1">⚠ Lỗi thao tác thường gặp</h4>
                      <ul className="list-disc pl-5 space-y-1 text-xs text-orange-950">
                        {activeModalExp.experimentData.commonMistakes.map((m, i) => (
                          <li key={i}>{m}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-xs">
              <button
                onClick={() => setReportingItem({ id: activeModalExp.id, title: activeModalExp.title })}
                className="text-slate-400 hover:text-rose-600"
              >
                🚩 Báo lỗi thí nghiệm này
              </button>
              <button
                onClick={() => setActiveModalExp(null)}
                className="px-4 py-2 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700"
              >
                Đóng cửa sổ
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
            alert(`Đã gửi báo lỗi thí nghiệm "${reportingItem.title}". Cảm ơn bạn!`);
          }}
        />
      )}
    </div>
  );
};
