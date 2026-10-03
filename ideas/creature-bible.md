# Merge Mutant Lab: Creature Design Bible (v0.1, 10/2026)

> Tài liệu khung cho toàn bộ ~60 sinh vật của bản Steam "Desktop Idle Aquarium".
> Đọc kèm: `merge-mutant-lab-analysis.md` mục 2.3 (kinh tế), 8 (pivot Steam), 10 (pipeline AI).
> Mục đích: (1) luật chung cho mọi sinh vật, (2) **template spec từng con** (mục 11) để bước sau sản xuất hàng loạt.

**Quy ước:** `MUST` = bắt buộc, `SHOULD` = nên, `MAY` = tùy chọn. Kích thước tính bằng px ở 1x (màn hình 100% DPI).

---

## 0. Tóm tắt quyết định

| Hạng mục | Quyết định |
|---|---|
| Số lượng | 60 = 4 zone × 15 level. Mỗi zone = 1 merge chain tuyến tính 15 level |
| Cấu trúc chain | Mỗi zone chia 3 **Act** × 5 **Stage**. Mỗi Act là 1 family. Chuyển Act = "Metamorphosis leap" (đổi family, giữ 1 heritage trait) |
| Kinh tế | `income(z, L) = zoneBase[z] × 2.6^(L-1)`, L = 1..15 trong zone. Biến thể/branch **không** đổi income |
| Tone | **Cute-weird** (kỳ quặc dễ thương), độ "rùng rợn" tăng nhẹ theo độ sâu nhưng trần 3/5 |
| Style | Flat vector, outline dày, 4–5 màu + 1 màu glow, đọc được ở 48–96px |
| Animation | 1 sprite tĩnh + tối đa 5 layer part, chuyển động bằng tween preset trong code |
| Data | Mỗi con = 1 object `CreatureDef` (TS/JSON), mọi số liệu chuyển động/kinh tế tune được qua remote config |

---

## 1. Design pillars & tone

### 1.1 Pillars (5)

| # | Pillar | Nghĩa là | Test nhanh |
|---|---|---|---|
| P1 | **Silhouette first** | Ở 64px, đổ đen toàn bộ vẫn nhận ra con nào, level nào | Silhouette test (mục 6.2) đạt ≥ 90% |
| P2 | **Grounded weird** | Mỗi con = 1 loài thật (real anchor) + 1–2 đột biến có logic. Không "AI soup" ghép bừa | Trả lời được "nó dựa trên loài gì, đột biến gì, vì sao" trong 1 câu |
| P3 | **Cozy companion** | Nằm cạnh màn hình 8 tiếng không gây mệt: chuyển động chậm, êm, không giật, không âm thanh chói | Để chạy 30 phút khi làm việc, không thấy phiền |
| P4 | **Every merge is a glow-up** | Mỗi lần ghép phải *thấy* rõ lên cấp: to hơn, thêm 1 feature lớn, sáng hơn | So 2 level liền kề cạnh nhau, người lạ chỉ đúng con cao hơn |
| P5 | **Code-animatable** | Thiết kế phải chia được thành ≤ 5 part và sống được chỉ bằng tween | Rig được trong ≤ 20 phút, không cần frame-by-frame |

### 1.2 Tone: chọn cute-weird, không creepy

| Lý do | Giải thích |
|---|---|
| Ngữ cảnh dùng | Game luôn hiện trên màn hình lúc làm việc. Creepy (răng nhọn, mắt trắng dã) gây khó chịu khi liếc qua hàng trăm lần/ngày |
| Thị trường | Khán giả Rusty's Retirement / cozy idle trên Steam thích "đáng yêu + lạ". Creepy thu hẹp tệp và làm capsule kém click |
| Điểm khác biệt | Biển sâu vốn kỳ dị. Làm cho nó *dễ thương* là hook marketing ("cute horrors of the deep") |
| Giữ chất lạ | Không làm "kawaii hóa" hoàn toàn: giữ đặc điểm thật kỳ quặc (mắt ống, đèn câu, thân trong suốt) như điểm nhấn |

**Creepy dial theo zone** (0 = thuần cute, 5 = horror; trần là 3):

| Zone | Dial | Được phép | Cấm |
|---|---|---|---|
| Sunlit | 1 | Mắt to tròn, má hồng nhẹ | Răng |
| Twilight | 2 | Mắt ống, thân trong suốt thấy nội tạng dạng icon | Nội tạng thật |
| Midnight | 3 | Răng stylized: tối đa 4 tam giác trắng, đầu tròn | Răng hàng dài, máu, miệng há kiểu tấn công |
| Abyss/Vent | 2–3 | Vỏ khoáng, chân nhiều, mắt nhỏ/mờ | Côn trùng-hóa (giống nhện/gián) |

**Luật mặt:** mắt luôn có highlight trắng (catchlight), đồng tử ≥ 30% diện tích mắt, không có mặt giống người, không có lông mày.

---

## 2. World logic: 4 zone theo độ sâu

Mỗi zone = 1 biome, mở bằng Prestige. Độ sâu thật dùng làm logic visual và lore.

| | Z1 Sunlit (`sun`) | Z2 Twilight (`twi`) | Z3 Midnight (`mid`) | Z4 Abyss & Vent (`aby`) |
|---|---|---|---|---|
| Tầng thật | Epipelagic 0–200 m | Mesopelagic 200–1.000 m | Bathypelagic 1.000–4.000 m | Abyssopelagic 4.000–6.000 m + miệng thủy nhiệt |
| Ánh sáng | Nắng, tia sáng xiên | Xanh lam mờ dần, không quang hợp | Tối hoàn toàn, chỉ có bioluminescence | Tối + ánh cam đỏ từ khoáng nóng (stylized) |
| Mood | Vui, bập bềnh, buổi sáng | Bí ẩn, thanh lịch, lấp lánh | Ấm cúng kiểu "đèn ngủ", hơi rờn rợn | Lò sưởi dưới đáy, công nghiệp-tự nhiên |
| Nền strip (gradient tint) | `#8FE3F0 → #3FA9C9` | `#4B5BB8 → #1E2466` | `#141030 → #05040C` | `#2A2A33 → #120F0D` + đốm `#FF7A3D` |
| Palette sinh vật | `#FFF6E0` `#FFB4A2` `#3FC1C9` `#1B6CA8` `#FFD166` | `#E0F7FF` `#A1C6EA` `#6C5BD4` `#FF9EC7` `#2B2D6E` | `#C8324B` `#5A1A3C` `#1C1030` `#F2E9DC` | `#E8E3D9` `#8FA3AD` `#3C6E71` `#F4D35E` `#FF7A3D` |
| Outline | `#12355B` | `#14163A` | `#07040F` + rim `#7CF5FF` | `#120F0D` |
| Glow chủ đạo | Không (chỉ sparkle `#FFFFFF`) | `#9EF0FF` (xanh lạnh) | `#7CF5FF` cyan, `#FF4D6D` đỏ (hiếm) | `#FFB347` cam lava |
| Signature traits | Thân dẹt/buồm, màu xanh-bạc (countershading), vây rộng | Mắt to/ống, trong suốt, đèn bụng (counter-illumination) | Đỏ/đen (đỏ "vô hình" dưới sâu), đèn câu, miệng to, thân nhỏ | Vỏ khoáng, chân dài, cộng sinh vi khuẩn, chậm chạp |
| Mutation axes chính | `FIN` `TEN` `PAT` | `TRN` `EYE` `LUM` | `LUM` `SPK` `SYM` | `CRY` `ARM` `SYM` |
| Cảm hứng thật | Moon jelly, Portuguese man o' war, blue dragon sea slug (*Glaucus atlanticus*), sea butterfly (pteropod), ocean sunfish (*Mola mola*) | Krill, lanternfish, hatchetfish, barreleye (*Macropinna microstoma*), firefly squid (*Watasenia scintillans*), glass squid | *Atolla* jelly ("burglar alarm"), siphonophore, gulper eel (*Eurypharynx*), anglerfish, dragonfish (*Malacosteus*, đèn đỏ) | Sea pig (*Scotoplanes*), scaly-foot snail (*Chrysomallon squamiferum*, vỏ sắt sulfide), Pompeii worm, yeti crab (*Kiwa*), dumbo octopus (*Grimpoteuthis*) |
| Creepy dial | 1 | 2 | 3 | 2–3 |

**Luật logic thế giới (MUST):**
1. Sinh vật thuộc zone nào phải dùng ≥ 70% màu từ palette zone đó (cho phép 1 màu heritage từ Act trước).
2. Đặc điểm thích nghi phải đúng tầng: mắt to ở Twilight, màu đỏ/đen ở Midnight, vỏ khoáng ở Vent. Không đặt con màu xanh bạc phản quang ở Midnight nếu không có lý do lore.
3. Mutation được phép phi thực tế, nhưng phải *khuếch đại* một đặc điểm có thật (glow vốn có → glow mạnh hơn; vỏ sắt → tinh thể), không thêm thứ vô căn cứ (cánh chim, lông thú).
4. **Diel vertical migration** (có thật: nhiều loài Twilight bơi lên mặt nước ban đêm): dùng làm logic day/night (mục 5.5).

---

## 3. Taxonomy: family, phân bố, đặt tên

### 3.1 8 family (archetype)

| Code | Family | Gồm (thật) | Shape language | Locomotion mặc định | Layer mặc định |
|---|---|---|---|---|---|
| `JEL` | Jelly | Medusa, ctenophore, siphonophore | Vòm, tròn, rủ mềm | `DRIFT_PULSE` | back/mid |
| `FSH` | Fish | Cá nhỏ bầy, cá thân dẹt | Oval, giọt nước, tam giác vây | `DART` | mid |
| `ANG` | Lure-fish | Anglerfish, dragonfish, viperfish | Tròn + điểm nhọn (đèn, răng) | `HOVER_FLAP` | mid/front |
| `CEP` | Cephalopod | Mực ống, bạch tuộc, mực nang | Viên đạn + đường cong chảy | `JET` / `HOVER_FLAP` (dumbo) | mid |
| `CRU` | Crustacean | Krill, tôm, cua, copepod | Đốt chữ nhật, góc bo | `TAILFLIP` / `CRAWL` | mid/bottom |
| `WRM` | Worm & eel | Giun nhiều tơ, lươn, gulper eel | Chữ S, dải dài | `UNDULATE` / `ANCHORED` | mid/bottom |
| `MOL` | Gastropod | Sên biển, ốc, pteropod | Xoắn ốc, khối mềm | `GLIDE_FLAP` / `CRAWL` | mid/bottom |
| `ECH` | Echinoderm & oddball | Sea pig, sao biển, hải sâm | Khối u tròn, sao | `CRAWL` | bottom |

