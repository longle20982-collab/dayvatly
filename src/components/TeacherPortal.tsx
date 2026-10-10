import React, { useState } from 'react';
import { Chapter, GradeLevel, Lesson, Resource, ResourceType, SiteSettings, TextbookInfo, UserProfile } from '../types';
import { simulateFileUpload } from '../services/firebase';
import { MathFormula } from './MathFormula';

interface TeacherPortalProps {
  currentUser: UserProfile;
  lessons: Lesson[];
  resources: Resource[];
  chapters: Chapter[];
  textbooks: TextbookInfo[];
  settings: SiteSettings;
  onSaveResource: (resource: Resource) => void;
  onSaveLesson: (lesson: Lesson) => void;
  onUpdateSettings: (newSettings: SiteSettings) => void;
  onSelectLesson: (lesson: Lesson) => void;
}

export const TeacherPortal: React.FC<TeacherPortalProps> = ({
  currentUser,
  lessons,
  resources,
  chapters,
  textbooks,
  settings,
  onSaveResource,
  onSaveLesson,
  onUpdateSettings,
  onSelectLesson,
}) => {
  const isTeacherOrAdmin = currentUser.role === 'teacher' || currentUser.role === 'admin';
  const isAdmin = currentUser.role === 'admin';

  // Active dashboard tab
  const [activeTab, setActiveTab] = useState<'lessons' | 'resources' | 'experiments' | 'videos' | 'documents' | 'settings'>('resources');

  // Form modal state
  const [editingResource, setEditingResource] = useState<Resource | null>(null);
  const [editingLesson, setEditingLesson] = useState<Lesson | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [resourceCreationMode, setResourceCreationMode] = useState<'upload' | 'link' | 'compose'>('link');

  // Upload simulation state
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  // Settings edit state
  const [tempSiteName, setTempSiteName] = useState(settings.siteName);
  const [tempAuthorLine, setTempAuthorLine] = useState(settings.authorLine);

  // Unsaved changes flag
  const [isFormDirty, setIsFormDirty] = useState(false);

  // Blank template for new resource
  const getEmptyResource = (): Resource => ({
    id: `res_${Date.now()}`,
    title: '',
    description: '',
    type: 'experiment',
    grade: 10,
    chapterId: chapters[0]?.id || 'c10_1',
    linkedLessonIds: [],
    textbookId: 'ket_noi_tri_thuc',
    author: currentUser.name,
    authorId: currentUser.id,
    source: 'Tổ Vật lí THPT',
    licenseInfo: 'Tự do cho mục đích giáo dục',
    tags: [],
    status: 'draft',
    reviewStatus: 'draft',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    url: '',
    fileType: 'pdf',
  });

  const getEmptyLesson = (): Lesson => ({
    id: `les_${Date.now()}`,
    grade: 10,
    chapterId: chapters[0]?.id || 'c10_1',
    chapterName: chapters[0]?.name || 'Chương 1',
    title: '',
    order: 1,
    textbookId: 'ket_noi_tri_thuc',
    status: 'draft',
    authorId: currentUser.id,
    authorName: currentUser.name,
    isSpecialTopic: false,
    isSample: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    objectives: { knowledge: [], skills: [], expectedOutcomes: [] },
    keyKnowledge: { concepts: [], laws: [], formulas: [], commonErrors: [] },
    illustrations: [],
    practiceExercises: [],
    linkedResourceIds: [],
  });

  const handleStartCreate = () => {
    setEditingResource(getEmptyResource());
    setIsCreatingNew(true);
    setIsFormDirty(false);
    setUploadProgress(null);
    setUploadError(null);
    setUploadedFileName(null);
  };

  const handleStartCreateLesson = () => {
    setEditingLesson(getEmptyLesson());
    setIsCreatingNew(true);
    setIsFormDirty(false);
  };

  const handleStartEdit = (res: Resource) => {
    if (!isAdmin && res.authorId !== currentUser.id) {
      alert('Quyền hạn: Bạn chỉ có thể chỉnh sửa học liệu do chính mình tạo ra. Chỉ Quản trị viên mới có quyền sửa học liệu của giáo viên khác.');
      return;
    }
    setEditingResource({ ...res });
    setIsCreatingNew(false);
    setIsFormDirty(false);
    setUploadProgress(null);
    setUploadError(null);
  };

  const handleStartEditLesson = (les: Lesson) => {
    if (!isAdmin && les.authorId !== currentUser.id) {
      alert('Quyền hạn: Bạn chỉ có thể chỉnh sửa bài học do chính mình tạo ra.');
      return;
    }
    setEditingLesson({ ...les });
    setIsCreatingNew(false);
    setIsFormDirty(false);
  };

  const handleCloseModal = () => {
    if (isFormDirty) {
      if (!window.confirm('Bạn có thay đổi chưa lưu trong biểu mẫu. Bạn có chắc chắn muốn đóng mà không lưu không?')) {
        return;
      }
    }
    setEditingResource(null);
    setEditingLesson(null);
    setIsCreatingNew(false);
    setIsFormDirty(false);
  };

  const handleFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingResource) return;

    setUploadProgress(0);
    setUploadError(null);
    setUploadedFileName(file.name);

    try {
      const result = await simulateFileUpload(file, progress => {
        setUploadProgress(progress);
      });

      // Infer file type from extension
      const lower = file.name.toLowerCase();
      let fType: Resource['fileType'] = 'pdf';
      if (lower.endsWith('.pptx') || lower.endsWith('.ppt')) fType = 'pptx';
      else if (lower.endsWith('.docx') || lower.endsWith('.doc')) fType = 'docx';
      else if (lower.endsWith('.xlsx') || lower.endsWith('.xls')) fType = 'xlsx';
      else if (lower.endsWith('.mp4') || lower.endsWith('.webm')) fType = 'video';
      else if (lower.endsWith('.png') || lower.endsWith('.jpg') || lower.endsWith('.jpeg')) fType = 'image';

      setEditingResource({
        ...editingResource,
        url: result.url,
        fileType: fType,
        fileSize: result.size,
      });
      setIsFormDirty(true);
    } catch (err: any) {
      setUploadError(err.message || 'Lỗi khi tải tệp lên');
      setUploadProgress(null);
    }
  };

  const handleSaveSubmit = (targetStatus: Resource['status']) => {
    if (!editingResource) return;

    // Field validations
    if (!editingResource.title.trim()) {
      alert('Vui lòng nhập Tiêu đề học liệu.');
      return;
    }
    if (!editingResource.description.trim()) {
      alert('Vui lòng nhập Mô tả học liệu.');
      return;
    }

    const updated: Resource = {
      ...editingResource,
      status: targetStatus,
      reviewStatus: targetStatus === 'published' ? 'approved' : targetStatus === 'pending_review' ? 'pending' : 'draft',
      updatedAt: new Date().toISOString(),
    };

    onSaveResource(updated);
    setIsFormDirty(false);
    setEditingResource(null);
    setIsCreatingNew(false);
  };

  const handleSaveLessonSubmit = (targetStatus: Lesson['status']) => {
    if (!editingLesson) return;

    if (!editingLesson.title.trim()) {
      alert('Vui lòng nhập Tiêu đề bài học.');
      return;
    }

    const updated: Lesson = {
      ...editingLesson,
      status: targetStatus,
      updatedAt: new Date().toISOString(),
    };

    onSaveLesson(updated);
    setIsFormDirty(false);
    setEditingLesson(null);
    setIsCreatingNew(false);
  };

  // If user is a student/guest
  if (!isTeacherOrAdmin) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-2xl p-10 border border-slate-200 shadow-sm">
          <span className="text-5xl">🔒</span>
          <h2 className="text-xl font-bold text-slate-800 mt-4 mb-2">
            Khu vực Quản lí dành cho Giáo viên & Quản trị viên
          </h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
            Tài khoản hiện tại của bạn là <strong>Học sinh / Khách</strong>. Bạn có thể xem các học liệu và bài học đã được xuất bản công khai.
          </p>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 inline-block text-left">
            <p className="font-semibold mb-1">Thử nghiệm phân quyền:</p>
            <p>Sử dụng thanh chọn vai trò ở góc trên bên phải thanh điều hướng và chọn <strong>"Giáo viên"</strong> hoặc <strong>"Quản trị viên"</strong> để truy cập bảng điều khiển.</p>
          </div>
        </div>
      </div>
    );
  }

  // Filter items for dashboard view
  const displayResources = resources.filter(r => {
    if (activeTab === 'experiments') return r.type === 'experiment' || r.type === 'simulation';
    if (activeTab === 'videos') return r.type === 'video_experiment' || r.type === 'video_lesson';
    if (activeTab === 'documents') return r.type === 'document' || r.type === 'presentation' || r.type === 'worksheet';
    return true; // 'resources' shows all
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Dashboard Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
              {isAdmin ? '🛡 Quản trị viên hệ thống' : '👨‍🏫 Bảng làm việc của Giáo viên'}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-500">{currentUser.name}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-physics-dark mt-1">
            Trung tâm Quản trị Học liệu & Bài giảng
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handleStartCreateLesson}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold flex items-center space-x-1.5 shadow-sm transition-all"
          >
            <span>➕</span>
            <span>Thêm bài học mới</span>
          </button>
          <button
            onClick={handleStartCreate}
            className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg text-xs font-bold flex items-center space-x-1.5 shadow-sm transition-all"
          >
            <span>➕</span>
            <span>Thêm học liệu mới</span>
          </button>
        </div>
      </div>

      {/* Tabs: Bài học | Học liệu | Thí nghiệm | Video | Tài liệu | Danh mục & Cài đặt (Section 9) */}
      <div className="flex border-b border-slate-200 overflow-x-auto text-xs sm:text-sm font-semibold mb-6">
        <button
          onClick={() => setActiveTab('resources')}
          className={`px-4 py-2.5 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'resources' ? 'border-physics-navy text-physics-navy' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Tất cả học liệu ({resources.length})
        </button>
        <button
          onClick={() => setActiveTab('lessons')}
          className={`px-4 py-2.5 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'lessons' ? 'border-physics-navy text-physics-navy' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Bài học ({lessons.length})
        </button>
        <button
          onClick={() => setActiveTab('experiments')}
          className={`px-4 py-2.5 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'experiments' ? 'border-physics-navy text-physics-navy' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Thí nghiệm ({resources.filter(r => r.type === 'experiment' || r.type === 'simulation').length})
        </button>
        <button
          onClick={() => setActiveTab('videos')}
          className={`px-4 py-2.5 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'videos' ? 'border-physics-navy text-physics-navy' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Video ({resources.filter(r => r.type === 'video_experiment' || r.type === 'video_lesson').length})
        </button>
        <button
          onClick={() => setActiveTab('documents')}
          className={`px-4 py-2.5 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'documents' ? 'border-physics-navy text-physics-navy' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Tài liệu & Slide ({resources.filter(r => r.type === 'document' || r.type === 'presentation' || r.type === 'worksheet').length})
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`px-4 py-2.5 border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'settings' ? 'border-physics-navy text-physics-navy' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Danh mục & Cài đặt ⚙
        </button>
      </div>

      {/* TAB 1, 3, 4, 5: RESOURCE MANAGEMENT TABLE */}
      {['resources', 'experiments', 'videos', 'documents'].includes(activeTab) && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Tiêu đề học liệu</th>
                  <th className="p-3">Loại</th>
                  <th className="p-3">Khối</th>
                  <th className="p-3">Bài liên kết</th>
                  <th className="p-3">Tác giả</th>
                  <th className="p-3">Trạng thái</th>
                  <th className="p-3 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {displayResources.map(res => {
                  const statusColors = {
                    published: 'bg-emerald-100 text-emerald-800',
                    pending_review: 'bg-amber-100 text-amber-800',
                    draft: 'bg-slate-100 text-slate-700',
                    archived: 'bg-rose-100 text-rose-800',
                  }[res.status];

                  const statusLabels = {
                    published: 'Đã xuất bản',
                    pending_review: 'Chờ duyệt',
                    draft: 'Bản nháp',
                    archived: 'Lưu trữ',
                  }[res.status];

                  return (
                    <tr key={res.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3 max-w-xs">
                        <p className="font-bold text-slate-800 truncate">{res.title}</p>
                        <p className="text-[11px] text-slate-400 truncate">{res.description}</p>
                      </td>
                      <td className="p-3 capitalize text-slate-600">
                        {res.type.replace('_', ' ')}
                      </td>
                      <td className="p-3 font-semibold text-physics-navy">
                        Lớp {res.grade}
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 font-bold">
                          {res.linkedLessonIds.length} bài
                        </span>
                      </td>
                      <td className="p-3 text-slate-600">{res.author}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${statusColors}`}>
                          {statusLabels}
                        </span>
                      </td>
                      <td className="p-3 text-right space-x-1 whitespace-nowrap">
                        <button
                          onClick={() => handleStartEdit(res)}
                          className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded font-semibold transition-colors"
                        >
                          Sửa
                        </button>
                        {isAdmin && res.status !== 'published' && (
                          <button
                            onClick={() => {
                              onSaveResource({ ...res, status: 'published', reviewStatus: 'approved' });
                            }}
                            className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-semibold transition-colors"
                          >
                            Duyệt & Xuất bản
                          </button>
                        )}
                        {isAdmin && res.status === 'published' && (
                          <button
                            onClick={() => {
                              onSaveResource({ ...res, status: 'archived' });
                            }}
                            className="px-2.5 py-1 bg-rose-50 text-rose-700 hover:bg-rose-100 rounded font-semibold transition-colors"
                          >
                            Lưu trữ
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: LESSONS MANAGEMENT */}
      {activeTab === 'lessons' && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
            <h3 className="font-bold text-slate-800 text-sm">Hệ thống bài học môn Vật lí</h3>
            <span className="text-xs text-slate-500">Lấy bài học làm trung tâm tổ chức</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Khối</th>
                  <th className="p-3">Chủ đề / Chương</th>
                  <th className="p-3">Tên bài học</th>
                  <th className="p-3">Học liệu liên kết</th>
                  <th className="p-3">Trạng thái</th>
                  <th className="p-3 text-right">Xem chi tiết</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {lessons.map(les => {
                  const linkedCount = resources.filter(r => 
                    les.linkedResourceIds.includes(r.id) || r.linkedLessonIds.includes(les.id)
                  ).length;

                  return (
                    <tr key={les.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 font-bold text-physics-navy">Lớp {les.grade}</td>
                      <td className="p-3 text-slate-600">{les.chapterName}</td>
                      <td className="p-3 font-bold text-slate-800">
                        {les.title}
                        {les.isSample && (
                          <span className="ml-2 text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                            Minh họa
                          </span>
                        )}
                      </td>
                      <td className="p-3">
                        <span className="text-teal-700 font-semibold">{linkedCount} học liệu</span>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          {les.status === 'published' ? 'Đã xuất bản' : 'Bản nháp'}
                        </span>
                      </td>
                      <td className="p-3 text-right space-x-1 whitespace-nowrap">
                        <button
                          onClick={() => handleStartEditLesson(les)}
                          className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded font-semibold transition-colors"
                        >
                          Sửa
                        </button>
                        <button
                          onClick={() => onSelectLesson(les)}
                          className="px-3 py-1 bg-physics-navy text-white rounded font-medium hover:bg-physics-blue"
                        >
                          Mở trang bài học →
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 6: DANH MỤC & CÀI ĐẶT */}
      {activeTab === 'settings' && (
        <div className="space-y-6">
          {/* Site author & title settings (Requirement 2 & Footer) */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-bold text-slate-800 text-sm mb-4 pb-2 border-b">
              ⚙ Cài đặt thông tin website & Tác giả (Quản trị viên)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Tên website:
                </label>
                <input
                  type="text"
                  value={tempSiteName}
                  onChange={e => setTempSiteName(e.target.value)}
                  disabled={!isAdmin}
                  className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-physics-teal focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Dòng tác giả chân trang (Footer):
                </label>
                <input
                  type="text"
                  value={tempAuthorLine}
                  onChange={e => setTempAuthorLine(e.target.value)}
                  disabled={!isAdmin}
                  placeholder="Ví dụ: Ths: Lê Long - QT"
                  className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-physics-teal focus:outline-none"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Mặc định: "Ths: Lê Long - QT" theo yêu cầu hệ thống.
                </p>
              </div>
            </div>

            {isAdmin && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => {
                    onUpdateSettings({
                      ...settings,
                      siteName: tempSiteName,
                      authorLine: tempAuthorLine,
                    });
                    alert('Đã cập nhật cài đặt chân trang và tên website!');
                  }}
                  className="px-4 py-2 bg-physics-navy text-white rounded-lg text-xs font-semibold hover:bg-physics-blue transition-colors"
                >
                  Lưu thay đổi cài đặt
                </button>
              </div>
            )}
          </div>

          {/* Textbook series manager */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-bold text-slate-800 text-sm mb-3 pb-2 border-b">
              📖 Quản lí Bộ sách giáo khoa
            </h3>
            <div className="space-y-2 text-xs">
              {textbooks.map(tb => (
                <div key={tb.id} className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-800">{tb.name}</span>
                    <span className="text-slate-500 ml-2">({tb.publisher})</span>
                  </div>
                  {tb.isDefault && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-100 text-teal-800">
                      Mặc định
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MODAL: ADD / EDIT RESOURCE FORM (Section 9) */}
      {editingResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-6 my-8 max-h-[90vh] overflow-y-auto animate-scaleIn">
            <div className="flex justify-between items-start pb-3 border-b border-slate-200 mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {isCreatingNew ? 'Thêm học liệu mới vào hệ thống' : `Chỉnh sửa học liệu: ${editingResource.title}`}
                </h3>
                <p className="text-xs text-slate-500">
                  Một học liệu có thể liên kết với nhiều bài; dữ liệu cập nhật sẽ đồng bộ tức thời.
                </p>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-slate-400 hover:text-slate-600 text-xl font-bold ml-4"
              >
                ✕
              </button>
            </div>

            {/* 3 Creation modes (Section 9): "Tải tệp" | "Dán liên kết" | "Soạn nội dung" */}
            <div className="flex rounded-lg bg-slate-100 p-1 mb-5 text-xs font-semibold">
              <button
                onClick={() => setResourceCreationMode('upload')}
                className={`flex-1 py-1.5 rounded-md transition-all ${
                  resourceCreationMode === 'upload' ? 'bg-white shadow text-physics-navy' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                📤 Tải tệp từ máy
              </button>
              <button
                onClick={() => setResourceCreationMode('link')}
                className={`flex-1 py-1.5 rounded-md transition-all ${
                  resourceCreationMode === 'link' ? 'bg-white shadow text-physics-navy' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🔗 Dán liên kết ngoài (YouTube/PhET/Canva/PPT)
              </button>
              <button
                onClick={() => setResourceCreationMode('compose')}
                className={`flex-1 py-1.5 rounded-md transition-all ${
                  resourceCreationMode === 'compose' ? 'bg-white shadow text-physics-navy' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ✍ Soạn nội dung & Công thức
              </button>
            </div>

            <form
              onSubmit={e => {
                e.preventDefault();
                handleSaveSubmit(editingResource.status);
              }}
              className="space-y-4 text-xs"
            >
              {/* Title & Description */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Tiêu đề học liệu * :
                </label>
                <input
                  type="text"
                  required
                  value={editingResource.title}
                  onChange={e => {
                    setEditingResource({ ...editingResource, title: e.target.value });
                    setIsFormDirty(true);
                  }}
                  placeholder="Ví dụ: Thí nghiệm kiểm chứng Định luật II Newton"
                  className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-physics-teal focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Mô tả tóm tắt học liệu * :
                </label>
                <textarea
                  required
                  rows={2}
                  value={editingResource.description}
                  onChange={e => {
                    setEditingResource({ ...editingResource, description: e.target.value });
                    setIsFormDirty(true);
                  }}
                  placeholder="Mô tả mục tiêu, nội dung kiến thức và cách sử dụng..."
                  className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-physics-teal focus:outline-none"
                />
              </div>

              {/* Mode-specific input fields */}
              {resourceCreationMode === 'upload' && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <label className="block font-semibold text-slate-800 mb-1">
                    Chọn tệp tài liệu / video / bài giảng:
                  </label>
                  <input
                    type="file"
                    onChange={handleFileSelected}
                    className="w-full text-xs text-slate-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-physics-navy file:text-white hover:file:bg-physics-blue cursor-pointer"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    Hỗ trợ: PDF, DOCX, PPTX, XLSX, MP4, WebM, Ảnh (Tối đa 25MB cho tài liệu, 100MB cho video).
                  </p>

                  {/* Upload Progress Bar */}
                  {uploadProgress !== null && (
                    <div className="mt-3">
                      <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                        <span>Tiến độ tải lên máy chủ:</span>
                        <span className="font-bold">{uploadProgress}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-teal-600 h-2 transition-all duration-150"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                      {uploadProgress === 100 && (
                        <p className="text-[11px] text-emerald-600 font-semibold mt-1">
                          ✓ Tệp đã tải lên thành công và sẵn sàng để lưu!
                        </p>
                      )}
                    </div>
                  )}

                  {uploadError && (
                    <p className="text-[11px] text-rose-600 font-semibold mt-2">
                      ⚠ {uploadError}
                    </p>
                  )}
                </div>
              )}

              {resourceCreationMode === 'link' && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <label className="block font-semibold text-slate-800">
                    Đường dẫn liên kết (URL):
                  </label>
                  <input
                    type="url"
                    value={editingResource.url || ''}
                    onChange={e => {
                      setEditingResource({ ...editingResource, url: e.target.value });
                      setIsFormDirty(true);
                    }}
                    placeholder="https://www.youtube.com/... hoặc https://phet.colorado.edu/... hoặc Canva/PowerPoint link"
                    className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-physics-teal focus:outline-none"
                  />
                  <p className="text-[11px] text-slate-500">
                    Chỉ chấp nhận URL http/https. Hệ thống tự động tạo mã nhúng an toàn cho YouTube, PhET, Canva và trình xem tài liệu.
                  </p>
                </div>
              )}

              {resourceCreationMode === 'compose' && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <label className="block font-semibold text-slate-800">
                    Trình soạn thảo công thức KaTeX & Văn bản:
                  </label>
                  <input
                    type="text"
                    value={editingResource.url || ''}
                    onChange={e => {
                      setEditingResource({ ...editingResource, url: e.target.value });
                      setIsFormDirty(true);
                    }}
                    placeholder="Nhập mã công thức LaTeX (ví dụ: v = v_0 + a t)"
                    className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-physics-teal focus:outline-none font-mono"
                  />
                  {editingResource.url && (
                    <div className="p-3 bg-white border border-slate-200 rounded-lg text-center mt-2">
                      <p className="text-[10px] text-slate-400 mb-1">Xem trước công thức:</p>
                      <MathFormula latex={editingResource.url} displayMode={true} />
                    </div>
                  )}
                </div>
              )}

              {/* Resource Type, Grade, Textbook */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Loại học liệu:</label>
                  <select
                    value={editingResource.type}
                    onChange={e => {
                      setEditingResource({ ...editingResource, type: e.target.value as ResourceType });
                      setIsFormDirty(true);
                    }}
                    className="w-full border border-slate-300 rounded-lg p-2 focus:outline-none"
                  >
                    <option value="experiment">Thí nghiệm thực</option>
                    <option value="simulation">Mô phỏng tương tác</option>
                    <option value="video_experiment">Video thí nghiệm</option>
                    <option value="video_lesson">Video bài học</option>
                    <option value="document">Tài liệu học tập</option>
                    <option value="presentation">Bài trình chiếu PPT/Canva</option>
                    <option value="worksheet">Phiếu học tập</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Khối lớp:</label>
                  <select
                    value={editingResource.grade}
                    onChange={e => {
                      setEditingResource({ ...editingResource, grade: parseInt(e.target.value) as GradeLevel });
                      setIsFormDirty(true);
                    }}
                    className="w-full border border-slate-300 rounded-lg p-2 focus:outline-none"
                  >
                    <option value={10}>Vật lí 10</option>
                    <option value={11}>Vật lí 11</option>
                    <option value={12}>Vật lí 12</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Bộ sách:</label>
                  <select
                    value={editingResource.textbookId}
                    onChange={e => {
                      setEditingResource({ ...editingResource, textbookId: e.target.value });
                      setIsFormDirty(true);
                    }}
                    className="w-full border border-slate-300 rounded-lg p-2 focus:outline-none"
                  >
                    {textbooks.map(tb => (
                      <option key={tb.id} value={tb.id}>{tb.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Multi-lesson linking (Section 1 & 6: Many-to-many relationship) */}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Liên kết với các bài học (Học liệu dùng chung cho nhiều bài):
                </label>
                <div className="max-h-36 overflow-y-auto border border-slate-300 rounded-lg p-2 space-y-1.5 bg-white">
                  {lessons.map(les => {
                    const isChecked = editingResource.linkedLessonIds.includes(les.id);
                    return (
                      <label key={les.id} className="flex items-center space-x-2 text-xs text-slate-700 cursor-pointer hover:bg-slate-50 p-1 rounded">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={e => {
                            const newIds = e.target.checked
                              ? [...editingResource.linkedLessonIds, les.id]
                              : editingResource.linkedLessonIds.filter(id => id !== les.id);
                            setEditingResource({ ...editingResource, linkedLessonIds: newIds });
                            setIsFormDirty(true);
                          }}
                          className="rounded text-physics-navy focus:ring-physics-teal"
                        />
                        <span>
                          <strong className="text-physics-navy">Lớp {les.grade}:</strong> {les.title} ({les.chapterName})
                        </span>
                      </label>
                    );
                  })}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Học liệu được lưu 1 lần và hiển thị đồng bộ tại tất cả các bài được chọn.
                </p>
              </div>

              {/* Author and License */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Tác giả / Nguồn:</label>
                  <input
                    type="text"
                    value={editingResource.author}
                    onChange={e => {
                      setEditingResource({ ...editingResource, author: e.target.value });
                      setIsFormDirty(true);
                    }}
                    className="w-full border border-slate-300 rounded-lg p-2 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Quyền sử dụng / Bản quyền:</label>
                  <input
                    type="text"
                    value={editingResource.licenseInfo}
                    onChange={e => {
                      setEditingResource({ ...editingResource, licenseInfo: e.target.value });
                      setIsFormDirty(true);
                    }}
                    className="w-full border border-slate-300 rounded-lg p-2 focus:outline-none"
                  />
                </div>
              </div>

              {/* Action Buttons: Lưu nháp | Gửi duyệt | Xuất bản (Section 9) */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap justify-between items-center gap-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Hủy bỏ
                </button>

                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => handleSaveSubmit('draft')}
                    className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg font-semibold transition-colors"
                  >
                    Lưu bản nháp 💾
                  </button>

                  {!isAdmin && (
                    <button
                      type="button"
                      onClick={() => handleSaveSubmit('pending_review')}
                      className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors"
                    >
                      Gửi duyệt 📨
                    </button>
                  )}

                  {isAdmin && (
                    <button
                      type="button"
                      onClick={() => handleSaveSubmit('published')}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold transition-colors shadow-sm"
                    >
                      Xuất bản ngay ✓
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD / EDIT LESSON FORM */}
      {editingLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-6 my-8 max-h-[90vh] overflow-y-auto animate-scaleIn">
            <div className="flex justify-between items-start pb-3 border-b border-slate-200 mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {isCreatingNew ? 'Thêm bài học mới' : `Chỉnh sửa bài học: ${editingLesson.title}`}
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-slate-400 hover:text-slate-600 text-xl font-bold ml-4"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={e => {
                e.preventDefault();
                handleSaveLessonSubmit(editingLesson.status);
              }}
              className="space-y-4 text-xs"
            >
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Tiêu đề bài học * :
                </label>
                <input
                  type="text"
                  required
                  value={editingLesson.title}
                  onChange={e => {
                    setEditingLesson({ ...editingLesson, title: e.target.value });
                    setIsFormDirty(true);
                  }}
                  className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-physics-teal focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Khối lớp:</label>
                  <select
                    value={editingLesson.grade}
                    onChange={e => {
                      setEditingLesson({ ...editingLesson, grade: parseInt(e.target.value) as GradeLevel });
                      setIsFormDirty(true);
                    }}
                    className="w-full border border-slate-300 rounded-lg p-2 focus:outline-none"
                  >
                    <option value={10}>Vật lí 10</option>
                    <option value={11}>Vật lí 11</option>
                    <option value={12}>Vật lí 12</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Chương / Chủ đề:</label>
                  <select
                    value={editingLesson.chapterId}
                    onChange={e => {
                      const chap = chapters.find(c => c.id === e.target.value);
                      if (chap) {
                        setEditingLesson({ ...editingLesson, chapterId: chap.id, chapterName: chap.name });
                        setIsFormDirty(true);
                      }
                    }}
                    className="w-full border border-slate-300 rounded-lg p-2 focus:outline-none"
                  >
                    {chapters.filter(c => c.grade === editingLesson.grade).map(chap => (
                      <option key={chap.id} value={chap.id}>{chap.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Mục tiêu kiến thức (mỗi dòng 1 mục tiêu):
                </label>
                <textarea
                  rows={3}
                  value={editingLesson.objectives.knowledge.join('\n')}
                  onChange={e => {
                    const lines = e.target.value.split('\n');
                    setEditingLesson({ 
                      ...editingLesson, 
                      objectives: { ...editingLesson.objectives, knowledge: lines } 
                    });
                    setIsFormDirty(true);
                  }}
                  className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-physics-teal focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Mục tiêu kĩ năng (mỗi dòng 1 kĩ năng):
                </label>
                <textarea
                  rows={3}
                  value={editingLesson.objectives.skills.join('\n')}
                  onChange={e => {
                    const lines = e.target.value.split('\n');
                    setEditingLesson({ 
                      ...editingLesson, 
                      objectives: { ...editingLesson.objectives, skills: lines } 
                    });
                    setIsFormDirty(true);
                  }}
                  className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-physics-teal focus:outline-none"
                />
              </div>

              <div className="pt-4 border-t border-slate-200 mt-6 flex flex-col-reverse sm:flex-row sm:justify-between items-center gap-3">
                <p className="text-[10px] text-slate-400">
                  {editingLesson.status === 'published' ? 'Đã xuất bản' : 'Bản nháp'}
                </p>

                <div className="flex space-x-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-semibold transition-colors flex-1 sm:flex-none"
                  >
                    Hủy
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSaveLessonSubmit('draft')}
                    className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg font-semibold transition-colors flex-1 sm:flex-none"
                  >
                    Lưu nháp
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSaveLessonSubmit('published')}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold transition-colors shadow-sm"
                  >
                    Lưu & Xuất bản
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
