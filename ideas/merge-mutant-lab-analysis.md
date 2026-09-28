# Merge Mutant Lab: phân tích phát triển full pipeline

> Game idle-merge: ghép sinh vật đột biến trong phòng lab dưới biển sâu.
> Phân tích theo quy trình các studio như Voodoo, Supercell, Rovio: chia thành từng giai đoạn (stage), mỗi giai đoạn có **cổng KPI (gate)**. Đạt KPI thì làm tiếp, trượt thì dừng.
> Người làm: solo dev, mạnh backend, vibe-code web. Cập nhật 09/2026.

---

## 0. Kết luận điều hành (TL;DR)

| Hạng mục | Đánh giá |
|---|---|
| Khả năng **làm ra** game | **Cao.** Merge/idle là thể loại dễ code nhất, logic chủ yếu là công thức số. |
| Khả năng **có lãi nhờ mua user (paid UA)** | **Thấp.** Tiền kiếm được trên mỗi người chơi (LTV) ước tính $0,24–0,60, trong khi chi phí mỗi lượt cài (CPI) từ $0,95 đến hơn $1,7. |
| Khả năng **có thu nhập thụ động nhờ traffic miễn phí** | **Trung bình – thấp.** Web portal: $200–2.000/tháng nếu game tốt. Mobile organic: may rủi. |
| Xác suất đạt **$1.000/tháng trong 12 tháng** | **Khoảng 10–20%** (ước tính, không phải số đo). |
| Chi phí tiền mặt | $800–2.000 |
| Thời gian đến lúc ra mắt toàn cầu | 4–5 tháng part-time |
| Quyết định | **GO có điều kiện.** Đi theo lộ trình **Web trước → Mobile sau**, qua 6 gate. Trượt gate nào thì dừng hoặc làm lại tại gate đó. |

Hai điều quyết định sống chết là **Retention** (người chơi có quay lại không) và **phân phối miễn phí** (có người chơi mà không phải trả tiền quảng cáo). Cơ chế quảng cáo chỉ là phần phụ.

---

## 1. Phân tích thị trường & đối thủ

### 1.1 Thể loại
- Mô hình **Merge + Idle + Collection**: ghép 2 con cùng cấp thành 1 con cấp cao hơn, sinh vật tạo tiền kể cả khi tắt game, và người chơi sưu tầm đủ bộ.
- Đối thủ trực tiếp là họ game "Evolution" của Tapps: Cow Evolution (hơn 5 triệu lượt tải, 4,7★), cùng Cat/Alien/Mutant Evolution. Ngoài ra có hàng trăm bản reskin.
- Thể loại **đã bão hòa về cơ chế nhưng chưa bão hòa về chủ đề.** Sinh vật biển sâu đột biến là chủ đề có sức hút trên TikTok (kiểu "creepy cute", sinh vật biển sâu có thật).

### 1.2 Benchmark ngành (dùng làm cổng KPI)

| Chỉ số | Game trung vị | Top 25% | Mục tiêu của mình |
|---|---|---|---|
| D1 retention (tỷ lệ quay lại sau 1 ngày) | ~22% | 26–28% (iOS 31–33%) | **≥ 35%**. Idle/merge thường cao hơn trung bình. |
| D7 retention | < 4% | — | **≥ 12%** |
| D30 retention | — | Hybrid-casual ~10% | ≥ 5% |
| CPI Android (chi phí mỗi lượt cài) | Hybrid-casual toàn cầu $0,95; game US trung bình $1,71; Idle RPG $3,19 | — | Chỉ chạy quảng cáo trả phí khi LTV ≥ 1,2 × CPI |
| eCPM rewarded (tiền quảng cáo trên 1.000 lượt xem) | Tier-1 $16–19, VN ~$2,2 | — | Nhắm người chơi Tier-1 |

