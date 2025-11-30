# Wedding Website - Nam & Phương Anh

Website đám cưới đa trang được xây dựng bằng HTML5, Bootstrap 5, JavaScript và tích hợp Google Sheets để lưu trữ lời chúc và xác nhận tham dự.

## Tính năng

- **Trang chủ**: Hiển thị ảnh cưới, tên cô dâu chú rể, đếm ngược đến ngày cưới, và số lượng khách đã xác nhận
- **Câu chuyện**: Timeline về hành trình yêu từ lần đầu gặp gỡ đến cầu hôn
- **Album**: Thư viện ảnh với lightbox effect
- **Thông tin**: Chi tiết về lễ cưới với Google Maps
- **Thiệp mời**: Thiệp mời điện tử với QR code
- **Sổ lưu bút**: Form gửi lời chúc và hiển thị lời chúc từ Google Sheet
- **RSVP**: Xác nhận tham dự với thống kê số lượng khách

## Cấu trúc thư mục

```
.
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   ├── guestbook.js
│   │   └── rsvp.js
│   └── images/
│       └── (đặt ảnh của bạn vào đây)
├── config/
│   └── config.json
├── index.html
├── story.html
├── album.html
├── info.html
├── invite.html
├── guestbook.html
├── rsvp-stats.html
└── README.md
```

## Cấu hình

### 1. Cập nhật thông tin trong `config/config.json`

```json
{
  "groom": "Tên chú rể",
  "bride": "Tên cô dâu",
  "wedding_date": "2026-02-14",
  "wedding_time": "18:00",
  "wedding_address": "Địa chỉ nhà hàng",
  "wedding_address_full": "Địa chỉ đầy đủ",
  "google_maps_embed": "URL Google Maps Embed",
  "wedding_image": "assets/images/wedding-main.jpg",
  "story_timeline": [...],
  "album_images": [...],
  "google_sheet_guestbook_json": "URL_JSON_GUESTBOOK",
  "google_sheet_rsvp_json": "URL_JSON_RSVP",
  "google_form_guestbook": "URL_GOOGLE_FORM_GUESTBOOK",
  "google_form_rsvp": "URL_GOOGLE_FORM_RSVP"
}
```

### 2. Thiết lập Google Forms và Google Sheets

#### A. Tạo Google Form cho Sổ lưu bút (Guestbook)

