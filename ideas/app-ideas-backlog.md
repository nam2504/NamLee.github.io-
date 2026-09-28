# Backlog ý tưởng app thu nhập thụ động (thị trường VN)

Founder: solo, mạnh Backend, vibe-code web. Mục tiêu: thu nhập thụ động (ít support, khách tự dùng, traffic tự nhiên, chi phí chạy thấp).

Cập nhật lần cuối: 2026-09-28. Nguồn: 1 agent brainstorm + 1 agent research (tìm Google). Nhiều trang bị chặn nên phần lớn dữ kiện lấy từ đoạn trích kết quả tìm kiếm. **Điểm số là suy luận**, không có số liệu lượng tìm kiếm.

Thang điểm (1–5): **D** = nhu cầu, **C** = khoảng trống cạnh tranh (5 = ít đối thủ), **W** = sẵn sàng trả tiền, **P** = mức thụ động (5 = gần như không support), **F** = hợp với dev backend làm một mình. Tổng /25.

> Kết luận chung: không ý tưởng nào đạt mức "Cao". Phần lớn mô hình nước ngoài đã có người làm ở VN, thường kèm bản miễn phí (MISA, KiotViet, MoMo, VNeID, Cục Thuế…). Muốn thắng phải hơn về trải nghiệm hoặc kênh phân phối, chứ không phải về tính năng.

---

## Top 10 (xếp theo mức khả thi)

