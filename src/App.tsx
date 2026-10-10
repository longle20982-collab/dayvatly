import React, { useState } from 'react';
import { Chapter, GradeLevel, Lesson, Resource, SiteSettings, TextbookInfo, UserProfile } from './types';
import { DEMO_USERS, INITIAL_CHAPTERS, INITIAL_LESSONS, INITIAL_RESOURCES, INITIAL_SITE_SETTINGS, INITIAL_TEXTBOOKS } from './services/sampleData';
import { Navbar } from './components/Navbar';
import { Breadcrumbs, BreadcrumbItem } from './components/Breadcrumbs';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { GradePage } from './components/GradePage';
import { LessonDetail } from './components/LessonDetail';
import { ExperimentsPage } from './components/ExperimentsPage';
import { VideosPage } from './components/VideosPage';
import { DocumentsPage } from './components/DocumentsPage';
import { TeacherPortal } from './components/TeacherPortal';
import { FirebaseConfigModal } from './components/FirebaseConfigModal';
import { Toast, ToastMessage } from './components/Toast';

export const App: React.FC = () => {
  // Navigation State
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);

  // User Authentication / Role State (Demo user starts as Teacher so all tools can be tested immediately)
  const [currentUser, setCurrentUser] = useState<UserProfile>(DEMO_USERS[1]); // teacher_long

  // Database State (In-memory structured state with fallback/preview mode)
  const [lessons, setLessons] = useState<Lesson[]>(INITIAL_LESSONS);
  const [resources, setResources] = useState<Resource[]>(INITIAL_RESOURCES);
  const [chapters] = useState<Chapter[]>(INITIAL_CHAPTERS);
  const [textbooks] = useState<TextbookInfo[]>(INITIAL_TEXTBOOKS);
  const [settings, setSettings] = useState<SiteSettings>(INITIAL_SITE_SETTINGS);

  // UI Modals
  const [isFirebaseModalOpen, setIsFirebaseModalOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (type: ToastMessage['type'], title: string, message?: string) => {
    const newToast: ToastMessage = {
      id: `toast_${Date.now()}_${Math.random()}`,
      type,
      title,
      message,
    };
    setToasts(prev => [...prev, newToast]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== newToast.id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Switch navigation tabs
  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    setActiveLesson(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open a specific grade page
  const handleSelectGrade = (grade: GradeLevel) => {
    setCurrentTab(`grade${grade}`);
    setActiveLesson(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open a specific lesson
  const handleSelectLesson = (lesson: Lesson) => {
    setActiveLesson(lesson);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Save / Update Resource (Requirement 1 & 6: Many-to-many synchronization)
  const handleSaveResource = (updatedResource: Resource) => {
    setResources(prevResources => {
      const exists = prevResources.some(r => r.id === updatedResource.id);
      if (exists) {
        return prevResources.map(r => (r.id === updatedResource.id ? updatedResource : r));
      } else {
        return [updatedResource, ...prevResources];
      }
    });

    // Synchronize lesson links: Ensure every linked lesson in updatedResource.linkedLessonIds includes this resource
    setLessons(prevLessons =>
      prevLessons.map(l => {
        const isLinked = updatedResource.linkedLessonIds.includes(l.id);
        const hasId = l.linkedResourceIds.includes(updatedResource.id);

        if (isLinked && !hasId) {
          return { ...l, linkedResourceIds: [...l.linkedResourceIds, updatedResource.id] };
        } else if (!isLinked && hasId) {
          return { ...l, linkedResourceIds: l.linkedResourceIds.filter(id => id !== updatedResource.id) };
        }
        return l;
      })
    );

    addToast('success', 'Đã lưu học liệu thành công!', `Học liệu "${updatedResource.title}" đã được cập nhật đồng bộ.`);
  };

  // Save / Update Lesson
  const handleSaveLesson = (updatedLesson: Lesson) => {
    setLessons(prev => prev.map(l => (l.id === updatedLesson.id ? updatedLesson : l)));
    addToast('success', 'Đã cập nhật bài học!', `Bài "${updatedLesson.title}" đã được lưu.`);
  };

  // Reset database back to clean initial state
  const handleResetSampleData = () => {
    setLessons(INITIAL_LESSONS);
    setResources(INITIAL_RESOURCES);
    setSettings(INITIAL_SITE_SETTINGS);
    addToast('info', 'Đã khôi phục dữ liệu gốc', 'Hệ thống đã phục hồi 6 bài mẫu và kho học liệu ban đầu.');
  };

  // Build Breadcrumbs (Requirement 2: e.g. "Trang chủ / Vật lí 11 / Dao động / Dao động điều hòa")
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [
      { label: 'Trang chủ', onClick: () => handleSelectTab('home') },
    ];

    if (currentTab === 'grade10') {
      items.push({ label: 'Vật lí 10', onClick: activeLesson ? () => setActiveLesson(null) : undefined });
    } else if (currentTab === 'grade11') {
      items.push({ label: 'Vật lí 11', onClick: activeLesson ? () => setActiveLesson(null) : undefined });
    } else if (currentTab === 'grade12') {
      items.push({ label: 'Vật lí 12', onClick: activeLesson ? () => setActiveLesson(null) : undefined });
    } else if (currentTab === 'experiments') {
      items.push({ label: 'Kho thí nghiệm & Mô phỏng' });
    } else if (currentTab === 'videos') {
      items.push({ label: 'Thư viện video bài học' });
    } else if (currentTab === 'documents') {
      items.push({ label: 'Thư viện tài liệu & Slide' });
    } else if (currentTab === 'teacher_portal') {
      items.push({ label: 'Khu vực giáo viên & Quản trị' });
    }

    if (activeLesson) {
      items.push({ label: activeLesson.chapterName });
      items.push({ label: activeLesson.title });
    }

    return items;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        currentUser={currentUser}
        onChangeUser={newUser => {
          setCurrentUser(newUser);
          addToast('info', 'Đã chuyển vai trò', `Hiện đang đăng nhập với vai trò: ${newUser.name}`);
        }}
        onOpenFirebaseModal={() => setIsFirebaseModalOpen(true)}
      />

      {/* Breadcrumbs Trail (Requirement 2) */}
      <Breadcrumbs items={getBreadcrumbs()} />

      {/* Main Content View */}
      <main className="flex-1">
        {/* If a lesson is currently being viewed */}
        {activeLesson ? (
          <LessonDetail
            lesson={activeLesson}
            allResources={resources}
            onBack={() => setActiveLesson(null)}
            onOpenResource={res => {
              // Open resource in experiment or video page
              if (res.type === 'experiment' || res.type === 'simulation') {
                setCurrentTab('experiments');
                setActiveLesson(null);
              } else if (res.type === 'video_experiment' || res.type === 'video_lesson') {
                setCurrentTab('videos');
                setActiveLesson(null);
              } else {
                setCurrentTab('documents');
                setActiveLesson(null);
              }
            }}
          />
        ) : (
          <>
            {currentTab === 'home' && (
              <HomePage
                lessons={lessons}
                resources={resources}
                onSelectGrade={handleSelectGrade}
                onSelectLesson={handleSelectLesson}
                onSelectTab={handleSelectTab}
              />
            )}

            {currentTab === 'grade10' && (
              <GradePage
                grade={10}
                chapters={chapters}
                lessons={lessons}
                resources={resources}
                textbooks={textbooks}
                onSelectLesson={handleSelectLesson}
                onOpenResource={res => {
                  setCurrentTab('experiments');
                }}
              />
            )}

            {currentTab === 'grade11' && (
              <GradePage
                grade={11}
                chapters={chapters}
                lessons={lessons}
                resources={resources}
                textbooks={textbooks}
                onSelectLesson={handleSelectLesson}
                onOpenResource={res => {
                  setCurrentTab('experiments');
                }}
              />
            )}

            {currentTab === 'grade12' && (
              <GradePage
                grade={12}
                chapters={chapters}
                lessons={lessons}
                resources={resources}
                textbooks={textbooks}
                onSelectLesson={handleSelectLesson}
                onOpenResource={res => {
                  setCurrentTab('experiments');
                }}
              />
            )}

            {currentTab === 'experiments' && (
              <ExperimentsPage
                resources={resources}
                onSelectGrade={handleSelectGrade}
              />
            )}

            {currentTab === 'videos' && (
              <VideosPage
                resources={resources}
                onSelectGrade={handleSelectGrade}
              />
            )}

            {currentTab === 'documents' && (
              <DocumentsPage
                resources={resources}
                lessons={lessons}
                onOpenLesson={lesId => {
                  const target = lessons.find(l => l.id === lesId);
                  if (target) handleSelectLesson(target);
                }}
              />
            )}

            {currentTab === 'teacher_portal' && (
              <TeacherPortal
                currentUser={currentUser}
                lessons={lessons}
                resources={resources}
                chapters={chapters}
                textbooks={textbooks}
                settings={settings}
                onSaveResource={handleSaveResource}
                onSaveLesson={handleSaveLesson}
                onUpdateSettings={newSettings => setSettings(newSettings)}
                onSelectLesson={handleSelectLesson}
              />
            )}
          </>
        )}
      </main>

      {/* Footer (Requirement 2: Site title & author line "Ths: Lê Long - QT") */}
      <Footer
        settings={settings}
        onSelectTab={handleSelectTab}
        onOpenFirebaseModal={() => setIsFirebaseModalOpen(true)}
      />

      {/* Toast Notifications */}
      <Toast toasts={toasts} onDismiss={removeToast} />

      {/* Firebase & Cloud Status Modal */}
      <FirebaseConfigModal
        isOpen={isFirebaseModalOpen}
        onClose={() => setIsFirebaseModalOpen(false)}
        onResetSampleData={handleResetSampleData}
      />
    </div>
  );
};

export default App;
