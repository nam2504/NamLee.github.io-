# Backlog ý tưởng app thu nhập thụ động (thị trường VN)

Founder: solo, mạnh Backend, vibe-code web. Mục tiêu: thu nhập thụ động (ít support, khách tự dùng, traffic tự nhiên, chi phí chạy thấp).

Cập nhật lần cuối: 2026-09-28. Nguồn: 1 agent brainstorm + 1 agent research (tìm Google). Nhiều trang bị chặn nên phần lớn dữ kiện lấy từ đoạn trích kết quả tìm kiếm. **Điểm số là suy luận**, không có số liệu lượng tìm kiếm.

Thang điểm (1–5): **D** = nhu cầu, **C** = khoảng trống cạnh tranh (5 = ít đối thủ), **W** = sẵn sàng trả tiền, **P** = mức thụ động (5 = gần như không support), **F** = hợp với dev backend làm một mình. Tổng /25.

> Kết luận chung: không ý tưởng nào đạt mức "Cao". Phần lớn mô hình nước ngoài đã có người làm ở VN, thường kèm bản miễn phí (MISA, KiotViet, MoMo, VNeID, Cục Thuế…). Muốn thắng phải hơn về trải nghiệm hoặc kênh phân phối, chứ không phải về tính năng.

---

## ⭐ Top tổng hợp mới nhất (sau đợt 3: game + app tiêu dùng)

| Hạng | Ý tưởng | Nhóm | Tổng | Xác suất | Ghi chú |
|---|---|---|---|---|---|
| 1 | **Thầy Bói AI + Thẻ Hợp Tuổi** (A1 + A9: trang hợp tuổi kéo traffic SEO, chat tử vi AI thu phí) | App | 18/17 | Trung bình | Nhu cầu rất lớn (tuvi.vn và xemtuong khoảng 0,7 triệu lượt/tháng). Chi phí LLM dưới $0,01 mỗi lượt. Chỉ cần web + VietQR |
| 2 | **Luyện nói tiếng Hàn/Nhật bằng AI voice** (A11) | App | 19 | Trung bình | Người học sẵn sàng trả tiền cao (Speak đạt ARR trên $100M). Rủi ro: chi phí voice $0,02–0,05/phút, nên phải giới hạn số phút |
| 3 | **Rizz VN: AI gợi ý trả lời tin nhắn crush** (A16) | App | 19 | Trung bình | Chi phí rẻ nhất, làm trong 1 cuối tuần. Rizz khoảng $190k/tháng (số liệu 2024) |
| 4 | **Daily toán/logic cho học sinh, xếp hạng theo trường** (G14) | Game | 19 | Trung bình | Kiểu Nerdle. Đề sinh tự động, gần như không cần vận hành |
| 5 | **Idle tycoon quán phở, làm web rồi lên Steam** (G4) | Game | 18 | Trung bình | Game chơi đơn nên nhẹ pháp lý, bán toàn cầu. Trung vị doanh thu indie trên Steam thấp ($5–15k) |
| 6 | Sao kê PDF → Excel (đợt 2) | Tool | 19 | Trung bình | Thuần backend, SEO đuôi dài |
| 7 | Truyện ru ngủ AI bằng giọng ba mẹ (A14) | App | 18 | Trung bình | Phụ huynh sẵn sàng trả tiền. Rủi ro pháp lý: giọng nói là dữ liệu sinh trắc, người dùng là trẻ em |
| 8 | Wizard hoàn nenkin (đợt 2) | Tool | 18 | Trung bình | Người dùng trả 300–500k/lần |
| 9 | Ảnh AI Tết/áo dài, nhắm Tết 2027 (A5) | App | 17 | Trung bình | Chỉ theo mùa. Gemini miễn phí đang ép giá |
| 10 | Wordle tiếng Việt (G1) | Game | 17 | Trung bình | Gần như 0 chi phí. Đã có bản mã nguồn mở, quảng cáo VN trả thấp |

> Bài học quan trọng: (1) eCPM rewarded ad ở VN khoảng $2,2, Mỹ khoảng $16–19 (chênh ~8 lần), nên game kiếm tiền bằng quảng cáo nên nhắm thị trường toàn cầu. (2) Theo NĐ 147/2024, game nhiều người chơi (G1) ở VN cần giấy phép và phải đứng tên doanh nghiệp, game bài bị cấm hoàn toàn, vật phẩm ảo không được quy đổi ra tiền. (3) Zalo Mini App không cho gắn quảng cáo nếu chưa được duyệt. (4) Luật AI 134/2025 có hiệu lực từ 1/3/2026 bắt buộc gắn nhãn nội dung AI và giọng tổng hợp.

---

## Top 10 đợt 2 (công cụ, xếp theo mức khả thi)

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

## Đợt 3a: 15 ý tưởng game

D = nhu cầu, C = khoảng trống cạnh tranh, W = khả năng kiếm tiền, P = mức thụ động, F = hợp backend solo.

