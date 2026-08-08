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
            "p": "Naming-Link hilft Ihnen, **koreanische Namen auszuwählen und zu verstehen** — die hanja hinter einem Kindsnamen, einen koreanischen Namen für das Ausland, eine Hangul-Schreibung Ihres eigenen Namens und Andenken wie einen Stempel oder einen gedruckten Bericht."
          },
          {
            "p": "Die Ergebnisse zu sehen ist **kostenlos und benötigt kein Konto.** Bezahlte Artikel verkaufen niemals das, was der Bildschirm bereits angezeigt hat: sie öffnen weitere Kandidaten, fügen schriftliche Analysen hinzu oder verwandeln das Ergebnis in etwas, das Sie behalten können."
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
            "p": "Saju und Figuren der fünf Elemente werden aus dem **koreanischen lunisolaren Almanach** berechnet, wobei die Geburtszeit auf die wahre Sonnenzeit für den Geburtsort korrigiert wird. Die Lesung ist ein traditioneller Referenzwert, keine Vorhersage."
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
    "title": "Festgelegte Lesungen — eine Aussprache pro Zeichen",
    "summary": "Die offizielle Tabelle listet nicht nur Zeichen auf. Sie legt auch fest, wie jedes Zeichen gelesen wird, wenn es in einem Namen verwendet wird.",
    "backLabel": "Leitfaden",
    "sections": [
      {
        "title": "Eine festgelegte Lesung für jedes Zeichen",
        "blocks": [
          {
            "p": "Die Hanja-Tabelle entscheidet nicht nur, welche Zeichen verwendet werden dürfen. **Sie legt auch fest, wie jedes Zeichen gelesen wird, wenn es in einem Namen erscheint.** Diese festgelegte Lesung ist die Grundlage für die Registrierung."
          },
          {
            "p": "Die meisten Hanja haben mehrere mögliche Lesungen. Ein Name wird jedoch auf Dokumenten geschrieben und laut ausgesprochen, daher benötigt er genau eine. Die Tabelle weist daher jedem Zeichen seine Lesung für die Verwendung in Namen zu, und keine andere Lesung kann registriert werden."
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
            "p": "Das wird oft missverstanden. **Die Tabelle regelt den Vornamen, nicht den Familiennamen.** Ein Familienname folgt dem, was bereits im Familienregister steht, sodass einige Leute Zeichen verwenden, die nicht in der Hanja-Tabelle stehen."
          },
          {
            "p": "Deshalb behandelt Naming-Link Hanja für Nachnamen anders. Wir helfen Ihnen nur, einen Nachnamen zu finden, und lassen ein Feld für die direkte Eingabe eines Nachnamens frei, für Personen, deren Zeichen außerhalb der Tabelle liegen. Zweisilbige Nachnamen wie Namgung und Seonwoo werden auf die gleiche Weise eingegeben."
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
        "title": "Koreanische Klänge, die es nicht gibt",
        "blocks": [
          {
            "p": "Jede Sprache hat Klänge, die Koreanisch nicht hat — f, v, z, th und Vokaldifferenzierungen, die das Koreanische nicht macht. Für diese schreiben wir, was **ein koreanischer Sprecher tatsächlich sagt**, wenn er Ihren Namen laut liest, anstatt die ursprüngliche Phonetik Zeichen für Zeichen zu transkribieren. Das Ziel ist die Schreibweise, die verwendet wird, nicht die technisch treueste."
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
            "p": "Es gibt keine einzige richtige Antwort. Die Schreibweise, die dem ursprünglichen Klang am nächsten kommt, die am häufigsten in Korea verwendete und die am einfachsten zu schreiben ist, sind oft drei verschiedene Dinge. Daher zeigen wir sie zusammen und sagen, was sie unterscheidet."
          },
          {
            "p": "Wenn keine von ihnen richtig erscheint, können Sie einen Hinweis zum gewünschten Klang hinzufügen und es erneut versuchen — zum Beispiel, dass eine bestimmte Silbe anders geschrieben werden sollte."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Keine Hanja hier",
        "blocks": [
          {
            "p": "Wir hängen keine Hanja an eine Transliteration an. Hanja tragen Bedeutung, und dieser Prozess dreht sich um den Klang. Zeichen nur dem Klang zuzuordnen, kann dazu führen, dass Sie eine Bedeutung erhalten, um die Sie nie gebeten haben."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Wie es funktioniert",
    "title": "Wie wir einen koreanischen Namen erstellen",
    "summary": "Wir wählen aus bestehenden Nachnamen aus, wägen ab, wie leicht der Name gesagt und geschrieben wird, und fragen, wofür der Name gedacht ist.",
    "backLabel": "Leitfaden",
    "sections": [
      {
        "title": "Wir beginnen mit dem Familiennamen",
        "blocks": [
          {
            "p": "In Korea kommt der Familienname zuerst, und im Gegensatz zu Vornamen wird er nicht frei erfunden — man erbt ihn. Daher schlagen wir nur Nachnamen vor, die koreanische Menschen tatsächlich haben. Unser Standardpool sind die **20 häufigsten Nachnamen**, die zusammen etwa 80% der Bevölkerung abdecken."
          },
          {
            "p": "Wenn Ihr eigener Nachname zufällig mit einem echten koreanischen Namen klanglich übereinstimmt — Wang mit 왕, Ye mit 예 — setzen wir diesen zuerst. Eine Verbindung zu Ihrem ursprünglichen Namen ist mehr wert als ein zufällig gewählter Nachname."
          },
          {
            "p": "Sie können einen Nachnamen selbst wählen oder uns einen empfehlen lassen. In jedem Fall wird es **ein Nachname sein, der existiert**."
          }
        ]
      },
      {
        "title": "Einfach auszusprechen, einfach zu schreiben",
        "blocks": [
          {
            "p": "Dies ist ein Name, mit dem man in Korea tatsächlich angesprochen wird, daher überprüfen wir zuerst, ob ein Koreaner ihn einmal hören und aufschreiben kann. Ein Name, der jedes Mal buchstabiert werden muss, ist eine Last, die Sie tragen, nicht wir."
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
            "p": "Ein Name für Universitätsunterlagen ist nicht dasselbe wie ein Name, den Freunde über einen Raum hinweg rufen, oder ein Handle, den Sie online verwenden werden. Wir fragen, wie Sie ihn verwenden möchten, und berücksichtigen das."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dies ist keine Transliteration",
        "blocks": [
          {
            "p": "Hier schlagen wir einen **neuen koreanischen Namen** vor. Wenn Sie möchten, dass Ihr bestehender Name in Hangul geschrieben wird — Michael als 마이클 — sehen Sie sich den [Hangul Schreibleitfaden](/guide/how-hangul-transliteration) an."
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
        "title": "Was Sie hier senden sollten",
        "blocks": [
          {
            "ul": [
              "**Zahlungen und Rückerstattungen** — wenn ein Dokument nie erstellt wurde oder der berechnete Betrag von Ihrer Bestellung abweicht, erstatten wir den vollen Betrag. Siehe die [Rückerstattungsrichtlinie](/refund-policy).",
              "**Datenschutz** — Anfragen zum Zugriff, zur Korrektur oder zur Löschung Ihrer Daten. Siehe die [Datenschutzrichtlinie](/privacy).",
              "**Korrekturen** — wenn eine hanja Bedeutung, Lesung oder Berechnung falsch aussieht, lassen Sie es uns wissen. Zu erwähnen, auf welchem Bildschirm und was Sie eingegeben haben, hilft sehr.",
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
              "**Rechtsträger** — {companyName}",
              "**Vertreter** — {representative}",
              "**Handelsregisternummer** — {businessNumber}",
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
    "summary": "Es ist gesetzlich nicht verboten, aber es ist ein Brauch. Wir haben darüber geschrieben, was vermieden wurde und warum, und wie wir damit umgehen.",
    "backLabel": "Nutzungsanleitung",
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
            "p": "Es gibt Zeichen, die in die Liste der Zeichen für Personennamen aufgenommen wurden und **rechtlich akzeptabel sind**, aber als ungeeignet für Namen gelten."
          },
          {
            "p": "Der zugrunde liegende Gedanke ist, dass **\"übermäßige Bedeutung tatsächlich unerwünscht ist.\"** Dazu gehören Zeichen, die als zu kostbar angesehen werden (珍 Schatz, 寶 Juwel), Zeichen, die als zu stark präsent angesehen werden (王 König, 帝 Kaiser), und solche, die als zu großartig angesehen werden, um von einer Person verkörpert zu werden, wie Himmel oder Gottheiten. Dies spiegelt ein altes Gefühl der Zurückhaltung wider, das glaubt, dass ein Name die Person überschattet."
          },
          {
            "p": "**Diese Zeichen sind jedoch nicht unbrauchbar.** Es ist kein gesetzliches Verbot, sondern ein Brauch, und Bräuche variieren je nach Region, Familie und Generation und können sich im Laufe der Zeit ändern."
          },
          {
            "p": "Tatsächlich sind unter den {avoidTotal} gesammelten Zeichen {avoidCommonlyUsed} immer noch häufig in Namen verwendet. Die Tatsache, dass sie als zu vermeidende Zeichen bekannt sind, aber dennoch weit verbreitet sind, zeigt, dass dieser Brauch nicht absolut ist."
          }
        ]
      },
      {
        "title": "Welche Kategorien gibt es?",
        "blocks": [
          {
            "p": "Die derzeit gesammelten Zeichen sind in sieben Kategorien unterteilt."
          },
          {
            "ul": [
              "**Schätze und Objekte** — Zeichen, die direkt auf Reichtum oder Gegenstände verweisen",
              "**Himmel und Natur** — Dinge wie Sonne, Mond und Himmel, die als zu großartig angesehen werden, um von einer Person verkörpert zu werden",
              "**Könige und Adel** — Zeichen, die Status signalisieren, wie König oder Kaiser",
              "**Göttliche Wesen** — Zeichen, die auf heilige Bereiche verweisen, wie Götter oder Geister",
              "**Jahreszeiten und Sonstiges** — Zeichen, die mit bestimmten Zeiten oder Zuständen verbunden sind",
              "**Tiere** — Tiere, die als energisch angesehen werden, wie Drachen oder Tiger",
              "**Übermäßigkeit** — Zeichen, die als übermäßig groß oder überfließend angesehen werden"
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
            "p": "**Vermeiden Sie vermiedene Zeichen aus den Kandidaten** — Wenn aktiviert, werden sie vollständig ausgeschlossen. Wenn deaktiviert, bleiben sie in den Ergebnissen mit einem \"Traditionell vermieden\"-Label und dem angehängten Grund."
          },
          {
            "p": "**Vermeiden Sie sogar häufig verwendete Zeichen** — Dies schließt Zeichen aus der Vermeidungsliste aus, die tatsächlich weit verbreitet sind (圭·琳·玲·元·太·星·海 usw.). Wenn aktiviert, werden die Kandidaten erheblich reduziert."
          },
          {
            "p": "Der Standard ist, **nicht auszuschließen, sondern nur anzuzeigen**. Wenn sie stillschweigend von der Liste entfernt werden, könnte es für diejenigen, die dieses Zeichen verwenden möchten, so erscheinen, als ob es nicht existiert."
          }
        ]
      },
      {
        "title": "Sicherstellen, dass Optionen nicht verschwinden",
        "blocks": [
          {
            "p": "Wenn keine verwendbaren Zeichen mehr für diese Silbe vorhanden sind, heben wir den Ausschluss für diese Silbe auf und zeigen Kandidaten an. Wir glauben, dass dies besser ist, als überhaupt keine Optionen zu haben."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Servicebasis",
    "title": "Was ist die Grundlage für die globale Namensumwandlung?",
    "summary": "Wir bieten Kandidaten aus fünf Perspektiven an, wobei die Schriftsysteme jeder Sprache beibehalten und nur bestehende Namen verwendet werden.",
    "backLabel": "Benutzungsanleitung",
    "sections": [
      {
        "title": "Kandidaten werden aus fünf Perspektiven bereitgestellt",
        "blocks": [
          {
            "p": "Es gibt nicht nur einen Weg, einen Namen in eine andere Sprache zu übersetzen. Je nachdem, ob der Klang oder die Bedeutung beibehalten werden soll, wählen Sie einen natürlichen Namen im lokalen Kontext oder priorisieren Sie Individualität, werden die Antworten unterschiedlich sein. Daher bieten wir anstelle einer Option **eine aus fünf verschiedenen Perspektiven** an."
          },
          {
            "ul": [
              "**Option zur Klangbewahrung** — Bewahrt den Klang des ursprünglichen Namens so gut wie möglich",
              "**Option zur Bedeutungsübersetzung** — Übersetzt die im Namen enthaltene Bedeutung in den Namen dieser Sprache",
              "**Option zum Kompromiss von Klang und Bedeutung** — Nimmt die Hälfte von jedem",
              "**Option zur lokalen Authentizität** — Wählt Namen, die tatsächlich in diesem kulturellen Kontext häufig verwendet werden",
              "**Option für Individualität und Branding** — Priorisiert Namen, die einprägsam und einzigartig sind"
            ]
          },
          {
            "p": "Fünf Optionen werden garantiert bereitgestellt. Da die Vorlieben von Person zu Person variieren, glauben wir, dass es besser ist, Wahlmöglichkeiten zuzulassen, anstatt eine als die richtige Antwort zu präsentieren."
          }
        ]
      },
      {
        "title": "Jede Sprache hat unterschiedliche Regeln für Schriftsysteme",
        "blocks": [
          {
            "p": "Bei der Übersetzung in eine Sprache, die keine römischen Buchstaben verwendet, muss sie in der Schrift dieser Sprache geschrieben werden. Für Japanisch wären es kana und kanji; für Russisch, Mongolisch und Kasachisch wäre es Kyrillisch; für Arabisch wäre es arabische Schrift; und für Thai, Khmer und Hindi wäre es ihre jeweiligen Schriften. Wenn Sie es in römischen Buchstaben schreiben und es einen \"japanischen Namen\" nennen, kann es in diesem Land nicht verwendet werden."
          },
          {
            "p": "Daher haben wir separate Regeln für das Schriftsystem jeder Sprache, und der Server überprüft noch einmal, um sicherzustellen, dass die Ergebnisse in diesem Schriftsystem vorliegen. Fehler wie das Weglassen von Nachnamen oder das Mischen von Hangul werden hier herausgefiltert."
          }
        ]
      },
      {
        "title": "Wir verwenden Namen, die tatsächlich verwendet werden",
        "blocks": [
          {
            "p": "Um zu vermeiden, dass Namen erstellt werden, die plausibel klingen, aber in diesem Land nicht existieren, basieren wir unsere Optionen auf bestehenden Namen. Namen werden in Dokumenten und Einführungen verwendet, sodass, wenn eine lokale Person denkt, \"es gibt keinen solchen Namen\", er nicht verwendet werden kann."
          }
        ]
      },
      {
        "title": "Wir trennen Auswahl und Beschreibung",
        "blocks": [
          {
            "p": "Wir übernehmen die Aufgabe, fünf Kandidaten zu bestimmen, getrennt von der Aufgabe, jeden Kandidaten im Detail zu beschreiben. Da die Beschreibung viel Zeit in Anspruch nimmt, trennen wir diesen Teil, um ihn gleichzeitig zu erstellen."
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
            "p": "Jetzt, da wir das Kandidatenset und die Perspektivenverteilung auf einmal bestimmen, **ist die Anzahl festgelegt.** Selbst wenn eine Beschreibung fehlschlägt, bleiben die Kandidaten bestehen und werden mit kurzen Informationen präsentiert. Wir glauben, dass es besser ist, konstant die gleiche Anzahl zu haben, auch wenn es etwas länger dauert."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Servicebasis",
    "title": "Was ist die Grundlage für die Übereinstimmung von hanja-Bedeutungen?",
    "summary": "Zuerst werden die Klänge festgelegt, und nur hanja, die mit diesem Klang registriert werden können, werden gesammelt, und die Bedeutung wird als Kombination und nicht als einzelnes Zeichen betrachtet.",
    "backLabel": "Benutzungsanleitung",
    "sections": [
      {
        "title": "Zuerst die Klänge festlegen",
        "blocks": [
          {
            "p": "Wenn Sie sich für \"지은\" entschieden haben, dann **지** und **은** ändern sich nicht. Wir ändern den Klang des Namens nicht, um zu den hanja zu passen. Ein Name ist etwas, das ein Leben lang gerufen wird, und wir glauben, dass die Reihenfolge so ist, dass der Klang zuerst festgelegt wird, gefolgt von den hanja."
          },
          {
            "figure": "hanja-match-flow",
            "labels": {
              "soundStep": "① Klang festlegen",
              "soundNote": "Wir ändern es niemals, um es an ein Zeichen anzupassen",
              "tableStep": "② Nach der offiziellen Tabelle filtern",
              "tableBody": "nur Zeichen, die dieser Lesung zugewiesen sind",
              "tableNote": "von allen {total} Zeichen in der Tabelle",
              "tableNoteNoCount": "nur Zeichen, die in der Tabelle sind",
              "combineStep": "③ Lies die beiden zusammen",
              "combineNote": "die Bedeutung ergibt sich aus der Lesung des Paares, nicht aus jedem Zeichen allein"
            },
            "caption": "Dies ist die Reihenfolge, in der die Kandidaten eingegrenzt werden. Es geht nicht darum, zuerst hanja auszuwählen und die Klänge abzugleichen, sondern vielmehr darum, dass die Klänge zuerst kommen und nur Zeichen, die mit diesem Klang gelesen werden, Kandidaten werden."
          }
        ]
      },
      {
        "title": "Sammle nur hanja, die mit diesem Klang registriert werden können",
        "blocks": [
          {
            "p": "Die offizielle Inschrift-hanja-Tabelle hat eine festgelegte Lesung für jedes Zeichen, wenn es in Namen verwendet wird. Nur Zeichen, die als **지** und **은** gelesen werden, werden zu Kandidaten. Egal wie gut die Bedeutung ist, wenn die Lesung nicht übereinstimmt, kann es nicht das hanja für diesen Namen sein."
          },
          {
            "p": "Der Bereich zur Auswahl von Kandidaten sind die {characterTotal} Zeichen aus der Tabelle des Obersten Gerichtshofs. Zeichen, die nicht in dieser Tabelle sind, werden überhaupt nicht angezeigt — selbst wenn sie angezeigt werden, können sie nicht registriert werden."
          },
          {
            "p": "Die Anzahl der Zeichen in der vom Obersten Gerichtshof veröffentlichten Tabelle ist etwas höher als dies. Die Tabelle enthält auch **Zeichen ohne Standardzeichen-Codes**, die auf Bildschirmen und Dokumenten nicht richtig angezeigt werden können, sodass diese Zeichen von den Kandidaten ausgeschlossen wurden. Sie müssen bei der zuständigen Behörde überprüfen, ob Sie mit diesen Zeichen registrieren können."
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
            "p": "Wenn Sie ein Generation-Zeichen verwenden, ist dieses Zeichen festgelegt, und Kombinationen werden aus den verbleibenden Positionen gesucht. Der Familienname (성) ist nicht durch die offizielle Inschrift-hanja-Tabelle eingeschränkt, daher wird er separat behandelt."
          }
        ]
      },
      {
        "title": "Wir weisen Vermeidungstraditionen an, ohne sie zu entfernen",
        "blocks": [
          {
            "p": "Wenn ein Zeichen, das traditionell als zu vermeidend gilt, in den Kandidaten enthalten ist, entfernen wir es nicht, sondern zeigen den Grund zusammen mit ihm an. Dies ist eine Frage der Tradition, nicht des Gesetzes, und Sie können wählen, es vollständig vom Eingabebildschirm auszuschließen. Für weitere Details siehe [Traditionell Vermeidung von Hanja](/guide/avoid)."
          }
        ]
      },
      {
        "title": "Wir informieren Sie auch über die Gründe für den Ausschluss",
        "blocks": [
          {
            "p": "Wir zeigen, warum bestimmte Zeichen von den Kandidaten ausgeschlossen wurden. Wenn wir nur zeigen, was ausgewählt wurde, können Sie nicht wissen: \"Warum dieses?\" Wenn keine verwendbaren Zeichen mehr für diese Silbe übrig sind, heben wir den Ausschluss für diese Silbe auf und zeigen die Kandidaten."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Wie man die Ergebnisse liest",
        "blocks": [
          {
            "p": "Kandidaten sind **Perspektiven, nicht Ranglisten**. Der erste bedeutet nicht, dass es der beste Name ist; sie werden aus verschiedenen Perspektiven ausgewählt. Diejenigen, die die Kombination von Bedeutungen priorisieren, die, die ungewöhnliche Zeichen wählen, und die, die Neutralität betonen, werden nebeneinander präsentiert. Die Antwort variiert je nachdem, welche Perspektive Sie schätzen."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Unsere Standards",
    "title": "Was wir nicht verwenden",
    "summary": "Wir weisen keine Gesamtfortune oder numerische Werte zu, noch verwenden wir Strichzählungen. Die fünf Elemente werden nur als ergänzende Achse verwendet. Hier sind die Gründe.",
    "backLabel": "Nutzungsanleitung",
    "sections": [
      {
        "title": "Gründe für die Nichtzuweisung von Gesamtfortune oder numerischen Werten",
        "blocks": [
          {
            "p": "Es gibt Methoden, die Gesamtfortune oder numerische Werte für Namen zuweisen, um sie zu bewerten. Naming-Link stellt diese Zahlen nicht zur Verfügung. Die Gründe sind vierfach."
          },
          {
            "p": "**Erstens gibt es nicht nur einen Standard.** Die Methoden zur Berechnung von Fortune variieren je nach Schule, und derselbe Name kann nach einem Standard positiv und nach einem anderen negativ bewertet werden. Wir haben keine Grundlage, um zu entscheiden, welcher korrekt ist. Es ist unehrlich, einen als die Antwort zu präsentieren."
          },
          {
            "p": "**Zweitens basieren diese Berechnungen auf Strichzählungen.** Allerdings enthält die Daten des Obersten Gerichtshofs überhaupt keine Strichzählungen. Darüber hinaus können Strichzählungen variieren, je nachdem, ob sie als reguläre oder vereinfachte Zeichen gezählt werden und wie Radikale gezählt werden. Da die grundlegenden Zahlen nicht eindeutig festgelegt sind, können die darauf basierenden Werte nicht endgültig sein."
          },
          {
            "p": "**Drittens erscheinen Zahlen solider als die Realität.** Wenn es heißt \"87 Punkte\", klingt es wie ein gemessener Wert und nicht wie eine konventionelle Interpretation. Diese Namensgebenden könnten sich durch diese Zahl unter Druck gesetzt fühlen und das, was wirklich wichtig ist, beiseite schieben (Ist es angenehm zu rufen? Passt die Bedeutung? Enthält es die gewünschten Wünsche?)."
          },
          {
            "p": "**Viertens gibt es keine Möglichkeit zur Überprüfung.** Die Beziehung zwischen einem Namen und dem Leben einer Person kann nicht überprüft werden. Etwas, das nicht als richtig oder falsch bezeichnet werden kann, in eine Zahl umzuwandeln, ergibt eine Zahl, die nicht bestätigt werden kann, obwohl sie nicht falsch sein kann."
          },
          {
            "p": "Wir verwenden nur das, was **nachweisbar ist.** Die offizielle Inschrift-hanja-Tabelle des Obersten Gerichtshofs, die festgelegten Lesungen für jedes Zeichen und die in der Tabelle aufgeführten Bedeutungen. Stattdessen geben wir Gründe an, warum dieser Kandidat ausgewählt wurde und warum bestimmte Zeichen ausgeschlossen wurden, und zeigen **Gründe statt Werte**."
          }
        ]
      },
      {
        "title": "Wir verwenden keine Strichzählungen",
        "blocks": [
          {
            "p": "Die offiziellen Inschrift-hanja-Daten, die vom Obersten Gerichtshof bereitgestellt werden, enthalten keine Strichzählungen. Unter den {characterTotal} Zeichen, die wir erhalten haben, **hat kein einziges Zeichen Strichzählungen.**"
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
            "labels": {
              "alt": "Die fünf Elemente in einem Kreis angeordnet: Generation läuft zwischen Nachbarn, Kontrolle überspringt eins",
              "wood": "Holz",
              "fire": "Feuer",
              "earth": "Erde",
              "metal": "Metall",
              "water": "Wasser",
              "saeng": "Generation — jedes gibt seinem Nachbarn Leben",
              "geuk": "Kontrolle — jedes beschränkt das, was es überspringt"
            },
            "caption": "Die Beziehungen zwischen den fünf Elementen. Sich im Kreis zu bewegen, stellt gegenseitige Generation (相生) dar, während das Überspringen eines und das Drücken nach unten gegenseitige Einschränkung (相剋) darstellt. Wir verwenden diese Beziehung nur als ergänzende Achse zum Vergleich von Kandidaten."
          },
          {
            "p": "Wenn Sie Ihren Geburtsmonat eingegeben haben, verwenden wir eine vereinfachte Referenz der fünf Elemente basierend auf diesem Monat als ergänzende Achse zum Vergleich von Kandidaten. Dies ist jedoch keine präzise saju-Analyse, und **wir behaupten nicht, dass Namen das Schicksal oder den Charakter einer Person bestimmen.**"
          },
          {
            "p": "Bei der endgültigen Auswahl priorisieren wir Klänge, Kombinationen von Bedeutungen, die Werte, die die Familie vermitteln möchte, und ob es tatsächlich registriert werden kann. Wenn Sie Ihren Geburtsmonat nicht eingegeben haben, schließen wir die Referenz der fünf Elemente vollständig aus der Analyse aus — wir treffen keine willkürlichen Annahmen über unbekannte Informationen."
          },
          {
            "p": "Wenn Sie eine präzise saju-basierte Analyse wünschen, behandeln wir das in einem separaten detaillierten Bericht. Der Grund, warum wir die fünf Elemente in der freien hanja-Zuordnung nicht priorisieren, ist, dass wir nicht möchten, dass Urteile basierend auf den fünf Elementen, die aus einem unvollständigen Geburtsdatum und -zeit abgeleitet sind, als ob sie endgültig wären, präsentiert werden."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Bezahlte Produkte",
    "title": "Was ist in den kostenpflichtigen Produkten enthalten?",
    "summary": "Wir klären, wie viel kostenlos sichtbar ist und welche zusätzlichen Funktionen mit der Zahlung für jedes Produkt kommen. Die Preise werden aus den tatsächlichen Produkteinstellungen abgerufen.",
    "backLabel": "Nutzungsanleitung",
    "sections": [
      {
        "title": "Was ist kostenlos sichtbar?",
        "blocks": [
          {
            "p": "Die Erstellung eines Namens und die Anzeige der Ergebnisse ist **kostenlos**. Eine Mitgliedschaft ist nicht erforderlich. Sie können die passenden Bedeutungen der hanja, die Erstellung koreanischer Namen, die globale Namensumwandlung und die Hangul-Aussprachenotation sowie empfohlene Ergebnisse und deren Begründungen auf dem Bildschirm sehen."
          },
          {
            "p": "Bezahlte Produkte **verkaufen nicht, was bereits auf dem Bildschirm angezeigt wurde.** Sie eröffnen mehr Kandidaten, fügen mehr Erklärungen hinzu oder erstellen ein Format, das gespeichert oder übertragen werden kann."
          }
        ]
      },
      {
        "title": "Vollständige Offenlegung aller Kandidaten — {priceUnlock}",
        "blocks": [
          {
            "p": "Die empfohlenen Ergebnisse sind so strukturiert, dass Kandidaten nacheinander geöffnet werden. Beim Anzeigen von Werbung öffnet sich jeweils einer, während dieses Produkt **alle verbleibenden Kandidaten auf einmal öffnet**."
          },
          {
            "p": "Wenn Sie es nicht eilig haben, müssen Sie nicht kaufen. Die **Ergebnisse aus der Werbung und die aus der Zahlung sind völlig identisch** — es ist nur eine Frage des Wartens, und das Bezahlen führt nicht zu besseren Kandidaten."
          }
        ]
      },
      {
        "title": "Hanja-Details — Drei Stufen",
        "blocks": [
          {
            "p": "Es gibt drei detaillierte Produkte im Ablauf der Auswahl von hanja, die an einen Hangul-Namen angehängt werden sollen."
          },
          {
            "ul": [
              "**Maximal 5 detaillierte hanja-Kandidaten** — {priceFiveDetail}. Sie können die Erklärungen für bis zu fünf Kandidaten auf dem Bildschirm erweitern. Es gibt kein PDF.",
              "**Maximal 10 erweiterte detaillierte hanja-Kandidaten PDF** — {priceTenDetail}. Die Anzahl der Kandidaten erhöht sich auf zehn, und ein PDF-Dokument ist enthalten.",
              "**Maximal 10 hanja-Kandidaten saju und umfassender Bericht über die fünf Elemente** — {priceTenSaju}. Neben den oben genannten enthält es das saju-Diagramm, das aus dem Geburtsdatum abgeleitet ist, und die Kräfte der fünf Elemente, die untersuchen, warum ein bestimmtes hanja zu diesem Namen aus der Perspektive der fünf Elemente passt."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja selbst ist öffentlich zugängliche Information",
        "blocks": [
          {
            "p": "Die verwendbaren hanja und deren Bedeutungen stammen aus der offiziellen Namens-hanja-Tabelle, die vom Obersten Gerichtshof Koreas festgelegt wurde, und sind alle in den Anleitungstexten des Dienstes öffentlich verfügbar. Was die kostenpflichtigen Produkte verkaufen, sind nicht die hanja-Informationen, sondern **der Akt der Auswahl und Erklärung gemäß dem Namen**."
          }
        ]
      },
      {
        "title": "PDFs für globale Nutzer",
        "blocks": [
          {
            "p": "Dokumente zur Umwandlung ausländischer Namen in koreanische Namen oder zur Schreibweise von Namen in Hangul. Die Preise entsprechen den Beträgen, die auf dem Zahlungsbildschirm angezeigt werden."
          },
          {
            "ul": [
              "**Korean Name Premium Report** — 3 Seiten. Enthält ein Kalligrafie-Cover, die Bedeutung des Namens und den Grund für die Wahl sowie die Interpretation von saju und den fünf Elementen.",
              "**Hangul Name Art** — 2 Seiten. Enthält ein Kalligrafie-Cover und eine Ausspracheanleitung. Es enthält, wie man den Namen in Hangul schreibt und wie man ihn ausspricht."
            ]
          }
        ]
      },
      {
        "title": "Namensstempel",
        "blocks": [
          {
            "p": "Wir gravieren den auf dem Bildschirm erstellten Namen in einen physischen Stempel und senden ihn Ihnen zu. Die Preise variieren je nach Modell — runder Stempel {priceStampRound}, quadratischer Stempel {priceStampSquare}, Ebenholzstempel {priceStampEbony}. Internationaler Versand ist ebenfalls verfügbar."
          },
          {
            "p": "**Ab hier beinhalten die Produkte den Versand.** Im Gegensatz zu den vorherigen Artikeln benötigen Produktion und Versand Zeit, und eine Lieferadresse ist erforderlich. Die Versandinformationen werden nur zur Auftragsbearbeitung und rechtlichen Aufbewahrung verwendet, und nach Abschluss der Bearbeitung werden sie nach der im Richtlinien festgelegten Frist vernichtet."
          }
        ]
      },
      {
        "title": "Wichtige Informationen vor dem Kauf",
        "blocks": [
          {
            "p": "**Digitale Produkte werden sofort nach Zahlungseingang bereitgestellt.** Sie können jederzeit vor Beginn des Downloads stornieren und eine volle Rückerstattung erhalten, aber sobald der Download abgeschlossen ist, ist ein Rücktritt aufgrund einfacher Meinungsänderung eingeschränkt (Artikel 17, Absatz 2 des Gesetzes über den elektronischen Handel). Diese Bedingung wird separat auf dem Zahlungsbildschirm vereinbart."
          },
          {
            "p": "**Beschwerden über den Inhalt der Ergebnisse sind kein Grund für eine Rückerstattung.** Wenn das Dokument jedoch nicht erstellt wurde, die Datei nicht geöffnet werden kann oder der Zahlungsbetrag von der Bestellung abweicht, wird dies als Neuausstellung oder volle Rückerstattung bearbeitet."
          },
          {
            "p": "Detaillierte Bedingungen sind in der [Rückerstattungsrichtlinie](/refund-policy) und im [Preisleitfaden](/pricing) aufgeführt. Dieser Text dient als Leitfaden für das, was enthalten ist, und die rechtlichen Bedingungen haben in diesen beiden Dokumenten Vorrang."
          }
        ]
      }
    ]
  },
  "guide/hanja-basics": {
    "eyebrow": "System",
    "title": "Was ist die offizielle Namens-hanja?",
    "summary": "Die hanja, die für Kindernamen verwendet werden können, wurde vom Obersten Gerichtshof in einer Tabelle festgelegt. Dies fasst zusammen, was die Tabelle ist und warum sie erstellt wurde.",
    "backLabel": "Nutzungsanleitung",
    "sections": [
      {
        "title": "Was ist die offizielle Namens-hanja?",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal} Zeichen",
                "label": "Offizielle Namens-hanja"
              },
              {
                "value": "{syllableCount} Silben",
                "label": "Enthaltene Hangul-Silben"
              },
              {
                "value": "{effectiveDate}",
                "label": "Tabelle Referenzdatum"
              }
            ]
          },
          {
            "p": "Sie können nicht einfach irgendein Zeichen für den Namen eines Kindes verwenden. **Die hanja, die für die Geburtsregistrierung verwendet werden können, wurden vom Obersten Gerichtshof in einer Tabelle festgelegt, und nur die Zeichen in dieser Tabelle können als hanja für Namen registriert werden.** Dies wird als offizielle Namens-hanja bezeichnet."
          }
        ]
      },
      {
        "title": "Warum wurde es festgelegt?",
        "blocks": [
          {
            "p": "Es gibt Zehntausende von hanja. Unter ihnen haben einige unangenehme Bedeutungen, einige werden nicht mehr verwendet und haben keine bekannten Lesungen, und einige können auf Computern überhaupt nicht angezeigt werden. Wenn solche Zeichen in einem Namen enthalten sind, trägt letztendlich die Person, die diesen Namen ein Leben lang verwenden wird, die Last. Namen können an verschiedenen Orten wie der Melderegister, Reisepässen, Banken und Schulen unterschiedlich gebrochen oder gelesen werden, was erfordert, dass die Person ihren eigenen Namen erklärt."
          },
          {
            "p": "Daher wurde eine Methode gewählt, um den Bereich der hanja, die in Namen verwendet werden können, vorab festzulegen. Anstatt eine einschränkende Regelung zu sein, ist es mehr ein Mechanismus, um sicherzustellen, dass Namen ein Leben lang ohne Probleme verwendet werden können."
          }
        ]
      },
      {
        "title": "Was ist die Grundlage für die Definitionen?",
        "blocks": [
          {
            "p": "Der Oberste Gerichtshof legt die offizielle Namens-hanja-Tabelle fest, die nach Bedarf überarbeitet wird, und Zeichen werden hinzugefügt."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Materialien, die auf diesem Bildschirm verwendet werden",
        "blocks": [
          {
            "p": "{publisher} offizielle Namens-hanja-Daten · Stand {effectiveDate}"
          },
          {
            "p": "{characterTotal} Zeichen decken {syllableCount} Hangul-Silben ab. Der Hash-Wert der Originaldatei wird ebenfalls gespeichert, sodass, wenn sich die Tabelle ändert, überprüft werden kann, wann und was sich geändert hat."
          }
        ]
      },
      {
        "title": "Die Anzahl der vom Obersten Gerichtshof angekündigten Zeichen unterscheidet sich von dem, was wir zeigen",
        "blocks": [
          {
            "p": "**Die offizielle Namens-hanja, die vom Obersten Gerichtshof angekündigt wurde, sind {announcedTotal} Zeichen, während wir als Kandidaten {characterTotal} Zeichen präsentieren.** Es gibt keinen Grund, diesen Unterschied zu verbergen, daher geben wir ihn klar an."
          },
          {
            "p": "Wenn Sie die Abfragedaten des Obersten Gerichtshofs überprüfen, enthält sie {listedTotal} Zeichen. Unter ihnen sind **{excludedNoStandardCode} Zeichen** **Zeichen, die keinen Platz im globalen gemeinsamen Zeichencode (Unicode) haben.** Das System des Obersten Gerichtshofs behandelt solche Zeichen mit Zahlen, die nur innerhalb seines eigenen Systems funktionieren, und sie werden auf dem Bildschirm als **Bilder** und nicht als Zeichen angezeigt."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Das Hinzufügen weiterer Schriftarten löst das Problem nicht",
        "blocks": [
          {
            "p": "Damit ein Zeichen auf dem Bildschirm angezeigt werden kann, muss es eine **Nummer haben, die von der Welt anerkannt ist**, und die Schriftart enthält das Bild, das dieser Nummer entspricht. Zeichen, die keine Nummer haben, können in keiner Schriftart enthalten sein. Egal, wie viele Schriftarten wir hinzufügen, diese Zeichen erscheinen als leere Kästchen."
          }
        ]
      },
      {
        "title": "Daher wurden sie aus den Kandidaten entfernt",
        "blocks": [
          {
            "p": "**Die Liste mit Zeichen zu füllen, die nicht angezeigt werden können, ist nicht hilfreich.** Die meisten Bedeutungen dieser Zeichen sind auch in unseren Daten leer, was nicht mit der Methode des Dienstes übereinstimmt, Namen basierend auf Bedeutungen auszuwählen."
          },
          {
            "p": "**Der wichtigere Grund liegt bei der Person, die den Namen verwenden wird.** Ein Name ist ein Wert, der an verschiedenen Stellen im Leben einer Person eingetragen wird. Zeichen ohne Zeichencodes können möglicherweise nicht in Systemen für Banken, Schulen, Krankenhäuser oder Pässe eingegeben oder gedruckt werden, selbst nach Abschluss der birth registration. Daher können wir solche Zeichen nicht empfehlen."
          },
          {
            "p": "Allerdings **bestimmen wir nicht, ob diese Zeichen verwendet werden können oder nicht.** Da sie Zeichen in der Tabelle des Obersten Gerichtshofs sind, kann die Registrierung selbst möglich sein. Wenn Sie dieses Zeichen wirklich verwenden möchten, überprüfen Sie bitte direkt im elektronischen Familienbeziehungsregistrierungssystem des Obersten Gerichtshofs und **fragen Sie die zuständige Behörde nach der tatsächlichen Verwendbarkeit.**"
          }
        ]
      },
      {
        "title": "Wenn Sie hanja verwenden möchten, die nicht in der Tabelle sind",
        "blocks": [
          {
            "p": "Sie können sie nicht verwenden. Genauer gesagt, diese Zeichen werden nicht als hanja für den Namen registriert, und der Name wird nur in Hangul aufgezeichnet. Wenn Sie hanja zusätzlich verwenden möchten, müssen Sie aus der name-hanja hanja Tabelle wählen."
          },
          {
            "p": "Daher präsentieren wir keine Zeichen, die nicht in der Tabelle sind, als Kandidaten. Alle hanja, die auf dem Bildschirm sichtbar sind, sind Zeichen, die tatsächlich für die Geburtsregistrierung verwendet werden können. Die vollständige Liste ist in der [Vollständigen Liste der offiziellen Namens-hanja](/guide/hanja) verfügbar."
          }
        ]
      }
    ]
  },
  "guide/hanja": {
    "eyebrow": "Liste",
    "title": "Vollständige Liste der offiziellen Namens-hanja",
    "summary": "Wir haben die hanja, die für die Geburtsregistrierung verwendet werden können, nach dem Anfangskonsonanten organisiert. Sie können die festgelegte Lesung und Bedeutung für jedes Zeichen sehen, wenn es in Namen verwendet wird.",
    "backLabel": "Nutzungsanleitung",
    "sections": [
      {
        "title": "Suche nach Anfangskonsonanten",
        "slot": "chosung",
        "blocks": [
          {
            "p": "Dies umfasst alle {characterTotal} Zeichen aus der offiziellen Namens-hanja-Tabelle des Obersten Gerichtshofs. Jedes Zeichen enthält die **Lesung, wenn es in Namen verwendet wird** und seine Bedeutung. Zeichen, die nicht in der Tabelle enthalten sind, können nicht als Namens-hanja registriert werden, daher sollten Sie aus den hier aufgeführten Zeichen wählen."
          },
          {
            "p": "Die beiden Zahlen auf dem Button unten repräsentieren die **Anzahl der Zeichen mit diesem Anfangskonsonanten** und die **Anzahl der abgedeckten Silben**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Wenn das Zeichen, nach dem Sie suchen, nicht in der Liste ist",
        "blocks": [
          {
            "p": "Die Anzahl der Zeichen, die vom Obersten Gerichtshof bekannt gegeben wurden, beträgt {announcedTotal}, aber diese Liste enthält {characterTotal} Zeichen. **Der Unterschied von {excludedNoStandardCode} Zeichen sind diejenigen, die aufgrund des Fehlens eines Platzes im universellen Zeichencode in keiner Schriftart angezeigt werden können.** Das System des Obersten Gerichtshofs zeigt diese Zeichen als Bilder."
          },
          {
            "p": "Wir haben die Gründe dafür detailliert und warum wir diese Zeichen nicht empfehlen in [Was ist offizielles Namens-hanja?](/guide/hanja-basics) beschrieben. Sie sollten bei der zuständigen Behörde nach der tatsächlichen Verwendbarkeit dieser Zeichen fragen."
          }
        ]
      },
      {
        "title": "Anfangskonsonanten mit wenigen Zeichen",
        "slot": "tiny",
        "blocks": [
          {
            "p": "Die folgenden Anfangskonsonanten haben sehr wenige offizielle Namens-hanja, daher haben wir sie hier ohne eine separate Seite angezeigt."
          }
        ]
      },
      {
        "kind": "note",
        "title": "So lesen Sie diese Liste",
        "blocks": [
          {
            "p": "Für **伽 · 가 · 절**, wenn \"伽\" in einem Namen verwendet wird, wird es als **가** gelesen und bedeutet \"Tempel\". Selbst für das gleiche hanja ist die Lesung, wenn es in Namen verwendet wird, durch die Tabelle festgelegt, und es kann nicht auf andere Weise verwendet werden."
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
  "items": {
    "2026-08-02-contact": {
      "title": "Kontakt- und Über-Seiten sind jetzt geöffnet",
      "body": [
        "Fragen, Rückerstattungen, Datenschutzanfragen und Fehlerberichte haben jetzt einen Ort, an den sie gehen können. Die Kontaktseite im Footer listet unsere E-Mail und Unternehmensdetails.",
        "Worauf sich unsere Antworten stützen und was wir absichtlich nicht tun, steht auf der Über-Seite."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF-Berichte werden in Englisch für Arabisch und Khmer ausgegeben",
      "body": [
        "Wenn Sie den Dienst auf Arabisch oder Khmer nutzen, wird das PDF, das Sie kaufen, in Englisch erstellt. Das Tool, das unsere Dokumente layoutet, kann derzeit noch keine Absätze in diesen beiden Schriften setzen.",
        "Der Bildschirm bleibt in Ihrer Sprache, und Ihr Name wird in Ihrer eigenen Schrift im Dokument gedruckt.",
        "Der gleiche Hinweis erscheint vor der Zahlung. Wenn das Tool diese Schriften unterstützt, werden wir dies hier mitteilen."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Zahlungen sind noch nicht geöffnet",
      "body": [
        "Die Erstellung eines Namens und das Lesen des Ergebnisses sind heute kostenlos, und es ist kein Konto erforderlich.",
        "Bezahlte Artikel sind noch nicht im Verkauf. Die auf der Preisseite angezeigten Beträge gelten, sobald der Verkauf eröffnet wird."
      ]
    }
  }
} satisfies NoticeCopy;
