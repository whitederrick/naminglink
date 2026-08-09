import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Deutsch — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const DE_DOCS = {
  "about": {
    "eyebrow": "Über",
    "title": "Über Naming-Link",
    "summary": "Wir helfen Ihnen, koreanische Namen auszuwählen und zu verstehen. Hier sind die Grundlagen unserer Ergebnisse und was wir absichtlich nicht tun.",
    "backLabel": "Startseite",
    "sections": [
      {
        "title": "Was wir tun",
        "blocks": [
          {
            "p": "Naming-Link hilft Ihnen, **koreanische Namen auszuwählen und zu verstehen** — die hanja hinter einem Kindsnamen, einen koreanischen Namen für den Gebrauch im Ausland, eine Hangul-Schreibung Ihres eigenen Namens und Andenken wie einen Stempel oder einen gedruckten Bericht."
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
            "p": "Hanja stammen aus der **offiziellen Namen-hanja-Tabelle des Obersten Gerichtshofs von Korea.** Jedes Zeichen hat eine festgelegte Lesung für die Verwendung in Namen, und Zeichen außerhalb der Tabelle können nicht registriert werden. Wir fügen dieser Liste nichts hinzu oder wählen keine Favoriten."
          },
          {
            "p": "Saju und Figuren der fünf Elemente werden aus dem **koreanischen lunisolaren Almanach** berechnet, wobei die Geburtszeit auf die wahre Solarzeit des Geburtsortes korrigiert wird. Die Lesung ist ein traditioneller Referenzwert, keine Vorhersage."
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
  "guide": {
    "eyebrow": "Wie Naming-Link funktioniert",
    "title": "Worauf wir Ihren Namen basieren",
    "summary": "Wie wir einen koreanischen Nachnamen auswählen, was wir überprüfen, bevor wir einen Vornamen vorschlagen, und wie wir Ihren Namen in Hangul schreiben — mit den Teilen, die wir absichtlich weglassen.",
    "backLabel": "Leitfaden",
    "sections": [
      {
        "title": "",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal}",
                "label": "Namen-hanja-Zeichen"
              },
              {
                "value": "{syllableCount}",
                "label": "Hangul-Silben abgedeckt"
              },
              {
                "value": "{effectiveDate}",
                "label": "Gültigkeitsdatum der Tabelle"
              },
              {
                "value": "{avoidTotal}",
                "label": "traditionell vermiedene Zeichen"
              }
            ]
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
            "p": "Die Namen-hanja-Tabelle entscheidet nicht nur, welche Zeichen verwendet werden dürfen. **Sie legt auch fest, wie jedes Zeichen gelesen wird, wenn es in einem Namen erscheint.** Diese feste Lesung ist die Grundlage für die Registrierung."
          },
          {
            "p": "Die meisten hanja haben mehrere mögliche Lesungen. Ein Name hingegen wird auf Dokumenten geschrieben und laut ausgesprochen, daher benötigt er genau eine. Die Tabelle weist daher jedem Zeichen seine Lesung für die Verwendung in Namen zu, und keine andere Lesung kann registriert werden."
          }
        ]
      },
      {
        "title": "Deshalb kommt der Klang zuerst",
        "blocks": [
          {
            "p": "Deshalb legt Naming-Link den Klang fest, bevor nach hanja gesucht wird. Wenn der Name \"지은\" ist, kann die Bedeutung nur aus Zeichen gewählt werden, die die Lesung **지** und Zeichen, die die Lesung **은** zugewiesen haben."
          },
          {
            "p": "So gut eine Bedeutung auch sein mag, ein Zeichen, dessen Lesung nicht übereinstimmt, kann für diesen Namen nicht verwendet werden. Wir ändern auch niemals den Klang eines Namens, um zu einem Zeichen zu passen — ein Name wird ein Leben lang ausgesprochen, und der Klang wird zuerst festgelegt, gefolgt von den hanja."
          }
        ]
      },
      {
        "title": "Familiennamen sind außerhalb dieser Tabelle",
        "blocks": [
          {
            "p": "Das wird oft missverstanden. **Die Tabelle regelt den Vornamen, nicht den Familiennamen.** Ein Familienname folgt dem, was bereits im Familienregister steht, sodass einige Leute Zeichen verwenden, die nicht in der Namen-hanja-Tabelle enthalten sind."
          },
          {
            "p": "Deshalb behandelt Naming-Link die hanja für Nachnamen anders. Wir helfen Ihnen nur, einen Nachnamen zu finden, und lassen ein Feld für die direkte Eingabe eines solchen, für Personen, deren Zeichen außerhalb der Tabelle liegen. Zweisilbige Nachnamen wie Namgung und Seonwoo werden auf die gleiche Weise eingegeben."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Wie es funktioniert",
    "title": "Wie wir Ihren Namen in Hangul schreiben",
    "summary": "Wie wir die Klänge wählen, wenn wir einen ausländischen Namen in Hangul schreiben, und warum wir keine hanja anhängen.",
    "backLabel": "Leitfaden",
    "sections": [
      {
        "title": "Wir tragen den Klang, nicht die Bedeutung",
        "blocks": [
          {
            "p": "Dieser Dienst schreibt **Ihren Namen** in Hangul. Er gibt Ihnen keinen koreanischen Namen. Michael wird zu 마이클 — derselbe Name, so geschrieben, dass Koreaner ihn lesen und aussprechen können. Wir tauschen ihn nicht gegen einen koreanischen Namen aus, der zufällig etwas Ähnliches bedeutet."
          },
          {
            "p": "Wenn ein koreanischer Name das ist, was Sie wollen, **ist das ein anderer Service**. Der eine behält Ihren Namen und ändert nur die Schrift; der andere schlägt einen neuen Namen vor."
          }
        ]
      },
      {
        "title": "Klingt Koreanisch hat nicht",
        "blocks": [
          {
            "p": "Jede Sprache hat Laute, die im Koreanischen fehlen — f, v, z, th und Vokalunterscheidungen, die im Koreanischen nicht gemacht werden. Für diese schreiben wir, was **ein koreanischer Sprecher tatsächlich sagt**, wenn er Ihren Namen laut liest, anstatt die ursprüngliche Phonetik Zeichen für Zeichen zu transkribieren. Das Ziel ist die Schreibweise, die verwendet wird, nicht die technisch treueste."
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
            "p": "Es gibt keine einzige richtige Antwort. Die Schreibweise, die dem ursprünglichen Klang am nächsten kommt, die am häufigsten in Korea verwendete und die am einfachsten zu schreiben ist, sind oft drei verschiedene Dinge. Daher zeigen wir sie zusammen und sagen, was sie trennt."
          },
          {
            "p": "Wenn keine von ihnen richtig erscheint, können Sie einen Hinweis auf den Klang geben, den Sie möchten, und es erneut versuchen — zum Beispiel, dass eine bestimmte Silbe anders geschrieben werden sollte."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Keine hanja hier",
        "blocks": [
          {
            "p": "Wir fügen einer Transliteration keine hanja hinzu. Hanja tragen Bedeutung, und dieser Prozess dreht sich um den Klang. Zeichen nur dem Klang zuzuordnen, kann Ihnen eine Bedeutung einbringen, die Sie nie angefragt haben."
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
            "p": "In Korea kommt der Familienname zuerst, und im Gegensatz zu Vornamen wird er nicht frei erfunden — man erbt ihn. Daher schlagen wir nur Nachnamen vor, die koreanische Menschen tatsächlich haben. Unser Standardpool sind die **20 häufigsten Nachnamen**, die zusammen etwa 80 % der Bevölkerung abdecken."
          },
          {
            "p": "Wenn Ihr eigener Nachname zufällig mit einem echten koreanischen Namen im Klang übereinstimmt — Wang mit 왕, Ye mit 예 — setzen wir diesen zuerst. Eine Verbindung zu Ihrem ursprünglichen Namen aufrechtzuerhalten, ist mehr wert als ein zufällig gewählter Nachname."
          },
          {
            "p": "Sie können selbst einen Nachnamen wählen oder uns einen empfehlen lassen. So oder so wird es **ein existierender Nachname** sein."
          }
        ]
      },
      {
        "title": "Einfach zu sagen, einfach zu schreiben",
        "blocks": [
          {
            "p": "Dies ist ein Name, den die Menschen in Korea tatsächlich verwenden werden, also überprüfen wir zuerst, ob ein Koreaner ihn einmal hören und aufschreiben kann. Ein Name, der jedes Mal buchstabiert werden muss, ist eine Last, die Sie tragen, nicht wir."
          },
          {
            "p": "Bedeutung ist auch wichtig. Koreanische Vornamen tragen normalerweise eine, also sagen wir Ihnen, wie der Name gelesen wird und warum wir ihn gewählt haben — nicht nur den Namen selbst."
          }
        ]
      },
      {
        "title": "Wir fragen, wofür der Name gedacht ist",
        "blocks": [
          {
            "p": "Ein Name für Universitätsunterlagen ist nicht dasselbe wie ein Name, den Freunde über einen Raum rufen, oder ein Benutzername, den Sie online verwenden werden. Wir fragen, wie Sie ihn verwenden möchten, und berücksichtigen das."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dies ist keine Transliteration",
        "blocks": [
          {
            "p": "Hier schlagen wir einen **neuen koreanischen Namen** vor. Wenn Sie möchten, dass Ihr bestehender Name in Hangul geschrieben wird — Michael als 마이클 — sehen Sie sich den [Hangul-Schreibleitfaden](/guide/how-hangul-transliteration) an."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Hinweise",
    "title": "Hinweise",
    "summary": "Wo wir Änderungen bekannt geben, die sich auf die Nutzung des Services auswirken.",
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
              "**Zahlungen und Rückerstattungen** — wenn ein Dokument nie erstellt wurde oder der berechnete Betrag von Ihrer Bestellung abweicht, erstatten wir den vollen Betrag. Siehe die [Rückerstattungspolitik](/refund-policy).",
              "**Datenschutz** — Anfragen zum Zugriff, zur Berichtigung oder zur Löschung Ihrer Daten. Siehe die [Datenschutzrichtlinie](/privacy).",
              "**Korrekturen** — wenn eine hanja-Bedeutung, -Lesung oder -Berechnung falsch aussieht, lassen Sie es uns wissen. Zu erwähnen, welcher Bildschirm und was Sie eingegeben haben, hilft sehr.",
              "**Alles andere** — Partnerschaften und Presse gehen an die gleiche Adresse."
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
            "p": "Sie müssen keinen Namen oder Geburtsdatum in Ihre Nachricht aufnehmen. Kostenlose Ergebnisse werden niemals auf unseren Servern gespeichert, daher können wir sie nicht erneut abrufen — eine Bestellnummer reicht aus."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "Bräuche",
    "title": "Traditionell Vermeidung von Zeichen",
    "summary": "Es ist gesetzlich nicht verboten, sondern ein Brauch. Wir haben darüber geschrieben, was vermieden wurde und warum, und wie wir damit umgehen.",
    "backLabel": "Gebrauchsanleitung",
    "sections": [
      {
        "title": "Rechtlich Akzeptable Zeichen",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} Zeichen",
                "label": "Kompilierte Vermeidung von Zeichen"
              },
              {
                "value": "{avoidCommonlyUsed} Zeichen",
                "label": "Darunter Zeichen, die weiterhin häufig verwendet werden"
              }
            ]
          },
          {
            "p": "Es gibt Zeichen, die in die Liste der Zeichen für persönliche Namen aufgenommen sind und **rechtlich akzeptabel sind**, jedoch als ungeeignet für Namen gelten."
          },
          {
            "p": "Der zugrunde liegende Gedanke ist, dass **\"übermäßige Bedeutung tatsächlich unerwünscht ist.\"** Dazu gehören Zeichen, die als zu kostbar angesehen werden (珍 Schatz, 寶 Juwel), Zeichen, die als zu stark wahrgenommen werden (王 König, 帝 Kaiser), und solche, die als zu großartig für eine Person gelten, wie Himmel oder Gottheiten. Dies spiegelt ein altes Gefühl der Zurückhaltung wider, das glaubt, dass ein Name die Person überschattet."
          },
          {
            "p": "**Diese Zeichen sind jedoch nicht unbrauchbar.** Es handelt sich nicht um ein gesetzliches Verbot, sondern um einen Brauch, und Bräuche variieren je nach Region, Familie und Generation und können sich im Laufe der Zeit ändern."
          },
          {
            "p": "Tatsächlich sind unter den {avoidTotal} Zeichen, die wir kompiliert haben, {avoidCommonlyUsed} weiterhin häufig in Namen verwendet. Die Tatsache, dass sie als vermieden bekannt sind, aber dennoch weit verbreitet verwendet werden, zeigt, dass dieser Brauch nicht absolut ist."
          }
        ]
      },
      {
        "title": "Welche Kategorien Gibt Es?",
        "blocks": [
          {
            "p": "Die derzeit kompilierten Zeichen sind in sieben Kategorien unterteilt."
          },
          {
            "ul": [
              "**Schätze und Objekte** — Zeichen, die direkt auf Reichtum oder Gegenstände verweisen",
              "**Himmel und Natur** — Dinge wie Sonne, Mond und Himmel, die als zu großartig für eine Person gelten",
              "**Könige und Adel** — Zeichen, die Status signalisieren, wie König oder Kaiser",
              "**Göttliche Wesen** — Zeichen, die sich auf heilige Bereiche beziehen, wie Götter oder Geister",
              "**Jahreszeiten und Sonstiges** — Zeichen, die mit bestimmten Zeiten oder Zuständen verbunden sind",
              "**Tiere** — Tiere, die als energetisch stark gelten, wie Drachen oder Tiger",
              "**Übermäßigkeit** — Zeichen, die als übermäßig große oder überfließende Bedeutungen angesehen werden"
            ]
          }
        ]
      },
      {
        "title": "Sie Können Zeichen Selbst Hinzufügen oder Entfernen",
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
            "p": "**Schließen Sie sogar häufig verwendete Zeichen aus** — Dies schließt Zeichen aus der Vermeidungsliste aus, die tatsächlich weit verbreitet sind (圭·琳·玲·元·太·星·海 usw.). Wenn aktiviert, werden die Kandidaten erheblich reduziert."
          },
          {
            "p": "Der Standard ist, **nicht auszuschließen, sondern nur anzuzeigen**. Wenn sie stillschweigend von der Liste entfernt werden, könnte es denjenigen, die dieses Zeichen verwenden möchten, so erscheinen, als ob es nicht existiert."
          }
        ]
      },
      {
        "title": "Sicherstellen, dass Optionen Nicht Verschwinden",
        "blocks": [
          {
            "p": "Wenn keine verwendbaren Zeichen mehr für diese Silbe vorhanden sind, heben wir den Ausschluss für diese Silbe auf und zeigen Kandidaten an. Wir glauben, dass dies besser ist, als überhaupt keine Optionen zu haben."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Dienstbasis",
    "title": "Was Ist die Grundlage für die globale Namensumwandlung?",
    "summary": "Wir bieten Kandidaten aus fünf Perspektiven an, wobei die Schriftsysteme jeder Sprache beibehalten und nur bestehende Namen verwendet werden.",
    "backLabel": "Gebrauchsanleitung",
    "sections": [
      {
        "title": "Kandidaten Werden Aus Fünf Perspektiven Bereitgestellt",
        "blocks": [
          {
            "p": "Es gibt nicht nur einen Weg, einen Namen in eine andere Sprache zu übersetzen. Je nachdem, ob der Klang oder die Bedeutung beibehalten werden soll, wählen Sie einen natürlichen Namen im lokalen Kontext oder priorisieren Sie Individualität, werden die Antworten unterschiedlich sein. Daher bieten wir anstelle einer Option **eine aus fünf verschiedenen Perspektiven** an."
          },
          {
            "ul": [
              "**Option zur Klangbewahrung** — Bewahrt den Klang des ursprünglichen Namens so gut wie möglich",
              "**Option zur Bedeutungsübersetzung** — Übersetzt die im Namen enthaltene Bedeutung in den Namen dieser Sprache",
              "**Option zum Kompromiss von Klang und Bedeutung** — Nimmt die Hälfte von jedem",
              "**Option zur lokalen Authentizität** — Wählt Namen, die in diesem kulturellen Kontext tatsächlich häufig verwendet werden",
              "**Option für Individualität und Branding** — Priorisiert Namen, die einprägsam und unverwechselbar sind"
            ]
          },
          {
            "p": "Fünf Optionen werden garantiert bereitgestellt. Da die Vorlieben von Person zu Person variieren, glauben wir, dass es besser ist, Wahlmöglichkeiten zuzulassen, anstatt eine als die richtige Antwort zu präsentieren."
          }
        ]
      },
      {
        "title": "Jede Sprache Hat Unterschiedliche Regeln für Schriftsysteme",
        "blocks": [
          {
            "p": "Bei der Übersetzung in eine Sprache, die keine römischen Buchstaben verwendet, muss sie in der Schrift dieser Sprache geschrieben werden. Für Japanisch wären es kana und kanji; für Russisch, Mongolisch und Kasachisch wäre es kyrillisch; für Arabisch wäre es arabische Schrift; und für Thai, Khmer und Hindi wären es deren jeweilige Schriften. Wenn Sie es in römischen Buchstaben schreiben und es einen \"japanischen Namen\" nennen, kann es in diesem Land nicht verwendet werden."
          },
          {
            "p": "Daher haben wir separate Regeln für das Schriftsystem jeder Sprache, und der Server überprüft noch einmal, um sicherzustellen, dass die Ergebnisse in diesem Schriftsystem vorliegen. Fehler wie das Auslassen von Nachnamen oder das Mischen von Hangul werden hier herausgefiltert."
          }
        ]
      },
      {
        "title": "Wir Verwenden Namen, Die Tatsächlich Verwendet Werden",
        "blocks": [
          {
            "p": "Um zu vermeiden, dass Namen erstellt werden, die plausibel klingen, aber in diesem Land nicht existieren, basieren wir unsere Optionen auf bestehenden Namen. Namen werden in Dokumenten und Einführungen verwendet, daher kann ein Einheimischer, der denkt, \"so ein Name gibt es nicht\", nicht verwendet werden."
          }
        ]
      },
      {
        "title": "Wir Trennen Auswahl und Beschreibung",
        "blocks": [
          {
            "p": "Wir übernehmen die Aufgabe, fünf Kandidaten getrennt von der Aufgabe, jeden Kandidaten im Detail zu beschreiben. Da die Beschreibung viel Zeit in Anspruch nimmt, trennen wir diesen Teil, um ihn gleichzeitig zu erstellen."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Warum wurde das geändert?",
        "blocks": [
          {
            "p": "Ursprünglich haben wir die fünf Perspektiven separat erstellt. Es war schneller, aber **die Anzahl der Kandidaten variierte jedes Mal.** Da jede Person Kandidaten auswählte, gab es Überschneidungen oder Diskrepanzen, und wenn einer scheiterte, verschwand dieser Kandidat vollständig, was nur zwei oder drei anstelle von fünf zur Folge hatte."
          },
          {
            "p": "Jetzt, da wir das Kandidatenset und die Perspektivverteilung auf einmal bestimmen, **ist die Anzahl festgelegt.** Selbst wenn eine Beschreibung fehlschlägt, bleiben die Kandidaten bestehen und werden mit kurzen Informationen präsentiert. Wir glauben, dass es besser ist, konstant die gleiche Anzahl zu haben, auch wenn es etwas länger dauert."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Dienstbasis",
    "title": "Was ist die Grundlage für die Übereinstimmung der hanja-Bedeutungen?",
    "summary": "Zuerst werden die Klänge festgelegt, und nur hanja, die mit diesem Klang registriert werden können, werden gesammelt, und die Bedeutung wird als Kombination betrachtet, nicht als einzelnes Zeichen.",
    "backLabel": "Nutzungsanleitung",
    "sections": [
      {
        "title": "Zuerst die Klänge festlegen",
        "blocks": [
          {
            "p": "Wenn Sie sich für \"지은\" entschieden haben, dann **지** und **은** ändern sich nicht. Wir ändern den Klang des Namens nicht, um ihn an die hanja anzupassen. Ein Name ist etwas, das ein Leben lang genannt wird, und wir glauben, dass die Reihenfolge so ist, dass der Klang zuerst festgelegt wird, gefolgt von der hanja."
          },
          {
            "figure": "hanja-match-flow",
            "labels": {
              "soundStep": "① Klang festlegen",
              "soundNote": "Wir ändern es niemals, um es an ein Zeichen anzupassen",
              "tableStep": "② Nach dem offiziellen Tisch filtern",
              "tableBody": "nur Zeichen, die mit dieser Lesung zugeordnet sind",
              "tableNote": "aus allen {total} Zeichen in der Tabelle",
              "tableNoteNoCount": "nur Zeichen, die in der Tabelle sind",
              "combineStep": "③ Die beiden zusammen lesen",
              "combineNote": "die Bedeutung ist, wie das Paar gelesen wird, nicht jedes Zeichen allein"
            },
            "caption": "Dies ist die Reihenfolge, in der die Kandidaten eingegrenzt werden. Es geht nicht darum, zuerst hanja auszuwählen und die Klänge anzupassen, sondern vielmehr darum, dass die Klänge zuerst kommen und nur Zeichen, die mit diesem Klang gelesen werden sollen, Kandidaten werden."
          }
        ]
      },
      {
        "title": "Nur hanja sammeln, die mit diesem Klang registriert werden können",
        "blocks": [
          {
            "p": "Die offizielle Tabelle für Namens-hanja hat eine festgelegte Lesung für jedes Zeichen, wenn es in Namen verwendet wird. Nur Zeichen, die als **지** und **은** gelesen werden, werden Kandidaten. Egal wie gut die Bedeutung ist, wenn die Lesung nicht übereinstimmt, kann es nicht die hanja für diesen Namen sein."
          },
          {
            "p": "Der Bereich zur Auswahl von Kandidaten sind die {characterTotal} Zeichen aus der Tabelle des Obersten Gerichtshofs. Zeichen, die nicht in dieser Tabelle sind, werden überhaupt nicht präsentiert — selbst wenn sie angezeigt werden, können sie nicht registriert werden."
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
            "p": "Wenn Sie ein Generation-Zeichen verwenden, ist dieses Zeichen festgelegt, und Kombinationen werden aus den verbleibenden Positionen gesucht. Der Familienname (성) unterliegt nicht der offiziellen Tabelle für Namens-hanja, daher wird er separat behandelt."
          }
        ]
      },
      {
        "title": "Wir weisen auf Vermeidungstraditionen hin, ohne sie zu entfernen",
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
            "p": "Wir zeigen, warum bestimmte Zeichen von den Kandidaten ausgeschlossen wurden. Wenn wir nur zeigen, was ausgewählt wurde, können Sie nicht wissen: \"Warum gerade dieses?\" Wenn für diese Silbe keine verwendbaren Zeichen mehr übrig sind, heben wir den Ausschluss für diese Silbe auf und zeigen die Kandidaten."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Wie man die Ergebnisse liest",
        "blocks": [
          {
            "p": "Kandidaten sind **Perspektiven, nicht Ranglisten**. Der erste bedeutet nicht, dass es der beste Name ist; sie werden aus verschiedenen Perspektiven ausgewählt. Diejenigen, die die Kombination von Bedeutungen priorisieren, diejenigen, die ungewöhnliche Zeichen wählen, und diejenigen, die Neutralität betonen, werden nebeneinander präsentiert. Die Antwort variiert je nachdem, welche Perspektive Sie schätzen."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Unsere Standards",
    "title": "Was wir nicht verwenden",
    "summary": "Wir weisen keine Gesamtschicksale oder numerischen Werte zu, noch verwenden wir Strichzählungen. Die fünf Elemente werden nur als ergänzende Achse verwendet. Hier sind die Gründe.",
    "backLabel": "Nutzungsanleitung",
    "sections": [
      {
        "title": "Gründe für die Nichtzuweisung von Gesamtschicksalen oder numerischen Werten",
        "blocks": [
          {
            "p": "Es gibt Methoden, die Gesamtschicksale oder numerische Werte für Namen zuweisen, um sie zu bewerten. Naming-Link bietet diese Zahlen nicht an. Die Gründe sind vierfach."
          },
          {
            "p": "**Erstens gibt es nicht nur einen Standard.** Die Methoden zur Berechnung des Schicksals variieren je nach Schule, und derselbe Name kann nach einem Standard positiv und nach einem anderen negativ bewertet werden. Wir haben keine Grundlage, um zu entscheiden, welcher korrekt ist. Es wäre unehrlich, einen als die Antwort zu präsentieren."
          },
          {
            "p": "**Zweitens basieren diese Berechnungen auf Strichzählungen.** Das Datenmaterial des Obersten Gerichtshofs enthält jedoch überhaupt keine Strichzählungen. Darüber hinaus können Strichzählungen variieren, je nachdem, ob sie als reguläre oder vereinfachte Zeichen gezählt werden und wie Radikale gezählt werden. Da die grundlegenden Zahlen nicht eindeutig festgelegt sind, können die darauf basierenden Werte nicht endgültig sein."
          },
          {
            "p": "**Drittens erscheinen Zahlen solider als die Realität.** Wenn es heißt \"87 Punkte\", klingt es wie ein gemessener Wert und nicht wie eine konventionelle Interpretation. Diese Benennungen könnten sich durch diese Zahl unter Druck gesetzt fühlen und das, was wirklich wichtig ist, beiseite schieben (Ist es angenehm, es zu nennen? Passt die Bedeutung? Enthält es die gewünschten Wünsche?)."
          },
          {
            "p": "**Viertens gibt es keine Möglichkeit zur Überprüfung.** Die Beziehung zwischen einem Namen und dem Leben einer Person kann nicht überprüft werden. Etwas, das nicht als richtig oder falsch bezeichnet werden kann, in eine Zahl umzuwandeln, führt zu einer Zahl, die nicht bestätigt werden kann, obwohl sie nicht falsch sein kann."
          },
          {
            "p": "Wir verwenden nur das, was **nachweisbar ist.** Die offizielle Tabelle für Namens-hanja des Obersten Gerichtshofs, die festgelegten Lesungen für jedes Zeichen und die in der Tabelle aufgeführten Bedeutungen. Stattdessen geben wir Gründe an, warum dieser Kandidat ausgewählt wurde und warum bestimmte Zeichen ausgeschlossen wurden, und zeigen **Gründe statt Werte**."
          }
        ]
      },
      {
        "title": "Wir verwenden keine Strichzählungen",
        "blocks": [
          {
            "p": "Die offiziellen Daten zu Namens-hanja, die vom Obersten Gerichtshof bereitgestellt werden, enthalten keine Strichzählungen. Unter den {characterTotal} Zeichen, die wir erhalten haben, **hat kein einziges Zeichen Strichzählungen.**"
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
              "saeng": "Generation — jede gibt ihrer Nachbarin Leben",
              "geuk": "Kontrolle — jede beschränkt die, zu der sie springt"
            },
            "caption": "Die Beziehungen zwischen den fünf Elementen. Die Bewegung entlang des Kreises repräsentiert gegenseitige Generation (相生), während das Überspringen eines Elements und das Drücken nach unten gegenseitige Einschränkung (相剋) darstellt. Wir verwenden diese Beziehung nur als ergänzende Achse zum Vergleich von Kandidaten."
          },
          {
            "p": "Wenn Sie Ihren Geburtsmonat eingegeben haben, verwenden wir eine vereinfachte Referenz der fünf Elemente basierend auf diesem Monat als ergänzende Achse zum Vergleich von Kandidaten. Dies ist jedoch keine präzise saju-Analyse, und **wir behaupten nicht, dass Namen das Schicksal oder den Charakter einer Person bestimmen.**"
          },
          {
            "p": "In der endgültigen Auswahl priorisieren wir Klänge, Kombinationen von Bedeutungen, die Werte, die die Familie vermitteln möchte, und ob es tatsächlich registriert werden kann. Wenn Sie Ihren Geburtsmonat nicht eingegeben haben, schließen wir die Referenz der fünf Elemente vollständig aus der Analyse aus — wir treffen keine willkürlichen Annahmen über unbekannte Informationen."
          },
          {
            "p": "Wenn Sie eine präzise saju-basierte Analyse wünschen, behandeln wir das in einem separaten detaillierten Bericht. Der Grund, warum wir die fünf Elemente im kostenlosen Hanja-Matching nicht priorisieren, ist, dass wir keine Urteile basierend auf den fünf Elementen, die aus einem unvollständigen Geburtsdatum und -zeit abgeleitet sind, als ob sie endgültig wären, präsentieren möchten."
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
            "p": "Einen Namen zu erstellen und die Ergebnisse zu sehen ist **kostenlos**. Eine Mitgliedschaft ist nicht erforderlich. Sie können die passenden Bedeutungen von Hanja, die Erstellung koreanischer Namen, die globale Namensumwandlung und die Hangul-Aussprachenotation sehen, zusammen mit empfohlenen Ergebnissen und deren Begründungen auf dem Bildschirm."
          },
          {
            "p": "Bezahlte Produkte **verkaufen nicht, was bereits auf dem Bildschirm angezeigt wurde.** Sie öffnen mehr Kandidaten, fügen mehr Erklärungen hinzu oder erstellen ein Format, das gespeichert oder übertragen werden kann."
          }
        ]
      },
      {
        "title": "Vollständige Offenlegung aller Kandidaten — {priceUnlock}",
        "blocks": [
          {
            "p": "Empfohlene Ergebnisse sind so strukturiert, dass Kandidaten nacheinander geöffnet werden. Beim Anzeigen von Anzeigen öffnet sich jeweils einer, während dieses Produkt **alle verbleibenden Kandidaten auf einmal öffnet**."
          },
          {
            "p": "Wenn Sie es nicht eilig haben, müssen Sie nicht kaufen. Die **Ergebnisse aus dem Öffnen über Anzeigen und die aus der Zahlung sind völlig identisch** — es ist nur eine Frage des Wartens, und das Bezahlen führt nicht zu besseren Kandidaten."
          }
        ]
      },
      {
        "title": "Hanja-Details — Drei Stufen",
        "blocks": [
          {
            "p": "Es gibt drei detaillierte Produkte im Verlauf der Auswahl von Hanja, die an einen Hangul-Namen angehängt werden sollen."
          },
          {
            "ul": [
              "**Maximal 5 detaillierte Hanja-Kandidaten** — {priceFiveDetail}. Sie können die Erklärungen für bis zu fünf Kandidaten auf dem Bildschirm erweitern. Es gibt kein PDF.",
              "**Maximal 10 Hanja-Kandidaten erweitertes detailliertes PDF** — {priceTenDetail}. Die Anzahl der Kandidaten erhöht sich auf zehn, und ein PDF-Dokument ist enthalten.",
              "**Maximal 10 Hanja-Kandidaten saju und umfassender Bericht über die fünf Elemente** — {priceTenSaju}. Zusätzlich zu den oben genannten enthält es das saju-Diagramm, das aus dem Geburtsdatum abgeleitet ist, und die Kräfte der fünf Elemente, die untersuchen, warum ein bestimmtes Hanja zu diesem Namen aus der Perspektive der fünf Elemente passt."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja selbst ist öffentlich verfügbare Information",
        "blocks": [
          {
            "p": "Die verwendbaren Hanja und deren Bedeutungen stammen aus der offiziellen Hanja-Tabelle für Namen, die vom Obersten Gerichtshof von Korea festgelegt wurde, und alle sind in den Leitfäden des Dienstes öffentlich verfügbar. Was die kostenpflichtigen Produkte verkaufen, ist nicht die Hanja-Information, sondern **die Handlung, sie auszuwählen und gemäß dem Namen zu erklären**."
          }
        ]
      },
      {
        "title": "PDFs für globale Nutzer",
        "blocks": [
          {
            "p": "Dokumente, die für die Umwandlung ausländischer Namen in koreanische Namen oder das Schreiben von Namen in Hangul verfügbar sind. Die Preise folgen den Beträgen, die auf dem Zahlungsbildschirm angezeigt werden."
          },
          {
            "ul": [
              "**Korean Name Premium Report** — 3 Seiten. Beinhaltet ein Kalligrafie-Cover, die Bedeutung des Namens und den Grund für die Wahl sowie die Interpretation von saju und den fünf Elementen.",
              "**Hangul Name Art** — 2 Seiten. Beinhaltet ein Kalligrafie-Cover und eine Ausspracheanleitung. Es enthält, wie man den Namen in Hangul schreibt und wie man ihn ausspricht."
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
            "p": "**Ab hier beinhalten die Produkte den Versand.** Im Gegensatz zu den vorherigen Artikeln benötigen Produktion und Versand Zeit, und eine Lieferadresse ist erforderlich. Die Versandinformationen werden nur für die Auftragsbearbeitung und die rechtliche Aufbewahrung verwendet, und sobald die Bearbeitung abgeschlossen ist, werden sie nach der im Richtlinien angegebenen Frist vernichtet."
          }
        ]
      },
      {
        "title": "Wichtige Informationen vor dem Kauf",
        "blocks": [
          {
            "p": "**Digitale Produkte werden sofort nach der Zahlung bereitgestellt.** Sie können jederzeit vor Beginn des Downloads stornieren und eine vollständige Rückerstattung erhalten, aber sobald der Download abgeschlossen ist, ist ein Rücktritt aufgrund einfacher Meinungsänderung eingeschränkt (Artikel 17, Absatz 2 des Gesetzes über den elektronischen Handel). Diese Bedingung wird auf dem Zahlungsbildschirm separat vereinbart."
          },
          {
            "p": "**Beschwerden über den Inhalt der Ergebnisse sind kein Grund für eine Rückerstattung.** Wenn das Dokument jedoch nicht erstellt wurde, die Datei nicht geöffnet werden kann oder der Zahlungsbetrag von der Bestellung abweicht, wird dies als Neuausstellung oder vollständige Rückerstattung bearbeitet."
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
    "title": "Was ist das offizielle Name-Hanja?",
    "summary": "Die Hanja, die für die Namen von Kindern verwendet werden können, wurde vom Obersten Gerichtshof in einer Tabelle festgelegt. Dies fasst zusammen, was die Tabelle ist und warum sie festgelegt wurde.",
    "backLabel": "Nutzungsanleitung",
    "sections": [
      {
        "title": "Was ist das offizielle Name-Hanja?",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal} Zeichen",
                "label": "Offizielles Name-Hanja"
              },
              {
                "value": "{syllableCount} Silben",
                "label": "Hangul-Silben enthalten"
              },
              {
                "value": "{effectiveDate}",
                "label": "Tabellenreferenzdatum"
              }
            ]
          },
          {
            "p": "Sie können nicht einfach irgendein Zeichen für den Namen eines Kindes verwenden. **Das Hanja, das für die Geburtsregistrierung verwendet werden kann, wurde vom Obersten Gerichtshof in einer Tabelle festgelegt, und nur die Zeichen in dieser Tabelle können als Hanja für Namen registriert werden.** Dies wird als offizielles Name-Hanja bezeichnet."
          }
        ]
      },
      {
        "title": "Warum wurde es festgelegt?",
        "blocks": [
          {
            "p": "Es gibt Zehntausende von Hanja. Unter ihnen haben einige unangenehme Bedeutungen, einige werden nicht mehr verwendet und haben keine bekannten Lesungen, und einige können überhaupt nicht auf Computern angezeigt werden. Wenn solche Zeichen in einem Namen enthalten sind, trägt letztendlich die Person, die diesen Namen ein Leben lang tragen wird, die Last. Namen können an verschiedenen Orten wie der Einwohnerregistrierung, Reisepässen, Banken und Schulen unterschiedlich gebrochen oder gelesen werden, was erfordert, dass die Person ihren eigenen Namen erklärt."
          },
          {
            "p": "Daher wurde eine Methode gewählt, um den Bereich der verwendbaren hanja in Namen vorab festzulegen. Anstatt eine einschränkende Regelung zu sein, handelt es sich eher um einen Mechanismus, um sicherzustellen, dass Namen im Laufe des Lebens einer Person ohne Probleme verwendet werden können."
          }
        ]
      },
      {
        "title": "Was ist die Grundlage für die Definitionen?",
        "blocks": [
          {
            "p": "Der Oberste Gerichtshof erstellt die offizielle Tabelle der Namens-hanja, die bei Bedarf überarbeitet wird, und es werden Zeichen hinzugefügt."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Materialien, die in diesem Bildschirm verwendet werden",
        "blocks": [
          {
            "p": "{publisher} offizielle Namens-hanja-Daten · Stand {effectiveDate}"
          },
          {
            "p": "{characterTotal} Zeichen decken {syllableCount} Hangul-Silben ab. Der Hash-Wert der Originaldatei wird ebenfalls gespeichert, sodass bei Änderungen der Tabelle überprüft werden kann, wann und was sich geändert hat."
          }
        ]
      },
      {
        "title": "Die Anzahl der vom Obersten Gerichtshof angekündigten Zeichen unterscheidet sich von dem, was wir zeigen",
        "blocks": [
          {
            "p": "**Die vom Obersten Gerichtshof angekündigten offiziellen Namens-hanja sind {announcedTotal} Zeichen, während wir als Kandidaten {characterTotal} Zeichen präsentieren.** Es gibt keinen Grund, diesen Unterschied zu verbergen, daher geben wir ihn klar an."
          },
          {
            "p": "Wenn Sie die Abfragedaten des Obersten Gerichtshofs überprüfen, enthält diese {listedTotal} Zeichen. Darunter sind **{excludedNoStandardCode} Zeichen**, die **Zeichen sind, die keinen Platz im globalen gemeinsamen Zeichencode (Unicode) haben.** Das System des Obersten Gerichtshofs behandelt solche Zeichen mit Nummern, die nur innerhalb seines eigenen Systems funktionieren, und sie werden auf dem Bildschirm als **Bilder** anstelle von Zeichen angezeigt."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Das Hinzufügen weiterer Schriftarten löst das Problem nicht",
        "blocks": [
          {
            "p": "Damit ein Zeichen auf dem Bildschirm erscheint, muss es eine **Nummer haben, die weltweit anerkannt ist**, und die Schriftart enthält das Bild, das dieser Nummer entspricht. Zeichen, die keine Nummer haben, können in keiner Schriftart enthalten sein. Egal wie viele Schriftarten wir hinzufügen, diese Zeichen erscheinen als leere Kästchen."
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
            "p": "**Der wichtigere Grund liegt bei der Person, die den Namen verwenden wird.** Ein Name ist ein Wert, der an verschiedenen Stellen im Leben einer Person eingetragen wird. Zeichen ohne Zeichencodes können möglicherweise nicht in Systeme für Banken, Schulen, Krankenhäuser oder Pässe eingegeben oder gedruckt werden, selbst nach Abschluss der Geburtseintragung. Daher können wir solche Zeichen nicht empfehlen."
          },
          {
            "p": "Allerdings **bestimmen wir nicht, ob diese Zeichen verwendet werden können oder nicht.** Da sie Zeichen in der Tabelle des Obersten Gerichtshofs sind, kann die Registrierung selbst möglich sein. Wenn Sie dieses Zeichen wirklich verwenden möchten, überprüfen Sie bitte direkt im elektronischen Familienregistersystem des Obersten Gerichtshofs und **fragen Sie die zuständige Behörde nach der tatsächlichen Verwendbarkeit.**"
          }
        ]
      },
      {
        "title": "Wenn Sie hanja verwenden möchten, die nicht in der Tabelle sind",
        "blocks": [
          {
            "p": "Sie können sie nicht verwenden. Genauer gesagt, diese Zeichen werden nicht als hanja für den Namen registriert, und der Name wird nur in Hangul aufgezeichnet. Wenn Sie hanja zusätzlich verwenden möchten, müssen Sie aus der Tabelle wählen."
          },
          {
            "p": "Daher präsentieren wir keine Zeichen, die nicht in der Tabelle sind, als Kandidaten. Alle auf dem Bildschirm sichtbaren hanja sind Zeichen, die tatsächlich für die Geburtseintragung verwendet werden können. Die vollständige Liste ist in der [Vollständigen Liste der offiziellen Namens-Hanja](/guide/hanja) verfügbar."
          }
        ]
      }
    ]
  },
  "guide/hanja": {
    "eyebrow": "Liste",
    "title": "Vollständige Liste der offiziellen Namens-Hanja",
    "summary": "Wir haben die hanja, die für die Geburtseintragung verwendet werden können, nach dem Anfangskonsonanten organisiert. Sie können die festgelegte Lesung und Bedeutung für jedes Zeichen sehen, wenn es in Namen verwendet wird.",
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
            "p": "Die Anzahl der vom Obersten Gerichtshof angekündigten Zeichen beträgt {announcedTotal}, aber diese Liste enthält {characterTotal} Zeichen. **Der Unterschied von {excludedNoStandardCode} Zeichen sind diejenigen, die aufgrund des Fehlens eines Platzes im universellen Zeichencode in keiner Schriftart angezeigt werden können.** Das System des Obersten Gerichtshofs zeigt diese Zeichen als Bilder an."
          },
          {
            "p": "Wir haben die Gründe dafür und warum wir diese Zeichen nicht empfehlen, in [Was ist offizielles Namens-Hanja?](/guide/hanja-basics) detailliert. Sie sollten sich bei der zuständigen Behörde nach der tatsächlichen Verwendbarkeit dieser Zeichen erkundigen."
          }
        ]
      },
      {
        "title": "Anfangskonsonanten mit wenigen Zeichen",
        "slot": "tiny",
        "blocks": [
          {
            "p": "Die untenstehenden Anfangskonsonanten haben sehr wenige offizielle Namens-hanja, daher haben wir sie hier ohne eine separate Seite angezeigt."
          }
        ]
      },
      {
        "kind": "note",
        "title": "So lesen Sie diese Liste",
        "blocks": [
          {
            "p": "Für **伽 · 가 · 절**, wenn \"伽\" in einem Namen verwendet wird, wird es als **가** gelesen und bedeutet \"Tempel\". Selbst für die gleiche hanja ist die Lesung, wenn sie in Namen verwendet wird, durch die Tabelle festgelegt, und sie kann nicht anders verwendet werden."
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
        "Fragen, Rückerstattungen, Datenschutzanfragen und Fehlerberichte haben jetzt einen Ort. Die Kontaktseite im Footer listet unsere E-Mail und Unternehmensdetails.",
        "Worauf sich unsere Antworten stützen und was wir absichtlich nicht tun, steht auf der Über-Seite."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF-Berichte werden in Englisch für Arabisch und Khmer ausgegeben",
      "body": [
        "Wenn Sie den Dienst in Arabisch oder Khmer nutzen, wird das PDF, das Sie kaufen, in Englisch erstellt. Das Tool, das unsere Dokumente layoutet, kann Absätze in diesen beiden Schriften noch nicht setzen.",
        "Der Bildschirm bleibt in Ihrer Sprache, und Ihr Name wird in Ihrer eigenen Schrift im Dokument gedruckt.",
        "Die gleiche Notiz erscheint vor der Zahlung. Wenn das Tool diese Schriften unterstützt, werden wir dies hier mitteilen."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Zahlungen sind noch nicht geöffnet",
      "body": [
        "Die Erstellung eines Namens und das Lesen des Ergebnisses sind heute kostenlos, und es ist kein Konto erforderlich.",
        "Bezahlte Artikel sind noch nicht im Verkauf. Die auf der Preisseite angezeigten Beträge gelten, sobald der Verkauf beginnt."
      ]
    }
  }
} satisfies NoticeCopy;
