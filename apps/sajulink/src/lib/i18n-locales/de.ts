// 사주링크 화면 사전의 German (Deutsch)(de) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **인연링크에서 물려받은 옛 번역을 되살린 것이 아니다.** 그 파일들은 궁합 서비스의 UI라,
// 되살리면 사주 화면에 궁합·인연이 다시 들어온다. 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const de: Dictionary = {
  "brand": "SajuLink",
  "tagline": "Ihre vier Säulen, gelesen aus einem Geburtsdatum",
  "currentLanguage": "Aktuelle Sprache",
  "moreLanguages": "Mehr",
  "closeLanguages": "Schließen",
  "landing": {
    "title": "Die acht Zeichen,\nmit denen Sie geboren wurden",
    "subtitle": "Alles, was Sie brauchen, ist ein Geburtsdatum.\nWir erstellen Ihr Saju (Vier Säulen) Diagramm, wägen die fünf Elemente und lesen die Stärke Ihres Tagesmeisters.",
    "cta": "Mein Saju ansehen",
    "howTitle": "So funktioniert es",
    "steps": [
      "Geben Sie Ihr Geburtsdatum ein. Die Geburtszeit ist optional.",
      "Das Jahr, der Monat, der Tag und die Stunde Ihrer Geburt werden zu acht Zeichen — Ihrem natalen Chart. Daraus lesen wir das Gewicht jedes Elements und die Stärke Ihres Tagesmeisters.",
      "Die Säule von heute wird gegen dieses Chart gelegt, um Ihnen auch das heutige Glück zu geben."
    ],
    "privacyTitle": "Nichts, was Sie eingeben, wird gespeichert",
    "privacyBody": "Geburtsdaten werden nur während der Berechnung des Ergebnisses verwendet und niemals aufgezeichnet. Es ist kein Konto erforderlich. Nichts, was in einem Ergebnislink enthalten ist, wird an den Server gesendet.",
    "disclaimer": "Dies ist eine traditionelle Saju-Lesung, die als Referenz angeboten wird. Es ist keine wissenschaftliche Vorhersage oder ein Urteil über die Zukunft von jemandem."
  },
  "form": {
    "title": "Ihr Geburtsdatum",
    "description": "Die Kenntnis der Geburtszeit macht die Analyse präziser, ist jedoch nicht erforderlich.",
    "meLegend": "Über Sie",
    "nickname": "Wie man sie nennt",
    "nicknamePlaceholder": "z.B. Ich",
    "nicknameHint": "Wird nur auf dem Ergebnisbildschirm angezeigt. Es wird nicht in die Berechnung einbezogen.",
    "gender": "Geschlecht",
    "male": "Männlich",
    "female": "Weiblich",
    "genderUnspecified": "Möchte ich nicht sagen",
    "genderHint": "Traditionelle Saju betrachtet die Positionen von Ehepartner und Kind unterschiedlich nach Geschlecht. Wenn Sie dies überspringen, werden diese Faktoren aus der Berechnung ausgeschlossen.",
    "birthplace": "Geburtsort",
    "birthplaceHint": "Die Stunden-Säule wird von der wahren Sonnenzeit an Ihrem Geburtsort berechnet. Wenn Ihr Geburtsort nicht aufgeführt ist, wählen Sie die nächstgelegene Stadt.\nInnerhalb des koreanischen Festlandes beträgt der Unterschied zwischen den Städten weniger als zwei Minuten. Sommerzeit und historische Zeitzonenänderungen werden ebenfalls berücksichtigt.",
    "calendar": "Kalender",
    "solar": "Solar",
    "lunar": "Lunar",
    "leapMonth": "Schaltmonat",
    "birthDate": "Geburtsdatum",
    "year": "Jahr",
    "month": "Monat",
    "day": "Tag",
    "birthTime": "Geburtszeit",
    "unknownTime": "Ich kenne die Zeit nicht",
    "hour": "Stunde",
    "minute": "Minute",
    "submit": "Anzeige ansehen und meine Saju sehen",
    "submitNoAd": "Meine Saju sehen",
    "submitting": "Berechnung…",
    "errorInvalidDate": "Bitte überprüfen Sie das Geburtsdatum. Bei lunaren Daten überprüfen Sie auch, ob es in einen Schaltmonat fällt.",
    "errorGeneric": "Die Berechnung ist fehlgeschlagen. Bitte versuchen Sie es in einem Moment erneut."
  },
  "reading": {
    "chartTitle": "Dein Geburtshoroskop",
    "chartHint": "Saju stellt das Jahr, den Monat, den Tag und die Stunde der Geburt jeweils als zwei Zeichen dar. Alles, was folgt, wird aus diesen acht Zeichen gelesen.",
    "pillarYear": "Jahr",
    "pillarMonth": "Monat",
    "pillarDay": "Tag",
    "pillarHour": "Stunde",
    "pillarHourUnknown": "Keine Geburtszeit",
    "dayMasterLabel": "Tagmeister",
    "animalLabel": "Tierkreiszeichen",
    "seasonLabel": "Jahreszeit der Geburt",
    "elementsTitle": "Elementare Stärke",
    "strongest": "Stärkste",
    "scarcest": "Seltenste",
    "strengthTitle": "Was du mitgebracht hast",
    "cautionTitle": "Was zu beachten ist",
    "bodyStrengthTitle": "Stärke des Tagmeisters",
    "favorableLabel": "Was du jetzt brauchst"
  },
  "bodyStrength": {
    "STRONG": {
      "name": "Starker Tagmeister",
      "body": "Die Elemente, die deinen Tagmeister unterstützen, sind reichlich vorhanden. Das gibt dir eigenen Antrieb, neigt aber auch dazu, leicht auf eine Seite zu kippen — du tendierst dazu, dich zurückzulehnen, wenn etwas den Überschuss abzieht."
    },
    "BALANCED": {
      "name": "Ausgewogener Tagmeister",
      "body": "Was deinen Tagmeister unterstützt und was davon abzieht, ist nahezu gleich. Zu nah beieinander, um eine Seite zu bestimmen, daher lesen wir hier das, was am dünnsten ist, als das, was du brauchst."
    },
    "WEAK": {
      "name": "Schwacher Tagmeister",
      "body": "Die Elemente, die deinen Tagmeister unterstützen, sind dünn. Du leihst dir gut Kraft von deiner Umgebung, aber es ist anstrengend, alleine durchzuhalten — du kommst zu dir selbst, wenn etwas dich unterstützt."
    }
  },
  "tenGods": {
    "BIGYEON": {
      "name": "Begleiter (比肩)",
      "body": "Die Energie, die Schulter an Schulter mit dir steht. Dick, gibt sie dir die Kraft, deinen eigenen Standpunkt zu behaupten und deinen Anteil zuerst zu beanspruchen."
    },
    "GEOPJAE": {
      "name": "Rivale (劫財)",
      "body": "Energie, die dir ähnelt, aber anders funktioniert. Sie verleiht Kraft zum Drücken, doch im Übermaß neigt das, was du hältst, dazu, sich zu zerstreuen."
    },
    "SIKSIN": {
      "name": "Ausdruck (食神)",
      "body": "Die Energie, die das, was in dir ist, in die Welt hinauszieht. Ausdruck und das einfache Vergnügen am Leben kommen von hier; wo sie sitzt, gibt es Leichtigkeit."
    },
    "SANGGWAN": {
      "name": "Störer (傷官)",
      "body": "Die Energie, die einen festen Rahmen erschüttert. Sie verleiht Talent und eine scharfe Kante, doch im Übermaß kollidiert sie mit Regeln und Rang."
    },
    "PYEONJAE": {
      "name": "Zufallsreichtum (偏財)",
      "body": "Wohlstandenergie der weiten Art. Aktiv und großzügig mit dem, was sie hat, bringt sie Chancen aus unerwarteten Quellen."
    },
    "JEONGJAE": {
      "name": "Stabiler Reichtum (正財)",
      "body": "Wohlstandenergie der stabilen Art, Stück für Stück gesammelt. Traditionelles Saju sieht es auch als die Partnerposition für einen Mann."
    },
    "PYEONGWAN": {
      "name": "Herausforderer (偏官)",
      "body": "Die Energie, die dich auf Trab und aufrecht hält. Du wirst unter Druck stark, doch im Übermaß lässt sie dich immer verfolgt fühlen."
    },
    "JEONGGWAN": {
      "name": "Autorität (正官)",
      "body": "Die Energie der Ordnung, die dich aufrichtet. Sie bewahrt deinen Namen und deinen Platz; traditionelles Saju sieht es auch als die Partnerposition für eine Frau."
    },
    "PYEONIN": {
      "name": "Unkonventionelle Unterstützung (偏印)",
      "body": "Energie, die dich auf ungewöhnlichem Weg unterstützt. Sie verleiht die Kraft, tief zu graben, doch im Übermaß läuft der Gedanke der Hand voraus."
    },
    "JEONGIN": {
      "name": "Nurture (正印)",
      "body": "Die Energie, die dich hält und aufzieht. Sie gibt Lernen und etwas, woran man sich lehnen kann; im Übermaß kommt das eigenständige Handeln spät."
    }
  },
  "dayMasters": {
    "甲": {
      "name": "Yang Holz (甲)",
      "trait": "Ein hoher Baum, der gerade wächst. Sobald die Richtung festgelegt ist, wankt er nicht und zieht es vor, zu ertragen, als sich zu biegen."
    },
    "乙": {
      "name": "Yin Holz (乙)",
      "trait": "Eine Rebe — flexibles Gras. Sie biegt sich den Umständen an, um weiterzukommen, und reißt nicht."
    },
    "丙": {
      "name": "Yang Feuer (丙)",
      "trait": "Die Mittagssonne. Gefühle zeigen sich deutlich, der Raum erhellt sich, und das Vorwärtsgehen geschieht ganz natürlich."
    },
    "丁": {
      "name": "Yin Feuer (丁)",
      "trait": "Kerzenlicht. Es brennt leise und lange und wärmt zuerst die Nächsten."
    },
    "戊": {
      "name": "Yang Erde (戊)",
      "trait": "Offene Flächen und Berge. Schwer zu erschüttern und leicht, sich darauf zu stützen, obwohl es langsam ist, eine Entscheidung zu ändern, sobald sie getroffen ist."
    },
    "己": {
      "name": "Yin Erde (己)",
      "trait": "Feldboden. Er nimmt alles auf, was kommt, und lässt es wachsen, pflegt eher als dass er zeigt."
    },
    "庚": {
      "name": "Yang Metall (庚)",
      "trait": "Unbearbeitetes Eisen. Entschlossen und klar, mit wenig Geduld für Dinge, die hängen bleiben."
    },
    "辛": {
      "name": "Yin Metall (辛)",
      "trait": "Ein geschliffener Edelstein. Feine Geschmacksnuancen und hohe Standards; Schlampigkeit ist schwer zu akzeptieren."
    },
    "壬": {
      "name": "Yang Wasser (壬)",
      "trait": "Fluss und Meer. Weitblickend, mit einem Gespür dafür, wie die Dinge fließen."
    },
    "癸": {
      "name": "Yin Wasser (癸)",
      "trait": "Tau und Regen. Es dringt leise ein und erfasst die Stimmung, bevor die Worte kommen."
    }
  },
  "dayMasterSigns": {
    "甲": [
      "Sagt, was sie denken, selbst bei einem ersten Treffen.",
      "Ändert selten einen Plan oder ein Versprechen, sobald es festgelegt ist.",
      "Lehnt Dinge direkt ab, was schroff klingen kann."
    ],
    "乙": [
      "Umgeht Konfrontationen und wählt einen anderen Weg.",
      "Wirkt sanft, erreicht aber letztendlich, wo sie hinwollten.",
      "Beobachtet die Stimmung, bevor sie sich einer Gruppe anschließt."
    ],
    "丙": [
      "Spricht zuerst mit Menschen, die sie gerade getroffen haben.",
      "Was sie mögen und nicht mögen, zeigt sich in ihrem Gesicht.",
      "Steht ohne Mühe im Mittelpunkt einer Versammlung."
    ],
    "丁": [
      "Zuerst ruhig, aufmerksam, wenn man näher kommt.",
      "Bevorzugt ein langes Gespräch mit ein oder zwei Personen über eine Menge.",
      "Erinnert sich an eine beiläufige Bemerkung und bringt sie später zur Sprache."
    ],
    "戊": [
      "Spricht wenig; ihre Stimme hebt sich selten, selbst wenn es dringend ist.",
      "Diejenige, die am Ende entscheidet, während andere das Entscheiden aufschieben.",
      "Ein Nein, einmal ausgesprochen, bleibt lange bestehen."
    ],
    "己": [
      "Hört länger zu, als sie sprechen.",
      "Hat Schwierigkeiten, abzulehnen, sodass die Arbeit sich anhäuft.",
      "Was sie still erledigt haben, kommt erst später ans Licht."
    ],
    "庚": [
      "Entscheidet schnell und sagt es sofort.",
      "Mildert die Dinge nicht, was kalt wirken kann.",
      "Wird sichtbar unruhig, wenn sich etwas hinzieht."
    ],
    "辛": [
      "Hat klare Standards für Kleidung und die Dinge, die sie wählen.",
      "Kann einen halbherzigen Job nicht einfach ignorieren.",
      "Sparsam mit Lob, aber eindeutig, wenn sie es meinen."
    ],
    "壬": [
      "Mischt sich leicht mit allen Arten von Menschen.",
      "Spricht zuerst über das, was später kommt, bevor sie auf das Hier und Jetzt eingehen.",
      "Leidet darunter, lange an einem Ort gebunden zu sein."
    ],
    "癸": [
      "Spricht wenig, hat die Situation aber genau erfasst.",
      "Der Erste, der bemerkt, wenn sich die Stimmung ändert.",
      "Hält ihr inneres Leben nah, sodass es Zeit braucht, sie kennenzulernen."
    ]
  },
  "animalTraits": {
    "rat": "Schnell im Auffassen und schnell im Sichern, was wichtig ist. Der Erste, der in einer Krise handelt.",
    "ox": "Langsam im Aussehen, aber sieht die Dinge bis zum Ende. Was es übernimmt, lässt es nicht fallen.",
    "tiger": "Furchtlos und an vorderster Front. Kann Ungerechtigkeit nicht einfach hinnehmen.",
    "rabbit": "Sanft und einfühlsam. Weiß, wie man umgeht, anstatt zu kollidieren.",
    "dragon": "Großherzig mit hohen Idealen. Selten mit dem Gewöhnlichen zufrieden.",
    "snake": "Hält seine eigenen Gedanken geheim und denkt tiefgründig. Urteilt genau.",
    "horse": "Lebhaft und unruhig. Eingesperrt zu sein, ist das Schwierigste.",
    "goat": "Warmherzig und rücksichtsvoll. Hält harte Worte lange zurück.",
    "monkey": "Einfallsreich und schnell anpassungsfähig. Langweilt sich bei Wiederholungen.",
    "rooster": "Fleißig und genau. Kann nichts aus dem Gleichgewicht lassen.",
    "dog": "Loyal bis zum Ende, sobald Vertrauen gegeben ist. Verrat trifft besonders tief.",
    "pig": "Großzügig und direkt. Vertraut leicht, manchmal mit Nachteilen."
  },
  "result": {
    "title": "Ihre Saju-Deutung",
    "recalculate": "Neu starten",
    "copyLink": "Ergebnislink kopieren",
    "copied": "Kopiert",
    "missingInput": "Dieses Ergebnis konnte nicht gelesen werden. Bitte geben Sie die Daten erneut ein.",
    "partialTime": "Es wurde keine Geburtszeit angegeben, daher wurde der Stundenpfeiler weggelassen. Das Hinzufügen macht die Deutung präziser.",
    "engineVersion": "Berechnet mit",
    "disclaimer": "Dies ist eine traditionelle Saju-Deutung, die zur Referenz angeboten wird. Es ist keine wissenschaftliche Vorhersage oder ein Urteil über Ihre Zukunft."
  },
  "today": {
    "menu": "Heute’s Glück",
    "title": "Heutige Fortune",
    "pillarLabel": "Heutiger Säule",
    "scoreLabel": "Heutige Punktzahl",
    "grades": {
      "DAEGIL": {
        "name": "Sehr günstig",
        "body": "Die Energie von heute trifft dein Chart im besten Winkel. Ein guter Tag, um das aufzugreifen, was du aufgeschoben hast."
      },
      "GIL": {
        "name": "Günstig",
        "body": "Der Fluss läuft heute mit dir. Was du normalerweise tust, geht leichter als gewöhnlich."
      },
      "PYEONG": {
        "name": "Ausgeglichen",
        "body": "Nichts drängt dich und nichts blockiert dich. Mach, was du normalerweise machst, und du wirst das bekommen, was du normalerweise bekommst."
      },
      "JUUI": {
        "name": "Vorsicht",
        "body": "Ein Teil der Energie von heute läuft gegen dein Chart. Es ist besser, Dinge zu beenden, als sie zu beginnen."
      },
      "JOSIM": {
        "name": "Vorsichtig sein",
        "body": "Die Energie von heute drückt auf dein Chart. Wenn eine Entscheidung warten kann, lass sie warten."
      }
    },
    "categories": {
      "wealth": "Geld",
      "love": "Liebe",
      "career": "Arbeit",
      "health": "Gesundheit"
    },
    "luckyTitle": "Halte diese heute nah",
    "luckyElement": "Element",
    "luckyColor": "Farbe",
    "luckyDirection": "Richtung",
    "luckyTime": "Stunden",
    "luckyNumber": "Zahlen",
    "luckyColors": {
      "TEAL": "türkis",
      "GREEN": "grün",
      "RED": "rot",
      "ORANGE": "orange",
      "YELLOW": "gelb",
      "OCHRE": "ocker",
      "WHITE": "weiß",
      "GOLD": "gold",
      "BLACK": "schwarz",
      "NAVY": "marineblau"
    },
    "luckyDirections": {
      "EAST": "Osten",
      "SOUTH": "Süden",
      "CENTER": "Zentrum",
      "WEST": "Westen",
      "NORTH": "Norden"
    },
    "basisTitle": "Woher diese Punktzahl kommt",
    "factors": {
      "TODAY_IS_YONGSIN": "Das Element von heute ist das, was dein Chart braucht",
      "TODAY_GENERATES_YONGSIN": "Das Element von heute nährt das, was dein Chart braucht",
      "TODAY_IS_GISIN": "Das Element von heute drückt die Seite weiter, die bereits voll ist",
      "TODAY_CONTROLS_YONGSIN": "Das Element von heute hält das zurück, was dein Chart braucht",
      "TODAY_GENERATES_SELF": "Das Element von heute unterstützt deinen Tag Meister",
      "TODAY_SAME_ELEMENT": "Das Element von heute ist dasselbe wie dein Tag Meister",
      "SELF_GENERATES_TODAY": "Dein Tag Meister fließt in das Element von heute",
      "TODAY_CONTROLS_SELF": "Das Element von heute hält deinen Tag Meister zurück",
      "SELF_CONTROLS_TODAY": "Dein Tag Meister hält das Element von heute zurück",
      "WEAK_HELPED": "Ein schwacher Tag Meister erhält heute Stärke",
      "STRONG_OVERFED": "Ein starker Tag Meister wird heute schwerer",
      "STRONG_DRAINED": "Ein starker Tag Meister wird heute auf ein besseres Gleichgewicht gezogen",
      "WEAK_BURDENED": "Ein schwacher Tag Meister erhält heute mehr zu tragen",
      "BRANCH_SAMHAP": "Der Zweig von heute bildet ein volles Trigon mit deinem Chart",
      "BRANCH_BANHAP": "Der Zweig von heute bildet ein halbes Trigon mit deinem Chart",
      "BRANCH_YUKHAP": "Der Zweig von heute bildet eine sechs-harmonie mit deinem Chart",
      "BRANCH_SAME": "Der Zweig von heute ist derselbe wie einer in deinem Chart",
      "BRANCH_NEUTRAL": "Der Zweig von heute hat keine besondere Verbindung zu deinem Chart",
      "BRANCH_WONJIN": "Der Zweig von heute sitzt in ruhigem Zwiespalt mit deinem Chart",
      "BRANCH_CHUNG": "Der Zweig von heute kollidiert mit deinem Chart"
    },
    "bookmarkHint": "Wir speichern dein Geburtsdatum nicht, daher muss es jedes Mal erneut eingegeben werden. **Lesezeichen diesen Ergebnislink** und er öffnet jeden Tag die Fortune dieses Tages.",
    "disclaimer": "Die Fortune von heute verwandelt die Beziehung zwischen der Tages Säule und deinem Chart in eine Punktzahl. Es ist eine Notiz, wie man den Tag verbringen kann, keine Prophezeiung."
  },
  "ads": {
    "label": "Anzeige"
  },
  "analyzing": {
    "title": "Ihr Chart erstellen",
    "quotes": [
      "Saju ist keine feste Antwort. Es ist eine Sprache, um sich selbst zu verstehen.",
      "Zu wissen, womit Sie geboren wurden, und es zu leben, sind zwei verschiedene Dinge.",
      "Eine starke Position ist eine Frage der Nutzung; eine schwache, eine Frage des Füllens.",
      "Die gleichen acht Zeichen ergeben je nach Lesart einen anderen Tag.",
      "Besser, als auf einen guten Tag zu warten, ist es, zu wissen, wie man den, den man hat, nutzt.",
      "Die Position, die die Menschen als Schwäche bezeichnen, ist normalerweise der Ort, an dem das größte Wachstum stattfindet.",
      "Einige Energien werden von der Saison vorangetrieben; einige müssen Sie selbst erzeugen.",
      "Wichtiger als die Punktzahl ist, wie Sie sie lesen.",
      "Die heutige Fortune ist das Wetter für einen Tag, nicht das Klima, in dem Sie leben.",
      "Ihr Saju zu kennen bedeutet, sich selbst zu sehen, nicht in die Zukunft zu blicken."
    ],
    "watching": "Werbung wird gerade angesehen",
    "remaining": "Ihr Ergebnis öffnet sich in {seconds}s"
  },
  "reportDetail": {
    "depthTitle": "Ein genauerer Blick auf dein Chart",
    "vitalityTitle": "Was die Jahreszeit vorantreibt",
    "vitalityHint": "Die Balken zeigen, wie viel von einem Element vorhanden ist; diese Tabelle zeigt, ob der Geburtsmonat es unterstützt. Die gleiche Menge hat unterschiedliche Kraft bei wang als bei sa.",
    "vitalities": {
      "WANG": {
        "name": "Wang (旺)",
        "body": "am stärksten"
      },
      "SANG": {
        "name": "Sang (相)",
        "body": "nächste Stärke"
      },
      "HYU": {
        "name": "Hyu (休)",
        "body": "ruhend nach seiner Zeit"
      },
      "SU": {
        "name": "Su (囚)",
        "body": "eingeschlossen, schwer zu bewegen"
      },
      "SA": {
        "name": "Sa (死)",
        "body": "am schwächsten"
      }
    },
    "rawLabel": "Vor der Jahreszeit",
    "strengthLabel": "Nach der Jahreszeit",
    "earthSeasonNote": "Geboren in einem Übergangsmonat (辰未戌丑), daher wird Erde auch als wang gezählt.",
    "allyRatioLabel": "Allianzverhältnis",
    "allyRatioHint": "Der Anteil, den die Ressourcen- und Begleitsterne zusammen halten. Über 45% ist stark, unter 35% ist schwach. Die Zahl wird angezeigt, damit du sehen kannst, wie nah das Urteil war.",
    "stemGodsTitle": "Was jede Säule für dich bedeutet",
    "stemGodsHint": "Gemessen von deinem day master, nimmt jeder verbleibende Stamm einen der zehn Götternamen an. Welche von ihnen stark ausgeprägt ist, sagt viel über Temperament aus.",
    "pillarColumn": "Säule",
    "tenGodColumn": "Zehn Gott",
    "meaningColumn": "Was es bedeutet",
    "yearOutlookTitle": "Aussichten für dieses Jahr",
    "factorsTitle": "Wo die Punktzahl von heute herkommt",
    "factorsHint": "Der Bildschirm nennt die Faktoren; hier wird jeder mit den Punkten angezeigt, die er hinzugefügt oder entfernt hat.",
    "deltaColumn": "Punkte",
    "appendixTitle": "Wie dieses Chart erstellt wurde",
    "timeCorrectionLabel": "Geburtszeit",
    "timeCorrectionApplied": "Korrigiert auf wahre Sonnenzeit und gelesen als {time}.",
    "timeCorrectionNone": "Es wurde keine Geburtszeit angegeben, daher wurde die Stunden-Säule weggelassen.",
    "timeCorrectionDateShift": "Die Korrektur verschob das Datum auf {date}, sodass die Säule dieses Tages verwendet wurde.",
    "calendarLabel": "Datum, an dem das Chart erstellt wurde",
    "solarLabel": "Solar",
    "lunarLabel": "Lunar",
    "lunarUnavailable": "Dieses Datum ist nicht in der Almanach-Tabelle, daher wird kein lunar Datum angezeigt."
  },
  "report": {
    "title": "Bewahren Sie Ihre Lebenslesung als PDF auf",
    "body": "Wir verwandeln diese Lesung in ein PDF – Ihr Natalchart, das Gewicht der fünf Elemente, die Stärke Ihres Tagemeisters und was er jetzt braucht, sowie das heutige Schicksal, alles auf einer Seite.",
    "buyButton": "{price} bezahlen und herunterladen",
    "preparing": "Noch nicht verfügbar",
    "ordering": "Ihre Bestellung wird erstellt…",
    "paying": "Zahlung wird verarbeitet…",
    "issuing": "Ihr Bericht wird vorbereitet…",
    "done": "Heruntergeladen. Verwenden Sie die Schaltfläche unten, um ihn erneut herunterzuladen.",
    "failed": "Die Zahlung oder der Download ist fehlgeschlagen. Bitte versuchen Sie es in einem Moment erneut.",
    "retry": "Erneut herunterladen",
    "contents": [
      "Ihr Tagemeister und Temperament – eine Zusammenfassung, Stärken und Vorsichtsmaßnahmen",
      "Ihr Natalchart – die acht Zeichen der vier Säulen",
      "Das Gewicht der fünf Elemente, dickste und dünnste",
      "Die Stärke Ihres Tagemeisters, und die Energie, die er jetzt braucht",
      "Das heutige Schicksal und die vier Bereiche (Geld, Liebe, Arbeit, Gesundheit)"
    ],
    "consentLabel": "Ich verstehe, dass dies digitale Inhalte sind, die sofort nach der Zahlung bereitgestellt werden, und dass **der Rücktritt bei einfacher Meinungsänderung eingeschränkt ist, sobald der Download abgeschlossen ist**.",
    "consentRequired": "Bitte bestätigen Sie die Rücktrittsbedingungen vor der Zahlung.",
    "productInfoTitle": "Produktinformationen",
    "productInfo": [
      [
        "Anbieter",
        "{brand}"
      ],
      [
        "Format",
        "Ein PDF-Dokument (5 A4-Seiten), das sofort nach der Zahlung auf dem Bildschirm heruntergeladen wird."
      ],
      [
        "Anforderungen",
        "Jedes Gerät, das ein PDF öffnen kann. Keine Installation oder Konto erforderlich."
      ],
      [
        "Nutzungsdauer",
        "Keine Begrenzung. Sie behalten die Datei, die Sie herunterladen."
      ],
      [
        "Erneut herunterladen",
        "Bis zu fünfmal bei derselben Bestellung. Wir behalten keine Kopie, daher kann sie nicht erneut erstellt werden, sobald Sie den Ergebnisschirm verlassen."
      ],
      [
        "Rücktritt",
        "Vollständige Rückerstattung vor Beginn des Downloads. Nach Abschluss ist der Rücktritt bei Meinungsänderung eingeschränkt (Art. 17(2), Koreanisches E-Commerce-Gesetz)."
      ],
      [
        "Rücksendekosten",
        "Keine – digitale Inhalte, es wird nichts versendet."
      ]
    ],
    "refundContact": "Für Rückerstattungen oder Fragen wenden Sie sich bitte an das Kundenzentrum oder die untenstehende E-Mail. Wenn das Dokument nicht erstellt werden konnte oder der berechnete Betrag von der Bestellung abweicht, erstatten wir den vollen Betrag.",
    "pdfLanguageNotice": "Das PDF wird in derselben Sprache erstellt wie dieser Bildschirm."
  },
  "premiumReport": {
    "title": "Bewahren Sie Ihre Premium-Lesung als PDF auf",
    "body": "Alles in der Lebenslesung, plus **die Zahlen dahinter, die nie auf dem Bildschirm erscheinen** — das Verhältnis der Verbündeten, das stark oder schwach entschied, wie sehr der Geburtsmonat jedes Element angehoben hat und die Korrektur der wahren Sonnenzeit, die auf Ihre Geburtsstunde angewendet wurde.",
    "buyButton": "{price} bezahlen und herunterladen",
    "preparing": "Noch nicht verfügbar",
    "ordering": "Ihre Bestellung wird erstellt…",
    "paying": "Zahlung wird bearbeitet…",
    "issuing": "Ihr Bericht wird vorbereitet…",
    "done": "Heruntergeladen. Verwenden Sie die Schaltfläche unten, um ihn erneut herunterzuladen.",
    "failed": "Die Zahlung oder der Download ist fehlgeschlagen. Bitte versuchen Sie es in einem Moment erneut.",
    "retry": "Erneut herunterladen",
    "contents": [
      "Ihr Tagemeister und Temperament — eine Zusammenfassung, Stärken und Vorsichtsmaßnahmen",
      "Ihr Geburtshoroskop — die acht Zeichen der vier Säulen",
      "Die fünf Elemente, die Stärke Ihres Tagemeisters und was er benötigt",
      "Heutiges Glück und die vier Bereiche (Geld, Liebe, Arbeit, Gesundheit)",
      "Was jede Säule für Sie bedeutet — die zehn Götter, die aus Ihrem Horoskop gelesen werden",
      "Saisonale Stellung und Verbündetenverhältnis — die Zahlen hinter dem Urteil",
      "Der Ausblick für dieses Jahr, die Bewertungsfaktoren von heute und die Zeitkorrektur"
    ],
    "consentLabel": "Ich verstehe, dass dies digitale Inhalte sind, die sofort nach der Zahlung bereitgestellt werden, und dass **der Rücktritt bei einfacher Meinungsänderung eingeschränkt ist, sobald der Download abgeschlossen ist**.",
    "consentRequired": "Bitte bestätigen Sie die Rücktrittsbedingungen vor der Zahlung.",
    "productInfoTitle": "Produktinformationen",
    "productInfo": [
      [
        "Anbieter",
        "{brand}"
      ],
      [
        "Format",
        "Ein PDF-Dokument (7 A4-Seiten), das sofort nach der Zahlung auf dem Bildschirm heruntergeladen wird."
      ],
      [
        "Anforderungen",
        "Jedes Gerät, das ein PDF öffnen kann. Keine Installation oder Registrierung erforderlich."
      ],
      [
        "Nutzungsdauer",
        "Keine Begrenzung. Sie behalten die Datei, die Sie herunterladen."
      ],
      [
        "Erneutes Herunterladen",
        "Bis zu fünfmal bei derselben Bestellung. Wir behalten keine Kopie, daher kann sie nicht erneut erstellt werden, sobald Sie den Ergebnisbildschirm verlassen."
      ],
      [
        "Rücktritt",
        "Vollständige Rückerstattung vor Beginn des Downloads. Nach Abschluss ist der Rücktritt bei Meinungsänderung eingeschränkt (Art. 17(2), koreanisches E-Commerce-Gesetz)."
      ],
      [
        "Rücksendekosten",
        "Keine — digitale Inhalte, es erfolgt kein Versand."
      ]
    ],
    "refundContact": "Für Rückerstattungen oder Fragen kontaktieren Sie bitte das Kundenzentrum oder die untenstehende E-Mail. Wenn das Dokument nicht erstellt werden konnte oder der berechnete Betrag von der Bestellung abweicht, erstatten wir den vollen Betrag.",
    "pdfLanguageNotice": "Das PDF wird in derselben Sprache erstellt wie dieser Bildschirm."
  },
  "fallbackReport": {
    "summary": "Ein {dayMaster} Tagesmeister, geboren in die Energie von {season}. Im gesamten Chart ist {strongest} am stärksten und {scarcest} am schwächsten. Alles, was folgt, ergibt sich aus diesen acht Zeichen — jede Zahl und jede Säule hier ist berechnet, nicht gewählt.",
    "personality": "Ihr Tagesmeister ist {dayMaster} — {element} Energie — und dieses Chart liest sich als {strengthName}. Welche Seite dicker ist, was den Tagesmeister unterstützt oder was davon abzieht, formt das Wesen, und im täglichen Leben zeigt es sich so.",
    "cautions": {
      "STRONG": [
        "Sie drücken stark genug, dass Sie die Neigung oft erst bemerken, nachdem sie passiert ist.",
        "Selbst wenn Hilfe verfügbar ist, enden Sie damit, es alleine zu bewältigen, was die Aufgabe größer macht.",
        "Die Dinge beruhigen sich, wenn Sie Raum für das lassen, was den Überschuss abzieht."
      ],
      "BALANCED": [
        "Nichts neigt Sie in eine Richtung, sodass eine verschobene Entscheidung einfach verschoben bleibt.",
        "Sie passen sich gut an die Situation an, was verwischen kann, wo Ihre eigene Linie ist.",
        "In die Richtung zu steuern, die jetzt am dünnsten ist, gibt Ihnen eine Richtung, die Sie halten können."
      ],
      "WEAK": [
        "Allein durchzuhalten, macht Sie schneller müde, als Sie erwarten.",
        "Ohne Unterstützung rutschen Entscheidungen und der Moment vergeht.",
        "Unterstützende Menschen in der Nähe zu halten, ist in diesem Chart keine Schwäche — es ist die Methode."
      ]
    },
    "scarcityCaution": "Das dünnste Element jetzt ist {scarcest}. Was auch immer dieses Element regiert, ist wo Sie am langsamsten handeln.",
    "elementBalance": "Nach Stärke führt {strongest} mit {strongestPct}% und {scarcest} folgt mit {scarcestPct}%. Ihr Geburtsmonat liegt in {season}, was dieses Element erneut anhebt — die gleiche Menge hat unterschiedliche Kraft, je nachdem, ob die Saison es unterstützt. Was Sie jetzt brauchen, ist {favorable}, und die Dinge erleichtern sich, wo dieses Element gefüllt wird.",
    "todayHeadline": "Heute liest sich als {grade}",
    "todayMessage": "Heute erzielt {score}, bewertet als {gradeName}. {gradeBody} Die Tagesäule ist {pillar}, und der größte Faktor, der diesen Score beeinflusste, war „{topFactor}“.",
    "todayAdvice": {
      "HIGH": "Ein guter Tag, um die Nachricht oder das Aufräumen aufzugreifen, das Sie aufgeschoben haben — obwohl es besser ist, nicht zu versuchen, alles heute abzuschließen.",
      "MID": "Tun Sie, was Sie normalerweise tun, und Sie werden bekommen, was Sie normalerweise bekommen. Anstatt etwas Neues zu beginnen, bewegen Sie eine bereits in der Hand befindliche Sache einen Schritt vorwärts.",
      "LOW": "Einige Dinge heute laufen gegen das Chart. Besser, Zeit mit dem Abschluss und der Überprüfung zu verbringen als mit dem Starten."
    },
    "luckyNote": "Das Glückselement des heutigen Tages ist {element}. Die {colors} Reihe, die {direction} Seite und die Stunden um {time} sind, wo diese Energie am stärksten fließt.",
    "domains": {
      "wealth": "Geld liest sich heute als {score}. Dieser Wert bewegt sich, je nachdem, ob die Energie des heutigen Tages die Reichtumssterne (財星) erreicht — was Sie handhaben und was Sie sammeln.",
      "love": "Zuneigung liest sich heute als {score}. Dieser Wert wird bestimmt durch die Beziehung, wie der Zweig des heutigen Tages mit Ihrem Tageszweig (日支), dem Ehepalast, zusammentrifft — Harmonie hebt ihn, ein Konflikt zieht ihn nach unten.",
      "career": "Arbeit liest sich heute als {score}. Dieser Wert bewegt sich, je nachdem, ob die Energie des heutigen Tages die Beamtensterne (官星) und die Ausgabesterne (食傷) erreicht — was Sie übernehmen und was Sie herausgeben.",
      "health": "Gesundheit liest sich heute als {score}. Dieser Wert wird bestimmt durch die Anzahl der Zweige Ihrer Geburt, die heute zusammenstoßen, und ob das Element des heutigen Tages eines ist, das Sie benötigen."
    },
    "yearOutlook": "Die Säule dieses Jahres ist {pillar}, die {element} trägt. {relation} Diese Lesung betrachtet nur, wie die Säule des Jahres mit dem, was Sie jetzt brauchen, zusammentrifft; sie bricht das Jahr nicht Monat für Monat herunter.",
    "yearRelations": {
      "YONGSIN": "Das Element, das Sie benötigen, kommt in diesem Jahr direkt an. Eine passende Zeit, um das herauszuholen, was Sie beiseite gelegt hatten.",
      "GENERATES": "Dieses Jahr nährt das Element, das Sie benötigen, sodass der Fluss sanfter wird — nicht sofort, sondern stetig.",
      "GISIN": "Dieses Jahr drückt erneut in die Richtung, in die Sie bereits geneigt waren. Besser, das abzuschließen, was in der Hand ist, als etwas Neues zu beginnen.",
      "CONTROLS": "Etwas in diesem Jahr drückt auf das Element, das Sie benötigen, sodass Entscheidungen langsamer kommen. Eigene Fristen zu setzen hilft.",
      "NEUTRAL": "Dieses Jahr stößt nicht mit dem zusammen, was Sie benötigen, noch nährt es es. Den Boden, den Sie haben, zu halten, ist der bessere Tausch."
    },
    "disclaimer": "Traditionelle myeongri Referenz, keine wissenschaftliche Vorhersage oder Aussage darüber, was geschehen muss."
  },
  "footer": {
    "privacy": "Datenschutzrichtlinie",
    "terms": "Nutzungsbedingungen",
    "refund": "Stornierung & Rückerstattungen",
    "pricing": "Preisinformationen",
    "legalEntity": "Unternehmen",
    "representative": "Vertreter",
    "businessNumber": "Registrierungsnummer",
    "mailOrderNumber": "E-Commerce-Registrierung",
    "address": "Adresse",
    "customerCenter": "Kundenservice",
    "email": "E-Mail",
    "privacyOfficer": "Datenschutzbeauftragter",
    "hostingProvider": "Hosting",
    "providedBy": "Provided by",
    "effective": "In Kraft",
    "backHome": "Zurück zur Startseite"
  },
  "animals": {
    "rat": "Ratte",
    "ox": "Ochse",
    "tiger": "Tiger",
    "rabbit": "Hase",
    "dragon": "Drache",
    "snake": "Schlange",
    "horse": "Pferd",
    "goat": "Ziege",
    "monkey": "Affe",
    "rooster": "Hahn",
    "dog": "Hund",
    "pig": "Schwein"
  },
  "elements": {
    "WOOD": "Holz",
    "FIRE": "Feuer",
    "EARTH": "Erde",
    "METAL": "Metall",
    "WATER": "Wasser"
  }
};