### 3.2 Phân bố 12 Act trên 4 zone

Mỗi Act = 5 level. Act sau "ăn"/kế thừa Act trước bằng lý do sinh học thật khi có thể (heritage link).

| Zone | Act I (L1–5) | Act II (L6–10) | Act III (L11–15) | Heritage link (thật) |
|---|---|---|---|---|
| Sunlit | `JEL` moon jelly → man o' war | `MOL` blue dragon sea slug | `FSH` ocean sunfish (*Mola*) | *Glaucus* ăn man o' war và tích tế bào gai của nó; *Mola* ăn chủ yếu sinh vật keo (jelly) |
| Twilight | `CRU` krill → shrimp | `FSH` lanternfish → barreleye | `CEP` firefly squid → glass squid | Cá đèn ăn krill; mực ăn cá đèn (chuỗi thức ăn thật) |
| Midnight | `JEL` *Atolla* / siphonophore | `WRM` gulper eel | `ANG` anglerfish | Đèn của *Atolla* thu hút kẻ săn lớn hơn; anglerfish dùng đèn từ vi khuẩn cộng sinh |
| Abyss/Vent | `ECH` sea pig | `MOL` scaly-foot snail | `CEP` dumbo octopus | Từ "đáy bùn" → "miệng khói" → "bay lượn trên đáy" (độ phức tạp tăng) |

Tổng: JEL 2, MOL 2, FSH 2, CEP 2, CRU 1, WRM 1, ANG 1, ECH 1 = 12 Act / 60 con. Family thiếu (vd. `CRU` yeti crab, `WRM` tube worm) để dành cho biome DLC hoặc làm **ambient/decor** (không merge).

### 3.3 Đặt tên

**ID (bất biến, dùng trong save):** `cr_{zone}_{LL}` vd. `cr_sun_01`. Biến thể: `cr_sun_01_ab` (aberrant/shiny), `cr_sun_04_b1` (branch). **Không bao giờ đổi ID sau khi ship.**

**Tên EN (hiển thị):**
- 1 từ, 5–10 ký tự, đọc được bằng âm tiếng Việt (tránh cụm âm khó như "-ths", "-ght" ở cuối nếu có thể).
- Công thức: *gốc loài thật* + *đuôi biến hình/đáng yêu* (`-let`, `-bun`, `-ling`, `-bloop`, `-o`) hoặc pun 1 lớp (vd. *Saucelet* = saucer + -let, vì ephyra xếp chồng như đĩa).
- Stage 5 (apex) dùng tên "danh hiệu": *Regatta*, *Lanterna*, *Abyssal Duke*... tối đa 2 từ.
- Pun chỉ được 1 tầng nghĩa, không dựa vào văn hóa Mỹ (không meme, không người nổi tiếng).

**Tên VN:** không dịch máy từ tên EN. Công thức: *loại thật* + *đặc điểm dễ thương* (vd. "Sứa Đĩa Nhí", "Sên Rồng Xanh"). Tối đa 16 ký tự để vừa UI.

**Cấm (IP):** tên trùng/na ná Pokémon (đuôi `-mon`, `-chu`, tên Pokémon nước có sẵn), Nemo/Dory, Subnautica (Reaper, Peeper, Cuddlefish...), Spore, Ecco, Finding Nemo, Animal Crossing. Check bằng Google + Bulbapedia + Steam search trước khi chốt.

---

## 4. Evolution & mutation system

### 4.1 Cấu trúc chain: "Spine tuyến tính + nhánh cosmetic"

```
Zone Sunlit (15 level, 1 spine):
 Act I  JEL : L1 ─ L2 ─ L3 ─ L4 ─ L5 ══╗ metamorphosis leap
 Act II MOL : L6 ─ L7 ─ L8 ─ L9 ─ L10 ══╗
 Act III FSH: L11 ─ L12 ─ L13 ─ L14 ─ L15 (zone apex)
                        └─ (P2) Branch b1/b2 ở Stage 4–5, mở bằng GenTokens, cùng income
```

| Câu hỏi | Quyết định | Lý do |
|---|---|---|
| Tuyến tính hay rẽ nhánh? | **Spine tuyến tính** (2 con L → 1 con L+1, kết quả duy nhất) | Merge game cần kết quả dự đoán được; idle player không muốn quyết định mỗi lần ghép; kinh tế đơn giản |
| Branch ở đâu? | Branch là **skin + passive nhỏ** thay thế cho Stage 4–5 của 1 Act, cùng level, cùng income | Không làm vỡ `income(L)`, không nhân đôi số level |
| 15 level/zone có đủ? | Đủ: L10 ≈ 10 phút, L15 ≈ ngày 2–3 trước Prestige (khớp nhịp mục 2.3 analysis) | Tune bằng `zoneBase` và giá nâng cấp |

### 4.2 Tương thích kinh tế

- `income(z, L) = zoneBase[z] × 2.6^(L-1)`; mặc định `zoneBase = [1, 2.6^15, 2.6^30, 2.6^45]` ⇒ tương đương 1 level toàn cục `G = 15(z-1) + L` và đúng công thức gốc `2.6^(G-1)`.
- Remote config có thể giảm `zoneBase` (vd. `2.6^12`) nếu muốn mỗi zone mới "bắt đầu dễ hơn" sau Prestige.
- **Không lưu income trong `CreatureDef`.** Income luôn tính từ `(zone, level)` trong module economy thuần TS. Creature data chỉ chứa visual/behavior.
- Biến thể aberrant/branch: `incomeMult = 1.0` (MUST). Passive Stage 5 chỉ là bonus nhỏ, tổng hợp tối đa +15%/zone, nằm trong file balance.

### 4.3 Luật leo thang visual theo Stage (trong 1 Act)

**Luật vàng "+1 Big Feature per Merge" (BFM):** mỗi level thêm đúng **1 feature làm đổi silhouette** (vây mới, buồm, sừng, xúc tu dài...) và tối đa 1 feature nhỏ (đốm, sọc). Không bao giờ chỉ đổi màu.

| Thuộc tính | S1 Hatchling | S2 Juvenile | S3 Adult | S4 Mutant | S5 Apex |
|---|---|---|---|---|---|
| Vai trò | Ấu trùng/bé, đơn giản nhất | Hình dạng loài rõ | Loài thật "chuẩn" | Đột biến lộ rõ | Hình thái cuối, "vương miện" |
| Big feature mới | — (gốc) | +1 | +1 | +1 (mutation axis chính) | +1 (crown feature) + aura |
| Số màu (không tính outline) | 3 | 3–4 | 4 | 4–5 | 5 + glow |
| Mắt | 2 nhỏ | 2 | 2 | 2–3 (EYE axis: tới 3) | 2–4, có biểu cảm |
| Appendage (xúc tu/chân/vây phụ) | ≤ 2 | ≤ 4 | ≤ 6 | ≤ 8 | ≤ 8, dài hơn |
| Pattern | Phẳng | 1 đốm/sọc | 1 pattern | 2 lớp pattern | Pattern + highlight vân |
| Glow (part `glow`) | Không | Không | Tùy family | Có, alpha 0.4–0.7 | Có, pulse + aura ring |
| Outline | 2px | 2px | 2px | 2px | 2.5px (đậm hơn chút) |
| Biểu cảm | Ngây thơ | Tò mò | Tự tin | Tinh nghịch/lạ | "Bệ vệ", có idle đặc biệt |

**Metamorphosis leap (S5 → S1 Act kế):** con mới là family khác nhưng **giữ 1 heritage trait** (màu accent, pattern, hoặc đồ vật) của S5 trước. Kích thước *không giảm* (xem bảng size 6.5). VFX đặc biệt (mục 7.2).

### 4.4 Mutation axes (10)

| Code | Axis | Biểu hiện visual (tăng dần S3→S5) | Cơ sở thật | Zone hợp |
|---|---|---|---|---|
| `LUM` | Bioluminescence | Đốm sáng → đường sáng → aura | Photophore, đèn vi khuẩn | Twi, Mid |
| `TRN` | Transparency | Thân 70% alpha → thấy "icon" nội tạng → kính lăng trụ | Glass squid, salp | Twi |
| `EYE` | Eyes | Mắt to → mắt ống → thêm mắt phụ (≤ 4) | Barreleye, mắt ống | Twi |
| `TEN` | Tentacles/frills | Xúc tu ngắn → dài/xoăn → ruy băng | Cnidaria, sên biển | Sun, Mid |
| `FIN` | Fins/sails | Vây nhỏ → buồm → buồm đôi | Man o' war float, *Mola* | Sun |
| `PAT` | Pattern | Đốm → sọc → hoa văn đối xứng | Countershading, sọc cảnh báo | Sun |
| `SPK` | Spikes/teeth | Gai mềm → gai cứng → "vương miện" gai (răng tối đa 4) | Ấu trùng *Mola*, viperfish | Mid |
| `ARM` | Armor | Vỏ mỏng → giáp đốt → giáp có viền | Giáp crustacean, ốc | Aby |
| `CRY` | Crystal/mineral | Vảy kim loại → tinh thể nhú → cụm tinh thể phát sáng | Vảy sắt sulfide của scaly-foot snail | Aby |
| `SYM` | Symbiont | 1 "bạn đồng hành" bé (vi khuẩn phát sáng, tôm nhỏ) bám → nhiều hơn | Vi khuẩn cộng sinh của anglerfish, yeti crab nuôi vi khuẩn | Mid, Aby |

Mỗi con: **1 axis chính** (tối đa 2). Mỗi Act khóa 1 axis chính cho S3–S5 để chuỗi mạch lạc. "Parasite" được đổi thành `SYM` (cộng sinh) để giữ tone cozy.

### 4.5 Aberrant (shiny) variant

| Tham số | Giá trị (remote config) |
|---|---|
| Tỷ lệ | 1/256 mỗi lần merge ra con mới (`aberrantChance`) |
| Visual | Palette thay thế vẽ tay (không chỉ hue shift) + particle sparkle hình sao 4 cánh + viền rim sáng |
| Gameplay | Income ×1.0, chỉ để sưu tầm; ghép 2 aberrant cùng level → con L+1 có 25% là aberrant |
| Hook | Trang riêng trong bách khoa, Steam achievement "Find 10 aberrants", trading card |
| Phân biệt cho người mù màu | Sparkle hình dạng riêng + icon ✦ trên tooltip, không chỉ dựa vào màu |

