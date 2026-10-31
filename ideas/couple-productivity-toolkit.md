# Bộ công cụ năng suất cho 2 vợ chồng: Nam (Senior → Staff, Backend) & Bell (VPS, phân tích + tư vấn margin)

> Cập nhật: 2026-10-31 (v2, sau khi có thông tin chi tiết) · Điện thoại: Bell **iPhone**, Nam **Android**, nên mọi tool dùng chung phải chạy được trên cả hai.
> Nguyên tắc: **ít tool, dùng sâu.** Mỗi việc 1 tool. Tool nào không dùng đủ 2 tuần thì bỏ.

---

## 0. Tóm tắt (đọc phần này là đủ)

| Ai | 3 thay đổi đáng làm nhất | Chi phí |
|---|---|---|
| **Bell** | (1) **Phiếu kiểm tra nhanh 1 mã trong 10 phút** (mục 3.1): cùng 1 checklist cho mọi mã, kết luận ghi được trong 3 dòng. (2) **Bảng theo dõi margin của khách** (mục 3.2): giá giảm thêm bao nhiêu % thì chạm ngưỡng call, cộng cảnh báo giá trên SmartOne/FireAnt, để **gọi khách trước khi bị call**. (3) **Lộ trình học phân tích 12 tuần** (mục 4), mỗi tuần thực hành trên 1 mã khách đang nắm | 0–1,4 triệu (FireAnt) + 1,7 triệu (khóa BCTC, tùy chọn) |
| **Nam** | (1) **Chọn 1 vấn đề vượt team** và viết RFC trong 30 ngày; tìm sponsor (manager/Staff hiện tại). (2) **Brag doc** viết theo khung năng lực Staff, mỗi thứ Sáu 15 phút. (3) Đọc *The Staff Engineer's Path* + DDIA bản 2, mỗi chương gắn với 1 việc thật ở công ty | ~1–1,5 triệu sách |
| **Cả nhà** | (1) **Google Calendar** chung (iPhone và Android đều dùng tốt): `Bell-Phiên`, `Nam-Focus`, `Nhà & Sức khỏe`. (2) **Google Keep** làm danh sách việc nhà chung. **MISA MoneyKeeper** làm sổ chi tiêu chung, ngân sách tính theo **thu nhập sàn**. (3) Vận động 3 phút mỗi 30–45 phút; khám tổng quát hằng năm, đặt sẵn trên lịch; sổ sức khỏe VNeID | 0đ |

**Nên tự build trước:** **"Bàn phân tích của Bell"**. Mỗi sáng 8h, bot Telegram gửi cho Bell: mã của 2 khách hôm qua tăng/giảm bao nhiêu, **còn bao nhiêu % nữa thì tới ngưỡng call**, tin/công bố mới của các mã đó, lịch sự kiện (BCTC, chốt quyền). Kèm 1 lệnh `/check HPG` trả về "phiếu nhanh" lấy từ dữ liệu công khai. Làm 1–2 cuối tuần. Hướng sản phẩm: **công cụ cảnh báo rủi ro margin cho nhà đầu tư cá nhân** (tệp lớn hơn tệp môi giới nhiều). Xem mục 5.

---

## 1. Hiểu công việc (đã cập nhật)

### 1.1 Bell @ VPS

**Phạm vi hiện tại:** 1–2 khách, **chủ yếu dùng margin**, tư vấn **bằng điện thoại**. Không tìm khách mới; ưu tiên **upskill phân tích**.

