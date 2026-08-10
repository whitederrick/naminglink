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
