# Freelance Kit — Nhận làm Website & App

Bộ công cụ để kiếm thêm thu nhập từ việc nhận làm website, app và project nhỏ.

| Thành phần | Mục đích |
|---|---|
| [`index.html`](index.html) | Trang dịch vụ (landing page) để gửi link cho khách |
| [`assets/config.js`](assets/config.js) | **Sửa thông tin liên hệ tại đây** |
| [`PLAYBOOK.md`](PLAYBOOK.md) | Kế hoạch tìm khách 30 ngày, kênh tìm việc, cách định giá |
| [`templates/`](templates) | Tin nhắn chào hàng, bảng hỏi yêu cầu, báo giá, hợp đồng |
| [`leads.csv`](leads.csv) | Theo dõi khách tiềm năng (mở bằng Excel / Google Sheets) |

## Bắt đầu trong 15 phút

1. Sửa `assets/config.js`: email, Zalo, Facebook.
2. (Tuỳ chọn) Tạo form miễn phí tại [formspree.io](https://formspree.io), dán endpoint vào `formspree` để nhận yêu cầu qua email mà không cần khách mở mail app.
3. Commit & push lên `main`. Trang chạy tại:
   `https://<username>.github.io/<repo>/freelance/`
4. Đặt link này vào bio Facebook, Zalo, CV, chữ ký email.
5. Làm theo [`PLAYBOOK.md`](PLAYBOOK.md) — mục tiêu: **khách đầu tiên trong 30 ngày**.

## Tách thành repo riêng (khi muốn)

Folder này độc lập, không phụ thuộc file nào bên ngoài (trừ link portfolio `../index.html`):

```bash
git subtree split --prefix=freelance -b freelance-only
# tạo repo mới trên GitHub, rồi:
git push git@github.com:<username>/<new-repo>.git freelance-only:main
```

Sau đó bật **Settings → Pages → Deploy from branch `main`**, và sửa link portfolio thành URL đầy đủ.
