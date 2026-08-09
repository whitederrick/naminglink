import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Deutsch — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const DE_DOCS = {
  "about": {
    "eyebrow": "Einführung",
    "title": "Einführung in Dreams-Link",
    "summary": "Dies ist ein Dienst, der Träume mithilfe eines traditionellen Wörterbuchs für Traumdeutung interpretiert. Es wird klargestellt, was als Grundlage verwendet wird und was nicht erwähnt wird.",
    "backLabel": "Zurück zur Startseite",
    "sections": [
      {
        "title": "Was machen wir?",
        "blocks": [
          {
            "p": "Dreams-Link findet **Symbole, die in der traditionellen Traumdeutung verwendet werden** aus den Träumen, die Sie aufschreiben, und zeigt deren Bedeutungen an. Da Träume etwas sind, das wir täglich erleben, sind die auf dem Bildschirm angezeigten Interpretationen **kostenlos und erfordern keine Mitgliedschaft.**"
          },
          {
            "p": "Die einzigen Dinge, die gegen Gebühr verkauft werden, sind **zwei Formen der Bewahrung** — ein Bild (Traumkarte), das einen guten Traum enthält, und ein PDF, das den Hintergrund festhält, wenn ein Symbol, das traditionell als 태몽 (Konzeptionstraum) betrachtet wird, erscheint."
          }
        ]
      },
      {
        "title": "Was ist die Grundlage für die Interpretation?",
        "blocks": [
          {
            "p": "Die Grundlage für die Interpretation ist ein **Wörterbuch von {symbolTotal} Symbolen**. Wir finden Symbole im Traumtext und zeigen nur die Bedeutungen an, die im Wörterbuch für diese Symbole aufgezeichnet sind. Wenn ein Symbol mehrere Bedeutungen hat, wählen wir basierend auf dem Kontext — zum Beispiel wird das Halten einer Schlange und das Gebissenwerden traditionell als Gegensätze betrachtet."
          },
          {
            "p": "Die Suche erfolgt **nur nach festen Regeln**. Wenn es der gleiche Traum ist, werden immer die gleichen Symbole erscheinen, und die Interpretation wird sich von gestern bis heute nicht ändern."
          }
        ]
      },
      {
        "title": "Was sagen wir nicht?",
        "blocks": [
          {
            "p": "**Wir erfinden keine traditionellen Bedeutungen, die nicht im Wörterbuch stehen.** Wenn keine Symbole gefunden werden, geben wir einfach an, dass keine gefunden wurden, und schließen ab. Diese Lücke mit plausiblen Worten zu füllen, ist das, worauf dieser Dienst am vorsichtigsten achtet."
          },
          {
            "p": "**Ein 태몽 ist lediglich ein Zeichen, kein Urteil.** Wir informieren Sie nur darüber, dass ein Symbol, das traditionell als 태몽 betrachtet wird, im Traum erschien. Wir sagen keine Schwangerschaft oder das Geschlecht des Kindes voraus, und es gibt keine Grundlage für solche Behauptungen."
          },
          {
            "p": "Wir machen keine **definitiven Aussagen über Gesundheit, Wohlstand oder Karriere.** Dies ist eine Referenz aus der Perspektive der traditionellen Traumdeutung und stellt keinen medizinischen, finanziellen oder rechtlichen Rat dar."
          }
        ]
      },
      {
        "title": "Wir speichern die Träume, die Sie aufschreiben, nicht.",
        "blocks": [
          {
            "p": "Traumgeschichten sind der privateste Teil dessen, was dieser Dienst erhält. Daher **speichern wir sie nicht.** Die Eingaben werden nur für Berechnungen verwendet und nicht in Serverprotokollen aufgezeichnet."
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
            "p": "Die Methode wird ausführlicher im [Leitfaden-Dokument](/guide) beschrieben. Geschäftsinformationen und Kontaktdaten finden Sie unter [Kontakt](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Basis für die Berechnung",
    "title": "Was ist die Grundlage für die Berechnung?",
    "summary": "Wir legen alle Regeln offen, die Dreams-Link verwendet. Sie können überprüfen, welche Symbole gefunden werden, was im Wörterbuch geschrieben steht — woher die auf dem Bildschirm angezeigten Interpretationen stammen.",
    "backLabel": "Zurück zur Startseite",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Alle hier geschriebenen Zahlen werden **direkt aus dem Symbolwörterbuch und den Suchregeln gelesen.** Da wir den Text nicht manuell transkribieren, werden die Zahlen in diesen Dokumenten auch geändert, wenn das Wörterbuch erweitert oder die Regeln geändert werden."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Basis für den Dienst",
    "title": "Was ist die Grundlage des Symbolwörterbuchs?",
    "summary": "Es wird klargestellt, woher die Interpretationen stammen. Die Kriterien für die Unterteilung von 215 Symbolen in neun Kategorien, der Grund, warum nur 24 substantiierbar sind, und warum wir die Lücken nicht füllen.",
    "backLabel": "Basis für die Interpretation",
    "sections": [
      {
        "title": "Wir zeigen nur, was im Wörterbuch steht.",
        "blocks": [
          {
            "p": "Die Interpretationen von Dreams-Link stammen aus einem **vorgeschriebenen Symbolwörterbuch**. Wir finden Symbole im Text, den Sie bereitstellen, und zeigen die Bedeutungen an, die im Wörterbuch für diese Symbole aufgezeichnet sind. Wir erstellen keine Wörter, die nicht im Wörterbuch stehen."
          },
          {
            "p": "Derzeit enthält das Wörterbuch **{symbolTotal} Symbole**, und diese Symbole haben insgesamt **{meaningTotal} Bedeutungen**. Die meisten Symbole haben nur eine Bedeutung, während einige je nach Kontext mehrere haben."
          }
        ]
      },
      {
        "title": "In neun Kategorien unterteilt.",
        "blocks": [
          {
            "p": "Wir haben das, was in Träumen erscheint, in neun Kategorien basierend auf ihren Eigenschaften gruppiert. Die Zahlen in Klammern sind die aktuellen Zählungen."
          },
          {
            "ul": [
              "**Objekte**({categoryThing}) · **Tiere**({categoryAnimal}) · **Natur**({categoryNature}) — die drei größten Kategorien. Die traditionelle Traumdeutung diskutiert hauptsächlich sichtbare Objekte, Tiere und Elemente des Himmels und des Wassers.",
              "**Handlungen**({categoryAction}) · **Körper**({categoryBody}) — was getan wurde, wie verfolgt werden oder fallen, und wo am Körper, wie im Gesicht oder Haar.",
              "**Menschen**({categoryPerson}) · **Orte**({categoryPlace}) · **Farben**({categoryColor}) · **Zahlen**({categoryNumber})"
            ]
          },
          {
            "p": "Um sie nach Kategorien anzuzeigen, können Sie die vollständige Liste im [Symbolwörterbuch](/dream/symbols) einsehen."
          }
        ]
      },
      {
        "title": "Nur {cultureNoteTotal} können substantiierbar sein.",
        "blocks": [
          {
            "p": "Unter den Symbolen haben **{cultureNoteTotal}** Gründe für die Interpretation, die neben ihnen geschrieben sind. Zum Beispiel der Grund für die Unterscheidung zwischen oberen und unteren Zähnen in einem Traum vom Zahnverlust. Die verbleibenden Symbole haben leere Stellen."
          },
          {
            "p": "**Wir haben die leeren Stellen nicht gefüllt.** Plausible Ursprünge hinzuzufügen würde das Dokument dicker machen, aber in diesem Moment würde dieses Wörterbuch nicht die Tradition vermitteln, sondern sie fabrizieren. Es ist ehrlicher, zwischen dem, was substantiierbar ist, und dem, was nicht substantiierbar ist, zu unterscheiden."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Gründe, das Wörterbuch nicht willkürlich zu erweitern.",
        "blocks": [
          {
            "p": "Wir haben tatsächlich versucht, die Symbole auf Hunderte zu erweitern, aber aufgegeben. Die automatisch generierten Einträge wiederholten entweder die gleichen Phrasen wie 'Romantik → gute Beziehung' oder boten keine substantiierbaren Ursprünge. Wir kamen zu dem Schluss, dass **es besser ist, genau zu finden, was existiert**, als einfach die Zahlen zu erhöhen."
          }
        ]
      },
      {
        "title": "Gut und schlecht sind durch das Wörterbuch vorbestimmt.",
        "blocks": [
          {
            "p": "Jedes Symbol hat sowohl gute als auch schlechte Bedeutungen. **Gut {polarityPositive}**, **ambivalent {polarityAmbivalent}**, **vorsichtige {polarityNegative}**, und **neutral {polarityNeutral}**."
          },
          {
            "p": "Die Tatsache, dass die guten Bedeutungen mehr als die Hälfte übersteigen, liegt nicht daran, dass wir großzügig sind, sondern weil die traditionelle Traumdeutung schon immer so war — große und starke Symbole wie Schweine, Drachen und Feuer wurden allgemein als gute Omen angesehen. Allerdings werden nicht alle Träume positiv interpretiert. Dieser Wert spiegelt die Natur jedes Symbols wider, und die allgemeine Atmosphäre des Traums wird neu bewertet, indem die gefundenen Symbole gesammelt werden."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Basis für den Dienst",
    "title": "Wie man Symbole in Traumgeschichten findet.",
    "summary": "Es wird erklärt, wie Symbole aus frei geschriebenen Sätzen ausgewählt werden und wie Buchstaben herausgefiltert werden, die versehentlich in Wörter wie 'besonders' eingegangen sind.",
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
            "p": "Dies ist der herausforderndste Aspekt im Koreanischen. Unter den Symbolen gibt es **{singleCharSymbolTotal} einzeilige Symbole** wie **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son), die häufig in anderen Wörtern erscheinen."
          },
          {
            "ul": [
              "Der **Stern** in \"Es war ein gewöhnlicher Tag\"",
              "Die **Sache** in \"Ich wurde von jemandem verfolgt\"",
              "Das **Wort** in \"Diese Person sagte\" und der **Bauch** in \"Ich hatte Hunger\""
            ]
          },
          {
            "p": "Diese als Symbole zu zählen führt zu irrelevanten Interpretationen. Daher untersuchen wir die umgebenden Zeichen — wenn **ein koreanisches Zeichen davor steht**, betrachten wir es als Fragment eines Wortes und zählen es nicht, und wir unterscheiden, ob das angehängte Zeichen am Ende ein Partikel oder eine Endung ist, wodurch 「소가」 (soga) durchkommt, während 「소리」 (sori) herausgefiltert wird."
          }
        ]
      },
      {
        "kind": "note",
        "title": "So funktioniert es seit jeher",
        "blocks": [
          {
            "p": "Vor der Implementierung dieser Regel, als wir mit zwölf tatsächlichen Sätzen testeten, enthielten **alle zwölf** irrelevante Symbole. Ein Satz ohne bedeutenden Inhalt wurde sogar als 태몽 (taemong) markiert."
          },
          {
            "p": "Jetzt bleibt eines — das 배 (bae) in 「배가 고팠다」 (bae ga gopatda). Da es gleich klingt, aber eine andere Bedeutung hat, kann es nicht nur durch die umgebenden Zeichen herausgefiltert werden."
          },
          {
            "p": "Etwas nicht zu finden ist eine ehrliche Angelegenheit. Etwas Irrelevantes zu finden bedeutet jedoch, eine Tradition hinter diesem Wort zu etablieren, die es nie hatte."
          }
        ]
      },
      {
        "title": "Die gleichen Zeichen ergeben immer die gleichen Ergebnisse",
        "blocks": [
          {
            "p": "Im Suchprozess gibt es keinen Platz für Zufälle. Da das Wörterbuch festgelegt ist und die Regeln etabliert sind, wenn Sie denselben Satz erneut eingeben, **wird dasselbe Symbol in derselben Reihenfolge erscheinen**. Die Interpretation, die Sie heute sehen, wird sich nicht von der unterscheiden, die Sie morgen sehen."
          },
          {
            "p": "Diese Qualität ist auch ein Versprechen, das wir uns selbst gegeben haben. Interpretationen, die sich jedes Mal ändern, sind unterhaltsam, aber ohne Grundlage. Dies hängt mit der Geschichte zusammen, [warum wir keine Modelle verwenden](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Service Basis",
    "title": "Der Grund, warum dasselbe Symbol unterschiedliche Bedeutungen hat",
    "summary": "Traditionell sind das Halten einer Schlange und das Gebissenwerden von einer Schlange Gegensätze. Dies diskutiert die Struktur, in der 215 Symbole 256 Bedeutungen haben und wie man Situationen interpretiert.",
    "backLabel": "Interpretationsbasis",
    "sections": [
      {
        "title": "Selbst wenn die Symbole gleich sind, ergeben unterschiedliche Situationen unterschiedliche Bedeutungen",
        "blocks": [
          {
            "p": "In der traditionellen 해몽 (Traumdeutung) hat ein einzelnes Symbol nicht immer eine Bedeutung. Selbst für die gleiche Schlange wurden **das Halten und das Gebissenwerden als völlig gegensätzlich interpretiert.** Dies wird auch im Wörterbuch vermerkt."
          },
          {
            "p": "Deshalb haben die {symbolTotal} Symbole insgesamt {meaningTotal} Bedeutungen. Jede Bedeutung umfasst **den Kontext, in dem sie gilt**, und wenn dieser Kontext im Text, den Sie bereitstellen, sichtbar ist, wählen wir diese Bedeutung aus."
          }
        ]
      },
      {
        "title": "Wie man die Situation identifiziert",
        "blocks": [
          {
            "p": "Wir überprüfen, ob der von Ihnen bereitgestellte Text Wörter enthält, die auf diese Situation hinweisen. In 「뱀이 나를 물었다」 (baemi nareul mul-eotda) wird die Biss-Situation beschrieben, während in 「뱀을 품에 안았다」 (baemeul pume anatda) die Halte-Situation beschrieben wird. Wenn keine Wörter vorhanden sind, die auf die Situation hinweisen, interpretieren wir sie mit der **grundlegenden Bedeutung** dieses Symbols."
          },
          {
            "p": "Daher, wenn Sie Ihren Traum schreiben, wenn Sie **nicht nur das, was erschien, sondern auch die durchgeführten Handlungen** einbeziehen, wird die Interpretation genauer. 「돼지를 봤다」 (dwaeji-reul bwatda) vermittelt weniger als 「돼지가 집으로 들어왔다」 (dwaeji-ga jib-euro deureowatda)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Je mehr Sie schreiben, desto besser, aber es ist nicht notwendig, lange zu schreiben",
        "blocks": [
          {
            "p": "Zwei oder drei Sätze sind ausreichend. Längeres Schreiben bedeutet nicht, mehr Symbole zu finden; vielmehr, wenn nicht verwandte Wörter gemischt werden, können irrelevante Symbole identifiziert werden."
          }
        ]
      },
      {
        "title": "Es gibt {contextSplitSymbolTotal} Symbole mit geteilten Bedeutungen",
        "blocks": [
          {
            "p": "Unter den {symbolTotal} Symbolen im Wörterbuch haben **{contextSplitSymbolTotal}** Bedeutungen, die je nach Situation variieren. Der Rest wurde unabhängig von der Situation in eine Richtung gelesen."
          },
          {
            "p": "Diese {contextSplitSymbolTotal} sind die vorsichtigsten Bereiche. Eine Fehlinterpretation der Situation kann dazu führen, dass gute Nachrichten als schlechte Nachrichten übermittelt werden oder umgekehrt. Daher, wenn die Situation unklar ist, wählen wir nicht **zwanghaft eine Seite und gehen stattdessen mit der grundlegenden Bedeutung** dieses Symbols — wir möchten nicht etwas Ungewisses als gewiss darstellen."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Die Gefühle beim Aufwachen werden ebenfalls berücksichtigt",
        "blocks": [
          {
            "p": "Die Gefühle und Wiederholungen, die unten im Trauminhalt gefragt werden, werden nicht verwendet, um Symbole zu finden. Sie werden herangezogen, um zu entscheiden, in welche Richtung in Situationen mit geteilten Bedeutungen interpretiert wird. Sie müssen nicht wählen; Ergebnisse werden trotzdem bereitgestellt."
          }
        ]
      },
      {
        "title": "Die allgemeine Atmosphäre des Traums wird separat gezählt",
        "blocks": [
          {
            "p": "Wenn mehrere Symbole gefunden werden, sammeln wir, ob jedes dieser Symbole positiv oder vorsichtig ist, um den Gesamton des Traums zu bestimmen. Ein Traum, der ein gutes Symbol und ein vorsichtiges Symbol enthält, wird nicht einfach als 'guter Traum' bezeichnet."
          },
          {
            "p": "Sie können die verschiedenen Symbole und ihre Bedeutungen im [Symbolwörterbuch](/dream/symbols) einsehen. Es ist auch gut, einen Blick darauf zu werfen, was enthalten ist, bevor Sie Ihren Traum schreiben."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Service Basis",
    "title": "Kriterien zur Unterscheidung von 길몽 (günstigen Träumen) und 흉몽 (ungünstigen Träumen)",
    "summary": "Die vier Werte, die jedem Symbol zugeordnet sind und ihre Verteilung, der Grund, warum positive über die Hälfte hinausgehen, und warum wir gemischte Träume als gemischt kommunizieren.",
    "backLabel": "Interpretationsbasis",
    "sections": [
      {
        "title": "Jedes Symbol wird einem von vier Werten zugeordnet",
        "blocks": [
          {
            "p": "Unter den {symbolTotal} Symbolen im Wörterbuch wird jedes als eines der folgenden kategorisiert."
          },
          {
            "ul": [
              "**{polarityPositive} positive Symbole** — solche, die als glückliche Ereignisse wie Reichtum, Feiern und Wohltäter interpretiert werden.",
              "**{polarityAmbivalent} Symbole, die je nach Situation variieren** — wie Schlangen, deren Bedeutung je nach Handlung umschlägt. Diese Kategorie ist die vorsichtigste.",
              "**{polarityNegative} vorsichtige Symbole** — solche, die als Klatsch, Streitigkeiten oder Verluste angesehen werden.",
              "**{polarityNeutral} neutrale Symbole** — solche, die an sich weder gut noch schlecht sind, wie Farben oder Zahlen."
            ]
          }
        ]
      },
      {
        "title": "Der Grund, warum positive Symbole über die Hälfte hinausgehen",
        "blocks": [
          {
            "p": "Das liegt nicht daran, dass wir großzügig in unseren Bewertungen sind. **Traditionelle 해몽 (Traumdeutung) war schon immer so.** Große und mächtige Symbole wie Schweine, Drachen, Feuer und Wasser wurden im Allgemeinen als gute Omen angesehen, und das Wörterbuch spiegelt diese Tradition wider."
          },
          {
            "p": "Daher bedeutet die Tatsache, dass 'ein gutes Symbol erschien', nicht, dass 'gute Dinge passieren werden.' Was wir vermitteln können, ist auf die Art und Weise beschränkt, wie dieses Symbol in der Tradition interpretiert wurde."
          }
        ]
      },
      {
        "title": "Der Ton eines Traums wird aus seinen Symbolen gesammelt",
        "blocks": [
          {
            "p": "Wenn mehrere Symbole gefunden werden, sammeln wir ihre jeweilige Glückseligkeit, um den Gesamton des Traums zu bestimmen. Wenn nur positive Symbole erscheinen, ist es ein guter Traum; wenn nur vorsichtige Symbole erscheinen, ist es ein vorsichtiger Traum; wenn **gemischt, kommunizieren wir es als gemischt.**"
          },
          {
            "p": "Wir kategorisieren gemischte Symbole nicht zwanghaft auf eine Seite. In Wirklichkeit sind die Träume, die Menschen haben, oft gemischt, und sie als 'guten Traum' zusammenzufassen, ist weder genau noch hilfreich."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Wörter, die nicht verwendet werden sollten",
        "blocks": [
          {
            "p": "Machen Sie keine definitiven Aussagen darüber, was passieren wird, wann es passieren wird oder bezüglich Gesundheit und Wohlstand. Die Bedeutung von Symbolen, die durch die Tradition überliefert wurden, zu vermitteln, ist etwas anderes, als die Zukunft vorherzusagen."
          }
        ]
      },
      {
        "title": "Wenn ein Warntraum erscheint",
        "blocks": [
          {
            "p": "Selbst wenn ein als Warnung interpretiertes Symbol erscheint, bedeutet das nicht unbedingt schlechte Nachrichten. In der traditionellen Traumdeutung wurde ein ominöser Traum im Allgemeinen als **eine Aussage, die auf die aktuelle Situation hinweist** verwendet. Wenn ein Symbol, das Konflikt andeutet, erscheint, kann es als Erinnerung gelesen werden, Worte zurückzuhalten."
          },
          {
            "p": "Aus demselben Grund verkauft dieser Dienst keine Talismane oder Amulette. Verkauft wird nur [zwei Möglichkeiten, Ihre Träume zu bewahren](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Empfängnis-Traum",
    "title": "Wie man Empfängnis-Träume interpretiert",
    "summary": "Es wird erklärt, wie man 27 Symbole von Empfängnis-Träumen bestimmt, warum nicht alle Schweineträume als Empfängnis-Träume gelten und das Prinzip, das keine Schwangerschaft oder Geschlecht vorhersagt.",
    "backLabel": "Interpretationsbasis",
    "sections": [
      {
        "title": "Zuerst klären Sie dies",
        "blocks": [
          {
            "p": "**Dreams-Link bestimmt nicht den Schwangerschaftsstatus. Es zeigt auch nicht das Geschlecht des Kindes an.** Dies sind Angelegenheiten, die durch Träume nicht bekannt sein können, und es ist nicht etwas, was wir tun können."
          },
          {
            "p": "Was wir Ihnen mitteilen können, ist auf dies beschränkt — **die Tatsache, dass ein Symbol, das traditionell als Empfängnis-Traum angesehen wird, in diesem Traum erschien.** Das ist alles, was unsere Vorfahren über dieses Symbol interpretierten."
          }
        ]
      },
      {
        "title": "Es gibt {conceptionSymbolTotal} Symbole, die als Empfängnis-Träume angesehen werden",
        "blocks": [
          {
            "p": "Unter den {symbolTotal} Symbolen im Wörterbuch sind **{conceptionSymbolTotal}** als Empfängnis-Träume gekennzeichnet. Es gibt viele Tiere wie Drachen, Schweine und Schlangen sowie Früchte wie Pfirsiche und Kastanien, und die Sonne und der Mond sind ebenfalls enthalten."
          },
          {
            "p": "Allerdings bedeutet **das Erscheinen dieses Symbols nicht sofort, dass es ein Empfängnis-Traum ist.** Hier hat dieser Dienst Anstrengungen unternommen."
          }
        ]
      },
      {
        "title": "Das Urteil basiert auf der tatsächlichen Bedeutung, nicht auf Symbolen",
        "blocks": [
          {
            "p": "Das Schwein ist ein Symbol für Empfängnis-Träume und gleichzeitig **stellt es Wohlstandsträume dar.** Wenn es nur aufgrund des Erscheines des Symbols als Empfängnis-Traum angesehen wird, dann hätte jeder, der von Schweinen träumt, einen Empfängnis-Traum gehabt. In Wirklichkeit wurde es meist als Wohlstandstraum interpretiert."
          },
          {
            "p": "Deshalb betrachten wir **die tatsächliche Bedeutung, die aus diesem Symbol abgeleitet wird, nicht das Symbol selbst.** Wir kennzeichnen es nur als Empfängnis-Traum, wenn die Bedeutung, die in Richtung Empfängnis tendiert, in der von Ihnen bereitgestellten Situation gewählt wird. Selbst bei demselben Schwein ändert sich das Urteil, wenn der Kontext unterschiedlich ist."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Wenn Sie Schwangerschaft erwähnen, betrachten wir das zuerst",
        "blocks": [
          {
            "p": "Wenn Ihr Schreiben Wörter wie Schwangerschaft, Empfängnis-Traum oder Geburt enthält, betrachten wir zuerst die Bedeutung dieses Symbols, das in Richtung Empfängnis tendiert. Selbst bei demselben Schweinetraum variierte die Art und Weise, wie unsere Vorfahren ihn interpretierten, je nach aktueller Situation."
          }
        ]
      },
      {
        "title": "Der Grund für die Trennung von Empfängnis-Traumberichten",
        "blocks": [
          {
            "p": "Empfängnis-Träume dienen einem anderen Zweck als andere Träume. Sie werden oft auch nach der Geburt des Kindes besprochen und unter Familienmitgliedern geteilt. Daher haben wir anstelle einer bloßen Anzeige auf einem Bildschirm ein separates **Dokument erstellt, das aufbewahrt werden kann.**"
          },
          {
            "p": "Was enthalten ist, wird in [zwei Möglichkeiten, Ihre Träume zu bewahren](/guide/reports) vermerkt. Sie können alle Interpretationen sehen, ohne das zu kaufen, was Sie auf dem Bildschirm sehen."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Wie man es verwendet",
    "title": "Wie man seinen Traum effektiv schreibt",
    "summary": "Wenn Sie aufschreiben, was Sie gesehen und getan haben, wird es gut interpretiert. Es wird erklärt, warum ein einziges Verb die Bedeutung bestimmen kann und warum wir nach Gefühlen und Wiederholungen fragen.",
    "backLabel": "Interpretationsbasis",
    "sections": [
      {
        "title": "Bitte schreiben Sie, was Sie gesehen und getan haben",
        "blocks": [
          {
            "p": "Es gibt kein spezifisches Format. Ein paar Sätze, wie Sie normalerweise sprechen, sind ausreichend. Was gut funktioniert, ist jedoch bestimmt — **was sichtbar ist** und **was passiert ist.**"
          },
          {
            "ul": [
              "Funktioniert gut — 「Eine große Schlange hat sich um mich gewickelt」, 「Ich sah klares Wasser fließen」, 「Ich fiel von einem hohen Ort」",
              "Funktioniert nicht — 「Ich hatte Angst」, 「Ich fühlte mich seltsam」, 「Ich hatte das Gefühl, dass mich jemand hasste」"
            ]
          },
          {
            "p": "Wenn Sie nur Gefühle aufschreiben, gibt es keine Symbole zu finden. Dies liegt daran, dass die traditionelle Traumdeutung von [Objekten und Handlungen](/guide/categories) spricht, nicht von Emotionen."
          }
        ]
      },
      {
        "title": "Das Schreiben dessen, was Sie getan haben, macht es genauer",
        "blocks": [
          {
            "p": "Selbst bei demselben Symbol gibt es {contextSplitSymbolTotal} Fälle, in denen die Bedeutungen je nach Situation unterschiedlich sind. Traditionell wurden das Halten einer Schlange und das Gebissenwerden als Gegensätze interpretiert."
          },
          {
            "p": "Daher ist 「Ich sah ein Schwein」 weniger genau als 「Ein Schwein kam ins Haus」, und 「Es gab Wasser」 ist weniger genau als 「Ich trank klares Wasser.」 **Ein einzelnes Verb bestimmt die Bedeutung.**"
          }
        ]
      },
      {
        "title": "Warum wir nach Gefühlen und Wiederholungen fragen",
        "blocks": [
          {
            "p": "Unter dem Trauminhalt gibt es einen Platz, um **das Gefühl, als Sie aufwachten** und **ob Sie denselben Traum wiederholt haben.** Sie müssen nicht beides auswählen, damit ein Ergebnis bereitgestellt wird."
          },
          {
            "p": "Diese Werte werden nicht verwendet, um Symbole zu finden. Sie werden herangezogen, wenn es darum geht, **welche Bedeutung aus demselben Symbol gewählt werden soll** und wie das Ergebnis vermittelt werden soll."
          }
        ]
      },
      {
        "kind": "note",
        "title": "In Fällen, in denen Sie Schwangerschaft erwähnen",
        "blocks": [
          {
            "p": "Wenn Ihr Schreiben Wörter wie Schwangerschaft, Empfängnis-Traum oder Geburt enthält, betrachten wir zuerst die Bedeutung dieses Symbols, das in Richtung Empfängnis tendiert. Selbst bei demselben Schweinetraum variierte die Art und Weise, wie unsere Vorfahren ihn interpretierten, je nach aktueller Situation — [wie man Empfängnis-Träume interpretiert](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Es ist nicht notwendig, lange Texte zu schreiben",
        "blocks": [
          {
            "p": "Ein längerer Text bedeutet nicht, dass mehr Symbole gefunden werden. Vielmehr, wenn irrelevante Wörter lang gemischt werden, besteht eine größere Wahrscheinlichkeit, dass nicht verwandte Wörter als Symbole interpretiert werden. **Bitte schreiben Sie nur die Szenen, an die Sie sich erinnern.**"
          },
          {
            "p": "Der Text, den Sie bereitstellen, wird nirgendwo gespeichert. Der Grund, warum Sie frei schreiben können, ist in [der Methode des Nicht-Speicherns](/guide/no-storage) vermerkt."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Basis des Dienstes",
    "title": "Kriterien, die in neun Kategorien unterteilt sind",
    "summary": "Von Objekten, Tieren und der Natur bis hin zu Farben und Zahlen gibt es neun Kategorien und einen Grund, warum keine emotionale Kategorie enthalten ist.",
    "backLabel": "Interpretationsbasis",
    "sections": [
      {
        "title": "Die Symbole in Träumen sind in neun Kategorien unterteilt",
        "blocks": [
          {
            "p": "Die {symbolTotal} Symbole sind basierend auf ihren Eigenschaften in neun Kategorien gruppiert. Die Kriterien für die Unterteilung sind **wie sie in Träumen erscheinen** — ob als Tiere, Objekte oder Handlungen, die ich unternommen habe."
          },
          {
            "ul": [
              "**Objekte {categoryThing}** — Greifbare Gegenstände wie Geld, Spiegel und Messer. Dies ist die dickste Kategorie.",
              "**Tiere {categoryAnimal}** — drache·schwein·schlange·kuh. Viele davon werden als 태몽 (Empfängnis-Träume) angesehen.",
              "**Natur {categoryNature}** — Dinge, die groß und uralt sind, wie wasser·feuer·sonne·mond·berg.",
              "**Aktion {categoryAction}** — Dinge, die in Träumen geschehen, wie verfolgt werden·fallen·fliegen.",
              "**Körper {categoryBody}** — zähne·haare·blut. Die Bedeutung variiert je nachdem, wo am Körper es ist.",
              "**Person {categoryPerson}** · **Ort {categoryPlace}** · **Farbe {categoryColor}** · **Zahl {categoryNumber}**"
            ]
          }
        ]
      },
      {
        "title": "Warum gibt es keine Emotionen-Kategorie?",
        "blocks": [
          {
            "p": "Kategorien wie 「angst」·「sehnsucht」 sind nicht enthalten. **Das liegt daran, dass traditionelle 해몽 (Traumdeutung) Emotionen nicht behandelt.** Alte Deutungen konzentrierten sich auf das Sichtbare und das, was geschah, anstatt auf die Gefühle des Träumers."
          },
          {
            "p": "Ich habe versucht, eine Emotionen-Kategorie zu erstellen, aber die Ergebnisse waren Begriffe wie 「verlust der zuneigung」·「emotionale stabilität」. Diese sind keine **symbole** aus Träumen, sondern Vokabular aus der modernen Psychologie. Das ist eine andere Art von Dienst und nicht das, was dieses Wörterbuch anstrebt."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Also, wenn Sie schreiben",
        "blocks": [
          {
            "p": "Bitte schreiben Sie **was Sie gesehen und getan haben** anstatt Gefühle; das wird viel bessere Ergebnisse liefern. Ich werde jedoch separat nach Ihren Gefühlen beim Aufwachen fragen — selbst dasselbe Symbol kann je nach Situation unterschiedliche Bedeutungen haben."
          }
        ]
      },
      {
        "title": "Farben und Zahlen stehen nicht allein",
        "blocks": [
          {
            "p": "Farbe {categoryColor} und Zahl {categoryNumber} haben keine inhärent guten oder schlechten Bedeutungen. So wie eine weiße Schlange und eine schwarze Schlange unterschiedlich sind, ändern sich ihre Bedeutungen je nachdem, **womit sie assoziiert sind**. Daher werden diese beiden Kategorien in Verbindung mit anderen Symbolen betrachtet."
          },
          {
            "p": "Eine vollständige Liste nach Kategorien ist im [Symbol-Wörterbuch](/dream/symbols) verfügbar. Das Öffnen eines Symbols zeigt seine überlieferte Bedeutung, Kategorie und verwandte Symbole."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Wie man es benutzt",
    "title": "Wenn ein Symbol nicht gefunden werden kann",
    "summary": "Wenn Sie es nicht finden können, werde ich Sie informieren, dass es nicht gefunden wurde. Ich werde erläutern, warum es nicht gefunden werden kann, was ich Ihnen stattdessen auf diesem Bildschirm zeigen werde und wie das Wörterbuch erweitert wird.",
    "backLabel": "Interpretationsbasis",
    "sections": [
      {
        "title": "Wenn nicht gefunden, werde ich Sie informieren, dass es nicht gefunden wurde",
        "blocks": [
          {
            "p": "Wenn ich keine Symbole im Text, den Sie bereitgestellt haben, finden kann, werde ich **Sie informieren, dass es nicht gefunden wurde.** Ich werde es nicht gewaltsam mit etwas Ähnlichem verbinden oder plausible Sätze erstellen, um den Raum zu füllen."
          },
          {
            "p": "Das ist, worauf dieser Dienst am vorsichtigsten achtet. In dem Moment, in dem ich eine Lücke fülle, widerspricht es der Aussage, Deutungen zu vermitteln."
          }
        ]
      },
      {
        "title": "Warum kann es nicht gefunden werden?",
        "blocks": [
          {
            "p": "In der Regel ist es eines der folgenden."
          },
          {
            "ul": [
              "**Es ist ein Symbol, das noch nicht im Wörterbuch ist.** Derzeit sind {symbolTotal} Symbole aufgeführt, aber es gibt viele weitere, die in Träumen erscheinen könnten.",
              "**Sie haben nur Gefühle geschrieben.** Wenn es nur Emotionen wie 「ich hatte angst」·「ich fühlte mich seltsam」 gibt, gibt es keine Symbole, die zugeordnet werden können. Traditionelle 해몽 spricht von **sichtbaren Objekten und Handlungen** statt von Emotionen.",
              "**Es ist zu kurz.** Es ist besser, in Sätzen zu schreiben als in ein oder zwei Wörtern."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Wenn Sie es erneut versuchen",
        "blocks": [
          {
            "p": "Bitte fügen Sie **was Sie gesehen und was Sie getan haben** im Traum hinzu. Zu sagen 「ich war ängstlich」 ist weniger effektiv als zu sagen 「ich fiel von einem hohen Ort」, und zu sagen 「ich mochte es」 ist weniger effektiv als zu sagen 「ich sah klares Wasser fließen」."
          }
        ]
      },
      {
        "title": "Ich lasse keinen leeren Bildschirm zurück",
        "blocks": [
          {
            "p": "Wenn etwas nicht gefunden werden kann, werde ich auch **{popularSymbolCount} häufig gesuchte Symbole** auf diesem Bildschirm anzeigen. Diese werden aus dem Wörterbuch basierend auf ihrer Repräsentativität ausgewählt, was Ihnen helfen kann, sich zu erinnern, ob eines von ihnen in Ihrem Traum erschienen ist."
          },
          {
            "p": "Wenn Sie die gesamte Liste durchsuchen möchten, gibt es {symbolTotal} Symbole, die nach Kategorien im [Symbol-Wörterbuch](/dream/symbols) organisiert sind. Jedes Symbol enthält seine überlieferte Bedeutung und verwandte Symbole."
          }
        ]
      },
      {
        "title": "Wie wird das Wörterbuch in Zukunft erweitert?",
        "blocks": [
          {
            "p": "Anstatt die Zahlen zu erhöhen, konzentriere ich mich darauf, **genau zu identifizieren, was bereits vorhanden ist**. Ich habe {aliasTotal} alternative Namen für dasselbe Symbol aufgenommen und es möglich gemacht, Wörter zu erkennen, die sich mit Suffixen verändern."
          },
          {
            "p": "Bei der Erweiterung der Symbole selbst werde ich nur solche einbeziehen, die **überlieferte Beweise liefern können.** Einfach nur die Zahlen zu erhöhen ohne Beweise wird zur Schöpfung statt zu einem Wörterbuch — ich habe die Versuche und Ergebnisse in [Warum ich keine Modelle verwende](/guide/no-ai) dokumentiert."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Dienstbasis",
    "title": "Gründe für die Nichtverwendung von künstlicher Intelligenz in 해몽",
    "summary": "Es gibt keinen Code, der ein Modell im Prozess der Erstellung von Deutungen aufruft. Ich habe den Versuch aufgegeben, das Wörterbuch mit einem Modell basierend auf empirischen Ergebnissen zu erweitern, und damit, was gewonnen und was aufgegeben wurde.",
    "backLabel": "Interpretationsbasis",
    "sections": [
      {
        "title": "Künstliche Intelligenz wird in 해몽 nicht verwendet",
        "blocks": [
          {
            "p": "Viele aktuelle 해몽-Dienste zeigen Texte, die durch das Einfügen von Traumgeschichten in generative Modelle erstellt wurden. Dreams-Link macht das nicht. **Es gibt keinen Code, der ein Modell im Prozess der Erstellung von Deutungen aufruft.**"
          },
          {
            "p": "Was ich tue, ist einfach. Ich finde Symbole im Text, den Sie bereitgestellt haben, die im Wörterbuch sind, und wähle und zeige die Bedeutungen, die das Wörterbuch für diese Symbole geschrieben hat. Es gibt keinen Platz für Sätze, die nicht im Wörterbuch sind."
          }
        ]
      },
      {
        "title": "Warum wurde diese Entscheidung getroffen?",
        "blocks": [
          {
            "p": "**Modelle sagen nicht, dass sie nicht wissen, was sie nicht wissen.** Wenn sie nach Symbolen ohne überlieferte Beweise gefragt werden, fabrizieren sie plausible Ursprünge. Und ob es fabriziert ist oder nicht, ist etwas, das der Leser nicht erkennen kann. Wenn man Schöpfung anstelle von Tradition vermittelt, bricht die Prämisse des Dienstes zusammen."
          },
          {
            "p": "Ich habe tatsächlich versucht, ein Modell Symbole erstellen zu lassen, um das Wörterbuch zu erweitern. Von sechsundsechzig Beispielen, die es wert waren, in Betracht gezogen zu werden, **konnten fünfundfünfzig keine überlieferten Beweise liefern**, und einige enthielten Dinge, die in traditioneller 해몽 nicht existieren konnten, wie U-Bahnen und Autobahnen. Daher **wurden keine aufgenommen.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Das Gleiche galt sogar für größere Modelle",
        "blocks": [
          {
            "p": "Als ich dieselbe Aufgabe mit einem besseren Modell versuchte, bestand nur eines von neunzehn, und das eine war nur eine Wiederholung der gleichen Wörter in der Beweisposition. Größere Modelle sprechen nur **plausibler** über das, was sie nicht wissen."
          }
        ]
      },
      {
        "title": "Die Vorteile der Nichtverwendung eines Modells",
        "blocks": [
          {
            "ul": [
              "**Wenn es der gleiche Traum ist, wird die gleiche Deutung herauskommen.** Die Formulierung ändert sich nicht jedes Mal.",
              "**Es ist schnell.** Es gibt kein Warten auf die Antwort eines Modells, sodass die Ergebnisse sofort geliefert werden.",
              "**Der Traum, den Sie bereitgestellt haben, geht nicht nach außen.** Es gibt keine Notwendigkeit, ihn an externe Unternehmensserver zu senden — bitte lesen Sie auch die [Methode der Nicht-Speicherung](/guide/no-storage).",
              "**Es kann kostenlos angeboten werden.** Träume sind etwas, das wir jeden Tag träumen, also gibt es viele Anfragen. Wenn für jede Anfrage ein Modell aufgerufen wird, müssen die Kosten irgendwo gedeckt werden."
            ]
          }
        ]
      },
      {
        "title": "Was aufgegeben wird",
        "blocks": [
          {
            "p": "Wir können nicht interpretieren, was nicht im Wörterbuch steht. Hätte ein Modell verwendet werden, hätte alles, was Sie geschrieben haben, eine plausible Antwort produziert. Wir haben uns für die Seite entschieden, die **sagt, dass es nicht gefunden werden konnte, wenn es nicht gefunden werden konnte**. Was wir zu diesem Zeitpunkt zeigen, ist geschrieben in [wenn ein Symbol nicht gefunden werden kann](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Bezahlte Produkte",
    "title": "Zwei Möglichkeiten, Ihre Träume zu bewahren",
    "summary": "Die Interpretation selbst verursacht keine Kosten. Wir erklären, was die beiden Dinge sind, die wir verkaufen, was sie enthalten und warum sie keine besseren Interpretationen sind.",
    "backLabel": "Interpretationsbasis",
    "sections": [
      {
        "title": "Die Interpretation selbst verursacht keine Kosten",
        "blocks": [
          {
            "p": "Das Aufschreiben Ihrer Träume und das Sehen, welche Symbole vorhanden sind, **kostet kein Geld und erfordert keine Mitgliedschaft.** Da die Menschen jeden Tag träumen, haben wir entschieden, dass dieser Raum kostenlos sein sollte."
          },
          {
            "p": "**Die beiden Dinge, die wir verkaufen, sind keine besseren Interpretationen.** Sie sind **zwei Möglichkeiten, die gleiche Interpretation zu bewahren.** Der Inhalt, den Sie auf dem Bildschirm sehen, ändert sich nach der Zahlung nicht."
          }
        ]
      },
      {
        "title": "Traumkarte — Ein Bild",
        "blocks": [
          {
            "p": "Wir stellen die in Ihrem Traum gefundenen Symbole und deren Bedeutungen in **einem Bild** zur Verfügung. Es handelt sich um eine Bilddatei, nicht um ein PDF, sodass Sie es so speichern oder an andere senden können."
          },
          {
            "p": "Dies ist für diejenigen gedacht, die Bedauern empfinden, wenn ein guter Traum nach dem Schließen des Bildschirms verschwindet. Da wir Träume nicht speichern, ist dies der einzige Weg, um ihn zu behalten."
          }
        ]
      },
      {
        "title": "태몽 Report — Dokument {conceptionPages} Seiten",
        "blocks": [
          {
            "p": "Für Träume, die Symbole zeigen, die als 태몽 (Empfängnis-Träume) interpretiert werden, erstellen wir ein **{conceptionPages}-Seiten-Dokument.** Es enthält, welche Symbole erschienen sind, wie diese Symbole traditionell interpretiert wurden und einen Platz, um das aufzuzeichnen."
          },
          {
            "p": "Da 태몽 oft unter Familienmitgliedern besprochen und geteilt werden, selbst nachdem das Kind geboren ist, haben wir ein separates Dokument für Träume erstellt, die zu kostbar sind, um sie nur auf dem Bildschirm zu sehen."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Worte, die auch hier nicht gesagt werden",
        "blocks": [
          {
            "p": "Wir bestimmen nicht den Schwangerschaftsstatus oder das Geschlecht des Kindes. Solche Aussagen erscheinen nicht im Dokument. Für Details siehe [wie man 태몽 interpretiert](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Warum es kein Dokument mehr gibt",
        "blocks": [
          {
            "p": "Geschwisterdienste bieten neunseitige Berichte an. Die saju-Engine extrahiert viele Werte aus nur einem Geburtsdatum. Die Trauminterpretation funktioniert nicht so."
          },
          {
            "p": "Die im Wörterbuch aufgeführten Symbole summieren sich auf {symbolTotal}, und die meisten von ihnen haben **eine Bedeutung.** Um das auf neun Seiten auszudehnen, müssten wir traditionelle Bedeutungen schreiben, die in keinem Material zu finden sind, und genau das hat dieser Dienst entschieden, nicht zu tun. Daher ist das Dokument nur so lang, wie es die Materialien ehrlich erlauben, und nicht länger."
          }
        ]
      },
      {
        "title": "Preise und Verkaufsstatus",
        "blocks": [
          {
            "p": "Preise sind im [Preise-Leitfaden](/pricing) aufgeführt. Der Grund, warum dieses Dokument keine Beträge auflistet, ist absichtlich — um Situationen zu vermeiden, in denen das Leitdokument mit alten Beträgen bleibt, wenn sich die Preise ändern. Der Bildschirm und die Bedingungen lesen alle denselben Betrag von einem Ort."
          },
          {
            "p": "Die Dokumente, die Sie kaufen, können **mit derselben Bestellung erneut empfangen werden.** Da wir jedoch keine Dateien aufbewahren, können Sie sie nicht wiederherstellen, sobald Sie den Ergebnisbildschirm verlassen — bitte bewahren Sie die Dateien auf, die Sie erhalten."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Persönliche Informationen",
    "title": "Die Methode, Träume, die Sie aufschreiben, nicht zu speichern",
    "summary": "Wir erklären, was es technisch bedeutet, dass Traumgeschichten nirgendwo aufgezeichnet werden, und was im Ergebnislink enthalten ist.",
    "backLabel": "Interpretationsbasis",
    "sections": [
      {
        "title": "Keine Mitgliedschaft erforderlich",
        "blocks": [
          {
            "p": "Dreams-Link erstellt keine Konten. Wir sammeln keine Namen, E-Mails oder Telefonnummern. Die einzigen Dinge, die wir sammeln, sind die Träume, die Sie aufschreiben, wie Sie sich beim Aufwachen gefühlt haben und ob Sie denselben Traum wiederholt träumen, und das bleibt nicht nach der Interpretation."
          },
          {
            "p": "Traumgeschichten sind die privatesten Werte, die dieser Dienst erhält. Deshalb sind die Regeln strenger als nötig — wir haben nicht einmal einen Raum eingerichtet, um das, was Sie einreichen, aufzuschreiben."
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
            "p": "Was folgt, **#**, ist der Eingabewert. Dieser Teil wird als **Fragment** bezeichnet, das ein **Teil ist, das der Browser nicht an den Server sendet**. Dies ist ein Standard-Webverhalten und keine Regel, die wir erstellt haben — es wurde ursprünglich entworfen, um einen Standort innerhalb eines Dokuments anzuzeigen, sodass der Server keinen Bedarf hat, es zu sehen."
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
            "p": "Die Tatsache, dass es nicht auf dem Server gespeichert ist, bedeutet nicht, dass der Link sicher ist. Der Ergebnislink enthält den Traum, den Sie bereitgestellt haben, sodass die Person, die diesen Link erhält, diesen Inhalt lesen kann."
          }
        ]
      },
      {
        "title": "Warum wird die Berechnung auf dem Server durchgeführt, aber nicht gespeichert?",
        "blocks": [
          {
            "p": "Die Berechnung selbst erfolgt auf dem Server. Das Finden von Symbolen erfordert das gesamte Wörterbuch, und dieses Wörterbuch ist zu groß, um es an den Browser zu senden. Das Behalten des Wörterbuchs auf dem Server bedeutet auch, dass, wenn ein Fehler behoben wird, er für alle gleichzeitig reflektiert wird. Allerdings, **nach der Verarbeitung der Anfrage wird dieser Wert nirgendwo verwendet.** Es gibt keinen Code, um ihn in die Datenbank einzufügen."
          },
          {
            "p": "Ein minimaler, für den Betrieb notwendiger Datensatz wird aufbewahrt — ein Zähler, um zu verhindern, dass dieselbe Person zu viele Anfragen in kurzer Zeit sendet. Dies umfasst nicht den Trauminhalt, und die Zugriffs-IP wird ebenfalls nicht gespeichert. Nur ein Wert, der mit dem Datum gehasht ist, wird gezählt, und dieser Wert ändert sich, wenn sich der Tag ändert."
          }
        ]
      },
      {
        "title": "Was nicht getan werden kann, weil es nicht gespeichert ist",
        "blocks": [
          {
            "p": "Um ehrlich zu sein, gibt es Dinge, auf die wir verzichtet haben, weil wir keine Daten speichern."
          },
          {
            "ul": [
              "**Es gibt kein Traumtagebuch.** Sie können die Interpretation von letzter Woche nicht abrufen, und Sie müssen den Link haben, um sie erneut zu sehen. Dies geschieht absichtlich — um ein Tagebuch zu erstellen, müssen die privatesten Aufzeichnungen kontinuierlich gespeichert werden.",
              "**Das erneute Finden des gleichen Wertes.** Es gibt keinen Cache. Stattdessen ist das Wörterbuch festgelegt, und die Übereinstimmungsregeln sind deterministisch, sodass derselbe Text immer dasselbe Symbol ergibt — die Regeln ersetzen, was der Cache garantiert hätte.",
              "**Ein Aktualisieren bringt das Werbeportal erneut hervor.** Dies liegt daran, dass es keinen Ort gibt, um Betrachtungsprotokolle zu hinterlassen."
            ]
          }
        ]
      },
      {
        "title": "Im Falle eines Kaufs",
        "blocks": [
          {
            "p": "Wenn Sie einen Bericht kaufen, wird zu diesem Zeitpunkt ein Transaktionsprotokoll aufbewahrt. Die Zahlung hat eine gesetzlich definierte Aufbewahrungsfrist, und ohne eine Bestellhistorie können Rückerstattungen nicht bearbeitet werden. Selbst dann **fügt der Trauminhalt, der in der Interpretation geschrieben ist, sich nicht an die Bestellung an** — er wird erneut empfangen und in dem Moment geschrieben, in dem das Dokument nach der Zahlungsbestätigung erstellt wird."
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
              "**Zahlung und Rückerstattung** — Wenn das Dokument nicht erstellt wurde oder der Zahlungsbetrag von der Bestellung abweicht, wird eine vollständige Rückerstattung gewährt. Die Bedingungen finden Sie in der [Rückerstattungspolitik](/refund-policy).",
              "**Persönliche Informationen** — Wir akzeptieren Anfragen auf Zugang, Berichtigung und Löschung. Die Bearbeitungspolitik finden Sie in der [Datenschutzrichtlinie](/privacy).",
              "**Fehler bei der Interpretation melden** — Wenn Symbole falsch gefunden wurden oder die Interpretation seltsam erscheint, lassen Sie es uns bitte wissen. Wenn Sie angeben, wann Sie diese Traumgeschichte geschrieben haben, können wir sie mit demselben Text erneut überprüfen."
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
            "p": "Sie müssen den Traum, den Sie in der Anfrage-E-Mail angegeben haben, nicht erneut schreiben. Wir speichern keine Eingaben, daher können wir sie nicht erneut abrufen, und die Bestellnummer reicht zur Verifizierung aus. Bitte notieren Sie sie nur, wenn es unbedingt notwendig ist, z.B. um Fehler bei der Interpretation zu melden."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Dienstprinzipien",
    "title": "Was wir nicht tun",
    "summary": "Wir bieten keine Lotteriezahlen, Traumtagebücher, Schwangerschaftsbestimmungen oder Talismane an. Wir erklären, warum wir uns entschieden haben, jedes dieser Dinge nicht zu tun.",
    "backLabel": "Interpretationsgrundlage",
    "sections": [
      {
        "title": "Wir bieten keine Lotteriezahlen an",
        "blocks": [
          {
            "p": "Obwohl dies häufig in Traumdeutungsdiensten angesprochen wird, tun wir dies nicht. **Es gibt keine Grundlage in der traditionellen Traumdeutung, um Zahlen aus Träumen abzuleiten.** Während es Aufzeichnungen gibt, die Schweineträume als Reichtum interpretieren, gibt es keine Regel in der Literatur, die sechs Zahlen daraus ableitet."
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
            "p": "Obwohl es praktisch wäre, eine Funktion zu haben, um vergangene Träume zu sammeln, würde es erfordern, dass wir **die Träume, die Sie bereitstellen, kontinuierlich speichern.** Traumnarrative sind der privateste Aspekt dessen, was dieser Dienst erhält, und wir haben entschieden, das nicht auszutauschen."
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
            "p": "Wir werden nur feststellen, dass ein als 태몽 (Empfängnis-Traum) interpretiertes Symbol erschienen ist. Ob Sie schwanger sind oder ob das Kind eine Tochter oder ein Sohn ist, ist **nicht etwas, das durch Träume bekannt sein kann.** Solche Aussagen erscheinen nicht auf dem Bildschirm oder in bezahlten Dokumenten."
          }
        ]
      },
      {
        "title": "Wir verkaufen keine Talismane oder Amulette",
        "blocks": [
          {
            "p": "Nur weil ein Symbol als vorsorglich interpretiert wird, bedeutet das nicht, dass es einen Grund gibt, etwas zu kaufen. Ein 흉몽 (unheilvoller Traum) wurde traditionell verwendet, um **eine Situation anzuzeigen, die jetzt zu prüfen ist**, nicht um zu bezahlen, um etwas abzuwenden."
          },
          {
            "p": "Wir erzeugen keine Angst, um etwas basierend darauf zu verkaufen. Die einzigen Dinge, die wir verkaufen, sind die beiden oben genannten, und keines davon bietet zusätzliche Interpretationen, sondern vielmehr **Möglichkeiten, denselben Inhalt zu bewahren.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Wir machen keine definitiven Aussagen über die Zukunft",
        "blocks": [
          {
            "p": "Wir machen keine definitiven Aussagen darüber, ob etwas passieren wird, wann es passieren wird oder bezüglich Gesundheit, Reichtum oder Lebensdauer. Die Bedeutung traditioneller Symbole zu vermitteln und die Zukunft vorherzusagen, sind unterschiedliche Angelegenheiten."
          }
        ]
      },
      {
        "title": "Wir fabrizieren keine Interpretationen, die nicht existieren",
        "blocks": [
          {
            "p": "Für Symbole, die nicht im Wörterbuch existieren, werden wir **feststellen, dass wir sie nicht finden konnten.** Wir stellen keine ähnlichen zusammen oder füllen den Raum mit plausiblen Sätzen. Daher verwendet dieser Dienst [keine künstliche Intelligenz für die Traumdeutung](/guide/no-ai). Das Modell sagt nicht, dass es nicht weiß, was es nicht weiß."
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
  "intro": "Änderungen Ihrer Nutzungsbedingungen — Preise, Richtlinien — werden hier veröffentlicht, bevor sie in Kraft treten. Interne Verbesserungen, wie z.B. eine schnellere Bildschirmdarstellung, werden hier nicht veröffentlicht: Was hier erscheint, ist das, was Sie wissen müssen.",
  "empty": {
    "title": "Keine Ankündigungen veröffentlicht",
    "body": "Wenn es Änderungen gibt, über die wir Sie informieren müssen, werden sie hier veröffentlicht."
  },
  "effective": "Gültig ab {date}",
  "pager": {
    "label": "Hinweis-Seite",
    "newer": "← Neueste",
    "older": "Frühere Hinweise →"
  },
  "items": {
    "2026-08-06-no-storage": {
      "title": "Der von Ihnen bereitgestellte Traum wird nicht gespeichert.",
      "body": [
        "Traumgeschichten sind die privatesten Werte, die dieser Dienst erhält. Daher werden sie in keiner Tabelle aufgezeichnet. Die Eingabe wird nur in der Ergebnisadresse für die Berechnung verwendet, und sobald das Fenster geschlossen wird, verschwindet sie.",
        "Wir haben beschlossen, keine Funktion zu erstellen, die Träume sammelt und den Verlauf anzeigt (Traumtagebuch). Es ist eine nützliche Funktion, aber dafür müssen die privatesten Aufzeichnungen kontinuierlich gespeichert werden.",
        "Wenn Sie den Ergebnislink an andere senden, enthält er den Trauminhalt. Bitte seien Sie vorsichtig beim Teilen."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Die Ergebnisse enthalten das Symbolwörterbuch und die Berechnungskriterien.",
      "body": [
        "Die Grundlage für die Interpretation ist das traditionelle 해몽 (Traumdeutung) Symbolwörterbuch. Die Ergebnisse und Dokumente enthalten die Version dieses Wörterbuchs (z.B. 1.2.0) und die Kriterien zur Regelfindung (z.B. dream-1.0.0). Der gleiche Traum wird immer dasselbe Symbol basierend auf denselben Kriterien ergeben.",
        "Wenn das Hinzufügen von Symbolen oder das Ändern von Bedeutungen im Voraus die Ergebnisse verändern kann, wird diese Tatsache hier dargestellt. Dies liegt daran, dass sich die Ergebnisse, die Sie zuvor erhalten haben, ändern können.",
        "Wir erstellen keine traditionellen Bedeutungen, die nicht im Wörterbuch enthalten sind. Wenn keine Symbole gefunden werden, geben wir einfach an, dass keine gefunden wurden, und schließen ab."
      ]
    },
    "2026-08-06-conception": {
      "title": "Wir informieren Sie nur über 태몽 und treffen keine Urteile.",
      "body": [
        "Wenn Symbole, die traditionell als 태몽 betrachtet werden, im Traum erscheinen, werden wir Sie darüber informieren. Wir bestimmen jedoch nicht den Schwangerschaftsstatus oder das Geschlecht des Kindes — solche Behauptungen haben keine Grundlage, und medizinische Urteile liegen in der Verantwortung medizinischer Einrichtungen.",
        "Die Erwähnung von Söhnen und Töchtern in traditionellen Erzählungen spiegelt Bräuche wider, die überliefert wurden, und bedeutet nicht, dass wir dies korrekt vorhersagen."
      ]
    }
  }
} satisfies NoticeCopy;
