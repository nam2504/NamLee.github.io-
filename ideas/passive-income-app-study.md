# Passive-income app study: memo của startup studio 6 vai

> Ngày: 2026-10-03 · Người đọc: founder (dev VN solo, mạnh backend, frontend vibe-code bằng Claude Code)
> Vai: **CEO** (chiến lược) · **MR** (Market Research) · **PM** · **TL** (Tech Lead) · **GM** (Growth) · **CFO** (Risk)
> Đầu vào: `ideas/app-ideas-backlog.md` và `ideas/merge-mutant-lab-analysis.md`. Hai file này nằm trên nhánh `claude/github-repo-creation-b8ibnv`, chưa có trên nhánh này.

---

## 0. Tóm tắt 1 trang

| | |
|---|---|
| **Ý tưởng được chọn** | **StatementKit**: chuyển sao kê ngân hàng PDF → Excel/CSV/QBO/file import MISA. Số liệu được **tự kiểm tra bằng số dư** (số dư đầu + tổng giao dịch = số dư cuối). Sao kê dạng text được **xử lý ngay trên trình duyệt**, file không rời máy người dùng. Làm 2 bản: bản VN (ngân hàng Việt, VietQR) và bản quốc tế (ngân hàng SEA trước, rồi mở dần) |
| **Vì sao** | (1) Cầu đã được chứng minh: Bank Statement Converter do 1 người làm đạt **~$38K MRR**; "Your Bank Statement Converter" có **$126K doanh thu 12 tháng**, đã xác minh trên TrustMRR. (2) Giá trị nằm ở **logic parse + đối soát**, không cần art hay content. Đúng sở trường backend. (3) Kênh 0đ rõ: SEO theo cụm "[tên ngân hàng] statement to Excel", Google Workspace Marketplace, group kế toán. (4) MVP ≤ 4 tuần |
| **Vì sao không chọn 2 ý tưởng kia** | Hóa đơn XML (B): khách VN trả ít và đã có tool miễn phí của Cục Thuế. Ý tưởng này giữ lại làm **module mở rộng** của StatementKit cho kế toán VN. Rendering API (C): thụ động nhất nhưng mất **~3 năm mới đạt $10K MRR** (đối chứng ScreenshotOne), lại cạnh tranh trực tiếp với Cloudflare |
| **Trung thực về "thụ động"** | Không thụ động 100%. Ngân hàng đổi mẫu PDF thì parser hỏng, mất ~1–3 giờ/tuần sửa template, cộng 1 giờ/tuần trả lời email. Mục tiêu ≤ 5 giờ/tuần sau 12 tháng là **khả thi nếu** có test hồi quy trên bộ PDF mẫu và dùng LLM làm phương án dự phòng |
| **Kỳ vọng tài chính** (ước tính, 12 tháng sau launch) | MRR tháng 12: xấu ~$270 · cơ sở ~$1.450 · tốt ~$3.800. Hòa vốn tiền mặt: tháng 3–5. Vốn cần: **~2–4 triệu VNĐ** |
| **Tiêu chí KILL** | Sau 2 tuần validation: < 100 email waitlist **hoặc** < 5 người trả tiền trước → không code. Sau 30 ngày launch: < 300 signup **hoặc** < 5 khách trả tiền → dừng. Sau 90 ngày: MRR < $300 → pivot sang B |

**Việc cần làm tuần này** (≈ 30 giờ):
1. (4h) Gom 30 mẫu sao kê PDF từ 10 ngân hàng (VCB, TCB, MB, ACB, BIDV, VPB, TPBank + 3 ngân hàng TH/ID/PH), xin của chính mình và bạn bè, **xóa thông tin cá nhân trước khi lưu**. Chạy thử 5 đối thủ trên bộ mẫu này, ghi tỷ lệ đúng → có ngay bằng chứng cho khoảng trống "ngân hàng SEA/VN".
2. (3h) Lấy lượng tìm kiếm từ Google Keyword Planner cho 40 từ khóa ("bank statement converter", "[bank] statement to excel", "chuyển sao kê sang excel"…).
3. (6h) Dựng landing page 2 ngôn ngữ (VN/EN), cụ thể ở mục 4.2, gồm waitlist và nút "Gửi file, nhận Excel trong 24 giờ" (concierge, xử lý bằng tay).
4. (4h) Đăng vào 5 group kế toán VN, r/bookkeeping (đọc kỹ luật self-promo), Indie Hackers.
5. (2h) Mở tài khoản Polar hoặc Creem (cả 2 hỗ trợ người bán ở VN) và SePay (VietQR) để nhận tiền đặt trước.
6. Phần còn lại: tự làm concierge bằng script Python, đây cũng là prototype của parser.

---

## 1. Ràng buộc & giả định

| Hạng mục | Giá trị | Ghi chú |
|---|---|---|
| Thời gian | 30 giờ/tuần, vibe-code | |
| Vốn | 1–10 triệu VNĐ ≈ $40–385 | Tỷ giá ước tính 26.000 VNĐ/USD |
| Thị trường | VN + quốc tế | |
| Doanh thu mục tiêu | **Founder chưa điền.** Memo này giả định sàn **$1.000 MRR** sau 12 tháng, mục tiêu cao $3.000 | Cần founder xác nhận |
| Vận hành sau 12 tháng | ≤ 5 giờ/tuần | |
| Loại trừ | Sản phẩm sống nhờ art, nhân vật, content sáng tạo liên tục | Bài học từ Merge Mutant Lab |
| Đã loại ở backlog (không lặp lại) | Quản lý nhà trọ, trợ lý xe, theo dõi giá Shopee, đặt lịch salon, review trọ, "Tôi ổn", gross-net, sổ HKD, chấm công/tích điểm qua Zalo, địa chỉ sáp nhập, tra HS code, toàn bộ nhóm game và app tiêu dùng cần content | 2 ý tưởng backlog chấm cao nhưng **chưa bị loại** là sao kê và XML hóa đơn. Memo này đưa lại cả hai vì có **lý do mới**: bằng chứng doanh thu toàn cầu, và hướng xử lý trên trình duyệt |

---

## 2. Giai đoạn 1: Tìm (diverge), 20 ý tưởng

Nguồn: **(a)** SaaS nước ngoài có doanh thu · **(b)** thread than phiền/"wish" · **(c)** extension/plugin · **(d)** micro-SaaS SME VN · **(e)** API/data