### 1.3 Định vị (USP)
1. **Chủ đề:** sinh vật biển sâu có thật (cá anglerfish, cá mập yêu tinh, mực ma cà rồng…) đột biến dần thành "quái vật" qua 30 cấp. Mỗi cấp gắn một "fun fact", tạo hook giáo dục nhẹ để làm video TikTok và hợp với phụ huynh.
2. **Khoảnh khắc đáng chia sẻ:** mỗi con mới xuất hiện cùng một reveal animation cỡ 1–2 giây. Đây vừa là phần thưởng chính của game, vừa là chất liệu cho video.
3. **Không pay-to-win, quảng cáo không ép xem:** chỉ có rewarded ads (người chơi chủ động xem để lấy thưởng) cùng một gói gỡ quảng cáo.

---

## 2. Thiết kế game (Pre-production)

### 2.1 Core loop (vòng chơi 30 giây)
```
Trứng rơi (timer) → Ghép 2 con cùng cấp → Con cấp cao sinh vàng/giây
      ↑                                              ↓
  Nâng cấp tốc độ rơi / cấp trứng  ←  Tiêu vàng  ←  Thu vàng
```

### 2.2 Meta loop (vòng chơi theo ngày/tuần)

| Lớp | Tính năng | Mở ở | Mục đích |
|---|---|---|---|
| Collection | Bách khoa sinh vật: có bóng đen, fun fact, % hoàn thành | Ngay từ đầu | Tò mò, muốn hoàn thành bộ |
| Expedition | Thả sinh vật đi thám hiểm 1h/4h/8h, nhận DNA hiếm | **Level 3–5** (không để level 10) | Lý do mở app 2–3 lần/ngày |
| Mutation Storm | 2 lần/ngày, xem quảng cáo để trứng rơi cấp 3 trong 60 giây | Ngày 1 | Hẹn giờ, đi kèm push notification |
| Prestige ("Tái sinh Lab") | Reset lab, nhận Gen Tokens để nhân thu nhập vĩnh viễn | Khi mở ~cấp 20 | **Chống lạm phát** và kéo dài vòng đời game |
| Biome mới | Lab → Rạn san hô → Hố thủy nhiệt → Vực Mariana | Sau mỗi lần Prestige | Nội dung mới, tái sử dụng hệ thống |
| Daily/Weekly quest | 3 nhiệm vụ/ngày | Ngày 2 | Thói quen |

### 2.3 Kinh tế game (khung toán)
- **Thu nhập của sinh vật cấp L:** `income(L) = 1 × 2.6^(L-1)` vàng/giây. Hệ số ≥ 2 là bắt buộc: con cấp L+1 tốn 2 con cấp L nên phải sinh nhiều hơn tổng 2 con đó thì người chơi mới thấy ghép là đáng.
- **Giá nâng cấp thứ n:** `cost(n) = base × 1.15^n`. Giá tăng theo cấp số nhân nên sẽ đuổi kịp và vượt thu nhập, tạo "bức tường" đẩy người chơi sang Prestige.
- **Offline cap:** mặc định 2 giờ, nâng cấp được lên 8–12 giờ. Mức trần này vừa là lý do quay lại vừa chặn gian lận bằng cách chỉnh đồng hồ máy.
- **Welcome Back:** nhận ×1 miễn phí hoặc xem quảng cáo để nhận ×3. Giá trị được tính theo thu nhập offline nên không làm vỡ kinh tế game.
- **Prestige:** `GenTokens = floor(sqrt(tổng_vàng_kiếm_được / 1e6))`, mỗi token cho +10% thu nhập. Dùng căn bậc hai để lần Prestige sau luôn cần nhiều vàng hơn lần trước.
- **Mục tiêu nhịp độ:**

| Mốc | Thời điểm người chơi đạt tới |
|---|---|
| Cấp 10 | 10 phút |
| Cấp 20 | Ngày 2 |
| Prestige lần đầu | Ngày 3–4 |
| Hết biome 1 | Tuần 2 |
| Hết toàn bộ nội dung | Tuần 6–8 |

