# Bộ công cụ năng suất cho 2 vợ chồng: Nam (Backend) & Bell (Môi giới chứng khoán)

> Ngày: 2026-10-31 · Mục tiêu: hiểu công việc của từng người → rà công cụ có sẵn → đề xuất **bộ tool tối giản** cho công việc, tài chính gia đình và sức khỏe, sau đó xác định **công cụ nên tự build** (dùng cho nhà mình trước, có thể thành sản phẩm sau).
> Nguyên tắc: **ít tool, dùng sâu.** Mỗi việc chỉ 1 tool. Tool nào không dùng đủ 2 tuần thì bỏ.

---

## 0. Tóm tắt (đọc phần này là đủ)

| Ai | 3 thay đổi đáng làm nhất | Chi phí |
|---|---|---|
| **Bell** | (1) **Sổ khách hàng** có cột "lần liên hệ cuối / việc tiếp theo / tỷ lệ ký quỹ", nhắc việc tự động mỗi sáng. (2) **AI viết nháp bản tin sáng** theo mẫu cố định; Bell sửa và kiểm số trước khi gửi, tiết kiệm ước tính 30–45 phút/ngày. (3) **Cảnh báo giá/khối lượng** cho danh mục của khách (FireAnt hoặc app của công ty) thay vì canh bảng điện | 0–1,43 triệu/năm (FireAnt gói thấp nhất) |
| **Nam** | (1) **Brag doc** cập nhật mỗi thứ Sáu, viết theo khung năng lực của level mục tiêu. (2) **Mỗi tháng 1 design doc** (ở công ty hoặc dự án phụ) + đọc DDIA bản 2 (2/2026). (3) **Chặn 2 khung deep-work/tuần** trên lịch, dùng Claude Code có kỷ luật (viết spec trước, review kỹ) | ~0–2 triệu (sách + khóa system design nếu cần) |
| **Cả nhà** | (1) **Lịch chung** Google Calendar (miễn phí) có 3 lớp: Lịch Bell (giờ phiên cố định), Lịch Nam, Việc nhà/Sức khỏe. (2) **Sổ chi tiêu chung** MISA MoneyKeeper, kèm **ngân sách theo thu nhập sàn**, vì thu nhập của Bell biến động. (3) **Sức khỏe**: đứng dậy vận động 3 phút mỗi 30–45 phút, khám tổng quát hằng năm có hẹn sẵn trên lịch, sổ sức khỏe điện tử VNeID | 0đ |

**Nên tự build trước (dùng cho nhà mình):** **"Broker Copilot" mini** gồm sổ khách + nhắc chăm sóc + cảnh báo danh mục + nháp bản tin. Đúng sở trường backend của Nam, giải quyết đúng nỗi đau của Bell, và là ứng viên sản phẩm B2C cho môi giới. Xem mục 4.

**Cần 2 bạn trả lời để chốt** (mục 6): Bell làm ở công ty chứng khoán nào, công ty đã cấp CRM/app môi giới chưa, có quy định gì về Zalo/AI? Nam đang ở level nào, công ty có career ladder không?

---

## 1. Hiểu công việc

### 1.1 Bell: Môi giới chứng khoán (bối cảnh 10/2026)