Scope: palette swap = 60 × ~10 phút chỉnh tay. Làm cho launch (P1).

### 4.6 Prestige mutation branches (P2, post-launch)

- Mỗi Act có 2 branch cho S4–S5: `b1 Lumen` (LUM/TRN, đẹp sáng) và `b2 Carapace` (ARM/CRY/SPK, cứng cáp).
- Mở bằng GenTokens (vd. 5 token/Act), chọn 1 trong 2 cho mỗi Act ("Gene Splice" UI). Đổi lại được miễn phí.
- Cùng ID level, khác skin + passive nhỏ (vd. Lumen: +5% offline cap; Carapace: +5% tốc độ trứng rơi).
- Chi phí art: 12 Act × 2 stage × 2 branch = 48 sprite. Bán như update miễn phí hoặc gắn DLC biome.

---

## 5. Movement & behavior

### 5.1 Hằng số strip

- Strip cao mặc định 160px (chỉnh 120–240px). Sinh vật cao 40–96px (bảng 6.5).
- Tọa độ y chia làm **4 lane**:

| Lane | Vùng y (% chiều cao strip, 0 = đỉnh) | Scale | Tint/alpha | Parallax tốc độ | Dùng cho |
|---|---|---|---|---|---|
| `back` | 10–45% | 0.8 | tối 15%, alpha 0.85 | ×0.7 | Jelly lớn, ambient |
| `mid` | 25–75% | 1.0 | — | ×1.0 | Đa số |
| `front` | 40–80% | 1.1 | — | ×1.2 | Con vừa merge (5s), apex |
| `bottom` | dính đáy (y = 100% − pivot) | 1.0 | — | ×1.0 | Crawler, anchored |

- Depth sort trong lane theo y. Con đang được kéo/merge luôn ở trên cùng.
- Ngân sách hiệu năng (MUST): ≤ 40 sinh vật, ≤ 3 tween chạy đồng thời/con, ≤ 150 particle toàn strip, 30 FPS khi idle, 10 FPS khi bị che/không focus, CPU < 2%.

### 5.2 Thư viện locomotion → Phaser tween presets

Tham số là mặc định; mỗi con có thể override trong `motion.params`. Thời gian ms, khoảng cách px ở 1x.

| Preset | Family | Mô tả | Tween chính (prop: range, period, ease) | Tốc độ ngang | Ghi chú |
|---|---|---|---|---|---|
| `DRIFT_PULSE` | JEL | Co bóp chuông, nổi lên rồi chìm từ từ | `scaleY 1→0.86→1` + `scaleX 1→1.06→1`, 1800–2600, `Sine.easeInOut`; lúc co: `y −8..−14` 400 `Quad.easeOut`, rồi `y +` chậm 1400 `Sine.easeIn` | 3–8 px/s | Part `tentacles`: `angle ±4°` lệch pha 200ms |
| `DART` | FSH nhỏ | Bơi thẳng, thỉnh thoảng phóng | Bơi: `angle ±3°` 400 `Sine.easeInOut` (đuôi vẫy giả); dart: `x +50..80` 220 `Quad.easeOut` mỗi 4–9s | 15–35 px/s | Đổi hướng: `scaleX → −1` 160ms `Back.easeInOut` |
| `BASK_GLIDE` | FSH lớn (*Mola*) | Lướt rất chậm, thỉnh thoảng nằm nghiêng phơi nắng | `y ±3` 3000 `Sine`; vây trên/dưới `angle ±10°` 900; bask: `angle 0→60°` 1200, giữ 3–6s | 4–10 px/s | *Mola* phơi nắng nằm nghiêng ở mặt nước là hành vi thật |
| `JET` | CEP mực | Nén → phụt → trôi | Nén: `scaleX 0.9, scaleY 1.1` 300 `Sine.easeIn`; phụt: `scaleX 1.15, scaleY 0.9` + `x ±40..70` 260 `Expo.easeOut`; trôi về 1:1 1500 `Sine.easeOut`; chu kỳ 3–6s | trung bình 10–20 px/s | Xoay hướng di chuyển `angle` theo vector, ±15° max |
| `HOVER_FLAP` | ANG, CEP dumbo | Lơ lửng, vẫy vây/tai | Body `y ±3` 2200 `Sine`; part `fin` `angle ±18°` 600 `Sine.easeInOut`; part `lure` `angle ±8°` 1700 lệch pha | 2–6 px/s | Dumbo: "tai" = 2 part fin |
| `UNDULATE` | WRM, eel | Uốn sóng | Sprite đơn: `y ±6` 1200 + `angle ±6°` lệch pha 300 (giả sóng). Nâng cấp: `Phaser.GameObjects.Rope` 8–12 điểm, sin amplitude 4–8, wavelength = 0.6 thân | 8–18 px/s | Rope là P1, chỉ dùng cho S4–S5 |
| `GLIDE_FLAP` | MOL bơi (pteropod, *Glaucus*) | "Bay" bằng cánh/cerata | Part `wing` `scaleY 1→0.6` 500 `Sine.easeInOut`; body `y ±5` theo nhịp vỗ | 6–12 px/s | *Glaucus* trôi úp ngược trên mặt nước: `angle 180` idle hiếm |
| `TAILFLIP` | CRU bơi | Bơi chậm bằng chân, bật đuôi lùi khi giật mình | Bơi: `y ±2` 300 (chân chèo); flip: `x −60..−90` 180 `Expo.easeOut` + `angle −20→0` | 6–14 px/s | Bật đuôi lùi (caridoid escape) là phản xạ thật |
| `CRAWL` | ECH, CRU đáy, MOL đáy | Đi trên đáy, từng bước | Bước: `y −2→0` 300 `Quad.easeOut` lặp; `angle ±2°` 600; dừng 2–5s mỗi 3–8 bước | 3–10 px/s | Pivot đáy giữa. Sea pig: thêm `scaleX 1.04` khi "hít" |
| `ANCHORED` | WRM tube, decor | Đứng yên, chùm lông đung đưa | Part `plume` `angle ±10°` 1500 `Sine`; click: `scaleY 1→0.3` 120 `Back.easeIn`, trở lại 900 | 0 | Rụt vào ống khi chạm là hành vi thật |

**Snippet tham chiếu (Phaser 3):**

```ts
export function driftPulse(scene: Phaser.Scene, c: Phaser.GameObjects.Container, p = MOTION.DRIFT_PULSE) {
  const period = Phaser.Math.Between(p.periodMin, p.periodMax);
  scene.tweens.add({ targets: c, scaleY: p.squash, scaleX: p.stretch, duration: period * 0.25,
    ease: 'Sine.easeInOut', yoyo: true, repeat: -1, hold: period * 0.5 });
  scene.tweens.add({ targets: c, y: `-=${p.rise}`, duration: period * 0.25, ease: 'Quad.easeOut',
    yoyo: true, yoyoDuration: period * 0.75, repeat: -1 }); // hoặc chain thủ công
}
```

### 5.3 Idle behaviors (thư viện chung)

| ID | Mô tả | Tween | Tần suất mặc định |
|---|---|---|---|
| `blink` | Chớp mắt | part `eyes` `scaleY 1→0.1→1` 140 | 3–7s ngẫu nhiên |
| `look` | Mắt nhìn theo con trỏ | part `eyes` offset `x,y ±1.5px` | Khi cursor trong 200px |
| `glow_pulse` | Glow thở | part `glow` `alpha 0.35↔0.9` 2000–3000 `Sine` | Liên tục (S4+) |
| `yawn` | Ngáp | body `scaleY 1.08` 600 + bubble nhỏ | 60–180s |
| `turn_around` | Quay đầu | `scaleX ±1` 160 | Khi chạm mép strip |
| `signature` | Hành vi riêng (S3+): bask, retract, lure-wiggle, ink puff... | Định nghĩa trong spec | 30–120s |
| `sleep` | Ngủ | Alpha 0.8, chu kỳ ×2, `y` chìm 10px, particle "z" | Theo `activeHours` (5.5) |

### 5.4 Interactions

| Trigger | Phản ứng mặc định | Theo personality |
|---|---|---|
| Hover cursor | `look` + dừng di chuyển 1s | `curious`: bơi lại gần 20px; `shy`: lùi 30px + alpha 0.9; `chill`: không làm gì |
| Click (không kéo) | Squash `0.85/1.15` 120 `Back.easeOut` + emote bubble (mục 10, P1) + SFX select | `grumpy`: emote "!" |
| Kéo thả | Scale 1.1, `angle ±5°` lắc nhẹ theo vận tốc kéo | — |
| Thả lên con cùng level | Merge (VFX mục 7.2) | — |
| Schooling | `FSH` cùng ID ≥ 3: boids-lite (cohesion 0.02, alignment 0.05, separation 18px), tối đa 8/bầy | — |
| Predator–prey flavor | Con level cao hơn ≥ 5 đi ngang: con nhỏ `TAILFLIP`/né 30px. **Chỉ cosmetic, không mất con** | — |
| Click-through | Chỉ hitbox sinh vật (polygon/ellipse theo pivot) nhận chuột; vùng trống click-through | MUST cho desktop |

### 5.5 Day/night & OS clock

- Dùng giờ hệ thống. Mỗi con có `activeHours`: `diurnal` (6–18h), `nocturnal` (18–6h), `always`.
- **Diel vertical migration:** ban đêm (19–5h) con Twilight dịch y lên 15% strip, đèn sáng hơn; ban ngày chìm xuống. Có thật nên viết luôn vào fun fact.
- Focus/Pomodoro mode: mọi period ×1.5, tốc độ ×0.5, tắt `signature` và predator flavor (giảm phân tâm).
- Ngoài `activeHours`: `sleep` behavior, income **không** đổi (không phạt người chơi).

---

## 6. Visual rules

### 6.1 Shape language

