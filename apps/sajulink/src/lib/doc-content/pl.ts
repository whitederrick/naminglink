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
