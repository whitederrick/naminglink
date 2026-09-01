import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Deutsch — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const DE_DOCS = {
  "guide": {
    "eyebrow": "Berechnungsgrundlage",
    "title": "Was ist die Berechnungsgrundlage?",
    "summary": "Wir legen alle Regeln offen, die Dreams-Link verwendet. Sie können überprüfen, welche Symbole gefunden werden, was im Wörterbuch geschrieben steht — woher die auf dem Bildschirm angezeigten Interpretationen stammen.",
    "backLabel": "Zurück zur Startseite",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Alle hier geschriebenen Zahlen werden **direkt aus dem Symbolwörterbuch und den Übereinstimmungsregeln abgelesen.** Da wir den Text nicht manuell transkribieren, werden die Zahlen in diesen Dokumenten auch geändert, wenn das Wörterbuch erweitert oder die Regeln geändert werden."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Basis für den Dienst",
    "title": "Wie man Symbole in Traumgeschichten findet.",
    "summary": "Es wird erklärt, wie Symbole aus frei geschriebenen Sätzen ausgewählt werden und wie wir ein Symbol herausfiltern, das zufällig in einem längeren Wort vorkommt — 별 (\"Stern\") in 특별할 (\"nichts Besonderes\").",
    "backLabel": "Basis für die Interpretation",
    "sections": [
      {
        "title": "Wir finden Symbole im Text, den Sie bereitstellen.",
        "blocks": [
          {
            "p": "Wenn Sie Ihre Traumgeschichte frei schreiben, suchen wir nach Symbolen in diesem Text aus dem Wörterbuch. Sie müssen keine Elemente auswählen oder in einem bestimmten Format schreiben. Schreiben Sie einfach, wie Sie es normalerweise tun würden, wie 'Letzte Nacht wickelte sich eine riesige Python um mich.'"
          },
          {
            "p": "Bei der Suche betrachten wir nicht nur den Namen des Symbols, sondern auch **{aliasTotal} alternative Namen**. Dies sind Wörter, die sich auf dasselbe beziehen, wie 구렁이 (gureongi) und 뱀 (baem), 떨어지다 (tteoreojida) und 빠지다 (ppajida). Variationen mit Endungen, wie 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda), sind ebenfalls enthalten."
          }
        ]
      },
      {
        "title": "Zeichen, die zufällig innerhalb eines Wortes erscheinen, zählen nicht",
        "blocks": [
          {
            "p": "Dies ist der herausforderndste Aspekt im Koreanischen. Unter den Symbolen gibt es **{singleCharSymbolTotal} einstellige Symbole** wie **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son), die häufig in anderen Wörtern erscheinen."
          },
          {
            "ul": [
              "별 (\"Stern\") versteckt in 특**별**할 (\"nichts Besonderes\")",
              "게 (\"Krabbe\") versteckt in 누군가에**게** (\"von jemandem\")",
              "말 (\"Pferd\") in **말**했다 (\"sagte\"), und 배 (\"Boot, Birne\") in **배**가 고팠다 (\"Wir hatten Hunger\")"
            ]
          },
          {
            "p": "Diese als Symbole zu zählen, führt zu irrelevanten Interpretationen. Daher untersuchen wir die umgebenden Zeichen — wenn **ein koreanisches Zeichen davor steht**, betrachten wir es als Teil eines längeren Wortes und zählen es nicht, und wir prüfen **ob das Folgende ein Partikel oder eine Verbendung ist**, sodass 「소가」 (soga) durchkommt, während 「소리」 (sori) herausgefiltert wird."
          }
        ]
      },
      {
        "kind": "note",
        "title": "So funktioniert es",
        "blocks": [
          {
            "p": "Bevor diese Regel implementiert wurde, enthielten bei Tests mit zwölf tatsächlichen Sätzen **alle zwölf** irrelevante Symbole. Ein Satz ohne signifikanten Inhalt wurde sogar als a conception dream (conception dream) markiert."
          },
          {
            "p": "Jetzt bleibt einer — das 배 (bae) in 「배가 고팠다」 (bae ga gopatda). Da es gleich klingt, aber eine andere Bedeutung hat, kann es nicht nur durch die umgebenden Zeichen herausgefiltert werden."
          },
          {
            "p": "Nichts zu finden, ist eine ehrliche Angelegenheit. Irgendetwas Irrelevantes zu finden, bedeutet jedoch, eine Tradition hinter diesem Wort zu etablieren, die es nie hatte."
          }
        ]
      },
      {
        "title": "Die gleichen Zeichen ergeben immer die gleichen Ergebnisse",
        "blocks": [
          {
            "p": "Es gibt keinen Platz für Zufall in den Übereinstimmungsregeln. Da das Wörterbuch festgelegt ist und die Regeln etabliert sind, wenn Sie denselben Satz erneut eingeben, **wird dasselbe Symbol in derselben Reihenfolge erscheinen**. Die Interpretation, die Sie heute sehen, wird sich nicht von der unterscheiden, die Sie morgen sehen."
          },
          {
            "p": "Diese Qualität ist auch ein Versprechen, das wir uns selbst gegeben haben. Interpretationen, die sich jedes Mal ändern, sind unterhaltsam, aber ohne Grundlage. Dies hängt mit der Geschichte von [warum wir keine Modelle verwenden](/guide/no-ai) zusammen."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Persönliche Informationen",
    "title": "Die Methode, Träume, die Sie aufschreiben, nicht zu speichern",
    "summary": "Wir erklären, was es technisch bedeutet, dass Traumgeschichten nirgendwo aufgezeichnet werden und was im Ergebnislink enthalten ist.",
    "backLabel": "Interpretationsbasis",
    "sections": [
      {
        "title": "Keine Mitgliedschaft erforderlich",
        "blocks": [
          {
            "p": "Dreams-Link erstellt keine Konten. Wir sammeln keine Namen, E-Mails oder Telefonnummern. Die einzigen Dinge, die wir sammeln, sind die Träume, die Sie aufschreiben, wie Sie sich beim Aufwachen gefühlt haben und ob Sie denselben Traum wiederholt träumen, und das bleibt nicht nach der Interpretation."
          },
          {
            "p": "Traumgeschichten sind die privatesten Werte, die dieser Dienst erhält. Deshalb sind die Regeln strenger als nötig — wir haben nicht einmal eine Tabelle erstellt, um das, was Sie einreichen, aufzuschreiben."
          }
        ]
      },
      {
        "title": "Was im Ergebnislink enthalten ist",
        "blocks": [
          {
            "p": "Wenn die Berechnung abgeschlossen ist, sieht die Adresse so aus."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "Was folgt **#** ist der Eingabewert. Dieser Teil wird als **Fragment** bezeichnet, das ein **Teil ist, den der Browser nicht an den Server sendet**. Dies ist ein standardmäßiges Webverhalten und keine Regel, die wir erstellt haben — es wurde ursprünglich entworfen, um einen Standort innerhalb eines Dokuments anzuzeigen, sodass der Server keinen Bedarf hat, es zu sehen."
          },
          {
            "p": "Hier ist diese Eigenschaft besonders wichtig — der Traum, den Sie bereitgestellt haben, **bleibt nicht in den Zugriffsprotokollen.**"
          },
          {
            "p": "Mit anderen Worten, wenn Sie den Ergebnislink öffnen, liest der Browser diesen Wert, um eine Berechnung anzufordern, und unser Server erhält den Wert für die Berechnung, gibt die Antwort zurück und vergisst ihn dann."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bitte seien Sie vorsichtig, wenn Sie Links an andere senden",
        "blocks": [
          {
            "p": "Die Tatsache, dass es nicht auf dem Server gespeichert wird, bedeutet nicht, dass der Link sicher ist. Der Ergebnislink enthält den Traum, den Sie bereitgestellt haben, sodass die Person, die diesen Link erhält, diesen Inhalt lesen kann."
          }
        ]
      },
      {
        "title": "Warum wird die Berechnung auf dem Server durchgeführt, aber nicht gespeichert?",
        "blocks": [
          {
            "p": "Die Berechnung selbst erfolgt auf dem Server. Symbole zu finden erfordert das gesamte Wörterbuch, und dieses Wörterbuch ist zu groß, um es an den Browser zu senden. Das Wörterbuch auf dem Server zu behalten bedeutet auch, dass, wenn ein Fehler behoben wird, er für alle auf einmal reflektiert wird. Allerdings, **nach der Verarbeitung der Anfrage wird dieser Wert nirgendwo verwendet.** Es gibt keinen Code, um ihn in die Datenbank einzufügen."
          },
          {
            "p": "Ein minimaler, für den Betrieb notwendiger Datensatz wird aufbewahrt — ein Zähler, um zu verhindern, dass dieselbe Person zu viele Anfragen in kurzer Zeit sendet. Dies schließt den Trauminhalt nicht ein, und die Zugriffs-IP wird ebenfalls nicht gespeichert. Nur ein Wert, der mit dem Datum gehasht ist, wird gezählt, und dieser Wert ändert sich, wenn sich der Tag ändert."
          }
        ]
      },
      {
        "title": "Was nicht möglich ist, weil es nicht gespeichert wird",
        "blocks": [
          {
            "p": "Um ehrlich zu sein, gibt es Dinge, auf die wir verzichtet haben, weil wir keine Daten speichern."
          },
          {
            "ul": [
              "**Es gibt kein Traumtagebuch.** Sie können die Interpretation von letzter Woche nicht abrufen, und Sie müssen den Link haben, um sie erneut zu sehen. Dies geschieht absichtlich — um ein Tagebuch zu erstellen, müssen die privatesten Aufzeichnungen kontinuierlich gespeichert werden.",
              "**Wir berechnen jedes Mal denselben Wert erneut.** Es gibt keinen Cache. Stattdessen ist das Wörterbuch festgelegt, und die Übereinstimmungsregeln sind deterministisch, sodass derselbe Text immer dasselbe Symbol ergibt — die Regeln ersetzen das, was der Cache garantiert hätte.",
              "**Ein Neuladen bringt das Werbeportal wieder hervor.** Dies liegt daran, dass es keinen Ort gibt, um Betrachtungsprotokolle zu hinterlassen."
            ]
          }
        ]
      },
      {
        "title": "Im Falle eines Kaufs",
        "blocks": [
          {
            "p": "Wenn Sie einen Bericht kaufen, wird zu diesem Zeitpunkt ein Transaktionsprotokoll aufbewahrt. Die Zahlung hat eine gesetzlich definierte Aufbewahrungsfrist, und ohne eine Bestellhistorie können Rückerstattungen nicht bearbeitet werden. Selbst dann **wird der Traumtext, der für die Lesung verwendet wurde, nicht an die Bestellung angehängt** — er wird erneut empfangen und in dem Moment geschrieben, in dem das Dokument nach der Zahlungsbestätigung erstellt wird."
          },
          {
            "p": "Für Details siehe bitte die [Datenschutzrichtlinie](/privacy)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Hinweis",
    "title": "Ankündigungen",
    "summary": "Dies ist ein Ort, um Sie über Änderungen zu informieren, die Ihre Nutzung betreffen könnten.",
    "backLabel": "Zurück zur Startseite",
    "sections": []
  },
  "contact": {
    "eyebrow": "Kontakt",
    "title": "Anfragen",
    "summary": "Dies ist der Kanal für Anfragen zu Nutzung, Rückerstattungen, Anfragen zu persönlichen Informationen und Fehlerberichten sowie für Geschäftsinformationen.",
    "backLabel": "Zurück zur Startseite",
    "sections": [
      {
        "title": "Kontakt per E-Mail",
        "blocks": [
          {
            "p": "Bitte senden Sie Anfragen an **{email}**. Wir werden innerhalb von 2 Werktagen antworten. Für Anfragen zu Zahlungen und Rückerstattungen ist es schneller, Ihre **Bestellnummer oder Zahlungs-E-Mail** anzugeben."
          },
          {
            "p": "Telefonanfragen werden unter {customerCenter} entgegengenommen."
          }
        ]
      },
      {
        "title": "Was kann über diesen Kanal gesendet werden?",
        "blocks": [
          {
            "ul": [
              "**Zahlung und Rückerstattung** — Wenn das Dokument nicht erstellt wurde oder der Zahlungsbetrag von der Bestellung abweicht, wird eine vollständige Rückerstattung gewährt. Die Bedingungen finden Sie in der [Rückerstattungsrichtlinie](/refund-policy).",
              "**Persönliche Informationen** — Wir akzeptieren Anfragen auf Zugang, Berichtigung und Löschung. Die Bearbeitungsrichtlinie finden Sie in der [Datenschutzrichtlinie](/privacy).",
              "**Fehler bei der Interpretation melden** — Wenn Symbole falsch gefunden wurden oder die Interpretation seltsam erscheint, lassen Sie es uns bitte wissen. Wenn Sie angeben, wann Sie diese Traumgeschichte geschrieben haben, können wir sie mit demselben Text erneut nachschlagen."
            ]
          }
        ]
      },
      {
        "title": "Geschäftsinformationen",
        "blocks": [
          {
            "ul": [
              "**Firmenname** — {companyName}",
              "**Vertreter** — {representative}",
              "**Handelsregisternummer** — {businessNumber}",
              "**Postversand-Handelsregisternummer** — {mailOrderNumber}",
              "**Adresse** — {address}",
              "**Kundenservice** — {customerCenter}",
              "**E-Mail** — {email}",
              "**Beauftragter für den Datenschutz** — {privacyOfficer}",
              "**Hosting-Anbieter** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Sie müssen den Traum, den Sie in der Anfrage-E-Mail angegeben haben, nicht erneut schreiben. Wir speichern keine Eingaben, daher können wir sie nicht erneut nachschlagen, und die Bestellnummer ist zur Verifizierung ausreichend. Bitte notieren Sie sie nur, wenn es unbedingt notwendig ist, z.B. um Fehler bei der Interpretation zu melden."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Dienstprinzipien",
    "title": "Was wir nicht tun",
    "summary": "Wir bieten keine Lottozahlen, Traumtagebücher, Schwangerschaftsbestimmungen oder Talismane an. Wir erklären, warum wir uns entschieden haben, dies nicht zu tun.",
    "backLabel": "Interpretationsgrundlage",
    "sections": [
      {
        "title": "Wir bieten keine Lottozahlen an",
        "blocks": [
          {
            "p": "Obwohl dies häufig in Traumdeutungsdiensten angesprochen wird, tun wir dies nicht. **Es gibt keine Grundlage in der traditionellen Traumdeutung, um Zahlen aus Träumen abzuleiten.** Während es Aufzeichnungen über die Interpretation von Schweineträumen als Wohlstand gibt, gibt es keine Regel in der Literatur, die sechs Zahlen daraus ableitet."
          },
          {
            "p": "Um sie zu erstellen, müssten wir sie erfinden, und in diesem Moment wäre dieser Dienst nicht mehr ein Ort, um die von der Tradition überlieferten Interpretationen zu vermitteln. Dies ist besonders besorgniserregend, da es zu finanziellen Verlusten führen könnte."
          }
        ]
      },
      {
        "title": "Wir erstellen keine Traumtagebücher",
        "blocks": [
          {
            "p": "Obwohl es praktisch wäre, eine Funktion zur Sammlung vergangener Träume zu haben, würde dies erfordern, dass wir **die Träume, die Sie bereitstellen, kontinuierlich speichern.** Traumnarrative sind der privateste Aspekt dessen, was dieser Dienst erhält, und wir haben entschieden, dies nicht auszutauschen."
          },
          {
            "p": "Stattdessen können Träume, die Sie aufbewahren möchten, **als Bilder oder Dokumente aufgenommen werden.** Die Verantwortung für die Speicherung liegt bei den Nutzern, nicht bei uns — [Zwei Möglichkeiten, Ihre Träume zu bewahren](/guide/reports)"
          }
        ]
      },
      {
        "title": "Wir bestimmen keine Schwangerschaft oder Geschlecht",
        "blocks": [
          {
            "p": "Wir werden nur angeben, dass ein Symbol, das als a conception dream (conception dream) interpretiert wird, erschienen ist. Ob Sie schwanger sind oder ob das Kind eine Tochter oder ein Sohn ist, ist **nicht etwas, das durch Träume bekannt werden kann.** Solche Aussagen erscheinen nicht auf dem Bildschirm oder in kostenpflichtigen Dokumenten."
          }
        ]
      },
      {
        "title": "Wir verkaufen keine Talismane oder Amulette",
        "blocks": [
          {
            "p": "Ein als ungünstig gelesenes Symbol ist kein Grund, etwas zu kaufen. Ein an ominous dream (inauspicious dream) wurde traditionell verwendet, um **eine Situation anzuzeigen, die jetzt zu prüfen ist**, nicht um zu bezahlen, um etwas abzuwenden."
          },
          {
            "p": "Wir erzeugen keine Angst, um etwas basierend darauf zu verkaufen. Die einzigen Dinge, die wir verkaufen, sind die beiden oben genannten, und keines davon bietet zusätzliche Interpretationen, sondern vielmehr **Wege, um denselben Inhalt zu bewahren.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Wir treffen keine endgültigen Aussagen über die Zukunft",
        "blocks": [
          {
            "p": "Wir treffen keine endgültigen Aussagen darüber, ob etwas passieren wird, wann es passieren wird oder bezüglich Gesundheit, Wohlstand oder Lebensdauer. Die Bedeutung traditioneller Symbole zu vermitteln und die Zukunft vorherzusagen, sind unterschiedliche Angelegenheiten."
          }
        ]
      },
      {
        "title": "Wir fabrizieren keine Interpretationen, die nicht existieren",
        "blocks": [
          {
            "p": "Für Symbole, die nicht im Wörterbuch existieren, werden wir **anmerken, dass wir sie nicht finden konnten.** Wir stellen keine ähnlichen zusammen oder füllen den Raum mit plausiblen Sätzen. Daher verwendet dieser Dienst [keine künstliche Intelligenz für die Traumdeutung](/guide/no-ai). Das Modell sagt nicht, dass es nicht weiß, was es nicht weiß."
          }
        ]
      }
    ]
  },
  "about": {
    "eyebrow": "Einführung",
    "title": "Einführung in Dreams-Link",
    "summary": "Dies ist ein Dienst, der Träume mithilfe eines traditionellen Wörterbuchs für Traumdeutungssymbole interpretiert. Es wird klargestellt, was die Grundlage ist und was nicht angegeben wird.",
    "backLabel": "Zurück zur Startseite",
    "sections": [
      {
        "title": "Was machen wir?",
        "blocks": [
          {
            "p": "Dreams-Link findet **Symbole, die in der traditionellen Traumdeutung verwendet werden**, aus den Träumen, die Sie schreiben, und zeigt deren Bedeutungen an. Da Träume etwas sind, das wir jeden Tag haben, sind die Interpretationen, die Sie auf dem Bildschirm sehen, **kostenlos und erfordern keine Mitgliedschaft.**"
          },
          {
            "p": "Die einzigen Dinge, die gegen Gebühr verkauft werden, sind **zwei Formen der Bewahrung** — ein Bild, das einen guten Traum (dream card) enthält, und ein PDF, das den Hintergrund enthält, wenn ein Symbol, das traditionell als a conception dream (conception dream) betrachtet wird, erscheint."
          }
        ]
      },
      {
        "title": "Was ist die Grundlage?",
        "blocks": [
          {
            "p": "Die Grundlage für die Interpretation ist ein **Wörterbuch von {symbolTotal} Symbolen**. Wir finden Symbole im Traumtext und zeigen nur die Bedeutungen an, die im Wörterbuch für diese Symbole aufgezeichnet sind. Wenn ein Symbol mehrere Bedeutungen hat, wählen wir basierend auf der Situation — da die aufgehende Sonne und die untergehende Sonne traditionell als Gegensätze interpretiert werden."
          },
          {
            "p": "Alle Bedeutungen im Wörterbuch sind **aus den Originaltexten alter Traumdeutungsbücher übersetzt**, und jede Bedeutung wird von dem Originaltext begleitet, der als Grundlage diente. Die Originaltexte, die als Grundlage verwendet werden, sind zwei — die **Zhou Gong's Traumdeutung**, die seit langem in Ostasien gelesen wird, und das **Miller's Traumbuch**, das 1901 im Westen veröffentlicht wurde."
          },
          {
            "p": "Die Suche erfolgt **nur nach festen Regeln**. Der gleiche Traum wird immer die gleichen Symbole ergeben, und die Interpretationen ändern sich nicht von gestern auf heute."
          }
        ]
      },
      {
        "title": "Was sagen wir nicht?",
        "blocks": [
          {
            "p": "**Wir erstellen keine traditionellen Bedeutungen, die nicht im Wörterbuch stehen.** Wenn keine Symbole gefunden werden, geben wir einfach an, dass keine gefunden wurden, und schließen ab. Diese Lücke mit plausiblen Worten zu füllen, ist das, worauf dieser Dienst am vorsichtigsten achtet."
          },
          {
            "p": "**a conception dream (Conception dreams) sind lediglich Hinweise, keine Festlegungen.** Wir informieren Sie nur darüber, dass ein Symbol, das traditionell als a conception dream (conception dream) betrachtet wird, im Traum erschienen ist. Wir sagen keine Schwangerschaft oder das Geschlecht des Kindes voraus, und es gibt keine Grundlage für solche Behauptungen."
          },
          {
            "p": "Wir machen keine **definitiven Aussagen über Gesundheit, Wohlstand oder Karriere.** Dies ist eine Referenz aus der Perspektive der traditionellen Traumdeutung und stellt keinen medizinischen, finanziellen oder rechtlichen Rat dar."
          }
        ]
      },
      {
        "title": "Wir speichern die Träume, die Sie schreiben, nicht.",
        "blocks": [
          {
            "p": "Traumgeschichten sind der privateste Teil dessen, was dieser Dienst erhält. Daher **speichern wir sie nicht.** Eingaben werden nur für Berechnungen verwendet und nicht in irgendeiner Form auf dem Server aufgezeichnet."
          },
          {
            "p": "Wir haben beschlossen, **keine Funktion zu erstellen, um Träume wie ein Traumtagebuch zu sammeln.** Es ist eine wertvolle Funktion, aber sie würde erfordern, die privatesten Schriften aufzubewahren."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Die Methode wird ausführlicher im [Leitfaden-Dokument](/guide) beschrieben. Geschäftsinformationen und Kontaktdaten finden Sie unter [kontaktieren Sie uns](/contact)."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Basis des Dienstes",
    "title": "Was ist die Grundlage des Symbolwörterbuchs?",
    "summary": "Es wird klargestellt, woher die Interpretationen stammen. Die Kriterien für die Unterteilung von {symbolTotal} Symbolen in acht Kategorien, der Grund für die Anfügung von Originaltextpassagen zu jeder Bedeutung und das Prinzip, keine leeren Räume zu füllen.",
    "backLabel": "Interpretationsbasis",
    "sections": [
      {
        "title": "Wir zeigen nur, was im Wörterbuch geschrieben steht.",
        "blocks": [
          {
            "p": "Die Interpretationen von Dreams-Link stammen aus einem **vorgeschriebenen Symbolwörterbuch**. Wir finden Symbole im Text, den Sie bereitstellen, und zeigen die Bedeutungen an, die im Wörterbuch für diese Symbole aufgezeichnet sind, wie sie sind. Wir erstellen keine Wörter, die nicht im Wörterbuch stehen."
          },
          {
            "p": "Derzeit enthält das Wörterbuch **{symbolTotal} Symbole**, und all diese Symbole haben insgesamt **{meaningTotal} Bedeutungen**. Einige Symbole haben nur eine Bedeutung, die meisten haben jedoch mehrere, und für jede Bedeutung wird **die Situation, in der diese Bedeutung zutrifft** ebenfalls vermerkt."
          }
        ]
      },
      {
        "title": "In acht Kategorien unterteilt.",
        "blocks": [
          {
            "p": "Wir haben das, was in Träumen erscheint, basierend auf ihren Eigenschaften in acht Kategorien gruppiert. Die derzeit aufgeführte Anzahl ist in Klammern."
          },
          {
            "ul": [
              "**Objekte**({categoryThing}) · **Aktionen**({categoryAction}) · **Tiere**({categoryAnimal}) — die drei dicksten Kategorien. Diese sind hauptsächlich das, was alte Traumdeutungsbücher diskutieren: sichtbare Objekte, Tiere und in Träumen durchgeführte Aktionen.",
              "**Natur**({categoryNature}) · **Menschen**({categoryPerson}) — große und alte Dinge wie Wasser, Feuer, Sonne und Mond sowie Menschen, die in Träumen erscheinen, wie Könige, Diebe und Verstorbene.",
              "**Orte**({categoryPlace}) · **Körper**({categoryBody}) · **Farben**({categoryColor}) — Orte wie Häuser und Gräber, Körperteile wie Zähne, Haare und Blut sowie Farben."
            ]
          },
          {
            "p": "Um sie nach Kategorien anzuzeigen, können Sie die vollständige Liste im [Symbolwörterbuch](/dream/symbols) einsehen."
          }
        ]
      },
      {
        "title": "Jede Bedeutung wird von einer Originaltextpassage begleitet.",
        "blocks": [
          {
            "p": "Jede der **{meaningTotal} Bedeutungen** im Wörterbuch wird von der **Originaltextpassage** begleitet, die als Grundlage für diese Bedeutung diente. Alle {symbolTotal} Symbole haben dies — wenn es keine Originaltextpassage gibt, kann der Eintrag selbst nicht erstellt werden."
          },
          {
            "p": "Die Originaltexte, die als Grundlage verwendet werden, sind zwei. **Zhou Gong's Traumdeutung** ist ein Traumdeutungsbuch, das seit langem in Ostasien gelesen wird, und **Miller's Traumbuch** ist ein westliches Buch, das 1901 veröffentlicht wurde. Wenn Sie ein Symbol öffnen, können Sie sehen, aus welchem Originaltext die Bedeutung stammt, zusammen mit dem Abschnitt und seiner Bedeutung."
          },
          {
            "p": "**Wir füllen keine leeren Räume aus.** Plausible Ursprünge hinzuzufügen, würde das Dokument dicker machen, aber in diesem Moment wäre dieses Wörterbuch keine Übersetzung dessen, was überliefert wurde, sondern eine Fälschung. Wir schreiben nicht, was nicht im Originaltext steht, und für das, was wir schreiben, müssen wir den Originaltext beifügen."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bei Erweiterungen erweitern wir nur aus dem Originaltext.",
        "blocks": [
          {
            "p": "Wir haben versucht, Einträge basierend auf Modellen von Symbolen zu erstellen, aber die resultierenden Einträge wiederholen entweder die gleichen Worte wie 「Liebe → gute Beziehung」 oder bieten keine Grundlage aus der Tradition. Daher **haben wir keine aufgenommen.** Die aktuelle Größe des Wörterbuchs ist auf die Übersetzung der Originaltexte zurückzuführen, nicht auf die Erstellung von Einträgen — die Gründe, warum wir keine Modelle verwenden, sind detailliert in [warum wir keine Modelle verwenden](/guide/no-ai) beschrieben."
          }
        ]
      },
      {
        "title": "Gut und schlecht sind durch das Wörterbuch vorbestimmt.",
        "blocks": [
          {
            "p": "Jedes Symbol wird von Hinweisen auf Glück und Unglück begleitet. **Gut {polarityPositive}**, **ambivalent je nach Situation {polarityAmbivalent}**, **vorsichtig {polarityNegative}**, und **neutral {polarityNeutral}**."
          },
          {
            "p": "Unter den vier Kategorien sind **die meisten diejenigen, die je nach Situation variieren.** Dies ist nichts, was wir ausgeglichen haben; es ist so, wie es in den Originaltexten geschrieben steht — selbst für dasselbe Symbol gibt es viele Stellen, an denen es je nach dem, was getan wurde, gegensätzlich interpretiert wurde. Dieser Wert spiegelt die Natur jedes Symbols wider, und die Gesamtatmosphäre des Traums wird durch das Sammeln der gefundenen Symbole neu berechnet."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Dienstbasis",
    "title": "Warum dasselbe Symbol unterschiedliche Bedeutungen hat.",
    "summary": "Die aufgehende Sonne und die untergehende Sonne werden traditionell als Gegensätze interpretiert. Dies diskutiert die Struktur, in der {symbolTotal} Symbole {meaningTotal} Bedeutungen haben und wie man die Situation unterscheidet.",
    "backLabel": "Interpretationsbasis",
    "sections": [
      {
        "title": "Selbst wenn die Symbole gleich sind, ergeben unterschiedliche Situationen unterschiedliche Bedeutungen.",
        "blocks": [
          {
            "p": "In alten Traumdeutungsbüchern hat ein Symbol nicht immer eine Bedeutung. Selbst für die gleiche Sonne, **die aufgehende Sonne und die untergehende Sonne wurden gegensätzlich interpretiert** — die erste weist auf Wohlstand im Haushalt hin, während die letzte Sorgen um den Verlust der Eltern anzeigt. Das Wörterbuch ist so geschrieben."
          },
          {
            "p": "Der Grund, warum die {symbolTotal} Symbole insgesamt {meaningTotal} Bedeutungen haben, ist, dass für jede Bedeutung **die Situation, in der diese Bedeutung zutrifft** ebenfalls vermerkt ist, sodass wir, wenn diese Situation im Text, den Sie bereitstellen, sichtbar ist, diese Bedeutung wählen."
          }
        ]
      },
      {
        "title": "Wie unterscheiden wir die Situation?",
        "blocks": [
          {
            "p": "Wir schauen, ob es Wörter gibt, die die Situation im Text, den Sie bereitstellen, anzeigen. In dem Satz 「Ich sah die Sonne untergehen」 wird die Situation des Untergangs angezeigt, während in 「Ich sah die Sonne gerade aufgehen」 die Situation des Aufgangs angezeigt wird. Wenn es keine Wörter gibt, die die Situation anzeigen, interpretieren wir basierend auf der **grundlegenden Bedeutung** dieses Symbols."
          },
          {
            "p": "Wenn Sie also Ihren Traum aufschreiben, geben Sie bitte **nicht nur an, was erschienen ist, sondern auch, welche Aktionen durchgeführt wurden**; dies wird die Interpretation genauer machen. Zu sagen \"Ich sah ein Schwein\" vermittelt weniger als \"das Schwein betrat das Haus.\""
          }
        ]
      },
      {
        "kind": "note",
        "title": "Je mehr Sie schreiben, desto besser, aber es ist nicht notwendig, ausführlich zu schreiben.",
        "blocks": [
          {
            "p": "Einige Sätze sind ausreichend. Mehr zu schreiben bedeutet nicht unbedingt, mehr Symbole zu finden; vielmehr kann es, wenn nicht verwandte Aussagen gemischt werden, zu falschen Symbolen führen."
          }
        ]
      },
      {
        "title": "Es gibt {contextSplitSymbolTotal} Symbole mit unterschiedlichen Bedeutungen.",
        "blocks": [
          {
            "p": "Von den {symbolTotal} Symbolen im Wörterbuch haben **{contextSplitSymbolTotal}** Bedeutungen, die je nach Situation variieren. Der Rest kann unabhängig von der Situation in eine Richtung interpretiert werden."
          },
          {
            "p": "Diese **{contextSplitSymbolTotal}** Symbole sind die empfindlichsten. Eine Fehlinterpretation der Situation kann dazu führen, dass gute Nachrichten als schlechte Nachrichten übermittelt werden oder umgekehrt. Daher gehen wir, wenn die Situation unklar ist, mit der **grundlegenden Bedeutung des Symbols** vor, ohne eine Wahl zu erzwingen — wir möchten nicht über das Ungewisse sprechen, als wäre es sicher."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Das Gefühl beim Aufwachen wird ebenfalls berücksichtigt.",
        "blocks": [
          {
            "p": "Die Gefühle und Wiederholungen, die unten zum Trauminhalt gefragt werden, werden nicht verwendet, um Symbole zu finden. Sie werden herangezogen, um zu bestimmen, in welche Richtung bei variierenden Bedeutungen interpretiert werden soll. Sie müssen keine Wahl treffen; die Ergebnisse werden trotzdem bereitgestellt."
          }
        ]
      },
      {
        "title": "Die allgemeine Atmosphäre des Traums wird separat gezählt.",
        "blocks": [
          {
            "p": "Wenn mehrere Symbole gefunden werden, sammeln wir, ob jedes Symbol positiv oder vorsichtig ist, um den Gesamton des Traums zu bestimmen. Ein Traum, der ein gutes Symbol und ein vorsichtiges Symbol enthält, wird nicht einfach als \"guter Traum\" bezeichnet."
          },
          {
            "p": "Sie können die verschiedenen Symbole und ihre Bedeutungen im [Symbolwörterbuch](/dream/symbols) einsehen. Es ist auch gut, das, was enthalten ist, zu überfliegen, bevor Sie Ihren Traum aufschreiben."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Basis des Dienstes",
    "title": "Kriterien zur Unterscheidung zwischen günstigen und ungünstigen Träumen",
    "summary": "Die vier Werte, die jedem Symbol zugewiesen sind und ihre Verteilung, die Gründe für die unterschiedlichsten Bedeutungen und warum wir gemischte Träume als gemischt diskutieren.",
    "backLabel": "Basis der Interpretation",
    "sections": [
      {
        "title": "Jedes Symbol wird einer von vier Kategorien zugeordnet.",
        "blocks": [
          {
            "p": "Die {symbolTotal} Symbole im Wörterbuch sind jeweils einer der folgenden Kategorien zugeordnet."
          },
          {
            "ul": [
              "**Positiv {polarityPositive}** — interpretiert als angenehme Ereignisse wie Wohlstand, Feiern oder Wohltäter.",
              "**Ambivalent {polarityAmbivalent}** — Symbole wie die Sonne oder das Schwein, deren Bedeutungen je nach den getätigten Handlungen umgekehrt werden können. **Dies ist die häufigste und vorsichtigste Kategorie.**",
              "**Vorsichtig {polarityNegative}** — interpretiert als Streitigkeiten, Verluste oder negative Ereignisse.",
              "**Neutral {polarityNeutral}** — Symbole, die an sich weder günstig noch ungünstig sind, wie Farben."
            ]
          }
        ]
      },
      {
        "title": "Gründe für die unterschiedlichsten Bedeutungen",
        "blocks": [
          {
            "p": "Dies ist kein Gleichgewicht, das wir geschaffen haben. **Es ist, wie die ursprünglichen Texte geschrieben sind.** Alte Texte zur Traumdeutung verzeichneten unterschiedliche Bedeutungen für dasselbe Symbol, je nach Situation, und viele dieser Situationen sind gegensätzlich — ein Schwein zu fangen ist günstig, aber ein Schwein, das von selbst stirbt, ist ungünstig, und das gilt auch für die aufgehende und untergehende Sonne."
          },
          {
            "p": "Daher bedeutet die Tatsache, dass \"ein gutes Symbol erschienen ist\", nicht, dass \"gute Dinge passieren werden.\" Was wir vermitteln können, ist auf die Weise beschränkt, wie dieses Symbol in der Tradition interpretiert wurde."
          }
        ]
      },
      {
        "title": "Der Ton eines Traums wird aus seinen Symbolen gesammelt.",
        "blocks": [
          {
            "p": "Wenn mehrere Symbole gefunden werden, sammeln wir ihre günstigen und vorsichtigen Bedeutungen, um den Gesamton des Traums zu bestimmen. Wenn nur positive Symbole erscheinen, ist es ein guter Traum; wenn nur vorsichtige Symbole erscheinen, ist es ein vorsichtiger Traum; wenn **gemischt, werden wir es als gemischt diskutieren.**"
          },
          {
            "p": "Wir erzwingen keine gemischte Interpretation auf eine Seite. In Wirklichkeit sind die Träume, die Menschen haben, größtenteils gemischt, und sie als \"guten Traum\" zusammenzufassen, ist weder genau noch hilfreich."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nicht gesprochene Worte",
        "blocks": [
          {
            "p": "Wir treffen keine definitiven Aussagen darüber, was passieren wird, wann es passieren wird oder bezüglich Gesundheit und Wohlstand. Die Bedeutungen traditioneller Symbole zu übersetzen, ist etwas anderes, als die Zukunft vorherzusagen."
          }
        ]
      },
      {
        "title": "Wenn vorsichtige Träume erscheinen",
        "blocks": [
          {
            "p": "Selbst wenn ein als vorsichtig interpretiertes Symbol erscheint, bedeutet das nicht unbedingt schlechte Nachrichten. In der traditionellen Traumdeutung wurden ungünstige Träume im Allgemeinen verwendet, um **die Situation anzuzeigen, die jetzt untersucht werden muss.** Wenn ein Symbol, das als Streit interpretiert wird, erscheint, kann es als Vorschlag gelesen werden, den Mund zu halten."
          },
          {
            "p": "Aus demselben Grund verkauft dieser Dienst keine Talismane oder Amulette. Die einzigen Dinge, die verkauft werden, sind [zwei Methoden, um Ihre Träume zu bewahren](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Empfängnis-Träume",
    "title": "Wie man Empfängnis-Träume unterscheidet",
    "summary": "Wie wir die {conceptionSymbolTotal} Symbole für Empfängnis-Träume bestimmen, warum nicht alle Schweineträume Empfängnis-Träume sind und das Prinzip, dass wir keine Schwangerschaft oder Geschlecht bestimmen.",
    "backLabel": "Basis der Interpretation",
    "sections": [
      {
        "title": "Zuerst lassen Sie uns klarstellen.",
        "blocks": [
          {
            "p": "**Dreams-Link bestimmt nicht den Schwangerschaftsstatus. Wir geben auch nicht das Geschlecht des Kindes an.** Dies ist etwas, das durch Träume nicht bekannt sein kann, noch ist es etwas, das wir tun können."
          },
          {
            "p": "Was wir vermitteln können, ist darauf beschränkt — **die Tatsache, dass ein Symbol, das traditionell als Empfängnis-Traum interpretiert wird, in diesem Traum erschienen ist.** Wie dieses Symbol von den Alten interpretiert wurde, ist alles, was wir bereitstellen können."
          }
        ]
      },
      {
        "title": "Es gibt {conceptionSymbolTotal} Symbole, die als Empfängnis-Träume interpretiert werden.",
        "blocks": [
          {
            "p": "Von den {symbolTotal} Symbolen im Wörterbuch sind **{conceptionSymbolTotal}** als Empfängnis-Träume gekennzeichnet. Viele sind Tiere wie Drachen, Schweine und Tiger, sowie Früchte wie Pfirsiche, Persimonen und Jujuben, und umfassen auch die Sonne und den Mond."
          },
          {
            "p": "Allerdings bedeutet **nur weil dieses Symbol erschienen ist, nicht sofort, dass es ein Empfängnis-Traum ist.** Hier hat dieser Dienst erhebliche Anstrengungen unternommen."
          }
        ]
      },
      {
        "title": "Wir bestimmen basierend auf der gewählten Bedeutung, nicht dem Symbol.",
        "blocks": [
          {
            "p": "Das Schwein ist ein Symbol für Empfängnis-Träume, aber es ist auch **der Vertreter der Wohlstandsträume.** Wenn wir es nur aufgrund des Erscheinens des Symbols als Empfängnis-Traum erklären, dann hätten alle, die von Schweinen träumen, Empfängnis-Träume. In Wirklichkeit wurden die meisten als Wohlstandsträume interpretiert."
          },
          {
            "p": "Daher betrachten wir **die tatsächlich gewählte Bedeutung dieses Symbols, nicht nur das Symbol selbst.** Wir markieren es nur als Empfängnis-Traum, wenn die Bedeutung, die in Richtung Empfängnis tendiert, basierend auf der von Ihnen bereitgestellten Situation gewählt wird. Selbst beim gleichen Schwein kann die Interpretation je nach Satz unterschiedlich sein."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Wenn Sie Schwangerschaft erwähnen, schauen wir zuerst darauf.",
        "blocks": [
          {
            "p": "Wenn Ihr Schreiben Begriffe wie Schwangerschaft, Empfängnis-Träume oder Geburt enthält, werden wir die Empfängnis-Bedeutung unter den Bedeutungen, die dieses Symbol hat, priorisieren. Selbst der gleiche Traum kann je nach aktueller Situation unterschiedlich interpretiert werden."
          }
        ]
      },
      {
        "title": "Der Grund für einen separaten Bericht über Empfängnis-Träume.",
        "blocks": [
          {
            "p": "Empfängnis-Träume dienen einem anderen Zweck als andere Träume. Sie werden oft lange nach der Geburt des Kindes diskutiert und unter Familienmitgliedern geteilt. Daher haben wir anstelle einer bloßen Ansicht auf einem Bildschirm ein **Dokument erstellt, das aufbewahrt werden kann.**"
          },
          {
            "p": "Was enthalten ist, ist in [zwei Methoden, um Ihre Träume zu bewahren](/guide/reports) umrissen. Sie können alle Interpretationen einsehen, ohne sie zu kaufen."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Wie man es benutzt",
    "title": "Wie man einen Traum schreibt",
    "summary": "Wenn Sie aufschreiben, was Sie gesehen und getan haben, wird es gut interpretiert. Wir erklären, warum ein einziges Verb die Bedeutung bestimmt und warum wir auch fragen, wie Sie sich gefühlt haben und ob der Traum wiederkehrt.",
    "backLabel": "Basis der Interpretation",
    "sections": [
      {
        "title": "Bitte schreiben Sie auf, was Sie gesehen und getan haben",
        "blocks": [
          {
            "p": "Es gibt kein spezifisches Format. Zwei oder drei Sätze, wie Sie normalerweise sprechen würden, sind ausreichend. Was gut interpretiert wird, hängt jedoch von **was Sie gesehen haben** und **was passiert ist** ab."
          },
          {
            "ul": [
              "Gut interpretiert — 「Eine große Schlange hat sich um mich gewickelt」, 「Ich sah klares Wasser fließen」, 「Mein Zahn fiel von selbst aus」",
              "Nicht interpretiert — 「Ich hatte Angst」, 「Ich fühlte mich seltsam」, 「Es schien, als ob jemand mich hasste」"
            ]
          },
          {
            "p": "Wenn Sie nur Ihre Gefühle aufschreiben, wird es keine Symbole zu finden geben. Traditionelle Traumdeutung spricht von [Objekten und Handlungen](/guide/categories), nicht von Emotionen."
          }
        ]
      },
      {
        "title": "Das Aufschreiben dessen, was Sie getan haben, macht es genauer",
        "blocks": [
          {
            "p": "Selbst dasselbe Symbol kann je nach Situation unterschiedliche Bedeutungen haben, mit {contextSplitSymbolTotal} Fällen. Der Sonnenaufgang und der Sonnenuntergang wurden traditionell gegensätzlich interpretiert."
          },
          {
            "p": "Daher ist 「Ich sah ein Schwein」 weniger genau als 「Das Schwein kam ins Haus」, und 「Es war Wasser」 ist weniger genau als 「Ich trank klares Wasser」. **Ein einzelnes Verb bestimmt die Bedeutung.**"
          }
        ]
      },
      {
        "title": "Der Grund für die Fragen zu Gefühlen und Wiederholungen",
        "blocks": [
          {
            "p": "Unter dem Trauminhalt gibt es einen Platz, um **wie Sie sich beim Aufwachen gefühlt haben** und **ob Sie wiederkehrende Träume haben** auszuwählen. Sie müssen nicht beide auswählen, damit Ergebnisse bereitgestellt werden."
          },
          {
            "p": "Diese Werte werden nicht verwendet, um Symbole zu finden. Sie werden herangezogen, wenn entschieden wird, **welche Bedeutung aus demselben Symbol gewählt werden soll** und wie die Ergebnisse vermittelt werden. Wiederkehrende Träume wurden traditionell anders betrachtet als ein Traum, der einmal hatte."
          }
        ]
      },
      {
        "kind": "note",
        "title": "In Fällen, die Schwangerschaft erwähnen",
        "blocks": [
          {
            "p": "Wenn der Text Wörter wie Schwangerschaft, 태몽 oder Geburt enthält, betrachten wir zuerst die Bedeutung des Konzeptionstraums dieses Symbols. Selbst der gleiche Schweintraum wurde von den alten Menschen je nach Situation unterschiedlich interpretiert — [wie man 태몽 unterscheidet](/guide/conception-dreams)"
          }
        ]
      },
      {
        "title": "Es ist nicht notwendig, lange zu schreiben",
        "blocks": [
          {
            "p": "Eine längere Länge bedeutet nicht, dass mehr Symbole gefunden werden. Tatsächlich besteht eine höhere Wahrscheinlichkeit, dass irrelevante Wörter als Symbole interpretiert werden, wenn nicht verwandte Wörter lang gemischt werden. Bitte schreiben Sie nur die **einprägsamen Szenen** auf."
          },
          {
            "p": "Der Text, den Sie schreiben, wird nirgendwo gespeichert. Der Grund, warum Sie frei schreiben können, wird in [der Methode des Nicht-Speicherns](/guide/no-storage) erklärt."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Service-Basis",
    "title": "Kriterien, die in acht Kategorien unterteilt sind",
    "summary": "Acht Kategorien — von Objekten, Handlungen und Tieren bis hin zum Körper und Farben — mit wie vielen Symbolen jede enthält und warum es keine Kategorie für Emotionen gibt.",
    "backLabel": "Interpretationsbasis",
    "sections": [
      {
        "title": "In acht Kategorien unterteilt, was in Träumen erscheint",
        "blocks": [
          {
            "p": "Wir haben {symbolTotal} Symbole in acht Kategorien nach ihrem Charakter gruppiert. Die entscheidende Frage ist **was es im Traum darstellt** — ein Tier, ein Objekt oder etwas, das Sie getan haben."
          },
          {
            "ul": [
              "**Objekte {categoryThing}** — greifbare Gegenstände wie Geld, Spiegel und Messer. Dies ist die umfangreichste Kategorie.",
              "**Handlungen {categoryAction}** — Dinge, die im Traum getan oder erlebt werden, wie Baden, Feiern oder Geschlagenwerden.",
              "**Tiere {categoryAnimal}** — Drachen, Schweine, Schlangen und Kühe. Viele davon wurden als 태몽 betrachtet.",
              "**Natur {categoryNature}** — große und alte Dinge wie Wasser, Feuer, Sonne und Mond.",
              "**Menschen {categoryPerson}** — Menschen, die in Träumen erscheinen, wie Könige, Diebe und verstorbene Personen.",
              "**Orte {categoryPlace}** — Orte, an denen Träume stattfinden, wie Häuser, Brunnen und Gräber.",
              "**Körper {categoryBody}** — Zähne, Haare, Blut. Die Bedeutung variiert je nachdem, wo am Körper es ist.",
              "**Farben {categoryColor}** — sie haben keinen inhärenten guten oder schlechten Wert und werden basierend auf dem interpretiert, womit sie assoziiert werden."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Der Grund, warum es keine numerischen Kategorien gibt",
        "blocks": [
          {
            "p": "Wir haben keine Kategorie für Zahlen wie 「drei」 oder 「sieben」 erstellt. **Keiner der beiden ursprünglichen Texte legt eine Zahl als Eintrag fest.** Um diese Kategorie zu öffnen und zu füllen, müssten wir etwas schreiben, das in keinem der Texte erscheint."
          }
        ]
      },
      {
        "title": "Warum es keine emotionale Kategorie gibt",
        "blocks": [
          {
            "p": "Wir haben keine Kategorie für Gefühle wie 「Angst」 oder 「Sehnsucht」 erstellt. **Das liegt daran, dass in den alten Traumdeutungstexten keine Emotionen erwähnt werden.** Beide ursprünglichen Texte sprechen von dem, was gesehen wird und was passiert, nicht von den Gefühlen des Träumers als Gegenstand der Interpretation."
          },
          {
            "p": "Wir haben einmal versucht, eine Kategorie für Emotionen zu erstellen, und was herauskam, waren Begriffe wie 「Verlust von Zuneigung」 und 「emotionale Stabilität」. Dies sind keine **Formen**, die in Träumen erscheinen, sondern Vokabular aus der modernen Psychologie. Das ist eine andere Art von Dienst und nicht das, was dieses Wörterbuch anstrebt."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Also, wenn Sie schreiben",
        "blocks": [
          {
            "p": "Bitte schreiben Sie **was Sie gesehen und getan haben** anstelle von Gefühlen, da es viel besser interpretiert wird. Wir fragen jedoch separat nach, wie Sie sich beim Aufwachen gefühlt haben — dies wird in Situationen herangezogen, in denen die Bedeutungen selbst für dasselbe Symbol variieren können."
          }
        ]
      },
      {
        "title": "Farben werden nicht allein verwendet",
        "blocks": [
          {
            "p": "Farben {categoryColor} haben keinen inhärenten guten oder schlechten Wert. So wie blaue Schlangen und rote Schlangen unterschiedlich interpretiert wurden, ändern sich ihre Bedeutungen basierend auf **womit sie assoziiert werden**. Daher wird diese Kategorie als Werte betrachtet, die beim Erscheinen mit anderen Symbolen gelesen werden."
          },
          {
            "p": "Die vollständige Liste nach Kategorie ist im [Symbolwörterbuch](/dream/symbols) verfügbar. Wenn Sie ein Symbol öffnen, werden die vermittelte Bedeutung, Kategorie und verwandte Symbole bereitgestellt."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Wie man es benutzt",
    "title": "Wenn ein Symbol nicht gefunden wird",
    "summary": "Wenn nichts gefunden wird, sagen wir das. Wir erläutern, warum das passiert, was wir stattdessen auf diesem Bildschirm zeigen und wie das Wörterbuch erweitert wird.",
    "backLabel": "Interpretationsbasis",
    "sections": [
      {
        "title": "Wenn wir nichts finden, sagen wir, dass wir nichts gefunden haben",
        "blocks": [
          {
            "p": "Wenn wir kein einziges Symbol im Text finden können, den Sie geschrieben haben, **sagen wir Ihnen, dass wir nichts gefunden haben.** Wir zwingen kein ähnliches Symbol darauf oder schreiben einen plausiblen Satz, um die Lücke zu füllen."
          },
          {
            "p": "Dies ist das größte Anliegen für diesen Dienst. In dem Moment, in dem Sie die Lücke füllen, divergieren die Interpretation, die durchkommt, und das, was tatsächlich getan wird."
          }
        ]
      },
      {
        "title": "Warum kann es nicht gefunden werden?",
        "blocks": [
          {
            "p": "Es ist normalerweise eines der Folgenden."
          },
          {
            "ul": [
              "**Es ist ein Symbol, das noch nicht im Wörterbuch ist.** Derzeit sind {symbolTotal} Symbole aufgeführt, aber es gibt viele weitere, die in Träumen erscheinen könnten.",
              "**Du hast nur deine Gefühle aufgeschrieben.** Wenn du nur Emotionen wie \"Ich hatte Angst\" oder \"Es fühlte sich seltsam an\" hast, gibt es keine Symbole, die identifiziert werden können. Die traditionelle Traumdeutung bezieht sich auf **sichtbare Objekte und Handlungen**, nicht auf Emotionen.",
              "**Es ist zu kurz.** Es ist besser, in Sätzen zu schreiben, anstatt nur ein oder zwei Wörter."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Wenn du es erneut versuchst zu schreiben",
        "blocks": [
          {
            "p": "Bitte füge **hinzu, was du gesehen und was du getan hast** im Traum. Zu sagen \"Ich war ängstlich\" ist weniger effektiv als zu sagen \"meine Zähne fielen von selbst aus,\" und \"ich mochte es\" ist weniger effektiv als zu sagen \"ich sah klares Wasser fließen.\""
          }
        ]
      },
      {
        "title": "Wir lassen keinen leeren Bildschirm zurück",
        "blocks": [
          {
            "p": "Wenn etwas nicht gefunden werden kann, zeigen wir auch **{popularSymbolCount} häufig gesuchte Symbole** auf diesem Bildschirm. Diese werden aus den repräsentativsten im Wörterbuch ausgewählt, was dir helfen kann, dich zu erinnern, ob eines von ihnen in deinem Traum war."
          },
          {
            "p": "Wenn du alles durchstöbern möchtest, kannst du {symbolTotal} Symbole, die nach Kategorien organisiert sind, im [Symbolwörterbuch](/dream/symbols) finden. Jedes Symbol enthält seine übermittelte Bedeutung und verwandte Symbole."
          }
        ]
      },
      {
        "title": "Wie wird das Wörterbuch in Zukunft erweitert?",
        "blocks": [
          {
            "p": "Anstatt die Zahlen zu erhöhen, konzentrieren wir uns zuerst darauf, **genau zu identifizieren, was bereits vorhanden ist**. Wir haben {aliasTotal} alternative Namen für dieselben Symbole aufgenommen, und wir haben sichergestellt, dass auch Wörter mit Suffixen, die ihre Formen ändern, identifiziert werden können."
          },
          {
            "p": "Bei der Erweiterung der Symbole selbst fügen wir nur **das hinzu, was im Originaltext geschrieben steht**. Wenn eine Bedeutung keinen entsprechenden Originalausdruck hat, wird kein Eintrag erstellt — einfach die Zahlen ohne Grundlage zu erhöhen, verwandelt es in eine Schöpfung, nicht in ein Wörterbuch. Die Gründe für diesen Versuch und seine Ergebnisse sind dokumentiert in [warum wir keine Modelle verwenden](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Dienstbasis",
    "title": "Gründe für die Nichtverwendung von künstlicher Intelligenz in der Traumdeutung",
    "summary": "Es gibt keinen Code, der ein Modell aufruft, um Deutungen zu erstellen. Dies ist das Ergebnis des Versuchs, das Wörterbuch mithilfe eines Modells zu erweitern und was dabei gewonnen und was geopfert wurde.",
    "backLabel": "Interpretationsbasis",
    "sections": [
      {
        "title": "Künstliche Intelligenz wird nicht in der Traumdeutung verwendet",
        "blocks": [
          {
            "p": "Viele aktuelle Traumdeutungsdienste zeigen Texte, die durch das Einfügen von Traumgeschichten in generative Modelle erstellt wurden. Dreams-Link tut dies nicht. **Es gibt keinen Code, der ein Modell aufruft, um Deutungen zu erstellen.**"
          },
          {
            "p": "Was wir tun, ist einfach. Wir finden die Symbole im Text, den du bereitstellst, und wählen die Bedeutungen aus, die das Wörterbuch über diese Symbole geschrieben hat. Es gibt keinen Platz für Sätze, die nicht im Wörterbuch stehen."
          },
          {
            "p": "Das Wörterbuch selbst wird nicht von einem Modell erstellt. Jede Bedeutung ist begleitet von **dem Abschnitt aus dem ursprünglichen Traumdeutungstext, aus dem sie stammt**, und dieser Abschnitt wird Wort für Wort mit der Originaldatei verglichen."
          }
        ]
      },
      {
        "title": "Warum wurde diese Entscheidung getroffen?",
        "blocks": [
          {
            "p": "**Modelle sagen nicht, dass sie nicht wissen, was sie nicht wissen.** Wenn sie nach Symbolen ohne übermittelte Basis gefragt werden, fabrizieren sie plausible Ursprünge. Und ob es fabriziert ist oder nicht, ist etwas, das der Leser nicht erkennen kann. Wenn Schöpfung anstelle der Übermittlung von Tradition eingefügt wird, bricht die Prämisse des Dienstes zusammen."
          },
          {
            "p": "Wir haben versucht, ein Modell Symbole erstellen zu lassen, um das Wörterbuch zu erweitern. Von sechsundsechzig Beispielen, die als wertvoll für die Übernahme ausgewählt wurden, **konnten fünfundfünfzig keine übermittelte Basis bieten**, und es gab auch Beispiele wie U-Bahn und Autobahn, die in der traditionellen Traumdeutung nicht existieren können. Daher **wurden keine aufgenommen.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Das Gleiche galt auch für ein größeres Modell",
        "blocks": [
          {
            "p": "Als wir dasselbe mit einem besseren Modell durchführten, bestand eines von neunzehn, und das eine war lediglich eine Wiederholung des gleichen Wortes mit der gleichen Basis. Ein größeres Modell spricht nur **plausibler** über das, was es nicht weiß."
          }
        ]
      },
      {
        "title": "Die Vorteile der Nichtverwendung eines Modells",
        "blocks": [
          {
            "ul": [
              "**Wenn es der gleiche Traum ist, wird die gleiche Deutung herauskommen.** Die Worte ändern sich nicht jedes Mal, wenn du es ansiehst.",
              "**Es ist schnell.** Es gibt kein Warten auf die Antwort des Modells, sodass die Ergebnisse sofort verfügbar sind.",
              "**Der Traum, den du geschrieben hast, geht nicht nach außen.** Es ist nicht notwendig, ihn an den Server eines externen Unternehmens zu senden — bitte lies dies zusammen mit [der Methode, die nicht speichert](/guide/no-storage).",
              "**Es kann kostenlos angeboten werden.** Träume sind etwas, das wir jeden Tag haben, also gibt es viele Anfragen. Wenn für jede Anfrage ein Modell aufgerufen wird, müssen die Kosten irgendwo gedeckt werden."
            ]
          }
        ]
      },
      {
        "title": "Stattdessen, was geopfert wurde",
        "blocks": [
          {
            "p": "Wir können nicht interpretieren, was nicht im Wörterbuch steht. Hätten wir ein Modell verwendet, gäbe es eine plausible Antwort auf das, was du geschrieben hast. Wir haben uns entschieden, **zu sagen, dass wir es nicht finden konnten, wenn wir es nicht finden konnten.** Was wir in diesem Moment zeigen, ist dokumentiert in [wenn ein Symbol nicht gefunden werden kann](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Bezahlte Produkte",
    "title": "Zwei Möglichkeiten, deine Träume zu bewahren",
    "summary": "Die Deutung selbst verursacht keine Gebühren. Sie erklärt, was die beiden kostenpflichtigen Optionen sind, was sie enthalten und warum sie keine besseren Deutungen sind.",
    "backLabel": "Interpretationsbasis",
    "sections": [
      {
        "title": "Die Deutung selbst verursacht keine Gebühren",
        "blocks": [
          {
            "p": "Das Aufschreiben deines Traums und das Sehen, welche Symbole enthalten sind, **kostet kein Geld und erfordert keine Mitgliedschaft.** Da die Menschen jeden Tag träumen, haben wir entschieden, dass dieser Raum kostenlos angeboten werden sollte."
          },
          {
            "p": "**Die beiden kostenpflichtigen Optionen sind keine besseren Deutungen.** Sie sind **zwei Möglichkeiten, die gleiche Deutung zu bewahren.** Der Inhalt, den du auf dem Bildschirm siehst, ändert sich nach der Zahlung nicht."
          }
        ]
      },
      {
        "title": "Traumkarte — Ein Bild",
        "blocks": [
          {
            "p": "Wir stellen die in deinem Traum gefundenen Symbole und ihre Bedeutungen in **einem Bild zur Verfügung.** Es ist eine Bilddatei, kein PDF, sodass du es so speichern oder an andere senden kannst."
          },
          {
            "p": "Dies ist für diejenigen, die Bedauern empfinden, wenn ein guter Traum nach dem Schließen des Bildschirms verschwindet. Da wir Träume nicht speichern, ist dies der einzige Weg, sie zu bewahren, wenn du sie aufbewahren möchtest."
          }
        ]
      },
      {
        "title": "Konzeptionstraumbericht — Dokument {conceptionPages} Seiten",
        "blocks": [
          {
            "p": "Wir erstellen ein **{conceptionPages}-seitiges Dokument** über Träume, die Symbole zeigen, die auf einen Konzeptionstraum hinweisen. Es enthält, welche Symbole erschienen sind, wie diese Symbole traditionell interpretiert wurden, und einen Raum, um diese Informationen festzuhalten."
          },
          {
            "p": "Konzeptionsträume werden oft unter Familienmitgliedern besprochen und geteilt, selbst nachdem das Kind geboren ist, daher haben wir ein separates Dokument für Träume erstellt, die zu wertvoll sind, um sie nur auf dem Bildschirm zu sehen."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hier werden auch keine Wörter verwendet",
        "blocks": [
          {
            "p": "Wir treffen keine Urteile über den Schwangerschaftsstatus oder das Geschlecht des Kindes. Solche Aussagen sind nicht im Dokument enthalten. Für weitere Details siehe bitte [wie Konzeptionsträume gefiltert werden](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Warum gibt es kein Dokument mehr?",
        "blocks": [
          {
            "p": "Der Geschwisterdienst erstellt einen neunseitigen Bericht. Dies liegt daran, dass die saju-Engine viele Werte aus einem einzigen Geburtsdatum extrahiert. Die Traumdeutung in der koreanischen Tradition funktioniert nicht so."
          },
          {
            "p": "Das Wörterbuch enthält {symbolTotal} Symbole und {meaningTotal} Bedeutungen, aber **nur wenige Symbole gelten tatsächlich für einen einzelnen Traum**. Um das auf neun Seiten auszudehnen, müsste man Dinge schreiben, die in keinem Originaltext zu finden sind, und genau das hat dieser Dienst entschieden, nicht zu tun. Daher ist das Dokument so lang, wie es die Materialien ehrlich erlauben, und nicht länger."
          }
        ]
      },
      {
        "title": "Werte und Verfügbarkeit",
        "blocks": [
          {
            "p": "Die Preise sind im [Preishandbuch](/pricing) verfügbar. Der Grund, warum dieses Dokument keine Beträge auflistet, ist absichtlich — um Situationen zu vermeiden, in denen das Leitdokument mit veralteten Beträgen zurückbleibt, wenn sich die Werte ändern. Der Bildschirm und die Bedingungen lesen alle die Beträge aus demselben Ort."
          },
          {
            "p": "Das Dokument, für das Sie bezahlt haben, kann **mit derselben Bestellung erneut empfangen werden.** Da wir jedoch keine Dateien speichern, kann es nicht erneut erstellt werden, sobald Sie den Ergebnisscreen verlassen — bitte bewahren Sie die erhaltene Datei auf."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const DE_NOTICES = {
  "kindLabels": {
    "service": "Dienst",
    "product": "Berichte",
    "engine": "Berechnung",
    "support": "Unterstützung"
  },
  "intro": "Änderungen Ihrer Nutzungsbedingungen — Preise, Richtlinien — werden hier veröffentlicht, bevor sie in Kraft treten. Interne Verbesserungen, wie z.B. eine schnellere Anzeige, werden hier nicht veröffentlicht: Was hier erscheint, ist das, was Sie wissen müssen.",
  "empty": {
    "title": "Keine Mitteilungen veröffentlicht",
    "body": "Wenn es Änderungen gibt, über die wir Sie informieren müssen, werden sie hier veröffentlicht."
  },
  "effective": "Gültig ab {date}",
  "pager": {
    "label": "Mitteilungsseite",
    "newer": "← Neueste",
    "older": "Frühere Mitteilungen →"
  },
  "items": {
    "2026-08-06-no-storage": {
      "title": "Der bereitgestellte Traum wird nicht gespeichert.",
      "body": [
        "Traumgeschichten sind die privatesten Werte, die dieser Dienst erhält. Daher werden sie in keiner Tabelle aufgezeichnet. Die Eingabe wird nur in der Ergebnisadresse für die Berechnung mitgeführt, und sobald das Fenster geschlossen ist, verschwindet sie.",
        "Wir haben beschlossen, keine Funktion zu erstellen, die Träume sammelt und den Verlauf anzeigt (Traumtagebuch). Es ist eine nützliche Funktion, aber dafür müssen die privatesten Aufzeichnungen kontinuierlich gespeichert werden.",
        "Wenn Sie den Ergebnislink an andere senden, enthält er den Trauminhalt. Bitte seien Sie vorsichtig beim Teilen."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Die Ergebnisse enthalten das Symbolwörterbuch und die Berechnungskriterien.",
      "body": [
        "Die Grundlage für die Interpretation ist das traditionelle Traumdeutungssymbolwörterbuch. Die Ergebnisse und Dokumente enthalten die Version dieses Wörterbuchs (z.B. 1.2.0) und die Version der Übereinstimmungsregeln (zum Beispiel dream-1.0.0). Der gleiche Traum wird immer dasselbe Symbol basierend auf denselben Kriterien ergeben.",
        "Wenn wir Symbole zum Wörterbuch hinzufügen oder Bedeutungen ändern, die die Ergebnisse beeinflussen können, wird dies hier angegeben. Dies liegt daran, dass sich die Ergebnisse, die Sie zuvor erhalten haben, ändern können.",
        "Wir erstellen keine traditionellen Bedeutungen, die nicht im Wörterbuch enthalten sind. Wenn keine Symbole gefunden werden, geben wir einfach an, dass keine gefunden wurden, und schließen ab."
      ]
    },
    "2026-08-06-conception": {
      "title": "Wir informieren Sie nur über einen a conception dream (conception dream) und treffen keine Urteile.",
      "body": [
        "Wenn Symbole, die traditionell als a conception dream (conception dream) betrachtet werden, im Traum erscheinen, werden wir Sie über diese Tatsache informieren. Wir bestimmen jedoch nicht den Schwangerschaftsstatus oder das Geschlecht des Kindes — solche Behauptungen haben keine Grundlage, und medizinische Urteile liegen in der Verantwortung medizinischer Einrichtungen.",
        "Die Erwähnung von Söhnen und Töchtern in traditionellen Erzählungen spiegelt Bräuche wider, die überliefert wurden, und bedeutet nicht, dass wir dies korrekt vorhersagen."
      ]
    }
  }
} satisfies NoticeCopy;