| Family | Hình cơ bản | Cảm xúc | Tỷ lệ đầu/mắt | Cấm |
|---|---|---|---|---|
| JEL | Bán nguyệt, tròn, đường rủ | Nhẹ nhàng, vô hại | Mắt nằm 1/3 dưới vòm | Gai cứng |
| FSH | Oval, giọt nước, tam giác vây | Nhanh nhẹn, thân thiện | Mắt to 20–25% chiều cao thân | Vây quá chi tiết (tia vây) |
| ANG | Hình tròn lớn + tam giác nhỏ | Kỳ quặc, tinh nghịch | Mắt nhỏ, đèn câu là tiêu điểm | Răng > 4, miệng mở > 30% |
| CEP | Viên đạn/bóng + đường cong S | Thông minh, duyên dáng | Mắt to, gần giữa thân | Mỏ, giác hút chi tiết |
| CRU | Chữ nhật bo góc xếp đốt | Bận rộn, chăm chỉ | Mắt trên cuống | Chân > 6 nét ở 64px (gộp lại) |
| WRM | Dải S, đầu tròn | Uyển chuyển | Mắt chấm | Đốt giun chi tiết, vẻ "giòi" |
| MOL | Xoắn ốc, khối mềm, cerata như lửa | Chậm rãi, tự tin | Mắt trên râu/xúc giác | Chất nhầy bóng nhớt |
| ECH | Khối u tròn, sao | Ngộ nghĩnh, vụng về | Mắt nhỏ, mặt "ngơ" | Hình con người |

### 6.2 Silhouette test (MUST, mỗi Act)

1. Export 5 stage của Act thành silhouette đen ở **48px**, xếp ngẫu nhiên.
2. Người test (không phải designer) sắp đúng thứ tự level: đạt nếu ≥ 4/5 đúng.
3. Đặt cạnh silhouette 15 con cùng zone: không 2 con nào bị nhầm (≥ 90% đúng).
4. Thêm: ảnh xám (grayscale) ở 64px, nhận ra mắt + feature chính.

### 6.3 Màu & value

- Max 5 màu phẳng + 1 glow + outline. Shading tối đa 1 bậc tối (cel shade) + 1 highlight.
- **Desktop là nền bất định** (wallpaper sáng/tối, cửa sổ trắng): MUST có outline tối + strip tint gradient alpha 25–45% (người chơi chỉnh). Con Midnight/Abyss tối màu MUST có rim light 1px màu sáng để không biến mất trên nền đen.
- Value: thân chính ở giá trị trung-sáng (L* 45–80), outline L* < 20. Mắt luôn có contrast cao nhất.
- Không phân biệt level/rarity chỉ bằng đỏ–xanh lá. Kiểm tra bằng filter deuteranopia/protanopia (Color Oracle hoặc Chrome DevTools "Emulate vision deficiencies").

### 6.4 Nét & chi tiết

| Quy tắc | Giá trị |
|---|---|
| Outline ngoài | 2px @1x (4px @2x), màu outline zone, không dùng đen thuần trừ Midnight |
| Nét trong | 1px @1x, tối đa 3 nét chi tiết trong thân |
| Chi tiết nhỏ nhất | ≥ 3px @1x (nhỏ hơn sẽ nhòe) |
| Max feature nhận diện ở 64px | 1 silhouette chính + 1 big feature mới + mắt + 1 pattern |
| Facing | Mọi master art **quay sang PHẢI**, góc nghiêng 3/4 hoặc ngang; code lật `scaleX` |
| Ánh sáng | Nguồn từ trên-trái (Sunlit/Twilight), từ trong ra (Midnight glow), từ dưới (Vent) |

### 6.5 Size class theo level (chiều cao hiển thị @1x, strip 160px)

| Act \ Stage | S1 | S2 | S3 | S4 | S5 |
|---|---|---|---|---|---|
| Act I (L1–5) | 40 | 44 | 50 | 56 | 64 |
| Act II (L6–10) | 52 | 56 | 62 | 68 | 76 |
| Act III (L11–15) | 64 | 70 | 78 | 86 | 96 |

- S1 Act kế ≥ ~80% S5 Act trước (không "co lại" rõ rệt khi leap). Con dạng dài (eel, worm) dùng chiều rộng tương đương thay chiều cao.
- Scale theo setting chiều cao strip: `displayH × stripH / 160`.

### 6.6 Layered-part rig

| Part | Bắt buộc | Pivot | Ghi chú |
|---|---|---|---|
| `body` | MUST | Tâm khối (JEL: tâm vòm; crawler: đáy giữa) | Chứa outline ngoài |
| `eyes` | MUST (trừ khi không mắt) | Tâm cặp mắt | Cả 2 mắt 1 part để blink/look đơn giản |
| `fin` / `wing` / `tentacles` / `plume` / `tail` | MAY, ≤ 2 part | Điểm gắn vào thân | Vẽ dư 4px phần nối, giấu dưới body |
| `lure` | MAY (ANG) | Gốc cần câu | — |
| `glow` | MAY (S4+ hoặc LUM) | Như body | Blend `ADD`, màu trắng/glow zone, mờ biên 4–8px |

Tối đa 5 part/con. Container Phaser: `[glow(behind), tentacles/fin, body, eyes, lure, glow(front MAY)]`.

### 6.7 Export spec

| Mục | Spec |
|---|---|
| Master | PNG RGBA 1024×1024 (từ Gemini, sau xóa nền) + file nguồn chỉnh tay (.kra/.psd/.svg) lưu Git LFS |
| Runtime | PNG trong suốt, trim, padding 2px; `@1x` (chiều cao = size class) và `@2x`; atlas theo zone (free-tex-packer, ≤ 2048²) |
| Tên file | `cr_{zone}_{LL}[_{variant}]__{part}@{scale}x.png` vd. `cr_sun_01__body@2x.png`, `cr_sun_01_ab__body@2x.png` |
| Màu | sRGB, không premultiplied alpha khi export; không có pixel bán trong suốt ngoài viền glow |
| Pivot | Ghi trong data (`pivot: {x: 0.5, y: 0.55}` theo tỷ lệ body) |
| Icon bách khoa | 128×128 @1x, nền tròn màu zone, silhouette version 128×128 cho "chưa khám phá" |

---

## 7. Audio & feel

### 7.1 SFX theo family (descriptor cho ElevenLabs SFX)

Luật chung: ≤ 0.6s, âm lượng mặc định thấp (−18 LUFS), không tần số chói > 6kHz nổi bật, **SFX mặc định có thể tắt riêng** (desktop app chạy lúc làm việc). 3 biến thể/âm, random pitch ±5%.

| Family | Select / click | Signature | Descriptor mẫu |
|---|---|---|---|
| JEL | "bloop" mềm | Chuông pulse rất nhỏ | `soft wet bubble bloop, gentle, underwater, short 0.3s, muffled, cute` |
| FSH | "flick" nhanh | Bầy lướt | `tiny fish tail flick in water, quick swish, light, 0.2s` |
| ANG | "ping" đèn | Đèn bật | `small glassy ping like a tiny light turning on underwater, warm, 0.4s` |
| CEP | "pff" phụt | Phụt mực | `soft water jet puff, airy whoosh underwater, playful, 0.3s` |
| CRU | "tick-tick" | Bật đuôi | `tiny shrimp clicks, two soft clicks, underwater, 0.25s` |
| WRM | "swoosh" dài | Uốn | `smooth slithery water swoosh, soft, 0.5s` |
| MOL | "squish" | Vỗ cánh | `gentle squishy pop, soft and rubbery, cute, 0.3s` |
| ECH | "boop" trầm | Đi bộ | `low soft boop, clumsy, muffled underwater, 0.3s` |

Ambience theo zone (loop 60–120s): Sunlit sóng xa + bọt; Twilight drone lạnh; Midnight tiếng "hum" ấm; Vent tiếng sôi lục bục nhẹ.

### 7.2 Merge VFX theo stage

| Kết quả merge | VFX | Thời lượng | SFX |
|---|---|---|---|
| → S1–S2 | 2 con hút vào nhau, 8 bubble particle, pop scale 0→1.1→1 | 400ms | `bubble pop chime, small` |
| → S3 | + vòng sóng (ring) tỏa 1x, 16 particle | 550ms | chime 2 nốt |
| → S4 | + flash trắng alpha 0.6, glow ring màu zone | 700ms | chime 3 nốt + shimmer |
| → S5 (apex) | + hào quang 1.5s, con mới ở lane `front` 5s, emote "✦" | 1000ms | arpeggio ngắn |
| Metamorphosis leap (S5→S1 Act kế) | Kén bong bóng bao lại 800ms → silhouette đen của con mới hiện 300ms → reveal màu | 1200ms | Jingle 1.5s riêng/zone |
| First discovery | + tem "NEW" + mở trang bách khoa (không chặn, toast 3s) | — | Stinger |
| Aberrant | + sparkle 4 cánh lặp mỗi 6s suốt đời | — | Shimmer cao |

Tôn trọng Reduced Motion: chỉ fade + scale, không flash, không shake.

---

## 8. Lore & collection

### 8.1 Cấu trúc entry bách khoa

| Trường | Giới hạn | Ví dụ (Saucelet) |
|---|---|---|
| Tên EN / VN | — | Saucelet / Sứa Đĩa Nhí |
| Real anchor | Tên thường + Latin + độ sâu thật | Moon jelly ephyra, *Aurelia aurita*, 0–200 m |
| Lab note (hư cấu, hài) | ≤ 100 ký tự, giọng "nhà khoa học hậu đậu" | "Specimen keeps stacking itself on the petri dishes. We ran out of dishes." |
| Fun fact (THẬT) | ≤ 160 ký tự, về loài thật | Xem 8.2 |
| Mutation note (hư cấu, nói rõ) | ≤ 80 ký tự | "Lab twist: frilly edges glow faintly when happy." |
| Kích thước thật vs game | 1 dòng | "Real ephyra: ~2–5 mm." |
| Ngày khám phá, số lần merge | Tự động | — |
| Nguồn | ≥ 1 link uy tín (ẩn trong UI, có trong data + credits) | Monterey Bay Aquarium |

### 8.2 Luật fun fact

1. Fact phải về **loài thật** làm anchor, không về sinh vật trong game.
2. Nguồn ưu tiên: NOAA Ocean Exploration, MBARI, Smithsonian Ocean, Monterey Bay Aquarium, WoRMS, FishBase, bài peer-reviewed. Wikipedia chỉ để tìm nguồn gốc.
3. Không dùng so sánh nhất ("lớn nhất thế giới", "duy nhất") trừ khi nguồn nói đúng câu đó.
4. Số liệu ghi khoảng ("2–5 mm") và đơn vị metric.
5. `factStatus`: `draft` → `sourced` (có link) → `verified` (người đọc nguồn gốc, khớp) → `locked`. Chỉ `verified` được ship. AI (ChatGPT/Gemini) chỉ được viết `draft`.
6. Không nhân hóa sai khoa học trong fact (lore note thì được).

