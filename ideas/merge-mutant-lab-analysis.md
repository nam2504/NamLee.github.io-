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

---

## 8. Muốn CÓ LÃI thì phải đổi gì (bản pivot, 09/2026)

### 8.1 Chẩn đoán
- Trên mobile tự phát hành, LTV chỉ bằng 0,25–0,35 lần CPI. Muốn có lãi phải tăng LTV **3–4 lần**. Đó là trình độ của studio có đội LiveOps, UA và IAP sâu, không phải của solo dev.
- Vì vậy vấn đề nằm ở **mô hình kinh doanh**. Chỉnh cơ chế trong game không cứu được.

### 8.2 Quyết định: pivot sang "Desktop Idle Aquarium" trên Steam (bán đứt)
- **Hình thức:** một dải bể cá nằm dưới đáy màn hình, luôn nổi trên các cửa sổ khác. Sinh vật biển sâu bơi, ghép và đột biến trong lúc người dùng làm việc.
- **Tiền lệ thị trường:** Rusty's Retirement cùng kiểu "idle ở cạnh màn hình" bán khoảng 550k bản tính đến 7/2025, thu khoảng $5/bản sau refund, giảm giá và giá theo vùng. Thành công của game này khiến Steam tổ chức hẳn một Next Fest chủ đề idle năm 2025.
- **Vì sao hợp:**
  - Không tốn tiền mua user (UA). Steam tự đẩy game qua wishlist, Next Fest và các fest theo chủ đề.
  - Tauri/Electron + Phaser tạo được cửa sổ trong suốt luôn nổi trên cùng (transparent, always-on-top), đúng stack web của bạn.
  - Không có quảng cáo hay IAP nên không vướng NĐ147.
- **Giá bán:** $3,99–4,99. Thêm DLC skin/biome ($1,99) và gói Supporter. Không có quảng cáo.

### 8.3 Thay đổi thiết kế

| Hạng mục | Bản cũ (mobile ads) | Bản mới (Steam desktop) |
|---|---|---|
| Kiếm tiền | Rewarded ads + IAP | Bán đứt + DLC cosmetic |
| Vòng chơi | Người chơi phải tương tác | **Idle trước hết**: game tự chạy, chỉ cần click ghép vài lần mỗi giờ |
| Welcome Back ×3, Storm có quảng cáo | Có | Bỏ. Storm thành sự kiện miễn phí để người chơi liếc màn hình |
| Hook | Xem quảng cáo | Bộ sưu tập + Steam Achievements + Trading Cards |
| Nội dung | 30 sinh vật | Khoảng 60 sinh vật / 4 biome lúc launch, thêm biome qua update/DLC |
| Tính năng desktop | — | Chỉnh kích thước dải bể, click xuyên qua, chế độ Pomodoro/focus |

### 8.4 Stage-gate mới
1. **Tuần 1–2:** 3 video TikTok "bể cá đột biến trên desktop" để test chủ đề (giữ Gate 0).
2. **Tuần 3–6:** dựng prototype, sau đó **mở trang Steam sớm**. Capsule art rất quan trọng, ngân sách $200–500.
   - Gate: có ≥ 2.000 wishlist sau 8 tuần mở trang.
3. **Tuần 7–16:** làm bản demo và đăng lên CrazyGames/itch làm phễu kéo wishlist, rồi tham gia **Steam Next Fest** (dự kiến tháng 2/2027).
   - Gate: có ≥ 7.000 wishlist trước ngày launch.
   - Dưới 3.000 wishlist thì dừng Steam, chỉ giữ bản web.
4. **Launch** kèm giảm giá 10–20% khi ra mắt, sau đó làm update/DLC mỗi quý.
5. **Mobile:** không tự chạy UA. Gửi bản prototype cho các publisher như Homa, Voodoo, Kwalee. Họ tự làm CPI test và bỏ tiền UA, đổi lại lấy phần doanh thu.

### 8.5 Unit economics trên Steam

| Hạng mục | Giá trị |
|---|---|
| Giá niêm yết | $4,99 |
| Sau Steam 30%, refund, giảm giá, giá theo vùng | ~$2,3–2,8 mỗi bản |
| Thuế giữ lại 30% trên phần doanh thu từ Mỹ (VN–Mỹ chưa có hiệp định thuế có hiệu lực) | ~$2,0–2,5 mỗi bản |
| Điểm hòa vốn (chi phí $1,5–2,5k) | ~800–1.200 bản |

Kịch bản:

| Kịch bản | Số bản bán | Net |
|---|---|---|
| Xấu | < 500 bản (khoảng 2/3 game Steam thu < $1k) | Lỗ |
| Cơ sở | 3–5k bản | $7–12k |
| Tốt | 20k bản | ~$45k |
| Hit | 100k+ bản | Hiếm, nhưng có tiền lệ cùng format |

Wishlist cho phép **dừng sớm và rẻ** trước khi làm full game. Đây là lợi thế lớn nhất so với mobile.

### 8.6 Nếu vẫn muốn mobile tự phát hành: điều kiện có lãi
- ARPDAU Tier-1 phải ≥ $0,25:
  - IAP chiếm ≥ 40% doanh thu.
  - Season pass 30 ngày.
  - Mua trực tiếp, không bán lootbox trả tiền.
