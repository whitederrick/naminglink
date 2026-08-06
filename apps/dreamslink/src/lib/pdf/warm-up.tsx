import React from "react";
import { Document, Page, Text, renderToBuffer } from "@react-pdf/renderer";

import { SCRIPT_FAMILY } from "@/lib/pdf/fonts";

/**
 * @react-pdf 4.5.1 회피책 — **한 프로세스에서 처음 렌더한 문서가 이후 모든 문서의 줄바꿈을
 * 정한다.**
 *
 * 첫 렌더가 한글이 대부분인 문서면 그다음부터 영어 문단이 단어 한가운데서 끊긴다("characters"가
 * "c / haracters"). 하이픈 콜백(`fonts.tsx`)을 등록해도, 렌더 직전에 다시 등록해도 소용이 없다.
 * 첫 렌더가 라틴 문서였으면 그 뒤로 한글 문서를 아무리 렌더해도 영어는 멀쩡하다.
 *
 * 이 서비스에서는 그냥 두면 실제 사고가 난다. `/api/report/pdf`는 국내·해외 주문을 같은 함수가
 * 처리하므로, 한국어 주문을 먼저 받은 컨테이너는 살아 있는 동안 **US$1.99를 받고 깨진 영문
 * 문서를 내보낸다.** 어느 주문이 먼저 오느냐에 달린 문제라 재현이 들쭉날쭉하다.
 *
 * 그래서 첫 실제 렌더 앞에 라틴 문서를 한 번 흘려보내 상태를 라틴 쪽으로 고정한다. 프로세스당
 * 한 번이고 빈 A4 한 장이라 비용이 거의 없다. 라이브러리가 고쳐지면 지우면 된다.
 *
 * **리포트가 둘이 되면서 공용으로 뺐다.** 새 리포트를 만들며 이 예열을 빠뜨리면 그 상품에서만
 * 같은 사고가 되살아나는데, 국내 주문이 먼저 오는 날에만 나므로 알아채기 어렵다.
 */
let layoutWarmUp: Promise<unknown> | null = null;

export function warmUpLayoutEngine() {
  if (!layoutWarmUp) {
    layoutWarmUp = renderToBuffer(
      <Document>
        <Page size="A4" style={{ fontFamily: SCRIPT_FAMILY.base, fontSize: 10 }}>
          <Text>
            The quick brown fox jumps over the lazy dog while these characters
            settle the layout engine into its Latin line breaking behaviour.
          </Text>
        </Page>
      </Document>,
    ).catch(() => null); // 예열이 실패해도 본 렌더를 막지는 않는다.
  }
  return layoutWarmUp;
}