### 8.3 Discovery hooks

| Hook | Cơ chế |
|---|---|
| Silhouette "???" | Bách khoa hiện silhouette con kế tiếp (chỉ 1 level phía trước) để kéo tò mò |
| Hint dòng | "Rumor: something in the Twilight eats krill…" cho Act chưa mở |
| Zone teaser | Sau khi xong Act III, silhouette apex zone kế hiện mờ ở đáy strip |
| % hoàn thành | Theo zone + tổng; aberrant tính riêng |
| Steam achievements | Hoàn thành Act, zone, 10/30/60 aberrant, xem 50 fun fact |
| Trading cards | 8–10 card: 4 zone apex + 4–6 con được yêu thích (chọn sau playtest) |

---

## 9. Gameplay stats (tối giản)

| Field | Kiểu | Ghi chú |
|---|---|---|
| `zone`, `level`, `act`, `stage` | enum/int | Income suy ra từ `zone + level` (mục 4.2), không lưu |
| `variants` | `('base'|'ab'|'b1'|'b2')[]` | Biến thể có art |
| `passive` | object? | Chỉ S5 (12 con). Loại: `eggRate`, `offlineCap`, `zoneIncome`, `aberrantChance`; giá trị ≤ 5% |
| `unlock` | object | Mặc định `merge`; S1 Act I của zone: `prestige ≥ n` |
| `spawnFromEgg` | bool | Chỉ L1–L3 của mỗi zone có thể rơi ra từ trứng (cấp trứng nâng được) |

Không có HP, attack, stat chiến đấu. Không có rarity ngoài aberrant.

---

## 10. Đề xuất bổ sung (những gì còn thiếu)

| # | Bổ sung | Ưu tiên | Vì sao quan trọng | Cách làm tối thiểu |
|---|---|---|---|---|
| 1 | **Đọc được trên nền desktop bất định** | P0 | Strip trong suốt nằm trên wallpaper bất kỳ; con tối biến mất trên nền tối, con sáng biến mất trên cửa sổ trắng | Outline + rim light + strip tint gradient alpha chỉnh được (6.3). Test trên 4 nền: trắng, đen, wallpaper rực, VS Code dark |
| 2 | **Style lock cho AI art** | P0 | Rủi ro số 1 của pipeline (analysis 10.1): 60 con không cùng style → trông như AI soup | Style bible prompt block cố định (11.3), 3 ảnh STYLE ref + 1 ref con trước trong chain, log prompt/model/ngày, nếu lệch thì dùng Scenario LoRA |
| 3 | **Data schema + ID bất biến** | P0 | Save game lưu ID; đổi ID = mất save = review xấu. Remote config cần schema rõ | `CreatureDef` (11.2) + validate bằng zod khi build + unit test "60 ID unique, chain liền mạch" |
| 4 | **Definition of Done / review checklist** | P0 | Solo dev dễ "gần xong" 60 con mà không con nào xong thật | Checklist 11.1 mục J; dashboard trạng thái trong roster (13) |
| 5 | **IP/originality check** | P0 | Sinh vật biển cute dễ trùng Pokémon (Chinchou/Lanturn = anglerfish, Tentacool = jelly) và Subnautica; Steam/người chơi sẽ chỉ ra ngay | So sánh với Bulbapedia (Water type), Subnautica wiki, Finding Nemo; reverse image search (Google Lens) mỗi con; đổi ≥ 2 đặc điểm nếu giống |
| 6 | **Bằng chứng "hand-edited" + khai báo AI** | P0 | Steam bắt buộc khai báo; "AI-assisted, hand-edited" chỉ đáng tin nếu chỉnh tay thật; chỉnh tay còn giúp bảo vệ bản quyền | Lưu ảnh AI gốc + file chỉnh tay + `handEditNotes` liệt kê thay đổi; chụp before/after cho devlog (marketing tốt) |
| 7 | **Ngân sách hiệu năng** | P0 | Game chạy nền cả ngày; CPU cao = refund | Giới hạn 5.1; test 40 con + particle trên laptop yếu |
| 8 | **Fact-check pipeline** | P0 | Fun fact sai bị cộng đồng bắt lỗi, làm mất uy tín "grounded" | `factStatus` workflow (8.2), chỉ ship `verified` |
| 9 | **Reduced motion & SFX off mặc định thấp** | P1 | Chuyển động liên tục ở rìa mắt gây mệt/say cho một số người; đây là tính năng a11y quan trọng nhất của game desktop | Toggle "Calm mode": tắt dart/jet, period ×2, không flash; SFX volume mặc định 30% |
| 10 | **Colorblind safety** | P1 | ~8% nam giới mù màu; aberrant/level không được chỉ khác màu | Luật 6.3 + sparkle hình dạng + số level trên tooltip |
| 11 | **Personality & emotes** | P1 | Tạo gắn bó, screenshot/TikTok đáng chia sẻ, che bớt cảm giác "AI vô hồn" | 5 personality (`curious, shy, chill, grumpy, show-off`) × bộ emote bubble 6 icon dùng chung (♥ ! ? z ♪ ✦) |
| 12 | **Day/night theo OS clock** | P1 | Lý do liếc màn hình, gắn với sinh học thật (diel migration) | 5.5, chỉ đổi visual, không đổi income |
| 13 | **Aberrant variants** | P1 | Hook sưu tầm dài hạn rẻ nhất (palette swap) | 4.5 |
| 14 | **Unlock conditions rõ** | P1 | Người chơi cần biết vì sao zone/Act bị khóa | `unlock` field + hint text |
| 15 | **Localization EN/VN (+ chuẩn bị JP/CN/DE)** | P1 | Steam idle bán mạnh ở CN/JP/DE; tên pun khó dịch | Tách text ra `i18n/*.json`, giới hạn độ dài, glossary tên; font hỗ trợ dấu tiếng Việt và CJK |
| 16 | **Ambient/decor creatures (không merge)** | P1 | Làm bể sống động mà không cần art merge mới; dùng family thừa (yeti crab, tube worm) | 1–2 decor/zone, `ANCHORED`/`CRAWL` |
| 17 | **Prestige mutation branches** | P2 | Chiều sâu cho người chơi lâu; nội dung update | 4.6 |
| 18 | **Đặt tên riêng cho con / "pet" yêu thích** | P2 | Gắn bó cảm xúc, chia sẻ mạng xã hội | Click phải → đổi tên, lưu theo instance |
| 19 | **Seasonal skins / DLC biome slots** | P2 | Doanh thu DLC $1,99 (analysis 8.2) | Giữ chỗ `zone` enum mở rộng, family thừa |
| 20 | **Steam Workshop / mod skins** | P2 | Kéo dài vòng đời, nhưng tốn công kiểm duyệt | Chỉ cân nhắc sau 10k bản |

---

## 11. TEMPLATE spec từng sinh vật (deliverable chính)

### 11.1 Template markdown (copy cho mỗi con)

```markdown
## [cr_{zone}_{LL}] {EN Name} / {VN Name}

### A. Định danh
| Field | Value |
|---|---|
| ID | cr_{zone}_{LL} |
| Zone / Level | {sun|twi|mid|aby} / L{1–15} |
| Act / Stage | Act {I–III} / S{1–5} ({Hatchling|Juvenile|Adult|Mutant|Apex}) |
| Family | {JEL|FSH|ANG|CEP|CRU|WRM|MOL|ECH} |
| Evolves from → to | {cr_..|— (egg)} → {cr_..|— (zone apex)} |
| Heritage trait (nếu S1 của Act II/III) | {trait kế thừa từ S5 Act trước} |
| Real anchor | {common name}, *{Latin}*, {độ sâu thật m}, {kích thước thật} |
| Personality | {curious|shy|chill|grumpy|show-off} |

### B. Visual
| Field | Value |
|---|---|
| Silhouette (1 câu) | {hình khối chính đọc được ở 48px} |
| Big feature mới so với level trước | {đúng 1 feature đổi silhouette} |
| Shape language | {hình cơ bản + cảm xúc} |
| Distinct features (≤ 4) | 1. … 2. … 3. … |
| Mutation axis | chính: {LUM|TRN|EYE|TEN|FIN|PAT|SPK|ARM|CRY|SYM}; phụ: {—|…} |
| Palette (hex) | primary #…, secondary #…, accent #…, eye #…, outline #…, glow #… |
| Size class | {px @1x} (bảng 6.5) |
| Facing / pivot | right / {x,y tỷ lệ} |
| Layered parts (≤ 5) | body, eyes, {fin/tentacles/...}, {glow} |
| Creepy dial | {0–3} |

### C. Motion & behavior
| Field | Value |
|---|---|
| Lane | {back|mid|front|bottom} |
| Movement preset | {DRIFT_PULSE|DART|BASK_GLIDE|JET|HOVER_FLAP|UNDULATE|GLIDE_FLAP|TAILFLIP|CRAWL|ANCHORED} |
| Param overrides | {vd. periodMin 2000, rise 10} |
| Idle behaviors | blink, look, {glow_pulse}, signature: {mô tả + tween} |
| Interactions | hover: …, click: …, schooling: {yes/no} |
| Active hours | {diurnal|nocturnal|always} |

### D. Art production
| Field | Value |
|---|---|
| Ref IDs | STYLE-01, STYLE-02, STYLE-03, {cr_.. trước trong chain} |
| Gemini prompt (+) | [STYLE BLOCK] + {subject block} |
| Negative / avoid | [NEGATIVE BLOCK] + {riêng con này} |
| Model / ngày / số lần thử | {nano-banana-pro|…} / {yyyy-mm-dd} / {n} |
| Hand-edit notes | {danh sách sửa: màu, outline, giải phẫu, tách part} |
| IP check | {Pokémon/Subnautica/khác: OK|giống X → đã đổi …} |

### E. Audio & VFX
| Field | Value |
|---|---|
| SFX select | {descriptor ElevenLabs} |
| SFX signature (S3+) | {descriptor} |
| Merge VFX tier | {S1–S2|S3|S4|S5|Leap} |

### F. Lore
| Field | Value |
|---|---|
| Lab note (hư cấu) | {≤ 100 ký tự} |
| Fun fact (thật) | {≤ 160 ký tự} |
| Mutation note | {≤ 80 ký tự} |
| Nguồn | {title – url} |
| Fact status | {draft|sourced|verified|locked} |

### G. Stats
| Field | Value |
|---|---|
| Variants | base{, ab}{, b1, b2} |
| Passive (chỉ S5) | {—|type +x%} |
| Unlock | {merge|prestige ≥ n} |
| Spawn from egg | {yes (L1–3)|no} |

### J. Acceptance checklist (Definition of Done)
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
```

