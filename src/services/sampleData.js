const INITIAL_TEXTBOOKS = [
  {
    id: "ket_noi_tri_thuc",
    name: "K\u1EBFt n\u1ED1i tri th\u1EE9c v\u1EDBi cu\u1ED9c s\u1ED1ng",
    publisher: "NXB Gi\xE1o d\u1EE5c Vi\u1EC7t Nam",
    isDefault: true
  },
  {
    id: "canh_dieu",
    name: "C\xE1nh di\u1EC1u",
    publisher: "NXB \u0110\u1EA1i h\u1ECDc S\u01B0 ph\u1EA1m",
    isDefault: false
  },
  {
    id: "chan_troi_sang_tao",
    name: "Ch\xE2n tr\u1EDDi s\xE1ng t\u1EA1o",
    publisher: "NXB Gi\xE1o d\u1EE5c Vi\u1EC7t Nam",
    isDefault: false
  }
];
const INITIAL_CHAPTERS = [
  // Lớp 10
  { id: "c10_1", grade: 10, textbookId: "ket_noi_tri_thuc", name: "M\u1EDF \u0111\u1EA7u v\xE0 ph\u01B0\u01A1ng ph\xE1p nghi\xEAn c\u1EE9u", order: 1, description: "\u0110\u1ED1i t\u01B0\u1EE3ng nghi\xEAn c\u1EE9u c\u1EE7a V\u1EADt l\xED, c\xE1c quy t\u1EAFc an to\xE0n trong ph\xF2ng th\u1EF1c h\xE0nh v\xE0 sai s\u1ED1 ph\xE9p \u0111o." },
  { id: "c10_2", grade: 10, textbookId: "ket_noi_tri_thuc", name: "\u0110\u1ED9ng h\u1ECDc", order: 2, description: "M\xF4 t\u1EA3 chuy\u1EC3n \u0111\u1ED9ng: \u0111\u1ED9 d\u1ECBch chuy\u1EC3n, v\u1EADn t\u1ED1c, gia t\u1ED1c, chuy\u1EC3n \u0111\u1ED9ng th\u1EB3ng bi\u1EBFn \u0111\u1ED5i \u0111\u1EC1u v\xE0 r\u01A1i t\u1EF1 do." },
  { id: "c10_3", grade: 10, textbookId: "ket_noi_tri_thuc", name: "\u0110\u1ED9ng l\u1EF1c h\u1ECDc", order: 3, description: "C\xE1c \u0111\u1ECBnh lu\u1EADt Newton, c\xE1c l\u1EF1c c\u01A1 h\u1ECDc c\u01A1 b\u1EA3n, ma s\xE1t v\xE0 c\xE2n b\u1EB1ng l\u1EF1c." },
  { id: "c10_4", grade: 10, textbookId: "ket_noi_tri_thuc", name: "C\xF4ng \u2013 n\u0103ng l\u01B0\u1EE3ng \u2013 c\xF4ng su\u1EA5t", order: 4, description: "C\xF4ng c\u01A1 h\u1ECDc, \u0111\u1ECBnh lu\u1EADt b\u1EA3o to\xE0n c\u01A1 n\u0103ng, c\xF4ng su\u1EA5t v\xE0 hi\u1EC7u su\u1EA5t." },
  { id: "c10_5", grade: 10, textbookId: "ket_noi_tri_thuc", name: "\u0110\u1ED9ng l\u01B0\u1EE3ng", order: 5, description: "\u0110\u1ED9ng l\u01B0\u1EE3ng, xung l\u01B0\u1EE3ng c\u1EE7a l\u1EF1c, \u0111\u1ECBnh lu\u1EADt b\u1EA3o to\xE0n \u0111\u1ED9ng l\u01B0\u1EE3ng v\xE0 va ch\u1EA1m." },
  { id: "c10_6", grade: 10, textbookId: "ket_noi_tri_thuc", name: "Chuy\u1EC3n \u0111\u1ED9ng tr\xF2n", order: 6, description: "T\u1ED1c \u0111\u1ED9 g\xF3c, gia t\u1ED1c h\u01B0\u1EDBng t\xE2m v\xE0 l\u1EF1c h\u01B0\u1EDBng t\xE2m." },
  { id: "c10_7", grade: 10, textbookId: "ket_noi_tri_thuc", name: "Bi\u1EBFn d\u1EA1ng c\u1EE7a v\u1EADt r\u1EAFn", order: 7, description: "Bi\u1EBFn d\u1EA1ng k\xE9o, bi\u1EBFn d\u1EA1ng n\xE9n, \u0111\u1ECBnh lu\u1EADt Hooke v\xE0 \u1EE9ng su\u1EA5t." },
  { id: "c10_sp", grade: 10, textbookId: "ket_noi_tri_thuc", name: "Chuy\xEAn \u0111\u1EC1 h\u1ECDc t\u1EADp V\u1EADt l\xED 10", order: 8, description: "V\u1EADt l\xED trong c\xE1c ng\xE0nh ngh\u1EC1, \u1EE9ng d\u1EE5ng STEM v\xE0 c\u01A1 h\u1ECDc \u1EE9ng d\u1EE5ng.", isSpecialTopic: true },
  // Lớp 11
  { id: "c11_1", grade: 11, textbookId: "ket_noi_tri_thuc", name: "Dao \u0111\u1ED9ng", order: 1, description: "Dao \u0111\u1ED9ng \u0111i\u1EC1u h\xF2a, con l\u1EAFc \u0111\u01A1n, con l\u1EAFc l\xF2 xo, dao \u0111\u1ED9ng t\u1EAFt d\u1EA7n v\xE0 c\u1ED9ng h\u01B0\u1EDFng." },
  { id: "c11_2", grade: 11, textbookId: "ket_noi_tri_thuc", name: "S\xF3ng", order: 2, description: "S\xF3ng c\u01A1, giao thoa s\xF3ng, s\xF3ng d\u1EEBng v\xE0 s\xF3ng \xE2m." },
  { id: "c11_3", grade: 11, textbookId: "ket_noi_tri_thuc", name: "\u0110i\u1EC7n tr\u01B0\u1EDDng", order: 3, description: "L\u1EF1c t\u01B0\u01A1ng t\xE1c Coulomb, \u0111i\u1EC7n tr\u01B0\u1EDDng, \u0111i\u1EC7n th\u1EBF, hi\u1EC7u \u0111i\u1EC7n th\u1EBF v\xE0 t\u1EE5 \u0111i\u1EC7n." },
  { id: "c11_4", grade: 11, textbookId: "ket_noi_tri_thuc", name: "D\xF2ng \u0111i\u1EC7n v\xE0 m\u1EA1ch \u0111i\u1EC7n", order: 4, description: "C\u01B0\u1EDDng \u0111\u1ED9 d\xF2ng \u0111i\u1EC7n, \u0111\u1ECBnh lu\u1EADt Ohm, ngu\u1ED3n \u0111i\u1EC7n, su\u1EA5t \u0111i\u1EC7n \u0111\u1ED9ng v\xE0 n\u0103ng l\u01B0\u1EE3ng \u0111i\u1EC7n." },
  { id: "c11_sp", grade: 11, textbookId: "ket_noi_tri_thuc", name: "Chuy\xEAn \u0111\u1EC1 h\u1ECDc t\u1EADp V\u1EADt l\xED 11", order: 5, description: "C\u1EA3m bi\u1EBFn \u0111i\u1EC7n t\u1EED, m\u1EA1ch \u0111i\u1EC1u khi\u1EC3n v\xE0 quang h\u1ECDc \u1EE9ng d\u1EE5ng.", isSpecialTopic: true },
  // Lớp 12
  { id: "c12_1", grade: 12, textbookId: "ket_noi_tri_thuc", name: "V\u1EADt l\xED nhi\u1EC7t", order: 1, description: "M\xF4 h\xECnh \u0111\u1ED9ng h\u1ECDc ph\xE2n t\u1EED, nhi\u1EC7t \u0111\u1ED9, nhi\u1EC7t dung ri\xEAng, nhi\u1EC7t n\xF3ng ch\u1EA3y v\xE0 nhi\u1EC7t h\xF3a h\u01A1i ri\xEAng." },
  { id: "c12_2", grade: 12, textbookId: "ket_noi_tri_thuc", name: "Kh\xED l\xED t\u01B0\u1EDFng", order: 2, description: "M\xF4 h\xECnh kh\xED l\xED t\u01B0\u1EDFng, \u0111\u1ECBnh lu\u1EADt Boyle, \u0111\u1ECBnh lu\u1EADt Charles v\xE0 ph\u01B0\u01A1ng tr\xECnh tr\u1EA1ng th\xE1i Clapeyron." },
  { id: "c12_3", grade: 12, textbookId: "ket_noi_tri_thuc", name: "T\u1EEB tr\u01B0\u1EDDng v\xE0 c\u1EA3m \u1EE9ng \u0111i\u1EC7n t\u1EEB", order: 3, description: "T\u1EEB tr\u01B0\u1EDDng, c\u1EA3m \u1EE9ng t\u1EEB, \u0111\u1ECBnh lu\u1EADt Faraday v\u1EC1 c\u1EA3m \u1EE9ng \u0111i\u1EC7n t\u1EEB v\xE0 s\xF3ng \u0111i\u1EC7n t\u1EEB." },
  { id: "c12_4", grade: 12, textbookId: "ket_noi_tri_thuc", name: "V\u1EADt l\xED h\u1EA1t nh\xE2n", order: 4, description: "C\u1EA5u t\u1EA1o h\u1EA1t nh\xE2n, n\u0103ng l\u01B0\u1EE3ng li\xEAn k\u1EBFt, hi\u1EC7n t\u01B0\u1EE3ng ph\xF3ng x\u1EA1 v\xE0 ph\u1EA3n \u1EE9ng h\u1EA1t nh\xE2n." },
  { id: "c12_sp", grade: 12, textbookId: "ket_noi_tri_thuc", name: "Chuy\xEAn \u0111\u1EC1 h\u1ECDc t\u1EADp V\u1EADt l\xED 12", order: 5, description: "V\u1EADt l\xED b\xE1n d\u1EABn, c\xF4ng ngh\u1EC7 h\u1EA1t nh\xE2n v\xE0 thi\u1EBFt b\u1ECB y sinh.", isSpecialTopic: true }
];
const INITIAL_LESSONS = [
  // LỚP 10 - Bài 1
  {
    id: "lesson_10_1",
    grade: 10,
    chapterId: "c10_2",
    chapterName: "\u0110\u1ED9ng h\u1ECDc",
    title: "Chuy\u1EC3n \u0111\u1ED9ng th\u1EB3ng bi\u1EBFn \u0111\u1ED5i \u0111\u1EC1u",
    order: 1,
    textbookId: "ket_noi_tri_thuc",
    status: "published",
    authorId: "teacher_long",
    authorName: "Ths: L\xEA Long - QT",
    isSpecialTopic: false,
    isSample: true,
    createdAt: "2026-09-01T08:00:00Z",
    updatedAt: "2026-10-01T10:30:00Z",
    objectives: {
      knowledge: [
        "N\xEAu \u0111\u01B0\u1EE3c \u0111\u1ECBnh ngh\u0129a gia t\u1ED1c v\xE0 \xFD ngh\u0129a c\u1EE7a gia t\u1ED1c trong chuy\u1EC3n \u0111\u1ED9ng bi\u1EBFn \u0111\u1ED5i \u0111\u1EC1u.",
        "Vi\u1EBFt \u0111\u01B0\u1EE3c c\xE1c c\xF4ng th\u1EE9c v\u1EADn t\u1ED1c, \u0111\u1ED9 d\u1ECBch chuy\u1EC3n v\xE0 h\u1EC7 th\u1EE9c li\xEAn h\u1EC7 \u0111\u1ED9c l\u1EADp v\u1EDBi th\u1EDDi gian.",
        "Ph\xE2n bi\u1EC7t \u0111\u01B0\u1EE3c chuy\u1EC3n \u0111\u1ED9ng th\u1EB3ng nhanh d\u1EA7n \u0111\u1EC1u v\xE0 chuy\u1EC3n \u0111\u1ED9ng th\u1EB3ng ch\u1EADm d\u1EA7n \u0111\u1EC1u d\u1EF1a v\xE0o d\u1EA5u c\u1EE7a v v\xE0 a."
      ],
      skills: [
        "V\u1EADn d\u1EE5ng th\xE0nh th\u1EA1o c\xE1c c\xF4ng th\u1EE9c v\xE0o vi\u1EC7c gi\u1EA3i b\xE0i t\u1EADp v\xE0 ph\xE2n t\xEDch \u0111\u1ED3 th\u1ECB v\u1EADn t\u1ED1c \u2013 th\u1EDDi gian (v - t).",
        "Khai th\xE1c b\u1EA3ng s\u1ED1 li\u1EC7u th\xED nghi\u1EC7m v\u1EDBi c\u1ED5ng quang \u0111i\u1EC7n \u0111\u1EC3 x\xE1c \u0111\u1ECBnh gia t\u1ED1c chuy\u1EC3n \u0111\u1ED9ng."
      ],
      expectedOutcomes: [
        "H\u1ECDc sinh gi\u1EA3i th\xEDch \u0111\u01B0\u1EE3c hi\u1EC7n t\u01B0\u1EE3ng xe h\xE3m phanh an to\xE0n trong giao th\xF4ng th\u1EF1c ti\u1EC5n.",
        "H\u1ECDc sinh t\u1EF1 thi\u1EBFt k\u1EBF \u0111\u01B0\u1EE3c b\u1EA3ng \u0111o v\xE0 t\xEDnh to\xE1n sai s\u1ED1 gia t\u1ED1c trong ph\xF2ng th\u1EF1c h\xE0nh."
      ]
    },
    keyKnowledge: {
      concepts: [
        "Chuy\u1EC3n \u0111\u1ED9ng th\u1EB3ng bi\u1EBFn \u0111\u1ED5i \u0111\u1EC1u l\xE0 chuy\u1EC3n \u0111\u1ED9ng th\u1EB3ng trong \u0111\xF3 gia t\u1ED1c t\u1EE9c th\u1EDDi kh\xF4ng \u0111\u1ED5i theo th\u1EDDi gian (a = h\u1EB1ng s\u1ED1).",
        "Chuy\u1EC3n \u0111\u1ED9ng nhanh d\u1EA7n \u0111\u1EC1u: \u0111\u1ED9 l\u1EDBn v\u1EADn t\u1ED1c t\u0103ng \u0111\u1EC1u theo th\u1EDDi gian (vect\u01A1 a c\xF9ng chi\u1EC1u v\u1EDBi vect\u01A1 v, t\u1EE9c a \xB7 v > 0).",
        "Chuy\u1EC3n \u0111\u1ED9ng ch\u1EADm d\u1EA7n \u0111\u1EC1u: \u0111\u1ED9 l\u1EDBn v\u1EADn t\u1ED1c gi\u1EA3m \u0111\u1EC1u theo th\u1EDDi gian (vect\u01A1 a ng\u01B0\u1EE3c chi\u1EC1u v\u1EDBi vect\u01A1 v, t\u1EE9c a \xB7 v < 0)."
      ],
      laws: [
        "\u0110\u1ECBnh lu\u1EADt chuy\u1EC3n \u0111\u1ED9ng bi\u1EBFn \u0111\u1ED5i: Trong kho\u1EA3ng th\u1EDDi gian t b\u1EA5t k\xEC, \u0111\u1ED9 bi\u1EBFn thi\xEAn v\u1EADn t\u1ED1c \u0394v t\u1EC9 l\u1EC7 thu\u1EADn v\u1EDBi th\u1EDDi gian \u0394t."
      ],
      formulas: [
        {
          name: "C\xF4ng th\u1EE9c v\u1EADn t\u1ED1c",
          latex: "v = v_0 + a \\cdot t",
          explanation: "v: v\u1EADn t\u1ED1c t\u1EA1i th\u1EDDi \u0111i\u1EC3m t; v_0: v\u1EADn t\u1ED1c ban \u0111\u1EA7u; a: gia t\u1ED1c; t: th\u1EDDi gian chuy\u1EC3n \u0111\u1ED9ng.",
          unit: "v, v_0 (m/s); a (m/s^2); t (s)",
          applicability: "\xC1p d\u1EE5ng cho m\u1ECDi chuy\u1EC3n \u0111\u1ED9ng th\u1EB3ng c\xF3 gia t\u1ED1c a kh\xF4ng \u0111\u1ED5i."
        },
        {
          name: "C\xF4ng th\u1EE9c \u0111\u1ED9 d\u1ECBch chuy\u1EC3n",
          latex: "d = v_0 t + \\frac{1}{2} a t^2",
          explanation: "d: \u0111\u1ED9 d\u1ECBch chuy\u1EC3n sau kho\u1EA3ng th\u1EDDi gian t.",
          unit: "d (m); v_0 (m/s); t (s); a (m/s^2)",
          applicability: "V\u1EADt chuy\u1EC3n \u0111\u1ED9ng theo m\u1ED9t chi\u1EC1u tr\xEAn tr\u1EE5c t\u1ECDa \u0111\u1ED9 \u0111\xE3 ch\u1ECDn."
        },
        {
          name: "H\u1EC7 th\u1EE9c \u0111\u1ED9c l\u1EADp th\u1EDDi gian",
          latex: "v^2 - v_0^2 = 2 \\cdot a \\cdot d",
          explanation: "M\u1ED1i li\xEAn h\u1EC7 gi\u1EEFa v\u1EADn t\u1ED1c, gia t\u1ED1c v\xE0 \u0111\u1ED9 d\u1ECBch chuy\u1EC3n kh\xF4ng ch\u1EE9a bi\u1EBFn th\u1EDDi gian t.",
          unit: "v, v_0 (m/s); a (m/s^2); d (m)",
          applicability: "H\u1EEFu \xEDch khi \u0111\u1EC1 b\xE0i kh\xF4ng cho ho\u1EB7c kh\xF4ng y\xEAu c\u1EA7u t\xECm th\u1EDDi gian t."
        },
        {
          name: "Ph\u01B0\u01A1ng tr\xECnh t\u1ECDa \u0111\u1ED9",
          latex: "x = x_0 + v_0 t + \\frac{1}{2} a t^2",
          explanation: "x: t\u1ECDa \u0111\u1ED9 t\u1EA1i th\u1EDDi \u0111i\u1EC3m t; x_0: t\u1ECDa \u0111\u1ED9 ban \u0111\u1EA7u c\u1EE7a v\u1EADt.",
          unit: "x, x_0 (m)",
          applicability: "Khi x\xE9t chuy\u1EC3n \u0111\u1ED9ng g\u1EAFn v\u1EDBi m\u1ED9t g\u1ED1c t\u1ECDa \u0111\u1ED9 O x\xE1c \u0111\u1ECBnh."
        }
      ],
      commonErrors: [
        "Nh\u1EA7m d\u1EA5u gi\u1EEFa a v\xE0 v0 trong chuy\u1EC3n \u0111\u1ED9ng ch\u1EADm d\u1EA7n \u0111\u1EC1u: n\u1EBFu ch\u1ECDn chi\u1EC1u d\u01B0\u01A1ng l\xE0 chi\u1EC1u chuy\u1EC3n \u0111\u1ED9ng (v0 > 0) th\xEC a ph\u1EA3i mang d\u1EA5u \xE2m.",
        "\u0110\u1ED3ng nh\u1EA5t \u0111\u1ED9 d\u1ECBch chuy\u1EC3n d v\u1EDBi qu\xE3ng \u0111\u01B0\u1EDDng s: n\u1EBFu v\u1EADt \u0111\u1EA3o chi\u1EC1u chuy\u1EC3n \u0111\u1ED9ng, qu\xE3ng \u0111\u01B0\u1EDDng s l\xE0 t\u1ED5ng \u0111\u1ED9 d\xE0i c\xE1c \u0111o\u1EA1n, trong khi d = x_cu\u1ED1i - x_\u0111\u1EA7u.",
        "Qu\xEAn \u0111\u1ED5i \u0111\u01A1n v\u1ECB km/h sang m/s (chia cho 3.6) tr\u01B0\u1EDBc khi thay s\u1ED1 v\xE0o c\xF4ng th\u1EE9c gia t\u1ED1c."
      ]
    },
    illustrations: [
      {
        id: "ill_10_1_1",
        title: "\u0110\u1ED3 th\u1ECB v\u1EADn t\u1ED1c \u2013 th\u1EDDi gian (v - t)",
        type: "chart",
        url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
        caption: "\u0110\u1ED3 th\u1ECB v-t l\xE0 m\u1ED9t \u0111\u01B0\u1EDDng th\u1EB3ng xi\xEAn: \u0111\u1ED9 d\u1ED1c \u0111\u01B0\u1EDDng th\u1EB3ng ch\xEDnh l\xE0 gia t\u1ED1c a, di\u1EC7n t\xEDch h\xECnh thang gi\u1EDBi h\u1EA1n d\u01B0\u1EDBi \u0111\u1ED3 th\u1ECB ch\xEDnh l\xE0 \u0111\u1ED9 d\u1ECBch chuy\u1EC3n d."
      },
      {
        id: "ill_10_1_2",
        title: "S\u01A1 \u0111\u1ED3 ph\xE2n bi\u1EC7t nhanh d\u1EA7n \u0111\u1EC1u v\xE0 ch\u1EADm d\u1EA7n \u0111\u1EC1u",
        type: "diagram",
        url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
        caption: "Quy \u01B0\u1EDBc vect\u01A1: a c\xF9ng h\u01B0\u1EDBng v khi nhanh d\u1EA7n; a ng\u01B0\u1EE3c h\u01B0\u1EDBng v khi ch\u1EADm d\u1EA7n."
      }
    ],
    practiceExercises: [
      {
        id: "pe_10_1_1",
        type: "mcq",
        question: "M\u1ED9t xe \xF4 t\xF4 \u0111ang ch\u1EA1y v\u1EDBi v\u1EADn t\u1ED1c 20 m/s th\xEC t\xE0i x\u1EBF h\xE3m phanh, xe chuy\u1EC3n \u0111\u1ED9ng ch\u1EADm d\u1EA7n \u0111\u1EC1u v\u1EDBi gia t\u1ED1c c\xF3 \u0111\u1ED9 l\u1EDBn 2 m/s\xB2. Qu\xE3ng \u0111\u01B0\u1EDDng xe \u0111i \u0111\u01B0\u1EE3c cho \u0111\u1EBFn khi d\u1EEBng h\u1EB3n l\xE0 bao nhi\xEAu?",
        options: ["A. 50 m", "B. 100 m", "C. 200 m", "D. 40 m"],
        correctAnswer: "B. 100 m",
        solutionGuide: "Khi d\u1EEBng h\u1EB3n th\xEC v = 0 m/s. V\u1EADn t\u1ED1c ban \u0111\u1EA7u v_0 = 20 m/s. V\xEC xe ch\u1EADm d\u1EA7n \u0111\u1EC1u n\xEAn a = -2 m/s\xB2. \xC1p d\u1EE5ng h\u1EC7 th\u1EE9c li\xEAn h\u1EC7 v^2 - v_0^2 = 2ad => 0^2 - 20^2 = 2 * (-2) * d => -400 = -4d => d = 100 m. Qu\xE3ng \u0111\u01B0\u1EDDng s = d = 100 m.",
        isPublishedGuide: true
      },
      {
        id: "pe_10_1_2",
        type: "essay",
        question: "M\u1ED9t \u0111o\xE0n t\xE0u b\u1EAFt \u0111\u1EA7u r\u1EDDi ga chuy\u1EC3n \u0111\u1ED9ng th\u1EB3ng nhanh d\u1EA7n \u0111\u1EC1u. Sau 20 s t\xE0u \u0111\u1EA1t v\u1EADn t\u1ED1c 36 km/h. H\xE3y t\xEDnh: a) Gia t\u1ED1c c\u1EE7a \u0111o\xE0n t\xE0u. b) Qu\xE3ng \u0111\u01B0\u1EDDng t\xE0u \u0111i \u0111\u01B0\u1EE3c trong 20 s \u0111\u1EA7u.",
        solutionGuide: "\u0110\u1ED5i v\u1EADn t\u1ED1c v = 36 km/h = 10 m/s; v\xEC xu\u1EA5t ph\xE1t t\u1EEB tr\u1EA1ng th\xE1i ngh\u1EC9 n\xEAn v_0 = 0. a) Gia t\u1ED1c: a = (v - v_0) / t = (10 - 0) / 20 = 0.5 m/s\xB2. b) Qu\xE3ng \u0111\u01B0\u1EDDng: s = v_0*t + 0.5*a*t^2 = 0 + 0.5 * 0.5 * 20^2 = 100 m.",
        isPublishedGuide: true
      }
    ],
    linkedResourceIds: ["res_exp_10_1", "res_sim_10_1", "res_vid_10_1", "res_vid_10_exp", "res_doc_10_1", "res_doc_shared_measure"]
  },
  // LỚP 10 - Bài 2
  {
    id: "lesson_10_2",
    grade: 10,
    chapterId: "c10_3",
    chapterName: "\u0110\u1ED9ng l\u1EF1c h\u1ECDc",
    title: "\u0110\u1ECBnh lu\u1EADt II Newton",
    order: 2,
    textbookId: "ket_noi_tri_thuc",
    status: "published",
    authorId: "teacher_long",
    authorName: "Ths: L\xEA Long - QT",
    isSpecialTopic: false,
    isSample: true,
    createdAt: "2026-09-05T09:00:00Z",
    updatedAt: "2026-10-02T11:00:00Z",
    objectives: {
      knowledge: [
        "Ph\xE1t bi\u1EC3u \u0111\u01B0\u1EE3c \u0111\u1ECBnh lu\u1EADt II Newton v\xE0 vi\u1EBFt \u0111\u01B0\u1EE3c c\xF4ng th\u1EE9c to\xE1n h\u1ECDc d\u01B0\u1EDBi d\u1EA1ng vect\u01A1 v\xE0 \u0111\u1ED9 l\u1EDBn.",
        "N\xEAu \u0111\u01B0\u1EE3c \u0111\u1ECBnh ngh\u0129a \u0111\u01A1n v\u1ECB l\u1EF1c Newton (N) trong h\u1EC7 SI.",
        "Hi\u1EC3u kh\u1ED1i l\u01B0\u1EE3ng l\xE0 \u0111\u1EA1i l\u01B0\u1EE3ng \u0111\u1EB7c tr\u01B0ng cho m\u1EE9c qu\xE1n t\xEDnh c\u1EE7a v\u1EADt."
      ],
      skills: [
        "V\u1EBD \u0111\u01B0\u1EE3c s\u01A1 \u0111\u1ED3 l\u1EF1c t\xE1c d\u1EE5ng l\xEAn v\u1EADt (Free Body Diagram) v\xE0 \xE1p d\u1EE5ng ph\u01B0\u01A1ng ph\xE1p chi\u1EBFu \u0111\u1EC3 t\xECm gia t\u1ED1c.",
        "X\u1EED l\xED b\u1EA3ng s\u1ED1 li\u1EC7u th\xED nghi\u1EC7m m\u1ED1i quan h\u1EC7 gi\u1EEFa gia t\u1ED1c, l\u1EF1c t\xE1c d\u1EE5ng v\xE0 kh\u1ED1i l\u01B0\u1EE3ng xe tr\u01B0\u1EE3t."
      ],
      expectedOutcomes: [
        "Gi\u1EA3i th\xEDch \u0111\u01B0\u1EE3c t\u1EA1i sao xe t\u1EA3i ch\u1EDF n\u1EB7ng c\u1EA7n kho\u1EA3ng c\xE1ch phanh d\xE0i h\u01A1n \xF4 t\xF4 con khi c\xF9ng t\u1ED1c \u0111\u1ED9."
      ]
    },
    keyKnowledge: {
      concepts: [
        "Gia t\u1ED1c c\u1EE7a m\u1ED9t v\u1EADt c\xF9ng h\u01B0\u1EDBng v\u1EDBi l\u1EF1c t\xE1c d\u1EE5ng l\xEAn v\u1EADt. \u0110\u1ED9 l\u1EDBn c\u1EE7a gia t\u1ED1c t\u1EC9 l\u1EC7 thu\u1EADn v\u1EDBi \u0111\u1ED9 l\u1EDBn c\u1EE7a l\u1EF1c t\xE1c d\u1EE5ng v\xE0 t\u1EC9 l\u1EC7 ngh\u1ECBch v\u1EDBi kh\u1ED1i l\u01B0\u1EE3ng c\u1EE7a v\u1EADt.",
        "Kh\u1ED1i l\u01B0\u1EE3ng m: \u0111\u1EA1i l\u01B0\u1EE3ng v\xF4 h\u01B0\u1EDBng, \u0111\u1EB7c tr\u01B0ng cho m\u1EE9c qu\xE1n t\xEDnh c\u1EE7a v\u1EADt (kh\u1ED1i l\u01B0\u1EE3ng c\xE0ng l\u1EDBn, v\u1EADt c\xE0ng kh\xF3 thay \u0111\u1ED5i v\u1EADn t\u1ED1c)."
      ],
      laws: [
        "\u0110\u1ECBnh lu\u1EADt II Newton: Gia t\u1ED1c thu \u0111\u01B0\u1EE3c t\u1EC9 l\u1EC7 thu\u1EADn v\u1EDBi h\u1EE3p l\u1EF1c t\xE1c d\u1EE5ng v\xE0 t\u1EC9 l\u1EC7 ngh\u1ECBch v\u1EDBi kh\u1ED1i l\u01B0\u1EE3ng."
      ],
      formulas: [
        {
          name: "\u0110\u1ECBnh lu\u1EADt II Newton (D\u1EA1ng vect\u01A1)",
          latex: "\\vec{a} = \\frac{\\vec{F}_{hl}}{m} \\quad \\Longleftrightarrow \\quad \\vec{F}_{hl} = m \\cdot \\vec{a}",
          explanation: "H\u1EE3p l\u1EF1c t\xE1c d\u1EE5ng l\xEAn v\u1EADt b\u1EB1ng t\xEDch c\u1EE7a kh\u1ED1i l\u01B0\u1EE3ng v\xE0 gia t\u1ED1c c\u1EE7a v\u1EADt.",
          unit: "F (N); m (kg); a (m/s^2)",
          applicability: "H\u1EC7 quy chi\u1EBFu qu\xE1n t\xEDnh; kh\u1ED1i l\u01B0\u1EE3ng m kh\xF4ng \u0111\u1ED5i; t\u1ED1c \u0111\u1ED9 nh\u1ECF h\u01A1n nhi\u1EC1u t\u1ED1c \u0111\u1ED9 \xE1nh s\xE1ng."
        },
        {
          name: "\u0110\u1ECBnh ngh\u0129a \u0111\u01A1n v\u1ECB l\u1EF1c Newton",
          latex: "1\\text{ N} = 1\\text{ kg} \\cdot \\text{m/s}^2",
          explanation: "L\u1EF1c 1 Newton truy\u1EC1n cho v\u1EADt kh\u1ED1i l\u01B0\u1EE3ng 1 kg gia t\u1ED1c 1 m/s\xB2.",
          unit: "Newton (N)",
          applicability: "Chu\u1EA9n \u0111o l\u01B0\u1EDDng qu\u1ED1c t\u1EBF SI."
        }
      ],
      commonErrors: [
        "Qu\xEAn t\xEDnh h\u1EE3p l\u1EF1c F_hl m\xE0 ch\u1EC9 l\u1EA5y m\u1ED9t l\u1EF1c ri\xEAng l\u1EBB t\xE1c d\u1EE5ng l\xEAn v\u1EADt (v\xED d\u1EE5 qu\xEAn tr\u1EEB l\u1EF1c ma s\xE1t).",
        "Kh\xF4ng \u0111\u1ED5i \u0111\u01A1n v\u1ECB kh\u1ED1i l\u01B0\u1EE3ng t\u1EEB gam sang kilogam (ph\u1EA3i chia cho 1000).",
        "G\xE1n nh\u1EA7m ph\u01B0\u01A1ng c\u1EE7a gia t\u1ED1c kh\xE1c v\u1EDBi ph\u01B0\u01A1ng c\u1EE7a h\u1EE3p l\u1EF1c."
      ]
    },
    illustrations: [
      {
        id: "ill_10_2_1",
        title: "S\u01A1 \u0111\u1ED3 ph\xE2n t\xEDch l\u1EF1c tr\xEAn xe tr\u01B0\u1EE3t",
        type: "diagram",
        url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
        caption: "Ph\xE2n t\xEDch h\u1EE3p l\u1EF1c g\u1ED3m tr\u1ECDng l\u1EF1c P, ph\u1EA3n l\u1EF1c N, l\u1EF1c k\xE9o F v\xE0 l\u1EF1c ma s\xE1t Fms."
      }
    ],
    practiceExercises: [
      {
        id: "pe_10_2_1",
        type: "mcq",
        question: "M\u1ED9t l\u1EF1c F c\xF3 \u0111\u1ED9 l\u1EDBn 10 N t\xE1c d\u1EE5ng l\xEAn m\u1ED9t v\u1EADt kh\u1ED1i l\u01B0\u1EE3ng m = 2 kg \u0111ang \u0111\u1EE9ng y\xEAn tr\xEAn m\u1EB7t s\xE0n n\u1EB1m ngang kh\xF4ng ma s\xE1t. Sau 3 gi\xE2y, v\u1EADt \u0111\u1EA1t v\u1EADn t\u1ED1c l\xE0 bao nhi\xEAu?",
        options: ["A. 5 m/s", "B. 15 m/s", "C. 30 m/s", "D. 20 m/s"],
        correctAnswer: "B. 15 m/s",
        solutionGuide: "Gia t\u1ED1c c\u1EE7a v\u1EADt: a = F / m = 10 / 2 = 5 m/s\xB2. V\xEC ban \u0111\u1EA7u \u0111\u1EE9ng y\xEAn n\xEAn v_0 = 0. V\u1EADn t\u1ED1c sau 3 s: v = v_0 + at = 0 + 5 * 3 = 15 m/s.",
        isPublishedGuide: true
      }
    ],
    linkedResourceIds: ["res_sim_10_2", "res_exp_10_2", "res_vid_10_2", "res_doc_10_2", "res_doc_shared_measure"]
  },
  // LỚP 11 - Bài 3
  {
    id: "lesson_11_1",
    grade: 11,
    chapterId: "c11_1",
    chapterName: "Dao \u0111\u1ED9ng",
    title: "Dao \u0111\u1ED9ng \u0111i\u1EC1u h\xF2a",
    order: 1,
    textbookId: "ket_noi_tri_thuc",
    status: "published",
    authorId: "teacher_long",
    authorName: "Ths: L\xEA Long - QT",
    isSpecialTopic: false,
    isSample: true,
    createdAt: "2026-09-10T08:30:00Z",
    updatedAt: "2026-10-03T09:15:00Z",
    objectives: {
      knowledge: [
        "Ph\xE1t bi\u1EC3u \u0111\u01B0\u1EE3c \u0111\u1ECBnh ngh\u0129a dao \u0111\u1ED9ng \u0111i\u1EC1u h\xF2a.",
        "Vi\u1EBFt v\xE0 gi\u1EA3i th\xEDch \xFD ngh\u0129a c\xE1c \u0111\u1EA1i l\u01B0\u1EE3ng trong ph\u01B0\u01A1ng tr\xECnh li \u0111\u1ED9, v\u1EADn t\u1ED1c v\xE0 gia t\u1ED1c.",
        "N\xEAu \u0111\u01B0\u1EE3c m\u1ED1i quan h\u1EC7 v\u1EC1 pha gi\u1EEFa li \u0111\u1ED9, v\u1EADn t\u1ED1c v\xE0 gia t\u1ED1c trong dao \u0111\u1ED9ng \u0111i\u1EC1u h\xF2a."
      ],
      skills: [
        "S\u1EED d\u1EE5ng v\xF2ng tr\xF2n l\u01B0\u1EE3ng gi\xE1c (vect\u01A1 quay Fresnel) \u0111\u1EC3 x\xE1c \u0111\u1ECBnh th\u1EDDi gian v\xE0 tr\u1EA1ng th\xE1i dao \u0111\u1ED9ng.",
        "\u0110\u1ECDc v\xE0 ph\xE2n t\xEDch \u0111\u1ED3 th\u1ECB dao \u0111\u1ED9ng \u0111i\u1EC1u h\xF2a li \u0111\u1ED9 - th\u1EDDi gian (x - t)."
      ],
      expectedOutcomes: [
        "T\xEDnh to\xE1n chu k\xEC, t\u1EA7n s\u1ED1 v\xE0 bi\xEAn \u0111\u1ED9 t\u1EEB \u0111\u1ED3 th\u1ECB ho\u1EB7c ph\u01B0\u01A1ng tr\xECnh dao \u0111\u1ED9ng th\u1EF1c t\u1EBF."
      ]
    },
    keyKnowledge: {
      concepts: [
        "Dao \u0111\u1ED9ng \u0111i\u1EC1u h\xF2a l\xE0 dao \u0111\u1ED9ng trong \u0111\xF3 li \u0111\u1ED9 c\u1EE7a v\u1EADt l\xE0 m\u1ED9t h\xE0m cosin (ho\u1EB7c sin) c\u1EE7a th\u1EDDi gian.",
        "Bi\xEAn \u0111\u1ED9 A: \u0111\u1ED9 l\u1EC7ch c\u1EF1c \u0111\u1EA1i c\u1EE7a v\u1EADt kh\u1ECFi v\u1ECB tr\xED c\xE2n b\u1EB1ng (A > 0).",
        "Pha dao \u0111\u1ED9ng (\u03C9t + \u03C6): x\xE1c \u0111\u1ECBnh tr\u1EA1ng th\xE1i dao \u0111\u1ED9ng (v\u1ECB tr\xED v\xE0 chi\u1EC1u chuy\u1EC3n \u0111\u1ED9ng) t\u1EA1i th\u1EDDi \u0111i\u1EC3m t.",
        "Pha ban \u0111\u1EA7u \u03C6: x\xE1c \u0111\u1ECBnh tr\u1EA1ng th\xE1i dao \u0111\u1ED9ng t\u1EA1i th\u1EDDi \u0111i\u1EC3m t = 0 (-\u03C0 \u2264 \u03C6 \u2264 \u03C0)."
      ],
      laws: [
        "\u0110\u1ECBnh lu\u1EADt chuy\u1EC3n \u0111\u1ED9ng \u0111i\u1EC1u h\xF2a: Gia t\u1ED1c lu\xF4n t\u1EC9 l\u1EC7 v\u1EDBi li \u0111\u1ED9 v\xE0 h\u01B0\u1EDBng v\u1EC1 v\u1ECB tr\xED c\xE2n b\u1EB1ng (ng\u01B0\u1EE3c d\u1EA5u v\u1EDBi li \u0111\u1ED9)."
      ],
      formulas: [
        {
          name: "Ph\u01B0\u01A1ng tr\xECnh li \u0111\u1ED9",
          latex: "x = A \\cos(\\omega t + \\varphi)",
          explanation: "x: li \u0111\u1ED9 t\u1EA1i th\u1EDDi \u0111i\u1EC3m t; A: bi\xEAn \u0111\u1ED9 dao \u0111\u1ED9ng; \u03C9: t\u1EA7n s\u1ED1 g\xF3c; \u03C6: pha ban \u0111\u1EA7u.",
          unit: "x, A (cm ho\u1EB7c m); \u03C9 (rad/s); \u03C6 (rad)",
          applicability: "H\u1EC7 dao \u0111\u1ED9ng c\u01A1 h\u1ECDc kh\xF4ng ma s\xE1t xung quanh v\u1ECB tr\xED c\xE2n b\u1EB1ng."
        },
        {
          name: "Ph\u01B0\u01A1ng tr\xECnh v\u1EADn t\u1ED1c",
          latex: "v = x' = -\\omega A \\sin(\\omega t + \\varphi) = \\omega A \\cos\\left(\\omega t + \\varphi + \\frac{\\pi}{2}\\right)",
          explanation: "V\u1EADn t\u1ED1c s\u1EDBm pha \u03C0/2 so v\u1EDBi li \u0111\u1ED9; c\u1EF1c \u0111\u1EA1i khi qua VTCB theo chi\u1EC1u d\u01B0\u01A1ng: v_max = \u03C9A.",
          unit: "v (cm/s ho\u1EB7c m/s)",
          applicability: "\u0110\u1EA1o h\xE0m b\u1EADc nh\u1EA5t c\u1EE7a li \u0111\u1ED9 theo th\u1EDDi gian."
        },
        {
          name: "Ph\u01B0\u01A1ng tr\xECnh gia t\u1ED1c",
          latex: "a = v' = -\\omega^2 x = \\omega^2 A \\cos(\\omega t + \\varphi + \\pi)",
          explanation: "Gia t\u1ED1c s\u1EDBm pha \u03C0 so v\u1EDBi li \u0111\u1ED9 (ng\u01B0\u1EE3c pha); c\xF3 \u0111\u1ED9 l\u1EDBn c\u1EF1c \u0111\u1EA1i t\u1EA1i bi\xEAn: a_max = \u03C9\xB2A.",
          unit: "a (cm/s^2 ho\u1EB7c m/s^2)",
          applicability: "Gia t\u1ED1c lu\xF4n h\u01B0\u1EDBng v\u1EC1 v\u1ECB tr\xED c\xE2n b\u1EB1ng."
        },
        {
          name: "H\u1EC7 th\u1EE9c \u0111\u1ED9c l\u1EADp th\u1EDDi gian",
          latex: "A^2 = x^2 + \\frac{v^2}{\\omega^2} = \\frac{a^2}{\\omega^4} + \\frac{v^2}{\\omega^2}",
          explanation: "Li\xEAn h\u1EC7 gi\u1EEFa li \u0111\u1ED9, v\u1EADn t\u1ED1c v\xE0 gia t\u1ED1c t\u1EA1i c\xF9ng m\u1ED9t th\u1EDDi \u0111i\u1EC3m b\u1EA5t k\xEC.",
          unit: "C\xE1c \u0111\u1EA1i l\u01B0\u1EE3ng ph\u1EA3i c\xF9ng h\u1EC7 \u0111\u01A1n v\u1ECB (c\xF9ng cm ho\u1EB7c c\xF9ng m)",
          applicability: "\xC1p d\u1EE5ng cho m\u1ECDi th\u1EDDi \u0111i\u1EC3m trong dao \u0111\u1ED9ng \u0111i\u1EC1u h\xF2a."
        }
      ],
      commonErrors: [
        "Qu\xEAn \u0111\u1ED5i \u0111\u01A1n v\u1ECB gi\u1EEFa x (cm) v\xE0 v (m/s) khi \xE1p d\u1EE5ng c\xF4ng th\u1EE9c \u0111\u1ED9c l\u1EADp th\u1EDDi gian A\xB2 = x\xB2 + (v/\u03C9)\xB2, d\u1EABn t\u1EDBi k\u1EBFt qu\u1EA3 sai g\u1EA5p 100 l\u1EA7n.",
        "X\xE1c \u0111\u1ECBnh sai d\u1EA5u c\u1EE7a pha ban \u0111\u1EA7u \u03C6: n\u1EBFu v\u1EADt \u0111i theo chi\u1EC1u \xE2m (v < 0) th\xEC sin \u03C6 > 0 t\u1EE9c \u03C6 mang gi\xE1 tr\u1ECB d\u01B0\u01A1ng; n\u1EBFu \u0111i theo chi\u1EC1u d\u01B0\u01A1ng th\xEC \u03C6 \xE2m.",
        "Nh\u1EA7m t\u1EA7n s\u1ED1 g\xF3c \u03C9 (rad/s) v\u1EDBi t\u1EA7n s\u1ED1 f (Hz): c\u1EA7n nh\u1EDB \u03C9 = 2\u03C0f = 2\u03C0/T."
      ]
    },
    illustrations: [
      {
        id: "ill_11_1_1",
        title: "M\u1ED1i quan h\u1EC7 pha gi\u1EEFa x, v, a",
        type: "chart",
        url: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
        caption: "\u0110\u1ED3 th\u1ECB bi\u1EC3u di\u1EC5n pha: v vu\xF4ng pha v\u1EDBi x (s\u1EDBm pha \u03C0/2); a ng\u01B0\u1EE3c pha v\u1EDBi x."
      }
    ],
    practiceExercises: [
      {
        id: "pe_11_1_1",
        type: "mcq",
        question: "M\u1ED9t ch\u1EA5t \u0111i\u1EC3m dao \u0111\u1ED9ng \u0111i\u1EC1u h\xF2a v\u1EDBi ph\u01B0\u01A1ng tr\xECnh x = 4 cos(2\u03C0t + \u03C0/3) (cm). Bi\xEAn \u0111\u1ED9 v\xE0 t\u1EA7n s\u1ED1 dao \u0111\u1ED9ng c\u1EE7a ch\u1EA5t \u0111i\u1EC3m l\xE0:",
        options: ["A. A = 4 cm; f = 2 Hz", "B. A = 4 cm; f = 1 Hz", "C. A = 8 cm; f = 1 Hz", "D. A = 4 cm; f = 2\u03C0 Hz"],
        correctAnswer: "B. A = 4 cm; f = 1 Hz",
        solutionGuide: "T\u1EEB ph\u01B0\u01A1ng tr\xECnh: Bi\xEAn \u0111\u1ED9 A = 4 cm; t\u1EA7n s\u1ED1 g\xF3c \u03C9 = 2\u03C0 rad/s => T\u1EA7n s\u1ED1 f = \u03C9 / (2\u03C0) = 2\u03C0 / (2\u03C0) = 1 Hz.",
        isPublishedGuide: true
      }
    ],
    linkedResourceIds: ["res_sim_11_1", "res_exp_11_1", "res_vid_11_1", "res_doc_11_1", "res_doc_canva_11_1"]
  },
  // LỚP 11 - Bài 4
  {
    id: "lesson_11_2",
    grade: 11,
    chapterId: "c11_4",
    chapterName: "D\xF2ng \u0111i\u1EC7n v\xE0 m\u1EA1ch \u0111i\u1EC7n",
    title: "\u0110\u1ECBnh lu\u1EADt Ohm cho \u0111o\u1EA1n m\u1EA1ch ch\u1EC9 c\xF3 \u0111i\u1EC7n tr\u1EDF",
    order: 2,
    textbookId: "ket_noi_tri_thuc",
    status: "published",
    authorId: "teacher_long",
    authorName: "Ths: L\xEA Long - QT",
    isSpecialTopic: false,
    isSample: true,
    createdAt: "2026-09-12T10:00:00Z",
    updatedAt: "2026-10-04T14:20:00Z",
    objectives: {
      knowledge: [
        "Ph\xE1t bi\u1EC3u \u0111\u01B0\u1EE3c \u0111\u1ECBnh lu\u1EADt Ohm cho \u0111o\u1EA1n m\u1EA1ch ch\u1EC9 ch\u1EE9a \u0111i\u1EC7n tr\u1EDF thu\u1EA7n.",
        "N\xEAu \u0111\u01B0\u1EE3c \u0111\u1ECBnh ngh\u0129a \u0111i\u1EC7n tr\u1EDF v\xE0 \u0111\u01A1n v\u1ECB \xD4m (\u03A9).",
        "M\xF4 t\u1EA3 \u0111\u01B0\u1EE3c \u0111\u01B0\u1EDDng \u0111\u1EB7c tr\u01B0ng v\xF4n \u2013 ampe (\u0111\u1EB7c tuy\u1EBFn V-A) c\u1EE7a v\u1EADt d\u1EABn kim lo\u1EA1i."
      ],
      skills: [
        "M\u1EAFc \u0111\u01B0\u1EE3c m\u1EA1ch \u0111i\u1EC7n \u0111o c\u01B0\u1EDDng \u0111\u1ED9 d\xF2ng \u0111i\u1EC7n v\xE0 hi\u1EC7u \u0111i\u1EC7n th\u1EBF b\u1EB1ng \u0111\u1ED3ng h\u1ED3 \u0111a n\u0103ng.",
        "V\u1EBD v\xE0 suy ra gi\xE1 tr\u1ECB \u0111i\u1EC7n tr\u1EDF R t\u1EEB \u0111\u1ED3 th\u1ECB \u0111\u1EB7c tuy\u1EBFn V-A."
      ],
      expectedOutcomes: [
        "T\xEDnh to\xE1n \u0111\u01B0\u1EE3c d\xF2ng \u0111i\u1EC7n ch\u1EA1y qua c\xE1c thi\u1EBFt b\u1ECB ti\xEAu th\u1EE5 \u0111i\u1EC7n d\xE2n d\u1EE5ng."
      ]
    },
    keyKnowledge: {
      concepts: [
        "\u0110i\u1EC7n tr\u1EDF R: \u0111\u1EA1i l\u01B0\u1EE3ng \u0111\u1EB7c tr\u01B0ng cho m\u1EE9c \u0111\u1ED9 c\u1EA3n tr\u1EDF d\xF2ng \u0111i\u1EC7n c\u1EE7a v\u1EADt d\u1EABn.",
        "\u0110\u1EB7c tuy\u1EBFn V-A c\u1EE7a v\u1EADt d\u1EABn tu\xE2n theo \u0111\u1ECBnh lu\u1EADt Ohm l\xE0 m\u1ED9t \u0111o\u1EA1n th\u1EB3ng \u0111i qua g\u1ED1c t\u1ECDa \u0111\u1ED9 O."
      ],
      laws: [
        "\u0110\u1ECBnh lu\u1EADt Ohm: C\u01B0\u1EDDng \u0111\u1ED9 d\xF2ng \u0111i\u1EC7n ch\u1EA1y qua \u0111o\u1EA1n m\u1EA1ch ch\u1EC9 c\xF3 \u0111i\u1EC7n tr\u1EDF t\u1EC9 l\u1EC7 thu\u1EADn v\u1EDBi hi\u1EC7u \u0111i\u1EC7n th\u1EBF gi\u1EEFa hai \u0111\u1EA7u \u0111o\u1EA1n m\u1EA1ch v\xE0 t\u1EC9 l\u1EC7 ngh\u1ECBch v\u1EDBi \u0111i\u1EC7n tr\u1EDF c\u1EE7a \u0111o\u1EA1n m\u1EA1ch."
      ],
      formulas: [
        {
          name: "\u0110\u1ECBnh lu\u1EADt Ohm",
          latex: "I = \\frac{U}{R} \\quad \\Longleftrightarrow \\quad U = I \\cdot R",
          explanation: "I: c\u01B0\u1EDDng \u0111\u1ED9 d\xF2ng \u0111i\u1EC7n; U: hi\u1EC7u \u0111i\u1EC7n th\u1EBF; R: \u0111i\u1EC7n tr\u1EDF.",
          unit: "I (A); U (V); R (\u03A9)",
          applicability: "\u0110o\u1EA1n m\u1EA1ch thu\u1EA7n \u0111i\u1EC7n tr\u1EDF kim lo\u1EA1i \u1EDF nhi\u1EC7t \u0111\u1ED9 kh\xF4ng \u0111\u1ED5i."
        },
        {
          name: "\u0110i\u1EC7n tr\u1EDF c\u1EE7a d\xE2y d\u1EABn h\xECnh tr\u1EE5",
          latex: "R = \\rho \\frac{\\ell}{S}",
          explanation: "\u03C1: \u0111i\u1EC7n tr\u1EDF su\u1EA5t; \u2113: chi\u1EC1u d\xE0i d\xE2y d\u1EABn; S: ti\u1EBFt di\u1EC7n d\xE2y.",
          unit: "\u03C1 (\u03A9\xB7m); \u2113 (m); S (m^2)",
          applicability: "D\xE2y d\u1EABn \u0111\u1ED3ng ch\u1EA5t c\xF3 ti\u1EBFt di\u1EC7n \u0111\u1EC1u."
        }
      ],
      commonErrors: [
        "M\u1EAFc sai \u0111\u1ED3ng h\u1ED3 \u0111o: Ampe k\u1EBF ph\u1EA3i m\u1EAFc n\u1ED1i ti\u1EBFp v\u1EDBi \u0111i\u1EC7n tr\u1EDF; V\xF4n k\u1EBF ph\u1EA3i m\u1EAFc song song hai \u0111\u1EA7u \u0111i\u1EC7n tr\u1EDF.",
        "T\u01B0\u1EDFng l\u1EA7m R thay \u0111\u1ED5i khi thay \u0111\u1ED5i U ho\u1EB7c I: v\u1EDBi v\u1EADt d\u1EABn tu\xE2n theo \u0111\u1ECBnh lu\u1EADt Ohm \u1EDF nhi\u1EC7t \u0111\u1ED9 \u1ED5n \u0111\u1ECBnh, R l\xE0 h\u1EB1ng s\u1ED1 \u0111\u1EB7c tr\u01B0ng cho v\u1EADt d\u1EABn, kh\xF4ng ph\u1EE5 thu\u1ED9c v\xE0o U v\xE0 I."
      ]
    },
    illustrations: [
      {
        id: "ill_11_2_1",
        title: "S\u01A1 \u0111\u1ED3 m\u1EA1ch \u0111i\u1EC7n th\xED nghi\u1EC7m ki\u1EC3m ch\u1EE9ng \u0111\u1ECBnh lu\u1EADt Ohm",
        type: "diagram",
        url: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=800&q=80",
        caption: "Ngu\u1ED3n \u0111i\u1EC7n \u0111i\u1EC1u ch\u1EC9nh, kh\xF3a K, ampe k\u1EBF m\u1EAFc n\u1ED1i ti\u1EBFp, v\xF4n k\u1EBF m\u1EAFc song song v\u1EDBi bi\u1EBFn tr\u1EDF R."
      }
    ],
    practiceExercises: [
      {
        id: "pe_11_2_1",
        type: "mcq",
        question: "\u0110\u1EB7t v\xE0o hai \u0111\u1EA7u m\u1ED9t \u0111i\u1EC7n tr\u1EDF R = 20 \u03A9 m\u1ED9t hi\u1EC7u \u0111i\u1EC7n th\u1EBF U = 12 V. C\u01B0\u1EDDng \u0111\u1ED9 d\xF2ng \u0111i\u1EC7n ch\u1EA1y qua \u0111i\u1EC7n tr\u1EDF l\xE0:",
        options: ["A. 0.6 A", "B. 1.67 A", "C. 240 A", "D. 0.4 A"],
        correctAnswer: "A. 0.6 A",
        solutionGuide: "\xC1p d\u1EE5ng \u0111\u1ECBnh lu\u1EADt Ohm: I = U / R = 12 / 20 = 0.6 A.",
        isPublishedGuide: true
      }
    ],
    linkedResourceIds: ["res_sim_11_2", "res_exp_11_2", "res_vid_11_2", "res_doc_11_2"]
  },
  // LỚP 12 - Bài 5
  {
    id: "lesson_12_1",
    grade: 12,
    chapterId: "c12_1",
    chapterName: "V\u1EADt l\xED nhi\u1EC7t",
    title: "Nhi\u1EC7t h\xF3a h\u01A1i ri\xEAng",
    order: 1,
    textbookId: "ket_noi_tri_thuc",
    status: "published",
    authorId: "teacher_long",
    authorName: "Ths: L\xEA Long - QT",
    isSpecialTopic: false,
    isSample: true,
    createdAt: "2026-09-15T08:00:00Z",
    updatedAt: "2026-10-05T16:00:00Z",
    objectives: {
      knowledge: [
        "N\xEAu \u0111\u01B0\u1EE3c \u0111\u1ECBnh ngh\u0129a nhi\u1EC7t h\xF3a h\u01A1i ri\xEAng v\xE0 \u0111\u01A1n v\u1ECB \u0111o trong h\u1EC7 SI (J/kg).",
        "Vi\u1EBFt \u0111\u01B0\u1EE3c c\xF4ng th\u1EE9c t\xEDnh nhi\u1EC7t l\u01B0\u1EE3ng c\u1EA7n cung c\u1EA5p \u0111\u1EC3 h\xF3a h\u01A1i ho\xE0n to\xE0n m\u1ED9t kh\u1ED1i l\u01B0\u1EE3ng ch\u1EA5t l\u1ECFng \u1EDF nhi\u1EC7t \u0111\u1ED9 s\xF4i.",
        "M\xF4 t\u1EA3 \u0111\u01B0\u1EE3c nguy\xEAn t\u1EAFc v\xE0 c\xE1c b\u01B0\u1EDBc th\xED nghi\u1EC7m \u0111o nhi\u1EC7t h\xF3a h\u01A1i ri\xEAng c\u1EE7a n\u01B0\u1EDBc."
      ],
      skills: [
        "T\xEDnh to\xE1n nhi\u1EC7t l\u01B0\u1EE3ng v\xE0 kh\u1ED1i l\u01B0\u1EE3ng ch\u1EA5t l\u1ECFng h\xF3a h\u01A1i.",
        "Ph\xE2n t\xEDch ngu\u1ED3n g\u1ED1c sai s\u1ED1 trong th\xED nghi\u1EC7m nhi\u1EC7t (s\u1EF1 th\u1EA5t tho\xE1t nhi\u1EC7t ra m\xF4i tr\u01B0\u1EDDng, nhi\u1EC7t dung c\u1EE7a b\xECnh nhi\u1EC7t l\u01B0\u1EE3ng k\u1EBF)."
      ],
      expectedOutcomes: [
        "Gi\u1EA3i th\xEDch \u0111\u01B0\u1EE3c \u1EE9ng d\u1EE5ng l\xE0m m\xE1t b\u1EB1ng h\u01A1i n\u01B0\u1EDBc v\xE0 hi\u1EC7n t\u01B0\u1EE3ng \u0111\u1ED5 m\u1ED3 h\xF4i gi\xFAp \u0111i\u1EC1u h\xF2a th\xE2n nhi\u1EC7t \u1EDF ng\u01B0\u1EDDi."
      ]
    },
    keyKnowledge: {
      concepts: [
        "Nhi\u1EC7t h\xF3a h\u01A1i ri\xEAng (L) c\u1EE7a m\u1ED9t ch\u1EA5t l\xE0 nhi\u1EC7t l\u01B0\u1EE3ng c\u1EA7n thi\u1EBFt \u0111\u1EC3 l\xE0m cho m\u1ED9t \u0111\u01A1n v\u1ECB kh\u1ED1i l\u01B0\u1EE3ng (1 kg) ch\u1EA5t \u0111\xF3 chuy\u1EC3n ho\xE0n to\xE0n t\u1EEB th\u1EC3 l\u1ECFng sang th\u1EC3 kh\xED \u1EDF nhi\u1EC7t \u0111\u1ED9 s\xF4i.",
        "Trong su\u1ED1t qu\xE1 tr\xECnh s\xF4i h\xF3a h\u01A1i, nhi\u1EC7t \u0111\u1ED9 c\u1EE7a ch\u1EA5t l\u1ECFng kh\xF4ng thay \u0111\u1ED5i (nhi\u1EC7t l\u01B0\u1EE3ng nh\u1EADn v\xE0o d\xF9ng \u0111\u1EC3 ph\xE1 v\u1EE1 c\xE1c li\xEAn k\u1EBFt ph\xE2n t\u1EED)."
      ],
      laws: [
        "\u0110\u1ECBnh lu\u1EADt b\u1EA3o to\xE0n n\u0103ng l\u01B0\u1EE3ng trong bi\u1EBFn \u0111\u1ED5i tr\u1EA1ng th\xE1i nhi\u1EC7t: Nhi\u1EC7t l\u01B0\u1EE3ng cung c\u1EA5p b\u1EB1ng n\u0103ng l\u01B0\u1EE3ng ph\xE1 v\u1EE1 li\xEAn k\u1EBFt c\u1EA5u tr\xFAc pha."
      ],
      formulas: [
        {
          name: "C\xF4ng th\u1EE9c t\xEDnh nhi\u1EC7t l\u01B0\u1EE3ng h\xF3a h\u01A1i",
          latex: "Q = L \\cdot m \\quad \\Longleftrightarrow \\quad L = \\frac{Q}{m}",
          explanation: "Q: nhi\u1EC7t l\u01B0\u1EE3ng c\u1EA7n cung c\u1EA5p; L: nhi\u1EC7t h\xF3a h\u01A1i ri\xEAng; m: kh\u1ED1i l\u01B0\u1EE3ng ch\u1EA5t l\u1ECFng h\xF3a h\u01A1i.",
          unit: "Q (J); m (kg); L (J/kg)",
          applicability: "Ch\u1EA5t l\u1ECFng \u1EDF \u0111\xFAng nhi\u1EC7t \u0111\u1ED9 s\xF4i d\u01B0\u1EDBi \xE1p su\u1EA5t x\xE1c \u0111\u1ECBnh."
        },
        {
          name: "Nhi\u1EC7t l\u01B0\u1EE3ng do d\xF2ng \u0111i\u1EC7n cung c\u1EA5p",
          latex: "Q = P \\cdot \\tau = U \\cdot I \\cdot \\tau",
          explanation: "P: c\xF4ng su\u1EA5t nhi\u1EC7t c\u1EE7a d\xE2y nung; \u03C4: th\u1EDDi gian \u0111un; U, I: \u0111i\u1EC7n \xE1p v\xE0 d\xF2ng \u0111i\u1EC7n.",
          unit: "P (W); \u03C4 (s); Q (J)",
          applicability: "B\u1ECF qua hao ph\xED nhi\u1EC7t ra m\xF4i tr\u01B0\u1EDDng ngo\xE0i."
        }
      ],
      commonErrors: [
        "Nh\u1EA7m l\u1EABn gi\u1EEFa nhi\u1EC7t dung ri\xEAng c (J/kg\xB7K) d\xF9ng cho qu\xE1 tr\xECnh t\u0103ng nhi\u1EC7t \u0111\u1ED9 Q = mc\u0394T v\u1EDBi nhi\u1EC7t h\xF3a h\u01A1i ri\xEAng L (J/kg) d\xF9ng cho chuy\u1EC3n pha \u0111\u1EB3ng nhi\u1EC7t Q = Lm.",
        "Kh\xF4ng t\xEDnh kh\u1ED1i l\u01B0\u1EE3ng n\u01B0\u1EDBc b\u1ECB bay h\u01A1i tr\u01B0\u1EDBc khi n\u01B0\u1EDBc \u0111\u1EA1t \u0111\u1EBFn \u0111i\u1EC3m s\xF4i 100\xB0C trong th\u1EF1c nghi\u1EC7m."
      ]
    },
    illustrations: [
      {
        id: "ill_12_1_1",
        title: "M\xF4 h\xECnh chuy\u1EC3n pha l\u1ECFng sang kh\xED",
        type: "diagram",
        url: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80",
        caption: "Kho\u1EA3ng c\xE1ch gi\u1EEFa c\xE1c ph\xE2n t\u1EED th\u1EC3 kh\xED l\u1EDBn h\u01A1n r\u1EA5t nhi\u1EC1u so v\u1EDBi th\u1EC3 l\u1ECFng; l\u1EF1c t\u01B0\u01A1ng t\xE1c ph\xE2n t\u1EED gi\u1EA3m m\u1EA1nh."
      }
    ],
    practiceExercises: [
      {
        id: "pe_12_1_1",
        type: "mcq",
        question: "Nhi\u1EC7t h\xF3a h\u01A1i ri\xEAng c\u1EE7a n\u01B0\u1EDBc l\xE0 2.26 \xD7 10\u2076 J/kg. Nhi\u1EC7t l\u01B0\u1EE3ng c\u1EA7n cung c\u1EA5p \u0111\u1EC3 l\xE0m bay h\u01A1i ho\xE0n to\xE0n 0.5 kg n\u01B0\u1EDBc \u1EDF nhi\u1EC7t \u0111\u1ED9 100\xB0C l\xE0:",
        options: ["A. 1.13 \xD7 10\u2076 J", "B. 4.52 \xD7 10\u2076 J", "C. 2.26 \xD7 10\u2076 J", "D. 1.13 \xD7 10\xB3 J"],
        correctAnswer: "A. 1.13 \xD7 10\u2076 J",
        solutionGuide: "\xC1p d\u1EE5ng c\xF4ng th\u1EE9c Q = L * m = 2.26 * 10^6 * 0.5 = 1.13 * 10^6 J.",
        isPublishedGuide: true
      }
    ],
    linkedResourceIds: ["res_sim_12_1", "res_exp_12_1", "res_vid_12_1", "res_doc_12_1"]
  },
  // LỚP 12 - Bài 6
  {
    id: "lesson_12_2",
    grade: 12,
    chapterId: "c12_2",
    chapterName: "Kh\xED l\xED t\u01B0\u1EDFng",
    title: "Kh\xED l\xED t\u01B0\u1EDFng",
    order: 2,
    textbookId: "ket_noi_tri_thuc",
    status: "published",
    authorId: "teacher_long",
    authorName: "Ths: L\xEA Long - QT",
    isSpecialTopic: false,
    isSample: true,
    createdAt: "2026-09-18T09:30:00Z",
    updatedAt: "2026-10-06T15:00:00Z",
    objectives: {
      knowledge: [
        "N\xEAu \u0111\u01B0\u1EE3c m\xF4 h\xECnh kh\xED l\xED t\u01B0\u1EDFng v\xE0 c\xE1c gi\u1EA3 thuy\u1EBFt vi m\xF4 c\u1EE7a n\xF3.",
        "Ph\xE1t bi\u1EC3u v\xE0 vi\u1EBFt \u0111\u01B0\u1EE3c ph\u01B0\u01A1ng tr\xECnh tr\u1EA1ng th\xE1i c\u1EE7a kh\xED l\xED t\u01B0\u1EDFng (Clapeyron - Mendeleev).",
        "V\u1EADn d\u1EE5ng \u0111\u1ECBnh lu\u1EADt Boyle cho qu\xE1 tr\xECnh \u0111\u1EB3ng nhi\u1EC7t v\xE0 \u0111\u1ECBnh lu\u1EADt Charles cho qu\xE1 tr\xECnh \u0111\u1EB3ng \xE1p."
      ],
      skills: [
        "V\u1EBD v\xE0 chuy\u1EC3n \u0111\u1ED5i c\xE1c \u0111\u1ED3 th\u1ECB \u0111\u1EB3ng qu\xE1 tr\xECnh trong c\xE1c h\u1EC7 tr\u1EE5c t\u1ECDa \u0111\u1ED9 (p - V, V - T, p - T).",
        "T\xEDnh to\xE1n th\xF4ng s\u1ED1 tr\u1EA1ng th\xE1i c\u1EE7a m\u1ED9t l\u01B0\u1EE3ng kh\xED khi thay \u0111\u1ED5i \u0111i\u1EC1u ki\u1EC7n m\xF4i tr\u01B0\u1EDDng."
      ],
      expectedOutcomes: [
        "Gi\u1EA3i th\xEDch \u0111\u01B0\u1EE3c hi\u1EC7n t\u01B0\u1EE3ng \xE1p su\u1EA5t l\u1ED1p xe t\u0103ng l\xEAn sau khi ch\u1EA1y \u0111\u01B0\u1EDDng d\xE0i d\u01B0\u1EDBi tr\u1EDDi n\u1EAFng g\u1EAFt."
      ]
    },
    keyKnowledge: {
      concepts: [
        "Kh\xED l\xED t\u01B0\u1EDFng l\xE0 ch\u1EA5t kh\xED m\xE0 c\xE1c ph\xE2n t\u1EED \u0111\u01B0\u1EE3c coi l\xE0 c\xE1c ch\u1EA5t \u0111i\u1EC3m v\xE0 ch\u1EC9 t\u01B0\u01A1ng t\xE1c v\u1EDBi nhau khi va ch\u1EA1m.",
        "Ba th\xF4ng s\u1ED1 tr\u1EA1ng th\xE1i c\u1EE7a m\u1ED9t l\u01B0\u1EE3ng kh\xED x\xE1c \u0111\u1ECBnh: \xC1p su\u1EA5t (p), Th\u1EC3 t\xEDch (V) v\xE0 Nhi\u1EC7t \u0111\u1ED9 tuy\u1EC7t \u0111\u1ED1i (T)."
      ],
      laws: [
        "\u0110\u1ECBnh lu\u1EADt Boyle: \u1EDE nhi\u1EC7t \u0111\u1ED9 kh\xF4ng \u0111\u1ED5i, t\xEDch c\u1EE7a \xE1p su\u1EA5t v\xE0 th\u1EC3 t\xEDch c\u1EE7a m\u1ED9t l\u01B0\u1EE3ng kh\xED x\xE1c \u0111\u1ECBnh l\xE0 h\u1EB1ng s\u1ED1 (p \xB7 V = const).",
        "\u0110\u1ECBnh lu\u1EADt Charles: \u1EDE \xE1p su\u1EA5t kh\xF4ng \u0111\u1ED5i, t\u1EC9 s\u1ED1 th\u1EC3 t\xEDch v\xE0 nhi\u1EC7t \u0111\u1ED9 tuy\u1EC7t \u0111\u1ED1i l\xE0 h\u1EB1ng s\u1ED1 (V / T = const)."
      ],
      formulas: [
        {
          name: "Ph\u01B0\u01A1ng tr\xECnh tr\u1EA1ng th\xE1i kh\xED l\xED t\u01B0\u1EDFng",
          latex: "\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2} \\quad \\Longleftrightarrow \\quad \\frac{p V}{T} = \\text{const}",
          explanation: "p: \xE1p su\u1EA5t; V: th\u1EC3 t\xEDch; T: nhi\u1EC7t \u0111\u1ED9 Kelvin.",
          unit: "p (Pa, N/m^2, atm); V (m^3, l\xEDt); T (K)",
          applicability: "Kh\u1ED1i l\u01B0\u1EE3ng kh\xED x\xE1c \u0111\u1ECBnh m = const."
        },
        {
          name: "Ph\u01B0\u01A1ng tr\xECnh Clapeyron \u2013 Mendeleev",
          latex: "p \\cdot V = n \\cdot R \\cdot T = \\frac{m}{M} \\cdot R \\cdot T",
          explanation: "n: s\u1ED1 mol kh\xED; R: h\u1EB1ng s\u1ED1 kh\xED l\xED t\u01B0\u1EDFng (R \u2248 8.31 J/(mol\xB7K)); M: kh\u1ED1i l\u01B0\u1EE3ng mol.",
          unit: "p (Pa); V (m^3); n (mol); T (K)",
          applicability: "Cho l\u01B0\u1EE3ng kh\xED b\u1EA5t k\xEC \u1EDF \xE1p su\u1EA5t v\u1EEBa v\xE0 nh\u1ECF."
        },
        {
          name: "\u0110\u1ED5i nhi\u1EC7t \u0111\u1ED9 Kelvin",
          latex: "T = t\\,(^\\circ\\text{C}) + 273.15",
          explanation: "T l\xE0 nhi\u1EC7t \u0111\u1ED9 tuy\u1EC7t \u0111\u1ED1i \u0111o b\u1EB1ng Kelvin.",
          unit: "Kelvin (K)",
          applicability: "B\u1EAFt bu\u1ED9c d\xF9ng T(K) trong c\xE1c ph\u01B0\u01A1ng tr\xECnh kh\xED l\xED t\u01B0\u1EDFng."
        }
      ],
      commonErrors: [
        "D\xF9ng tr\u1EF1c ti\u1EBFp nhi\u1EC7t \u0111\u1ED9 Celsius (\xB0C) thay v\xEC nhi\u1EC7t \u0111\u1ED9 Kelvin (K) khi l\u1EADp t\u1EC9 s\u1ED1 p1/T1 = p2/T2, d\u1EABn \u0111\u1EBFn sai s\xF3t ho\xE0n to\xE0n.",
        "Kh\xF4ng quy \u0111\u1ED5i th\u1ED1ng nh\u1EA5t \u0111\u01A1n v\u1ECB th\u1EC3 t\xEDch (1 m\xB3 = 1000 l\xEDt) ho\u1EB7c \xE1p su\u1EA5t (1 atm \u2248 1.013 \xD7 10\u2075 Pa)."
      ]
    },
    illustrations: [
      {
        id: "ill_12_2_1",
        title: "M\xF4 h\xECnh chuy\u1EC3n \u0111\u1ED9ng h\u1ED7n lo\u1EA1n c\u1EE7a c\xE1c ph\xE2n t\u1EED kh\xED trong xilanh",
        type: "diagram",
        url: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80",
        caption: "Va ch\u1EA1m ho\xE0n to\xE0n \u0111\xE0n h\u1ED3i gi\u1EEFa c\xE1c ph\xE2n t\u1EED kh\xED v\xE0 th\xE0nh b\xECnh t\u1EA1o n\xEAn \xE1p su\u1EA5t kh\xED."
      }
    ],
    practiceExercises: [
      {
        id: "pe_12_2_1",
        type: "mcq",
        question: "M\u1ED9t b\xECnh k\xEDn ch\u1EE9a kh\xED \u1EDF nhi\u1EC7t \u0111\u1ED9 27\xB0C v\xE0 \xE1p su\u1EA5t 2 atm. Khi nung n\xF3ng \u0111\u1EB3ng t\xEDch \u0111\u1EBFn 127\xB0C th\xEC \xE1p su\u1EA5t c\u1EE7a kh\xED trong b\xECnh l\xE0:",
        options: ["A. 9.4 atm", "B. 2.67 atm", "C. 3.0 atm", "D. 4.0 atm"],
        correctAnswer: "B. 2.67 atm",
        solutionGuide: "Nhi\u1EC7t \u0111\u1ED9 tuy\u1EC7t \u0111\u1ED1i: T_1 = 27 + 273 = 300 K; T_2 = 127 + 273 = 400 K. V\xEC qu\xE1 tr\xECnh \u0111\u1EB3ng t\xEDch (V = const) n\xEAn: p_1 / T_1 = p_2 / T_2 => p_2 = p_1 * (T_2 / T_1) = 2 * (400 / 300) = 2.67 atm.",
        isPublishedGuide: true
      }
    ],
    linkedResourceIds: ["res_sim_12_2", "res_exp_12_2", "res_vid_12_2", "res_doc_12_2"]
  }
];
const INITIAL_RESOURCES = [
  // 1. Thí nghiệm thực lớp 10 (Chuyển động thẳng biến đổi đều)
  {
    id: "res_exp_10_1",
    title: "Th\xED nghi\u1EC7m \u0111o gia t\u1ED1c r\u01A1i t\u1EF1 do v\xE0 chuy\u1EC3n \u0111\u1ED9ng th\u1EB3ng bi\u1EBFn \u0111\u1ED5i \u0111\u1EC1u b\u1EB1ng c\u1ED5ng quang \u0111i\u1EC7n",
    description: "B\u1ED1 tr\xED m\xE1ng nghi\xEAng, c\u1ED5ng quang \u0111i\u1EC7n v\xE0 \u0111\u1ED3ng h\u1ED3 hi\u1EC7n s\u1ED1 MC-963A \u0111\u1EC3 \u0111o th\u1EDDi gian chuy\u1EC3n \u0111\u1ED9ng v\xE0 t\xEDnh gia t\u1ED1c.",
    type: "experiment",
    grade: 10,
    chapterId: "c10_2",
    linkedLessonIds: ["lesson_10_1"],
    textbookId: "ket_noi_tri_thuc",
    author: "Ths: L\xEA Long - QT",
    authorId: "teacher_long",
    source: "Ph\xF2ng th\xED nghi\u1EC7m V\u1EADt l\xED THPT",
    licenseInfo: "T\u1EF1 do s\u1EED d\u1EE5ng cho m\u1EE5c \u0111\xEDch gi\xE1o d\u1EE5c",
    tags: ["\u0111o gia t\u1ED1c", "c\u1ED5ng quang \u0111i\u1EC7n", "\u0111\u1ED9ng h\u1ECDc", "chuy\u1EC3n \u0111\u1ED9ng bi\u1EBFn \u0111\u1ED5i \u0111\u1EC1u"],
    status: "published",
    reviewStatus: "approved",
    reviewNotes: "\u0110\xE3 th\u1EA9m \u0111\u1ECBnh th\xF4ng s\u1ED1 v\xE0 b\u1EA3ng s\u1ED1 li\u1EC7u chu\u1EA9n.",
    createdAt: "2026-09-02T10:00:00Z",
    updatedAt: "2026-10-01T10:00:00Z",
    url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    fileType: "image",
    experimentData: {
      category: "th\xED nghi\u1EC7m th\u1EF1c",
      purpose: "\u0110o gia t\u1ED1c c\u1EE7a xe tr\u01B0\u1EE3t tr\xEAn m\xE1ng nghi\xEAng v\xE0 ki\u1EC3m ch\u1EE9ng c\xF4ng th\u1EE9c d = 1/2 * a * t^2.",
      equipment: [
        "M\xE1ng nh\xF4m c\xF3 th\u01B0\u1EDBc \u0111o d\xE0i 1000 mm, v\u1EA1ch chia 1 mm.",
        "Xe tr\u01B0\u1EE3t c\u01A1 h\u1ECDc c\xF3 t\u1EA5m c\u1EA3n quang ch\u1EAFn s\xE1ng.",
        "Hai c\u1ED5ng quang \u0111i\u1EC7n h\u1ED3ng ngo\u1EA1i E1, E2.",
        "\u0110\u1ED3ng h\u1ED3 \u0111o th\u1EDDi gian hi\u1EC7n s\u1ED1 \u0111\u1ED9 ph\xE2n gi\u1EA3i 0.001 s.",
        "Nam ch\xE2m \u0111i\u1EC7n gi\u1EEF v\xE0 nh\u1EA3 xe c\xF3 n\xFAt \u1EA5n \u0111i\u1EC1u khi\u1EC3n."
      ],
      theory: "Khi xe chuy\u1EC3n \u0111\u1ED9ng nhanh d\u1EA7n \u0111\u1EC1u kh\xF4ng v\u1EADn t\u1ED1c \u0111\u1EA7u t\u1EEB c\u1ED5ng E1 \u0111\u1EBFn E2 c\xE1ch nhau \u0111o\u1EA1n d: d = 1/2 * a * t^2 => Gia t\u1ED1c a = 2d / t^2.",
      steps: [
        "B\u1ED1 tr\xED m\xE1ng nghi\xEAng g\xF3c nghi\xEAng nh\u1EB9 kho\u1EA3ng 5-10 \u0111\u1ED9 so v\u1EDBi ph\u01B0\u01A1ng ngang.",
        "L\u1EAFp c\u1ED5ng quang \u0111i\u1EC7n 1 \u1EDF v\u1ECB tr\xED s1 = 10 cm, c\u1ED5ng quang \u0111i\u1EC7n 2 \u1EDF v\u1ECB tr\xED s2 = 60 cm (d = 50 cm).",
        "Ch\u1ECDn ch\u1EBF \u0111\u1ED9 \u0111\u1ED3ng h\u1ED3 \u0111o MODE A <-> B \u0111\u1EC3 \u0111o th\u1EDDi gian xe \u0111i t\u1EEB c\u1ED5ng 1 \u0111\u1EBFn c\u1ED5ng 2.",
        "\u0110\u1EB7t xe ti\u1EBFp x\xFAc nam ch\xE2m \u0111i\u1EC7n, \u1EA5n n\xFAt nh\u1EA3 xe v\xE0 \u0111\u1ECDc th\u1EDDi gian t tr\xEAn \u0111\u1ED3ng h\u1ED3.",
        "L\u1EB7p l\u1EA1i th\xED nghi\u1EC7m 5 l\u1EA7n v\u1EDBi c\xF9ng kho\u1EA3ng c\xE1ch \u0111\u1EC3 t\xEDnh gi\xE1 tr\u1ECB trung b\xECnh v\xE0 sai s\u1ED1."
      ],
      safetyNotes: [
        "Gi\u1EEF nh\u1EB9 xe \u1EDF cu\u1ED1i m\xE1ng nghi\xEAng \u0111\u1EC3 tr\xE1nh xe lao m\u1EA1nh xu\u1ED1ng s\xE0n r\u01A1i v\u1EE1.",
        "Kh\xF4ng \u0111\u1EC3 d\xE2y n\u1ED1i \u0111\u1ED3ng h\u1ED3 v\u01B0\u1EDBng v\xE0o \u0111\u01B0\u1EDDng ray xe ch\u1EA1y."
      ],
      commonMistakes: [
        "T\u1EA5m c\u1EA3n quang b\u1ECB l\u1EC7ch khi\u1EBFn c\u1ED5ng quang \u0111i\u1EC7n kh\xF4ng k\xEDch ho\u1EA1t \u0111\xFAng th\u1EDDi \u0111i\u1EC3m.",
        "\u0110\u1ED3ng h\u1ED3 ch\u1ECDn sai ch\u1EBF \u0111\u1ED9 MODE (v\xED d\u1EE5 ch\u1ECDn \u0111o th\u1EDDi gian ch\u1EAFn s\xE1ng \u0111\u01A1n l\u1EBB thay v\xEC kho\u1EA3ng th\u1EDDi gian gi\u1EEFa 2 c\u1ED5ng)."
      ],
      sampleDataTable: {
        headers: ["L\u1EA7n \u0111o", "Kho\u1EA3ng c\xE1ch d (m)", "Th\u1EDDi gian t (s)", "t\xB2 (s\xB2)", "Gia t\u1ED1c a = 2d/t\xB2 (m/s\xB2)"],
        rows: [
          [1, 0.5, 1.412, 1.994, 0.502],
          [2, 0.5, 1.418, 2.011, 0.497],
          [3, 0.5, 1.409, 1.985, 0.504],
          [4, 0.5, 1.415, 2.002, 0.5],
          [5, 0.5, 1.411, 1.991, 0.502]
        ]
      },
      dataAnalysisGuide: "T\xEDnh gi\xE1 tr\u1ECB trung b\xECnh: a_tb = (a1 + a2 + a3 + a4 + a5) / 5 = 0.501 m/s\xB2. T\xEDnh sai s\u1ED1 ng\u1EABu nhi\xEAn tuy\u1EC7t \u0111\u1ED1i v\xE0 sai s\u1ED1 d\u1EE5ng c\u1EE5 \u0394a = \u0394a_ng + \u0394a_dc.",
      errorHandling: "Gia t\u1ED1c th\u1EF1c t\u1EBF thu \u0111\u01B0\u1EE3c nh\u1ECF h\u01A1n gi\xE1 tr\u1ECB l\xED thuy\u1EBFt g*sin(\u03B1) do ma s\xE1t l\u0103n v\xE0 s\u1EE9c c\u1EA3n kh\xF4ng kh\xED.",
      preQuestions: [
        "T\u1EA1i sao c\u1EA7n d\xF9ng t\u1EA5m c\u1EA3n quang h\u1EB9p thay v\xEC th\xE2n xe \u0111\u1EC3 k\xEDch ho\u1EA1t c\u1ED5ng quang \u0111i\u1EC7n?",
        "\u0110\u1EC3 gi\u1EA3m sai s\u1ED1 t\u1EC9 \u0111\u1ED1i khi \u0111o th\u1EDDi gian, n\xEAn \u0111\u1EB7t kho\u1EA3ng c\xE1ch gi\u1EEFa hai c\u1ED5ng quang \u0111i\u1EC7n l\u1EDBn hay nh\u1ECF?"
      ],
      postQuestions: [
        "\u0110\u1ED3 th\u1ECB d theo t\xB2 c\xF3 d\u1EA1ng \u0111\u01B0\u1EDDng g\xEC? \u0110\u1ED9 d\u1ED1c c\u1EE7a \u0111\u01B0\u1EDDng \u0111\xF3 c\xF3 \xFD ngh\u0129a v\u1EADt l\xED n\xE0o?",
        "L\u1EF1c ma s\xE1t \u1EA3nh h\u01B0\u1EDFng th\u1EBF n\xE0o \u0111\u1EBFn gi\xE1 tr\u1ECB gia t\u1ED1c \u0111o \u0111\u01B0\u1EE3c?"
      ],
      downloadableTemplateName: "Mau_bao_cao_TN_Do_gia_toc_Lop10.xlsx"
    }
  },
  // 2. Mô phỏng tương tác lớp 10 (Chuyển động thẳng biến đổi đều)
  {
    id: "res_sim_10_1",
    title: "M\xF4 ph\u1ECFng \u0111\u1ED9ng h\u1ECDc: Xe chuy\u1EC3n \u0111\u1ED9ng th\u1EB3ng bi\u1EBFn \u0111\u1ED5i \u0111\u1EC1u v\xE0 \u0111\u1ED3 th\u1ECB th\u1EDDi gian th\u1EF1c",
    description: "M\xF4 ph\u1ECFng t\u01B0\u01A1ng t\xE1c tr\u1EF1c ti\u1EBFp v\u1EDBi thanh tr\u01B0\u1EE3t \u0111i\u1EC1u ch\u1EC9nh gia t\u1ED1c a v\xE0 v\u1EADn t\u1ED1c ban \u0111\u1EA7u v0, hi\u1EC3n th\u1ECB \u0111\u01B0\u1EDDng ch\u1EA1y xe v\xE0 \u0111\u1ED3 th\u1ECB v-t, x-t.",
    type: "simulation",
    grade: 10,
    chapterId: "c10_2",
    linkedLessonIds: ["lesson_10_1"],
    textbookId: "ket_noi_tri_thuc",
    author: "T\u1ED5 V\u1EADt l\xED THPT",
    authorId: "teacher_long",
    source: "H\u1EC7 th\u1ED1ng m\xF4 ph\u1ECFng n\u1ED9i b\u1ED9",
    licenseInfo: "B\u1EA3n quy\u1EC1n gi\xE1o d\u1EE5c m\u1EDF",
    tags: ["m\xF4 ph\u1ECFng", "HTML5 canvas", "\u0111\u1ED3 th\u1ECB v-t", "t\u01B0\u01A1ng t\xE1c"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-02T11:00:00Z",
    updatedAt: "2026-10-01T10:00:00Z",
    embedType: "custom_sim",
    experimentData: {
      category: "m\xF4 ph\u1ECFng t\u01B0\u01A1ng t\xE1c",
      purpose: "Quan s\xE1t tr\u1EF1c quan chuy\u1EC3n \u0111\u1ED9ng nhanh d\u1EA7n/ch\u1EADm d\u1EA7n v\xE0 quy lu\u1EADt h\xECnh th\xE0nh \u0111\u1ED3 th\u1ECB v-t.",
      equipment: ["Tr\xECnh duy\u1EC7t web h\u1ED7 tr\u1EE3 HTML5 Canvas, b\u1ED9 \u0111i\u1EC1u khi\u1EC3n tham s\u1ED1 v0 v\xE0 a."],
      theory: "T\u1ECDa \u0111\u1ED9 x(t) = v0*t + 0.5*a*t^2; v\u1EADn t\u1ED1c v(t) = v0 + a*t.",
      steps: [
        "K\xE9o thanh tr\u01B0\u1EE3t \u0111i\u1EC1u ch\u1EC9nh v\u1EADn t\u1ED1c ban \u0111\u1EA7u v0 (v\xED d\u1EE5 0 \u0111\u1EBFn 10 m/s).",
        "\u0110i\u1EC1u ch\u1EC9nh gia t\u1ED1c a (t\u1EEB -4 m/s\xB2 \u0111\u1EBFn +4 m/s\xB2).",
        'B\u1EA5m "Ch\u1EA1y m\xF4 ph\u1ECFng" v\xE0 quan s\xE1t chuy\u1EC3n \u0111\u1ED9ng c\u1EE7a xe c\xF9ng \u0111\u1ED3 th\u1ECB v\u1EBD theo th\u1EDDi gian th\u1EF1c.',
        "Th\u1EED tr\u01B0\u1EDDng h\u1EE3p a < 0 v\xE0 v0 > 0 \u0111\u1EC3 quan s\xE1t xe ch\u1EADm d\u1EA7n \u0111\u1EC1u, d\u1EEBng l\u1EA1i r\u1ED3i \u0111\u1ED5i chi\u1EC1u chuy\u1EC3n \u0111\u1ED9ng."
      ],
      safetyNotes: ["Kh\xF4ng \xE1p d\u1EE5ng (m\xF4 ph\u1ECFng ph\u1EA7n m\u1EC1m)."],
      commonMistakes: ["B\u1ECF qua vi\u1EC7c quan s\xE1t d\u1EA5u c\u1EE7a t\xEDch a*v khi \u0111\u1ED5i chi\u1EC1u."],
      assumptionsAndLimits: "Gi\u1EA3 \u0111\u1ECBnh b\u1ECF qua m\u1ECDi ma s\xE1t c\u01A1 h\u1ECDc v\xE0 l\u1EF1c c\u1EA3n kh\xF4ng kh\xED; v\u1EADt coi nh\u01B0 ch\u1EA5t \u0111i\u1EC3m chuy\u1EC3n \u0111\u1ED9ng t\u1ECBnh ti\u1EBFn.",
      dataAnalysisGuide: "So s\xE1nh di\u1EC7n t\xEDch h\xECnh ph\u1EB3ng d\u01B0\u1EDBi \u0111\u1ED3 th\u1ECB v-t v\u1EDBi \u0111\u1ED9 d\u1ECBch chuy\u1EC3n d hi\u1EC3n th\u1ECB tr\xEAn m\xE0n h\xECnh.",
      errorHandling: "Kh\xF4ng c\xF3 sai s\u1ED1 ng\u1EABu nhi\xEAn; sai s\u1ED1 l\xE0m tr\xF2n s\u1ED1 h\u1ECDc trong canvas < 0.01%.",
      preQuestions: ["D\u1EF1 \u0111o\xE1n d\u1EA1ng \u0111\u1ED3 th\u1ECB v-t khi gia t\u1ED1c a = 0 v\xE0 khi a > 0?"],
      postQuestions: ["Khi xe d\u1EEBng l\u1EA1i trong ch\u1ED1c l\xE1t \u0111\u1EC3 \u0111\u1ED5i chi\u1EC1u, gia t\u1ED1c c\u1EE7a xe b\u1EB1ng bao nhi\xEAu?"]
    }
  },
  // 3. Mô phỏng lớp 10 (Định luật II Newton - PhET embed)
  {
    id: "res_sim_10_2",
    title: "M\xF4 ph\u1ECFng PhET: L\u1EF1c v\xE0 Chuy\u1EC3n \u0111\u1ED9ng (\u0110\u1ECBnh lu\u1EADt II Newton)",
    description: "Th\xED nghi\u1EC7m \u1EA3o PhET Interactive Simulations Colorado kh\u1EA3o s\xE1t t\xE1c d\u1EE5ng c\u1EE7a l\u1EF1c k\xE9o, ma s\xE1t v\xE0 kh\u1ED1i l\u01B0\u1EE3ng l\xEAn gia t\u1ED1c chuy\u1EC3n \u0111\u1ED9ng.",
    type: "simulation",
    grade: 10,
    chapterId: "c10_3",
    linkedLessonIds: ["lesson_10_2"],
    textbookId: "ket_noi_tri_thuc",
    author: "PhET Interactive Simulations - University of Colorado Boulder",
    authorId: "admin_sys",
    source: "https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_all.html",
    licenseInfo: "CC-BY PhET Interactive Simulations",
    tags: ["PhET", "\u0111\u1ECBnh lu\u1EADt 2 newton", "l\u1EF1c ma s\xE1t", "gia t\u1ED1c"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-06T08:00:00Z",
    updatedAt: "2026-10-02T09:00:00Z",
    url: "https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_all.html",
    embedType: "phet"
  },
  // 4. Thí nghiệm thực lớp 10 (Định luật II Newton)
  {
    id: "res_exp_10_2",
    title: "Th\xED nghi\u1EC7m th\u1EF1c h\xE0nh: Kh\u1EA3o s\xE1t m\u1ED1i quan h\u1EC7 gi\u1EEFa gia t\u1ED1c, l\u1EF1c t\xE1c d\u1EE5ng v\xE0 kh\u1ED1i l\u01B0\u1EE3ng xe tr\u01B0\u1EE3t",
    description: "S\u1EED d\u1EE5ng r\xF2ng r\u1ECDc v\xE0 ch\xF9m qu\u1EA3 n\u1EB7ng \u0111\u1EC3 t\u1EA1o l\u1EF1c k\xE9o F, \u0111o gia t\u1ED1c a khi thay \u0111\u1ED5i F v\xE0 khi thay \u0111\u1ED5i kh\u1ED1i l\u01B0\u1EE3ng m.",
    type: "experiment",
    grade: 10,
    chapterId: "c10_3",
    linkedLessonIds: ["lesson_10_2"],
    textbookId: "ket_noi_tri_thuc",
    author: "Ths: L\xEA Long - QT",
    authorId: "teacher_long",
    source: "T\xE0i li\u1EC7u h\u01B0\u1EDBng d\u1EABn th\u1EF1c h\xE0nh V\u1EADt l\xED 10",
    licenseInfo: "Gi\xE1o d\u1EE5c",
    tags: ["\u0111\u1ECBnh lu\u1EADt 2 newton", "l\u1EF1c k\xE9o", "kh\u1ED1i l\u01B0\u1EE3ng", "th\u1EF1c h\xE0nh"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-06T09:00:00Z",
    updatedAt: "2026-10-02T10:00:00Z",
    experimentData: {
      category: "th\xED nghi\u1EC7m th\u1EF1c",
      purpose: "Ki\u1EC3m ch\u1EE9ng a t\u1EC9 l\u1EC7 thu\u1EADn v\u1EDBi F (khi m kh\xF4ng \u0111\u1ED5i) v\xE0 a t\u1EC9 l\u1EC7 ngh\u1ECBch v\u1EDBi m (khi F kh\xF4ng \u0111\u1ED5i).",
      equipment: [
        "\u0110\u1EC7m kh\xED ho\u1EB7c m\xE1ng nh\xF4m \xEDt ma s\xE1t.",
        "Xe th\xED nghi\u1EC7m g\u1EAFn c\u1EA3m bi\u1EBFn gia t\u1ED1c / c\u1ED5ng quang \u0111i\u1EC7n.",
        "H\u1ED9p qu\u1EA3 n\u1EB7ng gia t\u1EA3i (50g, 100g).",
        "D\xE2y n\u1ED1i nh\u1EB9, kh\xF4ng gi\xE3n v\xE0 r\xF2ng r\u1ECDc kh\xF4ng ma s\xE1t."
      ],
      theory: "H\u1EE3p l\u1EF1c F_hl = m_tong * a.",
      steps: [
        "C\u1ED1 \u0111\u1ECBnh kh\u1ED1i l\u01B0\u1EE3ng xe m, thay \u0111\u1ED5i s\u1ED1 qu\u1EA3 n\u1EB7ng treo \u1EDF \u0111\u1EA7u d\xE2y (F = 0.1N, 0.2N, 0.3N...), \u0111o a.",
        "C\u1ED1 \u0111\u1ECBnh s\u1ED1 qu\u1EA3 n\u1EB7ng treo (F = const), th\xEAm qu\u1EA3 n\u1EB7ng l\xEAn xe (m = 200g, 300g, 400g...), \u0111o a."
      ],
      safetyNotes: ["\u0110\u1EE1 ch\xF9m qu\u1EA3 n\u1EB7ng r\u01A1i xu\u1ED1ng tr\xE1nh va \u0111\u1EADp m\u1EA1nh l\xE0m g\xE3y m\xF3c treo."],
      commonMistakes: ["B\u1ECF qua kh\u1ED1i l\u01B0\u1EE3ng c\u1EE7a ch\xEDnh ch\xF9m qu\u1EA3 n\u1EB7ng treo v\xE0o t\u1ED5ng kh\u1ED1i l\u01B0\u1EE3ng h\u1EC7 chuy\u1EC3n \u0111\u1ED9ng."],
      dataAnalysisGuide: "V\u1EBD \u0111\u1ED3 th\u1ECB a theo F v\xE0 \u0111\u1ED3 th\u1ECB a theo 1/m, ch\u1EE9ng minh \u0111\u1ED3 th\u1ECB l\xE0 \u0111\u01B0\u1EDDng th\u1EB3ng qua g\u1ED1c O.",
      errorHandling: "S\u1EED d\u1EE5ng \u0111\u1EC7m kh\xED \u0111\u1EC3 tri\u1EC7t ti\xEAu ma s\xE1t ho\u1EB7c n\xE2ng nh\u1EB9 m\u1ED9t \u0111\u1EA7u m\xE1ng \u0111\u1EC3 b\xF9 tr\u1EEB l\u1EF1c ma s\xE1t l\u0103n.",
      preQuestions: ["V\xEC sao khi kh\u1ED1i l\u01B0\u1EE3ng m c\u1EE7a xe c\xE0ng l\u1EDBn th\xEC xe c\xE0ng kh\xF3 t\u0103ng t\u1ED1c?"],
      postQuestions: ["\u0110\u1ED9 d\u1ED1c c\u1EE7a \u0111\u01B0\u1EDDng bi\u1EC3u di\u1EC5n a theo F bi\u1EC3u th\u1ECB \u0111\u1EA1i l\u01B0\u1EE3ng g\xEC?"]
    }
  },
  // 5. Thí nghiệm & Mô phỏng lớp 11 (Dao động điều hòa)
  {
    id: "res_sim_11_1",
    title: "M\xF4 ph\u1ECFng t\u01B0\u01A1ng t\xE1c: Con l\u1EAFc l\xF2 xo v\xE0 v\xF2ng tr\xF2n l\u01B0\u1EE3ng gi\xE1c pha dao \u0111\u1ED9ng",
    description: "M\xF4 ph\u1ECFng con l\u1EAFc l\xF2 xo dao \u0111\u1ED9ng \u0111i\u1EC1u h\xF2a \u0111\u1ED3ng b\u1ED9 v\u1EDBi h\xECnh chi\u1EBFu chuy\u1EC3n \u0111\u1ED9ng tr\xF2n \u0111\u1EC1u v\xE0 \u0111\u1ED3 th\u1ECB li \u0111\u1ED9 x-t.",
    type: "simulation",
    grade: 11,
    chapterId: "c11_1",
    linkedLessonIds: ["lesson_11_1"],
    textbookId: "ket_noi_tri_thuc",
    author: "Ths: L\xEA Long - QT",
    authorId: "teacher_long",
    source: "Ph\u1EA7n m\u1EC1m m\xF4 ph\u1ECFng V\u1EADt l\xED 11",
    licenseInfo: "Gi\xE1o d\u1EE5c m\u1EDF",
    tags: ["dao \u0111\u1ED9ng \u0111i\u1EC1u h\xF2a", "con l\u1EAFc l\xF2 xo", "v\xF2ng tr\xF2n l\u01B0\u1EE3ng gi\xE1c", "pha dao \u0111\u1ED9ng"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-10T09:00:00Z",
    updatedAt: "2026-10-03T09:30:00Z",
    embedType: "custom_sim",
    experimentData: {
      category: "m\xF4 ph\u1ECFng t\u01B0\u01A1ng t\xE1c",
      purpose: "Hi\u1EC3u m\u1ED1i li\xEAn h\u1EC7 gi\u1EEFa dao \u0111\u1ED9ng \u0111i\u1EC1u h\xF2a v\xE0 chuy\u1EC3n \u0111\u1ED9ng tr\xF2n \u0111\u1EC1u qua vect\u01A1 quay.",
      equipment: ["Giao di\u1EC7n t\u01B0\u01A1ng t\xE1c m\xE1y t\xEDnh ho\u1EB7c m\xE1y t\xEDnh b\u1EA3ng."],
      theory: "H\xECnh chi\u1EBFu c\u1EE7a m\u1ED9t ch\u1EA5t \u0111i\u1EC3m chuy\u1EC3n \u0111\u1ED9ng tr\xF2n \u0111\u1EC1u l\xEAn m\u1ED9t tr\u1EE5c t\u1ECDa \u0111\u1ED9 l\xE0 m\u1ED9t dao \u0111\u1ED9ng \u0111i\u1EC1u h\xF2a x = A cos(\u03C9t + \u03C6).",
      steps: [
        "Ch\u1ECDn bi\xEAn \u0111\u1ED9 A (cm) v\xE0 t\u1EA7n s\u1ED1 g\xF3c \u03C9 (rad/s).",
        "Quan s\xE1t chuy\u1EC3n \u0111\u1ED9ng tr\xF2n c\u1EE7a \u0111i\u1EC3m M v\xE0 h\xECnh chi\u1EBFu P dao \u0111\u1ED9ng tr\xEAn tr\u1EE5c Ox.",
        "B\u1EADt hi\u1EC3n th\u1ECB vect\u01A1 v\u1EADn t\u1ED1c v\xE0 vect\u01A1 gia t\u1ED1c \u0111\u1EC3 th\u1EA5y t\xEDnh vu\xF4ng pha v\xE0 ng\u01B0\u1EE3c pha."
      ],
      safetyNotes: ["Kh\xF4ng \xE1p d\u1EE5ng."],
      commonMistakes: ["X\xE1c \u0111\u1ECBnh nh\u1EA7m chi\u1EC1u quay c\u1EE7a v\xF2ng tr\xF2n l\u01B0\u1EE3ng gi\xE1c (lu\xF4n ng\u01B0\u1EE3c chi\u1EC1u kim \u0111\u1ED3ng h\u1ED3)."],
      assumptionsAndLimits: "B\u1ECF qua ma s\xE1t v\xE0 l\u1EF1c c\u1EA3n m\xF4i tr\u01B0\u1EDDng (dao \u0111\u1ED9ng \u0111i\u1EC1u h\xF2a kh\xF4ng t\u1EAFt d\u1EA7n).",
      dataAnalysisGuide: "X\xE1c \u0111\u1ECBnh chu k\xEC T = 2\u03C0 / \u03C9 t\u1EEB \u0111\u1ED3 th\u1ECB th\u1EDDi gian.",
      errorHandling: "M\xF4 ph\u1ECFng s\u1ED1 h\u1ECDc chu\u1EA9n x\xE1c theo ph\u01B0\u01A1ng tr\xECnh vi ph\xE2n d\xB2x/dt\xB2 + \u03C9\xB2x = 0.",
      preQuestions: ["T\u1EA1i sao khi v\u1EADt qua v\u1ECB tr\xED c\xE2n b\u1EB1ng th\xEC v\u1EADn t\u1ED1c \u0111\u1EA1t c\u1EF1c \u0111\u1EA1i c\xF2n gia t\u1ED1c b\u1EB1ng 0?"],
      postQuestions: ["Vect\u01A1 gia t\u1ED1c lu\xF4n h\u01B0\u1EDBng v\u1EC1 \u0111i\u1EC3m n\xE0o trong su\u1ED1t qu\xE1 tr\xECnh dao \u0111\u1ED9ng?"]
    }
  },
  // 6. Thí nghiệm thực lớp 11 (Dao động con lắc đơn / lò xo)
  {
    id: "res_exp_11_1",
    title: "Th\xED nghi\u1EC7m th\u1EF1c h\xE0nh: X\xE1c \u0111\u1ECBnh gia t\u1ED1c tr\u1ECDng tr\u01B0\u1EDDng b\u1EB1ng con l\u1EAFc \u0111\u01A1n",
    description: "\u0110o chi\u1EC1u d\xE0i d\xE2y l v\xE0 chu k\xEC dao \u0111\u1ED9ng T c\u1EE7a con l\u1EAFc \u0111\u01A1n \u0111\u1EC3 t\xEDnh gia t\u1ED1c r\u01A1i t\u1EF1 do g t\u1EA1i ph\xF2ng th\xED nghi\u1EC7m.",
    type: "experiment",
    grade: 11,
    chapterId: "c11_1",
    linkedLessonIds: ["lesson_11_1"],
    textbookId: "ket_noi_tri_thuc",
    author: "T\u1ED5 V\u1EADt l\xED THPT",
    authorId: "teacher_long",
    source: "Th\u1EF1c h\xE0nh V\u1EADt l\xED 11",
    licenseInfo: "Gi\xE1o d\u1EE5c",
    tags: ["con l\u1EAFc \u0111\u01A1n", "gia t\u1ED1c tr\u1ECDng tr\u01B0\u1EDDng", "th\u1EF1c h\xE0nh"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-10T10:00:00Z",
    updatedAt: "2026-10-03T10:00:00Z",
    experimentData: {
      category: "th\xED nghi\u1EC7m th\u1EF1c",
      purpose: "\u0110o gia t\u1ED1c tr\u1ECDng tr\u01B0\u1EDDng g = 4\u03C0\xB2l / T\xB2.",
      equipment: ["Gi\xE1 th\xED nghi\u1EC7m, d\xE2y treo m\u1EA3nh kh\xF4ng gi\xE3n, qu\u1EA3 n\u1EB7ng kim lo\u1EA1i nh\u1ECF, th\u01B0\u1EDBc \u0111o milimet, \u0111\u1ED3ng h\u1ED3 b\u1EA5m gi\xE2y."],
      theory: "Khi g\xF3c l\u1EC7ch nh\u1ECF (\u03B10 < 10\xB0), con l\u1EAFc \u0111\u01A1n dao \u0111\u1ED9ng \u0111i\u1EC1u h\xF2a v\u1EDBi chu k\xEC T = 2\u03C0\u221A(l/g).",
      steps: [
        "\u0110o chi\u1EC1u d\xE0i d\xE2y l t\u1EEB \u0111i\u1EC3m treo \u0111\u1EBFn t\xE2m qu\u1EA3 n\u1EB7ng.",
        "K\xE9o con l\u1EAFc l\u1EC7ch g\xF3c nh\u1ECF d\u01B0\u1EDBi 10 \u0111\u1ED9 r\u1ED3i th\u1EA3 nh\u1EB9 kh\xF4ng v\u1EADn t\u1ED1c \u0111\u1EA7u.",
        "B\u1EA5m gi\u1EDD \u0111o th\u1EDDi gian 20 dao \u0111\u1ED9ng to\xE0n ph\u1EA7n t20, suy ra T = t20 / 20.",
        "L\u1EB7p l\u1EA1i v\u1EDBi c\xE1c chi\u1EC1u d\xE0i kh\xE1c nhau."
      ],
      safetyNotes: ["Kh\xF4ng k\xE9o v\u1EADt qu\xE1 cao tr\xE1nh d\xE2y b\u1ECB ch\xF9ng ho\u1EB7c qu\u1EA3 n\u1EB7ng v\u0103ng ra ngo\xE0i."],
      commonMistakes: ["K\xE9o g\xF3c l\u1EC7ch qu\xE1 l\u1EDBn (> 10 \u0111\u1ED9) khi\u1EBFn dao \u0111\u1ED9ng kh\xF4ng c\xF2n l\xE0 \u0111i\u1EC1u h\xF2a."],
      dataAnalysisGuide: "V\u1EBD \u0111\u1ED3 th\u1ECB T\xB2 theo l, \u0111\u1ED9 d\u1ED1c k = 4\u03C0\xB2/g suy ra g = 4\u03C0\xB2/k.",
      errorHandling: "T\xEDnh sai s\u1ED1 d\u1EE5ng c\u1EE5 c\u1EE7a th\u01B0\u1EDBc \u0111o v\xE0 \u0111\u1ED3ng h\u1ED3 b\u1EA5m gi\xE2y.",
      preQuestions: ["T\u1EA1i sao chu k\xEC dao \u0111\u1ED9ng c\u1EE7a con l\u1EAFc \u0111\u01A1n kh\xF4ng ph\u1EE5 thu\u1ED9c v\xE0o kh\u1ED1i l\u01B0\u1EE3ng qu\u1EA3 n\u1EB7ng?"],
      postQuestions: ["N\u1EBFu th\xED nghi\u1EC7m \u0111\u01B0\u1EE3c th\u1EF1c hi\u1EC7n tr\xEAn M\u1EB7t Tr\u0103ng, chu k\xEC T s\u1EBD t\u0103ng hay gi\u1EA3m?"]
    }
  },
  // 7. Mô phỏng lớp 11 (Định luật Ohm)
  {
    id: "res_sim_11_2",
    title: "M\xF4 ph\u1ECFng m\u1EA1ch \u0111i\u1EC7n t\u01B0\u01A1ng t\xE1c: \u0110\u1ECBnh lu\u1EADt Ohm v\xE0 \u0111\u1EB7c tuy\u1EBFn V\xF4n \u2013 Ampe",
    description: "Th\xED nghi\u1EC7m \u1EA3o thay \u0111\u1ED5i \u0111i\u1EC7n \xE1p ngu\u1ED3n v\xE0 \u0111i\u1EC7n tr\u1EDF, \u0111o d\xF2ng \u0111i\u1EC7n, t\u1EF1 \u0111\u1ED9ng d\u1EF1ng \u0111\u01B0\u1EDDng \u0111\u1EB7c tuy\u1EBFn I theo U.",
    type: "simulation",
    grade: 11,
    chapterId: "c11_4",
    linkedLessonIds: ["lesson_11_2"],
    textbookId: "ket_noi_tri_thuc",
    author: "Ths: L\xEA Long - QT",
    authorId: "teacher_long",
    source: "Ph\xF2ng th\xED nghi\u1EC7m \u1EA3o V\u1EADt l\xED THPT",
    licenseInfo: "Gi\xE1o d\u1EE5c m\u1EDF",
    tags: ["\u0111\u1ECBnh lu\u1EADt ohm", "m\u1EA1ch \u0111i\u1EC7n", "v\xF4n k\u1EBF", "ampe k\u1EBF"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-12T11:00:00Z",
    updatedAt: "2026-10-04T15:00:00Z",
    embedType: "custom_sim",
    experimentData: {
      category: "m\xF4 ph\u1ECFng t\u01B0\u01A1ng t\xE1c",
      purpose: "Kh\u1EA3o s\xE1t s\u1EF1 ph\u1EE5 thu\u1ED9c c\u1EE7a I v\xE0o U v\xE0 t\xEDnh \u0111i\u1EC7n tr\u1EDF R t\u1EEB \u0111\u1ED9 d\u1ED1c \u0111\u1EB7c tuy\u1EBFn.",
      equipment: ["Ngu\u1ED3n \u0111i\u1EC7n m\u1ED9t chi\u1EC1u 0-24V, bi\u1EBFn tr\u1EDF R, \u0111\u1ED3ng h\u1ED3 \u0111o \u1EA3o V\xF4n k\u1EBF v\xE0 Ampe k\u1EBF."],
      theory: "I = U / R.",
      steps: [
        "Ch\u1ECDn gi\xE1 tr\u1ECB \u0111i\u1EC7n tr\u1EDF R = 10 \u03A9, 20 \u03A9 ho\u1EB7c 50 \u03A9.",
        "T\u0103ng d\u1EA7n \u0111i\u1EC7n \xE1p ngu\u1ED3n U t\u1EEB 0 \u0111\u1EBFn 20 V.",
        "Ghi nh\u1EADn c\xE1c \u0111i\u1EC3m \u0111o tr\xEAn \u0111\u1ED3 th\u1ECB I - U."
      ],
      safetyNotes: ["M\xF4 ph\u1ECFng \u1EA3o kh\xF4ng lo gi\u1EADt \u0111i\u1EC7n."],
      commonMistakes: ["M\u1EAFc nh\u1EA7m v\xF4n k\u1EBF n\u1ED1i ti\u1EBFp l\xE0m m\u1EA1ch ng\u1EAFt d\xF2ng."],
      assumptionsAndLimits: "\u0110i\u1EC7n tr\u1EDF kh\xF4ng b\u1ECB n\xF3ng l\xEAn l\xE0m thay \u0111\u1ED5i \u0111i\u1EC7n tr\u1EDF su\u1EA5t (nhi\u1EC7t \u0111\u1ED9 T = const).",
      dataAnalysisGuide: "\u0110\u01B0\u1EDDng \u0111\u1EB7c tuy\u1EBFn I(U) th\u1EB3ng h\xE0ng qua g\u1ED1c t\u1ECDa \u0111\u1ED9 O, ch\u1EE9ng minh I t\u1EC9 l\u1EC7 thu\u1EADn v\u1EDBi U.",
      errorHandling: "Kh\xF4ng sai s\u1ED1 ph\u1EA7n c\u1EE9ng.",
      preQuestions: ["\u0110i\u1EC7n tr\u1EDF R c\xF3 thay \u0111\u1ED5i kh\xF4ng khi t\u0103ng g\u1EA5p \u0111\xF4i \u0111i\u1EC7n \xE1p U \u0111\u1EB7t v\xE0o n\xF3?"],
      postQuestions: ["N\u1EBFu d\xE2y d\u1EABn b\u1ECB n\xF3ng l\xEAn trong th\u1EF1c t\u1EBF, \u0111\u1EB7c tuy\u1EBFn I - U s\u1EBD u\u1ED1n cong nh\u01B0 th\u1EBF n\xE0o?"]
    }
  },
  // 8. Thí nghiệm thực lớp 11 (Mạch điện Ohm)
  {
    id: "res_exp_11_2",
    title: "Th\xED nghi\u1EC7m th\u1EF1c h\xE0nh: \u0110o \u0111i\u1EC7n tr\u1EDF v\xE0 kh\u1EA3o s\xE1t \u0111\u1ECBnh lu\u1EADt Ohm trong m\u1EA1ch \u0111i\u1EC7n m\u1ED9t chi\u1EC1u",
    description: "B\u1ED1 tr\xED ngu\u1ED3n \u0111i\u1EC7n, bi\u1EBFn tr\u1EDF con ch\u1EA1y, ampe k\u1EBF v\xE0 v\xF4n k\u1EBF kim \u0111\u1EC3 kh\u1EA3o s\xE1t m\u1ED1i quan h\u1EC7 gi\u1EEFa U v\xE0 I.",
    type: "experiment",
    grade: 11,
    chapterId: "c11_4",
    linkedLessonIds: ["lesson_11_2"],
    textbookId: "ket_noi_tri_thuc",
    author: "T\u1ED5 V\u1EADt l\xED THPT",
    authorId: "teacher_long",
    source: "Th\u1EF1c h\xE0nh V\u1EADt l\xED 11",
    licenseInfo: "Gi\xE1o d\u1EE5c",
    tags: ["\u0111o \u0111i\u1EC7n tr\u1EDF", "ampe k\u1EBF", "v\xF4n k\u1EBF"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-12T12:00:00Z",
    updatedAt: "2026-10-04T16:00:00Z",
    experimentData: {
      category: "th\xED nghi\u1EC7m th\u1EF1c",
      purpose: "L\u1EAFp r\xE1p m\u1EA1ch \u0111i\u1EC7n v\xE0 ki\u1EC3m ch\u1EE9ng c\xF4ng th\u1EE9c \u0111\u1ECBnh lu\u1EADt Ohm I = U/R.",
      equipment: ["Ngu\u1ED3n \u0111i\u1EC7n DC, bi\u1EBFn tr\u1EDF con ch\u1EA1y 20\u03A9 - 2A, \u0111i\u1EC7n tr\u1EDF d\xE2y qu\u1EA5n m\u1EABu, \u0111\u1ED3ng h\u1ED3 \u0111a n\u0103ng s\u1ED1 DMM, d\xE2y n\u1ED1i."],
      theory: "I t\u1EC9 l\u1EC7 thu\u1EADn v\u1EDBi U qua \u0111i\u1EC7n tr\u1EDF R.",
      steps: [
        "M\u1EAFc m\u1EA1ch theo s\u01A1 \u0111\u1ED3: Ngu\u1ED3n -> Kh\xF3a K -> Bi\u1EBFn tr\u1EDF -> \u0110i\u1EC7n tr\u1EDF R -> Ampe k\u1EBF -> Ngu\u1ED3n; V\xF4n k\u1EBF song song v\u1EDBi R.",
        "\u0110\xF3ng kh\xF3a K, \u0111i\u1EC1u ch\u1EC9nh con ch\u1EA1y \u0111\u1EC3 thay \u0111\u1ED5i U tr\xEAn R l\u1EA7n l\u01B0\u1EE3t l\xE0 2V, 4V, 6V, 8V, 10V.",
        "Ghi s\u1ED1 ch\u1EC9 d\xF2ng \u0111i\u1EC7n I t\u01B0\u01A1ng \u1EE9ng."
      ],
      safetyNotes: ["Kh\xF4ng \u0111\u1EC3 \u0111o\u1EA3n m\u1EA1ch ngu\u1ED3n; kh\xF4ng c\u1EAFm nh\u1EA7m thang \u0111o d\xF2ng \u0111i\u1EC7n v\xE0o ngu\u1ED3n \u0111i\u1EC7n tr\u1EF1c ti\u1EBFp."],
      commonMistakes: ["M\u1EAFc nh\u1EA7m c\u1EF1c t\xEDnh (+, -) c\u1EE7a \u0111\u1ED3ng h\u1ED3 \u0111o kim."],
      dataAnalysisGuide: "L\u1EADp t\u1EC9 s\u1ED1 U/I cho t\u1EEBng l\u1EA7n \u0111o v\xE0 so s\xE1nh v\u1EDBi gi\xE1 tr\u1ECB ghi tr\xEAn v\u1ECF \u0111i\u1EC7n tr\u1EDF.",
      errorHandling: "\u0110i\u1EC7n tr\u1EDF c\u1EE7a ch\xEDnh ampe k\u1EBF v\xE0 d\xE2y d\u1EABn g\xE2y ra sai s\u1ED1 h\u1EC7 th\u1ED1ng nh\u1ECF.",
      preQuestions: ["T\u1EA1i sao ampe k\u1EBF l\u1EA1i c\u1EA7n c\xF3 \u0111i\u1EC7n tr\u1EDF r\u1EA5t nh\u1ECF c\xF2n v\xF4n k\u1EBF l\u1EA1i c\u1EA7n c\xF3 \u0111i\u1EC7n tr\u1EDF r\u1EA5t l\u1EDBn?"],
      postQuestions: ["Nhi\u1EC7t l\u01B0\u1EE3ng t\u1ECFa ra tr\xEAn \u0111i\u1EC7n tr\u1EDF \u0111\u01B0\u1EE3c t\xEDnh theo c\xF4ng th\u1EE9c n\xE0o?"]
    }
  },
  // 9. Mô phỏng lớp 12 (Nhiệt hóa hơi riêng)
  {
    id: "res_sim_12_1",
    title: "M\xF4 ph\u1ECFng nhi\u1EC7t h\u1ECDc: Qu\xE1 tr\xECnh \u0111un s\xF4i v\xE0 \u0111o nhi\u1EC7t h\xF3a h\u01A1i ri\xEAng c\u1EE7a n\u01B0\u1EDBc",
    description: "M\xF4 ph\u1ECFng \u1EA5m \u0111un c\xE1ch nhi\u1EC7t c\xF4ng su\u1EA5t P, kh\u1ED1i l\u01B0\u1EE3ng n\u01B0\u1EDBc m v\xE0 c\u1EA3m bi\u1EBFn nhi\u1EC7t \u0111\u1ED9 \u0111o l\u01B0\u1EE3ng n\u01B0\u1EDBc bay h\u01A1i theo th\u1EDDi gian.",
    type: "simulation",
    grade: 12,
    chapterId: "c12_1",
    linkedLessonIds: ["lesson_12_1"],
    textbookId: "ket_noi_tri_thuc",
    author: "Ths: L\xEA Long - QT",
    authorId: "teacher_long",
    source: "M\xF4 ph\u1ECFng V\u1EADt l\xED 12 chu\u1EA9n \u0111\u1ED5i m\u1EDBi GDPT 2018",
    licenseInfo: "Gi\xE1o d\u1EE5c m\u1EDF",
    tags: ["nhi\u1EC7t h\xF3a h\u01A1i ri\xEAng", "v\u1EADt l\xED nhi\u1EC7t", "\u1EA5m \u0111un", "nhi\u1EC7t l\u01B0\u1EE3ng"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-15T09:00:00Z",
    updatedAt: "2026-10-05T16:30:00Z",
    embedType: "custom_sim",
    experimentData: {
      category: "m\xF4 ph\u1ECFng t\u01B0\u01A1ng t\xE1c",
      purpose: "Minh h\u1ECDa ph\xE9p \u0111o nhi\u1EC7t h\xF3a h\u01A1i ri\xEAng L = (P \xB7 \u0394t) / \u0394m khi n\u01B0\u1EDBc s\xF4i \u1EDF 100\xB0C.",
      equipment: ["\u1EA4m \u0111un \u0111i\u1EC7n tr\u1EDF \u0111i\u1EC1u ch\u1EC9nh c\xF4ng su\u1EA5t P, c\xE2n \u0111i\u1EC7n t\u1EED hi\u1EC7n s\u1ED1, \u0111\u1ED3ng h\u1ED3 b\u1EA5m gi\u1EDD."],
      theory: "Khi n\u01B0\u1EDBc s\xF4i \u1EDF nhi\u1EC7t \u0111\u1ED9 kh\xF4ng \u0111\u1ED5i: To\xE0n b\u1ED9 \u0111i\u1EC7n n\u0103ng ti\xEAu th\u1EE5 chuy\u1EC3n th\xE0nh nhi\u1EC7t h\xF3a h\u01A1i: P * \u0394t = L * \u0394m.",
      steps: [
        "Ch\u1ECDn c\xF4ng su\u1EA5t \u0111un P (v\xED d\u1EE5 500 W \u0111\u1EBFn 1500 W).",
        "Theo d\xF5i nhi\u1EC7t \u0111\u1ED9 n\u01B0\u1EDBc t\u0103ng \u0111\u1EBFn 100\xB0C.",
        "Khi n\u01B0\u1EDBc s\xF4i, k\xEDch ho\u1EA1t \u0111\u1ED3ng h\u1ED3 b\u1EA5m gi\u1EDD v\xE0 c\xE2n \u0111i\u1EC7n t\u1EED \u0111\u1EC3 \u0111o kh\u1ED1i l\u01B0\u1EE3ng n\u01B0\u1EDBc gi\u1EA3m \u0394m trong th\u1EDDi gian \u0394t.",
        "H\u1EC7 th\u1ED1ng t\u1EF1 \u0111\u1ED9ng t\xEDnh v\xE0 hi\u1EC3n th\u1ECB gi\xE1 tr\u1ECB L t\xEDnh \u0111\u01B0\u1EE3c."
      ],
      safetyNotes: ["Kh\xF4ng \xE1p d\u1EE5ng."],
      commonMistakes: ["B\u1EAFt \u0111\u1EA7u \u0111o tr\u01B0\u1EDBc khi n\u01B0\u1EDBc s\xF4i ho\xE0n to\xE0n d\u1EABn \u0111\u1EBFn sai s\xF3t v\xEC nhi\u1EC7t l\u01B0\u1EE3ng c\xF2n d\xF9ng \u0111\u1EC3 l\xE0m t\u0103ng nhi\u1EC7t \u0111\u1ED9."],
      assumptionsAndLimits: "Gi\u1EA3 \u0111\u1ECBnh hi\u1EC7u su\u1EA5t \u1EA5m \u0111un 100% trong ch\u1EBF \u0111\u1ED9 l\xED t\u01B0\u1EDFng; cho ph\xE9p b\u1EADt ch\u1EBF \u0111\u1ED9 hao ph\xED \u0111\u1EC3 quan s\xE1t sai s\u1ED1.",
      dataAnalysisGuide: "L = (P * \u0394t) / \u0394m. So s\xE1nh v\u1EDBi gi\xE1 tr\u1ECB chu\u1EA9n 2.26 \xD7 10\u2076 J/kg.",
      errorHandling: "Hao ph\xED nhi\u1EC7t truy\u1EC1n ra kh\xF4ng kh\xED xung quanh l\xE0m gi\xE1 tr\u1ECB \u0111o \u0111\u01B0\u1EE3c c\u1EE7a L l\u1EDBn h\u01A1n th\u1EF1c t\u1EBF.",
      preQuestions: ["T\u1EA1i sao khi n\u01B0\u1EDBc \u0111ang s\xF4i m\xE3nh li\u1EC7t th\xEC nhi\u1EC7t k\u1EBF v\u1EABn ch\u1EC9 \u0111\xFAng 100\xB0C?"],
      postQuestions: ["T\u1EA1i sao b\u1ECB b\u1ECFng b\u1EDFi h\u01A1i n\u01B0\u1EDBc s\xF4i 100\xB0C l\u1EA1i nguy hi\u1EC3m h\u01A1n b\u1ECB b\u1ECFng b\u1EDFi n\u01B0\u1EDBc s\xF4i 100\xB0C c\xF9ng kh\u1ED1i l\u01B0\u1EE3ng?"]
    }
  },
  // 10. Thí nghiệm thực lớp 12 (Nhiệt hóa hơi riêng)
  {
    id: "res_exp_12_1",
    title: "Th\xED nghi\u1EC7m th\u1EF1c h\xE0nh: \u0110o nhi\u1EC7t h\xF3a h\u01A1i ri\xEAng c\u1EE7a n\u01B0\u1EDBc b\u1EB1ng \u1EA5m \u0111i\u1EC7n v\xE0 c\xE2n \u0111i\u1EC7n t\u1EED",
    description: "Th\xED nghi\u1EC7m \u0111o nhi\u1EC7t h\xF3a h\u01A1i ri\xEAng c\u1EE7a n\u01B0\u1EDBc b\u1EB1ng \u1EA5m \u0111un h\u1EDF n\u1EAFp \u0111\u1EB7t tr\xEAn c\xE2n \u0111i\u1EC7n t\u1EED k\u1EBFt h\u1EE3p c\u1EA3m bi\u1EBFn o\xE1t k\u1EBF.",
    type: "experiment",
    grade: 12,
    chapterId: "c12_1",
    linkedLessonIds: ["lesson_12_1"],
    textbookId: "ket_noi_tri_thuc",
    author: "T\u1ED5 V\u1EADt l\xED THPT",
    authorId: "teacher_long",
    source: "Th\u1EF1c h\xE0nh V\u1EADt l\xED 12",
    licenseInfo: "Gi\xE1o d\u1EE5c",
    tags: ["th\xED nghi\u1EC7m th\u1EF1c", "nhi\u1EC7t h\xF3a h\u01A1i ri\xEAng", "c\xE2n \u0111i\u1EC7n t\u1EED", "n\u01B0\u1EDBc s\xF4i"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-15T10:00:00Z",
    updatedAt: "2026-10-05T17:00:00Z",
    experimentData: {
      category: "th\xED nghi\u1EC7m th\u1EF1c",
      purpose: "X\xE1c \u0111\u1ECBnh nhi\u1EC7t h\xF3a h\u01A1i ri\xEAng c\u1EE7a n\u01B0\u1EDBc trong ph\xF2ng th\xED nghi\u1EC7m.",
      equipment: [
        "\u1EA4m \u0111un si\xEAu t\u1ED1c c\xF4ng su\u1EA5t 1000 W c\xF3 th\u1EC3 m\u1EDF n\u1EAFp.",
        "C\xE2n \u0111i\u1EC7n t\u1EED ch\xEDnh x\xE1c \u0111\u1EBFn 0.1 g.",
        "\u0110\u1ED3ng h\u1ED3 \u0111o \u0111i\u1EC7n n\u0103ng / o\xE1t k\u1EBF \u0111o c\xF4ng su\u1EA5t P.",
        "\u0110\u1ED3ng h\u1ED3 b\u1EA5m gi\xE2y."
      ],
      theory: "L = (P \xB7 t) / (m1 - m2).",
      steps: [
        "\u0110\u1ED5 kho\u1EA3ng 300 ml n\u01B0\u1EDBc v\xE0o \u1EA5m, \u0111\u1EB7t l\xEAn c\xE2n \u0111i\u1EC7n t\u1EED, b\u1EADt \u0111i\u1EC7n \u0111un s\xF4i.",
        "Khi n\u01B0\u1EDBc s\xF4i \u0111\u1EC1u v\xE0 h\u01A1i n\u01B0\u1EDBc b\u1ED1c l\xEAn \u1ED5n \u0111\u1ECBnh, ghi s\u1ED1 ch\u1EC9 kh\u1ED1i l\u01B0\u1EE3ng ban \u0111\u1EA7u m1 v\xE0 b\u1EA5m gi\u1EDD t = 0.",
        "\u0110un s\xF4i li\xEAn t\u1EE5c trong 180 s (3 ph\xFAt), ghi s\u1ED1 ch\u1EC9 kh\u1ED1i l\u01B0\u1EE3ng m2.",
        "Kh\u1ED1i l\u01B0\u1EE3ng n\u01B0\u1EDBc h\xF3a h\u01A1i: \u0394m = m1 - m2.",
        "T\xEDnh L v\xE0 ph\xE2n t\xEDch c\xE1c y\u1EBFu t\u1ED1 g\xE2y sai s\u1ED1."
      ],
      safetyNotes: [
        "C\u1EA9n th\u1EADn h\u01A1i n\u01B0\u1EDBc n\xF3ng b\u1ED1c l\xEAn tr\xE1nh g\xE2y b\u1ECFng da tay v\xE0 m\u1EB7t.",
        "Kh\xF4ng \u0111\u1EC3 n\u01B0\u1EDBc tr\xE0n ra ngo\xE0i r\u01A1i v\xE0o \u1ED5 c\u1EAFm \u0111i\u1EC7n ho\u1EB7c c\xE2n \u0111i\u1EC7n t\u1EED."
      ],
      commonMistakes: [
        "Ghi kh\u1ED1i l\u01B0\u1EE3ng m1 qu\xE1 s\u1EDBm khi n\u01B0\u1EDBc ch\u01B0a s\xF4i s\xF9ng s\u1EE5c.",
        "D\xE2y \u0111i\u1EC7n c\u1EE7a \u1EA5m t\xEC \u0111\xE8 l\xEAn m\u1EB7t c\xE2n l\xE0m sai l\u1EC7ch s\u1ED1 \u0111\u1ECDc c\u1EE7a c\xE2n."
      ],
      dataAnalysisGuide: "L = (P * t) / (m1 - m2). \u01AF\u1EDBc l\u01B0\u1EE3ng hao ph\xED nhi\u1EC7t kho\u1EA3ng 5-10% ra m\xF4i tr\u01B0\u1EDDng \u0111\u1EC3 hi\u1EC7u ch\u1EC9nh k\u1EBFt qu\u1EA3.",
      errorHandling: "Nhi\u1EC7t l\u01B0\u1EE3ng t\u1ECFa ra xung quanh v\xE0 s\u1EF1 ng\u01B0ng t\u1EE5 h\u01A1i n\u01B0\u1EDBc tr\u1EDF l\u1EA1i \u1EA5m.",
      preQuestions: ["Kh\u1ED1i l\u01B0\u1EE3ng n\u01B0\u1EDBc gi\u1EA3m \u0111i trong qu\xE1 tr\xECnh s\xF4i \u0111\xE3 \u0111i \u0111\xE2u?"],
      postQuestions: ["N\u1EBFu hi\u1EC7u su\u1EA5t c\u1EE7a \u1EA5m kh\xF4ng \u0111\u1EA1t 100%, gi\xE1 tr\u1ECB L t\xEDnh theo c\xF4ng th\u1EE9c L = P*t/\u0394m s\u1EBD l\u1EDBn h\u01A1n hay nh\u1ECF h\u01A1n gi\xE1 tr\u1ECB th\u1EF1c?"]
    }
  },
  // 11. Mô phỏng lớp 12 (Khí lí tưởng)
  {
    id: "res_sim_12_2",
    title: "M\xF4 ph\u1ECFng t\u01B0\u01A1ng t\xE1c: M\xF4 h\xECnh kh\xED l\xED t\u01B0\u1EDFng v\xE0 c\xE1c \u0111\u1ECBnh lu\u1EADt bi\u1EBFn \u0111\u1ED5i tr\u1EA1ng th\xE1i kh\xED (Boyle \u2013 Charles)",
    description: "B\xECnh ch\u1EE9a ph\xE2n t\u1EED kh\xED t\u01B0\u01A1ng t\xE1c \u0111\xE0n h\u1ED3i v\u1EDBi piston di \u0111\u1ED9ng, \u0111\u1ED3ng h\u1ED3 \u0111o \xE1p su\u1EA5t P, nhi\u1EC7t \u0111\u1ED9 T v\xE0 th\u1EC3 t\xEDch V.",
    type: "simulation",
    grade: 12,
    chapterId: "c12_2",
    linkedLessonIds: ["lesson_12_2"],
    textbookId: "ket_noi_tri_thuc",
    author: "Ths: L\xEA Long - QT",
    authorId: "teacher_long",
    source: "H\u1EC7 th\u1ED1ng m\xF4 ph\u1ECFng V\u1EADt l\xED 12",
    licenseInfo: "Gi\xE1o d\u1EE5c m\u1EDF",
    tags: ["kh\xED l\xED t\u01B0\u1EDFng", "\u0111\u1ECBnh lu\u1EADt boyle", "\u0111\u1EB3ng nhi\u1EC7t", "piston"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-18T10:00:00Z",
    updatedAt: "2026-10-06T15:30:00Z",
    embedType: "custom_sim",
    experimentData: {
      category: "m\xF4 ph\u1ECFng t\u01B0\u01A1ng t\xE1c",
      purpose: "Quan s\xE1t c\xE1c ph\xE2n t\u1EED kh\xED chuy\u1EC3n \u0111\u1ED9ng nhi\u1EC7t h\u1ED7n lo\u1EA1n v\xE0 nghi\u1EC7m l\u1EA1i \u0111\u1ECBnh lu\u1EADt p*V = const khi T kh\xF4ng \u0111\u1ED5i.",
      equipment: ["Tr\xECnh gi\u1EA3 l\u1EADp bu\u1ED3ng kh\xED v\u1EDBi piston \u0111i\u1EC1u ch\u1EC9nh th\u1EC3 t\xEDch, ngu\u1ED3n nhi\u1EC7t l\xE0m n\xF3ng/l\u1EA1nh."],
      theory: "p \xB7 V = n \xB7 R \xB7 T.",
      steps: [
        'Ch\u1ECDn ch\u1EBF \u0111\u1ED9 "\u0110\u1EB3ng nhi\u1EC7t" (T = const = 300 K).',
        "K\xE9o piston \u0111\u1EC3 gi\u1EA3m th\u1EC3 t\xEDch V xu\u1ED1ng m\u1ED9t n\u1EEDa, quan s\xE1t \xE1p k\u1EBF t\u0103ng g\u1EA5p \u0111\xF4i.",
        'Chuy\u1EC3n sang ch\u1EBF \u0111\u1ED9 "\u0110\u1EB3ng t\xEDch" (V = const), t\u0103ng nhi\u1EC7t \u0111\u1ED9 T v\xE0 quan s\xE1t \xE1p su\u1EA5t p t\u0103ng t\u1EC9 l\u1EC7 thu\u1EADn.'
      ],
      safetyNotes: ["Kh\xF4ng \xE1p d\u1EE5ng."],
      commonMistakes: ["Qu\xEAn chuy\u1EC3n \u0111\u1ED5i nhi\u1EC7t \u0111\u1ED9 Celsius sang Kelvin trong t\xEDnh to\xE1n."],
      assumptionsAndLimits: "C\xE1c ph\xE2n t\u1EED kh\xED l\xE0 ch\u1EA5t \u0111i\u1EC3m kh\xF4ng k\xEDch th\u01B0\u1EDBc, va ch\u1EA1m \u0111\xE0n h\u1ED3i ho\xE0n to\xE0n v\u1EDBi th\xE0nh b\xECnh v\xE0 kh\xF4ng t\u01B0\u01A1ng t\xE1c t\u1EEB xa.",
      dataAnalysisGuide: "T\xEDch p*V kh\xF4ng \u0111\u1ED5i trong qu\xE1 tr\xECnh n\xE9n \u0111\u1EB3ng nhi\u1EC7t; \xE1p su\u1EA5t t\u1EC9 l\u1EC7 thu\u1EADn v\u1EDBi \u0111\u1ED9ng n\u0103ng trung b\xECnh ph\xE2n t\u1EED.",
      errorHandling: "M\xF4 ph\u1ECFng h\u1EA1t d\u1EF1a tr\xEAn \u0111\u1ECBnh lu\u1EADt b\u1EA3o to\xE0n \u0111\u1ED9ng l\u01B0\u1EE3ng v\xE0 n\u0103ng l\u01B0\u1EE3ng trong va ch\u1EA1m 2D.",
      preQuestions: ["T\u1EA1i sao khi n\xE9n kh\xED trong b\u01A1m xe \u0111\u1EA1p th\xEC ta th\u1EA5y th\xE2n b\u01A1m n\xF3ng l\xEAn?"],
      postQuestions: ["\xC1p su\u1EA5t ch\u1EA5t kh\xED t\xE1c d\u1EE5ng l\xEAn th\xE0nh b\xECnh c\xF3 ngu\u1ED3n g\u1ED1c t\u1EEB \u0111\xE2u?"]
    }
  },
  // 12. Thí nghiệm thực lớp 12 (Khí lí tưởng - Định luật Boyle)
  {
    id: "res_exp_12_2",
    title: "Th\xED nghi\u1EC7m th\u1EF1c h\xE0nh: Kh\u1EA3o s\xE1t \u0111\u1ECBnh lu\u1EADt Boyle b\u1EB1ng xilanh \u0111o \xE1p su\u1EA5t kh\xED",
    description: "D\xF9ng xilanh ch\u1EE9a kh\xED k\xEDn v\xE0 \xE1p k\u1EBF \u0111o \xE1p su\u1EA5t p t\u01B0\u01A1ng \u1EE9ng v\u1EDBi c\xE1c gi\xE1 tr\u1ECB th\u1EC3 t\xEDch V khi n\xE9n ch\u1EADm \u1EDF nhi\u1EC7t \u0111\u1ED9 ph\xF2ng.",
    type: "experiment",
    grade: 12,
    chapterId: "c12_2",
    linkedLessonIds: ["lesson_12_2"],
    textbookId: "ket_noi_tri_thuc",
    author: "T\u1ED5 V\u1EADt l\xED THPT",
    authorId: "teacher_long",
    source: "Th\u1EF1c h\xE0nh V\u1EADt l\xED 12",
    licenseInfo: "Gi\xE1o d\u1EE5c",
    tags: ["\u0111\u1ECBnh lu\u1EADt boyle", "xilanh", "\xE1p k\u1EBF", "\u0111\u1EB3ng nhi\u1EC7t"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-18T11:00:00Z",
    updatedAt: "2026-10-06T16:00:00Z",
    experimentData: {
      category: "th\xED nghi\u1EC7m th\u1EF1c",
      purpose: "Kh\u1EA3o s\xE1t \u0111\u1ECBnh lu\u1EADt Boyle: T\xEDch p \xB7 V = const \u0111\u1ED1i v\u1EDBi m\u1ED9t l\u01B0\u1EE3ng kh\xED x\xE1c \u0111\u1ECBnh \u1EDF nhi\u1EC7t \u0111\u1ED9 kh\xF4ng \u0111\u1ED5i.",
      equipment: ["Xilanh chia \u0111\u1ED9 c\xF3 pitt\xF4ng di \u0111\u1ED9ng k\xEDn kh\xED, \xE1p k\u1EBF c\u01A1 h\u1ECDc ho\u1EB7c c\u1EA3m bi\u1EBFn \xE1p su\u1EA5t k\u1EBFt n\u1ED1i m\xE1y t\xEDnh."],
      theory: "p \xB7 V = const.",
      steps: [
        "Ghi \xE1p su\u1EA5t kh\xED quy\u1EC3n p0 ban \u0111\u1EA7u v\xE0 th\u1EC3 t\xEDch kh\xED ban \u0111\u1EA7u V0.",
        "\u0110\u1EA9y nh\u1EB9 nh\xE0ng pitt\xF4ng v\xE0o trong \u0111\u1EC3 gi\u1EA3m th\u1EC3 t\xEDch V t\u1EEBng v\u1EA1ch (v\xED d\u1EE5 40 ml, 35 ml, 30 ml, 25 ml, 20 ml).",
        "Sau m\u1ED7i l\u1EA7n d\u1ECBch chuy\u1EC3n pitt\xF4ng, ch\u1EDD kho\u1EA3ng 30 gi\xE2y \u0111\u1EC3 nhi\u1EC7t \u0111\u1ED9 kh\xED c\xE2n b\u1EB1ng v\u1EDBi m\xF4i tr\u01B0\u1EDDng, r\u1ED3i \u0111\u1ECDc \xE1p su\u1EA5t p.",
        "L\u1EADp b\u1EA3ng t\xEDch s\u1ED1 p \xB7 V cho c\xE1c l\u1EA7n \u0111o."
      ],
      safetyNotes: ["Kh\xF4ng \u1EA5n piston qu\xE1 m\u1EA1nh \u0111\u1ED9t ng\u1ED9t c\xF3 th\u1EC3 l\xE0m v\u1EE1 xilanh ho\u1EB7c tu\u1ED9t kh\u1EDBp n\u1ED1i \xE1p k\u1EBF."],
      commonMistakes: ["N\xE9n qu\xE1 nhanh khi\u1EBFn kh\xED b\u1ECB n\xF3ng l\xEAn do nh\u1EADn c\xF4ng, l\xE0m vi ph\u1EA1m \u0111i\u1EC1u ki\u1EC7n \u0111\u1EB3ng nhi\u1EC7t (T kh\xF4ng \u0111\u1ED5i)."],
      dataAnalysisGuide: "V\u1EBD \u0111\u1ED3 th\u1ECB p theo 1/V, n\u1EBFu \u0111\u1ED3 th\u1ECB l\xE0 \u0111\u01B0\u1EDDng th\u1EB3ng qua g\u1ED1c t\u1ECDa \u0111\u1ED9 th\xEC \u0111\u1ECBnh lu\u1EADt Boyle \u0111\u01B0\u1EE3c nghi\u1EC7m \u0111\xFAng.",
      errorHandling: "Kh\xED r\xF2 r\u1EC9 qua gio\u0103ng cao su c\u1EE7a piston l\xE0m thay \u0111\u1ED5i kh\u1ED1i l\u01B0\u1EE3ng kh\xED m.",
      preQuestions: ["T\u1EA1i sao ph\u1EA3i \u0111\u1EE3i kho\u1EA3ng 30 gi\xE2y sau khi d\u1ECBch chuy\u1EC3n piston m\u1EDBi \u0111\u1ECDc s\u1ED1 ch\u1EC9 \xE1p k\u1EBF?"],
      postQuestions: ["N\u1EBFu xilanh b\u1ECB h\u1EDF l\xE0m tho\xE1t m\u1ED9t ph\u1EA7n kh\xED ra ngo\xE0i, k\u1EBFt qu\u1EA3 th\xED nghi\u1EC7m s\u1EBD b\u1ECB \u1EA3nh h\u01B0\u1EDFng nh\u01B0 th\u1EBF n\xE0o?"]
    }
  },
  // 13. Video bài học lớp 10 (Chuyển động thẳng biến đổi đều)
  {
    id: "res_vid_10_1",
    title: "V\u1EADt l\xED 10 B\xE0i 9: Chuy\u1EC3n \u0111\u1ED9ng th\u1EB3ng bi\u1EBFn \u0111\u1ED5i \u0111\u1EC1u (K\u1EBFt n\u1ED1i tri th\u1EE9c)",
    description: "B\xE0i gi\u1EA3ng chi ti\u1EBFt h\u1EC7 th\u1ED1ng h\xF3a c\xF4ng th\u1EE9c v\u1EADn t\u1ED1c v = v\u2080 + at, \u0111\u1ED9 d\u1ECBch chuy\u1EC3n d, h\u1EC7 th\u1EE9c \u0111\u1ED9c l\u1EADp th\u1EDDi gian v\xE0 \u0111\u1ED3 th\u1ECB v-t (SGK V\u1EADt l\xED 10 K\u1EBFt n\u1ED1i tri th\u1EE9c).",
    type: "video_lesson",
    grade: 10,
    chapterId: "c10_2",
    linkedLessonIds: ["lesson_10_1"],
    textbookId: "ket_noi_tri_thuc",
    author: "C\xF4 Nguy\u1EC5n Dung - VietJack",
    authorId: "teacher_long",
    source: "K\xEAnh VietJack THPT",
    licenseInfo: "Chia s\u1EBB c\xF4ng khai",
    tags: ["video b\xE0i h\u1ECDc", "\u0111\u1ED9ng h\u1ECDc", "\u0111\u1ED3 th\u1ECB v\u1EADn t\u1ED1c", "k\u1EBFt n\u1ED1i tri th\u1EE9c"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-03T14:00:00Z",
    updatedAt: "2026-10-01T15:00:00Z",
    url: "https://www.youtube.com/watch?v=OB4SjDuTnhI",
    embedType: "youtube",
    duration: "42:18",
    guidingQuestions: [
      "L\xE0m th\u1EBF n\xE0o \u0111\u1EC3 nh\u1EADn bi\u1EBFt chi\u1EC1u chuy\u1EC3n \u0111\u1ED9ng c\u1EE7a v\u1EADt d\u1EF1a v\xE0o d\u1EA5u c\u1EE7a v tr\xEAn \u0111\u1ED3 th\u1ECB v-t?",
      "Khi xe d\u1EEBng h\u1EB3n th\xEC v\u1EADn t\u1ED1c t\u1EE9c th\u1EDDi b\u1EB1ng bao nhi\xEAu?"
    ]
  },
  // 14. Video thí nghiệm lớp 10 (Cổng quang điện)
  {
    id: "res_vid_10_exp",
    title: "Video th\u1EF1c nghi\u1EC7m: Kh\u1EA3o s\xE1t chuy\u1EC3n \u0111\u1ED9ng & \u0111o gia t\u1ED1c v\u1EDBi c\u1ED5ng quang \u0111i\u1EC7n (V\u1EADt l\xED 10)",
    description: "Ghi h\xECnh th\xED nghi\u1EC7m th\u1EF1c t\u1EBF \u0111o th\u1EDDi gian xe chuy\u1EC3n \u0111\u1ED9ng tr\xEAn m\xE1ng nghi\xEAng b\u1EB1ng c\u1ED5ng quang \u0111i\u1EC7n v\xE0 \u0111\u1ED3ng h\u1ED3 hi\u1EC7n s\u1ED1 MC-963A.",
    type: "video_experiment",
    grade: 10,
    chapterId: "c10_2",
    linkedLessonIds: ["lesson_10_1"],
    textbookId: "ket_noi_tri_thuc",
    author: "V\u1EADt L\xED Th\u1EF1c Nghi\u1EC7m THPT",
    authorId: "teacher_long",
    source: "K\xEAnh Th\xED nghi\u1EC7m V\u1EADt l\xED",
    licenseInfo: "Chia s\u1EBB gi\xE1o d\u1EE5c",
    tags: ["video th\xED nghi\u1EC7m", "c\u1ED5ng quang \u0111i\u1EC7n", "\u0111o gia t\u1ED1c"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-03T16:00:00Z",
    updatedAt: "2026-10-01T16:00:00Z",
    url: "https://www.youtube.com/watch?v=6Q0J3HcHeEs",
    embedType: "youtube",
    duration: "07:35",
    guidingQuestions: [
      "T\u1EA1i sao ph\u1EA3i d\xF9ng t\u1EA5m c\u1EA3n quang h\u1EB9p \u0111\u1EC3 k\xEDch ho\u1EA1t c\u1ED5ng quang \u0111i\u1EC7n?",
      "Gia t\u1ED1c t\xEDnh \u0111\u01B0\u1EE3c t\u1EEB th\u1EF1c nghi\u1EC7m ch\u1ECBu \u1EA3nh h\u01B0\u1EDFng c\u1EE7a y\u1EBFu t\u1ED1 ma s\xE1t n\xE0o?"
    ]
  },
  // 15. Video bài học lớp 10 (Định luật II Newton)
  {
    id: "res_vid_10_2",
    title: "V\u1EADt l\xED 10 B\xE0i 15: \u0110\u1ECBnh lu\u1EADt II Newton (K\u1EBFt n\u1ED1i tri th\u1EE9c)",
    description: "B\xE0i gi\u1EA3ng chi ti\u1EBFt \u0110\u1ECBnh lu\u1EADt II Newton (F = ma), qu\xE1n t\xEDnh c\u1EE7a v\u1EADt, h\u1EE3p l\u1EF1c t\xE1c d\u1EE5ng v\xE0 ph\u01B0\u01A1ng ph\xE1p gi\u1EA3i b\xE0i to\xE1n \u0111\u1ED9ng l\u1EF1c h\u1ECDc c\u01A1 b\u1EA3n.",
    type: "video_lesson",
    grade: 10,
    chapterId: "c10_3",
    linkedLessonIds: ["lesson_10_2"],
    textbookId: "ket_noi_tri_thuc",
    author: "C\xF4 Nguy\u1EC5n Dung - VietJack",
    authorId: "teacher_long",
    source: "K\xEAnh VietJack THPT",
    licenseInfo: "Chia s\u1EBB c\xF4ng khai",
    tags: ["video b\xE0i h\u1ECDc", "\u0111\u1ECBnh lu\u1EADt 2 newton", "l\u1EF1c"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-07T14:00:00Z",
    updatedAt: "2026-10-02T15:00:00Z",
    url: "https://www.youtube.com/watch?v=denoYcH-Mfs",
    embedType: "youtube",
    duration: "38:45",
    guidingQuestions: [
      "Gia t\u1ED1c c\u1EE7a v\u1EADt c\xF3 c\xF9ng h\u01B0\u1EDBng v\u1EDBi h\u1EE3p l\u1EF1c t\xE1c d\u1EE5ng kh\xF4ng?",
      "Khi l\u1EF1c kh\xF4ng \u0111\u1ED5i, kh\u1ED1i l\u01B0\u1EE3ng m t\u0103ng g\u1EA5p \u0111\xF4i th\xEC gia t\u1ED1c thay \u0111\u1ED5i th\u1EBF n\xE0o?"
    ]
  },
  // 16. Video bài học lớp 11 (Dao động điều hòa)
  {
    id: "res_vid_11_1",
    title: "V\u1EADt l\xED 11 B\xE0i 1: Dao \u0111\u1ED9ng \u0111i\u1EC1u h\xF2a (K\u1EBFt n\u1ED1i tri th\u1EE9c v\u1EDBi cu\u1ED9c s\u1ED1ng)",
    description: "B\xE0i gi\u1EA3ng l\xFD thuy\u1EBFt dao \u0111\u1ED9ng \u0111i\u1EC1u h\xF2a: ph\u01B0\u01A1ng tr\xECnh li \u0111\u1ED9 x = A cos(\u03C9t + \u03C6), chu k\xEC T, t\u1EA7n s\u1ED1 f, pha ban \u0111\u1EA7u v\xE0 m\u1ED1i li\xEAn h\u1EC7 v\u1EDBi chuy\u1EC3n \u0111\u1ED9ng tr\xF2n \u0111\u1EC1u.",
    type: "video_lesson",
    grade: 11,
    chapterId: "c11_1",
    linkedLessonIds: ["lesson_11_1"],
    textbookId: "ket_noi_tri_thuc",
    author: "K\xEAnh KHTN & V\u1EADt l\xED THPT",
    authorId: "teacher_long",
    source: "V\u1EADt l\xED 11 K\u1EBFt n\u1ED1i tri th\u1EE9c",
    licenseInfo: "T\u1EF1 do chia s\u1EBB",
    tags: ["video b\xE0i h\u1ECDc", "dao \u0111\u1ED9ng \u0111i\u1EC1u h\xF2a", "pha dao \u0111\u1ED9ng"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-11T14:00:00Z",
    updatedAt: "2026-10-03T11:00:00Z",
    url: "https://www.youtube.com/watch?v=_J2Ltm6tRKQ",
    embedType: "youtube",
    duration: "31:20",
    guidingQuestions: [
      "Li \u0111\u1ED9 x \u0111\u1EA1t gi\xE1 tr\u1ECB l\u1EDBn nh\u1EA5t khi n\xE0o?",
      "V\u1EADn t\u1ED1c s\u1EDBm pha hay tr\u1EC5 pha h\u01A1n li \u0111\u1ED9 m\u1ED9t g\xF3c b\u1EB1ng bao nhi\xEAu?"
    ]
  },
  // 17. Video thí nghiệm lớp 11 (Định luật Ohm)
  {
    id: "res_vid_11_2",
    title: "Video th\u1EF1c nghi\u1EC7m: B\u1ED9 d\u1EE5ng c\u1EE5 th\xED nghi\u1EC7m ki\u1EC3m ch\u1EE9ng \u0110\u1ECBnh lu\u1EADt Ohm (V\u1EADt l\xED 11)",
    description: "B\u1ED9 d\u1EE5ng c\u1EE5 th\xED nghi\u1EC7m th\u1EF1c t\u1EBF l\u1EAFp r\xE1p m\u1EA1ch \u0111i\u1EC7n g\u1ED3m ngu\u1ED3n \u0111i\u1EC7n m\u1ED9t chi\u1EC1u, bi\u1EBFn tr\u1EDF, \u0111i\u1EC7n tr\u1EDF nhi\u1EC7t v\xE0 ampe k\u1EBF/v\xF4n k\u1EBF kh\u1EA3o s\xE1t \u0111\u1ECBnh lu\u1EADt Ohm.",
    type: "video_experiment",
    grade: 11,
    chapterId: "c11_4",
    linkedLessonIds: ["lesson_11_2"],
    textbookId: "ket_noi_tri_thuc",
    author: "Thi\u1EBFt B\u1ECB Khoa H\u1ECDc THPT",
    authorId: "teacher_long",
    source: "Th\xED nghi\u1EC7m \u0110i\u1EC7n m\u1ED9t chi\u1EC1u",
    licenseInfo: "Chia s\u1EBB gi\xE1o d\u1EE5c",
    tags: ["video th\xED nghi\u1EC7m", "\u0111\u1ECBnh lu\u1EADt ohm", "m\u1EA1ch \u0111i\u1EC7n"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-13T14:00:00Z",
    updatedAt: "2026-10-04T17:00:00Z",
    url: "https://www.youtube.com/watch?v=oK8S69NGwvs",
    embedType: "youtube",
    duration: "05:12",
    guidingQuestions: [
      "V\xF4n k\u1EBF m\u1EAFc song song hay n\u1ED1i ti\u1EBFp v\u1EDBi \u0111i\u1EC7n tr\u1EDF m\u1EABu?",
      "\u0110\u1ED3 th\u1ECB quan h\u1EC7 gi\u1EEFa I v\xE0 U c\xF3 h\xECnh d\u1EA1ng \u0111\u01B0\u1EDDng g\xEC?"
    ]
  },
  // 18. Video thực nghiệm lớp 12 (Nhiệt hóa hơi riêng)
  {
    id: "res_vid_12_1",
    title: "V\u1EADt l\xED 12 Th\u1EF1c h\xE0nh: \u0110o nhi\u1EC7t h\xF3a h\u01A1i ri\xEAng c\u1EE7a n\u01B0\u1EDBc (Ch\u01B0\u01A1ng tr\xECnh m\u1EDBi)",
    description: "Quy tr\xECnh th\u1EF1c nghi\u1EC7m \u0111o nhi\u1EC7t h\xF3a h\u01A1i ri\xEAng c\u1EE7a n\u01B0\u1EDBc theo SGK V\u1EADt l\xED 12 m\u1EDBi (b\u1ED9 Ch\xE2n tr\u1EDDi s\xE1ng t\u1EA1o / K\u1EBFt n\u1ED1i tri th\u1EE9c), s\u1EED d\u1EE5ng \u1EA5m \u0111un \u0111i\u1EC7n v\xE0 c\xE2n hi\u1EC7n s\u1ED1 ghi nh\u1EADn \u0394m.",
    type: "video_experiment",
    grade: 12,
    chapterId: "c12_1",
    linkedLessonIds: ["lesson_12_1"],
    textbookId: "ket_noi_tri_thuc",
    author: "Th\u1EA7y L\xE2m 1E - V\u1EADt l\xED THPT",
    authorId: "teacher_long",
    source: "Th\u1EF1c h\xE0nh V\u1EADt l\xED 12 \u0110\u1ED5i m\u1EDBi",
    licenseInfo: "Gi\xE1o d\u1EE5c m\u1EDF",
    tags: ["v\u1EADt l\xED nhi\u1EC7t", "video th\u1EF1c h\xE0nh", "nhi\u1EC7t h\xF3a h\u01A1i"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-16T15:00:00Z",
    updatedAt: "2026-10-05T18:00:00Z",
    url: "https://www.youtube.com/watch?v=XW161L4eS8E",
    embedType: "youtube",
    duration: "12:45",
    guidingQuestions: [
      "T\u1EA1i sao ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EA5m gi\u1EDD khi n\u01B0\u1EDBc \u0111\xE3 s\xF4i s\xF9ng s\u1EE5c \u1EDF 100\xB0C?",
      "Hao ph\xED nhi\u1EC7t ra kh\xF4ng kh\xED l\xE0m cho gi\xE1 tr\u1ECB L \u0111o \u0111\u01B0\u1EE3c l\u1EDBn h\u01A1n hay nh\u1ECF h\u01A1n gi\xE1 tr\u1ECB l\xED thuy\u1EBFt?"
    ]
  },
  // 19. Video thí nghiệm lớp 12 (Khí lí tưởng - Định luật Boyle)
  {
    id: "res_vid_12_2",
    title: "Video th\u1EF1c nghi\u1EC7m: Th\xED nghi\u1EC7m ki\u1EC3m tra \u0110\u1ECBnh lu\u1EADt Boyle - V\u1EADt l\xED 12",
    description: "Th\xED nghi\u1EC7m th\u1EF1c h\xE0nh n\xE9n xilanh kh\xED k\xEDn, \u0111o \xE1p su\u1EA5t p t\u01B0\u01A1ng \u1EE9ng v\u1EDBi th\u1EC3 t\xEDch V, ki\u1EC3m ch\u1EE9ng qu\xE1 tr\xECnh \u0111\u1EB3ng nhi\u1EC7t v\xE0 t\xEDnh t\xEDch p \xB7 V.",
    type: "video_experiment",
    grade: 12,
    chapterId: "c12_2",
    linkedLessonIds: ["lesson_12_2"],
    textbookId: "ket_noi_tri_thuc",
    author: "K\xEAnh Th\xED Nghi\u1EC7m V\u1EADt L\xED THPT",
    authorId: "teacher_long",
    source: "Th\xED nghi\u1EC7m V\u1EADt l\xED 12",
    licenseInfo: "Chia s\u1EBB gi\xE1o d\u1EE5c",
    tags: ["video th\xED nghi\u1EC7m", "\u0111\u1ECBnh lu\u1EADt boyle", "kh\xED l\xED t\u01B0\u1EDFng"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-19T14:00:00Z",
    updatedAt: "2026-10-06T17:00:00Z",
    url: "https://www.youtube.com/watch?v=i4CcQQil00k",
    embedType: "youtube",
    duration: "06:50",
    guidingQuestions: [
      "T\u1EA1i sao ph\u1EA3i \u1EA5n piston ch\u1EADm r\xE3i khi n\xE9n kh\xED?",
      "T\xEDch s\u1ED1 p \xB7 V c\xF3 thay \u0111\u1ED5i \u0111\xE1ng k\u1EC3 khi n\xE9n xilanh kh\xF4ng?"
    ]
  },
  // 17. Tài liệu học tập (Worksheet / Phiếu học tập) Lớp 10
  {
    id: "res_doc_10_1",
    title: "Phi\u1EBFu h\u1ECDc t\u1EADp: B\xE0i t\u1EADp ph\xE2n t\xEDch \u0111\u1ED3 th\u1ECB chuy\u1EC3n \u0111\u1ED9ng th\u1EB3ng bi\u1EBFn \u0111\u1ED5i \u0111\u1EC1u (PDF)",
    description: "T\xE0i li\u1EC7u tuy\u1EC3n ch\u1ECDn 15 b\xE0i to\xE1n \u0111\u1ED3 th\u1ECB v-t v\xE0 x-t t\u1EEB c\u01A1 b\u1EA3n \u0111\u1EBFn n\xE2ng cao c\xF3 m\xE3 QR h\u01B0\u1EDBng d\u1EABn chi ti\u1EBFt.",
    type: "worksheet",
    grade: 10,
    chapterId: "c10_2",
    linkedLessonIds: ["lesson_10_1"],
    textbookId: "ket_noi_tri_thuc",
    author: "Ths: L\xEA Long - QT",
    authorId: "teacher_long",
    source: "B\u1ED9 t\xE0i li\u1EC7u gi\u1EA3ng d\u1EA1y V\u1EADt l\xED 10",
    licenseInfo: "L\u01B0u h\xE0nh n\u1ED9i b\u1ED9 h\u1ECDc sinh THPT",
    tags: ["phi\u1EBFu h\u1ECDc t\u1EADp", "b\xE0i t\u1EADp \u0111\u1ED3 th\u1ECB", "\u0111\u1ED9ng h\u1ECDc", "PDF"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-02T16:00:00Z",
    updatedAt: "2026-10-01T16:00:00Z",
    url: "https://drive.google.com/file/d/1B7A6C5D4E3F2G1H0J9K8L7M6N5P4Q/preview",
    fileType: "pdf",
    fileSize: 245e4,
    embedType: "drive"
  },
  // 18. Tài liệu học tập ĐƯỢC LIÊN KẾT NHIỀU BÀI (Học liệu dùng chung cho cả Bài 1 và Bài 2 lớp 10!)
  // Requirement 1 & 6: "Một học liệu được lưu một lần và có thể liên kết với nhiều bài. Cập nhật học liệu phải được phản ánh tại các bài liên quan."
  {
    id: "res_doc_shared_measure",
    title: "C\u1EA9m nang chung: Ph\u01B0\u01A1ng ph\xE1p \u0111o l\u01B0\u1EDDng, d\u1EE5ng c\u1EE5 \u0111o v\xE0 x\u1EED l\xED sai s\u1ED1 trong th\xED nghi\u1EC7m C\u01A1 h\u1ECDc",
    description: "T\xE0i li\u1EC7u h\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng th\u01B0\u1EDBc k\u1EB9p, c\u1ED5ng quang \u0111i\u1EC7n, \u0111\u1ED3ng h\u1ED3 hi\u1EC7n s\u1ED1 v\xE0 quy t\u1EAFc t\xEDnh sai s\u1ED1 tuy\u1EC7t \u0111\u1ED1i/t\u01B0\u01A1ng \u0111\u1ED1i (li\xEAn k\u1EBFt chung cho B\xE0i 1 v\xE0 B\xE0i 2).",
    type: "document",
    grade: 10,
    chapterId: "c10_1",
    linkedLessonIds: ["lesson_10_1", "lesson_10_2"],
    // Linked to BOTH Lesson 1 and Lesson 2!
    textbookId: "ket_noi_tri_thuc",
    author: "Ths: L\xEA Long - QT",
    authorId: "teacher_long",
    source: "Ph\xF2ng th\u1EF1c h\xE0nh C\u01A1 h\u1ECDc THPT",
    licenseInfo: "B\u1EA3n quy\u1EC1n gi\xE1o vi\xEAn L\xEA Long",
    tags: ["sai s\u1ED1", "\u0111o l\u01B0\u1EDDng", "th\u01B0\u1EDBc k\u1EB9p", "c\u01A1 h\u1ECDc", "d\xF9ng chung"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-01T09:00:00Z",
    updatedAt: "2026-10-01T09:00:00Z",
    url: "https://drive.google.com/file/d/1Z8Y7X6W5V4U3T2S1R0Q9P8O7N6M5/preview",
    fileType: "pdf",
    fileSize: 185e4,
    embedType: "drive"
  },
  // 19. Bài trình chiếu Canva / PowerPoint lớp 11
  // Requirement: "Ngoài ra cho phép nhúng các file powerpoint, canva, v.v nhúng vào web trong mỗi bài học."
  {
    id: "res_doc_canva_11_1",
    title: "Slide b\xE0i gi\u1EA3ng t\u01B0\u01A1ng t\xE1c Canva: Kh\xE1m ph\xE1 th\u1EBF gi\u1EDBi Dao \u0111\u1ED9ng \u0111i\u1EC1u h\xF2a",
    description: "B\xE0i tr\xECnh chi\u1EBFu t\u01B0\u01A1ng t\xE1c hi\u1EC7n \u0111\u1EA1i thi\u1EBFt k\u1EBF tr\xEAn Canva, nh\xFAng tr\u1EF1c ti\u1EBFp v\xE0o trang b\xE0i h\u1ECDc \u0111\u1EC3 tr\xECnh chi\u1EBFu tr\xEAn l\u1EDBp h\u1ECDc th\xF4ng minh.",
    type: "presentation",
    grade: 11,
    chapterId: "c11_1",
    linkedLessonIds: ["lesson_11_1"],
    textbookId: "ket_noi_tri_thuc",
    author: "Ths: L\xEA Long - QT",
    authorId: "teacher_long",
    source: "Canva Education Design",
    licenseInfo: "T\u1EF1 do tr\xECnh chi\u1EBFu",
    tags: ["slide canva", "b\xE0i gi\u1EA3ng \u0111i\u1EC7n t\u1EED", "dao \u0111\u1ED9ng \u0111i\u1EC1u h\xF2a", "nh\xFAng canva"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-10T11:00:00Z",
    updatedAt: "2026-10-03T11:30:00Z",
    url: "https://www.canva.com/design/DAFexample123/view?embed",
    fileType: "pptx",
    embedType: "canva"
  },
  // 20. Tài liệu PowerPoint / Office Online lớp 10
  {
    id: "res_doc_10_2",
    title: "B\xE0i tr\xECnh chi\u1EBFu PowerPoint: \u0110\u1ECBnh lu\u1EADt II Newton v\xE0 ph\xE2n t\xEDch l\u1EF1c trong \u0111\u1EDDi s\u1ED1ng",
    description: "T\u1EC7p slide PPTX h\u1ED7 tr\u1EE3 gi\u1EA3ng d\u1EA1y tr\u1EF1c ti\u1EBFp c\xF3 ho\u1EA1t h\u1ECDa ph\xE2n t\xEDch c\xE1c l\u1EF1c t\xE1c d\u1EE5ng l\xEAn \xF4 t\xF4, t\xE0u h\u1ECFa.",
    type: "presentation",
    grade: 10,
    chapterId: "c10_3",
    linkedLessonIds: ["lesson_10_2"],
    textbookId: "ket_noi_tri_thuc",
    author: "Ths: L\xEA Long - QT",
    authorId: "teacher_long",
    source: "Th\u01B0 vi\u1EC7n b\xE0i gi\u1EA3ng s\u1ED1",
    licenseInfo: "Gi\xE1o d\u1EE5c m\u1EDF",
    tags: ["powerpoint", "\u0111\u1ECBnh lu\u1EADt newton", "tr\xECnh chi\u1EBFu"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-06T11:00:00Z",
    updatedAt: "2026-10-02T12:00:00Z",
    url: "https://view.officeapps.live.com/op/embed.aspx?src=https://example.com/slide_dinh_luat_2_newton.pptx",
    fileType: "pptx",
    embedType: "powerpoint"
  },
  // 21. Tài liệu Word DOCX & PDF lớp 11 (Định luật Ohm)
  {
    id: "res_doc_11_2",
    title: "H\u1EC7 th\u1ED1ng b\xE0i t\u1EADp chuy\xEAn \u0111\u1EC1: \u0110\u1ECBnh lu\u1EADt Ohm cho c\xE1c lo\u1EA1i \u0111o\u1EA1n m\u1EA1ch (DOCX/PDF)",
    description: "T\xE0i li\u1EC7u b\xE0i t\u1EADp ph\xE2n lo\u1EA1i theo 4 m\u1EE9c \u0111\u1ED9 nh\u1EADn th\u1EE9c: Nh\u1EADn bi\u1EBFt, Th\xF4ng hi\u1EC3u, V\u1EADn d\u1EE5ng v\xE0 V\u1EADn d\u1EE5ng cao.",
    type: "document",
    grade: 11,
    chapterId: "c11_4",
    linkedLessonIds: ["lesson_11_2"],
    textbookId: "ket_noi_tri_thuc",
    author: "T\u1ED5 V\u1EADt l\xED THPT",
    authorId: "teacher_long",
    source: "T\xE0i li\u1EC7u d\u1EA1y h\u1ECDc chuy\xEAn s\xE2u",
    licenseInfo: "Chia s\u1EBB n\u1ED9i b\u1ED9",
    tags: ["b\xE0i t\u1EADp ohm", "m\u1EA1ch \u0111i\u1EC7n", "t\xE0i li\u1EC7u docx"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-12T14:00:00Z",
    updatedAt: "2026-10-04T16:00:00Z",
    url: "https://drive.google.com/file/d/1X2Y3Z4W5V6U7T8S9R0Q/preview",
    fileType: "docx",
    fileSize: 125e4,
    embedType: "drive"
  },
  // 22. Tài liệu bảng dữ liệu mẫu thực hành Excel lớp 12 (Nhiệt hóa hơi riêng)
  {
    id: "res_doc_12_1",
    title: "B\u1EA3ng m\u1EABu x\u1EED l\xED s\u1ED1 li\u1EC7u v\xE0 t\xEDnh to\xE1n sai s\u1ED1 th\u1EF1c nghi\u1EC7m nhi\u1EC7t h\xF3a h\u01A1i ri\xEAng (XLSX)",
    description: "File Excel l\u1EADp s\u1EB5n c\xF4ng th\u1EE9c t\u1EF1 \u0111\u1ED9ng t\xEDnh trung b\xECnh, ph\u01B0\u01A1ng sai, sai s\u1ED1 tuy\u1EC7t \u0111\u1ED1i v\xE0 v\u1EBD bi\u1EC3u \u0111\u1ED3 bi\u1EBFn thi\xEAn.",
    type: "worksheet",
    grade: 12,
    chapterId: "c12_1",
    linkedLessonIds: ["lesson_12_1"],
    textbookId: "ket_noi_tri_thuc",
    author: "Ths: L\xEA Long - QT",
    authorId: "teacher_long",
    source: "Th\u1EF1c h\xE0nh V\u1EADt l\xED 12",
    licenseInfo: "T\u1EF1 do t\u1EA3i v\u1EC1 cho h\u1ECDc sinh",
    tags: ["b\u1EA3ng s\u1ED1 li\u1EC7u m\u1EABu", "excel", "x\u1EED l\xED sai s\u1ED1", "nhi\u1EC7t h\xF3a h\u01A1i"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-15T11:00:00Z",
    updatedAt: "2026-10-05T17:30:00Z",
    url: "https://view.officeapps.live.com/op/embed.aspx?src=https://example.com/bang_so_lieu_nhiet_hoa_hoi.xlsx",
    fileType: "xlsx",
    fileSize: 45e4,
    embedType: "powerpoint"
  },
  // 23. Tài liệu tóm tắt kiến thức lý thuyết lớp 12 (Khí lí tưởng)
  {
    id: "res_doc_12_2",
    title: "Infographic & S\u01A1 \u0111\u1ED3 t\u01B0 duy: To\xE0n c\u1EA3nh Thuy\u1EBFt \u0111\u1ED9ng h\u1ECDc ph\xE2n t\u1EED v\xE0 C\xE1c \u0111\u1ECBnh lu\u1EADt Kh\xED l\xED t\u01B0\u1EDFng",
    description: "T\xE0i li\u1EC7u h\xECnh \u1EA3nh ch\u1EA5t l\u01B0\u1EE3ng cao t\xF3m l\u01B0\u1EE3c \u0111\u1EA7y \u0111\u1EE7 3 \u0111\u1EB3ng qu\xE1 tr\xECnh (\u0110\u1EB3ng nhi\u1EC7t, \u0110\u1EB3ng t\xEDch, \u0110\u1EB3ng \xE1p) v\xE0 \u0111\u1ED3 th\u1ECB t\u01B0\u01A1ng \u1EE9ng.",
    type: "document",
    grade: 12,
    chapterId: "c12_2",
    linkedLessonIds: ["lesson_12_2"],
    textbookId: "ket_noi_tri_thuc",
    author: "Ths: L\xEA Long - QT",
    authorId: "teacher_long",
    source: "S\u01A1 \u0111\u1ED3 t\u01B0 duy V\u1EADt l\xED 12",
    licenseInfo: "Gi\xE1o d\u1EE5c m\u1EDF",
    tags: ["s\u01A1 \u0111\u1ED3 t\u01B0 duy", "kh\xED l\xED t\u01B0\u1EDFng", "infographic", "h\xECnh \u1EA3nh"],
    status: "published",
    reviewStatus: "approved",
    createdAt: "2026-09-18T12:00:00Z",
    updatedAt: "2026-10-06T17:00:00Z",
    url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    fileType: "image",
    embedType: "html_safe"
  },
  // 24. Bản nháp (DRAFT) để kiểm tra Requirement 7: Khách/học sinh không đọc được bản nháp!
  {
    id: "res_draft_teacher_1",
    title: "[B\u1EA3n nh\xE1p \u0111ang so\u1EA1n] Nghi\xEAn c\u1EE9u m\xF4 ph\u1ECFng hi\u1EC7u \u1EE9ng Doppler trong s\xF3ng \xE2m",
    description: "H\u1ECDc li\u1EC7u \u0111ang trong qu\xE1 tr\xECnh bi\xEAn so\u1EA1n, ch\u01B0a \u0111\u01B0\u1EE3c duy\u1EC7t ho\u1EB7c xu\u1EA5t b\u1EA3n.",
    type: "simulation",
    grade: 11,
    chapterId: "c11_2",
    linkedLessonIds: [],
    textbookId: "ket_noi_tri_thuc",
    author: "Ths: L\xEA Long - QT",
    authorId: "teacher_long",
    source: "B\u1EA3n nh\xE1p c\xE1 nh\xE2n",
    licenseInfo: "B\u1EA3n nh\xE1p n\u1ED9i b\u1ED9",
    tags: ["nh\xE1p", "s\xF3ng \xE2m", "doppler"],
    status: "draft",
    reviewStatus: "draft",
    createdAt: "2026-10-08T08:00:00Z",
    updatedAt: "2026-10-08T08:00:00Z",
    embedType: "custom_sim"
  }
];
const INITIAL_SITE_SETTINGS = {
  siteName: "KH\xD4NG GIAN H\u1ECCC T\u1EACP V\u1EACT L\xCD 10\u201311\u201312",
  authorLine: "Ths: L\xEA Long - QT",
  announcement: "Ch\xE0o m\u1EEBng c\xE1c th\u1EA7y c\xF4 v\xE0 c\xE1c em h\u1ECDc sinh \u0111\u1EBFn v\u1EDBi Kh\xF4ng gian h\u1ECDc t\u1EADp V\u1EADt l\xED THPT.",
  defaultTextbook: "ket_noi_tri_thuc",
  isFirebaseConnected: false
  // Default is false with preview/mock mode activated
};
const DEMO_USERS = [
  {
    id: "student_demo",
    name: "Nguy\u1EC5n V\u0103n An (H\u1ECDc sinh)",
    email: "an.student@thpt.edu.vn",
    role: "student",
    school: "THPT Chuy\xEAn"
  },
  {
    id: "teacher_long",
    name: "Ths: L\xEA Long - QT (Gi\xE1o vi\xEAn)",
    email: "lelong.physics@thpt.edu.vn",
    role: "teacher",
    school: "T\u1ED5 V\u1EADt l\xED THPT"
  },
  {
    id: "admin_sys",
    name: "Qu\u1EA3n tr\u1ECB vi\xEAn H\u1EC7 th\u1ED1ng",
    email: "admin.vatly@thpt.edu.vn",
    role: "admin",
    school: "S\u1EDF Gi\xE1o d\u1EE5c & \u0110\xE0o t\u1EA1o"
  }
];
export {
  DEMO_USERS,
  INITIAL_CHAPTERS,
  INITIAL_LESSONS,
  INITIAL_RESOURCES,
  INITIAL_SITE_SETTINGS,
  INITIAL_TEXTBOOKS
};
