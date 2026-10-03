# Sunlit L1–L10: Creature Specs (Act I JEL + Act II MOL)

> **Mục đích:** spec sản xuất đầy đủ cho 10 sinh vật đầu tiên của Z1 Sunlit (vertical slice Stage 0, review R7): đủ để gen Gemini, chỉnh tay, rig tween và nhập data.
> **Version:** v0.1 (10/2026) · Status: `spec` cả 10 con · Tác giả: creature design (draft bởi Claude, cần designer chốt).
> **Luật gốc:** [`../creature-bible.md`](../creature-bible.md) (mục 1–11, template 11.1, schema 11.2, prompt blocks 11.3, ví dụ 12.2, roster 13, review 15). Bối cảnh: [`../merge-mutant-lab-analysis.md`](../merge-mutant-lab-analysis.md) mục 8, 10.
> **Quyết định đã khóa áp dụng ở đây:** R1 (Prestige reset con + tiền, mở zone kế như tab bể mới, bách khoa giữ nguyên, 1 zone hiển thị/lần; Sunlit là zone khởi đầu) · R2 (hero = Dragonling `cr_sun_06`; Saucelet vẫn là con đầu tiên người chơi thấy).

---

## 1. Chain overview

| Lv | ID | EN / VN | Act-S | Real anchor | Big feature mới (đúng 1) | Axis (chính/phụ) | Preset | Size | Pers. |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `cr_sun_01` | Saucelet / Sứa Đĩa Nhí | I-1 | Moon jelly ephyra, *Aurelia aurita* | Đĩa 8 thùy sao (gốc) | PAT | DRIFT_PULSE | 40 | curious |
| 2 | `cr_sun_02` | Moonbun / Sứa Bánh Trăng | I-2 | Moon jelly non | Đĩa khép thành vòm chuông | PAT | DRIFT_PULSE | 44 | shy |
| 3 | `cr_sun_03` | Cloverbell / Sứa Cỏ Bốn Lá | I-3 | Moon jelly trưởng thành | 4 oral arm bèo rủ dưới chuông | **TEN** | DRIFT_PULSE | 50 | chill |
| 4 | `cr_sun_04` | Sailbloop / Sứa Buồm | I-4 | + *Physalia physalis* (splice) | Phao khí + buồm mào trên đỉnh | **TEN** / FIN | DRIFT_PULSE | 56 | curious |
| 5 | `cr_sun_05` | Regatta / Đô Đốc Buồm | I-5 | *Physalia physalis* “vương giả” | 4 ruy băng xúc tu dài có hạt + aura | **TEN** / FIN | DRIFT_PULSE | 64 | show-off |
| 6 | `cr_sun_06` | **Dragonling** / Sên Rồng Xanh ★hero | II-1 | Blue dragon, *Glaucus atlanticus* | Leap: thân sên thon + 1 cặp quạt cerata | TEN | GLIDE_FLAP | 52 | curious |
| 7 | `cr_sun_07` | Fandrake / Sên Rồng Quạt | II-2 | *G. atlanticus* trưởng thành (ref *G. marginatus*) | Cặp quạt cerata thứ 2 (nhỏ, phía sau) | TEN | GLIDE_FLAP | 56 | grumpy |
| 8 | `cr_sun_08` | Bluewing / Sên Rồng Bướm | II-3 | + sea butterfly *Limacina helicina* | 1 cặp cánh parapodia dựng sau gáy | **FIN** | GLIDE_FLAP | 62 | shy |
| 9 | `cr_sun_09` | Bubbloon / Sên Bè Bọt | II-4 | + violet snail *Janthina janthina* | Bè 7 bọt dưới bụng | **FIN** / PAT | GLIDE_FLAP | 68 | chill |
| 10 | `cr_sun_10` | Armada / Rồng Hạm Đội | II-5 | + sea angel *Clione limacina* | Cặp cánh thứ 2 (4 cánh) + aura | **FIN** / PAT | GLIDE_FLAP | 76 | show-off |
| → 11 | `cr_sun_11` | Spikelet / Cá Mặt Trăng Gai | III-1 | *Mola mola* larva | (ngoài phạm vi) nhận heritage: chấm tím đầu gai | SPK | — | 64 | — |

**Axis khóa theo Act (S3–S5, bible 4.3/4.4):** Act I = **TEN** (oral arm ngắn → dài/xoăn → ruy băng), Act II = **FIN** (cánh nhỏ → phao/bè → cánh đôi). Passive: L5 `eggRate +3%`, L10 `zoneIncome +3%` (tổng 6%, chừa 9% cho L15 trong trần 15%/zone).

### 1.1 Lore & biology logic

**Act I, JEL “Từ đĩa đến đô đốc”.** L1→L3 là vòng đời thật của sứa mặt trăng: polyp tách ra ephyra hình đĩa 8 thùy (strobilation), ephyra lớn thành medusa vòm chuông, medusa trưởng thành có 4 oral arm và 4 vòng tuyến sinh dục hình móng ngựa (nguồn gốc dấu “cỏ bốn lá”). Từ L4, lab “splice” phao khí có buồm của man o' war lên con sứa. Đây là hư cấu được nói rõ trong mutation note, vì man o' war là siphonophore (tập đoàn zooid) chứ không phải medusa. Lý do chọn: phao và buồm là hình khối đặc trưng nhất của tầng mặt nước, và tạo cầu nối sinh học thật sang Act II. Axis TEN leo thang tự nhiên: tay bèo ngắn (L3), tay dài xoăn (L4), ruy băng xúc tu có “hạt” như chuỗi nematocyst battery (L5).

