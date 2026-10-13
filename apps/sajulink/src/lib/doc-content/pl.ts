import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Polski — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const PL_DOCS = {
  "about": {
    "eyebrow": "Wprowadzenie",
    "title": "Wprowadzenie do Saju-Link",
    "summary": "To jest usługa, która ustala saju (czytanie czterech filarów) na podstawie daty i godziny urodzenia oraz wyjaśnia, co oznaczają osiem znaków. Wyjaśnia, co jest obliczane, a co nie.",
    "backLabel": "Powrót do Strony Głównej",
    "sections": [
      {
        "title": "Co robimy?",
        "blocks": [
          {
            "p": "Saju-Link ustala **wykres saju (czterech filarów) na podstawie daty i godziny urodzenia oraz pokazuje, co oznaczają osiem znaków**. Odczytuje siłę pięciu elementów oraz siłę filaru dnia, a także bada dzisiejszą fortunę na podstawie pnia dnia."
          },
          {
            "p": "To, co widzisz na ekranie, jest **darmowe i nie wymaga członkostwa.** Płatny produkt to dokument PDF zawierający wartości, które nie są pokazane na ekranie — podstawę do rozróżnienia między silnym a słabym filarem dnia, Wang Sang Hyu Su Sa oraz szczegóły korekty dla prawdziwego czasu słonecznego."
          }
        ]
      },
      {
        "title": "Co obliczamy?",
        "blocks": [
          {
            "p": "Saju jest ustalane przy użyciu **manseyeok (koreańskiego kalendarza lunisolarnego)**. Czas urodzenia jest korygowany do **prawdziwego czasu słonecznego** miejsca urodzenia — ponieważ rzeczywista pozycja słońca różni się w zależności od regionu, nawet jeśli zegar pokazuje ten sam czas."
          },
          {
            "p": "Wyniki są przyznawane tylko zgodnie z ustalonymi zasadami. Koncepcje z tradycyjnego myeongri (koreańskiej nauki o losie), takie jak Dziesięć Bogów, relacje między gałęziami ziemskimi oraz równoważenie elementów, są przetłumaczone na zasady obliczeń, a **ta sama wartość wejściowa zawsze da tę samą wartość**. Gdy zasady są zmieniane, przeprowadzane są testy regresyjne, aby upewnić się, że wcześniejsze wyniki pozostają niezmienione."
          },
          {
            "p": "**AI nie jest używane w zdaniach na ekranie.** Wyjaśnienia pojawiające się na darmowym ekranie to stałe frazy przypisane do wyników obliczeń. **Tylko interpretacje w płatnych raportach** wykorzystują generatywną AI, a nawet wtedy AI nie tworzy wyników — tylko pisze zdania na podstawie wartości dostarczonych przez silnik."
          }
        ]
      },
      {
        "title": "Czego nie mówimy?",
        "blocks": [
          {
            "ul": [
              "**Nie zapewniamy wróżenia.** Nie piszemy, że powinieneś spotkać lub unikać kogoś. To jest materiał referencyjny podsumowujący perspektywy tradycyjnego myeongri.",
              "**Nie zapisujemy danych wejściowych.** Data i godzina urodzenia są używane tylko w momencie obliczeń i nie są przechowywane na serwerze. Link do wyniku jest również przechowywany w miejscu, które przeglądarka nie wysyła do serwera.",
              "**Wyniki nie są traktowane jako wartości ludzkie.** To, że dzisiejsza fortuna jest niska, nie oznacza, że powinieneś rezygnować z tego dnia."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Szczegółowe metody obliczeń są opisane w [Podręczniku Użytkownika](/guide). Informacje o firmie i dane kontaktowe można znaleźć w [Skontaktuj się z nami](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Podstawa Obliczeń",
    "title": "Jaka jest podstawa obliczeń?",
    "summary": "Ujawniamy wszystkie zasady używane przez Saju-Link. Możesz sprawdzić, skąd pochodzą liczby wyświetlane na ekranie, w tym korekty dla dzisiejszej fortuny, wyniki z tabeli relacji między gałęziami ziemskimi oraz wartości graniczne, które rozróżniają silny filar dnia od słabego filaru dnia.",
    "backLabel": "Powrót do Strony Głównej",
    "sections": [
      {
        "blocks": [
          {
            "p": "Saju zapisuje rok, miesiąc, dzień i godzinę urodzenia po dwa chińskie znaki każde, razem osiem znaków. Górny znak każdej pary nazywa się **pniem niebiańskim**, dolny **gałęzią ziemską**, a dwa znaki dnia urodzenia nazywa się **filarem dnia**. Jeśli te słowa są dla ciebie nowe, zacznij od [Pnie niebiańskie, gałęzie ziemskie i filar dnia – jak czytać znaki](/guide/saju-letters)."
          },
          {
            "ul": [
              "**Pnie niebiańskie** — dziesięć górnych znaków saju. Każdy ma stały element i polaryzację, a pień dnia urodzenia to pień dnia, który wskazuje na ciebie.",
              "**Gałęzie ziemskie** — dwanaście dolnych znaków saju, tych samych co zwierzęta zodiaku. Każda gałąź mieści w sobie ukryte pnie.",
              "**Filary dnia** — para utworzona przez pień i gałąź dnia urodzenia. Jest ich 60, od 甲子 do 癸亥, a każda ma własne hasło. Znajdziesz je w rozwijanych listach poniżej."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Wartości zapisane tutaj są **odczytywane bezpośrednio z kodu obliczeniowego**. Ponieważ nie są ręcznie przepisywane do tekstu, jeśli zasady zostaną zmienione, liczby w tym dokumencie również zmienią się odpowiednio."
          }
        ]
      }
    ]
  },
  "guide/natal-chart": {
    "eyebrow": "Podstawa Usługi",
    "title": "wykres urodzeniowy — Skąd pochodzą osiem znaków?",
    "summary": "Wyjaśnia, jak rok, miesiąc, dzień i czas urodzenia stają się czterema filarami i ośmioma znakami oraz identyfikuje, który znak wskazuje na ciebie. Omawia również, dlaczego można to zobaczyć nawet bez znajomości dokładnego czasu urodzenia.",
    "backLabel": "Podstawa Obliczeń",
    "sections": [
      {
        "title": "Cztery Filar, Osiem Znaków",
        "blocks": [
          {
            "p": "Saju (四柱) dosłownie oznacza **cztery filary**. Każdy z roku, miesiąca, dnia i czasu urodzenia jest ustalany jako jeden filar, a dla każdego filaru zapisane są dwa znaki. W ten sposób mamy łącznie osiem znaków, które nazywane są **wykresem urodzeniowym**."
          },
          {
            "table": {
              "head": [
                "Filar",
                "Skąd pochodzi?",
                "Dwa Znaki"
              ],
              "rows": [
                [
                  "Filar Roku (年柱)",
                  "Rok urodzenia",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Filar Miesiąca (月柱)",
                  "Miesiąc urodzenia",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Filar Dnia (日柱)",
                  "Dzień urodzenia",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Filar Czasu (時柱)",
                  "Czas urodzenia",
                  "Heavenly Stem + Earthly Branch"
                ]
              ]
            }
          },
          {
            "p": "Górne znaki nazywane są pniami niebiańskimi (天干), a dolne znaki nazywane są gałęziami ziemskimi (地支). Istnieje dziesięć pni niebiańskich i dwanaście gałęzi ziemskich. Dwanaście gałęzi ziemskich powszechnie nazywa się **znakami zodiaku**."
          }
        ]
      },
      {
        "title": "Spośród nich jeden znak wskazuje na mnie.",
        "blocks": [
          {
            "p": "Nie wszystkie osiem znaków mają tę samą wagę. **Pnie niebiańskie dnia urodzenia**, a konkretnie górny znak filaru dnia, wskazują na **mnie**. To nazywa się **pniem dnia (日干)**."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju składa się z ośmiu znaków ustalonych przy użyciu dwóch znaków dla roku, miesiąca, dnia i czasu urodzenia, reprezentowanych przez pnie niebiańskie i gałęzie ziemskie. Tutaj, wyróżniający się pień dnia (日干) jest znakiem, który wskazuje na mnie.",
            "labels": {
              "year": "Filar Roku",
              "yearNote": "Korzeń · Znak Zodiaku",
              "month": "Filar Miesiąca",
              "monthNote": "Sezon · Siła",
              "day": "Pillar Dnia",
              "dayNote": "Ja · Pałac Małżonka",
              "hour": "Pillar Godziny",
              "hourNote": "Późniejsze Lata · Zastosowanie",
              "stem": "Heavenly Stem",
              "stemNote": "Day Stem = Ja",
              "branch": "Earthly Branch",
              "branchNote": "Day Branch = Pałac Małżonka"
            }
          },
          {
            "p": "To, co ta usługa pokazuje, w dużej mierze pochodzi z jednego znaku — interpretacja tendencji, siła pięciu elementów, energia, której obecnie potrzebujemy, oraz dzisiejsza fortuna są mierzone na podstawie Day Stem. Pozostałe siedem znaków wskazuje 'w jakim środowisku znajduje się Day Stem'."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dlaczego Dzień Urodzenia?",
        "blocks": [
          {
            "p": "Year Stem jest taki sam dla wszystkich urodzonych w danym roku, a Month Stem jest taki sam dla wszystkich urodzonych w danym miesiącu. Day Stem zmienia się, gdy zmienia się dzień, a tradycyjne wróżenie uznaje tę pozycję za Ja od czasów dynastii Song. Jeśli uwzględniony jest Hour Stem, różnicuje to nawet wśród tych, którzy urodzili się w tym samym dniu."
          }
        ]
      },
      {
        "title": "Podzielone według Terminów Słonecznych, a nie Roku Kalendarzowego",
        "blocks": [
          {
            "p": "Rok saju nie zmienia się 1 stycznia, lecz raczej w **Ipchun (około 4 lutego)**. Miesiąc również dzieli się na podstawie terminów słonecznych."
          },
          {
            "p": "Zatem osoby urodzone w **styczniu i na początku lutego otrzymują Year Stem z poprzedniego roku**. To jest miejsce, gdzie pojawia się powszechne nieporozumienie dotyczące znaków zodiaku. To samo dotyczy, jeśli wprowadzisz urodziny lunarne — są one przeliczane na słoneczne, a następnie dzielone według terminów słonecznych."
          }
        ]
      },
      {
        "title": "Możesz to przeczytać nawet bez znajomości Czasu Urodzenia",
        "blocks": [
          {
            "p": "Jeśli nie wprowadzisz czasu, odczyt będzie oparty na trzech filarach i sześciu znakach, z wyłączeniem Pillaru Godziny. Nie zgadujemy brakujących wartości — arbitralne przypisanie Pillaru Godziny może zakłócić siłę pięciu elementów, prowadząc do błędnych wniosków zamiast potencjalnie dokładnych."
          },
          {
            "p": "Jeśli znasz czas, lepiej go uwzględnić. Ponieważ dodawane są dwa znaki spośród ośmiu, siła i ocena pięciu elementów mogą się zmienić. Jednak nie używamy bezpośrednio czasu zegarowego, lecz zamiast tego korzystamy z [Prawdziwego Czasu Słonecznego](/guide/true-solar-time)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Metoda liczenia ośmiu znaków jako pięciu elementów w celu oceny siły jest kontynuowana w [Siła Pięciu Elementów i Silny/Słaby Pillar Dnia](/guide/five-elements), podczas gdy metoda odczytywania pozostałych znaków na podstawie Day Stem jest kontynuowana w [Dziesięciu Bogach](/guide/ten-gods)."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Pięć Elementów",
    "title": "Siła Pięciu Elementów i Silny/Słaby Pillar Dnia",
    "summary": "Liczymy osiem znaków jako pięć elementów, aby zobaczyć, która energia jest silna, a która słaba. Ujawniamy wartości progowe (45%·35%), które określają siłę Day Stem.",
    "backLabel": "Podstawa Obliczeń",
    "sections": [
      {
        "title": "Liczenie Ośmiu Znaków jako Pięciu Energii",
        "blocks": [
          {
            "p": "Dziesięć Heavenly Stems i dwanaście Earthly Branches należy do jednego z **Pięciu Elementów (五行)** — Drewno (木), Ogień (火), Ziemia (土), Metal (金), Woda (水). Licząc znaki w wykresie urodzeniowym według ich odpowiednich elementów, możemy określić, która energia jest silna, a która słaba."
          },
          {
            "p": "Jednak nie liczymy tylko liczb. Zważamy również na **to, czy miesiąc urodzenia wspiera tę energię**. Nawet ten sam znak może mieć różne siły w zależności od tego, czy odpowiada swojej porze roku. To nazywa się Znakiem Miesiąca (月令) i dzieli się na pięć etapów: Wang (旺), Sang (相), Hyu (休), Su (囚) i Sa (死)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Gdzie Różnią się Ekran i Raport",
        "blocks": [
          {
            "p": "Darmowy ekran pokazuje tylko **siłę po uwzględnieniu Znaku Miesiąca**. Wartości przed Znakiem Miesiąca oraz tabela Wang, Sang, Hyu, Su i Sa są zawarte w płatnym raporcie — jest to dostarczane, abyś mógł bezpośrednio sprawdzić, gdzie ocena się różni."
          }
        ]
      },
      {
        "title": "Siła Day Stem — Silny i Słaby",
        "blocks": [
          {
            "p": "Po policzeniu sił pięciu elementów oceniamy, czy **Day Stem jest silny czy słaby**. Kryterium to stosunek energii zgodnych z Day Stem."
          },
          {
            "p": "Energie zgodne z Day Stem to **Zasób i Towarzysz** — energie, które mnie rodzą i te, które są do mnie podobne. Ponieważ są dwie z pięciu, jeśli nie ma stronniczości, będzie to około {evenAllyRatio}. Uważamy obszar wokół tej liczby za zrównoważony, a odczyt powyżej i poniżej traktujemy jako silny lub słaby."
          },
          {
            "table": {
              "head": [
                "Stosunek Energii Zgodnych z Day Stem",
                "Ocena",
                "Co to oznacza?"
              ],
              "rows": [
                [
                  "{strongThreshold} lub więcej",
                  "Silny Pillar Dnia (身强)",
                  "Energie wspierające Day Stem są obfite."
                ],
                [
                  "{weakThreshold} lub więcej i mniej niż {strongThreshold}",
                  "Zrównoważony (中和)",
                  "Trudno jest wyciągnąć wnioski w którąkolwiek stronę."
                ],
                [
                  "Mniej niż {weakThreshold}",
                  "Słaby Pillar Dnia (身弱)",
                  "Energie wspierające Day Stem są słabe."
                ]
              ]
            }
          },
          {
            "p": "Liczby w tej tabeli nie są przepisane z tekstu, lecz są **odczytywane bezpośrednio z silnika**. Jeśli zasady się zmienią, ten dokument również się zmieni."
          }
        ]
      },
      {
        "title": "Siła nie jest ani dobra, ani zła",
        "blocks": [
          {
            "p": "Bycie silnym nie oznacza dobrego, a bycie słabym nie oznacza złego. Jeśli jest silny, ma moc do pchania naprzód, ale łatwo jest przechylać się na jedną stronę; jeśli jest słaby, łatwiej jest pożyczyć siłę innych, ale można łatwo się zmęczyć, gdy się wytrzymuje samemu. **Potrzebne energie różnią się w każdym przypadku.**"
          },
          {
            "p": "Określenie 'potrzebnej energii' to element równoważący, a kontynuacja znajduje się w [Element Równoważący](/guide/yongsin)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Jak ustalane są osiem znaków, znajduje się w [wykresie urodzeniowym](/guide/natal-chart). Jak dzisiejszy Pillar Dnia wchodzi w interakcję z tą siłą, jest omówione w [dzisiejszej fortunie](/guide/today-fortune)."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Element Równoważący",
    "title": "Element Równoważący — Energia Potrzebna Teraz",
    "summary": "Jeśli Day Stem jest silny, rozważamy energię do zmniejszenia; jeśli słaby, rozważamy energię do wsparcia jako niezbędną. To wyjaśnia, jak wybrać tę energię i jak ją obsługiwać, gdy jest zrównoważona.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Same pięć elementów to za mało",
        "blocks": [
          {
            "p": "Istnieją sposoby, aby zmierzyć, czy pięć elementów jest równomiernie rozłożonych. Jednak to, co jest naprawdę potrzebne, to **co jest brakujące i co jest nadmiarowe w tym saju**."
          },
          {
            "p": "Saju, który jest równomiernie rozłożony, nie zawsze jest komfortowy, ani saju, który jest zniekształcony, nie zawsze jest trudny. Kierunek zniekształcenia i to, czy istnieje element, który może je złagodzić, to skrzyżowanie."
          }
        ]
      },
      {
        "title": "Element równoważący — zmniejsz, jeśli nadmiarowy, dodaj, jeśli brakujący",
        "blocks": [
          {
            "p": "Element równoważący (用神) to **energia, której obecnie potrzebuje ta osoba**. Istnieje kilka metod, aby to określić (tłumienie i wsparcie, równowaga sezonowa, aflikcja, mediacja), a ta, która może być wyrażona jako zasady — i jest najczęściej używana — to **tłumienie i wsparcie (抑扶)**. Jeśli filar dnia jest silny, uważa się, że potrzebna jest energia do zmniejszenia; jeśli słaby, wymagana jest energia do dodania."
          },
          {
            "table": {
              "head": [
                "Osąd",
                "Co jest potrzebne",
                "Liczba typów"
              ],
              "rows": [
                [
                  "Silny filar dnia (身强)",
                  "Energia do odprowadzenia — Wyjście, Bogactwo i Oficjalna Pozycja",
                  "Trzy"
                ],
                [
                  "Słaby filar dnia (身弱)",
                  "Energia do dodania — Zasób, Towarzysz",
                  "Dwa"
                ],
                [
                  "Zrównoważony (中和)",
                  "Nie można zdecydować przez tłumienie i wsparcie, więc najcieńsze energie",
                  "Dwa"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Próg siły i słabości",
        "blocks": [
          {
            "p": "Strona filaru dnia to **Zasób i Towarzysz** — energia, która mnie rodzi i energia, która jest jak ja. Ponieważ dwa z pięciu są zaangażowane, pełna równowaga będzie wynosić {evenAllyRatio}. Szerokość ustalana jest powyżej i poniżej tego {evenAllyRatio}."
          },
          {
            "table": {
              "caption": "Stosunek sojuszników (Zasób + Towarzysz) w ogólnej sile",
              "head": [
                "Stosunek",
                "Osąd"
              ],
              "rows": [
                [
                  "{strongThreshold} lub więcej",
                  "Silny filar dnia"
                ],
                [
                  "{weakThreshold} lub więcej i mniej niż {strongThreshold}",
                  "Zrównoważony"
                ],
                [
                  "Mniej niż {weakThreshold}",
                  "Słaby filar dnia"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Zrównoważony to 'mniej pewny osąd'",
        "blocks": [
          {
            "p": "Zrównoważony oznacza, że tłumienie i wsparcie nie mogą tego zdecydować. W tym czasie dwie najcieńsze energie są po prostu uważane za niezbędne. Na ekranie wyników zaznaczone jest to jako 'aktualnie cienka pozycja', a nie jako definitywne stwierdzenie."
          }
        ]
      },
      {
        "title": "Siła nie jest liczbą znaków",
        "blocks": [
          {
            "p": "Podczas liczenia siły pięciu elementów, osiem znaków nie jest liczone tak, jak się pojawiają. Wartości odzwierciedlają ukryte niebiańskie pnie (地藏干) w ziemskich gałęziach oraz sezon energii miesiąca (月令), w którym się urodzono."
          },
          {
            "p": "Liczenie tylko powierzchownych znaków pomija fakt, że nawet te same znaki 木 mogą mieć zupełnie różne siły w zależności od sezonu. 木 wiosny i 木 jesieni, mimo że to ten sam znak, mają różne siły."
          }
        ]
      },
      {
        "title": "Gdzie używać elementu równoważącego",
        "blocks": [
          {
            "p": "Określony element równoważący jest używany w dwóch miejscach. Jednym jest ekran wyników **'aktualnie potrzebna energia'**, a drugim jest [dzisiejsza fortuna](/guide/today-fortune) — czy dzisiejsza energia odpowiada elementowi równoważącemu, to element, który najbardziej wpływa na wynik w danym dniu."
          }
        ]
      },
      {
        "title": "To jest prosta ocena",
        "blocks": [
          {
            "p": "Rzeczywista analiza losu uwzględnia formację i warunki sezonowe (ciepło i wilgotność sezonu), aby określić element równoważący, a wnioski mogą się różnić w zależności od metody. Saju-Link używa tylko **redukcji, która może być mierzona przez wartości siły**. Wynika to z zasady używania tylko tego, co można przekształcić w zasady, więc te same dane wejściowe zawsze dadzą tę samą odpowiedź."
          },
          {
            "p": "Zamiast tego ekran wyników przedstawia również silny i słaby filar dnia wraz z aktualnie potrzebną energią jako **materiał do czytania**. Ma to na celu uniknięcie ukrywania podstawy wyniku."
          }
        ]
      }
    ]
  },
  "guide/stem-gap": {
    "eyebrow": "Pnie niebiańskie",
    "title": "Drewno Yang (甲) — Drewno, Yang",
    "summary": "Element i polaryzacja pnia niebiańskiego 甲, sposób, w jaki odczytuje on pozostałe dziewięć pni (Dziesięć Bogów) oraz to, które gałęzie ziemskie go zawierają — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Drewno Yang (甲) to pierwszy z dziesięciu pni niebiańskich",
        "blocks": [
          {
            "p": "甲 to pierwszy z dziesięciu pni niebiańskich. Jego element to Drewno, a polaryzacja to Yang. Saju-Link nazywa osobę, której pniem dnia jest 甲, „Drewno Yang (甲)”."
          },
          {
            "p": "Zdanie, które ekran wyników pokazuje dla tego pnia dnia, brzmi: „Wysokie drzewo rosnące prosto. Gdy kierunek jest już obrany, nie chwieje się i woli wytrzymać, niż się ugiąć.” To zdanie nie ma nic wspólnego z tabelą ani z wynikami poniżej."
          }
        ]
      },
      {
        "title": "Jak odczytuje pozostałe pnie (Dziesięć Bogów)",
        "blocks": [
          {
            "p": "Gdy pniem dnia jest 甲, każdy z dziesięciu pni odczytuje się następująco. Odczyt ma kierunek: tak 甲 odczytuje inny pień, a gdy inny pień odczytuje 甲, może pojawić się inna nazwa."
          },
          {
            "table": {
              "caption": "Dziesięć Bogów, gdy pniem dnia jest Drewno Yang (甲)",
              "head": [
                "Inny pień",
                "Element i polaryzacja",
                "Dziesięć Bogów"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Drewno Yang",
                  "Towarzysz (比肩)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Drewno Yin",
                  "Rywal (劫財)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Ogień Yang",
                  "Ekspresja (食神)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Ogień Yin",
                  "Burzyciel (傷官)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Ziemia Yang",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Ziemia Yin",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Autorytet (正官)"
                ],
                [
                  "Woda Yang (壬)",
                  "Woda Yang",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Woda Yin (癸)",
                  "Woda Yin",
                  "Opieka (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pnie odczytywane jako pozycja małżonka",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 甲, Stałe bogactwo to 己, a Autorytet to 辛. Jeśli nie podasz płci, ta pozycja nie jest odczytywana."
          }
        ]
      },
      {
        "title": "Gałęzie zawierające 甲",
        "blocks": [
          {
            "p": "Tu 甲 jest ukryty wewnątrz gałęzi ziemskich (ukryte pnie). Udział to proporcja trzydziestu dni danej gałęzi, którą zajmuje 甲."
          },
          {
            "table": {
              "caption": "Gałęzie zawierające 甲",
              "head": [
                "Gałąź",
                "Zwierzę",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "寅",
                  "Tygrys",
                  "główny (本氣)",
                  "{hidInBon}"
                ],
                [
                  "卯",
                  "Królik",
                  "szczątkowy (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "亥",
                  "Świnia",
                  "środkowy (中氣)",
                  "{hidHaeJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden pień nie rozstrzyga o człowieku. Saju czyta się z relacji między jego ośmioma znakami.",
              "Dziesięć Bogów to ocena dokonywana od pnia dnia. Te same dwa znaki dostają inną nazwę zależnie od tego, który z nich jest pniem dnia."
            ]
          },
          {
            "p": "Pełny opis Dziesięciu Bogów znajdziesz w [poradniku o Dziesięciu Bogach](/guide/ten-gods), a siłę elementów i Znak Miesiąca w [poradniku o pięciu elementach](/guide/five-elements). Inne pnie: [Drewno Yin (乙)](/guide/stem-eul) · [Ogień Yang (丙)](/guide/stem-byeong) · [Ogień Yin (丁)](/guide/stem-jeong) · [Ziemia Yang (戊)](/guide/stem-mu) · [Ziemia Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Woda Yang (壬)](/guide/stem-im) · [Woda Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-eul": {
    "eyebrow": "Pnie niebiańskie",
    "title": "Drewno Yin (乙) — Drewno, Yin",
    "summary": "Element i polaryzacja pnia niebiańskiego 乙, sposób, w jaki odczytuje on pozostałe dziewięć pni (Dziesięć Bogów) oraz to, które gałęzie ziemskie go zawierają — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Drewno Yin (乙) to drugi z dziesięciu pni niebiańskich",
        "blocks": [
          {
            "p": "乙 to drugi z dziesięciu pni niebiańskich. Jego element to Drewno, a polaryzacja to Yin. Saju-Link nazywa osobę, której pniem dnia jest 乙, „Drewno Yin (乙)”."
          },
          {
            "p": "Zdanie, które ekran wyników pokazuje dla tego pnia dnia, brzmi: „Pnącze — giętka trawa. Ugina się pod okolicznościami, żeby iść dalej, i nie pęka.” To zdanie nie ma nic wspólnego z tabelą ani z wynikami poniżej."
          }
        ]
      },
      {
        "title": "Jak odczytuje pozostałe pnie (Dziesięć Bogów)",
        "blocks": [
          {
            "p": "Gdy pniem dnia jest 乙, każdy z dziesięciu pni odczytuje się następująco. Odczyt ma kierunek: tak 乙 odczytuje inny pień, a gdy inny pień odczytuje 乙, może pojawić się inna nazwa."
          },
          {
            "table": {
              "caption": "Dziesięć Bogów, gdy pniem dnia jest Drewno Yin (乙)",
              "head": [
                "Inny pień",
                "Element i polaryzacja",
                "Dziesięć Bogów"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Drewno Yang",
                  "Rywal (劫財)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Drewno Yin",
                  "Towarzysz (比肩)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Ogień Yang",
                  "Burzyciel (傷官)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Ogień Yin",
                  "Ekspresja (食神)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Ziemia Yang",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Ziemia Yin",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Autorytet (正官)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Woda Yang (壬)",
                  "Woda Yang",
                  "Opieka (正印)"
                ],
                [
                  "Woda Yin (癸)",
                  "Woda Yin",
                  "Nietypowe wsparcie (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pnie odczytywane jako pozycja małżonka",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 乙, Stałe bogactwo to 戊, a Autorytet to 庚. Jeśli nie podasz płci, ta pozycja nie jest odczytywana."
          }
        ]
      },
      {
        "title": "Gałęzie zawierające 乙",
        "blocks": [
          {
            "p": "Tu 乙 jest ukryty wewnątrz gałęzi ziemskich (ukryte pnie). Udział to proporcja trzydziestu dni danej gałęzi, którą zajmuje 乙."
          },
          {
            "table": {
              "caption": "Gałęzie zawierające 乙",
              "head": [
                "Gałąź",
                "Zwierzę",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "卯",
                  "Królik",
                  "główny (本氣)",
                  "{hidMyoBon}"
                ],
                [
                  "辰",
                  "Smok",
                  "szczątkowy (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "未",
                  "Owca",
                  "środkowy (中氣)",
                  "{hidMiJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden pień nie rozstrzyga o człowieku. Saju czyta się z relacji między jego ośmioma znakami.",
              "Dziesięć Bogów to ocena dokonywana od pnia dnia. Te same dwa znaki dostają inną nazwę zależnie od tego, który z nich jest pniem dnia."
            ]
          },
          {
            "p": "Pełny opis Dziesięciu Bogów znajdziesz w [poradniku o Dziesięciu Bogach](/guide/ten-gods), a siłę elementów i Znak Miesiąca w [poradniku o pięciu elementach](/guide/five-elements). Inne pnie: [Drewno Yang (甲)](/guide/stem-gap) · [Ogień Yang (丙)](/guide/stem-byeong) · [Ogień Yin (丁)](/guide/stem-jeong) · [Ziemia Yang (戊)](/guide/stem-mu) · [Ziemia Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Woda Yang (壬)](/guide/stem-im) · [Woda Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-byeong": {
    "eyebrow": "Pnie niebiańskie",
    "title": "Ogień Yang (丙) — Ogień, Yang",
    "summary": "Element i polaryzacja pnia niebiańskiego 丙, sposób, w jaki odczytuje on pozostałe dziewięć pni (Dziesięć Bogów) oraz to, które gałęzie ziemskie go zawierają — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Ogień Yang (丙) to trzeci z dziesięciu pni niebiańskich",
        "blocks": [
          {
            "p": "丙 to trzeci z dziesięciu pni niebiańskich. Jego element to Ogień, a polaryzacja to Yang. Saju-Link nazywa osobę, której pniem dnia jest 丙, „Ogień Yang (丙)”."
          },
          {
            "p": "Zdanie, które ekran wyników pokazuje dla tego pnia dnia, brzmi: „Słońce w południe. Uczucia widać wprost, w pomieszczeniu robi się jaśniej, a wychodzenie przed szereg przychodzi naturalnie.” To zdanie nie ma nic wspólnego z tabelą ani z wynikami poniżej."
          }
        ]
      },
      {
        "title": "Jak odczytuje pozostałe pnie (Dziesięć Bogów)",
        "blocks": [
          {
            "p": "Gdy pniem dnia jest 丙, każdy z dziesięciu pni odczytuje się następująco. Odczyt ma kierunek: tak 丙 odczytuje inny pień, a gdy inny pień odczytuje 丙, może pojawić się inna nazwa."
          },
          {
            "table": {
              "caption": "Dziesięć Bogów, gdy pniem dnia jest Ogień Yang (丙)",
              "head": [
                "Inny pień",
                "Element i polaryzacja",
                "Dziesięć Bogów"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Drewno Yang",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Drewno Yin",
                  "Opieka (正印)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Ogień Yang",
                  "Towarzysz (比肩)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Ogień Yin",
                  "Rywal (劫財)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Ziemia Yang",
                  "Ekspresja (食神)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Ziemia Yin",
                  "Burzyciel (傷官)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Woda Yang (壬)",
                  "Woda Yang",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Woda Yin (癸)",
                  "Woda Yin",
                  "Autorytet (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pnie odczytywane jako pozycja małżonka",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 丙, Stałe bogactwo to 辛, a Autorytet to 癸. Jeśli nie podasz płci, ta pozycja nie jest odczytywana."
          }
        ]
      },
      {
        "title": "Gałęzie zawierające 丙",
        "blocks": [
          {
            "p": "Tu 丙 jest ukryty wewnątrz gałęzi ziemskich (ukryte pnie). Udział to proporcja trzydziestu dni danej gałęzi, którą zajmuje 丙."
          },
          {
            "table": {
              "caption": "Gałęzie zawierające 丙",
              "head": [
                "Gałąź",
                "Zwierzę",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "寅",
                  "Tygrys",
                  "środkowy (中氣)",
                  "{hidInJung}"
                ],
                [
                  "巳",
                  "Wąż",
                  "główny (本氣)",
                  "{hidSaBon}"
                ],
                [
                  "午",
                  "Koń",
                  "szczątkowy (餘氣)",
                  "{hidOYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden pień nie rozstrzyga o człowieku. Saju czyta się z relacji między jego ośmioma znakami.",
              "Dziesięć Bogów to ocena dokonywana od pnia dnia. Te same dwa znaki dostają inną nazwę zależnie od tego, który z nich jest pniem dnia."
            ]
          },
          {
            "p": "Pełny opis Dziesięciu Bogów znajdziesz w [poradniku o Dziesięciu Bogach](/guide/ten-gods), a siłę elementów i Znak Miesiąca w [poradniku o pięciu elementach](/guide/five-elements). Inne pnie: [Drewno Yang (甲)](/guide/stem-gap) · [Drewno Yin (乙)](/guide/stem-eul) · [Ogień Yin (丁)](/guide/stem-jeong) · [Ziemia Yang (戊)](/guide/stem-mu) · [Ziemia Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Woda Yang (壬)](/guide/stem-im) · [Woda Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-jeong": {
    "eyebrow": "Pnie niebiańskie",
    "title": "Ogień Yin (丁) — Ogień, Yin",
    "summary": "Element i polaryzacja pnia niebiańskiego 丁, sposób, w jaki odczytuje on pozostałe dziewięć pni (Dziesięć Bogów) oraz to, które gałęzie ziemskie go zawierają — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Ogień Yin (丁) to czwarty z dziesięciu pni niebiańskich",
        "blocks": [
          {
            "p": "丁 to czwarty z dziesięciu pni niebiańskich. Jego element to Ogień, a polaryzacja to Yin. Saju-Link nazywa osobę, której pniem dnia jest 丁, „Ogień Yin (丁)”."
          },
          {
            "p": "Zdanie, które ekran wyników pokazuje dla tego pnia dnia, brzmi: „Światło świecy. Pali się cicho i długo, a ogrzewa najpierw tych najbliższych.” To zdanie nie ma nic wspólnego z tabelą ani z wynikami poniżej."
          }
        ]
      },
      {
        "title": "Jak odczytuje pozostałe pnie (Dziesięć Bogów)",
        "blocks": [
          {
            "p": "Gdy pniem dnia jest 丁, każdy z dziesięciu pni odczytuje się następująco. Odczyt ma kierunek: tak 丁 odczytuje inny pień, a gdy inny pień odczytuje 丁, może pojawić się inna nazwa."
          },
          {
            "table": {
              "caption": "Dziesięć Bogów, gdy pniem dnia jest Ogień Yin (丁)",
              "head": [
                "Inny pień",
                "Element i polaryzacja",
                "Dziesięć Bogów"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Drewno Yang",
                  "Opieka (正印)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Drewno Yin",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Ogień Yang",
                  "Rywal (劫財)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Ogień Yin",
                  "Towarzysz (比肩)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Ziemia Yang",
                  "Burzyciel (傷官)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Ziemia Yin",
                  "Ekspresja (食神)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Woda Yang (壬)",
                  "Woda Yang",
                  "Autorytet (正官)"
                ],
                [
                  "Woda Yin (癸)",
                  "Woda Yin",
                  "Wyzwanie (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pnie odczytywane jako pozycja małżonka",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 丁, Stałe bogactwo to 庚, a Autorytet to 壬. Jeśli nie podasz płci, ta pozycja nie jest odczytywana."
          }
        ]
      },
      {
        "title": "Gałęzie zawierające 丁",
        "blocks": [
          {
            "p": "Tu 丁 jest ukryty wewnątrz gałęzi ziemskich (ukryte pnie). Udział to proporcja trzydziestu dni danej gałęzi, którą zajmuje 丁."
          },
          {
            "table": {
              "caption": "Gałęzie zawierające 丁",
              "head": [
                "Gałąź",
                "Zwierzę",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "午",
                  "Koń",
                  "główny (本氣)",
                  "{hidOBon}"
                ],
                [
                  "未",
                  "Owca",
                  "szczątkowy (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "戌",
                  "Pies",
                  "środkowy (中氣)",
                  "{hidSulJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden pień nie rozstrzyga o człowieku. Saju czyta się z relacji między jego ośmioma znakami.",
              "Dziesięć Bogów to ocena dokonywana od pnia dnia. Te same dwa znaki dostają inną nazwę zależnie od tego, który z nich jest pniem dnia."
            ]
          },
          {
            "p": "Pełny opis Dziesięciu Bogów znajdziesz w [poradniku o Dziesięciu Bogach](/guide/ten-gods), a siłę elementów i Znak Miesiąca w [poradniku o pięciu elementach](/guide/five-elements). Inne pnie: [Drewno Yang (甲)](/guide/stem-gap) · [Drewno Yin (乙)](/guide/stem-eul) · [Ogień Yang (丙)](/guide/stem-byeong) · [Ziemia Yang (戊)](/guide/stem-mu) · [Ziemia Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Woda Yang (壬)](/guide/stem-im) · [Woda Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-mu": {
    "eyebrow": "Pnie niebiańskie",
    "title": "Ziemia Yang (戊) — Ziemia, Yang",
    "summary": "Element i polaryzacja pnia niebiańskiego 戊, sposób, w jaki odczytuje on pozostałe dziewięć pni (Dziesięć Bogów) oraz to, które gałęzie ziemskie go zawierają — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Ziemia Yang (戊) to piąty z dziesięciu pni niebiańskich",
        "blocks": [
          {
            "p": "戊 to piąty z dziesięciu pni niebiańskich. Jego element to Ziemia, a polaryzacja to Yang. Saju-Link nazywa osobę, której pniem dnia jest 戊, „Ziemia Yang (戊)”."
          },
          {
            "p": "Zdanie, które ekran wyników pokazuje dla tego pnia dnia, brzmi: „Otwarty ląd i góry. Trudno tym zachwiać i łatwo się o to oprzeć, choć raz podjęta decyzja zmienia się powoli.” To zdanie nie ma nic wspólnego z tabelą ani z wynikami poniżej."
          }
        ]
      },
      {
        "title": "Jak odczytuje pozostałe pnie (Dziesięć Bogów)",
        "blocks": [
          {
            "p": "Gdy pniem dnia jest 戊, każdy z dziesięciu pni odczytuje się następująco. Odczyt ma kierunek: tak 戊 odczytuje inny pień, a gdy inny pień odczytuje 戊, może pojawić się inna nazwa."
          },
          {
            "table": {
              "caption": "Dziesięć Bogów, gdy pniem dnia jest Ziemia Yang (戊)",
              "head": [
                "Inny pień",
                "Element i polaryzacja",
                "Dziesięć Bogów"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Drewno Yang",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Drewno Yin",
                  "Autorytet (正官)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Ogień Yang",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Ogień Yin",
                  "Opieka (正印)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Ziemia Yang",
                  "Towarzysz (比肩)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Ziemia Yin",
                  "Rywal (劫財)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Ekspresja (食神)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Burzyciel (傷官)"
                ],
                [
                  "Woda Yang (壬)",
                  "Woda Yang",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Woda Yin (癸)",
                  "Woda Yin",
                  "Stałe bogactwo (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pnie odczytywane jako pozycja małżonka",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 戊, Stałe bogactwo to 癸, a Autorytet to 乙. Jeśli nie podasz płci, ta pozycja nie jest odczytywana."
          }
        ]
      },
      {
        "title": "Gałęzie zawierające 戊",
        "blocks": [
          {
            "p": "Tu 戊 jest ukryty wewnątrz gałęzi ziemskich (ukryte pnie). Udział to proporcja trzydziestu dni danej gałęzi, którą zajmuje 戊."
          },
          {
            "table": {
              "caption": "Gałęzie zawierające 戊",
              "head": [
                "Gałąź",
                "Zwierzę",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "寅",
                  "Tygrys",
                  "szczątkowy (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "辰",
                  "Smok",
                  "główny (本氣)",
                  "{hidJinBon}"
                ],
                [
                  "巳",
                  "Wąż",
                  "szczątkowy (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "申",
                  "Małpa",
                  "szczątkowy (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "戌",
                  "Pies",
                  "główny (本氣)",
                  "{hidSulBon}"
                ],
                [
                  "亥",
                  "Świnia",
                  "szczątkowy (餘氣)",
                  "{hidHaeYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden pień nie rozstrzyga o człowieku. Saju czyta się z relacji między jego ośmioma znakami.",
              "Dziesięć Bogów to ocena dokonywana od pnia dnia. Te same dwa znaki dostają inną nazwę zależnie od tego, który z nich jest pniem dnia."
            ]
          },
          {
            "p": "Pełny opis Dziesięciu Bogów znajdziesz w [poradniku o Dziesięciu Bogach](/guide/ten-gods), a siłę elementów i Znak Miesiąca w [poradniku o pięciu elementach](/guide/five-elements). Inne pnie: [Drewno Yang (甲)](/guide/stem-gap) · [Drewno Yin (乙)](/guide/stem-eul) · [Ogień Yang (丙)](/guide/stem-byeong) · [Ogień Yin (丁)](/guide/stem-jeong) · [Ziemia Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Woda Yang (壬)](/guide/stem-im) · [Woda Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gi": {
    "eyebrow": "Pnie niebiańskie",
    "title": "Ziemia Yin (己) — Ziemia, Yin",
    "summary": "Element i polaryzacja pnia niebiańskiego 己, sposób, w jaki odczytuje on pozostałe dziewięć pni (Dziesięć Bogów) oraz to, które gałęzie ziemskie go zawierają — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Ziemia Yin (己) to szósty z dziesięciu pni niebiańskich",
        "blocks": [
          {
            "p": "己 to szósty z dziesięciu pni niebiańskich. Jego element to Ziemia, a polaryzacja to Yin. Saju-Link nazywa osobę, której pniem dnia jest 己, „Ziemia Yin (己)”."
          },
          {
            "p": "Zdanie, które ekran wyników pokazuje dla tego pnia dnia, brzmi: „Gleba pola. Przyjmuje to, co przyjdzie, i to wyhodowuje — raczej pielęgnuje, niż pokazuje.” To zdanie nie ma nic wspólnego z tabelą ani z wynikami poniżej."
          }
        ]
      },
      {
        "title": "Jak odczytuje pozostałe pnie (Dziesięć Bogów)",
        "blocks": [
          {
            "p": "Gdy pniem dnia jest 己, każdy z dziesięciu pni odczytuje się następująco. Odczyt ma kierunek: tak 己 odczytuje inny pień, a gdy inny pień odczytuje 己, może pojawić się inna nazwa."
          },
          {
            "table": {
              "caption": "Dziesięć Bogów, gdy pniem dnia jest Ziemia Yin (己)",
              "head": [
                "Inny pień",
                "Element i polaryzacja",
                "Dziesięć Bogów"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Drewno Yang",
                  "Autorytet (正官)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Drewno Yin",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Ogień Yang",
                  "Opieka (正印)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Ogień Yin",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Ziemia Yang",
                  "Rywal (劫財)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Ziemia Yin",
                  "Towarzysz (比肩)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Burzyciel (傷官)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Ekspresja (食神)"
                ],
                [
                  "Woda Yang (壬)",
                  "Woda Yang",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Woda Yin (癸)",
                  "Woda Yin",
                  "Zmienne bogactwo (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pnie odczytywane jako pozycja małżonka",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 己, Stałe bogactwo to 壬, a Autorytet to 甲. Jeśli nie podasz płci, ta pozycja nie jest odczytywana."
          }
        ]
      },
      {
        "title": "Gałęzie zawierające 己",
        "blocks": [
          {
            "p": "Tu 己 jest ukryty wewnątrz gałęzi ziemskich (ukryte pnie). Udział to proporcja trzydziestu dni danej gałęzi, którą zajmuje 己."
          },
          {
            "table": {
              "caption": "Gałęzie zawierające 己",
              "head": [
                "Gałąź",
                "Zwierzę",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "丑",
                  "Wół",
                  "główny (本氣)",
                  "{hidChukBon}"
                ],
                [
                  "午",
                  "Koń",
                  "środkowy (中氣)",
                  "{hidOJung}"
                ],
                [
                  "未",
                  "Owca",
                  "główny (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden pień nie rozstrzyga o człowieku. Saju czyta się z relacji między jego ośmioma znakami.",
              "Dziesięć Bogów to ocena dokonywana od pnia dnia. Te same dwa znaki dostają inną nazwę zależnie od tego, który z nich jest pniem dnia."
            ]
          },
          {
            "p": "Pełny opis Dziesięciu Bogów znajdziesz w [poradniku o Dziesięciu Bogach](/guide/ten-gods), a siłę elementów i Znak Miesiąca w [poradniku o pięciu elementach](/guide/five-elements). Inne pnie: [Drewno Yang (甲)](/guide/stem-gap) · [Drewno Yin (乙)](/guide/stem-eul) · [Ogień Yang (丙)](/guide/stem-byeong) · [Ogień Yin (丁)](/guide/stem-jeong) · [Ziemia Yang (戊)](/guide/stem-mu) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Woda Yang (壬)](/guide/stem-im) · [Woda Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gyeong": {
    "eyebrow": "Pnie niebiańskie",
    "title": "Metal Yang (庚) — Metal, Yang",
    "summary": "Element i polaryzacja pnia niebiańskiego 庚, sposób, w jaki odczytuje on pozostałe dziewięć pni (Dziesięć Bogów) oraz to, które gałęzie ziemskie go zawierają — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Metal Yang (庚) to siódmy z dziesięciu pni niebiańskich",
        "blocks": [
          {
            "p": "庚 to siódmy z dziesięciu pni niebiańskich. Jego element to Metal, a polaryzacja to Yang. Saju-Link nazywa osobę, której pniem dnia jest 庚, „Metal Yang (庚)”."
          },
          {
            "p": "Zdanie, które ekran wyników pokazuje dla tego pnia dnia, brzmi: „Nieobrobione żelazo. Zdecydowany i jednoznaczny, bez cierpliwości do spraw zawieszonych.” To zdanie nie ma nic wspólnego z tabelą ani z wynikami poniżej."
          }
        ]
      },
      {
        "title": "Jak odczytuje pozostałe pnie (Dziesięć Bogów)",
        "blocks": [
          {
            "p": "Gdy pniem dnia jest 庚, każdy z dziesięciu pni odczytuje się następująco. Odczyt ma kierunek: tak 庚 odczytuje inny pień, a gdy inny pień odczytuje 庚, może pojawić się inna nazwa."
          },
          {
            "table": {
              "caption": "Dziesięć Bogów, gdy pniem dnia jest Metal Yang (庚)",
              "head": [
                "Inny pień",
                "Element i polaryzacja",
                "Dziesięć Bogów"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Drewno Yang",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Drewno Yin",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Ogień Yang",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Ogień Yin",
                  "Autorytet (正官)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Ziemia Yang",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Ziemia Yin",
                  "Opieka (正印)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Towarzysz (比肩)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Rywal (劫財)"
                ],
                [
                  "Woda Yang (壬)",
                  "Woda Yang",
                  "Ekspresja (食神)"
                ],
                [
                  "Woda Yin (癸)",
                  "Woda Yin",
                  "Burzyciel (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pnie odczytywane jako pozycja małżonka",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 庚, Stałe bogactwo to 乙, a Autorytet to 丁. Jeśli nie podasz płci, ta pozycja nie jest odczytywana."
          }
        ]
      },
      {
        "title": "Gałęzie zawierające 庚",
        "blocks": [
          {
            "p": "Tu 庚 jest ukryty wewnątrz gałęzi ziemskich (ukryte pnie). Udział to proporcja trzydziestu dni danej gałęzi, którą zajmuje 庚."
          },
          {
            "table": {
              "caption": "Gałęzie zawierające 庚",
              "head": [
                "Gałąź",
                "Zwierzę",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "巳",
                  "Wąż",
                  "środkowy (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "申",
                  "Małpa",
                  "główny (本氣)",
                  "{hidSinBon}"
                ],
                [
                  "酉",
                  "Kogut",
                  "szczątkowy (餘氣)",
                  "{hidYuYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden pień nie rozstrzyga o człowieku. Saju czyta się z relacji między jego ośmioma znakami.",
              "Dziesięć Bogów to ocena dokonywana od pnia dnia. Te same dwa znaki dostają inną nazwę zależnie od tego, który z nich jest pniem dnia."
            ]
          },
          {
            "p": "Pełny opis Dziesięciu Bogów znajdziesz w [poradniku o Dziesięciu Bogach](/guide/ten-gods), a siłę elementów i Znak Miesiąca w [poradniku o pięciu elementach](/guide/five-elements). Inne pnie: [Drewno Yang (甲)](/guide/stem-gap) · [Drewno Yin (乙)](/guide/stem-eul) · [Ogień Yang (丙)](/guide/stem-byeong) · [Ogień Yin (丁)](/guide/stem-jeong) · [Ziemia Yang (戊)](/guide/stem-mu) · [Ziemia Yin (己)](/guide/stem-gi) · [Metal Yin (辛)](/guide/stem-sin) · [Woda Yang (壬)](/guide/stem-im) · [Woda Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-sin": {
    "eyebrow": "Pnie niebiańskie",
    "title": "Metal Yin (辛) — Metal, Yin",
    "summary": "Element i polaryzacja pnia niebiańskiego 辛, sposób, w jaki odczytuje on pozostałe dziewięć pni (Dziesięć Bogów) oraz to, które gałęzie ziemskie go zawierają — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Metal Yin (辛) to ósmy z dziesięciu pni niebiańskich",
        "blocks": [
          {
            "p": "辛 to ósmy z dziesięciu pni niebiańskich. Jego element to Metal, a polaryzacja to Yin. Saju-Link nazywa osobę, której pniem dnia jest 辛, „Metal Yin (辛)”."
          },
          {
            "p": "Zdanie, które ekran wyników pokazuje dla tego pnia dnia, brzmi: „Oszlifowany klejnot. Wyczulony smak i wysokie wymagania; niedbałość trudno tu puścić płazem.” To zdanie nie ma nic wspólnego z tabelą ani z wynikami poniżej."
          }
        ]
      },
      {
        "title": "Jak odczytuje pozostałe pnie (Dziesięć Bogów)",
        "blocks": [
          {
            "p": "Gdy pniem dnia jest 辛, każdy z dziesięciu pni odczytuje się następująco. Odczyt ma kierunek: tak 辛 odczytuje inny pień, a gdy inny pień odczytuje 辛, może pojawić się inna nazwa."
          },
          {
            "table": {
              "caption": "Dziesięć Bogów, gdy pniem dnia jest Metal Yin (辛)",
              "head": [
                "Inny pień",
                "Element i polaryzacja",
                "Dziesięć Bogów"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Drewno Yang",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Drewno Yin",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Ogień Yang",
                  "Autorytet (正官)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Ogień Yin",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Ziemia Yang",
                  "Opieka (正印)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Ziemia Yin",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Rywal (劫財)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Towarzysz (比肩)"
                ],
                [
                  "Woda Yang (壬)",
                  "Woda Yang",
                  "Burzyciel (傷官)"
                ],
                [
                  "Woda Yin (癸)",
                  "Woda Yin",
                  "Ekspresja (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pnie odczytywane jako pozycja małżonka",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 辛, Stałe bogactwo to 甲, a Autorytet to 丙. Jeśli nie podasz płci, ta pozycja nie jest odczytywana."
          }
        ]
      },
      {
        "title": "Gałęzie zawierające 辛",
        "blocks": [
          {
            "p": "Tu 辛 jest ukryty wewnątrz gałęzi ziemskich (ukryte pnie). Udział to proporcja trzydziestu dni danej gałęzi, którą zajmuje 辛."
          },
          {
            "table": {
              "caption": "Gałęzie zawierające 辛",
              "head": [
                "Gałąź",
                "Zwierzę",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "丑",
                  "Wół",
                  "środkowy (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "酉",
                  "Kogut",
                  "główny (本氣)",
                  "{hidYuBon}"
                ],
                [
                  "戌",
                  "Pies",
                  "szczątkowy (餘氣)",
                  "{hidSulYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden pień nie rozstrzyga o człowieku. Saju czyta się z relacji między jego ośmioma znakami.",
              "Dziesięć Bogów to ocena dokonywana od pnia dnia. Te same dwa znaki dostają inną nazwę zależnie od tego, który z nich jest pniem dnia."
            ]
          },
          {
            "p": "Pełny opis Dziesięciu Bogów znajdziesz w [poradniku o Dziesięciu Bogach](/guide/ten-gods), a siłę elementów i Znak Miesiąca w [poradniku o pięciu elementach](/guide/five-elements). Inne pnie: [Drewno Yang (甲)](/guide/stem-gap) · [Drewno Yin (乙)](/guide/stem-eul) · [Ogień Yang (丙)](/guide/stem-byeong) · [Ogień Yin (丁)](/guide/stem-jeong) · [Ziemia Yang (戊)](/guide/stem-mu) · [Ziemia Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Woda Yang (壬)](/guide/stem-im) · [Woda Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-im": {
    "eyebrow": "Pnie niebiańskie",
    "title": "Woda Yang (壬) — Woda, Yang",
    "summary": "Element i polaryzacja pnia niebiańskiego 壬, sposób, w jaki odczytuje on pozostałe dziewięć pni (Dziesięć Bogów) oraz to, które gałęzie ziemskie go zawierają — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Woda Yang (壬) to dziewiąty z dziesięciu pni niebiańskich",
        "blocks": [
          {
            "p": "壬 to dziewiąty z dziesięciu pni niebiańskich. Jego element to Woda, a polaryzacja to Yang. Saju-Link nazywa osobę, której pniem dnia jest 壬, „Woda Yang (壬)”."
          },
          {
            "p": "Zdanie, które ekran wyników pokazuje dla tego pnia dnia, brzmi: „Rzeka i morze. Szerokie spojrzenie i oko do tego, jak sprawy płyną.” To zdanie nie ma nic wspólnego z tabelą ani z wynikami poniżej."
          }
        ]
      },
      {
        "title": "Jak odczytuje pozostałe pnie (Dziesięć Bogów)",
        "blocks": [
          {
            "p": "Gdy pniem dnia jest 壬, każdy z dziesięciu pni odczytuje się następująco. Odczyt ma kierunek: tak 壬 odczytuje inny pień, a gdy inny pień odczytuje 壬, może pojawić się inna nazwa."
          },
          {
            "table": {
              "caption": "Dziesięć Bogów, gdy pniem dnia jest Woda Yang (壬)",
              "head": [
                "Inny pień",
                "Element i polaryzacja",
                "Dziesięć Bogów"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Drewno Yang",
                  "Ekspresja (食神)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Drewno Yin",
                  "Burzyciel (傷官)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Ogień Yang",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Ogień Yin",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Ziemia Yang",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Ziemia Yin",
                  "Autorytet (正官)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Opieka (正印)"
                ],
                [
                  "Woda Yang (壬)",
                  "Woda Yang",
                  "Towarzysz (比肩)"
                ],
                [
                  "Woda Yin (癸)",
                  "Woda Yin",
                  "Rywal (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pnie odczytywane jako pozycja małżonka",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 壬, Stałe bogactwo to 丁, a Autorytet to 己. Jeśli nie podasz płci, ta pozycja nie jest odczytywana."
          }
        ]
      },
      {
        "title": "Gałęzie zawierające 壬",
        "blocks": [
          {
            "p": "Tu 壬 jest ukryty wewnątrz gałęzi ziemskich (ukryte pnie). Udział to proporcja trzydziestu dni danej gałęzi, którą zajmuje 壬."
          },
          {
            "table": {
              "caption": "Gałęzie zawierające 壬",
              "head": [
                "Gałąź",
                "Zwierzę",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "子",
                  "Szczur",
                  "szczątkowy (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "申",
                  "Małpa",
                  "środkowy (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "亥",
                  "Świnia",
                  "główny (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden pień nie rozstrzyga o człowieku. Saju czyta się z relacji między jego ośmioma znakami.",
              "Dziesięć Bogów to ocena dokonywana od pnia dnia. Te same dwa znaki dostają inną nazwę zależnie od tego, który z nich jest pniem dnia."
            ]
          },
          {
            "p": "Pełny opis Dziesięciu Bogów znajdziesz w [poradniku o Dziesięciu Bogach](/guide/ten-gods), a siłę elementów i Znak Miesiąca w [poradniku o pięciu elementach](/guide/five-elements). Inne pnie: [Drewno Yang (甲)](/guide/stem-gap) · [Drewno Yin (乙)](/guide/stem-eul) · [Ogień Yang (丙)](/guide/stem-byeong) · [Ogień Yin (丁)](/guide/stem-jeong) · [Ziemia Yang (戊)](/guide/stem-mu) · [Ziemia Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Woda Yin (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gye": {
    "eyebrow": "Pnie niebiańskie",
    "title": "Woda Yin (癸) — Woda, Yin",
    "summary": "Element i polaryzacja pnia niebiańskiego 癸, sposób, w jaki odczytuje on pozostałe dziewięć pni (Dziesięć Bogów) oraz to, które gałęzie ziemskie go zawierają — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Woda Yin (癸) to dziesiąty z dziesięciu pni niebiańskich",
        "blocks": [
          {
            "p": "癸 to dziesiąty z dziesięciu pni niebiańskich. Jego element to Woda, a polaryzacja to Yin. Saju-Link nazywa osobę, której pniem dnia jest 癸, „Woda Yin (癸)”."
          },
          {
            "p": "Zdanie, które ekran wyników pokazuje dla tego pnia dnia, brzmi: „Rosa i deszcz. Wsiąka cicho i czyta nastrój, zanim padną słowa.” To zdanie nie ma nic wspólnego z tabelą ani z wynikami poniżej."
          }
        ]
      },
      {
        "title": "Jak odczytuje pozostałe pnie (Dziesięć Bogów)",
        "blocks": [
          {
            "p": "Gdy pniem dnia jest 癸, każdy z dziesięciu pni odczytuje się następująco. Odczyt ma kierunek: tak 癸 odczytuje inny pień, a gdy inny pień odczytuje 癸, może pojawić się inna nazwa."
          },
          {
            "table": {
              "caption": "Dziesięć Bogów, gdy pniem dnia jest Woda Yin (癸)",
              "head": [
                "Inny pień",
                "Element i polaryzacja",
                "Dziesięć Bogów"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Drewno Yang",
                  "Burzyciel (傷官)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Drewno Yin",
                  "Ekspresja (食神)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Ogień Yang",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Ogień Yin",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Ziemia Yang",
                  "Autorytet (正官)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Ziemia Yin",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "Opieka (正印)"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Woda Yang (壬)",
                  "Woda Yang",
                  "Rywal (劫財)"
                ],
                [
                  "Woda Yin (癸)",
                  "Woda Yin",
                  "Towarzysz (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pnie odczytywane jako pozycja małżonka",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 癸, Stałe bogactwo to 丙, a Autorytet to 戊. Jeśli nie podasz płci, ta pozycja nie jest odczytywana."
          }
        ]
      },
      {
        "title": "Gałęzie zawierające 癸",
        "blocks": [
          {
            "p": "Tu 癸 jest ukryty wewnątrz gałęzi ziemskich (ukryte pnie). Udział to proporcja trzydziestu dni danej gałęzi, którą zajmuje 癸."
          },
          {
            "table": {
              "caption": "Gałęzie zawierające 癸",
              "head": [
                "Gałąź",
                "Zwierzę",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "子",
                  "Szczur",
                  "główny (本氣)",
                  "{hidJaBon}"
                ],
                [
                  "丑",
                  "Wół",
                  "szczątkowy (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "辰",
                  "Smok",
                  "środkowy (中氣)",
                  "{hidJinJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden pień nie rozstrzyga o człowieku. Saju czyta się z relacji między jego ośmioma znakami.",
              "Dziesięć Bogów to ocena dokonywana od pnia dnia. Te same dwa znaki dostają inną nazwę zależnie od tego, który z nich jest pniem dnia."
            ]
          },
          {
            "p": "Pełny opis Dziesięciu Bogów znajdziesz w [poradniku o Dziesięciu Bogach](/guide/ten-gods), a siłę elementów i Znak Miesiąca w [poradniku o pięciu elementach](/guide/five-elements). Inne pnie: [Drewno Yang (甲)](/guide/stem-gap) · [Drewno Yin (乙)](/guide/stem-eul) · [Ogień Yang (丙)](/guide/stem-byeong) · [Ogień Yin (丁)](/guide/stem-jeong) · [Ziemia Yang (戊)](/guide/stem-mu) · [Ziemia Yin (己)](/guide/stem-gi) · [Metal Yang (庚)](/guide/stem-gyeong) · [Metal Yin (辛)](/guide/stem-sin) · [Woda Yang (壬)](/guide/stem-im)"
          }
        ]
      }
    ]
  },

  "guide/branch-ja": {
    "eyebrow": "Gałęzie ziemskie",
    "title": "子 — gałąź Szczura",
    "summary": "Pnie zawarte w gałęzi ziemskiej 子 (ukryte pnie), siła pięciu elementów, gdy jest ona gałęzią miesiąca, oraz Dziesięciu Bogów odczytywanych dla każdego pnia dnia — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "子 to pierwsza z dwunastu gałęzi ziemskich",
        "blocks": [
          {
            "p": "子 to pierwsza z dwunastu gałęzi ziemskich i należy do Szczura. Gdy gałęzią miesiąca urodzenia jest 子, porą roku jest zima, a elementem, któremu ta pora roku przynależy, jest Woda."
          },
          {
            "p": "Gdy gałęzią dnia urodzenia jest 子, ten znak jest pozycją małżonka. Poniżej widać, jakie pnie zawiera ta gałąź i czym są wobec pnia dnia."
          }
        ]
      },
      {
        "title": "Pnie zawarte w tej gałęzi (ukryte pnie)",
        "blocks": [
          {
            "p": "Gałąź to jeden widoczny znak, ale zawiera w sobie pnie. Udział pokazuje, jak trzydzieści dni gałęzi dzieli się między pnie, a pień główny to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie 子",
              "head": [
                "Pień",
                "Element i polaryzacja",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "Woda Yang (壬)",
                  "Woda Yang",
                  "szczątkowy (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "Woda Yin (癸)",
                  "Woda Yin",
                  "główny (本氣)",
                  "{hidJaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Siła pięciu elementów, gdy gałęzią miesiąca jest 子",
        "blocks": [
          {
            "p": "Gdy gałęzią miesiąca urodzenia jest 子, każdy element otrzymuje stan (Wang, Sang, Hyu, Su, Sa), a ten stan staje się mnożnikiem stosowanym do jego siły."
          },
          {
            "table": {
              "caption": "Stany elementów dla gałęzi miesiąca 子 (zima)",
              "head": [
                "Element",
                "Stan",
                "Mnożnik"
              ],
              "rows": [
                [
                  "Drewno",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Ogień",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Ziemia",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Metal",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Woda",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Dziesięć Bogów według pnia dnia",
        "blocks": [
          {
            "p": "Te same ukryte pnie 子 stają się innymi Bogami zależnie od pnia dnia. Gdy 子 jest gałęzią dnia, ta tabela jest odczytem pozycji małżonka."
          },
          {
            "table": {
              "caption": "Czym ukryte pnie 子 są dla każdego pnia dnia",
              "head": [
                "Pień dnia",
                "Woda Yang (壬) — szczątkowy (餘氣)",
                "Woda Yin (癸) — główny (本氣)"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Nietypowe wsparcie (偏印)",
                  "Opieka (正印)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Opieka (正印)",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Wyzwanie (偏官)",
                  "Autorytet (正官)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Autorytet (正官)",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Zmienne bogactwo (偏財)",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Stałe bogactwo (正財)",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Metal Yang (庚)",
                  "Ekspresja (食神)",
                  "Burzyciel (傷官)"
                ],
                [
                  "Metal Yin (辛)",
                  "Burzyciel (傷官)",
                  "Ekspresja (食神)"
                ],
                [
                  "Woda Yang (壬)",
                  "Towarzysz (比肩)",
                  "Rywal (劫財)"
                ],
                [
                  "Woda Yin (癸)",
                  "Rywal (劫財)",
                  "Towarzysz (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedna gałąź nie rozstrzyga o człowieku. Ta sama gałąź jest odczytywana inaczej zależnie od pnia dnia i gałęzi miesiąca.",
              "Relacje między gałęziami, takie jak harmonia, zderzenie i niezgoda, nie są tu omawiane."
            ]
          },
          {
            "p": "Relacje między gałęziami znajdziesz w [tabeli dwunastu gałęzi](/guide/branches), a znaczenie gałęzi jako zwierzęcia zodiaku w [rozdziale o miejscu zodiaku w saju](/guide/zodiac). Inne gałęzie: [丑 (Wół)](/guide/branch-chuk) · [寅 (Tygrys)](/guide/branch-in) · [卯 (Królik)](/guide/branch-myo) · [辰 (Smok)](/guide/branch-jin) · [巳 (Wąż)](/guide/branch-sa) · [午 (Koń)](/guide/branch-o) · [未 (Owca)](/guide/branch-mi) · [申 (Małpa)](/guide/branch-sin) · [酉 (Kogut)](/guide/branch-yu) · [戌 (Pies)](/guide/branch-sul) · [亥 (Świnia)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-chuk": {
    "eyebrow": "Gałęzie ziemskie",
    "title": "丑 — gałąź Wołu",
    "summary": "Pnie zawarte w gałęzi ziemskiej 丑 (ukryte pnie), siła pięciu elementów, gdy jest ona gałęzią miesiąca, oraz Dziesięciu Bogów odczytywanych dla każdego pnia dnia — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "丑 to druga z dwunastu gałęzi ziemskich",
        "blocks": [
          {
            "p": "丑 to druga z dwunastu gałęzi ziemskich i należy do Wołu. Gdy gałęzią miesiąca urodzenia jest 丑, porą roku jest zima, a elementem, któremu ta pora roku przynależy, jest Woda. Jest to miesiąc przejściowy (辰未戌丑), więc Ziemia jest również uznawana za będącą w stanie Wang."
          },
          {
            "p": "Gdy gałęzią dnia urodzenia jest 丑, ten znak jest pozycją małżonka. Poniżej widać, jakie pnie zawiera ta gałąź i czym są wobec pnia dnia."
          }
        ]
      },
      {
        "title": "Pnie zawarte w tej gałęzi (ukryte pnie)",
        "blocks": [
          {
            "p": "Gałąź to jeden widoczny znak, ale zawiera w sobie pnie. Udział pokazuje, jak trzydzieści dni gałęzi dzieli się między pnie, a pień główny to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie 丑",
              "head": [
                "Pień",
                "Element i polaryzacja",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "Woda Yin (癸)",
                  "Woda Yin",
                  "szczątkowy (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "środkowy (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "Ziemia Yin (己)",
                  "Ziemia Yin",
                  "główny (本氣)",
                  "{hidChukBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Siła pięciu elementów, gdy gałęzią miesiąca jest 丑",
        "blocks": [
          {
            "p": "Gdy gałęzią miesiąca urodzenia jest 丑, każdy element otrzymuje stan (Wang, Sang, Hyu, Su, Sa), a ten stan staje się mnożnikiem stosowanym do jego siły."
          },
          {
            "table": {
              "caption": "Stany elementów dla gałęzi miesiąca 丑 (zima (miesiąc przejściowy))",
              "head": [
                "Element",
                "Stan",
                "Mnożnik"
              ],
              "rows": [
                [
                  "Drewno",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Ogień",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Ziemia",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Woda",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Dziesięć Bogów według pnia dnia",
        "blocks": [
          {
            "p": "Te same ukryte pnie 丑 stają się innymi Bogami zależnie od pnia dnia. Gdy 丑 jest gałęzią dnia, ta tabela jest odczytem pozycji małżonka."
          },
          {
            "table": {
              "caption": "Czym ukryte pnie 丑 są dla każdego pnia dnia",
              "head": [
                "Pień dnia",
                "Woda Yin (癸) — szczątkowy (餘氣)",
                "Metal Yin (辛) — środkowy (中氣)",
                "Ziemia Yin (己) — główny (本氣)"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Opieka (正印)",
                  "Autorytet (正官)",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Nietypowe wsparcie (偏印)",
                  "Wyzwanie (偏官)",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Autorytet (正官)",
                  "Stałe bogactwo (正財)",
                  "Burzyciel (傷官)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Wyzwanie (偏官)",
                  "Zmienne bogactwo (偏財)",
                  "Ekspresja (食神)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Stałe bogactwo (正財)",
                  "Burzyciel (傷官)",
                  "Rywal (劫財)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Zmienne bogactwo (偏財)",
                  "Ekspresja (食神)",
                  "Towarzysz (比肩)"
                ],
                [
                  "Metal Yang (庚)",
                  "Burzyciel (傷官)",
                  "Rywal (劫財)",
                  "Opieka (正印)"
                ],
                [
                  "Metal Yin (辛)",
                  "Ekspresja (食神)",
                  "Towarzysz (比肩)",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Woda Yang (壬)",
                  "Rywal (劫財)",
                  "Opieka (正印)",
                  "Autorytet (正官)"
                ],
                [
                  "Woda Yin (癸)",
                  "Towarzysz (比肩)",
                  "Nietypowe wsparcie (偏印)",
                  "Wyzwanie (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedna gałąź nie rozstrzyga o człowieku. Ta sama gałąź jest odczytywana inaczej zależnie od pnia dnia i gałęzi miesiąca.",
              "Relacje między gałęziami, takie jak harmonia, zderzenie i niezgoda, nie są tu omawiane."
            ]
          },
          {
            "p": "Relacje między gałęziami znajdziesz w [tabeli dwunastu gałęzi](/guide/branches), a znaczenie gałęzi jako zwierzęcia zodiaku w [rozdziale o miejscu zodiaku w saju](/guide/zodiac). Inne gałęzie: [子 (Szczur)](/guide/branch-ja) · [寅 (Tygrys)](/guide/branch-in) · [卯 (Królik)](/guide/branch-myo) · [辰 (Smok)](/guide/branch-jin) · [巳 (Wąż)](/guide/branch-sa) · [午 (Koń)](/guide/branch-o) · [未 (Owca)](/guide/branch-mi) · [申 (Małpa)](/guide/branch-sin) · [酉 (Kogut)](/guide/branch-yu) · [戌 (Pies)](/guide/branch-sul) · [亥 (Świnia)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-in": {
    "eyebrow": "Gałęzie ziemskie",
    "title": "寅 — gałąź Tygrysa",
    "summary": "Pnie zawarte w gałęzi ziemskiej 寅 (ukryte pnie), siła pięciu elementów, gdy jest ona gałęzią miesiąca, oraz Dziesięciu Bogów odczytywanych dla każdego pnia dnia — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "寅 to trzecia z dwunastu gałęzi ziemskich",
        "blocks": [
          {
            "p": "寅 to trzecia z dwunastu gałęzi ziemskich i należy do Tygrysa. Gdy gałęzią miesiąca urodzenia jest 寅, porą roku jest wiosna, a elementem, któremu ta pora roku przynależy, jest Drewno."
          },
          {
            "p": "Gdy gałęzią dnia urodzenia jest 寅, ten znak jest pozycją małżonka. Poniżej widać, jakie pnie zawiera ta gałąź i czym są wobec pnia dnia."
          }
        ]
      },
      {
        "title": "Pnie zawarte w tej gałęzi (ukryte pnie)",
        "blocks": [
          {
            "p": "Gałąź to jeden widoczny znak, ale zawiera w sobie pnie. Udział pokazuje, jak trzydzieści dni gałęzi dzieli się między pnie, a pień główny to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie 寅",
              "head": [
                "Pień",
                "Element i polaryzacja",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "Ziemia Yang",
                  "szczątkowy (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "Ogień Yang (丙)",
                  "Ogień Yang",
                  "środkowy (中氣)",
                  "{hidInJung}"
                ],
                [
                  "Drewno Yang (甲)",
                  "Drewno Yang",
                  "główny (本氣)",
                  "{hidInBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Siła pięciu elementów, gdy gałęzią miesiąca jest 寅",
        "blocks": [
          {
            "p": "Gdy gałęzią miesiąca urodzenia jest 寅, każdy element otrzymuje stan (Wang, Sang, Hyu, Su, Sa), a ten stan staje się mnożnikiem stosowanym do jego siły."
          },
          {
            "table": {
              "caption": "Stany elementów dla gałęzi miesiąca 寅 (wiosna)",
              "head": [
                "Element",
                "Stan",
                "Mnożnik"
              ],
              "rows": [
                [
                  "Drewno",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Ogień",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Ziemia",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Metal",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Woda",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Dziesięć Bogów według pnia dnia",
        "blocks": [
          {
            "p": "Te same ukryte pnie 寅 stają się innymi Bogami zależnie od pnia dnia. Gdy 寅 jest gałęzią dnia, ta tabela jest odczytem pozycji małżonka."
          },
          {
            "table": {
              "caption": "Czym ukryte pnie 寅 są dla każdego pnia dnia",
              "head": [
                "Pień dnia",
                "Ziemia Yang (戊) — szczątkowy (餘氣)",
                "Ogień Yang (丙) — środkowy (中氣)",
                "Drewno Yang (甲) — główny (本氣)"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Zmienne bogactwo (偏財)",
                  "Ekspresja (食神)",
                  "Towarzysz (比肩)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Stałe bogactwo (正財)",
                  "Burzyciel (傷官)",
                  "Rywal (劫財)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Ekspresja (食神)",
                  "Towarzysz (比肩)",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Burzyciel (傷官)",
                  "Rywal (劫財)",
                  "Opieka (正印)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Towarzysz (比肩)",
                  "Nietypowe wsparcie (偏印)",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Rywal (劫財)",
                  "Opieka (正印)",
                  "Autorytet (正官)"
                ],
                [
                  "Metal Yang (庚)",
                  "Nietypowe wsparcie (偏印)",
                  "Wyzwanie (偏官)",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Metal Yin (辛)",
                  "Opieka (正印)",
                  "Autorytet (正官)",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Woda Yang (壬)",
                  "Wyzwanie (偏官)",
                  "Zmienne bogactwo (偏財)",
                  "Ekspresja (食神)"
                ],
                [
                  "Woda Yin (癸)",
                  "Autorytet (正官)",
                  "Stałe bogactwo (正財)",
                  "Burzyciel (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedna gałąź nie rozstrzyga o człowieku. Ta sama gałąź jest odczytywana inaczej zależnie od pnia dnia i gałęzi miesiąca.",
              "Relacje między gałęziami, takie jak harmonia, zderzenie i niezgoda, nie są tu omawiane."
            ]
          },
          {
            "p": "Relacje między gałęziami znajdziesz w [tabeli dwunastu gałęzi](/guide/branches), a znaczenie gałęzi jako zwierzęcia zodiaku w [rozdziale o miejscu zodiaku w saju](/guide/zodiac). Inne gałęzie: [子 (Szczur)](/guide/branch-ja) · [丑 (Wół)](/guide/branch-chuk) · [卯 (Królik)](/guide/branch-myo) · [辰 (Smok)](/guide/branch-jin) · [巳 (Wąż)](/guide/branch-sa) · [午 (Koń)](/guide/branch-o) · [未 (Owca)](/guide/branch-mi) · [申 (Małpa)](/guide/branch-sin) · [酉 (Kogut)](/guide/branch-yu) · [戌 (Pies)](/guide/branch-sul) · [亥 (Świnia)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-myo": {
    "eyebrow": "Gałęzie ziemskie",
    "title": "卯 — gałąź Królika",
    "summary": "Pnie zawarte w gałęzi ziemskiej 卯 (ukryte pnie), siła pięciu elementów, gdy jest ona gałęzią miesiąca, oraz Dziesięciu Bogów odczytywanych dla każdego pnia dnia — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "卯 to czwarta z dwunastu gałęzi ziemskich",
        "blocks": [
          {
            "p": "卯 to czwarta z dwunastu gałęzi ziemskich i należy do Królika. Gdy gałęzią miesiąca urodzenia jest 卯, porą roku jest wiosna, a elementem, któremu ta pora roku przynależy, jest Drewno."
          },
          {
            "p": "Gdy gałęzią dnia urodzenia jest 卯, ten znak jest pozycją małżonka. Poniżej widać, jakie pnie zawiera ta gałąź i czym są wobec pnia dnia."
          }
        ]
      },
      {
        "title": "Pnie zawarte w tej gałęzi (ukryte pnie)",
        "blocks": [
          {
            "p": "Gałąź to jeden widoczny znak, ale zawiera w sobie pnie. Udział pokazuje, jak trzydzieści dni gałęzi dzieli się między pnie, a pień główny to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie 卯",
              "head": [
                "Pień",
                "Element i polaryzacja",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Drewno Yang",
                  "szczątkowy (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "Drewno Yin (乙)",
                  "Drewno Yin",
                  "główny (本氣)",
                  "{hidMyoBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Siła pięciu elementów, gdy gałęzią miesiąca jest 卯",
        "blocks": [
          {
            "p": "Gdy gałęzią miesiąca urodzenia jest 卯, każdy element otrzymuje stan (Wang, Sang, Hyu, Su, Sa), a ten stan staje się mnożnikiem stosowanym do jego siły."
          },
          {
            "table": {
              "caption": "Stany elementów dla gałęzi miesiąca 卯 (wiosna)",
              "head": [
                "Element",
                "Stan",
                "Mnożnik"
              ],
              "rows": [
                [
                  "Drewno",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Ogień",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Ziemia",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Metal",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Woda",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Dziesięć Bogów według pnia dnia",
        "blocks": [
          {
            "p": "Te same ukryte pnie 卯 stają się innymi Bogami zależnie od pnia dnia. Gdy 卯 jest gałęzią dnia, ta tabela jest odczytem pozycji małżonka."
          },
          {
            "table": {
              "caption": "Czym ukryte pnie 卯 są dla każdego pnia dnia",
              "head": [
                "Pień dnia",
                "Drewno Yang (甲) — szczątkowy (餘氣)",
                "Drewno Yin (乙) — główny (本氣)"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Towarzysz (比肩)",
                  "Rywal (劫財)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Rywal (劫財)",
                  "Towarzysz (比肩)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Nietypowe wsparcie (偏印)",
                  "Opieka (正印)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Opieka (正印)",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Wyzwanie (偏官)",
                  "Autorytet (正官)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Autorytet (正官)",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Metal Yang (庚)",
                  "Zmienne bogactwo (偏財)",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Metal Yin (辛)",
                  "Stałe bogactwo (正財)",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Woda Yang (壬)",
                  "Ekspresja (食神)",
                  "Burzyciel (傷官)"
                ],
                [
                  "Woda Yin (癸)",
                  "Burzyciel (傷官)",
                  "Ekspresja (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedna gałąź nie rozstrzyga o człowieku. Ta sama gałąź jest odczytywana inaczej zależnie od pnia dnia i gałęzi miesiąca.",
              "Relacje między gałęziami, takie jak harmonia, zderzenie i niezgoda, nie są tu omawiane."
            ]
          },
          {
            "p": "Relacje między gałęziami znajdziesz w [tabeli dwunastu gałęzi](/guide/branches), a znaczenie gałęzi jako zwierzęcia zodiaku w [rozdziale o miejscu zodiaku w saju](/guide/zodiac). Inne gałęzie: [子 (Szczur)](/guide/branch-ja) · [丑 (Wół)](/guide/branch-chuk) · [寅 (Tygrys)](/guide/branch-in) · [辰 (Smok)](/guide/branch-jin) · [巳 (Wąż)](/guide/branch-sa) · [午 (Koń)](/guide/branch-o) · [未 (Owca)](/guide/branch-mi) · [申 (Małpa)](/guide/branch-sin) · [酉 (Kogut)](/guide/branch-yu) · [戌 (Pies)](/guide/branch-sul) · [亥 (Świnia)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-jin": {
    "eyebrow": "Gałęzie ziemskie",
    "title": "辰 — gałąź Smoka",
    "summary": "Pnie zawarte w gałęzi ziemskiej 辰 (ukryte pnie), siła pięciu elementów, gdy jest ona gałęzią miesiąca, oraz Dziesięciu Bogów odczytywanych dla każdego pnia dnia — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "辰 to piąta z dwunastu gałęzi ziemskich",
        "blocks": [
          {
            "p": "辰 to piąta z dwunastu gałęzi ziemskich i należy do Smoka. Gdy gałęzią miesiąca urodzenia jest 辰, porą roku jest wiosna, a elementem, któremu ta pora roku przynależy, jest Drewno. Jest to miesiąc przejściowy (辰未戌丑), więc Ziemia jest również uznawana za będącą w stanie Wang."
          },
          {
            "p": "Gdy gałęzią dnia urodzenia jest 辰, ten znak jest pozycją małżonka. Poniżej widać, jakie pnie zawiera ta gałąź i czym są wobec pnia dnia."
          }
        ]
      },
      {
        "title": "Pnie zawarte w tej gałęzi (ukryte pnie)",
        "blocks": [
          {
            "p": "Gałąź to jeden widoczny znak, ale zawiera w sobie pnie. Udział pokazuje, jak trzydzieści dni gałęzi dzieli się między pnie, a pień główny to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie 辰",
              "head": [
                "Pień",
                "Element i polaryzacja",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "Drewno Yin (乙)",
                  "Drewno Yin",
                  "szczątkowy (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "Woda Yin (癸)",
                  "Woda Yin",
                  "środkowy (中氣)",
                  "{hidJinJung}"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Ziemia Yang",
                  "główny (本氣)",
                  "{hidJinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Siła pięciu elementów, gdy gałęzią miesiąca jest 辰",
        "blocks": [
          {
            "p": "Gdy gałęzią miesiąca urodzenia jest 辰, każdy element otrzymuje stan (Wang, Sang, Hyu, Su, Sa), a ten stan staje się mnożnikiem stosowanym do jego siły."
          },
          {
            "table": {
              "caption": "Stany elementów dla gałęzi miesiąca 辰 (wiosna (miesiąc przejściowy))",
              "head": [
                "Element",
                "Stan",
                "Mnożnik"
              ],
              "rows": [
                [
                  "Drewno",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Ogień",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Ziemia",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Woda",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Dziesięć Bogów według pnia dnia",
        "blocks": [
          {
            "p": "Te same ukryte pnie 辰 stają się innymi Bogami zależnie od pnia dnia. Gdy 辰 jest gałęzią dnia, ta tabela jest odczytem pozycji małżonka."
          },
          {
            "table": {
              "caption": "Czym ukryte pnie 辰 są dla każdego pnia dnia",
              "head": [
                "Pień dnia",
                "Drewno Yin (乙) — szczątkowy (餘氣)",
                "Woda Yin (癸) — środkowy (中氣)",
                "Ziemia Yang (戊) — główny (本氣)"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Rywal (劫財)",
                  "Opieka (正印)",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Towarzysz (比肩)",
                  "Nietypowe wsparcie (偏印)",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Opieka (正印)",
                  "Autorytet (正官)",
                  "Ekspresja (食神)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Nietypowe wsparcie (偏印)",
                  "Wyzwanie (偏官)",
                  "Burzyciel (傷官)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Autorytet (正官)",
                  "Stałe bogactwo (正財)",
                  "Towarzysz (比肩)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Wyzwanie (偏官)",
                  "Zmienne bogactwo (偏財)",
                  "Rywal (劫財)"
                ],
                [
                  "Metal Yang (庚)",
                  "Stałe bogactwo (正財)",
                  "Burzyciel (傷官)",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Metal Yin (辛)",
                  "Zmienne bogactwo (偏財)",
                  "Ekspresja (食神)",
                  "Opieka (正印)"
                ],
                [
                  "Woda Yang (壬)",
                  "Burzyciel (傷官)",
                  "Rywal (劫財)",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Woda Yin (癸)",
                  "Ekspresja (食神)",
                  "Towarzysz (比肩)",
                  "Autorytet (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedna gałąź nie rozstrzyga o człowieku. Ta sama gałąź jest odczytywana inaczej zależnie od pnia dnia i gałęzi miesiąca.",
              "Relacje między gałęziami, takie jak harmonia, zderzenie i niezgoda, nie są tu omawiane."
            ]
          },
          {
            "p": "Relacje między gałęziami znajdziesz w [tabeli dwunastu gałęzi](/guide/branches), a znaczenie gałęzi jako zwierzęcia zodiaku w [rozdziale o miejscu zodiaku w saju](/guide/zodiac). Inne gałęzie: [子 (Szczur)](/guide/branch-ja) · [丑 (Wół)](/guide/branch-chuk) · [寅 (Tygrys)](/guide/branch-in) · [卯 (Królik)](/guide/branch-myo) · [巳 (Wąż)](/guide/branch-sa) · [午 (Koń)](/guide/branch-o) · [未 (Owca)](/guide/branch-mi) · [申 (Małpa)](/guide/branch-sin) · [酉 (Kogut)](/guide/branch-yu) · [戌 (Pies)](/guide/branch-sul) · [亥 (Świnia)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sa": {
    "eyebrow": "Gałęzie ziemskie",
    "title": "巳 — gałąź Węża",
    "summary": "Pnie zawarte w gałęzi ziemskiej 巳 (ukryte pnie), siła pięciu elementów, gdy jest ona gałęzią miesiąca, oraz Dziesięciu Bogów odczytywanych dla każdego pnia dnia — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "巳 to szósta z dwunastu gałęzi ziemskich",
        "blocks": [
          {
            "p": "巳 to szósta z dwunastu gałęzi ziemskich i należy do Węża. Gdy gałęzią miesiąca urodzenia jest 巳, porą roku jest lato, a elementem, któremu ta pora roku przynależy, jest Ogień."
          },
          {
            "p": "Gdy gałęzią dnia urodzenia jest 巳, ten znak jest pozycją małżonka. Poniżej widać, jakie pnie zawiera ta gałąź i czym są wobec pnia dnia."
          }
        ]
      },
      {
        "title": "Pnie zawarte w tej gałęzi (ukryte pnie)",
        "blocks": [
          {
            "p": "Gałąź to jeden widoczny znak, ale zawiera w sobie pnie. Udział pokazuje, jak trzydzieści dni gałęzi dzieli się między pnie, a pień główny to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie 巳",
              "head": [
                "Pień",
                "Element i polaryzacja",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "Ziemia Yang",
                  "szczątkowy (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "środkowy (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "Ogień Yang (丙)",
                  "Ogień Yang",
                  "główny (本氣)",
                  "{hidSaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Siła pięciu elementów, gdy gałęzią miesiąca jest 巳",
        "blocks": [
          {
            "p": "Gdy gałęzią miesiąca urodzenia jest 巳, każdy element otrzymuje stan (Wang, Sang, Hyu, Su, Sa), a ten stan staje się mnożnikiem stosowanym do jego siły."
          },
          {
            "table": {
              "caption": "Stany elementów dla gałęzi miesiąca 巳 (lato)",
              "head": [
                "Element",
                "Stan",
                "Mnożnik"
              ],
              "rows": [
                [
                  "Drewno",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Ogień",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Ziemia",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Metal",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Woda",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Dziesięć Bogów według pnia dnia",
        "blocks": [
          {
            "p": "Te same ukryte pnie 巳 stają się innymi Bogami zależnie od pnia dnia. Gdy 巳 jest gałęzią dnia, ta tabela jest odczytem pozycji małżonka."
          },
          {
            "table": {
              "caption": "Czym ukryte pnie 巳 są dla każdego pnia dnia",
              "head": [
                "Pień dnia",
                "Ziemia Yang (戊) — szczątkowy (餘氣)",
                "Metal Yang (庚) — środkowy (中氣)",
                "Ogień Yang (丙) — główny (本氣)"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Zmienne bogactwo (偏財)",
                  "Wyzwanie (偏官)",
                  "Ekspresja (食神)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Stałe bogactwo (正財)",
                  "Autorytet (正官)",
                  "Burzyciel (傷官)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Ekspresja (食神)",
                  "Zmienne bogactwo (偏財)",
                  "Towarzysz (比肩)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Burzyciel (傷官)",
                  "Stałe bogactwo (正財)",
                  "Rywal (劫財)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Towarzysz (比肩)",
                  "Ekspresja (食神)",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Rywal (劫財)",
                  "Burzyciel (傷官)",
                  "Opieka (正印)"
                ],
                [
                  "Metal Yang (庚)",
                  "Nietypowe wsparcie (偏印)",
                  "Towarzysz (比肩)",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Metal Yin (辛)",
                  "Opieka (正印)",
                  "Rywal (劫財)",
                  "Autorytet (正官)"
                ],
                [
                  "Woda Yang (壬)",
                  "Wyzwanie (偏官)",
                  "Nietypowe wsparcie (偏印)",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Woda Yin (癸)",
                  "Autorytet (正官)",
                  "Opieka (正印)",
                  "Stałe bogactwo (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedna gałąź nie rozstrzyga o człowieku. Ta sama gałąź jest odczytywana inaczej zależnie od pnia dnia i gałęzi miesiąca.",
              "Relacje między gałęziami, takie jak harmonia, zderzenie i niezgoda, nie są tu omawiane."
            ]
          },
          {
            "p": "Relacje między gałęziami znajdziesz w [tabeli dwunastu gałęzi](/guide/branches), a znaczenie gałęzi jako zwierzęcia zodiaku w [rozdziale o miejscu zodiaku w saju](/guide/zodiac). Inne gałęzie: [子 (Szczur)](/guide/branch-ja) · [丑 (Wół)](/guide/branch-chuk) · [寅 (Tygrys)](/guide/branch-in) · [卯 (Królik)](/guide/branch-myo) · [辰 (Smok)](/guide/branch-jin) · [午 (Koń)](/guide/branch-o) · [未 (Owca)](/guide/branch-mi) · [申 (Małpa)](/guide/branch-sin) · [酉 (Kogut)](/guide/branch-yu) · [戌 (Pies)](/guide/branch-sul) · [亥 (Świnia)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-o": {
    "eyebrow": "Gałęzie ziemskie",
    "title": "午 — gałąź Konia",
    "summary": "Pnie zawarte w gałęzi ziemskiej 午 (ukryte pnie), siła pięciu elementów, gdy jest ona gałęzią miesiąca, oraz Dziesięciu Bogów odczytywanych dla każdego pnia dnia — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "午 to siódma z dwunastu gałęzi ziemskich",
        "blocks": [
          {
            "p": "午 to siódma z dwunastu gałęzi ziemskich i należy do Konia. Gdy gałęzią miesiąca urodzenia jest 午, porą roku jest lato, a elementem, któremu ta pora roku przynależy, jest Ogień."
          },
          {
            "p": "Gdy gałęzią dnia urodzenia jest 午, ten znak jest pozycją małżonka. Poniżej widać, jakie pnie zawiera ta gałąź i czym są wobec pnia dnia."
          }
        ]
      },
      {
        "title": "Pnie zawarte w tej gałęzi (ukryte pnie)",
        "blocks": [
          {
            "p": "Gałąź to jeden widoczny znak, ale zawiera w sobie pnie. Udział pokazuje, jak trzydzieści dni gałęzi dzieli się między pnie, a pień główny to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie 午",
              "head": [
                "Pień",
                "Element i polaryzacja",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "Ogień Yang (丙)",
                  "Ogień Yang",
                  "szczątkowy (餘氣)",
                  "{hidOYeo}"
                ],
                [
                  "Ziemia Yin (己)",
                  "Ziemia Yin",
                  "środkowy (中氣)",
                  "{hidOJung}"
                ],
                [
                  "Ogień Yin (丁)",
                  "Ogień Yin",
                  "główny (本氣)",
                  "{hidOBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Siła pięciu elementów, gdy gałęzią miesiąca jest 午",
        "blocks": [
          {
            "p": "Gdy gałęzią miesiąca urodzenia jest 午, każdy element otrzymuje stan (Wang, Sang, Hyu, Su, Sa), a ten stan staje się mnożnikiem stosowanym do jego siły."
          },
          {
            "table": {
              "caption": "Stany elementów dla gałęzi miesiąca 午 (lato)",
              "head": [
                "Element",
                "Stan",
                "Mnożnik"
              ],
              "rows": [
                [
                  "Drewno",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Ogień",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Ziemia",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Metal",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Woda",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Dziesięć Bogów według pnia dnia",
        "blocks": [
          {
            "p": "Te same ukryte pnie 午 stają się innymi Bogami zależnie od pnia dnia. Gdy 午 jest gałęzią dnia, ta tabela jest odczytem pozycji małżonka."
          },
          {
            "table": {
              "caption": "Czym ukryte pnie 午 są dla każdego pnia dnia",
              "head": [
                "Pień dnia",
                "Ogień Yang (丙) — szczątkowy (餘氣)",
                "Ziemia Yin (己) — środkowy (中氣)",
                "Ogień Yin (丁) — główny (本氣)"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Ekspresja (食神)",
                  "Stałe bogactwo (正財)",
                  "Burzyciel (傷官)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Burzyciel (傷官)",
                  "Zmienne bogactwo (偏財)",
                  "Ekspresja (食神)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Towarzysz (比肩)",
                  "Burzyciel (傷官)",
                  "Rywal (劫財)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Rywal (劫財)",
                  "Ekspresja (食神)",
                  "Towarzysz (比肩)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Nietypowe wsparcie (偏印)",
                  "Rywal (劫財)",
                  "Opieka (正印)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Opieka (正印)",
                  "Towarzysz (比肩)",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Metal Yang (庚)",
                  "Wyzwanie (偏官)",
                  "Opieka (正印)",
                  "Autorytet (正官)"
                ],
                [
                  "Metal Yin (辛)",
                  "Autorytet (正官)",
                  "Nietypowe wsparcie (偏印)",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Woda Yang (壬)",
                  "Zmienne bogactwo (偏財)",
                  "Autorytet (正官)",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Woda Yin (癸)",
                  "Stałe bogactwo (正財)",
                  "Wyzwanie (偏官)",
                  "Zmienne bogactwo (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedna gałąź nie rozstrzyga o człowieku. Ta sama gałąź jest odczytywana inaczej zależnie od pnia dnia i gałęzi miesiąca.",
              "Relacje między gałęziami, takie jak harmonia, zderzenie i niezgoda, nie są tu omawiane."
            ]
          },
          {
            "p": "Relacje między gałęziami znajdziesz w [tabeli dwunastu gałęzi](/guide/branches), a znaczenie gałęzi jako zwierzęcia zodiaku w [rozdziale o miejscu zodiaku w saju](/guide/zodiac). Inne gałęzie: [子 (Szczur)](/guide/branch-ja) · [丑 (Wół)](/guide/branch-chuk) · [寅 (Tygrys)](/guide/branch-in) · [卯 (Królik)](/guide/branch-myo) · [辰 (Smok)](/guide/branch-jin) · [巳 (Wąż)](/guide/branch-sa) · [未 (Owca)](/guide/branch-mi) · [申 (Małpa)](/guide/branch-sin) · [酉 (Kogut)](/guide/branch-yu) · [戌 (Pies)](/guide/branch-sul) · [亥 (Świnia)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-mi": {
    "eyebrow": "Gałęzie ziemskie",
    "title": "未 — gałąź Owcy",
    "summary": "Pnie zawarte w gałęzi ziemskiej 未 (ukryte pnie), siła pięciu elementów, gdy jest ona gałęzią miesiąca, oraz Dziesięciu Bogów odczytywanych dla każdego pnia dnia — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "未 to ósma z dwunastu gałęzi ziemskich",
        "blocks": [
          {
            "p": "未 to ósma z dwunastu gałęzi ziemskich i należy do Owcy. Gdy gałęzią miesiąca urodzenia jest 未, porą roku jest lato, a elementem, któremu ta pora roku przynależy, jest Ogień. Jest to miesiąc przejściowy (辰未戌丑), więc Ziemia jest również uznawana za będącą w stanie Wang."
          },
          {
            "p": "Gdy gałęzią dnia urodzenia jest 未, ten znak jest pozycją małżonka. Poniżej widać, jakie pnie zawiera ta gałąź i czym są wobec pnia dnia."
          }
        ]
      },
      {
        "title": "Pnie zawarte w tej gałęzi (ukryte pnie)",
        "blocks": [
          {
            "p": "Gałąź to jeden widoczny znak, ale zawiera w sobie pnie. Udział pokazuje, jak trzydzieści dni gałęzi dzieli się między pnie, a pień główny to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie 未",
              "head": [
                "Pień",
                "Element i polaryzacja",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "Ogień Yin (丁)",
                  "Ogień Yin",
                  "szczątkowy (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "Drewno Yin (乙)",
                  "Drewno Yin",
                  "środkowy (中氣)",
                  "{hidMiJung}"
                ],
                [
                  "Ziemia Yin (己)",
                  "Ziemia Yin",
                  "główny (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Siła pięciu elementów, gdy gałęzią miesiąca jest 未",
        "blocks": [
          {
            "p": "Gdy gałęzią miesiąca urodzenia jest 未, każdy element otrzymuje stan (Wang, Sang, Hyu, Su, Sa), a ten stan staje się mnożnikiem stosowanym do jego siły."
          },
          {
            "table": {
              "caption": "Stany elementów dla gałęzi miesiąca 未 (lato (miesiąc przejściowy))",
              "head": [
                "Element",
                "Stan",
                "Mnożnik"
              ],
              "rows": [
                [
                  "Drewno",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Ogień",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Ziemia",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Woda",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Dziesięć Bogów według pnia dnia",
        "blocks": [
          {
            "p": "Te same ukryte pnie 未 stają się innymi Bogami zależnie od pnia dnia. Gdy 未 jest gałęzią dnia, ta tabela jest odczytem pozycji małżonka."
          },
          {
            "table": {
              "caption": "Czym ukryte pnie 未 są dla każdego pnia dnia",
              "head": [
                "Pień dnia",
                "Ogień Yin (丁) — szczątkowy (餘氣)",
                "Drewno Yin (乙) — środkowy (中氣)",
                "Ziemia Yin (己) — główny (本氣)"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Burzyciel (傷官)",
                  "Rywal (劫財)",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Ekspresja (食神)",
                  "Towarzysz (比肩)",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Rywal (劫財)",
                  "Opieka (正印)",
                  "Burzyciel (傷官)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Towarzysz (比肩)",
                  "Nietypowe wsparcie (偏印)",
                  "Ekspresja (食神)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Opieka (正印)",
                  "Autorytet (正官)",
                  "Rywal (劫財)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Nietypowe wsparcie (偏印)",
                  "Wyzwanie (偏官)",
                  "Towarzysz (比肩)"
                ],
                [
                  "Metal Yang (庚)",
                  "Autorytet (正官)",
                  "Stałe bogactwo (正財)",
                  "Opieka (正印)"
                ],
                [
                  "Metal Yin (辛)",
                  "Wyzwanie (偏官)",
                  "Zmienne bogactwo (偏財)",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Woda Yang (壬)",
                  "Stałe bogactwo (正財)",
                  "Burzyciel (傷官)",
                  "Autorytet (正官)"
                ],
                [
                  "Woda Yin (癸)",
                  "Zmienne bogactwo (偏財)",
                  "Ekspresja (食神)",
                  "Wyzwanie (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedna gałąź nie rozstrzyga o człowieku. Ta sama gałąź jest odczytywana inaczej zależnie od pnia dnia i gałęzi miesiąca.",
              "Relacje między gałęziami, takie jak harmonia, zderzenie i niezgoda, nie są tu omawiane."
            ]
          },
          {
            "p": "Relacje między gałęziami znajdziesz w [tabeli dwunastu gałęzi](/guide/branches), a znaczenie gałęzi jako zwierzęcia zodiaku w [rozdziale o miejscu zodiaku w saju](/guide/zodiac). Inne gałęzie: [子 (Szczur)](/guide/branch-ja) · [丑 (Wół)](/guide/branch-chuk) · [寅 (Tygrys)](/guide/branch-in) · [卯 (Królik)](/guide/branch-myo) · [辰 (Smok)](/guide/branch-jin) · [巳 (Wąż)](/guide/branch-sa) · [午 (Koń)](/guide/branch-o) · [申 (Małpa)](/guide/branch-sin) · [酉 (Kogut)](/guide/branch-yu) · [戌 (Pies)](/guide/branch-sul) · [亥 (Świnia)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sin": {
    "eyebrow": "Gałęzie ziemskie",
    "title": "申 — gałąź Małpy",
    "summary": "Pnie zawarte w gałęzi ziemskiej 申 (ukryte pnie), siła pięciu elementów, gdy jest ona gałęzią miesiąca, oraz Dziesięciu Bogów odczytywanych dla każdego pnia dnia — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "申 to dziewiąta z dwunastu gałęzi ziemskich",
        "blocks": [
          {
            "p": "申 to dziewiąta z dwunastu gałęzi ziemskich i należy do Małpy. Gdy gałęzią miesiąca urodzenia jest 申, porą roku jest jesień, a elementem, któremu ta pora roku przynależy, jest Metal."
          },
          {
            "p": "Gdy gałęzią dnia urodzenia jest 申, ten znak jest pozycją małżonka. Poniżej widać, jakie pnie zawiera ta gałąź i czym są wobec pnia dnia."
          }
        ]
      },
      {
        "title": "Pnie zawarte w tej gałęzi (ukryte pnie)",
        "blocks": [
          {
            "p": "Gałąź to jeden widoczny znak, ale zawiera w sobie pnie. Udział pokazuje, jak trzydzieści dni gałęzi dzieli się między pnie, a pień główny to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie 申",
              "head": [
                "Pień",
                "Element i polaryzacja",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "Ziemia Yang",
                  "szczątkowy (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "Woda Yang (壬)",
                  "Woda Yang",
                  "środkowy (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "główny (本氣)",
                  "{hidSinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Siła pięciu elementów, gdy gałęzią miesiąca jest 申",
        "blocks": [
          {
            "p": "Gdy gałęzią miesiąca urodzenia jest 申, każdy element otrzymuje stan (Wang, Sang, Hyu, Su, Sa), a ten stan staje się mnożnikiem stosowanym do jego siły."
          },
          {
            "table": {
              "caption": "Stany elementów dla gałęzi miesiąca 申 (jesień)",
              "head": [
                "Element",
                "Stan",
                "Mnożnik"
              ],
              "rows": [
                [
                  "Drewno",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Ogień",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Ziemia",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Metal",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Woda",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Dziesięć Bogów według pnia dnia",
        "blocks": [
          {
            "p": "Te same ukryte pnie 申 stają się innymi Bogami zależnie od pnia dnia. Gdy 申 jest gałęzią dnia, ta tabela jest odczytem pozycji małżonka."
          },
          {
            "table": {
              "caption": "Czym ukryte pnie 申 są dla każdego pnia dnia",
              "head": [
                "Pień dnia",
                "Ziemia Yang (戊) — szczątkowy (餘氣)",
                "Woda Yang (壬) — środkowy (中氣)",
                "Metal Yang (庚) — główny (本氣)"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Zmienne bogactwo (偏財)",
                  "Nietypowe wsparcie (偏印)",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Stałe bogactwo (正財)",
                  "Opieka (正印)",
                  "Autorytet (正官)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Ekspresja (食神)",
                  "Wyzwanie (偏官)",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Burzyciel (傷官)",
                  "Autorytet (正官)",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Towarzysz (比肩)",
                  "Zmienne bogactwo (偏財)",
                  "Ekspresja (食神)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Rywal (劫財)",
                  "Stałe bogactwo (正財)",
                  "Burzyciel (傷官)"
                ],
                [
                  "Metal Yang (庚)",
                  "Nietypowe wsparcie (偏印)",
                  "Ekspresja (食神)",
                  "Towarzysz (比肩)"
                ],
                [
                  "Metal Yin (辛)",
                  "Opieka (正印)",
                  "Burzyciel (傷官)",
                  "Rywal (劫財)"
                ],
                [
                  "Woda Yang (壬)",
                  "Wyzwanie (偏官)",
                  "Towarzysz (比肩)",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Woda Yin (癸)",
                  "Autorytet (正官)",
                  "Rywal (劫財)",
                  "Opieka (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedna gałąź nie rozstrzyga o człowieku. Ta sama gałąź jest odczytywana inaczej zależnie od pnia dnia i gałęzi miesiąca.",
              "Relacje między gałęziami, takie jak harmonia, zderzenie i niezgoda, nie są tu omawiane."
            ]
          },
          {
            "p": "Relacje między gałęziami znajdziesz w [tabeli dwunastu gałęzi](/guide/branches), a znaczenie gałęzi jako zwierzęcia zodiaku w [rozdziale o miejscu zodiaku w saju](/guide/zodiac). Inne gałęzie: [子 (Szczur)](/guide/branch-ja) · [丑 (Wół)](/guide/branch-chuk) · [寅 (Tygrys)](/guide/branch-in) · [卯 (Królik)](/guide/branch-myo) · [辰 (Smok)](/guide/branch-jin) · [巳 (Wąż)](/guide/branch-sa) · [午 (Koń)](/guide/branch-o) · [未 (Owca)](/guide/branch-mi) · [酉 (Kogut)](/guide/branch-yu) · [戌 (Pies)](/guide/branch-sul) · [亥 (Świnia)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-yu": {
    "eyebrow": "Gałęzie ziemskie",
    "title": "酉 — gałąź Koguta",
    "summary": "Pnie zawarte w gałęzi ziemskiej 酉 (ukryte pnie), siła pięciu elementów, gdy jest ona gałęzią miesiąca, oraz Dziesięciu Bogów odczytywanych dla każdego pnia dnia — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "酉 to dziesiąta z dwunastu gałęzi ziemskich",
        "blocks": [
          {
            "p": "酉 to dziesiąta z dwunastu gałęzi ziemskich i należy do Koguta. Gdy gałęzią miesiąca urodzenia jest 酉, porą roku jest jesień, a elementem, któremu ta pora roku przynależy, jest Metal."
          },
          {
            "p": "Gdy gałęzią dnia urodzenia jest 酉, ten znak jest pozycją małżonka. Poniżej widać, jakie pnie zawiera ta gałąź i czym są wobec pnia dnia."
          }
        ]
      },
      {
        "title": "Pnie zawarte w tej gałęzi (ukryte pnie)",
        "blocks": [
          {
            "p": "Gałąź to jeden widoczny znak, ale zawiera w sobie pnie. Udział pokazuje, jak trzydzieści dni gałęzi dzieli się między pnie, a pień główny to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie 酉",
              "head": [
                "Pień",
                "Element i polaryzacja",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "Metal Yang (庚)",
                  "Metal Yang",
                  "szczątkowy (餘氣)",
                  "{hidYuYeo}"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "główny (本氣)",
                  "{hidYuBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Siła pięciu elementów, gdy gałęzią miesiąca jest 酉",
        "blocks": [
          {
            "p": "Gdy gałęzią miesiąca urodzenia jest 酉, każdy element otrzymuje stan (Wang, Sang, Hyu, Su, Sa), a ten stan staje się mnożnikiem stosowanym do jego siły."
          },
          {
            "table": {
              "caption": "Stany elementów dla gałęzi miesiąca 酉 (jesień)",
              "head": [
                "Element",
                "Stan",
                "Mnożnik"
              ],
              "rows": [
                [
                  "Drewno",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Ogień",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Ziemia",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Metal",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Woda",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Dziesięć Bogów według pnia dnia",
        "blocks": [
          {
            "p": "Te same ukryte pnie 酉 stają się innymi Bogami zależnie od pnia dnia. Gdy 酉 jest gałęzią dnia, ta tabela jest odczytem pozycji małżonka."
          },
          {
            "table": {
              "caption": "Czym ukryte pnie 酉 są dla każdego pnia dnia",
              "head": [
                "Pień dnia",
                "Metal Yang (庚) — szczątkowy (餘氣)",
                "Metal Yin (辛) — główny (本氣)"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Wyzwanie (偏官)",
                  "Autorytet (正官)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Autorytet (正官)",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Zmienne bogactwo (偏財)",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Stałe bogactwo (正財)",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Ekspresja (食神)",
                  "Burzyciel (傷官)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Burzyciel (傷官)",
                  "Ekspresja (食神)"
                ],
                [
                  "Metal Yang (庚)",
                  "Towarzysz (比肩)",
                  "Rywal (劫財)"
                ],
                [
                  "Metal Yin (辛)",
                  "Rywal (劫財)",
                  "Towarzysz (比肩)"
                ],
                [
                  "Woda Yang (壬)",
                  "Nietypowe wsparcie (偏印)",
                  "Opieka (正印)"
                ],
                [
                  "Woda Yin (癸)",
                  "Opieka (正印)",
                  "Nietypowe wsparcie (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedna gałąź nie rozstrzyga o człowieku. Ta sama gałąź jest odczytywana inaczej zależnie od pnia dnia i gałęzi miesiąca.",
              "Relacje między gałęziami, takie jak harmonia, zderzenie i niezgoda, nie są tu omawiane."
            ]
          },
          {
            "p": "Relacje między gałęziami znajdziesz w [tabeli dwunastu gałęzi](/guide/branches), a znaczenie gałęzi jako zwierzęcia zodiaku w [rozdziale o miejscu zodiaku w saju](/guide/zodiac). Inne gałęzie: [子 (Szczur)](/guide/branch-ja) · [丑 (Wół)](/guide/branch-chuk) · [寅 (Tygrys)](/guide/branch-in) · [卯 (Królik)](/guide/branch-myo) · [辰 (Smok)](/guide/branch-jin) · [巳 (Wąż)](/guide/branch-sa) · [午 (Koń)](/guide/branch-o) · [未 (Owca)](/guide/branch-mi) · [申 (Małpa)](/guide/branch-sin) · [戌 (Pies)](/guide/branch-sul) · [亥 (Świnia)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sul": {
    "eyebrow": "Gałęzie ziemskie",
    "title": "戌 — gałąź Psa",
    "summary": "Pnie zawarte w gałęzi ziemskiej 戌 (ukryte pnie), siła pięciu elementów, gdy jest ona gałęzią miesiąca, oraz Dziesięciu Bogów odczytywanych dla każdego pnia dnia — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "戌 to jedenasta z dwunastu gałęzi ziemskich",
        "blocks": [
          {
            "p": "戌 to jedenasta z dwunastu gałęzi ziemskich i należy do Psa. Gdy gałęzią miesiąca urodzenia jest 戌, porą roku jest jesień, a elementem, któremu ta pora roku przynależy, jest Metal. Jest to miesiąc przejściowy (辰未戌丑), więc Ziemia jest również uznawana za będącą w stanie Wang."
          },
          {
            "p": "Gdy gałęzią dnia urodzenia jest 戌, ten znak jest pozycją małżonka. Poniżej widać, jakie pnie zawiera ta gałąź i czym są wobec pnia dnia."
          }
        ]
      },
      {
        "title": "Pnie zawarte w tej gałęzi (ukryte pnie)",
        "blocks": [
          {
            "p": "Gałąź to jeden widoczny znak, ale zawiera w sobie pnie. Udział pokazuje, jak trzydzieści dni gałęzi dzieli się między pnie, a pień główny to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie 戌",
              "head": [
                "Pień",
                "Element i polaryzacja",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "Metal Yin (辛)",
                  "Metal Yin",
                  "szczątkowy (餘氣)",
                  "{hidSulYeo}"
                ],
                [
                  "Ogień Yin (丁)",
                  "Ogień Yin",
                  "środkowy (中氣)",
                  "{hidSulJung}"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Ziemia Yang",
                  "główny (本氣)",
                  "{hidSulBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Siła pięciu elementów, gdy gałęzią miesiąca jest 戌",
        "blocks": [
          {
            "p": "Gdy gałęzią miesiąca urodzenia jest 戌, każdy element otrzymuje stan (Wang, Sang, Hyu, Su, Sa), a ten stan staje się mnożnikiem stosowanym do jego siły."
          },
          {
            "table": {
              "caption": "Stany elementów dla gałęzi miesiąca 戌 (jesień (miesiąc przejściowy))",
              "head": [
                "Element",
                "Stan",
                "Mnożnik"
              ],
              "rows": [
                [
                  "Drewno",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Ogień",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Ziemia",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Woda",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Dziesięć Bogów według pnia dnia",
        "blocks": [
          {
            "p": "Te same ukryte pnie 戌 stają się innymi Bogami zależnie od pnia dnia. Gdy 戌 jest gałęzią dnia, ta tabela jest odczytem pozycji małżonka."
          },
          {
            "table": {
              "caption": "Czym ukryte pnie 戌 są dla każdego pnia dnia",
              "head": [
                "Pień dnia",
                "Metal Yin (辛) — szczątkowy (餘氣)",
                "Ogień Yin (丁) — środkowy (中氣)",
                "Ziemia Yang (戊) — główny (本氣)"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Autorytet (正官)",
                  "Burzyciel (傷官)",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Wyzwanie (偏官)",
                  "Ekspresja (食神)",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Stałe bogactwo (正財)",
                  "Rywal (劫財)",
                  "Ekspresja (食神)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Zmienne bogactwo (偏財)",
                  "Towarzysz (比肩)",
                  "Burzyciel (傷官)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Burzyciel (傷官)",
                  "Opieka (正印)",
                  "Towarzysz (比肩)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Ekspresja (食神)",
                  "Nietypowe wsparcie (偏印)",
                  "Rywal (劫財)"
                ],
                [
                  "Metal Yang (庚)",
                  "Rywal (劫財)",
                  "Autorytet (正官)",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Metal Yin (辛)",
                  "Towarzysz (比肩)",
                  "Wyzwanie (偏官)",
                  "Opieka (正印)"
                ],
                [
                  "Woda Yang (壬)",
                  "Opieka (正印)",
                  "Stałe bogactwo (正財)",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Woda Yin (癸)",
                  "Nietypowe wsparcie (偏印)",
                  "Zmienne bogactwo (偏財)",
                  "Autorytet (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedna gałąź nie rozstrzyga o człowieku. Ta sama gałąź jest odczytywana inaczej zależnie od pnia dnia i gałęzi miesiąca.",
              "Relacje między gałęziami, takie jak harmonia, zderzenie i niezgoda, nie są tu omawiane."
            ]
          },
          {
            "p": "Relacje między gałęziami znajdziesz w [tabeli dwunastu gałęzi](/guide/branches), a znaczenie gałęzi jako zwierzęcia zodiaku w [rozdziale o miejscu zodiaku w saju](/guide/zodiac). Inne gałęzie: [子 (Szczur)](/guide/branch-ja) · [丑 (Wół)](/guide/branch-chuk) · [寅 (Tygrys)](/guide/branch-in) · [卯 (Królik)](/guide/branch-myo) · [辰 (Smok)](/guide/branch-jin) · [巳 (Wąż)](/guide/branch-sa) · [午 (Koń)](/guide/branch-o) · [未 (Owca)](/guide/branch-mi) · [申 (Małpa)](/guide/branch-sin) · [酉 (Kogut)](/guide/branch-yu) · [亥 (Świnia)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-hae": {
    "eyebrow": "Gałęzie ziemskie",
    "title": "亥 — gałąź Świni",
    "summary": "Pnie zawarte w gałęzi ziemskiej 亥 (ukryte pnie), siła pięciu elementów, gdy jest ona gałęzią miesiąca, oraz Dziesięciu Bogów odczytywanych dla każdego pnia dnia — przedstawione dokładnie tak, jak w zasadach obliczeń Saju-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "亥 to dwunasta z dwunastu gałęzi ziemskich",
        "blocks": [
          {
            "p": "亥 to dwunasta z dwunastu gałęzi ziemskich i należy do Świni. Gdy gałęzią miesiąca urodzenia jest 亥, porą roku jest zima, a elementem, któremu ta pora roku przynależy, jest Woda."
          },
          {
            "p": "Gdy gałęzią dnia urodzenia jest 亥, ten znak jest pozycją małżonka. Poniżej widać, jakie pnie zawiera ta gałąź i czym są wobec pnia dnia."
          }
        ]
      },
      {
        "title": "Pnie zawarte w tej gałęzi (ukryte pnie)",
        "blocks": [
          {
            "p": "Gałąź to jeden widoczny znak, ale zawiera w sobie pnie. Udział pokazuje, jak trzydzieści dni gałęzi dzieli się między pnie, a pień główny to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie 亥",
              "head": [
                "Pień",
                "Element i polaryzacja",
                "Pozycja",
                "Udział"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "Ziemia Yang",
                  "szczątkowy (餘氣)",
                  "{hidHaeYeo}"
                ],
                [
                  "Drewno Yang (甲)",
                  "Drewno Yang",
                  "środkowy (中氣)",
                  "{hidHaeJung}"
                ],
                [
                  "Woda Yang (壬)",
                  "Woda Yang",
                  "główny (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Siła pięciu elementów, gdy gałęzią miesiąca jest 亥",
        "blocks": [
          {
            "p": "Gdy gałęzią miesiąca urodzenia jest 亥, każdy element otrzymuje stan (Wang, Sang, Hyu, Su, Sa), a ten stan staje się mnożnikiem stosowanym do jego siły."
          },
          {
            "table": {
              "caption": "Stany elementów dla gałęzi miesiąca 亥 (zima)",
              "head": [
                "Element",
                "Stan",
                "Mnożnik"
              ],
              "rows": [
                [
                  "Drewno",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Ogień",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Ziemia",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Metal",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Woda",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Dziesięć Bogów według pnia dnia",
        "blocks": [
          {
            "p": "Te same ukryte pnie 亥 stają się innymi Bogami zależnie od pnia dnia. Gdy 亥 jest gałęzią dnia, ta tabela jest odczytem pozycji małżonka."
          },
          {
            "table": {
              "caption": "Czym ukryte pnie 亥 są dla każdego pnia dnia",
              "head": [
                "Pień dnia",
                "Ziemia Yang (戊) — szczątkowy (餘氣)",
                "Drewno Yang (甲) — środkowy (中氣)",
                "Woda Yang (壬) — główny (本氣)"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Zmienne bogactwo (偏財)",
                  "Towarzysz (比肩)",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Drewno Yin (乙)",
                  "Stałe bogactwo (正財)",
                  "Rywal (劫財)",
                  "Opieka (正印)"
                ],
                [
                  "Ogień Yang (丙)",
                  "Ekspresja (食神)",
                  "Nietypowe wsparcie (偏印)",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Ogień Yin (丁)",
                  "Burzyciel (傷官)",
                  "Opieka (正印)",
                  "Autorytet (正官)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Towarzysz (比肩)",
                  "Wyzwanie (偏官)",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Ziemia Yin (己)",
                  "Rywal (劫財)",
                  "Autorytet (正官)",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Metal Yang (庚)",
                  "Nietypowe wsparcie (偏印)",
                  "Zmienne bogactwo (偏財)",
                  "Ekspresja (食神)"
                ],
                [
                  "Metal Yin (辛)",
                  "Opieka (正印)",
                  "Stałe bogactwo (正財)",
                  "Burzyciel (傷官)"
                ],
                [
                  "Woda Yang (壬)",
                  "Wyzwanie (偏官)",
                  "Ekspresja (食神)",
                  "Towarzysz (比肩)"
                ],
                [
                  "Woda Yin (癸)",
                  "Autorytet (正官)",
                  "Burzyciel (傷官)",
                  "Rywal (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedna gałąź nie rozstrzyga o człowieku. Ta sama gałąź jest odczytywana inaczej zależnie od pnia dnia i gałęzi miesiąca.",
              "Relacje między gałęziami, takie jak harmonia, zderzenie i niezgoda, nie są tu omawiane."
            ]
          },
          {
            "p": "Relacje między gałęziami znajdziesz w [tabeli dwunastu gałęzi](/guide/branches), a znaczenie gałęzi jako zwierzęcia zodiaku w [rozdziale o miejscu zodiaku w saju](/guide/zodiac). Inne gałęzie: [子 (Szczur)](/guide/branch-ja) · [丑 (Wół)](/guide/branch-chuk) · [寅 (Tygrys)](/guide/branch-in) · [卯 (Królik)](/guide/branch-myo) · [辰 (Smok)](/guide/branch-jin) · [巳 (Wąż)](/guide/branch-sa) · [午 (Koń)](/guide/branch-o) · [未 (Owca)](/guide/branch-mi) · [申 (Małpa)](/guide/branch-sin) · [酉 (Kogut)](/guide/branch-yu) · [戌 (Pies)](/guide/branch-sul)"
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-ja": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 甲子",
    "summary": "Jak Saju-Link odczytuje filar dnia 甲子 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "甲子 to filar dnia numer 1 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 甲子, pniem dnia jest 甲 (Drewno, Yang), a gałęzią dnia 子 (Szczur). W cyklu sześćdziesięciu par jest to kombinacja numer 1."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 甲, „Drewno Yang (甲)”, a zdanie pokazywane na ekranie wyników brzmi: „Wysokie drzewo rosnące prosto. Gdy kierunek jest już obrany, nie chwieje się i woli wytrzymać, niż się ugiąć.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 子",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 甲, pnie zawarte w 子 są następujące. Pień główny (癸) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 甲子",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 甲"
              ],
              "rows": [
                [
                  "Woda Yang (壬)",
                  "szczątkowy (餘氣)",
                  "{hidJaYeo}",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Woda Yin (癸)",
                  "główny (本氣)",
                  "{hidJaBon}",
                  "Opieka (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 甲, Stałe bogactwo to 己, a Autorytet to 辛."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 己. 己 nie znajduje się wewnątrz 子."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 辛. 辛 nie znajduje się wewnątrz 子."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [癸亥](/guide/pillar-gye-hae), a następnym [乙丑](/guide/pillar-eul-chuk)."
          },
          {
            "p": "Tworzą go: [Drewno Yang (甲)](/guide/stem-gap) oraz [子 (Szczur)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-chuk": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 乙丑",
    "summary": "Jak Saju-Link odczytuje filar dnia 乙丑 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "乙丑 to filar dnia numer 2 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 乙丑, pniem dnia jest 乙 (Drewno, Yin), a gałęzią dnia 丑 (Wół). W cyklu sześćdziesięciu par jest to kombinacja numer 2."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 乙, „Drewno Yin (乙)”, a zdanie pokazywane na ekranie wyników brzmi: „Pnącze — giętka trawa. Ugina się pod okolicznościami, żeby iść dalej, i nie pęka.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 丑",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 乙, pnie zawarte w 丑 są następujące. Pień główny (己) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 乙丑",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 乙"
              ],
              "rows": [
                [
                  "Woda Yin (癸)",
                  "szczątkowy (餘氣)",
                  "{hidChukYeo}",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Metal Yin (辛)",
                  "środkowy (中氣)",
                  "{hidChukJung}",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Ziemia Yin (己)",
                  "główny (本氣)",
                  "{hidChukBon}",
                  "Zmienne bogactwo (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 乙, Stałe bogactwo to 戊, a Autorytet to 庚."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 戊. 戊 nie znajduje się wewnątrz 丑."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 庚. 庚 nie znajduje się wewnątrz 丑."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [甲子](/guide/pillar-gap-ja), a następnym [丙寅](/guide/pillar-byeong-in)."
          },
          {
            "p": "Tworzą go: [Drewno Yin (乙)](/guide/stem-eul) oraz [丑 (Wół)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-in": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 丙寅",
    "summary": "Jak Saju-Link odczytuje filar dnia 丙寅 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "丙寅 to filar dnia numer 3 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 丙寅, pniem dnia jest 丙 (Ogień, Yang), a gałęzią dnia 寅 (Tygrys). W cyklu sześćdziesięciu par jest to kombinacja numer 3."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 丙, „Ogień Yang (丙)”, a zdanie pokazywane na ekranie wyników brzmi: „Słońce w południe. Uczucia widać wprost, w pomieszczeniu robi się jaśniej, a wychodzenie przed szereg przychodzi naturalnie.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 寅",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 丙, pnie zawarte w 寅 są następujące. Pień główny (甲) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 丙寅",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 丙"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "szczątkowy (餘氣)",
                  "{hidInYeo}",
                  "Ekspresja (食神)"
                ],
                [
                  "Ogień Yang (丙)",
                  "środkowy (中氣)",
                  "{hidInJung}",
                  "Towarzysz (比肩)"
                ],
                [
                  "Drewno Yang (甲)",
                  "główny (本氣)",
                  "{hidInBon}",
                  "Nietypowe wsparcie (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 丙, Stałe bogactwo to 辛, a Autorytet to 癸."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 辛. 辛 nie znajduje się wewnątrz 寅."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 癸. 癸 nie znajduje się wewnątrz 寅."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [乙丑](/guide/pillar-eul-chuk), a następnym [丁卯](/guide/pillar-jeong-myo)."
          },
          {
            "p": "Tworzą go: [Ogień Yang (丙)](/guide/stem-byeong) oraz [寅 (Tygrys)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-myo": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 丁卯",
    "summary": "Jak Saju-Link odczytuje filar dnia 丁卯 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "丁卯 to filar dnia numer 4 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 丁卯, pniem dnia jest 丁 (Ogień, Yin), a gałęzią dnia 卯 (Królik). W cyklu sześćdziesięciu par jest to kombinacja numer 4."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 丁, „Ogień Yin (丁)”, a zdanie pokazywane na ekranie wyników brzmi: „Światło świecy. Pali się cicho i długo, a ogrzewa najpierw tych najbliższych.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 卯",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 丁, pnie zawarte w 卯 są następujące. Pień główny (乙) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 丁卯",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 丁"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "szczątkowy (餘氣)",
                  "{hidMyoYeo}",
                  "Opieka (正印)"
                ],
                [
                  "Drewno Yin (乙)",
                  "główny (本氣)",
                  "{hidMyoBon}",
                  "Nietypowe wsparcie (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 丁, Stałe bogactwo to 庚, a Autorytet to 壬."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 庚. 庚 nie znajduje się wewnątrz 卯."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 壬. 壬 nie znajduje się wewnątrz 卯."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [丙寅](/guide/pillar-byeong-in), a następnym [戊辰](/guide/pillar-mu-jin)."
          },
          {
            "p": "Tworzą go: [Ogień Yin (丁)](/guide/stem-jeong) oraz [卯 (Królik)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-jin": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 戊辰",
    "summary": "Jak Saju-Link odczytuje filar dnia 戊辰 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "戊辰 to filar dnia numer 5 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 戊辰, pniem dnia jest 戊 (Ziemia, Yang), a gałęzią dnia 辰 (Smok). W cyklu sześćdziesięciu par jest to kombinacja numer 5."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 戊, „Ziemia Yang (戊)”, a zdanie pokazywane na ekranie wyników brzmi: „Otwarty ląd i góry. Trudno tym zachwiać i łatwo się o to oprzeć, choć raz podjęta decyzja zmienia się powoli.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 辰",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 戊, pnie zawarte w 辰 są następujące. Pień główny (戊) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 戊辰",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 戊"
              ],
              "rows": [
                [
                  "Drewno Yin (乙)",
                  "szczątkowy (餘氣)",
                  "{hidJinYeo}",
                  "Autorytet (正官)"
                ],
                [
                  "Woda Yin (癸)",
                  "środkowy (中氣)",
                  "{hidJinJung}",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "główny (本氣)",
                  "{hidJinBon}",
                  "Towarzysz (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 戊, Stałe bogactwo to 癸, a Autorytet to 乙."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 癸. 癸 znajduje się wewnątrz 辰 (środkowy (中氣))."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 乙. 乙 znajduje się wewnątrz 辰 (szczątkowy (餘氣))."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [丁卯](/guide/pillar-jeong-myo), a następnym [己巳](/guide/pillar-gi-sa)."
          },
          {
            "p": "Tworzą go: [Ziemia Yang (戊)](/guide/stem-mu) oraz [辰 (Smok)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-sa": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 己巳",
    "summary": "Jak Saju-Link odczytuje filar dnia 己巳 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "己巳 to filar dnia numer 6 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 己巳, pniem dnia jest 己 (Ziemia, Yin), a gałęzią dnia 巳 (Wąż). W cyklu sześćdziesięciu par jest to kombinacja numer 6."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 己, „Ziemia Yin (己)”, a zdanie pokazywane na ekranie wyników brzmi: „Gleba pola. Przyjmuje to, co przyjdzie, i to wyhodowuje — raczej pielęgnuje, niż pokazuje.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 巳",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 己, pnie zawarte w 巳 są następujące. Pień główny (丙) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 己巳",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 己"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "szczątkowy (餘氣)",
                  "{hidSaYeo}",
                  "Rywal (劫財)"
                ],
                [
                  "Metal Yang (庚)",
                  "środkowy (中氣)",
                  "{hidSaJung}",
                  "Burzyciel (傷官)"
                ],
                [
                  "Ogień Yang (丙)",
                  "główny (本氣)",
                  "{hidSaBon}",
                  "Opieka (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 己, Stałe bogactwo to 壬, a Autorytet to 甲."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 壬. 壬 nie znajduje się wewnątrz 巳."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 甲. 甲 nie znajduje się wewnątrz 巳."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [戊辰](/guide/pillar-mu-jin), a następnym [庚午](/guide/pillar-gyeong-o)."
          },
          {
            "p": "Tworzą go: [Ziemia Yin (己)](/guide/stem-gi) oraz [巳 (Wąż)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-o": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 庚午",
    "summary": "Jak Saju-Link odczytuje filar dnia 庚午 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "庚午 to filar dnia numer 7 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 庚午, pniem dnia jest 庚 (Metal, Yang), a gałęzią dnia 午 (Koń). W cyklu sześćdziesięciu par jest to kombinacja numer 7."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 庚, „Metal Yang (庚)”, a zdanie pokazywane na ekranie wyników brzmi: „Nieobrobione żelazo. Zdecydowany i jednoznaczny, bez cierpliwości do spraw zawieszonych.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 午",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 庚, pnie zawarte w 午 są następujące. Pień główny (丁) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 庚午",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 庚"
              ],
              "rows": [
                [
                  "Ogień Yang (丙)",
                  "szczątkowy (餘氣)",
                  "{hidOYeo}",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Ziemia Yin (己)",
                  "środkowy (中氣)",
                  "{hidOJung}",
                  "Opieka (正印)"
                ],
                [
                  "Ogień Yin (丁)",
                  "główny (本氣)",
                  "{hidOBon}",
                  "Autorytet (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 庚, Stałe bogactwo to 乙, a Autorytet to 丁."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 乙. 乙 nie znajduje się wewnątrz 午."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 丁. 丁 znajduje się wewnątrz 午 (główny (本氣))."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [己巳](/guide/pillar-gi-sa), a następnym [辛未](/guide/pillar-sin-mi)."
          },
          {
            "p": "Tworzą go: [Metal Yang (庚)](/guide/stem-gyeong) oraz [午 (Koń)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-mi": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 辛未",
    "summary": "Jak Saju-Link odczytuje filar dnia 辛未 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "辛未 to filar dnia numer 8 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 辛未, pniem dnia jest 辛 (Metal, Yin), a gałęzią dnia 未 (Owca). W cyklu sześćdziesięciu par jest to kombinacja numer 8."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 辛, „Metal Yin (辛)”, a zdanie pokazywane na ekranie wyników brzmi: „Oszlifowany klejnot. Wyczulony smak i wysokie wymagania; niedbałość trudno tu puścić płazem.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 未",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 辛, pnie zawarte w 未 są następujące. Pień główny (己) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 辛未",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 辛"
              ],
              "rows": [
                [
                  "Ogień Yin (丁)",
                  "szczątkowy (餘氣)",
                  "{hidMiYeo}",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Drewno Yin (乙)",
                  "środkowy (中氣)",
                  "{hidMiJung}",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Ziemia Yin (己)",
                  "główny (本氣)",
                  "{hidMiBon}",
                  "Nietypowe wsparcie (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 辛, Stałe bogactwo to 甲, a Autorytet to 丙."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 甲. 甲 nie znajduje się wewnątrz 未."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 丙. 丙 nie znajduje się wewnątrz 未."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [庚午](/guide/pillar-gyeong-o), a następnym [壬申](/guide/pillar-im-sin)."
          },
          {
            "p": "Tworzą go: [Metal Yin (辛)](/guide/stem-sin) oraz [未 (Owca)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sin": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 壬申",
    "summary": "Jak Saju-Link odczytuje filar dnia 壬申 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "壬申 to filar dnia numer 9 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 壬申, pniem dnia jest 壬 (Woda, Yang), a gałęzią dnia 申 (Małpa). W cyklu sześćdziesięciu par jest to kombinacja numer 9."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 壬, „Woda Yang (壬)”, a zdanie pokazywane na ekranie wyników brzmi: „Rzeka i morze. Szerokie spojrzenie i oko do tego, jak sprawy płyną.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 申",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 壬, pnie zawarte w 申 są następujące. Pień główny (庚) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 壬申",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 壬"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "szczątkowy (餘氣)",
                  "{hidSinYeo}",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Woda Yang (壬)",
                  "środkowy (中氣)",
                  "{hidSinJung}",
                  "Towarzysz (比肩)"
                ],
                [
                  "Metal Yang (庚)",
                  "główny (本氣)",
                  "{hidSinBon}",
                  "Nietypowe wsparcie (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 壬, Stałe bogactwo to 丁, a Autorytet to 己."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 丁. 丁 nie znajduje się wewnątrz 申."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 己. 己 nie znajduje się wewnątrz 申."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [辛未](/guide/pillar-sin-mi), a następnym [癸酉](/guide/pillar-gye-yu)."
          },
          {
            "p": "Tworzą go: [Woda Yang (壬)](/guide/stem-im) oraz [申 (Małpa)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-yu": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 癸酉",
    "summary": "Jak Saju-Link odczytuje filar dnia 癸酉 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "癸酉 to filar dnia numer 10 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 癸酉, pniem dnia jest 癸 (Woda, Yin), a gałęzią dnia 酉 (Kogut). W cyklu sześćdziesięciu par jest to kombinacja numer 10."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 癸, „Woda Yin (癸)”, a zdanie pokazywane na ekranie wyników brzmi: „Rosa i deszcz. Wsiąka cicho i czyta nastrój, zanim padną słowa.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 酉",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 癸, pnie zawarte w 酉 są następujące. Pień główny (辛) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 癸酉",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 癸"
              ],
              "rows": [
                [
                  "Metal Yang (庚)",
                  "szczątkowy (餘氣)",
                  "{hidYuYeo}",
                  "Opieka (正印)"
                ],
                [
                  "Metal Yin (辛)",
                  "główny (本氣)",
                  "{hidYuBon}",
                  "Nietypowe wsparcie (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 癸, Stałe bogactwo to 丙, a Autorytet to 戊."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 丙. 丙 nie znajduje się wewnątrz 酉."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 戊. 戊 nie znajduje się wewnątrz 酉."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [壬申](/guide/pillar-im-sin), a następnym [甲戌](/guide/pillar-gap-sul)."
          },
          {
            "p": "Tworzą go: [Woda Yin (癸)](/guide/stem-gye) oraz [酉 (Kogut)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sul": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 甲戌",
    "summary": "Jak Saju-Link odczytuje filar dnia 甲戌 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "甲戌 to filar dnia numer 11 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 甲戌, pniem dnia jest 甲 (Drewno, Yang), a gałęzią dnia 戌 (Pies). W cyklu sześćdziesięciu par jest to kombinacja numer 11."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 甲, „Drewno Yang (甲)”, a zdanie pokazywane na ekranie wyników brzmi: „Wysokie drzewo rosnące prosto. Gdy kierunek jest już obrany, nie chwieje się i woli wytrzymać, niż się ugiąć.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 戌",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 甲, pnie zawarte w 戌 są następujące. Pień główny (戊) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 甲戌",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 甲"
              ],
              "rows": [
                [
                  "Metal Yin (辛)",
                  "szczątkowy (餘氣)",
                  "{hidSulYeo}",
                  "Autorytet (正官)"
                ],
                [
                  "Ogień Yin (丁)",
                  "środkowy (中氣)",
                  "{hidSulJung}",
                  "Burzyciel (傷官)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "główny (本氣)",
                  "{hidSulBon}",
                  "Zmienne bogactwo (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 甲, Stałe bogactwo to 己, a Autorytet to 辛."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 己. 己 nie znajduje się wewnątrz 戌."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 辛. 辛 znajduje się wewnątrz 戌 (szczątkowy (餘氣))."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [癸酉](/guide/pillar-gye-yu), a następnym [乙亥](/guide/pillar-eul-hae)."
          },
          {
            "p": "Tworzą go: [Drewno Yang (甲)](/guide/stem-gap) oraz [戌 (Pies)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-hae": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 乙亥",
    "summary": "Jak Saju-Link odczytuje filar dnia 乙亥 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "乙亥 to filar dnia numer 12 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 乙亥, pniem dnia jest 乙 (Drewno, Yin), a gałęzią dnia 亥 (Świnia). W cyklu sześćdziesięciu par jest to kombinacja numer 12."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 乙, „Drewno Yin (乙)”, a zdanie pokazywane na ekranie wyników brzmi: „Pnącze — giętka trawa. Ugina się pod okolicznościami, żeby iść dalej, i nie pęka.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 亥",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 乙, pnie zawarte w 亥 są następujące. Pień główny (壬) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 乙亥",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 乙"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "szczątkowy (餘氣)",
                  "{hidHaeYeo}",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Drewno Yang (甲)",
                  "środkowy (中氣)",
                  "{hidHaeJung}",
                  "Rywal (劫財)"
                ],
                [
                  "Woda Yang (壬)",
                  "główny (本氣)",
                  "{hidHaeBon}",
                  "Opieka (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 乙, Stałe bogactwo to 戊, a Autorytet to 庚."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 戊. 戊 znajduje się wewnątrz 亥 (szczątkowy (餘氣))."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 庚. 庚 nie znajduje się wewnątrz 亥."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [甲戌](/guide/pillar-gap-sul), a następnym [丙子](/guide/pillar-byeong-ja)."
          },
          {
            "p": "Tworzą go: [Drewno Yin (乙)](/guide/stem-eul) oraz [亥 (Świnia)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-ja": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 丙子",
    "summary": "Jak Saju-Link odczytuje filar dnia 丙子 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "丙子 to filar dnia numer 13 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 丙子, pniem dnia jest 丙 (Ogień, Yang), a gałęzią dnia 子 (Szczur). W cyklu sześćdziesięciu par jest to kombinacja numer 13."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 丙, „Ogień Yang (丙)”, a zdanie pokazywane na ekranie wyników brzmi: „Słońce w południe. Uczucia widać wprost, w pomieszczeniu robi się jaśniej, a wychodzenie przed szereg przychodzi naturalnie.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 子",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 丙, pnie zawarte w 子 są następujące. Pień główny (癸) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 丙子",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 丙"
              ],
              "rows": [
                [
                  "Woda Yang (壬)",
                  "szczątkowy (餘氣)",
                  "{hidJaYeo}",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Woda Yin (癸)",
                  "główny (本氣)",
                  "{hidJaBon}",
                  "Autorytet (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 丙, Stałe bogactwo to 辛, a Autorytet to 癸."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 辛. 辛 nie znajduje się wewnątrz 子."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 癸. 癸 znajduje się wewnątrz 子 (główny (本氣))."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [乙亥](/guide/pillar-eul-hae), a następnym [丁丑](/guide/pillar-jeong-chuk)."
          },
          {
            "p": "Tworzą go: [Ogień Yang (丙)](/guide/stem-byeong) oraz [子 (Szczur)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-chuk": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 丁丑",
    "summary": "Jak Saju-Link odczytuje filar dnia 丁丑 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "丁丑 to filar dnia numer 14 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 丁丑, pniem dnia jest 丁 (Ogień, Yin), a gałęzią dnia 丑 (Wół). W cyklu sześćdziesięciu par jest to kombinacja numer 14."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 丁, „Ogień Yin (丁)”, a zdanie pokazywane na ekranie wyników brzmi: „Światło świecy. Pali się cicho i długo, a ogrzewa najpierw tych najbliższych.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 丑",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 丁, pnie zawarte w 丑 są następujące. Pień główny (己) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 丁丑",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 丁"
              ],
              "rows": [
                [
                  "Woda Yin (癸)",
                  "szczątkowy (餘氣)",
                  "{hidChukYeo}",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Metal Yin (辛)",
                  "środkowy (中氣)",
                  "{hidChukJung}",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Ziemia Yin (己)",
                  "główny (本氣)",
                  "{hidChukBon}",
                  "Ekspresja (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 丁, Stałe bogactwo to 庚, a Autorytet to 壬."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 庚. 庚 nie znajduje się wewnątrz 丑."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 壬. 壬 nie znajduje się wewnątrz 丑."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [丙子](/guide/pillar-byeong-ja), a następnym [戊寅](/guide/pillar-mu-in)."
          },
          {
            "p": "Tworzą go: [Ogień Yin (丁)](/guide/stem-jeong) oraz [丑 (Wół)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-in": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 戊寅",
    "summary": "Jak Saju-Link odczytuje filar dnia 戊寅 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "戊寅 to filar dnia numer 15 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 戊寅, pniem dnia jest 戊 (Ziemia, Yang), a gałęzią dnia 寅 (Tygrys). W cyklu sześćdziesięciu par jest to kombinacja numer 15."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 戊, „Ziemia Yang (戊)”, a zdanie pokazywane na ekranie wyników brzmi: „Otwarty ląd i góry. Trudno tym zachwiać i łatwo się o to oprzeć, choć raz podjęta decyzja zmienia się powoli.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 寅",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 戊, pnie zawarte w 寅 są następujące. Pień główny (甲) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 戊寅",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 戊"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "szczątkowy (餘氣)",
                  "{hidInYeo}",
                  "Towarzysz (比肩)"
                ],
                [
                  "Ogień Yang (丙)",
                  "środkowy (中氣)",
                  "{hidInJung}",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Drewno Yang (甲)",
                  "główny (本氣)",
                  "{hidInBon}",
                  "Wyzwanie (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 戊, Stałe bogactwo to 癸, a Autorytet to 乙."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 癸. 癸 nie znajduje się wewnątrz 寅."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 乙. 乙 nie znajduje się wewnątrz 寅."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [丁丑](/guide/pillar-jeong-chuk), a następnym [己卯](/guide/pillar-gi-myo)."
          },
          {
            "p": "Tworzą go: [Ziemia Yang (戊)](/guide/stem-mu) oraz [寅 (Tygrys)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-myo": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 己卯",
    "summary": "Jak Saju-Link odczytuje filar dnia 己卯 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "己卯 to filar dnia numer 16 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 己卯, pniem dnia jest 己 (Ziemia, Yin), a gałęzią dnia 卯 (Królik). W cyklu sześćdziesięciu par jest to kombinacja numer 16."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 己, „Ziemia Yin (己)”, a zdanie pokazywane na ekranie wyników brzmi: „Gleba pola. Przyjmuje to, co przyjdzie, i to wyhodowuje — raczej pielęgnuje, niż pokazuje.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 卯",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 己, pnie zawarte w 卯 są następujące. Pień główny (乙) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 己卯",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 己"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "szczątkowy (餘氣)",
                  "{hidMyoYeo}",
                  "Autorytet (正官)"
                ],
                [
                  "Drewno Yin (乙)",
                  "główny (本氣)",
                  "{hidMyoBon}",
                  "Wyzwanie (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 己, Stałe bogactwo to 壬, a Autorytet to 甲."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 壬. 壬 nie znajduje się wewnątrz 卯."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 甲. 甲 znajduje się wewnątrz 卯 (szczątkowy (餘氣))."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [戊寅](/guide/pillar-mu-in), a następnym [庚辰](/guide/pillar-gyeong-jin)."
          },
          {
            "p": "Tworzą go: [Ziemia Yin (己)](/guide/stem-gi) oraz [卯 (Królik)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-jin": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 庚辰",
    "summary": "Jak Saju-Link odczytuje filar dnia 庚辰 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "庚辰 to filar dnia numer 17 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 庚辰, pniem dnia jest 庚 (Metal, Yang), a gałęzią dnia 辰 (Smok). W cyklu sześćdziesięciu par jest to kombinacja numer 17."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 庚, „Metal Yang (庚)”, a zdanie pokazywane na ekranie wyników brzmi: „Nieobrobione żelazo. Zdecydowany i jednoznaczny, bez cierpliwości do spraw zawieszonych.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 辰",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 庚, pnie zawarte w 辰 są następujące. Pień główny (戊) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 庚辰",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 庚"
              ],
              "rows": [
                [
                  "Drewno Yin (乙)",
                  "szczątkowy (餘氣)",
                  "{hidJinYeo}",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Woda Yin (癸)",
                  "środkowy (中氣)",
                  "{hidJinJung}",
                  "Burzyciel (傷官)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "główny (本氣)",
                  "{hidJinBon}",
                  "Nietypowe wsparcie (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 庚, Stałe bogactwo to 乙, a Autorytet to 丁."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 乙. 乙 znajduje się wewnątrz 辰 (szczątkowy (餘氣))."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 丁. 丁 nie znajduje się wewnątrz 辰."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [己卯](/guide/pillar-gi-myo), a następnym [辛巳](/guide/pillar-sin-sa)."
          },
          {
            "p": "Tworzą go: [Metal Yang (庚)](/guide/stem-gyeong) oraz [辰 (Smok)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-sa": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 辛巳",
    "summary": "Jak Saju-Link odczytuje filar dnia 辛巳 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "辛巳 to filar dnia numer 18 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 辛巳, pniem dnia jest 辛 (Metal, Yin), a gałęzią dnia 巳 (Wąż). W cyklu sześćdziesięciu par jest to kombinacja numer 18."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 辛, „Metal Yin (辛)”, a zdanie pokazywane na ekranie wyników brzmi: „Oszlifowany klejnot. Wyczulony smak i wysokie wymagania; niedbałość trudno tu puścić płazem.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 巳",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 辛, pnie zawarte w 巳 są następujące. Pień główny (丙) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 辛巳",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 辛"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "szczątkowy (餘氣)",
                  "{hidSaYeo}",
                  "Opieka (正印)"
                ],
                [
                  "Metal Yang (庚)",
                  "środkowy (中氣)",
                  "{hidSaJung}",
                  "Rywal (劫財)"
                ],
                [
                  "Ogień Yang (丙)",
                  "główny (本氣)",
                  "{hidSaBon}",
                  "Autorytet (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 辛, Stałe bogactwo to 甲, a Autorytet to 丙."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 甲. 甲 nie znajduje się wewnątrz 巳."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 丙. 丙 znajduje się wewnątrz 巳 (główny (本氣))."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [庚辰](/guide/pillar-gyeong-jin), a następnym [壬午](/guide/pillar-im-o)."
          },
          {
            "p": "Tworzą go: [Metal Yin (辛)](/guide/stem-sin) oraz [巳 (Wąż)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-o": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 壬午",
    "summary": "Jak Saju-Link odczytuje filar dnia 壬午 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "壬午 to filar dnia numer 19 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 壬午, pniem dnia jest 壬 (Woda, Yang), a gałęzią dnia 午 (Koń). W cyklu sześćdziesięciu par jest to kombinacja numer 19."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 壬, „Woda Yang (壬)”, a zdanie pokazywane na ekranie wyników brzmi: „Rzeka i morze. Szerokie spojrzenie i oko do tego, jak sprawy płyną.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 午",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 壬, pnie zawarte w 午 są następujące. Pień główny (丁) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 壬午",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 壬"
              ],
              "rows": [
                [
                  "Ogień Yang (丙)",
                  "szczątkowy (餘氣)",
                  "{hidOYeo}",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Ziemia Yin (己)",
                  "środkowy (中氣)",
                  "{hidOJung}",
                  "Autorytet (正官)"
                ],
                [
                  "Ogień Yin (丁)",
                  "główny (本氣)",
                  "{hidOBon}",
                  "Stałe bogactwo (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 壬, Stałe bogactwo to 丁, a Autorytet to 己."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 丁. 丁 znajduje się wewnątrz 午 (główny (本氣))."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 己. 己 znajduje się wewnątrz 午 (środkowy (中氣))."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [辛巳](/guide/pillar-sin-sa), a następnym [癸未](/guide/pillar-gye-mi)."
          },
          {
            "p": "Tworzą go: [Woda Yang (壬)](/guide/stem-im) oraz [午 (Koń)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-mi": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 癸未",
    "summary": "Jak Saju-Link odczytuje filar dnia 癸未 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "癸未 to filar dnia numer 20 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 癸未, pniem dnia jest 癸 (Woda, Yin), a gałęzią dnia 未 (Owca). W cyklu sześćdziesięciu par jest to kombinacja numer 20."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 癸, „Woda Yin (癸)”, a zdanie pokazywane na ekranie wyników brzmi: „Rosa i deszcz. Wsiąka cicho i czyta nastrój, zanim padną słowa.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 未",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 癸, pnie zawarte w 未 są następujące. Pień główny (己) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 癸未",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 癸"
              ],
              "rows": [
                [
                  "Ogień Yin (丁)",
                  "szczątkowy (餘氣)",
                  "{hidMiYeo}",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Drewno Yin (乙)",
                  "środkowy (中氣)",
                  "{hidMiJung}",
                  "Ekspresja (食神)"
                ],
                [
                  "Ziemia Yin (己)",
                  "główny (本氣)",
                  "{hidMiBon}",
                  "Wyzwanie (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 癸, Stałe bogactwo to 丙, a Autorytet to 戊."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 丙. 丙 nie znajduje się wewnątrz 未."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 戊. 戊 nie znajduje się wewnątrz 未."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [壬午](/guide/pillar-im-o), a następnym [甲申](/guide/pillar-gap-sin)."
          },
          {
            "p": "Tworzą go: [Woda Yin (癸)](/guide/stem-gye) oraz [未 (Owca)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sin": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 甲申",
    "summary": "Jak Saju-Link odczytuje filar dnia 甲申 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "甲申 to filar dnia numer 21 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 甲申, pniem dnia jest 甲 (Drewno, Yang), a gałęzią dnia 申 (Małpa). W cyklu sześćdziesięciu par jest to kombinacja numer 21."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 甲, „Drewno Yang (甲)”, a zdanie pokazywane na ekranie wyników brzmi: „Wysokie drzewo rosnące prosto. Gdy kierunek jest już obrany, nie chwieje się i woli wytrzymać, niż się ugiąć.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 申",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 甲, pnie zawarte w 申 są następujące. Pień główny (庚) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 甲申",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 甲"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "szczątkowy (餘氣)",
                  "{hidSinYeo}",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Woda Yang (壬)",
                  "środkowy (中氣)",
                  "{hidSinJung}",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Metal Yang (庚)",
                  "główny (本氣)",
                  "{hidSinBon}",
                  "Wyzwanie (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 甲, Stałe bogactwo to 己, a Autorytet to 辛."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 己. 己 nie znajduje się wewnątrz 申."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 辛. 辛 nie znajduje się wewnątrz 申."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [癸未](/guide/pillar-gye-mi), a następnym [乙酉](/guide/pillar-eul-yu)."
          },
          {
            "p": "Tworzą go: [Drewno Yang (甲)](/guide/stem-gap) oraz [申 (Małpa)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-yu": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 乙酉",
    "summary": "Jak Saju-Link odczytuje filar dnia 乙酉 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "乙酉 to filar dnia numer 22 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 乙酉, pniem dnia jest 乙 (Drewno, Yin), a gałęzią dnia 酉 (Kogut). W cyklu sześćdziesięciu par jest to kombinacja numer 22."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 乙, „Drewno Yin (乙)”, a zdanie pokazywane na ekranie wyników brzmi: „Pnącze — giętka trawa. Ugina się pod okolicznościami, żeby iść dalej, i nie pęka.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 酉",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 乙, pnie zawarte w 酉 są następujące. Pień główny (辛) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 乙酉",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 乙"
              ],
              "rows": [
                [
                  "Metal Yang (庚)",
                  "szczątkowy (餘氣)",
                  "{hidYuYeo}",
                  "Autorytet (正官)"
                ],
                [
                  "Metal Yin (辛)",
                  "główny (本氣)",
                  "{hidYuBon}",
                  "Wyzwanie (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 乙, Stałe bogactwo to 戊, a Autorytet to 庚."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 戊. 戊 nie znajduje się wewnątrz 酉."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 庚. 庚 znajduje się wewnątrz 酉 (szczątkowy (餘氣))."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [甲申](/guide/pillar-gap-sin), a następnym [丙戌](/guide/pillar-byeong-sul)."
          },
          {
            "p": "Tworzą go: [Drewno Yin (乙)](/guide/stem-eul) oraz [酉 (Kogut)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sul": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 丙戌",
    "summary": "Jak Saju-Link odczytuje filar dnia 丙戌 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "丙戌 to filar dnia numer 23 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 丙戌, pniem dnia jest 丙 (Ogień, Yang), a gałęzią dnia 戌 (Pies). W cyklu sześćdziesięciu par jest to kombinacja numer 23."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 丙, „Ogień Yang (丙)”, a zdanie pokazywane na ekranie wyników brzmi: „Słońce w południe. Uczucia widać wprost, w pomieszczeniu robi się jaśniej, a wychodzenie przed szereg przychodzi naturalnie.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 戌",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 丙, pnie zawarte w 戌 są następujące. Pień główny (戊) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 丙戌",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 丙"
              ],
              "rows": [
                [
                  "Metal Yin (辛)",
                  "szczątkowy (餘氣)",
                  "{hidSulYeo}",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Ogień Yin (丁)",
                  "środkowy (中氣)",
                  "{hidSulJung}",
                  "Rywal (劫財)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "główny (本氣)",
                  "{hidSulBon}",
                  "Ekspresja (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 丙, Stałe bogactwo to 辛, a Autorytet to 癸."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 辛. 辛 znajduje się wewnątrz 戌 (szczątkowy (餘氣))."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 癸. 癸 nie znajduje się wewnątrz 戌."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [乙酉](/guide/pillar-eul-yu), a następnym [丁亥](/guide/pillar-jeong-hae)."
          },
          {
            "p": "Tworzą go: [Ogień Yang (丙)](/guide/stem-byeong) oraz [戌 (Pies)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-hae": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 丁亥",
    "summary": "Jak Saju-Link odczytuje filar dnia 丁亥 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "丁亥 to filar dnia numer 24 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 丁亥, pniem dnia jest 丁 (Ogień, Yin), a gałęzią dnia 亥 (Świnia). W cyklu sześćdziesięciu par jest to kombinacja numer 24."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 丁, „Ogień Yin (丁)”, a zdanie pokazywane na ekranie wyników brzmi: „Światło świecy. Pali się cicho i długo, a ogrzewa najpierw tych najbliższych.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 亥",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 丁, pnie zawarte w 亥 są następujące. Pień główny (壬) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 丁亥",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 丁"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "szczątkowy (餘氣)",
                  "{hidHaeYeo}",
                  "Burzyciel (傷官)"
                ],
                [
                  "Drewno Yang (甲)",
                  "środkowy (中氣)",
                  "{hidHaeJung}",
                  "Opieka (正印)"
                ],
                [
                  "Woda Yang (壬)",
                  "główny (本氣)",
                  "{hidHaeBon}",
                  "Autorytet (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 丁, Stałe bogactwo to 庚, a Autorytet to 壬."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 庚. 庚 nie znajduje się wewnątrz 亥."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 壬. 壬 znajduje się wewnątrz 亥 (główny (本氣))."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [丙戌](/guide/pillar-byeong-sul), a następnym [戊子](/guide/pillar-mu-ja)."
          },
          {
            "p": "Tworzą go: [Ogień Yin (丁)](/guide/stem-jeong) oraz [亥 (Świnia)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-ja": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 戊子",
    "summary": "Jak Saju-Link odczytuje filar dnia 戊子 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "戊子 to filar dnia numer 25 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 戊子, pniem dnia jest 戊 (Ziemia, Yang), a gałęzią dnia 子 (Szczur). W cyklu sześćdziesięciu par jest to kombinacja numer 25."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 戊, „Ziemia Yang (戊)”, a zdanie pokazywane na ekranie wyników brzmi: „Otwarty ląd i góry. Trudno tym zachwiać i łatwo się o to oprzeć, choć raz podjęta decyzja zmienia się powoli.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 子",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 戊, pnie zawarte w 子 są następujące. Pień główny (癸) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 戊子",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 戊"
              ],
              "rows": [
                [
                  "Woda Yang (壬)",
                  "szczątkowy (餘氣)",
                  "{hidJaYeo}",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Woda Yin (癸)",
                  "główny (本氣)",
                  "{hidJaBon}",
                  "Stałe bogactwo (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 戊, Stałe bogactwo to 癸, a Autorytet to 乙."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 癸. 癸 znajduje się wewnątrz 子 (główny (本氣))."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 乙. 乙 nie znajduje się wewnątrz 子."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [丁亥](/guide/pillar-jeong-hae), a następnym [己丑](/guide/pillar-gi-chuk)."
          },
          {
            "p": "Tworzą go: [Ziemia Yang (戊)](/guide/stem-mu) oraz [子 (Szczur)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-chuk": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 己丑",
    "summary": "Jak Saju-Link odczytuje filar dnia 己丑 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "己丑 to filar dnia numer 26 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 己丑, pniem dnia jest 己 (Ziemia, Yin), a gałęzią dnia 丑 (Wół). W cyklu sześćdziesięciu par jest to kombinacja numer 26."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 己, „Ziemia Yin (己)”, a zdanie pokazywane na ekranie wyników brzmi: „Gleba pola. Przyjmuje to, co przyjdzie, i to wyhodowuje — raczej pielęgnuje, niż pokazuje.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 丑",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 己, pnie zawarte w 丑 są następujące. Pień główny (己) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 己丑",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 己"
              ],
              "rows": [
                [
                  "Woda Yin (癸)",
                  "szczątkowy (餘氣)",
                  "{hidChukYeo}",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Metal Yin (辛)",
                  "środkowy (中氣)",
                  "{hidChukJung}",
                  "Ekspresja (食神)"
                ],
                [
                  "Ziemia Yin (己)",
                  "główny (本氣)",
                  "{hidChukBon}",
                  "Towarzysz (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 己, Stałe bogactwo to 壬, a Autorytet to 甲."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 壬. 壬 nie znajduje się wewnątrz 丑."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 甲. 甲 nie znajduje się wewnątrz 丑."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [戊子](/guide/pillar-mu-ja), a następnym [庚寅](/guide/pillar-gyeong-in)."
          },
          {
            "p": "Tworzą go: [Ziemia Yin (己)](/guide/stem-gi) oraz [丑 (Wół)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-in": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 庚寅",
    "summary": "Jak Saju-Link odczytuje filar dnia 庚寅 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "庚寅 to filar dnia numer 27 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 庚寅, pniem dnia jest 庚 (Metal, Yang), a gałęzią dnia 寅 (Tygrys). W cyklu sześćdziesięciu par jest to kombinacja numer 27."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 庚, „Metal Yang (庚)”, a zdanie pokazywane na ekranie wyników brzmi: „Nieobrobione żelazo. Zdecydowany i jednoznaczny, bez cierpliwości do spraw zawieszonych.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 寅",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 庚, pnie zawarte w 寅 są następujące. Pień główny (甲) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 庚寅",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 庚"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "szczątkowy (餘氣)",
                  "{hidInYeo}",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Ogień Yang (丙)",
                  "środkowy (中氣)",
                  "{hidInJung}",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Drewno Yang (甲)",
                  "główny (本氣)",
                  "{hidInBon}",
                  "Zmienne bogactwo (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 庚, Stałe bogactwo to 乙, a Autorytet to 丁."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 乙. 乙 nie znajduje się wewnątrz 寅."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 丁. 丁 nie znajduje się wewnątrz 寅."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [己丑](/guide/pillar-gi-chuk), a następnym [辛卯](/guide/pillar-sin-myo)."
          },
          {
            "p": "Tworzą go: [Metal Yang (庚)](/guide/stem-gyeong) oraz [寅 (Tygrys)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-myo": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 辛卯",
    "summary": "Jak Saju-Link odczytuje filar dnia 辛卯 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "辛卯 to filar dnia numer 28 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 辛卯, pniem dnia jest 辛 (Metal, Yin), a gałęzią dnia 卯 (Królik). W cyklu sześćdziesięciu par jest to kombinacja numer 28."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 辛, „Metal Yin (辛)”, a zdanie pokazywane na ekranie wyników brzmi: „Oszlifowany klejnot. Wyczulony smak i wysokie wymagania; niedbałość trudno tu puścić płazem.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 卯",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 辛, pnie zawarte w 卯 są następujące. Pień główny (乙) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 辛卯",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 辛"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "szczątkowy (餘氣)",
                  "{hidMyoYeo}",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Drewno Yin (乙)",
                  "główny (本氣)",
                  "{hidMyoBon}",
                  "Zmienne bogactwo (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 辛, Stałe bogactwo to 甲, a Autorytet to 丙."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 甲. 甲 znajduje się wewnątrz 卯 (szczątkowy (餘氣))."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 丙. 丙 nie znajduje się wewnątrz 卯."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [庚寅](/guide/pillar-gyeong-in), a następnym [壬辰](/guide/pillar-im-jin)."
          },
          {
            "p": "Tworzą go: [Metal Yin (辛)](/guide/stem-sin) oraz [卯 (Królik)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-jin": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 壬辰",
    "summary": "Jak Saju-Link odczytuje filar dnia 壬辰 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "壬辰 to filar dnia numer 29 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 壬辰, pniem dnia jest 壬 (Woda, Yang), a gałęzią dnia 辰 (Smok). W cyklu sześćdziesięciu par jest to kombinacja numer 29."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 壬, „Woda Yang (壬)”, a zdanie pokazywane na ekranie wyników brzmi: „Rzeka i morze. Szerokie spojrzenie i oko do tego, jak sprawy płyną.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 辰",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 壬, pnie zawarte w 辰 są następujące. Pień główny (戊) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 壬辰",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 壬"
              ],
              "rows": [
                [
                  "Drewno Yin (乙)",
                  "szczątkowy (餘氣)",
                  "{hidJinYeo}",
                  "Burzyciel (傷官)"
                ],
                [
                  "Woda Yin (癸)",
                  "środkowy (中氣)",
                  "{hidJinJung}",
                  "Rywal (劫財)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "główny (本氣)",
                  "{hidJinBon}",
                  "Wyzwanie (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 壬, Stałe bogactwo to 丁, a Autorytet to 己."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 丁. 丁 nie znajduje się wewnątrz 辰."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 己. 己 nie znajduje się wewnątrz 辰."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [辛卯](/guide/pillar-sin-myo), a następnym [癸巳](/guide/pillar-gye-sa)."
          },
          {
            "p": "Tworzą go: [Woda Yang (壬)](/guide/stem-im) oraz [辰 (Smok)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-sa": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 癸巳",
    "summary": "Jak Saju-Link odczytuje filar dnia 癸巳 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "癸巳 to filar dnia numer 30 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 癸巳, pniem dnia jest 癸 (Woda, Yin), a gałęzią dnia 巳 (Wąż). W cyklu sześćdziesięciu par jest to kombinacja numer 30."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 癸, „Woda Yin (癸)”, a zdanie pokazywane na ekranie wyników brzmi: „Rosa i deszcz. Wsiąka cicho i czyta nastrój, zanim padną słowa.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 巳",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 癸, pnie zawarte w 巳 są następujące. Pień główny (丙) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 癸巳",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 癸"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "szczątkowy (餘氣)",
                  "{hidSaYeo}",
                  "Autorytet (正官)"
                ],
                [
                  "Metal Yang (庚)",
                  "środkowy (中氣)",
                  "{hidSaJung}",
                  "Opieka (正印)"
                ],
                [
                  "Ogień Yang (丙)",
                  "główny (本氣)",
                  "{hidSaBon}",
                  "Stałe bogactwo (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 癸, Stałe bogactwo to 丙, a Autorytet to 戊."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 丙. 丙 znajduje się wewnątrz 巳 (główny (本氣))."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 戊. 戊 znajduje się wewnątrz 巳 (szczątkowy (餘氣))."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [壬辰](/guide/pillar-im-jin), a następnym [甲午](/guide/pillar-gap-o)."
          },
          {
            "p": "Tworzą go: [Woda Yin (癸)](/guide/stem-gye) oraz [巳 (Wąż)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-o": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 甲午",
    "summary": "Jak Saju-Link odczytuje filar dnia 甲午 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "甲午 to filar dnia numer 31 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 甲午, pniem dnia jest 甲 (Drewno, Yang), a gałęzią dnia 午 (Koń). W cyklu sześćdziesięciu par jest to kombinacja numer 31."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 甲, „Drewno Yang (甲)”, a zdanie pokazywane na ekranie wyników brzmi: „Wysokie drzewo rosnące prosto. Gdy kierunek jest już obrany, nie chwieje się i woli wytrzymać, niż się ugiąć.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 午",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 甲, pnie zawarte w 午 są następujące. Pień główny (丁) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 甲午",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 甲"
              ],
              "rows": [
                [
                  "Ogień Yang (丙)",
                  "szczątkowy (餘氣)",
                  "{hidOYeo}",
                  "Ekspresja (食神)"
                ],
                [
                  "Ziemia Yin (己)",
                  "środkowy (中氣)",
                  "{hidOJung}",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Ogień Yin (丁)",
                  "główny (本氣)",
                  "{hidOBon}",
                  "Burzyciel (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 甲, Stałe bogactwo to 己, a Autorytet to 辛."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 己. 己 znajduje się wewnątrz 午 (środkowy (中氣))."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 辛. 辛 nie znajduje się wewnątrz 午."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [癸巳](/guide/pillar-gye-sa), a następnym [乙未](/guide/pillar-eul-mi)."
          },
          {
            "p": "Tworzą go: [Drewno Yang (甲)](/guide/stem-gap) oraz [午 (Koń)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-mi": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 乙未",
    "summary": "Jak Saju-Link odczytuje filar dnia 乙未 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "乙未 to filar dnia numer 32 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 乙未, pniem dnia jest 乙 (Drewno, Yin), a gałęzią dnia 未 (Owca). W cyklu sześćdziesięciu par jest to kombinacja numer 32."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 乙, „Drewno Yin (乙)”, a zdanie pokazywane na ekranie wyników brzmi: „Pnącze — giętka trawa. Ugina się pod okolicznościami, żeby iść dalej, i nie pęka.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 未",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 乙, pnie zawarte w 未 są następujące. Pień główny (己) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 乙未",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 乙"
              ],
              "rows": [
                [
                  "Ogień Yin (丁)",
                  "szczątkowy (餘氣)",
                  "{hidMiYeo}",
                  "Ekspresja (食神)"
                ],
                [
                  "Drewno Yin (乙)",
                  "środkowy (中氣)",
                  "{hidMiJung}",
                  "Towarzysz (比肩)"
                ],
                [
                  "Ziemia Yin (己)",
                  "główny (本氣)",
                  "{hidMiBon}",
                  "Zmienne bogactwo (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 乙, Stałe bogactwo to 戊, a Autorytet to 庚."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 戊. 戊 nie znajduje się wewnątrz 未."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 庚. 庚 nie znajduje się wewnątrz 未."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [甲午](/guide/pillar-gap-o), a następnym [丙申](/guide/pillar-byeong-sin)."
          },
          {
            "p": "Tworzą go: [Drewno Yin (乙)](/guide/stem-eul) oraz [未 (Owca)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sin": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 丙申",
    "summary": "Jak Saju-Link odczytuje filar dnia 丙申 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "丙申 to filar dnia numer 33 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 丙申, pniem dnia jest 丙 (Ogień, Yang), a gałęzią dnia 申 (Małpa). W cyklu sześćdziesięciu par jest to kombinacja numer 33."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 丙, „Ogień Yang (丙)”, a zdanie pokazywane na ekranie wyników brzmi: „Słońce w południe. Uczucia widać wprost, w pomieszczeniu robi się jaśniej, a wychodzenie przed szereg przychodzi naturalnie.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 申",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 丙, pnie zawarte w 申 są następujące. Pień główny (庚) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 丙申",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 丙"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "szczątkowy (餘氣)",
                  "{hidSinYeo}",
                  "Ekspresja (食神)"
                ],
                [
                  "Woda Yang (壬)",
                  "środkowy (中氣)",
                  "{hidSinJung}",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Metal Yang (庚)",
                  "główny (本氣)",
                  "{hidSinBon}",
                  "Zmienne bogactwo (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 丙, Stałe bogactwo to 辛, a Autorytet to 癸."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 辛. 辛 nie znajduje się wewnątrz 申."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 癸. 癸 nie znajduje się wewnątrz 申."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [乙未](/guide/pillar-eul-mi), a następnym [丁酉](/guide/pillar-jeong-yu)."
          },
          {
            "p": "Tworzą go: [Ogień Yang (丙)](/guide/stem-byeong) oraz [申 (Małpa)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-yu": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 丁酉",
    "summary": "Jak Saju-Link odczytuje filar dnia 丁酉 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "丁酉 to filar dnia numer 34 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 丁酉, pniem dnia jest 丁 (Ogień, Yin), a gałęzią dnia 酉 (Kogut). W cyklu sześćdziesięciu par jest to kombinacja numer 34."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 丁, „Ogień Yin (丁)”, a zdanie pokazywane na ekranie wyników brzmi: „Światło świecy. Pali się cicho i długo, a ogrzewa najpierw tych najbliższych.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 酉",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 丁, pnie zawarte w 酉 są następujące. Pień główny (辛) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 丁酉",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 丁"
              ],
              "rows": [
                [
                  "Metal Yang (庚)",
                  "szczątkowy (餘氣)",
                  "{hidYuYeo}",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Metal Yin (辛)",
                  "główny (本氣)",
                  "{hidYuBon}",
                  "Zmienne bogactwo (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 丁, Stałe bogactwo to 庚, a Autorytet to 壬."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 庚. 庚 znajduje się wewnątrz 酉 (szczątkowy (餘氣))."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 壬. 壬 nie znajduje się wewnątrz 酉."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [丙申](/guide/pillar-byeong-sin), a następnym [戊戌](/guide/pillar-mu-sul)."
          },
          {
            "p": "Tworzą go: [Ogień Yin (丁)](/guide/stem-jeong) oraz [酉 (Kogut)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sul": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 戊戌",
    "summary": "Jak Saju-Link odczytuje filar dnia 戊戌 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "戊戌 to filar dnia numer 35 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 戊戌, pniem dnia jest 戊 (Ziemia, Yang), a gałęzią dnia 戌 (Pies). W cyklu sześćdziesięciu par jest to kombinacja numer 35."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 戊, „Ziemia Yang (戊)”, a zdanie pokazywane na ekranie wyników brzmi: „Otwarty ląd i góry. Trudno tym zachwiać i łatwo się o to oprzeć, choć raz podjęta decyzja zmienia się powoli.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 戌",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 戊, pnie zawarte w 戌 są następujące. Pień główny (戊) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 戊戌",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 戊"
              ],
              "rows": [
                [
                  "Metal Yin (辛)",
                  "szczątkowy (餘氣)",
                  "{hidSulYeo}",
                  "Burzyciel (傷官)"
                ],
                [
                  "Ogień Yin (丁)",
                  "środkowy (中氣)",
                  "{hidSulJung}",
                  "Opieka (正印)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "główny (本氣)",
                  "{hidSulBon}",
                  "Towarzysz (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 戊, Stałe bogactwo to 癸, a Autorytet to 乙."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 癸. 癸 nie znajduje się wewnątrz 戌."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 乙. 乙 nie znajduje się wewnątrz 戌."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [丁酉](/guide/pillar-jeong-yu), a następnym [己亥](/guide/pillar-gi-hae)."
          },
          {
            "p": "Tworzą go: [Ziemia Yang (戊)](/guide/stem-mu) oraz [戌 (Pies)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-hae": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 己亥",
    "summary": "Jak Saju-Link odczytuje filar dnia 己亥 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "己亥 to filar dnia numer 36 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 己亥, pniem dnia jest 己 (Ziemia, Yin), a gałęzią dnia 亥 (Świnia). W cyklu sześćdziesięciu par jest to kombinacja numer 36."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 己, „Ziemia Yin (己)”, a zdanie pokazywane na ekranie wyników brzmi: „Gleba pola. Przyjmuje to, co przyjdzie, i to wyhodowuje — raczej pielęgnuje, niż pokazuje.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 亥",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 己, pnie zawarte w 亥 są następujące. Pień główny (壬) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 己亥",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 己"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "szczątkowy (餘氣)",
                  "{hidHaeYeo}",
                  "Rywal (劫財)"
                ],
                [
                  "Drewno Yang (甲)",
                  "środkowy (中氣)",
                  "{hidHaeJung}",
                  "Autorytet (正官)"
                ],
                [
                  "Woda Yang (壬)",
                  "główny (本氣)",
                  "{hidHaeBon}",
                  "Stałe bogactwo (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 己, Stałe bogactwo to 壬, a Autorytet to 甲."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 壬. 壬 znajduje się wewnątrz 亥 (główny (本氣))."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 甲. 甲 znajduje się wewnątrz 亥 (środkowy (中氣))."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [戊戌](/guide/pillar-mu-sul), a następnym [庚子](/guide/pillar-gyeong-ja)."
          },
          {
            "p": "Tworzą go: [Ziemia Yin (己)](/guide/stem-gi) oraz [亥 (Świnia)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-ja": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 庚子",
    "summary": "Jak Saju-Link odczytuje filar dnia 庚子 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "庚子 to filar dnia numer 37 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 庚子, pniem dnia jest 庚 (Metal, Yang), a gałęzią dnia 子 (Szczur). W cyklu sześćdziesięciu par jest to kombinacja numer 37."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 庚, „Metal Yang (庚)”, a zdanie pokazywane na ekranie wyników brzmi: „Nieobrobione żelazo. Zdecydowany i jednoznaczny, bez cierpliwości do spraw zawieszonych.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 子",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 庚, pnie zawarte w 子 są następujące. Pień główny (癸) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 庚子",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 庚"
              ],
              "rows": [
                [
                  "Woda Yang (壬)",
                  "szczątkowy (餘氣)",
                  "{hidJaYeo}",
                  "Ekspresja (食神)"
                ],
                [
                  "Woda Yin (癸)",
                  "główny (本氣)",
                  "{hidJaBon}",
                  "Burzyciel (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 庚, Stałe bogactwo to 乙, a Autorytet to 丁."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 乙. 乙 nie znajduje się wewnątrz 子."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 丁. 丁 nie znajduje się wewnątrz 子."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [己亥](/guide/pillar-gi-hae), a następnym [辛丑](/guide/pillar-sin-chuk)."
          },
          {
            "p": "Tworzą go: [Metal Yang (庚)](/guide/stem-gyeong) oraz [子 (Szczur)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-chuk": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 辛丑",
    "summary": "Jak Saju-Link odczytuje filar dnia 辛丑 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "辛丑 to filar dnia numer 38 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 辛丑, pniem dnia jest 辛 (Metal, Yin), a gałęzią dnia 丑 (Wół). W cyklu sześćdziesięciu par jest to kombinacja numer 38."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 辛, „Metal Yin (辛)”, a zdanie pokazywane na ekranie wyników brzmi: „Oszlifowany klejnot. Wyczulony smak i wysokie wymagania; niedbałość trudno tu puścić płazem.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 丑",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 辛, pnie zawarte w 丑 są następujące. Pień główny (己) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 辛丑",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 辛"
              ],
              "rows": [
                [
                  "Woda Yin (癸)",
                  "szczątkowy (餘氣)",
                  "{hidChukYeo}",
                  "Ekspresja (食神)"
                ],
                [
                  "Metal Yin (辛)",
                  "środkowy (中氣)",
                  "{hidChukJung}",
                  "Towarzysz (比肩)"
                ],
                [
                  "Ziemia Yin (己)",
                  "główny (本氣)",
                  "{hidChukBon}",
                  "Nietypowe wsparcie (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 辛, Stałe bogactwo to 甲, a Autorytet to 丙."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 甲. 甲 nie znajduje się wewnątrz 丑."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 丙. 丙 nie znajduje się wewnątrz 丑."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [庚子](/guide/pillar-gyeong-ja), a następnym [壬寅](/guide/pillar-im-in)."
          },
          {
            "p": "Tworzą go: [Metal Yin (辛)](/guide/stem-sin) oraz [丑 (Wół)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-in": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 壬寅",
    "summary": "Jak Saju-Link odczytuje filar dnia 壬寅 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "壬寅 to filar dnia numer 39 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 壬寅, pniem dnia jest 壬 (Woda, Yang), a gałęzią dnia 寅 (Tygrys). W cyklu sześćdziesięciu par jest to kombinacja numer 39."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 壬, „Woda Yang (壬)”, a zdanie pokazywane na ekranie wyników brzmi: „Rzeka i morze. Szerokie spojrzenie i oko do tego, jak sprawy płyną.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 寅",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 壬, pnie zawarte w 寅 są następujące. Pień główny (甲) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 壬寅",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 壬"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "szczątkowy (餘氣)",
                  "{hidInYeo}",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Ogień Yang (丙)",
                  "środkowy (中氣)",
                  "{hidInJung}",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Drewno Yang (甲)",
                  "główny (本氣)",
                  "{hidInBon}",
                  "Ekspresja (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 壬, Stałe bogactwo to 丁, a Autorytet to 己."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 丁. 丁 nie znajduje się wewnątrz 寅."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 己. 己 nie znajduje się wewnątrz 寅."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [辛丑](/guide/pillar-sin-chuk), a następnym [癸卯](/guide/pillar-gye-myo)."
          },
          {
            "p": "Tworzą go: [Woda Yang (壬)](/guide/stem-im) oraz [寅 (Tygrys)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-myo": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 癸卯",
    "summary": "Jak Saju-Link odczytuje filar dnia 癸卯 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "癸卯 to filar dnia numer 40 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 癸卯, pniem dnia jest 癸 (Woda, Yin), a gałęzią dnia 卯 (Królik). W cyklu sześćdziesięciu par jest to kombinacja numer 40."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 癸, „Woda Yin (癸)”, a zdanie pokazywane na ekranie wyników brzmi: „Rosa i deszcz. Wsiąka cicho i czyta nastrój, zanim padną słowa.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 卯",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 癸, pnie zawarte w 卯 są następujące. Pień główny (乙) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 癸卯",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 癸"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "szczątkowy (餘氣)",
                  "{hidMyoYeo}",
                  "Burzyciel (傷官)"
                ],
                [
                  "Drewno Yin (乙)",
                  "główny (本氣)",
                  "{hidMyoBon}",
                  "Ekspresja (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 癸, Stałe bogactwo to 丙, a Autorytet to 戊."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 丙. 丙 nie znajduje się wewnątrz 卯."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 戊. 戊 nie znajduje się wewnątrz 卯."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [壬寅](/guide/pillar-im-in), a następnym [甲辰](/guide/pillar-gap-jin)."
          },
          {
            "p": "Tworzą go: [Woda Yin (癸)](/guide/stem-gye) oraz [卯 (Królik)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-jin": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 甲辰",
    "summary": "Jak Saju-Link odczytuje filar dnia 甲辰 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "甲辰 to filar dnia numer 41 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 甲辰, pniem dnia jest 甲 (Drewno, Yang), a gałęzią dnia 辰 (Smok). W cyklu sześćdziesięciu par jest to kombinacja numer 41."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 甲, „Drewno Yang (甲)”, a zdanie pokazywane na ekranie wyników brzmi: „Wysokie drzewo rosnące prosto. Gdy kierunek jest już obrany, nie chwieje się i woli wytrzymać, niż się ugiąć.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 辰",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 甲, pnie zawarte w 辰 są następujące. Pień główny (戊) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 甲辰",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 甲"
              ],
              "rows": [
                [
                  "Drewno Yin (乙)",
                  "szczątkowy (餘氣)",
                  "{hidJinYeo}",
                  "Rywal (劫財)"
                ],
                [
                  "Woda Yin (癸)",
                  "środkowy (中氣)",
                  "{hidJinJung}",
                  "Opieka (正印)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "główny (本氣)",
                  "{hidJinBon}",
                  "Zmienne bogactwo (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 甲, Stałe bogactwo to 己, a Autorytet to 辛."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 己. 己 nie znajduje się wewnątrz 辰."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 辛. 辛 nie znajduje się wewnątrz 辰."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [癸卯](/guide/pillar-gye-myo), a następnym [乙巳](/guide/pillar-eul-sa)."
          },
          {
            "p": "Tworzą go: [Drewno Yang (甲)](/guide/stem-gap) oraz [辰 (Smok)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-sa": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 乙巳",
    "summary": "Jak Saju-Link odczytuje filar dnia 乙巳 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "乙巳 to filar dnia numer 42 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 乙巳, pniem dnia jest 乙 (Drewno, Yin), a gałęzią dnia 巳 (Wąż). W cyklu sześćdziesięciu par jest to kombinacja numer 42."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 乙, „Drewno Yin (乙)”, a zdanie pokazywane na ekranie wyników brzmi: „Pnącze — giętka trawa. Ugina się pod okolicznościami, żeby iść dalej, i nie pęka.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 巳",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 乙, pnie zawarte w 巳 są następujące. Pień główny (丙) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 乙巳",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 乙"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "szczątkowy (餘氣)",
                  "{hidSaYeo}",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Metal Yang (庚)",
                  "środkowy (中氣)",
                  "{hidSaJung}",
                  "Autorytet (正官)"
                ],
                [
                  "Ogień Yang (丙)",
                  "główny (本氣)",
                  "{hidSaBon}",
                  "Burzyciel (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 乙, Stałe bogactwo to 戊, a Autorytet to 庚."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 戊. 戊 znajduje się wewnątrz 巳 (szczątkowy (餘氣))."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 庚. 庚 znajduje się wewnątrz 巳 (środkowy (中氣))."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [甲辰](/guide/pillar-gap-jin), a następnym [丙午](/guide/pillar-byeong-o)."
          },
          {
            "p": "Tworzą go: [Drewno Yin (乙)](/guide/stem-eul) oraz [巳 (Wąż)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-o": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 丙午",
    "summary": "Jak Saju-Link odczytuje filar dnia 丙午 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "丙午 to filar dnia numer 43 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 丙午, pniem dnia jest 丙 (Ogień, Yang), a gałęzią dnia 午 (Koń). W cyklu sześćdziesięciu par jest to kombinacja numer 43."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 丙, „Ogień Yang (丙)”, a zdanie pokazywane na ekranie wyników brzmi: „Słońce w południe. Uczucia widać wprost, w pomieszczeniu robi się jaśniej, a wychodzenie przed szereg przychodzi naturalnie.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 午",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 丙, pnie zawarte w 午 są następujące. Pień główny (丁) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 丙午",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 丙"
              ],
              "rows": [
                [
                  "Ogień Yang (丙)",
                  "szczątkowy (餘氣)",
                  "{hidOYeo}",
                  "Towarzysz (比肩)"
                ],
                [
                  "Ziemia Yin (己)",
                  "środkowy (中氣)",
                  "{hidOJung}",
                  "Burzyciel (傷官)"
                ],
                [
                  "Ogień Yin (丁)",
                  "główny (本氣)",
                  "{hidOBon}",
                  "Rywal (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 丙, Stałe bogactwo to 辛, a Autorytet to 癸."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 辛. 辛 nie znajduje się wewnątrz 午."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 癸. 癸 nie znajduje się wewnątrz 午."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [乙巳](/guide/pillar-eul-sa), a następnym [丁未](/guide/pillar-jeong-mi)."
          },
          {
            "p": "Tworzą go: [Ogień Yang (丙)](/guide/stem-byeong) oraz [午 (Koń)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-mi": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 丁未",
    "summary": "Jak Saju-Link odczytuje filar dnia 丁未 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "丁未 to filar dnia numer 44 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 丁未, pniem dnia jest 丁 (Ogień, Yin), a gałęzią dnia 未 (Owca). W cyklu sześćdziesięciu par jest to kombinacja numer 44."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 丁, „Ogień Yin (丁)”, a zdanie pokazywane na ekranie wyników brzmi: „Światło świecy. Pali się cicho i długo, a ogrzewa najpierw tych najbliższych.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 未",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 丁, pnie zawarte w 未 są następujące. Pień główny (己) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 丁未",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 丁"
              ],
              "rows": [
                [
                  "Ogień Yin (丁)",
                  "szczątkowy (餘氣)",
                  "{hidMiYeo}",
                  "Towarzysz (比肩)"
                ],
                [
                  "Drewno Yin (乙)",
                  "środkowy (中氣)",
                  "{hidMiJung}",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Ziemia Yin (己)",
                  "główny (本氣)",
                  "{hidMiBon}",
                  "Ekspresja (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 丁, Stałe bogactwo to 庚, a Autorytet to 壬."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 庚. 庚 nie znajduje się wewnątrz 未."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 壬. 壬 nie znajduje się wewnątrz 未."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [丙午](/guide/pillar-byeong-o), a następnym [戊申](/guide/pillar-mu-sin)."
          },
          {
            "p": "Tworzą go: [Ogień Yin (丁)](/guide/stem-jeong) oraz [未 (Owca)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sin": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 戊申",
    "summary": "Jak Saju-Link odczytuje filar dnia 戊申 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "戊申 to filar dnia numer 45 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 戊申, pniem dnia jest 戊 (Ziemia, Yang), a gałęzią dnia 申 (Małpa). W cyklu sześćdziesięciu par jest to kombinacja numer 45."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 戊, „Ziemia Yang (戊)”, a zdanie pokazywane na ekranie wyników brzmi: „Otwarty ląd i góry. Trudno tym zachwiać i łatwo się o to oprzeć, choć raz podjęta decyzja zmienia się powoli.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 申",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 戊, pnie zawarte w 申 są następujące. Pień główny (庚) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 戊申",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 戊"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "szczątkowy (餘氣)",
                  "{hidSinYeo}",
                  "Towarzysz (比肩)"
                ],
                [
                  "Woda Yang (壬)",
                  "środkowy (中氣)",
                  "{hidSinJung}",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Metal Yang (庚)",
                  "główny (本氣)",
                  "{hidSinBon}",
                  "Ekspresja (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 戊, Stałe bogactwo to 癸, a Autorytet to 乙."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 癸. 癸 nie znajduje się wewnątrz 申."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 乙. 乙 nie znajduje się wewnątrz 申."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [丁未](/guide/pillar-jeong-mi), a następnym [己酉](/guide/pillar-gi-yu)."
          },
          {
            "p": "Tworzą go: [Ziemia Yang (戊)](/guide/stem-mu) oraz [申 (Małpa)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-yu": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 己酉",
    "summary": "Jak Saju-Link odczytuje filar dnia 己酉 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "己酉 to filar dnia numer 46 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 己酉, pniem dnia jest 己 (Ziemia, Yin), a gałęzią dnia 酉 (Kogut). W cyklu sześćdziesięciu par jest to kombinacja numer 46."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 己, „Ziemia Yin (己)”, a zdanie pokazywane na ekranie wyników brzmi: „Gleba pola. Przyjmuje to, co przyjdzie, i to wyhodowuje — raczej pielęgnuje, niż pokazuje.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 酉",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 己, pnie zawarte w 酉 są następujące. Pień główny (辛) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 己酉",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 己"
              ],
              "rows": [
                [
                  "Metal Yang (庚)",
                  "szczątkowy (餘氣)",
                  "{hidYuYeo}",
                  "Burzyciel (傷官)"
                ],
                [
                  "Metal Yin (辛)",
                  "główny (本氣)",
                  "{hidYuBon}",
                  "Ekspresja (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 己, Stałe bogactwo to 壬, a Autorytet to 甲."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 壬. 壬 nie znajduje się wewnątrz 酉."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 甲. 甲 nie znajduje się wewnątrz 酉."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [戊申](/guide/pillar-mu-sin), a następnym [庚戌](/guide/pillar-gyeong-sul)."
          },
          {
            "p": "Tworzą go: [Ziemia Yin (己)](/guide/stem-gi) oraz [酉 (Kogut)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sul": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 庚戌",
    "summary": "Jak Saju-Link odczytuje filar dnia 庚戌 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "庚戌 to filar dnia numer 47 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 庚戌, pniem dnia jest 庚 (Metal, Yang), a gałęzią dnia 戌 (Pies). W cyklu sześćdziesięciu par jest to kombinacja numer 47."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 庚, „Metal Yang (庚)”, a zdanie pokazywane na ekranie wyników brzmi: „Nieobrobione żelazo. Zdecydowany i jednoznaczny, bez cierpliwości do spraw zawieszonych.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 戌",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 庚, pnie zawarte w 戌 są następujące. Pień główny (戊) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 庚戌",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 庚"
              ],
              "rows": [
                [
                  "Metal Yin (辛)",
                  "szczątkowy (餘氣)",
                  "{hidSulYeo}",
                  "Rywal (劫財)"
                ],
                [
                  "Ogień Yin (丁)",
                  "środkowy (中氣)",
                  "{hidSulJung}",
                  "Autorytet (正官)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "główny (本氣)",
                  "{hidSulBon}",
                  "Nietypowe wsparcie (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 庚, Stałe bogactwo to 乙, a Autorytet to 丁."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 乙. 乙 nie znajduje się wewnątrz 戌."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 丁. 丁 znajduje się wewnątrz 戌 (środkowy (中氣))."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [己酉](/guide/pillar-gi-yu), a następnym [辛亥](/guide/pillar-sin-hae)."
          },
          {
            "p": "Tworzą go: [Metal Yang (庚)](/guide/stem-gyeong) oraz [戌 (Pies)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-hae": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 辛亥",
    "summary": "Jak Saju-Link odczytuje filar dnia 辛亥 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "辛亥 to filar dnia numer 48 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 辛亥, pniem dnia jest 辛 (Metal, Yin), a gałęzią dnia 亥 (Świnia). W cyklu sześćdziesięciu par jest to kombinacja numer 48."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 辛, „Metal Yin (辛)”, a zdanie pokazywane na ekranie wyników brzmi: „Oszlifowany klejnot. Wyczulony smak i wysokie wymagania; niedbałość trudno tu puścić płazem.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 亥",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 辛, pnie zawarte w 亥 są następujące. Pień główny (壬) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 辛亥",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 辛"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "szczątkowy (餘氣)",
                  "{hidHaeYeo}",
                  "Opieka (正印)"
                ],
                [
                  "Drewno Yang (甲)",
                  "środkowy (中氣)",
                  "{hidHaeJung}",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Woda Yang (壬)",
                  "główny (本氣)",
                  "{hidHaeBon}",
                  "Burzyciel (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 辛, Stałe bogactwo to 甲, a Autorytet to 丙."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 甲. 甲 znajduje się wewnątrz 亥 (środkowy (中氣))."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 丙. 丙 nie znajduje się wewnątrz 亥."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [庚戌](/guide/pillar-gyeong-sul), a następnym [壬子](/guide/pillar-im-ja)."
          },
          {
            "p": "Tworzą go: [Metal Yin (辛)](/guide/stem-sin) oraz [亥 (Świnia)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-ja": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 壬子",
    "summary": "Jak Saju-Link odczytuje filar dnia 壬子 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "壬子 to filar dnia numer 49 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 壬子, pniem dnia jest 壬 (Woda, Yang), a gałęzią dnia 子 (Szczur). W cyklu sześćdziesięciu par jest to kombinacja numer 49."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 壬, „Woda Yang (壬)”, a zdanie pokazywane na ekranie wyników brzmi: „Rzeka i morze. Szerokie spojrzenie i oko do tego, jak sprawy płyną.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 子",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 壬, pnie zawarte w 子 są następujące. Pień główny (癸) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 壬子",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 壬"
              ],
              "rows": [
                [
                  "Woda Yang (壬)",
                  "szczątkowy (餘氣)",
                  "{hidJaYeo}",
                  "Towarzysz (比肩)"
                ],
                [
                  "Woda Yin (癸)",
                  "główny (本氣)",
                  "{hidJaBon}",
                  "Rywal (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 壬, Stałe bogactwo to 丁, a Autorytet to 己."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 丁. 丁 nie znajduje się wewnątrz 子."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 己. 己 nie znajduje się wewnątrz 子."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [辛亥](/guide/pillar-sin-hae), a następnym [癸丑](/guide/pillar-gye-chuk)."
          },
          {
            "p": "Tworzą go: [Woda Yang (壬)](/guide/stem-im) oraz [子 (Szczur)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-chuk": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 癸丑",
    "summary": "Jak Saju-Link odczytuje filar dnia 癸丑 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "癸丑 to filar dnia numer 50 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 癸丑, pniem dnia jest 癸 (Woda, Yin), a gałęzią dnia 丑 (Wół). W cyklu sześćdziesięciu par jest to kombinacja numer 50."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 癸, „Woda Yin (癸)”, a zdanie pokazywane na ekranie wyników brzmi: „Rosa i deszcz. Wsiąka cicho i czyta nastrój, zanim padną słowa.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 丑",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 癸, pnie zawarte w 丑 są następujące. Pień główny (己) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 癸丑",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 癸"
              ],
              "rows": [
                [
                  "Woda Yin (癸)",
                  "szczątkowy (餘氣)",
                  "{hidChukYeo}",
                  "Towarzysz (比肩)"
                ],
                [
                  "Metal Yin (辛)",
                  "środkowy (中氣)",
                  "{hidChukJung}",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Ziemia Yin (己)",
                  "główny (本氣)",
                  "{hidChukBon}",
                  "Wyzwanie (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 癸, Stałe bogactwo to 丙, a Autorytet to 戊."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 丙. 丙 nie znajduje się wewnątrz 丑."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 戊. 戊 nie znajduje się wewnątrz 丑."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [壬子](/guide/pillar-im-ja), a następnym [甲寅](/guide/pillar-gap-in)."
          },
          {
            "p": "Tworzą go: [Woda Yin (癸)](/guide/stem-gye) oraz [丑 (Wół)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-in": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 甲寅",
    "summary": "Jak Saju-Link odczytuje filar dnia 甲寅 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "甲寅 to filar dnia numer 51 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 甲寅, pniem dnia jest 甲 (Drewno, Yang), a gałęzią dnia 寅 (Tygrys). W cyklu sześćdziesięciu par jest to kombinacja numer 51."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 甲, „Drewno Yang (甲)”, a zdanie pokazywane na ekranie wyników brzmi: „Wysokie drzewo rosnące prosto. Gdy kierunek jest już obrany, nie chwieje się i woli wytrzymać, niż się ugiąć.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 寅",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 甲, pnie zawarte w 寅 są następujące. Pień główny (甲) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 甲寅",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 甲"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "szczątkowy (餘氣)",
                  "{hidInYeo}",
                  "Zmienne bogactwo (偏財)"
                ],
                [
                  "Ogień Yang (丙)",
                  "środkowy (中氣)",
                  "{hidInJung}",
                  "Ekspresja (食神)"
                ],
                [
                  "Drewno Yang (甲)",
                  "główny (本氣)",
                  "{hidInBon}",
                  "Towarzysz (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 甲, Stałe bogactwo to 己, a Autorytet to 辛."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 己. 己 nie znajduje się wewnątrz 寅."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 辛. 辛 nie znajduje się wewnątrz 寅."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [癸丑](/guide/pillar-gye-chuk), a następnym [乙卯](/guide/pillar-eul-myo)."
          },
          {
            "p": "Tworzą go: [Drewno Yang (甲)](/guide/stem-gap) oraz [寅 (Tygrys)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-myo": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 乙卯",
    "summary": "Jak Saju-Link odczytuje filar dnia 乙卯 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "乙卯 to filar dnia numer 52 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 乙卯, pniem dnia jest 乙 (Drewno, Yin), a gałęzią dnia 卯 (Królik). W cyklu sześćdziesięciu par jest to kombinacja numer 52."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 乙, „Drewno Yin (乙)”, a zdanie pokazywane na ekranie wyników brzmi: „Pnącze — giętka trawa. Ugina się pod okolicznościami, żeby iść dalej, i nie pęka.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 卯",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 乙, pnie zawarte w 卯 są następujące. Pień główny (乙) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 乙卯",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 乙"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "szczątkowy (餘氣)",
                  "{hidMyoYeo}",
                  "Rywal (劫財)"
                ],
                [
                  "Drewno Yin (乙)",
                  "główny (本氣)",
                  "{hidMyoBon}",
                  "Towarzysz (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 乙, Stałe bogactwo to 戊, a Autorytet to 庚."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 戊. 戊 nie znajduje się wewnątrz 卯."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 庚. 庚 nie znajduje się wewnątrz 卯."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [甲寅](/guide/pillar-gap-in), a następnym [丙辰](/guide/pillar-byeong-jin)."
          },
          {
            "p": "Tworzą go: [Drewno Yin (乙)](/guide/stem-eul) oraz [卯 (Królik)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-jin": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 丙辰",
    "summary": "Jak Saju-Link odczytuje filar dnia 丙辰 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "丙辰 to filar dnia numer 53 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 丙辰, pniem dnia jest 丙 (Ogień, Yang), a gałęzią dnia 辰 (Smok). W cyklu sześćdziesięciu par jest to kombinacja numer 53."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 丙, „Ogień Yang (丙)”, a zdanie pokazywane na ekranie wyników brzmi: „Słońce w południe. Uczucia widać wprost, w pomieszczeniu robi się jaśniej, a wychodzenie przed szereg przychodzi naturalnie.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 辰",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 丙, pnie zawarte w 辰 są następujące. Pień główny (戊) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 丙辰",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 丙"
              ],
              "rows": [
                [
                  "Drewno Yin (乙)",
                  "szczątkowy (餘氣)",
                  "{hidJinYeo}",
                  "Opieka (正印)"
                ],
                [
                  "Woda Yin (癸)",
                  "środkowy (中氣)",
                  "{hidJinJung}",
                  "Autorytet (正官)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "główny (本氣)",
                  "{hidJinBon}",
                  "Ekspresja (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 丙, Stałe bogactwo to 辛, a Autorytet to 癸."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 辛. 辛 nie znajduje się wewnątrz 辰."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 癸. 癸 znajduje się wewnątrz 辰 (środkowy (中氣))."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [乙卯](/guide/pillar-eul-myo), a następnym [丁巳](/guide/pillar-jeong-sa)."
          },
          {
            "p": "Tworzą go: [Ogień Yang (丙)](/guide/stem-byeong) oraz [辰 (Smok)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-sa": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 丁巳",
    "summary": "Jak Saju-Link odczytuje filar dnia 丁巳 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "丁巳 to filar dnia numer 54 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 丁巳, pniem dnia jest 丁 (Ogień, Yin), a gałęzią dnia 巳 (Wąż). W cyklu sześćdziesięciu par jest to kombinacja numer 54."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 丁, „Ogień Yin (丁)”, a zdanie pokazywane na ekranie wyników brzmi: „Światło świecy. Pali się cicho i długo, a ogrzewa najpierw tych najbliższych.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 巳",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 丁, pnie zawarte w 巳 są następujące. Pień główny (丙) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 丁巳",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 丁"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "szczątkowy (餘氣)",
                  "{hidSaYeo}",
                  "Burzyciel (傷官)"
                ],
                [
                  "Metal Yang (庚)",
                  "środkowy (中氣)",
                  "{hidSaJung}",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Ogień Yang (丙)",
                  "główny (本氣)",
                  "{hidSaBon}",
                  "Rywal (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 丁, Stałe bogactwo to 庚, a Autorytet to 壬."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 庚. 庚 znajduje się wewnątrz 巳 (środkowy (中氣))."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 壬. 壬 nie znajduje się wewnątrz 巳."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [丙辰](/guide/pillar-byeong-jin), a następnym [戊午](/guide/pillar-mu-o)."
          },
          {
            "p": "Tworzą go: [Ogień Yin (丁)](/guide/stem-jeong) oraz [巳 (Wąż)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-o": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 戊午",
    "summary": "Jak Saju-Link odczytuje filar dnia 戊午 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "戊午 to filar dnia numer 55 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 戊午, pniem dnia jest 戊 (Ziemia, Yang), a gałęzią dnia 午 (Koń). W cyklu sześćdziesięciu par jest to kombinacja numer 55."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 戊, „Ziemia Yang (戊)”, a zdanie pokazywane na ekranie wyników brzmi: „Otwarty ląd i góry. Trudno tym zachwiać i łatwo się o to oprzeć, choć raz podjęta decyzja zmienia się powoli.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 午",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 戊, pnie zawarte w 午 są następujące. Pień główny (丁) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 戊午",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 戊"
              ],
              "rows": [
                [
                  "Ogień Yang (丙)",
                  "szczątkowy (餘氣)",
                  "{hidOYeo}",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Ziemia Yin (己)",
                  "środkowy (中氣)",
                  "{hidOJung}",
                  "Rywal (劫財)"
                ],
                [
                  "Ogień Yin (丁)",
                  "główny (本氣)",
                  "{hidOBon}",
                  "Opieka (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 戊, Stałe bogactwo to 癸, a Autorytet to 乙."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 癸. 癸 nie znajduje się wewnątrz 午."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 乙. 乙 nie znajduje się wewnątrz 午."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [丁巳](/guide/pillar-jeong-sa), a następnym [己未](/guide/pillar-gi-mi)."
          },
          {
            "p": "Tworzą go: [Ziemia Yang (戊)](/guide/stem-mu) oraz [午 (Koń)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-mi": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 己未",
    "summary": "Jak Saju-Link odczytuje filar dnia 己未 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "己未 to filar dnia numer 56 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 己未, pniem dnia jest 己 (Ziemia, Yin), a gałęzią dnia 未 (Owca). W cyklu sześćdziesięciu par jest to kombinacja numer 56."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 己, „Ziemia Yin (己)”, a zdanie pokazywane na ekranie wyników brzmi: „Gleba pola. Przyjmuje to, co przyjdzie, i to wyhodowuje — raczej pielęgnuje, niż pokazuje.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 未",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 己, pnie zawarte w 未 są następujące. Pień główny (己) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 己未",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 己"
              ],
              "rows": [
                [
                  "Ogień Yin (丁)",
                  "szczątkowy (餘氣)",
                  "{hidMiYeo}",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Drewno Yin (乙)",
                  "środkowy (中氣)",
                  "{hidMiJung}",
                  "Wyzwanie (偏官)"
                ],
                [
                  "Ziemia Yin (己)",
                  "główny (本氣)",
                  "{hidMiBon}",
                  "Towarzysz (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 己, Stałe bogactwo to 壬, a Autorytet to 甲."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 壬. 壬 nie znajduje się wewnątrz 未."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 甲. 甲 nie znajduje się wewnątrz 未."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [戊午](/guide/pillar-mu-o), a następnym [庚申](/guide/pillar-gyeong-sin)."
          },
          {
            "p": "Tworzą go: [Ziemia Yin (己)](/guide/stem-gi) oraz [未 (Owca)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sin": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 庚申",
    "summary": "Jak Saju-Link odczytuje filar dnia 庚申 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "庚申 to filar dnia numer 57 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 庚申, pniem dnia jest 庚 (Metal, Yang), a gałęzią dnia 申 (Małpa). W cyklu sześćdziesięciu par jest to kombinacja numer 57."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 庚, „Metal Yang (庚)”, a zdanie pokazywane na ekranie wyników brzmi: „Nieobrobione żelazo. Zdecydowany i jednoznaczny, bez cierpliwości do spraw zawieszonych.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 申",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 庚, pnie zawarte w 申 są następujące. Pień główny (庚) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 庚申",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 庚"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "szczątkowy (餘氣)",
                  "{hidSinYeo}",
                  "Nietypowe wsparcie (偏印)"
                ],
                [
                  "Woda Yang (壬)",
                  "środkowy (中氣)",
                  "{hidSinJung}",
                  "Ekspresja (食神)"
                ],
                [
                  "Metal Yang (庚)",
                  "główny (本氣)",
                  "{hidSinBon}",
                  "Towarzysz (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 庚, Stałe bogactwo to 乙, a Autorytet to 丁."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 乙. 乙 nie znajduje się wewnątrz 申."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 丁. 丁 nie znajduje się wewnątrz 申."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [己未](/guide/pillar-gi-mi), a następnym [辛酉](/guide/pillar-sin-yu)."
          },
          {
            "p": "Tworzą go: [Metal Yang (庚)](/guide/stem-gyeong) oraz [申 (Małpa)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-yu": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 辛酉",
    "summary": "Jak Saju-Link odczytuje filar dnia 辛酉 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "辛酉 to filar dnia numer 58 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 辛酉, pniem dnia jest 辛 (Metal, Yin), a gałęzią dnia 酉 (Kogut). W cyklu sześćdziesięciu par jest to kombinacja numer 58."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 辛, „Metal Yin (辛)”, a zdanie pokazywane na ekranie wyników brzmi: „Oszlifowany klejnot. Wyczulony smak i wysokie wymagania; niedbałość trudno tu puścić płazem.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 酉",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 辛, pnie zawarte w 酉 są następujące. Pień główny (辛) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 辛酉",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 辛"
              ],
              "rows": [
                [
                  "Metal Yang (庚)",
                  "szczątkowy (餘氣)",
                  "{hidYuYeo}",
                  "Rywal (劫財)"
                ],
                [
                  "Metal Yin (辛)",
                  "główny (本氣)",
                  "{hidYuBon}",
                  "Towarzysz (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 辛, Stałe bogactwo to 甲, a Autorytet to 丙."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 甲. 甲 nie znajduje się wewnątrz 酉."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 丙. 丙 nie znajduje się wewnątrz 酉."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [庚申](/guide/pillar-gyeong-sin), a następnym [壬戌](/guide/pillar-im-sul)."
          },
          {
            "p": "Tworzą go: [Metal Yin (辛)](/guide/stem-sin) oraz [酉 (Kogut)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sul": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 壬戌",
    "summary": "Jak Saju-Link odczytuje filar dnia 壬戌 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "壬戌 to filar dnia numer 59 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 壬戌, pniem dnia jest 壬 (Woda, Yang), a gałęzią dnia 戌 (Pies). W cyklu sześćdziesięciu par jest to kombinacja numer 59."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 壬, „Woda Yang (壬)”, a zdanie pokazywane na ekranie wyników brzmi: „Rzeka i morze. Szerokie spojrzenie i oko do tego, jak sprawy płyną.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 戌",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 壬, pnie zawarte w 戌 są następujące. Pień główny (戊) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 壬戌",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 壬"
              ],
              "rows": [
                [
                  "Metal Yin (辛)",
                  "szczątkowy (餘氣)",
                  "{hidSulYeo}",
                  "Opieka (正印)"
                ],
                [
                  "Ogień Yin (丁)",
                  "środkowy (中氣)",
                  "{hidSulJung}",
                  "Stałe bogactwo (正財)"
                ],
                [
                  "Ziemia Yang (戊)",
                  "główny (本氣)",
                  "{hidSulBon}",
                  "Wyzwanie (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 壬, Stałe bogactwo to 丁, a Autorytet to 己."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 丁. 丁 znajduje się wewnątrz 戌 (środkowy (中氣))."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 己. 己 nie znajduje się wewnątrz 戌."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [辛酉](/guide/pillar-sin-yu), a następnym [癸亥](/guide/pillar-gye-hae)."
          },
          {
            "p": "Tworzą go: [Woda Yang (壬)](/guide/stem-im) oraz [戌 (Pies)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-hae": {
    "eyebrow": "Filary dnia",
    "title": "Filar dnia 癸亥",
    "summary": "Jak Saju-Link odczytuje filar dnia 癸亥 — czym są dla pnia dnia pnie zawarte w gałęzi dnia — przedstawione dokładnie tak, jak w jego zasadach obliczeń.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "癸亥 to filar dnia numer 60 w cyklu sześćdziesięciu par",
        "blocks": [
          {
            "p": "Gdy parą pień–gałąź dnia urodzenia jest 癸亥, pniem dnia jest 癸 (Woda, Yin), a gałęzią dnia 亥 (Świnia). W cyklu sześćdziesięciu par jest to kombinacja numer 60."
          },
          {
            "p": "Saju-Link nazywa osobę, której pniem dnia jest 癸, „Woda Yin (癸)”, a zdanie pokazywane na ekranie wyników brzmi: „Rosa i deszcz. Wsiąka cicho i czyta nastrój, zanim padną słowa.” To zdanie nie ma nic wspólnego z poniższym odczytem ani z wynikami."
          }
        ]
      },
      {
        "title": "Czym są dla pnia dnia pnie zawarte w gałęzi dnia 亥",
        "blocks": [
          {
            "p": "Gałąź dnia jest pozycją małżonka. Odczytane od pnia dnia 癸, pnie zawarte w 亥 są następujące. Pień główny (壬) to reprezentatywna energia gałęzi."
          },
          {
            "table": {
              "caption": "Ukryte pnie gałęzi dnia 癸亥",
              "head": [
                "Ukryty pień",
                "Pozycja",
                "Udział",
                "Dla pnia dnia 癸"
              ],
              "rows": [
                [
                  "Ziemia Yang (戊)",
                  "szczątkowy (餘氣)",
                  "{hidHaeYeo}",
                  "Autorytet (正官)"
                ],
                [
                  "Drewno Yang (甲)",
                  "środkowy (中氣)",
                  "{hidHaeJung}",
                  "Burzyciel (傷官)"
                ],
                [
                  "Woda Yang (壬)",
                  "główny (本氣)",
                  "{hidHaeBon}",
                  "Rywal (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pozycja małżonka a ten filar dnia",
        "blocks": [
          {
            "p": "Tradycyjne myeongri odczytuje pozycję małżonka jako Stałe bogactwo (正財) u mężczyzn i Autorytet (正官) u kobiet. Gdy pniem dnia jest 癸, Stałe bogactwo to 丙, a Autorytet to 戊."
          },
          {
            "p": "Dla mężczyzn pozycją małżonka (Stałe bogactwo) jest 丙. 丙 nie znajduje się wewnątrz 亥."
          },
          {
            "p": "Dla kobiet pozycją małżonka (Autorytet) jest 戊. 戊 znajduje się wewnątrz 亥 (szczątkowy (餘氣))."
          }
        ]
      },
      {
        "title": "Sąsiednie filary dnia i znaki, z których się składa",
        "blocks": [
          {
            "p": "W cyklu sześćdziesięciu par poprzednim filarem dnia jest [壬戌](/guide/pillar-im-sul), a następnym [甲子](/guide/pillar-gap-ja)."
          },
          {
            "p": "Tworzą go: [Woda Yin (癸)](/guide/stem-gye) oraz [亥 (Świnia)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten poradnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jeden filar dnia nie rozstrzyga o człowieku ani o relacji. Saju czyta się z relacji między ośmioma znakami czterech filarów.",
              "Odczyt pozycji małżonka przejmuje zasadę tradycyjnego myeongri, a jeśli nie podasz płci, ta pozycja nie jest odczytywana."
            ]
          }
        ]
      }
    ]
  },

  "guide/saju-letters": {
    "eyebrow": "Na początek",
    "title": "Pnie niebiańskie, gałęzie ziemskie i filar dnia – jak czytać znaki",
    "summary": "Co to za osiem znaków w saju i co oznaczają pnie niebiańskie, gałęzie ziemskie oraz filar dnia – wyjaśnione prosto za pomocą dwóch tabel.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Saju zapisuje się dwoma rodzajami znaków",
        "blocks": [
          {
            "p": "Osiem znaków saju dzieli się na znaki górne i dolne. Znak górny to jeden z dziesięciu **pni niebiańskich (天干)**, a znak dolny to jedna z dwunastu **gałęzi ziemskich (地支)**."
          },
          {
            "p": "Pomyśl o pniu jak o nazwie rodzaju energii, a o gałęzi jak o nazwie czasu i miejsca. Nie musisz ich zapamiętywać, tak samo jak nie zapamiętujesz nazw dni tygodnia – wystarczy znaleźć je w tabelach poniżej. To, jak cztery filary stają się ośmioma znakami, wyjaśnia [poradnik o wykresie urodzeniowym](/guide/natal-chart)."
          }
        ]
      },
      {
        "title": "Dziesięć pni niebiańskich",
        "blocks": [
          {
            "p": "Pni niebiańskich jest dziesięć. Każdy z pięciu elementów (Drewno, Ogień, Ziemia, Metal, Woda) otrzymuje po dwa pnie, a w każdej parze pierwszy jest Yang (陽), a drugi Yin (陰)."
          },
          {
            "table": {
              "caption": "Dziesięć pni niebiańskich wraz z elementem i polaryzacją",
              "head": [
                "Pień niebiański",
                "Element i polaryzacja"
              ],
              "rows": [
                [
                  "Drewno Yang (甲)",
                  "Drewno Yang"
                ],
                [
                  "Drewno Yin (乙)",
                  "Drewno Yin"
                ],
                [
                  "Ogień Yang (丙)",
                  "Ogień Yang"
                ],
                [
                  "Ogień Yin (丁)",
                  "Ogień Yin"
                ],
                [
                  "Ziemia Yang (戊)",
                  "Ziemia Yang"
                ],
                [
                  "Ziemia Yin (己)",
                  "Ziemia Yin"
                ],
                [
                  "Metal Yang (庚)",
                  "Metal Yang"
                ],
                [
                  "Metal Yin (辛)",
                  "Metal Yin"
                ],
                [
                  "Woda Yang (壬)",
                  "Woda Yang"
                ],
                [
                  "Woda Yin (癸)",
                  "Woda Yin"
                ]
              ]
            }
          },
          {
            "p": "Pień dnia urodzenia nazywa się **pniem dnia (日干)** i jest to znak, który wskazuje na ciebie."
          }
        ]
      },
      {
        "title": "Dwanaście gałęzi ziemskich",
        "blocks": [
          {
            "p": "Gałęzi ziemskich jest dwanaście i każdej przypisane jest jedno zwierzę zodiaku. Dwanaście gałęzi to więc znaki zodiaku."
          },
          {
            "table": {
              "caption": "Dwanaście Ziemskich Gałęzi i Znaków Zodiaku",
              "head": [
                "Ziemska Gałąź",
                "Znak Zodiaku"
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
                  "Koza"
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
          },
          {
            "p": "Gałąź wygląda jak pojedynczy znak, ale mieści w sobie pnie. Nazywa się je **ukrytymi pniami (支藏干)**. To, jakie pnie zawiera dana gałąź i w jakiej proporcji, opisano w haśle słownika poświęconym każdej gałęzi. O tym, jak ustala się znak zodiaku, przeczytasz w [poradniku o znakach zodiaku](/guide/zodiac)."
          }
        ]
      },
      {
        "title": "Filar dnia – pień i gałąź w parze",
        "blocks": [
          {
            "p": "Każdy filar saju to dwa znaki: jeden pień sparowany z jedną gałęzią. Filar dnia urodzenia to **filar dnia (日柱)**."
          },
          {
            "p": "Parując kolejno pnie i gałęzie, otrzymuje się **sześćdziesiąt** kombinacji, od 甲子 i 乙丑 i 丙寅 aż do 癸亥. Ten cykl nazywa się cyklem sześćdziesięciu par. Jest ich sześćdziesiąt, a nie 10 × 12 = 120, ponieważ pień Yang łączy się tylko z gałęzią Yang, a pień Yin tylko z gałęzią Yin."
          },
          {
            "p": "Górny znak filaru dnia to pień dnia, o którym była mowa wyżej. Hasła objaśniające każdy filar po kolei znajdują się w słownikach pni, gałęzi i filarów dnia na dole [listy poradników](/guide)."
          }
        ]
      }
    ]
  },

  "guide/ten-gods": {
    "eyebrow": "Dziesięć Bogów",
    "title": "Dziesięć Bogów — Dziesięć pozycji w moim saju",
    "summary": "Na podstawie filaru dnia pozostałe znaki dzielą się na dziesięć nazw. Omawia powody rozróżnienia między zwykłym bogactwem a pobocznym bogactwem, nawet jeśli są to te same elementy bogactwa.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Filar dnia to sama osoba",
        "blocks": [
          {
            "p": "Wśród ośmiu znaków saju, **filar dnia** (niebiański pień dnia urodzenia) odnosi się do samej osoby. Pozostałe siedem znaków odczytuje się jako środowisko, w którym istnieje ten filar dnia."
          },
          {
            "p": "**Dziesięć Bogów** (十神) to dziesięć podziałów, w jaki sposób filar dnia postrzega pozostałe znaki. Energia, która mnie karmi, to Zasób, energia, która jest jak ja, to Towarzysz, energia, którą rodzę, to Jedzenie i Bogactwo, energia, która mnie tłumi, to Oficjalna Pozycja, a energia, którą tłumię, to Bogactwo — te pięć kategorii jest dalej dzielonych na yin i yang, tworząc dziesięć."
          }
        ]
      },
      {
        "title": "Co oznaczają pozostałe siedem znaków dla mnie",
        "blocks": [
          {
            "p": "Gdy filar dnia jest określony, pozostałe znaki w wykresie urodzeniowym otrzymują każda swoją nazwę. Energia, która mnie rodzi, energia, która jest jak ja, energia, którą rodzę, energia, która mnie tłumi, i energia, którą tłumię — te pięć gałęzi jest dalej dzielonych na **dziesięć** przez yin i yang. To są Dziesięć Bogów."
          },
          {
            "p": "W ten sposób Dziesięć Bogów odnosi się nie do relacji z innymi, ale do **pozycji wewnątrz mnie**. Które pozycje są grube lub cienkie wskazują moje tendencje i sposób życia."
          }
        ]
      },
      {
        "title": "Dlaczego czytamy to przez Dziesięć Bogów, a nie przez trzy relacje elementarne",
        "blocks": [
          {
            "p": "Istnieje również metoda oceny relacji dnia poprzez trzy aspekty pięciu elementów (wspierający, ten sam i przeciwny). Jest to proste, ale **yin i yang znikają.** 甲 (yang wood) i 乙 (yin wood) stają się tym samym co 甲, co jest reprezentacją 'jedności', a relacja przeciwna jest zgrupowana w jedną ocenę bez kierunku ani yin i yang."
          },
          {
            "p": "Pozycja małżonka musi być oceniana według Dziesięciu Bogów w kategoriach yin i yang. Jeśli elementy oceniane przez pięć elementów są mieszane z tymi ocenianymi przez Dziesięciu Bogów w jednym silniku, będą istnieć dwa standardy dla tych samych dwóch znaków. Dlatego jednoczymy to pod Dziesięcioma Bogami."
          }
        ]
      },
      {
        "title": "Pozycja małżonka to Właściwe Bogactwo i Właściwy Urzędnik",
        "blocks": [
          {
            "p": "Tradycyjne wróżenie postrzega pozycję małżonka inaczej w zależności od płci. Dla mężczyzn jest to **Właściwe Bogactwo (正財)**, a dla kobiet jest to **Właściwy Urzędnik (正官)**. Nawet jeśli są to te same elementy bogactwa, tylko Właściwe Bogactwo, które jest źle ustawione w yin i yang, jest uważane za pozycję małżonka, podczas gdy Pośrednie Bogactwo jest odczytywane nie jako małżonek, ale w kategoriach aktywności i bogactwa."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jeśli nie określisz płci, ta pozycja jest pomijana",
        "blocks": [
          {
            "p": "Dzieje się tak, ponieważ nie można ustalić, którą stronę, Właściwe Bogactwo czy Właściwego Urzędnika, uznać za pozycję małżonka. Zamiast zgadywać, aby wypełnić brakującą wartość, odczytujemy pozostałe elementy bez tej jednej."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "Dzisiejsza fortuna",
    "title": "Jak wypada dzisiejsza fortuna?",
    "summary": "Dziś dzień stem jest porównywany z wykresem urodzeniowym, aby uzyskać wynik. Trzynaście relacji tłumienia i wspierania oraz siedem relacji ziemskich gałęzi, wraz ze wszystkimi dwudziestoma elementami i ich odpowiednimi dodatkami i odjęciami, są w pełni ujawnione.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Dziś również ustalamy to w ten sam sposób jak osiem znaków",
        "blocks": [
          {
            "p": "Każdy dzień ma swój własny **dzienny filar dnia (日辰)**. Używając tej samej metody co przy ustalaniu filaru dnia wykresu urodzeniowego, dzisiaj również jest jeden heavenly stem i jedna earthly branch. Dzisiejsza fortuna dotyczy porównania tych dwóch znaków z wykresem urodzeniowym."
          },
          {
            "p": "Podstawowy wynik to **{baseScore} punkty**. Elementy poniżej są dodawane i odejmowane, a ostatecznie jest ograniczone między {clampLow} punktów a {clampHigh} punktów — nie wspominamy o 0 punktach ani 100 punktach."
          }
        ]
      },
      {
        "title": "① Czy dzisiejsza energia jest tym, czego potrzebuję?",
        "blocks": [
          {
            "p": "To jest najważniejsza pozycja. Sprawdzamy, czy dzisiejsza energia odpowiada 'energii potrzebnej teraz', określonej przez [element równoważący](/guide/yongsin)."
          },
          {
            "table": {
              "head": [
                "Dzisiejsza energia to",
                "Dodanie/Odjęcie"
              ],
              "rows": [
                [
                  "Energia potrzebna teraz",
                  "{todayIsYongsin}"
                ],
                [
                  "Generuje potrzebną energię",
                  "{todayGeneratesYongsin}"
                ],
                [
                  "Tłumi potrzebną energię",
                  "{todayControlsYongsin}"
                ],
                [
                  "Naciska bardziej na już przepełnioną stronę",
                  "{todayIsGisin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nie traktuj elementu niekorzystnego jako 'wszystko oprócz elementu równoważącego'",
        "blocks": [
          {
            "p": "Jeśli tak zrobisz, zarówno energia, która generuje element równoważący, jak i energia, która tłumi element równoważący, stają się złe, a ostatnie dwa wiersze w powyższej tabeli stają się nieodróżnialne. Tylko energia, która **naciska mocniej w przeciwnym kierunku** zgodnie z znaczeniem tłumienia i wspierania, jest postrzegana jako element niekorzystny."
          }
        ]
      },
      {
        "title": "② Relacja między dzisiejszym heavenly stem a day stem",
        "blocks": [
          {
            "p": "Relacje wspierające i przeciwne pięciu elementów są stosowane bezpośrednio między day stem a dzisiejszym heavenly stem."
          },
          {
            "table": {
              "head": [
                "Relacja",
                "Dodanie/Odjęcie"
              ],
              "rows": [
                [
                  "Dziś generuje mnie",
                  "{generatesSelf}"
                ],
                [
                  "Dziś i ja mamy tę samą energię",
                  "{sameElement}"
                ],
                [
                  "Tłumię dzisiaj",
                  "{selfControls}"
                ],
                [
                  "Wypływam z dzisiaj",
                  "{selfGenerates}"
                ],
                [
                  "Dziś tłumi mnie",
                  "{controlsSelf}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "③ Dzisiejsza earthly branch spotyka earthly branches wykresu urodzeniowego",
        "blocks": [
          {
            "p": "Dzisiejsza earthly branch jest porównywana z earthly branches wykresu urodzeniowego. Tabela relacji znajduje się w [relacjach ziemskich gałęzi](/guide/branches)."
          },
          {
            "table": {
              "head": [
                "Relacja",
                "Dodanie/Odjęcie"
              ],
              "rows": [
                [
                  "triada (三合)",
                  "{branchSamhap}"
                ],
                [
                  "sześć harmonii (六合)",
                  "{branchYukhap}"
                ],
                [
                  "połowa triady (半合)",
                  "{branchBanhap}"
                ],
                [
                  "cicha niezgoda (怨嗔)",
                  "{branchWonjin}"
                ],
                [
                  "konflikt (沖)",
                  "{branchChung}"
                ]
              ]
            }
          },
          {
            "p": "Gdy jest wiele filarów, pojawiają się różne relacje. Wszystkie są dodawane, ale cały ten element jest ograniczony do **±{branchMaxAbs} punktów** — ma to na celu zapobieżenie temu, aby jedna relacja z ziemskiego gałęzi decydowała o całym dniu."
          }
        ]
      },
      {
        "title": "④ Korekta na podstawie siły",
        "blocks": [
          {
            "p": "Nawet przy tej samej energii, znaczenie różni się dla silnego filaru dnia i słabego filaru dnia. Dlatego dokonujemy ostatniej korekty."
          },
          {
            "table": {
              "head": [
                "Sytuacja",
                "Korekta"
              ],
              "rows": [
                [
                  "Słaby filar dnia, ale dzisiaj ich wspiera",
                  "{weakTodayHelps}"
                ],
                [
                  "Silny filar dnia, ale dzisiaj odpowiednio zmniejsza obciążenie",
                  "{strongTodayDrains}"
                ],
                [
                  "Silny filar dnia, ale dzisiaj zwiększa wsparcie",
                  "{strongTodayHelps}"
                ],
                [
                  "Słaby filar dnia, ale dzisiaj zwiększa obciążenie",
                  "{weakTodayBurdens}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Wyniki według stopnia i obszaru",
        "blocks": [
          {
            "p": "Całkowity wynik dzieli się na pięć stopni."
          },
          {
            "table": {
              "head": [
                "Wynik",
                "Stopień"
              ],
              "rows": [
                [
                  "{gradeDaegilMin} punkty lub więcej",
                  "Wielkie szczęście (大吉)"
                ],
                [
                  "{gradeGilMin} punkty lub więcej",
                  "Szczęście (吉)"
                ],
                [
                  "{gradePyeongMin} punkty lub więcej",
                  "Średni (平)"
                ],
                [
                  "{gradeJuuiMin} punkty lub więcej",
                  "Ostrzeżenie (注意)"
                ],
                [
                  "{gradeJosimMin} punkty lub więcej",
                  "Uważaj (操心)"
                ]
              ]
            }
          },
          {
            "p": "Cztery obszary: bogactwo, miłość, kariera i zdrowie dziedziczą {overallShare} całkowitego wyniku, podczas gdy reszta jest dzielona zgodnie z Dziesięcioma Bogami i relacjami z ziemskimi gałęziami odpowiednimi dla tych obszarów. Dlatego, nawet jeśli całkowity wynik jest taki sam, liczby w poszczególnych obszarach różnią się w zależności od osoby."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Powyższe liczby są odczytywane z ustawień silnika. Jeśli zasady zostaną zmienione, ten dokument również się zmieni, a wszelkie zmiany dotyczące wyników zostaną najpierw opublikowane w [Ogłoszeniu](/notice)."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Tabela relacji",
    "title": "Relacje ziemskich gałęzi — kombinacja, konflikt i niezgoda",
    "summary": "To jest tabela relacji pokazująca, jak dzisiejszy filar dnia wchodzi w interakcję z wykresem natalnym. Odkrywa, co każda kombinacja, konflikt i niezgoda oznaczają oraz ile punktów mają.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Ziemskie gałęzie to dwanaście znaków",
        "blocks": [
          {
            "p": "Dwanaście ziemskich gałęzi (十二支) to 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Powszechnie znane znaki zodiaku — Szczur, Wół, Tygrys, Królik, Smok, Wąż, Koń, Koza, Małpa, Kogut, Pies, Świnia — są przypisane do jednego z tych dwunastu znaków."
          },
          {
            "figure": "branch-wheel",
            "caption": "Gdy dwanaście znaków jest ułożonych w okrąg, relacje są wyraźnie widoczne. Konflikt (沖) zawsze stoi naprzeciwko siebie, podczas gdy sześć harmonii i niezgód są bliższymi parami. Te linie nie są zapisane w tekście, ale są bezpośrednio wyprowadzone z zasad obliczeń.",
            "labels": {
              "alt": "Diagram pokazujący dwanaście ziemskich gałęzi ułożonych w okrąg z liniami łączącymi sześć harmonii, konflikt i niezgodę.",
              "yukhap": "sześć harmonii",
              "chung": "Konflikt",
              "wonjin": "Niezgoda",
              "rat": "Szczur",
              "ox": "Wół",
              "tiger": "Tygrys",
              "rabbit": "Królik",
              "dragon": "Smok",
              "snake": "wąż",
              "horse": "koń",
              "goat": "koza",
              "monkey": "małpa",
              "rooster": "kogut",
              "dog": "pies",
              "pig": "świnia"
            }
          },
          {
            "p": "W saju, każda z czterech filarów ma jedną ziemską gałąź. **Dzisiejsze odczyty** są określane przez dopasowanie **gałęzi dnia** do czterech gałęzi wykresu urodzeniowego, korzystając z poniższej tabeli relacji."
          }
        ]
      },
      {
        "title": "Ogólna tabela relacji",
        "blocks": [
          {
            "table": {
              "caption": "W kolejności najwyższego wyniku. To są wartości używane przez Saju-Link.",
              "head": [
                "Relacja",
                "Odpowiadająca para",
                "Znaczenie",
                "Wynik"
              ],
              "rows": [
                [
                  "triada (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Gdy wszystkie trzy znaki się łączą, tworzą kompletną formację elementarną (局). Uważa się to za najsilniejszą kombinację.",
                  "{scoreSamhap}"
                ],
                [
                  "sześć harmonii (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Pary, które przyciągają się nawzajem. To najczęstsza kombinacja, ponieważ składa się tylko z dwóch znaków.",
                  "{scoreYukhap}"
                ],
                [
                  "połowa triady (半合)",
                  "Dwa znaki, które zawierają jeden z królewskich znaków (子·酉·午·卯) z triady",
                  "Połowa triady, która zawiera znak centralny dla formacji. Nie tworzy kompletnej formacji elementarnej tylko z dwóch znaków, co czyni ją niższą od triady.",
                  "{scoreBanhap}"
                ],
                [
                  "Ta sama gałąź",
                  "子子 · 丑丑 …",
                  "Znaki, które są takie same. Oznacza to, że przypominają się nawzajem, ale nie implikuje przyciągania, więc są umieszczane w środku.",
                  "{scoreSame}"
                ],
                [
                  "Brak relacji",
                  "Pary, które nie należą do żadnej z powyższych lub poniższych kategorii",
                  "Kombinacje, które nie mają specjalnej relacji. Służy to jako punkt odniesienia.",
                  "{scoreNeutral}"
                ],
                [
                  "cicha niezgoda (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Pary, które nie mogą się rozdzielić mimo swojej niechęci. Na powierzchni wydają się ciche, ale uważa się, że trwają długo.",
                  "{scoreWonjin}"
                ],
                [
                  "Zderzenie (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Pary, które zderzają się bezpośrednio. To sześć par, które stają naprzeciwko siebie.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "triady i połowy triad",
        "blocks": [
          {
            "p": "Triada wymaga obecności wszystkich trzech znaków. Ponieważ w wykresie urodzeniowym są cztery ziemskie gałęzie, możliwe jest, aby gałąź dnia połączyła się z nimi, co skutkuje triadą — w tym czasie otrzymuje wynik {scoreSamhap}. Jeśli zaangażowane są tylko dwa znaki, jest to połowa triady."
          }
        ]
      },
      {
        "kind": "note",
        "title": "połowy triad wymagają królewskich znaków do uznania",
        "blocks": [
          {
            "p": "Istnieje również metoda, która liczy jako połowa triady, jeśli oba znaki należą do tej samej grupy triady. To pozwala na kombinacje takie jak 申辰, które trudno nazwać kombinacją, aby uzyskać wysokie wyniki. Dlatego ta usługa uznaje połowę triady tylko wtedy, gdy zawiera królewskie znaki (子·酉·午·卯) i nie uznaje kombinacji takich jak 申辰·巳丑·寅戌·亥未 za ważne."
          }
        ]
      },
      {
        "title": "Powód oddzielania cichej niezgody",
        "blocks": [
          {
            "p": "Sześć par cichej niezgody jest postrzeganych tak często jak zderzenia. Gdyby liczyć tylko kombinacje i zderzenia, te sześć par zostałoby całkowicie pogrzebanych pod wynikiem braku relacji {scoreNeutral}, więc są umieszczane osobno."
          },
          {
            "p": "Jeśli zderzenia to pary, które zderzają się bezpośrednio i są wyraźnie widoczne, cicha niezgoda jest subtelnie źle ustawiona. Dlatego jest umieszczana na wyniku {scoreWonjin}, który jest wyższy niż zderzenia ({scoreChung}), ale zdecydowanie niższy niż brak relacji ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Wyniki są również przypisywane dla zderzeń",
        "blocks": [
          {
            "p": "Najniższy wynik kolizji to {scoreChung}. Jest to zamierzone, aby nie podawać wartości bliskiej 0. W tradycyjnym myeongri kolizja nie jest 'końcem', lecz 'zderzeniem', a podanie wyniku bliskiego minimum oznaczałoby, że usługa składa jednoznaczne oświadczenie na temat relacji."
          },
          {
            "p": "Przy minimum {scoreChung} i maksimum {scoreSamhap}, różnica jest wyraźnie widoczna, ale nie definitywna."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Znak Zodiaku",
    "title": "Gdzie znajduje się Znak Zodiaku w Saju?",
    "summary": "Znak zodiaku to ziemska gałąź roku, w którym się urodziłeś. Wyjaśnia to, dlaczego jest on wyciągany z roku saju, a nie z roku kalendarzowego, oraz dlaczego osoby urodzone na początku stycznia lub lutego mają znak zodiaku z poprzedniego roku.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Znak zodiaku to ziemska gałąź roku, w którym się urodziłeś.",
        "blocks": [
          {
            "p": "Saju składa się z czterech filarów: roku, miesiąca, dnia i godziny, przy czym każdy filar ma jedną niebiańską łodygę i jedną ziemską gałąź. Spośród nich **ziemska gałąź roku**, czyli gałąź roku, to zwierzę, które nazywamy znakiem zodiaku."
          },
          {
            "table": {
              "caption": "Dwanaście Ziemskich Gałęzi i Znaków Zodiaku",
              "head": [
                "Ziemska Gałąź",
                "Znak Zodiaku"
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
                  "Koza"
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
        "title": "Używamy roku saju, a nie roku kalendarzowego.",
        "blocks": [
          {
            "p": "Moment, w którym zmienia się znak zodiaku, nie przypada ani na 1 stycznia kalendarza słonecznego, ani na Nowy Rok Księżycowy. Standardem zmiany roku w saju jest **Ipchun**. Dlatego osoby urodzone na początku stycznia lub lutego mogą mieć inny znak zodiaku niż wskazuje kalendarz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Powód, dla którego nie pytamy bezpośrednio o znak zodiaku.",
        "blocks": [
          {
            "p": "Dlatego pytamy tylko o datę urodzenia, nie wybierając znaku zodiaku na ekranie wejściowym. Gdy silnik saju oblicza rok, automatycznie dostosowuje się do granicy Ipchun. Jeśli wybierze się bezpośrednio, ktoś urodzony na początku lutego wybierze znak zodiaku, który nie odpowiada jego rzeczywistemu znakowi."
          }
        ]
      },
      {
        "title": "Znak zodiaku to jeden z ośmiu znaków w saju.",
        "blocks": [
          {
            "p": "Spośród ośmiu znaków, tym, który odpowiada znakowi zodiaku, jest **jedna gałąź roku**. Pozostałe siedem znaków — szczególnie łodyga dnia, która odnosi się do samego siebie — nie mają związku z znakiem zodiaku."
          },
          {
            "p": "Osoby urodzone w tym samym roku dzielą ten sam znak zodiaku. Dlatego to, co można wiedzieć na podstawie znaku zodiaku, jest tylko tak samo, jak jeden z ośmiu znaków. To jest powód, dla którego ta usługa nie **traktuje znaku zodiaku oddzielnie lub znacząco** — gałąź roku jest obliczana pod kątem siły, a dzisiejszy filar dnia oceny dnia, tak jak każda inna ziemska gałąź."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mimo to, powód, dla którego pokazujemy znak zodiaku.",
        "blocks": [
          {
            "p": "To jedyna pozycja, w której znaczenie jest zrozumiałe, nawet jeśli nie znasz terminologii myeongri. Jeśli znak zodiaku jest zaznaczony obok gałęzi roku na ekranie wykresu urodzeniowego, staje się wskazówką do odczytu pozostałych siedmiu znaków."
          }
        ]
      },
      {
        "title": "Gałąź roku pozostaje taka sama, nawet jeśli nie znasz czasu urodzenia.",
        "blocks": [
          {
            "p": "Jeśli nie wpiszesz godziny, filar godziny zostanie pominięty, a siła **pięciu elementów** (the five elements) ulegnie zmianie. Jednak **filtr roku pozostaje taki sam** — jest określany wyłącznie przez rok, w którym się urodziłeś."
          },
          {
            "p": "Dlatego historia wywodząca się z gałęzi roku nie zmienia się nawet dla tych, którzy nie znają czasu. Przeciwnie, oznacza to, że to, co można powiedzieć wyłącznie na podstawie znaku zodiaku, jest ograniczone, niezależnie od tego, czy czas jest uwzględniony, czy nie."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Czas",
    "title": "Przekształcamy czas urodzenia na prawdziwy czas słoneczny.",
    "summary": "Czas standardowy i rzeczywista pozycja słońca różnią się. To wyjaśnia, dlaczego czas musi być dostosowany zgodnie z długością geograficzną miejsca urodzenia, aby zapewnić poprawność filaru godziny.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Czas na zegarze i czas słoneczny są różne",
        "blocks": [
          {
            "p": "Godzina w saju (時柱) jest określona przez położenie słońca. Jednak zegar, który widzimy, używa jednego standardowego czasu dla całego kraju, co powoduje niezgodność z rzeczywistym położeniem słońca."
          },
          {
            "p": "Standardowy czas w Korei oparty jest na długości geograficznej 135° na wschód. Długość geograficzna Seulu wynosi około 127°, więc jest to około 8° na zachód, co powoduje, że słońce osiąga zenit później — gdy jest południe według zegara, słońce w Seulu wciąż jest przed zenitem. Ta różnica wynosi około **32 minut**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minuty zmieniają godzinę w słupku o jedną pozycję",
        "blocks": [
          {
            "p": "Czas w saju dzieli się na jednostki dwugodzinne. Osoby urodzone blisko granicy będą miały swój słupek godzinowy całkowicie zmieniony przez różnicę 32 minut — dostosowania są konieczne właśnie z powodu tych, którzy znajdują się dokładnie na tej granicy."
          }
        ]
      },
      {
        "title": "Powód pytania o miejsce urodzenia",
        "blocks": [
          {
            "p": "Jeśli długość geograficzna jest inna, kwota dostosowania również będzie różna. Jeśli zastosujesz dostosowanie oparte na Seulu do kogoś urodzonego za granicą, słupek godzinowy będzie znacząco niezgodny. Dlatego ekran wejściowy prosi o wybór miejsca urodzenia, a obliczenia są dokonywane na podstawie długości geograficznej i standardowego czasu tego miasta. Obecnie w liście znajduje się {cityCount} miejsc."
          },
          {
            "p": "Nawet w tym samym kraju, miejsca o znacznie różnych długościach geograficznych (takich jak Stany Zjednoczone, Rosja, Indonezja itp.) zostały podzielone na miasta. **15° długości geograficznej równa się jednemu słupkowi godzinowemu**."
          },
          {
            "p": "Jeśli nie wybierzesz, obliczenia będą dokonywane na podstawie Seulu. Większość urodzin ma miejsce w kraju, więc jest to mniej podatne na błędy, ale jeśli urodziłeś się za granicą, upewnij się, że dokonasz wyboru."
          }
        ]
      },
      {
        "title": "Czas standardowy zmieniał się wielokrotnie w przeszłości",
        "blocks": [
          {
            "p": "Jest powód, dla którego dostosowanie nie może być obliczone po prostu jako \"różnica długości geograficznej ÷ 15° × 60 minut.\" Czas standardowy sam w sobie różnił się w różnych epokach."
          },
          {
            "table": {
              "caption": "Zmiany w standardowym czasie Korei — osoby urodzone w tym okresie będą miały niezgodność z prostymi obliczeniami",
              "head": [
                "Okres",
                "Co było inne?"
              ],
              "rows": [
                [
                  "Przed 1912",
                  "Nie było standardowego czasu (czas średni lokalny)"
                ],
                [
                  "1954 – 1961",
                  "Czas standardowy wynosił UTC+8:30"
                ],
                [
                  "1948 – 51 · 1955 – 60 · 1987 – 88",
                  "Wprowadzono czas letni"
                ]
              ]
            }
          },
          {
            "p": "Saju-Link nie ustala standardowego południka jako stałej wartości, lecz oblicza rzeczywisty czas standardowy używany w danym momencie na podstawie informacji o **strefie czasowej IANA** miejsca urodzenia. Czas letni i przeszłe czasy standardowe są automatycznie uwzględniane."
          }
        ]
      },
      {
        "title": "Urodziny tuż po północy również uwzględniają datę",
        "blocks": [
          {
            "p": "Ponieważ dostosowanie wynosi -32 minuty, osoby urodzone między 00:00 a 00:32 według zegara będą miały **11 PM dnia poprzedniego** w rzeczywistym czasie słonecznym. Jeśli tylko czas zostanie dostosowany wstecz, a data pozostanie ta sama, zapisze słupek dnia (日柱) jako \"11 PM dnia poprzedniego.\""
          },
          {
            "p": "Saju-Link również dostosuje datę w tym przypadku. Znak powyżej słupka dnia odnosi się do słupka dnia (日干), który wskazuje mnie, więc jeśli to jest niezgodne, prawie wszystkie elementy w interpretacji będą niezgodne."
          }
        ]
      },
      {
        "title": "Nie musisz znać czasu",
        "blocks": [
          {
            "p": "Czas urodzenia jest opcjonalny. Jeśli go nie znasz, obliczenia będą dokonywane bez słupka godzinowego, a ta informacja zostanie wyświetlona na ekranie wyników. Ponieważ oznacza to, że dwa z ośmiu znaków są brakujące, wpłynie to na ocenę siły i słabości pięciu elementów, więc jeśli to wiesz, lepiej jest to uwzględnić."
          },
          {
            "p": "Słupek roku (zwierzę zodiaku) jest zawsze taki sam, niezależnie od czasu — [ponieważ patrzymy tylko na słupek roku](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Informacje osobiste",
    "title": "Metoda, która nie przechowuje wprowadzonych informacji",
    "summary": "Wyjaśnia, co technicznie oznacza, że data urodzenia nie jest nigdzie rejestrowana i co zawiera link do wyników.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Nie ma rejestracji członkostwa",
        "blocks": [
          {
            "p": "Saju-Link nie tworzy kont. Nie zbiera imion, adresów e-mail ani numerów telefonów. Jedyną informacją zbieraną jest data urodzenia oraz (opcjonalnie) czas urodzenia, miejsce urodzenia i płeć, a te informacje nie pozostają po zakończeniu obliczeń."
          },
          {
            "p": "Istnieje pole do wprowadzenia tytułu, który ma być wyświetlany na ekranie wyników, ale jest to **tylko do celów wyświetlania** i nie jest używane w obliczeniach. Nie musisz wpisywać swojego prawdziwego imienia."
          }
        ]
      },
      {
        "title": "Co zawiera link do wyników?",
        "blocks": [
          {
            "p": "Po zakończeniu obliczeń adres wygląda tak."
          },
          {
            "p": "**/ko/reading/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "To, co następuje po **#**, to wartości wejściowe. Ta część nazywana jest **fragmentem**, który jest sekcją, którą **przeglądarka nie wysyła do serwera**. To jest standardowe zachowanie w sieci i nie jest to zasada, którą stworzyliśmy — pierwotnie zaprojektowano to, aby wskazać położenie w dokumencie, więc serwer nie ma potrzeby tego widzieć."
          },
          {
            "p": "Innymi słowy, gdy otwierasz link do wyników, przeglądarka odczytuje tę wartość, aby zażądać obliczenia, a nasz serwer otrzymuje wartości do użycia w obliczeniach, zwraca odpowiedź, a następnie o niej zapomina."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Proszę być ostrożnym przy wysyłaniu linku do innych",
        "blocks": [
          {
            "p": "Fakt, że nie jest przechowywany na serwerze, nie oznacza, że link jest bezpieczny. Link do wyników zawiera daty urodzenia dwóch osób, więc osoba, która otrzyma ten link, może zobaczyć ten sam wynik."
          }
        ]
      },
      {
        "title": "Dlaczego obliczenia są wykonywane na serwerze, ale nie są przechowywane?",
        "blocks": [
          {
            "p": "Obliczenia same w sobie są wykonywane na serwerze. Do wygenerowania saju potrzebna jest tabela kalendarza lunisolarnego, a ta tabela jest zbyt duża, aby mogła być przesyłana do przeglądarki. Jednak **po przetworzeniu żądania, nie używamy tej wartości nigdzie.** Nie ma kodu, który wstawia ją do bazy danych."
          },
          {
            "p": "Minimalne rekordy niezbędne do działania są przechowywane — licznik, aby zapobiec zbyt wielu żądaniom od tej samej osoby w krótkim czasie. To nie obejmuje daty urodzenia, a adres IP nie jest przechowywany. Tylko jedna wartość haszowana z datą jest liczona, a ta wartość zmienia się, gdy zmienia się dzień."
          }
        ]
      },
      {
        "title": "Rzeczy, których nie można zrobić, ponieważ informacje nie są przechowywane",
        "blocks": [
          {
            "p": "Szczerze mówiąc, są rzeczy, z których zrezygnowano, ponieważ nie przechowujemy informacji."
          },
          {
            "ul": [
              "**Nie możesz odzyskać przeszłych wyników.** Musisz mieć link, aby je ponownie zobaczyć.",
              "**Te same wartości będą przeliczane.** Nie ma pamięci podręcznej. Jednak ponieważ wszystkie zasady są deterministyczne, [te same dane wejściowe zawsze dadzą tę samą wartość](/guide/natal-chart).",
              "**Odświeżenie przywróci bramkę reklamową.** Dzieje się tak, ponieważ nie ma miejsca na pozostawienie historii przeglądania."
            ]
          }
        ]
      },
      {
        "title": "Jeśli dokonasz zakupu",
        "blocks": [
          {
            "p": "Kiedy kupujesz raport, zostanie zachowany zapis transakcji. Płatność podlega prawnym okresom przechowywania, a bez historii zamówienia zwroty nie mogą być przetwarzane. Jednak w tym czasie, **data urodzenia użyta do obliczeń saju nie będzie dołączona do zamówienia** — zostanie ponownie poproszona przy tworzeniu PDF po potwierdzeniu płatności."
          },
          {
            "p": "Aby uzyskać więcej szczegółów, zapoznaj się z naszą [Polityką Prywatności](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Produkty płatne",
    "title": "Co jest zawarte w płatnym raporcie",
    "summary": "Wyjaśnia, co zostało dodane do PDF, zachowując ekran bez zmian. Wartości i treści są pobierane z rzeczywistych ustawień produktu.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Zachowano ekran bez zmian, dodano tylko do PDF",
        "blocks": [
          {
            "p": "Obliczenia saju i zapytania o wyniki są **darmowe**. Możesz zobaczyć wszystko na ekranie, w tym wykres urodzeniowy, pięć elementów, dzisiejszą fortunę i ich podstawy, ponieważ nic nie zostało pominięte podczas tworzenia płatnego raportu."
          },
          {
            "p": "Rola raportu polega na **dodaniu warstw, które nie są obecne na ekranie**. Te warstwy nie są wymyślone; są to wartości, które zostały już obliczone podczas procesu oceniania, ale nie zostały użyte na ekranie."
          }
        ]
      },
      {
        "title": "Raport PDF o saju na całe życie i szczęściu w tym roku — {priceDomestic}",
        "slot": "reportContents",
        "blocks": [
          {
            "p": "Płatność krajowa {priceDomestic} (w tym VAT), płatność międzynarodowa {priceGlobal}. Składa się z {pageCount} stron A4."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "Spis treści jest odczytywany bezpośrednio z opisu produktu. **Liczba stron jest taka sama jak w rzeczywistym dokumencie** — nie jest zawyżona, ponieważ jest to wartość podana w informacji o produkcie."
          }
        ]
      },
      {
        "title": "Czego nie ma na ekranie",
        "blocks": [
          {
            "p": "Darmowy ekran pokazuje wykres urodzeniowy, pięć elementów i dzisiejszą fortunę. Istnieją trzy wartości, które zostały wygenerowane podczas procesu obliczeń, ale nie są wyświetlane na ekranie, a są to części płatnego raportu."
          },
          {
            "ul": [
              "**Stosunek sojuszników dnia** — Pokazuje liczbowo, gdzie dokonano oceny silnego lub słabego filaru dnia. Sama nazwa oceny nie wskazuje, czy była na krawędzi, czy w obfitości.",
              "**Wang Sang Hyu Su Sa** — Jak bardzo miesiąc urodzenia podniósł każdą energię. Jeśli wskaźnik mocy wskazuje 'ile jest', ten stół wskazuje 'czy jest w sezonie'.",
              "**Szczegóły korekcji prawdziwego czasu słonecznego** — Koncepcja jest w dokumencie informacyjnym, ale **'ile minut zostało przesuniętych w twoim przypadku'** to inna wartość dla każdej osoby, więc jest zawarta tylko w raporcie."
            ]
          }
        ]
      },
      {
        "title": "Co powinieneś wiedzieć przed zakupem",
        "blocks": [
          {
            "p": "**Serwer nie przechowuje plików.** Po zatwierdzeniu płatności dokument jest tworzony i wysyłany natychmiast, nie pozostawiając nic na serwerze. Zasada tej usługi polegająca na niezapisywaniu wartości wejściowych jest przestrzegana nawet w płatnym procesie."
          },
          {
            "p": "Dlatego **proszę zapisać plik natychmiast po płatności.** Możesz go otrzymać do pięciu razy przy tym samym zamówieniu, ale jeśli opuścisz ekran wyników i wartości wejściowe znikną, nie można go ponownie utworzyć."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Raporty są również materiałami referencyjnymi",
        "blocks": [
          {
            "p": "To, że liczba stron wzrosła, nie oznacza, że wnioski są bardziej pewne. To, co raport dodaje, to **podstawa tych samych obliczeń**, a nie silniejsze twierdzenie. Przeznaczenie to dziedzina, w której wnioski mogą się różnić w zależności od praktyka, a ta usługa oblicza tylko to, co można przetłumaczyć na zasady."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Ogłoszenie",
    "title": "Ogłoszenia",
    "summary": "To jest miejsce, aby informować o zmianach, które mogą wpłynąć na użytkowanie.",
    "backLabel": "Powrót na początek",
    "sections": []
  },
  "contact": {
    "eyebrow": "Kontakt",
    "title": "Zapytania",
    "summary": "To jest kanał do zapytań dotyczących użytkowania, zwrotów, żądań informacji osobistych oraz zgłaszania błędów, wraz z informacjami o firmie.",
    "backLabel": "Powrót na początek",
    "sections": [
      {
        "title": "Kontakt przez e-mail",
        "blocks": [
          {
            "p": "Proszę wysyłać zapytania na adres **{email}**. Odpowiemy w ciągu 2 dni roboczych. W przypadku zapytań dotyczących płatności i zwrotów proszę dołączyć **numer zamówienia lub e-mail użyty do płatności** dla szybszej weryfikacji."
          },
          {
            "p": "Zapytania telefoniczne są przyjmowane pod {customerCenter}."
          }
        ]
      },
      {
        "title": "Co można wysłać na ten kanał",
        "blocks": [
          {
            "ul": [
              "**Płatność i zwrot** — Jeśli dokument nie został utworzony lub kwota płatności różni się od zamówienia, zostanie dokonany pełny zwrot. Warunki znajdują się w [Polityce Zwrotów](/refund-policy).",
              "**Informacje osobiste** — Przyjmujemy wnioski o wgląd, korektę i usunięcie. Polityka przetwarzania znajduje się w [Polityce Prywatności](/privacy).",
              "**Zgłoszenie błędu obliczeniowego** — Jeśli wykres urodzeniowy saju lub wyniki wydają się dziwne, proszę dać nam znać. Jeśli dołączysz, kiedy wprowadziłeś datę i godzinę urodzenia, możemy ponownie obliczyć z tymi samymi wartościami."
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
              "**Numer rejestracji działalności gospodarczej w sprzedaży wysyłkowej** — {mailOrderNumber}",
              "**Adres** — {address}",
              "**Centrum obsługi klienta** — {customerCenter}",
              "**E-mail** — {email}",
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
            "p": "Nie ma potrzeby dołączania daty i godziny urodzenia w e-mailu zapytania. Nie zapisujemy danych wejściowych, więc nie możemy ich później odzyskać, a to, co wymaga potwierdzenia, wystarczy z numerem zamówienia. Proszę dołączyć to tylko wtedy, gdy wartości są absolutnie konieczne, na przykład w zgłoszeniu błędu obliczeniowego."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const PL_NOTICES = {
  "kindLabels": {
    "service": "Usługa",
    "product": "Raport",
    "engine": "Kryteria obliczeń",
    "support": "Zapytanie"
  },
  "intro": "Zmiany, które wpływają na warunki użytkowania, takie jak ceny i warunki, będą publikowane tutaj przed wdrożeniem. Wewnętrzne ulepszenia, takie jak szybsze działanie ekranu, nie będą tutaj publikowane: pojawi się tutaj tylko to, co musisz wiedzieć.",
  "empty": {
    "title": "Nie opublikowano żadnych ogłoszeń.",
    "body": "Jeśli będą jakiekolwiek zmiany do przekazania, zostaną one opublikowane tutaj."
  },
  "effective": "Wchodzi w życie od {date}",
  "pager": {
    "label": "Strona ogłoszeń",
    "newer": "← Najnowsze",
    "older": "Poprzednie ogłoszenia →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Otworzono okno zapytań i stronę wprowadzającą do usługi.",
      "body": [
        "Zgromadziliśmy jedno okno do zapytań, zwrotów, wniosków o dane osobowe oraz zgłaszania błędów obliczeniowych. Możesz je sprawdzić na dole ekranu w sekcji 'Zapytaj'.",
        "Gdy informujesz nas o czymś, co wydaje się być błędem obliczeniowym, prosimy o podanie daty i godziny urodzenia, które wpisałeś. Nie zapisujemy danych wejściowych, więc bez tej wartości nie możemy ponownie obliczyć."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Na ekranach w języku arabskim i khmerskim raport będzie generowany w języku angielskim.",
      "body": [
        "Jeśli przeglądasz ekran w języku arabskim lub khmerskim, raport PDF, który kupujesz, zostanie stworzony w języku angielskim. Dzieje się tak, ponieważ narzędzie jeszcze nie potrafi sformatować tych dwóch skryptów w akapity.",
        "Nadal możesz zobaczyć ekran tak, jak jest, a imię zapisane w raporcie będzie dokładnie takie, jakie wpisałeś.",
        "Te same informacje są również wcześniej podawane na ekranie płatności. Powiadomimy cię tutaj, gdy narzędzie będzie wspierać te skrypty."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Kryteria obliczeń będą dołączone do wyników.",
      "body": [
        "Poniżej ekranu wyników i raportu wskazane są kryteria obliczeń (np. sajulink-natal-v1). Jeśli dane wejściowe są takie same, ta sama wartość zawsze wyjdzie pod tymi samymi kryteriami.",
        "Jeśli zasady interpretacji myeongri zostaną zmienione i wyniki mogą się różnić, najpierw opublikujemy ten fakt oraz datę wejścia w życie tutaj. Dzieje się tak, ponieważ liczby w linkach wyników, które otrzymałeś wcześniej, mogą się zmienić.",
        "Aktualne kryteria to v10, a płatność jest wciąż w przygotowaniu."
      ]
    }
  }
} satisfies NoticeCopy;