- D30 phải ≥ 10%, nhờ sự kiện hằng tuần và album sưu tầm theo mùa.
- CPI phải ≤ $0,6 ở Tier-1. Muốn vậy creative phải có IPM (số lượt cài trên 1.000 lượt hiển thị quảng cáo) cao, tức là phải test creative liên tục.
- Chỉ khi đạt đủ 3 điều kiện trên mới scale UA. Solo dev rất khó đạt cả ba.

Nguồn: https://newsletter.gamediscover.co/p/how-rustys-retirement-idle-farmed , https://en.wikipedia.org/wiki/Rusty's_Retirement , https://game-developers.org/2025-steam-game-revenue-distribution , https://www.deconstructoroffun.com/blog/2024/6/3/voodoos-secret-sauce-from-0-to-250m-hybridcasual-revenue-in-3-years

---

## 9. Vibe code bằng Claude Code: khả thi & chi phí (09/2026)

### 9.1 Mức độ AI làm được theo từng mảng việc

| Mảng việc | Tỷ lệ AI làm được | Người phải tự làm |
|---|---|---|
| Logic game, merge, kinh tế, prestige, save/load | 85–90% | Review, chơi thử |
| Script mô phỏng kinh tế (Python) | 90% | Chọn con số "cảm thấy đúng" |
| Tauri: cửa sổ trong suốt, click-through, luôn nổi trên cùng | 70% | Test trên máy Windows thật: nhiều màn hình, DPI, taskbar |
| Hiệu năng khi chạy nền (CPU < 1–2%) | 60% | Đo bằng Task Manager, giới hạn FPS khi bị che |
| Tích hợp Steamworks (achievements, cloud save) | 70% | Tạo app trên Steamworks, test bằng tài khoản thật |
| Game feel/juice (animation, âm thanh, reveal) | 50% | Chơi và chỉnh nhiều vòng |
| Art sinh vật, capsule Steam | ~0–20% | Thuê artist, hoặc AI image rồi chỉnh tay (phải khai báo AI trên Steam) |
| Trailer, marketing | 30% (viết kịch bản, copy) | Quay, dựng, đăng |

**Lưu ý:** Claude Code bản cloud/web không test được GUI trên Windows. Cần chạy Claude Code **trên máy local** để build và chạy app Tauri.

### 9.2 Thời gian
- Phần code rút từ khoảng 10 tuần xuống **3–5 tuần**.
- Tổng lịch gần như không đổi, vì nút thắt nằm ở chỗ **tích wishlist 3–6 tháng** và art.

### 9.3 Chi phí (4–5 tháng)

| Hạng mục | Chi phí |
|---|---|
| Claude, gói subscription (Max ~2–3 tháng lúc build, Pro lúc vận hành; giá kiểm tra tại claude.com/pricing) | ~$250–400 |
| (Phương án thay: API trả theo token, Opus 5.5 $4/$20, Sonnet 5.5 $2/$10 mỗi 1M token) | Dùng nặng hằng ngày thường đắt hơn subscription |
| Art 60 sinh vật | $300–1.000 |
| Capsule art | $200–500 |
| Steam Direct | $100 (hoàn lại khi doanh thu > $1k) |
| Âm thanh | $0–50 |
| Trailer | $0–200 |
| **Tổng** | **~$1.000–2.300** |

So sánh: thuê freelancer code một game tương đương ước khoảng vài nghìn USD trở lên (ước tính, chưa khảo giá).

### 9.4 Quy trình vibe code nên dùng
1. `CLAUDE.md` chứa GDD rút gọn, stack, quy ước code, các lệnh build/test.
2. Tách lõi kinh tế thành module thuần TypeScript, không phụ thuộc Phaser. Viết unit test và sim cho module này.
3. Mỗi lần giao một feature nhỏ → chạy test → chơi thử → commit. Không giao task kiểu "làm cả game".
4. Có **save versioning + migration** ngay từ đầu. Mất save của người chơi đồng nghĩa với review xấu và refund.
5. Mỗi feature dùng `/code-review`. Mỗi tuần refactor một lần để code không thối rữa.

---

## 10. Pipeline đa-AI (Gemini, ChatGPT, Claude…): review khả thi, chi phí, thời gian (09/2026)

### 10.1 Phân vai từng AI

