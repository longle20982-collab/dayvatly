export interface EmbedInfo {
  type: 'youtube' | 'phet' | 'canva' | 'powerpoint' | 'drive' | 'direct_video' | 'pdf' | 'unsupported';
  embedUrl: string | null;
  originalUrl: string;
  canEmbed: boolean;
  videoId?: string;
  thumbnailUrl?: string;
  message?: string;
}

export function parseEmbedUrl(url: string | undefined): EmbedInfo {
  if (!url || !url.trim()) {
    return { type: 'unsupported', embedUrl: null, originalUrl: '', canEmbed: false, message: 'Chưa có đường dẫn.' };
  }

  const cleanUrl = url.trim();

  // Validate scheme: only http and https allowed
  if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
    return {
      type: 'unsupported',
      embedUrl: null,
      originalUrl: cleanUrl,
      canEmbed: false,
      message: 'Chỉ chấp nhận đường dẫn bắt đầu bằng http:// hoặc https://',
    };
  }

  // 1. YouTube
  const ytMatch = cleanUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  if (ytMatch && ytMatch[1]) {
    const vidId = ytMatch[1];
    return {
      type: 'youtube',
      embedUrl: `https://www.youtube-nocookie.com/embed/${vidId}?rel=0&modestbranding=1`,
      originalUrl: cleanUrl,
      canEmbed: true,
      videoId: vidId,
      thumbnailUrl: `https://img.youtube.com/vi/${vidId}/hqdefault.jpg`,
    };
  }

  // 2. PhET Interactive Simulations
  if (cleanUrl.includes('phet.colorado.edu')) {
    // PhET HTML5 sims can be directly embedded in iframe
    return {
      type: 'phet',
      embedUrl: cleanUrl,
      originalUrl: cleanUrl,
      canEmbed: true,
    };
  }

  // 3. Canva Presentation Embed
  if (cleanUrl.includes('canva.com/design')) {
    let canvaEmbed = cleanUrl;
    if (!canvaEmbed.includes('embed')) {
      canvaEmbed = canvaEmbed.replace(/\/view(\?.*)?$/, '/view?embed');
    }
    return {
      type: 'canva',
      embedUrl: canvaEmbed,
      originalUrl: cleanUrl,
      canEmbed: true,
    };
  }

  // 4. Google Drive Preview
  if (cleanUrl.includes('drive.google.com')) {
    const driveMatch = cleanUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
      return {
        type: 'drive',
        embedUrl: `https://drive.google.com/file/d/${driveMatch[1]}/preview`,
        originalUrl: cleanUrl,
        canEmbed: true,
        message: 'Lưu ý: Tệp Google Drive phải được bật quyền "Bất kì ai có đường liên kết đều có thể xem".',
      };
    }
  }

  // 5. OneDrive / PowerPoint Embed
  if (cleanUrl.includes('onedrive.live.com') || cleanUrl.includes('sharepoint.com')) {
    return {
      type: 'powerpoint',
      embedUrl: cleanUrl,
      originalUrl: cleanUrl,
      canEmbed: true,
      message: 'Lưu ý: Tệp PowerPoint OneDrive phải sử dụng mã chia sẻ Nhúng (Embed).',
    };
  }

  // 6. Direct MP4 / WebM video files
  if (/\.(mp4|webm|ogg)$/i.test(cleanUrl)) {
    return {
      type: 'direct_video',
      embedUrl: cleanUrl,
      originalUrl: cleanUrl,
      canEmbed: true,
    };
  }

  // 7. Direct PDF
  if (/\.pdf$/i.test(cleanUrl)) {
    return {
      type: 'pdf',
      embedUrl: cleanUrl,
      originalUrl: cleanUrl,
      canEmbed: true,
    };
  }

  // Default unsupported direct embed - provide button to open original
  return {
    type: 'unsupported',
    embedUrl: null,
    originalUrl: cleanUrl,
    canEmbed: false,
    message: 'Nguồn liên kết ngoài không hỗ trợ nhúng trực tiếp hoặc cần chứng thực. Vui lòng nhấn "Mở nguồn gốc".',
  };
}