| Việc chính | Đầu ra mong muốn | Pain point | Tool giải quyết |
|---|---|---|---|
| Theo dõi thị trường | Nắm bối cảnh trong 15 phút mỗi sáng | Quá nhiều nguồn tin | Báo cáo/tin VPS trên SmartOne ([fptshop](https://fptshop.com.vn/tin-tuc/giai-tri/vps-smartone-179563)) + 1 nguồn tổng hợp; bot 8h (mục 5) |
| Phân tích BCTC | Hiểu chất lượng lợi nhuận, dòng tiền, nợ của doanh nghiệp | Đọc chậm, chưa có khung nhất quán | Khung 5 bước (mục 3.1), NotebookLM để hỏi trên file PDF BCTC + thuyết minh |
| Kiểm tra nhanh 1 mã | Trả lời khách "mã này còn ổn không" trong 10 phút | Mỗi lần làm 1 kiểu | **Phiếu kiểm tra nhanh** (mục 3.1) |
| Tư vấn mã khách đang nắm | Gọi điện có nội dung rõ: luận điểm còn đúng không, rủi ro margin | Margin khuếch đại thua lỗ, thị trường giảm nhanh | **Bảng margin + cảnh báo** (mục 3.2), **ghi chú cuộc gọi** (mục 3.3) |

**Ranh giới (compliance):**
- Không đặt lệnh hay đầu tư thay khách. Ủy thác chỉ thực hiện qua hợp đồng với công ty, và người quản lý tài khoản phải có chứng chỉ phân tích tài chính hoặc quản lý quỹ ([TT 121/2020](https://thuvienphapluat.vn/van-ban/Doanh-nghiep/Thong-tu-121-2020-TT-BTC-huong-dan-hoat-dong-cua-cong-ty-chung-khoan-453690.aspx)).
- Ngưỡng **duy trì/xử lý margin lấy theo hợp đồng ký quỹ của VPS và hiển thị trên SmartOne**. Các trang bên ngoài ghi lệch nhau (35%/30% hoặc 30%/25%) ([VPS](https://www.vps.com.vn/FinancialServices.aspx), [chungkhoanvps.org](https://chungkhoanvps.org/phi-giao-dich/lai-suat-margin-vps/)), nên **không dùng số trên mạng**.
- AI chỉ dùng để đọc và tóm tắt tài liệu công khai. **Không đưa số tài khoản hay NAV thật của khách vào AI công cộng** (Luật BVDLCN 91/2025). Nên hỏi quy định nội bộ của VPS về AI và ghi âm cuộc gọi.

**Bối cảnh thị trường:** doanh thu môi giới toàn ngành Q3/2026 ~2.700 tỷ, giảm > 60% so với đỉnh ([Vietstock](https://vietstock.vn/2026/10/loi-nhuan-mbs-buoc-lui-trong-quy-3-doanh-thu-mang-moi-gioi-giam-den-66-737-1502712.htm)). Các công ty đua phí 0đ ([Stockbiz](https://stockbiz.vn/tin-tuc/moi-gioi-chung-khoan-doi/41152853)). **Năng lực phân tích là thứ giữ giá trị khi phí giao dịch về 0**, nên hướng upskill của Bell là đúng thời điểm.

**Hướng dài hạn (tùy chọn):** Chứng chỉ hành nghề **phân tích tài chính** yêu cầu chứng chỉ chuyên môn (trong đó có *phân tích báo cáo tài chính doanh nghiệp*) và đậu kỳ thi sát hạch gồm phần pháp luật + chuyên môn của UBCKNN ([TVPL](https://thuvienphapluat.vn/lao-dong-tien-luong/dieu-kien-de-duoc-cap-chung-chi-hanh-nghe-phan-tich-tai-chinh-la-gi-15643.html)). Có chứng chỉ này thì đủ điều kiện quản lý tài khoản ủy thác. Kiểm tra quy định mới nhất trên Cổng dịch vụ công trước khi đăng ký.

### 1.2 Nam: Senior → Staff (Backend)

| Trục | Senior (hiện tại) | Staff (mục tiêu) | Bằng chứng cần có trong 6–12 tháng |
|---|---|---|---|
| Phạm vi | 1 team | **Vượt ranh giới team** ([kanenarraway](https://kanenarraway.com/posts/getting-to-senior-staff-engineer/)) | ≥ 2 RFC được ≥ 2 team áp dụng |
| Bài toán | Được giao, đã rõ | **Tự tìm và định nghĩa** | 1 vấn đề tự phát hiện, có số liệu "trước/sau" |
| Kỹ thuật | Service tốt | Kiến trúc: dữ liệu, độ nhất quán, khả năng quan sát, chi phí, migration an toàn | SLO, postmortem, kế hoạch migration không downtime |
| Con người | Review | Nâng chuẩn cả tổ chức | Guideline/template mọi người dùng; người được mentor lên level |
| Hiển thị | Làm tốt | **Được nhìn thấy, có sponsor** | Brag doc, tech talk nội bộ, packet theo ladder ([GitLab](https://handbook.gitlab.com/handbook/people-group/promotion-document-style-guide/)) |

**Chọn archetype Staff** (theo Will Larson, [staffeng.com](https://staffeng.com/guides/staff-archetypes/)): Tech Lead, Architect, Solver hoặc Right Hand. Với người mạnh backend, **Solver** (giải bài khó xuyên team) hoặc **Architect** (sở hữu 1 miền kỹ thuật) thường là đường ngắn nhất. Chốt với manager xem công ty cần archetype nào.

**Về AI coding:** RCT của METR (2025) cho thấy dev giàu kinh nghiệm chậm hơn 19% nhưng tưởng mình nhanh hơn 20%; METR nay coi kết quả này là của thế hệ tool cũ ([tóm tắt](https://scienceblog.com/t-a-randomized-trial-by-metr-found-that-experienced-developers-completed-real-coding-tasks-19-slower-when-allowed-to-use-ai-tools-yet-afterwards-they-estimated-on-average-that-ai-had-made-them-20-fast/), [follow-up](https://dev.to/gabrielanhaia/metrs-ai-coding-speed-study-broke-too-many-developers-wouldnt-work-without-ai-5afm)). Ở level Staff, giá trị nằm ở **quyết định và tài liệu**, không phải tốc độ gõ code. Dùng Claude Code cho phần thực thi, giữ thời gian cho thiết kế và căn chỉnh giữa các team.

### 1.3 Cuộc sống chung

| Chủ đề | Thực tế | Rủi ro / việc cần làm |
|---|---|---|
| Lịch | Bell kín giờ phiên 9h–15h; khách margin có thể cần gọi gấp khi thị trường giảm mạnh | Tối là thời gian chung. Gom việc deep-work của Nam vào giờ phiên |
| Tài chính | Thu nhập Bell phụ thuộc phí/hoa hồng (đang giảm toàn ngành) | **Ngân sách theo thu nhập sàn**, phần vượt mức đưa vào quỹ dự phòng |
| Sức khỏe | Cả 2 ngồi nhiều, nhìn màn hình nhiều; Bell căng thẳng theo thị trường | Người ngồi gần như suốt giờ làm có rủi ro tử vong cao hơn 16%; xen kẽ vận động thì không thấy rủi ro tăng ([CNN/JAMA 2024](https://www.cnn.com/2024/01/25/health/effects-of-sitting-on-mortality-wellness)) |
| Thiết bị | iPhone + Android | Tránh Apple Reminders/iCloud cho việc dùng chung; dùng hệ Google |

---

## 2. Công cụ đề xuất

### 2.1 Bell (iPhone + máy tính)

| Việc | Tool | Giá | Ghi chú | Ưu tiên |
|---|---|---|---|---|
| Bảng giá, NAV, dư nợ margin, báo cáo VPS | **VPS SmartOne** (app) + **SmartOne Web** (ra mắt 2026) ([SmartOne Web](https://smartoneweb.vps.com.vn/)) | 0đ | Nguồn sự thật cho tỷ lệ ký quỹ của khách. Dùng trước mọi tool khác | P1 |
| Cảnh báo giá/khối lượng/tín hiệu | Cảnh báo trên app VPS nếu có; nếu không thì **FireAnt Thiết yếu** (cảnh báo realtime theo giá, khối lượng đột biến, MA/RSI/MACD) | ~1.429.000đ/12 tháng ([FireAnt](https://company.fireant.vn/), [hướng dẫn](https://www.fireant.vn/Guide/Detail/262)) | Cài theo **giá chạm ngưỡng** tính ở mục 3.2 | P1 |
| Số liệu BCTC, chỉ số, so sánh ngành | **Vietstock Finance** hoặc **Simplize** (dùng bản free trước, chọn 1) ([seohot](https://seohot.vn/website-tai-chinh-chung-khoan/)) | Free → Pro | Lấy 5 năm số liệu để làm phiếu kiểm tra nhanh | P1 |
| Đọc BCTC/báo cáo phân tích PDF | **NotebookLM** | 0đ | Đưa BCTC + thuyết minh + báo cáo phân tích công khai vào, hỏi: "Lợi nhuận tăng nhờ đâu? Khoản phải thu/tồn kho bất thường?". **Luôn mở lại trang gốc để kiểm số** | P1 |
| Mô hình & bảng tính | Google Sheets (mẫu ở mục 3) | 0đ | Đồng bộ iPhone ↔ máy tính | P1 |
| Biểu đồ | TradingView free / biểu đồ trong SmartOne | 0đ | | P3 |
| Ghi chú cuộc gọi | Ghi âm thành văn bản trên iPhone (nếu VPS cho phép) → dán tóm tắt vào sổ cuộc gọi | 0đ | Mục 3.3 | P2 |
| Học | Khóa "Đọc hiểu BCTC" của Vietstock (1,7 triệu) **hoặc** giáo trình *Phân tích BCTC* của Nguyễn Ngọc Quang ([Vietstock](https://dichvu.vietstock.vn/dao-tao/khoa-hoc-online---doc-hieu-bao-cao-tai-chinh), [DSC](https://www.dsc.com.vn/kien-thuc/giao-trinh-phan-tich-bao-cao-tai-chinh)) | 0–1,7 triệu | Chọn 1, đi theo lộ trình ở mục 4 | P1 |

**Bỏ so với v1:** CRM, nhãn Zalo, tin nhắn nhanh, bản tin sáng gửi hàng loạt. Với 1–2 khách thì những thứ này không cần thiết.

### 2.2 Nam (Android + máy làm việc)

| Việc | Tool | Giá | Ghi chú | Ưu tiên |
|---|---|---|---|---|
| Brag doc, ghi chú học, nháp RFC | **Obsidian** (markdown, sync qua git; có app Android) | 0đ | Mẫu ở mục 3.4 | P1 |
| Lộ trình Staff | *The Staff Engineer's Path* (Tanya Reilly) + [staffeng.com](https://staffeng.com/) | ~600k | Đọc kèm việc thật: mỗi chương 1 hành động | P1 |
| Nền tảng hệ thống | **DDIA bản 2** (2/2026) ([O'Reilly](https://www.oreilly.com/library/view/-/9781098119058)) | ~1 triệu | 1 chương/2 tuần, mỗi chương 1 trang "áp dụng vào hệ thống công ty thế nào" | P1 |
| Luyện system design (nếu tính đổi công ty) | Hello Interview **hoặc** ByteByteGo, mua 1 ([so sánh](https://www.designgurus.io/blog/best-system-design-interview-courses-2026)) | ~$79/năm | Chưa cần nếu promote nội bộ | P3 |
| Coding | Claude Code + quy trình spec → test → code → tự review diff | Gói hiện có | Log thời gian 2 tuần để biết AI giúp ở loại task nào | P2 |
| Deep-work | 2 khung 3 giờ/tuần trên Google Calendar, **trùng giờ phiên của Bell** | 0đ | | P1 |

### 2.3 Cả nhà (iPhone + Android)

| Việc | Tool | Giá | Ghi chú |
|---|---|---|---|
| Lịch chung | **Google Calendar** (miễn phí, đủ dùng cho đa số cặp đôi) ([Morgen](https://www.morgen.so/blog-posts/shared-calendar-app-for-couple)) | 0đ | Bell cài app Google Calendar trên iPhone, hoặc thêm tài khoản Google vào Lịch của iOS |
| Việc nhà, đi chợ | **Google Keep** (danh sách chung, chạy trên cả iOS và Android) | 0đ | TimeTree yếu về to-do ([Cupla](https://cupla.app/blog/best-shared-calendar-apps-for-couples-in-2026/)) |
| Chi tiêu | **MISA MoneyKeeper** (nhiều người dùng chung 1 sổ, xuất Excel) hoặc Money Lover (ví chung, Premium ~199k/năm) ([HVA](https://hva.vn/app-quan-ly-chi-tieu-cho-vo-chong-va-gia-dinh)) | 0đ | Kiểm tra tính năng chia sẻ trên cả App Store và Play Store trước khi chọn |
| Quy tắc tiền | Chi cố định ≤ lương cứng Nam + **thu nhập sàn** của Bell; phần vượt chia vào dự phòng (mục tiêu 6 tháng chi tiêu) và đầu tư dài hạn | 0đ | **Không dùng margin cho tiền gia đình** |
| Khám bệnh | **VNeID: sổ sức khỏe điện tử** (cần định danh mức 2; QĐ 31/QĐ-BYT) ([CA Khánh Hòa](https://congan.khanhhoa.gov.vn/vi/tich-hop-so-suc-khoe-dien-tu-tren-vneid-de-su-dung-thay-the-so-giay-khi-tham-gia-kham-chua-benh)) + **YouMed** đặt lịch, đặt giúp người thân ([YouMed](https://youmed.vn/)) | 0đ | Khám tổng quát hằng năm, đặt trên lịch `Nhà & Sức khỏe` |
| Vận động | Nhắc **3 phút mỗi 30–45 phút** ([ACU](https://www.acu.edu.au/about-acu/news/2021/september/move-for-three-minutes-every-half-hour-to-counteract-effects-of-sitting), [Western](https://news.westernu.ca/2023/09/study-finds-prescribed-work-breaks-can-counter-effects-of-sitting/)) | 0đ | Bell: giờ nghỉ trưa và sau 15h. Nam: giữa các khung focus |
| Mắt | 20-20-20 **có bật nhắc**: tác dụng chỉ kéo dài khi còn nhắc, bằng chứng còn lẫn lộn ([PubMed](https://pubmed.ncbi.nlm.nih.gov/36473088/), [Optometry Advisor](https://www.optometryadvisor.com/features/digital-eye-strain-may-not-be-solved-by-the-20-20-20-rule/)) + chỉnh độ sáng, cỡ chữ + khám mắt định kỳ | 0đ | Chi phí 0, tác dụng phụ bằng 0 |
| Ngủ & bước chân | Bell: Apple Health · Nam: Health Connect | 0đ | Xem xu hướng theo tuần |

---

## 3. Mẫu dùng ngay

### 3.1 Phiếu kiểm tra nhanh 1 mã (10 phút, Google Sheets: 1 tab/mã)

Theo thứ tự phân tích BCTC phổ biến: bắt đầu từ ý kiến kiểm toán, sau đó xem chất lượng tăng trưởng, dòng tiền, nợ ([DNSE](https://www.dnse.com.vn/hoc/phan-tich-co-phieu), [Finhay](https://www.finhay.com.vn/en/cach-doc-bao-cao-tai-chinh-de-phan-tich-chung-khoan)).

| # | Câu hỏi | Lấy ở đâu | Cờ đỏ |
|---|---|---|---|
| 1 | Ý kiến kiểm toán? | BCTC năm | Ngoại trừ / nhấn mạnh |
| 2 | Doanh thu, LNST 5 năm + 4 quý gần nhất: tăng nhờ đâu? | Vietstock/Simplize | Lợi nhuận tăng nhờ thu nhập bất thường |
| 3 | **CFO so với LNST** (dòng tiền kinh doanh có theo kịp lợi nhuận không?) | Lưu chuyển tiền tệ | CFO âm nhiều quý trong khi lãi tăng |
| 4 | Phải thu, tồn kho tăng nhanh hơn doanh thu? | Cân đối kế toán | Có |
| 5 | Nợ vay/VCSH, chi phí lãi vay/EBIT | Cân đối + KQKD | Nợ tăng nhanh, lãi vay ăn > 30% EBIT |
| 6 | ROE, biên gộp so với 3 doanh nghiệp cùng ngành | Vietstock/Simplize | Thấp hơn ngành mà không có lý do |
| 7 | Định giá: P/E, P/B so với lịch sử 5 năm và ngành | Vietstock/Simplize | Cao hơn trung bình mà tăng trưởng đang chậm lại |
| 8 | Sự kiện sắp tới: BCTC quý, chốt quyền, phát hành, giao dịch nội bộ | Tin VPS / công bố thông tin | Phát hành pha loãng, cổ đông lớn bán ra |
| **Kết luận (3 dòng)** | Luận điểm còn đúng? Rủi ro lớn nhất? Mức giá làm luận điểm sai? | | |

### 3.2 Bảng theo dõi margin của khách

Công thức **đơn giản hóa** (giả định toàn bộ tài sản là cổ phiếu, chưa tính tỷ lệ cho vay riêng theo từng mã; **đối chiếu với số SmartOne hiển thị**):

- Tỷ lệ ký quỹ hiện tại: `r = (Tài sản − Nợ) / Tài sản`
- Ngưỡng của VPS (lấy trong hợp đồng/SmartOne): `t`
- **Danh mục giảm thêm bao nhiêu % thì chạm ngưỡng:** `x = 1 − (1 − r) / (1 − t)`

| r hiện tại | t = 30% | t = 35% |
|---|---|---|
| 60% | giảm **42,9%** | 38,5% |
| 50% | giảm **28,6%** | 23,1% |
| 40% | giảm **14,3%** | 7,7% |
| 35% | giảm **7,1%** | 0% (đang ở ngưỡng) |

| Cột trong Sheet | Ví dụ |
|---|---|
| Khách (mã giả) | KH-A |
| Tài sản / Nợ (nhập từ SmartOne cuối ngày) | 1,2 tỷ / 0,6 tỷ |
| r | 50% |
| Ngưỡng t (VPS) | lấy từ hợp đồng |
| **% giảm tới ngưỡng** | `=1-(1-r)/(1-t)` |
| Mã chiếm tỷ trọng lớn nhất + giá cảnh báo | HPG, `= giá hiện tại × (1 − x)` hoặc mức thận trọng hơn |
| Trạng thái | 🟢 > 20% · 🟡 10–20% · 🔴 < 10% → gọi khách ngay hôm nay |

Đặt cảnh báo giá (SmartOne/FireAnt) tại **giá cảnh báo** của mã lớn nhất, để Bell gọi khách **trước** khi tài khoản bị call.

### 3.3 Sổ cuộc gọi (mỗi cuộc gọi 2 phút ghi)

```
Ngày | Khách | Mã đã bàn | Luận điểm khách đang giữ | Bell khuyến nghị (chỉ tư vấn) | Khách quyết định | Việc tiếp theo + ngày
```
Sổ này giúp Bell nhất quán, nhớ đã nói gì với khách, và có dữ liệu để tự rút kinh nghiệm: luận điểm nào đúng, luận điểm nào sai.

### 3.4 Brag doc của Nam (mỗi thứ Sáu, 15 phút)

```
## Tuần YYYY-WW
- Staff signal (vượt team): RFC "X" → team A, B áp dụng / review với …
- Tự định nghĩa bài toán: phát hiện … , đo được …
- Impact có số liệu: p99 450→180ms; chi phí DB −30%; incident −…
- Nâng người khác: guideline …, mentor …
- Học → áp dụng: DDIA ch.N → đề xuất …
- Cần sponsor/manager biết: …
```

---

## 4. Lộ trình 12 tuần

### 4.1 Bell: phân tích cơ bản (≈ 5 giờ/tuần, ngoài giờ phiên)

| Tuần | Học | Thực hành (dùng mã của khách) | Đầu ra |
|---|---|---|---|
| 1–2 | 3 báo cáo: KQKD, Cân đối, Lưu chuyển tiền tệ | Đọc BCTC năm của mã lớn nhất trong danh mục khách | 1 trang tóm tắt |
| 3–4 | Chỉ số: biên lợi nhuận, ROE (Dupont), vòng quay, nợ | Điền phiếu 3.1 cho 2 mã | 2 phiếu |
| 5–6 | Chất lượng lợi nhuận: CFO so với LNST, phải thu, tồn kho, thuyết minh | So sánh 2 doanh nghiệp cùng ngành | 1 bảng so sánh |
| 7–8 | Đặc thù ngành của danh mục khách (ví dụ ngân hàng: NIM, nợ xấu, CASA; thép: giá nguyên liệu, tồn kho) | Đọc báo cáo ngành của VPS, dùng NotebookLM để hỏi | Ghi chú ngành |
| 9–10 | Định giá tương đối (P/E, P/B so với lịch sử và ngành) | Định giá 2 mã của khách | 2 mức giá hợp lý (khoảng) |
| 11–12 | Luận điểm đầu tư + điều kiện làm luận điểm sai; trình bày 3 phút qua điện thoại | Gọi tư vấn thật dựa trên phiếu | Bộ phiếu chuẩn cho 5 mã |

**Chỉ số tự theo dõi:** thời gian làm 1 phiếu giảm từ ~60 phút xuống ≤ 15 phút; mỗi cuộc gọi với khách có ít nhất 1 con số và 1 rủi ro cụ thể.

### 4.2 Nam: Senior → Staff (90 ngày đầu)

| Tuần | Việc | Gate |
|---|---|---|
| 1–2 | 1:1 với manager: lấy ladder Staff, hỏi "khoảng cách lớn nhất của em là gì", xin 1 sponsor. Chọn archetype | Có tiêu chí viết thành văn bản |
| 3–4 | Liệt kê 5 vấn đề vượt team (độ tin cậy, chi phí, tốc độ phát triển); chọn 1 vấn đề có số liệu | Manager/sponsor đồng ý ưu tiên |
| 5–8 | Viết RFC → review với ≥ 2 team → chốt phương án; tách thành mốc nhỏ | RFC được duyệt |
| 9–12 | Dẫn triển khai mốc 1; đo trước/sau; tech talk nội bộ 20 phút | Có 1 kết quả đo được + brag doc 12 tuần |

---

## 5. Nên tự build gì

| # | Công cụ | Giải quyết | Độ khó với Nam | Tiềm năng thành sản phẩm |
|---|---|---|---|---|
| **1** | **Bàn phân tích của Bell**: Google Sheets (danh mục khách, mã giả) + Python cron + **bot Telegram** (chạy tốt trên iPhone). 8h sáng gửi: thay đổi giá, **% còn lại tới ngưỡng call**, tin/công bố của các mã đang nắm, sự kiện sắp tới. Lệnh `/check MÃ` trả về phiếu 3.1 tự điền từ dữ liệu công khai | Theo dõi margin + kiểm tra nhanh 1 mã | Thấp–TB. Có repo tham khảo về cảnh báo giá qua Sheets/Telegram ([leanhkhoa](https://leanhkhoa.com/projects/p3/), [GitHub](https://github.com/huy01197/telegram-stock-bot)) | **Khá.** Đổi tệp khách từ môi giới sang **nhà đầu tư cá nhân dùng margin**: "biết trước khi bị call". Tệp này lớn hơn tệp môi giới và nỗi đau rõ hơn. Rủi ro: app của CTCK có thể tự thêm tính năng này; nguồn dữ liệu giá phải hợp lệ. **Chưa validate**, dùng thử với Bell 4 tuần trước |
| 2 | **Family finance dashboard**: thu nhập sàn, quỹ dự phòng đủ mấy tháng | Ngân sách khi thu nhập biến động | Thấp | Nối với StatementKit (memo `passive-income-app-study.md`) |
| 3 | **Log năng suất AI coding** | Biết AI giúp ở loại task nào | Thấp | Làm nội dung brag doc/tech talk, ít giá trị sản phẩm |

**Ràng buộc khi build #1:** không lưu số tài khoản hay NAV thật trên server cá nhân, chỉ dùng mã giả và Bell tự nhập số; **chỉ nhắc, không đặt lệnh**; dữ liệu giá lấy từ nguồn công khai và đọc kỹ điều khoản; hỏi quy định nội bộ của VPS trước khi dùng cho khách thật.

---

## 6. Kế hoạch 30 ngày

| Tuần | Bell | Nam | Cả nhà |
|---|---|---|---|
| 1 | Lấy ngưỡng margin từ hợp đồng VPS; lập bảng 3.2 cho khách; đặt cảnh báo giá | 1:1 lấy ladder Staff + chọn sponsor; bắt đầu brag doc | Google Calendar 3 lịch; Google Keep; chọn app chi tiêu |
| 2 | Học tuần 1–2; làm phiếu 3.1 cho mã lớn nhất | Liệt kê 5 vấn đề vượt team; đọc *Staff Engineer's Path* phần 1 | Tính thu nhập sàn + quy tắc phần vượt mức |
| 3 | Bắt đầu sổ cuộc gọi; dùng thử NotebookLM trên 1 BCTC | Chọn 1 vấn đề, bắt đầu nháp RFC | Đặt lịch khám tổng quát; kích hoạt sổ sức khỏe VNeID |
| 4 | Review: thời gian làm 1 phiếu, có gọi khách trước ngưỡng không | Build **bot v0** cho Bell (1 cuối tuần) | Review tháng 15 phút |

---

## 7. Còn cần hỏi (không chặn việc, chỉ để tinh chỉnh)

1. Ngưỡng duy trì/xử lý margin trong hợp đồng của 2 khách là bao nhiêu? SmartOne có cảnh báo giá đẩy về iPhone không?
2. VPS có quy định gì về dùng AI, ghi âm cuộc gọi, lưu thông tin khách trên Google Sheets không?
3. Khách của Bell nắm các ngành nào? (để chọn ngành học ở tuần 7–8)
4. Công ty của Nam có ladder Staff viết thành văn bản và có chu kỳ promote cố định không (mấy tháng/lần)?

---

## 8. Nguồn

- VPS: [SmartOne Web](https://smartoneweb.vps.com.vn/) · [SmartOne – fptshop](https://fptshop.com.vn/tin-tuc/giai-tri/vps-smartone-179563) · [SmartPro](https://chungkhoanvps.org/dich-vu/nen-tang/vps-smartpro/) · [Dịch vụ tài chính VPS](https://www.vps.com.vn/FinancialServices.aspx) · [Margin VPS (bên thứ ba)](https://chungkhoanvps.org/phi-giao-dich/lai-suat-margin-vps/)
- Pháp lý: [TT 121/2020](https://thuvienphapluat.vn/van-ban/Doanh-nghiep/Thong-tu-121-2020-TT-BTC-huong-dan-hoat-dong-cua-cong-ty-chung-khoan-453690.aspx) · [Chứng chỉ phân tích tài chính](https://thuvienphapluat.vn/lao-dong-tien-luong/dieu-kien-de-duoc-cap-chung-chi-hanh-nghe-phan-tich-tai-chinh-la-gi-15643.html) · [Mẫu đăng ký thi (NĐ 245/2025)](https://thuvienphapluat.vn/banan/tin-tuc/tai-mau-giay-dang-ky-du-thi-sat-hach-cap-chung-chi-hanh-nghe-chung-khoan-moi-nhat-tu-1192025-18194)
- Thị trường: [Vietstock Q3/2026](https://vietstock.vn/2026/10/loi-nhuan-mbs-buoc-lui-trong-quy-3-doanh-thu-mang-moi-gioi-giam-den-66-737-1502712.htm) · [Stockbiz](https://stockbiz.vn/tin-tuc/moi-gioi-chung-khoan-doi/41152853) · [CafeF](https://cafef.vn/thu-nhap-giam-ky-luc-moi-gioi-chung-khoan-khoc-rong-188260710135807942.chn)
- Học phân tích: [Vietstock khóa BCTC](https://dichvu.vietstock.vn/dao-tao/khoa-hoc-online---doc-hieu-bao-cao-tai-chinh) · [DSC giáo trình](https://www.dsc.com.vn/kien-thuc/giao-trinh-phan-tich-bao-cao-tai-chinh) · [DNSE](https://www.dnse.com.vn/hoc/phan-tich-co-phieu) · [Finhay](https://www.finhay.com.vn/en/cach-doc-bao-cao-tai-chinh-de-phan-tich-chung-khoan) · [FireAnt](https://company.fireant.vn/) · [FireAnt cảnh báo](https://www.fireant.vn/Guide/Detail/262) · [seohot](https://seohot.vn/website-tai-chinh-chung-khoan/)
- Staff: [staffeng archetypes](https://staffeng.com/guides/staff-archetypes/) · [kanenarraway](https://kanenarraway.com/posts/getting-to-senior-staff-engineer/) · [GitLab](https://handbook.gitlab.com/handbook/people-group/promotion-document-style-guide/) · [DDIA 2e](https://www.oreilly.com/library/view/-/9781098119058) · [DesignGurus](https://www.designgurus.io/blog/best-system-design-interview-courses-2026) · [METR](https://scienceblog.com/t-a-randomized-trial-by-metr-found-that-experienced-developers-completed-real-coding-tasks-19-slower-when-allowed-to-use-ai-tools-yet-afterwards-they-estimated-on-average-that-ai-had-made-them-20-fast/)
- Đời sống & sức khỏe: [Morgen](https://www.morgen.so/blog-posts/shared-calendar-app-for-couple) · [Cupla](https://cupla.app/blog/best-shared-calendar-apps-for-couples-in-2026/) · [HVA](https://hva.vn/app-quan-ly-chi-tieu-cho-vo-chong-va-gia-dinh) · [CNN/JAMA](https://www.cnn.com/2024/01/25/health/effects-of-sitting-on-mortality-wellness) · [ACU](https://www.acu.edu.au/about-acu/news/2021/september/move-for-three-minutes-every-half-hour-to-counteract-effects-of-sitting) · [Western](https://news.westernu.ca/2023/09/study-finds-prescribed-work-breaks-can-counter-effects-of-sitting/) · [PubMed 20-20-20](https://pubmed.ncbi.nlm.nih.gov/36473088/) · [VNeID](https://congan.khanhhoa.gov.vn/vi/tich-hop-so-suc-khoe-dien-tu-tren-vneid-de-su-dung-thay-the-so-giay-khi-tham-gia-kham-chua-benh) · [YouMed](https://youmed.vn/)

> **Giới hạn:** Mình chưa xác nhận được trên tài liệu chính thức của VPS là SmartOne có tính năng cảnh báo giá. Công thức margin ở 3.2 là bản đơn giản hóa, phải đối chiếu với số trên SmartOne. Giá tool lấy từ trang chính thức khi có, còn lại là từ bài review. Các con số thời gian là mục tiêu, cần tự đo.
