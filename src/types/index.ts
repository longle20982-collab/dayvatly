export type UserRole = 'guest' | 'student' | 'teacher' | 'admin';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  school?: string;
  avatarUrl?: string;
}

export type GradeLevel = 10 | 11 | 12;

export type TextbookSeriesId = 'ket_noi_tri_thuc' | 'canh_dieu' | 'chan_troi_sang_tao';

export interface TextbookInfo {
  id: string;
  name: string;
  publisher: string;
  isDefault: boolean;
}

export type PublishStatus = 'draft' | 'pending_review' | 'published' | 'archived';

export type ResourceType =
  | 'experiment'
  | 'simulation'
  | 'video_experiment'
  | 'video_lesson'
  | 'document'
  | 'presentation'
  | 'worksheet';

export interface Chapter {
  id: string;
  grade: GradeLevel;
  textbookId: string;
  name: string;
  order: number;
  description: string;
  isSpecialTopic?: boolean; // Chuyên đề học tập
}

export interface FormulaItem {
  latex: string;
  name: string;
  explanation: string;
  unit: string;
  applicability: string;
}

export interface PracticeExercise {
  id: string;
  question: string;
  type: 'mcq' | 'essay';
  options?: string[];
  correctAnswer?: string;
  solutionGuide: string;
  isPublishedGuide: boolean;
}

export interface IllustrationItem {
  id: string;
  title: string;
  type: 'diagram' | 'chart' | 'mindmap' | 'image';
  url: string;
  caption: string;
}

export interface Lesson {
  id: string;
  grade: GradeLevel;
  chapterId: string;
  chapterName: string;
  title: string;
  order: number;
  textbookId: string;
  status: PublishStatus;
  authorId: string;
  authorName: string;
  isSpecialTopic: boolean;
  isSample: boolean; // Nội dung minh họa – cần giáo viên rà soát
  createdAt: string;
  updatedAt: string;
  objectives: {
    knowledge: string[];
    skills: string[];
    expectedOutcomes: string[];
  };
  keyKnowledge: {
    concepts: string[];
    laws: string[];
    formulas: FormulaItem[];
    commonErrors: string[];
  };
  illustrations: IllustrationItem[];
  practiceExercises: PracticeExercise[];
  linkedResourceIds: string[];
}

export interface ExperimentMetadata {
  category: 'thí nghiệm thực' | 'mô phỏng tương tác' | 'video minh họa';
  purpose: string;
  equipment: string[];
  setupDiagramUrl?: string;
  theory: string;
  steps: string[];
  safetyNotes: string[];
  commonMistakes: string[];
  sampleDataTable?: {
    headers: string[];
    rows: (string | number)[][];
  };
  dataAnalysisGuide: string;
  errorHandling: string;
  preQuestions: string[];
  postQuestions: string[];
  assumptionsAndLimits?: string;
  downloadableTemplateName?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  grade: GradeLevel;
  chapterId: string;
  linkedLessonIds: string[]; // Many-to-many: a single resource can link to multiple lessons!
  textbookId: string;
  author: string;
  authorId: string;
  source: string;
  licenseInfo: string;
  tags: string[];
  status: PublishStatus;
  reviewStatus: 'draft' | 'pending' | 'approved' | 'rejected';
  reviewNotes?: string;
  createdAt: string;
  updatedAt: string;
  url?: string;
  fileType?: 'pdf' | 'docx' | 'pptx' | 'xlsx' | 'image' | 'video' | 'interactive';
  fileSize?: number;
  embedType?: 'youtube' | 'phet' | 'canva' | 'powerpoint' | 'geogebra' | 'drive' | 'custom_sim' | 'office_online';
  duration?: string;
  guidingQuestions?: string[];
  experimentData?: ExperimentMetadata;
}

export interface SiteSettings {
  siteName: string;
  authorLine: string; // "Ths: Lê Long - QT"
  announcement: string;
  defaultTextbook: string;
  isFirebaseConnected: boolean;
}

export interface ReportItem {
  id: string;
  resourceId?: string;
  lessonId?: string;
  userEmail?: string;
  issueType: 'broken_link' | 'incorrect_content' | 'audio_video_error' | 'other';
  description: string;
  createdAt: string;
  status: 'new' | 'reviewed' | 'resolved';
}
