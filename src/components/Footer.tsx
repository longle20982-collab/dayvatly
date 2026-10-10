import React from 'react';
import { SiteSettings } from '../types';

interface FooterProps {
  settings: SiteSettings;
  onSelectTab: (tab: string) => void;
  onOpenFirebaseModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  settings,
  onSelectTab,
  onOpenFirebaseModal,
}) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Title & Purpose */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-2xl text-teal-400">⚛</span>
              <span className="text-lg font-bold text-white tracking-wide">
                {settings.siteName}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Hệ thống học liệu số chuyên sâu cho môn Vật lí cấp Trung học Phổ thông. Nền tảng hỗ trợ giáo viên tổ chức bài học, thí nghiệm thực, mô phỏng tương tác, bài giảng video và tài liệu chuẩn hóa theo chương trình GDPT 2018.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-xs">
              <span className="px-2.5 py-1 rounded bg-slate-800 text-teal-300 border border-slate-700">
                GDPT 2018
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-blue-300 border border-slate-700">
                Thí nghiệm ảo & PhET
              </span>
              <button
                onClick={onOpenFirebaseModal}
                className="text-amber-400 hover:underline cursor-pointer"
              >
                Trạng thái lưu trữ ⚙
              </button>
            </div>
          </div>

          {/* Col 2: Grades Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Chương trình khối lớp
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectTab('grade10')}
                  className="hover:text-teal-400 transition-colors text-slate-400"
                >
                  Vật lí 10: Cơ học & Động lực học
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('grade11')}
                  className="hover:text-teal-400 transition-colors text-slate-400"
                >
                  Vật lí 11: Dao động, Sóng & Mạch điện
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('grade12')}
                  className="hover:text-teal-400 transition-colors text-slate-400"
                >
                  Vật lí 12: Nhiệt học & Khí lí tưởng
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Libraries Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Kho học liệu mở
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectTab('experiments')}
                  className="hover:text-teal-400 transition-colors text-slate-400"
                >
                  Kho thí nghiệm & Mô phỏng tương tác
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('videos')}
                  className="hover:text-teal-400 transition-colors text-slate-400"
                >
                  Thư viện video bài học & Thí nghiệm
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('documents')}
                  className="hover:text-teal-400 transition-colors text-slate-400"
                >
                  Thư viện phiếu học tập, PPTX & Canva
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('teacher_portal')}
                  className="hover:text-teal-400 transition-colors text-slate-400"
                >
                  Khu vực giáo viên & Quản trị bài học
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Author credit line */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <p>© 2026 {settings.siteName}. Bản quyền sư phạm mở.</p>
          
          {/* Small author line specified in Requirement 2: "Ths: Lê Long - QT" */}
          <div className="flex items-center space-x-1.5 text-slate-300 font-mono text-[11px] bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
            <span className="text-teal-400">Tác giả:</span>
            <span className="font-semibold text-white">{settings.authorLine}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
