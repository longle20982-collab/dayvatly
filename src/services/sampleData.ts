import { Chapter, Lesson, Resource, SiteSettings, TextbookInfo, UserProfile } from '../types';

export const INITIAL_TEXTBOOKS: TextbookInfo[] = [
  {
    id: 'ket_noi_tri_thuc',
    name: 'Kết nối tri thức với cuộc sống',
    publisher: 'NXB Giáo dục Việt Nam',
    isDefault: true,
  },
  {
    id: 'canh_dieu',
    name: 'Cánh diều',
    publisher: 'NXB Đại học Sư phạm',
    isDefault: false,
  },
  {
    id: 'chan_troi_sang_tao',
    name: 'Chân trời sáng tạo',
    publisher: 'NXB Giáo dục Việt Nam',
    isDefault: false,
  },
];

export const INITIAL_CHAPTERS: Chapter[] = [
  // Lớp 10
  { id: 'c10_1', grade: 10, textbookId: 'ket_noi_tri_thuc', name: 'Mở đầu và phương pháp nghiên cứu', order: 1, description: 'Đối tượng nghiên cứu của Vật lí, các quy tắc an toàn trong phòng thực hành và sai số phép đo.' },
  { id: 'c10_2', grade: 10, textbookId: 'ket_noi_tri_thuc', name: 'Động học', order: 2, description: 'Mô tả chuyển động: độ dịch chuyển, vận tốc, gia tốc, chuyển động thẳng biến đổi đều và rơi tự do.' },
  { id: 'c10_3', grade: 10, textbookId: 'ket_noi_tri_thuc', name: 'Động lực học', order: 3, description: 'Các định luật Newton, các lực cơ học cơ bản, ma sát và cân bằng lực.' },
  { id: 'c10_4', grade: 10, textbookId: 'ket_noi_tri_thuc', name: 'Công – năng lượng – công suất', order: 4, description: 'Công cơ học, định luật bảo toàn cơ năng, công suất và hiệu suất.' },
  { id: 'c10_5', grade: 10, textbookId: 'ket_noi_tri_thuc', name: 'Động lượng', order: 5, description: 'Động lượng, xung lượng của lực, định luật bảo toàn động lượng và va chạm.' },
  { id: 'c10_6', grade: 10, textbookId: 'ket_noi_tri_thuc', name: 'Chuyển động tròn', order: 6, description: 'Tốc độ góc, gia tốc hướng tâm và lực hướng tâm.' },
  { id: 'c10_7', grade: 10, textbookId: 'ket_noi_tri_thuc', name: 'Biến dạng của vật rắn', order: 7, description: 'Biến dạng kéo, biến dạng nén, định luật Hooke và ứng suất.' },
  { id: 'c10_sp', grade: 10, textbookId: 'ket_noi_tri_thuc', name: 'Chuyên đề học tập Vật lí 10', order: 8, description: 'Vật lí trong các ngành nghề, ứng dụng STEM và cơ học ứng dụng.', isSpecialTopic: true },

  // Lớp 11
  { id: 'c11_1', grade: 11, textbookId: 'ket_noi_tri_thuc', name: 'Dao động', order: 1, description: 'Dao động điều hòa, con lắc đơn, con lắc lò xo, dao động tắt dần và cộng hưởng.' },
  { id: 'c11_2', grade: 11, textbookId: 'ket_noi_tri_thuc', name: 'Sóng', order: 2, description: 'Sóng cơ, giao thoa sóng, sóng dừng và sóng âm.' },
  { id: 'c11_3', grade: 11, textbookId: 'ket_noi_tri_thuc', name: 'Điện trường', order: 3, description: 'Lực tương tác Coulomb, điện trường, điện thế, hiệu điện thế và tụ điện.' },
  { id: 'c11_4', grade: 11, textbookId: 'ket_noi_tri_thuc', name: 'Dòng điện và mạch điện', order: 4, description: 'Cường độ dòng điện, định luật Ohm, nguồn điện, suất điện động và năng lượng điện.' },
  { id: 'c11_sp', grade: 11, textbookId: 'ket_noi_tri_thuc', name: 'Chuyên đề học tập Vật lí 11', order: 5, description: 'Cảm biến điện tử, mạch điều khiển và quang học ứng dụng.', isSpecialTopic: true },

  // Lớp 12
  { id: 'c12_1', grade: 12, textbookId: 'ket_noi_tri_thuc', name: 'Vật lí nhiệt', order: 1, description: 'Mô hình động học phân tử, nhiệt độ, nhiệt dung riêng, nhiệt nóng chảy và nhiệt hóa hơi riêng.' },
  { id: 'c12_2', grade: 12, textbookId: 'ket_noi_tri_thuc', name: 'Khí lí tưởng', order: 2, description: 'Mô hình khí lí tưởng, định luật Boyle, định luật Charles và phương trình trạng thái Clapeyron.' },
  { id: 'c12_3', grade: 12, textbookId: 'ket_noi_tri_thuc', name: 'Từ trường và cảm ứng điện từ', order: 3, description: 'Từ trường, cảm ứng từ, định luật Faraday về cảm ứng điện từ và sóng điện từ.' },
  { id: 'c12_4', grade: 12, textbookId: 'ket_noi_tri_thuc', name: 'Vật lí hạt nhân', order: 4, description: 'Cấu tạo hạt nhân, năng lượng liên kết, hiện tượng phóng xạ và phản ứng hạt nhân.' },
  { id: 'c12_sp', grade: 12, textbookId: 'ket_noi_tri_thuc', name: 'Chuyên đề học tập Vật lí 12', order: 5, description: 'Vật lí bán dẫn, công nghệ hạt nhân và thiết bị y sinh.', isSpecialTopic: true },
];

