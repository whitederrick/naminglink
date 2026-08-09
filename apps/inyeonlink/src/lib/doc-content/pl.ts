import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Polski — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const PL_DOCS = {
  "about": {
    "eyebrow": "O nas",
    "title": "O Inyeon-Link",
    "summary": "Porównujemy dwa wykresy urodzeniowe w koreańskiej tradycji saju. Oto co obliczamy i co odmawiamy twierdzenia.",
    "backLabel": "Strona główna",
    "sections": [
      {
        "title": "Co robimy",
        "blocks": [
          {
            "p": "Inyeon-Link tworzy dwa wykresy urodzeniowe na podstawie dat i godzin urodzenia i pokazuje **jak dwa zestawy energii się spotykają.** Możesz również przeczytać swój własny wykres samodzielnie i zobaczyć, które temperamenty mogą Ci odpowiadać."
          },
          {
            "p": "Czytanie na ekranie jest **darmowe i nie wymaga konta.** Płatne elementy to raporty PDF zawierające dane, których ekran nigdy nie pokazuje — siły elementów, pary dziesięciu bogów i relacje we wszystkich czterech filarach."
          }
        ]
      },
      {
        "title": "Co obliczamy",
        "blocks": [
          {
            "p": "Wykresy są tworzone na podstawie **koreańskiego kalendarza lunisolarnym**, a czas urodzenia jest korygowany do **prawdziwego czasu słonecznego** dla miejsca urodzenia — ten sam czas zegarowy oznacza inną pozycję słońca w zależności od miejsca urodzenia."
          },
          {
            "p": "Wyniki pochodzą tylko z ustalonych zasad. Tradycyjne koncepcje — dziesięciu bogów, relacje między gałęziami, wspierający element — są wyrażane jako zasady, więc **ten sam input zawsze daje ten sam wynik.** Kiedy zasada się zmienia, uruchamiamy regresję, aby upewnić się, że starsze odczyty się nie zmieniły."
          },
          {
            "p": "**Nie ma zaangażowanej sztucznej inteligencji.** Każde zdanie na ekranie to stały tekst przypisany do obliczonego wyniku."
          }
        ]
      },
      {
        "title": "Czego nie będziemy twierdzić",
        "blocks": [
          {
            "ul": [
              "**Nie wróżymy.** Nic tutaj nie mówi, abyś miał dążyć do kogoś lub unikać kogoś. To odniesienie wyciągnięte z tradycji.",
              "**Nie przechowujemy tego, co wpisujesz.** Szczegóły urodzenia są używane w momencie obliczenia i nigdy nie są zapisywane; linki wynikowe znajdują się w części URL, której przeglądarka nie wysyła do serwera.",
              "**Wynik nie jest wyrokiem na osobę.** Niska liczba nie unieważnia związku."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Metoda jest opisana szczegółowo w [przewodnikach](/guide). Szczegóły firmy i jak się z nami skontaktować znajdują się na [stronie kontaktowej](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Podstawa obliczeń",
    "title": "Jaka jest podstawa obliczeń?",
    "summary": "Inyeon-Link ujawnia wszystkie zasady, które stosuje. Możesz sprawdzić elementy i ich wagi, wyniki z tabeli relacji gałęzi ziemskich oraz wartości progowe, które odróżniają silnego mistrza dnia od słabego mistrza dnia — możesz zobaczyć, skąd pochodzą liczby na ekranie.",
    "backLabel": "Powrót do początku",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Wartości zapisane tutaj są **bezpośrednio odczytywane z kodu obliczeniowego**. Ponieważ nie są ręcznie przepisywane do tekstu, jeśli zasady się zmienią, liczby w tym dokumencie również się zmienią."
          }
        ]
      }
    ]
  },
  "guide/how-compatibility": {
    "eyebrow": "Podstawa usługi",
    "title": "Na co zwraca uwagę kompatybilność saju?",
    "summary": "Wyjaśnia cztery elementy i ich odpowiednie wagi oraz wyjaśnia, dlaczego te cztery zostały wybrane. Zajmuje się również tym, dlaczego obliczenia mogą być dokonywane nawet bez znajomości czasu urodzenia.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Obliczanie i łączenie dwóch osi",
        "blocks": [
          {
            "p": "Wskaźnik dopasowania pochodzi z dwóch gałęzi. **Kompatybilność saju** patrzy na cały oryginalny wykres saju obu osób, podczas gdy **kompatybilność zodiakalna** bierze pod uwagę tylko jedną gałąź ziemską z roku urodzenia. Ostateczna wartość uzyskiwana jest przez ważoną średnią obu."
          },
          {
            "table": {
              "head": [
                "Oś",
                "Co jest brane pod uwagę",
                "Waga"
              ],
              "rows": [
                [
                  "Kompatybilność Saju",
                  "Mistrz dnia, gałąź dnia i pięć elementów — cztery elementy",
                  "{weightSaju}"
                ],
                [
                  "Kompatybilność Zodiakalna",
                  "Relacja między gałęziami roku",
                  "{weightZodiac}"
                ]
              ]
            }
          },
          {
            "p": "Strona saju jest znacznie cięższa, ponieważ ilość używanych informacji jest różna. Saju uwzględnia wszystkie cztery filary, podczas gdy zodiak patrzy tylko na jeden znak. Jednak zodiak nie jest wykluczony z dwóch powodów — jest to najbardziej intuicyjnie zrozumiały element i jest to **jedyna oś, której wartość nie fluktuuje nawet bez znajomości czasu urodzenia**."
          }
        ]
      },
      {
        "title": "Cztery elementy kompatybilności saju",
        "blocks": [
          {
            "p": "Strona saju jest dalej podzielona na cztery. Każdy element jest wybierany, aby zapewnić, że to, co biorą pod uwagę, nie pokrywa się."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju składa się z ośmiu znaków utworzonych przez niebiańskie pnie i ziemskie gałęzie roku, miesiąca, dnia i godziny urodzenia. Mistrz dnia i gałąź dnia wspomniane poniżej to dwa znaki w filarze dnia.",
            "labels": {
              "year": "Filar Roku",
              "yearNote": "Korzeń · Zodiak",
              "month": "Filar Miesiąca",
              "monthNote": "Sezon · Siła",
              "day": "Filar Dnia",
              "dayNote": "Ja · Pałac Małżonka",
              "hour": "Filar Godziny",
              "hourNote": "Późniejsze Lata · Użytkowanie",
              "stem": "Niebiański Pień",
              "stemNote": "Mistrz Dnia = Ja",
              "branch": "Gałąź Ziemska",
              "branchNote": "Gałąź Dnia = Pałac Małżonka"
            }
          },
          {
            "table": {
              "head": [
                "Element",
                "Co jest Uważane",
                "Waga"
              ],
              "rows": [
                [
                  "Relacja Pnia Dnia",
                  "Jakie są wzajemne relacje pni dni (日干) dwóch osób — postrzegane przez pryzmat Dziesięciu Bogów",
                  "{weightDayMaster}"
                ],
                [
                  "Uzupełnienie Pięciu Elementów",
                  "Czy partner ma energię, której potrzebuję — postrzegane przez pryzmat elementu wspierającego, którego obecnie potrzebuje wykres",
                  "{weightElementSupply}"
                ],
                [
                  "Gwiazda Małżonka",
                  "Czy pień dnia partnera odpowiada mojej pozycji małżonka?",
                  "{weightSpouseStar}"
                ],
                [
                  "Relacja Gałęzi Dnia",
                  "Czy gałęzie dni (日支) dwóch osób są kombinacją czy zderzeniem?",
                  "{weightDayBranch}"
                ]
              ]
            }
          },
          {
            "p": "Gałąź dnia jest odczytywana, ponieważ tradycja traktuje ją jako **pałac małżonka**. Z czterech filarów jest to ten, który wskazuje na partnera, co czyni go pierwszym miejscem, w którym szuka się kompatybilności."
          }
        ]
      },
      {
        "title": "Jeśli płeć nie jest ujawniona, element małżonka jest pomijany",
        "blocks": [
          {
            "p": "Element małżonka wymaga znajomości płci do obliczeń. Tradycja odczytuje pozycję wskazującą na małżonka inaczej w zależności od płci. Jeśli nie jest ujawniona, ten element zostanie **wykluczony** a wagi pozostałych trzech elementów zostaną ponownie znormalizowane."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nie będzie traktowane jako 0 punktów",
        "blocks": [
          {
            "p": "Jeśli brakujące pozycje będą traktowane jako 0 punktów, wynik zostanie niesprawiedliwie obniżony tylko dlatego, że płeć nie została ujawniona. Ponowna normalizacja wag zapobiega temu problemowi."
          }
        ]
      },
      {
        "title": "Obliczenia mogą być wykonane bez znajomości czasu urodzenia",
        "blocks": [
          {
            "p": "Czas urodzenia jest używany do określenia filaru godziny. Jeśli jest nieznany, obliczenia będą przeprowadzane bez filaru godziny, a ten fakt zostanie wskazany na ekranie wyników. Ponieważ nie ma bezpośredniego wejścia dla filaru godziny wśród czterech elementów kompatybilności, wartości nie będą się znacząco wahać, ale wpływa to na równowagę pięciu elementów."
          },
          {
            "p": "Jeśli znasz czas, proszę również wybrać miejsce urodzenia. Jeśli czas standardowy różni się od rzeczywistej pozycji słonecznej, użycie go tak, jak jest, może spowodować niezgodność filaru godziny [(korekta prawdziwego czasu słonecznego)](/guide/true-solar-time)."
          }
        ]
      },
      {
        "title": "Te same dane wejściowe zawsze dadzą tę samą wartość",
        "blocks": [
          {
            "p": "Wszystkie wyniki są określane przez zasady. Nie używa się sztucznej inteligencji ani liczb losowych. Dlatego wprowadzenie tych samych dwóch dat urodzenia wielokrotnie nie przyniesie różnych wyników. Jako usługa, która nie przechowuje danych, wcześniejsze wyniki nie mogą być odzyskane, ale **deterministyczność** to rekompensuje."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Zmiana zasad podniesie wersję",
        "blocks": [
          {
            "p": "Za każdym razem, gdy zasady punktacji są zmieniane, wersja silnika jest aktualizowana. Wersja jest podana na dole ekranu wyników, co pozwala odróżnić, które zasady zostały użyte do obliczenia liczb, które obecnie widzisz."
          }
        ]
      },
      {
        "title": "Czym ten wynik nie jest",
        "blocks": [
          {
            "p": "To jest **materiał referencyjny** obliczony na podstawie zasad zbudowanych z perspektywy tradycji. Nie jest to naukowa prognoza, ani definitywne stwierdzenie o relacji między dwiema osobami. Zakres punktów jest ustawiony na minimum około 45 punktów z tego powodu — żadna kombinacja nie da wartości bliskiej 0 punktów."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Tabela Relacji",
    "title": "Dwanaście Gałęzi Ziemskich — Kombinacja, Zderzenie, Niezgoda",
    "summary": "To jest tabela relacji używana zarówno do kompatybilności gałęzi dnia, jak i kompatybilności zodiakalnej. W pełni ujawnia, co oznacza każda kombinacja, zderzenie i niezgoda oraz ich odpowiednie wyniki.",
    "backLabel": "Podstawa Obliczeń",
    "sections": [
      {
        "title": "Gałęzie ziemskie składają się z dwunastu znaków",
        "blocks": [
          {
            "p": "Dwanaście gałęzi ziemskich (十二支) to 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Powszechnie znane znaki zodiaku są związane z każdym z tych dwunastu znaków."
          },
          {
            "figure": "branch-wheel",
            "caption": "Ułożenie dwunastu znaków w okrąg zapewnia wyraźny widok relacji. Zderzenie zawsze siedzi bezpośrednio naprzeciwko, podczas gdy para sześciowej harmonii i cicha niezgoda są bliższymi sąsiadami. Te linie pochodzą bezpośrednio z zasad obliczeń, a nie są zapisane w tekście.",
            "labels": {
              "alt": "Diagram pokazujący dwanaście gałęzi ziemskich ułożonych w okrąg z liniami łączącymi sześciową harmonię, zderzenie i niezgodę.",
              "yukhap": "Sześciowa Harmonia",
              "chung": "Zderzenie",
              "wonjin": "Niezgoda",
              "rat": "Szczur",
              "ox": "Wół",
              "tiger": "Tygrys",
              "rabbit": "Królik",
              "dragon": "Smok",
              "snake": "Wąż",
              "horse": "Koń",
              "goat": "Koza",
              "monkey": "Małpa",
              "rooster": "Kogut",
              "dog": "Pies",
              "pig": "Świnia"
            }
          },
          {
            "p": "W saju, każda z czterech filarów ma jedną ziemską gałąź. Inyeon-Link wykorzystuje **dzień gałęzi** (pałac małżonka) oraz **rok gałęzi** (zwierzę zodiakalne) spośród nich. Obie pozycje są oceniane za pomocą poniższej tabeli relacji."
          }
        ]
      },
      {
        "title": "Cała tabela relacji",
        "blocks": [
          {
            "table": {
              "caption": "Uszeregowana według najwyższego wyniku. To są wartości faktycznie używane przez Inyeon-Link.",
              "head": [
                "Relacja",
                "Odpowiednia para",
                "Znaczenie",
                "Wynik"
              ],
              "rows": [
                [
                  "Kombinacja (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Gdy wszystkie trzy znaki się zbierają, tworzą kompletną formację elementarną — **guk** (局). Uważa się to za najsilniejszą kombinację.",
                  "{scoreSamhap}"
                ],
                [
                  "Sześć-harmonii (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Pary, które przyciągają się nawzajem. To najczęstsza kombinacja w kompatybilności, ponieważ składa się tylko z dwóch znaków.",
                  "{scoreYukhap}"
                ],
                [
                  "Połowa triady (半合)",
                  "Dwa znaki, które zawierają królewską gałąź (王地) z triady (子·酉·午·卯)",
                  "Połowa kombinacji, która zawiera znak w centrum formacji. Nie może utworzyć kompletnej kombinacji tylko z dwóch znaków, co czyni ją niższą niż pełna triada.",
                  "{scoreBanhap}"
                ],
                [
                  "Ta sama ziemska gałąź",
                  "子子 · 丑丑 …",
                  "Znaki, które są takie same. Oznacza to, że przypominają się nawzajem, ale nie implikuje to przyciągania, więc jest umieszczone w środku.",
                  "{scoreSame}"
                ],
                [
                  "Neutralny",
                  "Pary, które nie należą do żadnej z powyższych lub poniższych kategorii",
                  "Kombinacja bez specjalnej relacji. To jest punkt odniesienia.",
                  "{scoreNeutral}"
                ],
                [
                  "Cicha niezgoda (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Pary, które nie mogą się rozdzielić pomimo żywienia urazy. Na powierzchni wydają się ciche, ale uważa się, że trwają długo.",
                  "{scoreWonjin}"
                ],
                [
                  "Zderzenie (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Pary, które zderzają się bezpośrednio. To sześć par napotykających się nawzajem.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pełne triady nie pojawiają się w tej usłudze",
        "blocks": [
          {
            "p": "Pełna triada wymaga trzech znaków do utworzenia. Jednak kompatybilność jest zbudowana poprzez dopasowanie ziemskich gałęzi dwóch osób **jeden po drugim**, co skutkuje tylko dwoma znakami. Dlatego to, co pojawia się tutaj, to zawsze pół triada, a punkty pełnej triady {scoreSamhap} są zarezerwowane na badanie formacji w każdym saju."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Pół triady musi zawierać królewską gałąź",
        "blocks": [
          {
            "p": "Istnieje również metoda, która liczy się jako pół triada, jeśli oba znaki należą do tej samej grupy triady. Może to prowadzić do wysokich wyników nawet dla kombinacji, które trudno nazwać triadą, takich jak 申辰. Dlatego ta usługa uznaje pół triadę tylko dla par, które zawierają królewską gałąź (王地) (子·酉·午·卯), a kombinacje takie jak 申辰·巳丑·寅戌·亥未 bez królewskiej gałęzi nie są liczone jako triady."
          }
        ]
      },
      {
        "title": "Powód oddzielania cichej niezgody",
        "blocks": [
          {
            "p": "Sześć par cichej niezgody jest postrzeganych tak samo często w kompatybilności jak zderzenia. Jeśli liczymy kombinacje jako pary i zderzenia, te sześć par byłoby wszystkie pogrzebane pod neutralnymi punktami {scoreNeutral}, więc są umieszczone osobno."
          },
          {
            "p": "Podczas gdy zderzenia są jawne i uderzające, cicha niezgoda jest subtelnie źle dopasowana. Dlatego jest umieszczona na poziomie {scoreWonjin}, który jest wyższy niż zderzenia ({scoreChung}), ale zdecydowanie niższy niż neutralny ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Wyniki są również przypisane do zderzeń",
        "blocks": [
          {
            "p": "Najniższy wynik zderzenia to {scoreChung}. Intencją nie jest przypisanie wartości bliskiej 0. W tradycji zderzenie nie jest 'końcem', lecz 'kolizją', a przypisanie niskiego wyniku sugerowałoby, że usługa wydaje ostateczne oświadczenie na temat relacji."
          },
          {
            "p": "Z minimum {scoreChung} i maksimum {scoreSamhap}, zakres jest jasny, ale nie prowadzi do ostatecznego wniosku."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Zodiak",
    "title": "Dlaczego zgodność zodiakalna uwzględnia gałąź roku?",
    "summary": "Zodiak to gałąź ziemska roku urodzenia. To wyjaśnia, dlaczego pochodzi z filaru roku saju, a nie z roku kalendarzowego, i wyjaśnia znaczenie zgodności zodiakalnej.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Zodiak to gałąź ziemska roku urodzenia",
        "blocks": [
          {
            "p": "Saju składa się z czterech filarów: roku, miesiąca, dnia i godziny, z których każdy zawiera jeden niebiański pień i jedną ziemską gałąź. **Gałąź roku** to ta, która niesie zwierzę, które nazywamy znakiem zodiaku."
          },
          {
            "table": {
              "caption": "Dwanaście Ziemskich Gałęzi i Zodiak",
              "head": [
                "Ziemska Gałąź",
                "Zodiak"
              ],
              "rows": [
                [
                  "子",
                  "Szczur"
                ],
                [
                  "丑",
                  "Wół"
                ],
                [
                  "寅",
                  "Tygrys"
                ],
                [
                  "卯",
                  "Królik"
                ],
                [
                  "辰",
                  "Smok"
                ],
                [
                  "巳",
                  "Wąż"
                ],
                [
                  "午",
                  "Koń"
                ],
                [
                  "未",
                  "Owca"
                ],
                [
                  "申",
                  "Małpa"
                ],
                [
                  "酉",
                  "Kogut"
                ],
                [
                  "戌",
                  "Pies"
                ],
                [
                  "亥",
                  "Świnia"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Używamy roku saju, a nie roku kalendarzowego",
        "blocks": [
          {
            "p": "Moment, w którym zodiak się zmienia, nie jest ani 1 stycznia kalendarza słonecznego, ani Nowym Rokiem Księżycowym. Standardem zmiany roku w saju jest **Ipchun**. Dlatego osoby urodzone w styczniu lub na początku lutego mogą mieć inny rok zodiakalny niż ten w kalendarzu."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Powód, dla którego nie pytamy bezpośrednio o zodiak",
        "blocks": [
          {
            "p": "Dlatego zbieramy tylko datę urodzenia, nie pytając o zodiak na ekranie wejściowym. Gdy silnik saju oblicza gałąź roku, granica Ipchun jest automatycznie dostosowywana. Jeśli wybierzesz to bezpośrednio, ktoś urodzony na początku lutego może wybrać zodiak, który nie odpowiada jego rzeczywistemu."
          }
        ]
      },
      {
        "title": "Zgodność zodiakalna uwzględnia tylko jedną relację",
        "blocks": [
          {
            "p": "Obliczenie zgodności zodiakalnej jest proste. Porównuje gałęzie roku dwóch osób, aby określić, czy relacja jest harmonijna, czy występuje konflikt, czy cicha niezgoda, i używa tego wyniku tak, jak jest. Ponieważ jest tylko jeden element, nie ma potrzeby przydzielania wag."
          },
          {
            "p": "Wyniki dla każdej relacji są wszystkie wymienione w [Tabeli Relacji Dwunastu Gałęzi](/guide/branches). Zgodność gałęzi dnia korzysta z tej samej tabeli."
          }
        ]
      },
      {
        "title": "Powód ustalania wagi",
        "blocks": [
          {
            "p": "Zgodność zodiakalna stanowi {weightZodiac} końcowej stawki dopasowania. Podczas gdy zgodność saju uwzględnia wszystkie cztery filary, zodiak bierze pod uwagę tylko jeden element, więc nie mogą być one ważone równo."
          },
          {
            "p": "Jednak istnieją dwa powody, dla których nie jest to wykluczone."
          },
          {
            "ul": [
              "**To najbardziej intuicyjnie zrozumiały element**. Nawet bez znajomości słownictwa tradycji, 'tygrys i małpa się kłócą' ma sens.",
              "**To jedyna oś, która nie zmienia się, nawet jeśli czas urodzenia jest nieznany**. Jeśli nie znasz czasu, filar godziny jest brakujący, a siła pięciu elementów się zmienia, ale gałąź roku pozostaje taka sama."
            ]
          }
        ]
      },
      {
        "title": "Możesz również przeglądać zgodność zodiakalną osobno",
        "blocks": [
          {
            "p": "Na ekranie wyników pokazujemy wyniki zarówno zgodności saju, jak i zgodności zodiakalnej osobno. Jeśli tylko końcowa stawka dopasowania jest przedstawiona, nie jest jasne, skąd pochodzi ta liczba. Jeśli dwie wartości są znacznie różne, to samo w sobie jest warte zauważenia."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "Dziesięć Bogów",
    "title": "Dziesięć Bogów i Pozycja Małżonka",
    "summary": "Patrzymy na to, co każdy dzieńowy pień oznacza dla siebie nawzajem przez Dziesięć Bogów. Wyjaśniamy, dlaczego bezpośrednie bogactwo i pośrednie bogactwo są odczytywane inaczej, mimo że oba są bogactwem.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Stempel dnia to sama osoba",
        "blocks": [
          {
            "p": "Wśród ośmiu znaków saju, **dzień** (heavenly stem dnia urodzenia) odnosi się do samej osoby. Pozostałe siedem znaków jest odczytywanych jako środowisko, w którym znajduje się ten dzień."
          },
          {
            "p": "**Dziesięć Bogów** (十神) dzieli sposób, w jaki stempel dnia postrzega inne znaki, na dziesięć kategorii. To, co mnie wspiera, to **zasoby**, to, co jest takie samo jak ja, to **rówieśnik**, to, co produkuję, to **wynik**, to, co kontroluję, to **bogactwo**, a to, co mną rządzi, to **władza** — każda z pięciu kategorii jest następnie podzielona według polaryzacji, co daje dziesięć."
          }
        ]
      },
      {
        "title": "Co każdy dzień oznacza dla siebie nawzajem",
        "blocks": [
          {
            "p": "To jest pierwszy element w kompatybilności. Gdy ustali się, jak dzień A postrzega dzień B, postrzeganie B przez A również zostaje ustalone, więc istnieje **tylko sześć możliwości**."
          },
          {
            "table": {
              "caption": "W kolejności najwyższego wyniku",
              "head": [
                "Para",
                "Yin/Yang",
                "Nazwa",
                "Znaczenie"
              ],
              "rows": [
                [
                  "Bezpośrednie Bogactwo ↔ Bezpośrednia Władza",
                  "Przeciwna biegunowość",
                  "Ciepła więź (有情)",
                  "To jest para tradycyjnie postrzegana jako pozycja małżonka. Yin i yang są niedopasowane, przyciągając się nawzajem."
                ],
                [
                  "Raniący Oficer ↔ Bezpośrednie Zasoby",
                  "Przeciwna biegunowość",
                  "Raniący Oficer noszący Pieczęć (傷官佩印)",
                  "Jedna strona owija intensywną energię drugiej strony."
                ],
                [
                  "Przyjaciel ↔ Przyjaciel",
                  "Ta sama biegunowość",
                  "Równy",
                  "Przypominają siebie nawzajem i są równi, ale nie naciskają na siebie."
                ],
                [
                  "Rywal ↔ Rywal",
                  "Przeciwna biegunowość",
                  "Rywalizacja",
                  "Przyciągają się nawzajem, ale konkurują o tę samą pozycję."
                ],
                [
                  "Pośrednie Bogactwo ↔ Pośrednia Władza",
                  "Ta sama biegunowość",
                  "Zimna więź (無情)",
                  "Stymulacja jest duża, ale obciążenie również jest ciężkie."
                ],
                [
                  "Jedzący Bóg ↔ Pośrednie Zasoby",
                  "Ta sama biegunowość",
                  "Sowa kradnie jedzenie (梟神奪食)",
                  "Energia dawana jest zabierana przez drugą stronę, blokując przepływ."
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yin i Yang są na rozdrożu",
        "blocks": [
          {
            "p": "Strona, gdzie yin i yang są niedopasowane (Proper Wealth, Proper Officer, Proper Companion) jest emocjonalna, podczas gdy ta sama strona (Resource, Officer, Companion) jest bezemocjonalna, co jest zasadą, która odróżnia właściwą stronę od strony Dziesięciu Bogów."
          }
        ]
      },
      {
        "title": "Powód, dla którego patrzymy przez Dziesięć Bogów zamiast trzech elementów",
        "blocks": [
          {
            "p": "Istnieje metoda patrzenia na relację dnia z trzema elementami (wzajemne generowanie, podobieństwo, wzajemne pokonywanie). Jest to proste, ale **yin i yang znikają.** 甲 (yang wood) i 乙 (yin wood) stają się tym samym 'podobieństwem' jak 甲 i 甲, a wzajemne pokonywanie jest spłaszczane do jednego wyniku bez kierunku ani yin i yang."
          },
          {
            "p": "Pozycja małżonka musi być oceniana w kontekście Dziesięciu Bogów. Jeśli elementy postrzegane przez pięć elementów i elementy postrzegane przez Dziesięć Bogów są mieszane w jednym silniku, będą dwa standardy dla tych samych dwóch znaków. Dlatego jednoczymy się z Dziesięcioma Bogami."
          }
        ]
      },
      {
        "title": "Pozycja małżonka to Właściwe Bogactwo i Właściwa Władza",
        "blocks": [
          {
            "p": "W tradycji, który z Dziesięciu Bogów reprezentuje małżonka, różni się w zależności od płci."
          },
          {
            "table": {
              "head": [
                "Płeć",
                "Pozycja Małżonka",
                "Odpowiednia Pozycja"
              ],
              "rows": [
                [
                  "Mężczyzna",
                  "Bezpośrednie Bogactwo (正財)",
                  "Pośrednie Bogactwo (偏財)"
                ],
                [
                  "Kobieta",
                  "Bezpośrednia Władza (正官)",
                  "Pośrednia Władza (偏官)"
                ]
              ]
            }
          },
          {
            "p": "Nawet jeśli są tymi samymi zasobami, tylko emocjonalny **Właściwy Majątek** jest uważany za pozycję małżonka, podczas gdy Zasób jest odczytywany jako natura aktywności i bogactwa. Dlatego Właściwy Majątek i Właściwy Urzędnik liczą się jako 2 punkty, podczas gdy Zasób i Urzędnik liczą się jako 1 punkt, a obie strony są sumowane — jeśli obie są postrzegane jako pozycje małżonka, to jest to najwyższa ocena."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jeśli płeć nie jest ujawniona, pomiń ten punkt",
        "blocks": [
          {
            "p": "Jeśli niejednoznaczny element jest ustawiony na 0 punktów, skutkuje to niesprawiedliwie niskim wynikiem. Pozostała waga po pominięciu elementu jest ponownie normalizowana [(element i waga)](/guide/how-compatibility)."
          }
        ]
      },
      {
        "title": "Pokazujemy również kształt relacji",
        "blocks": [
          {
            "p": "Oprócz wyniku, opisujemy **jaki kształt** mają pary pni dni na ekranie wyników. Czy są podobnymi pozycjami, czy jedna strona wspiera drugą, czy jedna strona jest tłumiona — jeśli jest to relacja wspierająca lub tłumiąca, wyjaśniamy, która strona zajmuje tę pozycję."
          },
          {
            "p": "Jeśli prezentowany jest tylko jeden wynik, pozostawia to pytanie 'i co z tego'. Kształt nie jest wynikiem, ale czymś do odczytania, a nawet pary z niskimi wynikami mają coś do zinterpretowania."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Pięć elementów",
    "title": "Element Wspierający — Energia potrzebna teraz",
    "summary": "Patrzymy na pięć elementów nie jako 'czy wybrali dwa', ale jako 'czy druga strona ma to, czego potrzebuję'. Ujawniamy również wartość graniczną, która odróżnia silnego mistrza dnia od słabego.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Czy pięć elementów jest 'zrównoważone' nie jest pytaniem o kompatybilność",
        "blocks": [
          {
            "p": "Istnieje metoda mierzenia, czy pięć energii jest równomiernie rozłożonych, łącząc pięć elementów obu osób. Jednak pytanie o kompatybilność nie jest tym. **Czy druga strona ma to, czego potrzebuję?**"
          },
          {
            "p": "Stopień równowagi jest symetryczny, ale komplementarność jest z natury asymetryczna. Wynika to z tego, że to, czego potrzebuje A, różni się od tego, czego potrzebuje B. Dlatego mierzymy każdą stronę osobno i uśredniamy — ponieważ jest to średnia, całkowity wynik pozostaje symetryczny."
          }
        ]
      },
      {
        "title": "Element Wspierający — Zmniejsz, jeśli nadmiarowy, dodaj, jeśli niewystarczający",
        "blocks": [
          {
            "p": "Element Wspierający (用神) to 'energia, której ta osoba potrzebuje teraz'. Istnieje kilka metod, aby to określić (tłumienie, wspieranie, choroba i komunikacja), ale można to przetłumaczyć na zasady, a najczęściej stosowaną jest **tłumienie (抑扶)**. Jeśli mistrz dnia jest silny, uważa się, że potrzebna jest energia do zmniejszenia, a jeśli słaby, potrzebna jest energia do dodania."
          },
          {
            "table": {
              "head": [
                "Osąd",
                "Co jest potrzebne",
                "Ile"
              ],
              "rows": [
                [
                  "Silny mistrz dnia (身强)",
                  "Zmniejszająca energia — 食傷 (sik-sang) · 財星 (jae-seong) · 官星 (gwan-seong)",
                  "Trzy"
                ],
                [
                  "Słaby mistrz dnia (身弱)",
                  "Dodająca energia — 印星 (in-seong) · 比劫 (bi-gyeob)",
                  "Dwa"
                ],
                [
                  "Zrównoważony (中和)",
                  "Nie można go pokryć przez element wspierający, więc jest to najsłabsza energia",
                  "Dwa"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Wartości progowe dla siły i słabości",
        "blocks": [
          {
            "p": "Strona pnia dnia to **印星 i 比劫** — energia, która mnie rodzi i energia, która jest jak ja. Ponieważ dwa z pięciu, jeśli energia jest całkowicie zrównoważona, staje się {evenAllyRatio}. Ustalono zakres powyżej i poniżej tej wartości."
          },
          {
            "table": {
              "caption": "Proporcja sojuszników (印星 + 比劫) w całkowitej mocy",
              "head": [
                "Proporcja",
                "Osąd"
              ],
              "rows": [
                [
                  "{strongThreshold} lub więcej",
                  "Silny mistrz dnia"
                ],
                [
                  "{weakThreshold} lub więcej i mniej niż {strongThreshold}",
                  "Zrównoważony"
                ],
                [
                  "Mniej niż {weakThreshold}",
                  "Słaby mistrz dnia"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Równowaga to 'mniej pewny osąd'",
        "blocks": [
          {
            "p": "Równowaga oznacza, że nie można jej pokryć przez element wspierający. W tym czasie po prostu postrzegamy dwie najsłabsze energie jako niezbędne. Na ekranie wyników jest to zaznaczone jako 'aktualnie w słabej pozycji' zamiast definitywnego stwierdzenia."
          }
        ]
      },
      {
        "title": "Moc nie jest liczbą znaków",
        "blocks": [
          {
            "p": "Podczas liczenia mocy pięciu elementów, nie liczymy po prostu ośmiu znaków tak, jak się pojawiają. Używamy wartości, która odzwierciedla ukryte pnie niebieskie (地藏干) w ziemskich gałęziach oraz sezon energii miesiąca (月令), w którym się urodzono."
          },
          {
            "p": "Jeśli liczymy tylko powierzchowne znaki, umykamy faktowi, że nawet dwa znaki 木 mogą mieć zupełnie różne siły w zależności od sezonu. 木 wiosny i 木 jesieni, chociaż są tym samym znakiem, mają różne moce."
          }
        ]
      },
      {
        "title": "Ocena stopnia wypełnienia",
        "blocks": [
          {
            "p": "Patrzymy na proporcję mojego elementu wspierającego w mocy przeciwnika. Jednak nie używamy tej proporcji bezpośrednio, ale **dzielimy oczekiwanie przez wielkość elementu wspierającego.** Kiedy jest silny, element wspierający wynosi trzy (oczekiwanie 60%), a kiedy słaby, wynosi dwa (oczekiwanie 40%), więc użycie proporcji bezpośrednio oznaczałoby, że silna osoba zawsze otrzymuje wyższy wynik."
          },
          {
            "p": "Jeśli wypełnienie osiągnie oczekiwany poziom, uzyskuje się wynik bliski 78 punktów, a jeśli wypełnienie jest znacznie większe, osiąga 100 punktów, podczas gdy jeśli jest znacznie niewystarczające, zmierza w kierunku 55 punktów. Tutaj również dolna granica nie jest ustalona na 0."
          }
        ]
      },
      {
        "title": "To jest wstępny osąd",
        "blocks": [
          {
            "p": "Rzeczywista analiza saju uwzględnia formację i klimat sezonowy (ciepło i wilgotność sezonu), aby określić element wspierający, a wnioski mogą się różnić w zależności od zastosowanej metody. Inyeon-Link używa tylko elementów wspierających, które można zmierzyć za pomocą **wartości mocy.** Wynika to z zasady używania tylko tego, co można przetłumaczyć na zasady, więc te same dane wejściowe zawsze dadzą tę samą odpowiedź."
          },
          {
            "p": "Zamiast tego, ekran wyników przedstawia również siłę i słabość każdej osoby wraz z aktualnie potrzebną energią jako **materiał do odczytu**. Ma to na celu uniknięcie ukrywania podstawy wyniku."
          }
        ]
      }
    ]
  },
  "guide/affinity": {
    "eyebrow": "Nasze standardy",
    "title": "Inyeon’s Match — Powód, dla którego nie podajemy całkowitego wyniku",
    "summary": "Bierzemy pod uwagę dane tylko jednej osoby, pozostawiając pozycję przeciwnika pustą i podstawiamy wszystkie możliwe wartości na to miejsce. Wyjaśniamy powód, dla którego nie dołączamy całkowitego wyniku do uzyskanego typu.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Obliczenia są dokonywane, pozostawiając pozycję przeciwnika pustą",
        "blocks": [
          {
            "p": "Wyniki kompatybilności są obliczane przez dopasowanie dwóch osób. **Inyeon’s Match** bierze pod uwagę dane tylko jednej osoby, pozostawiając pozycję przeciwnika pustą i testuje wszystkie możliwe wartości, które mogłyby zająć to miejsce. To jak uruchomienie silnika kompatybilności w odwrotną stronę."
          },
          {
            "p": "Dlatego nie ma potrzeby znajomości daty urodzenia przeciwnika. Możemy nadal powiedzieć: 'Jaki profil dopasowania jest dla mnie odpowiedni?' o kimś, kogo jeszcze nie spotkaliśmy."
          }
        ]
      },
      {
        "title": "Nie przeprowadzamy milionów kombinacji",
        "blocks": [
          {
            "p": "Wynik kompatybilności w saju składa się z czterech elementów, a **każdy element nie pokrywa się w tym, co bada.**"
          },
          {
            "table": {
              "head": [
                "Element",
                "Jaki jest oś badania",
                "Liczba przypadków"
              ],
              "rows": [
                [
                  "Relacja między dniem a małżeństwem",
                  "Dzień stempla obu osób — niebiańskie stempla",
                  "10"
                ],
                [
                  "Uzupełnienie pięciu elementów",
                  "Mój wspierający element i pięciomoc przeciwnika",
                  "5"
                ],
                [
                  "Relacja między gałęzią dnia",
                  "gałęzie dnia obu osób",
                  "12"
                ],
                [
                  "Relacja zodiakalna",
                  "gałęzie roku obu osób",
                  "12"
                ]
              ]
            }
          },
          {
            "p": "Ponieważ wartości nie wymieniają się między elementami, **znalezienie najwyższego punktu dla każdej gałęzi będzie ogólnym najwyższym punktem**. Nie ma potrzeby sprawdzania wszystkich kombinacji dat urodzenia — wystarczy ustawić dziesięć niebiańskich stempla, dwanaście ziemskich gałęzi i pięć elementów."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Te same zasady mają zastosowanie",
        "blocks": [
          {
            "p": "Wyniki zapisane tutaj są bezpośrednio pobierane z silnika kompatybilności. Ponieważ nie stworzono nowych zasad, typ, który tutaj wychodzi na czoło, również będzie miał najwyższy wynik dla tego elementu w rzeczywistej kompatybilności. Jeśli zasady kompatybilności zostaną zmienione, ten ekran również się dostosuje."
          }
        ]
      },
      {
        "title": "Nie podano całkowitego wyniku",
        "blocks": [
          {
            "p": "To jest najważniejsza decyzja na tym ekranie. Zbieranie najwyższych wyników dla każdej gałęzi może wydawać się prowadzić do 'idealnego dopasowania', ale ta osoba może **w rzeczywistości nie istnieć.**"
          },
          {
            "p": "W rzeczywistych ludziach, mistrz dnia i pięć elementów nie działają oddzielnie. Osoba z 甲木 zazwyczaj ma również silną energię 木. Ta metoda liczenia gałęzi oddzielnie ignoruje tę korelację, więc wartość uzyskana przez połączenie najwyższych wyników dla każdej gałęzi staje się kombinacją, która nie istnieje w rzeczywistości."
          },
          {
            "p": "Dlatego ekran wyświetla tylko **wyniki elementów** i nie podaje całkowitego wyniku. Całkowity wynik zostanie obliczony po otrzymaniu daty urodzenia drugiej osoby dla [saju kompatybilności](/compatibility)."
          }
        ]
      },
      {
        "title": "Jak czytać 'typy dopasowania'",
        "blocks": [
          {
            "p": "Wynik oznacza 'jeśli spotkasz osobę tego typu, ten element będzie miał wysoki wynik'. Nie jest to kryterium wyboru osoby, ale raczej sposób na odczytanie tego z jednej perspektywy zrozumienia siebie."
          },
          {
            "p": "Powody, dla których niektóre typy uzyskały wysokie wyniki, są również notowane element po elemencie — czy mistrz dnia jest w korzystnej pozycji, czy ta osoba posiada energię, której obecnie potrzebuję."
          }
        ]
      },
      {
        "title": "Narzędzie potwierdzające",
        "blocks": [
          {
            "p": "Możesz być ciekawy, czy osoba, którą masz na myśli, odpowiada temu typowi. Wprowadzając ich datę urodzenia do narzędzia potwierdzającego na ekranie wyników, zostaniesz poinformowany o ich mistrzu dnia, gałęzi dnia i gałęzi roku. Wartości wejściowe nie są w tym czasie zapisywane [(nie zapisane)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Czas",
    "title": "Przekształć czas urodzenia na prawdziwy czas słoneczny",
    "summary": "Czas standardowy i rzeczywista pozycja słońca różnią się. Czas musi być skorygowany na podstawie długości geograficznej miejsca urodzenia, aby wyjaśnić, dlaczego filar czasowy jest dokładny.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Czas na zegarze i czas słońca są różne",
        "blocks": [
          {
            "p": "Filar czasowy (時柱) saju jest określany przez pozycję słońca. Jednak zegar, który widzimy, używa jednego standardowego czasu dla całego kraju, co powoduje rozbieżność z rzeczywistą pozycją słońca."
          },
          {
            "p": "Standardowy czas Korei oparty jest na długości geograficznej 135° wschodniej. Ponieważ długość geograficzna Seulu wynosi około 127°, jest to około 8° na zachód, co powoduje, że słońce osiąga zenit później — gdy jest południe według zegara, słońce w Seulu jeszcze nie osiągnęło zenitu. Ta różnica wynosi około **32 minut**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minuty zmieniają filar czasowy o jeden slot",
        "blocks": [
          {
            "p": "Czas w saju jest podzielony na jednostki dwugodzinne. Osoby urodzone blisko granicy będą miały swój filar czasowy całkowicie zmieniony przez różnicę 32 minut — ta korekta jest konieczna dla tych, którzy znajdują się dokładnie na tej granicy."
          }
        ]
      },
      {
        "title": "Dlaczego pytamy o miejsce urodzenia",
        "blocks": [
          {
            "p": "Jeśli długość geograficzna jest inna, kwota korekty również będzie różna. Zastosowanie korekty opartej na Seulu dla kogoś urodzonego za granicą spowoduje znaczną rozbieżność w filarze czasowym. Dlatego ekran wejściowy wymaga wybrania miejsca urodzenia, a obliczenia są oparte na długości geograficznej i czasie standardowym tego miasta. Obecnie w liście znajduje się {cityCount} miejsc."
          },
          {
            "p": "W miejscach, gdzie długość geograficzna znacznie się różni nawet w obrębie tego samego kraju (takich jak USA, Rosja, Indonezja itp.), miasta zostały podzielone. **15° długości geograficznej równa się jednemu slotowi filaru czasowego**."
          },
          {
            "p": "Jeśli nie wybierzesz, obliczenia będą oparte na Seulu. Ponieważ większość urodzeń ma miejsce w kraju, zmniejsza to szansę na błąd, ale jeśli urodziłeś się za granicą, upewnij się, że wybierzesz."
          }
        ]
      },
      {
        "title": "Czas standardowy zmieniał się wielokrotnie w przeszłości",
        "blocks": [
          {
            "p": "Istnieje powód, dla którego korekta nie może być obliczana po prostu jako 'różnica długości geograficznej ÷ 15° × 60 minut'. Sam czas standardowy zmieniał się w różnych epokach."
          },
          {
            "table": {
              "caption": "Zmiany w standardowym czasie Korei — osoby urodzone w tym okresie będą miały rozbieżności w prostych obliczeniach",
              "head": [
                "Okres",
                "Co było inne"
              ],
              "rows": [
                [
                  "Przed 1912",
                  "Nie było standardowego czasu (czas lokalny)"
                ],
                [
                  "1954 – 1961",
                  "Standardowy czas wynosił UTC+8:30"
                ],
                [
                  "1948 – 51 · 1955 – 60 · 1987 – 88",
                  "Wprowadzono czas letni"
                ]
              ]
            }
          },
          {
            "p": "Inyeon-Link nie używa stałej wartości dla południka standardowego, lecz oblicza standardowy czas, który był rzeczywiście używany w danym czasie na podstawie informacji o **strefie czasowej IANA** miejsca urodzenia. Czas letni i przeszłe standardowe czasy są automatycznie uwzględniane."
          }
        ]
      },
      {
        "title": "Urodzenia tuż po północy również uwzględniają datę",
        "blocks": [
          {
            "p": "Ponieważ korekta wynosi -32 minuty, osoby urodzone między 00:00 a 00:32 według zegara będą miały **23:00 dnia poprzedniego** w czasie słonecznym. Jeśli tylko czas zostanie cofnięty, a data pozostanie niezmieniona, zapisze się filar dnia jako '23:00 dnia poprzedniego'."
          },
          {
            "p": "Inyeon-Link również w tym przypadku cofnie datę. Filar dnia wskazuje na osobę samą w sobie w saju, więc jeśli to jest niepoprawne, prawie wszystkie elementy kompatybilności będą niepoprawne."
          }
        ]
      },
      {
        "title": "Nie musisz znać czasu",
        "blocks": [
          {
            "p": "Czas urodzenia jest opcjonalny. Jeśli go nie znasz, obliczenia zostaną przeprowadzone bez filaru czasu, a ten fakt zostanie wyświetlony na ekranie wyników. Nie ma elementów w kompatybilności, które wymagają bezpośredniego wpisania filaru czasu, ale wpływa on na pięć elementów, więc jeśli go znasz, lepiej go uwzględnić."
          },
          {
            "p": "Kompatybilność zodiakalna zawsze ma tę samą wartość, niezależnie od czasu — [ponieważ patrzy tylko na filar roku](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Informacje osobiste",
    "title": "Metoda nieprzechowywania wprowadzonych informacji",
    "summary": "Wyjaśnia to, co technicznie oznacza, że twoja data urodzenia nie jest nigdzie rejestrowana i co jest zawarte w linku wynikowym.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Nie wymagana jest rejestracja",
        "blocks": [
          {
            "p": "Inyeon-Link nie tworzy kont. Nie zbiera imion, adresów e-mail ani numerów telefonów. Jedyną zbieraną informacją jest data urodzenia oraz (opcjonalnie) czas urodzenia, miejsce urodzenia i płeć, a nawet to nie pozostaje po zakończeniu obliczeń."
          },
          {
            "p": "Istnieje pole do wprowadzenia tytułu, który ma być wyświetlany na ekranie wyników, ale jest to **tylko do celów wyświetlania** i nie jest używane w obliczeniach. Nie musisz wpisywać swojego prawdziwego imienia."
          }
        ]
      },
      {
        "title": "Co jest zawarte w linku wynikowym?",
        "blocks": [
          {
            "p": "Po zakończeniu obliczeń adres wygląda tak."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "To, co następuje po **#**, to wartości wejściowe. Ta część nazywana jest **fragmentem**, który jest **sekcją, której przeglądarka nie wysyła do serwera**. To standardowe zachowanie w sieci, a nie zasada, którą stworzyliśmy — pierwotnie zaprojektowano to, aby wskazać lokalizację w dokumencie, więc serwer nie ma potrzeby jej widzieć."
          },
          {
            "p": "Innymi słowy, gdy otwierasz link wynikowy, przeglądarka odczytuje tę wartość, aby zażądać obliczeń, a nasz serwer otrzymuje wartości potrzebne do obliczeń, zwraca odpowiedź, a następnie o niej zapomina."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Proszę być ostrożnym przy wysyłaniu linków do innych",
        "blocks": [
          {
            "p": "Fakt, że nie jest przechowywane na serwerze i że link jest bezpieczny, nie są tym samym. Link wynikowy zawiera obie twoje daty urodzenia, więc osoba otrzymująca ten link może zobaczyć ten sam wynik."
          }
        ]
      },
      {
        "title": "Dlaczego obliczenia są wykonywane na serwerze, ale nie są przechowywane?",
        "blocks": [
          {
            "p": "Obliczenia same w sobie są wykonywane na serwerze. Koreński kalendarz lunarny jest potrzebny do wygenerowania saju, a ta tabela jest zbyt duża, aby mogła być przesyłana do przeglądarki. Jednak **po przetworzeniu żądania ta wartość nie jest używana nigdzie.** Nie ma kodu do przechowywania jej w bazie danych."
          },
          {
            "p": "Zachowywana jest minimalna dokumentacja niezbędna do działania — licznik, aby zapobiec wysyłaniu zbyt wielu żądań przez tę samą osobę w krótkim czasie. To nie obejmuje daty urodzenia, a adres IP dostępu również nie jest przechowywany. Tylko jedna wartość, haszowana z datą, jest liczona, a ta wartość zmienia się, gdy zmienia się dzień."
          }
        ]
      },
      {
        "title": "Rzeczy, których nie można zrobić, ponieważ informacje nie są przechowywane",
        "blocks": [
          {
            "p": "Szczerze mówiąc, są rzeczy, z których zrezygnowaliśmy, ponieważ nie przechowujemy informacji."
          },
          {
            "ul": [
              "**Nie możesz odzyskać przeszłych wyników.** Musisz mieć link, aby je ponownie zobaczyć.",
              "**Te same wartości będą przeliczane.** Nie ma pamięci podręcznej. Jednak ponieważ wszystkie zasady są deterministyczne, [te same dane wejściowe zawsze dadzą tę samą wartość](/guide/how-compatibility).",
              "**Odświeżenie przywróci bramkę reklamową.** Dzieje się tak, ponieważ nie ma miejsca na przechowywanie rekordów przeglądania."
            ]
          }
        ]
      },
      {
        "title": "W przypadku zakupu",
        "blocks": [
          {
            "p": "Jeśli zakupisz raport, w tym czasie zostanie zachowany zapis transakcji. Prawo określa okres przechowywania płatności, a bez historii zamówienia nie można przetworzyć zwrotów. Jednak nawet wtedy **data urodzenia używana do obliczeń kompatybilności nie jest przypisana do zamówienia** — jest zbierana ponownie podczas tworzenia PDF po potwierdzeniu płatności."
          },
          {
            "p": "Szczegóły są opisane w [Polityce Prywatności](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Produkty płatne",
    "title": "Co jest zawarte w płatnym raporcie?",
    "summary": "Wyjaśnia to, co zostało dodane do PDF, zachowując ekran bez zmian, punkt po punkcie. Wartości i treści są odczytywane z rzeczywistych ustawień produktu.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Ekran pozostaje bez zmian, tylko dodane do PDF",
        "blocks": [
          {
            "p": "Obliczenia kompatybilności i zapytania o wyniki są **darmowe**. Wskaźniki dopasowania, wyniki i wagi elementów, oryginalne wykresy saju obu osób oraz kształt relacji można zobaczyć na ekranie. Nic nie zostało usunięte z ekranu podczas tworzenia płatnego raportu."
          },
          {
            "p": "Celem raportu jest **dodanie warstw, których nie ma na ekranie**. A ta warstwa nie jest wymyślona; składa się z wartości, które zostały już obliczone podczas procesu oceniania, ale nie były używane na ekranie."
          }
        ]
      },
      {
        "title": "Raport o kompatybilności saju PDF — {priceGunghapDomestic}",
        "slot": "gunghapContents",
        "blocks": [
          {
            "p": "Płatność krajowa {priceGunghapDomestic} (w tym VAT), płatność międzynarodowa {priceGunghapGlobal}. A4 {pagesGunghap} stron."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "**Strony 1-3 są zorganizowane, aby zachować to, co jest na ekranie** i **od strony 4 zaczyna się treść, która nie jest na ekranie**. Poniżej wyjaśnia, dlaczego niektóre rzeczy nie zostały wyświetlone na ekranie."
          }
        ]
      },
      {
        "title": "Strona 4 — Kierunek dwóch energii",
        "blocks": [
          {
            "p": "Elementy pięciu elementów na ekranie są przedstawione jako pojedynczy wynik. Jednak ten pojedynczy wynik to **średnia z dwóch kierunków** — mierzy, jak bardzo jeden wypełnia mnie, a jak bardzo ja wypełniam drugiego, i uśrednia te wartości."
          },
          {
            "p": "Komplementarność jest z natury **asymetryczna**. Dzieje się tak, ponieważ energie potrzebne mi i energie potrzebne drugiej osobie są różne. Jeśli spojrzysz tylko na średnią, relacja, w której jedna strona znacząco wypełnia drugą, oraz relacja, w której obie strony wypełniają się nawzajem równomiernie, będą wyglądać na tę samą liczbę. Raport oddziela te dwie."
          },
          {
            "p": "W tej samej sekcji znajduje się również **wykres relacji czterech filarów**. Jedynym, który wchodzi w wskaźnik dopasowania, jest dzień gałęzi (日支) — ponieważ to pozycja małżonka — ale inne gałęzie roku, miesiąca i godziny również można odczytać za pomocą tego samego wykresu relacji."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Wyniki w tej tabeli nie wchodzą w wskaźnik dopasowania",
        "blocks": [
          {
            "p": "Gdyby były uwzględnione, całkowity wynik by się zmienił i nie pasowałby do już wysłanego linku wynikowego. Dlatego jest to uwzględnione tylko jako materiał do czytania, a ten fakt jest zaznaczony poniżej tabeli."
          }
        ]
      },
      {
        "title": "Strona 5 — Bliższe spojrzenie na saju każdej osoby",
        "blocks": [
          {
            "p": "Słupki pięciu elementów na ekranie pokazują **jak dużo jest obecne**. Raport dodaje **czy miesiąc urodzenia wspiera tę energię**. Nawet przy tej samej ilości, energia silna (旺) i energia martwa (死) mają różne siły."
          },
          {
            "p": "Możesz zobaczyć siły przed i po pomnożeniu przez energię miesiąca obok siebie, pokazując, jak bardzo sezon ją zwiększył. **Współczynnik sojusznika**, który odróżnia silnego mistrza dnia od słabego mistrza dnia, jest również zaznaczony — ekran pokazuje tylko osąd, ale raport pokazuje, gdzie ten osąd został podjęty."
          }
        ]
      },
      {
        "title": "Strona 6 — Co oznaczają cztery filary drugiej osoby dla mnie",
        "blocks": [
          {
            "p": "Wskaźnik dopasowania porównuje tylko **stemple dnia** obu osób. Jednak pozostałe trzy filary drugiej osoby są również określane przez Dziesięć Bogów według tych samych zasad. Chociaż możesz zrozumieć **co ta osoba dla mnie znaczy** patrząc tylko na stempel dnia, nie możesz wiedzieć **jaką pozycję ta osoba zajmuje dla mnie**."
          },
          {
            "p": "Ponieważ są kierunki, obie strony są przedstawione osobno. To, co widzę, i to, co widzi druga osoba, jest różne."
          }
        ]
      },
      {
        "title": "Strona 7 — Jak obliczono ten saju",
        "blocks": [
          {
            "p": "Podano, jak bardzo czas urodzenia został dostosowany do prawdziwego czasu słonecznego, czy korekta spowodowała zmianę daty oraz jakie były daty słoneczne i księżycowe, gdy saju został wygenerowany. Koncepcja ta jest wyjaśniona w dokumencie [Dostosowanie czasu urodzenia do prawdziwego czasu słonecznego](/guide/true-solar-time), ale **wartość, o ile minut została dostosowana w twoim przypadku** różni się w zależności od osoby, więc jest to uwzględnione tylko w raporcie."
          }
        ]
      },
      {
        "title": "Raport profilu dopasowania Inyeon PDF — {priceAffinityDomestic}",
        "slot": "affinityContents",
        "blocks": [
          {
            "p": "Płatność krajowa {priceAffinityDomestic} (w tym VAT), płatność międzynarodowa {priceAffinityGlobal}. A4 {pagesAffinity} stron."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "Ta sekcja to **ogólny ranking**. Ekran pokazuje tylko zestawy, które dobrze pasują, ale raport klasyfikuje wszystkie dziesięć stempli niebiańskich i dwanaście gałęzi ziemskich **całkowicie**. Jeśli spojrzysz tylko na najlepsze zestawy, nie będziesz wiedzieć 'kto jest następny' i 'który jest najmniej kompatybilny'."
          }
        ]
      },
      {
        "title": "Rzeczy do wiedzenia przed zakupem",
        "blocks": [
          {
            "p": "**Serwer nie przechowuje plików.** Po zatwierdzeniu płatności dokument jest generowany i natychmiast wysyłany, nie pozostawiając nic na serwerze. Zasada tej usługi, aby nie zapisywać wartości wejściowych, jest utrzymywana nawet w płatnym procesie."
          },
          {
            "p": "Dlatego **proszę zapisać plik natychmiast po płatności.** Możesz otrzymać to samo zamówienie do pięciu razy, ale jeśli opuścisz ekran wyników i wartości wejściowe znikną, nie będziesz mógł go odtworzyć."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Raporty są również materiałami referencyjnymi",
        "blocks": [
          {
            "p": "Sama długość nie oznacza, że wnioski są bardziej pewne. To, co raport zawiera więcej, to **podstawa tego samego obliczenia**, a nie silniejsze twierdzenie. Odczyt przeznaczenia to dziedzina, w której wnioski mogą się różnić w zależności od praktyka, a ta usługa oblicza tylko to, co można przetłumaczyć na zasady."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Ogłoszenie",
    "title": "Ogłoszenia",
    "summary": "To jest miejsce, aby informować o zmianach, które wpływają na użytkowanie.",
    "backLabel": "Powrót do Strony Głównej",
    "sections": []
  },
  "contact": {
    "eyebrow": "Kontakt",
    "title": "Zapytania",
    "summary": "To jest kanał do zapytań dotyczących użytkowania, zwrotów, żądań informacji osobistych i raportów o błędach, wraz z informacjami o firmie.",
    "backLabel": "Powrót do Strony Głównej",
    "sections": [
      {
        "title": "Kontakt przez Email",
        "blocks": [
          {
            "p": "Proszę wysłać zapytania na **{email}**. Odpowiemy w ciągu 2 dni roboczych. W przypadku zapytań dotyczących płatności i zwrotów proszę dołączyć **numer zamówienia lub email użyty do płatności** dla szybszej weryfikacji."
          },
          {
            "p": "Zapytania telefoniczne można składać pod numerem {customerCenter}."
          }
        ]
      },
      {
        "title": "Co można wysłać na ten kanał?",
        "blocks": [
          {
            "ul": [
              "**Płatność i Zwrot** — Jeśli dokument nie został utworzony lub kwota płatności różni się od zamówienia, zostanie dokonany pełny zwrot. Warunki są w [polityce zwrotów](/refund-policy).",
              "**Informacje osobiste** — Przyjmujemy wnioski o wgląd, korektę i usunięcie. Polityka przetwarzania jest w [polityce prywatności](/privacy).",
              "**Raport o błędzie obliczeniowym** — Jeśli oryginalny wykres saju lub wynik wydaje się dziwny, prosimy dać nam znać. Jeśli dołączysz, kiedy wpisałeś datę i czas, możemy przeliczyć z tymi samymi wartościami."
            ]
          }
        ]
      },
      {
        "title": "Informacje o firmie",
        "blocks": [
          {
            "ul": [
              "**Nazwa firmy** — {companyName}",
              "**Przedstawiciel** — {representative}",
              "**Numer rejestracji firmy** — {businessNumber}",
              "**Numer rejestracji działalności wysyłkowej** — {mailOrderNumber}",
              "**Adres** — {address}",
              "**Centrum obsługi klienta** — {customerCenter}",
              "**Email** — {email}",
              "**Inspektor ochrony danych osobowych** — {privacyOfficer}",
              "**Dostawca hostingu** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Nie musisz dołączać daty i godziny urodzenia w e-mailu zapytania. Nie zapisujemy danych wejściowych, więc nie możemy ich odzyskać, a numer zamówienia jest wystarczający do potwierdzenia. Proszę dołączyć go tylko, jeśli jest to konieczne dla raportu o błędzie obliczeniowym."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const PL_NOTICES = {
  "kindLabels": {
    "service": "Usługa",
    "product": "Raporty",
    "engine": "Obliczenia",
    "support": "Wsparcie"
  },
  "intro": "Zmiany w warunkach użytkowania — ceny, polityki — są publikowane tutaj przed ich wejściem w życie. Wewnętrzne ulepszenia nie są wymienione: to, co się tutaj pojawia, to to, co musisz wiedzieć.",
  "empty": {
    "title": "Brak powiadomień",
    "body": "Gdy coś się zmieni, pojawi się tutaj."
  },
  "effective": "Wchodzi w życie {date}",
  "pager": {
    "label": "Strony powiadomień",
    "newer": "← Nowsze",
    "older": "Starsze →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Strony Kontakt i O nas są teraz otwarte",
      "body": [
        "Pytania, zwroty, prośby o prywatność i zgłoszenia błędów obliczeniowych mają teraz jedno miejsce, do którego można się zgłaszać — zobacz stronę kontaktową w stopce.",
        "Jeśli coś wygląda na źle obliczone, prosimy o dołączenie danych urodzenia, które to spowodowały. Nie przechowujemy tego, co wpisujesz, więc bez nich nie możemy odtworzyć odczytu."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Raporty są wydawane w języku angielskim dla arabskiego i khmerskiego",
      "body": [
        "Jeśli czytasz w języku arabskim lub khmerskim, raport PDF, który kupujesz, jest produkowany w języku angielskim. Narzędzie, które układa nasze dokumenty, nie może jeszcze ustawiać akapitów w tych skryptach.",
        "Ekran pozostaje w twoim języku, a twoje imię jest wydrukowane w twoim własnym skrypcie wewnątrz raportu.",
        "Ta sama uwaga pojawia się przed płatnością. Gdy narzędzie będzie wspierać te skrypty, powiemy o tym tutaj."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Każdy odczyt zawiera wersję używanych zasad",
      "body": [
        "Każdy odczyt i raport zawiera zestaw zasad użyty do jego produkcji (na przykład inyeonlink-match-v10). Ten sam input na tym samym zestawie zasad zawsze daje te same liczby.",
        "Jeśli zmienimy zasady interpretacji w sposób, który może wpłynąć na wynik, najpierw opublikujemy to tutaj, z datą, kiedy wejdzie w życie — ponieważ link do wyniku, który już posiadasz, będzie wtedy odczytywany inaczej.",
        "Aktualny zestaw zasad to v10. Płatności nie są jeszcze otwarte."
      ]
    }
  }
} satisfies NoticeCopy;
