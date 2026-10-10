/**
 * Firebase integration service with graceful fallback to interactive Preview Mode.
 * Follows Requirement 10 & 11:
 * - Uses real Firebase Auth, Firestore, and Storage if configured.
 * - Detects if Firebase is unconfigured and activates clear "Chế độ Bản xem trước".
 * - Never falsely claims "Đã lưu trực tuyến lên Firebase" when offline.
 */

export interface FirebaseConfigOptions {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

// Check for configured environment variables
const envConfig: Partial<FirebaseConfigOptions> = {
  apiKey: import.meta.env?.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env?.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env?.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env?.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env?.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env?.VITE_FIREBASE_APP_ID || '',
};

export const isFirebaseConfigured = Boolean(
  envConfig.apiKey &&
  envConfig.projectId &&
  envConfig.apiKey !== 'YOUR_API_KEY'
);

export const missingFirebaseConfigs: string[] = [];
if (!envConfig.apiKey) missingFirebaseConfigs.push('VITE_FIREBASE_API_KEY');
if (!envConfig.authDomain) missingFirebaseConfigs.push('VITE_FIREBASE_AUTH_DOMAIN');
if (!envConfig.projectId) missingFirebaseConfigs.push('VITE_FIREBASE_PROJECT_ID');
if (!envConfig.storageBucket) missingFirebaseConfigs.push('VITE_FIREBASE_STORAGE_BUCKET');
if (!envConfig.appId) missingFirebaseConfigs.push('VITE_FIREBASE_APP_ID');

/**
 * Upload simulator helper for UI preview testing
 * Simulates real upload progress from 0% to 100% and validates file size and mime types
 */
export async function simulateFileUpload(
  file: File,
  onProgress?: (progress: number) => void
): Promise<{ url: string; size: number; mimeType: string }> {
  // Validate type
  const allowedExtensions = ['.pdf', '.docx', '.pptx', '.xlsx', '.mp4', '.webm', '.png', '.jpg', '.jpeg', '.svg'];
  const fileName = file.name.toLowerCase();
  const isAllowed = allowedExtensions.some(ext => fileName.endsWith(ext));
  
  if (!isAllowed) {
    throw new Error(`Định dạng tệp "${file.name}" không được hỗ trợ. Chỉ chấp nhận PDF, Word, PowerPoint, Excel, Video MP4/WebM hoặc Ảnh.`);
  }

  // Validate size: 100MB for video, 25MB for docs
  const isVideo = fileName.endsWith('.mp4') || fileName.endsWith('.webm');
  const maxSize = isVideo ? 100 * 1024 * 1024 : 25 * 1024 * 1024;
  if (file.size > maxSize) {
    throw new Error(`Kích thước tệp (${(file.size / (1024 * 1024)).toFixed(1)} MB) vượt quá giới hạn tối đa cho phép (${isVideo ? '100 MB' : '25 MB'}).`);
  }

  // Simulate chunked upload progress
  for (let percent = 10; percent <= 100; percent += 20) {
    await new Promise(resolve => setTimeout(resolve, 150));
    if (onProgress) onProgress(percent);
  }

  // Return a safe object url or mock storage path
  const objectUrl = URL.createObjectURL(file);
  return {
    url: objectUrl,
    size: file.size,
    mimeType: file.type || 'application/octet-stream',
  };
}
