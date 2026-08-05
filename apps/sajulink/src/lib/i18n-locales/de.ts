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
    "howTitle": "So wird gerechnet",
    "steps": [
      "Geben Sie Ihr Geburtsdatum ein. Die Geburtszeit ist optional.",
      "Das Jahr, der Monat, der Tag und die Stunde Ihrer Geburt werden zu acht Zeichen — Ihrem natalen Chart. Daraus lesen wir das Gewicht jedes Elements und die Stärke Ihres Tagesmeisters.",
      "Die Säule von heute wird gegen dieses Chart gelegt, um Ihnen auch das heutige Glück zu geben."
    ],
    "privacyTitle": "Ihre Eingaben werden nicht gespeichert",
    "privacyBody": "Geburtsdaten werden nur während der Berechnung verwendet und nirgends aufgezeichnet. Ein Konto ist nicht nötig. Was in einem Ergebnislink steht, wird nicht an den Server gesendet.",
    "disclaimer": "Dies ist eine traditionelle Saju-Lesung, die als Referenz angeboten wird. Es ist keine wissenschaftliche Vorhersage oder ein Urteil über die Zukunft von jemandem."
  },
  "form": {
    "title": "Ihr Geburtsdatum",
    "description": "Mit bekannter Geburtszeit wird die Deutung schärfer, nötig ist sie aber nicht.",
    "meLegend": "Über Sie",
    "nickname": "Anzeigename",
    "nicknamePlaceholder": "z. B. Ich",
    "nicknameHint": "Erscheint nur im Ergebnis. Für die Berechnung wird er nicht verwendet.",
    "gender": "Geschlecht",
    "male": "Männlich",
    "female": "Weiblich",
    "genderUnspecified": "Keine Angabe",
    "genderHint": "Traditionelle Saju betrachtet die Positionen von Ehepartner und Kind unterschiedlich nach Geschlecht. Wenn Sie dies überspringen, werden diese Faktoren aus der Berechnung ausgeschlossen.",
    "birthplace": "Geburtsort",
    "birthplaceHint": "Die Stunden-Säule wird von der wahren Sonnenzeit an Ihrem Geburtsort berechnet. Wenn Ihr Geburtsort nicht aufgeführt ist, wählen Sie die nächstgelegene Stadt.\nInnerhalb des koreanischen Festlandes beträgt der Unterschied zwischen den Städten weniger als zwei Minuten. Sommerzeit und historische Zeitzonenänderungen werden ebenfalls berücksichtigt.",
    "calendar": "Kalender",
    "solar": "Sonnenkalender",
    "lunar": "Mondkalender",
    "leapMonth": "Schaltmonat",
    "birthDate": "Geburtsdatum",
    "year": "Jahr",
    "month": "Monat",
    "day": "Tag",
    "birthTime": "Geburtszeit",
    "unknownTime": "Ich kenne die Uhrzeit nicht",
    "hour": "Stunde",
    "minute": "Minute",
    "submit": "Anzeige ansehen und meine Saju sehen",
    "submitNoAd": "Meine Saju sehen",
    "submitting": "Wird berechnet…",
    "errorInvalidDate": "Bitte prüfen Sie das Geburtsdatum. Bei Monddaten prüfen Sie auch, ob es in einen Schaltmonat fällt.",
    "errorGeneric": "Die Berechnung ist fehlgeschlagen. Bitte versuchen Sie es gleich noch einmal."
  },
  "reading": {
    "chartTitle": "Dein Geburtshoroskop",
    "chartHint": "Saju stellt das Jahr, den Monat, den Tag und die Stunde der Geburt jeweils als zwei Zeichen dar. Alles, was folgt, wird aus diesen acht Zeichen gelesen.",
    "pillarYear": "Jahr",
    "pillarMonth": "Monat",
    "pillarDay": "Tag",
    "pillarHour": "Stunde",
    "pillarHourUnknown": "Keine Geburtszeit",
    "dayMasterLabel": "Tagesmeister",
    "animalLabel": "Tierkreis",
    "seasonLabel": "Jahreszeit der Geburt",
    "elementsTitle": "Stärke der Elemente",
    "strongest": "Am stärksten",
    "scarcest": "Am schwächsten",
    "strengthTitle": "Was du mitgebracht hast",
    "cautionTitle": "Worauf zu achten ist",
    "bodyStrengthTitle": "Stärke des Tagesmeisters",
    "favorableLabel": "Was Sie jetzt brauchen"
  },
  "bodyStrength": {
    "STRONG": {
      "name": "Starker Tagesmeister",
      "body": "Die Elemente, die Ihren Tagesmeister stützen, sind reichlich vorhanden. Das gibt Ihnen eigenen Antrieb, kippt aber leicht zu einer Seite — zur Ruhe kommen Sie, wenn etwas den Überschuss ableitet."
    },
    "BALANCED": {
      "name": "Ausgeglichener Tagesmeister",
      "body": "Was Ihren Tagesmeister stützt und was ihm entzieht, hält sich fast die Waage. Für eine klare Zuordnung ist es zu knapp, deshalb gilt hier das Dünnste als das, was Sie brauchen."
    },
    "WEAK": {
      "name": "Schwacher Tagesmeister",
      "body": "Die Elemente, die Ihren Tagesmeister stützen, sind dünn. Sie leihen sich Kraft aus Ihrem Umfeld gut, reiben sich aber auf, wenn Sie allein durchhalten — zu Ihrer Form kommen Sie, wenn Ihnen etwas den Rücken stärkt."
    }
  },
  "tenGods": {
    "BIGYEON": {
      "name": "Gefährte (比肩)",
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
      "name": "Unerwarteter Gewinn (偏財)",
      "body": "Wohlstandenergie der weiten Art. Aktiv und großzügig mit dem, was sie hat, bringt sie Chancen aus unerwarteten Quellen."
    },
    "JEONGJAE": {
      "name": "Beständiger Wohlstand (正財)",
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
      "name": "Ungewöhnliche Stütze (偏印)",
      "body": "Energie, die dich auf ungewöhnlichem Weg unterstützt. Sie verleiht die Kraft, tief zu graben, doch im Übermaß läuft der Gedanke der Hand voraus."
    },
    "JEONGIN": {
      "name": "Fürsorge (正印)",
      "body": "Die Energie, die dich hält und aufzieht. Sie gibt Lernen und etwas, woran man sich lehnen kann; im Übermaß kommt das eigenständige Handeln spät."
    }
  },
  "dayMasters": {
    "甲": {
      "name": "Yang-Holz (甲)",
      "trait": "Ein hoher Baum, der gerade wächst. Steht die Richtung fest, wankt er nicht, und er hält lieber aus, als sich zu beugen."
    },
    "乙": {
      "name": "Yin-Holz (乙)",
      "trait": "Eine Ranke — biegsames Gras. Es beugt sich den Umständen, um weiterzukommen, und bricht dabei nicht."
    },
    "丙": {
      "name": "Yang-Feuer (丙)",
      "trait": "Die Mittagssonne. Gefühle liegen offen, der Raum wird hell, und nach vorn zu treten fällt leicht."
    },
    "丁": {
      "name": "Yin-Feuer (丁)",
      "trait": "Kerzenlicht. Es brennt leise und lange und wärmt zuerst die Nächsten."
    },
    "戊": {
      "name": "Yang-Erde (戊)",
      "trait": "Weites Land und Berge. Schwer zu erschüttern und gut zum Anlehnen, doch eine getroffene Entscheidung ändert sich nur langsam."
    },
    "己": {
      "name": "Yin-Erde (己)",
      "trait": "Ackerboden. Er nimmt auf, was kommt, und zieht es groß — er pflegt, statt sich zu zeigen."
    },
    "庚": {
      "name": "Yang-Metall (庚)",
      "trait": "Unbearbeitetes Eisen. Entschieden und klar, mit wenig Geduld für Dinge, die in der Schwebe bleiben."
    },
    "辛": {
      "name": "Yin-Metall (辛)",
      "trait": "Ein geschliffener Edelstein. Feiner Geschmack und hohe Maßstäbe; Nachlässigkeit lässt sich schwer durchgehen lassen."
    },
    "壬": {
      "name": "Yang-Wasser (壬)",
      "trait": "Fluss und Meer. Weiter Blick, mit einem Auge dafür, wohin die Dinge laufen."
    },
    "癸": {
      "name": "Yin-Wasser (癸)",
      "trait": "Tau und Regen. Es sickert leise ein und liest die Stimmung, bevor Worte fallen."
    }
  },
  "dayMasterSigns": {
    "甲": [
      "Sagt schon beim ersten Treffen, was er denkt.",
      "Ändert einen Plan oder ein Versprechen selten, wenn es einmal steht.",
      "Sagt geradeheraus ab, was schroff klingen kann."
    ],
    "乙": [
      "Geht der Konfrontation aus dem Weg und nimmt einen anderen Weg.",
      "Wirkt weich, kommt am Ende aber dort an, wo er hinwollte.",
      "Liest die Stimmung, bevor er sich einer Gruppe anschließt."
    ],
    "丙": [
      "Spricht Menschen, die er gerade erst kennt, zuerst an.",
      "Was er mag und nicht mag, steht ihm im Gesicht.",
      "Steht ohne Zutun im Mittelpunkt einer Runde."
    ],
    "丁": [
      "Anfangs still, aufmerksam, sobald man sich näher kennt.",
      "Redet lieber lange mit ein, zwei Menschen als in großer Runde.",
      "Merkt sich eine beiläufige Bemerkung und kommt später darauf zurück."
    ],
    "戊": [
      "Sagt wenig; die Stimme hebt sich selbst in eiligen Lagen kaum.",
      "Entscheidet am Ende, während andere die Entscheidung aufschieben.",
      "Ein einmal gesprochenes Nein bleibt lange ein Nein."
    ],
    "己": [
      "Hört länger zu, als er redet.",
      "Kann schwer ablehnen, deshalb häuft sich die Arbeit bei ihm.",
      "Was er still erledigt hat, kommt erst später heraus."
    ],
    "庚": [
      "Entscheidet schnell und sagt es auf der Stelle.",
      "Beschönigt nichts, was kühl wirken kann.",
      "Wird sichtbar unruhig, wenn sich etwas hinzieht."
    ],
    "辛": [
      "Hat klare Maßstäbe bei Kleidung und den Dingen, die er wählt.",
      "Kann eine halb erledigte Arbeit nicht durchgehen lassen, ohne sie anzusprechen.",
      "Spart mit Lob, ist aber eindeutig, wenn er es ernst meint."
    ],
    "壬": [
      "Kommt mit den unterschiedlichsten Menschen leicht zurecht.",
      "Spricht über das Spätere, bevor er über das Naheliegende spricht.",
      "Reibt sich daran, lange an einen Ort gebunden zu sein."
    ],
    "癸": [
      "Sagt wenig, hat die Lage aber genau gelesen.",
      "Merkt als Erster, wenn die Stimmung kippt.",
      "Behält das Innere für sich, deshalb braucht es Zeit, ihn zu kennen."
    ]
  },
  "animalTraits": {
    "rat": "Bemerkt schnell und sichert schnell, worauf es ankommt. In der Krise zuerst in Bewegung.",
    "ox": "Wirkt langsam, bringt es aber zu Ende. Was es übernimmt, lässt es nicht fallen.",
    "tiger": "Furchtlos und vorneweg. Kann Unrecht nicht durchgehen lassen.",
    "rabbit": "Sanft und feinfühlig. Weiß, wie man umgeht, statt zusammenzustoßen.",
    "dragon": "Großherzig mit hohen Idealen. Gibt sich mit Gewöhnlichem selten zufrieden.",
    "snake": "Behält sein Urteil für sich und denkt tief. Schätzt die Lage treffsicher ein.",
    "horse": "Hell und ruhelos. Eingezäunt zu sein, fällt am schwersten.",
    "goat": "Warm und rücksichtsvoll. Trägt harte Worte lange mit sich.",
    "monkey": "Findig und schnell im Anpassen. Wiederholung langweilt.",
    "rooster": "Fleißig und genau. Kann nichts liegen lassen, was nicht stimmt.",
    "dog": "Treu bis zuletzt, wenn Vertrauen einmal da ist. Verrat trifft besonders tief.",
    "pig": "Großzügig und geradeheraus. Vertraut leicht, manchmal auf eigene Kosten."
  },
  "result": {
    "title": "Ihre Saju-Deutung",
    "recalculate": "Neu beginnen",
    "copyLink": "Ergebnislink kopieren",
    "copied": "Kopiert",
    "missingInput": "Dieses Ergebnis konnte nicht gelesen werden. Bitte geben Sie die Daten erneut ein.",
    "partialTime": "Ohne Geburtszeit blieb die Stundensäule außen vor. Mit ihr wird die Deutung genauer.",
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
    "label": "Werbung"
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
    "watching": "Werbung läuft",
    "remaining": "Ihr Ergebnis öffnet in {seconds} s"
  },
  "reportDetail": {
    "depthTitle": "Ein genauerer Blick auf dein Chart",
    "vitalityTitle": "Was die Jahreszeit voranbringt",
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
        "body": "ruhend nach seinem Zug"
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
    "domainsTitle": "Vier Lebensbereiche",
    "factorsTitle": "Wo die Punktzahl von heute herkommt",
    "factorsHint": "Der Bildschirm nennt die Faktoren; hier wird jeder mit den Punkten angezeigt, die er hinzugefügt oder entfernt hat.",
    "deltaColumn": "Punkte",
    "appendixTitle": "Wie dieses Chart erstellt wurde",
    "timeCorrectionLabel": "Geburtszeit",
    "timeCorrectionApplied": "Auf wahre Sonnenzeit korrigiert und als {time} gelesen.",
    "timeCorrectionNone": "Es wurde keine Geburtszeit angegeben, daher wurde die Stunden-Säule weggelassen.",
    "timeCorrectionDateShift": "Die Korrektur verschob das Datum auf {date}, sodass die Säule dieses Tages verwendet wurde.",
    "calendarLabel": "Datum, aus dem die Karte erstellt wurde",
    "solarLabel": "Solar",
    "lunarLabel": "Lunar",
    "lunarUnavailable": "Dieses Datum ist nicht in der Almanach-Tabelle, daher wird kein lunar Datum angezeigt."
  },
  "report": {
    "title": "Bewahren Sie Ihre Lebenslesung als PDF auf",
    "body": "Wir verwandeln diese Lesung in ein PDF – Ihr Natalchart, das Gewicht der fünf Elemente, die Stärke Ihres Tagemeisters und was er jetzt braucht, sowie das heutige Schicksal, alles auf einer Seite.",
    "buyButton": "{price} zahlen und laden",
    "preparing": "Noch nicht verfügbar",
    "ordering": "Bestellung wird erstellt…",
    "paying": "Zahlung läuft…",
    "issuing": "Bericht wird vorbereitet…",
    "done": "Heruntergeladen. Über die Schaltfläche unten laden Sie es erneut.",
    "failed": "Zahlung oder Download ist fehlgeschlagen. Bitte versuchen Sie es gleich noch einmal.",
    "retry": "Erneut herunterladen",
    "contents": [
      "Ihr Tagemeister und Temperament – eine Zusammenfassung, Stärken und Vorsichtsmaßnahmen",
      "Ihr Natalchart – die acht Zeichen der vier Säulen",
      "Das Gewicht der fünf Elemente, dickste und dünnste",
      "Die Stärke Ihres Tagemeisters, und die Energie, die er jetzt braucht",
      "Das heutige Schicksal und die vier Bereiche (Geld, Liebe, Arbeit, Gesundheit)"
    ],
    "consentLabel": "Mir ist bekannt, dass dies ein digitaler Inhalt ist, der sofort nach der Zahlung geliefert wird, und dass **der Widerruf wegen einfacher Meinungsänderung eingeschränkt ist, sobald der Download abgeschlossen ist**.",
    "consentRequired": "Bitte bestätigen Sie die Widerrufsbedingungen vor der Zahlung.",
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
        "Voraussetzungen",
        "Ein beliebiges Gerät, das PDF öffnet. Keine Installation, kein Konto nötig."
      ],
      [
        "Nutzungsdauer",
        "Unbegrenzt. Die heruntergeladene Datei behalten Sie."
      ],
      [
        "Erneuter Download",
        "Bis zu fünfmal je Bestellung. Wir bewahren keine Kopie auf, deshalb kann die Datei nach dem Verlassen der Ergebnisseite nicht erneut erstellt werden."
      ],
      [
        "Widerruf",
        "Volle Erstattung, bevor der Download beginnt. Nach Abschluss ist der Widerruf wegen Meinungsänderung eingeschränkt (Art. 17 Abs. 2 des koreanischen E-Commerce-Gesetzes)."
      ],
      [
        "Rücksendekosten",
        "Keine — digitaler Inhalt, es wird nichts versandt."
      ]
    ],
    "refundContact": "Für Erstattungen oder Fragen wenden Sie sich an den Kundendienst oder die E-Mail-Adresse unten. Wenn das Dokument nicht erstellt werden konnte oder der belastete Betrag von der Bestellung abweicht, erstatten wir vollständig.",
    "pdfLanguageNotice": "Das PDF wird in derselben Sprache wie dieser Bildschirm erstellt."
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
    "summary": "Ein {dayMaster} Tagmeister, geboren in der Energie von {season}. Im gesamten Chart ist {strongest} am stärksten ausgeprägt und {scarcest} am schwächsten. Alles, was folgt, ergibt sich aus diesen acht Zeichen — jede Zahl und jede Säule hier ist berechnet, nicht gewählt.",
    "personality": "Ihr Tagmeister ist {dayMaster} — {element} Energie — und dieses Chart liest sich als {strengthName}. Welche Seite dicker ist, was den Tagmeister unterstützt oder was davon abzieht, prägt das Wesen, und im täglichen Leben zeigt es sich so.",
    "cautions": {
      "STRONG": [
        "Sie drücken so stark, dass Sie die Neigung oft erst bemerken, nachdem sie passiert ist.",
        "Selbst wenn Hilfe verfügbar ist, müssen Sie es letztendlich alleine bewältigen, was die Aufgabe größer macht.",
        "Die Dinge beruhigen sich, wenn Sie Raum für das lassen, was den Überschuss abzieht."
      ],
      "BALANCED": [
        "Nichts neigt Sie in eine Richtung, sodass eine verschobene Entscheidung einfach verschoben bleibt.",
        "Sie passen sich gut an die Situation an, was verwischen kann, wo Ihre eigene Linie ist.",
        "In Richtung dessen zu steuern, was gerade am dünnsten ist, gibt Ihnen eine Richtung, die Sie halten können."
      ],
      "WEAK": [
        "Allein durchzuhalten, zehrt schneller an Ihnen, als Sie erwarten.",
        "Ohne Unterstützung gleiten Entscheidungen und der Moment vergeht.",
        "Unterstützende Menschen in der Nähe zu halten, ist in diesem Chart keine Schwäche — es ist die Methode."
      ]
    },
    "scarcityCaution": "Das dünnste Element gerade jetzt ist {scarcest}. Was auch immer dieses Element regiert, ist der Bereich, in dem Sie am langsamsten handeln.",
    "elementBalance": "Nach Stärke führt {strongest} mit {strongestPct}% und {scarcest} folgt mit {scarcestPct}%. Dein Geburtsmonat liegt in {season}, was dieses Element erneut anhebt — die gleiche Menge hat unterschiedliche Kraft, je nachdem, ob die Saison es unterstützt. Was du jetzt brauchst, ist {favorable}, und die Dinge erleichtern sich, wo dieses Element gefüllt wird.",
    "todayHeadline": "Heute ist {grade}",
    "todayMessage": "Heute erzielt {score}, bewertet als {gradeName}. {gradeBody} Der Tagespfeiler ist {pillar}, und der größte Einfluss auf diese Punktzahl war „{topFactor}“.",
    "todayAdvice": {
      "HIGH": "Ein guter Tag, um die Nachricht oder das Aufräumen in Angriff zu nehmen, das du aufgeschoben hast — es ist jedoch besser, nicht zu versuchen, alles heute zu beenden.",
      "MID": "Mach es wie gewohnt, und du wirst das bekommen, was du gewohnt bist. Anstatt etwas Neues zu beginnen, bringe eine bereits in Arbeit befindliche Sache einen Schritt voran.",
      "LOW": "Ein Teil des heutigen Tages läuft gegen die Karte. Besser, die Zeit mit Beenden und Überprüfen zu verbringen, als etwas Neues zu beginnen."
    },
    "luckyNote": "Das heutige Glückselement ist {element}. Die {colors}-Reihe, die {direction}-Seite und die Stunden um {time} sind die Bereiche, in denen diese Energie am stärksten fließt.",
    "domains": {
      "wealth": "Aus dem Geburtshoroskop gelesen, kommt Geld zu {score}. Es wiegt, was man verdient, zusammen mit der Kraft, es zu tragen.",
      "love": "Aus dem Geburtshoroskop gelesen, kommt Zuneigung zu {score}. Es wiegt den Ehepartnerstern zusammen mit der Form des Platzes, auf dem er sitzt.",
      "career": "Aus dem Geburtshoroskop gelesen, kommt Arbeit zu {score}. Es wiegt, was du übernimmst, zusammen mit dem, was du herausgibst.",
      "health": "Aus dem Geburtshoroskop gelesen, kommt Gesundheit zu {score}. Es wiegt das Gleichgewicht, mit dem du geboren wurdest, zusammen mit dem, was darin kollidiert."
    },
    "yearOutlook": "Der Pfeiler dieses Jahres ist {pillar}, der {element} trägt. {relation} Diese Lesung betrachtet nur, wie der Pfeiler des Jahres das, was du jetzt brauchst, trifft; sie zerlegt das Jahr nicht Monat für Monat.",
    "yearRelations": {
      "YONGSIN": "Das Element, das du brauchst, kommt in diesem Jahr direkt zu dir. Eine passende Zeit, um das, was du beiseite gelegt hast, hervorzuheben.",
      "GENERATES": "In diesem Jahr wird das Element, das du brauchst, genährt, sodass der aktuelle Verlauf sanfter wird — nicht sofort, aber stetig.",
      "GISIN": "In diesem Jahr wird erneut in die Richtung gedrängt, in die du bereits geneigt bist. Es ist besser, das, was du in der Hand hast, abzuschließen, als etwas Neues zu beginnen.",
      "CONTROLS": "Etwas in diesem Jahr drückt auf das Element, das du brauchst, sodass Entscheidungen langsamer kommen. Eigene Fristen zu setzen hilft.",
      "NEUTRAL": "In diesem Jahr gibt es weder Konflikte noch Unterstützung für das, was du brauchst. Den Boden, den du hast, zu halten, ist der bessere Tausch."
    },
    "disclaimer": "Traditionelle myeongri Referenz, keine wissenschaftliche Vorhersage oder Aussage darüber, was geschehen muss.",
    "tenGodDepth": {
      "BIGYEON": {
        "thick": "Der Begleiter ist stark. Du baust mit deinen eigenen Händen, anstatt sie zu leihen, was dich stark macht, eine Aufgabe bis zum Ende zu tragen. Aber Hilfe anzunehmen ist auch eine Fähigkeit, und es als Schwäche zu betrachten, lässt dich die Dinge alleine schultern — und zu Konflikten über Anteile mit denen führen, die neben dir stehen. Wo die Arbeit geteilt wird, ist es der schnellere Weg, zuerst deine Hand anzubieten.",
        "absent": "Der Begleiter ist abwesend. Mit anderen zu agieren, passt dir besser, als deinen eigenen Boden zu halten. Du zögerst lange, wenn eine Entscheidung allein bei dir liegt, und gewinnst an Geschwindigkeit, sobald jemand mit dir dabei ist. Wenn eine Position zu halten ist, lohnt es sich, den Druck zu üben."
      },
      "GEOPJAE": {
        "thick": "Der Reichtum ist stark. Du bewegst dich zuerst, wo andere zögern. Diese Kraft lässt sich jedoch nicht leicht zum Halten umwandeln, sodass das, was du verdienst, nicht lange in der Hand bleibt. Im Voraus zu entscheiden, wohin das Geld geht, ist in diesem Chart keine Sparsamkeit — es ist Methode.",
        "absent": "Der Reichtum ist abwesend. Du zwingst selten etwas durch und umgehst Wettbewerbe. Du verlierst wenig, aber du bist einen Schlag zu spät, wenn etwas hart gedrückt werden muss. Wo die Einsätze real sind, hilft es, deine eigene Frist zu setzen."
      },
      "SIKSIN": {
        "thick": "Der Essensgott ist stark. Was innen ist, kommt leicht nach außen, sodass Machen, Wachsen und Füttern angenehmes Terrain sind. Du machst gute Arbeit, die langsam und lange erledigt wird, und Ergebnisse kommen spät, aber stetig. Wenn der Komfort jedoch anhält, neigst du dazu, dich niederzulassen, anstatt zu erweitern.",
        "absent": "Der Essensgott ist abwesend. Der Kanal von innen nach außen ist dünn: das Denken ist da, das Ausdrücken kommt spät. Zu warten, bis alles bereit ist, verschiebt den Start. Etwas halb Fertiges herauszugeben, ist in diesem Chart kein Verlust."
      },
      "SANGGWAN": {
        "thick": "Der Hurting Officer ist stark ausgeprägt. Du siehst, was in einem festen Rahmen nicht stimmt, bevor es jemand anderes tut, und du hast die Worte, um es zu benennen. Du leuchtest dort, wo Dinge geschaffen werden, und kollidierst dort, wo Dinge bewahrt werden. Wie das richtige Wort gesagt wird, ist hier ebenso wichtig wie das Sehen selbst.",
        "absent": "Der Hurting Officer ist abwesend. Du suchst nach einem Weg innerhalb eines Rahmens, anstatt ihn zu erschüttern. Du gerätst selten mit Menschen in Konflikt, aber du lässt Dinge geschehen, wo sie sich ändern sollten, und das führt zu Frustration. Es ist besser, das Wort, das gesagt werden muss, nicht aufzuschieben."
      },
      "PYEONJAE": {
        "thick": "Der Indirect Wealth ist stark ausgeprägt. Du hast in mehreren Bereichen deine Finger im Spiel und ergreifst Chancen weitreichend, sodass sich Dinge an unerwarteten Orten öffnen. Was verbreitet wird, muss jedoch auch gepflegt werden, und das interessiert dich weniger — daher scheiterst du immer wieder daran, das zu sammeln, was du eröffnet hast. Es ist notwendig, eins abzuschließen, bevor das nächste eröffnet wird.",
        "absent": "Der Indirect Wealth ist abwesend. Du nimmst das Sichere auf vertrautem Boden, anstatt weit zu streuen. Es gibt weniger, was dich erschüttert, und du siehst die größeren Chancen ebenso oft vorbeiziehen. Deinen Einfluss schrittweise um einen Handbreit zu erweitern, hilft."
      },
      "JEONGJAE": {
        "thick": "Der Direct Wealth ist stark ausgeprägt. Du zählst, was hereinkommt und was hinausgeht, und du baust auf — sodass der Boden unter dir mit der Zeit fester wird. Nur nach dem Sicherem zu greifen, macht dich spät zu Chancen, und übertriebene Sparsamkeit macht deine Hand schwer, wo sie sich öffnen sollte. Im Voraus zu entscheiden, wofür Geld gedacht ist, hilft.",
        "absent": "Der Direct Wealth ist abwesend. Die Seite des stetigen Ansammelns ist dünn, sodass das Management dessen, was ankommt, immer wieder aufgeschoben wird. Verdienen und Behalten sind unterschiedliche Fähigkeiten; dieses Chart muss die zweite separat lernen. Regeln, die Geld bewegen, ohne dass du jedes Mal entscheiden musst, passen gut zu dir."
      },
      "PYEONGWAN": {
        "thick": "Der Indirect Officer ist stark ausgeprägt. Druck bringt deine Stärke zum Vorschein, und du trägst Verantwortung, die andere als schwer empfinden. Wenn die Spannung jedoch nie nachlässt, verhärtet sie sich zu einem gejagten Gefühl, und Ruhe fühlt sich nicht wie Ruhe an. Einen Zeitpunkt zum Stoppen festzulegen, ist in diesem Chart keine Untätigkeit.",
        "absent": "Der Indirect Officer ist abwesend. Wenig drängt auf dich, was den Geist entlastet, aber die Fähigkeit, dich in einer Krise aufrecht zu halten, ist dünn. Du machst es viel besser, wenn eine Frist oder ein Versprechen von außen gesetzt wird."
      },
      "JEONGGWAN": {
        "thick": "Der Direct Officer ist stark ausgeprägt. Deine Position und die Linien, die du hältst, sind klar, und das Halten dieser ist, wo deine Beständigkeit herkommt — du baust Vertrauen innerhalb von Systemen auf. Wo die Regeln wanken, bist du langsam im Urteilen, und wo das Brett dir gehört, fühlst du dich eingeengt.",
        "absent": "Der Direct Officer ist abwesend. Eine von dir selbst geschaffene Art passt dir besser als ein von außen zugewiesener Platz. Das ist Freiheit, aber der Standard wackelt leicht; deine eigenen Regeln schriftlich festzuhalten, als wären sie Richtlinien, hilft."
      },
      "PYEONIN": {
        "thick": "Der Indirect Resource ist stark ausgeprägt. Du gehst den Weg, den andere überspringen, und baust eine eigene Tiefe auf. Das Lernen und Abwägen sind stark, aber der Gedanke überholt die Hand, und du kannst müde sein, bevor du beginnst. Mit halber Bereitschaft zu bewegen, passt zu diesem Chart.",
        "absent": "Der Indirect Resource ist abwesend. Du lernst, indem du auf Dinge triffst, anstatt dich einzugraben. Du bist nicht langsam im Lernen, aber das lange Alleinlernen passt dir nicht. Fragen an Menschen zu stellen und am Ort zu lernen, ist schneller."
      },
      "JEONGIN": {
        "thick": "Direkte Ressource läuft dick. Was dich stützt, ist reichlich, sodass Lernen und ein Ort zum Anlehnen nie ausgehen. Diese Beständigkeit lässt das Vorankommen spät erscheinen, und die Vorbereitung wird zum Grund, warum ein Start verschoben wird. Es ist lohnenswert, einen Platz zu haben, wo das, was du erhalten hast, wieder hinausgeht.",
        "absent": "Direkte Ressource ist abwesend. Du hast deinen eigenen Standpunkt geschaffen, sodass das Alleinstehen früh gewachsen ist. Hilfe zu bitten ist jedoch ungewohnt, und du hältst alleine durch, auch wenn du es nicht müsstest. In diesem Chart ist das Fragen von großem Wert."
      }
    },
    "natalFactors": {
      "WEALTH_STARS": "Wie viel Reichtum (財星) das Chart trägt — die Dicke dessen, was du handhabst und sammelst.",
      "WEALTH_STRONG_BODY": "Der Tagmeister läuft voll, sodass es Kraft gibt, Reichtum zu tragen.",
      "WEALTH_WEAK_BODY": "Der Tagmeister läuft dünn, sodass es schwer ist, Reichtum zu tragen, selbst wenn er existiert.",
      "WEALTH_YONGSIN": "Was du jetzt brauchst, ist dasselbe Element wie die Reichtumssterne, sodass dieser Boden leichter kommt.",
      "LOVE_SPOUSE_STAR": "Wie viel vom Ehepartnerstern das Chart trägt — direkter Reichtum für Männer, direkter Beamter für Frauen.",
      "LOVE_SPOUSE_PALACE": "Der Ehepartnerstern sitzt in deinem Tageszweig, dem Ehepartnerpalast, sodass der Platz gefüllt ist.",
      "LOVE_PALACE_CHUNG": "Der Ehepartnerpalast kollidiert mit einem anderen Zweig, sodass dieser Platz unruhig ist.",
      "LOVE_GENDER_UNKNOWN": "Es wurde kein Geschlecht eingegeben, sodass der Ehepartnerstern nicht gezählt wurde. Der Wert teilt sich zwischen Reichtum und Beamtensternen nach Geschlecht, und wir wählen nicht willkürlich aus.",
      "CAREER_OFFICER": "Die Beamtensterne (正官·偏官) im Chart — die Dicke dessen, was du übernimmst und behältst.",
      "CAREER_OUTPUT": "Die Ausgabesterne (食神·傷官) im Chart — die Dicke dessen, was du herausgibst und ausdrückst.",
      "CAREER_STRONG_BODY": "Der Tagmeister ist stark, daher nutzt er die Offizierssterne, anstatt von ihnen gedrückt zu werden.",
      "HEALTH_BALANCE": "Wie gleichmäßig die fünf Elemente verteilt sind — je mehr es in eine Richtung kippt, desto mehr Belastung fällt auf das, was dieses Element regiert.",
      "HEALTH_CHUNG": "Wie viele Zweigpaare innerhalb des Charts miteinander kollidieren.",
      "HEALTH_EXTREME_BODY": "Der Tagmeister neigt stark zu einer Seite, was an sich schon eine Belastung ist. Ein ausgeglichener Tagmeister verliert hier nichts."
    },
    "yongsinDepth": {
      "STRONG": "Die Elemente, die deinen Tagesherrscher unterstützen, sind stark. Das gibt dir eigenen Antrieb, neigt sich aber leicht zur einen Seite, sodass du jetzt nicht mehr Unterstützung brauchst — sondern etwas, um den Überschuss abzuleiten. {favorable} erfüllt diese Aufgabe. Wo dieses Element wirkt — ausgeben, annehmen, sammeln — dort findest du deinen Platz.",
      "BALANCED": "Was deinen Tagesherrscher unterstützt und was davon abzieht, ist nahezu gleich. Zu nah beieinander, um eine Seite zu bestimmen, daher lesen wir hier das, was am dünnsten ist, als das, was du brauchst: {favorable}. Ein Chart, das sich nicht neigt, passt sich gut an, verwischt aber seine eigene Linie, sodass es besser ist, in die dünne Richtung zu steuern.",
      "WEAK": "Die Elemente, die deinen Tagesherrscher unterstützen, sind schwach. Du leihst dir gut Kraft von deiner Umgebung, aber es ist anstrengend, alleine durchzuhalten, sodass du jetzt etwas brauchst, das dich unterstützt und auffüllt. {favorable} erfüllt diese Aufgabe. Unterstützende Dinge in der Nähe zu haben, ist in diesem Chart keine Schwäche — es ist die Methode."
    }
  },
  "footer": {
    "privacy": "Datenschutz",
    "terms": "AGB",
    "refund": "Erstattung",
    "pricing": "Preise",
    "legalEntity": "Firma",
    "representative": "Vertretung",
    "businessNumber": "Geschäfts-Nr.",
    "mailOrderNumber": "Onlinehandel",
    "address": "Adresse",
    "customerCenter": "Kundendienst",
    "email": "E-Mail",
    "privacyOfficer": "Datenschutz",
    "hostingProvider": "Hosting",
    "providedBy": "Bereitgestellt von",
    "effective": "Gültig ab",
    "backHome": "Zur Startseite"
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
