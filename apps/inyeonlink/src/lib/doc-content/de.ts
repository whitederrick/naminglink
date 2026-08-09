import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Deutsch — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const DE_DOCS = {
  "about": {
    "eyebrow": "Über",
    "title": "Über Inyeon-Link",
    "summary": "Wir vergleichen zwei Geburtshoroskope in der koreanischen Saju-Tradition. Hier ist, was wir berechnen und was wir nicht behaupten.",
    "backLabel": "Startseite",
    "sections": [
      {
        "title": "Was wir tun",
        "blocks": [
          {
            "p": "Inyeon-Link erstellt zwei Geburtshoroskope aus Geburtsdaten und -zeiten und zeigt **wie die beiden Energiesätze aufeinandertreffen.** Sie können auch Ihr eigenes Horoskop allein lesen und sehen, welche Temperamente zu Ihnen tendieren."
          },
          {
            "p": "Das Lesen auf dem Bildschirm ist **kostenlos und benötigt kein Konto.** Die kostenpflichtigen Artikel sind PDF-Berichte, die Zahlen enthalten, die der Bildschirm niemals zeigt — Elementstärken, zehn-Götter-Paarungen und die Beziehungen über alle vier Säulen."
          }
        ]
      },
      {
        "title": "Was wir berechnen",
        "blocks": [
          {
            "p": "Die Horoskope werden aus dem **koreanischen lunisolaren Almanach** erstellt, und die Geburtszeit wird auf **wahre Sonnenzeit** für den Geburtsort korrigiert — die gleiche Uhrzeit bedeutet eine andere Sonnenposition, je nachdem, wo Sie geboren wurden."
          },
          {
            "p": "Die Punktzahlen stammen nur aus festen Regeln. Traditionelle Konzepte — zehn Götter, Zweigbeziehungen, das unterstützende Element — werden als Regeln ausgedrückt, sodass **die gleiche Eingabe immer das gleiche Ergebnis liefert.** Wenn sich eine Regel ändert, führen wir einen Regressions-Test durch, um sicherzustellen, dass ältere Lesungen nicht verschoben wurden."
          },
          {
            "p": "**Keine KI ist beteiligt.** Jeder Satz auf dem Bildschirm ist fester Text, der an ein berechnetes Ergebnis angehängt ist."
          }
        ]
      },
      {
        "title": "Was wir nicht behaupten werden",
        "blocks": [
          {
            "ul": [
              "**Wir sagen keine Zukunft voraus.** Nichts hier sagt Ihnen, dass Sie jemandem nachjagen oder ihn meiden sollen. Es ist ein Verweis auf eine Tradition.",
              "**Wir speichern nicht, was Sie eingeben.** Geburtsdetails werden nur für den Moment der Berechnung verwendet und niemals niedergeschrieben; Ergebnislinks leben im Teil der URL, den ein Browser nicht an einen Server sendet.",
              "**Eine Punktzahl ist kein Urteil über eine Person.** Eine niedrige Zahl macht eine Beziehung nicht ungültig."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Die Methode wird im Detail in den [Leitfäden](/guide) beschrieben. Unternehmensdetails und wie Sie uns erreichen können, finden Sie auf der [Kontaktseite](/contact)."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const DE_NOTICES = {
  "kindLabels": {
    "service": "Dienst",
    "product": "Produkte",
    "policy": "Richtlinie",
    "support": "Unterstützung"
  },
  "intro": "Änderungen Ihrer Nutzungsbedingungen — Preise, Richtlinien — werden hier veröffentlicht, bevor sie in Kraft treten. Interne Verbesserungen sind nicht aufgeführt: was hier erscheint, ist das, was Sie wissen müssen.",
  "empty": {
    "title": "Noch keine Mitteilungen",
    "body": "Wenn sich etwas ändert, wird es hier erscheinen."
  },
  "effective": "Tritt in Kraft am {date}",
  "pager": {
    "label": "Mitteilungsseiten",
    "newer": "← Neuer",
    "older": "Älter →"
  },
  "items": {}
} satisfies NoticeCopy;