- **Công cụ:** dựng mô phỏng kinh tế trong Google Sheet hoặc một script Python mô phỏng người chơi theo giây, **chạy trước khi code UI.** Mọi hằng số đưa lên **Remote Config** để chỉnh cân bằng mà không cần update app.

### 2.4 Monetization

| Vị trí | Loại | Kỳ vọng |
|---|---|---|
| Welcome Back ×3 | Rewarded | Chiếm nhiều lượt xem nhất |
| Mutation Storm | Rewarded | 2 lần/ngày |
| Tăng tốc Expedition | Rewarded | Thay cho tính năng "xem trước con Lv30" (đã bỏ) |
| Hộp quà trôi nổi | Rewarded | Ngẫu nhiên mỗi 3–5 phút |
| Interstitial (quảng cáo toàn màn hình) | Tùy chọn, **chỉ sau ngày 3**, tối đa 1 lần mỗi 5 phút | Tăng ARPDAU. Phải A/B test xem có làm giảm retention không |
| Gỡ quảng cáo ($2,99) | IAP | Gỡ interstitial, giữ lại rewarded dưới dạng tùy chọn |
| Starter pack ($1,99) | IAP | Hiện ở ngày 2 |
| Lab Pass (thẻ tháng, $4,99) | IAP | Tự động nhận thưởng từ quảng cáo (auto-claim) + ×2 offline |

Mục tiêu: **4–6 lượt xem rewarded mỗi người chơi mỗi ngày.** ARPDAU $0,06–0,12 với người chơi Tier-1, $0,02–0,04 với tệp toàn cầu.

---

## 3. Công nghệ (tối ưu cho người làm backend/web)

| Lớp | Lựa chọn | Lý do |
|---|---|---|
| Engine | **Phaser 3 + TypeScript** (phương án khác: Cocos Creator) | Dùng lại kỹ năng web; một codebase chạy cả web lẫn mobile |
| Đóng gói mobile | Capacitor (Android trước) | Không phải học Unity |
| Quảng cáo web | SDK của CrazyGames/Poki | Bắt buộc khi đăng lên portal |
| Quảng cáo mobile | AdMob + mediation AppLovin MAX | Mediation giúp eCPM cao hơn |
| Analytics | GameAnalytics (miễn phí) + Firebase | Có sẵn đồ thị retention cohort |
| Config | Firebase Remote Config | Chỉnh cân bằng từ xa, A/B test |
| Save | localStorage + cloud save tùy chọn | Game vẫn **offline**, đủ điều kiện nhóm G4 theo NĐ147 |
| Art | Thuê Fiverr hoặc dùng AI rồi chỉnh tay | Nếu dùng AI: gắn nhãn theo Luật AI VN, khai báo khi lên Steam |

Không mua source CodeCanyon. Code loại game merge-idle chỉ khoảng 2–4 nghìn dòng, tự viết (cùng AI) sẽ sạch và dễ bảo trì hơn source reskin.

---

## 4. Lộ trình theo Stage-Gate

> Nguyên tắc: **chỉ tiêu tiền và thời gian cho giai đoạn sau khi giai đoạn trước đã qua gate.**

### Stage 0: Kiểm tra sức hút chủ đề (Marketability test) · Tuần 1–2 · $0–100
- Làm 10–15 ảnh concept sinh vật (AI hoặc phác thảo) và 3 video TikTok/Shorts dạng "tiến hóa cá anglerfish qua 30 cấp đột biến".
- Tùy chọn: chạy Meta Ads $50–100 với 3 creative để đo CTR, giống cách Voodoo test.
- **Gate 0:** trung bình ≥ 10k view/video, **hoặc** CTR ≥ 2%, **hoặc** có ≥ 1 video vượt 100k view.
- **Trượt gate:** đổi chủ đề (kaiju, côn trùng, khủng long…) rồi test lại. Không code.