export const INITIAL_LESSONS: Lesson[] = [
  // LỚP 10 - Bài 1
  {
    id: 'lesson_10_1',
    grade: 10,
    chapterId: 'c10_2',
    chapterName: 'Động học',
    title: 'Chuyển động thẳng biến đổi đều',
    order: 1,
    textbookId: 'ket_noi_tri_thuc',
    status: 'published',
    authorId: 'teacher_long',
    authorName: 'Ths: Lê Long - QT',
    isSpecialTopic: false,
    isSample: true,
    createdAt: '2026-09-01T08:00:00Z',
    updatedAt: '2026-10-01T10:30:00Z',
    objectives: {
      knowledge: [
        'Nêu được định nghĩa gia tốc và ý nghĩa của gia tốc trong chuyển động biến đổi đều.',
        'Viết được các công thức vận tốc, độ dịch chuyển và hệ thức liên hệ độc lập với thời gian.',
        'Phân biệt được chuyển động thẳng nhanh dần đều và chuyển động thẳng chậm dần đều dựa vào dấu của v và a.'
      ],
      skills: [
        'Vận dụng thành thạo các công thức vào việc giải bài tập và phân tích đồ thị vận tốc – thời gian (v - t).',
        'Khai thác bảng số liệu thí nghiệm với cổng quang điện để xác định gia tốc chuyển động.'
      ],
      expectedOutcomes: [
        'Học sinh giải thích được hiện tượng xe hãm phanh an toàn trong giao thông thực tiễn.',
        'Học sinh tự thiết kế được bảng đo và tính toán sai số gia tốc trong phòng thực hành.'
      ]
    },
    keyKnowledge: {
      concepts: [
        'Chuyển động thẳng biến đổi đều là chuyển động thẳng trong đó gia tốc tức thời không đổi theo thời gian (a = hằng số).',
        'Chuyển động nhanh dần đều: độ lớn vận tốc tăng đều theo thời gian (vectơ a cùng chiều với vectơ v, tức a · v > 0).',
        'Chuyển động chậm dần đều: độ lớn vận tốc giảm đều theo thời gian (vectơ a ngược chiều với vectơ v, tức a · v < 0).'
      ],
      laws: [
        'Định luật chuyển động biến đổi: Trong khoảng thời gian t bất kì, độ biến thiên vận tốc Δv tỉ lệ thuận với thời gian Δt.'
      ],
      formulas: [
        {
          name: 'Công thức vận tốc',
          latex: 'v = v_0 + a \\cdot t',
          explanation: 'v: vận tốc tại thời điểm t; v_0: vận tốc ban đầu; a: gia tốc; t: thời gian chuyển động.',
          unit: 'v, v_0 (m/s); a (m/s^2); t (s)',
          applicability: 'Áp dụng cho mọi chuyển động thẳng có gia tốc a không đổi.'
        },
        {
          name: 'Công thức độ dịch chuyển',
          latex: 'd = v_0 t + \\frac{1}{2} a t^2',
          explanation: 'd: độ dịch chuyển sau khoảng thời gian t.',
          unit: 'd (m); v_0 (m/s); t (s); a (m/s^2)',
          applicability: 'Vật chuyển động theo một chiều trên trục tọa độ đã chọn.'
        },
        {
          name: 'Hệ thức độc lập thời gian',
          latex: 'v^2 - v_0^2 = 2 \\cdot a \\cdot d',
          explanation: 'Mối liên hệ giữa vận tốc, gia tốc và độ dịch chuyển không chứa biến thời gian t.',
          unit: 'v, v_0 (m/s); a (m/s^2); d (m)',
          applicability: 'Hữu ích khi đề bài không cho hoặc không yêu cầu tìm thời gian t.'
        },
        {
          name: 'Phương trình tọa độ',
          latex: 'x = x_0 + v_0 t + \\frac{1}{2} a t^2',
          explanation: 'x: tọa độ tại thời điểm t; x_0: tọa độ ban đầu của vật.',
          unit: 'x, x_0 (m)',
          applicability: 'Khi xét chuyển động gắn với một gốc tọa độ O xác định.'
        }
      ],
      commonErrors: [
        'Nhầm dấu giữa a và v0 trong chuyển động chậm dần đều: nếu chọn chiều dương là chiều chuyển động (v0 > 0) thì a phải mang dấu âm.',
        'Đồng nhất độ dịch chuyển d với quãng đường s: nếu vật đảo chiều chuyển động, quãng đường s là tổng độ dài các đoạn, trong khi d = x_cuối - x_đầu.',
        'Quên đổi đơn vị km/h sang m/s (chia cho 3.6) trước khi thay số vào công thức gia tốc.'
      ]
    },
    illustrations: [
      {
        id: 'ill_10_1_1',
        title: 'Đồ thị vận tốc – thời gian (v - t)',
        type: 'chart',
        url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
        caption: 'Đồ thị v-t là một đường thẳng xiên: độ dốc đường thẳng chính là gia tốc a, diện tích hình thang giới hạn dưới đồ thị chính là độ dịch chuyển d.'
      },
      {
        id: 'ill_10_1_2',
        title: 'Sơ đồ phân biệt nhanh dần đều và chậm dần đều',
        type: 'diagram',
        url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
        caption: 'Quy ước vectơ: a cùng hướng v khi nhanh dần; a ngược hướng v khi chậm dần.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe_10_1_1',
        type: 'mcq',
        question: 'Một xe ô tô đang chạy với vận tốc 20 m/s thì tài xế hãm phanh, xe chuyển động chậm dần đều với gia tốc có độ lớn 2 m/s². Quãng đường xe đi được cho đến khi dừng hẳn là bao nhiêu?',
        options: ['A. 50 m', 'B. 100 m', 'C. 200 m', 'D. 40 m'],
        correctAnswer: 'B. 100 m',
        solutionGuide: 'Khi dừng hẳn thì v = 0 m/s. Vận tốc ban đầu v_0 = 20 m/s. Vì xe chậm dần đều nên a = -2 m/s². Áp dụng hệ thức liên hệ v^2 - v_0^2 = 2ad => 0^2 - 20^2 = 2 * (-2) * d => -400 = -4d => d = 100 m. Quãng đường s = d = 100 m.',
        isPublishedGuide: true
      },
      {
        id: 'pe_10_1_2',
        type: 'essay',
        question: 'Một đoàn tàu bắt đầu rời ga chuyển động thẳng nhanh dần đều. Sau 20 s tàu đạt vận tốc 36 km/h. Hãy tính: a) Gia tốc của đoàn tàu. b) Quãng đường tàu đi được trong 20 s đầu.',
        solutionGuide: 'Đổi vận tốc v = 36 km/h = 10 m/s; vì xuất phát từ trạng thái nghỉ nên v_0 = 0. a) Gia tốc: a = (v - v_0) / t = (10 - 0) / 20 = 0.5 m/s². b) Quãng đường: s = v_0*t + 0.5*a*t^2 = 0 + 0.5 * 0.5 * 20^2 = 100 m.',
        isPublishedGuide: true
      }
    ],
    linkedResourceIds: ['res_exp_10_1', 'res_sim_10_1', 'res_vid_10_1', 'res_vid_10_exp', 'res_doc_10_1', 'res_doc_shared_measure']
  },

  // LỚP 10 - Bài 2
  {
    id: 'lesson_10_2',
    grade: 10,
    chapterId: 'c10_3',
    chapterName: 'Động lực học',
    title: 'Định luật II Newton',
    order: 2,
    textbookId: 'ket_noi_tri_thuc',
    status: 'published',
    authorId: 'teacher_long',
    authorName: 'Ths: Lê Long - QT',
    isSpecialTopic: false,
    isSample: true,
    createdAt: '2026-09-05T09:00:00Z',
    updatedAt: '2026-10-02T11:00:00Z',
    objectives: {
      knowledge: [
        'Phát biểu được định luật II Newton và viết được công thức toán học dưới dạng vectơ và độ lớn.',
        'Nêu được định nghĩa đơn vị lực Newton (N) trong hệ SI.',
        'Hiểu khối lượng là đại lượng đặc trưng cho mức quán tính của vật.'
      ],
      skills: [
        'Vẽ được sơ đồ lực tác dụng lên vật (Free Body Diagram) và áp dụng phương pháp chiếu để tìm gia tốc.',
        'Xử lí bảng số liệu thí nghiệm mối quan hệ giữa gia tốc, lực tác dụng và khối lượng xe trượt.'
      ],
      expectedOutcomes: [
        'Giải thích được tại sao xe tải chở nặng cần khoảng cách phanh dài hơn ô tô con khi cùng tốc độ.'
      ]
    },
    keyKnowledge: {
      concepts: [
        'Gia tốc của một vật cùng hướng với lực tác dụng lên vật. Độ lớn của gia tốc tỉ lệ thuận với độ lớn của lực tác dụng và tỉ lệ nghịch với khối lượng của vật.',
        'Khối lượng m: đại lượng vô hướng, đặc trưng cho mức quán tính của vật (khối lượng càng lớn, vật càng khó thay đổi vận tốc).'
      ],
      laws: [
        'Định luật II Newton: Gia tốc thu được tỉ lệ thuận với hợp lực tác dụng và tỉ lệ nghịch với khối lượng.'
      ],
      formulas: [
        {
          name: 'Định luật II Newton (Dạng vectơ)',
          latex: '\\vec{a} = \\frac{\\vec{F}_{hl}}{m} \\quad \\Longleftrightarrow \\quad \\vec{F}_{hl} = m \\cdot \\vec{a}',
          explanation: 'Hợp lực tác dụng lên vật bằng tích của khối lượng và gia tốc của vật.',
          unit: 'F (N); m (kg); a (m/s^2)',
          applicability: 'Hệ quy chiếu quán tính; khối lượng m không đổi; tốc độ nhỏ hơn nhiều tốc độ ánh sáng.'
        },
        {
          name: 'Định nghĩa đơn vị lực Newton',
          latex: '1\\text{ N} = 1\\text{ kg} \\cdot \\text{m/s}^2',
          explanation: 'Lực 1 Newton truyền cho vật khối lượng 1 kg gia tốc 1 m/s².',
          unit: 'Newton (N)',
          applicability: 'Chuẩn đo lường quốc tế SI.'
        }
      ],
      commonErrors: [
        'Quên tính hợp lực F_hl mà chỉ lấy một lực riêng lẻ tác dụng lên vật (ví dụ quên trừ lực ma sát).',
        'Không đổi đơn vị khối lượng từ gam sang kilogam (phải chia cho 1000).',
        'Gán nhầm phương của gia tốc khác với phương của hợp lực.'
      ]
    },
    illustrations: [
      {
        id: 'ill_10_2_1',
        title: 'Sơ đồ phân tích lực trên xe trượt',
        type: 'diagram',
        url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
        caption: 'Phân tích hợp lực gồm trọng lực P, phản lực N, lực kéo F và lực ma sát Fms.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe_10_2_1',
        type: 'mcq',
        question: 'Một lực F có độ lớn 10 N tác dụng lên một vật khối lượng m = 2 kg đang đứng yên trên mặt sàn nằm ngang không ma sát. Sau 3 giây, vật đạt vận tốc là bao nhiêu?',
        options: ['A. 5 m/s', 'B. 15 m/s', 'C. 30 m/s', 'D. 20 m/s'],
        correctAnswer: 'B. 15 m/s',
        solutionGuide: 'Gia tốc của vật: a = F / m = 10 / 2 = 5 m/s². Vì ban đầu đứng yên nên v_0 = 0. Vận tốc sau 3 s: v = v_0 + at = 0 + 5 * 3 = 15 m/s.',
        isPublishedGuide: true
      }
    ],
    linkedResourceIds: ['res_sim_10_2', 'res_exp_10_2', 'res_vid_10_2', 'res_doc_10_2', 'res_doc_shared_measure']
  },

  // LỚP 11 - Bài 3
  {
    id: 'lesson_11_1',
    grade: 11,
    chapterId: 'c11_1',
    chapterName: 'Dao động',
    title: 'Dao động điều hòa',
    order: 1,
    textbookId: 'ket_noi_tri_thuc',
    status: 'published',
    authorId: 'teacher_long',
    authorName: 'Ths: Lê Long - QT',
    isSpecialTopic: false,
    isSample: true,
    createdAt: '2026-09-10T08:30:00Z',
    updatedAt: '2026-10-03T09:15:00Z',
    objectives: {
      knowledge: [
        'Phát biểu được định nghĩa dao động điều hòa.',
        'Viết và giải thích ý nghĩa các đại lượng trong phương trình li độ, vận tốc và gia tốc.',
        'Nêu được mối quan hệ về pha giữa li độ, vận tốc và gia tốc trong dao động điều hòa.'
      ],
      skills: [
        'Sử dụng vòng tròn lượng giác (vectơ quay Fresnel) để xác định thời gian và trạng thái dao động.',
        'Đọc và phân tích đồ thị dao động điều hòa li độ - thời gian (x - t).'
      ],
      expectedOutcomes: [
        'Tính toán chu kì, tần số và biên độ từ đồ thị hoặc phương trình dao động thực tế.'
      ]
    },
    keyKnowledge: {
      concepts: [
        'Dao động điều hòa là dao động trong đó li độ của vật là một hàm cosin (hoặc sin) của thời gian.',
        'Biên độ A: độ lệch cực đại của vật khỏi vị trí cân bằng (A > 0).',
        'Pha dao động (ωt + φ): xác định trạng thái dao động (vị trí và chiều chuyển động) tại thời điểm t.',
        'Pha ban đầu φ: xác định trạng thái dao động tại thời điểm t = 0 (-π ≤ φ ≤ π).'
      ],
      laws: [
        'Định luật chuyển động điều hòa: Gia tốc luôn tỉ lệ với li độ và hướng về vị trí cân bằng (ngược dấu với li độ).'
      ],
      formulas: [
        {
          name: 'Phương trình li độ',
          latex: 'x = A \\cos(\\omega t + \\varphi)',
          explanation: 'x: li độ tại thời điểm t; A: biên độ dao động; ω: tần số góc; φ: pha ban đầu.',
          unit: 'x, A (cm hoặc m); ω (rad/s); φ (rad)',
          applicability: 'Hệ dao động cơ học không ma sát xung quanh vị trí cân bằng.'
        },
        {
          name: 'Phương trình vận tốc',
          latex: 'v = x\' = -\\omega A \\sin(\\omega t + \\varphi) = \\omega A \\cos\\left(\\omega t + \\varphi + \\frac{\\pi}{2}\\right)',
          explanation: 'Vận tốc sớm pha π/2 so với li độ; cực đại khi qua VTCB theo chiều dương: v_max = ωA.',
          unit: 'v (cm/s hoặc m/s)',
          applicability: 'Đạo hàm bậc nhất của li độ theo thời gian.'
        },
        {
          name: 'Phương trình gia tốc',
          latex: 'a = v\' = -\\omega^2 x = \\omega^2 A \\cos(\\omega t + \\varphi + \\pi)',
          explanation: 'Gia tốc sớm pha π so với li độ (ngược pha); có độ lớn cực đại tại biên: a_max = ω²A.',
          unit: 'a (cm/s^2 hoặc m/s^2)',
          applicability: 'Gia tốc luôn hướng về vị trí cân bằng.'
        },
        {
          name: 'Hệ thức độc lập thời gian',
          latex: 'A^2 = x^2 + \\frac{v^2}{\\omega^2} = \\frac{a^2}{\\omega^4} + \\frac{v^2}{\\omega^2}',
          explanation: 'Liên hệ giữa li độ, vận tốc và gia tốc tại cùng một thời điểm bất kì.',
          unit: 'Các đại lượng phải cùng hệ đơn vị (cùng cm hoặc cùng m)',
          applicability: 'Áp dụng cho mọi thời điểm trong dao động điều hòa.'
        }
      ],
      commonErrors: [
        'Quên đổi đơn vị giữa x (cm) và v (m/s) khi áp dụng công thức độc lập thời gian A² = x² + (v/ω)², dẫn tới kết quả sai gấp 100 lần.',
        'Xác định sai dấu của pha ban đầu φ: nếu vật đi theo chiều âm (v < 0) thì sin φ > 0 tức φ mang giá trị dương; nếu đi theo chiều dương thì φ âm.',
        'Nhầm tần số góc ω (rad/s) với tần số f (Hz): cần nhớ ω = 2πf = 2π/T.'
      ]
    },
    illustrations: [
      {
        id: 'ill_11_1_1',
        title: 'Mối quan hệ pha giữa x, v, a',
        type: 'chart',
        url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
        caption: 'Đồ thị biểu diễn pha: v vuông pha với x (sớm pha π/2); a ngược pha với x.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe_11_1_1',
        type: 'mcq',
        question: 'Một chất điểm dao động điều hòa với phương trình x = 4 cos(2πt + π/3) (cm). Biên độ và tần số dao động của chất điểm là:',
        options: ['A. A = 4 cm; f = 2 Hz', 'B. A = 4 cm; f = 1 Hz', 'C. A = 8 cm; f = 1 Hz', 'D. A = 4 cm; f = 2π Hz'],
        correctAnswer: 'B. A = 4 cm; f = 1 Hz',
        solutionGuide: 'Từ phương trình: Biên độ A = 4 cm; tần số góc ω = 2π rad/s => Tần số f = ω / (2π) = 2π / (2π) = 1 Hz.',
        isPublishedGuide: true
      }
    ],
    linkedResourceIds: ['res_sim_11_1', 'res_exp_11_1', 'res_vid_11_1', 'res_doc_11_1', 'res_doc_canva_11_1']
  },

  // LỚP 11 - Bài 4
  {
    id: 'lesson_11_2',
    grade: 11,
    chapterId: 'c11_4',
    chapterName: 'Dòng điện và mạch điện',
    title: 'Định luật Ohm cho đoạn mạch chỉ có điện trở',
    order: 2,
    textbookId: 'ket_noi_tri_thuc',
    status: 'published',
    authorId: 'teacher_long',
    authorName: 'Ths: Lê Long - QT',
    isSpecialTopic: false,
    isSample: true,
    createdAt: '2026-09-12T10:00:00Z',
    updatedAt: '2026-10-04T14:20:00Z',
    objectives: {
      knowledge: [
        'Phát biểu được định luật Ohm cho đoạn mạch chỉ chứa điện trở thuần.',
        'Nêu được định nghĩa điện trở và đơn vị Ôm (Ω).',
        'Mô tả được đường đặc trưng vôn – ampe (đặc tuyến V-A) của vật dẫn kim loại.'
      ],
      skills: [
        'Mắc được mạch điện đo cường độ dòng điện và hiệu điện thế bằng đồng hồ đa năng.',
        'Vẽ và suy ra giá trị điện trở R từ đồ thị đặc tuyến V-A.'
      ],
      expectedOutcomes: [
        'Tính toán được dòng điện chạy qua các thiết bị tiêu thụ điện dân dụng.'
      ]
    },
    keyKnowledge: {
      concepts: [
        'Điện trở R: đại lượng đặc trưng cho mức độ cản trở dòng điện của vật dẫn.',
        'Đặc tuyến V-A của vật dẫn tuân theo định luật Ohm là một đoạn thẳng đi qua gốc tọa độ O.'
      ],
      laws: [
        'Định luật Ohm: Cường độ dòng điện chạy qua đoạn mạch chỉ có điện trở tỉ lệ thuận với hiệu điện thế giữa hai đầu đoạn mạch và tỉ lệ nghịch với điện trở của đoạn mạch.'
      ],
      formulas: [
        {
          name: 'Định luật Ohm',
          latex: 'I = \\frac{U}{R} \\quad \\Longleftrightarrow \\quad U = I \\cdot R',
          explanation: 'I: cường độ dòng điện; U: hiệu điện thế; R: điện trở.',
          unit: 'I (A); U (V); R (Ω)',
          applicability: 'Đoạn mạch thuần điện trở kim loại ở nhiệt độ không đổi.'
        },
        {
          name: 'Điện trở của dây dẫn hình trụ',
          latex: 'R = \\rho \\frac{\\ell}{S}',
          explanation: 'ρ: điện trở suất; ℓ: chiều dài dây dẫn; S: tiết diện dây.',
          unit: 'ρ (Ω·m); ℓ (m); S (m^2)',
          applicability: 'Dây dẫn đồng chất có tiết diện đều.'
        }
      ],
      commonErrors: [
        'Mắc sai đồng hồ đo: Ampe kế phải mắc nối tiếp với điện trở; Vôn kế phải mắc song song hai đầu điện trở.',
        'Tưởng lầm R thay đổi khi thay đổi U hoặc I: với vật dẫn tuân theo định luật Ohm ở nhiệt độ ổn định, R là hằng số đặc trưng cho vật dẫn, không phụ thuộc vào U và I.'
      ]
    },
    illustrations: [
      {
        id: 'ill_11_2_1',
        title: 'Sơ đồ mạch điện thí nghiệm kiểm chứng định luật Ohm',
        type: 'diagram',
        url: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=800&q=80',
        caption: 'Nguồn điện điều chỉnh, khóa K, ampe kế mắc nối tiếp, vôn kế mắc song song với biến trở R.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe_11_2_1',
        type: 'mcq',
        question: 'Đặt vào hai đầu một điện trở R = 20 Ω một hiệu điện thế U = 12 V. Cường độ dòng điện chạy qua điện trở là:',
        options: ['A. 0.6 A', 'B. 1.67 A', 'C. 240 A', 'D. 0.4 A'],
        correctAnswer: 'A. 0.6 A',
        solutionGuide: 'Áp dụng định luật Ohm: I = U / R = 12 / 20 = 0.6 A.',
        isPublishedGuide: true
      }
    ],
    linkedResourceIds: ['res_sim_11_2', 'res_exp_11_2', 'res_vid_11_2', 'res_doc_11_2']
  },

  // LỚP 12 - Bài 5
  {
    id: 'lesson_12_1',
    grade: 12,
    chapterId: 'c12_1',
    chapterName: 'Vật lí nhiệt',
    title: 'Nhiệt hóa hơi riêng',
    order: 1,
    textbookId: 'ket_noi_tri_thuc',
    status: 'published',
    authorId: 'teacher_long',
    authorName: 'Ths: Lê Long - QT',
    isSpecialTopic: false,
    isSample: true,
    createdAt: '2026-09-15T08:00:00Z',
    updatedAt: '2026-10-05T16:00:00Z',
    objectives: {
      knowledge: [
        'Nêu được định nghĩa nhiệt hóa hơi riêng và đơn vị đo trong hệ SI (J/kg).',
        'Viết được công thức tính nhiệt lượng cần cung cấp để hóa hơi hoàn toàn một khối lượng chất lỏng ở nhiệt độ sôi.',
        'Mô tả được nguyên tắc và các bước thí nghiệm đo nhiệt hóa hơi riêng của nước.'
      ],
      skills: [
        'Tính toán nhiệt lượng và khối lượng chất lỏng hóa hơi.',
        'Phân tích nguồn gốc sai số trong thí nghiệm nhiệt (sự thất thoát nhiệt ra môi trường, nhiệt dung của bình nhiệt lượng kế).'
      ],
      expectedOutcomes: [
        'Giải thích được ứng dụng làm mát bằng hơi nước và hiện tượng đổ mồ hôi giúp điều hòa thân nhiệt ở người.'
      ]
    },
    keyKnowledge: {
      concepts: [
        'Nhiệt hóa hơi riêng (L) của một chất là nhiệt lượng cần thiết để làm cho một đơn vị khối lượng (1 kg) chất đó chuyển hoàn toàn từ thể lỏng sang thể khí ở nhiệt độ sôi.',
        'Trong suốt quá trình sôi hóa hơi, nhiệt độ của chất lỏng không thay đổi (nhiệt lượng nhận vào dùng để phá vỡ các liên kết phân tử).'
      ],
      laws: [
        'Định luật bảo toàn năng lượng trong biến đổi trạng thái nhiệt: Nhiệt lượng cung cấp bằng năng lượng phá vỡ liên kết cấu trúc pha.'
      ],
      formulas: [
        {
          name: 'Công thức tính nhiệt lượng hóa hơi',
          latex: 'Q = L \\cdot m \\quad \\Longleftrightarrow \\quad L = \\frac{Q}{m}',
          explanation: 'Q: nhiệt lượng cần cung cấp; L: nhiệt hóa hơi riêng; m: khối lượng chất lỏng hóa hơi.',
          unit: 'Q (J); m (kg); L (J/kg)',
          applicability: 'Chất lỏng ở đúng nhiệt độ sôi dưới áp suất xác định.'
        },
        {
          name: 'Nhiệt lượng do dòng điện cung cấp',
          latex: 'Q = P \\cdot \\tau = U \\cdot I \\cdot \\tau',
          explanation: 'P: công suất nhiệt của dây nung; τ: thời gian đun; U, I: điện áp và dòng điện.',
          unit: 'P (W); τ (s); Q (J)',
          applicability: 'Bỏ qua hao phí nhiệt ra môi trường ngoài.'
        }
      ],
      commonErrors: [
        'Nhầm lẫn giữa nhiệt dung riêng c (J/kg·K) dùng cho quá trình tăng nhiệt độ Q = mcΔT với nhiệt hóa hơi riêng L (J/kg) dùng cho chuyển pha đẳng nhiệt Q = Lm.',
        'Không tính khối lượng nước bị bay hơi trước khi nước đạt đến điểm sôi 100°C trong thực nghiệm.'
      ]
    },
    illustrations: [
      {
        id: 'ill_12_1_1',
        title: 'Mô hình chuyển pha lỏng sang khí',
        type: 'diagram',
        url: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80',
        caption: 'Khoảng cách giữa các phân tử thể khí lớn hơn rất nhiều so với thể lỏng; lực tương tác phân tử giảm mạnh.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe_12_1_1',
        type: 'mcq',
        question: 'Nhiệt hóa hơi riêng của nước là 2.26 × 10⁶ J/kg. Nhiệt lượng cần cung cấp để làm bay hơi hoàn toàn 0.5 kg nước ở nhiệt độ 100°C là:',
        options: ['A. 1.13 × 10⁶ J', 'B. 4.52 × 10⁶ J', 'C. 2.26 × 10⁶ J', 'D. 1.13 × 10³ J'],
        correctAnswer: 'A. 1.13 × 10⁶ J',
        solutionGuide: 'Áp dụng công thức Q = L * m = 2.26 * 10^6 * 0.5 = 1.13 * 10^6 J.',
        isPublishedGuide: true
      }
    ],
    linkedResourceIds: ['res_sim_12_1', 'res_exp_12_1', 'res_vid_12_1', 'res_doc_12_1']
  },

  // LỚP 12 - Bài 6
  {
    id: 'lesson_12_2',
    grade: 12,
    chapterId: 'c12_2',
    chapterName: 'Khí lí tưởng',
    title: 'Khí lí tưởng',
    order: 2,
    textbookId: 'ket_noi_tri_thuc',
    status: 'published',
    authorId: 'teacher_long',
    authorName: 'Ths: Lê Long - QT',
    isSpecialTopic: false,
    isSample: true,
    createdAt: '2026-09-18T09:30:00Z',
    updatedAt: '2026-10-06T15:00:00Z',
    objectives: {
      knowledge: [
        'Nêu được mô hình khí lí tưởng và các giả thuyết vi mô của nó.',
        'Phát biểu và viết được phương trình trạng thái của khí lí tưởng (Clapeyron - Mendeleev).',
        'Vận dụng định luật Boyle cho quá trình đẳng nhiệt và định luật Charles cho quá trình đẳng áp.'
      ],
      skills: [
        'Vẽ và chuyển đổi các đồ thị đẳng quá trình trong các hệ trục tọa độ (p - V, V - T, p - T).',
        'Tính toán thông số trạng thái của một lượng khí khi thay đổi điều kiện môi trường.'
      ],
      expectedOutcomes: [
        'Giải thích được hiện tượng áp suất lốp xe tăng lên sau khi chạy đường dài dưới trời nắng gắt.'
      ]
    },
    keyKnowledge: {
      concepts: [
        'Khí lí tưởng là chất khí mà các phân tử được coi là các chất điểm và chỉ tương tác với nhau khi va chạm.',
        'Ba thông số trạng thái của một lượng khí xác định: Áp suất (p), Thể tích (V) và Nhiệt độ tuyệt đối (T).'
      ],
      laws: [
        'Định luật Boyle: Ở nhiệt độ không đổi, tích của áp suất và thể tích của một lượng khí xác định là hằng số (p · V = const).',
        'Định luật Charles: Ở áp suất không đổi, tỉ số thể tích và nhiệt độ tuyệt đối là hằng số (V / T = const).'
      ],
      formulas: [
        {
          name: 'Phương trình trạng thái khí lí tưởng',
          latex: '\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2} \\quad \\Longleftrightarrow \\quad \\frac{p V}{T} = \\text{const}',
          explanation: 'p: áp suất; V: thể tích; T: nhiệt độ Kelvin.',
          unit: 'p (Pa, N/m^2, atm); V (m^3, lít); T (K)',
          applicability: 'Khối lượng khí xác định m = const.'
        },
        {
          name: 'Phương trình Clapeyron – Mendeleev',
          latex: 'p \\cdot V = n \\cdot R \\cdot T = \\frac{m}{M} \\cdot R \\cdot T',
          explanation: 'n: số mol khí; R: hằng số khí lí tưởng (R ≈ 8.31 J/(mol·K)); M: khối lượng mol.',
          unit: 'p (Pa); V (m^3); n (mol); T (K)',
          applicability: 'Cho lượng khí bất kì ở áp suất vừa và nhỏ.'
        },
        {
          name: 'Đổi nhiệt độ Kelvin',
          latex: 'T = t\\,(^\\circ\\text{C}) + 273.15',
          explanation: 'T là nhiệt độ tuyệt đối đo bằng Kelvin.',
          unit: 'Kelvin (K)',
          applicability: 'Bắt buộc dùng T(K) trong các phương trình khí lí tưởng.'
        }
      ],
      commonErrors: [
        'Dùng trực tiếp nhiệt độ Celsius (°C) thay vì nhiệt độ Kelvin (K) khi lập tỉ số p1/T1 = p2/T2, dẫn đến sai sót hoàn toàn.',
        'Không quy đổi thống nhất đơn vị thể tích (1 m³ = 1000 lít) hoặc áp suất (1 atm ≈ 1.013 × 10⁵ Pa).'
      ]
    },
    illustrations: [
      {
        id: 'ill_12_2_1',
        title: 'Mô hình chuyển động hỗn loạn của các phân tử khí trong xilanh',
        type: 'diagram',
        url: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
        caption: 'Va chạm hoàn toàn đàn hồi giữa các phân tử khí và thành bình tạo nên áp suất khí.'
      }
    ],
    practiceExercises: [
      {
        id: 'pe_12_2_1',
        type: 'mcq',
        question: 'Một bình kín chứa khí ở nhiệt độ 27°C và áp suất 2 atm. Khi nung nóng đẳng tích đến 127°C thì áp suất của khí trong bình là:',
        options: ['A. 9.4 atm', 'B. 2.67 atm', 'C. 3.0 atm', 'D. 4.0 atm'],
        correctAnswer: 'B. 2.67 atm',
        solutionGuide: 'Nhiệt độ tuyệt đối: T_1 = 27 + 273 = 300 K; T_2 = 127 + 273 = 400 K. Vì quá trình đẳng tích (V = const) nên: p_1 / T_1 = p_2 / T_2 => p_2 = p_1 * (T_2 / T_1) = 2 * (400 / 300) = 2.67 atm.',
        isPublishedGuide: true
      }
    ],
    linkedResourceIds: ['res_sim_12_2', 'res_exp_12_2', 'res_vid_12_2', 'res_doc_12_2']
  }
];