1. Truy cập [Google Forms](https://forms.google.com/)
2. Tạo form mới với các trường:
   - Tên (Short answer)
   - Email (Short answer, optional)
   - Lời chúc (Paragraph)

3. Kết nối với Google Sheet:
   - Click "Responses" → Click biểu tượng Google Sheets
   - Tạo spreadsheet mới

4. Lấy URL Google Form:
   - Click "Send" → Copy link
   - Paste vào `google_form_guestbook` trong config.json

#### B. Tạo Google Form cho RSVP

1. Tạo form mới với các trường:
   - Họ tên (Short answer)
   - Email (Short answer, optional)
   - Số lượng khách (Short answer, number)
   - Tham dự (Multiple choice: "Có", "Không")
   - Ghi chú (Paragraph, optional)

2. Kết nối với Google Sheet (tương tự bước 3 ở trên)

3. Lấy URL Google Form và paste vào `google_form_rsvp`

#### C. Tạo Google Apps Script để xuất JSON

1. Mở Google Sheet đã tạo (cho Guestbook)
2. Click **Extensions** → **Apps Script**
3. Xóa code mặc định và paste đoạn code sau:

```javascript
function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();

  var headers = data[0];
  var rows = [];

  for (var i = 1; i < data.length; i++) {
    var row = {};
    for (var j = 0; j < headers.length; j++) {
      row[headers[j]] = data[i][j];
    }
    rows.push(row);
  }

  return ContentService.createTextOutput(JSON.stringify({data: rows}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Deploy** → **New deployment**
5. Chọn type: **Web app**
6. Settings:
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Click **Deploy** và copy **Web app URL**
8. Paste URL vào `google_sheet_guestbook_json` trong config.json

9. **Lặp lại các bước 1-8 cho Google Sheet RSVP** và paste URL vào `google_sheet_rsvp_json`

### 3. Lấy Google Maps Embed URL

1. Truy cập [Google Maps](https://maps.google.com/)
2. Tìm địa điểm tổ chức đám cưới
3. Click **Share** → **Embed a map**
4. Copy URL trong thuộc tính `src` của iframe
5. Paste vào `google_maps_embed` trong config.json

### 4. Thêm ảnh

1. Đặt ảnh của bạn vào thư mục `assets/images/`
2. Cập nhật đường dẫn trong `config.json`:
   - `wedding_image`: Ảnh chính cho trang chủ
   - `story_timeline`: Ảnh cho từng mốc thời gian
   - `album_images`: Danh sách ảnh cho album

## Deploy lên GitHub Pages

### Bước 1: Tạo Repository

1. Tạo repository mới trên GitHub với tên: `<username>.github.io`
   - Ví dụ: `namlee.github.io`
   - Hoặc tên bất kỳ nếu muốn URL dạng `<username>.github.io/<repo-name>`

### Bước 2: Push code lên GitHub

```bash
# Khởi tạo git (nếu chưa có)
git init

# Add tất cả files
git add .

# Commit
git commit -m "Initial commit - Wedding website"

# Add remote repository
git remote add origin https://github.com/<username>/<repository>.git

# Push lên GitHub
git branch -M main
git push -u origin main
```

### Bước 3: Cấu hình GitHub Pages

1. Truy cập repository trên GitHub
2. Click **Settings** → **Pages**
3. Trong phần **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

### Bước 4: Truy cập website

- Nếu repo tên `<username>.github.io`: Truy cập `https://<username>.github.io`
- Nếu repo tên khác: Truy cập `https://<username>.github.io/<repo-name>`

Ví dụ: `https://namlee.github.io` hoặc `https://namlee.github.io/wedding`

## Tùy chỉnh

### Thay đổi màu sắc

Chỉnh sửa CSS variables trong `assets/css/style.css`:

```css
:root {
  --primary-color: #d4af37;  /* Màu vàng gold */
  --secondary-color: #f5e6d3; /* Màu kem */
  --text-dark: #333;
  --text-light: #666;
  --white: #fff;
}
```

### Thay đổi font chữ

Trong phần `<head>` của các file HTML, thay đổi Google Fonts import:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap" rel="stylesheet">
```

Sau đó cập nhật CSS:

```css
body {
  font-family: 'Your Font', serif;
}
```

## Lưu ý quan trọng

1. **Google Apps Script**: Cần deploy script cho cả 2 Google Sheets (Guestbook và RSVP)
2. **CORS**: Google Apps Script tự động xử lý CORS, không cần cấu hình thêm
3. **Ảnh**: Nên tối ưu kích thước ảnh trước khi upload (khuyến nghị < 500KB/ảnh)
4. **Test trước khi deploy**: Test website locally bằng cách mở file `index.html` trên trình duyệt
5. **Update config**: Mỗi khi thay đổi config.json, cần commit và push lên GitHub

## Hỗ trợ

Nếu gặp vấn đề:

1. Kiểm tra Console trong DevTools (F12) để xem lỗi
2. Đảm bảo Google Apps Script đã được deploy đúng cách
3. Kiểm tra URL trong config.json có chính xác không
4. Đảm bảo Google Sheets có quyền "Anyone with the link can view"

## License

Dự án này được tạo cho mục đích cá nhân. Bạn có thể tự do sử dụng và chỉnh sửa theo nhu cầu.

---

**Chúc bạn có một đám cưới thật hạnh phúc và website thật đẹp!** 💑💍
