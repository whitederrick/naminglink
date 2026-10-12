import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Deutsch — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const DE_DOCS = {
  "about": {
    "eyebrow": "Einführung",
    "title": "Saju-Link Einführung",
    "summary": "Dies ist ein Dienst, der eine saju (vier-Säulen-Lesung) basierend auf Ihrem Geburtsdatum und Ihrer Geburtszeit erstellt und erklärt, was die acht Zeichen bedeuten. Es wird klargestellt, was berechnet wird und was nicht.",
    "backLabel": "Zurück zur Startseite",
    "sections": [
      {
        "title": "Was machen wir?",
        "blocks": [
          {
            "p": "Saju-Link erstellt das **saju (vier-Säulen) Diagramm basierend auf Ihrem Geburtsdatum und Ihrer Geburtszeit und zeigt, was die acht Zeichen bedeuten**. Es liest die Stärke der fünf Elemente und die Stärke des Tagespfeilers und untersucht auch das heutige Glück basierend auf dem Tagesstamm."
          },
          {
            "p": "Was Sie auf dem Bildschirm sehen, ist **kostenlos und erfordert keine Mitgliedschaft.** Das kostenpflichtige Produkt ist ein PDF-Dokument, das Werte enthält, die nicht auf dem Bildschirm angezeigt werden — die Grundlage zur Unterscheidung zwischen einem starken Tagespfeiler und einem schwachen Tagespfeiler, Wang Sang Hyu Su Sa und die Korrekturdaten für die wahre Sonnenzeit."
          }
        ]
      },
      {
        "title": "Was berechnen wir?",
        "blocks": [
          {
            "p": "Saju wird unter Verwendung des **manseyeok (koreanischen lunisolaren Almanachs)** erstellt. Die Geburtszeit wird auf die **wahre Sonnenzeit** des Geburtsortes korrigiert — da die tatsächliche Position der Sonne je nach Region variiert, auch wenn die Uhr die gleiche Zeit anzeigt."
          },
          {
            "p": "Punkte werden nur gemäß den festgelegten Regeln vergeben. Konzepte aus der traditionellen myeongri (koreanischen Schicksalsstudie) wie die Zehn Götter, Beziehungen zwischen den Erdzweigen und das Ausbalancieren der Elemente werden in Berechnungsregeln übersetzt, und **die gleiche Eingabe wird immer den gleichen Wert ergeben**. Wenn Regeln geändert werden, wird ein Regressionstest durchgeführt, um sicherzustellen, dass frühere Ergebnisse unverändert bleiben."
          },
          {
            "p": "**KI wird in den Sätzen auf dem Bildschirm nicht verwendet.** Die Erklärungen, die auf dem kostenlosen Bildschirm erscheinen, sind feste Phrasen, die an die Berechnungsergebnisse angehängt sind. **Nur die Interpretationen in den kostenpflichtigen Berichten** nutzen generative KI, und selbst dann erstellt die KI keine Punkte — sie schreibt nur Sätze basierend auf den vom Motor bereitgestellten Werten."
          }
        ]
      },
      {
        "title": "Was sagen wir nicht?",
        "blocks": [
          {
            "ul": [
              "**Wir bieten keine Wahrsagerei an.** Wir schreiben nicht, dass Sie jemanden treffen oder vermeiden sollten. Dies ist ein Referenzmaterial, das die Perspektiven der traditionellen myeongri zusammenfasst.",
              "**Wir speichern keine Eingaben.** Das Geburtsdatum und die Geburtszeit werden nur zum Zeitpunkt der Berechnung verwendet und nicht auf dem Server gespeichert. Der Ergebnislink wird ebenfalls an einem Ort gespeichert, den der Browser nicht an den Server sendet.",
              "**Punkte werden nicht als menschliche Werte betrachtet.** Nur weil das heutige Glück niedrig ist, bedeutet das nicht, dass Sie an diesem Tag aufgeben sollten."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Detaillierte Berechnungsmethoden sind im [Benutzerhandbuch](/guide) geschrieben. Geschäftsinformationen und Kontaktdaten finden Sie unter [Kontakt](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Berechnungsgrundlage",
    "title": "Was ist die Grundlage für die Berechnungen?",
    "summary": "Wir legen alle Regeln offen, die von Saju-Link verwendet werden. Sie können überprüfen, woher die auf dem Bildschirm angezeigten Zahlen stammen, einschließlich der Anpassungen für das heutige Glück, der Punkte aus der Tabelle der Beziehungen zwischen den Erdzweigen und der Grenzwerte, die zwischen einem starken Tagespfeiler und einem schwachen Tagespfeiler unterscheiden.",
    "backLabel": "Zurück zur Startseite",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Die hier geschriebenen Werte werden **direkt aus dem Berechnungscode gelesen**. Da sie nicht manuell in den Text übertragen werden, werden die Zahlen in diesem Dokument auch entsprechend geändert, wenn die Regeln geändert werden."
          }
        ]
      }
    ]
  },
  "guide/natal-chart": {
    "eyebrow": "Dienstgrundlage",
    "title": "natal chart — Woher kommen die acht Zeichen?",
    "summary": "Es wird erklärt, wie das Jahr, der Monat, der Tag und die Uhrzeit der Geburt zu den vier Säulen und acht Zeichen werden und welches Zeichen auf Sie verweist. Es wird auch erörtert, warum es auch ohne Kenntnis der genauen Geburtszeit betrachtet werden kann.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Vier Säulen, Acht Zeichen",
        "blocks": [
          {
            "p": "Saju (四柱) bedeutet wörtlich **vier Säulen**. Jede der Jahr, Monat, Tag und Uhrzeit der Geburt wird als eine Säule festgelegt, und für jede Säule werden zwei Zeichen geschrieben. Somit gibt es insgesamt acht Zeichen, die als **das Geburtshoroskop** bezeichnet werden."
          },
          {
            "table": {
              "head": [
                "Säule",
                "Woher stammt es?",
                "Zwei Zeichen"
              ],
              "rows": [
                [
                  "Jahressäule (年柱)",
                  "Geburtsjahr",
                  "Himmlischer Stamm + Erdzweig"
                ],
                [
                  "Monatssäule (月柱)",
                  "Geburtsmonat",
                  "Himmlischer Stamm + Erdzweig"
                ],
                [
                  "Tagessäule (日柱)",
                  "Geburtstag",
                  "Himmlischer Stamm + Erdzweig"
                ],
                [
                  "Zeitssäule (時柱)",
                  "Geburtszeit",
                  "Himmlischer Stamm + Erdzweig"
                ]
              ]
            }
          },
          {
            "p": "Die oberen Zeichen werden himmlische Stämme (天干) genannt, und die unteren Zeichen werden erdliche Zweige (地支) genannt. Es gibt zehn himmlische Stämme und zwölf erdliche Zweige. Die zwölf erdlichen Zweige werden allgemein als **Tierkreiszeichen** bezeichnet."
          }
        ]
      },
      {
        "title": "Unter ihnen weist ein Zeichen auf mich hin.",
        "blocks": [
          {
            "p": "Nicht alle acht Zeichen haben das gleiche Gewicht. Der **himmlische Stamm des Geburtstags**, speziell das obere Zeichen der Tagessäule, weist auf **mich selbst** hin. Dies wird als **Tagestamm (日干)** bezeichnet."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju besteht aus acht Zeichen, die mit jeweils zwei Zeichen für Jahr, Monat, Tag und Uhrzeit der Geburt, dargestellt durch die himmlischen Stämme und erdlichen Zweige, festgelegt werden. Hier ist der hervorgehobene Tagestamm (日干) das Zeichen, das auf mich selbst verweist.",
            "labels": {
              "year": "Jahressäule",
              "yearNote": "Wurzel · Tierkreiszeichen",
              "month": "Monatssäule",
              "monthNote": "Jahreszeit · Stärke",
              "day": "Tag Säule",
              "dayNote": "Selbst · Ehepartner Palast",
              "hour": "Stunden Säule",
              "hourNote": "Spätere Jahre · Nutzung",
              "stem": "Himmlischer Stamm",
              "stemNote": "Tag Stamm = Selbst",
              "branch": "Erdiger Zweig",
              "branchNote": "Tag Zweig = Ehepartner Palast"
            }
          },
          {
            "p": "Was dieser Dienst zeigt, stammt hauptsächlich von diesem einen Zeichen — die Interpretation von Tendenzen, die Stärke der fünf Elemente, die derzeit benötigte Energie und das heutige Glück werden alle auf der Grundlage des Tag Stammes gemessen. Die verbleibenden sieben Zeichen zeigen an, 'in welcher Umgebung der Tag Stamm platziert ist'."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Warum der Geburtstag?",
        "blocks": [
          {
            "p": "Der Jahr Stamm ist für alle, die in diesem Jahr geboren wurden, gleich, und der Monat Stamm ist für alle, die in diesem Monat geboren wurden, gleich. Der Tag Stamm ändert sich, wenn der Tag wechselt, und die traditionelle Wahrsagerei betrachtet diese Position seit der Song-Dynastie als das Selbst. Wenn der Stunden Stamm einbezogen wird, unterscheidet er sogar zwischen denen, die am selben Tag geboren wurden."
          }
        ]
      },
      {
        "title": "Geteilt nach Solar-Terminen, nicht Kalenderjahr",
        "blocks": [
          {
            "p": "Ein saju Jahr ändert sich nicht am 1. Januar, sondern eher bei **Ipchun (um den 4. Februar)**. Der Monat wird ebenfalls basierend auf Solar-Terminen unterteilt."
          },
          {
            "p": "Daher erhalten diejenigen, die im **Januar und frühen Februar geboren wurden, den Jahr Stamm des vorherigen Jahres**. Hier entsteht das häufige Missverständnis über Tierkreiszeichen. Das Gleiche gilt, wenn Sie einen lunar Geburtstag eingeben — er wird zurück in solar umgerechnet und dann nach Solar-Terminen unterteilt."
          }
        ]
      },
      {
        "title": "Sie können es auch ohne Kenntnis der Geburtszeit lesen",
        "blocks": [
          {
            "p": "Wenn Sie die Zeit nicht eingeben, basiert die Lesung auf den drei Säulen und sechs Zeichen, ohne die Stunden Säule. Wir raten nicht zu fehlenden Werten — willkürlich eine Stunden Säule zuzuweisen, kann die Stärke der fünf Elemente stören und zu falschen Schlussfolgerungen führen, anstatt potenziell genauen."
          },
          {
            "p": "Wenn Sie die Zeit kennen, ist es besser, sie einzubeziehen. Da zwei Zeichen unter den acht hinzugefügt werden, kann sich die Stärke und Bewertung der fünf Elemente ändern. Wir verwenden jedoch nicht die Uhrzeit direkt, sondern verwenden [Wahre Solarzeit](/guide/true-solar-time)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Die Methode, die acht Zeichen als fünf Elemente zur Bewertung der Stärke zu zählen, wird in [Stärke der fünf Elemente und starker/schwacher Tag Säule](/guide/five-elements) fortgesetzt, während die Methode, die verbleibenden Zeichen basierend auf dem Tag Stamm zu lesen, in [Zehn Götter](/guide/ten-gods) fortgesetzt wird."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Fünf Elemente",
    "title": "Stärke der fünf Elemente und starker/schwacher Tag Säule",
    "summary": "Wir zählen die acht Zeichen als fünf Elemente, um zu sehen, welche Energie stark und welche schwach ist. Wir geben die Schwellenwerte (45%·35%) bekannt, die die Stärke des Tag Stammes bestimmen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Zählen der acht Zeichen als fünf Energien",
        "blocks": [
          {
            "p": "Die zehn himmlischen Stämme und zwölf erdigen Zweige gehören jeweils zu einem der **Fünf Elemente (五行)** — Holz (木), Feuer (火), Erde (土), Metall (金), Wasser (水). Indem wir die Zeichen im Geburtshoroskop nach ihren jeweiligen Elementen zählen, können wir bestimmen, welche Energie stark und welche schwach ist."
          },
          {
            "p": "Wir zählen jedoch nicht nur die Zahlen. Wir berücksichtigen auch **ob der Geburtsmonat diese Energie unterstützt**. Selbst dasselbe Zeichen kann unterschiedliche Stärken haben, je nachdem, ob es seine Saison trifft. Dies wird als Monatszeichen (月令) bezeichnet und in fünf Stufen unterteilt: Wang (旺), Sang (相), Hyu (休), Su (囚) und Sa (死)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Wo Bildschirm und Bericht sich unterscheiden",
        "blocks": [
          {
            "p": "Der kostenlose Bildschirm zeigt nur die **Stärke nach Berücksichtigung des Monatszeichens**. Die Werte vor dem Monatszeichen und die Tabelle von Wang, Sang, Hyu, Su und Sa sind im kostenpflichtigen Bericht enthalten — dies wird Ihnen zur Verfügung gestellt, um direkt zu überprüfen, wo die Bewertung abweicht."
          }
        ]
      },
      {
        "title": "Stärke des Tag Stammes — Stark und Schwach",
        "blocks": [
          {
            "p": "Nach der Zählung der Stärken der fünf Elemente bewerten wir, ob der **Tag Stamm stark oder schwach ist**. Das Kriterium ist das Verhältnis der Energien, die mit dem Tag Stamm ausgerichtet sind."
          },
          {
            "p": "Die Energien, die mit dem Tag Stamm ausgerichtet sind, sind **Ressource und Begleiter** — die Energien, die mich gebären und die mir ähnlich sind. Da es zwei von fünf gibt, wird es, wenn es keine Verzerrung gibt, um {evenAllyRatio} liegen. Wir betrachten den Bereich um diese Zahl als ausgewogen und lesen darüber und darunter als stark oder schwach."
          },
          {
            "table": {
              "head": [
                "Verhältnis der mit dem Tag Stamm ausgerichteten Energien",
                "Bewertung",
                "Was bedeutet das?"
              ],
              "rows": [
                [
                  "{strongThreshold} oder höher",
                  "Starker Tag Säule (身强)",
                  "Die Energien, die den Tag Stamm unterstützen, sind reichlich."
                ],
                [
                  "{weakThreshold} oder höher und weniger als {strongThreshold}",
                  "Ausgewogen (中和)",
                  "Es ist schwierig, in irgendeine Richtung zu schließen."
                ],
                [
                  "Weniger als {weakThreshold}",
                  "Schwacher Tag Säule (身弱)",
                  "Die Energien, die den Tag Stamm unterstützen, sind schwach."
                ]
              ]
            }
          },
          {
            "p": "Die Zahlen in dieser Tabelle sind nicht aus dem Text transkribiert, sondern werden **direkt aus der Engine gelesen**. Wenn sich die Regeln ändern, wird dieses Dokument ebenfalls geändert."
          }
        ]
      },
      {
        "title": "Stärke ist nicht gut oder schlecht",
        "blocks": [
          {
            "p": "Stark zu sein bedeutet nicht gut zu sein, und schwach zu sein bedeutet nicht schlecht zu sein. Wenn stark, gibt es die Kraft, voranzutreiben, aber es ist leicht, sich einseitig zu neigen; wenn schwach, ist es einfacher, die Stärke anderer auszuleihen, aber man kann schnell ermüden, wenn man allein aushält. **Die benötigten Energien unterscheiden sich in beiden Fällen.**"
          },
          {
            "p": "Die Bestimmung dieser 'benötigten Energie' ist das ausgleichende Element, und es wird in [Ausgleichendes Element](/guide/yongsin) fortgesetzt."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Wie die acht Zeichen festgelegt werden, ist in [Geburtshoroskop](/guide/natal-chart) zu finden. Wie die heutige Tag Säule mit dieser Stärke interagiert, wird in [heutiges Glück](/guide/today-fortune) behandelt."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Ausgleichendes Element",
    "title": "Ausgleichendes Element — Die jetzt benötigte Energie",
    "summary": "Wenn der Tag Stamm stark ist, betrachten wir die Energie, die reduziert werden muss; wenn schwach, betrachten wir die Energie, die als Unterstützung notwendig ist. Dies erklärt, wie man diese Energie auswählt und wie man damit umgeht, wenn sie ausgewogen ist.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Die fünf Elemente allein sind nicht genug",
        "blocks": [
          {
            "p": "Es gibt Möglichkeiten zu messen, ob die fünf Elemente gleichmäßig verteilt sind. Was jedoch wirklich benötigt wird, ist **was in dieser saju fehlt und was übermäßig ist**."
          },
          {
            "p": "Eine saju, die gleichmäßig verteilt ist, ist nicht immer angenehm, noch ist eine saju, die verzerrt ist, immer schwierig. Die Richtung der Verzerrung und ob es ein Element gibt, das sie mildert, ist der Kreuzungspunkt."
          }
        ]
      },
      {
        "title": "Ausgleichendes Element — Reduzieren, wenn übermäßig, Hinzufügen, wenn mangelhaft",
        "blocks": [
          {
            "p": "Das ausgleichende Element (用神) ist **die Energie, die diese Person derzeit benötigt**. Es gibt mehrere Methoden, um es zu bestimmen (unterdrücken und unterstützen, saisonales Gleichgewicht, Affektion, Mediation), und diejenige, die als Regeln ausgedrückt werden kann — und am weitesten verbreitet ist — ist **unterdrücken und unterstützen (抑扶)**. Wenn der Tagestamm stark ist, wird angenommen, dass eine Energie zur Reduzierung benötigt wird; wenn schwach, ist eine Energie zum Hinzufügen erforderlich."
          },
          {
            "table": {
              "head": [
                "Urteil",
                "Was benötigt wird",
                "Anzahl der Typen"
              ],
              "rows": [
                [
                  "Starker Tagestamm (身强)",
                  "Energie zum Entziehen — Output, Reichtum und Beamter",
                  "Drei"
                ],
                [
                  "Schwacher Tagestamm (身弱)",
                  "Energie zum Hinzufügen — Ressource, Begleiter",
                  "Zwei"
                ],
                [
                  "Ausgeglichen (中和)",
                  "Kann nicht durch unterdrücken und unterstützen entschieden werden, daher die dünnsten Energien",
                  "Zwei"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Schwellenwert für Stärke und Schwäche",
        "blocks": [
          {
            "p": "Die Seite des Tagestamms ist **Ressource und Begleiter** — die Energie, die mich gebiert, und die Energie, die mir ähnlich ist. Da zwei von fünf beteiligt sind, wird das vollständige Gleichgewicht {evenAllyRatio} sein. Die Breite ist über und unter diesem {evenAllyRatio} festgelegt."
          },
          {
            "table": {
              "caption": "Das Verhältnis der Verbündeten (Ressource + Begleiter) in der Gesamtstärke",
              "head": [
                "Verhältnis",
                "Urteil"
              ],
              "rows": [
                [
                  "{strongThreshold} oder mehr",
                  "Starker Tagestamm"
                ],
                [
                  "{weakThreshold} oder mehr und weniger als {strongThreshold}",
                  "Ausgeglichen"
                ],
                [
                  "Weniger als {weakThreshold}",
                  "Schwacher Tagestamm"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ausgeglichen ist ein 'weniger sicheres Urteil'",
        "blocks": [
          {
            "p": "Ausgeglichen bedeutet, dass unterdrücken und unterstützen es nicht entscheiden kann. Zu diesem Zeitpunkt werden die beiden dünnsten Energien einfach als notwendig angesehen. Auf dem Ergebnisscreen wird es als 'derzeit dünne Position' vermerkt, anstatt als definitive Aussage."
          }
        ]
      },
      {
        "title": "Stärke ist nicht die Anzahl der Zeichen",
        "blocks": [
          {
            "p": "Bei der Zählung der Stärke der fünf Elemente werden die acht Zeichen nicht so gezählt, wie sie erscheinen. Die Werte spiegeln die verborgenen himmlischen Stämme (地藏干) innerhalb der irdischen Zweige und die Saison der Energie des Monats (月令) wider, in dem man geboren wurde."
          },
          {
            "p": "Wenn man nur die Oberflächenzeichen zählt, übersieht man die Tatsache, dass selbst die gleichen 木 Zeichen je nach Saison völlig unterschiedliche Stärken haben können. Das 木 des Frühlings und das 木 des Herbstes haben, obwohl es dasselbe Zeichen ist, unterschiedliche Stärken."
          }
        ]
      },
      {
        "title": "Wo das ausgleichende Element verwendet wird",
        "blocks": [
          {
            "p": "Das bestimmte ausgleichende Element wird an zwei Stellen verwendet. Eine ist der Ergebnisscreen's **'derzeit benötigte Energie'**, und die andere ist [heutige Fortune](/guide/today-fortune) — ob die Energie von heute dem ausgleichenden Element entspricht, ist der Punkt, der die Punktzahl an diesem Tag am meisten beeinflusst."
          }
        ]
      },
      {
        "title": "Dies ist ein einfaches Urteil",
        "blocks": [
          {
            "p": "Die tatsächliche Schicksalsanalyse berücksichtigt die Formation und saisonalen Bedingungen (die Wärme und Feuchtigkeit der Saison), um das ausgleichende Element zu bestimmen, und die Schlussfolgerungen können je nach Methode variieren. Saju-Link verwendet nur **Reduzierung, die durch Stärkewerte gemessen werden kann**. Dies liegt am Prinzip, nur das zu verwenden, was in Regeln umgewandelt werden kann, sodass dieselbe Eingabe immer dieselbe Antwort liefert."
          },
          {
            "p": "Stattdessen präsentiert der Ergebnisscreen auch den starken und schwachen Tagestamm zusammen mit der derzeit benötigten Energie als **Lesematerial**. Dies soll vermeiden, die Grundlage der Punktzahl zu verbergen."
          }
        ]
      }
    ]
  },
  "guide/stem-gap": {
    "eyebrow": "Himmlische Stämme",
    "title": "Yang-Holz (甲) — Yang-Holz",
    "summary": "Element und Polarität des himmlischen Stamms 甲, wie er die anderen neun Stämme liest (die Zehn Götter) und welche irdischen Zweige ihn enthalten — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Yang-Holz (甲) ist der erste der zehn himmlischen Stämme",
        "blocks": [
          {
            "p": "甲 ist der erste der zehn himmlischen Stämme. Sein Element ist Holz und seine Polarität ist Yang. Saju-Link nennt eine Person, deren Tagesstamm 甲 ist, „Yang-Holz (甲)“."
          },
          {
            "p": "Die Zeile, die der Ergebnisbildschirm für diesen Tagesstamm zeigt, lautet: „Ein hoher Baum, der gerade wächst. Steht die Richtung fest, wankt er nicht, und er hält lieber aus, als sich zu beugen.“ Diese Zeile hat nichts mit der Tabelle oder den Werten unten zu tun."
          }
        ]
      },
      {
        "title": "Wie er die anderen Stämme liest (die Zehn Götter)",
        "blocks": [
          {
            "p": "Mit 甲 als Tagesstamm werden die zehn Stämme wie folgt gelesen. Die Lesung hat eine Richtung: So liest 甲 den anderen Stamm, und wenn der andere Stamm 甲 liest, kann ein anderer Name herauskommen."
          },
          {
            "table": {
              "caption": "Zehn Götter mit Yang-Holz (甲) als Tagesstamm",
              "head": [
                "Anderer Stamm",
                "Element und Polarität",
                "Zehn-Götter-Name"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Yang-Holz",
                  "Gefährte (比肩)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Yin-Holz",
                  "Rivale (劫財)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Yang-Feuer",
                  "Ausdruck (食神)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Yin-Feuer",
                  "Störer (傷官)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Yang-Erde",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yin-Erde (己)",
                  "Yin-Erde",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Yang-Metall",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Yin-Metall",
                  "Autorität (正官)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Yang-Wasser",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Yin-Wasser",
                  "Fürsorge (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stämme, die als Position des Ehepartners gelesen werden",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 甲 als Tagesstamm ist der Beständige Wohlstand 己 und die Autorität 辛. Wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
          }
        ]
      },
      {
        "title": "Die Zweige, die 甲 enthalten",
        "blocks": [
          {
            "p": "Hier sitzt 甲 verborgen in den irdischen Zweigen (die verborgenen Stämme). Der Anteil ist der Teil der dreißig Tage des Zweigs, den 甲 einnimmt."
          },
          {
            "table": {
              "caption": "Die Zweige, die 甲 enthalten",
              "head": [
                "Zweig",
                "Tier",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "寅",
                  "Tiger",
                  "Hauptstamm (本氣)",
                  "{hidInBon}"
                ],
                [
                  "卯",
                  "Hase",
                  "Reststamm (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "亥",
                  "Schwein",
                  "Mittelstamm (中氣)",
                  "{hidHaeJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Stamm entscheidet nicht über einen Menschen. Ein Saju wird daraus gelesen, wie sich seine acht Zeichen zueinander verhalten.",
              "Die Zehn Götter sind ein Urteil, das vom Tagesstamm aus gefällt wird. Dieselben zwei Zeichen erhalten einen anderen Namen, je nachdem, welches von ihnen der Tagesstamm ist."
            ]
          },
          {
            "p": "Die vollständigen Zehn Götter finden Sie im [Leitfaden zu den Zehn Göttern](/guide/ten-gods), die Stärke der Elemente und das Monatszeichen im [Leitfaden zu den fünf Elementen](/guide/five-elements). Weitere Stämme: [Yin-Holz (乙)](/guide/stem-eul) · [Yang-Feuer (丙)](/guide/stem-byeong) · [Yin-Feuer (丁)](/guide/stem-jeong) · [Yang-Erde (戊)](/guide/stem-mu) · [Yin-Erde (己)](/guide/stem-gi) · [Yang-Metall (庚)](/guide/stem-gyeong) · [Yin-Metall (辛)](/guide/stem-sin) · [Yang-Wasser (壬)](/guide/stem-im) · [Yin-Wasser (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-eul": {
    "eyebrow": "Himmlische Stämme",
    "title": "Yin-Holz (乙) — Yin-Holz",
    "summary": "Element und Polarität des himmlischen Stamms 乙, wie er die anderen neun Stämme liest (die Zehn Götter) und welche irdischen Zweige ihn enthalten — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Yin-Holz (乙) ist der zweite der zehn himmlischen Stämme",
        "blocks": [
          {
            "p": "乙 ist der zweite der zehn himmlischen Stämme. Sein Element ist Holz und seine Polarität ist Yin. Saju-Link nennt eine Person, deren Tagesstamm 乙 ist, „Yin-Holz (乙)“."
          },
          {
            "p": "Die Zeile, die der Ergebnisbildschirm für diesen Tagesstamm zeigt, lautet: „Eine Ranke — biegsames Gras. Es beugt sich den Umständen, um weiterzukommen, und bricht dabei nicht.“ Diese Zeile hat nichts mit der Tabelle oder den Werten unten zu tun."
          }
        ]
      },
      {
        "title": "Wie er die anderen Stämme liest (die Zehn Götter)",
        "blocks": [
          {
            "p": "Mit 乙 als Tagesstamm werden die zehn Stämme wie folgt gelesen. Die Lesung hat eine Richtung: So liest 乙 den anderen Stamm, und wenn der andere Stamm 乙 liest, kann ein anderer Name herauskommen."
          },
          {
            "table": {
              "caption": "Zehn Götter mit Yin-Holz (乙) als Tagesstamm",
              "head": [
                "Anderer Stamm",
                "Element und Polarität",
                "Zehn-Götter-Name"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Yang-Holz",
                  "Rivale (劫財)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Yin-Holz",
                  "Gefährte (比肩)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Yang-Feuer",
                  "Störer (傷官)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Yin-Feuer",
                  "Ausdruck (食神)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Yang-Erde",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yin-Erde (己)",
                  "Yin-Erde",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Yang-Metall",
                  "Autorität (正官)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Yin-Metall",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Yang-Wasser",
                  "Fürsorge (正印)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Yin-Wasser",
                  "Ungewöhnliche Stütze (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stämme, die als Position des Ehepartners gelesen werden",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 乙 als Tagesstamm ist der Beständige Wohlstand 戊 und die Autorität 庚. Wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
          }
        ]
      },
      {
        "title": "Die Zweige, die 乙 enthalten",
        "blocks": [
          {
            "p": "Hier sitzt 乙 verborgen in den irdischen Zweigen (die verborgenen Stämme). Der Anteil ist der Teil der dreißig Tage des Zweigs, den 乙 einnimmt."
          },
          {
            "table": {
              "caption": "Die Zweige, die 乙 enthalten",
              "head": [
                "Zweig",
                "Tier",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "卯",
                  "Hase",
                  "Hauptstamm (本氣)",
                  "{hidMyoBon}"
                ],
                [
                  "辰",
                  "Drache",
                  "Reststamm (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "未",
                  "Schaf",
                  "Mittelstamm (中氣)",
                  "{hidMiJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Stamm entscheidet nicht über einen Menschen. Ein Saju wird daraus gelesen, wie sich seine acht Zeichen zueinander verhalten.",
              "Die Zehn Götter sind ein Urteil, das vom Tagesstamm aus gefällt wird. Dieselben zwei Zeichen erhalten einen anderen Namen, je nachdem, welches von ihnen der Tagesstamm ist."
            ]
          },
          {
            "p": "Die vollständigen Zehn Götter finden Sie im [Leitfaden zu den Zehn Göttern](/guide/ten-gods), die Stärke der Elemente und das Monatszeichen im [Leitfaden zu den fünf Elementen](/guide/five-elements). Weitere Stämme: [Yang-Holz (甲)](/guide/stem-gap) · [Yang-Feuer (丙)](/guide/stem-byeong) · [Yin-Feuer (丁)](/guide/stem-jeong) · [Yang-Erde (戊)](/guide/stem-mu) · [Yin-Erde (己)](/guide/stem-gi) · [Yang-Metall (庚)](/guide/stem-gyeong) · [Yin-Metall (辛)](/guide/stem-sin) · [Yang-Wasser (壬)](/guide/stem-im) · [Yin-Wasser (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-byeong": {
    "eyebrow": "Himmlische Stämme",
    "title": "Yang-Feuer (丙) — Yang-Feuer",
    "summary": "Element und Polarität des himmlischen Stamms 丙, wie er die anderen neun Stämme liest (die Zehn Götter) und welche irdischen Zweige ihn enthalten — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Yang-Feuer (丙) ist der dritte der zehn himmlischen Stämme",
        "blocks": [
          {
            "p": "丙 ist der dritte der zehn himmlischen Stämme. Sein Element ist Feuer und seine Polarität ist Yang. Saju-Link nennt eine Person, deren Tagesstamm 丙 ist, „Yang-Feuer (丙)“."
          },
          {
            "p": "Die Zeile, die der Ergebnisbildschirm für diesen Tagesstamm zeigt, lautet: „Die Mittagssonne. Gefühle liegen offen, der Raum wird hell, und nach vorn zu treten fällt leicht.“ Diese Zeile hat nichts mit der Tabelle oder den Werten unten zu tun."
          }
        ]
      },
      {
        "title": "Wie er die anderen Stämme liest (die Zehn Götter)",
        "blocks": [
          {
            "p": "Mit 丙 als Tagesstamm werden die zehn Stämme wie folgt gelesen. Die Lesung hat eine Richtung: So liest 丙 den anderen Stamm, und wenn der andere Stamm 丙 liest, kann ein anderer Name herauskommen."
          },
          {
            "table": {
              "caption": "Zehn Götter mit Yang-Feuer (丙) als Tagesstamm",
              "head": [
                "Anderer Stamm",
                "Element und Polarität",
                "Zehn-Götter-Name"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Yang-Holz",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Yin-Holz",
                  "Fürsorge (正印)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Yang-Feuer",
                  "Gefährte (比肩)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Yin-Feuer",
                  "Rivale (劫財)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Yang-Erde",
                  "Ausdruck (食神)"
                ],
                [
                  "Yin-Erde (己)",
                  "Yin-Erde",
                  "Störer (傷官)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Yang-Metall",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Yin-Metall",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Yang-Wasser",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Yin-Wasser",
                  "Autorität (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stämme, die als Position des Ehepartners gelesen werden",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 丙 als Tagesstamm ist der Beständige Wohlstand 辛 und die Autorität 癸. Wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
          }
        ]
      },
      {
        "title": "Die Zweige, die 丙 enthalten",
        "blocks": [
          {
            "p": "Hier sitzt 丙 verborgen in den irdischen Zweigen (die verborgenen Stämme). Der Anteil ist der Teil der dreißig Tage des Zweigs, den 丙 einnimmt."
          },
          {
            "table": {
              "caption": "Die Zweige, die 丙 enthalten",
              "head": [
                "Zweig",
                "Tier",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "寅",
                  "Tiger",
                  "Mittelstamm (中氣)",
                  "{hidInJung}"
                ],
                [
                  "巳",
                  "Schlange",
                  "Hauptstamm (本氣)",
                  "{hidSaBon}"
                ],
                [
                  "午",
                  "Pferd",
                  "Reststamm (餘氣)",
                  "{hidOYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Stamm entscheidet nicht über einen Menschen. Ein Saju wird daraus gelesen, wie sich seine acht Zeichen zueinander verhalten.",
              "Die Zehn Götter sind ein Urteil, das vom Tagesstamm aus gefällt wird. Dieselben zwei Zeichen erhalten einen anderen Namen, je nachdem, welches von ihnen der Tagesstamm ist."
            ]
          },
          {
            "p": "Die vollständigen Zehn Götter finden Sie im [Leitfaden zu den Zehn Göttern](/guide/ten-gods), die Stärke der Elemente und das Monatszeichen im [Leitfaden zu den fünf Elementen](/guide/five-elements). Weitere Stämme: [Yang-Holz (甲)](/guide/stem-gap) · [Yin-Holz (乙)](/guide/stem-eul) · [Yin-Feuer (丁)](/guide/stem-jeong) · [Yang-Erde (戊)](/guide/stem-mu) · [Yin-Erde (己)](/guide/stem-gi) · [Yang-Metall (庚)](/guide/stem-gyeong) · [Yin-Metall (辛)](/guide/stem-sin) · [Yang-Wasser (壬)](/guide/stem-im) · [Yin-Wasser (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-jeong": {
    "eyebrow": "Himmlische Stämme",
    "title": "Yin-Feuer (丁) — Yin-Feuer",
    "summary": "Element und Polarität des himmlischen Stamms 丁, wie er die anderen neun Stämme liest (die Zehn Götter) und welche irdischen Zweige ihn enthalten — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Yin-Feuer (丁) ist der vierte der zehn himmlischen Stämme",
        "blocks": [
          {
            "p": "丁 ist der vierte der zehn himmlischen Stämme. Sein Element ist Feuer und seine Polarität ist Yin. Saju-Link nennt eine Person, deren Tagesstamm 丁 ist, „Yin-Feuer (丁)“."
          },
          {
            "p": "Die Zeile, die der Ergebnisbildschirm für diesen Tagesstamm zeigt, lautet: „Kerzenlicht. Es brennt leise und lange und wärmt zuerst die Nächsten.“ Diese Zeile hat nichts mit der Tabelle oder den Werten unten zu tun."
          }
        ]
      },
      {
        "title": "Wie er die anderen Stämme liest (die Zehn Götter)",
        "blocks": [
          {
            "p": "Mit 丁 als Tagesstamm werden die zehn Stämme wie folgt gelesen. Die Lesung hat eine Richtung: So liest 丁 den anderen Stamm, und wenn der andere Stamm 丁 liest, kann ein anderer Name herauskommen."
          },
          {
            "table": {
              "caption": "Zehn Götter mit Yin-Feuer (丁) als Tagesstamm",
              "head": [
                "Anderer Stamm",
                "Element und Polarität",
                "Zehn-Götter-Name"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Yang-Holz",
                  "Fürsorge (正印)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Yin-Holz",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Yang-Feuer",
                  "Rivale (劫財)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Yin-Feuer",
                  "Gefährte (比肩)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Yang-Erde",
                  "Störer (傷官)"
                ],
                [
                  "Yin-Erde (己)",
                  "Yin-Erde",
                  "Ausdruck (食神)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Yang-Metall",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Yin-Metall",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Yang-Wasser",
                  "Autorität (正官)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Yin-Wasser",
                  "Herausforderer (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stämme, die als Position des Ehepartners gelesen werden",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 丁 als Tagesstamm ist der Beständige Wohlstand 庚 und die Autorität 壬. Wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
          }
        ]
      },
      {
        "title": "Die Zweige, die 丁 enthalten",
        "blocks": [
          {
            "p": "Hier sitzt 丁 verborgen in den irdischen Zweigen (die verborgenen Stämme). Der Anteil ist der Teil der dreißig Tage des Zweigs, den 丁 einnimmt."
          },
          {
            "table": {
              "caption": "Die Zweige, die 丁 enthalten",
              "head": [
                "Zweig",
                "Tier",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "午",
                  "Pferd",
                  "Hauptstamm (本氣)",
                  "{hidOBon}"
                ],
                [
                  "未",
                  "Schaf",
                  "Reststamm (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "戌",
                  "Hund",
                  "Mittelstamm (中氣)",
                  "{hidSulJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Stamm entscheidet nicht über einen Menschen. Ein Saju wird daraus gelesen, wie sich seine acht Zeichen zueinander verhalten.",
              "Die Zehn Götter sind ein Urteil, das vom Tagesstamm aus gefällt wird. Dieselben zwei Zeichen erhalten einen anderen Namen, je nachdem, welches von ihnen der Tagesstamm ist."
            ]
          },
          {
            "p": "Die vollständigen Zehn Götter finden Sie im [Leitfaden zu den Zehn Göttern](/guide/ten-gods), die Stärke der Elemente und das Monatszeichen im [Leitfaden zu den fünf Elementen](/guide/five-elements). Weitere Stämme: [Yang-Holz (甲)](/guide/stem-gap) · [Yin-Holz (乙)](/guide/stem-eul) · [Yang-Feuer (丙)](/guide/stem-byeong) · [Yang-Erde (戊)](/guide/stem-mu) · [Yin-Erde (己)](/guide/stem-gi) · [Yang-Metall (庚)](/guide/stem-gyeong) · [Yin-Metall (辛)](/guide/stem-sin) · [Yang-Wasser (壬)](/guide/stem-im) · [Yin-Wasser (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-mu": {
    "eyebrow": "Himmlische Stämme",
    "title": "Yang-Erde (戊) — Yang-Erde",
    "summary": "Element und Polarität des himmlischen Stamms 戊, wie er die anderen neun Stämme liest (die Zehn Götter) und welche irdischen Zweige ihn enthalten — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Yang-Erde (戊) ist der fünfte der zehn himmlischen Stämme",
        "blocks": [
          {
            "p": "戊 ist der fünfte der zehn himmlischen Stämme. Sein Element ist Erde und seine Polarität ist Yang. Saju-Link nennt eine Person, deren Tagesstamm 戊 ist, „Yang-Erde (戊)“."
          },
          {
            "p": "Die Zeile, die der Ergebnisbildschirm für diesen Tagesstamm zeigt, lautet: „Weites Land und Berge. Schwer zu erschüttern und gut zum Anlehnen, doch eine getroffene Entscheidung ändert sich nur langsam.“ Diese Zeile hat nichts mit der Tabelle oder den Werten unten zu tun."
          }
        ]
      },
      {
        "title": "Wie er die anderen Stämme liest (die Zehn Götter)",
        "blocks": [
          {
            "p": "Mit 戊 als Tagesstamm werden die zehn Stämme wie folgt gelesen. Die Lesung hat eine Richtung: So liest 戊 den anderen Stamm, und wenn der andere Stamm 戊 liest, kann ein anderer Name herauskommen."
          },
          {
            "table": {
              "caption": "Zehn Götter mit Yang-Erde (戊) als Tagesstamm",
              "head": [
                "Anderer Stamm",
                "Element und Polarität",
                "Zehn-Götter-Name"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Yang-Holz",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Yin-Holz",
                  "Autorität (正官)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Yang-Feuer",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Yin-Feuer",
                  "Fürsorge (正印)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Yang-Erde",
                  "Gefährte (比肩)"
                ],
                [
                  "Yin-Erde (己)",
                  "Yin-Erde",
                  "Rivale (劫財)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Yang-Metall",
                  "Ausdruck (食神)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Yin-Metall",
                  "Störer (傷官)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Yang-Wasser",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Yin-Wasser",
                  "Beständiger Wohlstand (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stämme, die als Position des Ehepartners gelesen werden",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 戊 als Tagesstamm ist der Beständige Wohlstand 癸 und die Autorität 乙. Wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
          }
        ]
      },
      {
        "title": "Die Zweige, die 戊 enthalten",
        "blocks": [
          {
            "p": "Hier sitzt 戊 verborgen in den irdischen Zweigen (die verborgenen Stämme). Der Anteil ist der Teil der dreißig Tage des Zweigs, den 戊 einnimmt."
          },
          {
            "table": {
              "caption": "Die Zweige, die 戊 enthalten",
              "head": [
                "Zweig",
                "Tier",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "寅",
                  "Tiger",
                  "Reststamm (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "辰",
                  "Drache",
                  "Hauptstamm (本氣)",
                  "{hidJinBon}"
                ],
                [
                  "巳",
                  "Schlange",
                  "Reststamm (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "申",
                  "Affe",
                  "Reststamm (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "戌",
                  "Hund",
                  "Hauptstamm (本氣)",
                  "{hidSulBon}"
                ],
                [
                  "亥",
                  "Schwein",
                  "Reststamm (餘氣)",
                  "{hidHaeYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Stamm entscheidet nicht über einen Menschen. Ein Saju wird daraus gelesen, wie sich seine acht Zeichen zueinander verhalten.",
              "Die Zehn Götter sind ein Urteil, das vom Tagesstamm aus gefällt wird. Dieselben zwei Zeichen erhalten einen anderen Namen, je nachdem, welches von ihnen der Tagesstamm ist."
            ]
          },
          {
            "p": "Die vollständigen Zehn Götter finden Sie im [Leitfaden zu den Zehn Göttern](/guide/ten-gods), die Stärke der Elemente und das Monatszeichen im [Leitfaden zu den fünf Elementen](/guide/five-elements). Weitere Stämme: [Yang-Holz (甲)](/guide/stem-gap) · [Yin-Holz (乙)](/guide/stem-eul) · [Yang-Feuer (丙)](/guide/stem-byeong) · [Yin-Feuer (丁)](/guide/stem-jeong) · [Yin-Erde (己)](/guide/stem-gi) · [Yang-Metall (庚)](/guide/stem-gyeong) · [Yin-Metall (辛)](/guide/stem-sin) · [Yang-Wasser (壬)](/guide/stem-im) · [Yin-Wasser (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gi": {
    "eyebrow": "Himmlische Stämme",
    "title": "Yin-Erde (己) — Yin-Erde",
    "summary": "Element und Polarität des himmlischen Stamms 己, wie er die anderen neun Stämme liest (die Zehn Götter) und welche irdischen Zweige ihn enthalten — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Yin-Erde (己) ist der sechste der zehn himmlischen Stämme",
        "blocks": [
          {
            "p": "己 ist der sechste der zehn himmlischen Stämme. Sein Element ist Erde und seine Polarität ist Yin. Saju-Link nennt eine Person, deren Tagesstamm 己 ist, „Yin-Erde (己)“."
          },
          {
            "p": "Die Zeile, die der Ergebnisbildschirm für diesen Tagesstamm zeigt, lautet: „Ackerboden. Er nimmt auf, was kommt, und zieht es groß — er pflegt, statt sich zu zeigen.“ Diese Zeile hat nichts mit der Tabelle oder den Werten unten zu tun."
          }
        ]
      },
      {
        "title": "Wie er die anderen Stämme liest (die Zehn Götter)",
        "blocks": [
          {
            "p": "Mit 己 als Tagesstamm werden die zehn Stämme wie folgt gelesen. Die Lesung hat eine Richtung: So liest 己 den anderen Stamm, und wenn der andere Stamm 己 liest, kann ein anderer Name herauskommen."
          },
          {
            "table": {
              "caption": "Zehn Götter mit Yin-Erde (己) als Tagesstamm",
              "head": [
                "Anderer Stamm",
                "Element und Polarität",
                "Zehn-Götter-Name"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Yang-Holz",
                  "Autorität (正官)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Yin-Holz",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Yang-Feuer",
                  "Fürsorge (正印)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Yin-Feuer",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Yang-Erde",
                  "Rivale (劫財)"
                ],
                [
                  "Yin-Erde (己)",
                  "Yin-Erde",
                  "Gefährte (比肩)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Yang-Metall",
                  "Störer (傷官)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Yin-Metall",
                  "Ausdruck (食神)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Yang-Wasser",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Yin-Wasser",
                  "Unerwarteter Gewinn (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stämme, die als Position des Ehepartners gelesen werden",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 己 als Tagesstamm ist der Beständige Wohlstand 壬 und die Autorität 甲. Wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
          }
        ]
      },
      {
        "title": "Die Zweige, die 己 enthalten",
        "blocks": [
          {
            "p": "Hier sitzt 己 verborgen in den irdischen Zweigen (die verborgenen Stämme). Der Anteil ist der Teil der dreißig Tage des Zweigs, den 己 einnimmt."
          },
          {
            "table": {
              "caption": "Die Zweige, die 己 enthalten",
              "head": [
                "Zweig",
                "Tier",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "丑",
                  "Ochse",
                  "Hauptstamm (本氣)",
                  "{hidChukBon}"
                ],
                [
                  "午",
                  "Pferd",
                  "Mittelstamm (中氣)",
                  "{hidOJung}"
                ],
                [
                  "未",
                  "Schaf",
                  "Hauptstamm (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Stamm entscheidet nicht über einen Menschen. Ein Saju wird daraus gelesen, wie sich seine acht Zeichen zueinander verhalten.",
              "Die Zehn Götter sind ein Urteil, das vom Tagesstamm aus gefällt wird. Dieselben zwei Zeichen erhalten einen anderen Namen, je nachdem, welches von ihnen der Tagesstamm ist."
            ]
          },
          {
            "p": "Die vollständigen Zehn Götter finden Sie im [Leitfaden zu den Zehn Göttern](/guide/ten-gods), die Stärke der Elemente und das Monatszeichen im [Leitfaden zu den fünf Elementen](/guide/five-elements). Weitere Stämme: [Yang-Holz (甲)](/guide/stem-gap) · [Yin-Holz (乙)](/guide/stem-eul) · [Yang-Feuer (丙)](/guide/stem-byeong) · [Yin-Feuer (丁)](/guide/stem-jeong) · [Yang-Erde (戊)](/guide/stem-mu) · [Yang-Metall (庚)](/guide/stem-gyeong) · [Yin-Metall (辛)](/guide/stem-sin) · [Yang-Wasser (壬)](/guide/stem-im) · [Yin-Wasser (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gyeong": {
    "eyebrow": "Himmlische Stämme",
    "title": "Yang-Metall (庚) — Yang-Metall",
    "summary": "Element und Polarität des himmlischen Stamms 庚, wie er die anderen neun Stämme liest (die Zehn Götter) und welche irdischen Zweige ihn enthalten — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Yang-Metall (庚) ist der siebte der zehn himmlischen Stämme",
        "blocks": [
          {
            "p": "庚 ist der siebte der zehn himmlischen Stämme. Sein Element ist Metall und seine Polarität ist Yang. Saju-Link nennt eine Person, deren Tagesstamm 庚 ist, „Yang-Metall (庚)“."
          },
          {
            "p": "Die Zeile, die der Ergebnisbildschirm für diesen Tagesstamm zeigt, lautet: „Unbearbeitetes Eisen. Entschieden und klar, mit wenig Geduld für Dinge, die in der Schwebe bleiben.“ Diese Zeile hat nichts mit der Tabelle oder den Werten unten zu tun."
          }
        ]
      },
      {
        "title": "Wie er die anderen Stämme liest (die Zehn Götter)",
        "blocks": [
          {
            "p": "Mit 庚 als Tagesstamm werden die zehn Stämme wie folgt gelesen. Die Lesung hat eine Richtung: So liest 庚 den anderen Stamm, und wenn der andere Stamm 庚 liest, kann ein anderer Name herauskommen."
          },
          {
            "table": {
              "caption": "Zehn Götter mit Yang-Metall (庚) als Tagesstamm",
              "head": [
                "Anderer Stamm",
                "Element und Polarität",
                "Zehn-Götter-Name"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Yang-Holz",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Yin-Holz",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Yang-Feuer",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Yin-Feuer",
                  "Autorität (正官)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Yang-Erde",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yin-Erde (己)",
                  "Yin-Erde",
                  "Fürsorge (正印)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Yang-Metall",
                  "Gefährte (比肩)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Yin-Metall",
                  "Rivale (劫財)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Yang-Wasser",
                  "Ausdruck (食神)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Yin-Wasser",
                  "Störer (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stämme, die als Position des Ehepartners gelesen werden",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 庚 als Tagesstamm ist der Beständige Wohlstand 乙 und die Autorität 丁. Wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
          }
        ]
      },
      {
        "title": "Die Zweige, die 庚 enthalten",
        "blocks": [
          {
            "p": "Hier sitzt 庚 verborgen in den irdischen Zweigen (die verborgenen Stämme). Der Anteil ist der Teil der dreißig Tage des Zweigs, den 庚 einnimmt."
          },
          {
            "table": {
              "caption": "Die Zweige, die 庚 enthalten",
              "head": [
                "Zweig",
                "Tier",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "巳",
                  "Schlange",
                  "Mittelstamm (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "申",
                  "Affe",
                  "Hauptstamm (本氣)",
                  "{hidSinBon}"
                ],
                [
                  "酉",
                  "Hahn",
                  "Reststamm (餘氣)",
                  "{hidYuYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Stamm entscheidet nicht über einen Menschen. Ein Saju wird daraus gelesen, wie sich seine acht Zeichen zueinander verhalten.",
              "Die Zehn Götter sind ein Urteil, das vom Tagesstamm aus gefällt wird. Dieselben zwei Zeichen erhalten einen anderen Namen, je nachdem, welches von ihnen der Tagesstamm ist."
            ]
          },
          {
            "p": "Die vollständigen Zehn Götter finden Sie im [Leitfaden zu den Zehn Göttern](/guide/ten-gods), die Stärke der Elemente und das Monatszeichen im [Leitfaden zu den fünf Elementen](/guide/five-elements). Weitere Stämme: [Yang-Holz (甲)](/guide/stem-gap) · [Yin-Holz (乙)](/guide/stem-eul) · [Yang-Feuer (丙)](/guide/stem-byeong) · [Yin-Feuer (丁)](/guide/stem-jeong) · [Yang-Erde (戊)](/guide/stem-mu) · [Yin-Erde (己)](/guide/stem-gi) · [Yin-Metall (辛)](/guide/stem-sin) · [Yang-Wasser (壬)](/guide/stem-im) · [Yin-Wasser (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-sin": {
    "eyebrow": "Himmlische Stämme",
    "title": "Yin-Metall (辛) — Yin-Metall",
    "summary": "Element und Polarität des himmlischen Stamms 辛, wie er die anderen neun Stämme liest (die Zehn Götter) und welche irdischen Zweige ihn enthalten — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Yin-Metall (辛) ist der achte der zehn himmlischen Stämme",
        "blocks": [
          {
            "p": "辛 ist der achte der zehn himmlischen Stämme. Sein Element ist Metall und seine Polarität ist Yin. Saju-Link nennt eine Person, deren Tagesstamm 辛 ist, „Yin-Metall (辛)“."
          },
          {
            "p": "Die Zeile, die der Ergebnisbildschirm für diesen Tagesstamm zeigt, lautet: „Ein geschliffener Edelstein. Feiner Geschmack und hohe Maßstäbe; Nachlässigkeit lässt sich schwer durchgehen lassen.“ Diese Zeile hat nichts mit der Tabelle oder den Werten unten zu tun."
          }
        ]
      },
      {
        "title": "Wie er die anderen Stämme liest (die Zehn Götter)",
        "blocks": [
          {
            "p": "Mit 辛 als Tagesstamm werden die zehn Stämme wie folgt gelesen. Die Lesung hat eine Richtung: So liest 辛 den anderen Stamm, und wenn der andere Stamm 辛 liest, kann ein anderer Name herauskommen."
          },
          {
            "table": {
              "caption": "Zehn Götter mit Yin-Metall (辛) als Tagesstamm",
              "head": [
                "Anderer Stamm",
                "Element und Polarität",
                "Zehn-Götter-Name"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Yang-Holz",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Yin-Holz",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Yang-Feuer",
                  "Autorität (正官)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Yin-Feuer",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Yang-Erde",
                  "Fürsorge (正印)"
                ],
                [
                  "Yin-Erde (己)",
                  "Yin-Erde",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Yang-Metall",
                  "Rivale (劫財)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Yin-Metall",
                  "Gefährte (比肩)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Yang-Wasser",
                  "Störer (傷官)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Yin-Wasser",
                  "Ausdruck (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stämme, die als Position des Ehepartners gelesen werden",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 辛 als Tagesstamm ist der Beständige Wohlstand 甲 und die Autorität 丙. Wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
          }
        ]
      },
      {
        "title": "Die Zweige, die 辛 enthalten",
        "blocks": [
          {
            "p": "Hier sitzt 辛 verborgen in den irdischen Zweigen (die verborgenen Stämme). Der Anteil ist der Teil der dreißig Tage des Zweigs, den 辛 einnimmt."
          },
          {
            "table": {
              "caption": "Die Zweige, die 辛 enthalten",
              "head": [
                "Zweig",
                "Tier",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "丑",
                  "Ochse",
                  "Mittelstamm (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "酉",
                  "Hahn",
                  "Hauptstamm (本氣)",
                  "{hidYuBon}"
                ],
                [
                  "戌",
                  "Hund",
                  "Reststamm (餘氣)",
                  "{hidSulYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Stamm entscheidet nicht über einen Menschen. Ein Saju wird daraus gelesen, wie sich seine acht Zeichen zueinander verhalten.",
              "Die Zehn Götter sind ein Urteil, das vom Tagesstamm aus gefällt wird. Dieselben zwei Zeichen erhalten einen anderen Namen, je nachdem, welches von ihnen der Tagesstamm ist."
            ]
          },
          {
            "p": "Die vollständigen Zehn Götter finden Sie im [Leitfaden zu den Zehn Göttern](/guide/ten-gods), die Stärke der Elemente und das Monatszeichen im [Leitfaden zu den fünf Elementen](/guide/five-elements). Weitere Stämme: [Yang-Holz (甲)](/guide/stem-gap) · [Yin-Holz (乙)](/guide/stem-eul) · [Yang-Feuer (丙)](/guide/stem-byeong) · [Yin-Feuer (丁)](/guide/stem-jeong) · [Yang-Erde (戊)](/guide/stem-mu) · [Yin-Erde (己)](/guide/stem-gi) · [Yang-Metall (庚)](/guide/stem-gyeong) · [Yang-Wasser (壬)](/guide/stem-im) · [Yin-Wasser (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-im": {
    "eyebrow": "Himmlische Stämme",
    "title": "Yang-Wasser (壬) — Yang-Wasser",
    "summary": "Element und Polarität des himmlischen Stamms 壬, wie er die anderen neun Stämme liest (die Zehn Götter) und welche irdischen Zweige ihn enthalten — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Yang-Wasser (壬) ist der neunte der zehn himmlischen Stämme",
        "blocks": [
          {
            "p": "壬 ist der neunte der zehn himmlischen Stämme. Sein Element ist Wasser und seine Polarität ist Yang. Saju-Link nennt eine Person, deren Tagesstamm 壬 ist, „Yang-Wasser (壬)“."
          },
          {
            "p": "Die Zeile, die der Ergebnisbildschirm für diesen Tagesstamm zeigt, lautet: „Fluss und Meer. Weiter Blick, mit einem Auge dafür, wohin die Dinge laufen.“ Diese Zeile hat nichts mit der Tabelle oder den Werten unten zu tun."
          }
        ]
      },
      {
        "title": "Wie er die anderen Stämme liest (die Zehn Götter)",
        "blocks": [
          {
            "p": "Mit 壬 als Tagesstamm werden die zehn Stämme wie folgt gelesen. Die Lesung hat eine Richtung: So liest 壬 den anderen Stamm, und wenn der andere Stamm 壬 liest, kann ein anderer Name herauskommen."
          },
          {
            "table": {
              "caption": "Zehn Götter mit Yang-Wasser (壬) als Tagesstamm",
              "head": [
                "Anderer Stamm",
                "Element und Polarität",
                "Zehn-Götter-Name"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Yang-Holz",
                  "Ausdruck (食神)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Yin-Holz",
                  "Störer (傷官)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Yang-Feuer",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Yin-Feuer",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Yang-Erde",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yin-Erde (己)",
                  "Yin-Erde",
                  "Autorität (正官)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Yang-Metall",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Yin-Metall",
                  "Fürsorge (正印)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Yang-Wasser",
                  "Gefährte (比肩)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Yin-Wasser",
                  "Rivale (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stämme, die als Position des Ehepartners gelesen werden",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 壬 als Tagesstamm ist der Beständige Wohlstand 丁 und die Autorität 己. Wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
          }
        ]
      },
      {
        "title": "Die Zweige, die 壬 enthalten",
        "blocks": [
          {
            "p": "Hier sitzt 壬 verborgen in den irdischen Zweigen (die verborgenen Stämme). Der Anteil ist der Teil der dreißig Tage des Zweigs, den 壬 einnimmt."
          },
          {
            "table": {
              "caption": "Die Zweige, die 壬 enthalten",
              "head": [
                "Zweig",
                "Tier",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "子",
                  "Ratte",
                  "Reststamm (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "申",
                  "Affe",
                  "Mittelstamm (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "亥",
                  "Schwein",
                  "Hauptstamm (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Stamm entscheidet nicht über einen Menschen. Ein Saju wird daraus gelesen, wie sich seine acht Zeichen zueinander verhalten.",
              "Die Zehn Götter sind ein Urteil, das vom Tagesstamm aus gefällt wird. Dieselben zwei Zeichen erhalten einen anderen Namen, je nachdem, welches von ihnen der Tagesstamm ist."
            ]
          },
          {
            "p": "Die vollständigen Zehn Götter finden Sie im [Leitfaden zu den Zehn Göttern](/guide/ten-gods), die Stärke der Elemente und das Monatszeichen im [Leitfaden zu den fünf Elementen](/guide/five-elements). Weitere Stämme: [Yang-Holz (甲)](/guide/stem-gap) · [Yin-Holz (乙)](/guide/stem-eul) · [Yang-Feuer (丙)](/guide/stem-byeong) · [Yin-Feuer (丁)](/guide/stem-jeong) · [Yang-Erde (戊)](/guide/stem-mu) · [Yin-Erde (己)](/guide/stem-gi) · [Yang-Metall (庚)](/guide/stem-gyeong) · [Yin-Metall (辛)](/guide/stem-sin) · [Yin-Wasser (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gye": {
    "eyebrow": "Himmlische Stämme",
    "title": "Yin-Wasser (癸) — Yin-Wasser",
    "summary": "Element und Polarität des himmlischen Stamms 癸, wie er die anderen neun Stämme liest (die Zehn Götter) und welche irdischen Zweige ihn enthalten — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Yin-Wasser (癸) ist der zehnte der zehn himmlischen Stämme",
        "blocks": [
          {
            "p": "癸 ist der zehnte der zehn himmlischen Stämme. Sein Element ist Wasser und seine Polarität ist Yin. Saju-Link nennt eine Person, deren Tagesstamm 癸 ist, „Yin-Wasser (癸)“."
          },
          {
            "p": "Die Zeile, die der Ergebnisbildschirm für diesen Tagesstamm zeigt, lautet: „Tau und Regen. Es sickert leise ein und liest die Stimmung, bevor Worte fallen.“ Diese Zeile hat nichts mit der Tabelle oder den Werten unten zu tun."
          }
        ]
      },
      {
        "title": "Wie er die anderen Stämme liest (die Zehn Götter)",
        "blocks": [
          {
            "p": "Mit 癸 als Tagesstamm werden die zehn Stämme wie folgt gelesen. Die Lesung hat eine Richtung: So liest 癸 den anderen Stamm, und wenn der andere Stamm 癸 liest, kann ein anderer Name herauskommen."
          },
          {
            "table": {
              "caption": "Zehn Götter mit Yin-Wasser (癸) als Tagesstamm",
              "head": [
                "Anderer Stamm",
                "Element und Polarität",
                "Zehn-Götter-Name"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Yang-Holz",
                  "Störer (傷官)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Yin-Holz",
                  "Ausdruck (食神)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Yang-Feuer",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Yin-Feuer",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Yang-Erde",
                  "Autorität (正官)"
                ],
                [
                  "Yin-Erde (己)",
                  "Yin-Erde",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Yang-Metall",
                  "Fürsorge (正印)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Yin-Metall",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Yang-Wasser",
                  "Rivale (劫財)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Yin-Wasser",
                  "Gefährte (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stämme, die als Position des Ehepartners gelesen werden",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 癸 als Tagesstamm ist der Beständige Wohlstand 丙 und die Autorität 戊. Wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
          }
        ]
      },
      {
        "title": "Die Zweige, die 癸 enthalten",
        "blocks": [
          {
            "p": "Hier sitzt 癸 verborgen in den irdischen Zweigen (die verborgenen Stämme). Der Anteil ist der Teil der dreißig Tage des Zweigs, den 癸 einnimmt."
          },
          {
            "table": {
              "caption": "Die Zweige, die 癸 enthalten",
              "head": [
                "Zweig",
                "Tier",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "子",
                  "Ratte",
                  "Hauptstamm (本氣)",
                  "{hidJaBon}"
                ],
                [
                  "丑",
                  "Ochse",
                  "Reststamm (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "辰",
                  "Drache",
                  "Mittelstamm (中氣)",
                  "{hidJinJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Stamm entscheidet nicht über einen Menschen. Ein Saju wird daraus gelesen, wie sich seine acht Zeichen zueinander verhalten.",
              "Die Zehn Götter sind ein Urteil, das vom Tagesstamm aus gefällt wird. Dieselben zwei Zeichen erhalten einen anderen Namen, je nachdem, welches von ihnen der Tagesstamm ist."
            ]
          },
          {
            "p": "Die vollständigen Zehn Götter finden Sie im [Leitfaden zu den Zehn Göttern](/guide/ten-gods), die Stärke der Elemente und das Monatszeichen im [Leitfaden zu den fünf Elementen](/guide/five-elements). Weitere Stämme: [Yang-Holz (甲)](/guide/stem-gap) · [Yin-Holz (乙)](/guide/stem-eul) · [Yang-Feuer (丙)](/guide/stem-byeong) · [Yin-Feuer (丁)](/guide/stem-jeong) · [Yang-Erde (戊)](/guide/stem-mu) · [Yin-Erde (己)](/guide/stem-gi) · [Yang-Metall (庚)](/guide/stem-gyeong) · [Yin-Metall (辛)](/guide/stem-sin) · [Yang-Wasser (壬)](/guide/stem-im)"
          }
        ]
      }
    ]
  },

  "guide/branch-ja": {
    "eyebrow": "Irdische Zweige",
    "title": "子 — der Zweig der Ratte",
    "summary": "Die Stämme, die der irdische Zweig 子 enthält (die verborgenen Stämme), die Stärke der fünf Elemente, wenn er der Monatszweig ist, und die für jeden Tagesstamm gelesenen Zehn Götter — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "子 ist der erste der zwölf irdischen Zweige",
        "blocks": [
          {
            "p": "子 ist der erste der zwölf irdischen Zweige und gehört zur Ratte. Ist der Zweig des Geburtsmonats 子, dann ist die Jahreszeit der Winter und das Element, das die Jahreszeit beherrscht, ist Wasser."
          },
          {
            "p": "Wenn der Zweig des Geburtstags 子 ist, ist dieses Zeichen die Position des Ehepartners. Unten sehen Sie, welche Stämme dieser Zweig enthält und was sie für den Tagesstamm sind."
          }
        ]
      },
      {
        "title": "Die Stämme, die dieser Zweig enthält (verborgene Stämme)",
        "blocks": [
          {
            "p": "Ein Zweig ist ein sichtbares Zeichen, enthält aber Stämme in sich. Der Anteil gibt an, wie die dreißig Tage des Zweigs auf die Stämme verteilt sind, und der Hauptstamm ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme von 子",
              "head": [
                "Stamm",
                "Element und Polarität",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "Yang-Wasser (壬)",
                  "Yang-Wasser",
                  "Reststamm (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Yin-Wasser",
                  "Hauptstamm (本氣)",
                  "{hidJaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stärke der fünf Elemente, wenn der Monatszweig 子 ist",
        "blocks": [
          {
            "p": "Wenn der Zweig des Geburtsmonats 子 ist, erhält jedes Element einen Zustand (Wang, Sang, Hyu, Su, Sa), und dieser Zustand wird zum Multiplikator, der auf seine Stärke angewendet wird."
          },
          {
            "table": {
              "caption": "Die Elementzustände für den Monatszweig 子 (Winter)",
              "head": [
                "Element",
                "Zustand",
                "Multiplikator"
              ],
              "rows": [
                [
                  "Holz",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Feuer",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Erde",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Metall",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Wasser",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Zehn Götter nach Tagesstamm",
        "blocks": [
          {
            "p": "Dieselben verborgenen Stämme von 子 werden je nach Tagesstamm zu verschiedenen Zehn Göttern. Ist 子 der Tageszweig, ist diese Tabelle die Lesung der Position des Ehepartners."
          },
          {
            "table": {
              "caption": "Was die verborgenen Stämme von 子 für den jeweiligen Tagesstamm sind",
              "head": [
                "Tagesstamm",
                "Yang-Wasser (壬) — Reststamm (餘氣)",
                "Yin-Wasser (癸) — Hauptstamm (本氣)"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Ungewöhnliche Stütze (偏印)",
                  "Fürsorge (正印)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Fürsorge (正印)",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Herausforderer (偏官)",
                  "Autorität (正官)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Autorität (正官)",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Unerwarteter Gewinn (偏財)",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yin-Erde (己)",
                  "Beständiger Wohlstand (正財)",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Ausdruck (食神)",
                  "Störer (傷官)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Störer (傷官)",
                  "Ausdruck (食神)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Gefährte (比肩)",
                  "Rivale (劫財)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Rivale (劫財)",
                  "Gefährte (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Zweig entscheidet nicht über einen Menschen. Derselbe Zweig wird je nach Tagesstamm und Monatszweig anders gelesen.",
              "Beziehungen zwischen Zweigen wie Harmonie, Konflikt und Zwietracht werden hier nicht behandelt."
            ]
          },
          {
            "p": "Die Beziehungen zwischen den Zweigen stehen in [der Tafel der zwölf Zweige](/guide/branches), und seine Bedeutung als Tierkreiszeichen steht in [wo das Tierkreiszeichen im Saju steht](/guide/zodiac). Weitere Zweige: [丑 (Ochse)](/guide/branch-chuk) · [寅 (Tiger)](/guide/branch-in) · [卯 (Hase)](/guide/branch-myo) · [辰 (Drache)](/guide/branch-jin) · [巳 (Schlange)](/guide/branch-sa) · [午 (Pferd)](/guide/branch-o) · [未 (Schaf)](/guide/branch-mi) · [申 (Affe)](/guide/branch-sin) · [酉 (Hahn)](/guide/branch-yu) · [戌 (Hund)](/guide/branch-sul) · [亥 (Schwein)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-chuk": {
    "eyebrow": "Irdische Zweige",
    "title": "丑 — der Zweig des Ochsen",
    "summary": "Die Stämme, die der irdische Zweig 丑 enthält (die verborgenen Stämme), die Stärke der fünf Elemente, wenn er der Monatszweig ist, und die für jeden Tagesstamm gelesenen Zehn Götter — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "丑 ist der zweite der zwölf irdischen Zweige",
        "blocks": [
          {
            "p": "丑 ist der zweite der zwölf irdischen Zweige und gehört zum Ochsen. Ist der Zweig des Geburtsmonats 丑, dann ist die Jahreszeit der Winter und das Element, das die Jahreszeit beherrscht, ist Wasser. Es ist ein Übergangsmonat (辰未戌丑), daher gilt auch die Erde als im Zustand Wang."
          },
          {
            "p": "Wenn der Zweig des Geburtstags 丑 ist, ist dieses Zeichen die Position des Ehepartners. Unten sehen Sie, welche Stämme dieser Zweig enthält und was sie für den Tagesstamm sind."
          }
        ]
      },
      {
        "title": "Die Stämme, die dieser Zweig enthält (verborgene Stämme)",
        "blocks": [
          {
            "p": "Ein Zweig ist ein sichtbares Zeichen, enthält aber Stämme in sich. Der Anteil gibt an, wie die dreißig Tage des Zweigs auf die Stämme verteilt sind, und der Hauptstamm ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme von 丑",
              "head": [
                "Stamm",
                "Element und Polarität",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "Yin-Wasser (癸)",
                  "Yin-Wasser",
                  "Reststamm (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "Yin-Metall (辛)",
                  "Yin-Metall",
                  "Mittelstamm (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "Yin-Erde (己)",
                  "Yin-Erde",
                  "Hauptstamm (本氣)",
                  "{hidChukBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stärke der fünf Elemente, wenn der Monatszweig 丑 ist",
        "blocks": [
          {
            "p": "Wenn der Zweig des Geburtsmonats 丑 ist, erhält jedes Element einen Zustand (Wang, Sang, Hyu, Su, Sa), und dieser Zustand wird zum Multiplikator, der auf seine Stärke angewendet wird."
          },
          {
            "table": {
              "caption": "Die Elementzustände für den Monatszweig 丑 (Winter (Übergangsmonat))",
              "head": [
                "Element",
                "Zustand",
                "Multiplikator"
              ],
              "rows": [
                [
                  "Holz",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Feuer",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Erde",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metall",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Wasser",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Zehn Götter nach Tagesstamm",
        "blocks": [
          {
            "p": "Dieselben verborgenen Stämme von 丑 werden je nach Tagesstamm zu verschiedenen Zehn Göttern. Ist 丑 der Tageszweig, ist diese Tabelle die Lesung der Position des Ehepartners."
          },
          {
            "table": {
              "caption": "Was die verborgenen Stämme von 丑 für den jeweiligen Tagesstamm sind",
              "head": [
                "Tagesstamm",
                "Yin-Wasser (癸) — Reststamm (餘氣)",
                "Yin-Metall (辛) — Mittelstamm (中氣)",
                "Yin-Erde (己) — Hauptstamm (本氣)"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Fürsorge (正印)",
                  "Autorität (正官)",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Ungewöhnliche Stütze (偏印)",
                  "Herausforderer (偏官)",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Autorität (正官)",
                  "Beständiger Wohlstand (正財)",
                  "Störer (傷官)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Herausforderer (偏官)",
                  "Unerwarteter Gewinn (偏財)",
                  "Ausdruck (食神)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Beständiger Wohlstand (正財)",
                  "Störer (傷官)",
                  "Rivale (劫財)"
                ],
                [
                  "Yin-Erde (己)",
                  "Unerwarteter Gewinn (偏財)",
                  "Ausdruck (食神)",
                  "Gefährte (比肩)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Störer (傷官)",
                  "Rivale (劫財)",
                  "Fürsorge (正印)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Ausdruck (食神)",
                  "Gefährte (比肩)",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Rivale (劫財)",
                  "Fürsorge (正印)",
                  "Autorität (正官)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Gefährte (比肩)",
                  "Ungewöhnliche Stütze (偏印)",
                  "Herausforderer (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Zweig entscheidet nicht über einen Menschen. Derselbe Zweig wird je nach Tagesstamm und Monatszweig anders gelesen.",
              "Beziehungen zwischen Zweigen wie Harmonie, Konflikt und Zwietracht werden hier nicht behandelt."
            ]
          },
          {
            "p": "Die Beziehungen zwischen den Zweigen stehen in [der Tafel der zwölf Zweige](/guide/branches), und seine Bedeutung als Tierkreiszeichen steht in [wo das Tierkreiszeichen im Saju steht](/guide/zodiac). Weitere Zweige: [子 (Ratte)](/guide/branch-ja) · [寅 (Tiger)](/guide/branch-in) · [卯 (Hase)](/guide/branch-myo) · [辰 (Drache)](/guide/branch-jin) · [巳 (Schlange)](/guide/branch-sa) · [午 (Pferd)](/guide/branch-o) · [未 (Schaf)](/guide/branch-mi) · [申 (Affe)](/guide/branch-sin) · [酉 (Hahn)](/guide/branch-yu) · [戌 (Hund)](/guide/branch-sul) · [亥 (Schwein)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-in": {
    "eyebrow": "Irdische Zweige",
    "title": "寅 — der Zweig des Tigers",
    "summary": "Die Stämme, die der irdische Zweig 寅 enthält (die verborgenen Stämme), die Stärke der fünf Elemente, wenn er der Monatszweig ist, und die für jeden Tagesstamm gelesenen Zehn Götter — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "寅 ist der dritte der zwölf irdischen Zweige",
        "blocks": [
          {
            "p": "寅 ist der dritte der zwölf irdischen Zweige und gehört zum Tiger. Ist der Zweig des Geburtsmonats 寅, dann ist die Jahreszeit der Frühling und das Element, das die Jahreszeit beherrscht, ist Holz."
          },
          {
            "p": "Wenn der Zweig des Geburtstags 寅 ist, ist dieses Zeichen die Position des Ehepartners. Unten sehen Sie, welche Stämme dieser Zweig enthält und was sie für den Tagesstamm sind."
          }
        ]
      },
      {
        "title": "Die Stämme, die dieser Zweig enthält (verborgene Stämme)",
        "blocks": [
          {
            "p": "Ein Zweig ist ein sichtbares Zeichen, enthält aber Stämme in sich. Der Anteil gibt an, wie die dreißig Tage des Zweigs auf die Stämme verteilt sind, und der Hauptstamm ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme von 寅",
              "head": [
                "Stamm",
                "Element und Polarität",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Yang-Erde",
                  "Reststamm (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Yang-Feuer",
                  "Mittelstamm (中氣)",
                  "{hidInJung}"
                ],
                [
                  "Yang-Holz (甲)",
                  "Yang-Holz",
                  "Hauptstamm (本氣)",
                  "{hidInBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stärke der fünf Elemente, wenn der Monatszweig 寅 ist",
        "blocks": [
          {
            "p": "Wenn der Zweig des Geburtsmonats 寅 ist, erhält jedes Element einen Zustand (Wang, Sang, Hyu, Su, Sa), und dieser Zustand wird zum Multiplikator, der auf seine Stärke angewendet wird."
          },
          {
            "table": {
              "caption": "Die Elementzustände für den Monatszweig 寅 (Frühling)",
              "head": [
                "Element",
                "Zustand",
                "Multiplikator"
              ],
              "rows": [
                [
                  "Holz",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Feuer",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Erde",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Metall",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Wasser",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Zehn Götter nach Tagesstamm",
        "blocks": [
          {
            "p": "Dieselben verborgenen Stämme von 寅 werden je nach Tagesstamm zu verschiedenen Zehn Göttern. Ist 寅 der Tageszweig, ist diese Tabelle die Lesung der Position des Ehepartners."
          },
          {
            "table": {
              "caption": "Was die verborgenen Stämme von 寅 für den jeweiligen Tagesstamm sind",
              "head": [
                "Tagesstamm",
                "Yang-Erde (戊) — Reststamm (餘氣)",
                "Yang-Feuer (丙) — Mittelstamm (中氣)",
                "Yang-Holz (甲) — Hauptstamm (本氣)"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Unerwarteter Gewinn (偏財)",
                  "Ausdruck (食神)",
                  "Gefährte (比肩)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Beständiger Wohlstand (正財)",
                  "Störer (傷官)",
                  "Rivale (劫財)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Ausdruck (食神)",
                  "Gefährte (比肩)",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Störer (傷官)",
                  "Rivale (劫財)",
                  "Fürsorge (正印)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Gefährte (比肩)",
                  "Ungewöhnliche Stütze (偏印)",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yin-Erde (己)",
                  "Rivale (劫財)",
                  "Fürsorge (正印)",
                  "Autorität (正官)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Ungewöhnliche Stütze (偏印)",
                  "Herausforderer (偏官)",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Fürsorge (正印)",
                  "Autorität (正官)",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Herausforderer (偏官)",
                  "Unerwarteter Gewinn (偏財)",
                  "Ausdruck (食神)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Autorität (正官)",
                  "Beständiger Wohlstand (正財)",
                  "Störer (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Zweig entscheidet nicht über einen Menschen. Derselbe Zweig wird je nach Tagesstamm und Monatszweig anders gelesen.",
              "Beziehungen zwischen Zweigen wie Harmonie, Konflikt und Zwietracht werden hier nicht behandelt."
            ]
          },
          {
            "p": "Die Beziehungen zwischen den Zweigen stehen in [der Tafel der zwölf Zweige](/guide/branches), und seine Bedeutung als Tierkreiszeichen steht in [wo das Tierkreiszeichen im Saju steht](/guide/zodiac). Weitere Zweige: [子 (Ratte)](/guide/branch-ja) · [丑 (Ochse)](/guide/branch-chuk) · [卯 (Hase)](/guide/branch-myo) · [辰 (Drache)](/guide/branch-jin) · [巳 (Schlange)](/guide/branch-sa) · [午 (Pferd)](/guide/branch-o) · [未 (Schaf)](/guide/branch-mi) · [申 (Affe)](/guide/branch-sin) · [酉 (Hahn)](/guide/branch-yu) · [戌 (Hund)](/guide/branch-sul) · [亥 (Schwein)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-myo": {
    "eyebrow": "Irdische Zweige",
    "title": "卯 — der Zweig des Hasen",
    "summary": "Die Stämme, die der irdische Zweig 卯 enthält (die verborgenen Stämme), die Stärke der fünf Elemente, wenn er der Monatszweig ist, und die für jeden Tagesstamm gelesenen Zehn Götter — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "卯 ist der vierte der zwölf irdischen Zweige",
        "blocks": [
          {
            "p": "卯 ist der vierte der zwölf irdischen Zweige und gehört zum Hasen. Ist der Zweig des Geburtsmonats 卯, dann ist die Jahreszeit der Frühling und das Element, das die Jahreszeit beherrscht, ist Holz."
          },
          {
            "p": "Wenn der Zweig des Geburtstags 卯 ist, ist dieses Zeichen die Position des Ehepartners. Unten sehen Sie, welche Stämme dieser Zweig enthält und was sie für den Tagesstamm sind."
          }
        ]
      },
      {
        "title": "Die Stämme, die dieser Zweig enthält (verborgene Stämme)",
        "blocks": [
          {
            "p": "Ein Zweig ist ein sichtbares Zeichen, enthält aber Stämme in sich. Der Anteil gibt an, wie die dreißig Tage des Zweigs auf die Stämme verteilt sind, und der Hauptstamm ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme von 卯",
              "head": [
                "Stamm",
                "Element und Polarität",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Yang-Holz",
                  "Reststamm (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "Yin-Holz (乙)",
                  "Yin-Holz",
                  "Hauptstamm (本氣)",
                  "{hidMyoBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stärke der fünf Elemente, wenn der Monatszweig 卯 ist",
        "blocks": [
          {
            "p": "Wenn der Zweig des Geburtsmonats 卯 ist, erhält jedes Element einen Zustand (Wang, Sang, Hyu, Su, Sa), und dieser Zustand wird zum Multiplikator, der auf seine Stärke angewendet wird."
          },
          {
            "table": {
              "caption": "Die Elementzustände für den Monatszweig 卯 (Frühling)",
              "head": [
                "Element",
                "Zustand",
                "Multiplikator"
              ],
              "rows": [
                [
                  "Holz",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Feuer",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Erde",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Metall",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Wasser",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Zehn Götter nach Tagesstamm",
        "blocks": [
          {
            "p": "Dieselben verborgenen Stämme von 卯 werden je nach Tagesstamm zu verschiedenen Zehn Göttern. Ist 卯 der Tageszweig, ist diese Tabelle die Lesung der Position des Ehepartners."
          },
          {
            "table": {
              "caption": "Was die verborgenen Stämme von 卯 für den jeweiligen Tagesstamm sind",
              "head": [
                "Tagesstamm",
                "Yang-Holz (甲) — Reststamm (餘氣)",
                "Yin-Holz (乙) — Hauptstamm (本氣)"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Gefährte (比肩)",
                  "Rivale (劫財)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Rivale (劫財)",
                  "Gefährte (比肩)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Ungewöhnliche Stütze (偏印)",
                  "Fürsorge (正印)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Fürsorge (正印)",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Herausforderer (偏官)",
                  "Autorität (正官)"
                ],
                [
                  "Yin-Erde (己)",
                  "Autorität (正官)",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Unerwarteter Gewinn (偏財)",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Beständiger Wohlstand (正財)",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Ausdruck (食神)",
                  "Störer (傷官)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Störer (傷官)",
                  "Ausdruck (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Zweig entscheidet nicht über einen Menschen. Derselbe Zweig wird je nach Tagesstamm und Monatszweig anders gelesen.",
              "Beziehungen zwischen Zweigen wie Harmonie, Konflikt und Zwietracht werden hier nicht behandelt."
            ]
          },
          {
            "p": "Die Beziehungen zwischen den Zweigen stehen in [der Tafel der zwölf Zweige](/guide/branches), und seine Bedeutung als Tierkreiszeichen steht in [wo das Tierkreiszeichen im Saju steht](/guide/zodiac). Weitere Zweige: [子 (Ratte)](/guide/branch-ja) · [丑 (Ochse)](/guide/branch-chuk) · [寅 (Tiger)](/guide/branch-in) · [辰 (Drache)](/guide/branch-jin) · [巳 (Schlange)](/guide/branch-sa) · [午 (Pferd)](/guide/branch-o) · [未 (Schaf)](/guide/branch-mi) · [申 (Affe)](/guide/branch-sin) · [酉 (Hahn)](/guide/branch-yu) · [戌 (Hund)](/guide/branch-sul) · [亥 (Schwein)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-jin": {
    "eyebrow": "Irdische Zweige",
    "title": "辰 — der Zweig des Drachen",
    "summary": "Die Stämme, die der irdische Zweig 辰 enthält (die verborgenen Stämme), die Stärke der fünf Elemente, wenn er der Monatszweig ist, und die für jeden Tagesstamm gelesenen Zehn Götter — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "辰 ist der fünfte der zwölf irdischen Zweige",
        "blocks": [
          {
            "p": "辰 ist der fünfte der zwölf irdischen Zweige und gehört zum Drachen. Ist der Zweig des Geburtsmonats 辰, dann ist die Jahreszeit der Frühling und das Element, das die Jahreszeit beherrscht, ist Holz. Es ist ein Übergangsmonat (辰未戌丑), daher gilt auch die Erde als im Zustand Wang."
          },
          {
            "p": "Wenn der Zweig des Geburtstags 辰 ist, ist dieses Zeichen die Position des Ehepartners. Unten sehen Sie, welche Stämme dieser Zweig enthält und was sie für den Tagesstamm sind."
          }
        ]
      },
      {
        "title": "Die Stämme, die dieser Zweig enthält (verborgene Stämme)",
        "blocks": [
          {
            "p": "Ein Zweig ist ein sichtbares Zeichen, enthält aber Stämme in sich. Der Anteil gibt an, wie die dreißig Tage des Zweigs auf die Stämme verteilt sind, und der Hauptstamm ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme von 辰",
              "head": [
                "Stamm",
                "Element und Polarität",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "Yin-Holz (乙)",
                  "Yin-Holz",
                  "Reststamm (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Yin-Wasser",
                  "Mittelstamm (中氣)",
                  "{hidJinJung}"
                ],
                [
                  "Yang-Erde (戊)",
                  "Yang-Erde",
                  "Hauptstamm (本氣)",
                  "{hidJinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stärke der fünf Elemente, wenn der Monatszweig 辰 ist",
        "blocks": [
          {
            "p": "Wenn der Zweig des Geburtsmonats 辰 ist, erhält jedes Element einen Zustand (Wang, Sang, Hyu, Su, Sa), und dieser Zustand wird zum Multiplikator, der auf seine Stärke angewendet wird."
          },
          {
            "table": {
              "caption": "Die Elementzustände für den Monatszweig 辰 (Frühling (Übergangsmonat))",
              "head": [
                "Element",
                "Zustand",
                "Multiplikator"
              ],
              "rows": [
                [
                  "Holz",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Feuer",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Erde",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metall",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Wasser",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Zehn Götter nach Tagesstamm",
        "blocks": [
          {
            "p": "Dieselben verborgenen Stämme von 辰 werden je nach Tagesstamm zu verschiedenen Zehn Göttern. Ist 辰 der Tageszweig, ist diese Tabelle die Lesung der Position des Ehepartners."
          },
          {
            "table": {
              "caption": "Was die verborgenen Stämme von 辰 für den jeweiligen Tagesstamm sind",
              "head": [
                "Tagesstamm",
                "Yin-Holz (乙) — Reststamm (餘氣)",
                "Yin-Wasser (癸) — Mittelstamm (中氣)",
                "Yang-Erde (戊) — Hauptstamm (本氣)"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Rivale (劫財)",
                  "Fürsorge (正印)",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Gefährte (比肩)",
                  "Ungewöhnliche Stütze (偏印)",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Fürsorge (正印)",
                  "Autorität (正官)",
                  "Ausdruck (食神)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Ungewöhnliche Stütze (偏印)",
                  "Herausforderer (偏官)",
                  "Störer (傷官)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Autorität (正官)",
                  "Beständiger Wohlstand (正財)",
                  "Gefährte (比肩)"
                ],
                [
                  "Yin-Erde (己)",
                  "Herausforderer (偏官)",
                  "Unerwarteter Gewinn (偏財)",
                  "Rivale (劫財)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Beständiger Wohlstand (正財)",
                  "Störer (傷官)",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Unerwarteter Gewinn (偏財)",
                  "Ausdruck (食神)",
                  "Fürsorge (正印)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Störer (傷官)",
                  "Rivale (劫財)",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Ausdruck (食神)",
                  "Gefährte (比肩)",
                  "Autorität (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Zweig entscheidet nicht über einen Menschen. Derselbe Zweig wird je nach Tagesstamm und Monatszweig anders gelesen.",
              "Beziehungen zwischen Zweigen wie Harmonie, Konflikt und Zwietracht werden hier nicht behandelt."
            ]
          },
          {
            "p": "Die Beziehungen zwischen den Zweigen stehen in [der Tafel der zwölf Zweige](/guide/branches), und seine Bedeutung als Tierkreiszeichen steht in [wo das Tierkreiszeichen im Saju steht](/guide/zodiac). Weitere Zweige: [子 (Ratte)](/guide/branch-ja) · [丑 (Ochse)](/guide/branch-chuk) · [寅 (Tiger)](/guide/branch-in) · [卯 (Hase)](/guide/branch-myo) · [巳 (Schlange)](/guide/branch-sa) · [午 (Pferd)](/guide/branch-o) · [未 (Schaf)](/guide/branch-mi) · [申 (Affe)](/guide/branch-sin) · [酉 (Hahn)](/guide/branch-yu) · [戌 (Hund)](/guide/branch-sul) · [亥 (Schwein)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sa": {
    "eyebrow": "Irdische Zweige",
    "title": "巳 — der Zweig der Schlange",
    "summary": "Die Stämme, die der irdische Zweig 巳 enthält (die verborgenen Stämme), die Stärke der fünf Elemente, wenn er der Monatszweig ist, und die für jeden Tagesstamm gelesenen Zehn Götter — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "巳 ist der sechste der zwölf irdischen Zweige",
        "blocks": [
          {
            "p": "巳 ist der sechste der zwölf irdischen Zweige und gehört zur Schlange. Ist der Zweig des Geburtsmonats 巳, dann ist die Jahreszeit der Sommer und das Element, das die Jahreszeit beherrscht, ist Feuer."
          },
          {
            "p": "Wenn der Zweig des Geburtstags 巳 ist, ist dieses Zeichen die Position des Ehepartners. Unten sehen Sie, welche Stämme dieser Zweig enthält und was sie für den Tagesstamm sind."
          }
        ]
      },
      {
        "title": "Die Stämme, die dieser Zweig enthält (verborgene Stämme)",
        "blocks": [
          {
            "p": "Ein Zweig ist ein sichtbares Zeichen, enthält aber Stämme in sich. Der Anteil gibt an, wie die dreißig Tage des Zweigs auf die Stämme verteilt sind, und der Hauptstamm ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme von 巳",
              "head": [
                "Stamm",
                "Element und Polarität",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Yang-Erde",
                  "Reststamm (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "Yang-Metall (庚)",
                  "Yang-Metall",
                  "Mittelstamm (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Yang-Feuer",
                  "Hauptstamm (本氣)",
                  "{hidSaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stärke der fünf Elemente, wenn der Monatszweig 巳 ist",
        "blocks": [
          {
            "p": "Wenn der Zweig des Geburtsmonats 巳 ist, erhält jedes Element einen Zustand (Wang, Sang, Hyu, Su, Sa), und dieser Zustand wird zum Multiplikator, der auf seine Stärke angewendet wird."
          },
          {
            "table": {
              "caption": "Die Elementzustände für den Monatszweig 巳 (Sommer)",
              "head": [
                "Element",
                "Zustand",
                "Multiplikator"
              ],
              "rows": [
                [
                  "Holz",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Feuer",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Erde",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Metall",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Wasser",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Zehn Götter nach Tagesstamm",
        "blocks": [
          {
            "p": "Dieselben verborgenen Stämme von 巳 werden je nach Tagesstamm zu verschiedenen Zehn Göttern. Ist 巳 der Tageszweig, ist diese Tabelle die Lesung der Position des Ehepartners."
          },
          {
            "table": {
              "caption": "Was die verborgenen Stämme von 巳 für den jeweiligen Tagesstamm sind",
              "head": [
                "Tagesstamm",
                "Yang-Erde (戊) — Reststamm (餘氣)",
                "Yang-Metall (庚) — Mittelstamm (中氣)",
                "Yang-Feuer (丙) — Hauptstamm (本氣)"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Unerwarteter Gewinn (偏財)",
                  "Herausforderer (偏官)",
                  "Ausdruck (食神)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Beständiger Wohlstand (正財)",
                  "Autorität (正官)",
                  "Störer (傷官)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Ausdruck (食神)",
                  "Unerwarteter Gewinn (偏財)",
                  "Gefährte (比肩)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Störer (傷官)",
                  "Beständiger Wohlstand (正財)",
                  "Rivale (劫財)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Gefährte (比肩)",
                  "Ausdruck (食神)",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yin-Erde (己)",
                  "Rivale (劫財)",
                  "Störer (傷官)",
                  "Fürsorge (正印)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Ungewöhnliche Stütze (偏印)",
                  "Gefährte (比肩)",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Fürsorge (正印)",
                  "Rivale (劫財)",
                  "Autorität (正官)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Herausforderer (偏官)",
                  "Ungewöhnliche Stütze (偏印)",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Autorität (正官)",
                  "Fürsorge (正印)",
                  "Beständiger Wohlstand (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Zweig entscheidet nicht über einen Menschen. Derselbe Zweig wird je nach Tagesstamm und Monatszweig anders gelesen.",
              "Beziehungen zwischen Zweigen wie Harmonie, Konflikt und Zwietracht werden hier nicht behandelt."
            ]
          },
          {
            "p": "Die Beziehungen zwischen den Zweigen stehen in [der Tafel der zwölf Zweige](/guide/branches), und seine Bedeutung als Tierkreiszeichen steht in [wo das Tierkreiszeichen im Saju steht](/guide/zodiac). Weitere Zweige: [子 (Ratte)](/guide/branch-ja) · [丑 (Ochse)](/guide/branch-chuk) · [寅 (Tiger)](/guide/branch-in) · [卯 (Hase)](/guide/branch-myo) · [辰 (Drache)](/guide/branch-jin) · [午 (Pferd)](/guide/branch-o) · [未 (Schaf)](/guide/branch-mi) · [申 (Affe)](/guide/branch-sin) · [酉 (Hahn)](/guide/branch-yu) · [戌 (Hund)](/guide/branch-sul) · [亥 (Schwein)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-o": {
    "eyebrow": "Irdische Zweige",
    "title": "午 — der Zweig des Pferdes",
    "summary": "Die Stämme, die der irdische Zweig 午 enthält (die verborgenen Stämme), die Stärke der fünf Elemente, wenn er der Monatszweig ist, und die für jeden Tagesstamm gelesenen Zehn Götter — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "午 ist der siebte der zwölf irdischen Zweige",
        "blocks": [
          {
            "p": "午 ist der siebte der zwölf irdischen Zweige und gehört zum Pferd. Ist der Zweig des Geburtsmonats 午, dann ist die Jahreszeit der Sommer und das Element, das die Jahreszeit beherrscht, ist Feuer."
          },
          {
            "p": "Wenn der Zweig des Geburtstags 午 ist, ist dieses Zeichen die Position des Ehepartners. Unten sehen Sie, welche Stämme dieser Zweig enthält und was sie für den Tagesstamm sind."
          }
        ]
      },
      {
        "title": "Die Stämme, die dieser Zweig enthält (verborgene Stämme)",
        "blocks": [
          {
            "p": "Ein Zweig ist ein sichtbares Zeichen, enthält aber Stämme in sich. Der Anteil gibt an, wie die dreißig Tage des Zweigs auf die Stämme verteilt sind, und der Hauptstamm ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme von 午",
              "head": [
                "Stamm",
                "Element und Polarität",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "Yang-Feuer (丙)",
                  "Yang-Feuer",
                  "Reststamm (餘氣)",
                  "{hidOYeo}"
                ],
                [
                  "Yin-Erde (己)",
                  "Yin-Erde",
                  "Mittelstamm (中氣)",
                  "{hidOJung}"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Yin-Feuer",
                  "Hauptstamm (本氣)",
                  "{hidOBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stärke der fünf Elemente, wenn der Monatszweig 午 ist",
        "blocks": [
          {
            "p": "Wenn der Zweig des Geburtsmonats 午 ist, erhält jedes Element einen Zustand (Wang, Sang, Hyu, Su, Sa), und dieser Zustand wird zum Multiplikator, der auf seine Stärke angewendet wird."
          },
          {
            "table": {
              "caption": "Die Elementzustände für den Monatszweig 午 (Sommer)",
              "head": [
                "Element",
                "Zustand",
                "Multiplikator"
              ],
              "rows": [
                [
                  "Holz",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Feuer",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Erde",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Metall",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Wasser",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Zehn Götter nach Tagesstamm",
        "blocks": [
          {
            "p": "Dieselben verborgenen Stämme von 午 werden je nach Tagesstamm zu verschiedenen Zehn Göttern. Ist 午 der Tageszweig, ist diese Tabelle die Lesung der Position des Ehepartners."
          },
          {
            "table": {
              "caption": "Was die verborgenen Stämme von 午 für den jeweiligen Tagesstamm sind",
              "head": [
                "Tagesstamm",
                "Yang-Feuer (丙) — Reststamm (餘氣)",
                "Yin-Erde (己) — Mittelstamm (中氣)",
                "Yin-Feuer (丁) — Hauptstamm (本氣)"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Ausdruck (食神)",
                  "Beständiger Wohlstand (正財)",
                  "Störer (傷官)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Störer (傷官)",
                  "Unerwarteter Gewinn (偏財)",
                  "Ausdruck (食神)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Gefährte (比肩)",
                  "Störer (傷官)",
                  "Rivale (劫財)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Rivale (劫財)",
                  "Ausdruck (食神)",
                  "Gefährte (比肩)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Ungewöhnliche Stütze (偏印)",
                  "Rivale (劫財)",
                  "Fürsorge (正印)"
                ],
                [
                  "Yin-Erde (己)",
                  "Fürsorge (正印)",
                  "Gefährte (比肩)",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Herausforderer (偏官)",
                  "Fürsorge (正印)",
                  "Autorität (正官)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Autorität (正官)",
                  "Ungewöhnliche Stütze (偏印)",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Unerwarteter Gewinn (偏財)",
                  "Autorität (正官)",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Beständiger Wohlstand (正財)",
                  "Herausforderer (偏官)",
                  "Unerwarteter Gewinn (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Zweig entscheidet nicht über einen Menschen. Derselbe Zweig wird je nach Tagesstamm und Monatszweig anders gelesen.",
              "Beziehungen zwischen Zweigen wie Harmonie, Konflikt und Zwietracht werden hier nicht behandelt."
            ]
          },
          {
            "p": "Die Beziehungen zwischen den Zweigen stehen in [der Tafel der zwölf Zweige](/guide/branches), und seine Bedeutung als Tierkreiszeichen steht in [wo das Tierkreiszeichen im Saju steht](/guide/zodiac). Weitere Zweige: [子 (Ratte)](/guide/branch-ja) · [丑 (Ochse)](/guide/branch-chuk) · [寅 (Tiger)](/guide/branch-in) · [卯 (Hase)](/guide/branch-myo) · [辰 (Drache)](/guide/branch-jin) · [巳 (Schlange)](/guide/branch-sa) · [未 (Schaf)](/guide/branch-mi) · [申 (Affe)](/guide/branch-sin) · [酉 (Hahn)](/guide/branch-yu) · [戌 (Hund)](/guide/branch-sul) · [亥 (Schwein)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-mi": {
    "eyebrow": "Irdische Zweige",
    "title": "未 — der Zweig des Schafs",
    "summary": "Die Stämme, die der irdische Zweig 未 enthält (die verborgenen Stämme), die Stärke der fünf Elemente, wenn er der Monatszweig ist, und die für jeden Tagesstamm gelesenen Zehn Götter — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "未 ist der achte der zwölf irdischen Zweige",
        "blocks": [
          {
            "p": "未 ist der achte der zwölf irdischen Zweige und gehört zum Schaf. Ist der Zweig des Geburtsmonats 未, dann ist die Jahreszeit der Sommer und das Element, das die Jahreszeit beherrscht, ist Feuer. Es ist ein Übergangsmonat (辰未戌丑), daher gilt auch die Erde als im Zustand Wang."
          },
          {
            "p": "Wenn der Zweig des Geburtstags 未 ist, ist dieses Zeichen die Position des Ehepartners. Unten sehen Sie, welche Stämme dieser Zweig enthält und was sie für den Tagesstamm sind."
          }
        ]
      },
      {
        "title": "Die Stämme, die dieser Zweig enthält (verborgene Stämme)",
        "blocks": [
          {
            "p": "Ein Zweig ist ein sichtbares Zeichen, enthält aber Stämme in sich. Der Anteil gibt an, wie die dreißig Tage des Zweigs auf die Stämme verteilt sind, und der Hauptstamm ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme von 未",
              "head": [
                "Stamm",
                "Element und Polarität",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "Yin-Feuer (丁)",
                  "Yin-Feuer",
                  "Reststamm (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "Yin-Holz (乙)",
                  "Yin-Holz",
                  "Mittelstamm (中氣)",
                  "{hidMiJung}"
                ],
                [
                  "Yin-Erde (己)",
                  "Yin-Erde",
                  "Hauptstamm (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stärke der fünf Elemente, wenn der Monatszweig 未 ist",
        "blocks": [
          {
            "p": "Wenn der Zweig des Geburtsmonats 未 ist, erhält jedes Element einen Zustand (Wang, Sang, Hyu, Su, Sa), und dieser Zustand wird zum Multiplikator, der auf seine Stärke angewendet wird."
          },
          {
            "table": {
              "caption": "Die Elementzustände für den Monatszweig 未 (Sommer (Übergangsmonat))",
              "head": [
                "Element",
                "Zustand",
                "Multiplikator"
              ],
              "rows": [
                [
                  "Holz",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Feuer",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Erde",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metall",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Wasser",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Zehn Götter nach Tagesstamm",
        "blocks": [
          {
            "p": "Dieselben verborgenen Stämme von 未 werden je nach Tagesstamm zu verschiedenen Zehn Göttern. Ist 未 der Tageszweig, ist diese Tabelle die Lesung der Position des Ehepartners."
          },
          {
            "table": {
              "caption": "Was die verborgenen Stämme von 未 für den jeweiligen Tagesstamm sind",
              "head": [
                "Tagesstamm",
                "Yin-Feuer (丁) — Reststamm (餘氣)",
                "Yin-Holz (乙) — Mittelstamm (中氣)",
                "Yin-Erde (己) — Hauptstamm (本氣)"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Störer (傷官)",
                  "Rivale (劫財)",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Ausdruck (食神)",
                  "Gefährte (比肩)",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Rivale (劫財)",
                  "Fürsorge (正印)",
                  "Störer (傷官)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Gefährte (比肩)",
                  "Ungewöhnliche Stütze (偏印)",
                  "Ausdruck (食神)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Fürsorge (正印)",
                  "Autorität (正官)",
                  "Rivale (劫財)"
                ],
                [
                  "Yin-Erde (己)",
                  "Ungewöhnliche Stütze (偏印)",
                  "Herausforderer (偏官)",
                  "Gefährte (比肩)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Autorität (正官)",
                  "Beständiger Wohlstand (正財)",
                  "Fürsorge (正印)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Herausforderer (偏官)",
                  "Unerwarteter Gewinn (偏財)",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Beständiger Wohlstand (正財)",
                  "Störer (傷官)",
                  "Autorität (正官)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Unerwarteter Gewinn (偏財)",
                  "Ausdruck (食神)",
                  "Herausforderer (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Zweig entscheidet nicht über einen Menschen. Derselbe Zweig wird je nach Tagesstamm und Monatszweig anders gelesen.",
              "Beziehungen zwischen Zweigen wie Harmonie, Konflikt und Zwietracht werden hier nicht behandelt."
            ]
          },
          {
            "p": "Die Beziehungen zwischen den Zweigen stehen in [der Tafel der zwölf Zweige](/guide/branches), und seine Bedeutung als Tierkreiszeichen steht in [wo das Tierkreiszeichen im Saju steht](/guide/zodiac). Weitere Zweige: [子 (Ratte)](/guide/branch-ja) · [丑 (Ochse)](/guide/branch-chuk) · [寅 (Tiger)](/guide/branch-in) · [卯 (Hase)](/guide/branch-myo) · [辰 (Drache)](/guide/branch-jin) · [巳 (Schlange)](/guide/branch-sa) · [午 (Pferd)](/guide/branch-o) · [申 (Affe)](/guide/branch-sin) · [酉 (Hahn)](/guide/branch-yu) · [戌 (Hund)](/guide/branch-sul) · [亥 (Schwein)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sin": {
    "eyebrow": "Irdische Zweige",
    "title": "申 — der Zweig des Affen",
    "summary": "Die Stämme, die der irdische Zweig 申 enthält (die verborgenen Stämme), die Stärke der fünf Elemente, wenn er der Monatszweig ist, und die für jeden Tagesstamm gelesenen Zehn Götter — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "申 ist der neunte der zwölf irdischen Zweige",
        "blocks": [
          {
            "p": "申 ist der neunte der zwölf irdischen Zweige und gehört zum Affen. Ist der Zweig des Geburtsmonats 申, dann ist die Jahreszeit der Herbst und das Element, das die Jahreszeit beherrscht, ist Metall."
          },
          {
            "p": "Wenn der Zweig des Geburtstags 申 ist, ist dieses Zeichen die Position des Ehepartners. Unten sehen Sie, welche Stämme dieser Zweig enthält und was sie für den Tagesstamm sind."
          }
        ]
      },
      {
        "title": "Die Stämme, die dieser Zweig enthält (verborgene Stämme)",
        "blocks": [
          {
            "p": "Ein Zweig ist ein sichtbares Zeichen, enthält aber Stämme in sich. Der Anteil gibt an, wie die dreißig Tage des Zweigs auf die Stämme verteilt sind, und der Hauptstamm ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme von 申",
              "head": [
                "Stamm",
                "Element und Polarität",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Yang-Erde",
                  "Reststamm (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Yang-Wasser",
                  "Mittelstamm (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "Yang-Metall (庚)",
                  "Yang-Metall",
                  "Hauptstamm (本氣)",
                  "{hidSinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stärke der fünf Elemente, wenn der Monatszweig 申 ist",
        "blocks": [
          {
            "p": "Wenn der Zweig des Geburtsmonats 申 ist, erhält jedes Element einen Zustand (Wang, Sang, Hyu, Su, Sa), und dieser Zustand wird zum Multiplikator, der auf seine Stärke angewendet wird."
          },
          {
            "table": {
              "caption": "Die Elementzustände für den Monatszweig 申 (Herbst)",
              "head": [
                "Element",
                "Zustand",
                "Multiplikator"
              ],
              "rows": [
                [
                  "Holz",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Feuer",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Erde",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Metall",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Wasser",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Zehn Götter nach Tagesstamm",
        "blocks": [
          {
            "p": "Dieselben verborgenen Stämme von 申 werden je nach Tagesstamm zu verschiedenen Zehn Göttern. Ist 申 der Tageszweig, ist diese Tabelle die Lesung der Position des Ehepartners."
          },
          {
            "table": {
              "caption": "Was die verborgenen Stämme von 申 für den jeweiligen Tagesstamm sind",
              "head": [
                "Tagesstamm",
                "Yang-Erde (戊) — Reststamm (餘氣)",
                "Yang-Wasser (壬) — Mittelstamm (中氣)",
                "Yang-Metall (庚) — Hauptstamm (本氣)"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Unerwarteter Gewinn (偏財)",
                  "Ungewöhnliche Stütze (偏印)",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Beständiger Wohlstand (正財)",
                  "Fürsorge (正印)",
                  "Autorität (正官)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Ausdruck (食神)",
                  "Herausforderer (偏官)",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Störer (傷官)",
                  "Autorität (正官)",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Gefährte (比肩)",
                  "Unerwarteter Gewinn (偏財)",
                  "Ausdruck (食神)"
                ],
                [
                  "Yin-Erde (己)",
                  "Rivale (劫財)",
                  "Beständiger Wohlstand (正財)",
                  "Störer (傷官)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Ungewöhnliche Stütze (偏印)",
                  "Ausdruck (食神)",
                  "Gefährte (比肩)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Fürsorge (正印)",
                  "Störer (傷官)",
                  "Rivale (劫財)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Herausforderer (偏官)",
                  "Gefährte (比肩)",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Autorität (正官)",
                  "Rivale (劫財)",
                  "Fürsorge (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Zweig entscheidet nicht über einen Menschen. Derselbe Zweig wird je nach Tagesstamm und Monatszweig anders gelesen.",
              "Beziehungen zwischen Zweigen wie Harmonie, Konflikt und Zwietracht werden hier nicht behandelt."
            ]
          },
          {
            "p": "Die Beziehungen zwischen den Zweigen stehen in [der Tafel der zwölf Zweige](/guide/branches), und seine Bedeutung als Tierkreiszeichen steht in [wo das Tierkreiszeichen im Saju steht](/guide/zodiac). Weitere Zweige: [子 (Ratte)](/guide/branch-ja) · [丑 (Ochse)](/guide/branch-chuk) · [寅 (Tiger)](/guide/branch-in) · [卯 (Hase)](/guide/branch-myo) · [辰 (Drache)](/guide/branch-jin) · [巳 (Schlange)](/guide/branch-sa) · [午 (Pferd)](/guide/branch-o) · [未 (Schaf)](/guide/branch-mi) · [酉 (Hahn)](/guide/branch-yu) · [戌 (Hund)](/guide/branch-sul) · [亥 (Schwein)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-yu": {
    "eyebrow": "Irdische Zweige",
    "title": "酉 — der Zweig des Hahns",
    "summary": "Die Stämme, die der irdische Zweig 酉 enthält (die verborgenen Stämme), die Stärke der fünf Elemente, wenn er der Monatszweig ist, und die für jeden Tagesstamm gelesenen Zehn Götter — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "酉 ist der zehnte der zwölf irdischen Zweige",
        "blocks": [
          {
            "p": "酉 ist der zehnte der zwölf irdischen Zweige und gehört zum Hahn. Ist der Zweig des Geburtsmonats 酉, dann ist die Jahreszeit der Herbst und das Element, das die Jahreszeit beherrscht, ist Metall."
          },
          {
            "p": "Wenn der Zweig des Geburtstags 酉 ist, ist dieses Zeichen die Position des Ehepartners. Unten sehen Sie, welche Stämme dieser Zweig enthält und was sie für den Tagesstamm sind."
          }
        ]
      },
      {
        "title": "Die Stämme, die dieser Zweig enthält (verborgene Stämme)",
        "blocks": [
          {
            "p": "Ein Zweig ist ein sichtbares Zeichen, enthält aber Stämme in sich. Der Anteil gibt an, wie die dreißig Tage des Zweigs auf die Stämme verteilt sind, und der Hauptstamm ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme von 酉",
              "head": [
                "Stamm",
                "Element und Polarität",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "Yang-Metall (庚)",
                  "Yang-Metall",
                  "Reststamm (餘氣)",
                  "{hidYuYeo}"
                ],
                [
                  "Yin-Metall (辛)",
                  "Yin-Metall",
                  "Hauptstamm (本氣)",
                  "{hidYuBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stärke der fünf Elemente, wenn der Monatszweig 酉 ist",
        "blocks": [
          {
            "p": "Wenn der Zweig des Geburtsmonats 酉 ist, erhält jedes Element einen Zustand (Wang, Sang, Hyu, Su, Sa), und dieser Zustand wird zum Multiplikator, der auf seine Stärke angewendet wird."
          },
          {
            "table": {
              "caption": "Die Elementzustände für den Monatszweig 酉 (Herbst)",
              "head": [
                "Element",
                "Zustand",
                "Multiplikator"
              ],
              "rows": [
                [
                  "Holz",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Feuer",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Erde",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Metall",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Wasser",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Zehn Götter nach Tagesstamm",
        "blocks": [
          {
            "p": "Dieselben verborgenen Stämme von 酉 werden je nach Tagesstamm zu verschiedenen Zehn Göttern. Ist 酉 der Tageszweig, ist diese Tabelle die Lesung der Position des Ehepartners."
          },
          {
            "table": {
              "caption": "Was die verborgenen Stämme von 酉 für den jeweiligen Tagesstamm sind",
              "head": [
                "Tagesstamm",
                "Yang-Metall (庚) — Reststamm (餘氣)",
                "Yin-Metall (辛) — Hauptstamm (本氣)"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Herausforderer (偏官)",
                  "Autorität (正官)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Autorität (正官)",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Unerwarteter Gewinn (偏財)",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Beständiger Wohlstand (正財)",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Ausdruck (食神)",
                  "Störer (傷官)"
                ],
                [
                  "Yin-Erde (己)",
                  "Störer (傷官)",
                  "Ausdruck (食神)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Gefährte (比肩)",
                  "Rivale (劫財)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Rivale (劫財)",
                  "Gefährte (比肩)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Ungewöhnliche Stütze (偏印)",
                  "Fürsorge (正印)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Fürsorge (正印)",
                  "Ungewöhnliche Stütze (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Zweig entscheidet nicht über einen Menschen. Derselbe Zweig wird je nach Tagesstamm und Monatszweig anders gelesen.",
              "Beziehungen zwischen Zweigen wie Harmonie, Konflikt und Zwietracht werden hier nicht behandelt."
            ]
          },
          {
            "p": "Die Beziehungen zwischen den Zweigen stehen in [der Tafel der zwölf Zweige](/guide/branches), und seine Bedeutung als Tierkreiszeichen steht in [wo das Tierkreiszeichen im Saju steht](/guide/zodiac). Weitere Zweige: [子 (Ratte)](/guide/branch-ja) · [丑 (Ochse)](/guide/branch-chuk) · [寅 (Tiger)](/guide/branch-in) · [卯 (Hase)](/guide/branch-myo) · [辰 (Drache)](/guide/branch-jin) · [巳 (Schlange)](/guide/branch-sa) · [午 (Pferd)](/guide/branch-o) · [未 (Schaf)](/guide/branch-mi) · [申 (Affe)](/guide/branch-sin) · [戌 (Hund)](/guide/branch-sul) · [亥 (Schwein)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sul": {
    "eyebrow": "Irdische Zweige",
    "title": "戌 — der Zweig des Hundes",
    "summary": "Die Stämme, die der irdische Zweig 戌 enthält (die verborgenen Stämme), die Stärke der fünf Elemente, wenn er der Monatszweig ist, und die für jeden Tagesstamm gelesenen Zehn Götter — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "戌 ist der elfte der zwölf irdischen Zweige",
        "blocks": [
          {
            "p": "戌 ist der elfte der zwölf irdischen Zweige und gehört zum Hund. Ist der Zweig des Geburtsmonats 戌, dann ist die Jahreszeit der Herbst und das Element, das die Jahreszeit beherrscht, ist Metall. Es ist ein Übergangsmonat (辰未戌丑), daher gilt auch die Erde als im Zustand Wang."
          },
          {
            "p": "Wenn der Zweig des Geburtstags 戌 ist, ist dieses Zeichen die Position des Ehepartners. Unten sehen Sie, welche Stämme dieser Zweig enthält und was sie für den Tagesstamm sind."
          }
        ]
      },
      {
        "title": "Die Stämme, die dieser Zweig enthält (verborgene Stämme)",
        "blocks": [
          {
            "p": "Ein Zweig ist ein sichtbares Zeichen, enthält aber Stämme in sich. Der Anteil gibt an, wie die dreißig Tage des Zweigs auf die Stämme verteilt sind, und der Hauptstamm ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme von 戌",
              "head": [
                "Stamm",
                "Element und Polarität",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "Yin-Metall (辛)",
                  "Yin-Metall",
                  "Reststamm (餘氣)",
                  "{hidSulYeo}"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Yin-Feuer",
                  "Mittelstamm (中氣)",
                  "{hidSulJung}"
                ],
                [
                  "Yang-Erde (戊)",
                  "Yang-Erde",
                  "Hauptstamm (本氣)",
                  "{hidSulBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stärke der fünf Elemente, wenn der Monatszweig 戌 ist",
        "blocks": [
          {
            "p": "Wenn der Zweig des Geburtsmonats 戌 ist, erhält jedes Element einen Zustand (Wang, Sang, Hyu, Su, Sa), und dieser Zustand wird zum Multiplikator, der auf seine Stärke angewendet wird."
          },
          {
            "table": {
              "caption": "Die Elementzustände für den Monatszweig 戌 (Herbst (Übergangsmonat))",
              "head": [
                "Element",
                "Zustand",
                "Multiplikator"
              ],
              "rows": [
                [
                  "Holz",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Feuer",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Erde",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metall",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Wasser",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Zehn Götter nach Tagesstamm",
        "blocks": [
          {
            "p": "Dieselben verborgenen Stämme von 戌 werden je nach Tagesstamm zu verschiedenen Zehn Göttern. Ist 戌 der Tageszweig, ist diese Tabelle die Lesung der Position des Ehepartners."
          },
          {
            "table": {
              "caption": "Was die verborgenen Stämme von 戌 für den jeweiligen Tagesstamm sind",
              "head": [
                "Tagesstamm",
                "Yin-Metall (辛) — Reststamm (餘氣)",
                "Yin-Feuer (丁) — Mittelstamm (中氣)",
                "Yang-Erde (戊) — Hauptstamm (本氣)"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Autorität (正官)",
                  "Störer (傷官)",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Herausforderer (偏官)",
                  "Ausdruck (食神)",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Beständiger Wohlstand (正財)",
                  "Rivale (劫財)",
                  "Ausdruck (食神)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Unerwarteter Gewinn (偏財)",
                  "Gefährte (比肩)",
                  "Störer (傷官)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Störer (傷官)",
                  "Fürsorge (正印)",
                  "Gefährte (比肩)"
                ],
                [
                  "Yin-Erde (己)",
                  "Ausdruck (食神)",
                  "Ungewöhnliche Stütze (偏印)",
                  "Rivale (劫財)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Rivale (劫財)",
                  "Autorität (正官)",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Gefährte (比肩)",
                  "Herausforderer (偏官)",
                  "Fürsorge (正印)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Fürsorge (正印)",
                  "Beständiger Wohlstand (正財)",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Ungewöhnliche Stütze (偏印)",
                  "Unerwarteter Gewinn (偏財)",
                  "Autorität (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Zweig entscheidet nicht über einen Menschen. Derselbe Zweig wird je nach Tagesstamm und Monatszweig anders gelesen.",
              "Beziehungen zwischen Zweigen wie Harmonie, Konflikt und Zwietracht werden hier nicht behandelt."
            ]
          },
          {
            "p": "Die Beziehungen zwischen den Zweigen stehen in [der Tafel der zwölf Zweige](/guide/branches), und seine Bedeutung als Tierkreiszeichen steht in [wo das Tierkreiszeichen im Saju steht](/guide/zodiac). Weitere Zweige: [子 (Ratte)](/guide/branch-ja) · [丑 (Ochse)](/guide/branch-chuk) · [寅 (Tiger)](/guide/branch-in) · [卯 (Hase)](/guide/branch-myo) · [辰 (Drache)](/guide/branch-jin) · [巳 (Schlange)](/guide/branch-sa) · [午 (Pferd)](/guide/branch-o) · [未 (Schaf)](/guide/branch-mi) · [申 (Affe)](/guide/branch-sin) · [酉 (Hahn)](/guide/branch-yu) · [亥 (Schwein)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-hae": {
    "eyebrow": "Irdische Zweige",
    "title": "亥 — der Zweig des Schweins",
    "summary": "Die Stämme, die der irdische Zweig 亥 enthält (die verborgenen Stämme), die Stärke der fünf Elemente, wenn er der Monatszweig ist, und die für jeden Tagesstamm gelesenen Zehn Götter — genau so dargelegt, wie es die Berechnungsregeln von Saju-Link vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "亥 ist der zwölfte der zwölf irdischen Zweige",
        "blocks": [
          {
            "p": "亥 ist der zwölfte der zwölf irdischen Zweige und gehört zum Schwein. Ist der Zweig des Geburtsmonats 亥, dann ist die Jahreszeit der Winter und das Element, das die Jahreszeit beherrscht, ist Wasser."
          },
          {
            "p": "Wenn der Zweig des Geburtstags 亥 ist, ist dieses Zeichen die Position des Ehepartners. Unten sehen Sie, welche Stämme dieser Zweig enthält und was sie für den Tagesstamm sind."
          }
        ]
      },
      {
        "title": "Die Stämme, die dieser Zweig enthält (verborgene Stämme)",
        "blocks": [
          {
            "p": "Ein Zweig ist ein sichtbares Zeichen, enthält aber Stämme in sich. Der Anteil gibt an, wie die dreißig Tage des Zweigs auf die Stämme verteilt sind, und der Hauptstamm ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme von 亥",
              "head": [
                "Stamm",
                "Element und Polarität",
                "Position",
                "Anteil"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Yang-Erde",
                  "Reststamm (餘氣)",
                  "{hidHaeYeo}"
                ],
                [
                  "Yang-Holz (甲)",
                  "Yang-Holz",
                  "Mittelstamm (中氣)",
                  "{hidHaeJung}"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Yang-Wasser",
                  "Hauptstamm (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Stärke der fünf Elemente, wenn der Monatszweig 亥 ist",
        "blocks": [
          {
            "p": "Wenn der Zweig des Geburtsmonats 亥 ist, erhält jedes Element einen Zustand (Wang, Sang, Hyu, Su, Sa), und dieser Zustand wird zum Multiplikator, der auf seine Stärke angewendet wird."
          },
          {
            "table": {
              "caption": "Die Elementzustände für den Monatszweig 亥 (Winter)",
              "head": [
                "Element",
                "Zustand",
                "Multiplikator"
              ],
              "rows": [
                [
                  "Holz",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Feuer",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Erde",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Metall",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Wasser",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Zehn Götter nach Tagesstamm",
        "blocks": [
          {
            "p": "Dieselben verborgenen Stämme von 亥 werden je nach Tagesstamm zu verschiedenen Zehn Göttern. Ist 亥 der Tageszweig, ist diese Tabelle die Lesung der Position des Ehepartners."
          },
          {
            "table": {
              "caption": "Was die verborgenen Stämme von 亥 für den jeweiligen Tagesstamm sind",
              "head": [
                "Tagesstamm",
                "Yang-Erde (戊) — Reststamm (餘氣)",
                "Yang-Holz (甲) — Mittelstamm (中氣)",
                "Yang-Wasser (壬) — Hauptstamm (本氣)"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Unerwarteter Gewinn (偏財)",
                  "Gefährte (比肩)",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Beständiger Wohlstand (正財)",
                  "Rivale (劫財)",
                  "Fürsorge (正印)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Ausdruck (食神)",
                  "Ungewöhnliche Stütze (偏印)",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Störer (傷官)",
                  "Fürsorge (正印)",
                  "Autorität (正官)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Gefährte (比肩)",
                  "Herausforderer (偏官)",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yin-Erde (己)",
                  "Rivale (劫財)",
                  "Autorität (正官)",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Ungewöhnliche Stütze (偏印)",
                  "Unerwarteter Gewinn (偏財)",
                  "Ausdruck (食神)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Fürsorge (正印)",
                  "Beständiger Wohlstand (正財)",
                  "Störer (傷官)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Herausforderer (偏官)",
                  "Ausdruck (食神)",
                  "Gefährte (比肩)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Autorität (正官)",
                  "Störer (傷官)",
                  "Rivale (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Ein einzelner Zweig entscheidet nicht über einen Menschen. Derselbe Zweig wird je nach Tagesstamm und Monatszweig anders gelesen.",
              "Beziehungen zwischen Zweigen wie Harmonie, Konflikt und Zwietracht werden hier nicht behandelt."
            ]
          },
          {
            "p": "Die Beziehungen zwischen den Zweigen stehen in [der Tafel der zwölf Zweige](/guide/branches), und seine Bedeutung als Tierkreiszeichen steht in [wo das Tierkreiszeichen im Saju steht](/guide/zodiac). Weitere Zweige: [子 (Ratte)](/guide/branch-ja) · [丑 (Ochse)](/guide/branch-chuk) · [寅 (Tiger)](/guide/branch-in) · [卯 (Hase)](/guide/branch-myo) · [辰 (Drache)](/guide/branch-jin) · [巳 (Schlange)](/guide/branch-sa) · [午 (Pferd)](/guide/branch-o) · [未 (Schaf)](/guide/branch-mi) · [申 (Affe)](/guide/branch-sin) · [酉 (Hahn)](/guide/branch-yu) · [戌 (Hund)](/guide/branch-sul)"
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-ja": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 甲子",
    "summary": "Wie Saju-Link die Tagessäule 甲子 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "甲子 ist die Tagessäule Nr. 1 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 甲子, ist der Tagesstamm 甲 (Yang-Holz) und der Tageszweig 子 (die Ratte). Im Sechzigerzyklus ist es die Kombination Nr. 1."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 甲 ist, „Yang-Holz (甲)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Ein hoher Baum, der gerade wächst. Steht die Richtung fest, wankt er nicht, und er hält lieber aus, als sich zu beugen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 子 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 甲 aus gelesen, sind die Stämme, die 子 enthält, die folgenden. Der Hauptstamm (癸) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 甲子",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 甲"
              ],
              "rows": [
                [
                  "Yang-Wasser (壬)",
                  "Reststamm (餘氣)",
                  "{hidJaYeo}",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Hauptstamm (本氣)",
                  "{hidJaBon}",
                  "Fürsorge (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 甲 als Tagesstamm ist der Beständige Wohlstand 己 und die Autorität 辛."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 己. 己 ist in 子 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 辛. 辛 ist in 子 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [癸亥](/guide/pillar-gye-hae) und die nächste [乙丑](/guide/pillar-eul-chuk)."
          },
          {
            "p": "Sie besteht aus [Yang-Holz (甲)](/guide/stem-gap) und [子 (Ratte)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-chuk": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 乙丑",
    "summary": "Wie Saju-Link die Tagessäule 乙丑 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "乙丑 ist die Tagessäule Nr. 2 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 乙丑, ist der Tagesstamm 乙 (Yin-Holz) und der Tageszweig 丑 (der Ochse). Im Sechzigerzyklus ist es die Kombination Nr. 2."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 乙 ist, „Yin-Holz (乙)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Eine Ranke — biegsames Gras. Es beugt sich den Umständen, um weiterzukommen, und bricht dabei nicht.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 丑 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 乙 aus gelesen, sind die Stämme, die 丑 enthält, die folgenden. Der Hauptstamm (己) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 乙丑",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 乙"
              ],
              "rows": [
                [
                  "Yin-Wasser (癸)",
                  "Reststamm (餘氣)",
                  "{hidChukYeo}",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Mittelstamm (中氣)",
                  "{hidChukJung}",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yin-Erde (己)",
                  "Hauptstamm (本氣)",
                  "{hidChukBon}",
                  "Unerwarteter Gewinn (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 乙 als Tagesstamm ist der Beständige Wohlstand 戊 und die Autorität 庚."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 戊. 戊 ist in 丑 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 庚. 庚 ist in 丑 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [甲子](/guide/pillar-gap-ja) und die nächste [丙寅](/guide/pillar-byeong-in)."
          },
          {
            "p": "Sie besteht aus [Yin-Holz (乙)](/guide/stem-eul) und [丑 (Ochse)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-in": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 丙寅",
    "summary": "Wie Saju-Link die Tagessäule 丙寅 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "丙寅 ist die Tagessäule Nr. 3 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 丙寅, ist der Tagesstamm 丙 (Yang-Feuer) und der Tageszweig 寅 (der Tiger). Im Sechzigerzyklus ist es die Kombination Nr. 3."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 丙 ist, „Yang-Feuer (丙)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Die Mittagssonne. Gefühle liegen offen, der Raum wird hell, und nach vorn zu treten fällt leicht.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 寅 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 丙 aus gelesen, sind die Stämme, die 寅 enthält, die folgenden. Der Hauptstamm (甲) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 丙寅",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 丙"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Reststamm (餘氣)",
                  "{hidInYeo}",
                  "Ausdruck (食神)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Mittelstamm (中氣)",
                  "{hidInJung}",
                  "Gefährte (比肩)"
                ],
                [
                  "Yang-Holz (甲)",
                  "Hauptstamm (本氣)",
                  "{hidInBon}",
                  "Ungewöhnliche Stütze (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 丙 als Tagesstamm ist der Beständige Wohlstand 辛 und die Autorität 癸."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 辛. 辛 ist in 寅 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 癸. 癸 ist in 寅 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [乙丑](/guide/pillar-eul-chuk) und die nächste [丁卯](/guide/pillar-jeong-myo)."
          },
          {
            "p": "Sie besteht aus [Yang-Feuer (丙)](/guide/stem-byeong) und [寅 (Tiger)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-myo": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 丁卯",
    "summary": "Wie Saju-Link die Tagessäule 丁卯 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "丁卯 ist die Tagessäule Nr. 4 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 丁卯, ist der Tagesstamm 丁 (Yin-Feuer) und der Tageszweig 卯 (der Hase). Im Sechzigerzyklus ist es die Kombination Nr. 4."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 丁 ist, „Yin-Feuer (丁)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Kerzenlicht. Es brennt leise und lange und wärmt zuerst die Nächsten.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 卯 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 丁 aus gelesen, sind die Stämme, die 卯 enthält, die folgenden. Der Hauptstamm (乙) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 丁卯",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 丁"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Reststamm (餘氣)",
                  "{hidMyoYeo}",
                  "Fürsorge (正印)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Hauptstamm (本氣)",
                  "{hidMyoBon}",
                  "Ungewöhnliche Stütze (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 丁 als Tagesstamm ist der Beständige Wohlstand 庚 und die Autorität 壬."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 庚. 庚 ist in 卯 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 壬. 壬 ist in 卯 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [丙寅](/guide/pillar-byeong-in) und die nächste [戊辰](/guide/pillar-mu-jin)."
          },
          {
            "p": "Sie besteht aus [Yin-Feuer (丁)](/guide/stem-jeong) und [卯 (Hase)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-jin": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 戊辰",
    "summary": "Wie Saju-Link die Tagessäule 戊辰 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "戊辰 ist die Tagessäule Nr. 5 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 戊辰, ist der Tagesstamm 戊 (Yang-Erde) und der Tageszweig 辰 (der Drache). Im Sechzigerzyklus ist es die Kombination Nr. 5."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 戊 ist, „Yang-Erde (戊)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Weites Land und Berge. Schwer zu erschüttern und gut zum Anlehnen, doch eine getroffene Entscheidung ändert sich nur langsam.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 辰 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 戊 aus gelesen, sind die Stämme, die 辰 enthält, die folgenden. Der Hauptstamm (戊) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 戊辰",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 戊"
              ],
              "rows": [
                [
                  "Yin-Holz (乙)",
                  "Reststamm (餘氣)",
                  "{hidJinYeo}",
                  "Autorität (正官)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Mittelstamm (中氣)",
                  "{hidJinJung}",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Hauptstamm (本氣)",
                  "{hidJinBon}",
                  "Gefährte (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 戊 als Tagesstamm ist der Beständige Wohlstand 癸 und die Autorität 乙."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 癸. 癸 ist in 辰 enthalten (Mittelstamm (中氣))."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 乙. 乙 ist in 辰 enthalten (Reststamm (餘氣))."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [丁卯](/guide/pillar-jeong-myo) und die nächste [己巳](/guide/pillar-gi-sa)."
          },
          {
            "p": "Sie besteht aus [Yang-Erde (戊)](/guide/stem-mu) und [辰 (Drache)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-sa": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 己巳",
    "summary": "Wie Saju-Link die Tagessäule 己巳 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "己巳 ist die Tagessäule Nr. 6 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 己巳, ist der Tagesstamm 己 (Yin-Erde) und der Tageszweig 巳 (die Schlange). Im Sechzigerzyklus ist es die Kombination Nr. 6."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 己 ist, „Yin-Erde (己)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Ackerboden. Er nimmt auf, was kommt, und zieht es groß — er pflegt, statt sich zu zeigen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 巳 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 己 aus gelesen, sind die Stämme, die 巳 enthält, die folgenden. Der Hauptstamm (丙) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 己巳",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 己"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Reststamm (餘氣)",
                  "{hidSaYeo}",
                  "Rivale (劫財)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Mittelstamm (中氣)",
                  "{hidSaJung}",
                  "Störer (傷官)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Hauptstamm (本氣)",
                  "{hidSaBon}",
                  "Fürsorge (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 己 als Tagesstamm ist der Beständige Wohlstand 壬 und die Autorität 甲."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 壬. 壬 ist in 巳 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 甲. 甲 ist in 巳 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [戊辰](/guide/pillar-mu-jin) und die nächste [庚午](/guide/pillar-gyeong-o)."
          },
          {
            "p": "Sie besteht aus [Yin-Erde (己)](/guide/stem-gi) und [巳 (Schlange)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-o": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 庚午",
    "summary": "Wie Saju-Link die Tagessäule 庚午 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "庚午 ist die Tagessäule Nr. 7 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 庚午, ist der Tagesstamm 庚 (Yang-Metall) und der Tageszweig 午 (das Pferd). Im Sechzigerzyklus ist es die Kombination Nr. 7."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 庚 ist, „Yang-Metall (庚)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Unbearbeitetes Eisen. Entschieden und klar, mit wenig Geduld für Dinge, die in der Schwebe bleiben.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 午 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 庚 aus gelesen, sind die Stämme, die 午 enthält, die folgenden. Der Hauptstamm (丁) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 庚午",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 庚"
              ],
              "rows": [
                [
                  "Yang-Feuer (丙)",
                  "Reststamm (餘氣)",
                  "{hidOYeo}",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yin-Erde (己)",
                  "Mittelstamm (中氣)",
                  "{hidOJung}",
                  "Fürsorge (正印)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Hauptstamm (本氣)",
                  "{hidOBon}",
                  "Autorität (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 庚 als Tagesstamm ist der Beständige Wohlstand 乙 und die Autorität 丁."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 乙. 乙 ist in 午 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 丁. 丁 ist in 午 enthalten (Hauptstamm (本氣))."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [己巳](/guide/pillar-gi-sa) und die nächste [辛未](/guide/pillar-sin-mi)."
          },
          {
            "p": "Sie besteht aus [Yang-Metall (庚)](/guide/stem-gyeong) und [午 (Pferd)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-mi": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 辛未",
    "summary": "Wie Saju-Link die Tagessäule 辛未 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "辛未 ist die Tagessäule Nr. 8 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 辛未, ist der Tagesstamm 辛 (Yin-Metall) und der Tageszweig 未 (das Schaf). Im Sechzigerzyklus ist es die Kombination Nr. 8."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 辛 ist, „Yin-Metall (辛)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Ein geschliffener Edelstein. Feiner Geschmack und hohe Maßstäbe; Nachlässigkeit lässt sich schwer durchgehen lassen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 未 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 辛 aus gelesen, sind die Stämme, die 未 enthält, die folgenden. Der Hauptstamm (己) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 辛未",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 辛"
              ],
              "rows": [
                [
                  "Yin-Feuer (丁)",
                  "Reststamm (餘氣)",
                  "{hidMiYeo}",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Mittelstamm (中氣)",
                  "{hidMiJung}",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yin-Erde (己)",
                  "Hauptstamm (本氣)",
                  "{hidMiBon}",
                  "Ungewöhnliche Stütze (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 辛 als Tagesstamm ist der Beständige Wohlstand 甲 und die Autorität 丙."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 甲. 甲 ist in 未 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 丙. 丙 ist in 未 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [庚午](/guide/pillar-gyeong-o) und die nächste [壬申](/guide/pillar-im-sin)."
          },
          {
            "p": "Sie besteht aus [Yin-Metall (辛)](/guide/stem-sin) und [未 (Schaf)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sin": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 壬申",
    "summary": "Wie Saju-Link die Tagessäule 壬申 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "壬申 ist die Tagessäule Nr. 9 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 壬申, ist der Tagesstamm 壬 (Yang-Wasser) und der Tageszweig 申 (der Affe). Im Sechzigerzyklus ist es die Kombination Nr. 9."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 壬 ist, „Yang-Wasser (壬)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Fluss und Meer. Weiter Blick, mit einem Auge dafür, wohin die Dinge laufen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 申 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 壬 aus gelesen, sind die Stämme, die 申 enthält, die folgenden. Der Hauptstamm (庚) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 壬申",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 壬"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Reststamm (餘氣)",
                  "{hidSinYeo}",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Mittelstamm (中氣)",
                  "{hidSinJung}",
                  "Gefährte (比肩)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Hauptstamm (本氣)",
                  "{hidSinBon}",
                  "Ungewöhnliche Stütze (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 壬 als Tagesstamm ist der Beständige Wohlstand 丁 und die Autorität 己."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 丁. 丁 ist in 申 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 己. 己 ist in 申 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [辛未](/guide/pillar-sin-mi) und die nächste [癸酉](/guide/pillar-gye-yu)."
          },
          {
            "p": "Sie besteht aus [Yang-Wasser (壬)](/guide/stem-im) und [申 (Affe)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-yu": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 癸酉",
    "summary": "Wie Saju-Link die Tagessäule 癸酉 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "癸酉 ist die Tagessäule Nr. 10 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 癸酉, ist der Tagesstamm 癸 (Yin-Wasser) und der Tageszweig 酉 (der Hahn). Im Sechzigerzyklus ist es die Kombination Nr. 10."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 癸 ist, „Yin-Wasser (癸)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Tau und Regen. Es sickert leise ein und liest die Stimmung, bevor Worte fallen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 酉 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 癸 aus gelesen, sind die Stämme, die 酉 enthält, die folgenden. Der Hauptstamm (辛) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 癸酉",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 癸"
              ],
              "rows": [
                [
                  "Yang-Metall (庚)",
                  "Reststamm (餘氣)",
                  "{hidYuYeo}",
                  "Fürsorge (正印)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Hauptstamm (本氣)",
                  "{hidYuBon}",
                  "Ungewöhnliche Stütze (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 癸 als Tagesstamm ist der Beständige Wohlstand 丙 und die Autorität 戊."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 丙. 丙 ist in 酉 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 戊. 戊 ist in 酉 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [壬申](/guide/pillar-im-sin) und die nächste [甲戌](/guide/pillar-gap-sul)."
          },
          {
            "p": "Sie besteht aus [Yin-Wasser (癸)](/guide/stem-gye) und [酉 (Hahn)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sul": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 甲戌",
    "summary": "Wie Saju-Link die Tagessäule 甲戌 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "甲戌 ist die Tagessäule Nr. 11 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 甲戌, ist der Tagesstamm 甲 (Yang-Holz) und der Tageszweig 戌 (der Hund). Im Sechzigerzyklus ist es die Kombination Nr. 11."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 甲 ist, „Yang-Holz (甲)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Ein hoher Baum, der gerade wächst. Steht die Richtung fest, wankt er nicht, und er hält lieber aus, als sich zu beugen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 戌 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 甲 aus gelesen, sind die Stämme, die 戌 enthält, die folgenden. Der Hauptstamm (戊) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 甲戌",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 甲"
              ],
              "rows": [
                [
                  "Yin-Metall (辛)",
                  "Reststamm (餘氣)",
                  "{hidSulYeo}",
                  "Autorität (正官)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Mittelstamm (中氣)",
                  "{hidSulJung}",
                  "Störer (傷官)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Hauptstamm (本氣)",
                  "{hidSulBon}",
                  "Unerwarteter Gewinn (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 甲 als Tagesstamm ist der Beständige Wohlstand 己 und die Autorität 辛."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 己. 己 ist in 戌 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 辛. 辛 ist in 戌 enthalten (Reststamm (餘氣))."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [癸酉](/guide/pillar-gye-yu) und die nächste [乙亥](/guide/pillar-eul-hae)."
          },
          {
            "p": "Sie besteht aus [Yang-Holz (甲)](/guide/stem-gap) und [戌 (Hund)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-hae": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 乙亥",
    "summary": "Wie Saju-Link die Tagessäule 乙亥 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "乙亥 ist die Tagessäule Nr. 12 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 乙亥, ist der Tagesstamm 乙 (Yin-Holz) und der Tageszweig 亥 (das Schwein). Im Sechzigerzyklus ist es die Kombination Nr. 12."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 乙 ist, „Yin-Holz (乙)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Eine Ranke — biegsames Gras. Es beugt sich den Umständen, um weiterzukommen, und bricht dabei nicht.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 亥 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 乙 aus gelesen, sind die Stämme, die 亥 enthält, die folgenden. Der Hauptstamm (壬) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 乙亥",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 乙"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Reststamm (餘氣)",
                  "{hidHaeYeo}",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yang-Holz (甲)",
                  "Mittelstamm (中氣)",
                  "{hidHaeJung}",
                  "Rivale (劫財)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Hauptstamm (本氣)",
                  "{hidHaeBon}",
                  "Fürsorge (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 乙 als Tagesstamm ist der Beständige Wohlstand 戊 und die Autorität 庚."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 戊. 戊 ist in 亥 enthalten (Reststamm (餘氣))."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 庚. 庚 ist in 亥 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [甲戌](/guide/pillar-gap-sul) und die nächste [丙子](/guide/pillar-byeong-ja)."
          },
          {
            "p": "Sie besteht aus [Yin-Holz (乙)](/guide/stem-eul) und [亥 (Schwein)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-ja": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 丙子",
    "summary": "Wie Saju-Link die Tagessäule 丙子 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "丙子 ist die Tagessäule Nr. 13 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 丙子, ist der Tagesstamm 丙 (Yang-Feuer) und der Tageszweig 子 (die Ratte). Im Sechzigerzyklus ist es die Kombination Nr. 13."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 丙 ist, „Yang-Feuer (丙)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Die Mittagssonne. Gefühle liegen offen, der Raum wird hell, und nach vorn zu treten fällt leicht.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 子 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 丙 aus gelesen, sind die Stämme, die 子 enthält, die folgenden. Der Hauptstamm (癸) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 丙子",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 丙"
              ],
              "rows": [
                [
                  "Yang-Wasser (壬)",
                  "Reststamm (餘氣)",
                  "{hidJaYeo}",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Hauptstamm (本氣)",
                  "{hidJaBon}",
                  "Autorität (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 丙 als Tagesstamm ist der Beständige Wohlstand 辛 und die Autorität 癸."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 辛. 辛 ist in 子 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 癸. 癸 ist in 子 enthalten (Hauptstamm (本氣))."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [乙亥](/guide/pillar-eul-hae) und die nächste [丁丑](/guide/pillar-jeong-chuk)."
          },
          {
            "p": "Sie besteht aus [Yang-Feuer (丙)](/guide/stem-byeong) und [子 (Ratte)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-chuk": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 丁丑",
    "summary": "Wie Saju-Link die Tagessäule 丁丑 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "丁丑 ist die Tagessäule Nr. 14 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 丁丑, ist der Tagesstamm 丁 (Yin-Feuer) und der Tageszweig 丑 (der Ochse). Im Sechzigerzyklus ist es die Kombination Nr. 14."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 丁 ist, „Yin-Feuer (丁)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Kerzenlicht. Es brennt leise und lange und wärmt zuerst die Nächsten.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 丑 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 丁 aus gelesen, sind die Stämme, die 丑 enthält, die folgenden. Der Hauptstamm (己) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 丁丑",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 丁"
              ],
              "rows": [
                [
                  "Yin-Wasser (癸)",
                  "Reststamm (餘氣)",
                  "{hidChukYeo}",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Mittelstamm (中氣)",
                  "{hidChukJung}",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yin-Erde (己)",
                  "Hauptstamm (本氣)",
                  "{hidChukBon}",
                  "Ausdruck (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 丁 als Tagesstamm ist der Beständige Wohlstand 庚 und die Autorität 壬."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 庚. 庚 ist in 丑 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 壬. 壬 ist in 丑 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [丙子](/guide/pillar-byeong-ja) und die nächste [戊寅](/guide/pillar-mu-in)."
          },
          {
            "p": "Sie besteht aus [Yin-Feuer (丁)](/guide/stem-jeong) und [丑 (Ochse)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-in": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 戊寅",
    "summary": "Wie Saju-Link die Tagessäule 戊寅 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "戊寅 ist die Tagessäule Nr. 15 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 戊寅, ist der Tagesstamm 戊 (Yang-Erde) und der Tageszweig 寅 (der Tiger). Im Sechzigerzyklus ist es die Kombination Nr. 15."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 戊 ist, „Yang-Erde (戊)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Weites Land und Berge. Schwer zu erschüttern und gut zum Anlehnen, doch eine getroffene Entscheidung ändert sich nur langsam.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 寅 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 戊 aus gelesen, sind die Stämme, die 寅 enthält, die folgenden. Der Hauptstamm (甲) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 戊寅",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 戊"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Reststamm (餘氣)",
                  "{hidInYeo}",
                  "Gefährte (比肩)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Mittelstamm (中氣)",
                  "{hidInJung}",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yang-Holz (甲)",
                  "Hauptstamm (本氣)",
                  "{hidInBon}",
                  "Herausforderer (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 戊 als Tagesstamm ist der Beständige Wohlstand 癸 und die Autorität 乙."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 癸. 癸 ist in 寅 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 乙. 乙 ist in 寅 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [丁丑](/guide/pillar-jeong-chuk) und die nächste [己卯](/guide/pillar-gi-myo)."
          },
          {
            "p": "Sie besteht aus [Yang-Erde (戊)](/guide/stem-mu) und [寅 (Tiger)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-myo": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 己卯",
    "summary": "Wie Saju-Link die Tagessäule 己卯 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "己卯 ist die Tagessäule Nr. 16 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 己卯, ist der Tagesstamm 己 (Yin-Erde) und der Tageszweig 卯 (der Hase). Im Sechzigerzyklus ist es die Kombination Nr. 16."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 己 ist, „Yin-Erde (己)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Ackerboden. Er nimmt auf, was kommt, und zieht es groß — er pflegt, statt sich zu zeigen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 卯 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 己 aus gelesen, sind die Stämme, die 卯 enthält, die folgenden. Der Hauptstamm (乙) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 己卯",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 己"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Reststamm (餘氣)",
                  "{hidMyoYeo}",
                  "Autorität (正官)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Hauptstamm (本氣)",
                  "{hidMyoBon}",
                  "Herausforderer (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 己 als Tagesstamm ist der Beständige Wohlstand 壬 und die Autorität 甲."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 壬. 壬 ist in 卯 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 甲. 甲 ist in 卯 enthalten (Reststamm (餘氣))."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [戊寅](/guide/pillar-mu-in) und die nächste [庚辰](/guide/pillar-gyeong-jin)."
          },
          {
            "p": "Sie besteht aus [Yin-Erde (己)](/guide/stem-gi) und [卯 (Hase)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-jin": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 庚辰",
    "summary": "Wie Saju-Link die Tagessäule 庚辰 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "庚辰 ist die Tagessäule Nr. 17 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 庚辰, ist der Tagesstamm 庚 (Yang-Metall) und der Tageszweig 辰 (der Drache). Im Sechzigerzyklus ist es die Kombination Nr. 17."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 庚 ist, „Yang-Metall (庚)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Unbearbeitetes Eisen. Entschieden und klar, mit wenig Geduld für Dinge, die in der Schwebe bleiben.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 辰 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 庚 aus gelesen, sind die Stämme, die 辰 enthält, die folgenden. Der Hauptstamm (戊) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 庚辰",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 庚"
              ],
              "rows": [
                [
                  "Yin-Holz (乙)",
                  "Reststamm (餘氣)",
                  "{hidJinYeo}",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Mittelstamm (中氣)",
                  "{hidJinJung}",
                  "Störer (傷官)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Hauptstamm (本氣)",
                  "{hidJinBon}",
                  "Ungewöhnliche Stütze (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 庚 als Tagesstamm ist der Beständige Wohlstand 乙 und die Autorität 丁."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 乙. 乙 ist in 辰 enthalten (Reststamm (餘氣))."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 丁. 丁 ist in 辰 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [己卯](/guide/pillar-gi-myo) und die nächste [辛巳](/guide/pillar-sin-sa)."
          },
          {
            "p": "Sie besteht aus [Yang-Metall (庚)](/guide/stem-gyeong) und [辰 (Drache)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-sa": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 辛巳",
    "summary": "Wie Saju-Link die Tagessäule 辛巳 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "辛巳 ist die Tagessäule Nr. 18 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 辛巳, ist der Tagesstamm 辛 (Yin-Metall) und der Tageszweig 巳 (die Schlange). Im Sechzigerzyklus ist es die Kombination Nr. 18."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 辛 ist, „Yin-Metall (辛)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Ein geschliffener Edelstein. Feiner Geschmack und hohe Maßstäbe; Nachlässigkeit lässt sich schwer durchgehen lassen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 巳 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 辛 aus gelesen, sind die Stämme, die 巳 enthält, die folgenden. Der Hauptstamm (丙) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 辛巳",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 辛"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Reststamm (餘氣)",
                  "{hidSaYeo}",
                  "Fürsorge (正印)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Mittelstamm (中氣)",
                  "{hidSaJung}",
                  "Rivale (劫財)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Hauptstamm (本氣)",
                  "{hidSaBon}",
                  "Autorität (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 辛 als Tagesstamm ist der Beständige Wohlstand 甲 und die Autorität 丙."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 甲. 甲 ist in 巳 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 丙. 丙 ist in 巳 enthalten (Hauptstamm (本氣))."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [庚辰](/guide/pillar-gyeong-jin) und die nächste [壬午](/guide/pillar-im-o)."
          },
          {
            "p": "Sie besteht aus [Yin-Metall (辛)](/guide/stem-sin) und [巳 (Schlange)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-o": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 壬午",
    "summary": "Wie Saju-Link die Tagessäule 壬午 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "壬午 ist die Tagessäule Nr. 19 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 壬午, ist der Tagesstamm 壬 (Yang-Wasser) und der Tageszweig 午 (das Pferd). Im Sechzigerzyklus ist es die Kombination Nr. 19."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 壬 ist, „Yang-Wasser (壬)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Fluss und Meer. Weiter Blick, mit einem Auge dafür, wohin die Dinge laufen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 午 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 壬 aus gelesen, sind die Stämme, die 午 enthält, die folgenden. Der Hauptstamm (丁) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 壬午",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 壬"
              ],
              "rows": [
                [
                  "Yang-Feuer (丙)",
                  "Reststamm (餘氣)",
                  "{hidOYeo}",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yin-Erde (己)",
                  "Mittelstamm (中氣)",
                  "{hidOJung}",
                  "Autorität (正官)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Hauptstamm (本氣)",
                  "{hidOBon}",
                  "Beständiger Wohlstand (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 壬 als Tagesstamm ist der Beständige Wohlstand 丁 und die Autorität 己."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 丁. 丁 ist in 午 enthalten (Hauptstamm (本氣))."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 己. 己 ist in 午 enthalten (Mittelstamm (中氣))."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [辛巳](/guide/pillar-sin-sa) und die nächste [癸未](/guide/pillar-gye-mi)."
          },
          {
            "p": "Sie besteht aus [Yang-Wasser (壬)](/guide/stem-im) und [午 (Pferd)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-mi": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 癸未",
    "summary": "Wie Saju-Link die Tagessäule 癸未 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "癸未 ist die Tagessäule Nr. 20 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 癸未, ist der Tagesstamm 癸 (Yin-Wasser) und der Tageszweig 未 (das Schaf). Im Sechzigerzyklus ist es die Kombination Nr. 20."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 癸 ist, „Yin-Wasser (癸)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Tau und Regen. Es sickert leise ein und liest die Stimmung, bevor Worte fallen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 未 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 癸 aus gelesen, sind die Stämme, die 未 enthält, die folgenden. Der Hauptstamm (己) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 癸未",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 癸"
              ],
              "rows": [
                [
                  "Yin-Feuer (丁)",
                  "Reststamm (餘氣)",
                  "{hidMiYeo}",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Mittelstamm (中氣)",
                  "{hidMiJung}",
                  "Ausdruck (食神)"
                ],
                [
                  "Yin-Erde (己)",
                  "Hauptstamm (本氣)",
                  "{hidMiBon}",
                  "Herausforderer (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 癸 als Tagesstamm ist der Beständige Wohlstand 丙 und die Autorität 戊."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 丙. 丙 ist in 未 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 戊. 戊 ist in 未 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [壬午](/guide/pillar-im-o) und die nächste [甲申](/guide/pillar-gap-sin)."
          },
          {
            "p": "Sie besteht aus [Yin-Wasser (癸)](/guide/stem-gye) und [未 (Schaf)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sin": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 甲申",
    "summary": "Wie Saju-Link die Tagessäule 甲申 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "甲申 ist die Tagessäule Nr. 21 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 甲申, ist der Tagesstamm 甲 (Yang-Holz) und der Tageszweig 申 (der Affe). Im Sechzigerzyklus ist es die Kombination Nr. 21."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 甲 ist, „Yang-Holz (甲)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Ein hoher Baum, der gerade wächst. Steht die Richtung fest, wankt er nicht, und er hält lieber aus, als sich zu beugen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 申 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 甲 aus gelesen, sind die Stämme, die 申 enthält, die folgenden. Der Hauptstamm (庚) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 甲申",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 甲"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Reststamm (餘氣)",
                  "{hidSinYeo}",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Mittelstamm (中氣)",
                  "{hidSinJung}",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Hauptstamm (本氣)",
                  "{hidSinBon}",
                  "Herausforderer (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 甲 als Tagesstamm ist der Beständige Wohlstand 己 und die Autorität 辛."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 己. 己 ist in 申 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 辛. 辛 ist in 申 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [癸未](/guide/pillar-gye-mi) und die nächste [乙酉](/guide/pillar-eul-yu)."
          },
          {
            "p": "Sie besteht aus [Yang-Holz (甲)](/guide/stem-gap) und [申 (Affe)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-yu": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 乙酉",
    "summary": "Wie Saju-Link die Tagessäule 乙酉 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "乙酉 ist die Tagessäule Nr. 22 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 乙酉, ist der Tagesstamm 乙 (Yin-Holz) und der Tageszweig 酉 (der Hahn). Im Sechzigerzyklus ist es die Kombination Nr. 22."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 乙 ist, „Yin-Holz (乙)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Eine Ranke — biegsames Gras. Es beugt sich den Umständen, um weiterzukommen, und bricht dabei nicht.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 酉 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 乙 aus gelesen, sind die Stämme, die 酉 enthält, die folgenden. Der Hauptstamm (辛) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 乙酉",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 乙"
              ],
              "rows": [
                [
                  "Yang-Metall (庚)",
                  "Reststamm (餘氣)",
                  "{hidYuYeo}",
                  "Autorität (正官)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Hauptstamm (本氣)",
                  "{hidYuBon}",
                  "Herausforderer (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 乙 als Tagesstamm ist der Beständige Wohlstand 戊 und die Autorität 庚."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 戊. 戊 ist in 酉 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 庚. 庚 ist in 酉 enthalten (Reststamm (餘氣))."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [甲申](/guide/pillar-gap-sin) und die nächste [丙戌](/guide/pillar-byeong-sul)."
          },
          {
            "p": "Sie besteht aus [Yin-Holz (乙)](/guide/stem-eul) und [酉 (Hahn)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sul": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 丙戌",
    "summary": "Wie Saju-Link die Tagessäule 丙戌 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "丙戌 ist die Tagessäule Nr. 23 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 丙戌, ist der Tagesstamm 丙 (Yang-Feuer) und der Tageszweig 戌 (der Hund). Im Sechzigerzyklus ist es die Kombination Nr. 23."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 丙 ist, „Yang-Feuer (丙)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Die Mittagssonne. Gefühle liegen offen, der Raum wird hell, und nach vorn zu treten fällt leicht.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 戌 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 丙 aus gelesen, sind die Stämme, die 戌 enthält, die folgenden. Der Hauptstamm (戊) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 丙戌",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 丙"
              ],
              "rows": [
                [
                  "Yin-Metall (辛)",
                  "Reststamm (餘氣)",
                  "{hidSulYeo}",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Mittelstamm (中氣)",
                  "{hidSulJung}",
                  "Rivale (劫財)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Hauptstamm (本氣)",
                  "{hidSulBon}",
                  "Ausdruck (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 丙 als Tagesstamm ist der Beständige Wohlstand 辛 und die Autorität 癸."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 辛. 辛 ist in 戌 enthalten (Reststamm (餘氣))."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 癸. 癸 ist in 戌 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [乙酉](/guide/pillar-eul-yu) und die nächste [丁亥](/guide/pillar-jeong-hae)."
          },
          {
            "p": "Sie besteht aus [Yang-Feuer (丙)](/guide/stem-byeong) und [戌 (Hund)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-hae": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 丁亥",
    "summary": "Wie Saju-Link die Tagessäule 丁亥 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "丁亥 ist die Tagessäule Nr. 24 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 丁亥, ist der Tagesstamm 丁 (Yin-Feuer) und der Tageszweig 亥 (das Schwein). Im Sechzigerzyklus ist es die Kombination Nr. 24."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 丁 ist, „Yin-Feuer (丁)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Kerzenlicht. Es brennt leise und lange und wärmt zuerst die Nächsten.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 亥 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 丁 aus gelesen, sind die Stämme, die 亥 enthält, die folgenden. Der Hauptstamm (壬) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 丁亥",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 丁"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Reststamm (餘氣)",
                  "{hidHaeYeo}",
                  "Störer (傷官)"
                ],
                [
                  "Yang-Holz (甲)",
                  "Mittelstamm (中氣)",
                  "{hidHaeJung}",
                  "Fürsorge (正印)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Hauptstamm (本氣)",
                  "{hidHaeBon}",
                  "Autorität (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 丁 als Tagesstamm ist der Beständige Wohlstand 庚 und die Autorität 壬."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 庚. 庚 ist in 亥 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 壬. 壬 ist in 亥 enthalten (Hauptstamm (本氣))."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [丙戌](/guide/pillar-byeong-sul) und die nächste [戊子](/guide/pillar-mu-ja)."
          },
          {
            "p": "Sie besteht aus [Yin-Feuer (丁)](/guide/stem-jeong) und [亥 (Schwein)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-ja": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 戊子",
    "summary": "Wie Saju-Link die Tagessäule 戊子 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "戊子 ist die Tagessäule Nr. 25 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 戊子, ist der Tagesstamm 戊 (Yang-Erde) und der Tageszweig 子 (die Ratte). Im Sechzigerzyklus ist es die Kombination Nr. 25."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 戊 ist, „Yang-Erde (戊)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Weites Land und Berge. Schwer zu erschüttern und gut zum Anlehnen, doch eine getroffene Entscheidung ändert sich nur langsam.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 子 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 戊 aus gelesen, sind die Stämme, die 子 enthält, die folgenden. Der Hauptstamm (癸) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 戊子",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 戊"
              ],
              "rows": [
                [
                  "Yang-Wasser (壬)",
                  "Reststamm (餘氣)",
                  "{hidJaYeo}",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Hauptstamm (本氣)",
                  "{hidJaBon}",
                  "Beständiger Wohlstand (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 戊 als Tagesstamm ist der Beständige Wohlstand 癸 und die Autorität 乙."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 癸. 癸 ist in 子 enthalten (Hauptstamm (本氣))."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 乙. 乙 ist in 子 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [丁亥](/guide/pillar-jeong-hae) und die nächste [己丑](/guide/pillar-gi-chuk)."
          },
          {
            "p": "Sie besteht aus [Yang-Erde (戊)](/guide/stem-mu) und [子 (Ratte)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-chuk": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 己丑",
    "summary": "Wie Saju-Link die Tagessäule 己丑 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "己丑 ist die Tagessäule Nr. 26 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 己丑, ist der Tagesstamm 己 (Yin-Erde) und der Tageszweig 丑 (der Ochse). Im Sechzigerzyklus ist es die Kombination Nr. 26."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 己 ist, „Yin-Erde (己)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Ackerboden. Er nimmt auf, was kommt, und zieht es groß — er pflegt, statt sich zu zeigen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 丑 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 己 aus gelesen, sind die Stämme, die 丑 enthält, die folgenden. Der Hauptstamm (己) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 己丑",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 己"
              ],
              "rows": [
                [
                  "Yin-Wasser (癸)",
                  "Reststamm (餘氣)",
                  "{hidChukYeo}",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Mittelstamm (中氣)",
                  "{hidChukJung}",
                  "Ausdruck (食神)"
                ],
                [
                  "Yin-Erde (己)",
                  "Hauptstamm (本氣)",
                  "{hidChukBon}",
                  "Gefährte (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 己 als Tagesstamm ist der Beständige Wohlstand 壬 und die Autorität 甲."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 壬. 壬 ist in 丑 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 甲. 甲 ist in 丑 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [戊子](/guide/pillar-mu-ja) und die nächste [庚寅](/guide/pillar-gyeong-in)."
          },
          {
            "p": "Sie besteht aus [Yin-Erde (己)](/guide/stem-gi) und [丑 (Ochse)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-in": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 庚寅",
    "summary": "Wie Saju-Link die Tagessäule 庚寅 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "庚寅 ist die Tagessäule Nr. 27 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 庚寅, ist der Tagesstamm 庚 (Yang-Metall) und der Tageszweig 寅 (der Tiger). Im Sechzigerzyklus ist es die Kombination Nr. 27."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 庚 ist, „Yang-Metall (庚)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Unbearbeitetes Eisen. Entschieden und klar, mit wenig Geduld für Dinge, die in der Schwebe bleiben.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 寅 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 庚 aus gelesen, sind die Stämme, die 寅 enthält, die folgenden. Der Hauptstamm (甲) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 庚寅",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 庚"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Reststamm (餘氣)",
                  "{hidInYeo}",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Mittelstamm (中氣)",
                  "{hidInJung}",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yang-Holz (甲)",
                  "Hauptstamm (本氣)",
                  "{hidInBon}",
                  "Unerwarteter Gewinn (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 庚 als Tagesstamm ist der Beständige Wohlstand 乙 und die Autorität 丁."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 乙. 乙 ist in 寅 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 丁. 丁 ist in 寅 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [己丑](/guide/pillar-gi-chuk) und die nächste [辛卯](/guide/pillar-sin-myo)."
          },
          {
            "p": "Sie besteht aus [Yang-Metall (庚)](/guide/stem-gyeong) und [寅 (Tiger)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-myo": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 辛卯",
    "summary": "Wie Saju-Link die Tagessäule 辛卯 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "辛卯 ist die Tagessäule Nr. 28 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 辛卯, ist der Tagesstamm 辛 (Yin-Metall) und der Tageszweig 卯 (der Hase). Im Sechzigerzyklus ist es die Kombination Nr. 28."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 辛 ist, „Yin-Metall (辛)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Ein geschliffener Edelstein. Feiner Geschmack und hohe Maßstäbe; Nachlässigkeit lässt sich schwer durchgehen lassen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 卯 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 辛 aus gelesen, sind die Stämme, die 卯 enthält, die folgenden. Der Hauptstamm (乙) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 辛卯",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 辛"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Reststamm (餘氣)",
                  "{hidMyoYeo}",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Hauptstamm (本氣)",
                  "{hidMyoBon}",
                  "Unerwarteter Gewinn (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 辛 als Tagesstamm ist der Beständige Wohlstand 甲 und die Autorität 丙."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 甲. 甲 ist in 卯 enthalten (Reststamm (餘氣))."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 丙. 丙 ist in 卯 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [庚寅](/guide/pillar-gyeong-in) und die nächste [壬辰](/guide/pillar-im-jin)."
          },
          {
            "p": "Sie besteht aus [Yin-Metall (辛)](/guide/stem-sin) und [卯 (Hase)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-jin": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 壬辰",
    "summary": "Wie Saju-Link die Tagessäule 壬辰 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "壬辰 ist die Tagessäule Nr. 29 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 壬辰, ist der Tagesstamm 壬 (Yang-Wasser) und der Tageszweig 辰 (der Drache). Im Sechzigerzyklus ist es die Kombination Nr. 29."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 壬 ist, „Yang-Wasser (壬)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Fluss und Meer. Weiter Blick, mit einem Auge dafür, wohin die Dinge laufen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 辰 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 壬 aus gelesen, sind die Stämme, die 辰 enthält, die folgenden. Der Hauptstamm (戊) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 壬辰",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 壬"
              ],
              "rows": [
                [
                  "Yin-Holz (乙)",
                  "Reststamm (餘氣)",
                  "{hidJinYeo}",
                  "Störer (傷官)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Mittelstamm (中氣)",
                  "{hidJinJung}",
                  "Rivale (劫財)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Hauptstamm (本氣)",
                  "{hidJinBon}",
                  "Herausforderer (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 壬 als Tagesstamm ist der Beständige Wohlstand 丁 und die Autorität 己."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 丁. 丁 ist in 辰 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 己. 己 ist in 辰 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [辛卯](/guide/pillar-sin-myo) und die nächste [癸巳](/guide/pillar-gye-sa)."
          },
          {
            "p": "Sie besteht aus [Yang-Wasser (壬)](/guide/stem-im) und [辰 (Drache)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-sa": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 癸巳",
    "summary": "Wie Saju-Link die Tagessäule 癸巳 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "癸巳 ist die Tagessäule Nr. 30 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 癸巳, ist der Tagesstamm 癸 (Yin-Wasser) und der Tageszweig 巳 (die Schlange). Im Sechzigerzyklus ist es die Kombination Nr. 30."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 癸 ist, „Yin-Wasser (癸)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Tau und Regen. Es sickert leise ein und liest die Stimmung, bevor Worte fallen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 巳 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 癸 aus gelesen, sind die Stämme, die 巳 enthält, die folgenden. Der Hauptstamm (丙) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 癸巳",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 癸"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Reststamm (餘氣)",
                  "{hidSaYeo}",
                  "Autorität (正官)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Mittelstamm (中氣)",
                  "{hidSaJung}",
                  "Fürsorge (正印)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Hauptstamm (本氣)",
                  "{hidSaBon}",
                  "Beständiger Wohlstand (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 癸 als Tagesstamm ist der Beständige Wohlstand 丙 und die Autorität 戊."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 丙. 丙 ist in 巳 enthalten (Hauptstamm (本氣))."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 戊. 戊 ist in 巳 enthalten (Reststamm (餘氣))."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [壬辰](/guide/pillar-im-jin) und die nächste [甲午](/guide/pillar-gap-o)."
          },
          {
            "p": "Sie besteht aus [Yin-Wasser (癸)](/guide/stem-gye) und [巳 (Schlange)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-o": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 甲午",
    "summary": "Wie Saju-Link die Tagessäule 甲午 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "甲午 ist die Tagessäule Nr. 31 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 甲午, ist der Tagesstamm 甲 (Yang-Holz) und der Tageszweig 午 (das Pferd). Im Sechzigerzyklus ist es die Kombination Nr. 31."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 甲 ist, „Yang-Holz (甲)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Ein hoher Baum, der gerade wächst. Steht die Richtung fest, wankt er nicht, und er hält lieber aus, als sich zu beugen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 午 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 甲 aus gelesen, sind die Stämme, die 午 enthält, die folgenden. Der Hauptstamm (丁) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 甲午",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 甲"
              ],
              "rows": [
                [
                  "Yang-Feuer (丙)",
                  "Reststamm (餘氣)",
                  "{hidOYeo}",
                  "Ausdruck (食神)"
                ],
                [
                  "Yin-Erde (己)",
                  "Mittelstamm (中氣)",
                  "{hidOJung}",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Hauptstamm (本氣)",
                  "{hidOBon}",
                  "Störer (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 甲 als Tagesstamm ist der Beständige Wohlstand 己 und die Autorität 辛."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 己. 己 ist in 午 enthalten (Mittelstamm (中氣))."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 辛. 辛 ist in 午 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [癸巳](/guide/pillar-gye-sa) und die nächste [乙未](/guide/pillar-eul-mi)."
          },
          {
            "p": "Sie besteht aus [Yang-Holz (甲)](/guide/stem-gap) und [午 (Pferd)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-mi": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 乙未",
    "summary": "Wie Saju-Link die Tagessäule 乙未 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "乙未 ist die Tagessäule Nr. 32 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 乙未, ist der Tagesstamm 乙 (Yin-Holz) und der Tageszweig 未 (das Schaf). Im Sechzigerzyklus ist es die Kombination Nr. 32."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 乙 ist, „Yin-Holz (乙)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Eine Ranke — biegsames Gras. Es beugt sich den Umständen, um weiterzukommen, und bricht dabei nicht.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 未 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 乙 aus gelesen, sind die Stämme, die 未 enthält, die folgenden. Der Hauptstamm (己) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 乙未",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 乙"
              ],
              "rows": [
                [
                  "Yin-Feuer (丁)",
                  "Reststamm (餘氣)",
                  "{hidMiYeo}",
                  "Ausdruck (食神)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Mittelstamm (中氣)",
                  "{hidMiJung}",
                  "Gefährte (比肩)"
                ],
                [
                  "Yin-Erde (己)",
                  "Hauptstamm (本氣)",
                  "{hidMiBon}",
                  "Unerwarteter Gewinn (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 乙 als Tagesstamm ist der Beständige Wohlstand 戊 und die Autorität 庚."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 戊. 戊 ist in 未 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 庚. 庚 ist in 未 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [甲午](/guide/pillar-gap-o) und die nächste [丙申](/guide/pillar-byeong-sin)."
          },
          {
            "p": "Sie besteht aus [Yin-Holz (乙)](/guide/stem-eul) und [未 (Schaf)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sin": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 丙申",
    "summary": "Wie Saju-Link die Tagessäule 丙申 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "丙申 ist die Tagessäule Nr. 33 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 丙申, ist der Tagesstamm 丙 (Yang-Feuer) und der Tageszweig 申 (der Affe). Im Sechzigerzyklus ist es die Kombination Nr. 33."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 丙 ist, „Yang-Feuer (丙)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Die Mittagssonne. Gefühle liegen offen, der Raum wird hell, und nach vorn zu treten fällt leicht.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 申 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 丙 aus gelesen, sind die Stämme, die 申 enthält, die folgenden. Der Hauptstamm (庚) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 丙申",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 丙"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Reststamm (餘氣)",
                  "{hidSinYeo}",
                  "Ausdruck (食神)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Mittelstamm (中氣)",
                  "{hidSinJung}",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Hauptstamm (本氣)",
                  "{hidSinBon}",
                  "Unerwarteter Gewinn (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 丙 als Tagesstamm ist der Beständige Wohlstand 辛 und die Autorität 癸."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 辛. 辛 ist in 申 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 癸. 癸 ist in 申 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [乙未](/guide/pillar-eul-mi) und die nächste [丁酉](/guide/pillar-jeong-yu)."
          },
          {
            "p": "Sie besteht aus [Yang-Feuer (丙)](/guide/stem-byeong) und [申 (Affe)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-yu": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 丁酉",
    "summary": "Wie Saju-Link die Tagessäule 丁酉 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "丁酉 ist die Tagessäule Nr. 34 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 丁酉, ist der Tagesstamm 丁 (Yin-Feuer) und der Tageszweig 酉 (der Hahn). Im Sechzigerzyklus ist es die Kombination Nr. 34."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 丁 ist, „Yin-Feuer (丁)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Kerzenlicht. Es brennt leise und lange und wärmt zuerst die Nächsten.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 酉 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 丁 aus gelesen, sind die Stämme, die 酉 enthält, die folgenden. Der Hauptstamm (辛) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 丁酉",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 丁"
              ],
              "rows": [
                [
                  "Yang-Metall (庚)",
                  "Reststamm (餘氣)",
                  "{hidYuYeo}",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Hauptstamm (本氣)",
                  "{hidYuBon}",
                  "Unerwarteter Gewinn (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 丁 als Tagesstamm ist der Beständige Wohlstand 庚 und die Autorität 壬."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 庚. 庚 ist in 酉 enthalten (Reststamm (餘氣))."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 壬. 壬 ist in 酉 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [丙申](/guide/pillar-byeong-sin) und die nächste [戊戌](/guide/pillar-mu-sul)."
          },
          {
            "p": "Sie besteht aus [Yin-Feuer (丁)](/guide/stem-jeong) und [酉 (Hahn)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sul": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 戊戌",
    "summary": "Wie Saju-Link die Tagessäule 戊戌 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "戊戌 ist die Tagessäule Nr. 35 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 戊戌, ist der Tagesstamm 戊 (Yang-Erde) und der Tageszweig 戌 (der Hund). Im Sechzigerzyklus ist es die Kombination Nr. 35."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 戊 ist, „Yang-Erde (戊)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Weites Land und Berge. Schwer zu erschüttern und gut zum Anlehnen, doch eine getroffene Entscheidung ändert sich nur langsam.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 戌 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 戊 aus gelesen, sind die Stämme, die 戌 enthält, die folgenden. Der Hauptstamm (戊) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 戊戌",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 戊"
              ],
              "rows": [
                [
                  "Yin-Metall (辛)",
                  "Reststamm (餘氣)",
                  "{hidSulYeo}",
                  "Störer (傷官)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Mittelstamm (中氣)",
                  "{hidSulJung}",
                  "Fürsorge (正印)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Hauptstamm (本氣)",
                  "{hidSulBon}",
                  "Gefährte (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 戊 als Tagesstamm ist der Beständige Wohlstand 癸 und die Autorität 乙."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 癸. 癸 ist in 戌 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 乙. 乙 ist in 戌 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [丁酉](/guide/pillar-jeong-yu) und die nächste [己亥](/guide/pillar-gi-hae)."
          },
          {
            "p": "Sie besteht aus [Yang-Erde (戊)](/guide/stem-mu) und [戌 (Hund)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-hae": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 己亥",
    "summary": "Wie Saju-Link die Tagessäule 己亥 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "己亥 ist die Tagessäule Nr. 36 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 己亥, ist der Tagesstamm 己 (Yin-Erde) und der Tageszweig 亥 (das Schwein). Im Sechzigerzyklus ist es die Kombination Nr. 36."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 己 ist, „Yin-Erde (己)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Ackerboden. Er nimmt auf, was kommt, und zieht es groß — er pflegt, statt sich zu zeigen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 亥 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 己 aus gelesen, sind die Stämme, die 亥 enthält, die folgenden. Der Hauptstamm (壬) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 己亥",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 己"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Reststamm (餘氣)",
                  "{hidHaeYeo}",
                  "Rivale (劫財)"
                ],
                [
                  "Yang-Holz (甲)",
                  "Mittelstamm (中氣)",
                  "{hidHaeJung}",
                  "Autorität (正官)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Hauptstamm (本氣)",
                  "{hidHaeBon}",
                  "Beständiger Wohlstand (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 己 als Tagesstamm ist der Beständige Wohlstand 壬 und die Autorität 甲."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 壬. 壬 ist in 亥 enthalten (Hauptstamm (本氣))."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 甲. 甲 ist in 亥 enthalten (Mittelstamm (中氣))."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [戊戌](/guide/pillar-mu-sul) und die nächste [庚子](/guide/pillar-gyeong-ja)."
          },
          {
            "p": "Sie besteht aus [Yin-Erde (己)](/guide/stem-gi) und [亥 (Schwein)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-ja": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 庚子",
    "summary": "Wie Saju-Link die Tagessäule 庚子 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "庚子 ist die Tagessäule Nr. 37 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 庚子, ist der Tagesstamm 庚 (Yang-Metall) und der Tageszweig 子 (die Ratte). Im Sechzigerzyklus ist es die Kombination Nr. 37."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 庚 ist, „Yang-Metall (庚)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Unbearbeitetes Eisen. Entschieden und klar, mit wenig Geduld für Dinge, die in der Schwebe bleiben.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 子 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 庚 aus gelesen, sind die Stämme, die 子 enthält, die folgenden. Der Hauptstamm (癸) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 庚子",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 庚"
              ],
              "rows": [
                [
                  "Yang-Wasser (壬)",
                  "Reststamm (餘氣)",
                  "{hidJaYeo}",
                  "Ausdruck (食神)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Hauptstamm (本氣)",
                  "{hidJaBon}",
                  "Störer (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 庚 als Tagesstamm ist der Beständige Wohlstand 乙 und die Autorität 丁."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 乙. 乙 ist in 子 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 丁. 丁 ist in 子 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [己亥](/guide/pillar-gi-hae) und die nächste [辛丑](/guide/pillar-sin-chuk)."
          },
          {
            "p": "Sie besteht aus [Yang-Metall (庚)](/guide/stem-gyeong) und [子 (Ratte)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-chuk": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 辛丑",
    "summary": "Wie Saju-Link die Tagessäule 辛丑 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "辛丑 ist die Tagessäule Nr. 38 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 辛丑, ist der Tagesstamm 辛 (Yin-Metall) und der Tageszweig 丑 (der Ochse). Im Sechzigerzyklus ist es die Kombination Nr. 38."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 辛 ist, „Yin-Metall (辛)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Ein geschliffener Edelstein. Feiner Geschmack und hohe Maßstäbe; Nachlässigkeit lässt sich schwer durchgehen lassen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 丑 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 辛 aus gelesen, sind die Stämme, die 丑 enthält, die folgenden. Der Hauptstamm (己) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 辛丑",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 辛"
              ],
              "rows": [
                [
                  "Yin-Wasser (癸)",
                  "Reststamm (餘氣)",
                  "{hidChukYeo}",
                  "Ausdruck (食神)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Mittelstamm (中氣)",
                  "{hidChukJung}",
                  "Gefährte (比肩)"
                ],
                [
                  "Yin-Erde (己)",
                  "Hauptstamm (本氣)",
                  "{hidChukBon}",
                  "Ungewöhnliche Stütze (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 辛 als Tagesstamm ist der Beständige Wohlstand 甲 und die Autorität 丙."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 甲. 甲 ist in 丑 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 丙. 丙 ist in 丑 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [庚子](/guide/pillar-gyeong-ja) und die nächste [壬寅](/guide/pillar-im-in)."
          },
          {
            "p": "Sie besteht aus [Yin-Metall (辛)](/guide/stem-sin) und [丑 (Ochse)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-in": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 壬寅",
    "summary": "Wie Saju-Link die Tagessäule 壬寅 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "壬寅 ist die Tagessäule Nr. 39 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 壬寅, ist der Tagesstamm 壬 (Yang-Wasser) und der Tageszweig 寅 (der Tiger). Im Sechzigerzyklus ist es die Kombination Nr. 39."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 壬 ist, „Yang-Wasser (壬)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Fluss und Meer. Weiter Blick, mit einem Auge dafür, wohin die Dinge laufen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 寅 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 壬 aus gelesen, sind die Stämme, die 寅 enthält, die folgenden. Der Hauptstamm (甲) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 壬寅",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 壬"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Reststamm (餘氣)",
                  "{hidInYeo}",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Mittelstamm (中氣)",
                  "{hidInJung}",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yang-Holz (甲)",
                  "Hauptstamm (本氣)",
                  "{hidInBon}",
                  "Ausdruck (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 壬 als Tagesstamm ist der Beständige Wohlstand 丁 und die Autorität 己."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 丁. 丁 ist in 寅 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 己. 己 ist in 寅 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [辛丑](/guide/pillar-sin-chuk) und die nächste [癸卯](/guide/pillar-gye-myo)."
          },
          {
            "p": "Sie besteht aus [Yang-Wasser (壬)](/guide/stem-im) und [寅 (Tiger)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-myo": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 癸卯",
    "summary": "Wie Saju-Link die Tagessäule 癸卯 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "癸卯 ist die Tagessäule Nr. 40 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 癸卯, ist der Tagesstamm 癸 (Yin-Wasser) und der Tageszweig 卯 (der Hase). Im Sechzigerzyklus ist es die Kombination Nr. 40."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 癸 ist, „Yin-Wasser (癸)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Tau und Regen. Es sickert leise ein und liest die Stimmung, bevor Worte fallen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 卯 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 癸 aus gelesen, sind die Stämme, die 卯 enthält, die folgenden. Der Hauptstamm (乙) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 癸卯",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 癸"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Reststamm (餘氣)",
                  "{hidMyoYeo}",
                  "Störer (傷官)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Hauptstamm (本氣)",
                  "{hidMyoBon}",
                  "Ausdruck (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 癸 als Tagesstamm ist der Beständige Wohlstand 丙 und die Autorität 戊."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 丙. 丙 ist in 卯 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 戊. 戊 ist in 卯 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [壬寅](/guide/pillar-im-in) und die nächste [甲辰](/guide/pillar-gap-jin)."
          },
          {
            "p": "Sie besteht aus [Yin-Wasser (癸)](/guide/stem-gye) und [卯 (Hase)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-jin": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 甲辰",
    "summary": "Wie Saju-Link die Tagessäule 甲辰 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "甲辰 ist die Tagessäule Nr. 41 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 甲辰, ist der Tagesstamm 甲 (Yang-Holz) und der Tageszweig 辰 (der Drache). Im Sechzigerzyklus ist es die Kombination Nr. 41."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 甲 ist, „Yang-Holz (甲)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Ein hoher Baum, der gerade wächst. Steht die Richtung fest, wankt er nicht, und er hält lieber aus, als sich zu beugen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 辰 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 甲 aus gelesen, sind die Stämme, die 辰 enthält, die folgenden. Der Hauptstamm (戊) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 甲辰",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 甲"
              ],
              "rows": [
                [
                  "Yin-Holz (乙)",
                  "Reststamm (餘氣)",
                  "{hidJinYeo}",
                  "Rivale (劫財)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Mittelstamm (中氣)",
                  "{hidJinJung}",
                  "Fürsorge (正印)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Hauptstamm (本氣)",
                  "{hidJinBon}",
                  "Unerwarteter Gewinn (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 甲 als Tagesstamm ist der Beständige Wohlstand 己 und die Autorität 辛."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 己. 己 ist in 辰 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 辛. 辛 ist in 辰 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [癸卯](/guide/pillar-gye-myo) und die nächste [乙巳](/guide/pillar-eul-sa)."
          },
          {
            "p": "Sie besteht aus [Yang-Holz (甲)](/guide/stem-gap) und [辰 (Drache)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-sa": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 乙巳",
    "summary": "Wie Saju-Link die Tagessäule 乙巳 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "乙巳 ist die Tagessäule Nr. 42 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 乙巳, ist der Tagesstamm 乙 (Yin-Holz) und der Tageszweig 巳 (die Schlange). Im Sechzigerzyklus ist es die Kombination Nr. 42."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 乙 ist, „Yin-Holz (乙)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Eine Ranke — biegsames Gras. Es beugt sich den Umständen, um weiterzukommen, und bricht dabei nicht.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 巳 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 乙 aus gelesen, sind die Stämme, die 巳 enthält, die folgenden. Der Hauptstamm (丙) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 乙巳",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 乙"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Reststamm (餘氣)",
                  "{hidSaYeo}",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Mittelstamm (中氣)",
                  "{hidSaJung}",
                  "Autorität (正官)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Hauptstamm (本氣)",
                  "{hidSaBon}",
                  "Störer (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 乙 als Tagesstamm ist der Beständige Wohlstand 戊 und die Autorität 庚."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 戊. 戊 ist in 巳 enthalten (Reststamm (餘氣))."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 庚. 庚 ist in 巳 enthalten (Mittelstamm (中氣))."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [甲辰](/guide/pillar-gap-jin) und die nächste [丙午](/guide/pillar-byeong-o)."
          },
          {
            "p": "Sie besteht aus [Yin-Holz (乙)](/guide/stem-eul) und [巳 (Schlange)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-o": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 丙午",
    "summary": "Wie Saju-Link die Tagessäule 丙午 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "丙午 ist die Tagessäule Nr. 43 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 丙午, ist der Tagesstamm 丙 (Yang-Feuer) und der Tageszweig 午 (das Pferd). Im Sechzigerzyklus ist es die Kombination Nr. 43."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 丙 ist, „Yang-Feuer (丙)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Die Mittagssonne. Gefühle liegen offen, der Raum wird hell, und nach vorn zu treten fällt leicht.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 午 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 丙 aus gelesen, sind die Stämme, die 午 enthält, die folgenden. Der Hauptstamm (丁) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 丙午",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 丙"
              ],
              "rows": [
                [
                  "Yang-Feuer (丙)",
                  "Reststamm (餘氣)",
                  "{hidOYeo}",
                  "Gefährte (比肩)"
                ],
                [
                  "Yin-Erde (己)",
                  "Mittelstamm (中氣)",
                  "{hidOJung}",
                  "Störer (傷官)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Hauptstamm (本氣)",
                  "{hidOBon}",
                  "Rivale (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 丙 als Tagesstamm ist der Beständige Wohlstand 辛 und die Autorität 癸."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 辛. 辛 ist in 午 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 癸. 癸 ist in 午 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [乙巳](/guide/pillar-eul-sa) und die nächste [丁未](/guide/pillar-jeong-mi)."
          },
          {
            "p": "Sie besteht aus [Yang-Feuer (丙)](/guide/stem-byeong) und [午 (Pferd)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-mi": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 丁未",
    "summary": "Wie Saju-Link die Tagessäule 丁未 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "丁未 ist die Tagessäule Nr. 44 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 丁未, ist der Tagesstamm 丁 (Yin-Feuer) und der Tageszweig 未 (das Schaf). Im Sechzigerzyklus ist es die Kombination Nr. 44."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 丁 ist, „Yin-Feuer (丁)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Kerzenlicht. Es brennt leise und lange und wärmt zuerst die Nächsten.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 未 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 丁 aus gelesen, sind die Stämme, die 未 enthält, die folgenden. Der Hauptstamm (己) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 丁未",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 丁"
              ],
              "rows": [
                [
                  "Yin-Feuer (丁)",
                  "Reststamm (餘氣)",
                  "{hidMiYeo}",
                  "Gefährte (比肩)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Mittelstamm (中氣)",
                  "{hidMiJung}",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yin-Erde (己)",
                  "Hauptstamm (本氣)",
                  "{hidMiBon}",
                  "Ausdruck (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 丁 als Tagesstamm ist der Beständige Wohlstand 庚 und die Autorität 壬."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 庚. 庚 ist in 未 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 壬. 壬 ist in 未 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [丙午](/guide/pillar-byeong-o) und die nächste [戊申](/guide/pillar-mu-sin)."
          },
          {
            "p": "Sie besteht aus [Yin-Feuer (丁)](/guide/stem-jeong) und [未 (Schaf)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sin": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 戊申",
    "summary": "Wie Saju-Link die Tagessäule 戊申 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "戊申 ist die Tagessäule Nr. 45 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 戊申, ist der Tagesstamm 戊 (Yang-Erde) und der Tageszweig 申 (der Affe). Im Sechzigerzyklus ist es die Kombination Nr. 45."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 戊 ist, „Yang-Erde (戊)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Weites Land und Berge. Schwer zu erschüttern und gut zum Anlehnen, doch eine getroffene Entscheidung ändert sich nur langsam.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 申 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 戊 aus gelesen, sind die Stämme, die 申 enthält, die folgenden. Der Hauptstamm (庚) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 戊申",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 戊"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Reststamm (餘氣)",
                  "{hidSinYeo}",
                  "Gefährte (比肩)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Mittelstamm (中氣)",
                  "{hidSinJung}",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Hauptstamm (本氣)",
                  "{hidSinBon}",
                  "Ausdruck (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 戊 als Tagesstamm ist der Beständige Wohlstand 癸 und die Autorität 乙."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 癸. 癸 ist in 申 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 乙. 乙 ist in 申 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [丁未](/guide/pillar-jeong-mi) und die nächste [己酉](/guide/pillar-gi-yu)."
          },
          {
            "p": "Sie besteht aus [Yang-Erde (戊)](/guide/stem-mu) und [申 (Affe)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-yu": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 己酉",
    "summary": "Wie Saju-Link die Tagessäule 己酉 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "己酉 ist die Tagessäule Nr. 46 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 己酉, ist der Tagesstamm 己 (Yin-Erde) und der Tageszweig 酉 (der Hahn). Im Sechzigerzyklus ist es die Kombination Nr. 46."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 己 ist, „Yin-Erde (己)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Ackerboden. Er nimmt auf, was kommt, und zieht es groß — er pflegt, statt sich zu zeigen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 酉 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 己 aus gelesen, sind die Stämme, die 酉 enthält, die folgenden. Der Hauptstamm (辛) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 己酉",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 己"
              ],
              "rows": [
                [
                  "Yang-Metall (庚)",
                  "Reststamm (餘氣)",
                  "{hidYuYeo}",
                  "Störer (傷官)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Hauptstamm (本氣)",
                  "{hidYuBon}",
                  "Ausdruck (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 己 als Tagesstamm ist der Beständige Wohlstand 壬 und die Autorität 甲."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 壬. 壬 ist in 酉 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 甲. 甲 ist in 酉 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [戊申](/guide/pillar-mu-sin) und die nächste [庚戌](/guide/pillar-gyeong-sul)."
          },
          {
            "p": "Sie besteht aus [Yin-Erde (己)](/guide/stem-gi) und [酉 (Hahn)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sul": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 庚戌",
    "summary": "Wie Saju-Link die Tagessäule 庚戌 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "庚戌 ist die Tagessäule Nr. 47 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 庚戌, ist der Tagesstamm 庚 (Yang-Metall) und der Tageszweig 戌 (der Hund). Im Sechzigerzyklus ist es die Kombination Nr. 47."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 庚 ist, „Yang-Metall (庚)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Unbearbeitetes Eisen. Entschieden und klar, mit wenig Geduld für Dinge, die in der Schwebe bleiben.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 戌 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 庚 aus gelesen, sind die Stämme, die 戌 enthält, die folgenden. Der Hauptstamm (戊) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 庚戌",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 庚"
              ],
              "rows": [
                [
                  "Yin-Metall (辛)",
                  "Reststamm (餘氣)",
                  "{hidSulYeo}",
                  "Rivale (劫財)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Mittelstamm (中氣)",
                  "{hidSulJung}",
                  "Autorität (正官)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Hauptstamm (本氣)",
                  "{hidSulBon}",
                  "Ungewöhnliche Stütze (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 庚 als Tagesstamm ist der Beständige Wohlstand 乙 und die Autorität 丁."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 乙. 乙 ist in 戌 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 丁. 丁 ist in 戌 enthalten (Mittelstamm (中氣))."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [己酉](/guide/pillar-gi-yu) und die nächste [辛亥](/guide/pillar-sin-hae)."
          },
          {
            "p": "Sie besteht aus [Yang-Metall (庚)](/guide/stem-gyeong) und [戌 (Hund)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-hae": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 辛亥",
    "summary": "Wie Saju-Link die Tagessäule 辛亥 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "辛亥 ist die Tagessäule Nr. 48 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 辛亥, ist der Tagesstamm 辛 (Yin-Metall) und der Tageszweig 亥 (das Schwein). Im Sechzigerzyklus ist es die Kombination Nr. 48."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 辛 ist, „Yin-Metall (辛)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Ein geschliffener Edelstein. Feiner Geschmack und hohe Maßstäbe; Nachlässigkeit lässt sich schwer durchgehen lassen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 亥 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 辛 aus gelesen, sind die Stämme, die 亥 enthält, die folgenden. Der Hauptstamm (壬) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 辛亥",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 辛"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Reststamm (餘氣)",
                  "{hidHaeYeo}",
                  "Fürsorge (正印)"
                ],
                [
                  "Yang-Holz (甲)",
                  "Mittelstamm (中氣)",
                  "{hidHaeJung}",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Hauptstamm (本氣)",
                  "{hidHaeBon}",
                  "Störer (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 辛 als Tagesstamm ist der Beständige Wohlstand 甲 und die Autorität 丙."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 甲. 甲 ist in 亥 enthalten (Mittelstamm (中氣))."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 丙. 丙 ist in 亥 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [庚戌](/guide/pillar-gyeong-sul) und die nächste [壬子](/guide/pillar-im-ja)."
          },
          {
            "p": "Sie besteht aus [Yin-Metall (辛)](/guide/stem-sin) und [亥 (Schwein)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-ja": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 壬子",
    "summary": "Wie Saju-Link die Tagessäule 壬子 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "壬子 ist die Tagessäule Nr. 49 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 壬子, ist der Tagesstamm 壬 (Yang-Wasser) und der Tageszweig 子 (die Ratte). Im Sechzigerzyklus ist es die Kombination Nr. 49."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 壬 ist, „Yang-Wasser (壬)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Fluss und Meer. Weiter Blick, mit einem Auge dafür, wohin die Dinge laufen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 子 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 壬 aus gelesen, sind die Stämme, die 子 enthält, die folgenden. Der Hauptstamm (癸) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 壬子",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 壬"
              ],
              "rows": [
                [
                  "Yang-Wasser (壬)",
                  "Reststamm (餘氣)",
                  "{hidJaYeo}",
                  "Gefährte (比肩)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Hauptstamm (本氣)",
                  "{hidJaBon}",
                  "Rivale (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 壬 als Tagesstamm ist der Beständige Wohlstand 丁 und die Autorität 己."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 丁. 丁 ist in 子 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 己. 己 ist in 子 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [辛亥](/guide/pillar-sin-hae) und die nächste [癸丑](/guide/pillar-gye-chuk)."
          },
          {
            "p": "Sie besteht aus [Yang-Wasser (壬)](/guide/stem-im) und [子 (Ratte)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-chuk": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 癸丑",
    "summary": "Wie Saju-Link die Tagessäule 癸丑 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "癸丑 ist die Tagessäule Nr. 50 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 癸丑, ist der Tagesstamm 癸 (Yin-Wasser) und der Tageszweig 丑 (der Ochse). Im Sechzigerzyklus ist es die Kombination Nr. 50."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 癸 ist, „Yin-Wasser (癸)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Tau und Regen. Es sickert leise ein und liest die Stimmung, bevor Worte fallen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 丑 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 癸 aus gelesen, sind die Stämme, die 丑 enthält, die folgenden. Der Hauptstamm (己) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 癸丑",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 癸"
              ],
              "rows": [
                [
                  "Yin-Wasser (癸)",
                  "Reststamm (餘氣)",
                  "{hidChukYeo}",
                  "Gefährte (比肩)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Mittelstamm (中氣)",
                  "{hidChukJung}",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yin-Erde (己)",
                  "Hauptstamm (本氣)",
                  "{hidChukBon}",
                  "Herausforderer (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 癸 als Tagesstamm ist der Beständige Wohlstand 丙 und die Autorität 戊."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 丙. 丙 ist in 丑 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 戊. 戊 ist in 丑 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [壬子](/guide/pillar-im-ja) und die nächste [甲寅](/guide/pillar-gap-in)."
          },
          {
            "p": "Sie besteht aus [Yin-Wasser (癸)](/guide/stem-gye) und [丑 (Ochse)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-in": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 甲寅",
    "summary": "Wie Saju-Link die Tagessäule 甲寅 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "甲寅 ist die Tagessäule Nr. 51 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 甲寅, ist der Tagesstamm 甲 (Yang-Holz) und der Tageszweig 寅 (der Tiger). Im Sechzigerzyklus ist es die Kombination Nr. 51."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 甲 ist, „Yang-Holz (甲)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Ein hoher Baum, der gerade wächst. Steht die Richtung fest, wankt er nicht, und er hält lieber aus, als sich zu beugen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 寅 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 甲 aus gelesen, sind die Stämme, die 寅 enthält, die folgenden. Der Hauptstamm (甲) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 甲寅",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 甲"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Reststamm (餘氣)",
                  "{hidInYeo}",
                  "Unerwarteter Gewinn (偏財)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Mittelstamm (中氣)",
                  "{hidInJung}",
                  "Ausdruck (食神)"
                ],
                [
                  "Yang-Holz (甲)",
                  "Hauptstamm (本氣)",
                  "{hidInBon}",
                  "Gefährte (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 甲 als Tagesstamm ist der Beständige Wohlstand 己 und die Autorität 辛."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 己. 己 ist in 寅 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 辛. 辛 ist in 寅 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [癸丑](/guide/pillar-gye-chuk) und die nächste [乙卯](/guide/pillar-eul-myo)."
          },
          {
            "p": "Sie besteht aus [Yang-Holz (甲)](/guide/stem-gap) und [寅 (Tiger)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-myo": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 乙卯",
    "summary": "Wie Saju-Link die Tagessäule 乙卯 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "乙卯 ist die Tagessäule Nr. 52 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 乙卯, ist der Tagesstamm 乙 (Yin-Holz) und der Tageszweig 卯 (der Hase). Im Sechzigerzyklus ist es die Kombination Nr. 52."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 乙 ist, „Yin-Holz (乙)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Eine Ranke — biegsames Gras. Es beugt sich den Umständen, um weiterzukommen, und bricht dabei nicht.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 卯 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 乙 aus gelesen, sind die Stämme, die 卯 enthält, die folgenden. Der Hauptstamm (乙) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 乙卯",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 乙"
              ],
              "rows": [
                [
                  "Yang-Holz (甲)",
                  "Reststamm (餘氣)",
                  "{hidMyoYeo}",
                  "Rivale (劫財)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Hauptstamm (本氣)",
                  "{hidMyoBon}",
                  "Gefährte (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 乙 als Tagesstamm ist der Beständige Wohlstand 戊 und die Autorität 庚."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 戊. 戊 ist in 卯 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 庚. 庚 ist in 卯 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [甲寅](/guide/pillar-gap-in) und die nächste [丙辰](/guide/pillar-byeong-jin)."
          },
          {
            "p": "Sie besteht aus [Yin-Holz (乙)](/guide/stem-eul) und [卯 (Hase)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-jin": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 丙辰",
    "summary": "Wie Saju-Link die Tagessäule 丙辰 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "丙辰 ist die Tagessäule Nr. 53 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 丙辰, ist der Tagesstamm 丙 (Yang-Feuer) und der Tageszweig 辰 (der Drache). Im Sechzigerzyklus ist es die Kombination Nr. 53."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 丙 ist, „Yang-Feuer (丙)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Die Mittagssonne. Gefühle liegen offen, der Raum wird hell, und nach vorn zu treten fällt leicht.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 辰 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 丙 aus gelesen, sind die Stämme, die 辰 enthält, die folgenden. Der Hauptstamm (戊) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 丙辰",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 丙"
              ],
              "rows": [
                [
                  "Yin-Holz (乙)",
                  "Reststamm (餘氣)",
                  "{hidJinYeo}",
                  "Fürsorge (正印)"
                ],
                [
                  "Yin-Wasser (癸)",
                  "Mittelstamm (中氣)",
                  "{hidJinJung}",
                  "Autorität (正官)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Hauptstamm (本氣)",
                  "{hidJinBon}",
                  "Ausdruck (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 丙 als Tagesstamm ist der Beständige Wohlstand 辛 und die Autorität 癸."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 辛. 辛 ist in 辰 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 癸. 癸 ist in 辰 enthalten (Mittelstamm (中氣))."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [乙卯](/guide/pillar-eul-myo) und die nächste [丁巳](/guide/pillar-jeong-sa)."
          },
          {
            "p": "Sie besteht aus [Yang-Feuer (丙)](/guide/stem-byeong) und [辰 (Drache)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-sa": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 丁巳",
    "summary": "Wie Saju-Link die Tagessäule 丁巳 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "丁巳 ist die Tagessäule Nr. 54 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 丁巳, ist der Tagesstamm 丁 (Yin-Feuer) und der Tageszweig 巳 (die Schlange). Im Sechzigerzyklus ist es die Kombination Nr. 54."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 丁 ist, „Yin-Feuer (丁)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Kerzenlicht. Es brennt leise und lange und wärmt zuerst die Nächsten.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 巳 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 丁 aus gelesen, sind die Stämme, die 巳 enthält, die folgenden. Der Hauptstamm (丙) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 丁巳",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 丁"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Reststamm (餘氣)",
                  "{hidSaYeo}",
                  "Störer (傷官)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Mittelstamm (中氣)",
                  "{hidSaJung}",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yang-Feuer (丙)",
                  "Hauptstamm (本氣)",
                  "{hidSaBon}",
                  "Rivale (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 丁 als Tagesstamm ist der Beständige Wohlstand 庚 und die Autorität 壬."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 庚. 庚 ist in 巳 enthalten (Mittelstamm (中氣))."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 壬. 壬 ist in 巳 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [丙辰](/guide/pillar-byeong-jin) und die nächste [戊午](/guide/pillar-mu-o)."
          },
          {
            "p": "Sie besteht aus [Yin-Feuer (丁)](/guide/stem-jeong) und [巳 (Schlange)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-o": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 戊午",
    "summary": "Wie Saju-Link die Tagessäule 戊午 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "戊午 ist die Tagessäule Nr. 55 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 戊午, ist der Tagesstamm 戊 (Yang-Erde) und der Tageszweig 午 (das Pferd). Im Sechzigerzyklus ist es die Kombination Nr. 55."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 戊 ist, „Yang-Erde (戊)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Weites Land und Berge. Schwer zu erschüttern und gut zum Anlehnen, doch eine getroffene Entscheidung ändert sich nur langsam.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 午 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 戊 aus gelesen, sind die Stämme, die 午 enthält, die folgenden. Der Hauptstamm (丁) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 戊午",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 戊"
              ],
              "rows": [
                [
                  "Yang-Feuer (丙)",
                  "Reststamm (餘氣)",
                  "{hidOYeo}",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yin-Erde (己)",
                  "Mittelstamm (中氣)",
                  "{hidOJung}",
                  "Rivale (劫財)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Hauptstamm (本氣)",
                  "{hidOBon}",
                  "Fürsorge (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 戊 als Tagesstamm ist der Beständige Wohlstand 癸 und die Autorität 乙."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 癸. 癸 ist in 午 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 乙. 乙 ist in 午 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [丁巳](/guide/pillar-jeong-sa) und die nächste [己未](/guide/pillar-gi-mi)."
          },
          {
            "p": "Sie besteht aus [Yang-Erde (戊)](/guide/stem-mu) und [午 (Pferd)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-mi": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 己未",
    "summary": "Wie Saju-Link die Tagessäule 己未 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "己未 ist die Tagessäule Nr. 56 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 己未, ist der Tagesstamm 己 (Yin-Erde) und der Tageszweig 未 (das Schaf). Im Sechzigerzyklus ist es die Kombination Nr. 56."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 己 ist, „Yin-Erde (己)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Ackerboden. Er nimmt auf, was kommt, und zieht es groß — er pflegt, statt sich zu zeigen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 未 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 己 aus gelesen, sind die Stämme, die 未 enthält, die folgenden. Der Hauptstamm (己) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 己未",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 己"
              ],
              "rows": [
                [
                  "Yin-Feuer (丁)",
                  "Reststamm (餘氣)",
                  "{hidMiYeo}",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yin-Holz (乙)",
                  "Mittelstamm (中氣)",
                  "{hidMiJung}",
                  "Herausforderer (偏官)"
                ],
                [
                  "Yin-Erde (己)",
                  "Hauptstamm (本氣)",
                  "{hidMiBon}",
                  "Gefährte (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 己 als Tagesstamm ist der Beständige Wohlstand 壬 und die Autorität 甲."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 壬. 壬 ist in 未 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 甲. 甲 ist in 未 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [戊午](/guide/pillar-mu-o) und die nächste [庚申](/guide/pillar-gyeong-sin)."
          },
          {
            "p": "Sie besteht aus [Yin-Erde (己)](/guide/stem-gi) und [未 (Schaf)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sin": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 庚申",
    "summary": "Wie Saju-Link die Tagessäule 庚申 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "庚申 ist die Tagessäule Nr. 57 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 庚申, ist der Tagesstamm 庚 (Yang-Metall) und der Tageszweig 申 (der Affe). Im Sechzigerzyklus ist es die Kombination Nr. 57."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 庚 ist, „Yang-Metall (庚)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Unbearbeitetes Eisen. Entschieden und klar, mit wenig Geduld für Dinge, die in der Schwebe bleiben.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 申 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 庚 aus gelesen, sind die Stämme, die 申 enthält, die folgenden. Der Hauptstamm (庚) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 庚申",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 庚"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Reststamm (餘氣)",
                  "{hidSinYeo}",
                  "Ungewöhnliche Stütze (偏印)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Mittelstamm (中氣)",
                  "{hidSinJung}",
                  "Ausdruck (食神)"
                ],
                [
                  "Yang-Metall (庚)",
                  "Hauptstamm (本氣)",
                  "{hidSinBon}",
                  "Gefährte (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 庚 als Tagesstamm ist der Beständige Wohlstand 乙 und die Autorität 丁."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 乙. 乙 ist in 申 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 丁. 丁 ist in 申 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [己未](/guide/pillar-gi-mi) und die nächste [辛酉](/guide/pillar-sin-yu)."
          },
          {
            "p": "Sie besteht aus [Yang-Metall (庚)](/guide/stem-gyeong) und [申 (Affe)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-yu": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 辛酉",
    "summary": "Wie Saju-Link die Tagessäule 辛酉 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "辛酉 ist die Tagessäule Nr. 58 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 辛酉, ist der Tagesstamm 辛 (Yin-Metall) und der Tageszweig 酉 (der Hahn). Im Sechzigerzyklus ist es die Kombination Nr. 58."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 辛 ist, „Yin-Metall (辛)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Ein geschliffener Edelstein. Feiner Geschmack und hohe Maßstäbe; Nachlässigkeit lässt sich schwer durchgehen lassen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 酉 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 辛 aus gelesen, sind die Stämme, die 酉 enthält, die folgenden. Der Hauptstamm (辛) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 辛酉",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 辛"
              ],
              "rows": [
                [
                  "Yang-Metall (庚)",
                  "Reststamm (餘氣)",
                  "{hidYuYeo}",
                  "Rivale (劫財)"
                ],
                [
                  "Yin-Metall (辛)",
                  "Hauptstamm (本氣)",
                  "{hidYuBon}",
                  "Gefährte (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 辛 als Tagesstamm ist der Beständige Wohlstand 甲 und die Autorität 丙."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 甲. 甲 ist in 酉 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 丙. 丙 ist in 酉 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [庚申](/guide/pillar-gyeong-sin) und die nächste [壬戌](/guide/pillar-im-sul)."
          },
          {
            "p": "Sie besteht aus [Yin-Metall (辛)](/guide/stem-sin) und [酉 (Hahn)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sul": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 壬戌",
    "summary": "Wie Saju-Link die Tagessäule 壬戌 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "壬戌 ist die Tagessäule Nr. 59 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 壬戌, ist der Tagesstamm 壬 (Yang-Wasser) und der Tageszweig 戌 (der Hund). Im Sechzigerzyklus ist es die Kombination Nr. 59."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 壬 ist, „Yang-Wasser (壬)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Fluss und Meer. Weiter Blick, mit einem Auge dafür, wohin die Dinge laufen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 戌 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 壬 aus gelesen, sind die Stämme, die 戌 enthält, die folgenden. Der Hauptstamm (戊) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 壬戌",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 壬"
              ],
              "rows": [
                [
                  "Yin-Metall (辛)",
                  "Reststamm (餘氣)",
                  "{hidSulYeo}",
                  "Fürsorge (正印)"
                ],
                [
                  "Yin-Feuer (丁)",
                  "Mittelstamm (中氣)",
                  "{hidSulJung}",
                  "Beständiger Wohlstand (正財)"
                ],
                [
                  "Yang-Erde (戊)",
                  "Hauptstamm (本氣)",
                  "{hidSulBon}",
                  "Herausforderer (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 壬 als Tagesstamm ist der Beständige Wohlstand 丁 und die Autorität 己."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 丁. 丁 ist in 戌 enthalten (Mittelstamm (中氣))."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 己. 己 ist in 戌 nicht enthalten."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [辛酉](/guide/pillar-sin-yu) und die nächste [癸亥](/guide/pillar-gye-hae)."
          },
          {
            "p": "Sie besteht aus [Yang-Wasser (壬)](/guide/stem-im) und [戌 (Hund)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-hae": {
    "eyebrow": "Tagessäulen",
    "title": "Die Tagessäule 癸亥",
    "summary": "Wie Saju-Link die Tagessäule 癸亥 liest — was die vom Tageszweig enthaltenen Stämme für den Tagesstamm sind — genau so dargelegt, wie es seine Berechnungsregeln vorsehen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "癸亥 ist die Tagessäule Nr. 60 des Sechzigerzyklus",
        "blocks": [
          {
            "p": "Lautet das Stamm-Zweig-Paar des Geburtstags 癸亥, ist der Tagesstamm 癸 (Yin-Wasser) und der Tageszweig 亥 (das Schwein). Im Sechzigerzyklus ist es die Kombination Nr. 60."
          },
          {
            "p": "Saju-Link nennt eine Person, deren Tagesstamm 癸 ist, „Yin-Wasser (癸)“, und die Zeile, die der Ergebnisbildschirm zeigt, lautet: „Tau und Regen. Es sickert leise ein und liest die Stimmung, bevor Worte fallen.“ Diese Zeile hat nichts mit der Lesung unten oder den Werten zu tun."
          }
        ]
      },
      {
        "title": "Was die vom Tageszweig 亥 enthaltenen Stämme für den Tagesstamm sind",
        "blocks": [
          {
            "p": "Der Tageszweig ist die Position des Ehepartners. Vom Tagesstamm 癸 aus gelesen, sind die Stämme, die 亥 enthält, die folgenden. Der Hauptstamm (壬) ist die stellvertretende Energie des Zweigs."
          },
          {
            "table": {
              "caption": "Die verborgenen Stämme des Tageszweigs von 癸亥",
              "head": [
                "Verborgener Stamm",
                "Position",
                "Anteil",
                "Für den Tagesstamm 癸"
              ],
              "rows": [
                [
                  "Yang-Erde (戊)",
                  "Reststamm (餘氣)",
                  "{hidHaeYeo}",
                  "Autorität (正官)"
                ],
                [
                  "Yang-Holz (甲)",
                  "Mittelstamm (中氣)",
                  "{hidHaeJung}",
                  "Störer (傷官)"
                ],
                [
                  "Yang-Wasser (壬)",
                  "Hauptstamm (本氣)",
                  "{hidHaeBon}",
                  "Rivale (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners und diese Tagessäule",
        "blocks": [
          {
            "p": "Die traditionelle Myeongri liest die Position des Ehepartners bei Männern als Beständigen Wohlstand (正財) und bei Frauen als Autorität (正官). Mit 癸 als Tagesstamm ist der Beständige Wohlstand 丙 und die Autorität 戊."
          },
          {
            "p": "Für Männer ist die Position des Ehepartners (Beständiger Wohlstand) 丙. 丙 ist in 亥 nicht enthalten."
          },
          {
            "p": "Für Frauen ist die Position des Ehepartners (Autorität) 戊. 戊 ist in 亥 enthalten (Reststamm (餘氣))."
          }
        ]
      },
      {
        "title": "Die benachbarten Tagessäulen und die Zeichen, aus denen diese Säule besteht",
        "blocks": [
          {
            "p": "Im Sechzigerzyklus ist die vorherige Tagessäule [壬戌](/guide/pillar-im-sul) und die nächste [甲子](/guide/pillar-gap-ja)."
          },
          {
            "p": "Sie besteht aus [Yin-Wasser (癸)](/guide/stem-gye) und [亥 (Schwein)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Was dieser Leitfaden nicht aussagt",
        "blocks": [
          {
            "ul": [
              "Eine einzelne Tagessäule entscheidet nicht über einen Menschen oder eine Beziehung. Ein Saju wird daraus gelesen, wie sich die acht Zeichen der vier Säulen zueinander verhalten.",
              "Die Lesung der Position des Ehepartners übernimmt eine Regel der traditionellen Myeongri, und wenn Sie Ihr Geschlecht nicht angeben, wird diese Position nicht gelesen."
            ]
          }
        ]
      }
    ]
  },

  "guide/ten-gods": {
    "eyebrow": "Die Zehn Götter",
    "title": "Die Zehn Götter — Die zehn Positionen innerhalb meiner Saju",
    "summary": "Basierend auf dem Tagestamm werden die verbleibenden Zeichen in zehn Namen unterteilt. Es wird erörtert, warum zwischen regulärem Reichtum und Nebenreichtum unterschieden wird, auch wenn sie dasselbe Reichtumselement sind.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Der Tagestamm ist die Person selbst",
        "blocks": [
          {
            "p": "Unter den acht Zeichen der saju bezieht sich der **Tagestamm** (der himmlische Stamm des Geburtstags) auf die Person selbst. Die verbleibenden sieben Zeichen werden als die Umgebung gelesen, in der dieser Tagestamm existiert."
          },
          {
            "p": "**Die Zehn Götter** (十神) sind die zehn Unterteilungen, wie der Tagestamm die anderen Zeichen wahrnimmt. Die Energie, die mich nährt, ist Ressource, die Energie, die mir ähnlich ist, ist Begleiter, die Energie, die ich gebäre, ist Nahrung und Reichtum, die Energie, die mich unterdrückt, ist Offizielle Position, und die Energie, die ich unterdrücke, ist Reichtum — diese fünf Kategorien werden weiter in Yin und Yang unterteilt, wodurch zehn entstehen."
          }
        ]
      },
      {
        "title": "Was die verbleibenden sieben Zeichen für mich bedeuten",
        "blocks": [
          {
            "p": "Sobald der Tagestamm bestimmt ist, erhält jedes der verbleibenden Zeichen im Geburtshoroskop einen Namen. Die Energie, die mich gebiert, die Energie, die mir ähnlich ist, die Energie, die ich gebäre, die Energie, die mich unterdrückt, und die Energie, die ich unterdrücke — diese fünf Zweige werden durch Yin und Yang weiter in **zehn** unterteilt. Dies sind die Zehn Götter."
          },
          {
            "p": "Somit beziehen sich die Zehn Götter nicht auf Beziehungen zu anderen, sondern auf **die Positionen innerhalb meiner selbst**. Welche Positionen dick oder dünn sind, zeigen meine Neigungen und die Art, wie ich lebe."
          }
        ]
      },
      {
        "title": "Warum wir dies durch die Zehn Götter lesen und nicht durch drei elementare Beziehungen",
        "blocks": [
          {
            "p": "Es gibt auch eine Methode, die Beziehung des Tagestamms ausschließlich durch die drei Aspekte der the five elements (fünf Elemente) (unterstützend, gleich und entgegen) zu betrachten. Es ist einfach, aber **die Yin und Yang verschwinden.** 甲 (yang Holz) und 乙 (yin Holz) werden gleich wie 甲, was eine Darstellung von 'Gleichheit' ist, und die gegensätzliche Beziehung wird zu einem einzigen Wert ohne Richtung oder Yin und Yang zusammengefasst."
          },
          {
            "p": "Die Position des Ehepartners muss gemäß den the Ten Gods (Zehn Göttern) in Bezug auf Yin und Yang bewertet werden. Wenn Elemente, die durch die the five elements (fünf Elemente) betrachtet werden, mit denen, die durch die the Ten Gods (Zehn Götter) in einem System betrachtet werden, vermischt werden, gibt es zwei Standards für die gleichen zwei Zeichen. Daher vereinheitlichen wir es unter den the Ten Gods (Zehn Göttern)."
          }
        ]
      },
      {
        "title": "Die Position des Ehepartners ist Proper Wealth und Proper Officer",
        "blocks": [
          {
            "p": "Traditionelle Wahrsagerei betrachtet die Position des Ehepartners unterschiedlich je nach Geschlecht. Für Männer ist es **Proper Wealth (正財)**, und für Frauen ist es **Proper Officer (正官)**. Auch wenn sie dasselbe Wohlstandselement sind, wird nur das Proper Wealth, das in Yin und Yang fehlplatziert ist, als die Position des Ehepartners betrachtet, während Indirect Wealth nicht als Ehepartner, sondern in Bezug auf Aktivität und Wohlstand gelesen wird."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Wenn Sie kein Geschlecht angeben, wird diese Position weggelassen",
        "blocks": [
          {
            "p": "Das liegt daran, dass nicht bestimmt werden kann, welche Seite, Proper Wealth oder Proper Officer, als die Position des Ehepartners betrachtet werden soll. Anstatt zu raten, um einen fehlenden Wert zu füllen, lesen wir die verbleibenden Elemente ohne dieses."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "Today's fortune",
    "title": "How does today's fortune come out?",
    "summary": "Der Tagestamm von heute wird mit dem Geburtshoroskop verglichen, um eine Punktzahl zu ermitteln. Dreizehn Unterdrückungs- und Unterstützungsbeziehungen und sieben Erdäste, zusammen mit allen zwanzig Elementen und ihren jeweiligen Additionen und Subtraktionen, werden vollständig offengelegt.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Heute stellen wir es auch auf die gleiche Weise wie die acht Zeichen auf",
        "blocks": [
          {
            "p": "Every day has its own **the day pillar of the day (日辰)**. Using the same method as establishing the natal chart's day pillar, today also has one heavenly stem and one earthly branch attached. Today's fortune is about comparing those two characters to the natal chart."
          },
          {
            "p": "Die Grundpunktzahl beträgt **{baseScore} Punkte**. Die unten aufgeführten Elemente werden addiert und subtrahiert, und schließlich wird sie zwischen {clampLow} Punkten und {clampHigh} Punkten eingegrenzt — wir erwähnen keine 0 Punkte oder 100 Punkte."
          }
        ]
      },
      {
        "title": "① Ist die Energie von heute das, was ich brauche?",
        "blocks": [
          {
            "p": "Dies ist die bedeutendste Position. Wir überprüfen, ob die Energie von heute mit der 'Energie, die ich gerade brauche', übereinstimmt, die durch [das ausgleichende Element](/guide/yongsin) bestimmt wird."
          },
          {
            "table": {
              "head": [
                "Die Energie von heute ist",
                "Addition/Subtraktion"
              ],
              "rows": [
                [
                  "Die Energie, die ich gerade brauche",
                  "{todayIsYongsin}"
                ],
                [
                  "Es erzeugt die benötigte Energie",
                  "{todayGeneratesYongsin}"
                ],
                [
                  "Es unterdrückt die benötigte Energie",
                  "{todayControlsYongsin}"
                ],
                [
                  "Es drückt mehr auf die bereits überfließende Seite",
                  "{todayIsGisin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Betrachten Sie das gegensätzliche Element nicht als 'alles außer dem ausgleichenden Element'",
        "blocks": [
          {
            "p": "Wenn Sie das tun, werden sowohl die Energie, die das ausgleichende Element erzeugt, als auch die Energie, die das ausgleichende Element unterdrückt, schlecht, und die letzten beiden Zeilen in der obigen Tabelle werden ununterscheidbar. Nur die Energie, die **stärker in die entgegengesetzte Richtung drückt**, gemäß der Bedeutung von Unterdrückung und Unterstützung, wird als das gegensätzliche Element angesehen."
          }
        ]
      },
      {
        "title": "② Die Beziehung zwischen dem himmlischen Stamm von heute und dem Tagestamm",
        "blocks": [
          {
            "p": "Die unterstützenden und gegensätzlichen Beziehungen der the five elements (fünf Elemente) werden direkt zwischen dem Tagestamm und dem himmlischen Stamm von heute angewendet."
          },
          {
            "table": {
              "head": [
                "Beziehung",
                "Addition/Subtraktion"
              ],
              "rows": [
                [
                  "Heute erzeugt mich",
                  "{generatesSelf}"
                ],
                [
                  "Heute und ich sind die gleiche Energie",
                  "{sameElement}"
                ],
                [
                  "Ich unterdrücke heute",
                  "{selfControls}"
                ],
                [
                  "Ich fließe mit heute hinaus",
                  "{selfGenerates}"
                ],
                [
                  "Heute unterdrückt mich",
                  "{controlsSelf}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "③ Heute’s irdischer Zweig trifft die irdischen Zweige des Geburtshoroskops",
        "blocks": [
          {
            "p": "Der irdische Zweig von heute wird mit den irdischen Zweigen des Geburtshoroskops verglichen. Die Beziehungstabelle selbst befindet sich in [irdischen Zweigbeziehungen](/guide/branches)."
          },
          {
            "table": {
              "head": [
                "Beziehung",
                "Addition/Subtraktion"
              ],
              "rows": [
                [
                  "Triade (三合)",
                  "{branchSamhap}"
                ],
                [
                  "Sechs Harmonie (六合)",
                  "{branchYukhap}"
                ],
                [
                  "Halb-Triade (半合)",
                  "{branchBanhap}"
                ],
                [
                  "stille Zwietracht (怨嗔)",
                  "{branchWonjin}"
                ],
                [
                  "Konflikt (沖)",
                  "{branchChung}"
                ]
              ]
            }
          },
          {
            "p": "Wenn es mehrere Säulen gibt, entstehen mehrere Beziehungen. Alle werden addiert, aber dieser gesamte Punkt ist auf **±{branchMaxAbs} Punkte** beschränkt — dies soll verhindern, dass eine einzige irdische Zweigbeziehung den gesamten Tag bestimmt."
          }
        ]
      },
      {
        "title": "④ Korrektur basierend auf Stärke",
        "blocks": [
          {
            "p": "Selbst bei der gleichen Energie unterscheidet sich die Bedeutung für eine starke Tages-Säule und eine schwache Tages-Säule. Daher nehmen wir eine letzte Anpassung vor."
          },
          {
            "table": {
              "head": [
                "Situation",
                "Anpassung"
              ],
              "rows": [
                [
                  "Schwache Tages-Säule, aber heute unterstützt sie",
                  "{weakTodayHelps}"
                ],
                [
                  "Starke Tages-Säule, aber heute wird die Last angemessen verringert",
                  "{strongTodayDrains}"
                ],
                [
                  "Starke Tages-Säule, aber heute wird die Unterstützung verstärkt",
                  "{strongTodayHelps}"
                ],
                [
                  "Schwache Tages-Säule, aber heute erhöht sich die Last",
                  "{weakTodayBurdens}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Punkte nach Grad und Bereich",
        "blocks": [
          {
            "p": "Die Gesamtpunktzahl wird in fünf Grade unterteilt."
          },
          {
            "table": {
              "head": [
                "Punktzahl",
                "Grad"
              ],
              "rows": [
                [
                  "{gradeDaegilMin} Punkte oder mehr",
                  "Großes Glück (大吉)"
                ],
                [
                  "{gradeGilMin} Punkte oder mehr",
                  "Glück (吉)"
                ],
                [
                  "{gradePyeongMin} Punkte oder mehr",
                  "Durchschnitt (平)"
                ],
                [
                  "{gradeJuuiMin} Punkte oder mehr",
                  "Vorsicht (注意)"
                ],
                [
                  "{gradeJosimMin} Punkte oder mehr",
                  "Sei vorsichtig (操心)"
                ]
              ]
            }
          },
          {
            "p": "Die vier Bereiche Wohlstand, Liebe, Karriere und Gesundheit erben {overallShare} der Gesamtpunktzahl, während der Rest gemäß den Zehn Göttern und den relevanten irdischen Zweigbeziehungen aufgeteilt wird. Daher unterscheiden sich die Zahlen nach Bereich, auch wenn die Gesamtpunktzahl gleich ist."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Die obigen Zahlen werden alle aus den Engine-Einstellungen gelesen. Wenn die Regeln geändert werden, wird dieses Dokument ebenfalls geändert, und alle Änderungen der Punktzahlen werden zuerst in der [Mitteilung](/notice) veröffentlicht."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Beziehungstabelle",
    "title": "Beziehungen der irdischen Zweige — Kombination, Konflikt und Zwietracht",
    "summary": "Dies ist eine Beziehungstabelle, die zeigt, wie die Tages-Säule von heute mit dem Geburtsdiagramm interagiert. Sie offenbart, was jede Kombination, jeder Konflikt und jede Zwietracht ist und wie viele Punkte sie haben.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Die irdischen Zweige sind zwölf Zeichen",
        "blocks": [
          {
            "p": "Die zwölf irdischen Zweige (十二支) sind 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Die allgemein bekannten Tierkreiszeichen — Ratte, Ochse, Tiger, Hase, Drache, Schlange, Pferd, Ziege, Affe, Hahn, Hund, Schwein — sind jeweils einem dieser zwölf Zeichen zugeordnet."
          },
          {
            "figure": "branch-wheel",
            "caption": "Wenn die zwölf Zeichen in einem Kreis angeordnet sind, sind die Beziehungen deutlich sichtbar. Konflikt (沖) steht immer gegenüber, während sechs Harmonie und Zwietracht näher beieinander liegen. Diese Linien sind nicht im Text geschrieben, sondern stammen direkt aus den Berechnungsregeln.",
            "labels": {
              "alt": "Ein Diagramm, das die zwölf irdischen Zweige in einem Kreis anzeigt, mit Linien, die sechs Harmonie, Konflikt und Zwietracht verbinden.",
              "yukhap": "sechs Harmonie",
              "chung": "Konflikt",
              "wonjin": "Zwietracht",
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
            }
          },
          {
            "p": "In saju hat jede der vier Säulen einen irdischen Zweig. **Die heutige Lesung** wird bestimmt, indem **der Zweig des Tages** mit den vier Zweigen des Geburtshoroskops unter Verwendung der Beziehungstabelle unten abgeglichen wird."
          }
        ]
      },
      {
        "title": "Gesamtbeziehungstabelle",
        "blocks": [
          {
            "table": {
              "caption": "In der Reihenfolge der höchsten Punktzahl. Dies sind die Werte, die von Saju-Link verwendet werden.",
              "head": [
                "Beziehung",
                "Entsprechendes Paar",
                "Bedeutung",
                "Punktzahl"
              ],
              "rows": [
                [
                  "Triade (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Wenn alle drei Zeichen zusammenkommen, bilden sie eine vollständige elementare Formation (局). Dies wird als die stärkste Kombination angesehen.",
                  "{scoreSamhap}"
                ],
                [
                  "sechs Harmonie (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Paare, die sich anziehen. Dies ist die häufigste Kombination, da sie nur aus zwei Zeichen besteht.",
                  "{scoreYukhap}"
                ],
                [
                  "halb Triade (半合)",
                  "Zwei Zeichen, die eines der königlichen Zeichen (子·酉·午·卯) aus der Triade enthalten",
                  "Eine halbe Triade, die ein Zeichen enthält, das zentral für die Formation ist. Es bildet mit nur zwei Zeichen keine vollständige elementare Formation, was es niedriger macht als die Triade.",
                  "{scoreBanhap}"
                ],
                [
                  "Gleicher Zweig",
                  "子子 · 丑丑 …",
                  "Zeichen, die gleich sind. Dies bedeutet, dass sie sich ähneln, aber keine Anziehung implizieren, weshalb sie in der Mitte platziert werden.",
                  "{scoreSame}"
                ],
                [
                  "Keine Beziehung",
                  "Paare, die nirgendwo oben oder unten dazugehören",
                  "Kombinationen, die keine besondere Beziehung haben. Dies dient als Referenzpunkt.",
                  "{scoreNeutral}"
                ],
                [
                  "stille Disharmonie (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Paare, die sich trotz ihrer Abneigung nicht trennen können. Sie erscheinen an der Oberfläche ruhig, gelten aber als langlebig.",
                  "{scoreWonjin}"
                ],
                [
                  "Konflikt (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Paare, die direkt aufeinanderprallen. Dies sind sechs Paare, die sich gegenüberstehen.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Triaden und halbe Triaden",
        "blocks": [
          {
            "p": "Eine Triade erfordert, dass alle drei Zeichen vorhanden sind. Da es vier irdische Zweige im Geburtshoroskop gibt, ist es möglich, dass der Zweig des Tages mit ihnen kombiniert wird, was zu einer Triade führt — zu diesem Zeitpunkt erhält sie eine Punktzahl von {scoreSamhap}. Wenn nur zwei Zeichen beteiligt sind, handelt es sich um eine halbe Triade."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Halbe Triaden erfordern königliche Zeichen, um anerkannt zu werden",
        "blocks": [
          {
            "p": "Es gibt auch eine Methode, die als halbe Triade zählt, wenn beide Zeichen zur gleichen Triadengruppe gehören. Dies ermöglicht Kombinationen wie 申辰, die schwer als Kombination zu bezeichnen sind, um hohe Punktzahlen zu erhalten. Daher erkennt dieser Dienst eine halbe Triade nur an, wenn sie königliche Zeichen (子·酉·午·卯) enthält und betrachtet Kombinationen wie 申辰·巳丑·寅戌·亥未 nicht als gültig."
          }
        ]
      },
      {
        "title": "Grund für die Trennung von stiller Disharmonie",
        "blocks": [
          {
            "p": "Die sechs Paare stiller Disharmonie werden ebenso häufig wie Konflikte angesehen. Wenn man nur Kombinationen und Konflikte zählen würde, würden diese sechs Paare alle unter der Punktzahl für keine Beziehung {scoreNeutral} begraben, weshalb sie separat platziert werden."
          },
          {
            "p": "Wenn Konflikte Paare sind, die direkt aufeinanderprallen und prominent dargestellt werden, ist stille Disharmonie subtil fehlplatziert. Daher wird sie mit einer Punktzahl von {scoreWonjin} eingestuft, die höher ist als die von Konflikten ({scoreChung}), aber definitiv niedriger als keine Beziehung ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Punktzahlen werden auch für Konflikte vergeben",
        "blocks": [
          {
            "p": "Die niedrigste Konfliktbewertung ist {scoreChung}. Es ist absichtlich, keinen Wert nahe 0 zu geben. In der traditionellen myeongri ist ein Konflikt kein 'Ende', sondern eine 'Kollision', und einen Wert nahe dem Minimum zu geben, würde bedeuten, dass der Dienst eine definitive Aussage über die Beziehung trifft."
          },
          {
            "p": "Mit einem Minimum von {scoreChung} und einem Maximum von {scoreSamhap} ist der Unterschied deutlich sichtbar, aber nicht endgültig."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Tierkreiszeichen",
    "title": "Wo befindet sich das Tierkreiszeichen in der Saju?",
    "summary": "Das Tierkreiszeichen ist der irdische Zweig des Jahres, in dem Sie geboren wurden. Dies erklärt, warum es aus dem Saju-Jahr und nicht aus dem Kalenderjahr abgeleitet wird und warum diejenigen, die Anfang Januar oder Februar geboren wurden, das Tierkreiszeichen des vorherigen Jahres haben.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Das Tierkreiszeichen ist der irdische Zweig des Jahres, in dem Sie geboren wurden.",
        "blocks": [
          {
            "p": "Saju besteht aus vier Säulen: Jahr, Monat, Tag und Stunde, wobei jede Säule einen himmlischen Stamm und einen irdischen Zweig hat. Unter ihnen ist der **irdische Zweig des Jahres**, oder Jahrzweig, das Tier, das wir als Tierkreiszeichen bezeichnen."
          },
          {
            "table": {
              "caption": "Die Zwölf irdischen Zweige und Tierkreiszeichen",
              "head": [
                "Irdischer Zweig",
                "Tierkreiszeichen"
              ],
              "rows": [
                [
                  "子",
                  "Ratte"
                ],
                [
                  "丑",
                  "Ochse"
                ],
                [
                  "寅",
                  "Tiger"
                ],
                [
                  "卯",
                  "Hase"
                ],
                [
                  "辰",
                  "Drache"
                ],
                [
                  "巳",
                  "Schlange"
                ],
                [
                  "午",
                  "Pferd"
                ],
                [
                  "未",
                  "Ziege"
                ],
                [
                  "申",
                  "Affe"
                ],
                [
                  "酉",
                  "Hahn"
                ],
                [
                  "戌",
                  "Hund"
                ],
                [
                  "亥",
                  "Schwein"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Wir verwenden das Saju-Jahr, nicht das Kalenderjahr.",
        "blocks": [
          {
            "p": "Der Zeitpunkt, an dem sich das Tierkreiszeichen ändert, ist weder der 1. Januar des Sonnenkalenders noch das Mondneujahr. Der Standard für den Jahreswechsel in Saju ist **Ipchun**. Daher können diejenigen, die Anfang Januar oder Februar geboren wurden, ein anderes Tierkreiszeichen haben als das, was der Kalender angibt."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Der Grund, warum wir nicht direkt nach dem Tierkreiszeichen fragen.",
        "blocks": [
          {
            "p": "Deshalb fragen wir nur nach dem Geburtsdatum, ohne das Tierkreiszeichen auf dem Eingabebildschirm auszuwählen. Wenn die Saju-Engine das Jahr berechnet, wird es automatisch an die Ipchun-Grenze angepasst. Wenn es direkt ausgewählt wird, würde jemand, der Anfang Februar geboren wurde, ein Tierkreiszeichen wählen, das nicht mit seinem tatsächlichen Zeichen übereinstimmt."
          }
        ]
      },
      {
        "title": "Das Tierkreiszeichen ist ein Zeichen in Saju.",
        "blocks": [
          {
            "p": "Unter den acht Zeichen entspricht das Zeichen, das dem Tierkreiszeichen entspricht, **einem Jahrzweig**. Die anderen sieben Zeichen — insbesondere der Tagesstamm, der sich auf sich selbst bezieht — haben keine Beziehung zum Tierkreiszeichen."
          },
          {
            "p": "Menschen, die im selben Jahr geboren wurden, teilen sich alle dasselbe Tierkreiszeichen. Daher kann aus dem Tierkreiszeichen nur so viel wie aus einem der acht Zeichen bekannt werden. Dies ist der Grund, warum dieser Dienst das **Tierkreiszeichen nicht separat oder signifikant behandelt** — der Jahrzweig wird für die Stärke berechnet und der heutige Tag ist der Tagesstamm der Tagesbewertung, genau wie jeder andere irdische Zweig."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dennoch der Grund, warum wir das Tierkreiszeichen anzeigen.",
        "blocks": [
          {
            "p": "Es ist die einzige Position, an der die Bedeutung verstanden wird, selbst wenn man die Terminologie der myeongri nicht kennt. Wenn das Tierkreiszeichen zusammen mit dem Jahrzweig auf dem Geburtshoroskop-Bildschirm vermerkt ist, wird es zu einem Hinweis für das Lesen der anderen sieben Zeichen."
          }
        ]
      },
      {
        "title": "Der Jahrzweig bleibt gleich, auch wenn Sie die Geburtszeit nicht wissen.",
        "blocks": [
          {
            "p": "Wenn Sie die Zeit nicht eingeben, wird der Stundenstamm weggelassen und die Stärke der the five elements (fünf Elemente) ändert sich. Allerdings bleibt der **Jahreszweig gleich** — er wird ausschließlich durch das Jahr bestimmt, in dem Sie geboren wurden."
          },
          {
            "p": "Daher ändert sich die Geschichte, die aus dem Jahrzweig abgeleitet wird, nicht einmal für diejenigen, die die Zeit nicht wissen. Umgekehrt bedeutet dies, dass das, was allein auf der Grundlage des Tierkreiszeichens gesagt werden kann, begrenzt ist, unabhängig davon, ob die Zeit einbezogen ist oder nicht."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Zeit",
    "title": "Wir konvertieren die Geburtszeit in die wahre Sonnenzeit.",
    "summary": "Die Standardzeit und die tatsächliche Position der Sonne unterscheiden sich. Dies erklärt, warum die Zeit gemäß der Längengrad des Geburtsortes angepasst werden muss, um sicherzustellen, dass die Stunden-Säule korrekt ist.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Die Uhrzeit und die Sonnenzeit sind unterschiedlich",
        "blocks": [
          {
            "p": "Die Stundenäule (時柱) des saju wird durch die Position der Sonne bestimmt. Allerdings verwendet die Uhr, die wir sehen, eine einheitliche Standardzeit für das gesamte Land, die nicht mit der tatsächlichen Position der Sonne übereinstimmt."
          },
          {
            "p": "Die Standardzeit Koreas basiert auf dem 135° östlichen Längengrad. Der Längengrad von Seoul beträgt etwa 127°, was ungefähr 8° westlich ist, wodurch die Sonne später ihren Zenit erreicht — wenn es nach der Uhr Mittag ist, ist die Sonne in Seoul noch vor ihrem Zenit. Dieser Unterschied beträgt etwa **32 Minuten**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 Minuten ändern die Stundenäule um einen Slot",
        "blocks": [
          {
            "p": "Die Zeit im saju ist in zwei-Stunden-Einheiten unterteilt. Personen, die nahe der Grenze geboren wurden, haben ihre Stundenäule durch einen Unterschied von 32 Minuten vollständig verändert — Anpassungen sind notwendig, insbesondere für diejenigen, die genau an dieser Grenze liegen."
          }
        ]
      },
      {
        "title": "Der Grund, warum gefragt wird, wo Sie geboren wurden",
        "blocks": [
          {
            "p": "Wenn der Längengrad unterschiedlich ist, wird auch der Anpassungsbetrag unterschiedlich sein. Wenn Sie die auf Seoul basierende Anpassung auf jemanden anwenden, der im Ausland geboren wurde, wird die Stundenäule erheblich fehljustiert. Daher fragt der Eingabebildschirm nach Ihrem Geburtsort, und die Berechnungen basieren auf dem Längengrad und der Standardzeit dieser Stadt. Derzeit gibt es {cityCount} Orte in der Liste."
          },
          {
            "p": "Selbst innerhalb desselben Landes wurden Orte mit erheblich unterschiedlichen Längengraden (wie die Vereinigten Staaten, Russland, Indonesien usw.) in Städte unterteilt. **15° Längengrad entsprechen einer Stundenäule**."
          },
          {
            "p": "Wenn Sie nichts auswählen, werden die Berechnungen auf der Grundlage von Seoul durchgeführt. Die meisten Geburten sind im Inland, daher ist dies weniger fehleranfällig, aber wenn Sie im Ausland geboren wurden, wählen Sie bitte unbedingt aus."
          }
        ]
      },
      {
        "title": "Die Standardzeit hat sich in der Vergangenheit mehrmals geändert",
        "blocks": [
          {
            "p": "Es gibt einen Grund, warum die Anpassung nicht einfach als \"Längendifferenz ÷ 15° × 60 Minuten\" berechnet werden kann. Die Standardzeit selbst hat sich in verschiedenen Epochen geändert."
          },
          {
            "table": {
              "caption": "Änderungen der Standardzeit in Korea — diejenigen, die in diesem Zeitraum geboren wurden, werden mit einfachen Berechnungen fehljustiert",
              "head": [
                "Zeitraum",
                "Was war anders?"
              ],
              "rows": [
                [
                  "Vor 1912",
                  "Es gab keine Standardzeit (lokale Mittelzeit)"
                ],
                [
                  "1954 – 1961",
                  "Die Standardzeit war UTC+8:30"
                ],
                [
                  "1948 – 51 · 1955 – 60 · 1987 – 88",
                  "Die Sommerzeit wurde eingeführt"
                ]
              ]
            }
          },
          {
            "p": "Saju-Link fixiert den Standardmeridian nicht als konstanten Wert, sondern berechnet die tatsächliche Standardzeit, die zu diesem Zeitpunkt verwendet wird, basierend auf den **IANA-Zeitzonen**-Informationen des Geburtsortes. Die Sommerzeit und vergangene Standardzeiten werden automatisch berücksichtigt."
          }
        ]
      },
      {
        "title": "Geburten kurz nach Mitternacht berücksichtigen auch das Datum",
        "blocks": [
          {
            "p": "Da die Anpassung -32 Minuten beträgt, werden diejenigen, die zwischen 00:00 und 00:32 nach der Uhr geboren wurden, in der wahren Sonnenzeit als **23 Uhr des Vortages** betrachtet. Wenn nur die Zeit zurückgestellt wird und das Datum gleich bleibt, wird die Tagesäule (日柱) als \"23 Uhr des Vortages\" geschrieben."
          },
          {
            "p": "Saju-Link wird in diesem Fall auch das Datum anpassen. Das Zeichen über der Tagesäule bezieht sich auf den Tagestamm (日干), der mich selbst anzeigt, sodass, wenn dies fehljustiert ist, fast alle Elemente in der Interpretation fehljustiert sein werden."
          }
        ]
      },
      {
        "title": "Sie müssen die Zeit nicht wissen",
        "blocks": [
          {
            "p": "Die Geburtszeit ist optional. Wenn Sie sie nicht wissen, werden die Berechnungen ohne die Stundenäule durchgeführt, und diese Tatsache wird auf dem Ergebnisbildschirm angezeigt. Da dies bedeutet, dass zwei der acht Zeichen fehlen, wird dies die Bewertung der Stärke und Schwäche der fünf Elemente beeinflussen, daher ist es genauer, sie anzugeben, wenn Sie sie wissen."
          },
          {
            "p": "Die Jahresäule (das Tierkreiszeichen) ist immer gleich, unabhängig von der Zeit — [weil wir nur die Jahresäule betrachten](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Persönliche Informationen",
    "title": "Eine Methode, die die eingegebenen Informationen nicht speichert",
    "summary": "Es wird klargestellt, was es technisch bedeutet, dass das Geburtsdatum nirgendwo aufgezeichnet wird und was im Ergebnislink enthalten ist.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Es gibt keine Mitgliedschaftsregistrierung",
        "blocks": [
          {
            "p": "Saju-Link erstellt keine Konten. Es werden keine Namen, E-Mails oder Telefonnummern gesammelt. Die einzigen gesammelten Informationen sind das Geburtsdatum und (optional) die Geburtszeit, der Geburtsort und das Geschlecht, und diese Informationen bleiben nach Abschluss der Berechnung nicht erhalten."
          },
          {
            "p": "Es gibt ein Feld, um einen Titel einzugeben, der auf dem Ergebnisbildschirm angezeigt wird, aber das ist **nur für Anzeigezwecke** und wird nicht in Berechnungen verwendet. Sie müssen Ihren echten Namen nicht eingeben."
          }
        ]
      },
      {
        "title": "Was ist im Ergebnislink enthalten?",
        "blocks": [
          {
            "p": "Sobald die Berechnung abgeschlossen ist, sieht die Adresse so aus."
          },
          {
            "p": "**/ko/reading/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Was nach **#** folgt, sind die Eingabewerte. Dieser Teil wird als **Fragment** bezeichnet, das ein Abschnitt ist, den **der Browser nicht an den Server sendet**. Dies ist ein Standard-Webverhalten und keine Regel, die wir erstellt haben — es wurde ursprünglich entworfen, um eine Position innerhalb eines Dokuments anzuzeigen, sodass der Server keinen Bedarf hat, es zu sehen."
          },
          {
            "p": "Mit anderen Worten, wenn Sie den Ergebnislink öffnen, liest der Browser diesen Wert, um die Berechnung anzufordern, und unser Server erhält die Werte, die für die Berechnung verwendet werden, gibt die Antwort zurück und vergisst sie dann."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bitte seien Sie vorsichtig, wenn Sie den Link an andere senden",
        "blocks": [
          {
            "p": "Die Tatsache, dass es nicht auf dem Server gespeichert wird, bedeutet nicht, dass der Link sicher ist. Der Ergebnislink enthält die Geburtsdaten von zwei Personen, sodass die Person, die diesen Link erhält, dasselbe Ergebnis sehen kann."
          }
        ]
      },
      {
        "title": "Warum wird die Berechnung auf dem Server durchgeführt, aber nicht gespeichert?",
        "blocks": [
          {
            "p": "Die Berechnung selbst erfolgt auf dem Server. Die lunisolare Almanach-Tabelle wird benötigt, um das saju zu erstellen, und diese Tabelle ist zu groß, um sie an den Browser zu senden. Allerdings **verwenden wir diesen Wert nach der Bearbeitung der Anfrage nirgendwo.** Es gibt keinen Code, um ihn in eine Datenbank einzufügen."
          },
          {
            "p": "Die minimal notwendigen Aufzeichnungen für den Betrieb werden aufbewahrt — ein Zähler, um zu verhindern, dass dieselbe Person zu viele Anfragen in kurzer Zeit sendet. Dies schließt das Geburtsdatum nicht ein, und die Zugriffs-IP wird nicht gespeichert. Nur ein Wert, der mit dem Datum gehasht ist, wird gezählt, und dieser Wert ändert sich, wenn der Tag wechselt."
          }
        ]
      },
      {
        "title": "Dinge, die nicht gemacht werden können, weil Informationen nicht gespeichert werden",
        "blocks": [
          {
            "p": "Um ehrlich zu sein, gibt es Dinge, die aufgegeben wurden, weil wir keine Informationen speichern."
          },
          {
            "ul": [
              "**Sie können frühere Ergebnisse nicht abrufen.** Sie müssen den Link haben, um sie erneut anzusehen.",
              "**Die gleichen Werte werden neu berechnet.** Es gibt keinen Cache. Da jedoch alle Regeln deterministisch sind, [führt dieselbe Eingabe immer zum gleichen Wert](/guide/natal-chart).",
              "**Ein Neuladen bringt das Werbeportal zurück.** Dies liegt daran, dass es keinen Ort gibt, um die Ansichtshistorie zu hinterlassen."
            ]
          }
        ]
      },
      {
        "title": "Wenn Sie einen Kauf tätigen",
        "blocks": [
          {
            "p": "Wenn Sie einen Bericht kaufen, wird ein Transaktionsprotokoll gespeichert. Die Zahlung unterliegt den gesetzlichen Aufbewahrungsfristen, und ohne eine Bestellhistorie können Rückerstattungen nicht bearbeitet werden. Allerdings wird **das Geburtsdatum, das für die saju Berechnung verwendet wird, nicht an die Bestellung angehängt** — es wird erneut angefordert, wenn das PDF nach der Zahlungsbestätigung erstellt wird."
          },
          {
            "p": "Für weitere Details verweisen wir auf unsere [Datenschutzrichtlinie](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Bezahlte Produkte",
    "title": "Was im kostenpflichtigen Bericht enthalten ist",
    "summary": "Es wird klargestellt, was dem PDF hinzugefügt wurde, während der Bildschirm unverändert bleibt. Werte und Inhalte werden aus den tatsächlichen Produkteinstellungen abgerufen.",
    "backLabel": "Berechnungsgrundlage",
    "sections": [
      {
        "title": "Der Bildschirm bleibt unverändert, nur dem PDF wurde hinzugefügt",
        "blocks": [
          {
            "p": "Die saju Berechnung und Ergebnisabfrage sind **kostenlos**. Sie können alles auf dem Bildschirm sehen, einschließlich des Geburtshoroskops, der fünf Elemente, der heutigen Fortune und deren Grundlage, da bei der Erstellung des kostenpflichtigen Berichts nichts weggelassen wurde."
          },
          {
            "p": "Die Rolle des Berichts besteht darin, **Ebenen hinzuzufügen, die auf dem Bildschirm nicht vorhanden sind**. Diese Ebenen sind nicht erfunden; es sind Werte, die bereits während des Bewertungsprozesses berechnet wurden, aber nicht auf dem Bildschirm verwendet wurden."
          }
        ]
      },
      {
        "title": "Lebenslange saju und Glücksbericht für dieses Jahr PDF — {priceDomestic}",
        "slot": "reportContents",
        "blocks": [
          {
            "p": "Inlandszahlung {priceDomestic} (inklusive MwSt.), internationale Zahlung {priceGlobal}. Es besteht aus {pageCount} A4-Seiten."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "Das Inhaltsverzeichnis wird direkt aus der Produktbeschreibung gelesen. **Die Seitenanzahl ist die gleiche wie das tatsächliche Dokument** — sie wird nicht aufgebläht, da es der im Produktinformationshinweis angegebene Wert ist."
          }
        ]
      },
      {
        "title": "Was nicht auf dem Bildschirm ist",
        "blocks": [
          {
            "p": "Der kostenlose Bildschirm zeigt das Geburtshoroskop, die fünf Elemente und die heutige Fortune. Es gibt drei Werte, die während des Berechnungsprozesses erzeugt wurden, aber nicht auf dem Bildschirm angezeigt werden, und dies sind die Teile des kostenpflichtigen Berichts."
          },
          {
            "ul": [
              "**Verhältnis der Verbündeten des Tagesstammes** — Es zeigt numerisch, wo das Urteil über einen starken oder schwachen Tagesstamm gefällt wurde. Der Urteilsname allein zeigt nicht an, ob es am Rand oder reichlich war.",
              "**Wang Sang Hyu Su Sa** — Wie sehr der Geburtsmonat jede Energie angehoben hat. Wenn die Leistungsanzeige angibt, 'wie viel vorhanden ist', zeigt diese Tabelle an, 'ob es in Saison ist'.",
              "**Details zur Korrektur der wahren Solarzeit** — Das Konzept ist im Leitdokument enthalten, aber **'wie viele Minuten in Ihrem Fall verschoben wurden'** ist ein anderer Wert für jede Person, daher ist es nur im Bericht enthalten."
            ]
          }
        ]
      },
      {
        "title": "Was Sie vor dem Kauf wissen sollten",
        "blocks": [
          {
            "p": "**Der Server speichert keine Dateien.** Sobald die Zahlung genehmigt ist, wird das Dokument sofort erstellt und gesendet, ohne etwas auf dem Server zu hinterlassen. Das Prinzip dieses Dienstes, keine Eingabewerte zu speichern, wird auch im kostenpflichtigen Ablauf aufrechterhalten."
          },
          {
            "p": "Daher **bitte speichern Sie die Datei sofort nach der Zahlung.** Sie können sie bis zu fünfmal mit derselben Bestellung erhalten, aber wenn Sie den Ergebnisscreen verlassen und die Eingabewerte verschwinden, kann sie nicht erneut erstellt werden."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Berichte sind auch Referenzmaterialien",
        "blocks": [
          {
            "p": "Nur weil die Seitenanzahl gestiegen ist, bedeutet das nicht, dass die Schlussfolgerungen sicherer sind. Was der Bericht hinzufügt, ist **die Grundlage derselben Berechnung**, nicht eine stärkere Behauptung. Schicksal ist ein Bereich, in dem die Schlussfolgerungen je nach Praktiker variieren können, und dieser Dienst berechnet nur, was in Regeln übersetzt werden kann."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Hinweis",
    "title": "Ankündigungen",
    "summary": "Dies ist ein Ort, um Änderungen zu informieren, die die Nutzung beeinflussen können.",
    "backLabel": "Zurück zum Anfang",
    "sections": []
  },
  "contact": {
    "eyebrow": "Kontakt",
    "title": "Anfragen",
    "summary": "Dies ist der Kanal für Anfragen zu Nutzung, Rückerstattungen, Anfragen zu persönlichen Informationen und Fehlerberichten sowie für Geschäftsinformationen.",
    "backLabel": "Zurück zum Anfang",
    "sections": [
      {
        "title": "Kontakt per E-Mail",
        "blocks": [
          {
            "p": "Bitte senden Sie Anfragen an **{email}**. Wir werden innerhalb von 2 Werktagen antworten. Für Anfragen zu Zahlungen und Rückerstattungen geben Sie bitte **die Bestellnummer oder die E-Mail, die für die Zahlung verwendet wurde** an, um eine schnellere Bestätigung zu erhalten."
          },
          {
            "p": "Telefonanfragen werden unter {customerCenter} entgegengenommen."
          }
        ]
      },
      {
        "title": "Was an diesen Kanal gesendet werden kann",
        "blocks": [
          {
            "ul": [
              "**Zahlung und Rückerstattung** — Wenn das Dokument nicht erstellt wurde oder der Zahlungsbetrag von der Bestellung abweicht, wird eine vollständige Rückerstattung gewährt. Die Bedingungen finden Sie in der [Rückerstattungsrichtlinie](/refund-policy).",
              "**Persönliche Informationen** — Wir akzeptieren Anfragen zur Einsichtnahme, Korrektur und Löschung. Die Bearbeitungsrichtlinie finden Sie in der [Datenschutzrichtlinie](/privacy).",
              "**Fehlerbericht zur Berechnung** — Wenn das saju Geburtshoroskop oder die Punktzahlen seltsam erscheinen, lassen Sie es uns bitte wissen. Wenn Sie angeben, wann Sie das Geburtsdatum und die Uhrzeit eingegeben haben, können wir mit denselben Werten neu berechnen."
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
              "**Geschäftsregistrierungsnummer** — {businessNumber}",
              "**Registrierungsnummer für den Versandhandel** — {mailOrderNumber}",
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
            "p": "Es ist nicht notwendig, Ihr Geburtsdatum und Ihre Uhrzeit in der Anfrage-E-Mail anzugeben. Wir speichern keine Eingaben, daher können wir sie später nicht abrufen, und was bestätigt werden muss, ist mit der Bestellnummer ausreichend. Bitte geben Sie es nur an, wenn Werte absolut notwendig sind, wie in einem Fehlerbericht zur Berechnung."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const DE_NOTICES = {
  "kindLabels": {
    "service": "Dienst",
    "product": "Bericht",
    "engine": "Berechnungskriterien",
    "support": "Anfrage"
  },
  "intro": "Änderungen, die die Nutzungsbedingungen betreffen, wie Preise und Bedingungen, werden hier vor der Umsetzung veröffentlicht. Interne Verbesserungen, wie eine schnellere Anzeige, werden hier nicht veröffentlicht: Was hier erscheint, ist nur das, was Sie wissen müssen.",
  "empty": {
    "title": "Es wurden keine Mitteilungen veröffentlicht.",
    "body": "Wenn es Änderungen gibt, die Sie informieren, werden sie hier veröffentlicht."
  },
  "effective": "Gültig ab {date}",
  "pager": {
    "label": "Mitteilungsseite",
    "newer": "← Neueste",
    "older": "Frühere Mitteilungen →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Das Anfragefenster und die Dienstleistungsseite wurden eröffnet.",
      "body": [
        "Wir haben ein zentrales Fenster für Anfragen, Rückerstattungen, Anfragen zu persönlichen Daten und Meldungen von Berechnungsfehlern eingerichtet. Sie können es am unteren Bildschirmrand unter 'Anfragen' einsehen.",
        "Wenn Sie uns über etwas informieren, das wie ein Berechnungsfehler aussieht, geben Sie bitte das Geburtsdatum und die Geburtszeit an, die Sie eingegeben haben. Wir speichern die Eingabe nicht, daher können wir ohne diesen Wert nicht neu berechnen."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "In arabischen und khmerischen Bildschirmen wird der Bericht auf Englisch erstellt.",
      "body": [
        "Wenn Sie den Bildschirm auf Arabisch oder Khmer anzeigen, wird der PDF-Bericht, den Sie kaufen, auf Englisch erstellt. Dies liegt daran, dass das Tool diese beiden Schriften noch nicht in Absätze formatieren konnte.",
        "Sie können den Bildschirm weiterhin so sehen, wie er ist, und der Name, der im Bericht geschrieben ist, wird genau so sein, wie Sie ihn eingegeben haben.",
        "Die gleichen Informationen werden auch im Voraus auf dem Zahlungsbildschirm bereitgestellt. Wir werden Sie hier benachrichtigen, wenn das Tool diese Schriften unterstützt."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Die Berechnungskriterien werden mit den Ergebnissen enthalten sein.",
      "body": [
        "Unter dem Ergebnisbildschirm und dem Bericht sind die Berechnungskriterien (z.B. sajulink-natal-v1) angegeben. Wenn die Eingabe gleich ist, wird unter den gleichen Kriterien immer der gleiche Wert ausgegeben.",
        "Wenn sich die Regeln zur Interpretation von myeongri ändern und die Punktzahlen abweichen können, werden wir zunächst diese Tatsache und das Datum der Wirksamkeit hier veröffentlichen. Dies liegt daran, dass die Zahlen in den Ergebnislinks, die Sie zuvor erhalten haben, sich ändern können.",
        "Die aktuellen Kriterien sind v10, und die Zahlung ist noch in Vorbereitung."
      ]
    }
  }
} satisfies NoticeCopy;