| # | Nguồn | Ý tưởng (1 câu) | Ai trả tiền | Vì sao trả | Đối thủ có doanh thu (bằng chứng) |
|---|---|---|---|---|---|
| 1 | a | **Sao kê PDF → Excel/QBO/MISA**, tự đối soát số dư, có ngân hàng VN + SEA | Kế toán, bookkeeper, người làm hồ sơ vay/visa | Đỡ phải gõ tay hàng trăm dòng; phần mềm kế toán chỉ nhận CSV/OFX | Bank Statement Converter ~$38K MRR, 1 founder ([Superframeworks](https://superframeworks.com/blog/bankconverter)); Your Bank Statement Converter $126K/12 tháng ([TrustMRR](https://trustmrr.com/startup/your-bank-statement-converter)) |
| 2 | a | Status page + uptime cho SaaS | Dev, startup | Báo sự cố cho khách mà không phải tự dựng | Instatus ~$50K MRR, 1 founder ([HighSignal](https://www.highsignal.io/50k-mrr-for-uptime-monitor/)) |
| 3 | a | Form builder thu tiền bằng VietQR (Tally bản VN) | Lớp học, sự kiện, CLB | Google Forms không thu được tiền | Tally $4M ARR ([blog Tally](https://blog.tally.so/how-we-grew-tally-to-4m-arr-fully-bootstrapped/)) |
| 4 | a | Widget feedback, roadmap, changelog | SaaS nhỏ | Gom và ưu tiên feature request | Canny ~$3,4M ARR, bootstrapped ([yespress](https://yespress.io/canny)) |
| 5 | b | Giám sát cron job/heartbeat | Dev, DevOps | Biết ngay khi job chạy ngầm bị chết | Healthchecks.io ~$26K MRR, 1 người ([blog](https://blog.healthchecks.io/2024/07/running-one-man-saas-9-years-in/)); Cronitor $2/monitor ([pricing](https://cronitor.io/pricing)) |
| 6 | b | Giám sát báo cáo DMARC cho SME/agency | Agency email, SME gửi email nhiều | Microsoft chặn mail thiếu SPF/DKIM/DMARC từ 5/2025, Google/Yahoo từ 2/2024 ([dmarcian](https://dmarcian.com/microsoft-enforces-spf-dkim-dmarc/)) | EasyDMARC $35,99–89,99/tháng ([DMARCguard](https://dmarcguard.io/compare/easydmarc/)); dmarcian từ $19,99/tháng |
| 7 | b | Theo dõi thay đổi trang web (giá, tin tuyển dụng, văn bản) | Marketer, procurement, người săn hàng | Không phải tự F5 | Visualping, Distill ([G2](https://www.g2.com/products/visualping/competitors/alternatives)); changedetection.io mã nguồn mở |
| 8 | b | API chụp màn hình/render web cho dev và AI agent (có MCP) | Dev, sản phẩm AI agent | Tự vận hành Chromium rất cực | ScreenshotOne ~$36K MRR, 1 founder ([X](https://x.com/DmytroKrasun/status/2104570564006277204)) |
| 9 | b | API HTML → PDF (hóa đơn, báo cáo) | Dev SaaS | Tự chạy wkhtml/Chromium dễ lỗi font, tốn RAM | PDFShift ~$8,5K MRR ([Latka](https://getlatka.com/companies/pdfshift.io)); DocRaptor từ ~$44/tháng |
| 10 | c | Google Sheets add-on cho kế toán VN: `=MST()`, `=DOCSO()`, `=VIETQR()`, tỷ giá, nhập XML hóa đơn | Kế toán SME | Đỡ copy-paste, gom việc vào 1 chỗ | Notion2Sheets ~$5K MRR, BudgetSheet $1,6K MRR ([IH](https://www.indiehackers.com/post/how-i-built-a-google-sheets-extension-making-1-6k-mrr-b42d845e6a), [FounderClub](https://www.founderclub.com/notion2sheets/)) |
| 11 | c | Plugin WooCommerce tự xác nhận thanh toán VietQR | Shop WordPress | Bỏ khâu đối soát tay | SePay có plugin, gói 99k/tháng ([SePay](https://sepay.vn/bang-gia.html)) |
| 12 | c | Shopify app thuần logic (gắn tag đơn, tự động hóa đơn hàng) cho thị trường toàn cầu | Merchant Shopify | Tiết kiệm thao tác | Median app < $1K MRR; chỉ 4,6% đạt $10K ([WeekOneLabs](https://weekonelabs.com/blog/shopify-app-revenue-benchmarks-2026/)) |
| 13 | c | Chrome extension tải hàng loạt hóa đơn từ cổng hoadondientu.gdt.gov.vn | Kế toán | Cổng thuế tải từng hóa đơn một | taihoadon.online thu phí (theo backlog đợt 2) |
| 14 | c | Zalo Mini App menu QR, gọi món tại bàn | Quán ăn nhỏ | Giảm nhân viên chạy bàn | iPOS, KiotViet; Zalo hạn chế quảng cáo (backlog) |
| 15 | d | **XML hóa đơn → bảng kê + kiểm tra hợp lệ + đối chiếu với sao kê** | Kế toán SME/dịch vụ | Việc lặp lại hằng tháng; 20,89 tỷ hóa đơn trên hệ thống ([Người Quan Sát](https://nguoiquansat.vn/gan-21-ty-hoa-don-163-trieu-tai-khoan-ngan-hang-va-478-san-thuong-mai-dien-tu-mat-luoi-du-lieu-giup-nganh-thue-thu-ngan-sach-ky-luc-310933.html)) | iTaxViewer miễn phí; taihoadon.online, MISA, iHOADON |
| 16 | d | Săn gói thầu giá rẻ cho nhà thầu nhỏ, AI chấm độ phù hợp, báo qua Zalo | 220.360 nhà thầu đã đăng ký ([Dân trí](https://dantri.com.vn/cong-nghe/dau-thau-qua-mang-2025-nam-tang-toc-cua-cai-cach-minh-bach-hieu-qua-dau-tu-cong-20251227230824772.htm)) | Bỏ lỡ gói thầu là mất hợp đồng | DauThau.info VIP1 17,5 triệu/năm ([DauThau](https://dauthau.asia/news/tin-tuc/dauthau-info-ap-dung-bang-gia-moi-1628.html)), 20.000 DN dùng |
| 17 | d | Nhắc công nợ B2B tự động (email/ZNS + VietQR + webhook tự gạch nợ) | Nhà phân phối, đại lý | Thu tiền nhanh hơn, đỡ gọi điện | MISA AMIS, Casso/SePay chỉ làm phần webhook |
| 18 | d | Đối soát COD (file GHN/GHTK/J&T so với đơn hàng) | Shop online | Bị hãng vận chuyển trả thiếu tiền COD mà không biết | Nhanh.vn, Haravan, phần đối soát có sẵn của hãng |
| 19 | e | API dữ liệu DN VN (MST, trạng thái, ngân hàng) + MCP cho AI agent | Dev fintech/HR/e-invoice | API MST của VietQR **ngừng từ 1/3/2027** ([VietQR](https://www.vietqr.io/en/danh-sach-api/tax-id-lookup/)) | Xinvoice tiếp quản và miễn phí ([Xinvoice](https://xinvoice.vn/apis/tra-cuu-ma-so-thue/)) |
| 20 | e | API giá vàng/tỷ giá VN | Dev app tài chính | Dữ liệu sạch, ổn định | vang.today, VNAppMob đều miễn phí ([vang.today](https://www.vang.today/en/api)) |

---

## 3. Giai đoạn 2: Lọc (scorecard có trọng số)

Trọng số: Cầu ×3 · Kỹ năng ×2 · Thụ động ×3 · Kênh ×2 · MVP ≤ 6 tuần ×2 · An toàn ×2. Điểm tối đa **70**. Điểm từng ô là **đánh giá định tính** của cả nhóm dựa trên bằng chứng ở mục 2.

| Hạng | # | Ý tưởng | Cầu | KN | TĐ | Kênh | MVP | AT | **Tổng** | Lý do chính |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 1 | Sao kê PDF → Excel | 5 | 5 | 4 | 4 | 5 | 3 | **61** | 2 đối thủ indie có doanh thu xác minh; parse là việc backend thuần |
| 2 | 15 | XML hóa đơn + đối chiếu | 4 | 5 | 4 | 4 | 5 | 3 | **58** | Việc hằng tháng, nhưng tool nhà nước miễn phí kéo giá xuống |
| 3 | 8 | Render/screenshot API (+PDF, MCP) | 4 | 5 | 4 | 3 | 5 | 3 | **56** | Thụ động cao; kênh dev SEO + thư mục MCP; tăng trưởng chậm |
| 4 | 9 | HTML → PDF API | 4 | 5 | 4 | 3 | 5 | 3 | 56 | Gộp vào #8 khi phân tích sâu |
| 5 | 5 | Cron/heartbeat monitor | 4 | 5 | 5 | 2 | 5 | 2 | 55 | Năm 2026 có quá nhiều bản clone (quietpulse, cronsignal…) ([dev.to](https://dev.to/quietpulse-social/the-best-cron-monitoring-tools-in-2026-honest-comparison-4bfl)) |
| 6 | 6 | DMARC monitor | 4 | 5 | 4 | 3 | 4 | 3 | 54 | Hàng chục vendor; SME VN ít quan tâm |
| 7 | 10 | Sheets add-on kế toán VN | 3 | 4 | 4 | 4 | 5 | 3 | 53 | Kênh tốt, nhưng khách VN khó trả phí add-on |
| 8 | 7 | Theo dõi thay đổi web | 4 | 5 | 3 | 3 | 5 | 2 | 51 | Scraper hay hỏng; đã có bản mã nguồn mở miễn phí |
| 9 | 13 | Extension tải hóa đơn GDT | 4 | 4 | 3 | 4 | 5 | 2 | 51 | Phụ thuộc captcha và điều khoản của cổng thuế |
| 10 | 19 | API dữ liệu DN VN + MCP | 3 | 5 | 4 | 3 | 5 | 2 | 51 | Xinvoice miễn phí lấp đúng khoảng trống |
| 11 | 16 | Săn gói thầu giá rẻ | 5 | 5 | 3 | 3 | 4 | 1 | 50 | **Bộ cấm crawl tự động** ([nguồn](https://dauthau.net/en/bids/bidding/Thue-copy-du-lieu-tu-He-thong-mang-dau-thau-quoc-gia-de-cung-cap-cho-phan-mem-san-thong-tin-thau-DauThau-info-TB210583571-02.html)); DauThau.info từng bị yêu cầu đóng cửa ([Công lý](https://congly.vn/dauthau-info-bi-co-quan-chuc-nang-yeu-cau-dong-cua-183335.html)) |
| 12 | 2 | Status page | 3 | 5 | 4 | 2 | 5 | 2 | 49 | Bão hòa; SME VN không cần |
| 13 | 17 | Nhắc công nợ B2B | 3 | 5 | 3 | 2 | 4 | 3 | 46 | Phải bán trực tiếp, nhiều support |
| 14 | 18 | Đối soát COD | 3 | 5 | 3 | 3 | 4 | 2 | 46 | File của hãng vận chuyển hay đổi; ERP đa kênh đã có sẵn |
| 15 | 20 | API giá vàng | 2 | 5 | 4 | 2 | 5 | 2 | 46 | Đối thủ miễn phí, nguồn dữ liệu thuộc bên khác |
| 16 | 12 | Shopify app | 4 | 3 | 2 | 4 | 4 | 2 | 44 | Support nặng; median < $1K MRR |
| 17 | 11 | Plugin Woo VietQR | 3 | 4 | 3 | 3 | 5 | 1 | 44 | SePay đã làm |
| 18 | 4 | Feedback widget | 3 | 3 | 4 | 2 | 4 | 2 | 43 | Thị trường đỏ, nặng frontend |
| 19 | 3 | Form + VietQR | 3 | 3 | 3 | 3 | 3 | 3 | 42 | Nặng frontend, phải đấu với Google Forms miễn phí |
| 20 | 14 | Zalo Mini App QR menu | 3 | 3 | 2 | 3 | 3 | 2 | 37 | Support nhiều, nhiều POS đã làm |

**Top 3 đem phân tích sâu:** **A** = #1 Sao kê (StatementKit) · **B** = #15 XML hóa đơn + đối chiếu (HóaĐơnKit) · **C** = #8 + #9 Render API (screenshot + PDF + MCP).

> **Phản biện chéo.** CFO: "#1 có điểm An toàn 3 là còn rộng tay. Năm 2026 thị trường converter đầy clone, lại thêm ChatGPT." MR: "Đúng là đông. Nhưng ChatGPT đếm sai tổng **3/5 lần** với sao kê ~200 giao dịch ([mybankstatementanalysis](https://mybankstatementanalysis.com/blog/can-chatgpt-analyze-bank-statements)). 'Có đối soát số dư' là lợi thế bảo vệ được." TL: "Ngân hàng VN cho chủ tài khoản tự xuất Excel trên ibanking ([VCB](https://vietcombank.com.vn/corp/Documents/Huong%20dan%20su%20dung%20VCB-ib@nking.pdf)). Vậy khách VN thật là **kế toán nhận PDF từ khách hàng của họ**, không phải chủ tài khoản." PM: "Đồng ý, persona VN phải đổi theo hướng đó."

---

## 4. Giai đoạn 3: Phân tích sâu top 3

### 4.A StatementKit: sao kê PDF → dữ liệu sạch, có đối soát

#### Thị trường (bottom-up, **ước tính**)

| Lớp | Công thức | Kết quả |
|---|---|---|
| TAM quốc tế | 1,6 triệu bookkeeper/kế toán viên ở Mỹ ([BLS](https://www.bls.gov/ooh/office-and-administrative-support/bookkeeping-Accounting-and-auditing-clerks.htm)) × 2 (cộng UK/CA/AU/SEA, giả định) × 30% thường xuyên nhận PDF (giả định) × $20/tháng × 12 | ≈ **$230M/năm** |
| TAM VN | > 1 triệu DN đang hoạt động ([Người Quan Sát](https://nguoiquansat.vn/gan-21-ty-hoa-don-163-trieu-tai-khoan-ngan-hang-va-478-san-thuong-mai-dien-tu-mat-luoi-du-lieu-giup-nganh-thue-thu-ngan-sach-ky-luc-310933.html)) × 10% có kế toán phải xử lý sao kê PDF hằng tháng (giả định) × 99k × 12 | ≈ **119 tỷ VNĐ/năm (~$4,6M)** |
| SAM | Phần nói tiếng Anh tìm qua Google + VN: ~10% TAM quốc tế + 100% TAM VN | ≈ $23M + $4,6M |
| SOM 12 tháng | 100–200 khách trả tiền × ~$16/tháng | **$1,5–3K MRR** (khớp kịch bản cơ sở/tốt ở dưới) |

Kiểm tra chéo: 2 đối thủ indie đạt $10–38K MRR. Nếu đạt 5–10% mức của họ thì đã chạm SOM, nên SOM này hợp lý.

#### Đối thủ (≥ 5)

| Đối thủ | Giá | Điểm yếu (review 1–3 sao, test) | Khoảng trống cho mình |
|---|---|---|---|
| Bank Statement Converter (Angus Cheng) | Theo credit/trang | Trustpilot **2,5/5**: support chậm hơn 24 giờ, trừ credit cả khi upload trùng file, chặn người dùng vì "nhiều IP" ([Trustpilot](https://www.trustpilot.com/review/bankstatementconverter.com)) | Không trừ tiền 2 lần cho file trùng (hash), cam kết trả lời trong 24 giờ |
| DocuClipper | $29/60 trang → $899/5.000 trang (~$0,18–0,48/trang) ([Documentric](https://www.documentric.com/blog/docuclipper-pricing-2026)) | Đắt với người cần ít trang | Gói rẻ hơn, có gói trả theo lần cho nhu cầu không thường xuyên |
| Your Bank Statement Converter | Subscription ([TrustMRR](https://trustmrr.com/startup/your-bank-statement-converter)) | Dựa vào AI OCR, phải upload file lên server | Xử lý trên trình duyệt: "file không rời máy bạn" |
| ChatGPT/Claude (công cụ tổng quát) | ~$20/tháng, nhiều người có sẵn | Đếm sai tổng, bịa giao dịch khi sao kê dài ([bankstatementlab](https://www.bankstatementlab.com/en/blog/en-can-chatgpt-convert-bank-statement-pdf-excel)) | **Có kiểm tra số dư** + xử lý cả loạt file một lần |
| Smallpdf PDF → Excel | Freemium ([Smallpdf](https://smallpdf.com/vi/pdf-to-excel)) | Chỉ trích bảng chung chung, không hiểu Nợ/Có/số dư, gãy khi bảng tràn trang | Hiểu ngữ nghĩa sao kê |
| Add-on Sheets / extension "Bank Statement Converter" | Freemium ([Workspace](https://workspace.google.com/marketplace/app/bank_statement_converter/44730854792), [Chrome](https://chromewebstore.google.com/detail/bank-statement-converter/ecclmbfioikhjhdpijagkknecfblnpbe?hl=vi)) | Chung chung, chưa thấy tối ưu cho ngân hàng VN | Template riêng cho ngân hàng VN, xuất đúng mẫu import của MISA |
| capyparse, bankxlsx, DocuClipper clones | Chưa kiểm giá | Dấu hiệu thị trường đang đông | Phải hơn về ngách (VN/SEA) và độ tin cậy, không đấu bằng tính năng |

#### Khách hàng

| Persona | Pain | Đang xử lý bằng cách nào | WTP (ước tính) |
|---|---|---|---|
| **Linh, kế toán dịch vụ ở VN**, làm sổ cho 15 DN nhỏ | Mỗi tháng nhận khoảng 30 file sao kê PDF qua Zalo, gõ tay vào MISA mất 1–2 ngày | Gõ tay, Smallpdf rồi sửa lại, hoặc nhờ khách xuất Excel (khách thường không biết cách) | 99–199k/tháng. Chỉ cần tiết kiệm 1 ngày công là đáng |
| **Mark, bookkeeper freelance ở US/UK** | Khách gửi PDF của ngân hàng nhỏ, QuickBooks không đọc được | DocuClipper (đắt) hoặc nhập tay | $15–30/tháng |
| **Người làm hồ sơ vay/visa/ly hôn** | Phải tổng hợp 6–12 tháng sao kê | Excel tay | $9–19 trả 1 lần |

#### Sản phẩm: MVP (≤ 5 tính năng)

1. Upload nhiều PDF → bảng giao dịch (Ngày, Diễn giải, Nợ, Có, Số dư). Bản đầu có **10 template**: 7 ngân hàng VN + 3 ngân hàng SEA.
2. **Badge đối soát**: ✅ số dư khớp, hoặc ⚠️ chỉ ra dòng lệch.
3. Xuất file Excel, CSV, QBO/OFX và **mẫu import MISA**.
4. Template xử lý trên trình duyệt (pdf.js). Gặp PDF lạ hoặc bản scan → hỏi ý người dùng rồi mới gửi lên server dùng LLM vision. File xóa sau khi xử lý xong.
5. Thanh toán bằng credit/gói tháng: Polar/Creem cho khách quốc tế, VietQR qua SePay cho khách VN.

**KHÔNG làm:** phân loại chi tiêu bằng AI, dashboard tài chính, kết nối API ngân hàng (open banking), app mobile, quản lý nhóm, bản dịch thứ 3.

**User journey:** Google "techcombank sao kê excel" → trang SEO riêng cho ngân hàng đó → kéo file vào (chưa cần đăng ký) → xem trước 10 dòng kèm badge ✅ → "Tải Excel" hiện yêu cầu đăng ký (5 trang/ngày miễn phí) → hết hạn mức thì hiện paywall → trả qua VietQR/thẻ → nhận email biên lai.

#### Kỹ thuật

| Lớp | Lựa chọn | Lý do |
|---|---|---|
| Parser | TypeScript dùng chung trên trình duyệt (pdf.js) và trên Node. Template viết dạng **JSON khai báo** (vị trí cột, regex) | Dễ thêm ngân hàng mới mà không phải sửa code. Test hồi quy trên bộ PDF mẫu đã xóa thông tin cá nhân |
| Fallback | Gemini Flash-Lite vision ($0,10/$0,40 mỗi 1M token, theo backlog). ~2k token/trang ≈ **$0,0005/trang** (ước tính) | Chỉ dùng cho scan/PDF lạ, sau đó vẫn chạy qua bước đối soát số dư |
| Backend | FastAPI hoặc Node + Postgres (user, credit, webhook) | Sở trường của founder |
| Frontend | Next.js tĩnh + Tailwind, vibe-code | Chỉ 4 màn hình: Upload, Preview, Pricing, Account |
| Hosting | 1 VPS + Cloudflare (free) | |

| Chi phí/tháng (ước tính) | 100 user | 1.000 user | 10.000 user |
|---|---|---|---|
| VPS + backup | $6 | $12 | $40 (2 VPS) |
| LLM fallback (20% số trang) | <$1 | ~$3 | ~$30 |
| Email giao dịch, domain, monitoring | $1 | $5 | $20 |
| **Tổng hạ tầng** | **~$8** | **~$20** | **~$90** |
| Phí MoR (Polar 5% + 50¢ ([Dodo](https://dodopayments.com/blogs/polar-sh-review))), tính theo doanh thu | — | — | — |

**Phần khó vibe-code:** cắt bảng theo tọa độ khi diễn giải xuống nhiều dòng hoặc bảng tràn trang; tách cột Nợ/Có khi ngân hàng chỉ ghi một cột có dấu ±; nhận dạng định dạng số `1.000,00` và `1,000.00`. Đây đều là logic backend, phải tự viết test, không thể chỉ "prompt cho ra". Frontend thì dễ.

#### Go-to-market

| Kênh | Cách làm | Mốc |
|---|---|---|
| 1. Programmatic SEO | Mỗi ngân hàng × định dạng 1 trang ("VPBank statement to Excel", "chuyển sao kê MB sang MISA"), có hướng dẫn và file mẫu. Đối thủ Starter Story kể họ có user chủ yếu nhờ SEO ([Starter Story](https://www.starterstory.com/stories/bankstatementconverter)) | 60 trang trong 8 tuần |
| 2. Cộng đồng | Group kế toán VN (đăng kèm video demo 30 giây, tặng 100 trang), r/bookkeeping, r/Accounting, Indie Hackers build-in-public | Tuần 1–2 (validation) |
| 3. Marketplace/thư mục | Google Workspace Marketplace add-on (đã có đối thủ trong kênh này, chứng tỏ kênh có cầu), AlternativeTo, G2 bản free, thư mục MCP cho AI agent | Tháng 2–3 |

- **100 user đầu:** 5 bài trong group kế toán + 3 thread Reddit/IH + 30 khách concierge giai đoạn validation → ~150 signup.
- **10 khách trả tiền đầu:** liên hệ riêng 30 kế toán đã dùng concierge, mời gói "Founding" 990k/năm hoặc $49/năm khóa giá trọn đời. Đổi lại họ góp thêm template ngân hàng còn thiếu.

#### Tài chính

**Pricing:** Free 5 trang/ngày · Lần $9/200 trang (hết hạn sau 30 ngày) · Pro $19/tháng 1.000 trang · VN: 149k/tháng, 990k/năm. **ARPU blended ~$16** (ước tính sau phí).

| Giả định | Xấu | Cơ sở | Tốt |
|---|---|---|---|
| Khách trả tiền mới/tháng (tháng 12) | 5 | 22 | 50 |
| Churn/tháng | 15% | 12% | 10% |
| ARPU | $14 | $16 | $18 |
| CAC tiền mặt | ~$0 (SEO/cộng đồng) | ~$0 | ~$0 |
| LTV ≈ ARPU / churn | ~$93 | ~$133 | ~$180 |

**P&L 12 tháng tính từ launch** (USD; chi phí đã gồm hạ tầng + tool; chi phí 1 lần $80 gồm domain, tư vấn thuế, đăng ký HKD)

| Tháng | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | Tổng DT |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Xấu: MRR | 0 | 14 | 26 | 50 | 71 | 102 | 129 | 151 | 185 | 213 | 237 | **271** | 1.449 |
| Xấu: lũy kế | -95 | -96 | -85 | -50 | 5 | 92 | 191 | 312 | 467 | 650 | 857 | 1.098 | |
| Cơ sở: MRR | 0 | 32 | 92 | 177 | 284 | 410 | 553 | 710 | 881 | 1.063 | 1.256 | **1.457** | 6.915 |
| Cơ sở: lũy kế | -95 | -78 | -1 | 161 | 430 | 825 | 1.348 | 2.028 | 2.879 | 3.912 | 5.138 | 6.565 | |
| Tốt: MRR | 0 | 72 | 209 | 404 | 652 | 946 | 1.302 | 1.712 | 2.170 | 2.673 | 3.216 | **3.794** | 17.150 |
| Tốt: lũy kế | -95 | -38 | 156 | 545 | 1.156 | 2.063 | 3.324 | 4.996 | 7.106 | 9.720 | 12.876 | 16.610 | |

**Hòa vốn tiền mặt:** tháng 5 (xấu), tháng 4 (cơ sở), tháng 3 (tốt). Con số này **chưa tính công founder**. Ở kịch bản xấu, 12 tháng chỉ ra ~$1.100 lãi, tức là trả công rất thấp. Đó là lý do có tiêu chí KILL.

#### Rủi ro & KILL

| Rủi ro | Giảm thiểu |
|---|---|
| Ngân hàng đổi mẫu PDF | Test hồi quy hằng ngày trên bộ mẫu; LLM fallback; người dùng báo lỗi bằng 1 click (gửi kèm file chỉ khi họ đồng ý) |
| Clone + AI tổng quát | Lợi thế phòng thủ: đối soát số dư, ngách VN/SEA, quyền riêng tư (xử lý trên trình duyệt), file import MISA |
| Dữ liệu tài chính nhạy cảm | Mặc định xử lý trên trình duyệt; server chỉ giữ file tạm, xóa sau 1 giờ; không dùng file để train |
| Google cập nhật thuật toán làm rớt SEO | Đa kênh: marketplace + cộng đồng + email list |

**KILL:** (1) Trước khi code: < 100 email waitlist hoặc < 5 người trả tiền trước. (2) 30 ngày sau launch: < 300 signup hoặc < 5 khách trả tiền. (3) 90 ngày: MRR < $300. (4) 6 tháng: MRR < $1.000 → ngừng phát triển, chỉ để chạy tự động.

---

### 4.B HóaĐơnKit: XML hóa đơn → bảng kê + kiểm tra + đối chiếu sao kê

| Mục | Nội dung |
|---|---|
| **Thị trường** (ước tính) | TAM: 1 triệu DN × 30% tự xử lý hóa đơn đầu vào (giả định) × 129k × 12 ≈ **465 tỷ VNĐ/năm**. SAM: kế toán dùng Excel thay vì phần mềm trọn gói ≈ 30% → ~140 tỷ. SOM 12 tháng: 150 khách ≈ 19 triệu/tháng (~$730) |
| **Đối thủ** | iTaxViewer của Cục Thuế (miễn phí; chỉ đọc file, không gộp hàng loạt ra Excel) ([totolink](https://www.totolink.vn/article/645-itaxviewer-la-gi-cach-dung-itaxviewer-de-doc-bao-cao-thue-dang-xml.html)) · tool xem XML miễn phí của minhvnpt ([link](https://minhvnpt.com/linktool-xem-file-xml-hoa-don-mien-phi)) · taihoadon.online (thu phí) · MISA meInvoice · iHOADON |
| **Khoảng trống** | Không ai **ghép 3 nguồn**: XML hóa đơn + sao kê (tận dụng engine của A) + kiểm tra MST còn hoạt động. Khi ghép được thì ra báo cáo "hóa đơn chưa thanh toán / thanh toán chưa có hóa đơn" |
| **Persona** | Kế toán SME/dịch vụ. Cuối tháng phải đối chiếu tay. Hiện dùng Excel + VLOOKUP. WTP 99–199k/tháng |
| **MVP** | (1) Kéo-thả ZIP chứa XML → bảng kê Excel; (2) kiểm tra chữ ký, tổng tiền, MST; (3) đối chiếu với sao kê; (4) xuất theo mẫu bảng kê; (5) thanh toán VietQR. **KHÔNG làm:** xuất hóa đơn, tự kéo dữ liệu từ cổng thuế (rủi ro captcha và điều khoản) |
| **Kỹ thuật** | XML parse trên trình duyệt, gần như không tốn hạ tầng: ~$5 / $10 / $40 mỗi tháng ở mức 100 / 1.000 / 10.000 user (ước tính). Khó: các biến thể schema giữa nhà cung cấp hóa đơn điện tử, thông tư mới |
| **GTM** | Group kế toán, SEO "đọc file XML hóa đơn hàng loạt", Sheets add-on (#10). 10 khách đầu lấy từ tệp người dùng của A |
| **Tài chính** (ARPU ~$5) | MRR tháng 12: xấu $179 · cơ sở $706 · tốt $1.943. Hòa vốn tiền mặt tháng 4–5 |
| **Pháp lý** | Hóa đơn chứa dữ liệu của bên thứ ba. Xử lý trên trình duyệt để giảm rủi ro |
| **Vì sao là B** | Khách VN trả thấp; MISA hoặc Nhà nước có thể cho miễn phí bất cứ lúc nào (đúng bài học trong backlog). **Hợp nhất là module trả thêm của A** cho kế toán VN |
| **KILL** | 60 ngày sau khi bật module: < 20 khách trả tiền → bỏ |

### 4.C RenderKit: API screenshot + HTML→PDF + MCP cho AI agent

| Mục | Nội dung |
|---|---|
| **Thị trường** (ước tính) | Cầu đã chứng minh qua đối thủ: ScreenshotOne ~$36K MRR, PDFShift ~$8,5K MRR, Bannerbear ~$1M ARR ([Starter Story](https://www.starterstory.com/stories/bannerbear-breakdown)). SOM 12 tháng: 45 khách × $25 ≈ $1,1K MRR |
| **Đối thủ** | ScreenshotOne, Urlbox, ApiFlash, PDFShift, DocRaptor (từ $44/tháng), Cloudflare Browser Rendering (big tech), Playwright MCP (miễn phí) |
| **Khoảng trống** | Gói API kèm **template hóa đơn có font tiếng Việt và mẫu hóa đơn SEA**; giá rẻ cho dev SEA; MCP server có sẵn |
| **Persona** | Dev SaaS/agent builder. Tự chạy Chromium thì tốn RAM và hay lỗi font. WTP $9–49/tháng |
| **MVP** | `/screenshot`, `/pdf`, cache + lưu S3, API key + quota, MCP server. **KHÔNG làm:** trình kéo-thả template, quay video |
| **Kỹ thuật** | Pool Chromium (Playwright) + hàng đợi. ~$10 / $40 / $250 mỗi tháng ở mức 100 / 1.000 / 10.000 user (ước tính, dùng nhiều CPU). Khó: chống lạm dụng (chụp trang phishing, dùng làm proxy để scrape), timeout, chặn rò rỉ bộ nhớ |
| **GTM** | Docs SEO, so sánh "X alternative", thư mục MCP, HN/Reddit r/webdev |
| **Tài chính** (ARPU ~$25) | MRR tháng 12: xấu $327 · cơ sở $1.122 · tốt $3.477 |
| **Vì sao là C** | Thụ động nhất, thị trường toàn cầu. Nhưng ScreenshotOne mất **3 năm mới đạt $10K MRR** ([startupfounderstories](https://startupfounderstories.com/stories/dmytro-krasun-screenshotone-20k-mrr)), không hợp khung 12 tháng; Cloudflare có thể ép giá. **Giữ làm phương án pivot** nếu A bị KILL |
| **KILL** | 90 ngày: < 10 khách trả tiền |

### 4.D Thanh toán & pháp lý cho người ở VN (dùng chung cho cả 3)

| Kênh nhận tiền | Hỗ trợ người bán ở VN? | Phí | Ghi chú |
|---|---|---|---|
| **Polar** (MoR) | Có, payout qua Stripe Connect Express ([Polar docs](https://polar.sh/docs/merchant-of-record/supported-countries)) | 5% + 50¢ ([Dodo](https://dodopayments.com/blogs/polar-sh-review)) | Nhận tiền về tài khoản VND tại VN. **Khuyến nghị số 1** |
| **Creem** (MoR) | Có, VN nằm trong 86 nước ([Creem](https://docs.creem.io/merchant-of-record/supported-countries)) | Payout 1% (tối thiểu 7 USD) | Phương án dự phòng |
| Lemon Squeezy | Payout qua PayPal tới 200+ nước; chưa xác nhận ngân hàng VN ([LS](https://docs.lemonsqueezy.com/help/getting-started/getting-paid)) | 5% + 50¢; payout PayPal quốc tế 3% (trần $30) | Có review than bị khóa tài khoản ([Trustpilot](https://www.trustpilot.com/review/lemonsqueezy.com)) |
| Paddle | Có tính thuế nhà thầu (FCT) VN cho người mua; chưa xác minh việc onboard người bán VN ([Paddle](https://www.paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for)) | — | Thẩm định khắt khe |
| Stripe Atlas | VN không có Stripe nội địa; Atlas lập Delaware LLC giá $500 ([Stripe](https://docs.stripe.com/atlas)) | $500 + phí duy trì hằng năm | **Chưa cần.** Chỉ cân nhắc khi MRR > $5K |
| SePay + VietQR (khách VN) | Có | Free 50 giao dịch/tháng; gói 99k/tháng ([SePay](https://sepay.vn/bang-gia.html)) | Webhook tự cộng credit |

**Thuế** (cần kế toán xác nhận, không phải tư vấn pháp lý):
- Đăng ký **hộ kinh doanh/cá nhân kinh doanh** ngành phần mềm/dịch vụ dữ liệu. Từ 2026 bỏ thuế khoán; đang có đề xuất miễn TNCN dưới **500 triệu/năm** ([Thanh Niên](https://thanhnien.vn/tu-nam-2026-ca-nhan-ho-kinh-doanh-ban-hang-online-se-nop-thue-bao-nhieu-185251204085335868.htm)). Backlog ghi ngưỡng 500 triệu hay 1 tỷ còn **chưa rõ**. Doanh thu trên 1 tỷ áp dụng cách tính mới theo NĐ 68/2026 ([voz](https://voz.vn/t/quy-dinh-moi-ve-thue-voi-ho-kinh-doanh-lap-trinh-phan-mem-tu-2026.1253859/)).
- Với MoR, người bán ở VN xuất "hóa đơn" cho MoR (công ty nước ngoài) và nhận tiền dịch vụ từ nước ngoài. Giữ bản sao payout statement để kê khai.

**Dữ liệu cá nhân:** Brief nhắc Nghị định 13/2023, nhưng từ 1/1/2026 khung chính đã là **Luật BVDLCN 91/2025/QH15 + NĐ 356/2025** (backlog đã xác minh). Sao kê có dữ liệu tài chính, thuộc nhóm nhạy cảm. Cách xử lý: xử lý trên trình duyệt làm mặc định; file trên server xóa sau 1 giờ; có privacy policy + DPA cho khách EU (GDPR áp dụng khi có khách EU); không log nội dung file. SME/HKD được hoãn nghĩa vụ đánh giá tác động 5 năm, trừ khi xử lý dữ liệu của từ 100k người trở lên (backlog).

---

## 5. Giai đoạn 4: Quyết định

### 5.1 CEO chọn: **A, StatementKit**

| Tiêu chí | A | B | C |
|---|---|---|---|
| Bằng chứng doanh thu indie | **2 sản phẩm, có 1 nguồn xác minh** | Gián tiếp | 3 sản phẩm |
| Tốc độ ra tiền trong 12 tháng | **Nhanh** (nhu cầu đang có, SEO theo ý định tìm kiếm) | Trung bình | Chậm (3 năm mới $10K) |
| Hợp sở trường | Parse/đối soát = backend thuần | Như A | Như A, nhưng nặng vận hành |
| Thụ động sau 12 tháng | 3–5 giờ/tuần (sửa template) | 3–5 giờ/tuần (đổi thông tư, khách VN hỏi qua Zalo) | 1–3 giờ/tuần (nhưng phải chống lạm dụng) |
| Đa thị trường | **VN + quốc tế** | Chỉ VN | Quốc tế |

**Lý do chọn:** A là ý tưởng duy nhất có cả cầu quốc tế bằng USD lẫn chỗ đứng ở VN (MISA, ngân hàng nội), giá trị nằm 100% ở logic, MVP 4 tuần. **B** thành module trả thêm của A từ tháng 4 (dùng chung khách kế toán). **C** để dành làm phương án pivot.

### 5.2 Validation 2 tuần TRƯỚC KHI CODE

| Ngày | Việc | Đầu ra |
|---|---|---|
| 1–2 | Gom 30 PDF mẫu (đã xóa thông tin cá nhân), test 5 đối thủ, chấm tỷ lệ đúng/sai | Bảng "đối thủ sai ở đâu", dùng làm nội dung marketing |
| 2 | Keyword Planner: lượng tìm kiếm của 40 từ khóa | Nếu tổng < 5.000/tháng cho nhóm VN + SEA thì bỏ ngách SEA |
| 3–4 | Landing page VN/EN: headline "Sao kê PDF → Excel/MISA, tự kiểm số dư, file không rời máy bạn"; waitlist; form upload concierge; nút "Đặt trước 990k/năm" hoặc "$49/năm Founding" | Đo được |
| 5–10 | Đăng 5 group kế toán, 2 subreddit, IH; DM 30 kế toán quen; làm concierge (script Python + chỉnh tay, trả file trong 24 giờ) | Số liệu thật |
| 11–14 | Phỏng vấn 10 người đã gửi file: tháng nào cũng cần không? Hiện mất bao nhiêu giờ? | Quyết định |

| Chỉ số go/no-go | GO | NO-GO |
|---|---|---|
| Email waitlist | ≥ 100 | < 100 |
| File concierge nhận được | ≥ 30 file từ ≥ 15 người | < 10 người |
| Trả tiền trước | **≥ 5 người** | < 5 |
| Người dùng ≥ 2 lần (nhu cầu lặp lại) | ≥ 30% | < 15% |

### 5.3 Roadmap 90 ngày (theo tuần, có stage gate)

| Tuần | Việc | Gate |
|---|---|---|
| 1–2 | Validation (mục 5.2) | **G0:** đạt ngưỡng GO, không đạt thì chuyển sang thử C |
| 3 | Engine parser + DSL template + test hồi quy; 4 ngân hàng VN | |
| 4 | Thêm 6 template, logic đối soát số dư, xuất Excel/CSV | |
| 5 | Frontend Upload/Preview (vibe-code), auth bằng magic link, credit | |
| 6 | Polar + SePay webhook, xuất QBO/OFX/MISA; privacy policy | **G1:** 30 khách concierge dùng bản thật, tỷ lệ ✅ đối soát ≥ 90% |
| 7 | **Launch**: chuyển khách waitlist + Founding sang bản thật; 15 trang SEO đầu tiên | |
| 8 | 15 trang SEO + video demo; trả lời feedback | |
| 9 | LLM fallback cho scan; dashboard đo template lỗi | **G2 (30 ngày sau launch):** ≥ 300 signup và ≥ 5 khách trả tiền, không đạt thì KILL |
| 10 | Google Workspace add-on (dùng lại engine) | |
| 11 | +15 trang SEO; listing AlternativeTo/G2/thư mục MCP | |
| 12 | Gói năm, email onboarding tự động, FAQ để giảm support | |
| 13 | Review: MRR, giờ vận hành/tuần, template hay lỗi nhất | **G3 (ngày 90):** MRR ≥ $300 và vận hành ≤ 10 giờ/tuần thì làm tiếp module B; không đạt thì pivot sang C |

### 5.4 Phản biện cuối: CFO đóng vai phản đối, CEO trả lời

| # | CFO: "Ý tưởng này sẽ chết vì…" | CEO trả lời |
|---|---|---|
| 1 | **Thị trường đầy clone.** Năm 2026 ai cũng vibe-code được converter, cứ một tháng lại có thêm vài bản | Đúng, nên mình không đấu ở "tiếng Anh chung chung". Mình đánh ngách mà clone bỏ qua (ngân hàng VN/SEA, file MISA) và hai thứ khó làm giả: đối soát số dư + xử lý trên trình duyệt. Gate G0 có test đối thủ thật trên ngân hàng VN/SEA; nếu họ đã làm tốt thì dừng ở tuần 2, chỉ mất 0đ |
| 2 | **LLM tổng quát sẽ đủ tốt trong 12–24 tháng.** ChatGPT đọc PDF ngày càng chuẩn | LLM sai ở chỗ không tự kiểm tra; mình kiểm. Thêm nữa, kế toán xử lý theo loạt 30 file và cần file import đúng chuẩn, chat không làm được. Rủi ro này có thật, nên mục tiêu là thu hồi vốn trong 3–5 tháng thay vì cược dài hạn |
| 3 | **Khách VN không trả tiền**, ngân hàng còn cho xuất Excel miễn phí | Đúng với chủ tài khoản. Persona VN là kế toán dịch vụ nhận PDF từ khách. Kịch bản cơ sở cũng giả định phần lớn doanh thu đến từ USD; VN là kênh phụ |
| 4 | **"Thụ động" là ảo.** Mỗi lần ngân hàng đổi mẫu là sập, khách email đòi hoàn tiền | Có test hồi quy chạy hằng ngày, LLM fallback và badge ⚠️ minh bạch nên khách biết dòng nào sai. Ước tính 3–5 giờ/tuần, nằm trong giới hạn. Nếu G3 cho thấy > 10 giờ/tuần thì đó là tín hiệu pivot |
| 5 | **Rủi ro dữ liệu nhạy cảm và nền tảng thanh toán.** Một vụ lộ dữ liệu là chết; MoR khóa tài khoản là mất dòng tiền | Xử lý trên trình duyệt mặc định nên phần lớn file không bao giờ lên server. Dùng 2 MoR (Polar chính, Creem dự phòng) + SePay cho VN. Payout về VN 2 lần/tháng, không để tiền nằm lâu trên nền tảng |

---

## 6. Nguồn chính

- Bank Statement Converter: [Superframeworks](https://superframeworks.com/blog/bankconverter) · [Starter Story](https://www.starterstory.com/stories/bankstatementconverter) · [TrustMRR](https://trustmrr.com/startup/your-bank-statement-converter) · [Trustpilot](https://www.trustpilot.com/review/bankstatementconverter.com)
- DocuClipper: [Documentric](https://www.documentric.com/blog/docuclipper-pricing-2026) · ChatGPT với sao kê: [mybankstatementanalysis](https://mybankstatementanalysis.com/blog/can-chatgpt-analyze-bank-statements), [bankstatementlab](https://www.bankstatementlab.com/en/blog/en-can-chatgpt-convert-bank-statement-pdf-excel)
- Healthchecks.io: [blog](https://blog.healthchecks.io/2024/07/running-one-man-saas-9-years-in/) · ScreenshotOne: [X](https://x.com/DmytroKrasun/status/2104570564006277204), [IH](https://www.indiehackers.com/post/tech/hitting-25k-mrr-by-making-his-goals-less-ambitious-jQRZDnzwm8DFAaS4Xrq0) · PDFShift: [Latka](https://getlatka.com/companies/pdfshift.io) · Instatus: [HighSignal](https://www.highsignal.io/50k-mrr-for-uptime-monitor/) · Tally: [blog](https://blog.tally.so/how-we-grew-tally-to-4m-arr-fully-bootstrapped/) · Canny: [yespress](https://yespress.io/canny) · Bannerbear: [Starter Story](https://www.starterstory.com/stories/bannerbear-breakdown)
- DMARC: [dmarcian (Microsoft 2025)](https://dmarcian.com/microsoft-enforces-spf-dkim-dmarc/) · [DMARCguard](https://dmarcguard.io/compare/easydmarc/)
- Sheets/Chrome/Shopify: [IH BudgetSheet](https://www.indiehackers.com/post/how-i-built-a-google-sheets-extension-making-1-6k-mrr-b42d845e6a) · [FounderClub](https://www.founderclub.com/notion2sheets/) · [ExtensionPay](https://extensionpay.com/articles/browser-extensions-make-money) · [WeekOneLabs](https://weekonelabs.com/blog/shopify-app-revenue-benchmarks-2026/)
- VN: [Hóa đơn/DN – Người Quan Sát](https://nguoiquansat.vn/gan-21-ty-hoa-don-163-trieu-tai-khoan-ngan-hang-va-478-san-thuong-mai-dien-tu-mat-luoi-du-lieu-giup-nganh-thue-thu-ngan-sach-ky-luc-310933.html) · [Đấu thầu 2025 – Dân trí](https://dantri.com.vn/cong-nghe/dau-thau-qua-mang-2025-nam-tang-toc-cua-cai-cach-minh-bach-hieu-qua-dau-tu-cong-20251227230824772.htm) · [DauThau.info giá](https://dauthau.asia/news/tin-tuc/dauthau-info-ap-dung-bang-gia-moi-1628.html) · [Cấm crawl](https://dauthau.net/en/bids/bidding/Thue-copy-du-lieu-tu-He-thong-mang-dau-thau-quoc-gia-de-cung-cap-cho-phan-mem-san-thong-tin-thau-DauThau-info-TB210583571-02.html) · [SePay](https://sepay.vn/bang-gia.html) · [VietQR MST](https://www.vietqr.io/en/danh-sach-api/tax-id-lookup/) · [Thuế HKD 2026 – Thanh Niên](https://thanhnien.vn/tu-nam-2026-ca-nhan-ho-kinh-doanh-ban-hang-online-se-nop-thue-bao-nhieu-185251204085335868.htm)
- Thanh toán: [Polar](https://polar.sh/docs/merchant-of-record/supported-countries) · [Creem](https://docs.creem.io/merchant-of-record/supported-countries) · [Lemon Squeezy](https://docs.lemonsqueezy.com/help/getting-started/getting-paid) · [Paddle](https://www.paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for) · [Stripe Atlas](https://docs.stripe.com/atlas)
- US bookkeepers: [BLS](https://www.bls.gov/ooh/office-and-administrative-support/bookkeeping-Accounting-and-auditing-clerks.htm)

> **Giới hạn của memo:** Nhiều trang bị proxy chặn (vnexpress, superframeworks, docs.lemonsqueezy) nên một số số liệu lấy từ đoạn trích kết quả tìm kiếm. Mọi TAM/SAM/SOM, churn, ARPU, P&L là **ước tính** theo công thức đã ghi. Điểm scorecard là đánh giá định tính. Cần kiểm lại trước khi bỏ tiền.
