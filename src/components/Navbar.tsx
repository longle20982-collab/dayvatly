import React, { useState } from 'react';
import { UserProfile, UserRole } from '../types';
import { DEMO_USERS } from '../services/sampleData';
import { isFirebaseConfigured } from '../services/firebase';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  currentUser: UserProfile;
  onChangeUser: (user: UserProfile) => void;
  onOpenFirebaseModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  currentUser,
  onChangeUser,
  onOpenFirebaseModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'grade10', label: 'Vật lí 10' },
    { id: 'grade11', label: 'Vật lí 11' },
    { id: 'grade12', label: 'Vật lí 12' },
    { id: 'experiments', label: 'Thí nghiệm' },
    { id: 'videos', label: 'Video' },
    { id: 'documents', label: 'Tài liệu' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0f2b5c] text-white shadow-md">
      {/* Top mini-bar: Preview Mode & Fast Role Switcher */}
      <div className="bg-[#091b3a] px-4 py-1.5 text-xs border-b border-blue-900/50 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenFirebaseModal}
            className="flex items-center space-x-1.5 px-2 py-0.5 rounded text-[11px] bg-blue-950/80 hover:bg-blue-900 border border-blue-700/60 transition-colors"
            title="Nhấn để xem trạng thái cấu hình đám mây"
          >
            <span className={`w-2 h-2 rounded-full ${isFirebaseConfigured ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'}`}></span>
            <span className="text-slate-200">
              {isFirebaseConfigured ? 'Firebase Cloud: Kết nối' : 'Bản xem trước (Chế độ mô phỏng)'}
            </span>
            <span className="text-blue-300 underline ml-1">Cấu hình</span>
          </button>
          <span className="text-slate-400 hidden sm:inline">|</span>
          <span className="text-slate-300 hidden sm:inline">Chương trình Vật lí THPT 2018</span>
        </div>

        {/* Quick Role Switcher for Testing (Khách/Học sinh, Giáo viên, Quản trị viên) */}
        <div className="flex items-center space-x-2">
          <span className="text-slate-300 text-[11px] hidden md:inline">Đổi vai trò thử nghiệm:</span>
          <div className="relative">
            <button
              onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
              className="flex items-center space-x-1.5 bg-blue-900/90 hover:bg-blue-800 border border-blue-700 px-2.5 py-0.5 rounded text-xs text-white"
            >
              <span className="font-semibold text-teal-300">
                {currentUser.role === 'student' && '🎓 Học sinh'}
                {currentUser.role === 'teacher' && '👨‍🏫 Giáo viên'}
                {currentUser.role === 'admin' && '🛡 Quản trị viên'}
              </span>
              <span className="text-slate-300 text-[10px]">▼</span>
            </button>

            {roleDropdownOpen && (
              <div className="absolute right-0 mt-1 w-52 bg-white text-slate-800 rounded-lg shadow-xl border border-slate-200 py-1 z-50 animate-fadeIn">
                <div className="px-3 py-1.5 border-b text-[11px] text-slate-500 font-medium">
                  Chọn vai trò để kiểm thử quyền:
                </div>
                {DEMO_USERS.map(user => (
                  <button
                    key={user.id}
                    onClick={() => {
                      onChangeUser(user);
                      setRoleDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs flex flex-col hover:bg-blue-50 transition-colors ${
                      currentUser.id === user.id ? 'bg-blue-50/70 font-semibold text-physics-navy' : ''
                    }`}
                  >
                    <span>{user.name}</span>
                    <span className="text-[10px] text-slate-500 capitalize">{user.role}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            onClick={() => onSelectTab('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-blue-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <span className="text-xl">⚛</span>
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold tracking-tight text-white block leading-tight">
                VẬT LÍ 10–11–12
              </span>
              <span className="text-[10px] sm:text-xs text-teal-300 font-medium block">
                Không gian học tập & Học liệu số
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map(item => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'text-slate-200 hover:bg-blue-900/60 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Teacher Portal & User Profile */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => onSelectTab('teacher_portal')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all shadow-sm ${
                currentTab === 'teacher_portal'
                  ? 'bg-amber-500 text-slate-900'
                  : 'bg-teal-600 hover:bg-teal-500 text-white'
              }`}
            >
              <span>⚙</span>
              <span>Khu vực giáo viên</span>
            </button>

            <div className="text-right pl-2 border-l border-blue-800">
              <p className="text-xs font-medium text-slate-200 truncate max-w-[130px]">
                {currentUser.name}
              </p>
              <p className="text-[10px] text-teal-300">
                {currentUser.role === 'admin' ? 'Quản trị viên' : currentUser.role === 'teacher' ? 'Giáo viên' : 'Học sinh'}
              </p>
            </div>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => onSelectTab('teacher_portal')}
              className="px-2.5 py-1 rounded bg-teal-600 text-white text-xs font-medium"
            >
              Giáo viên
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-200 hover:text-white hover:bg-blue-900 focus:outline-none"
              aria-label="Menu"
            >
              <span className="text-xl">{mobileMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d2349] border-t border-blue-900 px-4 pt-2 pb-4 space-y-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                onSelectTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                currentTab === item.id ? 'bg-teal-600 text-white' : 'text-slate-200 hover:bg-blue-900'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-blue-800">
            <button
              onClick={() => {
                onSelectTab('teacher_portal');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-md text-sm font-semibold text-amber-300 bg-blue-950"
            >
              ⚙ Vào Khu vực giáo viên
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