### Stage 1: Prototype · Tuần 3–5 · $0
- Chỉ làm core loop: trứng rơi, ghép, vàng, 1 nâng cấp, 15 sinh vật dùng hình placeholder.
- Cho 20–50 người chơi thử qua link web (Discord, group FB game, bạn bè).
- **Gate 1:** phiên chơi đầu có trung vị ≥ 8 phút, và ≥ 40% người thử tự mở lại vào ngày hôm sau.

### Stage 2: Vertical Slice / MVP web · Tuần 6–11 · $300–800 (art)
- Làm đủ biome 1 (30 sinh vật, art thật), Collection, Expedition, Storm, Prestige v1, rewarded ads qua SDK portal.
- Đăng lên **CrazyGames** (có vòng Basic Launch cho traffic thử và dashboard chỉ số) và itch.io.
- **Gate 2:** thời gian chơi trung bình ≥ 12 phút, D1 ≥ 30%, CrazyGames cho lên Full Launch.
- Doanh thu ở giai đoạn này chỉ là phụ. Tham chiếu: khoảng €1,2 trên 1.000 lượt chơi; game casual tốt kiếm $200–2.000/tháng.

### Stage 3: Soft launch mobile · Tuần 12–17 · $300–600
- Wrap bằng Capacitor, đăng Android.
- **Lưu ý:** tài khoản Google Play cá nhân mới phải chạy **closed test với ≥ 12 tester liên tục 14 ngày** thì mới được lên production. Cần lên kế hoạch trước.
- Mua khoảng 1.500–3.000 lượt cài ở thị trường CPI rẻ, ví dụ Philippines hoặc Indonesia ($0,1–0,3/lượt), để đo retention. Mục đích là đo, chưa phải để có lãi.
- **Gate 3 (KPI soft launch):**

| KPI | Ngưỡng |
|---|---|
| D1 | ≥ 35% |
| D7 | ≥ 12% |
| D30 | ≥ 5% |
| Thời gian chơi ngày 0 | ≥ 20 phút |
| Rewarded/DAU | ≥ 4 |
| Crash-free | ≥ 99,5% |

- Trượt thì lặp lại: onboarding → nhịp độ kinh tế → meta. Tối đa 2 vòng lặp, sau đó dừng.

### Stage 4: Global launch · Tuần 18+
- **Nhánh A, organic (mặc định):**
  - ASO: làm icon, screenshot và từ khóa ("merge", "evolution", "idle", "deep sea"), A/B test icon.
  - Đăng 3–5 video TikTok/Shorts mỗi tuần, lấy khoảnh khắc reveal từ trong game.
  - Mở thêm bản web trên Poki (nếu được nhận) và bản Steam nếu có bản PC.
- **Nhánh B, paid UA:** chỉ mở khi LTV_D90 ≥ 1,2 × CPI ở Tier-1, đã tính trên dữ liệu soft launch thật.

### Stage 5: LiveOps (vận hành, phần "thụ động") · 2–4 giờ/tuần
- Mỗi 4–6 tuần ra 1 biome mới (10 sinh vật = reskin + balance).
- Sự kiện theo mùa (Halloween, Tết) bật qua Remote Config.
- Mỗi tuần xem dashboard: retention cohort, ARPDAU, mức lấp đầy quảng cáo (ad fill), crash.

---

## 5. Mô hình tài chính

### 5.1 LTV (tiền kiếm được trên mỗi người chơi)
Giả định đường retention đạt Gate 3: D1 35%, D7 12%, D30 5%, D90 2%. Tổng số ngày chơi trung bình của một người trong 90 ngày là **khoảng 6 ngày**.

| Tệp người chơi | ARPDAU | LTV_D90 | CPI tham chiếu | LTV/CPI |
|---|---|---|---|---|
| Tier-1 (US/UK/CA/AU) | $0,10 | **$0,60** | $1,7+ (Android) | 0,35. **Lỗ.** |
| Toàn cầu | $0,04 | **$0,24** | $0,95 (hybrid-casual) | 0,25. **Lỗ.** |

