import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Deutsch — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const DE_DOCS = {
  "about": {
    "eyebrow": "Über",
    "title": "Über Naming-Link",
    "summary": "Wir helfen Ihnen, koreanische Namen auszuwählen und zu verstehen. Hier ist, worauf wir unsere Ergebnisse stützen und was wir absichtlich nicht tun.",
    "backLabel": "Startseite",
    "sections": [
      {
        "title": "Was wir tun",
        "blocks": [
          {
            "p": "Naming-Link hilft Ihnen, **koreanische Namen auszuwählen und zu verstehen** — die Hanja hinter dem Namen eines Kindes, einen koreanischen Namen für das Ausland, eine Hangul-Schreibung Ihres eigenen Namens und Erinnerungsstücke wie einen Stempel oder einen gedruckten Bericht."
          },
          {
            "p": "Die Ergebnisse zu sehen ist **kostenlos und erfordert kein Konto.** Bezahlte Artikel verkaufen niemals das, was der Bildschirm bereits angezeigt hat: Sie öffnen weitere Kandidaten, fügen schriftliche Analysen hinzu oder verwandeln das Ergebnis in etwas, das Sie behalten können."
          }
        ]
      },
      {
        "title": "Worauf unsere Antworten basieren",
        "blocks": [
          {
            "p": "Hanja stammen aus der **offiziellen Hanja-Tabelle für Namen des Obersten Gerichtshofs von Korea.** Jedes Zeichen hat eine feste Lesung für die Verwendung in Namen, und Zeichen außerhalb der Tabelle können nicht registriert werden. Wir fügen dieser Liste nichts hinzu oder wählen keine Favoriten."
          },
          {
            "p": "Saju und Fünf-Elemente-Zahlen werden aus dem **koreanischen lunisolaren Almanach** berechnet, wobei die Geburtszeit auf die wahre Sonnenzeit des Geburtsortes korrigiert wird. Die Lesung ist ein traditioneller Referenzwert, keine Vorhersage."
          },
          {
            "p": "Die schriftlichen Erklärungen werden von KI erstellt. Um zu verhindern, dass sie **Dinge erfindet**, erhält das Modell nur Ihre Eingaben und unsere eigenen Referenzdaten und wird angewiesen, sich daran zu halten. Die Anleitungen erklären dies im Detail."
          }
        ]
      },
      {
        "title": "Was wir nicht tun",
        "blocks": [
          {
            "ul": [
              "**Wir sagen keine Zukunft voraus.** Nichts hier verspricht Glück, Reichtum oder Schutz.",
              "**Wir speichern Ihren Namen nicht.** Kostenlose Ergebnisse werden niemals auf unseren Servern gespeichert, und bezahlte Dokumente werden ohne Kopie der Datei geliefert.",
              "**Bezahlen kauft keine bessere Antwort.** Das Freischalten mit einer Anzeige und das Freischalten mit einer Zahlung bieten genau denselben Inhalt."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Der Service ist in 23 Sprachen verfügbar. Bezahlte PDFs werden in Englisch für Arabisch und Khmer ausgegeben — der PDF-Renderer unterstützt diese Schriftarten nicht — und wir weisen darauf hin, bevor Sie bezahlen."
          }
        ]
      },
      {
        "title": "Kontakt",
        "blocks": [
          {
            "p": "Unternehmensdetails und wie Sie uns erreichen können, finden Sie auf der [Kontaktseite](/contact), einschließlich Rückerstattungen, Datenschutzanfragen und Fehlerberichten."
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "Lesungen",
    "title": "Festgelegte Lesungen — eine Aussprache pro Zeichen",
    "summary": "Die offizielle Tabelle listet nicht nur Zeichen auf. Sie legt auch fest, wie jedes Zeichen gelesen wird, wenn es in einem Namen verwendet wird.",
    "backLabel": "Nutzungsanleitung",
    "sections": [
      {
        "title": "Eine feste Lesung für jedes Zeichen",
        "blocks": [
          {
            "p": "Die Hanja-Tabelle für Namen entscheidet nicht nur, welche Zeichen verwendet werden dürfen. **Sie legt auch fest, wie jedes Zeichen gelesen wird, wenn es in einem Namen erscheint.** Diese feste Lesung ist die Grundlage für die Registrierung."
          },
          {
            "p": "Die meisten Hanja haben mehrere mögliche Lesungen. Ein Name wird jedoch auf Dokumenten geschrieben und laut ausgesprochen, sodass er genau eine Lesung benötigt. Daher weist die Tabelle jedem Zeichen seine Lesung für die Verwendung in Namen zu, und keine andere Lesung kann registriert werden."
          }
        ]
      },
      {
        "title": "Deshalb kommt der Klang zuerst",
        "blocks": [
          {
            "p": "Deshalb fixiert Naming-Link den Klang, bevor nach Hanja gesucht wird. Wenn der Name \"지은\" ist, kann die Bedeutung nur aus Zeichen gewählt werden, die die Lesung **지** und Zeichen, die die Lesung **은** zugewiesen bekommen haben."
          },
          {
            "p": "Wie gut eine Bedeutung auch sein mag, ein Zeichen, dessen Lesung nicht übereinstimmt, kann für diesen Namen nicht verwendet werden. Wir ändern auch niemals den Klang eines Namens, um zu einem Zeichen zu passen — ein Name wird ein Leben lang ausgesprochen, und der Klang wird zuerst festgelegt, gefolgt von den Hanja."
          }
        ]
      },
      {
        "title": "Familiennamen sind von dieser Tabelle ausgeschlossen",
        "blocks": [
          {
            "p": "Das wird oft missverstanden. **Die Tabelle regelt den Vornamen, nicht den Familiennamen.** Ein Familienname folgt dem, was bereits im Familienregister steht, sodass einige Menschen tatsächlich Zeichen verwenden, die nicht in der Hanja-Tabelle für Namen enthalten sind."
          },
          {
            "p": "Deshalb behandelt Naming-Link die Hanja für Nachnamen anders. Wir helfen Ihnen nur, einen Nachnamen zu finden, und lassen ein Feld für die direkte Eingabe eines Nachnamens für Personen, deren Zeichen außerhalb der Tabelle liegen. Zweisilbige Nachnamen wie Namgung und Seonwoo werden auf die gleiche Weise eingegeben."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Wie es funktioniert",
    "title": "Wie wir Ihren Namen in Hangul schreiben",
    "summary": "Wie wir die Klänge auswählen, wenn wir einen ausländischen Namen in Hangul schreiben, und warum wir keine Hanja anhängen.",
    "backLabel": "Nutzungsanleitung",
    "sections": [
      {
        "title": "Wir übertragen den Klang, nicht die Bedeutung",
        "blocks": [
          {
            "p": "Dieser Service schreibt **Ihren Namen** in Hangul. Er gibt Ihnen keinen koreanischen Namen. Michael wird zu 마이클 — derselbe Name, so geschrieben, dass Koreaner ihn lesen und aussprechen können. Wir tauschen ihn nicht gegen einen koreanischen Namen aus, der zufällig eine ähnliche Bedeutung hat."
          },
          {
            "p": "Wenn ein koreanischer Name das ist, was Sie wollen, **ist das ein anderer Service.** Der eine behält Ihren Namen und ändert nur die Schrift; der andere schlägt einen neuen Namen vor."
          }
        ]
      },
      {
        "title": "Koreanisch hat keine Klänge",
        "blocks": [
          {
            "p": "Jede Sprache hat Klänge, die das Koreanische nicht hat — f, v, z, th und Vokalunterscheidungen, die das Koreanische nicht macht. Für diese schreiben wir, was **ein koreanischer Sprecher tatsächlich sagt**, wenn er Ihren Namen laut liest, anstatt die ursprüngliche Phonetik Zeichen für Zeichen zu transkribieren. Das Ziel ist die Schreibweise, die verwendet wird, nicht die technisch treueste."
          },
          {
            "p": "Die gleiche Schreibweise kann je nach Herkunft eines Namens unterschiedlich sein, daher fragen wir nach Ihrer Sprache und Ihrem Land und arbeiten von dieser Aussprache aus."
          }
        ]
      },
      {
        "title": "Mehrere Schreibweisen, nebeneinander",
        "blocks": [
          {
            "p": "Es gibt keine einzige richtige Antwort. Die Schreibweise, die dem ursprünglichen Klang am nächsten kommt, die, die in Korea am häufigsten verwendet wird, und die, die am einfachsten zu schreiben ist, sind oft drei verschiedene Dinge. Daher zeigen wir sie zusammen und erklären, was sie unterscheidet."
          },
          {
            "p": "Wenn keine von ihnen richtig erscheint, können Sie einen Hinweis auf den gewünschten Klang hinzufügen und es erneut ausführen — zum Beispiel, dass eine bestimmte Silbe anders geschrieben werden sollte."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hier gibt es keine Hanja",
        "blocks": [
          {
            "p": "Wir fügen einer Transliteration keine Hanja hinzu. Hanja tragen Bedeutung, und dieser Fluss dreht sich um den Klang. Nur Zeichen zu Klang zuzuordnen, kann dazu führen, dass Sie eine Bedeutung erhalten, um die Sie nie gebeten haben."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Wie es funktioniert",
    "title": "Wie wir einen koreanischen Namen erstellen",
    "summary": "Wir wählen aus existierenden Nachnamen aus, wägen ab, wie leicht der Name gesagt und geschrieben werden kann, und fragen, wofür der Name gedacht ist.",
    "backLabel": "Nutzungsanleitung",
    "sections": [
      {
        "title": "Wir beginnen mit dem Familiennamen",
        "blocks": [
          {
            "p": "In Korea kommt der Familienname zuerst, und im Gegensatz zu Vornamen wird er nicht frei erfunden — man erbt ihn. Daher schlagen wir nur Nachnamen vor, die koreanische Menschen tatsächlich haben. Unser Standardpool sind die **20 häufigsten Nachnamen**, die zusammen etwa 80 % der Bevölkerung abdecken."
          },
          {
            "p": "Wenn Ihr eigener Nachname zufällig mit einem echten koreanischen Namen übereinstimmt — Wang mit 왕, Ye mit 예 — setzen wir diesen zuerst. Eine Verbindung zu Ihrem ursprünglichen Namen aufrechtzuerhalten, ist mehr wert als ein zufällig gewählter Nachname."
          },
          {
            "p": "Sie können einen Nachnamen selbst auswählen oder uns empfehlen lassen. In jedem Fall wird es **ein existierender Nachname** sein."
          }
        ]
      },
      {
        "title": "Einfach auszusprechen, einfach zu schreiben",
        "blocks": [
          {
            "p": "Dies ist ein Name, den die Menschen in Korea tatsächlich verwenden werden, daher prüfen wir zuerst, ob ein Koreaner ihn einmal hören und aufschreiben kann. Ein Name, der jedes Mal buchstabiert werden muss, ist eine Last, die Sie tragen, nicht wir."
          },
          {
            "p": "Die Bedeutung ist ebenfalls wichtig. Koreanische Vornamen tragen normalerweise eine, daher sagen wir Ihnen, wie der Name gelesen wird und warum wir ihn ausgewählt haben — nicht nur den Namen selbst."
          }
        ]
      },
      {
        "title": "Wir fragen, wofür der Name gedacht ist",
        "blocks": [
          {
            "p": "Ein Name für Universitätsunterlagen ist nicht dasselbe wie ein Name, den Freunde über einen Raum hinweg rufen, oder ein Handle, den Sie online verwenden werden. Wir fragen, wie Sie ihn verwenden möchten, und berücksichtigen das."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dies ist keine Transliteration",
        "blocks": [
          {
            "p": "Hier schlagen wir einen **neuen koreanischen Namen vor**. Wenn Sie möchten, dass Ihr bestehender Name in Hangul geschrieben wird — Michael als 마이클 — sehen Sie sich die [Hangul-Schreibanleitung](/guide/how-hangul-transliteration) an."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Hinweise",
    "title": "Hinweise",
    "summary": "Wo wir Änderungen ankündigen, die sich auf die Nutzung des Dienstes auswirken.",
    "backLabel": "Startseite",
    "sections": []
  },
  "contact": {
    "eyebrow": "Kontakt",
    "title": "Kontaktieren Sie uns",
    "summary": "Wie Sie uns für Fragen, Rückerstattungen, Datenschutzanfragen und Fehlerberichte erreichen können, mit unseren Unternehmensdetails.",
    "backLabel": "Startseite",
    "sections": [
      {
        "title": "E-Mail uns",
        "blocks": [
          {
            "p": "Schreiben Sie an **{email}**. Wir antworten innerhalb von zwei Werktagen. Für alles, was eine Bestellung betrifft — Zahlung, Rückerstattung, eine Datei, die Sie nicht erhalten haben — geben Sie bitte Ihre **Bestellnummer oder die E-Mail, mit der Sie bezahlt haben** an."
          },
          {
            "p": "Telefonanfragen: {customerCenter} (koreanische Geschäftszeiten)."
          }
        ]
      },
      {
        "title": "Was hier gesendet werden soll",
        "blocks": [
          {
            "ul": [
              "**Zahlungen und Rückerstattungen** — Wenn ein Dokument nie erstellt wurde oder der berechnete Betrag von Ihrer Bestellung abweicht, erstatten wir den vollen Betrag. Siehe die [Rückerstattungsrichtlinie](/refund-policy).",
              "**Datenschutz** — Anfragen zum Zugriff, zur Berichtigung oder zur Löschung Ihrer Daten. Siehe die [Datenschutzrichtlinie](/privacy).",
              "**Korrekturen** — Wenn eine Hanja-Bedeutung, Lesung oder Berechnung falsch aussieht, lassen Sie es uns wissen. Zu erwähnen, auf welchem Bildschirm und was Sie eingegeben haben, hilft sehr.",
              "**Sonstiges** — Partnerschaften und Presse gehen an die gleiche Adresse."
            ]
          }
        ]
      },
      {
        "title": "Unternehmensdetails",
        "blocks": [
          {
            "ul": [
              "**Rechtsträger** — {companyName}",
              "**Vertreter** — {representative}",
              "**Geschäftsregistrierungsnummer** — {businessNumber}",
              "**Versandhandelsnummer** — {mailOrderNumber}",
              "**Adresse** — {address}",
              "**Kundenservice** — {customerCenter}",
              "**E-Mail** — {email}",
              "**Datenschutzbeauftragter** — {privacyOfficer}",
              "**Hosting-Anbieter** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Sie müssen keinen Namen oder Geburtsdatum in Ihre Nachricht aufnehmen. Kostenlose Ergebnisse werden niemals auf unseren Servern gespeichert, daher können wir sie nicht erneut abrufen — eine Bestellnummer reicht aus."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "Bräuche",
    "title": "Traditionell vermiedene Zeichen",
    "summary": "Es ist nicht gesetzlich verboten, sondern eine Gewohnheit. Wir haben darüber geschrieben, was vermieden wurde und warum, und wie wir damit umgehen.",
    "backLabel": "Nutzungsanleitung",
    "sections": [
      {
        "title": "Rechtlich akzeptable Zeichen",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} Zeichen",
                "label": "Zusammengefasste vermiedene Zeichen"
              },
              {
                "value": "{avoidCommonlyUsed} Zeichen",
                "label": "Darunter Zeichen, die immer noch häufig verwendet werden"
              }
            ]
          },
          {
            "p": "Es gibt Zeichen, die in der Liste der Zeichen für persönliche Namen enthalten sind und **rechtlich akzeptabel sind**, aber als ungeeignet für Namen gelten."
          },
          {
            "p": "Der zugrunde liegende Gedanke ist, dass **\"übermäßige Bedeutung tatsächlich unerwünscht ist.\"** Dazu gehören Zeichen, die als zu kostbar angesehen werden (珍·寶), Zeichen, die als zu stark angesehen werden (王·帝), und solche, die als zu groß angesehen werden, um von einer Person verkörpert zu werden, wie Himmel oder Gottheiten. Dies spiegelt ein altes Gefühl der Zurückhaltung wider, das glaubt, dass ein Name die Person überstrahlen kann."
          },
          {
            "p": "**Diese Zeichen sind jedoch nicht unbrauchbar.** Es handelt sich nicht um ein gesetzliches Verbot, sondern um eine Gewohnheit, und Bräuche variieren je nach Region, Familie und Generation und können sich im Laufe der Zeit ändern."
          },
          {
            "p": "Tatsächlich sind unter den {avoidTotal} Zeichen, die wir zusammengestellt haben, {avoidCommonlyUsed} immer noch häufig in Namen verwendet. Die Tatsache, dass sie als vermieden bekannt sind, aber dennoch weit verbreitet verwendet werden, deutet darauf hin, dass diese Gewohnheit nicht absolut ist."
          }
        ]
      },
      {
        "title": "Welche Kategorien gibt es?",
        "blocks": [
          {
            "p": "Die derzeit zusammengestellten Zeichen sind in sieben Kategorien unterteilt."
          },
          {
            "ul": [
              "**Schätze und Objekte** — Zeichen, die direkt auf Reichtum oder Gegenstände verweisen",
              "**Himmel und Natur** — Dinge wie Sonne, Mond und Himmel, die als zu groß angesehen werden, um von einer Person verkörpert zu werden",
              "**Könige und Adel** — Zeichen, die Status bedeuten, wie König oder Kaiser",
              "**Göttliche Wesen** — Zeichen, die auf heilige Bereiche verweisen, wie Götter oder Geister",
              "**Jahreszeiten und andere** — Zeichen, die an bestimmte Zeiten oder Zustände gebunden sind",
              "**Tiere** — Tiere, die als energetisch stark angesehen werden, wie Drachen oder Tiger",
              "**Übermaß** — Zeichen, die als übermäßig große oder überfließende Bedeutungen angesehen werden"
            ]
          }
        ]
      },
      {
        "title": "Sie können Zeichen selbst hinzufügen oder entfernen",
        "blocks": [
          {
            "p": "Wir löschen diese Zeichen nicht willkürlich. **Wir haben zwei Optionen auf dem Eingabebildschirm bereitgestellt, damit der Namensgeber wählen kann, wie er damit umgehen möchte.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Verfügbare Optionen auf dem Eingabebildschirm",
        "blocks": [
          {
            "p": "**Vermiedene Zeichen von den Kandidaten ausschließen** — Wenn aktiviert, werden sie vollständig ausgeschlossen. Wenn deaktiviert, bleiben sie in den Ergebnissen mit einem \"Traditionell vermieden\"-Label und dem angehängten Grund."
          },
          {
            "p": "**Sogar häufig verwendete Zeichen ausschließen** — Dies schließt Zeichen aus, die auf der Vermeidungsliste stehen, aber tatsächlich weit verbreitet sind (圭·琳·玲·元·太·星·海 usw.). Wenn aktiviert, werden die Kandidaten erheblich reduziert."
          },
          {
            "p": "Der Standard ist, **nicht auszuschließen, sondern nur anzuzeigen.** Wenn sie stillschweigend von der Liste entfernt werden, könnte es für diejenigen, die dieses Zeichen verwenden möchten, so erscheinen, als ob es nicht existiert."
          }
        ]
      },
      {
        "title": "Sicherstellen, dass Optionen nicht verschwinden",
        "blocks": [
          {
            "p": "Wenn für diese Silbe keine verwendbaren Zeichen mehr übrig sind, heben wir den Ausschluss für diese Silbe auf und zeigen Kandidaten an. Wir glauben, dass es besser ist, als überhaupt keine Optionen zu haben."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Service-Basis",
    "title": "Was ist die Grundlage für die globale Namensumwandlung?",
    "summary": "Wir bieten Kandidaten aus fünf Perspektiven an, wobei die Schriftsysteme jeder Sprache beibehalten und nur existierende Namen verwendet werden.",
    "backLabel": "Nutzungsanleitung",
    "sections": [
      {
        "title": "Kandidaten werden aus fünf Perspektiven bereitgestellt",
        "blocks": [
          {
            "p": "Es gibt nicht nur einen Weg, einen Namen in eine andere Sprache zu übersetzen. Je nachdem, ob der Klang oder die Bedeutung bewahrt werden soll, ob ein natürlicher Name im lokalen Kontext gewählt oder die Individualität priorisiert werden soll, werden die Antworten unterschiedlich sein. Daher bieten wir anstelle einer Option **eine aus jeder der fünf verschiedenen Perspektiven** an."
          },
          {
            "ul": [
              "**Option zur Klangbewahrung** — Bewahrt den Klang des ursprünglichen Namens so gut wie möglich",
              "**Option zur Bedeutungsübersetzung** — Übersetzt die im Namen enthaltene Bedeutung in den Namen dieser Sprache",
              "**Option zur Klang- und Bedeutungs-Kompromiss** — Nimmt jeweils die Hälfte",
              "**Option zur lokalen Authentizität** — Wählt Namen, die in diesem kulturellen Kontext tatsächlich häufig verwendet werden",
              "**Option für Individualität und Branding** — Priorisiert Namen, die einprägsam und unverwechselbar sind"
            ]
          },
          {
            "p": "Fünf Optionen werden garantiert bereitgestellt. Da die Vorlieben von Person zu Person variieren, glauben wir, dass es besser ist, Wahlmöglichkeiten zuzulassen, als eine als die richtige Antwort zu präsentieren."
          }
        ]
      },
      {
        "title": "Jede Sprache hat unterschiedliche Regeln für das Schriftsystem",
        "blocks": [
          {
            "p": "Beim Übersetzen in eine Sprache, die keine lateinischen Buchstaben verwendet, muss sie in der Schrift dieser Sprache geschrieben werden. Für Japanisch wären es Kana und Kanji; für Russisch, Mongolisch und Kasachisch wäre es Kyrillisch; für Arabisch wäre es arabische Schrift; und für Thailändisch, Khmer und Hindi wären es ihre jeweiligen Schriften. Wenn Sie es in lateinischen Buchstaben schreiben und es einen \"japanischen Namen\" nennen, kann es in diesem Land nicht verwendet werden."
          },
          {
            "p": "Daher haben wir separate Regeln für das Schriftsystem jeder Sprache, und der Server überprüft noch einmal, um sicherzustellen, dass die Ergebnisse in diesem Schriftsystem vorliegen. Fehler wie das Auslassen von Nachnamen oder das Mischen von Hangul werden hier herausgefiltert."
          }
        ]
      },
      {
        "title": "Wir verwenden Namen, die tatsächlich verwendet werden",
        "blocks": [
          {
            "p": "Um zu vermeiden, dass Namen erstellt werden, die plausibel klingen, aber in diesem Land nicht existieren, basieren wir unsere Optionen auf existierenden Namen. Namen werden in Dokumenten und Einführungen verwendet, sodass, wenn eine lokale Person denkt, \"so einen Namen gibt es nicht\", er nicht verwendet werden kann."
          }
        ]
      },
      {
        "title": "Wir trennen Auswahl und Beschreibung",
        "blocks": [
          {
            "p": "Wir behandeln die Aufgabe, fünf Kandidaten zu bestimmen, getrennt von der Aufgabe, jeden Kandidaten im Detail zu beschreiben. Da die Beschreibung viel Zeit in Anspruch nimmt, trennen wir diesen Teil, um ihn gleichzeitig zu erstellen."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Warum wurde das geändert?",
        "blocks": [
          {
            "p": "Ursprünglich haben wir die fünf Perspektiven separat erstellt. Es war schneller, aber **die Anzahl der Kandidaten variierte jedes Mal.** Als jede Person Kandidaten auswählte, gab es Überschneidungen oder Diskrepanzen, und wenn einer fehlschlug, verschwand dieser Kandidat vollständig, sodass nur zwei oder drei anstelle von fünf übrig blieben."
          },
          {
            "p": "Jetzt, da wir die Kandidatenset und die Perspektivverteilung auf einmal bestimmen, **ist die Anzahl festgelegt.** Selbst wenn eine Beschreibung fehlschlägt, bleiben die Kandidaten bestehen und werden mit kurzen Informationen präsentiert. Wir glauben, dass es besser ist, konsequent die gleiche Anzahl zu haben, auch wenn es etwas länger dauert."
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
    "policy": "Richtlinien·Bestimmungen",
    "support": "Unterstützung"
  },
  "intro": "Änderungen Ihrer Nutzungsbedingungen — Preise, Richtlinien — werden hier veröffentlicht, bevor sie in Kraft treten. Interne Verbesserungen werden nicht aufgeführt: Was hier erscheint, ist das, was Sie wissen müssen.",
  "empty": {
    "title": "Noch keine Hinweise",
    "body": "Wenn sich etwas ändert, wird es hier erscheinen."
  },
  "effective": "Gilt ab {date}",
  "pager": {
    "label": "Hinweisseiten",
    "newer": "← Neuer",
    "older": "Älter →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Kontakt- und Über-Seiten sind jetzt geöffnet",
      "body": [
        "Fragen, Rückerstattungen, Datenschutzanfragen und Fehlerberichte haben jetzt einen Ort, an den sie gehen können. Die Kontaktseite im Footer listet unsere E-Mail und Unternehmensdetails.",
        "Worauf unsere Antworten basieren und was wir absichtlich nicht tun, steht auf der Über-Seite."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF-Berichte werden in Englisch für Arabisch und Khmer ausgegeben",
      "body": [
        "Wenn Sie den Dienst auf Arabisch oder Khmer nutzen, wird das PDF, das Sie kaufen, in Englisch erstellt. Das Tool, das unsere Dokumente layoutet, kann diese beiden Schriftarten noch nicht in Absätzen setzen.",
        "Der Bildschirm bleibt in Ihrer Sprache, und Ihr Name wird in Ihrer eigenen Schrift im Dokument gedruckt.",
        "Der gleiche Hinweis erscheint vor der Zahlung. Wenn das Tool diese Schriftarten unterstützt, werden wir das hier bekannt geben."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Zahlungen sind noch nicht geöffnet",
      "body": [
        "Einen Namen zu erstellen und das Ergebnis zu lesen, ist heute kostenlos, und es ist kein Konto erforderlich.",
        "Bezahlte Artikel sind noch nicht im Verkauf. Die auf der Preisseite angegebenen Beträge sind die, die gelten werden, sobald der Verkauf beginnt."
      ]
    }
  }
} satisfies NoticeCopy;