| Việc | Công cụ | Ghi chú |
|---|---|---|
| Code (toàn bộ) | **Claude Code**, chỉ dùng 1 agent | Không trộn ChatGPT/Gemini viết code vào cùng codebase: vỡ quy ước, lỗi chồng lỗi |
| Hình sinh vật | **Gemini (Nano Banana Pro / Nano Banana 2)** | Giữ nhất quán nhân vật với tối đa 14 ảnh tham chiếu. Giá $0,039–0,134/ảnh, Batch API giảm 50% |
| Khóa style cho 60+ sinh vật | Scenario (train LoRA, từ ~$45/tháng) **hoặc** style bible + ảnh tham chiếu trên Gemini | Rủi ro lớn nhất về art là **không đồng bộ style** |
| Chuyển động | **Tween bằng code** (nhấp nhô, co giãn, xoay nhẹ) từ 1 ảnh | Thay cho sprite sheet, gần như miễn phí |
| Hiệu ứng, VFX | Particle bằng Phaser | Miễn phí |
| Lore, fun fact, text UI | ChatGPT hoặc Gemini | Phải **tự fact-check** fun fact sinh vật biển |
| Nhạc và SFX | **ElevenLabs** (Music API $0,15/phút; gói Creator ~$22/tháng) | Suno rẻ hơn ($10/tháng) nhưng **giấy phép chưa rõ** vì đang có kiện tụng. Tránh dùng Suno cho sản phẩm thương mại |
| Capsule Steam | AI phác thảo → **người vẽ/chỉnh** ($150–300) | Asset quyết định tỷ lệ click trang Steam |
| Trailer | Quay gameplay thật + CapCut. **Không** dùng video Veo làm trailer | Steam cấm trailer gây hiểu nhầm. Video AI cũng phải khai báo |
| Mô tả Steam, bài TikTok | Claude, ChatGPT hoặc Gemini | — |

### 10.2 Rủi ro riêng của art AI

1. **AI stigma trên Steam.**
   - Game có khai báo AI nhận ít review, ít wishlist và ít doanh số hơn.
   - Khoảng 8% người chơi tránh hẳn game có khai báo AI.
   - 30,8% game mới đã khai báo AI (7/2026), nên người chơi quen dần. Dù vậy, với game mà **art là điểm bán chính**, đây vẫn là rủi ro lớn.
2. **Bản quyền.** Ảnh thuần AI khó được bảo hộ bản quyền, người khác có thể clone sinh vật. Nếu có người chỉnh tay thì dễ bảo vệ hơn.
3. **Nghĩa vụ khai báo.**
   - Steam (quy định từ 1/2026): **bắt buộc khai báo** nội dung AI mà người chơi nhìn/nghe thấy. Code viết bằng AI **không** cần khai báo.
   - Luật AI VN: gắn nhãn nội dung do AI tạo.
4. **Giảm thiểu:**
   - Art direction thống nhất: 1 style đơn giản (flat/vector hoặc pixel) để giấu lỗi AI.
   - Chỉnh tay tất cả sinh vật (màu, viền, lỗi giải phẫu).
   - Capsule do người vẽ.
   - Khai báo minh bạch: "AI-assisted, hand-edited".

### 10.3 Chi phí (khoảng 6 tháng lịch)

| Hạng mục | Tối thiểu | Khuyến nghị |
|---|---|---|
| Claude (Max 2 tháng lúc build + Pro 4 tháng; giá kiểm tra lại) | ~$180 | ~$280 |
| Google AI Pro $19,99/tháng (năm đầu giảm 50%): Gemini, Nano Banana, Veo | ~$60 | ~$120 |
| Gemini Image API để tạo hàng loạt (60 sinh vật × ~10 lần thử) | ~$25 | ~$80 |
| Scenario/Ludo (1–2 tháng, nếu cần khóa style) | $0 | ~$100 |
| ElevenLabs (1–2 tháng) | ~$22 | ~$44 |
| ChatGPT Plus | $0 (dùng Gemini/Claude thay) | $0–20 |
| Capsule do người vẽ | $0 | $150–300 |
| Artist chỉnh tay sinh vật (tùy chọn) | $0 | $0–300 |
| Steam Direct | $100 | $100 |
| **Tổng** | **~$400** | **~$900–1.300** |

So với bản thuê art hoàn toàn ($1.000–2.300), bản này giảm khoảng 40–60%.

### 10.4 Thời gian build
Giả định làm part-time 15–20 giờ/tuần.

| Tuần | Việc | Gate |
|---|---|---|
| 1–2 | Style bible, 10 sinh vật AI, 3 video TikTok | Gate 0: sức hút chủ đề |
| 3–5 | Prototype: bể cá desktop trong suốt + merge + kinh tế | Tự chơi thấy "nghiện" |
| 6–7 | Capsule, screenshot, mở trang Steam "Coming Soon" | — |
| 8–16 | 60 sinh vật, 4 biome, Steamworks, bản demo, polish | ≥ 2.000 wishlist ở tuần 14 |
| 17–20 | Next Fest (dự kiến 2/2027) | ≥ 7.000 wishlist |
| ~21–24 | Launch (khoảng 3–4/2027) | — |

- **Tổng công sức:** khoảng 250–350 giờ.
- **Code:** khoảng 30–40%. **Art + chỉnh style:** khoảng 25%. **Marketing:** khoảng 25%. **Test/polish:** phần còn lại.
- **Không rút ngắn được** thời gian tích wishlist.

### 10.5 Khuyến nghị quyết định
- **Chưa quyết định cả dự án. Chỉ quyết định Stage 0:** 2 tuần, khoảng $20–50, khoảng 30 giờ.
- Nếu Stage 0 trượt thì mất rất ít. Nếu đạt thì cam kết tiếp đến gate wishlist ở tuần 14 (tổng chi tối đa khoảng $500).