### 11.2 Data schema (TypeScript)

```ts
// src/data/creatures/schema.ts
export type ZoneId = 'sun' | 'twi' | 'mid' | 'aby';
export type FamilyId = 'JEL' | 'FSH' | 'ANG' | 'CEP' | 'CRU' | 'WRM' | 'MOL' | 'ECH';
export type MutationAxis = 'LUM' | 'TRN' | 'EYE' | 'TEN' | 'FIN' | 'PAT' | 'SPK' | 'ARM' | 'CRY' | 'SYM';
export type MotionPreset = 'DRIFT_PULSE' | 'DART' | 'BASK_GLIDE' | 'JET' | 'HOVER_FLAP'
  | 'UNDULATE' | 'GLIDE_FLAP' | 'TAILFLIP' | 'CRAWL' | 'ANCHORED';
export type Lane = 'back' | 'mid' | 'front' | 'bottom';
export type Personality = 'curious' | 'shy' | 'chill' | 'grumpy' | 'show-off';
export type PartName = 'body' | 'eyes' | 'fin' | 'wing' | 'tentacles' | 'plume' | 'tail' | 'lure' | 'glow';
export type VariantId = 'base' | 'ab' | 'b1' | 'b2';
export type FactStatus = 'draft' | 'sourced' | 'verified' | 'locked';
export type ArtStatus = 'spec' | 'generated' | 'hand-edited' | 'rigged' | 'approved';

export interface MotionParams {
  periodMin: number; periodMax: number;      // ms
  amplitudeY: number;                        // px @1x
  rotateDeg: number;                         // ±deg
  squash: number; stretch: number;           // scale targets
  rise: number;                              // px (pulse/jet distance)
  speedMin: number; speedMax: number;        // px/s
  burstEveryMin: number; burstEveryMax: number; // ms, for dart/jet/flip
  ease: string;                              // Phaser ease key
}

export interface PartDef {
  name: PartName;
  pivot: { x: number; y: number };           // 0..1 of part texture
  offset: { x: number; y: number };          // px @1x relative to body pivot
  z: number;                                 // render order in container
  blend?: 'NORMAL' | 'ADD';
  tween?: Partial<{ prop: 'angle' | 'scaleY' | 'scaleX' | 'alpha'; from: number; to: number; period: number; ease: string; phaseMs: number }>;
}

export interface CreatureDef {
  id: string;                                // cr_sun_01  (immutable)
  zone: ZoneId;
  level: number;                             // 1..15 within zone
  act: 1 | 2 | 3;
  stage: 1 | 2 | 3 | 4 | 5;
  family: FamilyId;
  nameKey: string;                           // i18n key -> { en, vi, ... }
  evolvesFrom: string | null;
  evolvesTo: string | null;
  heritageFrom?: { id: string; trait: string };
  realAnchor: { common: string; latin: string; depthM: [number, number]; realSize: string };
  personality: Personality;
  visual: {
    displayHeightPx: number;                 // @1x at strip 160px
    silhouette: string;
    newBigFeature: string;
    features: string[];                      // ≤ 4
    axes: { primary: MutationAxis; secondary?: MutationAxis };
    palette: { primary: string; secondary: string; accent: string; eye: string; outline: string; glow?: string };
    pivot: { x: number; y: number };
    parts: PartDef[];                        // ≤ 5
    creepyDial: 0 | 1 | 2 | 3;
  };
  motion: {
    lane: Lane;
    preset: MotionPreset;
    params?: Partial<MotionParams>;          // overrides MOTION_DEFAULTS[preset]
    idle: Array<'blink' | 'look' | 'glow_pulse' | 'yawn' | 'turn_around'>;
    signature?: { id: string; desc: string; everyMs: [number, number] };
    hover: 'approach' | 'flee' | 'ignore' | 'look';
    schooling: boolean;
    activeHours: 'diurnal' | 'nocturnal' | 'always';
  };
  art: {
    refIds: string[];
    promptSubject: string;                   // STYLE_BLOCK is prepended at build time
    promptNegativeExtra: string;
    model: string; generatedAt?: string; attempts?: number;
    handEditNotes: string[];
    ipCheck: { pokemon: boolean; subnautica: boolean; reverseImage: boolean; notes?: string };
    status: ArtStatus;
  };
  audio: { selectSfx: string; signatureSfx?: string };
  lore: {
    labNoteKey: string; funFactKey: string; mutationNoteKey: string;
    sources: Array<{ title: string; url: string }>;
    factStatus: FactStatus;
  };
  stats: {
    variants: VariantId[];
    passive?: { type: 'eggRate' | 'offlineCap' | 'zoneIncome' | 'aberrantChance'; value: number };
    unlock: { type: 'merge' } | { type: 'prestige'; min: number };
    spawnFromEgg: boolean;
  };
}
// Income KHÔNG nằm ở đây: economy.incomePerSec(zone, level) = zoneBase[zone] * 2.6 ** (level - 1)
```

**Validation (build-time, zod hoặc test):** ID khớp `^cr_(sun|twi|mid|aby)_(0[1-9]|1[0-5])$`; mỗi zone đủ 15 level; `evolvesTo` của L khớp `evolvesFrom` của L+1; `act = ceil(level/5)`, `stage = ((level-1)%5)+1`; `parts.length ≤ 5`; passive chỉ ở stage 5; ship build chỉ nhận `factStatus ∈ {verified, locked}` và `art.status = approved`.

### 11.3 Gemini prompt blocks (dùng chung)

**STYLE BLOCK (prepend, không sửa giữa chừng; đổi = version mới `STYLE v2`):**
```
Cute-weird deep-sea creature mascot for a cozy idle desktop game. Flat vector illustration,
clean bold dark outline of uniform thickness, 4–5 flat colors with one simple cel-shade step
and one small highlight, no gradients except a soft glow if specified. Side view facing right,
full body centered, whole creature visible with margin. Big readable shapes, readable as a
small 64-pixel icon. Large round eyes with a white catchlight. Plain solid #FF00FF magenta
background, no scene, no shadow on ground. Match the style of the reference images exactly.
```

**NEGATIVE BLOCK:**
```
Avoid: realistic rendering, 3D, photorealism, painterly texture, noise, grain, gradients,
thin sketchy lines, tiny details, text, watermark, signature, frame, background scenery,
multiple creatures, cropped body, human face, eyebrows, realistic teeth, gore, blood,
Pokémon style, Subnautica style, anime, chibi human features, extra limbs not described.
```

Ghi chú:
- Nền magenta `#FF00FF` để key ra trong suốt (không dùng xanh lá vì có con xanh lá). Kiểm tra viền tím còn sót khi xóa nền.
- Ref: luôn gửi STYLE-01..03 (3 con "chuẩn" đã chỉnh tay xong đầu tiên) + con trước trong chain (giữ heritage/nhất quán). Tối đa 14 ref (giới hạn Nano Banana Pro); dùng 4–6 là đủ.
- Gemini app không cho cố định seed; ghi lại model, ngày, prompt đầy đủ, ảnh được chọn vào `art/` log. Nếu dùng API có tham số seed thì ghi thêm.
- Không tạo từng part bằng AI: tạo nguyên con → tách part bằng tay (Krita/Photopea), vẽ bù phần bị che.

---

## 12. Ví dụ đã điền

### 12.1 Chain mẫu: Sunlit Act I + leap

| Lv | ID | EN / VN | Stage | Real anchor | Big feature mới | Axis | Preset | Size |
|---|---|---|---|---|---|---|---|---|
| 1 | `cr_sun_01` | Saucelet / Sứa Đĩa Nhí | S1 | Moon jelly ephyra (*Aurelia aurita*) | Đĩa 8 thùy hình sao (gốc) | PAT | DRIFT_PULSE | 40 |
| 2 | `cr_sun_02` | Moonbun / Sứa Bánh Trăng | S2 | Moon jelly non | Vòm chuông tròn + 4 vòng hình cỏ 4 lá | PAT | DRIFT_PULSE | 44 |
| 3 | `cr_sun_03` | Cloverbell / Sứa Cỏ Bốn Lá | S3 | Moon jelly trưởng thành | 4 oral arm xoăn dài rủ xuống | TEN | DRIFT_PULSE | 50 |
| 4 | `cr_sun_04` | Sailbloop / Sứa Buồm | S4 | + *Physalia physalis* (man o' war) | Phao khí với buồm mào trên đỉnh | FIN | DRIFT_PULSE (+ sail sway) | 56 |
| 5 | `cr_sun_05` | Regatta / Đô Đốc Buồm | S5 | Man o' war "vương giả" | Buồm đôi + ruy băng xúc tu xanh + aura | FIN | DRIFT_PULSE | 64 |
| 6 | `cr_sun_06` | Dragonling / Sên Rồng Xanh | S1 (Act II) | Blue dragon sea slug (*Glaucus atlanticus*) | Đổi family; **heritage**: đầu cerata có chấm xanh của Regatta | TEN | GLIDE_FLAP | 52 |

Logic: ephyra → medusa là vòng đời thật; Lab "splice" thêm phao buồm của man o' war (mutation nói rõ là hư cấu, vì man o' war là siphonophore, không phải medusa); *Glaucus* thật sự ăn man o' war và tích tế bào gai của con mồi để tự vệ, nên leap sang sên rồng là hợp lý và là fun fact hay.

### 12.2 Spec đầy đủ: `cr_sun_01` Saucelet

#### A. Định danh
| Field | Value |
|---|---|
| ID | cr_sun_01 |
| Zone / Level | sun / L1 |
| Act / Stage | Act I / S1 (Hatchling) |
| Family | JEL |
| Evolves from → to | — (egg) → cr_sun_02 |
| Heritage trait | — |
| Real anchor | Moon jelly ephyra, *Aurelia aurita*, 0–200 m (ven bờ và mặt nước), ephyra thật ~2–5 mm |
| Personality | curious |