| Hạng | Ý tưởng | Tổng | Xác suất | Vì sao | Rủi ro chính | Bước kiểm chứng đầu tiên |
|---|---|---|---|---|---|---|
| 1 | **Sao kê ngân hàng PDF → Excel** (parser riêng từng ngân hàng VN) | 19 | Trung bình | Thuần backend, ít support, SEO đuôi dài theo từng ngân hàng; đối thủ chỉ có tool PDF chung chung | Dữ liệu tài chính nhạy cảm; ngân hàng đổi định dạng PDF | Landing page cho 3–5 ngân hàng, parse ngay trên trình duyệt (client-side) |
| 2 | **Đọc XML hóa đơn điện tử hàng loạt → bảng kê** + kiểm tra hợp lệ | 18 | Trung bình | Nhu cầu đều đặn hằng tháng, chạy client-side nên gần như 0 chi phí | iTaxViewer, MISA, iHOADON, taihoadon.online, tool miễn phí | Bản miễn phí gộp XML → Excel, thu phí phần kiểm tra hợp lệ |
| 3 | **Wizard hoàn nenkin** (lương hưu Nhật) cho người Việt về nước | 18 | Trung bình | Người dùng sẵn sàng trả 300–500k để nhận khoản hoàn rất lớn; luật vừa đổi, trần tính hoàn tăng từ 5 lên 8 năm | Luật thay đổi; hồ sơ sai dẫn đến khiếu nại | Bài SEO + công cụ tính tiền hoàn miễn phí, đếm số người để lại email |
| 4 | **Cửa hàng bán sản phẩm số cho creator Việt** (kiểu Gumroad: QR + webhook tự giao file) | 17 | Trung bình | Gumroad không hỗ trợ ngân hàng/QR Việt Nam; chỉ cần SePay/payOS, không phải giữ tiền của người bán | Niềm tin với nền tảng mới, sản phẩm bị share lậu | Chạy thử với 5–10 creator quen |
| 5 | **Consent widget tiếng Việt** (theo Luật BVDLCN) | 17 | Thấp | Nhúng một đoạn script, gần như không support | SME Việt Nam ít trả tiền | Bản miễn phí, đo tỷ lệ nâng cấp |
| 6 | **Bộ tài liệu tuân thủ Luật BVDLCN cho SME** (gộp với #5) | 16 | Trung bình | Luật có hiệu lực từ 1/1/2026 | SME được hoãn đánh giá tác động 5 năm, nên nhu cầu không gấp | Bán gói chung với widget |
| 7 | **HKD hay lên doanh nghiệp** (công cụ so sánh + SEO, kiếm tiền từ bán lead) | 16 | Thấp | Dễ làm, chạy song song được với dự án khác | MISA/EasyPos đã chiếm SEO, lead rẻ | Bài SEO + công cụ tính, đợi 8–12 tuần xem thứ hạng |
| 8 | **Lãi-lỗ thật cho seller Shopee/TikTok Shop** | 16 | Thấp | Nỗi đau thật, nhất là khi sàn khấu trừ thuế thay seller từ 5/3/2026 | Nhanh.vn, Abit, BigSeller; file đối soát của sàn hay đổi | Tool đọc file đối soát, đăng vào group seller |
| 9 | **Ôn thi EPS-TOPIK / tokutei** (tiếng Việt) | 16 | Thấp | Người học có động lực rõ; tokutei ít app tiếng Việt | Migii thống trị EPS; làm nội dung tốn công, rủi ro bản quyền | Làm thử một ngành tokutei |
| 10 | **Thu quỹ nhóm bằng QR + webhook tự gạch nợ** | 16 | Thấp | Nhu cầu rộng, dễ lan truyền | Zomo và app miễn phí; người dùng ngại trả tiền; không được giữ tiền hộ | Chạy thử với 3 lớp/nhóm |

**Nên làm trước:** #1 Sao kê → Excel hoặc #2 XML hóa đơn. Cả hai đều thuần backend, chạy client-side, SEO đuôi dài và rất ít support. #3 nenkin có mức sẵn sàng trả tiền cao nhất, nên chạy song song dưới dạng blog + công cụ tính.

---

## Toàn bộ 25 ý tưởng đợt 2 (brainstorm)

| # | Ý tưởng | Đối thủ chính | D | C | W | P | F | Tổng | Xác suất | Lý do |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Sổ kế toán HKD tự động từ webhook ngân hàng | MISA, KiotViet, Sapo; Nhà nước cấp phần mềm miễn phí (NĐ 20/2026) | 5 | 2 | 2 | 3 | 4 | 16 | Thấp | Nhà nước và MISA đều cho HKD dùng miễn phí |
| 2 | HKD hay lên doanh nghiệp (SEO/lead) | MISA, EasyPos, FastCA | 4 | 2 | 2 | 4 | 4 | 16 | Thấp | SEO đông, lead rẻ |
| 3 | Bot thu chứng từ qua Zalo cho kế toán | EasyBooks (125k/tháng), MISA | 3 | 3 | 3 | 2 | 3 | 14 | Thấp | Phải support nhiều |
| 4 | Sao kê PDF → Excel | Smallpdf, tool PDF chung | 4 | 3 | 3 | 4 | 5 | 19 | Trung bình | Chưa có parser riêng cho ngân hàng VN nổi bật |
| 5 | Đọc XML hóa đơn hàng loạt | MISA meInvoice, iHOADON, iTaxViewer, taihoadon.online | 4 | 2 | 3 | 4 | 5 | 18 | Trung bình | Nhu cầu đều đặn, nhưng có nhiều tool miễn phí |
| 6 | Cầu nối xuất hóa đơn điện tử hàng loạt | meInvoice, TS24 (đã có nhập Excel/API) | 3 | 2 | 3 | 3 | 3 | 14 | Thấp | Nhà cung cấp hóa đơn đã có sẵn |
| 7 | Lãi-lỗ thật cho seller sàn TMĐT | Nhanh.vn, Abit, BigSeller | 4 | 2 | 3 | 3 | 4 | 16 | Thấp | Đã có ERP đa kênh |
| 8 | Chuyển đổi địa chỉ sau sáp nhập | diachi.io, GeoVina, tracuusapnhap, Zalopay | 3 | 1 | 2 | 4 | 5 | 15 | Thấp | Đã có tool/API miễn phí, nhu cầu đã qua đỉnh |
| 9 | Bộ tuân thủ Luật BVDLCN | Luật sư, mẫu tài liệu miễn phí | 4 | 3 | 3 | 3 | 3 | 16 | Trung bình | SME được hoãn đánh giá tác động 5 năm |
| 10 | Consent widget tiếng Việt | Cookiebot, Termly, plugin WordPress | 3 | 3 | 2 | 4 | 5 | 17 | Thấp | SME ít trả tiền |
| 11 | Thu quỹ nhóm QR + webhook | Zomo, Fika, app miễn phí | 4 | 3 | 2 | 3 | 4 | 16 | Thấp | Đối thủ miễn phí |
| 12 | Học phí + điểm danh lớp nhỏ | Tutitor (miễn phí), Eduspace, Halozend | 3 | 1 | 3 | 2 | 4 | 13 | Thấp | Đã có bản miễn phí |
| 13 | Chấm công tiệm nhỏ qua Zalo Mini App | KiotViet, EzWork, aCheckin | 3 | 1 | 2 | 3 | 4 | 13 | Thấp | KiotViet đã tích hợp sẵn |
| 14 | Tích điểm khách hàng qua Zalo | PosApp, CNV, POS có sẵn | 3 | 2 | 2 | 3 | 3 | 13 | Thấp | Là tính năng đi kèm POS |
| 15 | Tạo đơn từ tin nhắn chat bằng LLM | Fchat, FPT.AI, Nhanh vPage, Sapo | 4 | 2 | 3 | 2 | 3 | 14 | Thấp | Đông đối thủ, LLM làm sai thì phải support |
| 16 | Đồng bộ lịch homestay (iCal) | GoHost (40k/phòng), KiotViet Hotel, GSheets PMS | 3 | 2 | 3 | 3 | 4 | 15 | Thấp | Đối thủ đã rất rẻ |
| 17 | Quản lý phòng khám thú y | DrVet, VetGo, GPet | 2 | 2 | 3 | 2 | 3 | 12 | Thấp | Thị trường nhỏ, cần tùy biến |
| 18 | Quản lý tiệm cho thuê đồ | Sổ Thuê Đồ, KiotViet, Sapo, ECRM | 2 | 3 | 3 | 3 | 4 | 15 | Thấp | Ngách nhỏ |
| 19 | Tra cứu bảng giá đất 2026 | LuatVietnam, Guland, Thư Viện Nhà Đất | 4 | 2 | 2 | 3 | 3 | 15 | Thấp | Bảng giá đổi hằng năm, SEO đông |
| 20 | Cảnh báo lịch cắt điện/nước | App EVN, Zalo OA (miễn phí) | 3 | 3 | 1 | 4 | 5 | 16 | Thấp | Kênh chính thống miễn phí |
| 21 | Trợ lý AI tư vấn thuế HKD | Chatbot AI Cục Thuế trên eTax Mobile (miễn phí) | 4 | 1 | 2 | 3 | 4 | 14 | Thấp | Nhà nước đã làm; rủi ro tư vấn sai |
| 22 | Cửa hàng số cho creator (Gumroad Việt) | Gumroad (không có cổng VN), Simple Page, Ladipage | 3 | 3 | 3 | 3 | 5 | 17 | Trung bình | Có khoảng trống thanh toán nội địa |
| 23 | Ôn thi EPS-TOPIK / tokutei | Migii, TOPIK Master, tokutei-test.com | 4 | 2 | 3 | 4 | 3 | 16 | Thấp | Migii thống trị |
| 24 | Wizard hoàn nenkin | LIGHTBOAT, Seikin, VAWORK (chủ yếu blog/dịch vụ) | 4 | 3 | 4 | 3 | 4 | 18 | Trung bình | Người dùng sẵn sàng trả cao |
| 25 | Tra mã HS + thuế hàng order | Caselaw, HSTC, hscodevietnam (miễn phí) | 3 | 2 | 1 | 4 | 4 | 14 | Thấp | Tool miễn phí, người dùng không trả |

---

## Ý tưởng đợt 1 (đã loại)

| Ý tưởng | Xác suất | Lý do loại |
|---|---|---|
| Quản lý nhà trọ (hóa đơn, VietQR, nhắc nợ) | Thấp–Trung bình | LOZIDO, Khutro, Resident, KiotViet; có bản miễn phí. Chỉ còn cửa nếu thắng hẳn ở khâu tự xác nhận thanh toán + đăng ký dùng cực nhanh. Ước tính 5–20 triệu/tháng sau 12 tháng |
| Trợ lý xe (phạt nguội, đăng kiểm) | Thấp | VNeTraffic/VNeID, MoMo, TTDK miễn phí; csgt.vn giới hạn lượt tra; hoa hồng bảo hiểm TNDS thấp. Chỉ còn ngách quản lý đội xe cho doanh nghiệp nhỏ |
| Theo dõi giá / phát hiện sale ảo Shopee | Thấp | BeeCost, Lichsugia… miễn phí; điều khoản Shopee cấm scrape |
| Đặt lịch salon/spa | Thấp–Trung bình | PosApp (3.500+ tiệm), EasySalon, Salo, Sapo; không thụ động |
| Review chủ trọ/phòng trọ | Thấp | Khó có dữ liệu ban đầu, rủi ro bị kiện vu khống |
| Điểm danh người già ("Tôi ổn") | Thấp–Trung bình | Ít đối thủ, nhưng người trả tiền khác người dùng, khó thu tiền; dễ bị copy |
| Công cụ tính lương gross-net / thuế TNCN | — | Nhiều đối thủ SEO; chỉ hợp làm trang kéo traffic |

---

## Kiểm chứng dữ kiện pháp lý (tính đến 09/2026)

| Dữ kiện | Kết quả |
|---|---|
| HKD bỏ thuế khoán từ 1/1/2026 | Đã xác minh |
| TT 152/2025: HKD ghi sổ kế toán (S1a, S2a–S2e) | Đã xác minh |
| Ngưỡng miễn thuế HKD 500 triệu hay 1 tỷ (NĐ 141/2026?) | **Chưa rõ**, cần kiểm lại văn bản gốc |
| Sàn TMĐT khấu trừ thuế thay HKD từ 5/3/2026 | Đã xác minh |
| Nhà nước cấp phần mềm kế toán miễn phí cho HKD (NĐ 20/2026) | Đã xác minh, chưa rõ thời điểm triển khai |
| Luật BVDLCN 91/2025/QH15 hiệu lực 1/1/2026; NĐ 356/2025 hướng dẫn | Đã xác minh |
| SME/HKD được hoãn đánh giá tác động 5 năm (trừ khi xử lý dữ liệu của từ 100k người trở lên) | Đã xác minh (đoạn trích tìm kiếm) |
| Sáp nhập: 34 tỉnh, 3.321 xã, chính quyền 2 cấp từ 1/7/2025 | Đã xác minh |
| Bảng giá đất công bố từ 1/1/2026, điều chỉnh hằng năm | Đã xác minh |
| Nenkin: trần tính hoàn tăng từ 5 lên 8 năm | Đã xác minh, ngày hiệu lực cần kiểm lại |
| Hàng nhập dưới 1 triệu qua chuyển phát nhanh bỏ miễn VAT từ 18/2/2025 | Đã xác minh (VAT) |

---

## Hướng tìm ý tưởng tiếp (lần sau)

- Luật/quy định mới 2026–2027 tạo ra nhu cầu bắt buộc. Kiểm tra xem Nhà nước hoặc MISA đã cho dùng miễn phí chưa.
- Công cụ "chuyển đổi file" thuần backend + SEO đuôi dài (cùng kiểu với #1, #2): ví dụ file BHXH, bảng lương, xuất dữ liệu từ eTax/VNeID.
- Cộng đồng người Việt ở nước ngoài (Nhật, Hàn, Đài, Úc): thủ tục giấy tờ, hoàn thuế, chuyển tiền.
- Luôn kiểm tra trước: MISA, KiotViet, Sapo, MoMo, Zalopay, VNeID, eTax Mobile đã có bản miễn phí chưa. Nếu có, loại ngay.
