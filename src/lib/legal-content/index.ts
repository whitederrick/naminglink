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
