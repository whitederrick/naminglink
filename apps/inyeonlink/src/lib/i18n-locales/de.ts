// 인연링크 화면 사전의 독일어(de) 판. `src/lib/i18n.ts`의 `en`을 기준으로 옮겼고,
// 영어가 모호한 자리는 같은 파일의 `ko` 원문을 대조해 뜻을 맞췄다.
// 언어 선택기 3개 키와 footer 13개 키는 naminglink(`i18n.ts`·`SiteFooter.tsx`)의 de를 그대로 가져와,
// 두 서비스에서 같은 말이 같은 자리에 보이도록 했다.

import type { Dictionary } from "@/lib/i18n";

export const de: Dictionary = {
  brand: "InyeonLink",
  tagline: "Partnerschaft, gelesen aus Saju und Tierkreiszeichen",
  currentLanguage: "Aktuelle Sprache",
  moreLanguages: "Mehr",
  closeLanguages: "Schließen",
  landing: {
    title: "Sehen Sie, wie zwei Menschen\nzueinander passen",
    subtitle:
      "Sie brauchen nur ein Geburtsdatum.\nWir verbinden die Saju-Partnerschaft (Vier Säulen) mit der Tierkreis-Partnerschaft und zeigen sie als Übereinstimmungsrate.",
    cta: "Saju-Partnerschaft ansehen",
    howTitle: "So wird gerechnet",
    steps: [
      "Geben Sie beide Geburtsdaten ein. Die Geburtszeit ist optional.",
      "Die Saju-Partnerschaft ergibt sich aus den Elementen der Tagesmeister, dem Ausgleich der Elemente und dem Tageszweig; die Tierkreis-Partnerschaft aus dem Jahreszweig.",
      "Beide Werte werden gewichtet zu einer Übereinstimmungsrate zusammengeführt.",
    ],
    privacyTitle: "Ihre Eingaben werden nicht gespeichert",
    privacyBody:
      "Geburtsdaten werden nur während der Berechnung verwendet und nirgends aufgezeichnet. Ein Konto ist nicht nötig. Was in einem Ergebnislink steht, wird nicht an den Server gesendet.",
    disclaimer:
      "Dies ist eine traditionelle Saju-Deutung zur Orientierung. Sie ist keine wissenschaftliche Vorhersage und kein Urteil über eine Beziehung.",
  },
  form: {
    title: "Beide Geburtsdaten",
    description:
      "Mit bekannter Geburtszeit wird die Deutung schärfer, nötig ist sie aber nicht.",
    personA: "Erste Person",
    personB: "Zweite Person",
    nickname: "Anzeigename",
    nicknamePlaceholder: "z. B. Ich",
    nicknameHint: "Erscheint nur im Ergebnis. Für die Berechnung wird er nicht verwendet.",
    gender: "Geschlecht",
    male: "Männlich",
    female: "Weiblich",
    genderUnspecified: "Keine Angabe",
    genderHint:
      "Im traditionellen Saju wird die Ehepartner-Position je nach Geschlecht anders gelesen. Ohne Angabe bleibt dieser Faktor außen vor.",
    birthplace: "Geburtsort",
    birthplaceHint:
      "Die Stundensäule wird aus der wahren Sonnenzeit am Geburtsort berechnet, einschließlich Sommerzeit und historischer Zeitzonenwechsel. Ist Ihr Geburtsort nicht aufgeführt, wählen Sie die nächstgelegene Stadt — je näher, desto genauer die Stundensäule.",
    calendar: "Kalender",
    solar: "Sonnenkalender",
    lunar: "Mondkalender",
    leapMonth: "Schaltmonat",
    birthDate: "Geburtsdatum",
    year: "Jahr",
    month: "Monat",
    day: "Tag",
    birthTime: "Geburtszeit",
    unknownTime: "Ich kenne die Uhrzeit nicht",
    hour: "Stunde",
    minute: "Minute",
    submit: "Werbung ansehen und Kompatibilität prüfen",
    submitNoAd: "Kompatibilität prüfen",
    submitting: "Wird berechnet…",
    errorInvalidDate:
      "Bitte prüfen Sie das Geburtsdatum. Bei Monddaten prüfen Sie auch, ob es in einen Schaltmonat fällt.",
    errorGeneric: "Die Berechnung ist fehlgeschlagen. Bitte versuchen Sie es gleich noch einmal.",
  },
  reading: {
    chartTitle: "Beide Saju-Tafeln",
    chartHint:
      "Saju schreibt Jahr, Monat, Tag und Stunde der Geburt als je zwei Zeichen. Alle Werte unten stammen aus diesen acht Zeichen.",
    pillarYear: "Jahr",
    pillarMonth: "Monat",
    pillarDay: "Tag",
    pillarHour: "Stunde",
    pillarHourUnknown: "Keine Geburtszeit",
    dayMasterLabel: "Tagesmeister",
    animalLabel: "Tierkreis",
    seasonLabel: "Jahreszeit der Geburt",
    elementsTitle: "Stärke der Elemente",
    strongest: "Am stärksten",
    scarcest: "Am schwächsten",
    strengthTitle: "Was für dieses Paar spricht",
    cautionTitle: "Worauf zu achten ist",
    bodyStrengthTitle: "Stärke des Tagesmeisters",
    favorableLabel: "Was Sie jetzt brauchen",
  },
  bodyStrength: {
    STRONG: {
      name: "Starker Tagesmeister",
      body: "Die Elemente, die Ihren Tagesmeister stützen, sind reichlich vorhanden. Das gibt Ihnen eigenen Antrieb, kippt aber leicht zu einer Seite — zur Ruhe kommen Sie, wenn etwas den Überschuss ableitet.",
    },
    BALANCED: {
      name: "Ausgeglichener Tagesmeister",
      body: "Was Ihren Tagesmeister stützt und was ihm entzieht, hält sich fast die Waage. Für eine klare Zuordnung ist es zu knapp, deshalb gilt hier das Dünnste als das, was Sie brauchen.",
    },
    WEAK: {
      name: "Schwacher Tagesmeister",
      body: "Die Elemente, die Ihren Tagesmeister stützen, sind dünn. Sie leihen sich Kraft aus Ihrem Umfeld gut, reiben sich aber auf, wenn Sie allein durchhalten — zu Ihrer Form kommen Sie, wenn Ihnen etwas den Rücken stärkt.",
    },
  },
  relation: {
    title: "Wie Sie beide zueinander stehen",
    hint: "Saju benennt mit zehn Begriffen, wie zwei Tagesmeister einander sehen. Die Deutung hat eine Richtung — wie Sie die andere Person sehen und wie sie Sie sieht, kann sich unterscheiden.",
    directionLabel: "{from} → {to}",
    shapes: {
      ALIKE: {
        name: "Gleichartig",
        body: "Ihre Tagesmeister tragen dieselbe Energie. Vieles versteht sich von selbst und Ihr Geschmack überschneidet sich. Der Haken: Sie sind an denselben Stellen stark und schwach, deshalb bleiben Sie in Schwierigkeiten meist am selben Punkt stecken.",
      },
      NURTURING: {
        name: "Einer nährt, einer blüht auf",
        body: "Die Energie fließt in eine Richtung. Die empfangende Seite fühlt sich wohl und findet mehr, was sie tun möchte; die gebende Seite freut sich am Erfolg der anderen. Weil der Fluss einseitig ist, muss etwas zurückkommen, sonst versiegt die gebende Seite irgendwann.",
      },
      TENSION: {
        name: "Einer gibt der anderen Halt",
        body: "Eine Seite steht in der Position, die andere zu zügeln. Die Spannung hält Sie beide wach und bringt im gemeinsamen Arbeiten meist Ergebnisse. Die gezügelte Seite kann sich dauernd beurteilt fühlen, deshalb muss Anerkennung vor Korrektur kommen.",
      },
    },
    leadNote: {
      NURTURING: "Hier ist **{lead}** die Seite, die Energie gibt.",
      TENSION: "Hier ist **{lead}** die Seite, die das Tempo vorgibt.",
    },
  },
  tenGods: {
    BIGYEON: {
      name: "Gefährte (比肩)",
      body: "Jemand, der Schulter an Schulter mit Ihnen steht. Leicht zu reden, leicht beieinander zu sein — aber schwer nachzugeben, wenn Sie beide dasselbe wollen.",
    },
    GEOPJAE: {
      name: "Rivale (劫財)",
      body: "Ähnlich, aber mit anderem Vorgehen. Beeindruckend, wenn Sie in dieselbe Richtung drücken; genau im Rechnen, sobald es etwas zu teilen gibt.",
    },
    SIKSIN: {
      name: "Ausdruck (食神)",
      body: "Jemand, der aus Ihnen herausholt, was in Ihnen steckt. In dieser Nähe reden Sie mehr und wollen mehr tun. Eine der angenehmsten Positionen überhaupt.",
    },
    SANGGWAN: {
      name: "Störer (傷官)",
      body: "Jemand, der Ihren Rahmen ins Wanken bringt. Interessant und anregend — doch wenn die Worte zwischen Ihnen scharf werden, sitzt der Schnitt lange.",
    },
    PYEONJAE: {
      name: "Unerwarteter Gewinn (偏財)",
      body: "Jemand, um den Sie sich kümmern möchten. Viel spontanes Vergnügen, doch das Gewicht der Beziehung kann leicht bleiben.",
    },
    JEONGJAE: {
      name: "Beständiger Wohlstand (正財)",
      body: "Traditionell die Ehepartner-Position für einen Mann. Die Fürsorge kommt beständig, und die Beziehung wächst eher in den Alltag hinein als in Höhepunkte.",
    },
    PYEONGWAN: {
      name: "Herausforderer (偏官)",
      body: "Jemand, der Sie in Spannung hält. Die Anziehung ist stark und schwer zu übersehen, doch dauerhafte Nähe kann sich wie Druck anfühlen.",
    },
    JEONGGWAN: {
      name: "Autorität (正官)",
      body: "Traditionell die Ehepartner-Position für eine Frau. Diese Person rückt Sie zurecht und bringt Ordnung und Ruhe in die Beziehung.",
    },
    PYEONIN: {
      name: "Ungewöhnliche Stütze (偏印)",
      body: "Jemand, der Ihnen auf ungewohnte Weise hilft. Es gibt Momente echter Tiefe, doch es braucht Zeit, die Art der anderen zu verstehen.",
    },
    JEONGIN: {
      name: "Fürsorge (正印)",
      body: "Jemand, der Sie hält und umsorgt. Sie möchten sich anlehnen, und Ihr Kopf wird ruhig. Lehnt sich aber nur eine Seite an, gerät die Beziehung in Schieflage.",
    },
  },
  dayMasters: {
    甲: { name: "Yang-Holz (甲)", trait: "Ein hoher Baum, der gerade wächst. Steht die Richtung fest, wankt er nicht, und er hält lieber aus, als sich zu beugen." },
    乙: { name: "Yin-Holz (乙)", trait: "Eine Ranke — biegsames Gras. Es beugt sich den Umständen, um weiterzukommen, und bricht dabei nicht." },
    丙: { name: "Yang-Feuer (丙)", trait: "Die Mittagssonne. Gefühle liegen offen, der Raum wird hell, und nach vorn zu treten fällt leicht." },
    丁: { name: "Yin-Feuer (丁)", trait: "Kerzenlicht. Es brennt leise und lange und wärmt zuerst die Nächsten." },
    戊: { name: "Yang-Erde (戊)", trait: "Weites Land und Berge. Schwer zu erschüttern und gut zum Anlehnen, doch eine getroffene Entscheidung ändert sich nur langsam." },
    己: { name: "Yin-Erde (己)", trait: "Ackerboden. Er nimmt auf, was kommt, und zieht es groß — er pflegt, statt sich zu zeigen." },
    庚: { name: "Yang-Metall (庚)", trait: "Unbearbeitetes Eisen. Entschieden und klar, mit wenig Geduld für Dinge, die in der Schwebe bleiben." },
    辛: { name: "Yin-Metall (辛)", trait: "Ein geschliffener Edelstein. Feiner Geschmack und hohe Maßstäbe; Nachlässigkeit lässt sich schwer durchgehen lassen." },
    壬: { name: "Yang-Wasser (壬)", trait: "Fluss und Meer. Weiter Blick, mit einem Auge dafür, wohin die Dinge laufen." },
    癸: { name: "Yin-Wasser (癸)", trait: "Tau und Regen. Es sickert leise ein und liest die Stimmung, bevor Worte fallen." },
  },
  dayMasterSigns: {
    甲: [
      "Sagt schon beim ersten Treffen, was er denkt.",
      "Ändert einen Plan oder ein Versprechen selten, wenn es einmal steht.",
      "Sagt geradeheraus ab, was schroff klingen kann.",
    ],
    乙: [
      "Geht der Konfrontation aus dem Weg und nimmt einen anderen Weg.",
      "Wirkt weich, kommt am Ende aber dort an, wo er hinwollte.",
      "Liest die Stimmung, bevor er sich einer Gruppe anschließt.",
    ],
    丙: [
      "Spricht Menschen, die er gerade erst kennt, zuerst an.",
      "Was er mag und nicht mag, steht ihm im Gesicht.",
      "Steht ohne Zutun im Mittelpunkt einer Runde.",
    ],
    丁: [
      "Anfangs still, aufmerksam, sobald man sich näher kennt.",
      "Redet lieber lange mit ein, zwei Menschen als in großer Runde.",
      "Merkt sich eine beiläufige Bemerkung und kommt später darauf zurück.",
    ],
    戊: [
      "Sagt wenig; die Stimme hebt sich selbst in eiligen Lagen kaum.",
      "Entscheidet am Ende, während andere die Entscheidung aufschieben.",
      "Ein einmal gesprochenes Nein bleibt lange ein Nein.",
    ],
    己: [
      "Hört länger zu, als er redet.",
      "Kann schwer ablehnen, deshalb häuft sich die Arbeit bei ihm.",
      "Was er still erledigt hat, kommt erst später heraus.",
    ],
    庚: [
      "Entscheidet schnell und sagt es auf der Stelle.",
      "Beschönigt nichts, was kühl wirken kann.",
      "Wird sichtbar unruhig, wenn sich etwas hinzieht.",
    ],
    辛: [
      "Hat klare Maßstäbe bei Kleidung und den Dingen, die er wählt.",
      "Kann eine halb erledigte Arbeit nicht durchgehen lassen, ohne sie anzusprechen.",
      "Spart mit Lob, ist aber eindeutig, wenn er es ernst meint.",
    ],
    壬: [
      "Kommt mit den unterschiedlichsten Menschen leicht zurecht.",
      "Spricht über das Spätere, bevor er über das Naheliegende spricht.",
      "Reibt sich daran, lange an einen Ort gebunden zu sein.",
    ],
    癸: [
      "Sagt wenig, hat die Lage aber genau gelesen.",
      "Merkt als Erster, wenn die Stimmung kippt.",
      "Behält das Innere für sich, deshalb braucht es Zeit, ihn zu kennen.",
    ],
  },
  animalTraits: {
    rat: "Bemerkt schnell und sichert schnell, worauf es ankommt. In der Krise zuerst in Bewegung.",
    ox: "Wirkt langsam, bringt es aber zu Ende. Was es übernimmt, lässt es nicht fallen.",
    tiger: "Furchtlos und vorneweg. Kann Unrecht nicht durchgehen lassen.",
    rabbit: "Sanft und feinfühlig. Weiß, wie man umgeht, statt zusammenzustoßen.",
    dragon: "Großherzig mit hohen Idealen. Gibt sich mit Gewöhnlichem selten zufrieden.",
    snake: "Behält sein Urteil für sich und denkt tief. Schätzt die Lage treffsicher ein.",
    horse: "Hell und ruhelos. Eingezäunt zu sein, fällt am schwersten.",
    goat: "Warm und rücksichtsvoll. Trägt harte Worte lange mit sich.",
    monkey: "Findig und schnell im Anpassen. Wiederholung langweilt.",
    rooster: "Fleißig und genau. Kann nichts liegen lassen, was nicht stimmt.",
    dog: "Treu bis zuletzt, wenn Vertrauen einmal da ist. Verrat trifft besonders tief.",
    pig: "Großzügig und geradeheraus. Vertraut leicht, manchmal auf eigene Kosten.",
  },
  affinity: {
    menu: "Ihr Beziehungsprofil",
    formTitle: "Welcher Mensch zu Ihnen passt",
    formDescription:
      "Ein Geburtsdatum genügt. Sie können das lesen, ohne den Geburtstag einer anderen Person zu kennen — oder ohne dass Sie schon jemanden im Sinn haben.",
    meLegend: "Sie",
    genderHint:
      "Im traditionellen Saju wird die Ehepartner-Position je nach Geschlecht anders gelesen. Ohne Angabe wird dieser Faktor weggelassen statt geraten.",
    seekingLabel: "Gesucht wird",
    seekingHint:
      "Die Ehepartner-Position (Jeongjae / Jeonggwan) lässt sich nur beurteilen, wenn beide Geschlechter bekannt sind.",
    seekingAny: "Keine Angabe",
    submit: "Werbung ansehen und Ergebnis der Verbindung sehen",
    submitNoAd: "Ergebnis der Verbindung sehen",
    submitting: "Wird gelesen…",

    resultTitle: "Ihr Beziehungsprofil",
    intro:
      "Hier ist die Art Mensch, zu der Ihre Saju-Tafel neigt. **Diese Typen erkennen Sie am Wesen,** lange bevor Sie einen Geburtstag erfahren.",
    scoreCaption:
      "Das sind dieselben Einzelwerte, die auch die Partnerschaftsberechnung nutzt — keine zusammengefasste Übereinstimmungsrate.",
    meTitle: "Wo Sie stehen",
    meBody: "Sie sind {dayMaster}, und derzeit sind Sie {strength}.",
    meHint:
      "Saju schreibt Jahr, Monat, Tag und Stunde Ihrer Geburt als acht Zeichen. **Das erste Zeichen des Geburtstags steht für Sie** — es heißt Tagesstamm. Alle Typen unten sind nach diesem einen Zeichen geordnet.",
    bestTitle: "Arten, die zu Ihnen passen",
    bestHint:
      "Das ist der Tagesstamm der anderen Person — **die Energie des Tages, an dem sie geboren wurde** — in zehn Arten geordnet, von denen diese drei mit Ihrer zusammengreifen. Oft erraten Sie ihn am Verhalten unten, lange bevor Sie einen Geburtstag erfahren.",
    signsTitle: "So zeigt es sich",
    avoidTitle: "Arten, die Arbeit machen",
    avoidHint:
      "Keine Warnung. Es heißt, dass die Leichtigkeit erst später kommt, wenn Sie beide Zeit investiert haben.",
    bondLabel: "Wesenspassung",
    spouseLabel: "Ehepartner-Position",
    spouseSkipped: "Ohne Geschlechtsangabe wurde dieser Faktor weggelassen",
    scoreHelp:
      "**Wesenspassung** — wie die Energien Ihrer beiden Geburtstage ineinandergreifen. Selbst ein Paar aus Zug und Gegenzug erreicht den höchsten Wert, wenn Yin und Yang gekreuzt stehen.\n**Ehepartner-Position** — das traditionelle Saju hält eine Position für den Ehepartner frei: Jeongjae für Männer, Jeonggwan für Frauen. Wir prüfen sie **in beide Richtungen** — ob die andere Person diese Position für Sie einnimmt und ob Sie sie für die andere Person einnehmen. Beides zugleich ist das Paar, das die Tradition am höchsten bewertet.",
    typeHeading: "Jemand wie {name}",
    needTitle: "Was Ihnen gerade fehlt",
    needBody:
      "Ist {elements} bei der anderen Person stark, füllt es die Stelle, die bei Ihnen dünn ist.",
    needHint:
      "Die fünf Elemente eines Menschen sieht man ihm nicht an. Sobald Sie aber sein Geburtsdatum kennen, schauen Sie zuerst hierher.",
    zodiacTitle: "Der Tierkreis am Rande",
    zodiacHint:
      "Für den Tierkreis genügt das Geburtsjahr, deshalb ist er am schnellsten geprüft. Er ist aber nur eine von vier Säulen — nehmen Sie ihn als Hinweis.",
    zodiacGood: "Zeichen, die zu Ihnen passen",
    zodiacHard: "Zeichen, die reiben",
    tableType: "Typ",
    tableSign: "Zeichen",
    tableYears: "Geburtsjahre",
    bornYear: "geb. {year}",
    younger: "{n} J. jünger",
    older: "{n} J. älter",
    sameAge: "gleich alt",
    zodiacYearsCaution:
      "Im Saju wechselt das Jahr an Ipchun (um den 4. Februar), nicht am 1. Januar. **Wer im Januar oder Anfang Februar geboren ist, gehört zum Zeichen des Vorjahres**, prüfen Sie bei solchen Geburtstagen also beide Jahre.",
    dayBranchTitle: "Ist das der richtige Mensch für mich?",
    dayBranchBody:
      "Ein Geburtsdatum genügt, um zu prüfen, ob jemand zu Ihnen passt.\nFür die vollständige Deutung nutzen Sie die Saju-Partnerschaft unten auf dieser Seite.",
    check: {
      button: "Geburtstag einer Person prüfen",
      title: "Welche Art ist dieser Mensch?",
      body: "Geben Sie ein Geburtsdatum ein, und wir sagen Ihnen, welcher der zehn Typen oben es ist. Ein Partnerschaftswert wird nicht berechnet.",
      submit: "Prüfen",
      checking: "Wird geprüft…",
      rank: "Ihre Nr. {rank}",
      heading: "Dieser Mensch ist {name}",
      caution:
        "Gelesen wird nur der Geburtstag. **Wer um Mitternacht geboren ist**, kann auf den Tag davor oder danach fallen, und Geburtstage im Januar oder Anfang Februar gehören zum Zeichen des Vorjahres.",
      close: "Schließen",
      another: "Andere Person prüfen",
      error: "Bitte prüfen Sie das Datum — es existiert nicht oder liegt außerhalb des Bereichs.",
    },
    nextTitle: "Jemanden im Sinn?",
    nextBody:
      "Geben Sie beide Geburtsdaten ein, und Sie erhalten die echte Übereinstimmungsrate, in der alle Faktoren von oben zusammengerechnet sind.",
    nextButton: "Saju-Partnerschaft ansehen",
    recalculate: "Erneut lesen",
    copyLink: "Ergebnislink kopieren",
    copied: "Kopiert",
    missingInput: "Das Ergebnis konnte nicht gelesen werden. Bitte beginnen Sie neu.",
    partialTime:
      "Ohne Geburtszeit blieb die Stundensäule außen vor. Mit ihr wird schärfer, was Ihnen fehlt.",
    disclaimer:
      "Eine Orientierung aus Sicht des traditionellen Saju. Es sagt Ihnen nicht, welchen Menschen Sie suchen oder meiden sollen.",
  },
  result: {
    title: "Partnerschaftsergebnis",
    totalLabel: "Übereinstimmungsrate",
    breakdown: "Werte nach Faktor",
    recalculate: "Neu beginnen",
    copyLink: "Ergebnislink kopieren",
    copied: "Kopiert",
    missingInput: "Dieses Ergebnis konnte nicht gelesen werden. Bitte geben Sie die Daten erneut ein.",
    partialTime:
      "Ohne Geburtszeit blieb die Stundensäule außen vor. Mit ihr wird die Deutung genauer.",
    engineVersion: "Berechnet mit",
    disclaimer:
      "Dies ist eine traditionelle Saju-Deutung zur Orientierung. Sie ist keine wissenschaftliche Vorhersage und kein Urteil über eine Beziehung.",
  },
  ads: { label: "Werbung" },
  analyzing: {
    title: "Beide Saju-Tafeln werden gelesen",
    quotes: [
      "Den richtigen Menschen trifft man weniger, als dass man ihn erkennt.",
      "Ein gutes Paar ist nicht eines, das nie streitet — sondern eines, das nach dem Streit zurückkommt.",
      "Saju ist keine feste Antwort. Es ist eine Sprache, um einander zu verstehen.",
      "Manche Paare sind leicht, weil sie sich ähneln; andere lehren, weil sie es nicht tun.",
      "Beziehungen halten meist dort, wo nichts zu lange ungesagt blieb.",
      "Wirkt die Art der anderen fremd, hat sie etwas, das Sie nicht haben.",
      "Zusammenpassen ist halb angeboren und halb gebaut.",
      "Eine Beziehung hält, wenn Anlehnen und Geben sich abwechseln.",
      "Wichtiger als der Wert ist, wie Sie ihn lesen.",
      "Sind Ihre Jahreszeiten verschieden, erzählen Sie einander, wie Ihre Jahreszeit ist.",
    ],
    watching: "Werbung läuft",
    remaining: "Ihr Ergebnis öffnet in {seconds} s",
  },
  report: {
    title: "Diese Deutung als PDF behalten",
    body:
      "Wir machen aus diesem Ergebnis ein PDF mit 7 Seiten. **Vier davon stehen nirgends auf dem Bildschirm** — in welche Richtung die Energie fließt, ein genauerer Blick auf beide Karten, wo die vier Säulen sich treffen, und wie gerechnet wurde.",
    buyButton: "{price} zahlen und laden",
    preparing: "Noch nicht verfügbar",
    ordering: "Bestellung wird erstellt…",
    paying: "Zahlung läuft…",
    issuing: "Bericht wird vorbereitet…",
    done: "Heruntergeladen. Über die Schaltfläche unten laden Sie es erneut.",
    failed: "Zahlung oder Download ist fehlgeschlagen. Bitte versuchen Sie es gleich noch einmal.",
    retry: "Erneut herunterladen",
    contents: [
      "Seite 1 — Übereinstimmungsrate, was für das Paar spricht und worauf zu achten ist",
      "Seite 2 — die Form der Beziehung, die Zehn Götter und die Werte nach Faktor",
      "Seite 3 — beide Saju-Tafeln und die Stärke der Elemente",
          "Seite 4 — in welche Richtung die Energie fließt und wo die vier Säulen sich treffen",
      "Seite 5 — ein genauerer Blick auf beide Karten (was die Jahreszeit voranbringt)",
      "Seite 6 — was jede seiner Säulen für Sie ist",
      "Seite 7 — so wurden diese Karten berechnet",
    ],
    consentLabel:
      "Mir ist bekannt, dass dies ein digitaler Inhalt ist, der sofort nach der Zahlung geliefert wird, und dass **der Widerruf wegen einfacher Meinungsänderung eingeschränkt ist, sobald der Download abgeschlossen ist**.",
    consentRequired: "Bitte bestätigen Sie die Widerrufsbedingungen vor der Zahlung.",
    productInfoTitle: "Produktinformationen",
    productInfo: [
      ["Anbieter", "{brand}"],
      ["Format", "Ein PDF-Dokument (7 Seiten), unmittelbar nach der Zahlung auf dem Bildschirm herunterzuladen."],
      ["Voraussetzungen", "Ein beliebiges Gerät, das PDF öffnet. Keine Installation, kein Konto nötig."],
      ["Nutzungsdauer", "Unbegrenzt. Die heruntergeladene Datei behalten Sie."],
      ["Erneuter Download", "Bis zu fünfmal je Bestellung. Wir bewahren keine Kopie auf, deshalb kann die Datei nach dem Verlassen der Ergebnisseite nicht erneut erstellt werden."],
      ["Widerruf", "Volle Erstattung, bevor der Download beginnt. Nach Abschluss ist der Widerruf wegen Meinungsänderung eingeschränkt (Art. 17 Abs. 2 des koreanischen E-Commerce-Gesetzes)."],
      ["Rücksendekosten", "Keine — digitaler Inhalt, es wird nichts versandt."],
    ],
    refundContact:
      "Für Erstattungen oder Fragen wenden Sie sich an den Kundendienst oder die E-Mail-Adresse unten. Wenn das Dokument nicht erstellt werden konnte oder der belastete Betrag von der Bestellung abweicht, erstatten wir vollständig.",
    pdfLanguageNotice:
      "Das PDF wird in derselben Sprache wie dieser Bildschirm erstellt.",
  },
  affinityReport: {
    title: "Ihr Beziehungsprofil als PDF behalten",
    body: "Wir machen aus dieser Deutung ein vierseitiges PDF. Es enthält **die vollständige Rangliste, die der Bildschirm nicht zeigt** — auf dem Bildschirm sehen Sie die besten drei, das PDF führt alle zehn Typen und alle zwölf Zeichen.",
    buyButton: "{price} zahlen und laden",
    preparing: "In Vorbereitung",
    ordering: "Bestellung wird erstellt…",
    paying: "Zahlung läuft…",
    issuing: "Ihr Bericht wird erstellt…",
    done: "Heruntergeladen. Über die Schaltfläche unten erhalten Sie es erneut.",
    failed: "Zahlung oder Download ist nicht durchgegangen. Bitte versuchen Sie es in Kürze noch einmal.",
    retry: "Erneut herunterladen",
    contents: [
      "Seite 1 — Wo Sie stehen und was Ihnen fehlt",
      "Seite 2 — Drei Arten, die zu Ihnen passen, mit Verhaltenshinweisen",
      "Seite 3 — Die Art, die Arbeit macht, samt vollständiger Tagesstamm-Rangliste",
      "Seite 4 — Vollständige Rangliste aller zwölf Zeichen, mit Geburtsjahren",
    ],
    consentLabel:
      "Dies ist ein digitaler Inhalt, der sofort nach der Zahlung geliefert wird. Mir ist bekannt, dass **nach Abschluss des Downloads das Widerrufsrecht wegen Meinungsänderung eingeschränkt ist.**",
    consentRequired: "Bitte stimmen Sie den Widerrufsbedingungen vor der Zahlung zu.",
    productInfoTitle: "Produktinformationen",
    productInfo: [
      ["Anbieter", "{brand}"],
      ["Format", "Ein PDF-Dokument (4 Seiten), unmittelbar nach der Zahlung auf dieser Seite herunterzuladen."],
      ["Voraussetzungen", "Ein beliebiges Gerät, das PDF öffnet. Keine Installation, kein Konto."],
      ["Verfügbarkeit", "Ohne zeitliche Begrenzung. Die heruntergeladene Datei gehört Ihnen."],
      ["Erneuter Download", "Bis zu 5-mal je Bestellung. Wir speichern die Datei nicht, deshalb kann sie nach dem Verlassen dieser Seite nicht neu erstellt werden."],
      ["Widerruf", "Volle Erstattung, bevor der Download abgeschlossen ist. Danach ist der Widerruf wegen Meinungsänderung eingeschränkt."],
      ["Rücksendekosten", "Keine. Es wird nichts versandt."],
    ],
    refundContact:
      "Für Erstattungen oder Fragen wenden Sie sich an den Support oder die E-Mail-Adresse unten. Wenn das Dokument nie erstellt wurde oder der belastete Betrag von der Bestellung abweicht, erstatten wir vollständig.",
    pdfLanguageNotice:
      "Das PDF wird in derselben Sprache wie dieser Bildschirm erstellt.",
  },
  reportDetail: {
    supplyTitle: "In welche Richtung die Energie fließt",
    supplyHint: "Der Wert der Fünf Elemente ist der Mittelwert zweier Richtungen. Ein Mittelwert verbirgt, wer wen versorgt. Hier trennen wir beides — in manchen Paarungen ist nur eine Seite gut versorgt.",
    supplyReceiveLabel: "Wie viel {name} erhält",
    needsLabel: "Was jetzt gebraucht wird",
    bondTitle: "Die Verbindung der beiden Tagesmeister",
    depthTitle: "Ein genauerer Blick auf beide Karten",
    vitalityTitle: "Was die Jahreszeit voranbringt",
    vitalityHint: "Die Balken zeigen, wie viel von jedem Element vorhanden ist. Diese Tabelle zeigt, ob der Geburtsmonat es voranbringt. Dieselbe Menge wirkt bei Wang anders als bei Sa.",
    vitalities: {
      WANG: { name: "Wang (旺)", body: "auf dem Höhepunkt" },
      SANG: { name: "Sang (相)", body: "als Nächstes im Aufstieg" },
      HYU: { name: "Hyu (休)", body: "ruhend nach seinem Zug" },
      SU: { name: "Su (囚)", body: "eingeschlossen, schwer beweglich" },
      SA: { name: "Sa (死)", body: "am schwächsten" },
    },
    seasonBoostTitle: "Wie stark der Monat es angehoben hat",
    rawLabel: "Vor dem Monat",
    strengthLabel: "Nach dem Monat",
    earthSeasonNote: "Geburt in einem Übergangsmonat (辰未戌丑), daher galt auch Erde als vorherrschend.",
    allyRatioLabel: "Anteil der Seite des Tagesmeisters",
    allyRatioHint: "Ressource und Gleichrangige zusammen, gemessen am Ganzen. Über 45 % gilt als starker Tagesmeister, unter 35 % als schwacher. Wir nennen die Zahl, damit Sie sehen, wo das Urteil fiel.",
    pillarsTitle: "Wo die vier Säulen sich treffen",
    pillarsHint: "Nur der Tageszweig geht in die Übereinstimmung ein — er ist der Partnersitz. Die übrigen drei Säulen lassen sich mit derselben Tabelle lesen, deshalb führen wir sie mit auf.",
    branchRelations: {
      SAMHAP: "Dreifache Harmonie",
      BANHAP: "Halbe Harmonie",
      YUKHAP: "Sechsfache Harmonie",
      SAME: "Gleicher Zweig",
      NEUTRAL: "Keine Beziehung",
      WONJIN: "Groll",
      CHUNG: "Zusammenstoß",
    },
    pillarColumn: "Säule",
    relationColumn: "Beziehung",
    relationScoreColumn: "Punkte",
    tenGodColumn: "Zehn Götter",
    stemGodsTitle: "Was jede seiner Säulen für Sie ist",
    stemGodsHint: "Die Übereinstimmung vergleicht nur die Tagesmeister. Dieselbe Regel bestimmt auch für die übrigen Säulen einen Gott — sie zeigt, welcher Teil dieses Menschen was für Sie ist.",
    seesLabel: "Aus Sicht von {from}",
    notScoredNote: "Die Punkte dieser Tabelle zählen nicht zur Übereinstimmung. Sie stehen hier, damit Sie die Stärke vergleichen können.",
    appendixTitle: "So wurde diese Karte berechnet",
    timeCorrectionLabel: "Geburtszeit",
    timeCorrectionApplied: "Auf wahre Sonnenzeit korrigiert und als {time} gelesen.",
    timeCorrectionNone: "Es wurde keine Geburtszeit angegeben, daher blieb die Stundensäule außen vor.",
    timeCorrectionDateShift: "Die Korrektur verschob das Datum auf {date}; die Tagessäule stammt von diesem Tag.",
    calendarLabel: "Datum, aus dem die Karte erstellt wurde",
    solarLabel: "Solar",
    lunarLabel: "Lunar",
    lunarUnavailable: "Dieser Tag fehlt in der Almanach-Tabelle, daher konnte das Monddatum nicht angegeben werden.",
  },
  footer: {
    privacy: "Datenschutz",
    terms: "AGB",
    refund: "Erstattung",
    pricing: "Preise",
    legalEntity: "Firma",
    representative: "Vertretung",
    businessNumber: "Geschäfts-Nr.",
    mailOrderNumber: "Onlinehandel",
    address: "Adresse",
    customerCenter: "Kundendienst",
    email: "E-Mail",
    privacyOfficer: "Datenschutz",
    hostingProvider: "Hosting",
    providedBy: "Bereitgestellt von",
    effective: "Gültig ab",
    backHome: "Zur Startseite",
  },
  bands: {
    EXCELLENT: "Außergewöhnlich gutes Paar",
    GOOD: "Starkes Paar",
    FAIR: "Solides Paar",
    CHALLENGING: "Paar, das Mühe verlangt",
  },
  engines: {
    saju: {
      name: "Saju-Partnerschaft",
      description:
        "Liest die Elemente der Tagesmeister, den Ausgleich der Elemente und den Tageszweig zusammen.",
    },
    zodiac: {
      name: "Tierkreis-Partnerschaft",
      description: "Liest die Beziehung zwischen den beiden Geburtsjahr-Zweigen.",
    },
  },
  factors: {
    dayMasterRelation: "Elemente der Tagesmeister",
    spouseStar: "Ehepartner-Stern",
    elementSupply: "Elementversorgung",
    dayBranchRelation: "Tageszweig",
    branchRelation: "Tierkreiszeichen",
  },
  notes: {
    "strength.dayMasterRelation":
      "Ihre Wesensarten stehen in einer Position, die der jeweils anderen dient. Selbst wenn die Art der anderen Person fremd wirkt, liefert sie meist das, was Ihnen fehlt.",
    "strength.spouseStar":
      "Sie tragen jeweils das Element, das traditionell als Ehepartner-Position gelesen wird. Wenn es von Anfang an ohne erkennbaren Grund leicht war, liegt es wahrscheinlich daran.",
    "strength.elementSupply":
      "Sie halten jeweils das, was die andere Person gerade braucht. Was allein schwer zu bewegen war, geht gemeinsam meist leichter.",
    "strength.dayBranchRelation":
      "Der Tageszweig gilt traditionell als der Platz des Ehepartners. Ihre stehen gut zusammen, was gemeinsame Zeit angenehm macht.",
    "strength.branchRelation":
      "Die Tierkreiszeichen stehen gut zusammen — ein Paar, das von außen natürlich wirkt und sich beim ersten Treffen leicht liest.",
    "caution.dayMasterRelation":
      "Hier reiben sich die Wesensarten. Vor derselben Aufgabe unterscheiden sich Ihr Tempo und Ihre Methode, was leicht als Absicht missverstanden wird. Einigen Sie sich auf den Weg, bevor Sie sich auf das Ergebnis einigen.",
    "caution.spouseStar":
      "Keiner von Ihnen trägt das, was die Tradition die Ehepartner-Position der anderen Person nennt. Die Anziehung ist vielleicht nicht sofort da; dieses Paar wächst stattdessen mit der Zeit.",
    "caution.elementSupply":
      "Was Sie jeweils brauchen, ist auch bei der anderen Person dünn. Worin Sie beide gut sind, darin sind Sie sehr gut — aber die Stellen, an denen es beiden fehlt, bleiben leer. Diese füllen Sie besser außerhalb der Beziehung.",
    "caution.dayBranchRelation":
      "In der Position des gemeinsamen Lebens ist Reibung wahrscheinlich. Meist zeigt sie sich in kleinen Gewohnheiten statt in großen Fragen, deshalb helfen früh vereinbarte Grundregeln.",
    "caution.branchRelation":
      "Ihre Tierkreiszeichen stehen einander gegenüber. Sie sehen die Dinge verschieden, das reibt — und heißt zugleich, dass es viel voneinander zu lernen gibt.",

    "spouseStar.MUTUAL":
      "Sie stehen einander jeweils genau in der Ehepartner-Position — das Paar, das das traditionelle Saju am höchsten bewertet.",
    "spouseStar.STRONG":
      "Eine Seite steht genau in der Ehepartner-Position, die andere nahe daran. Was jede für die andere empfindet, kann etwas unterschiedlich groß sein.",
    "spouseStar.PARTIAL":
      "Nur eine Seite steht in der Ehepartner-Position der anderen. Die anfängliche Anziehung läuft meist in eine Richtung, deshalb lohnt es sich, das nicht ungesagt zu lassen.",
    "spouseStar.SLIGHT":
      "Eine Seite steht neben der Ehepartner-Position. Das wächst mit gemeinsamer Zeit, statt als sofortige Anziehung anzukommen.",
    "spouseStar.NONE":
      "Keiner von Ihnen nimmt das ein, was die Tradition Ehepartner-Position nennt. Dieses Paar entsteht durch das Leben nebeneinander statt durch Anziehung.",
    "dayMaster.CLASH_BONDED":
      "{elementA} und {elementB} zügeln einander, aber mit entgegengesetzter Polarität. Die Tradition liest das als Ehepaar-Verbindung — die Reibung wird meist zu Zuneigung.",
    "dayMaster.CLASH_HARSH":
      "{elementA} und {elementB} zügeln einander bei gleicher Polarität. Die Spannung ist stark, und ebenso das Gewicht, das jede Seite der anderen auflädt.",
    "dayMaster.FLOW_GUARDED":
      "Eine Seite gibt Energie ab, die andere hält sie. Der schärfere Impuls wird von der anderen gemildert — was die Tradition eine behütete Verbindung nennt.",
    "dayMaster.FLOW_BLOCKED":
      "Eine Seite gibt Energie ab, die andere zieht sie fort. Die gebende Seite ermüdet hier leicht, deshalb hilft es, offen zu sagen, was jede gibt und nimmt.",
    "dayMaster.PEER_EVEN":
      "Beide tragen {elementA}-Energie mit gleicher Polarität. Das macht es gleichrangig und leicht, aber keine Seite treibt die andere voran.",
    "dayMaster.PEER_RIVAL":
      "Beide tragen {elementA}-Energie mit entgegengesetzter Polarität. Die Anziehung kommt schnell, doch Sie streiten um dasselbe Feld.",
    "supply.AMPLE":
      "Sie halten jeweils reichlich von dem, was die andere Person braucht. Die erste Person braucht {needA} und die zweite {needB} — und die andere liefert es.",
    "supply.ENOUGH":
      "Sie halten jeweils einen guten Teil dessen, was die andere Person braucht: {needA} für die erste Person, {needB} für die zweite.",
    "supply.THIN":
      "Was Sie jeweils brauchen — {needA} für die erste Person, {needB} für die zweite — ist bei der anderen dünn.",
    "supply.SCARCE":
      "Keiner kann der anderen Person ohne Weiteres liefern, was sie braucht: {needA} für die erste Person, {needB} für die zweite, und beide Stellen stehen leer. Das füllen Sie besser außerhalb der Beziehung.",
    "dayBranch.SAMHAP":
      "Die Tageszweige bilden eine Dreier-Harmonie — die stärkste Verbindung in der Ehepartner-Position.",
    "dayBranch.BANHAP":
      "Die Tageszweige bilden eine halbe Harmonie um den Anker einer Dreier-Harmonie. Eine gut passende Verbindung in der Ehepartner-Position.",
    "dayBranch.YUKHAP": "Die Tageszweige bilden eine Sechser-Harmonie. Sie ziehen einander an.",
    "dayBranch.SAME":
      "Die Tageszweige sind gleich. Das macht es leicht, lässt aber wenig Neues.",
    "dayBranch.NEUTRAL": "Zwischen den Tageszweigen besteht keine besondere Beziehung.",
    "dayBranch.WONJIN":
      "Die Tageszweige stehen in stillem Groll. Offen bricht wenig aus, doch schwer benennbarer Ärger häuft sich — besser gleich aussprechen als schlucken.",
    "dayBranch.CHUNG":
      "Die Tageszweige stoßen zusammen. Diese Position neigt zu Reibung, deshalb kommt es darauf an, wie Sie miteinander reden.",
    "zodiac.SAMHAP":
      "{animalA} und {animalB} bilden eine Dreier-Harmonie — die beste Tierkreis-Verbindung.",
    "zodiac.BANHAP":
      "{animalA} und {animalB} bilden eine halbe Harmonie um den Anker einer Dreier-Harmonie, deshalb passen Sie zueinander.",
    "zodiac.YUKHAP": "{animalA} und {animalB} bilden eine Sechser-Harmonie. Sie passen gut zueinander.",
    "zodiac.SAME": "Sie sind beide im selben Tierkreisjahr geboren ({animalA}), deshalb ähneln sich Ihre Wesensarten.",
    "zodiac.NEUTRAL": "Zwischen {animalA} und {animalB} besteht keine besondere Beziehung.",
    "zodiac.WONJIN":
      "{animalA} und {animalB} stehen in stillem Groll — selten ein offener Streit, aber ein feines Missverhältnis, das meist bleibt.",
    "zodiac.CHUNG":
      "{animalA} und {animalB} stoßen zusammen. Sie unterscheiden sich deutlich, was auch heißt, dass es viel zu lernen gibt.",
  },
  animals: {
    rat: "Ratte",
    ox: "Ochse",
    tiger: "Tiger",
    rabbit: "Hase",
    dragon: "Drache",
    snake: "Schlange",
    horse: "Pferd",
    goat: "Ziege",
    monkey: "Affe",
    rooster: "Hahn",
    dog: "Hund",
    pig: "Schwein",
  },
  elements: {
    WOOD: "Holz",
    FIRE: "Feuer",
    EARTH: "Erde",
    METAL: "Metall",
    WATER: "Wasser",
  },
};