#### B. Visual
| Field | Value |
|---|---|
| Silhouette | Đĩa tròn dẹt với 8 thùy nhọn tròn đầu như ngôi sao/bánh răng mềm, nhìn nghiêng 3/4 hơi nghiêng lên |
| Big feature mới | (gốc) 8 thùy hình sao |
| Shape language | Tròn + thùy bo tròn; vô hại, "bánh quy" |
| Distinct features | 1. 8 thùy, mỗi thùy có đầu chấm màu coral 2. Tâm đĩa có 1 chấm hình cỏ 4 lá nhạt (báo trước L2) 3. 2 mắt to tròn ở mép dưới |
| Mutation axis | chính PAT (chấm thùy), phụ — |
| Palette | primary `#FFF6E0` (thân kem mờ), secondary `#3FC1C9` (tâm), accent `#FFB4A2` (đầu thùy), eye `#12355B`, outline `#12355B`, glow — |
| Size class | 40 px @1x (80 @2x) |
| Facing / pivot | right / (0.5, 0.5) tâm đĩa |
| Layered parts | `body` (đĩa + thùy), `eyes` |
| Creepy dial | 0 |
| Alpha thân | body alpha 0.92 (hơi trong) nhưng outline 100% |

#### C. Motion & behavior
| Field | Value |
|---|---|
| Lane | mid (y 30–60%) |
| Movement preset | DRIFT_PULSE |
| Param overrides | `periodMin 1400, periodMax 1900` (nhanh hơn con lớn), `squash 0.84, stretch 1.08, rise 8, speedMin 3, speedMax 6` |
| Idle behaviors | blink (3–6s), look, signature `spin_wobble`: `angle 0→360` 1600 `Sine.easeInOut` mỗi 40–90s (ephyra thật xoay khi bơi) |
| Interactions | hover: approach 20px + look; click: squash + emote ♥; schooling: no (nhưng ≥ 4 Saucelet thì bơi lệch pha để không đồng bộ) |
| Active hours | diurnal |

#### D. Art production
| Field | Value |
|---|---|
| Ref IDs | STYLE-01, STYLE-02, STYLE-03 (chưa có con trước) |
| Gemini prompt (+) | [STYLE BLOCK] + `Subject: a tiny baby moon jellyfish (ephyra stage). Flat round translucent cream-colored disc (#FFF6E0) with exactly 8 rounded star-like lobes around the edge, each lobe tip has a small coral dot (#FFB4A2). A faint teal (#3FC1C9) four-leaf-clover mark in the center of the disc. Two big round dark navy eyes near the lower edge, curious happy expression, tiny smile. Seen from the side, tilted slightly upward so the disc and lobes are both visible. Very simple, 3 colors plus outline (#12355B).` |
| Negative | [NEGATIVE BLOCK] + `tentacles, long oral arms, bell/dome shape, glow, more than 8 lobes, more than 2 eyes, starfish texture, cookie texture` |
| Model / ngày / thử | nano-banana-pro / (điền) / (điền) |
| Hand-edit notes | Đếm lại đúng 8 thùy đối xứng; outline đồng đều 2px @1x; xóa gradient AI thêm vào; tăng catchlight mắt; tách `eyes` thành part riêng, vẽ bù da dưới mắt; xóa viền magenta |
| IP check | Pokémon: tránh giống Staryu/Starmie (sao biển có ngọc giữa) → không đặt đá quý ở tâm, dùng cỏ 4 lá nhạt. Subnautica: OK. Reverse image: (điền) |

#### E. Audio & VFX
| Field | Value |
|---|---|
| SFX select | `tiny soft wet bloop, cute, underwater, muffled, 0.25s, high pitched` |
| SFX signature | `very soft swirl of water, gentle, 0.4s` |
| Merge VFX tier | S1–S2 |

#### F. Lore
| Field | Value |
|---|---|
| Lab note | "Specimen keeps stacking itself on the petri dishes. We ran out of dishes." |
| Fun fact | "Baby moon jellies (ephyrae) bud off a tiny polyp one by one, stacked like a pile of saucers. This is called strobilation." |
| Mutation note | "Lab twist: its lobe tips blush coral when it is happy." |
| Nguồn | Monterey Bay Aquarium – Moon jelly (montereybayaquarium.org, mục animals); Smithsonian Ocean – Jellyfish and comb jellies (ocean.si.edu) |
| Fact status | sourced (cần người đọc lại nguồn để chuyển `verified`) |

#### G. Stats
| Field | Value |
|---|---|
| Variants | base, ab (aberrant palette: thân `#E6D7FF` lavender, đầu thùy `#FFD166`) |
| Passive | — |
| Unlock | merge (zone Sunlit mở sẵn) |
| Spawn from egg | yes |

#### J. Checklist
Tất cả ô để trống đến khi art xong (xem template 11.1).

#### JSON tương ứng

```json
{
  "id": "cr_sun_01", "zone": "sun", "level": 1, "act": 1, "stage": 1, "family": "JEL",
  "nameKey": "creature.cr_sun_01.name",
  "evolvesFrom": null, "evolvesTo": "cr_sun_02",
  "realAnchor": { "common": "Moon jelly (ephyra)", "latin": "Aurelia aurita", "depthM": [0, 200], "realSize": "2–5 mm" },
  "personality": "curious",
  "visual": {
    "displayHeightPx": 40,
    "silhouette": "flat round disc with 8 rounded star lobes",
    "newBigFeature": "8 star lobes (root)",
    "features": ["coral dot on each lobe tip", "faint teal clover mark", "2 big eyes at lower edge"],
    "axes": { "primary": "PAT" },
    "palette": { "primary": "#FFF6E0", "secondary": "#3FC1C9", "accent": "#FFB4A2", "eye": "#12355B", "outline": "#12355B" },
    "pivot": { "x": 0.5, "y": 0.5 },
    "parts": [
      { "name": "body", "pivot": { "x": 0.5, "y": 0.5 }, "offset": { "x": 0, "y": 0 }, "z": 0 },
      { "name": "eyes", "pivot": { "x": 0.5, "y": 0.5 }, "offset": { "x": 3, "y": 6 }, "z": 1 }
    ],
    "creepyDial": 0
  },
  "motion": {
    "lane": "mid", "preset": "DRIFT_PULSE",
    "params": { "periodMin": 1400, "periodMax": 1900, "squash": 0.84, "stretch": 1.08, "rise": 8, "speedMin": 3, "speedMax": 6 },
    "idle": ["blink", "look"],
    "signature": { "id": "spin_wobble", "desc": "full slow spin like a real ephyra", "everyMs": [40000, 90000] },
    "hover": "approach", "schooling": false, "activeHours": "diurnal"
  },
  "art": {
    "refIds": ["STYLE-01", "STYLE-02", "STYLE-03"],
    "promptSubject": "a tiny baby moon jellyfish (ephyra stage) ...",
    "promptNegativeExtra": "tentacles, long oral arms, bell/dome shape, glow, more than 8 lobes, more than 2 eyes",
    "model": "nano-banana-pro",
    "handEditNotes": ["exact 8 symmetric lobes", "uniform outline", "remove AI gradients", "split eyes part"],
    "ipCheck": { "pokemon": true, "subnautica": true, "reverseImage": false, "notes": "avoid Staryu gem center" },
    "status": "spec"
  },
  "audio": { "selectSfx": "tiny soft wet bloop, cute, underwater, muffled, 0.25s", "signatureSfx": "very soft swirl of water, 0.4s" },
  "lore": {
    "labNoteKey": "creature.cr_sun_01.lab", "funFactKey": "creature.cr_sun_01.fact", "mutationNoteKey": "creature.cr_sun_01.mut",
    "sources": [{ "title": "Monterey Bay Aquarium – Moon jelly", "url": "TODO" }],
    "factStatus": "sourced"
  },
  "stats": { "variants": ["base", "ab"], "unlock": { "type": "merge" }, "spawnFromEgg": true }
}
```

---

## 13. Master roster (skeleton 60 dòng)

Cột `Status`: `—` chưa làm · `spec` · `gen` · `edit` · `rig` · `✔` approved. Dòng đã điền là gợi ý, có thể đổi khi spec chi tiết.

### Z1 Sunlit (`sun`)

| Lv | ID | Act-S | Family | EN | VN | Real anchor | Axis | Preset | Size | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | cr_sun_01 | I-1 | JEL | Saucelet | Sứa Đĩa Nhí | *Aurelia aurita* ephyra | PAT | DRIFT_PULSE | 40 | spec |
| 2 | cr_sun_02 | I-2 | JEL | Moonbun | Sứa Bánh Trăng | *Aurelia aurita* juv. | PAT | DRIFT_PULSE | 44 | — |
| 3 | cr_sun_03 | I-3 | JEL | Cloverbell | Sứa Cỏ Bốn Lá | *Aurelia aurita* | TEN | DRIFT_PULSE | 50 | — |
| 4 | cr_sun_04 | I-4 | JEL | Sailbloop | Sứa Buồm | *Physalia physalis* (splice) | FIN | DRIFT_PULSE | 56 | — |
| 5 | cr_sun_05 | I-5 | JEL | Regatta | Đô Đốc Buồm | *Physalia physalis* | FIN | DRIFT_PULSE | 64 | — |
| 6 | cr_sun_06 | II-1 | MOL | Dragonling | Sên Rồng Xanh | *Glaucus atlanticus* | TEN | GLIDE_FLAP | 52 | — |
| 7 | cr_sun_07 | II-2 | MOL | | | | | GLIDE_FLAP | 56 | — |
| 8 | cr_sun_08 | II-3 | MOL | | | sea butterfly (pteropod)? | | GLIDE_FLAP | 62 | — |
| 9 | cr_sun_09 | II-4 | MOL | | | | | GLIDE_FLAP | 68 | — |
| 10 | cr_sun_10 | II-5 | MOL | | | | | GLIDE_FLAP | 76 | — |
| 11 | cr_sun_11 | III-1 | FSH | Spikelet | Cá Mặt Trăng Gai | *Mola mola* larva (có gai thật) | SPK | DART | 64 | — |
| 12 | cr_sun_12 | III-2 | FSH | | | | | DART | 70 | — |
| 13 | cr_sun_13 | III-3 | FSH | | | | | BASK_GLIDE | 78 | — |
| 14 | cr_sun_14 | III-4 | FSH | | | | | BASK_GLIDE | 86 | — |
| 15 | cr_sun_15 | III-5 | FSH | | | *Mola mola* (apex) | FIN | BASK_GLIDE | 96 | — |

### Z2 Twilight (`twi`)

