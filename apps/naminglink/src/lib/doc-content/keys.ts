import type { KoreanOnlyDocKey } from "@/lib/guide-index";

import type { DocKey } from "./ko";

/**
 * 23개 언어에 **다 있어야 하는** 문서의 키.
 *
 * korean 갈래 안내(`guide/hanja` · `guide/hanja-basics` · `guide/reading` · `guide/avoid` ·
 * `guide/how-hanja-meaning` · `guide/how-korean-to-global`)는 여기서 빠진다. 그 문서가 설명하는
 * 서비스는 화면이 한국어뿐이라 **다른 언어로 읽어도 갈 곳이 없다**(사용자 판단, 2026-08-10).
 *
 * 목록을 여기 손으로 적지 않는다 — `guideEntries`의 `track`에서 파생된다. 갈래를 옮기면
 * 자료형이 따라 움직이고, 옮긴 문서를 22개 언어 파일에 남겨 두었으면 **tsc가 바로 잡는다.**
 *
 * 이 자료형이 하는 일은 하나다: **번역기가 되살리는 것을 막는 것.** 파일에 남겨 두면 다음
 * 번역에서 22개 언어로 다시 만들어지고, 아무도 읽을 수 없는 글이 다시 색인에 실린다.
 */
export type GlobalDocKey = Exclude<DocKey, KoreanOnlyDocKey>;
