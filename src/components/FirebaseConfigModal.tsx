import React from 'react';
import { isFirebaseConfigured, missingFirebaseConfigs } from '../services/firebase';

interface FirebaseConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onResetSampleData: () => void;
}

export const FirebaseConfigModal: React.FC<FirebaseConfigModalProps> = ({
  isOpen,
  onClose,
  onResetSampleData,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 my-8 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center pb-3 border-b border-slate-200">
          <div className="flex items-center space-x-2">
            <span className={`w-3 h-3 rounded-full ${isFirebaseConfigured ? 'bg-emerald-500' : 'bg-amber-500'}`} />
            <h3 className="text-lg font-bold text-slate-800">
              Trạng thái Cấu hình Firebase & Đám mây
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 font-bold text-xl"
          >
            ✕
          </button>
        </div>

        <div className="my-4 space-y-4 text-sm text-slate-600">
          <div className={`p-4 rounded-lg border ${
            isFirebaseConfigured 
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
              : 'bg-amber-50 border-amber-200 text-amber-900'
          }`}>
            <p className="font-semibold flex items-center gap-1.5">
              <span>{isFirebaseConfigured ? '✅' : 'ℹ'}</span>
              {isFirebaseConfigured
                ? 'Hệ thống đã kết nối trực tiếp với Firebase Cloud Firestore & Storage!'
                : 'Đang hoạt động ở Chế độ Bản xem trước / Mô phỏng (Preview & Demo Mode)'}
            </p>
            <p className="text-xs mt-1">
              {isFirebaseConfigured
                ? 'Dữ liệu đang được đồng bộ trực tuyến thời gian thực với Cloud Firestore.'
                : 'Mọi tính năng (soạn bài, duyệt, mô phỏng tải tệp, lọc, KaTeX, phân quyền) đều hoạt động trọn vẹn trong phiên làm việc. Dữ liệu chưa ghi trực tiếp lên đám mây vì chưa nhập khóa API Firebase.'}
            </p>
          </div>

          {!isFirebaseConfigured && (
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Các biến môi trường chưa cấu hình:</h4>
              <div className="bg-slate-900 text-emerald-400 font-mono text-xs p-3 rounded-lg overflow-x-auto space-y-1">
                {missingFirebaseConfigs.map(key => (
                  <div key={key}>- {key}=your_value_here</div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Hướng dẫn kết nối Firebase đầy đủ:</h4>
            <ol className="list-decimal pl-5 space-y-1 text-xs">
              <li>Truy cập <a href="https://console.firebase.google.com" target="_blank" rel="noreferrer" className="text-physics-blue underline">Firebase Console</a> và tạo một dự án mới (ví dụ: <code>vat-ly-10-11-12</code>).</li>
              <li>Bật <strong>Firebase Authentication</strong> (phương thức Google Sign-in và Email/Password).</li>
              <li>Bật <strong>Cloud Firestore</strong> (áp dụng bộ quy tắc trong tệp <code>firestore.rules</code>).</li>
              <li>Bật <strong>Cloud Storage</strong> (áp dụng bộ quy tắc trong tệp <code>storage.rules</code>).</li>
              <li>Tạo tệp <code>.env.local</code> và điền các khóa cấu hình web app từ Firebase Console.</li>
            </ol>
          </div>

          <div className="pt-2 border-t border-slate-200 flex flex-wrap justify-between items-center gap-2">
            <button
              onClick={() => {
                if (window.confirm('Bạn có chắc chắn muốn khôi phục lại 6 bài mẫu và dữ liệu gốc ban đầu?')) {
                  onResetSampleData();
                  onClose();
                }
              }}
              className="px-3 py-1.5 text-xs text-rose-600 hover:bg-rose-50 border border-rose-200 rounded-lg transition-colors font-medium"
            >
              Khôi phục dữ liệu 6 bài mẫu gốc ↺
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold bg-physics-navy text-white rounded-lg hover:bg-physics-blue transition-colors"
            >
              Đã hiểu & Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
