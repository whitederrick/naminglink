# sajulink · dreamslink 이미지 프롬프트 세트 (Firefly / Midjourney / DALL·E)

작성 2026-08-04 · 용도: 웹 히어로 아트, PDF 리포트 배경(backdrop), OG/공유카드 배경.
**공통 규칙**
- **상업 라이선스**: 결제 서비스이므로 **Adobe Firefly**(상업 안전) 우선. Midjourney는 유료 플랜, DALL·E는 OpenAI 상업 이용 약관 확인.
- **이미지에 글자 넣지 말 것**("no text, no letters, no watermark") — 제목·문구는 앱/PDF에서 오버레이.
- **여백 확보**: 히어로는 중앙 상단에 텍스트가 얹히므로 상단은 비교적 여백/저대비로.
- **브랜드 팔레트**: saju = 심야 남색·별빛·오행 5색 포인트·한지 질감 / dream = 남보라→보라→소프트핑크 몽환.
- **네거티브(공통)**: `no text, no letters, no logo, no watermark, no people faces, not cluttered, no low-res artifacts`.
- Midjourney 파라미터 예: 히어로 `--ar 16:9`, OG `--ar 1200:630`(≈`--ar 40:21`), 리포트 backdrop `--ar 3:4`(세로 A4) · 스타일 `--style raw` 권장.

---

## 1. sajulink (사주)

### 1-A. 히어로 (웹, 16:9)
```
A serene mystical night sky over softly layered mountains, traditional Korean cosmology mood,
scattered constellations and faint five-element color auroras (green, red, gold, white, deep blue)
diffused into a deep indigo gradient, subtle hanji (Korean mulberry paper) grain texture,
minimal and elegant, calm negative space in the upper-center for text overlay,
cinematic soft lighting, high-end editorial, no text, no letters, no watermark
```
Midjourney 꼬리: `--ar 16:9 --style raw --v 6` / Firefly·DALL·E: 위 문장 그대로 + "widescreen, empty space at top".

### 1-B. PDF 리포트 배경 (세로 3:4, 저채도·연함)
```
Elegant vertical background for a premium report, very light hanji paper texture in warm ivory,
faint traditional ink-wash constellation and subtle five-element motifs in the corners,
extremely soft and low-contrast so black body text stays readable, refined, spacious margins,
no text, no letters, no watermark
```
`--ar 3:4 --style raw` · 톤: 아주 연하게(본문 가독성 우선).

### 1-C. OG / 공유카드 배경 (1200×630)
```
Minimal mystical banner background, deep indigo night gradient with a few glowing stars and a
soft gold five-element glow on one side, hanji grain, lots of clean empty space on the left for
overlaid text, modern spiritual aesthetic, no text, no letters, no watermark
```
`--ar 40:21` (≈1200:630).

---

## 2. dreamslink (해몽)

### 2-A. 히어로 (웹, 16:9)
```
A dreamy nocturnal scene, soft surreal clouds drifting through a gradient of midnight indigo,
violet and gentle rose-pink, faint stars and a subtle crescent glow, ethereal and calming,
blurred bokeh orbs, gentle and emotional mood, generous soft negative space in the upper-center
for text overlay, high-end editorial, no text, no letters, no watermark
```
`--ar 16:9 --style raw --v 6`.

### 2-B. PDF 리포트 배경 (세로 3:4, 파스텔·연함)
```
Elegant vertical report background, very light pastel gradient (lavender to soft pink to pale
periwinkle), faint dreamy cloud wisps and a few tiny stars in the corners, extremely soft and
low-contrast for readable body text, calm and gentle, spacious, no text, no letters, no watermark
```
`--ar 3:4 --style raw`.

### 2-C. OG / 공유카드 배경 (1200×630)
```
Minimal dreamy banner, soft gradient from indigo to violet to rose with blurred cloud orbs and a
few faint stars, clean empty space on the left for overlaid text, serene surreal aesthetic,
no text, no letters, no watermark
```
`--ar 40:21`.

---

## 3. 운용 팁
- **일관성**: 히어로/리포트/OG를 한 세션에서 같은 시드/스타일로 뽑아 패밀리 톤 유지(Midjourney는 `--seed` 고정, Firefly는 스타일 참조 이미지 사용).
- **naming/inyeon과의 조화**: 기존 두 사이트의 톤(밤하늘·전통+모던)과 어긋나지 않게, 채도·명도를 비슷하게.
- **대안(무외주)**: 웹 배경은 함께 드린 `saju_dream_backgrounds.html`의 CSS/SVG로 충분한 경우가 많음 → 히어로만 AI 아트, 섹션·본문은 CSS로 가면 비용·성능 최적.
- **파일 규격**: 히어로 1920×1080↑(webp), OG 1200×630(png/jpg), 리포트 backdrop은 PDF 페이지 비율(react-pdf에 이미지/그라데이션으로). 웹 저장은 webp + 적절 압축.