**Nhịp một ngày** (theo giờ giao dịch sau khi chuyển sang hệ thống KRX: 9h–11h30, 13h–14h45, sau giờ 14h45–15h ([VFS](https://www.vfs.com.vn/he-thong-krx-la-gi))):

| Giờ | Việc | Pain point |
|---|---|---|
| 7h00–8h30 | Đọc tin vĩ mô/thế giới, báo cáo phân tích của công ty, soạn **bản tin sáng** gửi khách/nhóm Zalo | Tốn thời gian, lặp lại mỗi ngày, áp lực gửi sớm |
| 9h00–11h30 | Phiên sáng: nhận lệnh/tư vấn, theo dõi danh mục khách, trả lời Zalo liên tục | Canh nhiều mã cùng lúc; tin nhắn dồn dập |
| 11h30–13h00 | Nghỉ trưa (thường vẫn trả lời khách) | Không thật sự được nghỉ |
| 13h00–15h00 | Phiên chiều, ATC, sau giờ; **cảnh báo/call margin** khi thị trường giảm | Căng thẳng nhất ngày |
| 15h00–18h00 | Chăm sóc khách, tìm khách mới, báo cáo KPI nội bộ, học sản phẩm | Không có hệ thống nhắc "ai cần liên hệ hôm nay" |
| Tối | Trả lời Zalo, đọc thêm | Ranh giới công việc và gia đình mờ |

**KPI điển hình:** số tài khoản mới, giá trị giao dịch/phí của khách, dư nợ margin. Môi giới chịu áp lực doanh số tính trên phí giao dịch của khách ([CareerLink](https://www.careerlink.vn/cam-nang-viec-lam/tu-van-nghe-nghiep/moi-gioi-chung-khoan-lam-gi), [Cafef](https://cafef.vn/thi-truong-chung-khoan/cong-viec-hang-ngay-cua-moi-gioi-chung-khoan-ky-2-20150223094821838.chn)).

**Bối cảnh 2026, rất quan trọng:**

| Dữ kiện | Hệ quả cho Bell |
|---|---|
| Doanh thu môi giới toàn ngành Q3/2026 ~2.700 tỷ, **giảm > 60%** so với đỉnh ~7.000 tỷ ở Q3/2025 ([Vietstock](https://vietstock.vn/2026/10/loi-nhuan-mbs-buoc-lui-trong-quy-3-doanh-thu-mang-moi-gioi-giam-den-66-737-1502712.htm)) | Thu nhập theo hoa hồng giảm. Nhiều môi giới giảm **50–70%** thu nhập ([CafeF](https://cafef.vn/thu-nhap-giam-ky-luc-moi-gioi-chung-khoan-khoc-rong-188260710135807942.chn)) |
| Các công ty đua **phí 0 đồng** ([Stockbiz](https://stockbiz.vn/tin-tuc/moi-gioi-chung-khoan-doi/41152853)) | Giá trị của Bell chuyển từ "khớp lệnh" sang **tư vấn + giữ chân khách** |
| FTSE nâng hạng VN lên thị trường mới nổi thứ cấp, hiệu lực ~21/9/2026; KRX vận hành từ 5/5/2025; T0/bán khống đang trong lộ trình ([TheLeader](https://theleader.vn/he-thong-krx-va-ky-vong-nang-hang-chung-khoan-d45206.html), [VnEconomy](https://vneconomy.vn/chu-tich-vsdc-huong-toi-nang-cap-dung-luong-krx-phuc-vu-t0-ban-khong-ban-chung-khoan-cho-ve.htm)) | Có thêm sản phẩm mới phải học và giải thích cho khách; cơ hội nội dung giáo dục |
| CTCK dùng AI cho trợ lý chăm sóc khách và sản xuất bản tin ([Investing/Vietstock](https://vn.investing.com/news/stock-market-news/nha-dau-tu-chung-khoan-ngam-trai-dang-vi-tin-loi-ai-2735151)) | Bản tin "chung chung" bị AI hóa. Lợi thế của Bell là **cá nhân hóa theo danh mục từng khách** |

**Ranh giới bắt buộc (compliance):**
- Không đầu tư thay khách. Ủy thác chỉ qua hợp đồng với công ty, do người có chứng chỉ phân tích/quản lý quỹ phụ trách ([TT 121/2020](https://thuvienphapluat.vn/van-ban/Doanh-nghiep/Thong-tu-121-2020-TT-BTC-huong-dan-hoat-dong-cua-cong-ty-chung-khoan-453690.aspx)). **Mọi tool đề xuất chỉ để nhắc việc, phân tích và soạn nội dung, không bao giờ tự đặt lệnh.**
- Nội dung do AI viết phải được kiểm tra. Đã có trường hợp nhà đầu tư thua lỗ vì tin AI.
- Danh sách khách (tên, số điện thoại, NAV) là **dữ liệu cá nhân** theo Luật BVDLCN 91/2025 (hiệu lực 1/1/2026). Lưu trong tài khoản có bảo mật 2 lớp, không gửi số tài khoản/NAV thật vào AI công cộng. Ưu tiên công cụ công ty cho phép.

**Kết luận:** Năng suất của Bell bây giờ = **phục vụ được nhiều khách hơn trong mỗi giờ, đúng lúc, cá nhân hóa**. Tool giúp được ở 4 chỗ: nội dung, nhắc chăm sóc, cảnh báo danh mục, giữ ranh giới giờ nghỉ.

### 1.2 Nam: Senior SWE → Backend, đang target level up

**Level up từ Senior lên Staff/L6 nghĩa là gì** (tổng hợp, nên đối chiếu với ladder của công ty):

| Trục | Senior | Mục tiêu (Staff/L6) | Bằng chứng cần có |
|---|---|---|---|
| Phạm vi | Trong 1 team | **Vượt ranh giới team** ([kanenarraway](https://kanenarraway.com/posts/getting-to-senior-staff-engineer/)) | Design doc ảnh hưởng ≥ 2 team |
| Độ mơ hồ | Nhận bài toán rõ | Tự định nghĩa bài toán | RFC: vấn đề → phương án → trade-off |
| Kỹ thuật backend | Viết service tốt | Thiết kế hệ thống: dữ liệu, tính nhất quán, khả năng quan sát, chi phí | Postmortem, kế hoạch SLO, migration |
| Nhân lực | Review code | Mentor, nâng chuẩn cả nhóm | Người được mentor lên level |
| Hiển thị | Làm tốt là đủ | **Phải được nhìn thấy** | Brag doc, demo, viết nội bộ ([GitLab handbook](https://handbook.gitlab.com/handbook/people-group/promotion-document-style-guide/)) |

**Pain point thường gặp:** chuyển ngữ cảnh liên tục làm hỏng thời gian deep-work; học system design rời rạc; làm nhiều nhưng không ai thấy; dùng AI coding nhưng chưa đo được có nhanh hơn thật không. Một RCT năm 2025 của METR cho thấy dev giàu kinh nghiệm **chậm hơn 19%** khi dùng AI nhưng lại tưởng mình nhanh hơn 20%. METR nay coi kết quả này là của thế hệ tool cũ, và chưa có số đo tin cậy cho tool năm 2026 ([METR summary](https://scienceblog.com/t-a-randomized-trial-by-metr-found-that-experienced-developers-completed-real-coding-tasks-19-slower-when-allowed-to-use-ai-tools-yet-afterwards-they-estimated-on-average-that-ai-had-made-them-20-fast/), [DEV](https://dev.to/gabrielanhaia/metrs-ai-coding-speed-study-broke-too-many-developers-wouldnt-work-without-ai-5afm)). Bài học: **tự đo** bằng cách ghi thời gian các task có và không có AI trong 2 tuần.

### 1.3 Cuộc sống chung

| Chủ đề | Thực tế | Rủi ro |
|---|---|---|
| Lịch | Bell bị khóa cứng 9h–15h ngày giao dịch, tối còn khách nhắn; lịch Nam linh hoạt hơn | Ít thời gian chung chất lượng |
| Tài chính | Thu nhập Bell **biến động mạnh** (hoa hồng giảm 50–70% trong 2026) | Lập ngân sách theo tháng tốt nhất sẽ hụt ở tháng xấu |
| Sức khỏe | Cả 2 ngồi nhiều, nhìn màn hình cả ngày; Bell căng thẳng theo thị trường và nói nhiều | Người ngồi gần như suốt giờ làm có rủi ro tử vong cao hơn 16%; xen kẽ ngồi/đứng/vận động thì không thấy rủi ro tăng ([CNN/JAMA Netw Open 2024](https://www.cnn.com/2024/01/25/health/effects-of-sitting-on-mortality-wellness)) |

---

## 2. Rà công cụ có sẵn → đề xuất

### 2.1 Cho Bell

| Việc | Đề xuất | Giá | Vì sao / thay cho | Ưu tiên |
|---|---|---|---|---|
| Dữ liệu & bảng giá | **App/web của công ty chứng khoán** (bắt buộc, đã có) + **FireAnt gói Thiết yếu** | ~1.429.000đ/12 tháng ([FireAnt](https://company.fireant.vn/)) | FireAnt có **cảnh báo thời gian thực** theo giá, khối lượng đột biến, MA/RSI/MACD ([hướng dẫn](https://www.fireant.vn/Guide/Detail/262)) → hết phải canh bảng | P1 |
| Phân tích cơ bản | Vietstock Finance / Simplize (bản free trước) | Free → Pro | Lấy số liệu doanh nghiệp nhanh cho bản tin ([seohot](https://seohot.vn/website-tai-chinh-chung-khoan/)) | P2 |
| Biểu đồ | TradingView bản free | 0đ | Vẽ, lưu layout, chụp chart gửi khách | P3 |
| Nháp bản tin sáng | Claude/ChatGPT + **mẫu prompt cố định** (mục 3.1) | Gói ~$20/tháng (nếu chưa có) | Đọc 5 nguồn tin → nháp theo giọng của Bell → Bell sửa và **kiểm từng con số** | P1 |
| Đọc báo cáo phân tích PDF | NotebookLM (đưa báo cáo của công ty vào để hỏi) | 0đ | Hỏi "luận điểm chính, giá mục tiêu, rủi ro" trong 1 phút. **Chỉ dùng báo cáo công khai** | P2 |
| Sổ khách hàng / CRM | **CRM của công ty nếu có**; nếu chưa có thì Google Sheets (mẫu ở mục 3.2) | 0đ | Nhắc ai cần liên hệ hôm nay, ai đang gần ngưỡng margin, sinh nhật khách | P1 |
| Zalo | Gắn nhãn khách (VIP/Margin/Mới/Tiềm năng) + tin nhắn nhanh dựng sẵn | 0đ | Giảm thời gian gõ lặp | P1 |
| Giờ nghỉ | Chế độ Tập trung trên điện thoại sau 21h, chỉ cho phép khách nhãn VIP | 0đ | Giữ ranh giới, bảo vệ giấc ngủ | P2 |
| Ghi chú cuộc gọi | Ghi âm giọng nói → AI tóm tắt thành "khách muốn gì / việc tiếp theo" → dán vào sổ khách | 0đ | Không quên cam kết với khách. Kiểm tra quy định công ty về ghi âm | P3 |

### 2.2 Cho Nam

| Việc | Đề xuất | Giá | Ghi chú | Ưu tiên |
|---|---|---|---|---|
| Coding | **Claude Code** (đang dùng) + quy trình: spec → test → code → tự review diff | Gói hiện có | Đo thời gian 2 tuần để biết AI giúp ở loại task nào | P1 |
| Brag doc + ghi chú học | **Obsidian** (file markdown local, đưa lên git) hoặc Notion | 0đ | Mẫu ở mục 3.3; cập nhật mỗi thứ Sáu 15 phút | P1 |
| Nền tảng hệ thống | **DDIA bản 2** (Kleppmann & Riccomini, 2/2026) ([O'Reilly](https://www.oreilly.com/library/view/-/9781098119058)) | ~1 triệu | 1 chương/2 tuần + 1 trang tóm tắt | P1 |
| Luyện system design | Hello Interview (luyện có feedback) **hoặc** ByteByteGo (bao quát, nhiều hình) ([so sánh](https://www.designgurus.io/blog/best-system-design-interview-courses-2026)) | ~$79/năm (Hello Interview, giá khuyến mãi) | Chỉ mua 1 cái. Hữu ích cả khi phỏng vấn lẫn khi viết RFC ở công ty | P2 |
| Ghi nhớ | Anki: thẻ cho khái niệm (isolation level, consistency, back-pressure…) | 0đ | 10 phút/ngày, làm lúc đi đường | P3 |
| Deep-work | 2 khung 3 giờ/tuần trên Google Calendar, Slack chuyển sang trạng thái "Focus" | 0đ | Nên trùng giờ phiên của Bell để tối 2 vợ chồng có thời gian chung | P1 |

### 2.3 Cả nhà: lịch, tài chính, sức khỏe

| Việc | Đề xuất | Giá | Vì sao | Ưu tiên |
|---|---|---|---|---|
| Lịch chung | **Google Calendar** chia sẻ (miễn phí, đủ dùng cho đa số cặp đôi) ([Morgen](https://www.morgen.so/blog-posts/shared-calendar-app-for-couple)). Chỉ chuyển sang TimeTree nếu muốn bình luận trên từng sự kiện | 0đ (TimeTree Premium ~$44,99/năm) | 3 lịch: `Bell-Phiên`, `Nam-Focus`, `Nhà & Sức khỏe` | P1 |
| Việc nhà / mua sắm | Google Keep **hoặc** Apple Reminders, danh sách chung | 0đ | TimeTree yếu ở phần to-do ([Cupla](https://cupla.app/blog/best-shared-calendar-apps-for-couples-in-2026/)) | P1 |
| Chi tiêu | **MISA MoneyKeeper** (nhiều người dùng chung 1 sổ, xuất Excel) hoặc Money Lover (ví chung, Premium ~199k/năm) ([HVA](https://hva.vn/app-quan-ly-chi-tieu-cho-vo-chong-va-gia-dinh), [MoMo](https://www.momo.vn/blog/ung-dung-quan-ly-tai-chinh-ca-nhan-pho-bien-nhat-c103dt2282)) | 0đ | Kiểm lại tính năng chia sẻ trên store trước khi chọn | P1 |
| Quy tắc tài chính | **Ngân sách theo thu nhập sàn**: chi tiêu cố định ≤ lương cứng của Nam + phần thu nhập thấp nhất của Bell; hoa hồng vượt mức chuyển vào quỹ dự phòng và đầu tư | 0đ | Chống tháng xấu của thị trường | P1 |
| Khám bệnh | **Sổ sức khỏe điện tử trên VNeID** (cần định danh mức 2, dùng được ở mọi cơ sở y tế có phép theo QĐ 31/QĐ-BYT) ([CA Khánh Hòa](https://congan.khanhhoa.gov.vn/vi/tich-hop-so-suc-khoe-dien-tu-tren-vneid-de-su-dung-thay-the-so-giay-khi-tham-gia-kham-chua-benh)) + **YouMed** đặt lịch, đặt giúp người thân ([App Store](https://apps.apple.com/us/app/youmed-%E1%BB%A9ng-d%E1%BB%A5ng-%C4%91%E1%BA%B7t-kh%C3%A1m/id1466077723)) | 0đ | Khám tổng quát hằng năm, đặt sẵn vào lịch `Nhà & Sức khỏe` | P2 |
| Ngồi nhiều | Nhắc **vận động 3 phút mỗi 30–45 phút** (đồng hồ hoặc app nhắc) ([ACU 2021](https://www.acu.edu.au/about-acu/news/2021/september/move-for-three-minutes-every-half-hour-to-counteract-effects-of-sitting), [Western 2023](https://news.westernu.ca/2023/09/study-finds-prescribed-work-breaks-can-counter-effects-of-sitting/)) | 0đ | Bell: tranh thủ giờ nghỉ trưa và sau 15h. Nam: giữa các pomodoro | P1 |
| Mắt | Quy tắc 20-20-20 **có bật nhắc tự động**: hiệu quả chỉ kéo dài khi còn nhắc, bằng chứng còn lẫn lộn ([Optometry Advisor](https://www.optometryadvisor.com/features/digital-eye-strain-may-not-be-solved-by-the-20-20-20-rule/), [PubMed](https://pubmed.ncbi.nlm.nih.gov/36473088/)) + chỉnh độ sáng/cỡ chữ + khám mắt định kỳ | 0đ | Chi phí thấp, tác dụng phụ bằng 0, nên vẫn làm | P2 |
| Sức khỏe tổng | Apple Health / Google Health Connect: theo dõi **giấc ngủ + số bước** | 0đ | Nhìn xu hướng theo tuần, không cần tối ưu từng ngày | P3 |

---

## 3. Mẫu dùng ngay

### 3.1 Prompt bản tin sáng cho Bell (dán vào Claude/ChatGPT)

```
Bạn là trợ lý soạn bản tin sáng cho môi giới chứng khoán VN. Giọng: ngắn, thân thiện, xưng "em" với khách.
Đầu vào (tôi dán bên dưới): [tin thế giới] [tin vĩ mô VN] [tóm tắt báo cáo nội bộ] [diễn biến phiên hôm qua].
Đầu ra đúng 5 phần, tổng ≤ 200 chữ:
1) Thị trường hôm qua (1 câu, có số điểm VN-Index tôi cung cấp, KHÔNG tự bịa số)
2) 3 tin đáng chú ý + tác động tới nhóm ngành
3) Nhóm ngành/mã cần theo dõi hôm nay (chỉ lấy từ báo cáo tôi dán)
4) Rủi ro cần lưu ý
5) Câu kết nhắc khách quản trị rủi ro
Đánh dấu [CẦN KIỂM] cạnh mọi con số. Không khuyến nghị mua/bán cụ thể. Không hứa lợi nhuận.
```

### 3.2 Sổ khách hàng (Google Sheets) cho Bell

| Cột | Ví dụ | Công thức / quy tắc |
|---|---|---|
| Mã khách (không ghi số TK thật) | KH-023 | Bảo vệ dữ liệu cá nhân |
| Nhãn | VIP / Margin / Mới / Tiềm năng | Khớp với nhãn trên Zalo |
| Khẩu vị rủi ro | Thấp/TB/Cao | Lấy từ hồ sơ KYC |
| Mã đang nắm | HPG, FPT | Dùng cho cảnh báo |
| Tỷ lệ ký quỹ (nhập tay) | 42% | Tô đỏ nếu < ngưỡng công ty |
| Liên hệ lần cuối | 2026-10-20 | |
| Việc tiếp theo + hạn | Gửi báo cáo FPT, 11/02 | |
| **Cần liên hệ hôm nay?** | ✅ | `=OR(hạn<=TODAY(), TODAY()-lần_cuối>14)` |

Lọc cột "Cần liên hệ hôm nay" lúc 8h sáng là có ngay danh sách gọi trong ngày.

### 3.3 Brag doc cho Nam (mỗi thứ Sáu, 15 phút)

```
## Tuần YYYY-WW
- Impact (số liệu): p99 latency 450→180ms ở service X; giảm 30% chi phí DB
- Vượt team: RFC "event outbox" được team A, B áp dụng
- Mơ hồ → rõ: tự đề xuất migration plan cho …
- Nâng người khác: pair 2 buổi với … ; review 12 PR
- Học: DDIA ch.7 (transactions) → note link
- Ghi chú cho buổi 1:1: …
```

---

## 4. Nên tự build gì (dùng cho nhà mình trước)

| # | Công cụ | Giải quyết | Độ khó với Nam | Có thể thành sản phẩm? |
|---|---|---|---|---|
| **1** | **Broker Copilot mini**: Sheets làm database + backend nhỏ (Python) + bot Telegram/Zalo gửi Bell lúc **8h**: danh sách khách cần liên hệ, mã trong danh mục khách có biến động/tin mới, nháp bản tin | 3 pain lớn nhất của Bell | Thấp–TB (cron + API giá + LLM). Có repo cảnh báo giá qua Sheets/Telegram để tham khảo ([GitHub](https://github.com/huy01197/telegram-stock-bot), [leanhkhoa](https://leanhkhoa.com/projects/p3/)) | **Có.** Mọi môi giới đều có pain này, và đang cần tăng năng suất khi thu nhập giảm. Rủi ro: WTP thấp vì đang "đói", CTCK có thể tự làm cho nhân viên. Nên **dùng thử với Bell 4 tuần**, rồi cho 5 đồng nghiệp dùng, sau đó mới tính |
| 2 | **Family finance dashboard**: kéo dữ liệu từ MoneyKeeper hoặc sao kê → tính "thu nhập sàn", quỹ dự phòng đủ mấy tháng | Ngân sách khi thu nhập biến động | Thấp | Có thể nối với StatementKit (memo trước) |
| 3 | **Bảng đo năng suất AI coding**: log thời gian task (có/không AI) → biết dùng AI ở đâu là hiệu quả | Câu hỏi "AI có làm mình nhanh hơn không" | Thấp | Làm nội dung blog/brag doc tốt, ít giá trị sản phẩm |

**Ràng buộc khi build #1:** không lưu số tài khoản/NAV thật trên server cá nhân; mã khách giả; dữ liệu giá lấy từ nguồn công khai, đọc kỹ điều khoản của nguồn; **bot chỉ nhắc việc, không đặt lệnh**; hỏi trước compliance của công ty Bell.

---

## 5. Kế hoạch 30 ngày

| Tuần | Bell | Nam | Cả nhà |
|---|---|---|---|
| 1 | Gắn nhãn khách trên Zalo; tạo 10 tin nhắn nhanh; dùng thử prompt bản tin 5 ngày, ghi số phút tiết kiệm | Viết brag doc từ đầu năm tới nay; chặn 2 khung focus | Tạo 3 lịch chung; chọn MoneyKeeper hoặc Money Lover; nhập 1 tháng chi tiêu |
| 2 | Lập sổ khách (mục 3.2); bật cảnh báo FireAnt/app công ty cho các mã của khách VIP | Đọc DDIA chương 1–2; bắt đầu log thời gian task có/không AI | Tính "thu nhập sàn"; đặt quy tắc phần vượt mức đi đâu |
| 3 | Đánh giá: tiết kiệm được bao nhiêu phút/ngày? Bỏ tool nào không dùng | Nhận 1 việc vượt team → viết RFC | Đặt lịch khám tổng quát; kích hoạt sổ sức khỏe VNeID |
| 4 | Cùng Nam spec **Broker Copilot v0** từ dữ liệu 3 tuần | Build v0 (1 cuối tuần): bot gửi danh sách 8h | Review tháng 15 phút: tài chính, lịch, sức khỏe |

**Chỉ số theo dõi:** Bell tiết kiệm ≥ 45 phút/ngày và không bỏ sót khách cần liên hệ; Nam có ≥ 4 mục brag/tháng có số liệu và 1 RFC/tháng; nhà mình có quỹ dự phòng đạt mục tiêu số tháng, vận động ≥ 5 ngày/tuần.

---

## 6. Câu hỏi để chốt (trả lời là mình chỉnh lại toolkit)

1. Bell làm ở CTCK nào? Công ty đã cấp **CRM/app cho môi giới** chưa? Có quy định gì về dùng **Zalo, ghi âm, AI** với khách?
2. Bell quản lý khoảng bao nhiêu khách đang hoạt động? Bao nhiêu % dùng margin? Đang gửi bản tin qua kênh nào (Zalo nhóm, 1-1, Telegram)?
3. Nam đang ở level nào và target level gì? Công ty có career ladder viết thành văn bản không? Stack backend chính là gì?
4. Hai bạn dùng iPhone hay Android (để chọn Apple hay Google cho lịch/nhắc việc)?
5. Có ai đang có vấn đề sức khỏe cụ thể (lưng, mắt, giọng, giấc ngủ) cần ưu tiên không?

---

## 7. Nguồn

- Nghề môi giới: [CareerLink](https://www.careerlink.vn/cam-nang-viec-lam/tu-van-nghe-nghiep/moi-gioi-chung-khoan-lam-gi) · [Cafef](https://cafef.vn/thi-truong-chung-khoan/cong-viec-hang-ngay-cua-moi-gioi-chung-khoan-ky-2-20150223094821838.chn) · [Vietstock Q3/2026](https://vietstock.vn/2026/10/loi-nhuan-mbs-buoc-lui-trong-quy-3-doanh-thu-mang-moi-gioi-giam-den-66-737-1502712.htm) · [CafeF 7/2026](https://cafef.vn/thu-nhap-giam-ky-luc-moi-gioi-chung-khoan-khoc-rong-188260710135807942.chn) · [Stockbiz](https://stockbiz.vn/tin-tuc/moi-gioi-chung-khoan-doi/41152853) · [Người Quan Sát](https://nguoiquansat.vn/ty-trong-doanh-thu-moi-gioi-quy-ii-2026-thap-ky-luc-hang-chuc-cong-ty-chung-khoan-gong-lo-mang-moi-gioi-312770.html)
- Thị trường: [VFS – KRX](https://www.vfs.com.vn/he-thong-krx-la-gi) · [TheLeader](https://theleader.vn/he-thong-krx-va-ky-vong-nang-hang-chung-khoan-d45206.html) · [VnEconomy](https://vneconomy.vn/chu-tich-vsdc-huong-toi-nang-cap-dung-luong-krx-phuc-vu-t0-ban-khong-ban-chung-khoan-cho-ve.htm)
- Pháp lý: [TT 121/2020](https://thuvienphapluat.vn/van-ban/Doanh-nghiep/Thong-tu-121-2020-TT-BTC-huong-dan-hoat-dong-cua-cong-ty-chung-khoan-453690.aspx) · AI trong CTCK: [Investing/Vietstock](https://vn.investing.com/news/stock-market-news/nha-dau-tu-chung-khoan-ngam-trai-dang-vi-tin-loi-ai-2735151) · [Robusta](https://robusta.vn/vi/chuong-trinh-dao-tao/ung-dung-genai/ai-theo-nganh/ung-dung-generative-ai-vao-cong-viec-moi-gioi-van-hanh-chung-khoan)
- Tool chứng khoán: [FireAnt](https://company.fireant.vn/) · [FireAnt cảnh báo](https://www.fireant.vn/Guide/Detail/262) · [Fialda](https://fialda.com/pricing) · [seohot](https://seohot.vn/website-tai-chinh-chung-khoan/)
- Backend/level up: [DDIA 2e](https://www.oreilly.com/library/view/-/9781098119058) · [kanenarraway](https://kanenarraway.com/posts/getting-to-senior-staff-engineer/) · [GitLab](https://handbook.gitlab.com/handbook/people-group/promotion-document-style-guide/) · [DesignGurus](https://www.designgurus.io/blog/best-system-design-interview-courses-2026) · [METR](https://scienceblog.com/t-a-randomized-trial-by-metr-found-that-experienced-developers-completed-real-coding-tasks-19-slower-when-allowed-to-use-ai-tools-yet-afterwards-they-estimated-on-average-that-ai-had-made-them-20-fast/)
- Đời sống: [Morgen](https://www.morgen.so/blog-posts/shared-calendar-app-for-couple) · [Cupla](https://cupla.app/blog/best-shared-calendar-apps-for-couples-in-2026/) · [HVA](https://hva.vn/app-quan-ly-chi-tieu-cho-vo-chong-va-gia-dinh) · [MoMo](https://www.momo.vn/blog/ung-dung-quan-ly-tai-chinh-ca-nhan-pho-bien-nhat-c103dt2282)
- Sức khỏe: [CNN/JAMA 2024](https://www.cnn.com/2024/01/25/health/effects-of-sitting-on-mortality-wellness) · [ACU](https://www.acu.edu.au/about-acu/news/2021/september/move-for-three-minutes-every-half-hour-to-counteract-effects-of-sitting) · [Western](https://news.westernu.ca/2023/09/study-finds-prescribed-work-breaks-can-counter-effects-of-sitting/) · [PubMed 20-20-20](https://pubmed.ncbi.nlm.nih.gov/36473088/) · [VNeID sổ sức khỏe](https://congan.khanhhoa.gov.vn/vi/tich-hop-so-suc-khoe-dien-tu-tren-vneid-de-su-dung-thay-the-so-giay-khi-tham-gia-kham-chua-benh) · [YouMed](https://youmed.vn/)

> **Giới hạn:** Mình chưa biết công ty của Bell và level của Nam, nên toolkit đang ở dạng mặc định hợp lý. Giá tool lấy từ trang chính thức khi có, còn lại là từ bài review, cần kiểm lại trên store. Các số liệu thời gian tiết kiệm là **ước tính**, cần đo trong 2 tuần đầu.