| # | Ý tưởng | D | C | W | P | F | Tổng | Xác suất | Lý do |
|---|---|---|---|---|---|---|---|---|---|
| G1 | Wordle tiếng Việt, daily + bảng xếp hạng | 3 | 2 | 2 | 5 | 5 | 17 | TB | Đã có bản mã nguồn mở (minhqnd), quảng cáo web trả ít |
| G2 | Đuổi hình bắt chữ / ca dao daily | 4 | 2 | 2 | 3 | 3 | 14 | Thấp | Cần nhiều hình ảnh; Zalo hạn chế quảng cáo |
| G3 | Ma sói với NPC chạy LLM | 3 | 3 | 3 | 2 | 4 | 15 | Thấp | Wolvesville đã chiếm thị trường; tốn chi phí LLM + kiểm duyệt; nhiều người chơi thì cần giấy phép G1 |
| G4 | Idle tycoon quán phở → Steam | 3 | 3 | 4 | 4 | 4 | 18 | TB | Chơi đơn, bán toàn cầu; nhiều game idle solo bán trên 100k bản |
| G5 | Tap-to-earn Telegram, đổi voucher | 2 | 1 | 2 | 2 | 4 | 11 | Thấp | Thị trường đã sụp (Hamster từ 300M còn 13M người dùng); đổi voucher vướng luật |
| G6 | Trivia lịch sử 1v1 async | 3 | 3 | 2 | 3 | 4 | 15 | Thấp | Thuộc G1, cần giấy phép |
| G7 | Tiến lên đánh với bot | 4 | 1 | 2 | 4 | 4 | 15 | Thấp | Game bài bị cấm cấp phép từ 25/12/2024 |
| G8 | Browser MMO kinh tế kiểu Torn | 2 | 3 | 3 | 1 | 5 | 14 | Thấp | Tốn công vận hành; G1 |
| G9 | Roguelike daily seed | 2 | 3 | 2 | 4 | 4 | 15 | Thấp | Ngách nhỏ, cần cảm giác chơi và đồ họa |
| G10 | Truyện tương tác AI cổ tích Việt | 3 | 3 | 3 | 3 | 4 | 16 | TB | AI Dungeon ARR khoảng $1,4–1,8M; phải kiểm soát chi phí token |
| G11 | Hybrid-casual block puzzle | 5 | 1 | 4 | 4 | 2 | 16 | Thấp | Phải mua user (UA) và cần art, không hợp làm solo |
| G12 | Escape room chữ co-op | 2 | 4 | 2 | 3 | 4 | 15 | Thấp | Nhu cầu nhỏ; G1 |
| G13 | Đấu giá điểm ảo | 2 | 2 | 2 | 2 | 4 | 12 | Thấp | Gần với cờ bạc |
| G14 | Daily toán cho học sinh | 4 | 3 | 3 | 4 | 5 | 19 | TB | Nerdle sống được nhờ quảng cáo; bán cho trường thì chậm |
| G15 | Thẻ sưu tầm gacha | 3 | 2 | 3 | 3 | 4 | 15 | Thấp | Vướng quy định vật phẩm ảo |

## Đợt 3b: 20 ý tưởng app tiêu dùng

| # | Ý tưởng | Đối thủ / đối chứng | D | C | W | P | F | Tổng | Xác suất |
|---|---|---|---|---|---|---|---|---|---|
| A1 | Thầy Bói AI (tử vi chat) | AItuvi, LUHO, Tử Vi của Tôi; Co-Star ~$400k/tháng | 5 | 2 | 3 | 3 | 5 | 18 | TB |
| A2 | Zalo Wrapped | Chưa có; chưa rõ định dạng file export của Zalo | 3 | 4 | 2 | 4 | 4 | 17 | Thấp |
| A3 | Rating pickleball | Picki, Reclub, VPickleball, ThePickleHub | 4 | 2 | 3 | 2 | 4 | 15 | Thấp |
| A4 | Widget cặp đôi | inlove, Been Love Memory; Locket ~$13,5M/năm | 3 | 2 | 3 | 4 | 2 | 14 | Thấp |
| A5 | Ảnh AI Tết/áo dài | Gemini miễn phí; Remini ~$7,5M/tháng | 4 | 2 | 3 | 3 | 5 | 17 | TB |
| A6 | Extension phụ đề song ngữ | Language Reactor $5,95/tháng | 3 | 3 | 3 | 4 | 4 | 17 | TB |
| A7 | Bot fandom K-pop | FanPlus, CHOEAEDOL | 2 | 4 | 2 | 2 | 5 | 15 | Thấp |
| A8 | Giờ câu cá | Lịch thủy triều VN; Fishbrain ~$1M/tháng | 3 | 3 | 3 | 4 | 4 | 17 | TB |
| A9 | Thẻ Hợp Tuổi | lichngaytot, tuvi.vn, xemtuong (SEO lớn) | 5 | 1 | 1 | 5 | 5 | 17 | TB (phễu kéo traffic) |
| A10 | Dự đoán bóng đá bạn bè | Superbru (miễn phí) | 3 | 2 | 1 | 2 | 4 | 12 | Thấp |
| A11 | Luyện nói Hàn/Nhật bằng AI voice | ELSA (chỉ tiếng Anh); Speak ARR trên $100M | 4 | 3 | 4 | 4 | 4 | 19 | TB |
| A12 | Trưa nay ăn gì | — | 3 | 3 | 1 | 4 | 5 | 16 | Thấp |
| A13 | Báo thức chụp ảnh | Alarmy (82 triệu lượt tải) | 3 | 1 | 3 | 5 | 2 | 14 | Thấp |
| A14 | Truyện ru ngủ giọng ba mẹ | Oscar Stories chỉ ~$6k/tháng | 4 | 3 | 4 | 3 | 4 | 18 | TB |
| A15 | Extension tự áp mã Shopee | ShopeeSave; chính sách Chrome 2025 chặn kiểu này | 4 | 3 | 3 | 3 | 4 | 17 | Thấp |
| A16 | Rizz VN | Rizz ~$190k/tháng | 4 | 2 | 4 | 4 | 5 | 19 | TB |
| A17 | Âm thanh Việt để ngủ | Vô số app white noise | 3 | 2 | 2 | 5 | 3 | 15 | Thấp |
| A18 | Nhận diện lan/Koi | PictureThis; PlantAI, PlantSnap | 3 | 3 | 3 | 4 | 4 | 17 | TB |
| A19 | Photobooth 4-cut online | Web photobooth miễn phí | 3 | 3 | 2 | 4 | 4 | 16 | Thấp |
| A20 | Sổ pha cà phê | — | 2 | 4 | 2 | 3 | 3 | 14 | Thấp |