| Lv | ID | Act-S | Family | EN | VN | Real anchor | Axis | Preset | Size | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | cr_twi_01 | I-1 | CRU | | | copepod / krill larva | | TAILFLIP | 40 | — |
| 2 | cr_twi_02 | I-2 | CRU | | | | | TAILFLIP | 44 | — |
| 3 | cr_twi_03 | I-3 | CRU | | | Antarctic krill *Euphausia superba* | LUM | TAILFLIP | 50 | — |
| 4 | cr_twi_04 | I-4 | CRU | | | | | TAILFLIP | 56 | — |
| 5 | cr_twi_05 | I-5 | CRU | | | | | TAILFLIP | 64 | — |
| 6 | cr_twi_06 | II-1 | FSH | | | lanternfish (Myctophidae) | LUM | DART | 52 | — |
| 7 | cr_twi_07 | II-2 | FSH | | | | | DART | 56 | — |
| 8 | cr_twi_08 | II-3 | FSH | | | hatchetfish (*Argyropelecus*) | | DART | 62 | — |
| 9 | cr_twi_09 | II-4 | FSH | | | | | DART | 68 | — |
| 10 | cr_twi_10 | II-5 | FSH | | | barreleye *Macropinna microstoma* | EYE | HOVER_FLAP | 76 | — |
| 11 | cr_twi_11 | III-1 | CEP | | | firefly squid *Watasenia scintillans* | LUM | JET | 64 | — |
| 12 | cr_twi_12 | III-2 | CEP | | | | | JET | 70 | — |
| 13 | cr_twi_13 | III-3 | CEP | | | glass squid (Cranchiidae) | TRN | JET | 78 | — |
| 14 | cr_twi_14 | III-4 | CEP | | | | | JET | 86 | — |
| 15 | cr_twi_15 | III-5 | CEP | | | | | JET | 96 | — |

### Z3 Midnight (`mid`)

| Lv | ID | Act-S | Family | EN | VN | Real anchor | Axis | Preset | Size | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | cr_mid_01 | I-1 | JEL | | | *Atolla* juv. | | DRIFT_PULSE | 40 | — |
| 2 | cr_mid_02 | I-2 | JEL | | | | | DRIFT_PULSE | 44 | — |
| 3 | cr_mid_03 | I-3 | JEL | | | *Atolla wyvillei* | LUM | DRIFT_PULSE | 50 | — |
| 4 | cr_mid_04 | I-4 | JEL | | | | | DRIFT_PULSE | 56 | — |
| 5 | cr_mid_05 | I-5 | JEL | | | siphonophore (splice) | | DRIFT_PULSE | 64 | — |
| 6 | cr_mid_06 | II-1 | WRM | | | gulper eel larva (leptocephalus) | | UNDULATE | 52 | — |
| 7 | cr_mid_07 | II-2 | WRM | | | | | UNDULATE | 56 | — |
| 8 | cr_mid_08 | II-3 | WRM | | | *Eurypharynx pelecanoides* | | UNDULATE | 62 | — |
| 9 | cr_mid_09 | II-4 | WRM | | | | | UNDULATE | 68 | — |
| 10 | cr_mid_10 | II-5 | WRM | | | | | UNDULATE | 76 | — |
| 11 | cr_mid_11 | III-1 | ANG | | | anglerfish larva | | HOVER_FLAP | 64 | — |
| 12 | cr_mid_12 | III-2 | ANG | | | | | HOVER_FLAP | 70 | — |
| 13 | cr_mid_13 | III-3 | ANG | | | humpback anglerfish *Melanocetus johnsonii* | SYM | HOVER_FLAP | 78 | — |
| 14 | cr_mid_14 | III-4 | ANG | | | | | HOVER_FLAP | 86 | — |
| 15 | cr_mid_15 | III-5 | ANG | | | | LUM | HOVER_FLAP | 96 | — |

### Z4 Abyss & Vent (`aby`)

| Lv | ID | Act-S | Family | EN | VN | Real anchor | Axis | Preset | Size | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | cr_aby_01 | I-1 | ECH | | | sea pig juv. | | CRAWL | 40 | — |
| 2 | cr_aby_02 | I-2 | ECH | | | | | CRAWL | 44 | — |
| 3 | cr_aby_03 | I-3 | ECH | | | *Scotoplanes globosa* | | CRAWL | 50 | — |
| 4 | cr_aby_04 | I-4 | ECH | | | | | CRAWL | 56 | — |
| 5 | cr_aby_05 | I-5 | ECH | | | | | CRAWL | 64 | — |
| 6 | cr_aby_06 | II-1 | MOL | | | scaly-foot snail juv. | | CRAWL | 52 | — |
| 7 | cr_aby_07 | II-2 | MOL | | | | | CRAWL | 56 | — |
| 8 | cr_aby_08 | II-3 | MOL | | | *Chrysomallon squamiferum* | CRY | CRAWL | 62 | — |
| 9 | cr_aby_09 | II-4 | MOL | | | | | CRAWL | 68 | — |
| 10 | cr_aby_10 | II-5 | MOL | | | | | CRAWL | 76 | — |
| 11 | cr_aby_11 | III-1 | CEP | | | dumbo octopus hatchling | | HOVER_FLAP | 64 | — |
| 12 | cr_aby_12 | III-2 | CEP | | | | | HOVER_FLAP | 70 | — |
| 13 | cr_aby_13 | III-3 | CEP | | | *Grimpoteuthis* | | HOVER_FLAP | 78 | — |
| 14 | cr_aby_14 | III-4 | CEP | | | | | HOVER_FLAP | 86 | — |
| 15 | cr_aby_15 | III-5 | CEP | | | | | HOVER_FLAP | 96 | — |

### Decor / ambient (không merge, P1)

| ID | Zone | Family | Real anchor | Preset |
|---|---|---|---|---|
| dc_twi_01 | twi | JEL | comb jelly (ctenophore), cilia tán sắc cầu vồng | DRIFT_PULSE |
| dc_aby_01 | aby | WRM | giant tube worm *Riftia pachyptila* | ANCHORED |
| dc_aby_02 | aby | CRU | yeti crab *Kiwa* | CRAWL |

---

## 14. Quy trình sản xuất đề xuất (mỗi Act = 5 con)

1. Điền spec 5 con bằng template (Claude/ChatGPT draft, designer chốt): ~1h.
2. Silhouette sketch nhanh (vẽ tay/vector thô 5 hình) → silhouette test trước khi gen: 20 phút.
3. Gen Gemini theo thứ tự S1→S5, mỗi con dùng con trước làm ref: ~1h.
4. Hand-edit + tách part + export: ~30–45 phút/con.
5. Nhập JSON, chạy validate, xem trong strip với preset: 30 phút.
6. Checklist J, cập nhật roster: 15 phút.

Ước tính: ~5–6h/Act → 12 Act ≈ 60–70h (khớp mục "Art + chỉnh style ~25%" trong analysis 10.4). **Làm Act I Sunlit trước** để chốt STYLE-01..03 rồi mới mass-produce.

---

## 15. Lead review (sau khi agent soạn): điểm cần chốt & bổ sung

Bản khung dùng được để sản xuất. Dưới đây là các điểm reviewer bắt được, xếp theo mức ảnh hưởng.

| # | Vấn đề | Mức | Đề xuất |
|---|---|---|---|
| R1 | **Prestige đổi zone hay mở thêm bể?** Mục 2 nói "zone mở bằng Prestige" nhưng chưa nói con zone cũ còn không. Ảnh hưởng save schema, UI, kinh tế | P0, chốt trước khi code | Khuyến nghị: Prestige reset con + tiền, **mở thêm zone như "tab bể" mới**, bách khoa giữ nguyên. Người chơi chọn zone đang hiển thị trên strip (1 zone/lần để giữ hiệu năng) |
| R2 | **Thiếu "hero creature" cho marketing.** Capsule, TikTok, icon cần 1 gương mặt đại diện, mà con hút nhất (dumbo octopus) nằm ở zone 4, người chơi thấy muộn | P0 cho Stage 0 | Chọn 1 hero ở Sunlit (Saucelet hoặc Dragonling) làm mascot/icon; capsule ghép 1 con mỗi zone; dumbo dùng làm "teaser" trong trailer |
| R3 | **Ước tính 5–6h/Act lạc quan** cho 2 Act đầu (còn đang dò style) | P1 | Dự trù 10–12h cho Act I Sunlit (chốt STYLE-01..03), 6–8h cho các Act sau. Tổng art ~80–100h, vẫn nằm trong 250–350h của mục 10.4 analysis |
| R4 | **Độ sâu thật lệch nhãn zone:** scaly-foot snail sống ở miệng thủy nhiệt ~2.400–2.900 m, không phải 4.000–6.000 m | P2 | Giữ zone "Abyss & Vent" là stylized, nhưng `realAnchor.depthM` ghi số thật của loài; không ghi "sống ở độ sâu của zone" trong fun fact |
| R5 | **Claim cần kiểm:** "ephyra thật xoay khi bơi" (12.2) và "Mola ăn chủ yếu sinh vật keo" (có, nhưng ăn cả cá nhỏ, giáp xác) | P1 | Để `factStatus: draft` cho tới khi đọc nguồn; dùng chữ "phần lớn/thường" |
| R6 | **Rủi ro IP cụ thể theo slot:** man o' war ↔ Tentacool/Tentacruel; anglerfish apex ↔ Lanturn; firefly squid ↔ Chinchou-style đèn | P0 cho 3 slot này | Ghi trước vào cột Notes của roster; đổi ít nhất màu chủ + vị trí đèn + hình mắt so với Pokémon tương ứng |
| R7 | **Vertical slice Stage 0 cần 10 con** nhưng roster mới điền 6 (Sunlit L1–6) | P0 cho bước tiếp | Bước tiếp: điền spec Sunlit L1–10 (Act I + II), gen 10 con, làm 3 TikTok |
| R8 | Thiếu art phi-sinh vật: trứng, máy ấp, UI icon, nền strip theo zone | P1 | Ngoài phạm vi bible này; thêm `ui-art-spec.md` khi vào prototype (tuần 3–5) |

**Thứ tự làm tiếp đề xuất:**
1. Chốt R1 (prestige/zone) và R2 (hero).
2. Điền spec đầy đủ 10 con Sunlit L1–10 theo template 11.1.
3. Gen STYLE-01..03 từ L1, L3, L6, chỉnh tay, khóa STYLE BLOCK v1.
4. Gen 7 con còn lại, silhouette test, quay 3 TikTok (Stage 0 gate: ≥ 10k view TB/video).
