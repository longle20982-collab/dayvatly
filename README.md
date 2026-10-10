# KHÔNG GIAN HỌC TẬP VẬT LÍ 10–11–12

> **Website chuyên sâu phục vụ giáo viên và học sinh THPT: Đăng kiến thức trọng tâm, tài liệu, thí nghiệm thực, mô phỏng tương tác, video thí nghiệm và video bài học theo chuẩn chương trình GDPT 2018.**

---

## 📌 1. Thư mục dự án & Cách mở bản xem trước (Google AI Studio & Trình duyệt)

Dự án được lưu trữ tại:
`C:\Users\HP\.gemini\antigravity\scratch\vat-ly-10-11-12`

> **Khuyến nghị cho người dùng:** Hãy đặt thư mục `C:\Users\HP\.gemini\antigravity\scratch\vat-ly-10-11-12` làm **thư mục làm việc hoạt động (Active Workspace)**.

### Cách 1: Xem trước tức thì (Google AI Studio Preview / Trình duyệt web)
- Mở trực tiếp tệp [`index.html`](file:///C:/Users/HP/.gemini/antigravity/scratch/vat-ly-10-11-12/index.html) bằng bất kì trình duyệt web hiện đại nào (Chrome, Edge, Firefox) hoặc xem trong tab Preview của Google AI Studio.
- Bản xem trước được tích hợp sẵn React 18, Tailwind CSS, KaTeX hiển thị công thức Vật lí chuẩn quốc tế, và bộ 6 mô phỏng số học HTML5 Canvas chạy trực tiếp mà không cần cấu hình phức tạp.

### Cách 2: Chạy môi trường phát triển Vite + React + TypeScript
```bash
cd C:\Users\HP\.gemini\antigravity\scratch\vat-ly-10-11-12
npm install
npm run dev
```

---

## 🏗 2. Kiến trúc & Nguyên tắc tổ chức

- **Lấy BÀI HỌC làm trung tâm**:
  Hệ thống phân cấp logic: `Khối lớp (10, 11, 12) → Chủ đề → Chương → Bài học → Học liệu liên quan`.
- **Thư viện độc lập**:
  Có kho Thí nghiệm, Video và Tài liệu riêng biệt.
- **Liên kết nhiều bài (Many-to-Many)**:
  Một học liệu được lưu trữ một lần và có thể liên kết đồng thời với nhiều bài học khác nhau (ví dụ: cẩm nang sai số liên kết cho cả Bài 1 và Bài 2 lớp 10). Cập nhật tại một nơi sẽ lập tức phản ánh đồng bộ tại tất cả các bài liên quan.
- **Bộ sách mặc định**:
  “Kết nối tri thức với cuộc sống” (có hỗ trợ “Cánh diều” và “Chân trời sáng tạo”).
- **Nhãn nội dung**:
  Mọi bài học mẫu được gắn nhãn minh bạch: **“Nội dung minh họa – cần giáo viên rà soát”**.

---

## 🔬 3. Danh mục 6 Bài học mẫu chuẩn hóa (Mục 13)

### Vật lí 10:
1. **Chuyển động thẳng biến đổi đều** (Chủ đề Động học):
   - Công thức: $v = v_0 + at$, $d = v_0 t + \frac{1}{2}at^2$, $v^2 - v_0^2 = 2ad$.
   - Mô phỏng xe trượt và đồ thị vận tốc thời gian thực $v-t$.
   - Thí nghiệm thực đo gia tốc bằng cổng quang điện và đồng hồ số.
2. **Định luật II Newton** (Chủ đề Động lực học):
   - Công thức: $\vec{a} = \frac{\vec{F}_{hl}}{m} \Leftrightarrow \vec{F}_{hl} = m\vec{a}$.
   - Mô phỏng tác dụng của lực $F$, khối lượng $m$, lực ma sát $\mu$ và đồ thị gia tốc.

### Vật lí 11:
3. **Dao động điều hòa** (Chủ đề Dao động):
   - Công thức: $x = A\cos(\omega t + \varphi)$, $v = \omega A\cos(\omega t + \varphi + \frac{\pi}{2})$, $a = -\omega^2 x$.
   - Mô phỏng con lắc lò xo đồng bộ với vòng tròn lượng giác (vectơ quay Fresnel).
4. **Định luật Ohm cho đoạn mạch chỉ có điện trở** (Chủ đề Dòng điện và mạch điện):
   - Công thức: $I = \frac{U}{R}$.
   - Mô phỏng mạch điện ảo, thanh trượt nguồn $U$ ($0 - 24\text{ V}$) và điện trở $R$, ampe kế, vôn kế và dựng đường đặc tuyến V-A.

### Vật lí 12:
5. **Nhiệt hóa hơi riêng** (Chủ đề Vật lí nhiệt):
   - Công thức: $Q = L \cdot m \Leftrightarrow L = \frac{Q}{m}$, $Q = P \cdot \tau$.
   - Mô phỏng ấm đun sôi nước trên cân điện tử, tính $L \approx 2.26 \times 10^6\text{ J/kg}$.
6. **Khí lí tưởng** (Chủ đề Khí lí tưởng):
   - Phương trình trạng thái: $\frac{p_1 V_1}{T_1} = \frac{p_2 V_2}{T_2}$ và định luật Boyle: $p \cdot V = \text{const}$.
   - Mô phỏng xi-lanh chứa phân tử khí tương tác đàn hồi, kéo pittông đổi thể tích và theo dõi áp kế $p$.

---

## 🎨 4. Giao diện & Trải nghiệm Người dùng (Mục 2 & 5)

- **Phong cách trường học trang nhã**:
  - Nền sáng, màu chủ đạo xanh dương đậm (`#0f2b5c`, `#1e3a8a`), điểm nhấn xanh ngọc (`#0d9488`).
  - Phông chữ Be Vietnam Pro hỗ trợ dấu tiếng Việt chuẩn.
- **Thanh điều hướng**:
  `Trang chủ | Vật lí 10 | Vật lí 11 | Vật lí 12 | Thí nghiệm | Video | Tài liệu | Khu vực giáo viên`.
- **Đường dẫn điều hướng (Breadcrumbs)**:
  Hiển thị đường dẫn chi tiết (Ví dụ: `Trang chủ / Vật lí 11 / Dao động / Dao động điều hòa`).
- **Chân trang (Footer)**:
  Dòng tác giả: `“Ths: Lê Long - QT”` (cho phép Quản trị viên thay đổi trong Cài đặt).
- **Trang chi tiết bài học với 7 thẻ nội dung**:
  1. *Mục tiêu* (Kiến thức, kĩ năng, kết quả)
  2. *Kiến thức trọng tâm* (Khái niệm, định luật, công thức KaTeX, ý nghĩa, đơn vị, lỗi thường gặp)
  3. *Minh họa* (Đồ thị, sơ đồ phân tích lực)
  4. *Thí nghiệm – mô phỏng* (Mô phỏng tương tác trực tiếp + PhET + học liệu liên kết)
  5. *Video* (Phân biệt video thí nghiệm và video bài học)
  6. *Luyện tập* (Trắc nghiệm + tự luận; nút “Mở hướng dẫn / đáp án”)
  7. *Tài liệu* (Phiếu học tập PDF, Slide Canva, PowerPoint)
- **Chế độ trình chiếu lớp học (Presentation Mode)**:
  Mở lớn nội dung trên bảng tương tác; hỗ trợ phím **Esc** và nút thoát.
- **Nhúng Slide Canva, PowerPoint Online**:
  Hỗ trợ nhúng an toàn qua URL và iframe sandbox.

---

## 🛡 5. Phân quyền & Quản trị (Mục 9 & 10)

Hệ thống có 3 vai trò rõ ràng:
1. **Khách / Học sinh**: Đọc bài và học liệu đã xuất bản (`published`). Không thấy bản nháp.
2. **Giáo viên**: Tạo và sửa học liệu/bài của chính mình, lưu nháp, gửi duyệt.
3. **Quản trị viên (Admin)**: Duyệt và xuất bản, lưu trữ học liệu, quản lí danh mục, chỉnh sửa dòng tác giả chân trang và tên website.

> **Thanh đổi vai trò thử nghiệm**: Trên góc phải thanh trên cùng của ứng dụng có nút chuyển nhanh giữa **Học sinh**, **Giáo viên**, **Quản trị viên** để kiểm tra ngay lập tức các tình huống phân quyền mà không cần đăng nhập lại.

---

## ☁ 6. Tích hợp Firebase & Chế độ Bản xem trước (Mục 11)

- Đã sẵn sàng tệp quy tắc bảo mật:
  - [`firestore.rules`](file:///C:/Users/HP/.gemini/antigravity/scratch/vat-ly-10-11-12/firestore.rules): Bảo vệ quyền đọc theo trạng thái `published` và quyền ghi theo `authorId`/`role`.
  - [`storage.rules`](file:///C:/Users/HP/.gemini/antigravity/scratch/vat-ly-10-11-12/storage.rules): Kiểm tra định dạng tệp (PDF, Word, PPT, Excel, MP4) và giới hạn kích thước (25MB cho tài liệu, 100MB cho video).
- **Chế độ Bản xem trước (Preview Mode)**:
  Khi chưa điền khóa API Firebase, ứng dụng tự động hiển thị huy hiệu "Bản xem trước", không giả lập thông báo "Đã lưu trực tuyến lên Firebase", và cung cấp cửa sổ hướng dẫn chi tiết các bước thiết lập Firebase Console.

---

## 🧪 7. Kết quả Kiểm thử 10 Tình huống Thực tế (Mục 15)

1. **Vào từng khối, mở bài và chuyển 7 thẻ nội dung**: Hoạt động trơn tru trên cả 3 khối lớp 10, 11, 12.
2. **Tìm kiếm & lọc học liệu**: Tìm kiếm toàn văn hỗ trợ tiếng Việt không dấu (gõ "dong luc hoc" tìm đúng "Động lực học").
3. **Giáo viên tạo nháp, sửa, tải lại dữ liệu**: Hoạt động chính xác trong bảng điều khiển Giáo viên.
4. **Tải tệp hợp lệ và thử tệp sai/quá dung lượng**: Thanh tiến độ (0%–100%) mô phỏng thực tế, từ chối tệp không đúng định dạng.
5. **Thêm video YouTube và liên kết ngoài**: Phân tích đúng video ID, không tự động phát video có âm thanh.
6. **Gắn 1 học liệu với 2 bài học**: Đã thiết lập học liệu "Cẩm nang sai số" liên kết đồng thời Bài 1 và Bài 2 lớp 10; chỉnh sửa phản ánh đồng bộ tại cả 2 bài.
7. **Khách không đọc được bản nháp**: Khi chuyển vai trò sang Học sinh, các bản nháp `draft` bị ẩn khỏi giao diện công khai.
8. **Từ chối thao tác sai quyền**: Giáo viên không thể sửa học liệu của người khác trừ khi chuyển quyền Quản trị viên.
9. **Chế độ trình chiếu & phím Esc**: Nhấn nút trình chiếu phóng to nội dung bài giảng; nhấn phím `Esc` thoát trở về màn hình thường.
10. **Kiểm tra công thức KaTeX & giao diện di động**: Các công thức $v = v_0 + at$, $\vec{a} = \frac{\vec{F}}{m}$, $x = A\cos(\omega t + \varphi)$, $I = \frac{U}{R}$, $Q = Lm$, $pV = nRT$ hiển thị sắc nét; giao diện responsive trên mọi thiết bị.
