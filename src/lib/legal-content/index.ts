import type { Locale } from "@/lib/services";
import type { LegalLocaleContent } from "./types";
import ko from "./ko";
import en from "./en";
import ja from "./ja";
import zh from "./zh";
import de from "./de";
import es from "./es";
import fr from "./fr";
import it from "./it";
import pt from "./pt";
import vi from "./vi";
import th from "./th";
import id from "./id";
import ru from "./ru";
import ar from "./ar";
import fil from "./fil";
import uz from "./uz";
import mn from "./mn";
import hi from "./hi";
import tr from "./tr";
import km from "./km";
import ms from "./ms";
import kk from "./kk";
import pl from "./pl";

export * from "./types";

const contentByLocale: Record<Locale, LegalLocaleContent> = {
  ko,
  en,
  ja,
  zh,
  de,
  es,
  fr,
  it,
  pt,
  vi,
  th,
  id,
  ru,
  ar,
  fil,
  uz,
  mn,
  hi,
  tr,
  km,
  ms,
  kk,
  pl,
};

export function getLegalLocaleContent(locale: Locale): LegalLocaleContent {
  return contentByLocale[locale] ?? contentByLocale.en;
}

// 주의: 이 모듈은 23개 로케일 문서 전체를 임포트하므로 서버 코드(페이지·API·admin)에서만
// 사용할 것. 일반 클라이언트 컴포넌트는 /api/site-content로 조회한다(번들 크기 보호).
export function getFallbackPolicyDocument(
  kind: import("./types").LegalDocumentKind,
  locale: Locale = "ko",
) {
  return getLegalLocaleContent(locale).documents[kind];
}
