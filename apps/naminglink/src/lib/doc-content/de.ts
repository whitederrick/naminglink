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
            "p": "Naming-Link hilft Ihnen, **koreanische Namen auszuwählen und zu verstehen** — die hanja hinter einem Kindsnamen, einen koreanischen Namen für den Auslandseinsatz, eine Hangul-Schreibung Ihres eigenen Namens und Andenken wie einen Stempel oder einen gedruckten Bericht."
          },
          {
            "p": "Die Ergebnisse zu sehen ist **kostenlos und benötigt kein Konto.** Bezahlte Artikel verkaufen niemals, was der Bildschirm bereits angezeigt hat: sie öffnen mehr Kandidaten, fügen schriftliche Analysen hinzu oder verwandeln das Ergebnis in etwas, das Sie behalten können."
          }
        ]
      },
      {
        "title": "Worauf unsere Antworten basieren",
        "blocks": [
          {
            "p": "Hanja stammen aus der **offiziellen Hanja-Tabelle der Supreme Court of Korea.** Jedes Zeichen hat eine festgelegte Lesung für die Verwendung in Namen, und Zeichen außerhalb der Tabelle können nicht registriert werden. Wir fügen dieser Liste nichts hinzu oder wählen keine Favoriten."
          },
          {
            "p": "Saju und Figuren der fünf Elemente werden aus dem **koreanischen lunisolaren Almanach** berechnet, wobei die Geburtszeit auf die wahre Sonnenzeit für den Geburtsort korrigiert wird. Die Lesung ist ein traditioneller Bezug, keine Vorhersage."
          },
          {
            "p": "Die schriftlichen Erklärungen werden von KI erstellt. Um zu verhindern, dass sie **Dinge erfindet**, erhält das Modell nur Ihre Eingaben und unsere eigenen Referenzdaten und wird angewiesen, sich daran zu halten. Die Leitfäden erklären dies im Detail."
          }
        ]
      },
      {
        "title": "Was wir nicht tun",
        "blocks": [
          {
            "ul": [
              "**Wir sagen keine Zukunft voraus.** Nichts hier verspricht Glück, Reichtum oder Schutz.",
              "**Wir speichern Ihren Namen nicht.** Kostenlose Ergebnisse werden niemals auf unseren Servern gespeichert, und bezahlte Dokumente werden ohne eine Kopie der Datei geliefert.",
              "**Bezahlen kauft keine bessere Antwort.** Das Freischalten mit einer Werbung und das Freischalten mit einer Zahlung bieten genau denselben Inhalt."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Der Dienst ist in 23 Sprachen verfügbar. Bezahlte PDFs werden in Englisch für Arabisch und Khmer ausgegeben — der PDF-Renderer unterstützt diese Schriften nicht — und wir weisen darauf hin, bevor Sie bezahlen."
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
    "title": "Feste Lesungen — eine Aussprache pro Zeichen",
    "summary": "Die offizielle Tabelle listet nicht nur Zeichen auf. Sie legt auch fest, wie jedes Zeichen gelesen wird, wenn es in einem Namen verwendet wird.",
    "backLabel": "Leitfaden",
    "sections": [
      {
        "title": "Eine feste Lesung für jedes Zeichen",
        "blocks": [
          {
            "p": "Die Hanja-Tabelle entscheidet nicht nur, welche Zeichen verwendet werden dürfen. **Sie legt auch fest, wie jedes Zeichen gelesen wird, wenn es in einem Namen erscheint.** Diese feste Lesung ist die Grundlage für die Registrierung."
          },
          {
            "p": "Die meisten Hanja haben mehrere mögliche Lesungen. Ein Name wird jedoch auf Dokumenten geschrieben und laut ausgesprochen, sodass er genau eine Lesung benötigt. Die Tabelle weist daher jedem Zeichen seine Lesung für die Verwendung in Namen zu, und keine andere Lesung kann registriert werden."
          }
        ]
      },
      {
        "title": "Deshalb kommt der Klang zuerst",
        "blocks": [
          {
            "p": "Deshalb legt Naming-Link den Klang fest, bevor nach Hanja gesucht wird. Wenn der Name \"지은\" ist, kann die Bedeutung nur aus Zeichen gewählt werden, die die Lesung **지** und Zeichen, die die Lesung **은** zugewiesen bekommen haben."
          },
          {
            "p": "So gut eine Bedeutung auch sein mag, ein Zeichen, dessen Lesung nicht übereinstimmt, kann für diesen Namen nicht verwendet werden. Wir ändern auch niemals den Klang eines Namens, um zu einem Zeichen zu passen — ein Name wird ein Leben lang ausgesprochen, und der Klang wird zuerst festgelegt, gefolgt von den Hanja."
          }
        ]
      },
      {
        "title": "Familiennamen sind außerhalb dieser Tabelle",
        "blocks": [
          {
            "p": "Das wird oft missverstanden. **Die Tabelle regelt den Vornamen, nicht den Familiennamen.** Ein Familienname folgt dem, was bereits im Familienregister steht, sodass einige Menschen Zeichen verwenden, die nicht in der Hanja-Tabelle stehen."
          },
          {
            "p": "Deshalb behandelt Naming-Link Hanja für Nachnamen anders. Wir helfen Ihnen nur, einen Nachnamen zu finden, und lassen ein Feld für die direkte Eingabe eines Nachnamens frei, für Menschen, deren Zeichen außerhalb der Tabelle liegen. Zweisilbige Nachnamen wie Namgung und Seonwoo werden auf die gleiche Weise eingegeben."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Wie es funktioniert",
    "title": "Wie wir Ihren Namen in Hangul schreiben",
    "summary": "Wie wir die Klänge wählen, wenn wir einen ausländischen Namen in Hangul schreiben, und warum wir keine Hanja anhängen.",
    "backLabel": "Leitfaden",
    "sections": [
      {
        "title": "Wir tragen den Klang, nicht die Bedeutung",
        "blocks": [
          {
            "p": "Dieser Dienst schreibt **Ihren Namen** in Hangul. Er gibt Ihnen keinen koreanischen Namen. Michael wird zu 마이클 — derselbe Name, so geschrieben, dass Koreaner ihn lesen und aussprechen können. Wir tauschen ihn nicht gegen einen koreanischen Namen aus, der zufällig eine ähnliche Bedeutung hat."
          },
          {
            "p": "Wenn ein koreanischer Name das ist, was Sie wollen, **ist das ein anderer Dienst.** Der eine behält Ihren Namen und ändert nur die Schrift; der andere schlägt einen neuen Namen vor."
          }
        ]
      },
      {
        "title": "Koreanische Laute, die es nicht gibt",
        "blocks": [
          {
            "p": "Jede Sprache hat Laute, die Koreanisch fehlen — f, v, z, th und Vokaldifferenzierungen, die Koreanisch nicht macht. Für diese schreiben wir, was **ein koreanischer Sprecher tatsächlich sagt**, wenn er Ihren Namen laut liest, anstatt die ursprüngliche Phonetik Zeichen für Zeichen zu transkribieren. Das Ziel ist die Schreibweise, die verwendet wird, nicht die technisch treueste."
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
            "p": "Es gibt keine einzige richtige Antwort. Die Schreibweise, die dem ursprünglichen Klang am nächsten kommt, die am häufigsten in Korea verwendete und die am einfachsten zu schreibende, sind oft drei verschiedene Dinge. Daher zeigen wir sie zusammen und sagen, was sie unterscheidet."
          },
          {
            "p": "Wenn keine von ihnen richtig erscheint, können Sie einen Hinweis auf den Klang, den Sie möchten, hinzufügen und es erneut versuchen — zum Beispiel, dass eine bestimmte Silbe anders geschrieben werden sollte."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Keine Hanja hier",
        "blocks": [
          {
            "p": "Wir hängen keine Hanja an eine Transliteration. Hanja tragen Bedeutung, und dieser Ablauf dreht sich um den Klang. Zeichen nur dem Klang zuzuordnen, kann Ihnen eine Bedeutung einbringen, die Sie nie gewünscht haben."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Wie es funktioniert",
    "title": "Wie wir einen koreanischen Namen erstellen",
    "summary": "Wir wählen aus bestehenden Nachnamen, wägen ab, wie leicht der Name gesagt und geschrieben wird, und fragen, wofür der Name gedacht ist.",
    "backLabel": "Leitfaden",
    "sections": [
      {
        "title": "Wir beginnen mit dem Familiennamen",
        "blocks": [
          {
            "p": "In Korea kommt der Familienname zuerst, und im Gegensatz zu Vornamen wird er nicht frei erfunden — man erbt ihn. Daher schlagen wir nur Nachnamen vor, die koreanische Menschen tatsächlich haben. Unser Standardpool sind die **20 häufigsten Nachnamen**, die zusammen etwa 80% der Bevölkerung abdecken."
          },
          {
            "p": "Wenn Ihr eigener Nachname zufällig mit einem echten koreanischen Namen übereinstimmt — Wang mit 왕, Ye mit 예 — setzen wir diesen zuerst. Eine Verbindung zu Ihrem ursprünglichen Namen aufrechtzuerhalten, ist mehr wert als ein zufällig gewählter Nachname."
          },
          {
            "p": "Sie können einen Nachnamen selbst wählen oder uns einen empfehlen lassen. So oder so wird es **ein Nachname sein, der existiert**."
          }
        ]
      },
      {
        "title": "Einfach zu sagen, einfach zu schreiben",
        "blocks": [
          {
            "p": "Dies ist ein Name, mit dem Sie in Korea tatsächlich angesprochen werden, daher überprüfen wir zuerst, ob ein Koreaner ihn einmal hören und aufschreiben kann. Ein Name, der jedes Mal buchstabiert werden muss, ist eine Last, die Sie tragen, nicht wir."
          },
          {
            "p": "Bedeutung ist ebenfalls wichtig. Koreanische Vornamen tragen normalerweise eine, daher sagen wir Ihnen, wie der Name gelesen wird und warum wir ihn ausgewählt haben — nicht nur den Namen selbst."
          }
        ]
      },
      {
        "title": "Wir fragen, wofür der Name gedacht ist",
        "blocks": [
          {
            "p": "Ein Name für Universitätsunterlagen ist nicht dasselbe wie ein Name, den Freunde über den Raum rufen, oder ein Handle, den Sie online verwenden werden. Wir fragen, wie Sie ihn verwenden möchten, und berücksichtigen das."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dies ist keine Transliteration",
        "blocks": [
          {
            "p": "Hier schlagen wir einen **neuen koreanischen Namen** vor. Wenn Sie möchten, dass Ihr bestehender Name in Hangul geschrieben wird — Michael als 마이클 — sehen Sie sich den [Leitfaden zur Hangul-Schreibung](/guide/how-hangul-transliteration) an."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Hinweise",
    "title": "Hinweise",
    "summary": "Hier kündigen wir Änderungen an, die sich auf die Nutzung des Dienstes auswirken.",
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
        "title": "E-Mail an uns",
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
              "**Zahlungen und Rückerstattungen** — wenn ein Dokument nie erstellt wurde oder der berechnete Betrag von Ihrer Bestellung abweicht, erstatten wir den vollen Betrag. Siehe die [Rückerstattungsrichtlinie](/refund-policy).",
              "**Datenschutz** — Anfragen zum Zugriff, zur Berichtigung oder Löschung Ihrer Daten. Siehe die [Datenschutzrichtlinie](/privacy).",
              "**Korrekturen** — wenn eine Hanja-Bedeutung, Lesung oder Berechnung falsch aussieht, lassen Sie es uns wissen. Zu erwähnen, welcher Bildschirm und was Sie eingegeben haben, hilft sehr.",
              "**Sonstiges** — Partnerschaften und Presse gehen an dieselbe Adresse."
            ]
          }
        ]
      },
      {
        "title": "Unternehmensdetails",
        "blocks": [
          {
            "ul": [
              "**Rechtliche Einheit** — {companyName}",
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
            "p": "Sie müssen keinen Namen oder Geburtsdatum in Ihre Nachricht aufnehmen. Kostenlose Ergebnisse werden niemals auf unseren Servern gespeichert, daher können wir sie nicht erneut abrufen — eine Bestellnummer ist ausreichend."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "Bräuche",
    "title": "Traditionell vermiedene Zeichen",
    "summary": "Es ist gesetzlich nicht verboten, aber es ist ein Brauch. Wir haben darüber geschrieben, was vermieden wurde und warum, und wie wir damit umgehen.",
    "backLabel": "Verwendungsleitfaden",
    "sections": [
      {
        "title": "Rechtlich akzeptable Zeichen",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} Zeichen",
                "label": "Kompilierte vermiedene Zeichen"
              },
              {
                "value": "{avoidCommonlyUsed} Zeichen",
                "label": "Darunter Zeichen, die immer noch häufig verwendet werden"
              }
            ]
          },
          {
            "p": "Es gibt Zeichen, die in die Liste der Zeichen für persönliche Namen aufgenommen sind und **rechtlich akzeptabel sind**, aber als ungeeignet für Namen gelten."
          },
          {
            "p": "Der zugrunde liegende Gedanke ist, dass **\"übermäßige Bedeutung tatsächlich unerwünscht ist.\"** Dazu gehören Zeichen, die als zu wertvoll angesehen werden (珍·寶), Zeichen, die als zu stark wahrgenommen werden (王·帝), und solche, die als zu großartig angesehen werden, um von einer Person verkörpert zu werden, wie Himmel oder Gottheiten. Dies spiegelt ein altes Gefühl der Zurückhaltung wider, das glaubt, dass ein Name die Person überstrahlen kann."
          },
          {
            "p": "**Diese Zeichen sind jedoch nicht unbrauchbar.** Es ist kein gesetzliches Verbot, sondern ein Brauch, und Bräuche variieren je nach Region, Familie und Generation und können sich im Laufe der Zeit ändern."
          },
          {
            "p": "Tatsächlich sind unter den {avoidTotal} Zeichen, die wir kompiliert haben, {avoidCommonlyUsed} immer noch häufig in Namen verwendet. Die Tatsache, dass sie als vermieden bekannt sind und dennoch weit verbreitet sind, zeigt, dass dieser Brauch nicht absolut ist."
          }
        ]
      },
      {
        "title": "Welche Kategorien gibt es?",
        "blocks": [
          {
            "p": "Die derzeit kompilierten Zeichen sind in sieben Kategorien unterteilt."
          },
          {
            "ul": [
              "**Schätze und Objekte** — Zeichen, die direkt auf Reichtum oder Gegenstände verweisen",
              "**Himmel und Natur** — Dinge wie Sonne, Mond und Himmel, die als zu großartig angesehen werden, um von einer Person verkörpert zu werden",
              "**Könige und Adel** — Zeichen, die Status bedeuten, wie König oder Kaiser",
              "**Göttliche Wesen** — Zeichen, die auf heilige Bereiche verweisen, wie Götter oder Geister",
              "**Jahreszeiten und andere** — Zeichen, die mit bestimmten Zeiten oder Zuständen verbunden sind",
              "**Tiere** — Tiere, die als energisch angesehen werden, wie Drachen oder Tiger",
              "**Übermäßigkeit** — Zeichen, die als übermäßig große oder überfließende Bedeutungen angesehen werden"
            ]
          }
        ]
      },
      {
        "title": "Sie können Zeichen selbst hinzufügen oder entfernen",
        "blocks": [
          {
            "p": "Wir löschen diese Zeichen nicht willkürlich. **Wir haben auf dem Eingabebildschirm zwei Optionen bereitgestellt, damit der Namensgeber wählen kann, wie er damit umgehen möchte.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Verfügbare Optionen auf dem Eingabebildschirm",
        "blocks": [
          {
            "p": "**Vermiedene Zeichen von Kandidaten ausschließen** — Wenn aktiviert, werden sie vollständig ausgeschlossen. Wenn deaktiviert, bleiben sie in den Ergebnissen mit einem \"Traditionell vermieden\"-Label und dem Grund angehängt."
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
            "p": "Wenn für diese Silbe keine verwendbaren Zeichen mehr vorhanden sind, heben wir den Ausschluss für diese Silbe auf und zeigen Kandidaten an. Wir glauben, dass es besser ist, als keine Optionen zu haben."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Dienstbasis",
    "title": "Was ist die Grundlage für die globale Namensumwandlung?",
    "summary": "Wir bieten Kandidaten aus fünf Perspektiven an, wobei die Schriftsysteme jeder Sprache beibehalten und nur bestehende Namen verwendet werden.",
    "backLabel": "Verwendungsleitfaden",
    "sections": [
      {
        "title": "Kandidaten werden aus fünf Perspektiven bereitgestellt",
        "blocks": [
          {
            "p": "Es gibt nicht nur einen Weg, einen Namen in eine andere Sprache zu übersetzen. Je nachdem, ob der Klang oder die Bedeutung beibehalten werden soll, ob ein natürlicher Name im lokalen Kontext gewählt oder Individualität priorisiert werden soll, werden die Antworten unterschiedlich sein. Daher bieten wir anstelle einer Option **eine aus jeder der fünf verschiedenen Perspektiven** an."
          },
          {
            "ul": [
              "**Option zur Klangbewahrung** — Bewahrt den Klang des ursprünglichen Namens so gut wie möglich",
              "**Option zur Bedeutungsübersetzung** — Übersetzt die im Namen enthaltene Bedeutung in den Namen dieser Sprache",
              "**Option zum Kompromiss von Klang und Bedeutung** — Nimmt die Hälfte von jedem",
              "**Option zur lokalen Authentizität** — Wählt Namen, die in diesem kulturellen Kontext tatsächlich häufig verwendet werden",
              "**Option für Individualität und Branding** — Priorisiert Namen, die einprägsam und einzigartig sind"
            ]
          },
          {
            "p": "Fünf Optionen werden garantiert bereitgestellt. Da die Vorlieben von Person zu Person variieren, glauben wir, dass es besser ist, Wahlmöglichkeiten zuzulassen, als eine als die richtige Antwort zu präsentieren."
          }
        ]
      },
      {
        "title": "Jede Sprache hat unterschiedliche Regeln für Schriftsysteme",
        "blocks": [
          {
            "p": "Bei der Übersetzung in eine Sprache, die keine römischen Buchstaben verwendet, muss sie in der Schrift dieser Sprache geschrieben werden. Für Japanisch wären es Kana und Kanji; für Russisch, Mongolisch und Kasachisch wäre es Kyrillisch; für Arabisch wäre es arabische Schrift; und für Thailändisch, Khmer und Hindi wären es ihre jeweiligen Schriften. Wenn Sie es in römischen Buchstaben schreiben und es einen \"japanischen Namen\" nennen, kann es in diesem Land nicht verwendet werden."
          },
          {
            "p": "Daher haben wir separate Regeln für jedes Schriftsystem der Sprache, und der Server überprüft noch einmal, um sicherzustellen, dass die Ergebnisse in diesem Schriftsystem sind. Fehler wie das Auslassen von Nachnamen oder das Mischen von Hangul werden hier herausgefiltert."
          }
        ]
      },
      {
        "title": "Wir verwenden Namen, die tatsächlich verwendet werden",
        "blocks": [
          {
            "p": "Um zu vermeiden, Namen zu erstellen, die plausibel klingen, aber in diesem Land nicht existieren, stützen wir unsere Optionen auf bestehende Namen. Namen werden in Dokumenten und Einführungen verwendet, sodass, wenn eine lokale Person denkt, \"so ein Name gibt es nicht\", er nicht verwendet werden kann."
          }
        ]
      },
      {
        "title": "Wir trennen Auswahl und Beschreibung",
        "blocks": [
          {
            "p": "Wir erledigen die Aufgabe, fünf Kandidaten zu bestimmen, getrennt von der Aufgabe, jeden Kandidaten im Detail zu beschreiben. Da die Beschreibung viel Zeit in Anspruch nimmt, trennen wir diesen Teil, um ihn gleichzeitig zu erstellen."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Warum wurde das geändert?",
        "blocks": [
          {
            "p": "Ursprünglich haben wir die fünf Perspektiven separat erstellt. Es war schneller, aber **die Anzahl der Kandidaten variierte jedes Mal.** Als jede Person Kandidaten auswählte, gab es Überschneidungen oder Diskrepanzen, und wenn einer fehlschlug, verschwand dieser Kandidat vollständig, was nur zwei oder drei anstelle von fünf zur Folge hatte."
          },
          {
            "p": "Jetzt, da wir die Kandidatenset und die Verteilung der Perspektiven auf einmal bestimmen, **ist die Anzahl festgelegt.** Selbst wenn eine Beschreibung fehlschlägt, bleiben die Kandidaten bestehen und werden mit kurzen Informationen präsentiert. Wir glauben, dass es besser ist, immer die gleiche Anzahl zu haben, auch wenn es etwas länger dauert."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Dienstbasis",
    "title": "Was ist die Grundlage für die Zuordnung von Hanja-Bedeutungen?",
    "summary": "Zuerst werden die Klänge festgelegt, und nur Hanja, die mit diesem Klang registriert werden können, werden gesammelt, und die Bedeutung wird als Kombination und nicht als einzelnes Zeichen betrachtet.",
    "backLabel": "Verwendungsleitfaden",
    "sections": [
      {
        "title": "Zuerst die Klänge festlegen",
        "blocks": [
          {
            "p": "Wenn Sie sich für \"지은\" entschieden haben, dann **지** und **은** ändern sich nicht. Wir ändern den Klang des Namens nicht, um zu den Hanja zu passen. Ein Name ist etwas, das ein Leben lang ausgesprochen wird, und wir glauben, dass die Reihenfolge so ist, dass der Klang zuerst festgelegt wird, gefolgt von den Hanja."
          },
          {
            "figure": "hanja-match-flow",
            "caption": "Dies ist die Reihenfolge, in der die Kandidaten eingegrenzt werden. Es geht nicht darum, zuerst Hanja auszuwählen und die Klänge anzupassen, sondern dass die Klänge zuerst kommen und nur Zeichen, die mit diesem Klang gelesen werden sollen, Kandidaten werden."
          }
        ]
      },
      {
        "title": "Nur Hanja sammeln, die mit diesem Klang registriert werden können",
        "blocks": [
          {
            "p": "Die offizielle Hanja-Tabelle hat eine festgelegte Lesung für jedes Zeichen, wenn es in Namen verwendet wird. Nur Zeichen, die als **지** und **은** gelesen werden sollen, werden Kandidaten. Egal wie gut die Bedeutung ist, wenn die Lesung nicht übereinstimmt, kann es nicht das Hanja für diesen Namen sein."
          },
          {
            "p": "Der Bereich zur Auswahl von Kandidaten sind die {characterTotal} Zeichen aus der Tabelle des Supreme Court. Zeichen, die nicht in dieser Tabelle stehen, werden überhaupt nicht präsentiert — selbst wenn sie angezeigt werden, können sie nicht registriert werden."
          },
          {
            "p": "Die Anzahl der Zeichen in der vom Supreme Court veröffentlichten Tabelle ist etwas höher als dies. Die Tabelle enthält auch **Zeichen ohne Standardzeichenkodierungen**, die auf Bildschirmen und Dokumenten nicht richtig angezeigt werden können, sodass diese Zeichen von den Kandidaten ausgeschlossen wurden. Sie müssen bei der zuständigen Behörde überprüfen, ob Sie mit diesen Zeichen registrieren können."
          }
        ]
      },
      {
        "title": "Bedeutung wird als Kombination betrachtet, nicht als einzelnes Zeichen",
        "blocks": [
          {
            "p": "Die Bedeutung jedes einzelnen Zeichens gut zu sein und die Bedeutung, die gelesen wird, wenn zwei Zeichen kombiniert werden, gut zu sein, sind unterschiedlich. Namen werden als Kombinationen gelesen, daher betrachten wir die Kombinationen zusammen. Wenn Sie spezifische Bedeutungen haben, die Sie einbeziehen oder vermeiden möchten, werden diese berücksichtigt."
          },
          {
            "p": "Wenn Sie ein Generationzeichen verwenden, ist dieses Zeichen festgelegt, und Kombinationen werden aus den verbleibenden Positionen gesucht. Der Familienname (성) ist nicht durch die offizielle Hanja-Tabelle eingeschränkt, daher wird er separat behandelt."
          }
        ]
      },
      {
        "title": "Wir zeigen Vermeidungstraditionen, ohne sie zu entfernen",
        "blocks": [
          {
            "p": "Wenn ein Zeichen, das traditionell als vermieden gilt, in den Kandidaten enthalten ist, entfernen wir es nicht, sondern zeigen den Grund dafür an. Dies ist eine Frage des Brauchs, nicht des Gesetzes, und Sie können entscheiden, es vollständig vom Eingabebildschirm auszuschließen. Für weitere Details siehe [Traditionell vermiedene Hanja](/guide/avoid)."
          }
        ]
      },
      {
        "title": "Wir informieren Sie auch über die Gründe für den Ausschluss",
        "blocks": [
          {
            "p": "Wir zeigen, warum bestimmte Zeichen von den Kandidaten ausgeschlossen wurden. Wenn wir nur zeigen, was ausgewählt wurde, können Sie nicht wissen, \"warum dieses?\" Wenn für diese Silbe keine verwendbaren Zeichen mehr vorhanden sind, heben wir den Ausschluss für diese Silbe auf und zeigen die Kandidaten."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Wie man die Ergebnisse liest",
        "blocks": [
          {
            "p": "Kandidaten sind **Perspektiven, keine Ranglisten**. Der erste bedeutet nicht, dass es der beste Name ist; sie werden aus verschiedenen Perspektiven ausgewählt. Diejenigen, die die Kombination von Bedeutungen priorisieren, diejenigen, die ungewöhnliche Zeichen wählen, und diejenigen, die Neutralität betonen, werden nebeneinander präsentiert. Die Antwort variiert je nachdem, welche Perspektive Sie schätzen."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Unsere Standards",
    "title": "Was wir nicht verwenden",
    "summary": "Wir weisen keine Gesamtfortune oder numerischen Werte zu, noch verwenden wir Strichzählungen. Die fünf Elemente werden nur als ergänzende Achse verwendet. Hier sind die Gründe.",
    "backLabel": "Verwendungsleitfaden",
    "sections": [
      {
        "title": "Gründe, warum keine Gesamtfortune oder numerischen Werte zugewiesen werden",
        "blocks": [
          {
            "p": "Es gibt Methoden, die Gesamtfortune oder numerische Werte für Namen zuweisen, um sie zu bewerten. Naming-Link bietet diese Zahlen nicht an. Die Gründe sind vierfach."
          },
          {
            "p": "**Erstens gibt es nicht nur einen Standard.** Die Methoden zur Berechnung von Fortune variieren je nach Schule, und derselbe Name kann nach einem Standard positiv und nach einem anderen negativ bewertet werden. Wir haben keine Grundlage, um zu entscheiden, welcher korrekt ist. Es ist unehrlich, einen als die Antwort zu präsentieren."
          },
          {
            "p": "**Zweitens basieren diese Berechnungen auf Strichzählungen.** Die Daten des Supreme Court enthalten jedoch überhaupt keine Strichzählungen. Darüber hinaus können Strichzählungen variieren, je nachdem, ob sie als reguläre oder vereinfachte Zeichen gezählt werden und wie Radikale gezählt werden. Da die grundlegenden Zahlen nicht definitiv festgelegt sind, können die darauf basierenden Werte nicht endgültig sein."
          },
          {
            "p": "**Drittens erscheinen Zahlen solider als die Realität.** Wenn es heißt \"87 Punkte\", liest es sich wie ein gemessener Wert und nicht wie eine konventionelle Interpretation. Diese Namensgebenden könnten sich durch diese Zahl unter Druck gesetzt fühlen und das, was wirklich wichtig ist, beiseite schieben (Ist es angenehm zu rufen? Passt die Bedeutung? Enthält es die gewünschten Wünsche?)."
          },
          {
            "p": "**Viertens gibt es keine Möglichkeit, dies zu überprüfen.** Die Beziehung zwischen einem Namen und dem Leben einer Person kann nicht überprüft werden. Etwas, das nicht als richtig oder falsch bezeichnet werden kann, in eine Zahl umzuwandeln, ergibt eine Zahl, die nicht bestätigt werden kann, obwohl sie nicht falsch sein kann."
          },
          {
            "p": "Wir verwenden nur das, was **nachweisbar ist.** Die offizielle Hanja-Tabelle des Supreme Court, die festgelegten Lesungen für jedes Zeichen und die in der Tabelle aufgeführten Bedeutungen. Stattdessen geben wir Gründe an, warum dieser Kandidat ausgewählt wurde und warum bestimmte Zeichen ausgeschlossen wurden, und zeigen **Gründe statt Werte**."
          }
        ]
      },
      {
        "title": "Wir verwenden keine Strichzählungen",
        "blocks": [
          {
            "p": "Die offizielle Hanja-Daten, die vom Supreme Court bereitgestellt werden, enthalten keine Strichzählungen. Unter den {characterTotal} Zeichen, die wir erhalten haben, **hat kein einziges Zeichen Strichzählungen.**"
          },
          {
            "p": "Um Strichzählungen zu verwenden, müssten wir Zahlen von irgendwo anders beziehen, aber wenn wir nicht klären können, woher diese Zahlen stammen und welche Kriterien zur Zählung verwendet wurden, würde das bedeuten, Namen auf der Grundlage unbegründeter Zahlen zu bewerten. Wir haben beschlossen, Namen nicht auf der Grundlage von Werten zu bewerten, die nicht nachweisbar sind."
          }
        ]
      },
      {
        "title": "Wir verwenden die fünf Elemente nur als Referenz",
        "blocks": [
          {
            "figure": "five-elements",
            "caption": "Die Beziehungen zwischen den fünf Elementen. Sich entlang des Kreises zu bewegen, stellt gegenseitige Erzeugung (相生) dar, während das Überspringen eines und das Drücken nach unten gegenseitige Einschränkung (相剋) darstellt. Wir verwenden diese Beziehung nur als ergänzende Achse zum Vergleich von Kandidaten."
          },
          {
            "p": "Wenn Sie Ihren Geburtsmonat eingegeben haben, verwenden wir eine vereinfachte Referenz der fünf Elemente, die auf diesem Monat basiert, als ergänzende Achse zum Vergleich von Kandidaten. Dies ist jedoch keine präzise Saju-Analyse, und **wir behaupten nicht, dass Namen das Schicksal oder den Charakter einer Person bestimmen.**"
          },
          {
            "p": "In der endgültigen Auswahl priorisieren wir Klänge, Kombinationen von Bedeutungen, die Werte, die die Familie vermitteln möchte, und ob es tatsächlich registriert werden kann. Wenn Sie Ihren Geburtsmonat nicht eingegeben haben, schließen wir die Referenz der fünf Elemente vollständig von der Analyse aus — wir machen keine willkürlichen Annahmen über unbekannte Informationen."
          },
          {
            "p": "Wenn Sie eine präzise, auf Saju basierende Analyse wünschen, decken wir das in einem separaten detaillierten Bericht ab. Der Grund, warum wir die fünf Elemente in der kostenlosen Hanja-Zuordnung nicht priorisieren, ist, dass wir nicht möchten, dass Urteile auf der Grundlage der fünf Elemente, die aus einem unvollständigen Geburtsdatum und einer unvollständigen Zeit abgeleitet sind, als endgültig präsentiert werden."
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
  "intro": "Änderungen Ihrer Nutzungsbedingungen — Preise, Richtlinien — werden hier veröffentlicht, bevor sie in Kraft treten. Interne Verbesserungen sind nicht aufgeführt: Was hier erscheint, ist das, was Sie wissen müssen.",
  "empty": {
    "title": "Noch keine Hinweise",
    "body": "Wenn sich etwas ändert, wird es hier erscheinen."
  },
  "effective": "Tritt in Kraft am {date}",
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
        "Wenn Sie den Dienst in Arabisch oder Khmer nutzen, wird das PDF, das Sie kaufen, in Englisch erstellt. Das Tool, das unsere Dokumente layoutet, kann diese beiden Schriften noch nicht setzen.",
        "Der Bildschirm bleibt in Ihrer Sprache, und Ihr Name wird in Ihrer eigenen Schrift im Dokument gedruckt.",
        "Der gleiche Hinweis erscheint vor der Zahlung. Wenn das Tool diese Schriften unterstützt, werden wir dies hier mitteilen."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Zahlungen sind noch nicht geöffnet",
      "body": [
        "Einen Namen zu erstellen und das Ergebnis zu lesen, ist heute kostenlos, und es ist kein Konto erforderlich.",
        "Bezahlte Artikel sind noch nicht im Verkauf. Die auf der Preisseite angezeigten Beträge gelten, sobald der Verkauf eröffnet wird."
      ]
    }
  }
} satisfies NoticeCopy;
