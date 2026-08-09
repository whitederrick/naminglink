import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Polski — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const PL_DOCS = {
  "about": {
    "eyebrow": "Wprowadzenie",
    "title": "Wprowadzenie do Saju-Link",
    "summary": "To usługa, która ustala saju (czytanie czterech filarów) na podstawie daty i godziny urodzenia oraz wyjaśnia, co oznaczają osiem znaków. Wyjaśnia, co jest obliczane, a co nie.",
    "backLabel": "Powrót do Strony Głównej",
    "sections": [
      {
        "title": "Co robimy?",
        "blocks": [
          {
            "p": "Saju-Link ustala **wykres saju (czterech filarów) na podstawie daty i godziny urodzenia oraz pokazuje, co oznaczają osiem znaków**. Odczytuje siłę pięciu elementów oraz siłę mistrza dnia, a także bada dzisiejszą fortunę na podstawie pnia dnia."
          },
          {
            "p": "To, co widzisz na ekranie, jest **darmowe i nie wymaga członkostwa.** Płatny produkt to dokument PDF zawierający wartości, które nie są wyświetlane na ekranie — podstawę do rozróżnienia między silnym a słabym mistrzem dnia, Wang Sang Hyu Su Sa oraz szczegóły korekty dla prawdziwego czasu słonecznego."
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
            "p": "Wyniki są przyznawane tylko zgodnie z ustalonymi zasadami. Koncepcje z tradycyjnego 명리 (myeongri, nauka o losie), takie jak Dziesięć Bogów, relacje między gałęziami ziemskimi oraz elementy wspierające, są przetłumaczone na zasady obliczeń, a **ten sam wkład zawsze przyniesie tę samą wartość**. Gdy zasady są zmieniane, przeprowadzane są testy regresyjne, aby upewnić się, że wcześniejsze wyniki pozostają niezmienione."
          },
          {
            "p": "**AI nie jest używane w zdaniach na ekranie.** Wyjaśnienia pojawiające się na darmowym ekranie to stałe frazy przypisane do wyników obliczeń. **Tylko interpretacje w płatnych raportach** wykorzystują generatywną AI, a nawet wtedy AI nie tworzy wyników — jedynie pisze zdania na podstawie wartości dostarczonych przez silnik."
          }
        ]
      },
      {
        "title": "Czego nie mówimy?",
        "blocks": [
          {
            "ul": [
              "**Nie zapewniamy wróżenia.** Nie piszemy, że powinieneś spotkać lub unikać kogoś. To materiał referencyjny podsumowujący perspektywy tradycyjnego 명리.",
              "**Nie zapisujemy danych wejściowych.** Data i godzina urodzenia są używane tylko w momencie obliczeń i nie są przechowywane na serwerze. Link do wyniku jest również przechowywany w miejscu, które przeglądarka nie wysyła na serwer.",
              "**Wyniki nie są traktowane jako wartości ludzkie.** Tylko dlatego, że dzisiejsza fortuna jest niska, nie oznacza, że powinieneś rezygnować z tego dnia."
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
    "summary": "Ujawniamy wszystkie zasady używane przez Saju-Link. Możesz sprawdzić, skąd pochodzą liczby wyświetlane na ekranie, w tym korekty dla dzisiejszej fortuny, wyniki z tabeli relacji gałęzi ziemskich oraz wartości graniczne, które rozróżniają silnego mistrza dnia od słabego mistrza dnia.",
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
    "title": "Wykres Saju — Skąd pochodzą osiem znaków?",
    "summary": "Wyjaśnia, jak rok, miesiąc, dzień i czas urodzenia stają się czterema filarami i ośmioma znakami oraz identyfikuje, który znak wskazuje na Ciebie. Omawia również, dlaczego można to zobaczyć nawet bez znajomości dokładnego czasu urodzenia.",
    "backLabel": "Podstawa Obliczeń",
    "sections": [
      {
        "title": "Cztery Filar, Osiem Znaków",
        "blocks": [
          {
            "p": "Saju (四柱) dosłownie oznacza **cztery filary**. Każdy z roku, miesiąca, dnia i czasu urodzenia jest ustalany jako jeden filar, a dla każdego filaru zapisuje się dwa znaki. W ten sposób mamy łącznie osiem znaków, które nazywane są **원국 (won-guk)**."
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
            "p": "Nie wszystkie osiem znaków mają tę samą wagę. **Pień niebiański dnia urodzenia**, a konkretnie górny znak filaru dnia, wskazuje na **mnie**. To nazywa się **pniem dnia (日干)**."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju składa się z ośmiu znaków ustalonych przy użyciu dwóch znaków dla roku, miesiąca, dnia i czasu urodzenia, reprezentowanych przez pnie niebiańskie i gałęzie ziemskie. Tutaj, wyróżniający się pień dnia (日干) jest znakiem, który wskazuje na mnie.",
            "labels": {
              "year": "Filar Roku",
              "yearNote": "Korzeń · Znak Zodiaku",
              "month": "Filar Miesiąca",
              "monthNote": "Sezon · Siła",
              "day": "Mistrz Dnia",
              "dayNote": "Ja · Pałac Małżonka",
              "hour": "Mistrz Godziny",
              "hourNote": "Późniejsze Lata · Użycie",
              "stem": "Heavenly Stem",
              "stemNote": "Day Stem = Ja",
              "branch": "Earthly Branch",
              "branchNote": "Day Branch = Pałac Małżonka"
            }
          },
          {
            "p": "To, co ta usługa pokazuje, w dużej mierze pochodzi z tego jednego znaku — interpretacja tendencji, siła pięciu elementów, energia aktualnie potrzebna oraz dzisiejsza lektura są mierzone na podstawie Day Stem. Pozostałe siedem znaków wskazuje 'w jakim środowisku znajduje się Day Stem'."
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
            "p": "Zatem, osoby urodzone w **styczniu i na początku lutego otrzymują Year Stem z poprzedniego roku**. To tutaj pojawia się powszechne nieporozumienie dotyczące znaków zodiaku. To samo dotyczy, jeśli wprowadzisz urodziny lunarne — są one przeliczane na słoneczne, a następnie dzielone według terminów słonecznych."
          }
        ]
      },
      {
        "title": "Możesz to przeczytać nawet bez znajomości Czasu Urodzenia",
        "blocks": [
          {
            "p": "Jeśli nie wprowadzisz czasu, lektura będzie oparta na trzech filarach i sześciu znakach, z wyłączeniem Mistrza Godziny. Nie zgadujemy brakujących wartości — arbitralne przypisanie Mistrza Godziny może zakłócić siłę pięciu elementów, prowadząc do błędnych wniosków zamiast potencjalnie dokładnych."
          },
          {
            "p": "Jeśli znasz czas, lepiej go uwzględnić. Ponieważ dodawane są dwa znaki spośród ośmiu, siła i ocena pięciu elementów mogą się zmienić. Jednak nie używamy czasu zegarowego bezpośrednio, lecz zamiast tego korzystamy z [Prawdziwego Czasu Słonecznego](/guide/true-solar-time)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Metoda liczenia ośmiu znaków jako pięciu elementów w celu oceny siły jest kontynuowana w [Siła Pięciu Elementów i Silny/Słaby Mistrz Dnia](/guide/five-elements), podczas gdy metoda odczytywania pozostałych znaków na podstawie Day Stem jest kontynuowana w [Dziesięciu Bogach](/guide/ten-gods)."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Pięć Elementów",
    "title": "Siła Pięciu Elementów i Silny/Słaby Mistrz Dnia",
    "summary": "Liczymy osiem znaków jako pięć elementów, aby zobaczyć, która energia jest silna, a która słaba. Ujawniamy wartości progowe (45%·35%), które określają siłę Day Stem.",
    "backLabel": "Podstawa Obliczeń",
    "sections": [
      {
        "title": "Liczenie Ośmiu Znaków jako Pięciu Energii",
        "blocks": [
          {
            "p": "Dziesięć Heavenly Stems i dwanaście Earthly Branches należy do jednego z **Pięciu Elementów (五行)** — Drewno (木), Ogień (火), Ziemia (土), Metal (金), Woda (水). Licząc znaki w oryginalnym wykresie według ich odpowiednich elementów, możemy określić, która energia jest silna, a która słaba."
          },
          {
            "p": "Jednak nie tylko liczymy liczby. Rozważamy również **czy miesiąc urodzenia wspiera tę energię**. Nawet ten sam znak może mieć różne siły w zależności od tego, czy odpowiada swojej porze roku. Nazywa się to Znakiem Miesiąca (月令) i dzieli się na pięć etapów: Wang (旺), Sang (相), Hyu (休), Su (囚) i Sa (死)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Gdzie Ekran i Raport się Różnią",
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
            "p": "Po policzeniu sił pięciu elementów oceniamy, czy **Day Stem jest silny czy słaby**. Kryterium stanowi stosunek energii zgodnych z Day Stem."
          },
          {
            "p": "Energie zgodne z Day Stem to **Ludzkość i Towarzysz** — energie, które dają mi życie i te, które są do mnie podobne. Ponieważ jest ich dwie z pięciu, jeśli nie ma stronniczości, będzie to około {evenAllyRatio}. Oceniamy powyżej i poniżej tej granicy jako zrównoważone."
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
                  "Silny Mistrz Dnia (身强)",
                  "Energie wspierające Day Stem są obfite."
                ],
                [
                  "{weakThreshold} lub więcej i mniej niż {strongThreshold}",
                  "Zrównoważony (中和)",
                  "Trudno jest dojść do wniosku w którąkolwiek stronę."
                ],
                [
                  "Mniej niż {weakThreshold}",
                  "Słaby Mistrz Dnia (身弱)",
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
            "p": "Bycie silnym nie oznacza dobrego, a bycie słabym nie oznacza złego. Jeśli jest silny, ma moc do działania, ale łatwo jest przechylać się na jedną stronę; jeśli jest słaby, łatwiej jest korzystać ze siły innych, ale można łatwo się zmęczyć, gdy trzeba wytrzymać samemu. **Potrzebne energie różnią się w obu przypadkach.**"
          },
          {
            "p": "Określenie 'potrzebnej energii' to wspierający element, a kontynuacja znajduje się w [Wspierającym Elemencie](/guide/yongsin)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Jak ustalane są osiem znaków, znajduje się w [Oryginalnym Wykresie Saju](/guide/natal-chart). Jak dzisiejszy Mistrz Dnia wchodzi w interakcję z tą siłą, jest omówione w [Dzisiejszej Lekturze](/guide/today-fortune)."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Wspierający Element",
    "title": "Wspierający Element — Energia Potrzebna Teraz",
    "summary": "Jeśli Day Stem jest silny, rozważamy energię do zmniejszenia; jeśli słaby, rozważamy energię do wsparcia jako konieczną. To wyjaśnia, jak wybrać tę energię i jak sobie z nią radzić, gdy jest zrównoważona.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Same pięć elementów to za mało",
        "blocks": [
          {
            "p": "Istnieją sposoby, aby zmierzyć, czy pięć elementów jest równomiernie rozłożonych. Jednak to, co naprawdę jest potrzebne, to **co jest brakujące i co jest nadmiarowe w tym saju**."
          },
          {
            "p": "Saju, który jest równomiernie rozłożony, nie zawsze jest komfortowy, ani saju, który jest zniekształcony, nie zawsze jest trudny. Kierunek zniekształcenia i to, czy istnieje element, który może je złagodzić, to punkt zwrotny."
          }
        ]
      },
      {
        "title": "Element wspierający — zmniejsz, jeśli jest nadmiarowy, dodaj, jeśli brakuje",
        "blocks": [
          {
            "p": "Element wspierający (用神) to **energia, której obecnie potrzebuje ta osoba**. Istnieje kilka metod, aby to określić (zmniejszanie, dodawanie, choroba i harmonia), ale najczęściej stosowaną jest **zmniejszanie (抑扶)**. Jeśli mistrz dnia jest silny, uważa się, że potrzebna jest energia do zmniejszenia; jeśli słaby, wymagana jest energia do dodania."
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
                  "Silny mistrz dnia (身强)",
                  "Energia do zmniejszenia — jedzenie i bogactwo, pozycja urzędnicza",
                  "Trzy"
                ],
                [
                  "Słaby mistrz dnia (身弱)",
                  "Energia do dodania — zasób, towarzysz",
                  "Dwa"
                ],
                [
                  "Zrównoważony (中和)",
                  "Nie można pokryć przez zmniejszanie, więc najcieńsza energia",
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
            "p": "Strona mistrza dnia to **Zasób i Towarzysz** — energia, która mnie rodzi i energia, która jest podobna do mnie. Ponieważ dwa z pięciu są zaangażowane, pełna równowaga wynosi {evenAllyRatio}. Szerokość ustalana jest powyżej i poniżej tego {evenAllyRatio}."
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
        "title": "Zrównoważony to 'mniej pewny osąd'",
        "blocks": [
          {
            "p": "Zrównoważony oznacza, że nie można go pokryć przez zmniejszanie. W tym czasie dwie najcieńsze energie są po prostu uważane za niezbędne. Na ekranie wyników jest to zaznaczone jako 'aktualnie cienka pozycja', a nie jako ostateczne stwierdzenie."
          }
        ]
      },
      {
        "title": "Siła to nie liczba znaków",
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
        "title": "Gdzie używać elementu wspierającego",
        "blocks": [
          {
            "p": "Określony element wspierający jest używany w dwóch miejscach. Jednym z nich jest ekran wyników **'aktualnie potrzebna energia'**, a drugim jest [dzisiejsza fortuna](/guide/today-fortune) — to, czy dzisiejsza energia odpowiada elementowi wspierającemu, to element, który najbardziej wpływa na wynik w danym dniu."
          }
        ]
      },
      {
        "title": "To jest prosta ocena",
        "blocks": [
          {
            "p": "Rzeczywista analiza przeznaczenia uwzględnia formację i warunki sezonowe (ciepło i wilgotność sezonu), aby określić element wspierający, a wnioski mogą się różnić w zależności od metody. Saju-Link używa tylko **zmniejszania, które można zmierzyć wartościami siły**. Wynika to z zasady używania tylko tego, co można przekształcić w zasady, więc te same dane wejściowe zawsze dadzą tę samą odpowiedź."
          },
          {
            "p": "Zamiast tego ekran wyników przedstawia również silnego i słabego mistrza dnia wraz z aktualnie potrzebną energią jako **materiał do czytania**. Ma to na celu uniknięcie ukrywania podstawy wyniku."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "Dziesięć Bogów",
    "title": "Dziesięć Bogów — Dziesięć pozycji w moim saju",
    "summary": "Na podstawie mistrza dnia pozostałe znaki są dzielone na dziesięć nazw. Omawia powody rozróżnienia między zwykłym bogactwem a bogactwem pobocznym, nawet jeśli są to te same elementy bogactwa.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Mistrz dnia to sama osoba",
        "blocks": [
          {
            "p": "Wśród ośmiu znaków saju, **mistrz dnia** (niebiański pień dnia narodzin) odnosi się do samej osoby. Pozostałe siedem znaków jest odczytywanych jako środowisko, w którym ten mistrz dnia istnieje."
          },
          {
            "p": "**Dziesięć Bogów** (十神) to dziesięć podziałów, w jaki sposób mistrz dnia postrzega pozostałe znaki. Energia, która mnie karmi, to Zasób, energia, która jest podobna do mnie, to Towarzysz, energia, którą rodzę, to Jedzenie i Bogactwo, energia, która mnie tłumi, to Pozycja Urzędnicza, a energia, którą tłumię, to Bogactwo — te pięć gałęzi jest dalej dzielonych na yin i yang, tworząc dziesięć."
          }
        ]
      },
      {
        "title": "Co oznaczają pozostałe siedem znaków dla mnie",
        "blocks": [
          {
            "p": "Gdy mistrz dnia jest określony, pozostałe znaki w oryginalnym wykresie otrzymują każda swoją nazwę. Energia, która mnie rodzi, energia, która jest podobna do mnie, energia, którą rodzę, energia, która mnie tłumi, i energia, którą tłumię — te pięć gałęzi jest dalej dzielonych na **dziesięć** przez yin i yang. To są Dziesięć Bogów."
          },
          {
            "p": "W ten sposób Dziesięć Bogów odnosi się nie do relacji z innymi, ale do **pozycji wewnątrz mnie**. Które pozycje są grube lub cienkie wskazują moje tendencje i sposób życia."
          }
        ]
      },
      {
        "title": "Powód, dla którego patrzymy na to jako Dziesięć Bogów zamiast Trzech Elementów",
        "blocks": [
          {
            "p": "Istnieje również metoda oceny relacji między dniem a jego pniem wyłącznie przez trzy aspekty pięciu elementów (wspierający, ten sam i przeciwny). Jest to proste, ale **yin i yang znikają.** 甲 (yang wood) i 乙 (yin wood) stają się tym samym co 甲, co jest reprezentacją 'jedności', a relacja przeciwna jest zgrupowana w jedną ocenę bez kierunku czy yin i yang."
          },
          {
            "p": "Pozycja małżonka musi być oceniana według Dziesięciu Bogów w kontekście yin i yang. Jeśli elementy oceniane przez pięć elementów są mieszane z tymi ocenianymi przez Dziesięciu Bogów w jednym silniku, będą istnieć dwa standardy dla tych samych dwóch znaków. Dlatego jednoczymy to pod Dziesięcioma Bogami."
          }
        ]
      },
      {
        "title": "Pozycja małżonka to 정재 i 정관",
        "blocks": [
          {
            "p": "Tradycyjne wróżenie postrzega pozycję małżonka inaczej w zależności od płci. Dla mężczyzn jest to **정재 (正財)**, a dla kobiet **정관 (正官)**. Nawet jeśli są to te same elementy bogactwa, tylko 정재, które jest niezgodne w yin i yang, jest uważane za pozycję małżonka, podczas gdy 편재 jest odczytywane nie jako małżonek, ale w kontekście aktywności i bogactwa."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jeśli nie określisz płci, ta pozycja jest pomijana",
        "blocks": [
          {
            "p": "Dzieje się tak, ponieważ nie można określić, którą stronę, 정재 czy 정관, uznać za pozycję małżonka. Zamiast zgadywać, aby wypełnić brakującą wartość, czytamy pozostałe elementy bez tego jednego."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "Dzisiejsza fortuna",
    "title": "Jak wypada dzisiejsza fortuna?",
    "summary": "Dziś dzień jest porównywany z oryginalnym wykresem, aby uzyskać wynik. Dwanaście relacji elementów wspierających i siedem relacji gałęzi ziemskich, wraz ze wszystkimi dwudziestoma elementami i ich odpowiednimi dodatkami i odjęciami, są w pełni ujawnione.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Dziś również ustalamy to w ten sam sposób jak osiem znaków",
        "blocks": [
          {
            "p": "Każdy dzień ma swój własny **일진 (日辰)**. Używając tej samej metody co przy ustalaniu cyklu dnia oryginalnego wykresu, dzisiaj również przypisany jest jeden pień niebiański i jedna gałąź ziemska. Dzisiejsza fortuna polega na porównaniu tych dwóch znaków z oryginalnym wykresem."
          },
          {
            "p": "Podstawowy wynik to **{baseScore} punkty**. Elementy poniżej są dodawane i odejmowane, a ostatecznie jest to ograniczone między {clampLow} punktów a {clampHigh} punktów — nie wspominamy o 0 punktach ani 100 punktach."
          }
        ]
      },
      {
        "title": "① Czy dzisiejsza energia jest tym, czego potrzebuję?",
        "blocks": [
          {
            "p": "To jest najważniejsza pozycja. Sprawdzamy, czy dzisiejsza energia odpowiada 'energii potrzebnej teraz', określonej przez [억부용신](/guide/yongsin)."
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
        "title": "Nie traktuj 기신 jako 'wszystko oprócz 용신'",
        "blocks": [
          {
            "p": "Jeśli to zrobisz, zarówno energia, która generuje 용신, jak i energia, która tłumi 용신, stają się złe, a ostatnie dwa wiersze w powyższej tabeli stają się nieodróżnialne. Tylko energia, która **naciska mocniej w przeciwnym kierunku** zgodnie z znaczeniem 억부, jest postrzegana jako 기신."
          }
        ]
      },
      {
        "title": "② Relacja między dzisiejszym pniem niebiańskim a pniem dnia",
        "blocks": [
          {
            "p": "Relacje wspierające i przeciwne pięciu elementów są stosowane bezpośrednio między pniem dnia a dzisiejszym pniem niebiańskim."
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
                  "Przepływam z dzisiaj",
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
        "title": "③ Dzisiejsza gałąź ziemska spotyka gałęzie ziemskie oryginalnego wykresu",
        "blocks": [
          {
            "p": "Dzisiejsza gałąź ziemska jest porównywana z gałęziami ziemskimi oryginalnego wykresu. Tabela relacji znajduje się w [십이지 관계](/guide/branches)."
          },
          {
            "table": {
              "head": [
                "Relacja",
                "Dodanie/Odjęcie"
              ],
              "rows": [
                [
                  "pełna triada (三合)",
                  "{branchSamhap}"
                ],
                [
                  "para sześciowej harmonii (六合)",
                  "{branchYukhap}"
                ],
                [
                  "połowa triady (半合)",
                  "{branchBanhap}"
                ],
                [
                  "cicha, trwała niezgoda (怨嗔)",
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
            "p": "Gdy jest wiele filarów, pojawia się wiele relacji. Wszystkie są dodawane, ale cały ten element jest ograniczony do **±{branchMaxAbs} punktów** — ma to na celu zapobieżenie temu, aby jedna relacja z ziemskiego gałęzi decydowała o całym dniu."
          }
        ]
      },
      {
        "title": "④ Korekta na podstawie siły",
        "blocks": [
          {
            "p": "Nawet przy tej samej energii, znaczenie różni się dla silnego dnia mistrza i słabego dnia mistrza. Dlatego dokonujemy ostatniej korekty."
          },
          {
            "table": {
              "head": [
                "Sytuacja",
                "Korekta"
              ],
              "rows": [
                [
                  "Słaby dzień mistrza, ale dzisiaj ich wspiera",
                  "{weakTodayHelps}"
                ],
                [
                  "Silny dzień mistrza, ale dzisiaj odpowiednio zmniejsza obciążenie",
                  "{strongTodayDrains}"
                ],
                [
                  "Silny dzień mistrza, ale dzisiaj zwiększa wsparcie",
                  "{strongTodayHelps}"
                ],
                [
                  "Słaby dzień mistrza, ale dzisiaj zwiększa obciążenie",
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
                  "Wielkie Szczęście (大吉)"
                ],
                [
                  "{gradeGilMin} punkty lub więcej",
                  "Szczęście (吉)"
                ],
                [
                  "{gradePyeongMin} punkty lub więcej",
                  "Średnie (平)"
                ],
                [
                  "{gradeJuuiMin} punkty lub więcej",
                  "Ostrzeżenie (注意)"
                ],
                [
                  "{gradeJosimMin} punkty lub więcej",
                  "Bądź ostrożny (操心)"
                ]
              ]
            }
          },
          {
            "p": "Cztery obszary bogactwa, miłości, kariery i zdrowia dziedziczą całkowity wynik {overallShare}, podczas gdy reszta jest dzielona zgodnie z Dziesięcioma Bogami i relacjami z ziemskimi gałęziami dotyczącymi tych obszarów. Dlatego nawet jeśli całkowity wynik jest taki sam, liczby według obszaru różnią się w zależności od osoby."
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
    "title": "Relacje ziemskich gałęzi — Kombinacja, Konflikt i Niezgoda",
    "summary": "To jest tabela relacji pokazująca, jak dzisiejszy dzień mistrza wchodzi w interakcję z wykresem natalnym. Odkrywa, co każda kombinacja, konflikt i niezgoda oznaczają oraz ile punktów mają.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Ziemskie gałęzie to dwanaście znaków",
        "blocks": [
          {
            "p": "Dwanaście ziemskich gałęzi (十二支) to 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Powszechnie znane znaki zodiaku — Szczur, Wół, Tygrys, Królik, Smok, Wąż, Koń, Owca, Małpa, Kogut, Pies, Świnia — są przypisane do jednego z tych dwunastu znaków."
          },
          {
            "figure": "branch-wheel",
            "caption": "Gdy dwanaście znaków jest ułożonych w okrąg, relacje są wyraźnie widoczne. Konflikt (沖) zawsze stoi naprzeciwko siebie, podczas gdy sześć-harmonii i niezgoda są bliższymi parami. Te linie nie są zapisane w tekście, ale są bezpośrednio wyprowadzone z zasad obliczeń.",
            "labels": {
              "alt": "Diagram pokazujący dwanaście ziemskich gałęzi ułożonych w okrąg z liniami łączącymi sześć-harmonii, konflikt i niezgodę.",
              "yukhap": "Sześć-Harmonii",
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
            "p": "W saju, każda z czterech filarów ma jedną ziemską gałąź. **Dzisiejsza lektura** jest określana poprzez dopasowanie **gałęzi dnia** do czterech gałęzi oryginalnego wykresu przy użyciu poniższej tabeli relacji."
          }
        ]
      },
      {
        "title": "Tabela ogólnych relacji",
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
                  "Triada (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Gdy wszystkie trzy znaki się spotykają, tworzą kompletną formację elementarną (局). Uważa się to za najsilniejszą kombinację.",
                  "{scoreSamhap}"
                ],
                [
                  "Sześć harmonii (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Pary, które przyciągają się nawzajem. To najczęstsza kombinacja, ponieważ składa się tylko z dwóch znaków.",
                  "{scoreYukhap}"
                ],
                [
                  "Połowa triady (半合)",
                  "Dwa znaki, które zawierają jeden z królewskich znaków (子·酉·午·卯) z triady",
                  "Połowa kombinacji, która zawiera znak centralny dla formacji. Nie tworzy kompletnej formacji elementarnej tylko z dwóch znaków, co czyni ją niższą niż triada.",
                  "{scoreBanhap}"
                ],
                [
                  "Ta sama gałąź",
                  "子子 · 丑丑 …",
                  "Znaki, które są takie same. Oznacza to, że przypominają siebie nawzajem, ale nie implikuje to przyciągania, więc są umieszczane w środku.",
                  "{scoreSame}"
                ],
                [
                  "Brak relacji",
                  "Pary, które nie należą do żadnej z powyższych lub poniższych kategorii",
                  "Kombinacje, które nie mają specjalnej relacji. Służy to jako punkt odniesienia.",
                  "{scoreNeutral}"
                ],
                [
                  "Cicha niezgoda (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Pary, które nie mogą się rozdzielić mimo swojej niechęci. Na powierzchni wydają się ciche, ale uważa się, że trwają długo.",
                  "{scoreWonjin}"
                ],
                [
                  "Zderzenie (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Pary, które zderzają się bezpośrednio. To sześć par, które stoją naprzeciwko siebie.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Triady i Połowy Triad",
        "blocks": [
          {
            "p": "Triada wymaga obecności wszystkich trzech znaków. Ponieważ w oryginalnym wykresie są cztery ziemskie gałęzie, możliwe jest, że gałąź dnia połączy się z nimi, tworząc triadę — w tym czasie otrzymuje wynik {scoreSamhap}. Jeśli zaangażowane są tylko dwa znaki, jest to połowa triady."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Połowy Triad Wymagają Królewskich Znaków do Rozpoznania",
        "blocks": [
          {
            "p": "Istnieje również metoda, która liczy się jako połowa triady, jeśli oba znaki należą do tej samej grupy triady. To pozwala na kombinacje takie jak 申辰, które trudno nazwać kombinacją, aby otrzymały wysokie wyniki. Dlatego ta usługa uznaje połowę triady tylko wtedy, gdy zawiera królewskie znaki (子·酉·午·卯) i nie uznaje kombinacji takich jak 申辰·巳丑·寅戌·亥未 za ważne."
          }
        ]
      },
      {
        "title": "Powód Oddzielania Cichej Niezgody",
        "blocks": [
          {
            "p": "Sześć par cichej niezgody jest widzianych tak często jak zderzenia. Jeśli policzymy kombinacje zarówno zderzeń, jak i kombinacji, te sześć par byłoby wszystkie pogrzebane pod wynikiem braku relacji {scoreNeutral}, więc są umieszczane osobno."
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
            "p": "Najniższy wynik konfliktu to {scoreChung}. Jest to celowe, aby nie podawać wartości bliskiej 0. W tradycyjnej 명리 (myeongri) konflikt nie jest 'końcem', lecz 'zderzeniem', a podanie wyniku bliskiego minimum oznaczałoby, że usługa dokonuje ostatecznego stwierdzenia na temat relacji."
          },
          {
            "p": "Z minimalnym wynikiem {scoreChung} i maksymalnym {scoreSamhap}, różnica jest wyraźnie widoczna, ale nie ostateczna."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Znak Zodiaku",
    "title": "Gdzie znajduje się Znak Zodiaku w Saju?",
    "summary": "Znak zodiaku to ziemska gałąź roku, w którym się urodziłeś. Wyjaśnia to, dlaczego jest on wyciągany z roku saju, a nie roku kalendarzowego, i dlaczego osoby urodzone na początku stycznia lub lutego mają znak zodiaku z poprzedniego roku.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Znak zodiaku to ziemska gałąź roku, w którym się urodziłeś.",
        "blocks": [
          {
            "p": "Saju składa się z czterech filarów: roku, miesiąca, dnia i godziny, z których każdy filar ma jeden niebiański pień i jedną ziemską gałąź. Wśród nich, **ziemska gałąź roku**, czyli 연지 (gałąź roku), to zwierzę, które nazywamy znakiem zodiaku."
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
            "p": "Moment, w którym zmienia się znak zodiaku, nie jest ani 1 stycznia kalendarza słonecznego, ani Nowym Rokiem Księżycowym. Standardem zmiany roku w saju jest **Ipchun**. Dlatego osoby urodzone na początku stycznia lub lutego mogą mieć inny znak zodiaku niż wskazuje kalendarz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Powód, dla którego nie pytamy bezpośrednio o znak zodiaku.",
        "blocks": [
          {
            "p": "Dlatego pytamy tylko o datę urodzenia, nie wybierając znaku zodiaku na ekranie wejściowym. Gdy silnik saju oblicza rok, automatycznie dostosowuje się do granicy Ipchun. Jeśli wybierzesz bezpośrednio, ktoś urodzony na początku lutego wybierze znak zodiaku, który nie odpowiada jego rzeczywistemu znakowi."
          }
        ]
      },
      {
        "title": "Znak zodiaku to jeden znak w saju.",
        "blocks": [
          {
            "p": "Spośród ośmiu znaków, tym, który odpowiada znakowi zodiaku, jest **jedna 연지 (gałąź roku)**. Pozostałe siedem znaków — szczególnie pień dnia, który odnosi się do siebie — nie mają związku ze znakiem zodiaku."
          },
          {
            "p": "Osoby urodzone w tym samym roku dzielą ten sam znak zodiaku. Dlatego to, co można wiedzieć na podstawie znaku zodiaku, jest tylko tak dużo, jak jeden z ośmiu znaków. To jest powód, dla którego ta usługa nie **traktuje znaku zodiaku oddzielnie ani znacząco** — 연지 (gałąź roku) jest obliczana pod kątem siły i oceny dzisiejszego 일진 (codziennej fortuny) tak jak każda inna ziemska gałąź."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mimo to, powód, dla którego pokazujemy znak zodiaku.",
        "blocks": [
          {
            "p": "To jedyna pozycja, w której znaczenie jest zrozumiane, nawet jeśli nie znasz terminologii 명리 (myeongri). Jeśli znak zodiaku jest zaznaczony obok 연지 (gałęzi roku) na oryginalnym ekranie wykresu, staje się wskazówką do odczytu pozostałych siedmiu znaków."
          }
        ]
      },
      {
        "title": "Gałąź roku pozostaje taka sama, nawet jeśli nie znasz czasu urodzenia.",
        "blocks": [
          {
            "p": "Jeśli nie wprowadzisz czasu, filar godziny jest pomijany, a siła 오행 (pięciu elementów) się zmienia. Jednak **gałąź roku pozostaje taka sama** — jest określana wyłącznie przez rok, w którym się urodziłeś."
          },
          {
            "p": "Dlatego historia wyprowadzona z gałęzi roku nie zmienia się nawet dla tych, którzy nie znają czasu. Przeciwnie, oznacza to, że to, co można powiedzieć wyłącznie na podstawie znaku zodiaku, jest ograniczone, niezależnie od tego, czy czas jest uwzględniony, czy nie."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Czas",
    "title": "Konwertujemy czas urodzenia na prawdziwy czas słoneczny.",
    "summary": "Czas standardowy i rzeczywista pozycja słońca różnią się. Wyjaśnia to, dlaczego czas musi być dostosowany zgodnie z długością geograficzną miejsca urodzenia, aby zapewnić poprawność filaru godziny.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Czas na zegarze i czas słoneczny są różne",
        "blocks": [
          {
            "p": "Godzina filaru saju (時柱) jest określana przez położenie słońca. Jednak zegar, który widzimy, używa jednego standardowego czasu dla całego kraju, co powoduje niezgodność z rzeczywistym położeniem słońca."
          },
          {
            "p": "Standardowy czas w Korei oparty jest na długości geograficznej 135° na wschód. Długość geograficzna Seulu wynosi około 127°, więc jest to około 8° na zachód, co powoduje, że słońce osiąga zenit później — gdy jest południe według zegara, słońce w Seulu jest jeszcze przed zenitem. Ta różnica wynosi około **32 minut**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minuty zmieniają filar godziny o jeden slot",
        "blocks": [
          {
            "p": "Czas w saju dzieli się na jednostki dwugodzinne. Osoby urodzone blisko granicy będą miały całkowicie zmieniony filar godziny przez różnicę 32 minut — dostosowania są konieczne właśnie z powodu tych, którzy znajdują się dokładnie na tej granicy."
          }
        ]
      },
      {
        "title": "Powód, dla którego pytamy, gdzie się urodziłeś",
        "blocks": [
          {
            "p": "Jeśli długość geograficzna jest inna, kwota dostosowania również będzie różna. Jeśli zastosujesz dostosowanie oparte na Seulu do kogoś urodzonego za granicą, filar godziny będzie znacząco niezgodny. Dlatego ekran wejściowy prosi o wybranie miejsca urodzenia, a obliczenia są dokonywane na podstawie długości geograficznej i standardowego czasu tego miasta. Obecnie w liście znajduje się {cityCount} miejsc."
          },
          {
            "p": "Nawet w tym samym kraju miejsca o znacznie różnych długościach geograficznych (takich jak Stany Zjednoczone, Rosja, Indonezja itp.) zostały podzielone na miasta. **15° długości geograficznej równa się jednemu filarowi godziny**."
          },
          {
            "p": "Jeśli nie wybierzesz, obliczenia będą dokonywane na podstawie Seulu. Większość urodzeń ma miejsce w kraju, więc jest to mniej podatne na błędy, ale jeśli urodziłeś się za granicą, upewnij się, że dokonasz wyboru."
          }
        ]
      },
      {
        "title": "Czas standardowy zmieniał się wielokrotnie w przeszłości",
        "blocks": [
          {
            "p": "Istnieje powód, dla którego dostosowanie nie może być obliczone po prostu jako \"różnica długości geograficznej ÷ 15° × 60 minut.\" Sam czas standardowy różnił się w różnych epokach."
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
            "p": "Ponieważ dostosowanie wynosi -32 minuty, osoby urodzone między 00:00 a 00:32 według zegara będą miały **11 PM dnia poprzedniego** w rzeczywistym czasie słonecznym. Jeśli tylko czas zostanie dostosowany wstecz, a data pozostanie ta sama, zapisze filar dnia (日柱) jako \"11 PM dnia poprzedniego.\""
          },
          {
            "p": "Saju-Link również dostosuje datę w tym przypadku. Znak nad filarem dnia odnosi się do pnia dnia (日干), który wskazuje na mnie, więc jeśli to jest niezgodne, prawie wszystkie elementy w interpretacji będą niezgodne."
          }
        ]
      },
      {
        "title": "Nie musisz znać godziny",
        "blocks": [
          {
            "p": "Czas urodzenia jest opcjonalny. Jeśli go nie znasz, obliczenia będą dokonywane bez filaru godziny, a ten fakt zostanie wyświetlony na ekranie wyników. Ponieważ oznacza to, że dwa z ośmiu znaków są brakujące, wpłynie to na ocenę siły i słabości pięciu elementów, więc jeśli to wiesz, lepiej jest to uwzględnić."
          },
          {
            "p": "Filar roku (띠) jest zawsze taki sam niezależnie od czasu — [ponieważ patrzymy tylko na filar roku](/guide/zodiac)."
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
            "p": "Istnieje pole do wprowadzenia tytułu, który ma być wyświetlany na ekranie wyników, ale jest to **tylko do celów wyświetlania** i nie jest używane w obliczeniach. Nie musisz wprowadzać swojego prawdziwego imienia."
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
            "p": "To, co następuje po **#**, to wartości wejściowe. Ta część nazywana jest **fragmentem**, który jest sekcją, którą **przeglądarka nie wysyła do serwera**. To standardowe zachowanie w sieci, a nie zasada, którą stworzyliśmy — pierwotnie zaprojektowano to, aby wskazać pozycję w dokumencie, więc serwer nie ma potrzeby jej widzieć."
          },
          {
            "p": "Innymi słowy, gdy otwierasz link do wyników, przeglądarka odczytuje tę wartość, aby zażądać obliczenia, a nasz serwer otrzymuje wartości do wykorzystania w obliczeniach, zwraca odpowiedź, a następnie zapomina o niej."
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
            "p": "Obliczenia są wykonywane na serwerze. Do wygenerowania saju potrzebna jest tabela kalendarza lunisolarnego, a ta tabela jest zbyt duża, aby mogła być przesyłana do przeglądarki. Jednak **po przetworzeniu żądania nie używamy tej wartości nigdzie.** Nie ma kodu, który wstawia ją do bazy danych."
          },
          {
            "p": "Minimalne rekordy niezbędne do działania są przechowywane — licznik, aby zapobiec wysyłaniu zbyt wielu żądań przez tę samą osobę w krótkim czasie. To nie obejmuje daty urodzenia, a adres IP nie jest zachowywany. Tylko jedna wartość haszowana z datą jest liczona, a ta wartość zmienia się, gdy zmienia się dzień."
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
            "p": "Kiedy kupujesz raport, zostanie zachowany zapis transakcji. Płatność podlega ustawowym okresom przechowywania, a bez historii zamówienia zwroty nie mogą być przetwarzane. Jednak w tym czasie **data urodzenia używana do obliczeń saju nie będzie dołączona do zamówienia** — zostanie ponownie poproszona przy tworzeniu PDF po potwierdzeniu płatności."
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
            "p": "Obliczenia saju i zapytania o wyniki są **darmowe**. Możesz zobaczyć wszystko na ekranie, w tym oryginalny wykres, pięć elementów, dzisiejsze szczęście i ich podstawy, ponieważ nic nie zostało pominięte podczas tworzenia płatnego raportu."
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
        "title": "Co nie jest na ekranie",
        "blocks": [
          {
            "p": "Darmowy ekran pokazuje oryginalny wykres, pięć elementów i dzisiejsze szczęście. Istnieją trzy wartości, które zostały wyprodukowane podczas procesu obliczeniowego, ale nie są wyświetlane na ekranie, a są to części płatnego raportu."
          },
          {
            "ul": [
              "**Współczynnik wygody dnia** — Pokazuje liczbowo, gdzie dokonano oceny silnego lub słabego mistrza dnia. Sama nazwa oceny nie wskazuje, czy była na krawędzi, czy obfita.",
              "**Wang Sang Hyu Su Sa** — Jak bardzo miesiąc urodzenia podniósł każdą energię. Jeśli wskaźnik mocy wskazuje 'ile jest', ta tabela wskazuje 'czy jest w sezonie'.",
              "**Szczegóły korekty prawdziwego czasu słonecznego** — Koncepcja znajduje się w dokumencie informacyjnym, ale **'ile minut zostało przesuniętych w twoim przypadku'** to inna wartość dla każdej osoby, więc jest zawarta tylko w raporcie."
            ]
          }
        ]
      },
      {
        "title": "Co powinieneś wiedzieć przed zakupem",
        "blocks": [
          {
            "p": "**Serwer nie przechowuje plików.** Po zatwierdzeniu płatności dokument jest tworzony i wysyłany natychmiast, nie pozostawiając nic na serwerze. Zasada tej usługi, aby nie zapisywać wartości wejściowych, jest przestrzegana nawet w płatnym procesie."
          },
          {
            "p": "Dlatego **proszę natychmiast zapisać plik po płatności.** Możesz go otrzymać do pięciu razy przy tym samym zamówieniu, ale jeśli opuścisz ekran wyników i wartości wejściowe znikną, nie można ich ponownie utworzyć."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Raporty są również materiałami referencyjnymi",
        "blocks": [
          {
            "p": "Sama liczba stron nie oznacza, że wnioski są bardziej pewne. To, co raport dodaje, to **podstawa tych samych obliczeń**, a nie silniejsze twierdzenie. Przeznaczenie to dziedzina, w której wnioski mogą się różnić w zależności od praktyka, a ta usługa oblicza tylko to, co można przetłumaczyć na zasady."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Ogłoszenie",
    "title": "Ogłoszenia",
    "summary": "To miejsce, aby informować o zmianach, które mogą wpłynąć na użytkowanie.",
    "backLabel": "Powrót do początku",
    "sections": []
  },
  "contact": {
    "eyebrow": "Kontakt",
    "title": "Zapytania",
    "summary": "To jest kanał do zapytań dotyczących użytkowania, zwrotów, żądań informacji osobistych i zgłaszania błędów, wraz z informacjami o firmie.",
    "backLabel": "Powrót do początku",
    "sections": [
      {
        "title": "Kontakt przez e-mail",
        "blocks": [
          {
            "p": "Proszę wysłać zapytania na **{email}**. Odpowiemy w ciągu 2 dni roboczych. W przypadku zapytań dotyczących płatności i zwrotów proszę dołączyć **numer zamówienia lub e-mail użyty do płatności** dla szybszej weryfikacji."
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
              "**Informacje osobiste** — Przyjmujemy prośby o wgląd, korektę i usunięcie. Polityka przetwarzania znajduje się w [Polityce Prywatności](/privacy).",
              "**Zgłoszenie błędu obliczeniowego** — Jeśli oryginalny wykres saju lub wyniki wydają się dziwne, proszę dać nam znać. Jeśli dołączysz, kiedy wprowadziłeś datę i godzinę urodzenia, możemy ponownie obliczyć te same wartości."
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
              "**Numer rejestracji działalności** — {businessNumber}",
              "**Numer rejestracji działalności w sprzedaży wysyłkowej** — {mailOrderNumber}",
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
            "p": "Nie ma potrzeby dołączania daty i godziny urodzenia w e-mailu z zapytaniem. Nie zapisujemy wartości wejściowych, więc nie możemy ich później odzyskać, a to, co wymaga potwierdzenia, wystarczy z numerem zamówienia. Proszę dołączyć to tylko wtedy, gdy wartości są absolutnie konieczne, na przykład w zgłoszeniu błędu obliczeniowego."
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
  "intro": "Zmiany, które wpływają na warunki użytkowania, takie jak ceny i warunki, będą publikowane tutaj przed wdrożeniem. Wprowadziliśmy wiele wewnętrznych ulepszeń, takich jak szybszy ekran — tylko to, co musisz wiedzieć, zostanie tutaj odnotowane.",
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
      "title": "Otworzono okno zapytań i stronę wprowadzającą usługi.",
      "body": [
        "Zgromadziliśmy jedno okno do zapytań, zwrotów, żądań informacji osobistych oraz zgłaszania błędów obliczeniowych. Możesz je sprawdzić na dole ekranu w sekcji 'Zapytaj'.",
        "Gdy informujesz nas o czymś, co wydaje się być błędem obliczeniowym, prosimy o podanie daty i godziny urodzenia, które wprowadziłeś. Nie zapisujemy danych wejściowych, więc bez tej wartości nie możemy ponownie obliczyć."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Na ekranach w języku arabskim i khmerskim raport będzie generowany w języku angielskim.",
      "body": [
        "Jeśli przeglądasz ekran w języku arabskim lub khmerskim, raport PDF, który kupujesz, zostanie stworzony w języku angielskim. Dzieje się tak, ponieważ narzędzie jeszcze nie potrafi sformatować tych dwóch skryptów w akapity.",
        "Możesz nadal widzieć ekran tak, jak jest, a imię zapisane w raporcie będzie dokładnie takie, jakie wprowadziłeś.",
        "Te same informacje są również wcześniej podawane na ekranie płatności. Powiadomimy cię tutaj, gdy narzędzie będzie wspierać te skrypty."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Kryteria obliczeń będą dołączone do wyników.",
      "body": [
        "Pod ekranem wyników i raportu wskazane są kryteria obliczeń (np. sajulink-natal-v1). Jeśli dane wejściowe są takie same, ta sama wartość zawsze wyjdzie pod tymi samymi kryteriami.",
        "Jeśli zasady interpretacji 명리 (myeongri) zostaną zmienione i wyniki mogą się różnić, najpierw opublikujemy ten fakt oraz datę wejścia w życie tutaj. Dzieje się tak, ponieważ liczby w linkach wyników, które otrzymałeś wcześniej, mogą się zmienić.",
        "Aktualne kryteria to v10, a płatność jest wciąż w przygotowaniu."
      ]
    }
  }
} satisfies NoticeCopy;