Chi phí API tham khảo (09/2026): Gemini 2.5 Flash-Lite $0,10/$0,40 mỗi 1M token (2.5 Flash sẽ ngừng hoạt động ngày 16/10/2026). Ảnh $0,039–0,067/ảnh. ElevenLabs TTS $0,05–0,10 mỗi 1k ký tự.

---

## Hướng tìm ý tưởng tiếp (lần sau)

- Luật/quy định mới 2026–2027 tạo ra nhu cầu bắt buộc. Kiểm tra xem Nhà nước hoặc MISA đã cho dùng miễn phí chưa.
- Công cụ "chuyển đổi file" thuần backend + SEO đuôi dài (cùng kiểu với #1, #2): ví dụ file BHXH, bảng lương, xuất dữ liệu từ eTax/VNeID.
- Cộng đồng người Việt ở nước ngoài (Nhật, Hàn, Đài, Úc): thủ tục giấy tờ, hoàn thuế, chuyển tiền.
- Luôn kiểm tra trước: MISA, KiotViet, Sapo, MoMo, Zalopay, VNeID, eTax Mobile đã có bản miễn phí chưa. Nếu có, loại ngay.

---

## Review: Merge Mutant Lab (idle merge, thiết kế do AI khác đề xuất), 09/2026

Kết luận: **Có điều kiện.** Các cơ chế quảng cáo đều theo chuẩn thể loại, nhưng kế hoạch launch có rủi ro cao và phần tiền số chưa được chứng minh.

- Giữ lại:
  - Welcome Back x3.
  - Mutation Storm (2 lần/ngày, có push notification).
  - Expedition khi app đang tắt.
- Sửa:
  - Mở Expedition sớm hơn, ở level 3–5. Nếu để level 10, phần lớn người chơi rời game trước khi thấy tính năng này.
  - Bỏ "xem trước quái Lv30". Tính năng này làm lộ phần thưởng chính của game merge.
- Con số ">85% bấm xem quảng cáo" không có nguồn. Nên lập kế hoạch với số lượt xem quảng cáo thưởng khoảng 2–4 lượt mỗi người chơi mỗi ngày.
- Chỉ dùng quảng cáo thưởng thì doanh thu mỏng: 1.000 người chơi/ngày × 3 lượt xem × eCPM $10 chỉ được khoảng $30/ngày. Cần thêm gói mua trong game (IAP): gỡ quảng cáo, starter pack.
- Mua source rồi reskin:
  - Google Play có chính sách chống app spam/lặp nội dung.
  - Unity là stack mới với người code backend/web.
  - Nên làm bản HTML5 trước, đưa lên CrazyGames/Poki để kiểm chứng, rồi mới lên mobile.
- Nút thắt thật là phân phối: gần như không có lượt cài tự nhiên nếu không trả tiền quảng cáo.
- Pháp lý:
  - Giữ game offline chơi một mình để không phải xin giấy phép G1 theo NĐ147.
  - Nếu dùng hình do AI tạo, gắn nhãn theo Luật AI.
- Ngưỡng dừng dự án: D1 < 30% hoặc D7 < 8% sau khoảng 500 người chơi → dừng hoặc làm lại vòng chơi chính.