**Act II, MOL “Hạm đội xanh” (blue fleet).** Ở mặt biển có thật một cộng đồng trôi nổi gồm man o' war, *Velella*, *Glaucus* và ốc tím *Janthina*. *Glaucus atlanticus* ăn man o' war và trữ tế bào chích chưa bắn ở đầu cerata. Vì vậy leap Regatta → Dragonling là heritage thật: hạt xanh trên ruy băng Regatta thành chấm xanh đầu quạt Dragonling. L6–L7 vẫn là *Glaucus* (S1–S2: hình dạng loài rõ dần, từ 1 lên 2 cặp quạt). Từ L8 lab ghép dần những “đồ nghề bay/nổi” của họ hàng thân mềm cùng tầng mặt: cánh parapodia của bướm biển (*Limacina*, L8), bè bọt nhầy của ốc tím (*Janthina*, L9, loài cũng ăn man o' war/*Velella*), và cặp cánh thứ hai kiểu thiên thần biển (*Clione*, L10, loài thật săn chính bướm biển). Chuỗi đi từ “trôi” sang “nổi” rồi “bay”, nên khớp axis FIN và preset GLIDE_FLAP. Heritage cho L11: chấm **tím** đầu cánh của Armada thành chấm tím đầu gai của ấu trùng *Mola* (Spikelet). Liên kết sinh học thận trọng: trứng và ấu trùng *Mola* cũng trôi trong sinh vật phù du tầng mặt, và *Mola* thường ăn sinh vật keo. Mô típ “chấm đầu” lặp lại ở 2 lần leap (xanh → tím) giúp người chơi tự đoán heritage.

### 1.2 Thay đổi so với bible 12.1 (L1–L6) và lý do

| # | Thay đổi | Lý do |
|---|---|---|
| C1 | Tên/khái niệm L1–L6 **giữ nguyên** | Không thấy IP clash (Tentacool/Tentacruel, Jellicent, Shellos/Gastrodon, Dragonair đều có biện pháp tránh trong mục D từng con). “Dragonling” là từ tiếng Anh chung, rủi ro thấp |
| C2 | Axis L4, L5 đổi **FIN → TEN chính, FIN phụ** | 12.1 ghi L3 = TEN nhưng L4–L5 = FIN, vi phạm luật “mỗi Act khóa 1 axis chính cho S3–S5” (4.4). TEN là trục khớp nhất: S3 tay ngắn, S4 tay dài xoăn, S5 ruy băng. Nó cũng nối thẳng sang heritage TEN của Dragonling (cerata trữ ngòi chích). Buồm vẫn là big feature của L4, ghi là axis phụ FIN |
| C3 | L5 big feature: chỉ còn **ruy băng xúc tu**. “Buồm đôi” hạ thành chi tiết nhỏ (1 sọc vàng trên mép buồm) | 12.1 cho L5 2 big feature (buồm đôi + ruy băng), vi phạm BFM “đúng 1 feature đổi silhouette” (4.3). Ruy băng làm silhouette cao gấp ~1.6 lần, rõ hơn ở 48px |
| C4 | Màu ruy băng L5 = teal + hạt deep blue (12.1 viết “ruy băng xúc tu xanh”) | Để heritage “chấm deep blue đầu” đọc được trên quạt teal của Dragonling |
| C5 | L1 signature `spin_wobble` (“ephyra thật xoay khi bơi”, chưa kiểm chứng, R5) thay bằng `double_pulse`, ghi rõ là flourish của game | Ephyra bơi bằng co bóp thùy. Không đưa claim chưa kiểm chứng vào data |
| C6 | Dragonling S1: **1 cặp quạt** (không phải 3 cụm/bên như con trưởng thành thật) | Bảng 4.3 giới hạn appendage S1 ≤ 2. Hai quạt lớn + đuôi vểnh đọc thành “rồng con có cánh”, rõ hơn ở icon 32px. Số cụm thật được kể ở fun fact/bách khoa, không cần vẽ |
| C7 | Quy ước đếm appendage cho MOL: 1 quạt cerata = 1, 1 cánh = 1; rhinophore (sừng) = chi tiết mặt; bè bọt = khối thân | Bible chưa định nghĩa. Ghi ra để reviewer áp cùng 1 chuẩn |

---

## 2. Silhouette progression & 48px test

| Act | S1 → S5 trong 1 dòng |
|---|---|
| Act I (JEL, dọc) | **Đĩa sao dẹt** → **vòm trơn** (không chân) → vòm + **4 tay ngắn** → + **buồm mào nhô trên đỉnh** (cao lên trên) → + **4 ruy băng dài** (cao gấp ~1.6, kéo xuống dưới) |
| Act II (MOL, ngang) | **Sên thon + 2 quạt** (dấu “+”) → **4 quạt** (trước to, sau nhỏ, đuôi xoăn) → + **cánh dựng đứng** (cao lên trên) → + **khối bọt tròn dưới bụng** (dày xuống dưới) → + **4 cánh xòe** (rộng nhất) + aura |

Quy luật đọc: Act I là khối **dọc** (vòm), Act II là khối **ngang** (sên). Trong mỗi Act, feature mới luân phiên đổi chiều silhouette (ngang → lên → xuống → rộng), để không có 2 level liền kề chỉ khác nhau “số lượng”.

| Cặp dễ nhầm (dự đoán) | Rủi ro | Cách tránh |
|---|---|---|
| L6 Dragonling ↔ L7 Fandrake | Cao: chỉ khác số quạt | Quạt sau L7 = 0.6× quạt trước và đặt ở 2/3 thân. Đuôi L7 dài + xoăn. Size 52 → 56. Hand-edit phải đo lại ở 48px |
| L4 Sailbloop ↔ L8 Bluewing | Trung bình: cả 2 có khối cao nhô trên đỉnh | L4 thân dọc (vòm + tay rủ), buồm 1 mảnh nghiêng sau. L8 thân ngang + 4 quạt, 2 cánh tròn tách đôi |
| L9 Bubbloon ↔ L10 Armada | Trung bình: cùng bè bọt | L10 có 4 cánh (rộng hơn ~25%), aura, outline 2.5px, lane `front` |
| L4 ↔ L5 | Thấp | L5 có 4 ruy băng dài, silhouette cao gấp ~1.6 |
| L2 Moonbun ↔ L3 Cloverbell | Thấp | L2 không có phần rủ dưới chuông |
| L1 Saucelet ↔ mọi con | Thấp | Dạng đĩa sao duy nhất trong zone |

Kế hoạch test: sketch silhouette thô 10 con **trước** khi gen (bible 14.2). Chạy test 48px riêng từng Act (≥ 4/5 đúng thứ tự), sau đó trộn 10 con (≥ 90%). Khi có L11–L15 thì chạy lại test 15 con.

---

## 3. Specs: Act I (JEL)

### [cr_sun_01] Saucelet / Sứa Đĩa Nhí

#### A. Định danh
| Field | Value |
|---|---|
| ID | cr_sun_01 |
| Zone / Level | sun / L1 |
| Act / Stage | Act I / S1 (Hatchling) |
| Family | JEL |
| Evolves from → to | — (egg) → cr_sun_02 |
| Heritage trait | — |
| Real anchor | Moon jelly (ephyra), *Aurelia aurita*, 0–200 m, ephyra ~2–5 mm (draft) |
| Personality | curious |

#### B. Visual
| Field | Value |
|---|---|
| Silhouette (1 câu) | flat round disc with 8 rounded star lobes |
| Big feature mới so với level trước | 8 star lobes (root form) |
| Shape language | Đĩa tròn + 8 thùy bo tròn; vô hại, “bánh quy” |
| Distinct features (≤ 4) | 1. coral dot on each of the 8 lobe tips 2. faint teal four-leaf-clover mark in disc center (teases L2) 3. 2 big eyes at lower edge |
| Mutation axis | chính: PAT; phụ: — |
| Palette (hex) | primary `#FFF6E0`, secondary `#3FC1C9`, accent `#FFB4A2`, eye `#12355B`, outline `#12355B`, glow —. 3 màu (kem, teal, coral). Body alpha 0.92, outline 100%. |
| Size class | 40 px @1x (80 @2x) |
| Facing / pivot | right / (0.5, 0.5) |
| Layered parts (≤ 5) | `body`, `eyes` (2) |
| Creepy dial | 0 |
| Check giới hạn stage (4.3) | Màu 3 ✓ · mắt 2 ✓ · appendage 0 (thùy là thân) ✓ · pattern phẳng + chấm thùy · glow không ✓ |

#### C. Motion & behavior
| Field | Value |
|---|---|
| Lane | mid |
| Movement preset | DRIFT_PULSE |
| Param overrides | `periodMin 1400`, `periodMax 1900`, `squash 0.84`, `stretch 1.08`, `rise 8`, `speedMin 3`, `speedMax 6` |
| Idle behaviors | blink, look; signature `double_pulse`: 2 quick bell pulses (scaleY 0.8, 180ms each) then coasts 1.5s. Game flourish only, no biology claim (replaces unverified 'ephyra spins', review R5) (mỗi 40–90s) |
| Interactions | hover: approach (curious); click: squash 0.85/1.15 + emote; schooling: no |
| Active hours | diurnal |

#### D. Art production
| Field | Value |
|---|---|
| Ref IDs | STYLE-01, STYLE-02, STYLE-03 |
| Gemini prompt (+) | [STYLE BLOCK] + subject bên dưới |
| Negative / avoid | [NEGATIVE BLOCK] + `tentacles, long oral arms, bell or dome shape, glow, more than 8 lobes, more than 2 eyes, starfish texture, cookie texture, gem in the center, motion lines` |
| Model / ngày / số lần thử | nano-banana-pro / (điền) / ước tính 6–10 (STYLE seed) |
| Hand-edit notes | count exactly 8 symmetric lobes; uniform 2px outline @1x; remove AI gradients; enlarge eye catchlights; split eyes into own part, paint skin under eyes; clean magenta fringe |
| IP check | Pokémon: tránh Staryu/Starmie (sao + ngọc giữa) → tâm là cỏ 4 lá nhạt, không đá quý, thùy bo tròn không nhọn. Subnautica: OK. Reverse image: (điền sau gen). |

**Subject prompt (EN, ghép sau STYLE BLOCK):**

```text
Subject: a tiny baby moon jellyfish (ephyra stage). Flat round translucent cream-colored disc (#FFF6E0) with exactly 8 rounded star-like lobes evenly spaced around the edge, each lobe tip has one small coral dot (#FFB4A2). A faint teal (#3FC1C9) four-leaf-clover mark in the center of the disc. Two big round dark navy (#12355B) eyes with white catchlights near the lower edge, curious happy expression, tiny smile. Side view facing right, disc tilted slightly upward so the disc face and all 8 lobes are visible. Very simple: 3 flat colors plus dark navy outline (#12355B).
```

#### E. Audio & VFX
| Field | Value |
|---|---|
| SFX select | `tiny soft wet bloop, cute, underwater, muffled, 0.25s, high pitched` |
| SFX signature (S3+) | — (S1–S2) |
| Merge VFX tier | S1–S2 |

#### F. Lore
| Field | Value |
|---|---|
| Lab note (hư cấu) | EN: “Specimen keeps stacking itself on the petri dishes. We ran out of dishes.” (73 ký tự) · VN: “Mẫu vật cứ tự xếp chồng lên đĩa petri. Phòng lab hết sạch đĩa.” |
| Fun fact (thật) | EN: “Moon jelly polyps make baby jellies (ephyrae) by budding off a stack of tiny discs, released one by one. This is called strobilation.” (133 ký tự) · VN: “Polyp sứa mặt trăng tạo sứa con (ephyra) bằng cách tách ra một chồng đĩa nhỏ, thả từng chiếc một. Quá trình này gọi là strobilation.” |
| Mutation note | EN: “Lab twist: its lobe tips blush coral when it is happy.” (54 ký tự) · VN: “Đột biến lab: đầu thùy ửng màu san hô khi vui.” |
| Nguồn | Animal Diversity Web (Univ. of Michigan) – Aurelia aurita, moon jellyfish – https://animaldiversity.org/accounts/Aurelia_aurita/; Smithsonian Ocean – Jellyfish and Comb Jellies – https://ocean.si.edu/ocean-life/invertebrates/jellyfish-and-comb-jellies |
| Fact status | sourced (URL đã có; cần người đọc nguồn gốc để lên `verified`) |

#### G. Stats
| Field | Value |
|---|---|
| Variants | base, ab (aberrant palette: thân `#E6D7FF` lavender, tâm `#FFD166`, đầu thùy `#FFD166`) |
| Passive (chỉ S5) | — |
| Unlock | merge (Sunlit là zone khởi đầu, mở sẵn) |
| Spawn from egg | yes (L1–3) |

#### J. Acceptance checklist (Definition of Done)
- [ ] Silhouette test 48px đạt (đúng thứ tự trong Act, không nhầm trong zone)
- [ ] +1 big feature so với level trước; không chỉ đổi màu
- [ ] ≥ 70% màu thuộc palette zone; outline đúng màu, 2px @1x
- [ ] Đọc được trên 4 nền test (trắng, đen, wallpaper rực, IDE dark)
- [ ] Grayscale 64px vẫn nhận ra; colorblind filter OK
- [ ] Quay phải, pivot đúng, ≤ 5 part, part nối không hở khi tween
- [ ] Tween preset chạy mượt, không jitter; Calm mode OK
- [ ] File đặt tên đúng, @1x + @2x, trim + padding 2px, vào atlas
- [ ] IP check xong (Pokémon, Subnautica, reverse image search)
- [ ] Hand-edit notes + ảnh before/after lưu
- [ ] Fun fact `verified` với nguồn
- [ ] Tên EN/VN đúng giới hạn độ dài, không trùng IP
- [ ] Data validate (zod) pass; ID không trùng; chain liền mạch

---

### [cr_sun_02] Moonbun / Sứa Bánh Trăng

#### A. Định danh
| Field | Value |
|---|---|
| ID | cr_sun_02 |
| Zone / Level | sun / L2 |
| Act / Stage | Act I / S2 (Juvenile) |
| Family | JEL |
| Evolves from → to | cr_sun_01 → cr_sun_03 |
| Heritage trait | — |
| Real anchor | Moon jelly (juvenile medusa), *Aurelia aurita*, 0–200 m, juvenile bell ~1–5 cm (draft) |
| Personality | shy |

#### B. Visual
| Field | Value |
|---|---|
| Silhouette (1 câu) | smooth soft dome like a steamed bun, no appendages |
| Big feature mới so với level trước | flat disc closes into a domed bell |
| Shape language | Bán nguyệt mềm, “bánh bao”; ngại ngùng, vô hại |
| Distinct features (≤ 4) | 1. 4 teal horseshoe rings forming a clover on top of the dome 2. 8 tiny coral dots on the bell rim (lobes remnant) 3. very short scalloped rim 4. 2 big eyes, light blush |
| Mutation axis | chính: PAT; phụ: — |
| Palette (hex) | primary `#FFF6E0`, secondary `#3FC1C9`, accent `#FFB4A2`, eye `#12355B`, outline `#12355B`, glow —. 3 màu. Clover teal là “tag” của lab (moon jelly non thật có thể chưa thấy vòng gonad rõ, xem mutation note). |
| Size class | 44 px @1x (88 @2x) |
| Facing / pivot | right / (0.5, 0.45) |
| Layered parts (≤ 5) | `body`, `eyes` (2) |
| Creepy dial | 0 |
| Check giới hạn stage (4.3) | Màu 3 ✓ · mắt 2 ✓ · appendage 0 ✓ · pattern 1 (clover) ✓ · glow không ✓ |

#### C. Motion & behavior
| Field | Value |
|---|---|
| Lane | mid |
| Movement preset | DRIFT_PULSE |
| Param overrides | `periodMin 1700`, `periodMax 2200`, `squash 0.86`, `stretch 1.06`, `rise 9`, `speedMin 3`, `speedMax 6` |
| Idle behaviors | blink, look, yawn; signature `peek_hide`: tilts 15° toward the cursor for 600ms, then tucks back and sinks 8px (shy) (mỗi 45–100s) |
| Interactions | hover: flee (shy); click: squash 0.85/1.15 + emote; schooling: no |
| Active hours | diurnal |

#### D. Art production
| Field | Value |
|---|---|
| Ref IDs | STYLE-01, STYLE-02, STYLE-03, cr_sun_01 |
| Gemini prompt (+) | [STYLE BLOCK] + subject bên dưới |
| Negative / avoid | [NEGATIVE BLOCK] + `tentacles, oral arms, flat disc, star lobes, gems, crown, red, more than 2 eyes, mushroom cap, bread texture` |
| Model / ngày / số lần thử | nano-banana-pro / (điền) / ước tính 3–5 |
| Hand-edit notes | make dome symmetric; exactly 4 clover rings; 8 rim dots evenly spaced; uniform outline; split eyes part |
| IP check | Pokémon: tránh Frillish/Jellicent (vương miện, cổ áo bèo) → vòm trơn, không cổ áo. Tên Moonbun: không trùng Pokémon. Subnautica: OK. |

**Subject prompt (EN, ghép sau STYLE BLOCK):**

```text
Subject: a young moon jellyfish, small and round like a soft steamed bun. A smooth dome-shaped bell in translucent cream (#FFF6E0), about 1.3 times wider than tall. On top of the dome, a teal (#3FC1C9) pattern of exactly 4 small horseshoe-shaped rings arranged like a four-leaf clover. Exactly 8 tiny coral (#FFB4A2) dots evenly spaced along the bell rim, which has a very short scalloped edge. Two big round dark navy (#12355B) eyes with white catchlights in the lower third of the bell, shy gentle expression, light coral blush. No tentacles and no arms at all. Side view facing right, bell tilted slightly toward the viewer so the clover on top is visible. Keep the same face, cream color and coral dots as the reference cr_sun_01. 3 flat colors plus dark navy outline (#12355B).
```

#### E. Audio & VFX
| Field | Value |
|---|---|
| SFX select | `tiny soft bubble bloop, shy, muffled underwater, 0.25s` |
| SFX signature (S3+) | — (S1–S2) |
| Merge VFX tier | S1–S2 |

#### F. Lore
| Field | Value |
|---|---|
| Lab note (hư cấu) | EN: “Turned shy after growing a dome. Hides under the lab lamp like it is a hat.” (75 ký tự) · VN: “Mọc vòm xong thì hóa nhút nhát. Trốn dưới đèn lab như đội mũ.” |
| Fun fact (thật) | EN: “Moon jellies sense light and balance with small organs called rhopalia, set in notches around the edge of the bell.” (115 ký tự) · VN: “Sứa mặt trăng cảm nhận ánh sáng và thăng bằng nhờ các cơ quan nhỏ gọi là rhopalia, nằm ở các khía quanh mép chuông.” |
| Mutation note | EN: “Lab twist: our lab tags it early with a teal clover on the dome.” (64 ký tự) · VN: “Đột biến lab: lab gắn sớm dấu cỏ bốn lá màu teal lên vòm.” |
| Nguồn | Animal Diversity Web (Univ. of Michigan) – Aurelia aurita, moon jellyfish – https://animaldiversity.org/accounts/Aurelia_aurita/ |
| Fact status | sourced (URL đã có; cần người đọc nguồn gốc để lên `verified`) |

#### G. Stats
| Field | Value |
|---|---|
| Variants | base, ab (aberrant palette: vòm `#E6D7FF`, clover `#FFD166`, chấm mép `#FFB4A2`) |
| Passive (chỉ S5) | — |
| Unlock | merge |
| Spawn from egg | yes (L1–3) |

#### J. Acceptance checklist (Definition of Done)
- [ ] Silhouette test 48px đạt (đúng thứ tự trong Act, không nhầm trong zone)
- [ ] +1 big feature so với level trước; không chỉ đổi màu
- [ ] ≥ 70% màu thuộc palette zone; outline đúng màu, 2px @1x
- [ ] Đọc được trên 4 nền test (trắng, đen, wallpaper rực, IDE dark)
- [ ] Grayscale 64px vẫn nhận ra; colorblind filter OK
- [ ] Quay phải, pivot đúng, ≤ 5 part, part nối không hở khi tween
- [ ] Tween preset chạy mượt, không jitter; Calm mode OK
- [ ] File đặt tên đúng, @1x + @2x, trim + padding 2px, vào atlas
- [ ] IP check xong (Pokémon, Subnautica, reverse image search)
- [ ] Hand-edit notes + ảnh before/after lưu
- [ ] Fun fact `verified` với nguồn
- [ ] Tên EN/VN đúng giới hạn độ dài, không trùng IP
- [ ] Data validate (zod) pass; ID không trùng; chain liền mạch

---

### [cr_sun_03] Cloverbell / Sứa Cỏ Bốn Lá

#### A. Định danh
| Field | Value |
|---|---|
| ID | cr_sun_03 |
| Zone / Level | sun / L3 |
| Act / Stage | Act I / S3 (Adult) |
| Family | JEL |
| Evolves from → to | cr_sun_02 → cr_sun_04 |
| Heritage trait | — |
| Real anchor | Moon jelly (adult), *Aurelia aurita*, 0–200 m, bell often ~25–40 cm (draft) |
| Personality | chill |

#### B. Visual
| Field | Value |
|---|---|
| Silhouette (1 câu) | dome bell with 4 short frilly arms hanging below |
| Big feature mới so với level trước | 4 frilly oral arms hanging under the bell |
| Shape language | Vòm + 4 dải bèo rủ; thư thái, mềm |
| Distinct features (≤ 4) | 1. 4 frilly oral arms (~0.6× bell height), coral frilly edges 2. teal 4-ring clover on dome 3. thin deep-blue scalloped fringe line on rim 4. 2 big calm eyes |
| Mutation axis | chính: TEN; phụ: — |
| Palette (hex) | primary `#FFF6E0`, secondary `#3FC1C9`, accent `#FFB4A2`, eye `#12355B`, outline `#12355B`, glow —. 4 màu: + deep blue `#1B6CA8` cho viền fringe. Act I khóa axis TEN từ đây (S3–S5). |
| Size class | 50 px @1x (100 @2x) |
| Facing / pivot | right / (0.5, 0.35) |
| Layered parts (≤ 5) | `body`, `eyes`, `tentacles` (3) |
| Creepy dial | 0 |
| Check giới hạn stage (4.3) | Màu 4 ✓ · mắt 2 ✓ · appendage 4 (≤ 6) ✓ · pattern 1 ✓ · glow không ✓ |

#### C. Motion & behavior
| Field | Value |
|---|---|
| Lane | mid |
| Movement preset | DRIFT_PULSE |
| Param overrides | `periodMin 1900`, `periodMax 2400`, `squash 0.86`, `stretch 1.06`, `rise 10`, `speedMin 3`, `speedMax 7` |
| Idle behaviors | blink, look, yawn; signature `arm_wave`: tentacles part angle ±12° over 1200ms, 2 cycles, like waving hello (mỗi 30–80s) |
| Interactions | hover: ignore (chill); click: squash 0.85/1.15 + emote; schooling: no |
| Active hours | always |

#### D. Art production
| Field | Value |
|---|---|
| Ref IDs | STYLE-01, STYLE-02, STYLE-03, cr_sun_02 |
| Gemini prompt (+) | [STYLE BLOCK] + subject bên dưới |
| Negative / avoid | [NEGATIVE BLOCK] + `long thin tentacles longer than the bell, red or ruby orbs, beak, crown, more than 4 arms, stinging threads, gems, Tentacool-like look` |
| Model / ngày / số lần thử | nano-banana-pro / (điền) / ước tính 6–10 (STYLE seed) |
| Hand-edit notes | exactly 4 arms, equal spacing; arms ≤ 0.6× bell height; fringe as single scalloped line (no hair-thin tentacles); split tentacles part, overdraw 4px under bell; uniform outline |
| IP check | Pokémon: Tentacool (vòm xanh + 2 ngọc đỏ + mỏ + 2 xúc tu dài) → không ngọc, không mỏ, 4 tay bèo ngắn, màu kem/teal/coral. Jellicent: không cổ áo/vương miện. Subnautica: OK. |

**Subject prompt (EN, ghép sau STYLE BLOCK):**

```text
Subject: an adult moon jellyfish. Same translucent cream (#FFF6E0) dome bell and teal (#3FC1C9) four-leaf clover of exactly 4 horseshoe rings on top as the reference cr_sun_02, now with one thin deep-blue (#1B6CA8) scalloped fringe line along the bell rim. NEW: exactly 4 short frilly oral arms hanging straight down from under the bell center, each arm wavy like a ribbon of lettuce, about 0.6 times the bell height, cream with coral (#FFB4A2) frilly edges. Two big round dark navy (#12355B) eyes with white catchlights in the lower third of the bell, calm content half-smile. Side view facing right, bell tilted slightly toward the viewer. 4 flat colors plus dark navy outline (#12355B).
```

#### E. Audio & VFX
| Field | Value |
|---|---|
| SFX select | `soft wet bubble bloop, gentle, underwater, muffled, 0.3s` |
| SFX signature (S3+) | `very soft fluttering water swirl, gentle, 0.4s` |
| Merge VFX tier | S3 |

#### F. Lore
| Field | Value |
|---|---|
| Lab note (hư cấu) | EN: “Waves its four frilly arms at everyone. Intern believes it is saying hi.” (72 ký tự) · VN: “Vẫy bốn tay bèo với mọi người. Thực tập sinh tin là nó đang chào.” |
| Fun fact (thật) | EN: “The four horseshoe-shaped rings you can see through an adult moon jelly's bell are its reproductive organs (gonads).” (116 ký tự) · VN: “Bốn vòng hình móng ngựa nhìn thấy qua chuông sứa mặt trăng trưởng thành là cơ quan sinh sản (tuyến sinh dục) của nó.” |
| Mutation note | EN: “Lab twist: teal clover rings. Real ones are often pinkish or lilac.” (67 ký tự) · VN: “Đột biến lab: vòng cỏ bốn lá màu teal. Ngoài tự nhiên thường hồng/tím nhạt.” |
| Nguồn | Animal Diversity Web (Univ. of Michigan) – Aurelia aurita, moon jellyfish – https://animaldiversity.org/accounts/Aurelia_aurita/; Smithsonian Ocean – Jellyfish and Comb Jellies – https://ocean.si.edu/ocean-life/invertebrates/jellyfish-and-comb-jellies |
| Fact status | sourced (URL đã có; cần người đọc nguồn gốc để lên `verified`) |

#### G. Stats
| Field | Value |
|---|---|
| Variants | base, ab (aberrant palette: vòm `#E6D7FF`, clover `#FFD166`, viền tay `#FF9EC7`, fringe `#6C5BD4`) |
| Passive (chỉ S5) | — |
| Unlock | merge |
| Spawn from egg | yes (L1–3) |

#### J. Acceptance checklist (Definition of Done)
- [ ] Silhouette test 48px đạt (đúng thứ tự trong Act, không nhầm trong zone)
- [ ] +1 big feature so với level trước; không chỉ đổi màu
- [ ] ≥ 70% màu thuộc palette zone; outline đúng màu, 2px @1x
- [ ] Đọc được trên 4 nền test (trắng, đen, wallpaper rực, IDE dark)
- [ ] Grayscale 64px vẫn nhận ra; colorblind filter OK
- [ ] Quay phải, pivot đúng, ≤ 5 part, part nối không hở khi tween
- [ ] Tween preset chạy mượt, không jitter; Calm mode OK
- [ ] File đặt tên đúng, @1x + @2x, trim + padding 2px, vào atlas
- [ ] IP check xong (Pokémon, Subnautica, reverse image search)
- [ ] Hand-edit notes + ảnh before/after lưu
- [ ] Fun fact `verified` với nguồn
- [ ] Tên EN/VN đúng giới hạn độ dài, không trùng IP
- [ ] Data validate (zod) pass; ID không trùng; chain liền mạch

---

### [cr_sun_04] Sailbloop / Sứa Buồm

#### A. Định danh
| Field | Value |
|---|---|
| ID | cr_sun_04 |
| Zone / Level | sun / L4 |
| Act / Stage | Act I / S4 (Mutant) |
| Family | JEL |
| Evolves from → to | cr_sun_03 → cr_sun_05 |
| Heritage trait | — |
| Real anchor | Moon jelly × Portuguese man o' war (lab splice), *Aurelia aurita × Physalia physalis*, 0–1 m, man o' war float ~10–30 cm (draft) |
| Personality | curious |

#### B. Visual
| Field | Value |
|---|---|
| Silhouette (1 câu) | dome bell topped by a sideways balloon float with a tall crest sail; arms curl below |
| Big feature mới so với level trước | gas float with a crest sail on top of the bell |
| Shape language | Vòm + phao bóng + buồm tam giác cong; phiêu lưu, vui |
| Distinct features (≤ 4) | 1. teal balloon float lying sideways on the bell, coral crest sail leaning back 2. 4 oral arms now ~1× bell height, curled tips (TEN S4) 3. soft white sheen on float 4. teal clover + deep-blue fringe kept |
| Mutation axis | chính: TEN; phụ: FIN |
| Palette (hex) | primary `#FFF6E0`, secondary `#3FC1C9`, accent `#FFB4A2`, eye `#12355B`, outline `#12355B`, glow `#FFFFFF`. 4 màu + glow trắng: kem, teal (phao + clover), coral (buồm), deep blue `#1B6CA8` (mép buồm, fringe). |
| Size class | 56 px @1x (112 @2x) |
| Facing / pivot | right / (0.5, 0.45) |
| Layered parts (≤ 5) | `body`, `eyes`, `tentacles`, `fin`, `glow` (5) |
| Creepy dial | 1 |
| Check giới hạn stage (4.3) | Màu 4 + glow ✓ · mắt 2 ✓ · appendage 4 (≤ 8) ✓ · pattern 2 lớp (clover + mép buồm) ✓ · glow alpha 0.5 ✓ |

#### C. Motion & behavior
| Field | Value |
|---|---|
| Lane | mid |
| Movement preset | DRIFT_PULSE |
| Param overrides | `periodMin 2000`, `periodMax 2500`, `squash 0.88`, `stretch 1.05`, `rise 10`, `rotateDeg 4`, `speedMin 4`, `speedMax 8` |
| Idle behaviors | blink, look, glow_pulse; signature `sail_tilt`: fin part angle 0→−14° 900ms, hold 1.5s while body drifts +30px, as if a gust hits the sail (real man o' war sails catch wind) (mỗi 30–80s) |
| Interactions | hover: approach (curious); click: squash 0.85/1.15 + emote; schooling: no |
| Active hours | diurnal |

#### D. Art production
| Field | Value |
|---|---|
| Ref IDs | STYLE-01, STYLE-02, STYLE-03, cr_sun_03 |
| Gemini prompt (+) | [STYLE BLOCK] + subject bên dưới |
| Negative / avoid | [NEGATIVE BLOCK] + `red or ruby spheres on the head, beak or mouth, two long symmetric tentacles, crown, Tentacool-like clear dome, Jellicent-like collar, more than one sail, gradient on the float, purple-magenta float` |
| Model / ngày / số lần thử | nano-banana-pro / (điền) / ước tính 4–6 |
| Hand-edit notes | float sits on bell, overlap hidden under body; single sail, leaning back; arm curls readable at 56px; split fin (float+sail) part with pivot at float base; glow as separate blurred ADD layer |
| IP check | Pokémon: **Tentacool** (vòm xanh trong + 2 cầu đỏ + mỏ + 2 xúc tu) → không cầu/ngọc đỏ, không mỏ, phao nằm ngang có buồm mào là silhouette chính; màu kem/teal/coral. Không giống Tentacruel (xem L5). Subnautica: OK (không giống Floater/Gasopod). Note: phao Physalia thật thường xanh-tím + mào hồng; dùng teal để giữ palette zone. |

**Subject prompt (EN, ghép sau STYLE BLOCK):**

```text
Subject: a moon jellyfish lab-spliced with a Portuguese man o' war float. Keep the cream (#FFF6E0) bell, teal (#3FC1C9) clover rings, deep-blue (#1B6CA8) rim fringe and the 4 frilly oral arms from reference cr_sun_03, but the 4 arms are now longer (about 1 times the bell height) and curl into loose spirals at their ends. NEW: on top of the bell sits a translucent teal (#3FC1C9) gas float shaped like a small balloon lying sideways, about 0.8 times the bell width, with exactly one tall wavy crest-sail along its top ridge in coral (#FFB4A2) with a deep-blue (#1B6CA8) edge; the sail leans slightly backward like a sail catching wind. A soft white (#FFFFFF) low-opacity glow only around the float. Two big round dark navy (#12355B) eyes with white catchlights on the bell, curious cheerful expression. Side view facing right. 4 flat colors plus soft white glow and dark navy outline (#12355B).
```

#### E. Audio & VFX
| Field | Value |
|---|---|
| SFX select | `soft rubbery bloop with a tiny flap of a sail, underwater, 0.35s` |
| SFX signature (S3+) | `light airy whoosh like a small sail filling, muffled, 0.5s` |
| Merge VFX tier | S4 |

#### F. Lore
| Field | Value |
|---|---|
| Lab note (hư cấu) | EN: “Grew a sail overnight. Now refuses to swim unless the AC is on.” (63 ký tự) · VN: “Mọc buồm sau một đêm. Giờ không chịu bơi trừ khi bật điều hòa.” |
| Fun fact (thật) | EN: “A Portuguese man o' war is not a single jellyfish. It is a colony of specialized individuals, called zooids, working together as one.” (133 ký tự) · VN: “Sứa lửa (man o' war) không phải một con sứa. Nó là một tập đoàn các cá thể chuyên hóa (zooid) cùng hoạt động như một.” |
| Mutation note | EN: “Lab twist: a man o' war float spliced onto a jelly. Nature never did this.” (74 ký tự) · VN: “Đột biến lab: ghép phao sứa lửa lên sứa mặt trăng. Tự nhiên không làm vậy.” |
| Nguồn | NOAA Ocean Service – What is a Portuguese Man o' War? – https://oceanservice.noaa.gov/facts/portuguese-man-o-war.html |
| Fact status | sourced (URL đã có; cần người đọc nguồn gốc để lên `verified`) |

#### G. Stats
| Field | Value |
|---|---|
| Variants | base, ab (aberrant palette: vòm `#FFE8C2` peach, phao `#FFD166`, buồm `#FF9EC7`, fringe `#6C5BD4`) |
| Passive (chỉ S5) | — |
| Unlock | merge |
| Spawn from egg | no |

#### J. Acceptance checklist (Definition of Done)
- [ ] Silhouette test 48px đạt (đúng thứ tự trong Act, không nhầm trong zone)
- [ ] +1 big feature so với level trước; không chỉ đổi màu
- [ ] ≥ 70% màu thuộc palette zone; outline đúng màu, 2px @1x
- [ ] Đọc được trên 4 nền test (trắng, đen, wallpaper rực, IDE dark)
- [ ] Grayscale 64px vẫn nhận ra; colorblind filter OK
- [ ] Quay phải, pivot đúng, ≤ 5 part, part nối không hở khi tween
- [ ] Tween preset chạy mượt, không jitter; Calm mode OK
- [ ] File đặt tên đúng, @1x + @2x, trim + padding 2px, vào atlas
- [ ] IP check xong (Pokémon, Subnautica, reverse image search)
- [ ] Hand-edit notes + ảnh before/after lưu
- [ ] Fun fact `verified` với nguồn
- [ ] Tên EN/VN đúng giới hạn độ dài, không trùng IP
- [ ] Data validate (zod) pass; ID không trùng; chain liền mạch

---

### [cr_sun_05] Regatta / Đô Đốc Buồm

#### A. Định danh
| Field | Value |
|---|---|
| ID | cr_sun_05 |
| Zone / Level | sun / L5 |
| Act / Stage | Act I / S5 (Apex) |
| Family | JEL |
| Evolves from → to | cr_sun_04 → cr_sun_06 |
| Heritage trait | — |
| Real anchor | Portuguese man o' war ('regal' lab form), *Physalia physalis*, 0–1 m, tentacles average ~10 m (NOAA) |
| Personality | show-off |

#### B. Visual
| Field | Value |
|---|---|
| Silhouette (1 câu) | crested float-bell with 4 long trailing ribbons, tallest shape of Act I |
| Big feature mới so với level trước | 4 long flat ribbon tentacles trailing ~1.6× body height (TEN crown) |
| Shape language | Vòm + buồm + ruy băng dài; bệ vệ, “đô đốc” |
| Distinct features (≤ 4) | 1. 4 aqua ribbon tentacles, each with 3 deep-blue beads near the tip (heritage source) 2. sun-gold stripe on the crest sail edge 3. white aura ring pulse 4. curled oral arms + float kept |
| Mutation axis | chính: TEN; phụ: FIN |
| Palette (hex) | primary `#FFF6E0`, secondary `#3FC1C9`, accent `#FFB4A2`, eye `#12355B`, outline `#12355B`, glow `#FFFFFF`. 5 màu + glow: kem, teal (phao, ruy băng), coral (buồm), deep blue `#1B6CA8` (hạt ruy băng, mép buồm), sun-gold `#FFD166` (sọc buồm). Outline 2.5px. |
| Size class | 64 px @1x (128 @2x) |
| Facing / pivot | right / (0.5, 0.3) |
| Layered parts (≤ 5) | `body`, `eyes`, `tentacles`, `fin`, `glow` (5) |
| Creepy dial | 1 |
| Check giới hạn stage (4.3) | Màu 5 + glow ✓ · mắt 2 ✓ · appendage 8 (4 tay + 4 ruy băng, ≤ 8) ✓ · pattern + highlight ✓ · glow pulse + aura ✓ |

#### C. Motion & behavior
| Field | Value |
|---|---|
| Lane | front |
| Movement preset | DRIFT_PULSE |
| Param overrides | `periodMin 2200`, `periodMax 2600`, `squash 0.88`, `stretch 1.05`, `rise 12`, `rotateDeg 4`, `speedMin 4`, `speedMax 8` |
| Idle behaviors | blink, look, glow_pulse; signature `regatta_lap`: drifts to strip center, sail tilts −14°, ribbons sway ±10°, aura ring alpha 0.4→0.8, 3s total (mỗi 40–100s) |
| Interactions | hover: look (show-off); click: squash 0.85/1.15 + emote; schooling: no |
| Active hours | always |

#### D. Art production
| Field | Value |
|---|---|
| Ref IDs | STYLE-01, STYLE-02, STYLE-03, cr_sun_04 |
| Gemini prompt (+) | [STYLE BLOCK] + subject bên dưới |
| Negative / avoid | [NEGATIVE BLOCK] + `red or ruby orbs, beak, crown shape, mustache-like front tentacles, Tentacruel-like look, Jellicent-like collar, more than 4 ribbons, more than one sail, many thin hair tentacles, menacing look` |
| Model / ngày / số lần thử | nano-banana-pro / (điền) / ước tính 5–8 |
| Hand-edit notes | exactly 4 ribbons + 4 arms (≤ 8); 3 beads per ribbon, ≥ 3px @1x; ribbons share one tentacles part with arms (overdraw join); outline 2.5px @1x; aura as glow part, not baked |
| IP check | Pokémon: **Tentacruel** (vòm xanh, 3 cầu đỏ, mỏ vàng, nhiều xúc tu, 2 xúc tu trước như ria) → không cầu đỏ (dùng coral, không đỏ), không mỏ, ruy băng dẹt có hạt thay vì xúc tu tròn, buồm mào là tiêu điểm. Jellicent: không vương miện. Subnautica: OK. |

**Subject prompt (EN, ghép sau STYLE BLOCK):**

```text
Subject: the apex form of the sail jellyfish from reference cr_sun_04, regal and proud. Keep the cream (#FFF6E0) bell with teal (#3FC1C9) clover rings, the teal gas float with exactly one tall coral (#FFB4A2) crest-sail, and the 4 curly oral arms. NEW: exactly 4 long flat ribbon tentacles in teal (#3FC1C9) trailing down and slightly backward, each about 1.6 times the height of the bell-and-float, gently wavy, each ribbon with exactly 3 round deep-blue (#1B6CA8) beads near its tip. The crest-sail now has one thin sun-gold (#FFD166) stripe along its top edge. A soft white (#FFFFFF) aura ring around the whole creature. Two big round dark navy (#12355B) eyes with white catchlights, confident proud smile. Side view facing right. 5 flat colors plus white glow, slightly thicker dark navy outline (#12355B).
```

#### E. Audio & VFX
| Field | Value |
|---|---|
| SFX select | `soft rubbery bloop with a gentle bell-like shimmer, underwater, 0.4s` |
| SFX signature (S3+) | `short airy sail whoosh with a tiny two-note chime, 0.6s` |
| Merge VFX tier | S5 |

#### F. Lore
| Field | Value |
|---|---|
| Lab note (hư cấu) | EN: “Leads the tank in slow laps. The other jellies follow. Nobody voted for this.” (77 ký tự) · VN: “Dẫn cả bể bơi vòng chậm rãi. Lũ sứa khác bám theo. Chẳng ai bầu nó cả.” |
| Fun fact (thật) | EN: “The man o' war cannot swim. Wind and currents push its float, while its tentacles trail about 10 m below on average.” (116 ký tự) · VN: “Sứa lửa không tự bơi được. Gió và dòng chảy đẩy phao của nó, còn xúc tu rủ xuống dưới trung bình khoảng 10 m.” |
| Mutation note | EN: “Lab twist: its ribbons are harmless and very good at waving.” (60 ký tự) · VN: “Đột biến lab: ruy băng vô hại và vẫy rất điệu.” |
| Nguồn | NOAA Ocean Service – What is a Portuguese Man o' War? – https://oceanservice.noaa.gov/facts/portuguese-man-o-war.html |
| Fact status | sourced (URL đã có; cần người đọc nguồn gốc để lên `verified`) |

#### G. Stats
| Field | Value |
|---|---|
| Variants | base, ab (aberrant palette: vòm `#FFE8C2`, phao `#FFD166`, buồm `#FF9EC7`, ruy băng `#FFB347`, hạt `#6C5BD4`) |
| Passive (chỉ S5) | eggRate +3% |
| Unlock | merge |
| Spawn from egg | no |

#### J. Acceptance checklist (Definition of Done)
- [ ] Silhouette test 48px đạt (đúng thứ tự trong Act, không nhầm trong zone)
- [ ] +1 big feature so với level trước; không chỉ đổi màu
- [ ] ≥ 70% màu thuộc palette zone; outline đúng màu, 2px @1x (2.5px vì S5)
- [ ] Đọc được trên 4 nền test (trắng, đen, wallpaper rực, IDE dark)
- [ ] Grayscale 64px vẫn nhận ra; colorblind filter OK
- [ ] Quay phải, pivot đúng, ≤ 5 part, part nối không hở khi tween
- [ ] Tween preset chạy mượt, không jitter; Calm mode OK
- [ ] File đặt tên đúng, @1x + @2x, trim + padding 2px, vào atlas
- [ ] IP check xong (Pokémon, Subnautica, reverse image search)
- [ ] Hand-edit notes + ảnh before/after lưu
- [ ] Fun fact `verified` với nguồn
- [ ] Tên EN/VN đúng giới hạn độ dài, không trùng IP
- [ ] Data validate (zod) pass; ID không trùng; chain liền mạch

---


## 4. Specs: Act II (MOL)

### [cr_sun_06] Dragonling / Sên Rồng Xanh

> **HERO / mascot (R2).** Xem thêm mục *Hero notes* ngay sau spec này.

#### A. Định danh
| Field | Value |
|---|---|
| ID | cr_sun_06 |
| Zone / Level | sun / L6 |
| Act / Stage | Act II / S1 (Hatchling) |
| Family | MOL |
| Evolves from → to | cr_sun_05 → cr_sun_07 |
| Heritage trait | deep-blue dot tips on every cerata finger, from Regatta's ribbon beads (stolen stinging cells) (từ cr_sun_05) |
| Real anchor | Blue dragon sea slug (styled juvenile), *Glaucus atlanticus*, 0–1 m, adult < 3 cm |
| Personality | curious |

#### B. Visual
| Field | Value |
|---|---|
| Silhouette (1 câu) | slim tapered slug with 2 big fan 'wings' and an upturned tail: a tiny winged dragon |
| Big feature mới so với level trước | family leap: slim slug body + 1 pair of big fan-shaped cerata clusters |
| Shape language | Giọt nước thon + 2 quạt xòe như cánh; tự tin, nhanh nhảu |
| Distinct features (≤ 4) | 1. 2 large cerata fans (3 rounded finger tufts each) with deep-blue dot tips (heritage) 2. cream stripe down the back, deep-blue edge lines 3. 2 tiny rounded horn-like rhinophores 4. short upturned pointed tail |
| Mutation axis | chính: TEN; phụ: — |
| Palette (hex) | primary `#3FC1C9`, secondary `#FFF6E0`, accent `#1B6CA8`, eye `#12355B`, outline `#12355B`, glow —. 3 màu, 100% palette Sunlit. Chấm đầu quạt = heritage (cho phép dù S1 “pattern phẳng”). |
| Size class | 52 px @1x (104 @2x) |
| Facing / pivot | right / (0.5, 0.55) |
| Layered parts (≤ 5) | `body`, `eyes`, `wing` (3) |
| Creepy dial | 0 |
| Check giới hạn stage (4.3) | Màu 3 ✓ · mắt 2 ✓ · appendage 2 (2 quạt; sừng rhinophore tính là chi tiết mặt) ✓ · glow không ✓ |

#### C. Motion & behavior
| Field | Value |
|---|---|
| Lane | mid |
| Movement preset | GLIDE_FLAP |
| Param overrides | `periodMin 900`, `periodMax 1300`, `amplitudeY 4`, `rotateDeg 3`, `speedMin 4`, `speedMax 8`, `ease Sine.easeInOut` |
| Idle behaviors | blink, look, yawn; signature `belly_up_float`: body angle 0→180 over 1200ms Sine, hold 4–6s, rotate back; mirrors the real slug floating upside down at the surface. Also used as the night 'sleep' pose (mỗi 45–120s) |
| Interactions | hover: approach (curious); click: squash 0.85/1.15 + emote; schooling: no |
| Active hours | diurnal |

#### D. Art production
| Field | Value |
|---|---|
| Ref IDs | STYLE-01, STYLE-02, cr_sun_05 |
| Gemini prompt (+) | [STYLE BLOCK] + subject bên dưới |
| Negative / avoid | [NEGATIVE BLOCK] + `more than 2 fans, legs, feet, claws, teeth, scales, fire, bat wings, feathered wings, Shellos-like head flaps, yellow spots, slime, glossy wet look, realistic slug texture, silver grey body` |
| Model / ngày / số lần thử | nano-banana-pro / (điền) / ước tính 10–15 (STYLE seed + hero) |
| Hand-edit notes | exactly 2 fans × 3 tufts, dots ≥ 3px @1x; fans as one wing part (near + far), pivot at shoulder; tail tip readable at 48px; eyes part with big catchlight; export extra 32px icon variant (see Hero notes) |
| IP check | Pokémon: **Shellos/Gastrodon** (sên mập, vạt đầu, gờ lưng, East Sea xanh lá-xanh có đốm vàng) → thân thon dài, không vạt đầu, không gờ lưng, không đốm vàng. **Dratini/Dragonair** (rồng rắn xanh, “tai” cánh trắng, cầu xanh) → không tai cánh, không cầu. Dragalge/Skrelp: không lá rong. Tên “Dragonling” là từ tiếng Anh chung (có trong WoW/Hearthstone dạng “Mechanical Dragonling”): rủi ro thấp, check Steam search trước khi chốt. Subnautica: OK. |

**Subject prompt (EN, ghép sau STYLE BLOCK):**

```text
Subject: a baby blue dragon sea slug (Glaucus atlanticus), the hero mascot of the game. Slim tapered slug body like a tiny dragon, seen from the side facing right and slightly from above (3/4 top view) so both sides are visible. Aqua (#3fc1c9) body with one cream (#fff6e0) stripe along the middle of the back and thin deep-blue (#1b6ca8) edge lines. Exactly 2 large fan-shaped clusters of cerata, one on each side just behind the head, spread out like small wings; each fan has exactly 3 rounded finger tufts, aqua with one round deep-blue (#1B6CA8) dot at each tip (same dots as the ribbon beads of reference cr_sun_05). A short pointed tail curling slightly upward. Two tiny rounded horn-like rhinophores on top of the head. Two big round dark navy (#12355B) eyes with large white catchlights, friendly curious smile. The silhouette must read as a tiny winged dragon. 3 flat colors plus dark navy outline (#12355B).
```

#### E. Audio & VFX
| Field | Value |
|---|---|
| SFX select | `gentle squishy pop, soft and rubbery, cute, 0.3s` |
| SFX signature (S3+) | `soft fluttery flap with a tiny rubbery squeak, underwater, 0.4s` |
| Merge VFX tier | Leap (S5 → S1 Act II) |

#### F. Lore
| Field | Value |
|---|---|
| Lab note (hư cấu) | EN: “Ate the Regatta's lunch and kept the stingers. Very proud. Naps belly-up.” (73 ký tự) · VN: “Ăn trưa phần của Đô Đốc, giữ luôn ngòi chích. Rất tự hào. Ngủ trưa ngửa bụng.” |
| Fun fact (thật) | EN: “Blue dragon sea slugs float upside down, held up by an air bubble in the stomach, so their blue side faces the sky.” (115 ký tự) · VN: “Sên rồng xanh trôi ngửa bụng nhờ một bọt khí giữ trong dạ dày, nên mặt màu xanh của chúng hướng lên trời.” |
| Mutation note | EN: “Lab twist: keeps its stolen stingers as blue polka dots, just for style.” (72 ký tự) · VN: “Đột biến lab: giữ ngòi chích ăn trộm thành chấm bi xanh, cho điệu.” |
| Nguồn | Australian Geographic – Fact File: Blue dragon (Glaucus atlanticus) – https://www.australiangeographic.com.au/fact-file/fact-file-blue-dragon-glaucus-atlanticus/; Blue angels have devil hands: Predatory behavior using cerata in Glaucus atlanticus (peer-reviewed, PMC) – https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11912302/ |
| Fact status | sourced (URL đã có; cần người đọc nguồn gốc để lên `verified`) |

#### G. Stats
| Field | Value |
|---|---|
| Variants | base, ab (aberrant palette: “Sunset”: thân `#FFD166`, sọc `#FFF6E0`, viền `#E07A2F`, chấm đầu quạt `#6C5BD4`) |
| Passive (chỉ S5) | — |
| Unlock | merge |
| Spawn from egg | no |

#### J. Acceptance checklist (Definition of Done)
- [ ] Silhouette test 48px đạt (đúng thứ tự trong Act, không nhầm trong zone)
- [ ] +1 big feature so với level trước; không chỉ đổi màu
- [ ] ≥ 70% màu thuộc palette zone; outline đúng màu, 2px @1x
- [ ] Đọc được trên 4 nền test (trắng, đen, wallpaper rực, IDE dark)
- [ ] Grayscale 64px vẫn nhận ra; colorblind filter OK
- [ ] Quay phải, pivot đúng, ≤ 5 part, part nối không hở khi tween
- [ ] Tween preset chạy mượt, không jitter; Calm mode OK
- [ ] File đặt tên đúng, @1x + @2x, trim + padding 2px, vào atlas
- [ ] IP check xong (Pokémon, Subnautica, reverse image search)
- [ ] Hand-edit notes + ảnh before/after lưu
- [ ] Fun fact `verified` với nguồn
- [ ] Tên EN/VN đúng giới hạn độ dài, không trùng IP
- [ ] Data validate (zod) pass; ID không trùng; chain liền mạch

---


### Hero notes: `cr_sun_06` Dragonling

| Use | Spec |
|---|---|
| **Steam capsule centerpiece** (main 616×353, header 460×215) | Dragonling chiếm ~45% chiều cao capsule, góc 3/4 nhìn từ trên, **2 quạt xòe hết cỡ**, đuôi cong chữ S, đầu nghiêng 10° về người xem, miệng cười, mắt nhìn thẳng. Nền: dải strip Sunlit (`#8FE3F0 → #3FA9C9`) đặt trên mockup desktop mờ. Saucelet và Regatta nhỏ ở hậu cảnh để kể chuỗi merge. Khoảng trống bên trái cho logo. Capsule do người vẽ lại từ master (analysis 10.2), không dùng thẳng ảnh AI |
| **App icon 32px** (+ 16/48/256) | Crop vuông: thân + 2 quạt hình chữ X, đuôi cắt sát. Ở ≤ 32px: outline 3px (thay vì 2px @1x), mỗi quạt chỉ còn 1 chấm deep blue (bỏ 2 chấm), bỏ sọc lưng, mắt phóng 1.3× để giữ catchlight. Nền tròn `#3FA9C9`, viền ngoài `#12355B`. Test trên taskbar Windows sáng/tối và dock macOS |
| **TikTok thumbnail** (1080×1920) | Dragonling chiếm 1/3 khung, đặt trên screenshot taskbar thật. Pose `belly_up_float` (lật ngửa, bụng lộ) kèm chữ lớn. Tương phản: thân aqua trên nền IDE tối |
| **Expression sheet** (3 emote, vẽ tay từ master, dùng chung bộ bubble 10.11) | **♥ Happy:** mắt cong ^ ^, 2 quạt nâng 15°, má coral (mượn từ L7). **! Surprised:** mắt tròn to + đồng tử nhỏ, quạt xòe 30° (tiền thân `fan_flare`), đuôi duỗi thẳng. **z Sleepy:** lật ngửa 180° (`belly_up_float`), mắt nhắm thành vạch, 1 bubble “z”. Đây cũng là pose ngủ ban đêm theo OS clock |
| **Nhận diện** | 3 yếu tố không được mất ở mọi crop: (1) 2 quạt xòe đối xứng, (2) chấm deep blue đầu quạt, (3) sừng rhinophore tròn. Nếu gen ra quạt nhọn như cánh dơi thì sửa tay thành ngón tròn |
| **Aberrant “Sunset Dragonling”** | Bản vàng-cam `#FFD166`/`#E07A2F`, hợp làm ảnh teaser “1/256” trên mạng xã hội |

### [cr_sun_07] Fandrake / Sên Rồng Quạt

#### A. Định danh
| Field | Value |
|---|---|
| ID | cr_sun_07 |
| Zone / Level | sun / L7 |
| Act / Stage | Act II / S2 (Juvenile) |
| Family | MOL |
| Evolves from → to | cr_sun_06 → cr_sun_08 |
| Heritage trait | — |
| Real anchor | Blue dragon sea slug (adult form; G. marginatus/Glaucilla as visual ref), *Glaucus atlanticus*, 0–1 m, < 3 cm |
| Personality | grumpy |

#### B. Visual
| Field | Value |
|---|---|
| Silhouette (1 câu) | longer dragon slug with 4 spread fans (big front pair, smaller rear pair) and a curled tail |
| Big feature mới so với level trước | second, smaller pair of cerata fans at 2/3 body length |
| Shape language | Thân dài hơn + 4 quạt xòe như chuồn chuồn rồng; kiêu, hơi cáu |
| Distinct features (≤ 4) | 1. rear fan pair 0.6× front size 2. longer tail with upward curl 3. deep-blue line inside the cream back stripe (pattern) 4. coral cheek blush |
| Mutation axis | chính: TEN; phụ: — |
| Palette (hex) | primary `#3FC1C9`, secondary `#FFF6E0`, accent `#1B6CA8`, eye `#12355B`, outline `#12355B`, glow —. 4 màu: + coral `#FFB4A2` (má hồng). |
| Size class | 56 px @1x (112 @2x) |
| Facing / pivot | right / (0.5, 0.55) |
| Layered parts (≤ 5) | `body`, `eyes`, `wing`, `fin` (4) |
| Creepy dial | 0 |
| Check giới hạn stage (4.3) | Màu 4 ✓ · mắt 2 ✓ · appendage 4 (≤ 4) ✓ · pattern 1 sọc ✓ · glow không ✓ |

#### C. Motion & behavior
| Field | Value |
|---|---|
| Lane | mid |
| Movement preset | GLIDE_FLAP |
| Param overrides | `periodMin 900`, `periodMax 1300`, `amplitudeY 5`, `rotateDeg 3`, `speedMin 5`, `speedMax 9`, `ease Sine.easeInOut` |
| Idle behaviors | blink, look; signature `fan_flare`: wing + fin parts angle +25° in 300ms Back.easeOut, hold 800ms, emote '!' (collar-like display) (mỗi 30–90s) |
| Interactions | hover: look (grumpy); click: squash 0.85/1.15 + emote; schooling: no |
| Active hours | diurnal |

#### D. Art production
| Field | Value |
|---|---|
| Ref IDs | STYLE-01, STYLE-02, STYLE-03, cr_sun_06 |
| Gemini prompt (+) | [STYLE BLOCK] + subject bên dưới |
| Negative / avoid | [NEGATIVE BLOCK] + `more than 4 fans, legs, claws, teeth, scales, fire, yellow spots, Shellos-like frills, Dratini-like ear fins, slime, angry eyebrows` |
| Model / ngày / số lần thử | nano-banana-pro / (điền) / ước tính 3–6 |
| Hand-edit notes | rear fans clearly smaller (0.6×) to pass 48px test vs L6; rear fans as fin part, phase-offset flap; tail curl ≥ 4px thick @1x; uniform outline |
| IP check | Như L6 (Shellos/Gastrodon, Dratini). 4 quạt có thể gợi Dragonair/Altaria → không cánh lông, không “tai”. Tên Fandrake: không trùng Pokémon; Steam search trước khi chốt. Subnautica: OK. |

**Subject prompt (EN, ghép sau STYLE BLOCK):**

```text
Subject: the grown-up version of the baby blue dragon sea slug in reference cr_sun_06, same face, colors and style. Keep the aqua (#3FC1C9) body with one cream (#FFF6E0) stripe along the middle of the back and thin deep-blue (#1B6CA8) edge lines, the 2 tiny horns, and the 2 large front cerata fans with 3 finger tufts and deep-blue (#1B6CA8) dot tips. NEW: a second, smaller pair of fan-shaped cerata clusters at two-thirds of the body length toward the tail, about 0.6 times the size of the front fans, 3 finger tufts each with the same deep-blue dot tips. The tail is longer and ends in a slight upward curl. Pattern: one thin deep-blue line runs inside the cream back stripe. Small coral (#FFB4A2) blush on the cheeks. Two big round dark navy (#12355B) eyes with white catchlights, slightly grumpy proud pout. 3/4 top-side view facing right, all 4 fans visible and spread. 4 flat colors plus dark navy outline (#12355B).
```

#### E. Audio & VFX
| Field | Value |
|---|---|
| SFX select | `gentle squishy pop, slightly huffy, rubbery, 0.3s` |
| SFX signature (S3+) | — (S1–S2) |
| Merge VFX tier | S1–S2 |

#### F. Lore
| Field | Value |
|---|---|
| Lab note (hư cấu) | EN: “A second pair of fans arrived. So did the attitude.” (51 ký tự) · VN: “Đôi quạt thứ hai mọc ra. Thái độ cũng mọc theo.” |
| Fun fact (thật) | EN: “Blue dragons eat Portuguese man o' war and store its unfired stinging cells in the tips of their cerata, using them for defense.” (128 ký tự) · VN: “Sên rồng xanh ăn sứa lửa và trữ tế bào chích chưa bắn của con mồi ở đầu các cerata để tự vệ.” |
| Mutation note | EN: “Lab twist: flares all four fans like a fancy collar when annoyed.” (65 ký tự) · VN: “Đột biến lab: xòe cả bốn quạt như cổ áo điệu khi bực.” |
| Nguồn | Blue angels have devil hands: Predatory behavior using cerata in Glaucus atlanticus (peer-reviewed, PMC) – https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11912302/; Natural History Museum (London) – Nudibranchs: how sea slugs steal venom – https://www.nhm.ac.uk/discover/nudibranchs-psychedelic-thieves-of-the-sea.html |
| Fact status | sourced (URL đã có; cần người đọc nguồn gốc để lên `verified`) |

#### G. Stats
| Field | Value |
|---|---|
| Variants | base, ab (aberrant palette: thân `#FFD166`, viền `#E07A2F`, má `#FF9EC7`, chấm `#6C5BD4`) |
| Passive (chỉ S5) | — |
| Unlock | merge |
| Spawn from egg | no |

#### J. Acceptance checklist (Definition of Done)
- [ ] Silhouette test 48px đạt (đúng thứ tự trong Act, không nhầm trong zone)
- [ ] +1 big feature so với level trước; không chỉ đổi màu
- [ ] ≥ 70% màu thuộc palette zone; outline đúng màu, 2px @1x
- [ ] Đọc được trên 4 nền test (trắng, đen, wallpaper rực, IDE dark)
- [ ] Grayscale 64px vẫn nhận ra; colorblind filter OK
- [ ] Quay phải, pivot đúng, ≤ 5 part, part nối không hở khi tween
- [ ] Tween preset chạy mượt, không jitter; Calm mode OK
- [ ] File đặt tên đúng, @1x + @2x, trim + padding 2px, vào atlas
- [ ] IP check xong (Pokémon, Subnautica, reverse image search)
- [ ] Hand-edit notes + ảnh before/after lưu
- [ ] Fun fact `verified` với nguồn
- [ ] Tên EN/VN đúng giới hạn độ dài, không trùng IP
- [ ] Data validate (zod) pass; ID không trùng; chain liền mạch

---

### [cr_sun_08] Bluewing / Sên Rồng Bướm

#### A. Định danh
| Field | Value |
|---|---|
| ID | cr_sun_08 |
| Zone / Level | sun / L8 |
| Act / Stage | Act II / S3 (Adult) |
| Family | MOL |
| Evolves from → to | cr_sun_07 → cr_sun_09 |
| Heritage trait | — |
| Real anchor | Blue dragon × sea butterfly (lab splice), *Glaucus atlanticus × Limacina helicina*, 0–200 m, Limacina: a few mm to ~1 cm (draft) |
| Personality | shy |

#### B. Visual
| Field | Value |
|---|---|
| Silhouette (1 câu) | 4-fan dragon slug plus one pair of tall rounded wings rising from the neck: tallest shape so far |
| Big feature mới so với level trước | 1 pair of tall translucent wing-flaps (pteropod parapodia) rising from the neck |
| Shape language | Thân ngang + cánh dựng đứng như bướm; nhẹ, nhút nhát |
| Distinct features (≤ 4) | 1. 2 tall rounded cream wings (85% alpha), scalloped aqua edge, 1 deep-blue vein each 2. wings point up/back, never sideways like ears 3. 4 fans + back stripe kept 4. coral blush |
| Mutation axis | chính: FIN; phụ: — |
| Palette (hex) | primary `#3FC1C9`, secondary `#FFF6E0`, accent `#1B6CA8`, eye `#12355B`, outline `#12355B`, glow —. 4 màu: aqua, kem (cánh), deep blue, coral. Act II khóa axis FIN từ đây (S3–S5): cánh nhỏ → phao/buồm bọt → cánh đôi. |
| Size class | 62 px @1x (124 @2x) |
| Facing / pivot | right / (0.5, 0.6) |
| Layered parts (≤ 5) | `body`, `eyes`, `wing`, `tentacles` (4) |
| Creepy dial | 0 |
| Check giới hạn stage (4.3) | Màu 4 ✓ · mắt 2 ✓ · appendage 6 (4 quạt + 2 cánh, ≤ 6) ✓ · pattern 1 ✓ · glow không ✓ |

#### C. Motion & behavior
| Field | Value |
|---|---|
| Lane | mid |
| Movement preset | GLIDE_FLAP |
| Param overrides | `periodMin 500`, `periodMax 700`, `amplitudeY 6`, `rotateDeg 4`, `speedMin 7`, `speedMax 12`, `ease Sine.easeInOut` |
| Idle behaviors | blink, look; signature `flutter_hop`: wing period ×0.5 for 1.2s, body y −20 in 300ms Quad.easeOut, then glides down 1500ms Sine.easeIn (pteropods really 'fly' by flapping) (mỗi 30–80s) |
| Interactions | hover: flee (shy); click: squash 0.85/1.15 + emote; schooling: no |
| Active hours | always |

#### D. Art production
| Field | Value |
|---|---|
| Ref IDs | STYLE-01, STYLE-02, STYLE-03, cr_sun_07 |
| Gemini prompt (+) | [STYLE BLOCK] + subject bên dưới |
| Negative / avoid | [NEGATIVE BLOCK] + `wings on the sides of the head like ears, feathered wings, bat wings, insect wing vein detail, Dragonair-like white head fins, blue orbs on neck or tail, legs, shell, more than 6 appendages` |
| Model / ngày / số lần thử | nano-banana-pro / (điền) / ước tính 4–8 |
| Hand-edit notes | wings attach behind the head (neck), not on the head; wing alpha 0.85 but outline 100%; merge 4 fans into one tentacles part (they sway together); check L8 vs L4 Sailbloop silhouettes (both have a tall top shape) |
| IP check | Pokémon: **Dragonair** (rồng rắn xanh, cánh trắng nhỏ hai bên đầu, cầu xanh ở cổ/đuôi) → cánh mọc sau gáy, dựng đứng, trong suốt màu kem, không cầu. Butterfree/Beautifly: không cánh côn trùng có vân. Shellos/Gastrodon như L6. Subnautica: OK. |

**Subject prompt (EN, ghép sau STYLE BLOCK):**

```text
Subject: the blue dragon sea slug from reference cr_sun_07 lab-spliced with a sea butterfly (a swimming pteropod snail). Keep the aqua (#3FC1C9) body with one cream (#FFF6E0) stripe along the middle of the back and thin deep-blue (#1B6CA8) edge lines, the thin deep-blue line in the back stripe, 2 tiny horns, coral (#FFB4A2) cheek blush, the 2 large front fans and 2 smaller rear fans of cerata with deep-blue dot tips. NEW: exactly one pair of large rounded translucent wings rising straight up and slightly back from the neck, like butterfly wings seen from the side; each wing is about as tall as half the body length, cream (#FFF6E0) membrane at 85% opacity with a scalloped aqua (#3FC1C9) edge and exactly one deep-blue (#1B6CA8) vein line. The wings point upward, never sideways like ears. Two big round dark navy (#12355B) eyes with white catchlights, shy happy expression. Side view facing right, slightly from above. 4 flat colors plus dark navy outline (#12355B).
```

#### E. Audio & VFX
| Field | Value |
|---|---|
| SFX select | `gentle squishy pop with a soft flutter, cute, 0.3s` |
| SFX signature (S3+) | `soft rapid flutter of wings underwater, muffled, 0.5s` |
| Merge VFX tier | S3 |

#### F. Lore
| Field | Value |
|---|---|
| Lab note (hư cấu) | EN: “Grew wings after the intern spilled sea-butterfly samples. Practices flying at night.” (85 ký tự) · VN: “Mọc cánh sau khi thực tập sinh làm đổ mẫu bướm biển. Tập bay ban đêm.” |
| Fun fact (thật) | EN: “Sea butterflies are tiny swimming snails. Their foot evolved into two wing-like flaps that they beat to 'fly' through water.” (124 ký tự) · VN: “Bướm biển là loài ốc bơi tí hon. Chân của chúng tiến hóa thành hai vạt như cánh, vỗ để “bay” trong nước.” |
| Mutation note | EN: “Lab twist: sea butterfly wings grafted on. Real blue dragons cannot fly.” (72 ký tự) · VN: “Đột biến lab: ghép cánh bướm biển. Sên rồng xanh thật không bay được.” |
| Nguồn | Smithsonian Magazine – The Gorgeous Shapes of Sea Butterflies – https://www.smithsonianmag.com/science-nature/the-gorgeous-shapes-of-sea-butterflies-7399527/ |
| Fact status | sourced (URL đã có; cần người đọc nguồn gốc để lên `verified`) |

#### G. Stats
| Field | Value |
|---|---|
| Variants | base, ab (aberrant palette: thân `#FFB4A2` coral, cánh `#FFF6E0` mép `#FFD166`, viền/chấm `#6C5BD4`) |
| Passive (chỉ S5) | — |
| Unlock | merge |
| Spawn from egg | no |

#### J. Acceptance checklist (Definition of Done)
- [ ] Silhouette test 48px đạt (đúng thứ tự trong Act, không nhầm trong zone)
- [ ] +1 big feature so với level trước; không chỉ đổi màu
- [ ] ≥ 70% màu thuộc palette zone; outline đúng màu, 2px @1x
- [ ] Đọc được trên 4 nền test (trắng, đen, wallpaper rực, IDE dark)
- [ ] Grayscale 64px vẫn nhận ra; colorblind filter OK
- [ ] Quay phải, pivot đúng, ≤ 5 part, part nối không hở khi tween
- [ ] Tween preset chạy mượt, không jitter; Calm mode OK
- [ ] File đặt tên đúng, @1x + @2x, trim + padding 2px, vào atlas
- [ ] IP check xong (Pokémon, Subnautica, reverse image search)
- [ ] Hand-edit notes + ảnh before/after lưu
- [ ] Fun fact `verified` với nguồn
- [ ] Tên EN/VN đúng giới hạn độ dài, không trùng IP
- [ ] Data validate (zod) pass; ID không trùng; chain liền mạch

---

### [cr_sun_09] Bubbloon / Sên Bè Bọt

#### A. Định danh
| Field | Value |
|---|---|
| ID | cr_sun_09 |
| Zone / Level | sun / L9 |
| Act / Stage | Act II / S4 (Mutant) |
| Family | MOL |
| Evolves from → to | cr_sun_08 → cr_sun_10 |
| Heritage trait | — |
| Real anchor | Blue dragon × violet sea snail raft (lab splice), *Glaucus atlanticus × Janthina janthina*, 0–1 m, Janthina shell ~2–4 cm (draft) |
| Personality | chill |

#### B. Visual
| Field | Value |
|---|---|
| Silhouette (1 câu) | winged dragon slug sitting on a round cushion of 7 bubbles: bottom mass becomes bumpy and round |
| Big feature mới so với level trước | raft of 7 bubbles under the belly (violet snail float) |
| Shape language | Khối bọt tròn bên dưới + cánh trên; thư thái, “ngồi thuyền” |
| Distinct features (≤ 4) | 1. 7 bubbles in 3 sizes, cream with thin violet rims + white highlight 2. soft white glow around the raft 3. wing edges tinted violet 4. 4 fans + 2 wings kept |
| Mutation axis | chính: FIN; phụ: PAT |
| Palette (hex) | primary `#3FC1C9`, secondary `#FFF6E0`, accent `#8C6FD9`, eye `#12355B`, outline `#12355B`, glow `#FFFFFF`. 5 màu + glow: aqua, kem, deep blue `#1B6CA8`, coral `#FFB4A2`, violet `#8C6FD9` (màu ngoài palette duy nhất, ≤ 15% diện tích, từ *Janthina*). |
| Size class | 68 px @1x (136 @2x) |
| Facing / pivot | right / (0.5, 0.5) |
| Layered parts (≤ 5) | `body`, `eyes`, `wing`, `tentacles`, `glow` (5) |
| Creepy dial | 0 |
| Check giới hạn stage (4.3) | Màu 5 + glow ✓ · mắt 2 ✓ · appendage 6 (≤ 8; bè bọt không tính appendage) ✓ · pattern 2 lớp ✓ · glow alpha 0.5 ✓ |

#### C. Motion & behavior
| Field | Value |
|---|---|
| Lane | mid |
| Movement preset | GLIDE_FLAP |
| Param overrides | `periodMin 1000`, `periodMax 1400`, `amplitudeY 3`, `rotateDeg 2`, `speedMin 3`, `speedMax 6`, `ease Sine.easeInOut` |
| Idle behaviors | blink, look, glow_pulse, yawn; signature `bubble_puff`: 3 bubble particles rise from the raft, body scaleY 1.05 in 300ms, raft glow alpha 0.7→0.9→0.5 (mỗi 40–100s) |
| Interactions | hover: ignore (chill); click: squash 0.85/1.15 + emote; schooling: no |
| Active hours | always |

#### D. Art production
| Field | Value |
|---|---|
| Ref IDs | STYLE-01, STYLE-02, STYLE-03, cr_sun_08 |
| Gemini prompt (+) | [STYLE BLOCK] + subject bên dưới |
| Negative / avoid | [NEGATIVE BLOCK] + `fluffy cotton cloud, Altaria-like cotton wings, snail shell, more than 7 bubbles, bubbles floating away, foam texture, water splash, legs, purple body` |
| Model / ngày / số lần thử | nano-banana-pro / (điền) / ước tính 4–8 |
| Hand-edit notes | exactly 7 bubbles, circles not cloud puffs; raft baked into body; glow part sits behind raft; violet ≤ 15% of pixel area (measure); fans + wings still readable above raft at 68px |
| IP check | Pokémon: **Altaria/Swablu** (chim xanh cánh bông mây) → bọt là vòng tròn rõ, nằm dưới bụng, không bông xù, cánh màng trong suốt. Shellos/Gastrodon như L6. Tên Bubbloon: không trùng Pokémon; reverse/Steam search vì là từ ghép dễ trùng. Subnautica: không giống Floater (khinh khí cầu bám đá). |

**Subject prompt (EN, ghép sau STYLE BLOCK):**

```text
Subject: the winged blue dragon sea slug from reference cr_sun_08 lab-spliced with a violet sea snail's bubble raft. Keep the aqua (#3FC1C9) body with one cream (#FFF6E0) stripe along the middle of the back and thin deep-blue (#1B6CA8) edge lines, 2 tiny horns, coral (#FFB4A2) cheek blush, the 2 front and 2 rear cerata fans with deep-blue dot tips, and the pair of tall translucent cream wings rising from the neck; the wing edges are now tinted violet (#8C6FD9). NEW: the slug rests on top of a raft of exactly 7 round bubbles clustered under its belly like a floating cushion, bubbles in 3 sizes, cream-white (#FFF6E0) with thin violet (#8C6FD9) rims and one small white highlight each. A soft white (#FFFFFF) glow at 50% opacity around the bubble raft only. Two big round dark navy (#12355B) eyes with white catchlights, relaxed content expression. Side view facing right, slightly from above. 5 flat colors plus soft white glow and dark navy outline (#12355B).
```

#### E. Audio & VFX
| Field | Value |
|---|---|
| SFX select | `gentle squishy pop with two tiny bubble blips, cute, 0.35s` |
| SFX signature (S3+) | `soft cluster of small bubbles fizzing upward, muffled, 0.5s` |
| Merge VFX tier | S4 |

#### F. Lore
| Field | Value |
|---|---|
| Lab note (hư cấu) | EN: “Blows bubbles, then sits on them. Calls it 'the boat'. Refuses to share the boat.” (81 ký tự) · VN: “Thổi bọt rồi ngồi lên. Gọi là “cái thuyền”. Không cho ai đi chung.” |
| Fun fact (thật) | EN: “Violet sea snails drift at the surface, hanging upside down from a raft of bubbles they trap in mucus with their foot.” (118 ký tự) · VN: “Ốc tím biển trôi trên mặt nước, treo ngược dưới một chiếc bè bọt mà chúng giữ lại bằng chất nhầy tiết từ chân.” |
| Mutation note | EN: “Lab twist: borrowed the violet snail's bubble raft. Skipped the snail part.” (75 ký tự) · VN: “Đột biến lab: mượn bè bọt của ốc tím. Bỏ qua phần làm ốc.” |
| Nguồn | MarLIN (Marine Biological Association) – Violet snail (Janthina janthina) – https://www.marlin.ac.uk/species/detail/2138; National Geographic – How bubble-rafting snails evolved – https://www.nationalgeographic.com/science/article/111019-about-sea-snail-mucus-bubble-rafts |
| Fact status | sourced (URL đã có; cần người đọc nguồn gốc để lên `verified`) |

#### G. Stats
| Field | Value |
|---|---|
| Variants | base, ab (aberrant palette: thân `#E6D7FF` lavender, viền bọt `#FFD166`, sọc/chấm `#6C5BD4`) |
| Passive (chỉ S5) | — |
| Unlock | merge |
| Spawn from egg | no |

#### J. Acceptance checklist (Definition of Done)
- [ ] Silhouette test 48px đạt (đúng thứ tự trong Act, không nhầm trong zone)
- [ ] +1 big feature so với level trước; không chỉ đổi màu
- [ ] ≥ 70% màu thuộc palette zone; outline đúng màu, 2px @1x
- [ ] Đọc được trên 4 nền test (trắng, đen, wallpaper rực, IDE dark)
- [ ] Grayscale 64px vẫn nhận ra; colorblind filter OK
- [ ] Quay phải, pivot đúng, ≤ 5 part, part nối không hở khi tween
- [ ] Tween preset chạy mượt, không jitter; Calm mode OK
- [ ] File đặt tên đúng, @1x + @2x, trim + padding 2px, vào atlas
- [ ] IP check xong (Pokémon, Subnautica, reverse image search)
- [ ] Hand-edit notes + ảnh before/after lưu
- [ ] Fun fact `verified` với nguồn
- [ ] Tên EN/VN đúng giới hạn độ dài, không trùng IP
- [ ] Data validate (zod) pass; ID không trùng; chain liền mạch

---

### [cr_sun_10] Armada / Rồng Hạm Đội

#### A. Định danh
| Field | Value |
|---|---|
| ID | cr_sun_10 |
| Zone / Level | sun / L10 |
| Act / Stage | Act II / S5 (Apex) |
| Family | MOL |
| Evolves from → to | cr_sun_09 → cr_sun_11 (Spikelet, Act III, ngoài phạm vi file này) |
| Heritage trait | — |
| Real anchor | Blue dragon × sea angel (lab apex), *Glaucus atlanticus × Clione limacina*, 0–200 m, Clione often 1–3 cm, up to ~5 cm (draft) |
| Personality | show-off |

#### B. Visual
| Field | Value |
|---|---|
| Silhouette (1 câu) | 4-winged dragon slug on a bubble raft with aura: widest, tallest shape of Act II |
| Big feature mới so với level trước | second, smaller pair of sea-angel wings behind the first: 4 wings total (FIN crown 'double sail') |
| Shape language | 4 cánh xòe + bè bọt + aura; bệ vệ, “đô đốc hạm đội” |
| Distinct features (≤ 4) | 1. rear wing pair 0.7× front, angled back 2. one violet dot at every wing tip (heritage → L11 Spikelet) 3. white aura ring + 3 four-point sparkles 4. raft, fans, stripe kept |
| Mutation axis | chính: FIN; phụ: PAT |
| Palette (hex) | primary `#3FC1C9`, secondary `#FFF6E0`, accent `#8C6FD9`, eye `#12355B`, outline `#12355B`, glow `#FFFFFF`. 5 màu + glow: aqua, kem, deep blue `#1B6CA8`, coral `#FFB4A2`, violet `#8C6FD9` (≤ 20% diện tích). Outline 2.5px. |
| Size class | 76 px @1x (152 @2x) |
| Facing / pivot | right / (0.5, 0.5) |
| Layered parts (≤ 5) | `body`, `eyes`, `wing`, `tentacles`, `glow` (5) |
| Creepy dial | 1 |
| Check giới hạn stage (4.3) | Màu 5 + glow ✓ · mắt 2 ✓ · appendage 8 (4 quạt + 4 cánh, ≤ 8) ✓ · pattern + highlight ✓ · glow pulse + aura ✓ |

#### C. Motion & behavior
| Field | Value |
|---|---|
| Lane | front |
| Movement preset | GLIDE_FLAP |
| Param overrides | `periodMin 700`, `periodMax 1000`, `amplitudeY 5`, `rotateDeg 3`, `speedMin 5`, `speedMax 9`, `ease Sine.easeInOut` |
| Idle behaviors | blink, look, glow_pulse; signature `fleet_salute`: wings spread scaleY 1.15 in 500ms, aura ring scale 1.0→1.3 + alpha 0.8→0 in 900ms, 3 four-point sparkles, emote ✦ (mỗi 60–120s) |
| Interactions | hover: look (show-off); click: squash 0.85/1.15 + emote; schooling: no |
| Active hours | always |

#### D. Art production
| Field | Value |
|---|---|
| Ref IDs | STYLE-01, STYLE-02, STYLE-03, cr_sun_09, cr_sun_06 |
| Gemini prompt (+) | [STYLE BLOCK] + subject bên dưới |
| Negative / avoid | [NEGATIVE BLOCK] + `halo, angel human features, crown, feathered wings, Altaria-like cotton clouds, more than 4 wings, more than 2 eyes, shell, armor, insect wings, menacing expression, red` |
| Model / ngày / số lần thử | nano-banana-pro / (điền) / ước tính 5–8 |
| Hand-edit notes | count 4 wings + 4 fans = 8 appendages; both wing pairs in one wing part (flap together, rear pair scaled 0.7); violet tip dots ≥ 3px @1x (heritage must read); outline 2.5px @1x; aura as glow part |
| IP check | Pokémon: Altaria (cánh mây) → bọt tròn, cánh màng; Dragonair (cánh đầu) → cánh sau gáy; Mantine (cá đuối cánh) → thân sên + quạt rõ. Không halo (tránh nhầm thiên thần tôn giáo). Tên “Armada” là từ chung (có game cùng tên): chỉ là tên sinh vật, rủi ro thấp. Subnautica: OK. |

**Subject prompt (EN, ghép sau STYLE BLOCK):**

```text
Subject: the apex form of the bubble-raft blue dragon sea slug from reference cr_sun_09, majestic but still cute, same face as reference cr_sun_06. Keep the aqua (#3FC1C9) body with one cream (#FFF6E0) stripe along the middle of the back and thin deep-blue (#1B6CA8) edge lines, 2 tiny horns, coral (#FFB4A2) cheek blush, 2 front and 2 rear cerata fans with deep-blue dot tips, the raft of exactly 7 bubbles under the belly with violet (#8C6FD9) rims, and the front pair of tall translucent cream wings. NEW: a second, smaller pair of translucent cream wings (about 0.7 times the size of the front pair) just behind the first pair, angled backward like a sea angel's wings, so the creature has exactly 4 wings in total; every wing tip ends in one round violet (#8C6FD9) dot. A soft white (#FFFFFF) aura ring and exactly 3 small four-point sparkles around the creature. Two big round dark navy (#12355B) eyes with white catchlights, proud gentle smile, chin slightly raised. Side view facing right, slightly from above, wings spread. 5 flat colors plus white glow, slightly thicker dark navy outline (#12355B).
```

#### E. Audio & VFX
| Field | Value |
|---|---|
| SFX select | `gentle squishy pop with a soft sparkling shimmer, 0.4s` |
| SFX signature (S3+) | `short airy flutter with a bright three-note arpeggio, soft, 0.7s` |
| Merge VFX tier | S5 |

#### F. Lore
| Field | Value |
|---|---|
| Lab note (hư cấu) | EN: “Assembled a fleet of one. Salutes the lab lamp every morning. Morale is excellent.” (82 ký tự) · VN: “Tự lập hạm đội một thành viên. Sáng nào cũng chào đèn lab. Sĩ khí rất cao.” |
| Fun fact (thật) | EN: “The sea angel Clione limacina is a shell-less relative of sea butterflies, and it feeds mainly on them.” (103 ký tự) · VN: “Thiên thần biển Clione limacina là họ hàng không vỏ của bướm biển, và thức ăn chính của nó lại là bướm biển.” |
| Mutation note | EN: “Lab twist: four sea-angel wings. Nature managed with two.” (57 ký tự) · VN: “Đột biến lab: bốn cánh thiên thần biển. Tự nhiên chỉ cần hai.” |
| Nguồn | Monterey Bay Aquarium – Sea angel – https://www.montereybayaquarium.org/animals/animals-a-to-z/sea-angel; Smithsonian Ocean – A Chorus of Sea Angels – https://ocean.si.edu/ocean-life/invertebrates/chorus-sea-angels |
| Fact status | sourced (URL đã có; cần người đọc nguồn gốc để lên `verified`) |

#### G. Stats
| Field | Value |
|---|---|
| Variants | base, ab (aberrant palette: “Pearl Armada”: thân `#F4F7FF`, sọc/viền `#6C5BD4`, đầu cánh + viền bọt `#FFD166`) |
| Passive (chỉ S5) | zoneIncome +3% |
| Unlock | merge |
| Spawn from egg | no |

#### J. Acceptance checklist (Definition of Done)
- [ ] Silhouette test 48px đạt (đúng thứ tự trong Act, không nhầm trong zone)
- [ ] +1 big feature so với level trước; không chỉ đổi màu
- [ ] ≥ 70% màu thuộc palette zone; outline đúng màu, 2px @1x (2.5px vì S5)
- [ ] Đọc được trên 4 nền test (trắng, đen, wallpaper rực, IDE dark)
- [ ] Grayscale 64px vẫn nhận ra; colorblind filter OK
- [ ] Quay phải, pivot đúng, ≤ 5 part, part nối không hở khi tween
- [ ] Tween preset chạy mượt, không jitter; Calm mode OK
- [ ] File đặt tên đúng, @1x + @2x, trim + padding 2px, vào atlas
- [ ] IP check xong (Pokémon, Subnautica, reverse image search)
- [ ] Hand-edit notes + ảnh before/after lưu
- [ ] Fun fact `verified` với nguồn
- [ ] Tên EN/VN đúng giới hạn độ dài, không trùng IP
- [ ] Data validate (zod) pass; ID không trùng; chain liền mạch

---


## 5. Data: CreatureDef JSON (schema 11.2)

Income không nằm trong data (bible 4.2). `cr_sun_10.evolvesTo = "cr_sun_11"` trỏ sang Act III (chưa spec). `ipCheck.*` để `false` tới khi chạy Bulbapedia/Lens sau khi gen.

**Validation (10/2026, script node):** PASS. Đã kiểm: parse JSON; 10 ID duy nhất, đúng regex; chuỗi `evolvesFrom/To` liền mạch 01→10→`cr_sun_11`; `act = ceil(L/5)`, `stage = ((L−1)%5)+1`; size class đúng bảng 6.5; `parts ≤ 5` và có body/eyes; features ≤ 4; hex hợp lệ; glow chỉ từ S4; passive chỉ ở S5, ≤ 5%, tổng 6%; heritage chỉ ở S1 Act II; `spawnFromEgg` chỉ L1–3; creepy ≤ 1; prompt có hex, có “facing right” và có ref con trước; `sourced` đều có URL https; i18n en/vi đủ 40 key, độ dài tên ≤ 10/16, lab ≤ 100, fact ≤ 160, mutation ≤ 80.

<!-- CREATURE_DEFS -->
```json
[
  {
    "id": "cr_sun_01",
    "zone": "sun",
    "level": 1,
    "act": 1,
    "stage": 1,
    "family": "JEL",
    "nameKey": "creature.cr_sun_01.name",
    "evolvesFrom": null,
    "evolvesTo": "cr_sun_02",
    "realAnchor": {
      "common": "Moon jelly (ephyra)",
      "latin": "Aurelia aurita",
      "depthM": [
        0,
        200
      ],
      "realSize": "ephyra ~2–5 mm (draft)"
    },
    "personality": "curious",
    "visual": {
      "displayHeightPx": 40,
      "silhouette": "flat round disc with 8 rounded star lobes",
      "newBigFeature": "8 star lobes (root form)",
      "features": [
        "coral dot on each of the 8 lobe tips",
        "faint teal four-leaf-clover mark in disc center (teases L2)",
        "2 big eyes at lower edge"
      ],
      "axes": {
        "primary": "PAT"
      },
      "palette": {
        "primary": "#FFF6E0",
        "secondary": "#3FC1C9",
        "accent": "#FFB4A2",
        "eye": "#12355B",
        "outline": "#12355B"
      },
      "pivot": {
        "x": 0.5,
        "y": 0.5
      },
      "parts": [
        {
          "name": "body",
          "pivot": {
            "x": 0.5,
            "y": 0.5
          },
          "offset": {
            "x": 0,
            "y": 0
          },
          "z": 0
        },
        {
          "name": "eyes",
          "pivot": {
            "x": 0.5,
            "y": 0.5
          },
          "offset": {
            "x": 3,
            "y": 6
          },
          "z": 1
        }
      ],
      "creepyDial": 0
    },
    "motion": {
      "lane": "mid",
      "preset": "DRIFT_PULSE",
      "params": {
        "periodMin": 1400,
        "periodMax": 1900,
        "squash": 0.84,
        "stretch": 1.08,
        "rise": 8,
        "speedMin": 3,
        "speedMax": 6
      },
      "idle": [
        "blink",
        "look"
      ],
      "signature": {
        "id": "double_pulse",
        "desc": "2 quick bell pulses (scaleY 0.8, 180ms each) then coasts 1.5s. Game flourish only, no biology claim (replaces unverified 'ephyra spins', review R5)",
        "everyMs": [
          40000,
          90000
        ]
      },
      "hover": "approach",
      "schooling": false,
      "activeHours": "diurnal"
    },
    "art": {
      "refIds": [
        "STYLE-01",
        "STYLE-02",
        "STYLE-03"
      ],
      "promptSubject": "Subject: a tiny baby moon jellyfish (ephyra stage). Flat round translucent cream-colored disc (#FFF6E0) with exactly 8 rounded star-like lobes evenly spaced around the edge, each lobe tip has one small coral dot (#FFB4A2). A faint teal (#3FC1C9) four-leaf-clover mark in the center of the disc. Two big round dark navy (#12355B) eyes with white catchlights near the lower edge, curious happy expression, tiny smile. Side view facing right, disc tilted slightly upward so the disc face and all 8 lobes are visible. Very simple: 3 flat colors plus dark navy outline (#12355B).",
      "promptNegativeExtra": "tentacles, long oral arms, bell or dome shape, glow, more than 8 lobes, more than 2 eyes, starfish texture, cookie texture, gem in the center, motion lines",
      "model": "nano-banana-pro",
      "handEditNotes": [
        "count exactly 8 symmetric lobes",
        "uniform 2px outline @1x",
        "remove AI gradients",
        "enlarge eye catchlights",
        "split eyes into own part, paint skin under eyes",
        "clean magenta fringe"
      ],
      "ipCheck": {
        "pokemon": false,
        "subnautica": false,
        "reverseImage": false,
        "notes": "paper pre-check done in spec; run Bulbapedia + Subnautica wiki + Google Lens after generation"
      },
      "status": "spec"
    },
    "audio": {
      "selectSfx": "tiny soft wet bloop, cute, underwater, muffled, 0.25s, high pitched"
    },
    "lore": {
      "labNoteKey": "creature.cr_sun_01.lab",
      "funFactKey": "creature.cr_sun_01.fact",
      "mutationNoteKey": "creature.cr_sun_01.mut",
      "sources": [
        {
          "title": "Animal Diversity Web (Univ. of Michigan) – Aurelia aurita, moon jellyfish",
          "url": "https://animaldiversity.org/accounts/Aurelia_aurita/"
        },
        {
          "title": "Smithsonian Ocean – Jellyfish and Comb Jellies",
          "url": "https://ocean.si.edu/ocean-life/invertebrates/jellyfish-and-comb-jellies"
        }
      ],
      "factStatus": "sourced"
    },
    "stats": {
      "variants": [
        "base",
        "ab"
      ],
      "unlock": {
        "type": "merge"
      },
      "spawnFromEgg": true
    }
  },
  {
    "id": "cr_sun_02",
    "zone": "sun",
    "level": 2,
    "act": 1,
    "stage": 2,
    "family": "JEL",
    "nameKey": "creature.cr_sun_02.name",
    "evolvesFrom": "cr_sun_01",
    "evolvesTo": "cr_sun_03",
    "realAnchor": {
      "common": "Moon jelly (juvenile medusa)",
      "latin": "Aurelia aurita",
      "depthM": [
        0,
        200
      ],
      "realSize": "juvenile bell ~1–5 cm (draft)"
    },
    "personality": "shy",
    "visual": {
      "displayHeightPx": 44,
      "silhouette": "smooth soft dome like a steamed bun, no appendages",
      "newBigFeature": "flat disc closes into a domed bell",
      "features": [
        "4 teal horseshoe rings forming a clover on top of the dome",
        "8 tiny coral dots on the bell rim (lobes remnant)",
        "very short scalloped rim",
        "2 big eyes, light blush"
      ],
      "axes": {
        "primary": "PAT"
      },
      "palette": {
        "primary": "#FFF6E0",
        "secondary": "#3FC1C9",
        "accent": "#FFB4A2",
        "eye": "#12355B",
        "outline": "#12355B"
      },
      "pivot": {
        "x": 0.5,
        "y": 0.45
      },
      "parts": [
        {
          "name": "body",
          "pivot": {
            "x": 0.5,
            "y": 0.45
          },
          "offset": {
            "x": 0,
            "y": 0
          },
          "z": 0
        },
        {
          "name": "eyes",
          "pivot": {
            "x": 0.5,
            "y": 0.5
          },
          "offset": {
            "x": 3,
            "y": 7
          },
          "z": 1
        }
      ],
      "creepyDial": 0
    },
    "motion": {
      "lane": "mid",
      "preset": "DRIFT_PULSE",
      "params": {
        "periodMin": 1700,
        "periodMax": 2200,
        "squash": 0.86,
        "stretch": 1.06,
        "rise": 9,
        "speedMin": 3,
        "speedMax": 6
      },
      "idle": [
        "blink",
        "look",
        "yawn"
      ],
      "signature": {
        "id": "peek_hide",
        "desc": "tilts 15° toward the cursor for 600ms, then tucks back and sinks 8px (shy)",
        "everyMs": [
          45000,
          100000
        ]
      },
      "hover": "flee",
      "schooling": false,
      "activeHours": "diurnal"
    },
    "art": {
      "refIds": [
        "STYLE-01",
        "STYLE-02",
        "STYLE-03",
        "cr_sun_01"
      ],
      "promptSubject": "Subject: a young moon jellyfish, small and round like a soft steamed bun. A smooth dome-shaped bell in translucent cream (#FFF6E0), about 1.3 times wider than tall. On top of the dome, a teal (#3FC1C9) pattern of exactly 4 small horseshoe-shaped rings arranged like a four-leaf clover. Exactly 8 tiny coral (#FFB4A2) dots evenly spaced along the bell rim, which has a very short scalloped edge. Two big round dark navy (#12355B) eyes with white catchlights in the lower third of the bell, shy gentle expression, light coral blush. No tentacles and no arms at all. Side view facing right, bell tilted slightly toward the viewer so the clover on top is visible. Keep the same face, cream color and coral dots as the reference cr_sun_01. 3 flat colors plus dark navy outline (#12355B).",
      "promptNegativeExtra": "tentacles, oral arms, flat disc, star lobes, gems, crown, red, more than 2 eyes, mushroom cap, bread texture",
      "model": "nano-banana-pro",
      "handEditNotes": [
        "make dome symmetric",
        "exactly 4 clover rings",
        "8 rim dots evenly spaced",
        "uniform outline",
        "split eyes part"
      ],
      "ipCheck": {
        "pokemon": false,
        "subnautica": false,
        "reverseImage": false,
        "notes": "paper pre-check done in spec; run Bulbapedia + Subnautica wiki + Google Lens after generation"
      },
      "status": "spec"
    },
    "audio": {
      "selectSfx": "tiny soft bubble bloop, shy, muffled underwater, 0.25s"
    },
    "lore": {
      "labNoteKey": "creature.cr_sun_02.lab",
      "funFactKey": "creature.cr_sun_02.fact",
      "mutationNoteKey": "creature.cr_sun_02.mut",
      "sources": [
        {
          "title": "Animal Diversity Web (Univ. of Michigan) – Aurelia aurita, moon jellyfish",
          "url": "https://animaldiversity.org/accounts/Aurelia_aurita/"
        }
      ],
      "factStatus": "sourced"
    },
    "stats": {
      "variants": [
        "base",
        "ab"
      ],
      "unlock": {
        "type": "merge"
      },
      "spawnFromEgg": true
    }
  },
  {
    "id": "cr_sun_03",
    "zone": "sun",
    "level": 3,
    "act": 1,
    "stage": 3,
    "family": "JEL",
    "nameKey": "creature.cr_sun_03.name",
    "evolvesFrom": "cr_sun_02",
    "evolvesTo": "cr_sun_04",
    "realAnchor": {
      "common": "Moon jelly (adult)",
      "latin": "Aurelia aurita",
      "depthM": [
        0,
        200
      ],
      "realSize": "bell often ~25–40 cm (draft)"
    },
    "personality": "chill",
    "visual": {
      "displayHeightPx": 50,
      "silhouette": "dome bell with 4 short frilly arms hanging below",
      "newBigFeature": "4 frilly oral arms hanging under the bell",
      "features": [
        "4 frilly oral arms (~0.6× bell height), coral frilly edges",
        "teal 4-ring clover on dome",
        "thin deep-blue scalloped fringe line on rim",
        "2 big calm eyes"
      ],
      "axes": {
        "primary": "TEN"
      },
      "palette": {
        "primary": "#FFF6E0",
        "secondary": "#3FC1C9",
        "accent": "#FFB4A2",
        "eye": "#12355B",
        "outline": "#12355B"
      },
      "pivot": {
        "x": 0.5,
        "y": 0.35
      },
      "parts": [
        {
          "name": "body",
          "pivot": {
            "x": 0.5,
            "y": 0.35
          },
          "offset": {
            "x": 0,
            "y": 0
          },
          "z": 1
        },
        {
          "name": "eyes",
          "pivot": {
            "x": 0.5,
            "y": 0.5
          },
          "offset": {
            "x": 3,
            "y": 5
          },
          "z": 2
        },
        {
          "name": "tentacles",
          "pivot": {
            "x": 0.5,
            "y": 0.0
          },
          "offset": {
            "x": 0,
            "y": 12
          },
          "z": 0,
          "tween": {
            "prop": "angle",
            "from": -4,
            "to": 4,
            "period": 2200,
            "ease": "Sine.easeInOut",
            "phaseMs": 200
          }
        }
      ],
      "creepyDial": 0
    },
    "motion": {
      "lane": "mid",
      "preset": "DRIFT_PULSE",
      "params": {
        "periodMin": 1900,
        "periodMax": 2400,
        "squash": 0.86,
        "stretch": 1.06,
        "rise": 10,
        "speedMin": 3,
        "speedMax": 7
      },
      "idle": [
        "blink",
        "look",
        "yawn"
      ],
      "signature": {
        "id": "arm_wave",
        "desc": "tentacles part angle ±12° over 1200ms, 2 cycles, like waving hello",
        "everyMs": [
          30000,
          80000
        ]
      },
      "hover": "ignore",
      "schooling": false,
      "activeHours": "always"
    },
    "art": {
      "refIds": [
        "STYLE-01",
        "STYLE-02",
        "STYLE-03",
        "cr_sun_02"
      ],
      "promptSubject": "Subject: an adult moon jellyfish. Same translucent cream (#FFF6E0) dome bell and teal (#3FC1C9) four-leaf clover of exactly 4 horseshoe rings on top as the reference cr_sun_02, now with one thin deep-blue (#1B6CA8) scalloped fringe line along the bell rim. NEW: exactly 4 short frilly oral arms hanging straight down from under the bell center, each arm wavy like a ribbon of lettuce, about 0.6 times the bell height, cream with coral (#FFB4A2) frilly edges. Two big round dark navy (#12355B) eyes with white catchlights in the lower third of the bell, calm content half-smile. Side view facing right, bell tilted slightly toward the viewer. 4 flat colors plus dark navy outline (#12355B).",
      "promptNegativeExtra": "long thin tentacles longer than the bell, red or ruby orbs, beak, crown, more than 4 arms, stinging threads, gems, Tentacool-like look",
      "model": "nano-banana-pro",
      "handEditNotes": [
        "exactly 4 arms, equal spacing",
        "arms ≤ 0.6× bell height",
        "fringe as single scalloped line (no hair-thin tentacles)",
        "split tentacles part, overdraw 4px under bell",
        "uniform outline"
      ],
      "ipCheck": {
        "pokemon": false,
        "subnautica": false,
        "reverseImage": false,
        "notes": "paper pre-check done in spec; run Bulbapedia + Subnautica wiki + Google Lens after generation"
      },
      "status": "spec"
    },
    "audio": {
      "selectSfx": "soft wet bubble bloop, gentle, underwater, muffled, 0.3s",
      "signatureSfx": "very soft fluttering water swirl, gentle, 0.4s"
    },
    "lore": {
      "labNoteKey": "creature.cr_sun_03.lab",
      "funFactKey": "creature.cr_sun_03.fact",
      "mutationNoteKey": "creature.cr_sun_03.mut",
      "sources": [
        {
          "title": "Animal Diversity Web (Univ. of Michigan) – Aurelia aurita, moon jellyfish",
          "url": "https://animaldiversity.org/accounts/Aurelia_aurita/"
        },
        {
          "title": "Smithsonian Ocean – Jellyfish and Comb Jellies",
          "url": "https://ocean.si.edu/ocean-life/invertebrates/jellyfish-and-comb-jellies"
        }
      ],
      "factStatus": "sourced"
    },
    "stats": {
      "variants": [
        "base",
        "ab"
      ],
      "unlock": {
        "type": "merge"
      },
      "spawnFromEgg": true
    }
  },
  {
    "id": "cr_sun_04",
    "zone": "sun",
    "level": 4,
    "act": 1,
    "stage": 4,
    "family": "JEL",
    "nameKey": "creature.cr_sun_04.name",
    "evolvesFrom": "cr_sun_03",
    "evolvesTo": "cr_sun_05",
    "realAnchor": {
      "common": "Moon jelly × Portuguese man o' war (lab splice)",
      "latin": "Aurelia aurita × Physalia physalis",
      "depthM": [
        0,
        1
      ],
      "realSize": "man o' war float ~10–30 cm (draft)"
    },
    "personality": "curious",
    "visual": {
      "displayHeightPx": 56,
      "silhouette": "dome bell topped by a sideways balloon float with a tall crest sail; arms curl below",
      "newBigFeature": "gas float with a crest sail on top of the bell",
      "features": [
        "teal balloon float lying sideways on the bell, coral crest sail leaning back",
        "4 oral arms now ~1× bell height, curled tips (TEN S4)",
        "soft white sheen on float",
        "teal clover + deep-blue fringe kept"
      ],
      "axes": {
        "primary": "TEN",
        "secondary": "FIN"
      },
      "palette": {
        "primary": "#FFF6E0",
        "secondary": "#3FC1C9",
        "accent": "#FFB4A2",
        "eye": "#12355B",
        "outline": "#12355B",
        "glow": "#FFFFFF"
      },
      "pivot": {
        "x": 0.5,
        "y": 0.45
      },
      "parts": [
        {
          "name": "body",
          "pivot": {
            "x": 0.5,
            "y": 0.45
          },
          "offset": {
            "x": 0,
            "y": 0
          },
          "z": 2
        },
        {
          "name": "eyes",
          "pivot": {
            "x": 0.5,
            "y": 0.5
          },
          "offset": {
            "x": 3,
            "y": 8
          },
          "z": 3
        },
        {
          "name": "tentacles",
          "pivot": {
            "x": 0.5,
            "y": 0.0
          },
          "offset": {
            "x": 0,
            "y": 14
          },
          "z": 1,
          "tween": {
            "prop": "angle",
            "from": -5,
            "to": 5,
            "period": 2400,
            "ease": "Sine.easeInOut",
            "phaseMs": 200
          }
        },
        {
          "name": "fin",
          "pivot": {
            "x": 0.3,
            "y": 1.0
          },
          "offset": {
            "x": -2,
            "y": -14
          },
          "z": 4,
          "tween": {
            "prop": "angle",
            "from": -6,
            "to": 6,
            "period": 3000,
            "ease": "Sine.easeInOut",
            "phaseMs": 500
          }
        },
        {
          "name": "glow",
          "pivot": {
            "x": 0.5,
            "y": 0.5
          },
          "offset": {
            "x": 0,
            "y": -14
          },
          "z": 0,
          "blend": "ADD",
          "tween": {
            "prop": "alpha",
            "from": 0.4,
            "to": 0.6,
            "period": 2600,
            "ease": "Sine.easeInOut"
          }
        }
      ],
      "creepyDial": 1
    },
    "motion": {
      "lane": "mid",
      "preset": "DRIFT_PULSE",
      "params": {
        "periodMin": 2000,
        "periodMax": 2500,
        "squash": 0.88,
        "stretch": 1.05,
        "rise": 10,
        "rotateDeg": 4,
        "speedMin": 4,
        "speedMax": 8
      },
      "idle": [
        "blink",
        "look",
        "glow_pulse"
      ],
      "signature": {
        "id": "sail_tilt",
        "desc": "fin part angle 0→−14° 900ms, hold 1.5s while body drifts +30px, as if a gust hits the sail (real man o' war sails catch wind)",
        "everyMs": [
          30000,
          80000
        ]
      },
      "hover": "approach",
      "schooling": false,
      "activeHours": "diurnal"
    },
    "art": {
      "refIds": [
        "STYLE-01",
        "STYLE-02",
        "STYLE-03",
        "cr_sun_03"
      ],
      "promptSubject": "Subject: a moon jellyfish lab-spliced with a Portuguese man o' war float. Keep the cream (#FFF6E0) bell, teal (#3FC1C9) clover rings, deep-blue (#1B6CA8) rim fringe and the 4 frilly oral arms from reference cr_sun_03, but the 4 arms are now longer (about 1 times the bell height) and curl into loose spirals at their ends. NEW: on top of the bell sits a translucent teal (#3FC1C9) gas float shaped like a small balloon lying sideways, about 0.8 times the bell width, with exactly one tall wavy crest-sail along its top ridge in coral (#FFB4A2) with a deep-blue (#1B6CA8) edge; the sail leans slightly backward like a sail catching wind. A soft white (#FFFFFF) low-opacity glow only around the float. Two big round dark navy (#12355B) eyes with white catchlights on the bell, curious cheerful expression. Side view facing right. 4 flat colors plus soft white glow and dark navy outline (#12355B).",
      "promptNegativeExtra": "red or ruby spheres on the head, beak or mouth, two long symmetric tentacles, crown, Tentacool-like clear dome, Jellicent-like collar, more than one sail, gradient on the float, purple-magenta float",
      "model": "nano-banana-pro",
      "handEditNotes": [
        "float sits on bell, overlap hidden under body",
        "single sail, leaning back",
        "arm curls readable at 56px",
        "split fin (float+sail) part with pivot at float base",
        "glow as separate blurred ADD layer"
      ],
      "ipCheck": {
        "pokemon": false,
        "subnautica": false,
        "reverseImage": false,
        "notes": "paper pre-check done in spec; run Bulbapedia + Subnautica wiki + Google Lens after generation"
      },
      "status": "spec"
    },
    "audio": {
      "selectSfx": "soft rubbery bloop with a tiny flap of a sail, underwater, 0.35s",
      "signatureSfx": "light airy whoosh like a small sail filling, muffled, 0.5s"
    },
    "lore": {
      "labNoteKey": "creature.cr_sun_04.lab",
      "funFactKey": "creature.cr_sun_04.fact",
      "mutationNoteKey": "creature.cr_sun_04.mut",
      "sources": [
        {
          "title": "NOAA Ocean Service – What is a Portuguese Man o' War?",
          "url": "https://oceanservice.noaa.gov/facts/portuguese-man-o-war.html"
        }
      ],
      "factStatus": "sourced"
    },
    "stats": {
      "variants": [
        "base",
        "ab"
      ],
      "unlock": {
        "type": "merge"
      },
      "spawnFromEgg": false
    }
  },
  {
    "id": "cr_sun_05",
    "zone": "sun",
    "level": 5,
    "act": 1,
    "stage": 5,
    "family": "JEL",
    "nameKey": "creature.cr_sun_05.name",
    "evolvesFrom": "cr_sun_04",
    "evolvesTo": "cr_sun_06",
    "realAnchor": {
      "common": "Portuguese man o' war ('regal' lab form)",
      "latin": "Physalia physalis",
      "depthM": [
        0,
        1
      ],
      "realSize": "tentacles average ~10 m (NOAA)"
    },
    "personality": "show-off",
    "visual": {
      "displayHeightPx": 64,
      "silhouette": "crested float-bell with 4 long trailing ribbons, tallest shape of Act I",
      "newBigFeature": "4 long flat ribbon tentacles trailing ~1.6× body height (TEN crown)",
      "features": [
        "4 aqua ribbon tentacles, each with 3 deep-blue beads near the tip (heritage source)",
        "sun-gold stripe on the crest sail edge",
        "white aura ring pulse",
        "curled oral arms + float kept"
      ],
      "axes": {
        "primary": "TEN",
        "secondary": "FIN"
      },
      "palette": {
        "primary": "#FFF6E0",
        "secondary": "#3FC1C9",
        "accent": "#FFB4A2",
        "eye": "#12355B",
        "outline": "#12355B",
        "glow": "#FFFFFF"
      },
      "pivot": {
        "x": 0.5,
        "y": 0.3
      },
      "parts": [
        {
          "name": "body",
          "pivot": {
            "x": 0.5,
            "y": 0.3
          },
          "offset": {
            "x": 0,
            "y": 0
          },
          "z": 2
        },
        {
          "name": "eyes",
          "pivot": {
            "x": 0.5,
            "y": 0.5
          },
          "offset": {
            "x": 3,
            "y": 8
          },
          "z": 3
        },
        {
          "name": "tentacles",
          "pivot": {
            "x": 0.5,
            "y": 0.0
          },
          "offset": {
            "x": 0,
            "y": 16
          },
          "z": 1,
          "tween": {
            "prop": "angle",
            "from": -5,
            "to": 5,
            "period": 2800,
            "ease": "Sine.easeInOut",
            "phaseMs": 250
          }
        },
        {
          "name": "fin",
          "pivot": {
            "x": 0.3,
            "y": 1.0
          },
          "offset": {
            "x": -2,
            "y": -16
          },
          "z": 4,
          "tween": {
            "prop": "angle",
            "from": -6,
            "to": 6,
            "period": 3200,
            "ease": "Sine.easeInOut",
            "phaseMs": 500
          }
        },
        {
          "name": "glow",
          "pivot": {
            "x": 0.5,
            "y": 0.5
          },
          "offset": {
            "x": 0,
            "y": 0
          },
          "z": 0,
          "blend": "ADD",
          "tween": {
            "prop": "alpha",
            "from": 0.35,
            "to": 0.9,
            "period": 2800,
            "ease": "Sine.easeInOut"
          }
        }
      ],
      "creepyDial": 1
    },
    "motion": {
      "lane": "front",
      "preset": "DRIFT_PULSE",
      "params": {
        "periodMin": 2200,
        "periodMax": 2600,
        "squash": 0.88,
        "stretch": 1.05,
        "rise": 12,
        "rotateDeg": 4,
        "speedMin": 4,
        "speedMax": 8
      },
      "idle": [
        "blink",
        "look",
        "glow_pulse"
      ],
      "signature": {
        "id": "regatta_lap",
        "desc": "drifts to strip center, sail tilts −14°, ribbons sway ±10°, aura ring alpha 0.4→0.8, 3s total",
        "everyMs": [
          40000,
          100000
        ]
      },
      "hover": "look",
      "schooling": false,
      "activeHours": "always"
    },
    "art": {
      "refIds": [
        "STYLE-01",
        "STYLE-02",
        "STYLE-03",
        "cr_sun_04"
      ],
      "promptSubject": "Subject: the apex form of the sail jellyfish from reference cr_sun_04, regal and proud. Keep the cream (#FFF6E0) bell with teal (#3FC1C9) clover rings, the teal gas float with exactly one tall coral (#FFB4A2) crest-sail, and the 4 curly oral arms. NEW: exactly 4 long flat ribbon tentacles in teal (#3FC1C9) trailing down and slightly backward, each about 1.6 times the height of the bell-and-float, gently wavy, each ribbon with exactly 3 round deep-blue (#1B6CA8) beads near its tip. The crest-sail now has one thin sun-gold (#FFD166) stripe along its top edge. A soft white (#FFFFFF) aura ring around the whole creature. Two big round dark navy (#12355B) eyes with white catchlights, confident proud smile. Side view facing right. 5 flat colors plus white glow, slightly thicker dark navy outline (#12355B).",
      "promptNegativeExtra": "red or ruby orbs, beak, crown shape, mustache-like front tentacles, Tentacruel-like look, Jellicent-like collar, more than 4 ribbons, more than one sail, many thin hair tentacles, menacing look",
      "model": "nano-banana-pro",
      "handEditNotes": [
        "exactly 4 ribbons + 4 arms (≤ 8)",
        "3 beads per ribbon, ≥ 3px @1x",
        "ribbons share one tentacles part with arms (overdraw join)",
        "outline 2.5px @1x",
        "aura as glow part, not baked"
      ],
      "ipCheck": {
        "pokemon": false,
        "subnautica": false,
        "reverseImage": false,
        "notes": "paper pre-check done in spec; run Bulbapedia + Subnautica wiki + Google Lens after generation"
      },
      "status": "spec"
    },
    "audio": {
      "selectSfx": "soft rubbery bloop with a gentle bell-like shimmer, underwater, 0.4s",
      "signatureSfx": "short airy sail whoosh with a tiny two-note chime, 0.6s"
    },
    "lore": {
      "labNoteKey": "creature.cr_sun_05.lab",
      "funFactKey": "creature.cr_sun_05.fact",
      "mutationNoteKey": "creature.cr_sun_05.mut",
      "sources": [
        {
          "title": "NOAA Ocean Service – What is a Portuguese Man o' War?",
          "url": "https://oceanservice.noaa.gov/facts/portuguese-man-o-war.html"
        }
      ],
      "factStatus": "sourced"
    },
    "stats": {
      "variants": [
        "base",
        "ab"
      ],
      "unlock": {
        "type": "merge"
      },
      "spawnFromEgg": false,
      "passive": {
        "type": "eggRate",
        "value": 0.03
      }
    }
  },
  {
    "id": "cr_sun_06",
    "zone": "sun",
    "level": 6,
    "act": 2,
    "stage": 1,
    "family": "MOL",
    "nameKey": "creature.cr_sun_06.name",
    "evolvesFrom": "cr_sun_05",
    "evolvesTo": "cr_sun_07",
    "heritageFrom": {
      "id": "cr_sun_05",
      "trait": "deep-blue dot tips on every cerata finger, from Regatta's ribbon beads (stolen stinging cells)"
    },
    "realAnchor": {
      "common": "Blue dragon sea slug (styled juvenile)",
      "latin": "Glaucus atlanticus",
      "depthM": [
        0,
        1
      ],
      "realSize": "adult < 3 cm"
    },
    "personality": "curious",
    "visual": {
      "displayHeightPx": 52,
      "silhouette": "slim tapered slug with 2 big fan 'wings' and an upturned tail: a tiny winged dragon",
      "newBigFeature": "family leap: slim slug body + 1 pair of big fan-shaped cerata clusters",
      "features": [
        "2 large cerata fans (3 rounded finger tufts each) with deep-blue dot tips (heritage)",
        "cream stripe down the back, deep-blue edge lines",
        "2 tiny rounded horn-like rhinophores",
        "short upturned pointed tail"
      ],
      "axes": {
        "primary": "TEN"
      },
      "palette": {
        "primary": "#3FC1C9",
        "secondary": "#FFF6E0",
        "accent": "#1B6CA8",
        "eye": "#12355B",
        "outline": "#12355B"
      },
      "pivot": {
        "x": 0.5,
        "y": 0.55
      },
      "parts": [
        {
          "name": "body",
          "pivot": {
            "x": 0.5,
            "y": 0.55
          },
          "offset": {
            "x": 0,
            "y": 0
          },
          "z": 1
        },
        {
          "name": "eyes",
          "pivot": {
            "x": 0.5,
            "y": 0.5
          },
          "offset": {
            "x": 14,
            "y": -4
          },
          "z": 2
        },
        {
          "name": "wing",
          "pivot": {
            "x": 0.5,
            "y": 0.9
          },
          "offset": {
            "x": 4,
            "y": -2
          },
          "z": 0,
          "tween": {
            "prop": "scaleY",
            "from": 1,
            "to": 0.7,
            "period": 1100,
            "ease": "Sine.easeInOut"
          }
        }
      ],
      "creepyDial": 0
    },
    "motion": {
      "lane": "mid",
      "preset": "GLIDE_FLAP",
      "params": {
        "periodMin": 900,
        "periodMax": 1300,
        "amplitudeY": 4,
        "rotateDeg": 3,
        "speedMin": 4,
        "speedMax": 8,
        "ease": "Sine.easeInOut"
      },
      "idle": [
        "blink",
        "look",
        "yawn"
      ],
      "signature": {
        "id": "belly_up_float",
        "desc": "body angle 0→180 over 1200ms Sine, hold 4–6s, rotate back; mirrors the real slug floating upside down at the surface. Also used as the night 'sleep' pose",
        "everyMs": [
          45000,
          120000
        ]
      },
      "hover": "approach",
      "schooling": false,
      "activeHours": "diurnal"
    },
    "art": {
      "refIds": [
        "STYLE-01",
        "STYLE-02",
        "cr_sun_05"
      ],
      "promptSubject": "Subject: a baby blue dragon sea slug (Glaucus atlanticus), the hero mascot of the game. Slim tapered slug body like a tiny dragon, seen from the side facing right and slightly from above (3/4 top view) so both sides are visible. Aqua (#3fc1c9) body with one cream (#fff6e0) stripe along the middle of the back and thin deep-blue (#1b6ca8) edge lines. Exactly 2 large fan-shaped clusters of cerata, one on each side just behind the head, spread out like small wings; each fan has exactly 3 rounded finger tufts, aqua with one round deep-blue (#1B6CA8) dot at each tip (same dots as the ribbon beads of reference cr_sun_05). A short pointed tail curling slightly upward. Two tiny rounded horn-like rhinophores on top of the head. Two big round dark navy (#12355B) eyes with large white catchlights, friendly curious smile. The silhouette must read as a tiny winged dragon. 3 flat colors plus dark navy outline (#12355B).",
      "promptNegativeExtra": "more than 2 fans, legs, feet, claws, teeth, scales, fire, bat wings, feathered wings, Shellos-like head flaps, yellow spots, slime, glossy wet look, realistic slug texture, silver grey body",
      "model": "nano-banana-pro",
      "handEditNotes": [
        "exactly 2 fans × 3 tufts, dots ≥ 3px @1x",
        "fans as one wing part (near + far), pivot at shoulder",
        "tail tip readable at 48px",
        "eyes part with big catchlight",
        "export extra 32px icon variant (see Hero notes)"
      ],
      "ipCheck": {
        "pokemon": false,
        "subnautica": false,
        "reverseImage": false,
        "notes": "paper pre-check done in spec; run Bulbapedia + Subnautica wiki + Google Lens after generation"
      },
      "status": "spec"
    },
    "audio": {
      "selectSfx": "gentle squishy pop, soft and rubbery, cute, 0.3s",
      "signatureSfx": "soft fluttery flap with a tiny rubbery squeak, underwater, 0.4s"
    },
    "lore": {
      "labNoteKey": "creature.cr_sun_06.lab",
      "funFactKey": "creature.cr_sun_06.fact",
      "mutationNoteKey": "creature.cr_sun_06.mut",
      "sources": [
        {
          "title": "Australian Geographic – Fact File: Blue dragon (Glaucus atlanticus)",
          "url": "https://www.australiangeographic.com.au/fact-file/fact-file-blue-dragon-glaucus-atlanticus/"
        },
        {
          "title": "Blue angels have devil hands: Predatory behavior using cerata in Glaucus atlanticus (peer-reviewed, PMC)",
          "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11912302/"
        }
      ],
      "factStatus": "sourced"
    },
    "stats": {
      "variants": [
        "base",
        "ab"
      ],
      "unlock": {
        "type": "merge"
      },
      "spawnFromEgg": false
    }
  },
  {
    "id": "cr_sun_07",
    "zone": "sun",
    "level": 7,
    "act": 2,
    "stage": 2,
    "family": "MOL",
    "nameKey": "creature.cr_sun_07.name",
    "evolvesFrom": "cr_sun_06",
    "evolvesTo": "cr_sun_08",
    "realAnchor": {
      "common": "Blue dragon sea slug (adult form; G. marginatus/Glaucilla as visual ref)",
      "latin": "Glaucus atlanticus",
      "depthM": [
        0,
        1
      ],
      "realSize": "< 3 cm"
    },
    "personality": "grumpy",
    "visual": {
      "displayHeightPx": 56,
      "silhouette": "longer dragon slug with 4 spread fans (big front pair, smaller rear pair) and a curled tail",
      "newBigFeature": "second, smaller pair of cerata fans at 2/3 body length",
      "features": [
        "rear fan pair 0.6× front size",
        "longer tail with upward curl",
        "deep-blue line inside the cream back stripe (pattern)",
        "coral cheek blush"
      ],
      "axes": {
        "primary": "TEN"
      },
      "palette": {
        "primary": "#3FC1C9",
        "secondary": "#FFF6E0",
        "accent": "#1B6CA8",
        "eye": "#12355B",
        "outline": "#12355B"
      },
      "pivot": {
        "x": 0.5,
        "y": 0.55
      },
      "parts": [
        {
          "name": "body",
          "pivot": {
            "x": 0.5,
            "y": 0.55
          },
          "offset": {
            "x": 0,
            "y": 0
          },
          "z": 2
        },
        {
          "name": "eyes",
          "pivot": {
            "x": 0.5,
            "y": 0.5
          },
          "offset": {
            "x": 16,
            "y": -4
          },
          "z": 3
        },
        {
          "name": "wing",
          "pivot": {
            "x": 0.5,
            "y": 0.9
          },
          "offset": {
            "x": 6,
            "y": -2
          },
          "z": 0,
          "tween": {
            "prop": "scaleY",
            "from": 1,
            "to": 0.7,
            "period": 1100,
            "ease": "Sine.easeInOut"
          }
        },
        {
          "name": "fin",
          "pivot": {
            "x": 0.5,
            "y": 0.9
          },
          "offset": {
            "x": -12,
            "y": -1
          },
          "z": 1,
          "tween": {
            "prop": "scaleY",
            "from": 1,
            "to": 0.75,
            "period": 1100,
            "ease": "Sine.easeInOut",
            "phaseMs": 250
          }
        }
      ],
      "creepyDial": 0
    },
    "motion": {
      "lane": "mid",
      "preset": "GLIDE_FLAP",
      "params": {
        "periodMin": 900,
        "periodMax": 1300,
        "amplitudeY": 5,
        "rotateDeg": 3,
        "speedMin": 5,
        "speedMax": 9,
        "ease": "Sine.easeInOut"
      },
      "idle": [
        "blink",
        "look"
      ],
      "signature": {
        "id": "fan_flare",
        "desc": "wing + fin parts angle +25° in 300ms Back.easeOut, hold 800ms, emote '!' (collar-like display)",
        "everyMs": [
          30000,
          90000
        ]
      },
      "hover": "look",
      "schooling": false,
      "activeHours": "diurnal"
    },
    "art": {
      "refIds": [
        "STYLE-01",
        "STYLE-02",
        "STYLE-03",
        "cr_sun_06"
      ],
      "promptSubject": "Subject: the grown-up version of the baby blue dragon sea slug in reference cr_sun_06, same face, colors and style. Keep the aqua (#3FC1C9) body with one cream (#FFF6E0) stripe along the middle of the back and thin deep-blue (#1B6CA8) edge lines, the 2 tiny horns, and the 2 large front cerata fans with 3 finger tufts and deep-blue (#1B6CA8) dot tips. NEW: a second, smaller pair of fan-shaped cerata clusters at two-thirds of the body length toward the tail, about 0.6 times the size of the front fans, 3 finger tufts each with the same deep-blue dot tips. The tail is longer and ends in a slight upward curl. Pattern: one thin deep-blue line runs inside the cream back stripe. Small coral (#FFB4A2) blush on the cheeks. Two big round dark navy (#12355B) eyes with white catchlights, slightly grumpy proud pout. 3/4 top-side view facing right, all 4 fans visible and spread. 4 flat colors plus dark navy outline (#12355B).",
      "promptNegativeExtra": "more than 4 fans, legs, claws, teeth, scales, fire, yellow spots, Shellos-like frills, Dratini-like ear fins, slime, angry eyebrows",
      "model": "nano-banana-pro",
      "handEditNotes": [
        "rear fans clearly smaller (0.6×) to pass 48px test vs L6",
        "rear fans as fin part, phase-offset flap",
        "tail curl ≥ 4px thick @1x",
        "uniform outline"
      ],
      "ipCheck": {
        "pokemon": false,
        "subnautica": false,
        "reverseImage": false,
        "notes": "paper pre-check done in spec; run Bulbapedia + Subnautica wiki + Google Lens after generation"
      },
      "status": "spec"
    },
    "audio": {
      "selectSfx": "gentle squishy pop, slightly huffy, rubbery, 0.3s"
    },
    "lore": {
      "labNoteKey": "creature.cr_sun_07.lab",
      "funFactKey": "creature.cr_sun_07.fact",
      "mutationNoteKey": "creature.cr_sun_07.mut",
      "sources": [
        {
          "title": "Blue angels have devil hands: Predatory behavior using cerata in Glaucus atlanticus (peer-reviewed, PMC)",
          "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11912302/"
        },
        {
          "title": "Natural History Museum (London) – Nudibranchs: how sea slugs steal venom",
          "url": "https://www.nhm.ac.uk/discover/nudibranchs-psychedelic-thieves-of-the-sea.html"
        }
      ],
      "factStatus": "sourced"
    },
    "stats": {
      "variants": [
        "base",
        "ab"
      ],
      "unlock": {
        "type": "merge"
      },
      "spawnFromEgg": false
    }
  },
  {
    "id": "cr_sun_08",
    "zone": "sun",
    "level": 8,
    "act": 2,
    "stage": 3,
    "family": "MOL",
    "nameKey": "creature.cr_sun_08.name",
    "evolvesFrom": "cr_sun_07",
    "evolvesTo": "cr_sun_09",
    "realAnchor": {
      "common": "Blue dragon × sea butterfly (lab splice)",
      "latin": "Glaucus atlanticus × Limacina helicina",
      "depthM": [
        0,
        200
      ],
      "realSize": "Limacina: a few mm to ~1 cm (draft)"
    },
    "personality": "shy",
    "visual": {
      "displayHeightPx": 62,
      "silhouette": "4-fan dragon slug plus one pair of tall rounded wings rising from the neck: tallest shape so far",
      "newBigFeature": "1 pair of tall translucent wing-flaps (pteropod parapodia) rising from the neck",
      "features": [
        "2 tall rounded cream wings (85% alpha), scalloped aqua edge, 1 deep-blue vein each",
        "wings point up/back, never sideways like ears",
        "4 fans + back stripe kept",
        "coral blush"
      ],
      "axes": {
        "primary": "FIN"
      },
      "palette": {
        "primary": "#3FC1C9",
        "secondary": "#FFF6E0",
        "accent": "#1B6CA8",
        "eye": "#12355B",
        "outline": "#12355B"
      },
      "pivot": {
        "x": 0.5,
        "y": 0.6
      },
      "parts": [
        {
          "name": "body",
          "pivot": {
            "x": 0.5,
            "y": 0.6
          },
          "offset": {
            "x": 0,
            "y": 0
          },
          "z": 2
        },
        {
          "name": "eyes",
          "pivot": {
            "x": 0.5,
            "y": 0.5
          },
          "offset": {
            "x": 18,
            "y": 2
          },
          "z": 3
        },
        {
          "name": "wing",
          "pivot": {
            "x": 0.5,
            "y": 1.0
          },
          "offset": {
            "x": 10,
            "y": -10
          },
          "z": 0,
          "tween": {
            "prop": "scaleY",
            "from": 1,
            "to": 0.55,
            "period": 600,
            "ease": "Sine.easeInOut"
          }
        },
        {
          "name": "tentacles",
          "pivot": {
            "x": 0.5,
            "y": 0.5
          },
          "offset": {
            "x": 0,
            "y": 4
          },
          "z": 1,
          "tween": {
            "prop": "angle",
            "from": -4,
            "to": 4,
            "period": 1200,
            "ease": "Sine.easeInOut",
            "phaseMs": 150
          }
        }
      ],
      "creepyDial": 0
    },
    "motion": {
      "lane": "mid",
      "preset": "GLIDE_FLAP",
      "params": {
        "periodMin": 500,
        "periodMax": 700,
        "amplitudeY": 6,
        "rotateDeg": 4,
        "speedMin": 7,
        "speedMax": 12,
        "ease": "Sine.easeInOut"
      },
      "idle": [
        "blink",
        "look"
      ],
      "signature": {
        "id": "flutter_hop",
        "desc": "wing period ×0.5 for 1.2s, body y −20 in 300ms Quad.easeOut, then glides down 1500ms Sine.easeIn (pteropods really 'fly' by flapping)",
        "everyMs": [
          30000,
          80000
        ]
      },
      "hover": "flee",
      "schooling": false,
      "activeHours": "always"
    },
    "art": {
      "refIds": [
        "STYLE-01",
        "STYLE-02",
        "STYLE-03",
        "cr_sun_07"
      ],
      "promptSubject": "Subject: the blue dragon sea slug from reference cr_sun_07 lab-spliced with a sea butterfly (a swimming pteropod snail). Keep the aqua (#3FC1C9) body with one cream (#FFF6E0) stripe along the middle of the back and thin deep-blue (#1B6CA8) edge lines, the thin deep-blue line in the back stripe, 2 tiny horns, coral (#FFB4A2) cheek blush, the 2 large front fans and 2 smaller rear fans of cerata with deep-blue dot tips. NEW: exactly one pair of large rounded translucent wings rising straight up and slightly back from the neck, like butterfly wings seen from the side; each wing is about as tall as half the body length, cream (#FFF6E0) membrane at 85% opacity with a scalloped aqua (#3FC1C9) edge and exactly one deep-blue (#1B6CA8) vein line. The wings point upward, never sideways like ears. Two big round dark navy (#12355B) eyes with white catchlights, shy happy expression. Side view facing right, slightly from above. 4 flat colors plus dark navy outline (#12355B).",
      "promptNegativeExtra": "wings on the sides of the head like ears, feathered wings, bat wings, insect wing vein detail, Dragonair-like white head fins, blue orbs on neck or tail, legs, shell, more than 6 appendages",
      "model": "nano-banana-pro",
      "handEditNotes": [
        "wings attach behind the head (neck), not on the head",
        "wing alpha 0.85 but outline 100%",
        "merge 4 fans into one tentacles part (they sway together)",
        "check L8 vs L4 Sailbloop silhouettes (both have a tall top shape)"
      ],
      "ipCheck": {
        "pokemon": false,
        "subnautica": false,
        "reverseImage": false,
        "notes": "paper pre-check done in spec; run Bulbapedia + Subnautica wiki + Google Lens after generation"
      },
      "status": "spec"
    },
    "audio": {
      "selectSfx": "gentle squishy pop with a soft flutter, cute, 0.3s",
      "signatureSfx": "soft rapid flutter of wings underwater, muffled, 0.5s"
    },
    "lore": {
      "labNoteKey": "creature.cr_sun_08.lab",
      "funFactKey": "creature.cr_sun_08.fact",
      "mutationNoteKey": "creature.cr_sun_08.mut",
      "sources": [
        {
          "title": "Smithsonian Magazine – The Gorgeous Shapes of Sea Butterflies",
          "url": "https://www.smithsonianmag.com/science-nature/the-gorgeous-shapes-of-sea-butterflies-7399527/"
        }
      ],
      "factStatus": "sourced"
    },
    "stats": {
      "variants": [
        "base",
        "ab"
      ],
      "unlock": {
        "type": "merge"
      },
      "spawnFromEgg": false
    }
  },
  {
    "id": "cr_sun_09",
    "zone": "sun",
    "level": 9,
    "act": 2,
    "stage": 4,
    "family": "MOL",
    "nameKey": "creature.cr_sun_09.name",
    "evolvesFrom": "cr_sun_08",
    "evolvesTo": "cr_sun_10",
    "realAnchor": {
      "common": "Blue dragon × violet sea snail raft (lab splice)",
      "latin": "Glaucus atlanticus × Janthina janthina",
      "depthM": [
        0,
        1
      ],
      "realSize": "Janthina shell ~2–4 cm (draft)"
    },
    "personality": "chill",
    "visual": {
      "displayHeightPx": 68,
      "silhouette": "winged dragon slug sitting on a round cushion of 7 bubbles: bottom mass becomes bumpy and round",
      "newBigFeature": "raft of 7 bubbles under the belly (violet snail float)",
      "features": [
        "7 bubbles in 3 sizes, cream with thin violet rims + white highlight",
        "soft white glow around the raft",
        "wing edges tinted violet",
        "4 fans + 2 wings kept"
      ],
      "axes": {
        "primary": "FIN",
        "secondary": "PAT"
      },
      "palette": {
        "primary": "#3FC1C9",
        "secondary": "#FFF6E0",
        "accent": "#8C6FD9",
        "eye": "#12355B",
        "outline": "#12355B",
        "glow": "#FFFFFF"
      },
      "pivot": {
        "x": 0.5,
        "y": 0.5
      },
      "parts": [
        {
          "name": "body",
          "pivot": {
            "x": 0.5,
            "y": 0.5
          },
          "offset": {
            "x": 0,
            "y": 0
          },
          "z": 2
        },
        {
          "name": "eyes",
          "pivot": {
            "x": 0.5,
            "y": 0.5
          },
          "offset": {
            "x": 18,
            "y": -2
          },
          "z": 3
        },
        {
          "name": "wing",
          "pivot": {
            "x": 0.5,
            "y": 1.0
          },
          "offset": {
            "x": 10,
            "y": -14
          },
          "z": 0,
          "tween": {
            "prop": "scaleY",
            "from": 1,
            "to": 0.6,
            "period": 1200,
            "ease": "Sine.easeInOut"
          }
        },
        {
          "name": "tentacles",
          "pivot": {
            "x": 0.5,
            "y": 0.5
          },
          "offset": {
            "x": 0,
            "y": 0
          },
          "z": 1,
          "tween": {
            "prop": "angle",
            "from": -3,
            "to": 3,
            "period": 1600,
            "ease": "Sine.easeInOut",
            "phaseMs": 200
          }
        },
        {
          "name": "glow",
          "pivot": {
            "x": 0.5,
            "y": 0.5
          },
          "offset": {
            "x": 0,
            "y": 14
          },
          "z": 4,
          "blend": "ADD",
          "tween": {
            "prop": "alpha",
            "from": 0.4,
            "to": 0.7,
            "period": 2600,
            "ease": "Sine.easeInOut"
          }
        }
      ],
      "creepyDial": 0
    },
    "motion": {
      "lane": "mid",
      "preset": "GLIDE_FLAP",
      "params": {
        "periodMin": 1000,
        "periodMax": 1400,
        "amplitudeY": 3,
        "rotateDeg": 2,
        "speedMin": 3,
        "speedMax": 6,
        "ease": "Sine.easeInOut"
      },
      "idle": [
        "blink",
        "look",
        "glow_pulse",
        "yawn"
      ],
      "signature": {
        "id": "bubble_puff",
        "desc": "3 bubble particles rise from the raft, body scaleY 1.05 in 300ms, raft glow alpha 0.7→0.9→0.5",
        "everyMs": [
          40000,
          100000
        ]
      },
      "hover": "ignore",
      "schooling": false,
      "activeHours": "always"
    },
    "art": {
      "refIds": [
        "STYLE-01",
        "STYLE-02",
        "STYLE-03",
        "cr_sun_08"
      ],
      "promptSubject": "Subject: the winged blue dragon sea slug from reference cr_sun_08 lab-spliced with a violet sea snail's bubble raft. Keep the aqua (#3FC1C9) body with one cream (#FFF6E0) stripe along the middle of the back and thin deep-blue (#1B6CA8) edge lines, 2 tiny horns, coral (#FFB4A2) cheek blush, the 2 front and 2 rear cerata fans with deep-blue dot tips, and the pair of tall translucent cream wings rising from the neck; the wing edges are now tinted violet (#8C6FD9). NEW: the slug rests on top of a raft of exactly 7 round bubbles clustered under its belly like a floating cushion, bubbles in 3 sizes, cream-white (#FFF6E0) with thin violet (#8C6FD9) rims and one small white highlight each. A soft white (#FFFFFF) glow at 50% opacity around the bubble raft only. Two big round dark navy (#12355B) eyes with white catchlights, relaxed content expression. Side view facing right, slightly from above. 5 flat colors plus soft white glow and dark navy outline (#12355B).",
      "promptNegativeExtra": "fluffy cotton cloud, Altaria-like cotton wings, snail shell, more than 7 bubbles, bubbles floating away, foam texture, water splash, legs, purple body",
      "model": "nano-banana-pro",
      "handEditNotes": [
        "exactly 7 bubbles, circles not cloud puffs",
        "raft baked into body; glow part sits behind raft",
        "violet ≤ 15% of pixel area (measure)",
        "fans + wings still readable above raft at 68px"
      ],
      "ipCheck": {
        "pokemon": false,
        "subnautica": false,
        "reverseImage": false,
        "notes": "paper pre-check done in spec; run Bulbapedia + Subnautica wiki + Google Lens after generation"
      },
      "status": "spec"
    },
    "audio": {
      "selectSfx": "gentle squishy pop with two tiny bubble blips, cute, 0.35s",
      "signatureSfx": "soft cluster of small bubbles fizzing upward, muffled, 0.5s"
    },
    "lore": {
      "labNoteKey": "creature.cr_sun_09.lab",
      "funFactKey": "creature.cr_sun_09.fact",
      "mutationNoteKey": "creature.cr_sun_09.mut",
      "sources": [
        {
          "title": "MarLIN (Marine Biological Association) – Violet snail (Janthina janthina)",
          "url": "https://www.marlin.ac.uk/species/detail/2138"
        },
        {
          "title": "National Geographic – How bubble-rafting snails evolved",
          "url": "https://www.nationalgeographic.com/science/article/111019-about-sea-snail-mucus-bubble-rafts"
        }
      ],
      "factStatus": "sourced"
    },
    "stats": {
      "variants": [
        "base",
        "ab"
      ],
      "unlock": {
        "type": "merge"
      },
      "spawnFromEgg": false
    }
  },
  {
    "id": "cr_sun_10",
    "zone": "sun",
    "level": 10,
    "act": 2,
    "stage": 5,
    "family": "MOL",
    "nameKey": "creature.cr_sun_10.name",
    "evolvesFrom": "cr_sun_09",
    "evolvesTo": "cr_sun_11",
    "realAnchor": {
      "common": "Blue dragon × sea angel (lab apex)",
      "latin": "Glaucus atlanticus × Clione limacina",
      "depthM": [
        0,
        200
      ],
      "realSize": "Clione often 1–3 cm, up to ~5 cm (draft)"
    },
    "personality": "show-off",
    "visual": {
      "displayHeightPx": 76,
      "silhouette": "4-winged dragon slug on a bubble raft with aura: widest, tallest shape of Act II",
      "newBigFeature": "second, smaller pair of sea-angel wings behind the first: 4 wings total (FIN crown 'double sail')",
      "features": [
        "rear wing pair 0.7× front, angled back",
        "one violet dot at every wing tip (heritage → L11 Spikelet)",
        "white aura ring + 3 four-point sparkles",
        "raft, fans, stripe kept"
      ],
      "axes": {
        "primary": "FIN",
        "secondary": "PAT"
      },
      "palette": {
        "primary": "#3FC1C9",
        "secondary": "#FFF6E0",
        "accent": "#8C6FD9",
        "eye": "#12355B",
        "outline": "#12355B",
        "glow": "#FFFFFF"
      },
      "pivot": {
        "x": 0.5,
        "y": 0.5
      },
      "parts": [
        {
          "name": "body",
          "pivot": {
            "x": 0.5,
            "y": 0.5
          },
          "offset": {
            "x": 0,
            "y": 0
          },
          "z": 2
        },
        {
          "name": "eyes",
          "pivot": {
            "x": 0.5,
            "y": 0.5
          },
          "offset": {
            "x": 20,
            "y": -2
          },
          "z": 3
        },
        {
          "name": "wing",
          "pivot": {
            "x": 0.5,
            "y": 1.0
          },
          "offset": {
            "x": 6,
            "y": -16
          },
          "z": 0,
          "tween": {
            "prop": "scaleY",
            "from": 1,
            "to": 0.6,
            "period": 850,
            "ease": "Sine.easeInOut"
          }
        },
        {
          "name": "tentacles",
          "pivot": {
            "x": 0.5,
            "y": 0.5
          },
          "offset": {
            "x": 0,
            "y": 0
          },
          "z": 1,
          "tween": {
            "prop": "angle",
            "from": -3,
            "to": 3,
            "period": 1600,
            "ease": "Sine.easeInOut",
            "phaseMs": 200
          }
        },
        {
          "name": "glow",
          "pivot": {
            "x": 0.5,
            "y": 0.5
          },
          "offset": {
            "x": 0,
            "y": 0
          },
          "z": 4,
          "blend": "ADD",
          "tween": {
            "prop": "alpha",
            "from": 0.35,
            "to": 0.9,
            "period": 2800,
            "ease": "Sine.easeInOut"
          }
        }
      ],
      "creepyDial": 1
    },
    "motion": {
      "lane": "front",
      "preset": "GLIDE_FLAP",
      "params": {
        "periodMin": 700,
        "periodMax": 1000,
        "amplitudeY": 5,
        "rotateDeg": 3,
        "speedMin": 5,
        "speedMax": 9,
        "ease": "Sine.easeInOut"
      },
      "idle": [
        "blink",
        "look",
        "glow_pulse"
      ],
      "signature": {
        "id": "fleet_salute",
        "desc": "wings spread scaleY 1.15 in 500ms, aura ring scale 1.0→1.3 + alpha 0.8→0 in 900ms, 3 four-point sparkles, emote ✦",
        "everyMs": [
          60000,
          120000
        ]
      },
      "hover": "look",
      "schooling": false,
      "activeHours": "always"
    },
    "art": {
      "refIds": [
        "STYLE-01",
        "STYLE-02",
        "STYLE-03",
        "cr_sun_09",
        "cr_sun_06"
      ],
      "promptSubject": "Subject: the apex form of the bubble-raft blue dragon sea slug from reference cr_sun_09, majestic but still cute, same face as reference cr_sun_06. Keep the aqua (#3FC1C9) body with one cream (#FFF6E0) stripe along the middle of the back and thin deep-blue (#1B6CA8) edge lines, 2 tiny horns, coral (#FFB4A2) cheek blush, 2 front and 2 rear cerata fans with deep-blue dot tips, the raft of exactly 7 bubbles under the belly with violet (#8C6FD9) rims, and the front pair of tall translucent cream wings. NEW: a second, smaller pair of translucent cream wings (about 0.7 times the size of the front pair) just behind the first pair, angled backward like a sea angel's wings, so the creature has exactly 4 wings in total; every wing tip ends in one round violet (#8C6FD9) dot. A soft white (#FFFFFF) aura ring and exactly 3 small four-point sparkles around the creature. Two big round dark navy (#12355B) eyes with white catchlights, proud gentle smile, chin slightly raised. Side view facing right, slightly from above, wings spread. 5 flat colors plus white glow, slightly thicker dark navy outline (#12355B).",
      "promptNegativeExtra": "halo, angel human features, crown, feathered wings, Altaria-like cotton clouds, more than 4 wings, more than 2 eyes, shell, armor, insect wings, menacing expression, red",
      "model": "nano-banana-pro",
      "handEditNotes": [
        "count 4 wings + 4 fans = 8 appendages",
        "both wing pairs in one wing part (flap together, rear pair scaled 0.7)",
        "violet tip dots ≥ 3px @1x (heritage must read)",
        "outline 2.5px @1x",
        "aura as glow part"
      ],
      "ipCheck": {
        "pokemon": false,
        "subnautica": false,
        "reverseImage": false,
        "notes": "paper pre-check done in spec; run Bulbapedia + Subnautica wiki + Google Lens after generation"
      },
      "status": "spec"
    },
    "audio": {
      "selectSfx": "gentle squishy pop with a soft sparkling shimmer, 0.4s",
      "signatureSfx": "short airy flutter with a bright three-note arpeggio, soft, 0.7s"
    },
    "lore": {
      "labNoteKey": "creature.cr_sun_10.lab",
      "funFactKey": "creature.cr_sun_10.fact",
      "mutationNoteKey": "creature.cr_sun_10.mut",
      "sources": [
        {
          "title": "Monterey Bay Aquarium – Sea angel",
          "url": "https://www.montereybayaquarium.org/animals/animals-a-to-z/sea-angel"
        },
        {
          "title": "Smithsonian Ocean – A Chorus of Sea Angels",
          "url": "https://ocean.si.edu/ocean-life/invertebrates/chorus-sea-angels"
        }
      ],
      "factStatus": "sourced"
    },
    "stats": {
      "variants": [
        "base",
        "ab"
      ],
      "unlock": {
        "type": "merge"
      },
      "spawnFromEgg": false,
      "passive": {
        "type": "zoneIncome",
        "value": 0.03
      }
    }
  }
]
```

### 5.1 i18n (en / vi)

<!-- I18N -->
```json
{
  "en": {
    "creature.cr_sun_01.name": "Saucelet",
    "creature.cr_sun_01.lab": "Specimen keeps stacking itself on the petri dishes. We ran out of dishes.",
    "creature.cr_sun_01.fact": "Moon jelly polyps make baby jellies (ephyrae) by budding off a stack of tiny discs, released one by one. This is called strobilation.",
    "creature.cr_sun_01.mut": "Lab twist: its lobe tips blush coral when it is happy.",
    "creature.cr_sun_02.name": "Moonbun",
    "creature.cr_sun_02.lab": "Turned shy after growing a dome. Hides under the lab lamp like it is a hat.",
    "creature.cr_sun_02.fact": "Moon jellies sense light and balance with small organs called rhopalia, set in notches around the edge of the bell.",
    "creature.cr_sun_02.mut": "Lab twist: our lab tags it early with a teal clover on the dome.",
    "creature.cr_sun_03.name": "Cloverbell",
    "creature.cr_sun_03.lab": "Waves its four frilly arms at everyone. Intern believes it is saying hi.",
    "creature.cr_sun_03.fact": "The four horseshoe-shaped rings you can see through an adult moon jelly's bell are its reproductive organs (gonads).",
    "creature.cr_sun_03.mut": "Lab twist: teal clover rings. Real ones are often pinkish or lilac.",
    "creature.cr_sun_04.name": "Sailbloop",
    "creature.cr_sun_04.lab": "Grew a sail overnight. Now refuses to swim unless the AC is on.",
    "creature.cr_sun_04.fact": "A Portuguese man o' war is not a single jellyfish. It is a colony of specialized individuals, called zooids, working together as one.",
    "creature.cr_sun_04.mut": "Lab twist: a man o' war float spliced onto a jelly. Nature never did this.",
    "creature.cr_sun_05.name": "Regatta",
    "creature.cr_sun_05.lab": "Leads the tank in slow laps. The other jellies follow. Nobody voted for this.",
    "creature.cr_sun_05.fact": "The man o' war cannot swim. Wind and currents push its float, while its tentacles trail about 10 m below on average.",
    "creature.cr_sun_05.mut": "Lab twist: its ribbons are harmless and very good at waving.",
    "creature.cr_sun_06.name": "Dragonling",
    "creature.cr_sun_06.lab": "Ate the Regatta's lunch and kept the stingers. Very proud. Naps belly-up.",
    "creature.cr_sun_06.fact": "Blue dragon sea slugs float upside down, held up by an air bubble in the stomach, so their blue side faces the sky.",
    "creature.cr_sun_06.mut": "Lab twist: keeps its stolen stingers as blue polka dots, just for style.",
    "creature.cr_sun_07.name": "Fandrake",
    "creature.cr_sun_07.lab": "A second pair of fans arrived. So did the attitude.",
    "creature.cr_sun_07.fact": "Blue dragons eat Portuguese man o' war and store its unfired stinging cells in the tips of their cerata, using them for defense.",
    "creature.cr_sun_07.mut": "Lab twist: flares all four fans like a fancy collar when annoyed.",
    "creature.cr_sun_08.name": "Bluewing",
    "creature.cr_sun_08.lab": "Grew wings after the intern spilled sea-butterfly samples. Practices flying at night.",
    "creature.cr_sun_08.fact": "Sea butterflies are tiny swimming snails. Their foot evolved into two wing-like flaps that they beat to 'fly' through water.",
    "creature.cr_sun_08.mut": "Lab twist: sea butterfly wings grafted on. Real blue dragons cannot fly.",
    "creature.cr_sun_09.name": "Bubbloon",
    "creature.cr_sun_09.lab": "Blows bubbles, then sits on them. Calls it 'the boat'. Refuses to share the boat.",
    "creature.cr_sun_09.fact": "Violet sea snails drift at the surface, hanging upside down from a raft of bubbles they trap in mucus with their foot.",
    "creature.cr_sun_09.mut": "Lab twist: borrowed the violet snail's bubble raft. Skipped the snail part.",
    "creature.cr_sun_10.name": "Armada",
    "creature.cr_sun_10.lab": "Assembled a fleet of one. Salutes the lab lamp every morning. Morale is excellent.",
    "creature.cr_sun_10.fact": "The sea angel Clione limacina is a shell-less relative of sea butterflies, and it feeds mainly on them.",
    "creature.cr_sun_10.mut": "Lab twist: four sea-angel wings. Nature managed with two."
  },
  "vi": {
    "creature.cr_sun_01.name": "Sứa Đĩa Nhí",
    "creature.cr_sun_01.lab": "Mẫu vật cứ tự xếp chồng lên đĩa petri. Phòng lab hết sạch đĩa.",
    "creature.cr_sun_01.fact": "Polyp sứa mặt trăng tạo sứa con (ephyra) bằng cách tách ra một chồng đĩa nhỏ, thả từng chiếc một. Quá trình này gọi là strobilation.",
    "creature.cr_sun_01.mut": "Đột biến lab: đầu thùy ửng màu san hô khi vui.",
    "creature.cr_sun_02.name": "Sứa Bánh Trăng",
    "creature.cr_sun_02.lab": "Mọc vòm xong thì hóa nhút nhát. Trốn dưới đèn lab như đội mũ.",
    "creature.cr_sun_02.fact": "Sứa mặt trăng cảm nhận ánh sáng và thăng bằng nhờ các cơ quan nhỏ gọi là rhopalia, nằm ở các khía quanh mép chuông.",
    "creature.cr_sun_02.mut": "Đột biến lab: lab gắn sớm dấu cỏ bốn lá màu teal lên vòm.",
    "creature.cr_sun_03.name": "Sứa Cỏ Bốn Lá",
    "creature.cr_sun_03.lab": "Vẫy bốn tay bèo với mọi người. Thực tập sinh tin là nó đang chào.",
    "creature.cr_sun_03.fact": "Bốn vòng hình móng ngựa nhìn thấy qua chuông sứa mặt trăng trưởng thành là cơ quan sinh sản (tuyến sinh dục) của nó.",
    "creature.cr_sun_03.mut": "Đột biến lab: vòng cỏ bốn lá màu teal. Ngoài tự nhiên thường hồng/tím nhạt.",
    "creature.cr_sun_04.name": "Sứa Buồm",
    "creature.cr_sun_04.lab": "Mọc buồm sau một đêm. Giờ không chịu bơi trừ khi bật điều hòa.",
    "creature.cr_sun_04.fact": "Sứa lửa (man o' war) không phải một con sứa. Nó là một tập đoàn các cá thể chuyên hóa (zooid) cùng hoạt động như một.",
    "creature.cr_sun_04.mut": "Đột biến lab: ghép phao sứa lửa lên sứa mặt trăng. Tự nhiên không làm vậy.",
    "creature.cr_sun_05.name": "Đô Đốc Buồm",
    "creature.cr_sun_05.lab": "Dẫn cả bể bơi vòng chậm rãi. Lũ sứa khác bám theo. Chẳng ai bầu nó cả.",
    "creature.cr_sun_05.fact": "Sứa lửa không tự bơi được. Gió và dòng chảy đẩy phao của nó, còn xúc tu rủ xuống dưới trung bình khoảng 10 m.",
    "creature.cr_sun_05.mut": "Đột biến lab: ruy băng vô hại và vẫy rất điệu.",
    "creature.cr_sun_06.name": "Sên Rồng Xanh",
    "creature.cr_sun_06.lab": "Ăn trưa phần của Đô Đốc, giữ luôn ngòi chích. Rất tự hào. Ngủ trưa ngửa bụng.",
    "creature.cr_sun_06.fact": "Sên rồng xanh trôi ngửa bụng nhờ một bọt khí giữ trong dạ dày, nên mặt màu xanh của chúng hướng lên trời.",
    "creature.cr_sun_06.mut": "Đột biến lab: giữ ngòi chích ăn trộm thành chấm bi xanh, cho điệu.",
    "creature.cr_sun_07.name": "Sên Rồng Quạt",
    "creature.cr_sun_07.lab": "Đôi quạt thứ hai mọc ra. Thái độ cũng mọc theo.",
    "creature.cr_sun_07.fact": "Sên rồng xanh ăn sứa lửa và trữ tế bào chích chưa bắn của con mồi ở đầu các cerata để tự vệ.",
    "creature.cr_sun_07.mut": "Đột biến lab: xòe cả bốn quạt như cổ áo điệu khi bực.",
    "creature.cr_sun_08.name": "Sên Rồng Bướm",
    "creature.cr_sun_08.lab": "Mọc cánh sau khi thực tập sinh làm đổ mẫu bướm biển. Tập bay ban đêm.",
    "creature.cr_sun_08.fact": "Bướm biển là loài ốc bơi tí hon. Chân của chúng tiến hóa thành hai vạt như cánh, vỗ để “bay” trong nước.",
    "creature.cr_sun_08.mut": "Đột biến lab: ghép cánh bướm biển. Sên rồng xanh thật không bay được.",
    "creature.cr_sun_09.name": "Sên Bè Bọt",
    "creature.cr_sun_09.lab": "Thổi bọt rồi ngồi lên. Gọi là “cái thuyền”. Không cho ai đi chung.",
    "creature.cr_sun_09.fact": "Ốc tím biển trôi trên mặt nước, treo ngược dưới một chiếc bè bọt mà chúng giữ lại bằng chất nhầy tiết từ chân.",
    "creature.cr_sun_09.mut": "Đột biến lab: mượn bè bọt của ốc tím. Bỏ qua phần làm ốc.",
    "creature.cr_sun_10.name": "Rồng Hạm Đội",
    "creature.cr_sun_10.lab": "Tự lập hạm đội một thành viên. Sáng nào cũng chào đèn lab. Sĩ khí rất cao.",
    "creature.cr_sun_10.fact": "Thiên thần biển Clione limacina là họ hàng không vỏ của bướm biển, và thức ăn chính của nó lại là bướm biển.",
    "creature.cr_sun_10.mut": "Đột biến lab: bốn cánh thiên thần biển. Tự nhiên chỉ cần hai."
  }
}
```

---

## 6. Gemini generation run-sheet

**STYLE-01..03 = L1 Saucelet, L3 Cloverbell, L6 Dragonling** (theo review 15). Lý do: L1 khóa tỉ lệ mặt/mắt và outline ở size nhỏ nhất. L3 khóa cách vẽ xúc tu/phần rủ và độ trong của JEL. L6 khóa family MOL ngang, kiểu quạt/cánh, và là hero nên cần chất lượng cao nhất sớm nhất. Ba con phủ cả 2 family của slice và cả trục dọc/ngang.

| # | Con | Refs gửi kèm (ngoài STYLE BLOCK text) | Ước tính lần thử | Ghi chú |
|---|---|---|---|---|
| 1 | L1 Saucelet → **STYLE-01** | Không có ảnh (chưa có STYLE) | 6–10 | Chỉnh tay xong mới đi tiếp. Thử 2–3 biến thể outline |
| 2 | L3 Cloverbell → **STYLE-02** | STYLE-01 | 6–10 | Gen thẳng L3 (bỏ qua L2) để có ref xúc tu sớm |
| 3 | L6 Dragonling → **STYLE-03** | STYLE-01, STYLE-02 (+ ảnh Regatta nếu đã có thì gửi sau, ở vòng chỉnh) | 10–15 | Hero: gen thêm 2–3 pose cho capsule/expression. **Khóa STYLE BLOCK v1 sau bước này** |
| 4 | L2 Moonbun | STYLE-01..03, cr_sun_01 | 3–5 | |
| 5 | L4 Sailbloop | STYLE-01..03, cr_sun_03 | 4–6 | IP Tentacool |
| 6 | L5 Regatta | STYLE-01..03, cr_sun_04 | 5–8 | IP Tentacruel. Sau bước này, regen nhẹ L6 nếu chấm heritage lệch màu |
| 7 | L7 Fandrake | STYLE-01..03, cr_sun_06 | 3–6 | |
| 8 | L8 Bluewing | STYLE-01..03, cr_sun_07 | 4–8 | Hay sai: cánh mọc ở đầu như tai |
| 9 | L9 Bubbloon | STYLE-01..03, cr_sun_08 | 4–8 | Hay sai: bọt thành mây bông |
| 10 | L10 Armada | STYLE-01..03, cr_sun_09, cr_sun_06 | 5–8 | Gửi lại L6 để giữ mặt hero |
| | **Tổng** | 4–5 ref/call (≤ 14) | **~50–85 ảnh** | API ~$0.04–0.13/ảnh ⇒ ~$3–11, hoặc nằm trong Google AI Pro |

**Hand-edit (ước tính, theo R3):** STYLE seed (L1, L3) 1.5–2h/con; Dragonling 3–4h (sprite + icon 32px + 3 emote); 7 con còn lại 45–60 phút/con. Tổng chỉnh tay **~12–15h**. Cộng gen (~4–5h), rig + nhập data (~2–3h), silhouette test (~1h) ⇒ **~19–24h cho slice 10 con**, khớp dự trù 10–12h/Act đầu của R3.

Log bắt buộc mỗi con: model, ngày, prompt đầy đủ (STYLE BLOCK v1 + subject + negative), ảnh được chọn và ảnh gốc AI (bible 11.3, 10.6).

---

## 7. TikTok Stage 0: 3 concept (chỉ dùng 10 con này)

| # | Concept | Hook (2s đầu) | Beats (15–25s) | Caption |
|---|---|---|---|---|
| T1 | **“This sea slug is real”** (Dragonling là ngôi sao) | Cận cảnh Dragonling **lật ngửa bụng** (`belly_up_float`) ngay trên taskbar Windows, chữ lớn: “this sea slug is REAL” | (1) Kéo 2 Regatta vào nhau → kén bọt → silhouette → reveal Dragonling (Leap VFX). (2) Thẻ fact: “it eats man o' war and keeps the stingers”. (3) Dragonling vỗ quạt bơi qua cửa sổ code. (4) Kết bằng silhouette “???” của Fandrake trong bách khoa | “The blue dragon sea slug floats upside down and steals stingers from man o' war. So I put one under my taskbar. #deepsea #cozygames #idlegame” |
| T2 | **Glow-up 10 merge** | Saucelet bé xíu 40px giữa màn hình, chữ: “I merged this… 9 times” | Mỗi beat nhạc là 1 merge, L1 → L10. Mỗi merge zoom nhẹ vào big feature mới. Dừng 1s ở Dragonling (leap jingle) và Armada (aura + `fleet_salute`). Cuối clip đặt 10 con cạnh nhau | “From a baby jelly to a 4-winged sea dragon. Every merge adds one thing. Which one is your favorite? #mergegame #satisfying” |
| T3 | **Cozy desktop day→night** | Timelapse: sáng sớm, Saucelet và Moonbun trôi dưới taskbar khi đang gõ email, chữ: “my desktop has a tiny aquarium” | Rê chuột: Saucelet bơi lại gần, Moonbun lùi (personality). Giờ OS chuyển sang tối: Dragonling lật ngửa ngủ với “z”, Bubbloon ngồi bè bọt. Bật Pomodoro: mọi thứ chậm lại | “It lives under my taskbar and they go to sleep when I do. #desktop #cozy #studywithme” |

Gate Stage 0 (review 15): TB ≥ 10k view/video. Quay bằng gameplay/prototype thật, không dùng video AI (analysis 10.1).

---

## 8. Open issues

| # | Vấn đề | Đề xuất |
|---|---|---|
| O1 ✅ | Bible 12.1 vẫn ghi L4–L5 axis FIN và L5 “buồm đôi” | Đã đồng bộ 12.1 + signature Saucelet 12.2 (lead review) |
| O2 | Act III (L11–L15) nên khóa axis gì? Act II đã dùng FIN; roster ghi L15 = FIN | Đề xuất Act III khóa **SPK → PAT** hoặc chấp nhận FIN lặp lại vì vây *Mola* là đặc trưng chính. Chốt khi spec Act III |
| O3 | Schema thiếu trường dải y riêng (Dragonling/Bubbloon là sinh vật mặt nước, nên ở phần trên lane `mid`) | Thêm `motion.yBand?: [number, number]` (P1) |
| O4 | Fun fact mới ở mức `sourced`. Một số size (`realSize` có “draft”) chưa có nguồn | Người đọc nguồn gốc rồi chuyển `verified` (bible 8.2). Đặc biệt kiểm “Clione feeds mainly on sea butterflies” và kích thước *Janthina*/*Clione* |
| O5 | Tên Dragonling / Bubbloon / Armada / Fandrake chưa qua Steam search + Google | Làm trước khi mở trang Steam. Dragonling là hero nên rủi ro cao nhất về nhận diện, cân nhắc đăng ký thương hiệu ghép “Merge Mutant Lab Dragonling” nếu cần |
| O6 | Violet `#8C6FD9` ngoài palette Sunlit (L9–L10) | Giữ ≤ 20% diện tích. Nếu ngưỡng 70% đo theo pixel thì đo sau khi hand-edit |
| O7 | Hero ở S1 bị giới hạn 2 quạt, nên capsule có thể muốn bản “đầy đủ” hơn | Capsule dùng Dragonling chuẩn. Nếu playtest thấy người chơi nhớ Fandrake (4 quạt) hơn thì cân nhắc đổi hero sang L7 (cùng family, đều < 10 phút) |
| O8 | (lead review) *Limacina helicina* và *Clione limacina* là loài **nước lạnh/cực**, còn *Glaucus*/*Janthina* là nước ấm. Chúng cùng tầng mặt nhưng không cùng vùng biển | Lore “hạm đội xanh” chỉ nói “họ hàng thân mềm cùng tầng mặt”, không nói sống chung. Fun fact L8/L10 không được viết là chúng gặp nhau ngoài tự nhiên |
| O9 | (lead review) URL PMC “Blue angels have devil hands” agent không mở được | Mở link trước khi lên `verified`. Nếu link sai thì thay bằng nguồn khác (NHM, Australian Museum) |