export const INITIAL_RESOURCES: Resource[] = [
  // 1. Thí nghiệm thực lớp 10 (Chuyển động thẳng biến đổi đều)
  {
    id: 'res_exp_10_1',
    title: 'Thí nghiệm đo gia tốc rơi tự do và chuyển động thẳng biến đổi đều bằng cổng quang điện',
    description: 'Bố trí máng nghiêng, cổng quang điện và đồng hồ hiện số MC-963A để đo thời gian chuyển động và tính gia tốc.',
    type: 'experiment',
    grade: 10,
    chapterId: 'c10_2',
    linkedLessonIds: ['lesson_10_1'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Ths: Lê Long - QT',
    authorId: 'teacher_long',
    source: 'Phòng thí nghiệm Vật lí THPT',
    licenseInfo: 'Tự do sử dụng cho mục đích giáo dục',
    tags: ['đo gia tốc', 'cổng quang điện', 'động học', 'chuyển động biến đổi đều'],
    status: 'published',
    reviewStatus: 'approved',
    reviewNotes: 'Đã thẩm định thông số và bảng số liệu chuẩn.',
    createdAt: '2026-09-02T10:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    fileType: 'image',
    experimentData: {
      category: 'thí nghiệm thực',
      purpose: 'Đo gia tốc của xe trượt trên máng nghiêng và kiểm chứng công thức d = 1/2 * a * t^2.',
      equipment: [
        'Máng nhôm có thước đo dài 1000 mm, vạch chia 1 mm.',
        'Xe trượt cơ học có tấm cản quang chắn sáng.',
        'Hai cổng quang điện hồng ngoại E1, E2.',
        'Đồng hồ đo thời gian hiện số độ phân giải 0.001 s.',
        'Nam châm điện giữ và nhả xe có nút ấn điều khiển.'
      ],
      theory: 'Khi xe chuyển động nhanh dần đều không vận tốc đầu từ cổng E1 đến E2 cách nhau đoạn d: d = 1/2 * a * t^2 => Gia tốc a = 2d / t^2.',
      steps: [
        'Bố trí máng nghiêng góc nghiêng nhẹ khoảng 5-10 độ so với phương ngang.',
        'Lắp cổng quang điện 1 ở vị trí s1 = 10 cm, cổng quang điện 2 ở vị trí s2 = 60 cm (d = 50 cm).',
        'Chọn chế độ đồng hồ đo MODE A <-> B để đo thời gian xe đi từ cổng 1 đến cổng 2.',
        'Đặt xe tiếp xúc nam châm điện, ấn nút nhả xe và đọc thời gian t trên đồng hồ.',
        'Lặp lại thí nghiệm 5 lần với cùng khoảng cách để tính giá trị trung bình và sai số.'
      ],
      safetyNotes: [
        'Giữ nhẹ xe ở cuối máng nghiêng để tránh xe lao mạnh xuống sàn rơi vỡ.',
        'Không để dây nối đồng hồ vướng vào đường ray xe chạy.'
      ],
      commonMistakes: [
        'Tấm cản quang bị lệch khiến cổng quang điện không kích hoạt đúng thời điểm.',
        'Đồng hồ chọn sai chế độ MODE (ví dụ chọn đo thời gian chắn sáng đơn lẻ thay vì khoảng thời gian giữa 2 cổng).'
      ],
      sampleDataTable: {
        headers: ['Lần đo', 'Khoảng cách d (m)', 'Thời gian t (s)', 't² (s²)', 'Gia tốc a = 2d/t² (m/s²)'],
        rows: [
          [1, 0.50, 1.412, 1.994, 0.502],
          [2, 0.50, 1.418, 2.011, 0.497],
          [3, 0.50, 1.409, 1.985, 0.504],
          [4, 0.50, 1.415, 2.002, 0.500],
          [5, 0.50, 1.411, 1.991, 0.502]
        ]
      },
      dataAnalysisGuide: 'Tính giá trị trung bình: a_tb = (a1 + a2 + a3 + a4 + a5) / 5 = 0.501 m/s². Tính sai số ngẫu nhiên tuyệt đối và sai số dụng cụ Δa = Δa_ng + Δa_dc.',
      errorHandling: 'Gia tốc thực tế thu được nhỏ hơn giá trị lí thuyết g*sin(α) do ma sát lăn và sức cản không khí.',
      preQuestions: [
        'Tại sao cần dùng tấm cản quang hẹp thay vì thân xe để kích hoạt cổng quang điện?',
        'Để giảm sai số tỉ đối khi đo thời gian, nên đặt khoảng cách giữa hai cổng quang điện lớn hay nhỏ?'
      ],
      postQuestions: [
        'Đồ thị d theo t² có dạng đường gì? Độ dốc của đường đó có ý nghĩa vật lí nào?',
        'Lực ma sát ảnh hưởng thế nào đến giá trị gia tốc đo được?'
      ],
      downloadableTemplateName: 'Mau_bao_cao_TN_Do_gia_toc_Lop10.xlsx'
    }
  },

  // 2. Mô phỏng tương tác lớp 10 (Chuyển động thẳng biến đổi đều)
  {
    id: 'res_sim_10_1',
    title: 'Mô phỏng động học: Xe chuyển động thẳng biến đổi đều và đồ thị thời gian thực',
    description: 'Mô phỏng tương tác trực tiếp với thanh trượt điều chỉnh gia tốc a và vận tốc ban đầu v0, hiển thị đường chạy xe và đồ thị v-t, x-t.',
    type: 'simulation',
    grade: 10,
    chapterId: 'c10_2',
    linkedLessonIds: ['lesson_10_1'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Tổ Vật lí THPT',
    authorId: 'teacher_long',
    source: 'Hệ thống mô phỏng nội bộ',
    licenseInfo: 'Bản quyền giáo dục mở',
    tags: ['mô phỏng', 'HTML5 canvas', 'đồ thị v-t', 'tương tác'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-02T11:00:00Z',
    updatedAt: '2026-10-01T10:00:00Z',
    embedType: 'custom_sim',
    experimentData: {
      category: 'mô phỏng tương tác',
      purpose: 'Quan sát trực quan chuyển động nhanh dần/chậm dần và quy luật hình thành đồ thị v-t.',
      equipment: ['Trình duyệt web hỗ trợ HTML5 Canvas, bộ điều khiển tham số v0 và a.'],
      theory: 'Tọa độ x(t) = v0*t + 0.5*a*t^2; vận tốc v(t) = v0 + a*t.',
      steps: [
        'Kéo thanh trượt điều chỉnh vận tốc ban đầu v0 (ví dụ 0 đến 10 m/s).',
        'Điều chỉnh gia tốc a (từ -4 m/s² đến +4 m/s²).',
        'Bấm "Chạy mô phỏng" và quan sát chuyển động của xe cùng đồ thị vẽ theo thời gian thực.',
        'Thử trường hợp a < 0 và v0 > 0 để quan sát xe chậm dần đều, dừng lại rồi đổi chiều chuyển động.'
      ],
      safetyNotes: ['Không áp dụng (mô phỏng phần mềm).'],
      commonMistakes: ['Bỏ qua việc quan sát dấu của tích a*v khi đổi chiều.'],
      assumptionsAndLimits: 'Giả định bỏ qua mọi ma sát cơ học và lực cản không khí; vật coi như chất điểm chuyển động tịnh tiến.',
      dataAnalysisGuide: 'So sánh diện tích hình phẳng dưới đồ thị v-t với độ dịch chuyển d hiển thị trên màn hình.',
      errorHandling: 'Không có sai số ngẫu nhiên; sai số làm tròn số học trong canvas < 0.01%.',
      preQuestions: ['Dự đoán dạng đồ thị v-t khi gia tốc a = 0 và khi a > 0?'],
      postQuestions: ['Khi xe dừng lại trong chốc lát để đổi chiều, gia tốc của xe bằng bao nhiêu?']
    }
  },

  // 3. Mô phỏng lớp 10 (Định luật II Newton - PhET embed)
  {
    id: 'res_sim_10_2',
    title: 'Mô phỏng PhET: Lực và Chuyển động (Định luật II Newton)',
    description: 'Thí nghiệm ảo PhET Interactive Simulations Colorado khảo sát tác dụng của lực kéo, ma sát và khối lượng lên gia tốc chuyển động.',
    type: 'simulation',
    grade: 10,
    chapterId: 'c10_3',
    linkedLessonIds: ['lesson_10_2'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'PhET Interactive Simulations - University of Colorado Boulder',
    authorId: 'admin_sys',
    source: 'https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_all.html',
    licenseInfo: 'CC-BY PhET Interactive Simulations',
    tags: ['PhET', 'định luật 2 newton', 'lực ma sát', 'gia tốc'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-06T08:00:00Z',
    updatedAt: '2026-10-02T09:00:00Z',
    url: 'https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_all.html',
    embedType: 'phet'
  },

  // 4. Thí nghiệm thực lớp 10 (Định luật II Newton)
  {
    id: 'res_exp_10_2',
    title: 'Thí nghiệm thực hành: Khảo sát mối quan hệ giữa gia tốc, lực tác dụng và khối lượng xe trượt',
    description: 'Sử dụng ròng rọc và chùm quả nặng để tạo lực kéo F, đo gia tốc a khi thay đổi F và khi thay đổi khối lượng m.',
    type: 'experiment',
    grade: 10,
    chapterId: 'c10_3',
    linkedLessonIds: ['lesson_10_2'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Ths: Lê Long - QT',
    authorId: 'teacher_long',
    source: 'Tài liệu hướng dẫn thực hành Vật lí 10',
    licenseInfo: 'Giáo dục',
    tags: ['định luật 2 newton', 'lực kéo', 'khối lượng', 'thực hành'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-06T09:00:00Z',
    updatedAt: '2026-10-02T10:00:00Z',
    experimentData: {
      category: 'thí nghiệm thực',
      purpose: 'Kiểm chứng a tỉ lệ thuận với F (khi m không đổi) và a tỉ lệ nghịch với m (khi F không đổi).',
      equipment: [
        'Đệm khí hoặc máng nhôm ít ma sát.',
        'Xe thí nghiệm gắn cảm biến gia tốc / cổng quang điện.',
        'Hộp quả nặng gia tải (50g, 100g).',
        'Dây nối nhẹ, không giãn và ròng rọc không ma sát.'
      ],
      theory: 'Hợp lực F_hl = m_tong * a.',
      steps: [
        'Cố định khối lượng xe m, thay đổi số quả nặng treo ở đầu dây (F = 0.1N, 0.2N, 0.3N...), đo a.',
        'Cố định số quả nặng treo (F = const), thêm quả nặng lên xe (m = 200g, 300g, 400g...), đo a.'
      ],
      safetyNotes: ['Đỡ chùm quả nặng rơi xuống tránh va đập mạnh làm gãy móc treo.'],
      commonMistakes: ['Bỏ qua khối lượng của chính chùm quả nặng treo vào tổng khối lượng hệ chuyển động.'],
      dataAnalysisGuide: 'Vẽ đồ thị a theo F và đồ thị a theo 1/m, chứng minh đồ thị là đường thẳng qua gốc O.',
      errorHandling: 'Sử dụng đệm khí để triệt tiêu ma sát hoặc nâng nhẹ một đầu máng để bù trừ lực ma sát lăn.',
      preQuestions: ['Vì sao khi khối lượng m của xe càng lớn thì xe càng khó tăng tốc?'],
      postQuestions: ['Độ dốc của đường biểu diễn a theo F biểu thị đại lượng gì?']
    }
  },

  // 5. Thí nghiệm & Mô phỏng lớp 11 (Dao động điều hòa)
  {
    id: 'res_sim_11_1',
    title: 'Mô phỏng tương tác: Con lắc lò xo và vòng tròn lượng giác pha dao động',
    description: 'Mô phỏng con lắc lò xo dao động điều hòa đồng bộ với hình chiếu chuyển động tròn đều và đồ thị li độ x-t.',
    type: 'simulation',
    grade: 11,
    chapterId: 'c11_1',
    linkedLessonIds: ['lesson_11_1'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Ths: Lê Long - QT',
    authorId: 'teacher_long',
    source: 'Phần mềm mô phỏng Vật lí 11',
    licenseInfo: 'Giáo dục mở',
    tags: ['dao động điều hòa', 'con lắc lò xo', 'vòng tròn lượng giác', 'pha dao động'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-10T09:00:00Z',
    updatedAt: '2026-10-03T09:30:00Z',
    embedType: 'custom_sim',
    experimentData: {
      category: 'mô phỏng tương tác',
      purpose: 'Hiểu mối liên hệ giữa dao động điều hòa và chuyển động tròn đều qua vectơ quay.',
      equipment: ['Giao diện tương tác máy tính hoặc máy tính bảng.'],
      theory: 'Hình chiếu của một chất điểm chuyển động tròn đều lên một trục tọa độ là một dao động điều hòa x = A cos(ωt + φ).',
      steps: [
        'Chọn biên độ A (cm) và tần số góc ω (rad/s).',
        'Quan sát chuyển động tròn của điểm M và hình chiếu P dao động trên trục Ox.',
        'Bật hiển thị vectơ vận tốc và vectơ gia tốc để thấy tính vuông pha và ngược pha.'
      ],
      safetyNotes: ['Không áp dụng.'],
      commonMistakes: ['Xác định nhầm chiều quay của vòng tròn lượng giác (luôn ngược chiều kim đồng hồ).'],
      assumptionsAndLimits: 'Bỏ qua ma sát và lực cản môi trường (dao động điều hòa không tắt dần).',
      dataAnalysisGuide: 'Xác định chu kì T = 2π / ω từ đồ thị thời gian.',
      errorHandling: 'Mô phỏng số học chuẩn xác theo phương trình vi phân d²x/dt² + ω²x = 0.',
      preQuestions: ['Tại sao khi vật qua vị trí cân bằng thì vận tốc đạt cực đại còn gia tốc bằng 0?'],
      postQuestions: ['Vectơ gia tốc luôn hướng về điểm nào trong suốt quá trình dao động?']
    }
  },

  // 6. Thí nghiệm thực lớp 11 (Dao động con lắc đơn / lò xo)
  {
    id: 'res_exp_11_1',
    title: 'Thí nghiệm thực hành: Xác định gia tốc trọng trường bằng con lắc đơn',
    description: 'Đo chiều dài dây l và chu kì dao động T của con lắc đơn để tính gia tốc rơi tự do g tại phòng thí nghiệm.',
    type: 'experiment',
    grade: 11,
    chapterId: 'c11_1',
    linkedLessonIds: ['lesson_11_1'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Tổ Vật lí THPT',
    authorId: 'teacher_long',
    source: 'Thực hành Vật lí 11',
    licenseInfo: 'Giáo dục',
    tags: ['con lắc đơn', 'gia tốc trọng trường', 'thực hành'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-10T10:00:00Z',
    updatedAt: '2026-10-03T10:00:00Z',
    experimentData: {
      category: 'thí nghiệm thực',
      purpose: 'Đo gia tốc trọng trường g = 4π²l / T².',
      equipment: ['Giá thí nghiệm, dây treo mảnh không giãn, quả nặng kim loại nhỏ, thước đo milimet, đồng hồ bấm giây.'],
      theory: 'Khi góc lệch nhỏ (α0 < 10°), con lắc đơn dao động điều hòa với chu kì T = 2π√(l/g).',
      steps: [
        'Đo chiều dài dây l từ điểm treo đến tâm quả nặng.',
        'Kéo con lắc lệch góc nhỏ dưới 10 độ rồi thả nhẹ không vận tốc đầu.',
        'Bấm giờ đo thời gian 20 dao động toàn phần t20, suy ra T = t20 / 20.',
        'Lặp lại với các chiều dài khác nhau.'
      ],
      safetyNotes: ['Không kéo vật quá cao tránh dây bị chùng hoặc quả nặng văng ra ngoài.'],
      commonMistakes: ['Kéo góc lệch quá lớn (> 10 độ) khiến dao động không còn là điều hòa.'],
      dataAnalysisGuide: 'Vẽ đồ thị T² theo l, độ dốc k = 4π²/g suy ra g = 4π²/k.',
      errorHandling: 'Tính sai số dụng cụ của thước đo và đồng hồ bấm giây.',
      preQuestions: ['Tại sao chu kì dao động của con lắc đơn không phụ thuộc vào khối lượng quả nặng?'],
      postQuestions: ['Nếu thí nghiệm được thực hiện trên Mặt Trăng, chu kì T sẽ tăng hay giảm?']
    }
  },

  // 7. Mô phỏng lớp 11 (Định luật Ohm)
  {
    id: 'res_sim_11_2',
    title: 'Mô phỏng mạch điện tương tác: Định luật Ohm và đặc tuyến Vôn – Ampe',
    description: 'Thí nghiệm ảo thay đổi điện áp nguồn và điện trở, đo dòng điện, tự động dựng đường đặc tuyến I theo U.',
    type: 'simulation',
    grade: 11,
    chapterId: 'c11_4',
    linkedLessonIds: ['lesson_11_2'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Ths: Lê Long - QT',
    authorId: 'teacher_long',
    source: 'Phòng thí nghiệm ảo Vật lí THPT',
    licenseInfo: 'Giáo dục mở',
    tags: ['định luật ohm', 'mạch điện', 'vôn kế', 'ampe kế'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-12T11:00:00Z',
    updatedAt: '2026-10-04T15:00:00Z',
    embedType: 'custom_sim',
    experimentData: {
      category: 'mô phỏng tương tác',
      purpose: 'Khảo sát sự phụ thuộc của I vào U và tính điện trở R từ độ dốc đặc tuyến.',
      equipment: ['Nguồn điện một chiều 0-24V, biến trở R, đồng hồ đo ảo Vôn kế và Ampe kế.'],
      theory: 'I = U / R.',
      steps: [
        'Chọn giá trị điện trở R = 10 Ω, 20 Ω hoặc 50 Ω.',
        'Tăng dần điện áp nguồn U từ 0 đến 20 V.',
        'Ghi nhận các điểm đo trên đồ thị I - U.'
      ],
      safetyNotes: ['Mô phỏng ảo không lo giật điện.'],
      commonMistakes: ['Mắc nhầm vôn kế nối tiếp làm mạch ngắt dòng.'],
      assumptionsAndLimits: 'Điện trở không bị nóng lên làm thay đổi điện trở suất (nhiệt độ T = const).',
      dataAnalysisGuide: 'Đường đặc tuyến I(U) thẳng hàng qua gốc tọa độ O, chứng minh I tỉ lệ thuận với U.',
      errorHandling: 'Không sai số phần cứng.',
      preQuestions: ['Điện trở R có thay đổi không khi tăng gấp đôi điện áp U đặt vào nó?'],
      postQuestions: ['Nếu dây dẫn bị nóng lên trong thực tế, đặc tuyến I - U sẽ uốn cong như thế nào?']
    }
  },

  // 8. Thí nghiệm thực lớp 11 (Mạch điện Ohm)
  {
    id: 'res_exp_11_2',
    title: 'Thí nghiệm thực hành: Đo điện trở và khảo sát định luật Ohm trong mạch điện một chiều',
    description: 'Bố trí nguồn điện, biến trở con chạy, ampe kế và vôn kế kim để khảo sát mối quan hệ giữa U và I.',
    type: 'experiment',
    grade: 11,
    chapterId: 'c11_4',
    linkedLessonIds: ['lesson_11_2'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Tổ Vật lí THPT',
    authorId: 'teacher_long',
    source: 'Thực hành Vật lí 11',
    licenseInfo: 'Giáo dục',
    tags: ['đo điện trở', 'ampe kế', 'vôn kế'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-12T12:00:00Z',
    updatedAt: '2026-10-04T16:00:00Z',
    experimentData: {
      category: 'thí nghiệm thực',
      purpose: 'Lắp ráp mạch điện và kiểm chứng công thức định luật Ohm I = U/R.',
      equipment: ['Nguồn điện DC, biến trở con chạy 20Ω - 2A, điện trở dây quấn mẫu, đồng hồ đa năng số DMM, dây nối.'],
      theory: 'I tỉ lệ thuận với U qua điện trở R.',
      steps: [
        'Mắc mạch theo sơ đồ: Nguồn -> Khóa K -> Biến trở -> Điện trở R -> Ampe kế -> Nguồn; Vôn kế song song với R.',
        'Đóng khóa K, điều chỉnh con chạy để thay đổi U trên R lần lượt là 2V, 4V, 6V, 8V, 10V.',
        'Ghi số chỉ dòng điện I tương ứng.'
      ],
      safetyNotes: ['Không để đoản mạch nguồn; không cắm nhầm thang đo dòng điện vào nguồn điện trực tiếp.'],
      commonMistakes: ['Mắc nhầm cực tính (+, -) của đồng hồ đo kim.'],
      dataAnalysisGuide: 'Lập tỉ số U/I cho từng lần đo và so sánh với giá trị ghi trên vỏ điện trở.',
      errorHandling: 'Điện trở của chính ampe kế và dây dẫn gây ra sai số hệ thống nhỏ.',
      preQuestions: ['Tại sao ampe kế lại cần có điện trở rất nhỏ còn vôn kế lại cần có điện trở rất lớn?'],
      postQuestions: ['Nhiệt lượng tỏa ra trên điện trở được tính theo công thức nào?']
    }
  },

  // 9. Mô phỏng lớp 12 (Nhiệt hóa hơi riêng)
  {
    id: 'res_sim_12_1',
    title: 'Mô phỏng nhiệt học: Quá trình đun sôi và đo nhiệt hóa hơi riêng của nước',
    description: 'Mô phỏng ấm đun cách nhiệt công suất P, khối lượng nước m và cảm biến nhiệt độ đo lượng nước bay hơi theo thời gian.',
    type: 'simulation',
    grade: 12,
    chapterId: 'c12_1',
    linkedLessonIds: ['lesson_12_1'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Ths: Lê Long - QT',
    authorId: 'teacher_long',
    source: 'Mô phỏng Vật lí 12 chuẩn đổi mới GDPT 2018',
    licenseInfo: 'Giáo dục mở',
    tags: ['nhiệt hóa hơi riêng', 'vật lí nhiệt', 'ấm đun', 'nhiệt lượng'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-15T09:00:00Z',
    updatedAt: '2026-10-05T16:30:00Z',
    embedType: 'custom_sim',
    experimentData: {
      category: 'mô phỏng tương tác',
      purpose: 'Minh họa phép đo nhiệt hóa hơi riêng L = (P · Δt) / Δm khi nước sôi ở 100°C.',
      equipment: ['Ấm đun điện trở điều chỉnh công suất P, cân điện tử hiện số, đồng hồ bấm giờ.'],
      theory: 'Khi nước sôi ở nhiệt độ không đổi: Toàn bộ điện năng tiêu thụ chuyển thành nhiệt hóa hơi: P * Δt = L * Δm.',
      steps: [
        'Chọn công suất đun P (ví dụ 500 W đến 1500 W).',
        'Theo dõi nhiệt độ nước tăng đến 100°C.',
        'Khi nước sôi, kích hoạt đồng hồ bấm giờ và cân điện tử để đo khối lượng nước giảm Δm trong thời gian Δt.',
        'Hệ thống tự động tính và hiển thị giá trị L tính được.'
      ],
      safetyNotes: ['Không áp dụng.'],
      commonMistakes: ['Bắt đầu đo trước khi nước sôi hoàn toàn dẫn đến sai sót vì nhiệt lượng còn dùng để làm tăng nhiệt độ.'],
      assumptionsAndLimits: 'Giả định hiệu suất ấm đun 100% trong chế độ lí tưởng; cho phép bật chế độ hao phí để quan sát sai số.',
      dataAnalysisGuide: 'L = (P * Δt) / Δm. So sánh với giá trị chuẩn 2.26 × 10⁶ J/kg.',
      errorHandling: 'Hao phí nhiệt truyền ra không khí xung quanh làm giá trị đo được của L lớn hơn thực tế.',
      preQuestions: ['Tại sao khi nước đang sôi mãnh liệt thì nhiệt kế vẫn chỉ đúng 100°C?'],
      postQuestions: ['Tại sao bị bỏng bởi hơi nước sôi 100°C lại nguy hiểm hơn bị bỏng bởi nước sôi 100°C cùng khối lượng?']
    }
  },

  // 10. Thí nghiệm thực lớp 12 (Nhiệt hóa hơi riêng)
  {
    id: 'res_exp_12_1',
    title: 'Thí nghiệm thực hành: Đo nhiệt hóa hơi riêng của nước bằng ấm điện và cân điện tử',
    description: 'Thí nghiệm đo nhiệt hóa hơi riêng của nước bằng ấm đun hở nắp đặt trên cân điện tử kết hợp cảm biến oát kế.',
    type: 'experiment',
    grade: 12,
    chapterId: 'c12_1',
    linkedLessonIds: ['lesson_12_1'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Tổ Vật lí THPT',
    authorId: 'teacher_long',
    source: 'Thực hành Vật lí 12',
    licenseInfo: 'Giáo dục',
    tags: ['thí nghiệm thực', 'nhiệt hóa hơi riêng', 'cân điện tử', 'nước sôi'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-15T10:00:00Z',
    updatedAt: '2026-10-05T17:00:00Z',
    experimentData: {
      category: 'thí nghiệm thực',
      purpose: 'Xác định nhiệt hóa hơi riêng của nước trong phòng thí nghiệm.',
      equipment: [
        'Ấm đun siêu tốc công suất 1000 W có thể mở nắp.',
        'Cân điện tử chính xác đến 0.1 g.',
        'Đồng hồ đo điện năng / oát kế đo công suất P.',
        'Đồng hồ bấm giây.'
      ],
      theory: 'L = (P · t) / (m1 - m2).',
      steps: [
        'Đổ khoảng 300 ml nước vào ấm, đặt lên cân điện tử, bật điện đun sôi.',
        'Khi nước sôi đều và hơi nước bốc lên ổn định, ghi số chỉ khối lượng ban đầu m1 và bấm giờ t = 0.',
        'Đun sôi liên tục trong 180 s (3 phút), ghi số chỉ khối lượng m2.',
        'Khối lượng nước hóa hơi: Δm = m1 - m2.',
        'Tính L và phân tích các yếu tố gây sai số.'
      ],
      safetyNotes: [
        'Cẩn thận hơi nước nóng bốc lên tránh gây bỏng da tay và mặt.',
        'Không để nước tràn ra ngoài rơi vào ổ cắm điện hoặc cân điện tử.'
      ],
      commonMistakes: [
        'Ghi khối lượng m1 quá sớm khi nước chưa sôi sùng sục.',
        'Dây điện của ấm tì đè lên mặt cân làm sai lệch số đọc của cân.'
      ],
      dataAnalysisGuide: 'L = (P * t) / (m1 - m2). Ước lượng hao phí nhiệt khoảng 5-10% ra môi trường để hiệu chỉnh kết quả.',
      errorHandling: 'Nhiệt lượng tỏa ra xung quanh và sự ngưng tụ hơi nước trở lại ấm.',
      preQuestions: ['Khối lượng nước giảm đi trong quá trình sôi đã đi đâu?'],
      postQuestions: ['Nếu hiệu suất của ấm không đạt 100%, giá trị L tính theo công thức L = P*t/Δm sẽ lớn hơn hay nhỏ hơn giá trị thực?']
    }
  },

  // 11. Mô phỏng lớp 12 (Khí lí tưởng)
  {
    id: 'res_sim_12_2',
    title: 'Mô phỏng tương tác: Mô hình khí lí tưởng và các định luật biến đổi trạng thái khí (Boyle – Charles)',
    description: 'Bình chứa phân tử khí tương tác đàn hồi với piston di động, đồng hồ đo áp suất P, nhiệt độ T và thể tích V.',
    type: 'simulation',
    grade: 12,
    chapterId: 'c12_2',
    linkedLessonIds: ['lesson_12_2'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Ths: Lê Long - QT',
    authorId: 'teacher_long',
    source: 'Hệ thống mô phỏng Vật lí 12',
    licenseInfo: 'Giáo dục mở',
    tags: ['khí lí tưởng', 'định luật boyle', 'đẳng nhiệt', 'piston'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-18T10:00:00Z',
    updatedAt: '2026-10-06T15:30:00Z',
    embedType: 'custom_sim',
    experimentData: {
      category: 'mô phỏng tương tác',
      purpose: 'Quan sát các phân tử khí chuyển động nhiệt hỗn loạn và nghiệm lại định luật p*V = const khi T không đổi.',
      equipment: ['Trình giả lập buồng khí với piston điều chỉnh thể tích, nguồn nhiệt làm nóng/lạnh.'],
      theory: 'p · V = n · R · T.',
      steps: [
        'Chọn chế độ "Đẳng nhiệt" (T = const = 300 K).',
        'Kéo piston để giảm thể tích V xuống một nửa, quan sát áp kế tăng gấp đôi.',
        'Chuyển sang chế độ "Đẳng tích" (V = const), tăng nhiệt độ T và quan sát áp suất p tăng tỉ lệ thuận.'
      ],
      safetyNotes: ['Không áp dụng.'],
      commonMistakes: ['Quên chuyển đổi nhiệt độ Celsius sang Kelvin trong tính toán.'],
      assumptionsAndLimits: 'Các phân tử khí là chất điểm không kích thước, va chạm đàn hồi hoàn toàn với thành bình và không tương tác từ xa.',
      dataAnalysisGuide: 'Tích p*V không đổi trong quá trình nén đẳng nhiệt; áp suất tỉ lệ thuận với động năng trung bình phân tử.',
      errorHandling: 'Mô phỏng hạt dựa trên định luật bảo toàn động lượng và năng lượng trong va chạm 2D.',
      preQuestions: ['Tại sao khi nén khí trong bơm xe đạp thì ta thấy thân bơm nóng lên?'],
      postQuestions: ['Áp suất chất khí tác dụng lên thành bình có nguồn gốc từ đâu?']
    }
  },

  // 12. Thí nghiệm thực lớp 12 (Khí lí tưởng - Định luật Boyle)
  {
    id: 'res_exp_12_2',
    title: 'Thí nghiệm thực hành: Khảo sát định luật Boyle bằng xilanh đo áp suất khí',
    description: 'Dùng xilanh chứa khí kín và áp kế đo áp suất p tương ứng với các giá trị thể tích V khi nén chậm ở nhiệt độ phòng.',
    type: 'experiment',
    grade: 12,
    chapterId: 'c12_2',
    linkedLessonIds: ['lesson_12_2'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Tổ Vật lí THPT',
    authorId: 'teacher_long',
    source: 'Thực hành Vật lí 12',
    licenseInfo: 'Giáo dục',
    tags: ['định luật boyle', 'xilanh', 'áp kế', 'đẳng nhiệt'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-18T11:00:00Z',
    updatedAt: '2026-10-06T16:00:00Z',
    experimentData: {
      category: 'thí nghiệm thực',
      purpose: 'Khảo sát định luật Boyle: Tích p · V = const đối với một lượng khí xác định ở nhiệt độ không đổi.',
      equipment: ['Xilanh chia độ có pittông di động kín khí, áp kế cơ học hoặc cảm biến áp suất kết nối máy tính.'],
      theory: 'p · V = const.',
      steps: [
        'Ghi áp suất khí quyển p0 ban đầu và thể tích khí ban đầu V0.',
        'Đẩy nhẹ nhàng pittông vào trong để giảm thể tích V từng vạch (ví dụ 40 ml, 35 ml, 30 ml, 25 ml, 20 ml).',
        'Sau mỗi lần dịch chuyển pittông, chờ khoảng 30 giây để nhiệt độ khí cân bằng với môi trường, rồi đọc áp suất p.',
        'Lập bảng tích số p · V cho các lần đo.'
      ],
      safetyNotes: ['Không ấn piston quá mạnh đột ngột có thể làm vỡ xilanh hoặc tuột khớp nối áp kế.'],
      commonMistakes: ['Nén quá nhanh khiến khí bị nóng lên do nhận công, làm vi phạm điều kiện đẳng nhiệt (T không đổi).'],
      dataAnalysisGuide: 'Vẽ đồ thị p theo 1/V, nếu đồ thị là đường thẳng qua gốc tọa độ thì định luật Boyle được nghiệm đúng.',
      errorHandling: 'Khí rò rỉ qua gioăng cao su của piston làm thay đổi khối lượng khí m.',
      preQuestions: ['Tại sao phải đợi khoảng 30 giây sau khi dịch chuyển piston mới đọc số chỉ áp kế?'],
      postQuestions: ['Nếu xilanh bị hở làm thoát một phần khí ra ngoài, kết quả thí nghiệm sẽ bị ảnh hưởng như thế nào?']
    }
  },

  // 13. Video bài học lớp 10 (Chuyển động thẳng biến đổi đều)
  {
    id: 'res_vid_10_1',
    title: 'Vật lí 10 Bài 9: Chuyển động thẳng biến đổi đều (Kết nối tri thức)',
    description: 'Bài giảng chi tiết hệ thống hóa công thức vận tốc v = v₀ + at, độ dịch chuyển d, hệ thức độc lập thời gian và đồ thị v-t (SGK Vật lí 10 Kết nối tri thức).',
    type: 'video_lesson',
    grade: 10,
    chapterId: 'c10_2',
    linkedLessonIds: ['lesson_10_1'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Cô Nguyễn Dung - VietJack',
    authorId: 'teacher_long',
    source: 'Kênh VietJack THPT',
    licenseInfo: 'Chia sẻ công khai',
    tags: ['video bài học', 'động học', 'đồ thị vận tốc', 'kết nối tri thức'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-03T14:00:00Z',
    updatedAt: '2026-10-01T15:00:00Z',
    url: 'https://www.youtube.com/watch?v=OB4SjDuTnhI',
    embedType: 'youtube',
    duration: '42:18',
    guidingQuestions: [
      'Làm thế nào để nhận biết chiều chuyển động của vật dựa vào dấu của v trên đồ thị v-t?',
      'Khi xe dừng hẳn thì vận tốc tức thời bằng bao nhiêu?'
    ]
  },

  // 14. Video thí nghiệm lớp 10 (Cổng quang điện)
  {
    id: 'res_vid_10_exp',
    title: 'Video thực nghiệm: Khảo sát chuyển động & đo gia tốc với cổng quang điện (Vật lí 10)',
    description: 'Ghi hình thí nghiệm thực tế đo thời gian xe chuyển động trên máng nghiêng bằng cổng quang điện và đồng hồ hiện số MC-963A.',
    type: 'video_experiment',
    grade: 10,
    chapterId: 'c10_2',
    linkedLessonIds: ['lesson_10_1'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Vật Lí Thực Nghiệm THPT',
    authorId: 'teacher_long',
    source: 'Kênh Thí nghiệm Vật lí',
    licenseInfo: 'Chia sẻ giáo dục',
    tags: ['video thí nghiệm', 'cổng quang điện', 'đo gia tốc'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-03T16:00:00Z',
    updatedAt: '2026-10-01T16:00:00Z',
    url: 'https://www.youtube.com/watch?v=6Q0J3HcHeEs',
    embedType: 'youtube',
    duration: '07:35',
    guidingQuestions: [
      'Tại sao phải dùng tấm cản quang hẹp để kích hoạt cổng quang điện?',
      'Gia tốc tính được từ thực nghiệm chịu ảnh hưởng của yếu tố ma sát nào?'
    ]
  },

  // 15. Video bài học lớp 10 (Định luật II Newton)
  {
    id: 'res_vid_10_2',
    title: 'Vật lí 10 Bài 15: Định luật II Newton (Kết nối tri thức)',
    description: 'Bài giảng chi tiết Định luật II Newton (F = ma), quán tính của vật, hợp lực tác dụng và phương pháp giải bài toán động lực học cơ bản.',
    type: 'video_lesson',
    grade: 10,
    chapterId: 'c10_3',
    linkedLessonIds: ['lesson_10_2'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Cô Nguyễn Dung - VietJack',
    authorId: 'teacher_long',
    source: 'Kênh VietJack THPT',
    licenseInfo: 'Chia sẻ công khai',
    tags: ['video bài học', 'định luật 2 newton', 'lực'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-07T14:00:00Z',
    updatedAt: '2026-10-02T15:00:00Z',
    url: 'https://www.youtube.com/watch?v=denoYcH-Mfs',
    embedType: 'youtube',
    duration: '38:45',
    guidingQuestions: [
      'Gia tốc của vật có cùng hướng với hợp lực tác dụng không?',
      'Khi lực không đổi, khối lượng m tăng gấp đôi thì gia tốc thay đổi thế nào?'
    ]
  },

  // 16. Video bài học lớp 11 (Dao động điều hòa)
  {
    id: 'res_vid_11_1',
    title: 'Vật lí 11 Bài 1: Dao động điều hòa (Kết nối tri thức với cuộc sống)',
    description: 'Bài giảng lý thuyết dao động điều hòa: phương trình li độ x = A cos(ωt + φ), chu kì T, tần số f, pha ban đầu và mối liên hệ với chuyển động tròn đều.',
    type: 'video_lesson',
    grade: 11,
    chapterId: 'c11_1',
    linkedLessonIds: ['lesson_11_1'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Kênh KHTN & Vật lí THPT',
    authorId: 'teacher_long',
    source: 'Vật lí 11 Kết nối tri thức',
    licenseInfo: 'Tự do chia sẻ',
    tags: ['video bài học', 'dao động điều hòa', 'pha dao động'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-11T14:00:00Z',
    updatedAt: '2026-10-03T11:00:00Z',
    url: 'https://www.youtube.com/watch?v=_J2Ltm6tRKQ',
    embedType: 'youtube',
    duration: '31:20',
    guidingQuestions: [
      'Li độ x đạt giá trị lớn nhất khi nào?',
      'Vận tốc sớm pha hay trễ pha hơn li độ một góc bằng bao nhiêu?'
    ]
  },

  // 17. Video thí nghiệm lớp 11 (Định luật Ohm)
  {
    id: 'res_vid_11_2',
    title: 'Video thực nghiệm: Bộ dụng cụ thí nghiệm kiểm chứng Định luật Ohm (Vật lí 11)',
    description: 'Bộ dụng cụ thí nghiệm thực tế lắp ráp mạch điện gồm nguồn điện một chiều, biến trở, điện trở nhiệt và ampe kế/vôn kế khảo sát định luật Ohm.',
    type: 'video_experiment',
    grade: 11,
    chapterId: 'c11_4',
    linkedLessonIds: ['lesson_11_2'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Thiết Bị Khoa Học THPT',
    authorId: 'teacher_long',
    source: 'Thí nghiệm Điện một chiều',
    licenseInfo: 'Chia sẻ giáo dục',
    tags: ['video thí nghiệm', 'định luật ohm', 'mạch điện'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-13T14:00:00Z',
    updatedAt: '2026-10-04T17:00:00Z',
    url: 'https://www.youtube.com/watch?v=oK8S69NGwvs',
    embedType: 'youtube',
    duration: '05:12',
    guidingQuestions: [
      'Vôn kế mắc song song hay nối tiếp với điện trở mẫu?',
      'Đồ thị quan hệ giữa I và U có hình dạng đường gì?'
    ]
  },

  // 18. Video thực nghiệm lớp 12 (Nhiệt hóa hơi riêng)
  {
    id: 'res_vid_12_1',
    title: 'Vật lí 12 Thực hành: Đo nhiệt hóa hơi riêng của nước (Chương trình mới)',
    description: 'Quy trình thực nghiệm đo nhiệt hóa hơi riêng của nước theo SGK Vật lí 12 mới (bộ Chân trời sáng tạo / Kết nối tri thức), sử dụng ấm đun điện và cân hiện số ghi nhận Δm.',
    type: 'video_experiment',
    grade: 12,
    chapterId: 'c12_1',
    linkedLessonIds: ['lesson_12_1'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Thầy Lâm 1E - Vật lí THPT',
    authorId: 'teacher_long',
    source: 'Thực hành Vật lí 12 Đổi mới',
    licenseInfo: 'Giáo dục mở',
    tags: ['vật lí nhiệt', 'video thực hành', 'nhiệt hóa hơi'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-16T15:00:00Z',
    updatedAt: '2026-10-05T18:00:00Z',
    url: 'https://www.youtube.com/watch?v=XW161L4eS8E',
    embedType: 'youtube',
    duration: '12:45',
    guidingQuestions: [
      'Tại sao phải bắt đầu bấm giờ khi nước đã sôi sùng sục ở 100°C?',
      'Hao phí nhiệt ra không khí làm cho giá trị L đo được lớn hơn hay nhỏ hơn giá trị lí thuyết?'
    ]
  },

  // 19. Video thí nghiệm lớp 12 (Khí lí tưởng - Định luật Boyle)
  {
    id: 'res_vid_12_2',
    title: 'Video thực nghiệm: Thí nghiệm kiểm tra Định luật Boyle - Vật lí 12',
    description: 'Thí nghiệm thực hành nén xilanh khí kín, đo áp suất p tương ứng với thể tích V, kiểm chứng quá trình đẳng nhiệt và tính tích p · V.',
    type: 'video_experiment',
    grade: 12,
    chapterId: 'c12_2',
    linkedLessonIds: ['lesson_12_2'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Kênh Thí Nghiệm Vật Lí THPT',
    authorId: 'teacher_long',
    source: 'Thí nghiệm Vật lí 12',
    licenseInfo: 'Chia sẻ giáo dục',
    tags: ['video thí nghiệm', 'định luật boyle', 'khí lí tưởng'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-19T14:00:00Z',
    updatedAt: '2026-10-06T17:00:00Z',
    url: 'https://www.youtube.com/watch?v=i4CcQQil00k',
    embedType: 'youtube',
    duration: '06:50',
    guidingQuestions: [
      'Tại sao phải ấn piston chậm rãi khi nén khí?',
      'Tích số p · V có thay đổi đáng kể khi nén xilanh không?'
    ]
  },

  // 17. Tài liệu học tập (Worksheet / Phiếu học tập) Lớp 10
  {
    id: 'res_doc_10_1',
    title: 'Phiếu học tập: Bài tập phân tích đồ thị chuyển động thẳng biến đổi đều (PDF)',
    description: 'Tài liệu tuyển chọn 15 bài toán đồ thị v-t và x-t từ cơ bản đến nâng cao có mã QR hướng dẫn chi tiết.',
    type: 'worksheet',
    grade: 10,
    chapterId: 'c10_2',
    linkedLessonIds: ['lesson_10_1'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Ths: Lê Long - QT',
    authorId: 'teacher_long',
    source: 'Bộ tài liệu giảng dạy Vật lí 10',
    licenseInfo: 'Lưu hành nội bộ học sinh THPT',
    tags: ['phiếu học tập', 'bài tập đồ thị', 'động học', 'PDF'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-02T16:00:00Z',
    updatedAt: '2026-10-01T16:00:00Z',
    url: 'https://drive.google.com/file/d/1B7A6C5D4E3F2G1H0J9K8L7M6N5P4Q/preview',
    fileType: 'pdf',
    fileSize: 2450000,
    embedType: 'drive'
  },

  // 18. Tài liệu học tập ĐƯỢC LIÊN KẾT NHIỀU BÀI (Học liệu dùng chung cho cả Bài 1 và Bài 2 lớp 10!)
  // Requirement 1 & 6: "Một học liệu được lưu một lần và có thể liên kết với nhiều bài. Cập nhật học liệu phải được phản ánh tại các bài liên quan."
  {
    id: 'res_doc_shared_measure',
    title: 'Cẩm nang chung: Phương pháp đo lường, dụng cụ đo và xử lí sai số trong thí nghiệm Cơ học',
    description: 'Tài liệu hướng dẫn sử dụng thước kẹp, cổng quang điện, đồng hồ hiện số và quy tắc tính sai số tuyệt đối/tương đối (liên kết chung cho Bài 1 và Bài 2).',
    type: 'document',
    grade: 10,
    chapterId: 'c10_1',
    linkedLessonIds: ['lesson_10_1', 'lesson_10_2'], // Linked to BOTH Lesson 1 and Lesson 2!
    textbookId: 'ket_noi_tri_thuc',
    author: 'Ths: Lê Long - QT',
    authorId: 'teacher_long',
    source: 'Phòng thực hành Cơ học THPT',
    licenseInfo: 'Bản quyền giáo viên Lê Long',
    tags: ['sai số', 'đo lường', 'thước kẹp', 'cơ học', 'dùng chung'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-01T09:00:00Z',
    updatedAt: '2026-10-01T09:00:00Z',
    url: 'https://drive.google.com/file/d/1Z8Y7X6W5V4U3T2S1R0Q9P8O7N6M5/preview',
    fileType: 'pdf',
    fileSize: 1850000,
    embedType: 'drive'
  },

  // 19. Bài trình chiếu Canva / PowerPoint lớp 11
  // Requirement: "Ngoài ra cho phép nhúng các file powerpoint, canva, v.v nhúng vào web trong mỗi bài học."
  {
    id: 'res_doc_canva_11_1',
    title: 'Slide bài giảng tương tác Canva: Khám phá thế giới Dao động điều hòa',
    description: 'Bài trình chiếu tương tác hiện đại thiết kế trên Canva, nhúng trực tiếp vào trang bài học để trình chiếu trên lớp học thông minh.',
    type: 'presentation',
    grade: 11,
    chapterId: 'c11_1',
    linkedLessonIds: ['lesson_11_1'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Ths: Lê Long - QT',
    authorId: 'teacher_long',
    source: 'Canva Education Design',
    licenseInfo: 'Tự do trình chiếu',
    tags: ['slide canva', 'bài giảng điện tử', 'dao động điều hòa', 'nhúng canva'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-10T11:00:00Z',
    updatedAt: '2026-10-03T11:30:00Z',
    url: 'https://www.canva.com/design/DAFexample123/view?embed',
    fileType: 'pptx',
    embedType: 'canva'
  },

  // 20. Tài liệu PowerPoint / Office Online lớp 10
  {
    id: 'res_doc_10_2',
    title: 'Bài trình chiếu PowerPoint: Định luật II Newton và phân tích lực trong đời sống',
    description: 'Tệp slide PPTX hỗ trợ giảng dạy trực tiếp có hoạt họa phân tích các lực tác dụng lên ô tô, tàu hỏa.',
    type: 'presentation',
    grade: 10,
    chapterId: 'c10_3',
    linkedLessonIds: ['lesson_10_2'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Ths: Lê Long - QT',
    authorId: 'teacher_long',
    source: 'Thư viện bài giảng số',
    licenseInfo: 'Giáo dục mở',
    tags: ['powerpoint', 'định luật newton', 'trình chiếu'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-06T11:00:00Z',
    updatedAt: '2026-10-02T12:00:00Z',
    url: 'https://view.officeapps.live.com/op/embed.aspx?src=https://example.com/slide_dinh_luat_2_newton.pptx',
    fileType: 'pptx',
    embedType: 'powerpoint'
  },

  // 21. Tài liệu Word DOCX & PDF lớp 11 (Định luật Ohm)
  {
    id: 'res_doc_11_2',
    title: 'Hệ thống bài tập chuyên đề: Định luật Ohm cho các loại đoạn mạch (DOCX/PDF)',
    description: 'Tài liệu bài tập phân loại theo 4 mức độ nhận thức: Nhận biết, Thông hiểu, Vận dụng và Vận dụng cao.',
    type: 'document',
    grade: 11,
    chapterId: 'c11_4',
    linkedLessonIds: ['lesson_11_2'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Tổ Vật lí THPT',
    authorId: 'teacher_long',
    source: 'Tài liệu dạy học chuyên sâu',
    licenseInfo: 'Chia sẻ nội bộ',
    tags: ['bài tập ohm', 'mạch điện', 'tài liệu docx'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-12T14:00:00Z',
    updatedAt: '2026-10-04T16:00:00Z',
    url: 'https://drive.google.com/file/d/1X2Y3Z4W5V6U7T8S9R0Q/preview',
    fileType: 'docx',
    fileSize: 1250000,
    embedType: 'drive'
  },

  // 22. Tài liệu bảng dữ liệu mẫu thực hành Excel lớp 12 (Nhiệt hóa hơi riêng)
  {
    id: 'res_doc_12_1',
    title: 'Bảng mẫu xử lí số liệu và tính toán sai số thực nghiệm nhiệt hóa hơi riêng (XLSX)',
    description: 'File Excel lập sẵn công thức tự động tính trung bình, phương sai, sai số tuyệt đối và vẽ biểu đồ biến thiên.',
    type: 'worksheet',
    grade: 12,
    chapterId: 'c12_1',
    linkedLessonIds: ['lesson_12_1'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Ths: Lê Long - QT',
    authorId: 'teacher_long',
    source: 'Thực hành Vật lí 12',
    licenseInfo: 'Tự do tải về cho học sinh',
    tags: ['bảng số liệu mẫu', 'excel', 'xử lí sai số', 'nhiệt hóa hơi'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-15T11:00:00Z',
    updatedAt: '2026-10-05T17:30:00Z',
    url: 'https://view.officeapps.live.com/op/embed.aspx?src=https://example.com/bang_so_lieu_nhiet_hoa_hoi.xlsx',
    fileType: 'xlsx',
    fileSize: 450000,
    embedType: 'powerpoint'
  },

  // 23. Tài liệu tóm tắt kiến thức lý thuyết lớp 12 (Khí lí tưởng)
  {
    id: 'res_doc_12_2',
    title: 'Infographic & Sơ đồ tư duy: Toàn cảnh Thuyết động học phân tử và Các định luật Khí lí tưởng',
    description: 'Tài liệu hình ảnh chất lượng cao tóm lược đầy đủ 3 đẳng quá trình (Đẳng nhiệt, Đẳng tích, Đẳng áp) và đồ thị tương ứng.',
    type: 'document',
    grade: 12,
    chapterId: 'c12_2',
    linkedLessonIds: ['lesson_12_2'],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Ths: Lê Long - QT',
    authorId: 'teacher_long',
    source: 'Sơ đồ tư duy Vật lí 12',
    licenseInfo: 'Giáo dục mở',
    tags: ['sơ đồ tư duy', 'khí lí tưởng', 'infographic', 'hình ảnh'],
    status: 'published',
    reviewStatus: 'approved',
    createdAt: '2026-09-18T12:00:00Z',
    updatedAt: '2026-10-06T17:00:00Z',
    url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    fileType: 'image',
    embedType: 'html_safe'
  },

  // 24. Bản nháp (DRAFT) để kiểm tra Requirement 7: Khách/học sinh không đọc được bản nháp!
  {
    id: 'res_draft_teacher_1',
    title: '[Bản nháp đang soạn] Nghiên cứu mô phỏng hiệu ứng Doppler trong sóng âm',
    description: 'Học liệu đang trong quá trình biên soạn, chưa được duyệt hoặc xuất bản.',
    type: 'simulation',
    grade: 11,
    chapterId: 'c11_2',
    linkedLessonIds: [],
    textbookId: 'ket_noi_tri_thuc',
    author: 'Ths: Lê Long - QT',
    authorId: 'teacher_long',
    source: 'Bản nháp cá nhân',
    licenseInfo: 'Bản nháp nội bộ',
    tags: ['nháp', 'sóng âm', 'doppler'],
    status: 'draft',
    reviewStatus: 'draft',
    createdAt: '2026-10-08T08:00:00Z',
    updatedAt: '2026-10-08T08:00:00Z',
    embedType: 'custom_sim'
  }
];

export const INITIAL_SITE_SETTINGS: SiteSettings = {
  siteName: 'KHÔNG GIAN HỌC TẬP VẬT LÍ 10–11–12',
  authorLine: 'Ths: Lê Long - QT',
  announcement: 'Chào mừng các thầy cô và các em học sinh đến với Không gian học tập Vật lí THPT.',
  defaultTextbook: 'ket_noi_tri_thuc',
  isFirebaseConnected: false, // Default is false with preview/mock mode activated
};

export const DEMO_USERS: UserProfile[] = [
  {
    id: 'student_demo',
    name: 'Nguyễn Văn An (Học sinh)',
    email: 'an.student@thpt.edu.vn',
    role: 'student',
    school: 'THPT Chuyên',
  },
  {
    id: 'teacher_long',
    name: 'Ths: Lê Long - QT (Giáo viên)',
    email: 'lelong.physics@thpt.edu.vn',
    role: 'teacher',
    school: 'Tổ Vật lí THPT',
  },
  {
    id: 'admin_sys',
    name: 'Quản trị viên Hệ thống',
    email: 'admin.vatly@thpt.edu.vn',
    role: 'admin',
    school: 'Sở Giáo dục & Đào tạo',
  },
];