Như vậy **paid UA không có lãi** ở mức KPI mục tiêu. Muốn có lãi thì ARPDAU hoặc retention phải gấp 3–4 lần, tức là mức của studio có đội LiveOps và IAP sâu. Với solo dev, **traffic miễn phí là con đường duy nhất.**

### 5.2 Kịch bản doanh thu (12 tháng sau launch)

| Kịch bản | Điều kiện | DAU | Doanh thu/tháng |
|---|---|---|---|
| Xấu (~50%) | Không có video nào viral, portal không feature | < 200 | < $50 |
| Cơ sở (~35%) | Portal Full Launch + ASO ổn | 1–3k | $150–600 |
| Tốt (~12%) | 1–2 video viral, được Poki/CrazyGames feature | 5–10k | $1.000–3.000 |
| Rất tốt (~3%) | Viral lặp lại, có cộng đồng | 30k+ | $5.000+ |

Xác suất trên là ước tính chủ quan dựa trên tỷ lệ thành công của game indie casual, không phải số đo.

### 5.3 Chi phí

| Hạng mục | Chi phí |
|---|---|
| Art 30–40 sinh vật | $300–1.000 |
| Tài khoản Google Play | $25 |
| Tài khoản Apple (nếu làm iOS) | $99/năm |
| Test UA (quảng cáo để đo) | $100–600 |
| Âm thanh (asset pack) | $0–50 |
| **Tổng** | **$800–2.000** |

---

## 6. Rủi ro & cách giảm thiểu

| Rủi ro | Mức | Giảm thiểu |
|---|---|---|
| Không có traffic miễn phí | **Cao** | Gate 0 test chủ đề trước khi code; đi web portal trước |
| Retention thấp do nhịp độ kinh tế sai | Cao | Sim kinh tế + Remote Config + A/B test |
| Google Play gắn cờ spam/reskin | TB | Art tự thiết kế, không dùng source mua |
| AdMob khóa tài khoản vì click lỗi (invalid traffic) | TB | Không tự click; bật mediation; không đặt quảng cáo gần nút bấm |
| Pháp lý VN (NĐ147) | Thấp | Giữ game offline chơi một mình (G4), không có vật phẩm đổi ra tiền, không gacha trả tiền |
| Luật AI (từ 1/3/2026) | Thấp | Gắn nhãn nội dung do AI tạo |
| Thuế thu nhập ngoại tệ từ AdMob/portal | Thấp | Khai thuế TNCN hằng năm; tiền nhận qua ngân hàng VN |
| Burnout solo dev | TB | Timebox mỗi stage; trượt gate thì dừng, không cố |
| Bị copy | TB | Tốc độ ra nội dung + thương hiệu sinh vật riêng |

---

## 7. Checklist quyết định cho từng gate

- [ ] Gate 0: Chủ đề có sức hút (view/CTR)
- [ ] Gate 1: Prototype, phiên chơi ≥ 8 phút, ≥ 40% quay lại
- [ ] Gate 2: Web MVP, ≥ 12 phút, D1 ≥ 30%, CrazyGames Full Launch
- [ ] Gate 3: Soft launch mobile, D1 ≥ 35 / D7 ≥ 12 / D30 ≥ 5
- [ ] Gate 4: LTV ≥ 1,2 × CPI (nếu muốn chạy paid UA)

## Nguồn
- GameAnalytics 2026 benchmarks (qua Playio): https://blog.playio.co/arpdau-benchmarks-mobile-games
- Retention hybrid-casual: https://gamegrowthadvisor.com/blog/2026-04-16-hybrid-casual-game-design-strategy-2026/
- CPI 2025–2026: https://foxdata.com/en/blogs/2026-mobile-game-user-acquisition-cost-benchmarks-how-much-should-you-spend/ , https://segwise.ai/blog/cpi-ipm-roas-benchmarks-optimizing-ad-spend
- Doanh thu web portal: https://app.cinevva.com/guides/web-game-monetization , https://developer.crazygames.com/
- Cow Evolution: https://play.google.com/store/apps/details?id=br.com.tapps.cowevolution
