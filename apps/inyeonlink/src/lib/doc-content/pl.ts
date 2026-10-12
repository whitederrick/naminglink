import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Polski — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const PL_DOCS = {
  "about": {
    "eyebrow": "O nas",
    "title": "O Inyeon-Link",
    "summary": "Porównujemy dwa wykresy urodzeniowe w koreańskiej tradycji saju. Oto co obliczamy i czego odmawiamy twierdzić.",
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
            "p": "Wykresy są tworzone na podstawie **koreańskiego kalendarza lunisolarnego**, a czas urodzenia jest korygowany do **prawdziwego czasu słonecznego** dla miejsca urodzenia — ten sam czas zegarowy oznacza inną pozycję słońca w zależności od miejsca urodzenia."
          },
          {
            "p": "Wyniki pochodzą tylko z ustalonych zasad. Tradycyjne koncepcje — dziesięciu bogów, relacje między gałęziami, wspierający element — są wyrażane jako zasady, więc **te same dane wejściowe zawsze daje ten sam wynik.** Kiedy zasada się zmienia, uruchamiamy regresję, aby upewnić się, że starsze odczyty się nie zmieniły."
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
                  "Pień dnia, gałąź dnia i pięć elementów — cztery elementy",
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
            "caption": "Saju składa się z ośmiu znaków utworzonych przez niebiańskie pnie i ziemskie gałęzie roku, miesiąca, dnia i godziny urodzenia. Pień dnia i gałąź dnia wspomniane poniżej to dwa znaki w filarze dnia.",
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
              "stemNote": "Pień Dnia = Ja",
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
                  "Jakie są wzajemne relacje pni dnia (日干) dwóch osób — postrzegane przez pryzmat Dziesięciu Bogów",
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
                  "Czy gałęzie dnia (日支) dwóch osób tworzą harmonię czy zderzenie?",
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
    "eyebrow": "Tabela relacji",
    "title": "Jak spotykają się zwierzęta zodiaku i gałęzie dnia — tabela dwunastu gałęzi",
    "summary": "Tabela relacji używana, gdy zwierzęta zodiaku i gałęzie dnia dwóch osób zestawia się obok siebie. Pokazuje, które zwierzęta tworzą z którymi harmonię, zderzenie lub niezgodę, dla każdego z dwunastu, i ujawnia wynik każdej relacji.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Zwierzęta zodiaku i gałęzie dnia korzystają z tej samej tabeli",
        "blocks": [
          {
            "p": "Inyeon-Link zestawia ziemskie gałęzie dwóch osób w dwóch miejscach: w **zgodności zodiakalnej**, która patrzy na gałąź roku urodzenia, oraz w **zgodności gałęzi dnia** (pałac małżonka), która patrzy na gałąź dnia urodzenia. Obie są oceniane za pomocą poniższej tabeli; różni je tylko to, jak dużą wagę każda z nich ma w wyniku końcowym."
          },
          {
            "figure": "branch-wheel",
            "caption": "Ułożenie dwunastu znaków w okrąg sprawia, że relacje widać na pierwszy rzut oka. Zderzenie zawsze leży dokładnie naprzeciwko, a para w relacji sześciu harmonii i cicha niezgoda są bliższymi sąsiadami. Te linie nie są rysowane ręcznie; wynikają bezpośrednio z zasad obliczeń.",
            "labels": {
              "alt": "Diagram przedstawiający dwanaście ziemskich gałęzi ułożonych w okrąg, z liniami łączącymi pary sześciu harmonii, zderzenia i niezgody.",
              "yukhap": "Sześć harmonii",
              "chung": "Zderzenie",
              "wonjin": "Niezgoda",
              "rat": "Szczur",
              "ox": "Wół",
              "tiger": "Tygrys",
              "rabbit": "Królik",
              "dragon": "Smok",
              "snake": "Wąż",
              "horse": "Koń",
              "goat": "Owca",
              "monkey": "Małpa",
              "rooster": "Kogut",
              "dog": "Pies",
              "pig": "Świnia"
            }
          }
        ]
      },
      {
        "title": "Relacje każdego z dwunastu zwierząt zodiaku",
        "blocks": [
          {
            "p": "Dla każdego zwierzęcia tabela wymienia, z którymi zwierzętami tworzy ono poszczególne relacje. Wymienione są tylko pary, które ta usługa uznaje za harmonie, więc zwierzę, którego nie ma w danym wierszu, nie ma z nim żadnej szczególnej relacji — jest **neutralne**."
          },
          {
            "table": {
              "caption": "Cztery rodzaje relacji widziane z perspektywy jednego zwierzęcia",
              "head": [
                "Twoje zwierzę",
                "Para przyciągająca (sześć harmonii)",
                "Połowa triady",
                "Cicha niezgoda (niezgoda)",
                "Czołowe zderzenie (zderzenie)"
              ],
              "rows": [
                [
                  "Szczur (子)",
                  "Wół",
                  "Małpa · Smok",
                  "Owca",
                  "Koń"
                ],
                [
                  "Wół (丑)",
                  "Szczur",
                  "Kogut",
                  "Koń",
                  "Owca"
                ],
                [
                  "Tygrys (寅)",
                  "Świnia",
                  "Koń",
                  "Kogut",
                  "Małpa"
                ],
                [
                  "Królik (卯)",
                  "Pies",
                  "Świnia · Owca",
                  "Małpa",
                  "Kogut"
                ],
                [
                  "Smok (辰)",
                  "Kogut",
                  "Szczur",
                  "Świnia",
                  "Pies"
                ],
                [
                  "Wąż (巳)",
                  "Małpa",
                  "Kogut",
                  "Pies",
                  "Świnia"
                ],
                [
                  "Koń (午)",
                  "Owca",
                  "Tygrys · Pies",
                  "Wół",
                  "Szczur"
                ],
                [
                  "Owca (未)",
                  "Koń",
                  "Królik",
                  "Szczur",
                  "Wół"
                ],
                [
                  "Małpa (申)",
                  "Wąż",
                  "Szczur",
                  "Królik",
                  "Tygrys"
                ],
                [
                  "Kogut (酉)",
                  "Smok",
                  "Wąż · Wół",
                  "Tygrys",
                  "Królik"
                ],
                [
                  "Pies (戌)",
                  "Królik",
                  "Koń",
                  "Wąż",
                  "Smok"
                ],
                [
                  "Świnia (亥)",
                  "Tygrys",
                  "Królik",
                  "Smok",
                  "Wąż"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gdy dwie osoby spotykają się w tabeli",
        "blocks": [
          {
            "p": "Czytanie tabeli polega na znalezieniu dwóch zwierząt w jednym wierszu. Oto kilka par jako przykłady."
          },
          {
            "ul": [
              "**Szczur i Wół** — sześć harmonii. Potrzeba do niej tylko dwóch znaków, więc jest to harmonia, która w zgodności pojawia się najczęściej, i to dobra.",
              "**Szczur i Smok** — połowa triady: dwa z trzech znaków 申子辰, w tym środkowy (子).",
              "**Szczur i Tygrys** — nie ma ich w tabeli, więc relacja neutralna: ani harmonia, ani zderzenie, tylko punkt wyjścia.",
              "**Szczur i Owca** — niezgoda. Na powierzchni wygląda spokojnie, ale uważa się, że rozbieżność trwa długo.",
              "**Tygrys i Małpa** — zderzenie. Leżą dokładnie naprzeciwko siebie i uchodzą za zderzające się czołowo."
            ]
          }
        ]
      },
      {
        "title": "Ile punktów dostaje każda relacja",
        "blocks": [
          {
            "table": {
              "caption": "Od najwyższej. To wartości, których Inyeon-Link faktycznie używa.",
              "head": [
                "Relacja",
                "Wynik"
              ],
              "rows": [
                [
                  "Sześć harmonii",
                  "{scoreYukhap}"
                ],
                [
                  "Połowa triady",
                  "{scoreBanhap}"
                ],
                [
                  "Ta sama gałąź",
                  "{scoreSame}"
                ],
                [
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Niezgoda",
                  "{scoreWonjin}"
                ],
                [
                  "Zderzenie",
                  "{scoreChung}"
                ]
              ]
            }
          },
          {
            "p": "Ta sama gałąź (dwie osoby urodzone w znaku tego samego zwierzęcia) oznacza podobieństwo, a nie przyciąganie, dlatego plasuje się tuż nad neutralną. Niezależnie od tego, czy chodzi o zgodność zodiakalną, czy gałęzi dnia, wartość z tej tabeli trafia bezpośrednio do wyniku końcowego."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dlaczego pełnych triad nie ma w tabeli",
        "blocks": [
          {
            "p": "Pełna triada (申子辰, 巳酉丑, 寅午戌, 亥卯未) wymaga wszystkich trzech znaków. Zestawienie dwóch osób daje tylko dwa, więc pełna triada nie może wystąpić w zgodności i pojawiają się wyłącznie połowy triad. Wynik pełnej triady równy {scoreSamhap} jest zachowany na przypadek, gdy trzy znaki zbiegają się w jednej własnej tabeli osoby."
          }
        ]
      },
      {
        "title": "申辰, 巳丑, 寅戌 i 亥未 nie są liczone jako harmonie",
        "blocks": [
          {
            "p": "Niektóre metody liczą jako połowę triady dowolne dwa znaki z tej samej grupy triady. Inyeon-Link tego nie robi: jak pokazuje powyższa kolumna połowy triady, akceptuje tylko pary zawierające **gałąź królewską** w środku grupy (子, 午, 卯, 酉). Para bez niej nie ma centrum, wokół którego mogłaby się zebrać formacja, więc jest traktowana jako neutralna."
          }
        ]
      },
      {
        "title": "Niezgoda i zderzenie nie leżą na dnie",
        "blocks": [
          {
            "p": "Gdyby liczono tylko harmonie i zderzenia, wszystkie sześć par niezgody zostałoby pogrzebanych w neutralności. Dlatego niezgoda ma własne miejsce: wyżej niż czołowe zderzenie i niżej niż neutralność, na poziomie {scoreWonjin} punktów."
          },
          {
            "p": "Nawet zderzenie zachowuje {scoreChung} punktów. W tradycyjnym myeongri zderzenie jest kolizją, a nie końcem relacji. Wartość bliska zeru oznaczałaby, że usługa wydaje wyrok o dwóch osobach, dlatego zakres jest na tyle szeroki, by pokazywać różnicę, nie wydając wyroku."
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
            "p": "Obliczenie zgodności zodiakalnej jest proste. Porównuje gałęzie roku dwóch osób, aby określić, czy relacja jest harmonią, zderzeniem czy cichą niezgodą, i używa tego wyniku tak, jak jest. Ponieważ jest tylko jeden element, nie ma potrzeby przydzielania wag."
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
              "**To najbardziej intuicyjnie zrozumiały element**. Nawet bez znajomości słownictwa tradycji, 'tygrys i małpa się zderzają' ma sens.",
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
  "guide/zodiac-rat": {
    "eyebrow": "Według zwierzęcia",
    "title": "Jak Szczur spotyka dwanaście zwierząt zodiaku",
    "summary": "Jaką relację ma Szczur (子) z każdym z dwunastu zwierząt zodiaku, ile punktów daje każda z tych relacji i jaką część końcowego wskaźnika dopasowania zajmuje ten wynik — przedstawione dokładnie tak, jak w zasadach obliczeń Inyeon-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Szczur to pierwsza z dwunastu gałęzi",
        "blocks": [
          {
            "p": "Szczur to osoba, której gałąź roku urodzenia to **子**. 子 to pierwsza z dwunastu gałęzi ziemskich, a gdy dwanaście znaków ustawi się w kole, leży dokładnie naprzeciwko 午 (Konia)."
          },
          {
            "p": "Wiersz, który wynik zgodności pokazuje dla osoby spod znaku Szczura, brzmi: \"Szybko zauważa i szybko zabezpiecza to, co ważne. Pierwszy rusza w kryzysie.\" Ten wiersz nie ma nic wspólnego z wynikami relacji i nie wpływa na wyniki poniżej."
          }
        ]
      },
      {
        "title": "Dwanaście zwierząt zodiaku w skrócie",
        "blocks": [
          {
            "p": "Każde z pozostałych zwierząt jest po kolei zestawiane ze Szczurem. Jako relacje zapisane są tylko pary, które ta usługa uznaje za harmonie; cała reszta jest neutralna."
          },
          {
            "table": {
              "caption": "Szczur i dwanaście zwierząt zodiaku",
              "head": [
                "Inne zwierzę",
                "Relacja",
                "Wynik"
              ],
              "rows": [
                [
                  "Szczur (子)",
                  "Ta sama gałąź",
                  "{scoreSame}"
                ],
                [
                  "Wół (丑)",
                  "Sześć harmonii",
                  "{scoreYukhap}"
                ],
                [
                  "Tygrys (寅)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Królik (卯)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Smok (辰)",
                  "Połowa triady",
                  "{scoreBanhap}"
                ],
                [
                  "Wąż (巳)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Koń (午)",
                  "Zderzenie",
                  "{scoreChung}"
                ],
                [
                  "Owca (未)",
                  "Niezgoda",
                  "{scoreWonjin}"
                ],
                [
                  "Małpa (申)",
                  "Połowa triady",
                  "{scoreBanhap}"
                ],
                [
                  "Kogut (酉)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Pies (戌)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Świnia (亥)",
                  "Neutralna",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Wół — para przyciągająca (sześć harmonii)",
        "blocks": [
          {
            "p": "子 i 丑 tworzą harmonię zaledwie dwoma znakami. Sześć harmonii to dobra relacja, która w zgodności pojawia się najczęściej, a Szczur i Wół uzyskują {scoreYukhap} — to najwyższy wynik, jaki może uzyskać Szczur."
          }
        ]
      },
      {
        "title": "Smok i Małpa — połowa triady zawierająca gałąź królewską",
        "blocks": [
          {
            "p": "申子辰 to jedna grupa triady (grupa wody), a 子 jest **gałęzią królewską** w jej środku. Inyeon-Link przyjmuje wyłącznie pary zawierające gałąź królewską, dlatego Szczur tworzy połowę triady ({scoreBanhap}) zarówno ze Smokiem, jak i z Małpą."
          },
          {
            "p": "**Małpa i Smok razem** natomiast nie mają środkowego znaku 子, więc nie są liczone jako harmonia i są traktowane jako neutralne. Nawet w obrębie jednej grupy triady to Szczur tworzy połowę triady."
          }
        ]
      },
      {
        "title": "Koń — czołowe zderzenie (zderzenie)",
        "blocks": [
          {
            "p": "子 i 午 leżą w kole dokładnie naprzeciwko siebie. Ta usługa zachowuje {scoreChung} punktów nawet przy zderzeniu. W tradycyjnym myeongri zderzenie jest kolizją, a nie końcem relacji, a przyznanie wyniku bliskiego dna oznaczałoby wydanie wyroku na dwie osoby. Mimo to jest to najniższy wynik, jaki może otrzymać Szczur."
          }
        ]
      },
      {
        "title": "Owca — cicha niezgoda (niezgoda)",
        "blocks": [
          {
            "p": "子 i 未 leżą tuż obok 午 (Konia), pozycji zderzenia, i tradycyjnie uważa się je za parę, która żywi do siebie urazę, a mimo to nie potrafi się rozstać. Na powierzchni wygląda to spokojnie, ale uważa się, że rozbieżność trwa długo, więc dostaje {scoreWonjin} — więcej niż zderzenie ({scoreChung}) i mniej niż neutralna ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Pozostałe 6 zwierząt oraz Szczur z innym Szczurem",
        "blocks": [
          {
            "p": "Tygrys, Królik, Wąż, Kogut, Pies i Świnia nie tworzą ze Szczurem ani harmonii, ani zderzenia, ani niezgody: są **neutralne** i uzyskują {scoreNeutral}. To punkt odniesienia, ani dobry, ani zły."
          },
          {
            "p": "Dwie osoby spod znaku Szczura uzyskują {scoreSame}. Oznacza to, że są do siebie podobne, a nie że się przyciągają, dlatego wynik plasuje się tuż nad neutralnym."
          }
        ]
      },
      {
        "title": "Jaką część końcowego wskaźnika dopasowania zajmuje ten wynik",
        "blocks": [
          {
            "p": "Są dwa miejsca, w których gałęzie dwóch osób zestawia się obok siebie."
          },
          {
            "ul": [
              "**Zgodność zodiakalna** patrzy na gałąź roku urodzenia. Stanowi {weightZodiac} końcowego wskaźnika dopasowania.",
              "**Zgodność gałęzi dnia** patrzy na gałąź dnia urodzenia. Stanowi {weightDayBranch} zgodności saju ({weightSaju}), czyli {weightDayBranchTotal} końcowego wskaźnika dopasowania."
            ]
          },
          {
            "p": "Na przykład gdy osoba spod znaku Szczura spotyka osobę spod znaku Konia, zgodność zodiakalna daje zderzenie. Jeśli wszystko inne jest takie samo, końcowy wskaźnik dopasowania wypada o {swingZodiacChung} punktów niżej niż przy parze neutralnej. Z osobą spod znaku Wołu jest to sześć harmonii, a wskaźnik wypada o {swingZodiacYukhap} punktów wyżej."
          },
          {
            "p": "Gałąź roku i gałąź dnia mogą się różnić. Dwie osoby spod znaku Szczura, których gałęzie dnia to 子 i 午, otrzymują w zgodności zodiakalnej tę samą gałąź ({scoreSame}), a w zgodności gałęzi dnia zderzenie ({scoreChung})."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten przewodnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedno zwierzę nie rozstrzyga o relacji między dwiema osobami. {weightSaju} końcowego wskaźnika dopasowania wynika ze zgodności saju.",
              "Powyższe zmiany punktów zakładają, że wszystko inne jest takie samo; rzeczywisty wynik zależy od całego saju obu osób.",
              "Pełna tabela tego, ile punktów daje każda relacja, znajduje się w [tabeli dwunastu gałęzi](/guide/branches), a wyjaśnienie, dlaczego zodiak odczytuje się z gałęzi roku, w [Dlaczego zgodność zodiakalna uwzględnia gałąź roku](/guide/zodiac)."
            ]
          },
          {
            "p": "Pozostałe zwierzęta są przedstawione w ten sam sposób. [Wół](/guide/zodiac-ox) · [Tygrys](/guide/zodiac-tiger) · [Królik](/guide/zodiac-rabbit) · [Smok](/guide/zodiac-dragon) · [Wąż](/guide/zodiac-snake) · [Koń](/guide/zodiac-horse) · [Owca](/guide/zodiac-goat) · [Małpa](/guide/zodiac-monkey) · [Kogut](/guide/zodiac-rooster) · [Pies](/guide/zodiac-dog) · [Świnia](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-ox": {
    "eyebrow": "Według zwierzęcia",
    "title": "Jak Wół spotyka dwanaście zwierząt zodiaku",
    "summary": "Jaką relację ma Wół (丑) z każdym z dwunastu zwierząt zodiaku, ile punktów daje każda z tych relacji i jaką część końcowego wskaźnika dopasowania zajmuje ten wynik — przedstawione dokładnie tak, jak w zasadach obliczeń Inyeon-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Wół to druga z dwunastu gałęzi",
        "blocks": [
          {
            "p": "Wół to osoba, której gałąź roku urodzenia to **丑**. 丑 to druga z dwunastu gałęzi ziemskich, a gdy dwanaście znaków ustawi się w kole, leży dokładnie naprzeciwko 未 (Owcy)."
          },
          {
            "p": "Wiersz, który wynik zgodności pokazuje dla osoby spod znaku Wołu, brzmi: \"Z pozoru powolny, ale doprowadza rzeczy do końca. Czego się podejmie, tego nie porzuca.\" Ten wiersz nie ma nic wspólnego z wynikami relacji i nie wpływa na wyniki poniżej."
          }
        ]
      },
      {
        "title": "Dwanaście zwierząt zodiaku w skrócie",
        "blocks": [
          {
            "p": "Każde z pozostałych zwierząt jest po kolei zestawiane z Wołem. Jako relacje zapisane są tylko pary, które ta usługa uznaje za harmonie; cała reszta jest neutralna."
          },
          {
            "table": {
              "caption": "Wół i dwanaście zwierząt zodiaku",
              "head": [
                "Inne zwierzę",
                "Relacja",
                "Wynik"
              ],
              "rows": [
                [
                  "Szczur (子)",
                  "Sześć harmonii",
                  "{scoreYukhap}"
                ],
                [
                  "Wół (丑)",
                  "Ta sama gałąź",
                  "{scoreSame}"
                ],
                [
                  "Tygrys (寅)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Królik (卯)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Smok (辰)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Wąż (巳)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Koń (午)",
                  "Niezgoda",
                  "{scoreWonjin}"
                ],
                [
                  "Owca (未)",
                  "Zderzenie",
                  "{scoreChung}"
                ],
                [
                  "Małpa (申)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Kogut (酉)",
                  "Połowa triady",
                  "{scoreBanhap}"
                ],
                [
                  "Pies (戌)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Świnia (亥)",
                  "Neutralna",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Szczur — para przyciągająca (sześć harmonii)",
        "blocks": [
          {
            "p": "丑 i 子 tworzą harmonię zaledwie dwoma znakami. Sześć harmonii to dobra relacja, która w zgodności pojawia się najczęściej, a Wół i Szczur uzyskują {scoreYukhap} — to najwyższy wynik, jaki może uzyskać Wół."
          }
        ]
      },
      {
        "title": "Kogut — połowa triady zawierająca gałąź królewską",
        "blocks": [
          {
            "p": "巳酉丑 to jedna grupa triady (grupa metalu), a 酉 jest **gałęzią królewską** w jej środku. Inyeon-Link przyjmuje wyłącznie pary zawierające gałąź królewską, dlatego Wół tworzy połowę triady ({scoreBanhap}) tylko z Kogutem."
          },
          {
            "p": "W parze z Wężem (巳) z tej samej grupy brakuje środkowego znaku 酉, więc para nie jest liczona jako harmonia i jest traktowana jako neutralna ({scoreNeutral}). Przynależność do tej samej grupy nie sprawia, że każda para jest harmonią."
          }
        ]
      },
      {
        "title": "Owca — czołowe zderzenie (zderzenie)",
        "blocks": [
          {
            "p": "丑 i 未 leżą w kole dokładnie naprzeciwko siebie. Ta usługa zachowuje {scoreChung} punktów nawet przy zderzeniu. W tradycyjnym myeongri zderzenie jest kolizją, a nie końcem relacji, a przyznanie wyniku bliskiego dna oznaczałoby wydanie wyroku na dwie osoby. Mimo to jest to najniższy wynik, jaki może otrzymać Wół."
          }
        ]
      },
      {
        "title": "Koń — cicha niezgoda (niezgoda)",
        "blocks": [
          {
            "p": "丑 i 午 leżą tuż obok 未 (Owcy), pozycji zderzenia, i tradycyjnie uważa się je za parę, która żywi do siebie urazę, a mimo to nie potrafi się rozstać. Na powierzchni wygląda to spokojnie, ale uważa się, że rozbieżność trwa długo, więc dostaje {scoreWonjin} — więcej niż zderzenie ({scoreChung}) i mniej niż neutralna ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Pozostałe 7 zwierząt oraz Wół z innym Wołem",
        "blocks": [
          {
            "p": "Tygrys, Królik, Smok, Wąż, Małpa, Pies i Świnia nie tworzą z Wołem ani harmonii, ani zderzenia, ani niezgody: są **neutralne** i uzyskują {scoreNeutral}. To punkt odniesienia, ani dobry, ani zły."
          },
          {
            "p": "Dwie osoby spod znaku Wołu uzyskują {scoreSame}. Oznacza to, że są do siebie podobne, a nie że się przyciągają, dlatego wynik plasuje się tuż nad neutralnym."
          }
        ]
      },
      {
        "title": "Jaką część końcowego wskaźnika dopasowania zajmuje ten wynik",
        "blocks": [
          {
            "p": "Są dwa miejsca, w których gałęzie dwóch osób zestawia się obok siebie."
          },
          {
            "ul": [
              "**Zgodność zodiakalna** patrzy na gałąź roku urodzenia. Stanowi {weightZodiac} końcowego wskaźnika dopasowania.",
              "**Zgodność gałęzi dnia** patrzy na gałąź dnia urodzenia. Stanowi {weightDayBranch} zgodności saju ({weightSaju}), czyli {weightDayBranchTotal} końcowego wskaźnika dopasowania."
            ]
          },
          {
            "p": "Na przykład gdy osoba spod znaku Wołu spotyka osobę spod znaku Owcy, zgodność zodiakalna daje zderzenie. Jeśli wszystko inne jest takie samo, końcowy wskaźnik dopasowania wypada o {swingZodiacChung} punktów niżej niż przy parze neutralnej. Z osobą spod znaku Szczura jest to sześć harmonii, a wskaźnik wypada o {swingZodiacYukhap} punktów wyżej."
          },
          {
            "p": "Gałąź roku i gałąź dnia mogą się różnić. Dwie osoby spod znaku Wołu, których gałęzie dnia to 丑 i 未, otrzymują w zgodności zodiakalnej tę samą gałąź ({scoreSame}), a w zgodności gałęzi dnia zderzenie ({scoreChung})."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten przewodnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedno zwierzę nie rozstrzyga o relacji między dwiema osobami. {weightSaju} końcowego wskaźnika dopasowania wynika ze zgodności saju.",
              "Powyższe zmiany punktów zakładają, że wszystko inne jest takie samo; rzeczywisty wynik zależy od całego saju obu osób.",
              "Pełna tabela tego, ile punktów daje każda relacja, znajduje się w [tabeli dwunastu gałęzi](/guide/branches), a wyjaśnienie, dlaczego zodiak odczytuje się z gałęzi roku, w [Dlaczego zgodność zodiakalna uwzględnia gałąź roku](/guide/zodiac)."
            ]
          },
          {
            "p": "Pozostałe zwierzęta są przedstawione w ten sam sposób. [Szczur](/guide/zodiac-rat) · [Tygrys](/guide/zodiac-tiger) · [Królik](/guide/zodiac-rabbit) · [Smok](/guide/zodiac-dragon) · [Wąż](/guide/zodiac-snake) · [Koń](/guide/zodiac-horse) · [Owca](/guide/zodiac-goat) · [Małpa](/guide/zodiac-monkey) · [Kogut](/guide/zodiac-rooster) · [Pies](/guide/zodiac-dog) · [Świnia](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-tiger": {
    "eyebrow": "Według zwierzęcia",
    "title": "Jak Tygrys spotyka dwanaście zwierząt zodiaku",
    "summary": "Jaką relację ma Tygrys (寅) z każdym z dwunastu zwierząt zodiaku, ile punktów daje każda z tych relacji i jaką część końcowego wskaźnika dopasowania zajmuje ten wynik — przedstawione dokładnie tak, jak w zasadach obliczeń Inyeon-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Tygrys to trzecia z dwunastu gałęzi",
        "blocks": [
          {
            "p": "Tygrys to osoba, której gałąź roku urodzenia to **寅**. 寅 to trzecia z dwunastu gałęzi ziemskich, a gdy dwanaście znaków ustawi się w kole, leży dokładnie naprzeciwko 申 (Małpy)."
          },
          {
            "p": "Wiersz, który wynik zgodności pokazuje dla osoby spod znaku Tygrysa, brzmi: \"Nieustraszony i zawsze z przodu. Nie przejdzie obojętnie obok niesprawiedliwości.\" Ten wiersz nie ma nic wspólnego z wynikami relacji i nie wpływa na wyniki poniżej."
          }
        ]
      },
      {
        "title": "Dwanaście zwierząt zodiaku w skrócie",
        "blocks": [
          {
            "p": "Każde z pozostałych zwierząt jest po kolei zestawiane z Tygrysem. Jako relacje zapisane są tylko pary, które ta usługa uznaje za harmonie; cała reszta jest neutralna."
          },
          {
            "table": {
              "caption": "Tygrys i dwanaście zwierząt zodiaku",
              "head": [
                "Inne zwierzę",
                "Relacja",
                "Wynik"
              ],
              "rows": [
                [
                  "Szczur (子)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Wół (丑)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Tygrys (寅)",
                  "Ta sama gałąź",
                  "{scoreSame}"
                ],
                [
                  "Królik (卯)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Smok (辰)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Wąż (巳)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Koń (午)",
                  "Połowa triady",
                  "{scoreBanhap}"
                ],
                [
                  "Owca (未)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Małpa (申)",
                  "Zderzenie",
                  "{scoreChung}"
                ],
                [
                  "Kogut (酉)",
                  "Niezgoda",
                  "{scoreWonjin}"
                ],
                [
                  "Pies (戌)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Świnia (亥)",
                  "Sześć harmonii",
                  "{scoreYukhap}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Świnia — para przyciągająca (sześć harmonii)",
        "blocks": [
          {
            "p": "寅 i 亥 tworzą harmonię zaledwie dwoma znakami. Sześć harmonii to dobra relacja, która w zgodności pojawia się najczęściej, a Tygrys i Świnia uzyskują {scoreYukhap} — to najwyższy wynik, jaki może uzyskać Tygrys."
          }
        ]
      },
      {
        "title": "Koń — połowa triady zawierająca gałąź królewską",
        "blocks": [
          {
            "p": "寅午戌 to jedna grupa triady (grupa ognia), a 午 jest **gałęzią królewską** w jej środku. Inyeon-Link przyjmuje wyłącznie pary zawierające gałąź królewską, dlatego Tygrys tworzy połowę triady ({scoreBanhap}) tylko z Koniem."
          },
          {
            "p": "W parze z Psem (戌) z tej samej grupy brakuje środkowego znaku 午, więc para nie jest liczona jako harmonia i jest traktowana jako neutralna ({scoreNeutral}). Przynależność do tej samej grupy nie sprawia, że każda para jest harmonią."
          }
        ]
      },
      {
        "title": "Małpa — czołowe zderzenie (zderzenie)",
        "blocks": [
          {
            "p": "寅 i 申 leżą w kole dokładnie naprzeciwko siebie. Ta usługa zachowuje {scoreChung} punktów nawet przy zderzeniu. W tradycyjnym myeongri zderzenie jest kolizją, a nie końcem relacji, a przyznanie wyniku bliskiego dna oznaczałoby wydanie wyroku na dwie osoby. Mimo to jest to najniższy wynik, jaki może otrzymać Tygrys."
          }
        ]
      },
      {
        "title": "Kogut — cicha niezgoda (niezgoda)",
        "blocks": [
          {
            "p": "寅 i 酉 leżą tuż obok 申 (Małpy), pozycji zderzenia, i tradycyjnie uważa się je za parę, która żywi do siebie urazę, a mimo to nie potrafi się rozstać. Na powierzchni wygląda to spokojnie, ale uważa się, że rozbieżność trwa długo, więc dostaje {scoreWonjin} — więcej niż zderzenie ({scoreChung}) i mniej niż neutralna ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Pozostałe 7 zwierząt oraz Tygrys z innym Tygrysem",
        "blocks": [
          {
            "p": "Szczur, Wół, Królik, Smok, Wąż, Owca i Pies nie tworzą z Tygrysem ani harmonii, ani zderzenia, ani niezgody: są **neutralne** i uzyskują {scoreNeutral}. To punkt odniesienia, ani dobry, ani zły."
          },
          {
            "p": "Dwie osoby spod znaku Tygrysa uzyskują {scoreSame}. Oznacza to, że są do siebie podobne, a nie że się przyciągają, dlatego wynik plasuje się tuż nad neutralnym."
          }
        ]
      },
      {
        "title": "Jaką część końcowego wskaźnika dopasowania zajmuje ten wynik",
        "blocks": [
          {
            "p": "Są dwa miejsca, w których gałęzie dwóch osób zestawia się obok siebie."
          },
          {
            "ul": [
              "**Zgodność zodiakalna** patrzy na gałąź roku urodzenia. Stanowi {weightZodiac} końcowego wskaźnika dopasowania.",
              "**Zgodność gałęzi dnia** patrzy na gałąź dnia urodzenia. Stanowi {weightDayBranch} zgodności saju ({weightSaju}), czyli {weightDayBranchTotal} końcowego wskaźnika dopasowania."
            ]
          },
          {
            "p": "Na przykład gdy osoba spod znaku Tygrysa spotyka osobę spod znaku Małpy, zgodność zodiakalna daje zderzenie. Jeśli wszystko inne jest takie samo, końcowy wskaźnik dopasowania wypada o {swingZodiacChung} punktów niżej niż przy parze neutralnej. Z osobą spod znaku Świni jest to sześć harmonii, a wskaźnik wypada o {swingZodiacYukhap} punktów wyżej."
          },
          {
            "p": "Gałąź roku i gałąź dnia mogą się różnić. Dwie osoby spod znaku Tygrysa, których gałęzie dnia to 寅 i 申, otrzymują w zgodności zodiakalnej tę samą gałąź ({scoreSame}), a w zgodności gałęzi dnia zderzenie ({scoreChung})."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten przewodnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedno zwierzę nie rozstrzyga o relacji między dwiema osobami. {weightSaju} końcowego wskaźnika dopasowania wynika ze zgodności saju.",
              "Powyższe zmiany punktów zakładają, że wszystko inne jest takie samo; rzeczywisty wynik zależy od całego saju obu osób.",
              "Pełna tabela tego, ile punktów daje każda relacja, znajduje się w [tabeli dwunastu gałęzi](/guide/branches), a wyjaśnienie, dlaczego zodiak odczytuje się z gałęzi roku, w [Dlaczego zgodność zodiakalna uwzględnia gałąź roku](/guide/zodiac)."
            ]
          },
          {
            "p": "Pozostałe zwierzęta są przedstawione w ten sam sposób. [Szczur](/guide/zodiac-rat) · [Wół](/guide/zodiac-ox) · [Królik](/guide/zodiac-rabbit) · [Smok](/guide/zodiac-dragon) · [Wąż](/guide/zodiac-snake) · [Koń](/guide/zodiac-horse) · [Owca](/guide/zodiac-goat) · [Małpa](/guide/zodiac-monkey) · [Kogut](/guide/zodiac-rooster) · [Pies](/guide/zodiac-dog) · [Świnia](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-rabbit": {
    "eyebrow": "Według zwierzęcia",
    "title": "Jak Królik spotyka dwanaście zwierząt zodiaku",
    "summary": "Jaką relację ma Królik (卯) z każdym z dwunastu zwierząt zodiaku, ile punktów daje każda z tych relacji i jaką część końcowego wskaźnika dopasowania zajmuje ten wynik — przedstawione dokładnie tak, jak w zasadach obliczeń Inyeon-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Królik to czwarta z dwunastu gałęzi",
        "blocks": [
          {
            "p": "Królik to osoba, której gałąź roku urodzenia to **卯**. 卯 to czwarta z dwunastu gałęzi ziemskich, a gdy dwanaście znaków ustawi się w kole, leży dokładnie naprzeciwko 酉 (Koguta)."
          },
          {
            "p": "Wiersz, który wynik zgodności pokazuje dla osoby spod znaku Królika, brzmi: \"Łagodny i spostrzegawczy. Umie obejść, zamiast zderzyć się czołowo.\" Ten wiersz nie ma nic wspólnego z wynikami relacji i nie wpływa na wyniki poniżej."
          }
        ]
      },
      {
        "title": "Dwanaście zwierząt zodiaku w skrócie",
        "blocks": [
          {
            "p": "Każde z pozostałych zwierząt jest po kolei zestawiane z Królikiem. Jako relacje zapisane są tylko pary, które ta usługa uznaje za harmonie; cała reszta jest neutralna."
          },
          {
            "table": {
              "caption": "Królik i dwanaście zwierząt zodiaku",
              "head": [
                "Inne zwierzę",
                "Relacja",
                "Wynik"
              ],
              "rows": [
                [
                  "Szczur (子)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Wół (丑)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Tygrys (寅)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Królik (卯)",
                  "Ta sama gałąź",
                  "{scoreSame}"
                ],
                [
                  "Smok (辰)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Wąż (巳)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Koń (午)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Owca (未)",
                  "Połowa triady",
                  "{scoreBanhap}"
                ],
                [
                  "Małpa (申)",
                  "Niezgoda",
                  "{scoreWonjin}"
                ],
                [
                  "Kogut (酉)",
                  "Zderzenie",
                  "{scoreChung}"
                ],
                [
                  "Pies (戌)",
                  "Sześć harmonii",
                  "{scoreYukhap}"
                ],
                [
                  "Świnia (亥)",
                  "Połowa triady",
                  "{scoreBanhap}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pies — para przyciągająca (sześć harmonii)",
        "blocks": [
          {
            "p": "卯 i 戌 tworzą harmonię zaledwie dwoma znakami. Sześć harmonii to dobra relacja, która w zgodności pojawia się najczęściej, a Królik i Pies uzyskują {scoreYukhap} — to najwyższy wynik, jaki może uzyskać Królik."
          }
        ]
      },
      {
        "title": "Owca i Świnia — połowa triady zawierająca gałąź królewską",
        "blocks": [
          {
            "p": "亥卯未 to jedna grupa triady (grupa drewna), a 卯 jest **gałęzią królewską** w jej środku. Inyeon-Link przyjmuje wyłącznie pary zawierające gałąź królewską, dlatego Królik tworzy połowę triady ({scoreBanhap}) zarówno z Owcą, jak i ze Świnią."
          },
          {
            "p": "**Świnia i Owca razem** natomiast nie mają środkowego znaku 卯, więc nie są liczone jako harmonia i są traktowane jako neutralne. Nawet w obrębie jednej grupy triady to Królik tworzy połowę triady."
          }
        ]
      },
      {
        "title": "Kogut — czołowe zderzenie (zderzenie)",
        "blocks": [
          {
            "p": "卯 i 酉 leżą w kole dokładnie naprzeciwko siebie. Ta usługa zachowuje {scoreChung} punktów nawet przy zderzeniu. W tradycyjnym myeongri zderzenie jest kolizją, a nie końcem relacji, a przyznanie wyniku bliskiego dna oznaczałoby wydanie wyroku na dwie osoby. Mimo to jest to najniższy wynik, jaki może otrzymać Królik."
          }
        ]
      },
      {
        "title": "Małpa — cicha niezgoda (niezgoda)",
        "blocks": [
          {
            "p": "卯 i 申 leżą tuż obok 酉 (Koguta), pozycji zderzenia, i tradycyjnie uważa się je za parę, która żywi do siebie urazę, a mimo to nie potrafi się rozstać. Na powierzchni wygląda to spokojnie, ale uważa się, że rozbieżność trwa długo, więc dostaje {scoreWonjin} — więcej niż zderzenie ({scoreChung}) i mniej niż neutralna ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Pozostałe 6 zwierząt oraz Królik z innym Królikiem",
        "blocks": [
          {
            "p": "Szczur, Wół, Tygrys, Smok, Wąż i Koń nie tworzą z Królikiem ani harmonii, ani zderzenia, ani niezgody: są **neutralne** i uzyskują {scoreNeutral}. To punkt odniesienia, ani dobry, ani zły."
          },
          {
            "p": "Dwie osoby spod znaku Królika uzyskują {scoreSame}. Oznacza to, że są do siebie podobne, a nie że się przyciągają, dlatego wynik plasuje się tuż nad neutralnym."
          }
        ]
      },
      {
        "title": "Jaką część końcowego wskaźnika dopasowania zajmuje ten wynik",
        "blocks": [
          {
            "p": "Są dwa miejsca, w których gałęzie dwóch osób zestawia się obok siebie."
          },
          {
            "ul": [
              "**Zgodność zodiakalna** patrzy na gałąź roku urodzenia. Stanowi {weightZodiac} końcowego wskaźnika dopasowania.",
              "**Zgodność gałęzi dnia** patrzy na gałąź dnia urodzenia. Stanowi {weightDayBranch} zgodności saju ({weightSaju}), czyli {weightDayBranchTotal} końcowego wskaźnika dopasowania."
            ]
          },
          {
            "p": "Na przykład gdy osoba spod znaku Królika spotyka osobę spod znaku Koguta, zgodność zodiakalna daje zderzenie. Jeśli wszystko inne jest takie samo, końcowy wskaźnik dopasowania wypada o {swingZodiacChung} punktów niżej niż przy parze neutralnej. Z osobą spod znaku Psa jest to sześć harmonii, a wskaźnik wypada o {swingZodiacYukhap} punktów wyżej."
          },
          {
            "p": "Gałąź roku i gałąź dnia mogą się różnić. Dwie osoby spod znaku Królika, których gałęzie dnia to 卯 i 酉, otrzymują w zgodności zodiakalnej tę samą gałąź ({scoreSame}), a w zgodności gałęzi dnia zderzenie ({scoreChung})."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten przewodnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedno zwierzę nie rozstrzyga o relacji między dwiema osobami. {weightSaju} końcowego wskaźnika dopasowania wynika ze zgodności saju.",
              "Powyższe zmiany punktów zakładają, że wszystko inne jest takie samo; rzeczywisty wynik zależy od całego saju obu osób.",
              "Pełna tabela tego, ile punktów daje każda relacja, znajduje się w [tabeli dwunastu gałęzi](/guide/branches), a wyjaśnienie, dlaczego zodiak odczytuje się z gałęzi roku, w [Dlaczego zgodność zodiakalna uwzględnia gałąź roku](/guide/zodiac)."
            ]
          },
          {
            "p": "Pozostałe zwierzęta są przedstawione w ten sam sposób. [Szczur](/guide/zodiac-rat) · [Wół](/guide/zodiac-ox) · [Tygrys](/guide/zodiac-tiger) · [Smok](/guide/zodiac-dragon) · [Wąż](/guide/zodiac-snake) · [Koń](/guide/zodiac-horse) · [Owca](/guide/zodiac-goat) · [Małpa](/guide/zodiac-monkey) · [Kogut](/guide/zodiac-rooster) · [Pies](/guide/zodiac-dog) · [Świnia](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-dragon": {
    "eyebrow": "Według zwierzęcia",
    "title": "Jak Smok spotyka dwanaście zwierząt zodiaku",
    "summary": "Jaką relację ma Smok (辰) z każdym z dwunastu zwierząt zodiaku, ile punktów daje każda z tych relacji i jaką część końcowego wskaźnika dopasowania zajmuje ten wynik — przedstawione dokładnie tak, jak w zasadach obliczeń Inyeon-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Smok to piąta z dwunastu gałęzi",
        "blocks": [
          {
            "p": "Smok to osoba, której gałąź roku urodzenia to **辰**. 辰 to piąta z dwunastu gałęzi ziemskich, a gdy dwanaście znaków ustawi się w kole, leży dokładnie naprzeciwko 戌 (Psa)."
          },
          {
            "p": "Wiersz, który wynik zgodności pokazuje dla osoby spod znaku Smoka, brzmi: \"Wielkie serce i wysokie ideały. Rzadko zadowala się zwyczajnością.\" Ten wiersz nie ma nic wspólnego z wynikami relacji i nie wpływa na wyniki poniżej."
          }
        ]
      },
      {
        "title": "Dwanaście zwierząt zodiaku w skrócie",
        "blocks": [
          {
            "p": "Każde z pozostałych zwierząt jest po kolei zestawiane ze Smokiem. Jako relacje zapisane są tylko pary, które ta usługa uznaje za harmonie; cała reszta jest neutralna."
          },
          {
            "table": {
              "caption": "Smok i dwanaście zwierząt zodiaku",
              "head": [
                "Inne zwierzę",
                "Relacja",
                "Wynik"
              ],
              "rows": [
                [
                  "Szczur (子)",
                  "Połowa triady",
                  "{scoreBanhap}"
                ],
                [
                  "Wół (丑)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Tygrys (寅)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Królik (卯)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Smok (辰)",
                  "Ta sama gałąź",
                  "{scoreSame}"
                ],
                [
                  "Wąż (巳)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Koń (午)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Owca (未)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Małpa (申)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Kogut (酉)",
                  "Sześć harmonii",
                  "{scoreYukhap}"
                ],
                [
                  "Pies (戌)",
                  "Zderzenie",
                  "{scoreChung}"
                ],
                [
                  "Świnia (亥)",
                  "Niezgoda",
                  "{scoreWonjin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kogut — para przyciągająca (sześć harmonii)",
        "blocks": [
          {
            "p": "辰 i 酉 tworzą harmonię zaledwie dwoma znakami. Sześć harmonii to dobra relacja, która w zgodności pojawia się najczęściej, a Smok i Kogut uzyskują {scoreYukhap} — to najwyższy wynik, jaki może uzyskać Smok."
          }
        ]
      },
      {
        "title": "Szczur — połowa triady zawierająca gałąź królewską",
        "blocks": [
          {
            "p": "申子辰 to jedna grupa triady (grupa wody), a 子 jest **gałęzią królewską** w jej środku. Inyeon-Link przyjmuje wyłącznie pary zawierające gałąź królewską, dlatego Smok tworzy połowę triady ({scoreBanhap}) tylko ze Szczurem."
          },
          {
            "p": "W parze z Małpą (申) z tej samej grupy brakuje środkowego znaku 子, więc para nie jest liczona jako harmonia i jest traktowana jako neutralna ({scoreNeutral}). Przynależność do tej samej grupy nie sprawia, że każda para jest harmonią."
          }
        ]
      },
      {
        "title": "Pies — czołowe zderzenie (zderzenie)",
        "blocks": [
          {
            "p": "辰 i 戌 leżą w kole dokładnie naprzeciwko siebie. Ta usługa zachowuje {scoreChung} punktów nawet przy zderzeniu. W tradycyjnym myeongri zderzenie jest kolizją, a nie końcem relacji, a przyznanie wyniku bliskiego dna oznaczałoby wydanie wyroku na dwie osoby. Mimo to jest to najniższy wynik, jaki może otrzymać Smok."
          }
        ]
      },
      {
        "title": "Świnia — cicha niezgoda (niezgoda)",
        "blocks": [
          {
            "p": "辰 i 亥 leżą tuż obok 戌 (Psa), pozycji zderzenia, i tradycyjnie uważa się je za parę, która żywi do siebie urazę, a mimo to nie potrafi się rozstać. Na powierzchni wygląda to spokojnie, ale uważa się, że rozbieżność trwa długo, więc dostaje {scoreWonjin} — więcej niż zderzenie ({scoreChung}) i mniej niż neutralna ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Pozostałe 7 zwierząt oraz Smok z innym Smokiem",
        "blocks": [
          {
            "p": "Wół, Tygrys, Królik, Wąż, Koń, Owca i Małpa nie tworzą ze Smokiem ani harmonii, ani zderzenia, ani niezgody: są **neutralne** i uzyskują {scoreNeutral}. To punkt odniesienia, ani dobry, ani zły."
          },
          {
            "p": "Dwie osoby spod znaku Smoka uzyskują {scoreSame}. Oznacza to, że są do siebie podobne, a nie że się przyciągają, dlatego wynik plasuje się tuż nad neutralnym."
          }
        ]
      },
      {
        "title": "Jaką część końcowego wskaźnika dopasowania zajmuje ten wynik",
        "blocks": [
          {
            "p": "Są dwa miejsca, w których gałęzie dwóch osób zestawia się obok siebie."
          },
          {
            "ul": [
              "**Zgodność zodiakalna** patrzy na gałąź roku urodzenia. Stanowi {weightZodiac} końcowego wskaźnika dopasowania.",
              "**Zgodność gałęzi dnia** patrzy na gałąź dnia urodzenia. Stanowi {weightDayBranch} zgodności saju ({weightSaju}), czyli {weightDayBranchTotal} końcowego wskaźnika dopasowania."
            ]
          },
          {
            "p": "Na przykład gdy osoba spod znaku Smoka spotyka osobę spod znaku Psa, zgodność zodiakalna daje zderzenie. Jeśli wszystko inne jest takie samo, końcowy wskaźnik dopasowania wypada o {swingZodiacChung} punktów niżej niż przy parze neutralnej. Z osobą spod znaku Koguta jest to sześć harmonii, a wskaźnik wypada o {swingZodiacYukhap} punktów wyżej."
          },
          {
            "p": "Gałąź roku i gałąź dnia mogą się różnić. Dwie osoby spod znaku Smoka, których gałęzie dnia to 辰 i 戌, otrzymują w zgodności zodiakalnej tę samą gałąź ({scoreSame}), a w zgodności gałęzi dnia zderzenie ({scoreChung})."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten przewodnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedno zwierzę nie rozstrzyga o relacji między dwiema osobami. {weightSaju} końcowego wskaźnika dopasowania wynika ze zgodności saju.",
              "Powyższe zmiany punktów zakładają, że wszystko inne jest takie samo; rzeczywisty wynik zależy od całego saju obu osób.",
              "Pełna tabela tego, ile punktów daje każda relacja, znajduje się w [tabeli dwunastu gałęzi](/guide/branches), a wyjaśnienie, dlaczego zodiak odczytuje się z gałęzi roku, w [Dlaczego zgodność zodiakalna uwzględnia gałąź roku](/guide/zodiac)."
            ]
          },
          {
            "p": "Pozostałe zwierzęta są przedstawione w ten sam sposób. [Szczur](/guide/zodiac-rat) · [Wół](/guide/zodiac-ox) · [Tygrys](/guide/zodiac-tiger) · [Królik](/guide/zodiac-rabbit) · [Wąż](/guide/zodiac-snake) · [Koń](/guide/zodiac-horse) · [Owca](/guide/zodiac-goat) · [Małpa](/guide/zodiac-monkey) · [Kogut](/guide/zodiac-rooster) · [Pies](/guide/zodiac-dog) · [Świnia](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-snake": {
    "eyebrow": "Według zwierzęcia",
    "title": "Jak Wąż spotyka dwanaście zwierząt zodiaku",
    "summary": "Jaką relację ma Wąż (巳) z każdym z dwunastu zwierząt zodiaku, ile punktów daje każda z tych relacji i jaką część końcowego wskaźnika dopasowania zajmuje ten wynik — przedstawione dokładnie tak, jak w zasadach obliczeń Inyeon-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Wąż to szósta z dwunastu gałęzi",
        "blocks": [
          {
            "p": "Wąż to osoba, której gałąź roku urodzenia to **巳**. 巳 to szósta z dwunastu gałęzi ziemskich, a gdy dwanaście znaków ustawi się w kole, leży dokładnie naprzeciwko 亥 (Świni)."
          },
          {
            "p": "Wiersz, który wynik zgodności pokazuje dla osoby spod znaku Węża, brzmi: \"Zachowuje zdanie dla siebie i myśli głęboko. Ocenia trafnie.\" Ten wiersz nie ma nic wspólnego z wynikami relacji i nie wpływa na wyniki poniżej."
          }
        ]
      },
      {
        "title": "Dwanaście zwierząt zodiaku w skrócie",
        "blocks": [
          {
            "p": "Każde z pozostałych zwierząt jest po kolei zestawiane z Wężem. Jako relacje zapisane są tylko pary, które ta usługa uznaje za harmonie; cała reszta jest neutralna."
          },
          {
            "table": {
              "caption": "Wąż i dwanaście zwierząt zodiaku",
              "head": [
                "Inne zwierzę",
                "Relacja",
                "Wynik"
              ],
              "rows": [
                [
                  "Szczur (子)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Wół (丑)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Tygrys (寅)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Królik (卯)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Smok (辰)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Wąż (巳)",
                  "Ta sama gałąź",
                  "{scoreSame}"
                ],
                [
                  "Koń (午)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Owca (未)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Małpa (申)",
                  "Sześć harmonii",
                  "{scoreYukhap}"
                ],
                [
                  "Kogut (酉)",
                  "Połowa triady",
                  "{scoreBanhap}"
                ],
                [
                  "Pies (戌)",
                  "Niezgoda",
                  "{scoreWonjin}"
                ],
                [
                  "Świnia (亥)",
                  "Zderzenie",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Małpa — para przyciągająca (sześć harmonii)",
        "blocks": [
          {
            "p": "巳 i 申 tworzą harmonię zaledwie dwoma znakami. Sześć harmonii to dobra relacja, która w zgodności pojawia się najczęściej, a Wąż i Małpa uzyskują {scoreYukhap} — to najwyższy wynik, jaki może uzyskać Wąż."
          }
        ]
      },
      {
        "title": "Kogut — połowa triady zawierająca gałąź królewską",
        "blocks": [
          {
            "p": "巳酉丑 to jedna grupa triady (grupa metalu), a 酉 jest **gałęzią królewską** w jej środku. Inyeon-Link przyjmuje wyłącznie pary zawierające gałąź królewską, dlatego Wąż tworzy połowę triady ({scoreBanhap}) tylko z Kogutem."
          },
          {
            "p": "W parze z Wołem (丑) z tej samej grupy brakuje środkowego znaku 酉, więc para nie jest liczona jako harmonia i jest traktowana jako neutralna ({scoreNeutral}). Przynależność do tej samej grupy nie sprawia, że każda para jest harmonią."
          }
        ]
      },
      {
        "title": "Świnia — czołowe zderzenie (zderzenie)",
        "blocks": [
          {
            "p": "巳 i 亥 leżą w kole dokładnie naprzeciwko siebie. Ta usługa zachowuje {scoreChung} punktów nawet przy zderzeniu. W tradycyjnym myeongri zderzenie jest kolizją, a nie końcem relacji, a przyznanie wyniku bliskiego dna oznaczałoby wydanie wyroku na dwie osoby. Mimo to jest to najniższy wynik, jaki może otrzymać Wąż."
          }
        ]
      },
      {
        "title": "Pies — cicha niezgoda (niezgoda)",
        "blocks": [
          {
            "p": "巳 i 戌 leżą tuż obok 亥 (Świni), pozycji zderzenia, i tradycyjnie uważa się je za parę, która żywi do siebie urazę, a mimo to nie potrafi się rozstać. Na powierzchni wygląda to spokojnie, ale uważa się, że rozbieżność trwa długo, więc dostaje {scoreWonjin} — więcej niż zderzenie ({scoreChung}) i mniej niż neutralna ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Pozostałe 7 zwierząt oraz Wąż z innym Wężem",
        "blocks": [
          {
            "p": "Szczur, Wół, Tygrys, Królik, Smok, Koń i Owca nie tworzą z Wężem ani harmonii, ani zderzenia, ani niezgody: są **neutralne** i uzyskują {scoreNeutral}. To punkt odniesienia, ani dobry, ani zły."
          },
          {
            "p": "Dwie osoby spod znaku Węża uzyskują {scoreSame}. Oznacza to, że są do siebie podobne, a nie że się przyciągają, dlatego wynik plasuje się tuż nad neutralnym."
          }
        ]
      },
      {
        "title": "Jaką część końcowego wskaźnika dopasowania zajmuje ten wynik",
        "blocks": [
          {
            "p": "Są dwa miejsca, w których gałęzie dwóch osób zestawia się obok siebie."
          },
          {
            "ul": [
              "**Zgodność zodiakalna** patrzy na gałąź roku urodzenia. Stanowi {weightZodiac} końcowego wskaźnika dopasowania.",
              "**Zgodność gałęzi dnia** patrzy na gałąź dnia urodzenia. Stanowi {weightDayBranch} zgodności saju ({weightSaju}), czyli {weightDayBranchTotal} końcowego wskaźnika dopasowania."
            ]
          },
          {
            "p": "Na przykład gdy osoba spod znaku Węża spotyka osobę spod znaku Świni, zgodność zodiakalna daje zderzenie. Jeśli wszystko inne jest takie samo, końcowy wskaźnik dopasowania wypada o {swingZodiacChung} punktów niżej niż przy parze neutralnej. Z osobą spod znaku Małpy jest to sześć harmonii, a wskaźnik wypada o {swingZodiacYukhap} punktów wyżej."
          },
          {
            "p": "Gałąź roku i gałąź dnia mogą się różnić. Dwie osoby spod znaku Węża, których gałęzie dnia to 巳 i 亥, otrzymują w zgodności zodiakalnej tę samą gałąź ({scoreSame}), a w zgodności gałęzi dnia zderzenie ({scoreChung})."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten przewodnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedno zwierzę nie rozstrzyga o relacji między dwiema osobami. {weightSaju} końcowego wskaźnika dopasowania wynika ze zgodności saju.",
              "Powyższe zmiany punktów zakładają, że wszystko inne jest takie samo; rzeczywisty wynik zależy od całego saju obu osób.",
              "Pełna tabela tego, ile punktów daje każda relacja, znajduje się w [tabeli dwunastu gałęzi](/guide/branches), a wyjaśnienie, dlaczego zodiak odczytuje się z gałęzi roku, w [Dlaczego zgodność zodiakalna uwzględnia gałąź roku](/guide/zodiac)."
            ]
          },
          {
            "p": "Pozostałe zwierzęta są przedstawione w ten sam sposób. [Szczur](/guide/zodiac-rat) · [Wół](/guide/zodiac-ox) · [Tygrys](/guide/zodiac-tiger) · [Królik](/guide/zodiac-rabbit) · [Smok](/guide/zodiac-dragon) · [Koń](/guide/zodiac-horse) · [Owca](/guide/zodiac-goat) · [Małpa](/guide/zodiac-monkey) · [Kogut](/guide/zodiac-rooster) · [Pies](/guide/zodiac-dog) · [Świnia](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-horse": {
    "eyebrow": "Według zwierzęcia",
    "title": "Jak Koń spotyka dwanaście zwierząt zodiaku",
    "summary": "Jaką relację ma Koń (午) z każdym z dwunastu zwierząt zodiaku, ile punktów daje każda z tych relacji i jaką część końcowego wskaźnika dopasowania zajmuje ten wynik — przedstawione dokładnie tak, jak w zasadach obliczeń Inyeon-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Koń to siódma z dwunastu gałęzi",
        "blocks": [
          {
            "p": "Koń to osoba, której gałąź roku urodzenia to **午**. 午 to siódma z dwunastu gałęzi ziemskich, a gdy dwanaście znaków ustawi się w kole, leży dokładnie naprzeciwko 子 (Szczura)."
          },
          {
            "p": "Wiersz, który wynik zgodności pokazuje dla osoby spod znaku Konia, brzmi: \"Pogodny i niespokojny. Najtrudniej znosi ogrodzenie.\" Ten wiersz nie ma nic wspólnego z wynikami relacji i nie wpływa na wyniki poniżej."
          }
        ]
      },
      {
        "title": "Dwanaście zwierząt zodiaku w skrócie",
        "blocks": [
          {
            "p": "Każde z pozostałych zwierząt jest po kolei zestawiane z Koniem. Jako relacje zapisane są tylko pary, które ta usługa uznaje za harmonie; cała reszta jest neutralna."
          },
          {
            "table": {
              "caption": "Koń i dwanaście zwierząt zodiaku",
              "head": [
                "Inne zwierzę",
                "Relacja",
                "Wynik"
              ],
              "rows": [
                [
                  "Szczur (子)",
                  "Zderzenie",
                  "{scoreChung}"
                ],
                [
                  "Wół (丑)",
                  "Niezgoda",
                  "{scoreWonjin}"
                ],
                [
                  "Tygrys (寅)",
                  "Połowa triady",
                  "{scoreBanhap}"
                ],
                [
                  "Królik (卯)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Smok (辰)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Wąż (巳)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Koń (午)",
                  "Ta sama gałąź",
                  "{scoreSame}"
                ],
                [
                  "Owca (未)",
                  "Sześć harmonii",
                  "{scoreYukhap}"
                ],
                [
                  "Małpa (申)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Kogut (酉)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Pies (戌)",
                  "Połowa triady",
                  "{scoreBanhap}"
                ],
                [
                  "Świnia (亥)",
                  "Neutralna",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Owca — para przyciągająca (sześć harmonii)",
        "blocks": [
          {
            "p": "午 i 未 tworzą harmonię zaledwie dwoma znakami. Sześć harmonii to dobra relacja, która w zgodności pojawia się najczęściej, a Koń i Owca uzyskują {scoreYukhap} — to najwyższy wynik, jaki może uzyskać Koń."
          }
        ]
      },
      {
        "title": "Tygrys i Pies — połowa triady zawierająca gałąź królewską",
        "blocks": [
          {
            "p": "寅午戌 to jedna grupa triady (grupa ognia), a 午 jest **gałęzią królewską** w jej środku. Inyeon-Link przyjmuje wyłącznie pary zawierające gałąź królewską, dlatego Koń tworzy połowę triady ({scoreBanhap}) zarówno z Tygrysem, jak i z Psem."
          },
          {
            "p": "**Tygrys i Pies razem** natomiast nie mają środkowego znaku 午, więc nie są liczone jako harmonia i są traktowane jako neutralne. Nawet w obrębie jednej grupy triady to Koń tworzy połowę triady."
          }
        ]
      },
      {
        "title": "Szczur — czołowe zderzenie (zderzenie)",
        "blocks": [
          {
            "p": "午 i 子 leżą w kole dokładnie naprzeciwko siebie. Ta usługa zachowuje {scoreChung} punktów nawet przy zderzeniu. W tradycyjnym myeongri zderzenie jest kolizją, a nie końcem relacji, a przyznanie wyniku bliskiego dna oznaczałoby wydanie wyroku na dwie osoby. Mimo to jest to najniższy wynik, jaki może otrzymać Koń."
          }
        ]
      },
      {
        "title": "Wół — cicha niezgoda (niezgoda)",
        "blocks": [
          {
            "p": "午 i 丑 leżą tuż obok 子 (Szczura), pozycji zderzenia, i tradycyjnie uważa się je za parę, która żywi do siebie urazę, a mimo to nie potrafi się rozstać. Na powierzchni wygląda to spokojnie, ale uważa się, że rozbieżność trwa długo, więc dostaje {scoreWonjin} — więcej niż zderzenie ({scoreChung}) i mniej niż neutralna ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Pozostałe 6 zwierząt oraz Koń z innym Koniem",
        "blocks": [
          {
            "p": "Królik, Smok, Wąż, Małpa, Kogut i Świnia nie tworzą z Koniem ani harmonii, ani zderzenia, ani niezgody: są **neutralne** i uzyskują {scoreNeutral}. To punkt odniesienia, ani dobry, ani zły."
          },
          {
            "p": "Dwie osoby spod znaku Konia uzyskują {scoreSame}. Oznacza to, że są do siebie podobne, a nie że się przyciągają, dlatego wynik plasuje się tuż nad neutralnym."
          }
        ]
      },
      {
        "title": "Jaką część końcowego wskaźnika dopasowania zajmuje ten wynik",
        "blocks": [
          {
            "p": "Są dwa miejsca, w których gałęzie dwóch osób zestawia się obok siebie."
          },
          {
            "ul": [
              "**Zgodność zodiakalna** patrzy na gałąź roku urodzenia. Stanowi {weightZodiac} końcowego wskaźnika dopasowania.",
              "**Zgodność gałęzi dnia** patrzy na gałąź dnia urodzenia. Stanowi {weightDayBranch} zgodności saju ({weightSaju}), czyli {weightDayBranchTotal} końcowego wskaźnika dopasowania."
            ]
          },
          {
            "p": "Na przykład gdy osoba spod znaku Konia spotyka osobę spod znaku Szczura, zgodność zodiakalna daje zderzenie. Jeśli wszystko inne jest takie samo, końcowy wskaźnik dopasowania wypada o {swingZodiacChung} punktów niżej niż przy parze neutralnej. Z osobą spod znaku Owcy jest to sześć harmonii, a wskaźnik wypada o {swingZodiacYukhap} punktów wyżej."
          },
          {
            "p": "Gałąź roku i gałąź dnia mogą się różnić. Dwie osoby spod znaku Konia, których gałęzie dnia to 午 i 子, otrzymują w zgodności zodiakalnej tę samą gałąź ({scoreSame}), a w zgodności gałęzi dnia zderzenie ({scoreChung})."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten przewodnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedno zwierzę nie rozstrzyga o relacji między dwiema osobami. {weightSaju} końcowego wskaźnika dopasowania wynika ze zgodności saju.",
              "Powyższe zmiany punktów zakładają, że wszystko inne jest takie samo; rzeczywisty wynik zależy od całego saju obu osób.",
              "Pełna tabela tego, ile punktów daje każda relacja, znajduje się w [tabeli dwunastu gałęzi](/guide/branches), a wyjaśnienie, dlaczego zodiak odczytuje się z gałęzi roku, w [Dlaczego zgodność zodiakalna uwzględnia gałąź roku](/guide/zodiac)."
            ]
          },
          {
            "p": "Pozostałe zwierzęta są przedstawione w ten sam sposób. [Szczur](/guide/zodiac-rat) · [Wół](/guide/zodiac-ox) · [Tygrys](/guide/zodiac-tiger) · [Królik](/guide/zodiac-rabbit) · [Smok](/guide/zodiac-dragon) · [Wąż](/guide/zodiac-snake) · [Owca](/guide/zodiac-goat) · [Małpa](/guide/zodiac-monkey) · [Kogut](/guide/zodiac-rooster) · [Pies](/guide/zodiac-dog) · [Świnia](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-goat": {
    "eyebrow": "Według zwierzęcia",
    "title": "Jak Owca spotyka dwanaście zwierząt zodiaku",
    "summary": "Jaką relację ma Owca (未) z każdym z dwunastu zwierząt zodiaku, ile punktów daje każda z tych relacji i jaką część końcowego wskaźnika dopasowania zajmuje ten wynik — przedstawione dokładnie tak, jak w zasadach obliczeń Inyeon-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Owca to ósma z dwunastu gałęzi",
        "blocks": [
          {
            "p": "Owca to osoba, której gałąź roku urodzenia to **未**. 未 to ósma z dwunastu gałęzi ziemskich, a gdy dwanaście znaków ustawi się w kole, leży dokładnie naprzeciwko 丑 (Wołu)."
          },
          {
            "p": "Wiersz, który wynik zgodności pokazuje dla osoby spod znaku Owcy, brzmi: \"Ciepła i uważna. Ostre słowa nosi w sobie długo.\" Ten wiersz nie ma nic wspólnego z wynikami relacji i nie wpływa na wyniki poniżej."
          }
        ]
      },
      {
        "title": "Dwanaście zwierząt zodiaku w skrócie",
        "blocks": [
          {
            "p": "Każde z pozostałych zwierząt jest po kolei zestawiane z Owcą. Jako relacje zapisane są tylko pary, które ta usługa uznaje za harmonie; cała reszta jest neutralna."
          },
          {
            "table": {
              "caption": "Owca i dwanaście zwierząt zodiaku",
              "head": [
                "Inne zwierzę",
                "Relacja",
                "Wynik"
              ],
              "rows": [
                [
                  "Szczur (子)",
                  "Niezgoda",
                  "{scoreWonjin}"
                ],
                [
                  "Wół (丑)",
                  "Zderzenie",
                  "{scoreChung}"
                ],
                [
                  "Tygrys (寅)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Królik (卯)",
                  "Połowa triady",
                  "{scoreBanhap}"
                ],
                [
                  "Smok (辰)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Wąż (巳)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Koń (午)",
                  "Sześć harmonii",
                  "{scoreYukhap}"
                ],
                [
                  "Owca (未)",
                  "Ta sama gałąź",
                  "{scoreSame}"
                ],
                [
                  "Małpa (申)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Kogut (酉)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Pies (戌)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Świnia (亥)",
                  "Neutralna",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Koń — para przyciągająca (sześć harmonii)",
        "blocks": [
          {
            "p": "未 i 午 tworzą harmonię zaledwie dwoma znakami. Sześć harmonii to dobra relacja, która w zgodności pojawia się najczęściej, a Owca i Koń uzyskują {scoreYukhap} — to najwyższy wynik, jaki może uzyskać Owca."
          }
        ]
      },
      {
        "title": "Królik — połowa triady zawierająca gałąź królewską",
        "blocks": [
          {
            "p": "亥卯未 to jedna grupa triady (grupa drewna), a 卯 jest **gałęzią królewską** w jej środku. Inyeon-Link przyjmuje wyłącznie pary zawierające gałąź królewską, dlatego Owca tworzy połowę triady ({scoreBanhap}) tylko z Królikiem."
          },
          {
            "p": "W parze ze Świnią (亥) z tej samej grupy brakuje środkowego znaku 卯, więc para nie jest liczona jako harmonia i jest traktowana jako neutralna ({scoreNeutral}). Przynależność do tej samej grupy nie sprawia, że każda para jest harmonią."
          }
        ]
      },
      {
        "title": "Wół — czołowe zderzenie (zderzenie)",
        "blocks": [
          {
            "p": "未 i 丑 leżą w kole dokładnie naprzeciwko siebie. Ta usługa zachowuje {scoreChung} punktów nawet przy zderzeniu. W tradycyjnym myeongri zderzenie jest kolizją, a nie końcem relacji, a przyznanie wyniku bliskiego dna oznaczałoby wydanie wyroku na dwie osoby. Mimo to jest to najniższy wynik, jaki może otrzymać Owca."
          }
        ]
      },
      {
        "title": "Szczur — cicha niezgoda (niezgoda)",
        "blocks": [
          {
            "p": "未 i 子 leżą tuż obok 丑 (Wołu), pozycji zderzenia, i tradycyjnie uważa się je za parę, która żywi do siebie urazę, a mimo to nie potrafi się rozstać. Na powierzchni wygląda to spokojnie, ale uważa się, że rozbieżność trwa długo, więc dostaje {scoreWonjin} — więcej niż zderzenie ({scoreChung}) i mniej niż neutralna ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Pozostałe 7 zwierząt oraz Owca z inną Owcą",
        "blocks": [
          {
            "p": "Tygrys, Smok, Wąż, Małpa, Kogut, Pies i Świnia nie tworzą z Owcą ani harmonii, ani zderzenia, ani niezgody: są **neutralne** i uzyskują {scoreNeutral}. To punkt odniesienia, ani dobry, ani zły."
          },
          {
            "p": "Dwie osoby spod znaku Owcy uzyskują {scoreSame}. Oznacza to, że są do siebie podobne, a nie że się przyciągają, dlatego wynik plasuje się tuż nad neutralnym."
          }
        ]
      },
      {
        "title": "Jaką część końcowego wskaźnika dopasowania zajmuje ten wynik",
        "blocks": [
          {
            "p": "Są dwa miejsca, w których gałęzie dwóch osób zestawia się obok siebie."
          },
          {
            "ul": [
              "**Zgodność zodiakalna** patrzy na gałąź roku urodzenia. Stanowi {weightZodiac} końcowego wskaźnika dopasowania.",
              "**Zgodność gałęzi dnia** patrzy na gałąź dnia urodzenia. Stanowi {weightDayBranch} zgodności saju ({weightSaju}), czyli {weightDayBranchTotal} końcowego wskaźnika dopasowania."
            ]
          },
          {
            "p": "Na przykład gdy osoba spod znaku Owcy spotyka osobę spod znaku Wołu, zgodność zodiakalna daje zderzenie. Jeśli wszystko inne jest takie samo, końcowy wskaźnik dopasowania wypada o {swingZodiacChung} punktów niżej niż przy parze neutralnej. Z osobą spod znaku Konia jest to sześć harmonii, a wskaźnik wypada o {swingZodiacYukhap} punktów wyżej."
          },
          {
            "p": "Gałąź roku i gałąź dnia mogą się różnić. Dwie osoby spod znaku Owcy, których gałęzie dnia to 未 i 丑, otrzymują w zgodności zodiakalnej tę samą gałąź ({scoreSame}), a w zgodności gałęzi dnia zderzenie ({scoreChung})."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten przewodnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedno zwierzę nie rozstrzyga o relacji między dwiema osobami. {weightSaju} końcowego wskaźnika dopasowania wynika ze zgodności saju.",
              "Powyższe zmiany punktów zakładają, że wszystko inne jest takie samo; rzeczywisty wynik zależy od całego saju obu osób.",
              "Pełna tabela tego, ile punktów daje każda relacja, znajduje się w [tabeli dwunastu gałęzi](/guide/branches), a wyjaśnienie, dlaczego zodiak odczytuje się z gałęzi roku, w [Dlaczego zgodność zodiakalna uwzględnia gałąź roku](/guide/zodiac)."
            ]
          },
          {
            "p": "Pozostałe zwierzęta są przedstawione w ten sam sposób. [Szczur](/guide/zodiac-rat) · [Wół](/guide/zodiac-ox) · [Tygrys](/guide/zodiac-tiger) · [Królik](/guide/zodiac-rabbit) · [Smok](/guide/zodiac-dragon) · [Wąż](/guide/zodiac-snake) · [Koń](/guide/zodiac-horse) · [Małpa](/guide/zodiac-monkey) · [Kogut](/guide/zodiac-rooster) · [Pies](/guide/zodiac-dog) · [Świnia](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-monkey": {
    "eyebrow": "Według zwierzęcia",
    "title": "Jak Małpa spotyka dwanaście zwierząt zodiaku",
    "summary": "Jaką relację ma Małpa (申) z każdym z dwunastu zwierząt zodiaku, ile punktów daje każda z tych relacji i jaką część końcowego wskaźnika dopasowania zajmuje ten wynik — przedstawione dokładnie tak, jak w zasadach obliczeń Inyeon-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Małpa to dziewiąta z dwunastu gałęzi",
        "blocks": [
          {
            "p": "Małpa to osoba, której gałąź roku urodzenia to **申**. 申 to dziewiąta z dwunastu gałęzi ziemskich, a gdy dwanaście znaków ustawi się w kole, leży dokładnie naprzeciwko 寅 (Tygrysa)."
          },
          {
            "p": "Wiersz, który wynik zgodności pokazuje dla osoby spod znaku Małpy, brzmi: \"Pomysłowa i szybko się dostosowuje. Nudzi ją powtarzalność.\" Ten wiersz nie ma nic wspólnego z wynikami relacji i nie wpływa na wyniki poniżej."
          }
        ]
      },
      {
        "title": "Dwanaście zwierząt zodiaku w skrócie",
        "blocks": [
          {
            "p": "Każde z pozostałych zwierząt jest po kolei zestawiane z Małpą. Jako relacje zapisane są tylko pary, które ta usługa uznaje za harmonie; cała reszta jest neutralna."
          },
          {
            "table": {
              "caption": "Małpa i dwanaście zwierząt zodiaku",
              "head": [
                "Inne zwierzę",
                "Relacja",
                "Wynik"
              ],
              "rows": [
                [
                  "Szczur (子)",
                  "Połowa triady",
                  "{scoreBanhap}"
                ],
                [
                  "Wół (丑)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Tygrys (寅)",
                  "Zderzenie",
                  "{scoreChung}"
                ],
                [
                  "Królik (卯)",
                  "Niezgoda",
                  "{scoreWonjin}"
                ],
                [
                  "Smok (辰)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Wąż (巳)",
                  "Sześć harmonii",
                  "{scoreYukhap}"
                ],
                [
                  "Koń (午)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Owca (未)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Małpa (申)",
                  "Ta sama gałąź",
                  "{scoreSame}"
                ],
                [
                  "Kogut (酉)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Pies (戌)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Świnia (亥)",
                  "Neutralna",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Wąż — para przyciągająca (sześć harmonii)",
        "blocks": [
          {
            "p": "申 i 巳 tworzą harmonię zaledwie dwoma znakami. Sześć harmonii to dobra relacja, która w zgodności pojawia się najczęściej, a Małpa i Wąż uzyskują {scoreYukhap} — to najwyższy wynik, jaki może uzyskać Małpa."
          }
        ]
      },
      {
        "title": "Szczur — połowa triady zawierająca gałąź królewską",
        "blocks": [
          {
            "p": "申子辰 to jedna grupa triady (grupa wody), a 子 jest **gałęzią królewską** w jej środku. Inyeon-Link przyjmuje wyłącznie pary zawierające gałąź królewską, dlatego Małpa tworzy połowę triady ({scoreBanhap}) tylko ze Szczurem."
          },
          {
            "p": "W parze ze Smokiem (辰) z tej samej grupy brakuje środkowego znaku 子, więc para nie jest liczona jako harmonia i jest traktowana jako neutralna ({scoreNeutral}). Przynależność do tej samej grupy nie sprawia, że każda para jest harmonią."
          }
        ]
      },
      {
        "title": "Tygrys — czołowe zderzenie (zderzenie)",
        "blocks": [
          {
            "p": "申 i 寅 leżą w kole dokładnie naprzeciwko siebie. Ta usługa zachowuje {scoreChung} punktów nawet przy zderzeniu. W tradycyjnym myeongri zderzenie jest kolizją, a nie końcem relacji, a przyznanie wyniku bliskiego dna oznaczałoby wydanie wyroku na dwie osoby. Mimo to jest to najniższy wynik, jaki może otrzymać Małpa."
          }
        ]
      },
      {
        "title": "Królik — cicha niezgoda (niezgoda)",
        "blocks": [
          {
            "p": "申 i 卯 leżą tuż obok 寅 (Tygrysa), pozycji zderzenia, i tradycyjnie uważa się je za parę, która żywi do siebie urazę, a mimo to nie potrafi się rozstać. Na powierzchni wygląda to spokojnie, ale uważa się, że rozbieżność trwa długo, więc dostaje {scoreWonjin} — więcej niż zderzenie ({scoreChung}) i mniej niż neutralna ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Pozostałe 7 zwierząt oraz Małpa z inną Małpą",
        "blocks": [
          {
            "p": "Wół, Smok, Koń, Owca, Kogut, Pies i Świnia nie tworzą z Małpą ani harmonii, ani zderzenia, ani niezgody: są **neutralne** i uzyskują {scoreNeutral}. To punkt odniesienia, ani dobry, ani zły."
          },
          {
            "p": "Dwie osoby spod znaku Małpy uzyskują {scoreSame}. Oznacza to, że są do siebie podobne, a nie że się przyciągają, dlatego wynik plasuje się tuż nad neutralnym."
          }
        ]
      },
      {
        "title": "Jaką część końcowego wskaźnika dopasowania zajmuje ten wynik",
        "blocks": [
          {
            "p": "Są dwa miejsca, w których gałęzie dwóch osób zestawia się obok siebie."
          },
          {
            "ul": [
              "**Zgodność zodiakalna** patrzy na gałąź roku urodzenia. Stanowi {weightZodiac} końcowego wskaźnika dopasowania.",
              "**Zgodność gałęzi dnia** patrzy na gałąź dnia urodzenia. Stanowi {weightDayBranch} zgodności saju ({weightSaju}), czyli {weightDayBranchTotal} końcowego wskaźnika dopasowania."
            ]
          },
          {
            "p": "Na przykład gdy osoba spod znaku Małpy spotyka osobę spod znaku Tygrysa, zgodność zodiakalna daje zderzenie. Jeśli wszystko inne jest takie samo, końcowy wskaźnik dopasowania wypada o {swingZodiacChung} punktów niżej niż przy parze neutralnej. Z osobą spod znaku Węża jest to sześć harmonii, a wskaźnik wypada o {swingZodiacYukhap} punktów wyżej."
          },
          {
            "p": "Gałąź roku i gałąź dnia mogą się różnić. Dwie osoby spod znaku Małpy, których gałęzie dnia to 申 i 寅, otrzymują w zgodności zodiakalnej tę samą gałąź ({scoreSame}), a w zgodności gałęzi dnia zderzenie ({scoreChung})."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten przewodnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedno zwierzę nie rozstrzyga o relacji między dwiema osobami. {weightSaju} końcowego wskaźnika dopasowania wynika ze zgodności saju.",
              "Powyższe zmiany punktów zakładają, że wszystko inne jest takie samo; rzeczywisty wynik zależy od całego saju obu osób.",
              "Pełna tabela tego, ile punktów daje każda relacja, znajduje się w [tabeli dwunastu gałęzi](/guide/branches), a wyjaśnienie, dlaczego zodiak odczytuje się z gałęzi roku, w [Dlaczego zgodność zodiakalna uwzględnia gałąź roku](/guide/zodiac)."
            ]
          },
          {
            "p": "Pozostałe zwierzęta są przedstawione w ten sam sposób. [Szczur](/guide/zodiac-rat) · [Wół](/guide/zodiac-ox) · [Tygrys](/guide/zodiac-tiger) · [Królik](/guide/zodiac-rabbit) · [Smok](/guide/zodiac-dragon) · [Wąż](/guide/zodiac-snake) · [Koń](/guide/zodiac-horse) · [Owca](/guide/zodiac-goat) · [Kogut](/guide/zodiac-rooster) · [Pies](/guide/zodiac-dog) · [Świnia](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-rooster": {
    "eyebrow": "Według zwierzęcia",
    "title": "Jak Kogut spotyka dwanaście zwierząt zodiaku",
    "summary": "Jaką relację ma Kogut (酉) z każdym z dwunastu zwierząt zodiaku, ile punktów daje każda z tych relacji i jaką część końcowego wskaźnika dopasowania zajmuje ten wynik — przedstawione dokładnie tak, jak w zasadach obliczeń Inyeon-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Kogut to dziesiąta z dwunastu gałęzi",
        "blocks": [
          {
            "p": "Kogut to osoba, której gałąź roku urodzenia to **酉**. 酉 to dziesiąta z dwunastu gałęzi ziemskich, a gdy dwanaście znaków ustawi się w kole, leży dokładnie naprzeciwko 卯 (Królika)."
          },
          {
            "p": "Wiersz, który wynik zgodności pokazuje dla osoby spod znaku Koguta, brzmi: \"Pracowity i skrupulatny. Nie zostawi rzeczy nie na swoim miejscu.\" Ten wiersz nie ma nic wspólnego z wynikami relacji i nie wpływa na wyniki poniżej."
          }
        ]
      },
      {
        "title": "Dwanaście zwierząt zodiaku w skrócie",
        "blocks": [
          {
            "p": "Każde z pozostałych zwierząt jest po kolei zestawiane z Kogutem. Jako relacje zapisane są tylko pary, które ta usługa uznaje za harmonie; cała reszta jest neutralna."
          },
          {
            "table": {
              "caption": "Kogut i dwanaście zwierząt zodiaku",
              "head": [
                "Inne zwierzę",
                "Relacja",
                "Wynik"
              ],
              "rows": [
                [
                  "Szczur (子)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Wół (丑)",
                  "Połowa triady",
                  "{scoreBanhap}"
                ],
                [
                  "Tygrys (寅)",
                  "Niezgoda",
                  "{scoreWonjin}"
                ],
                [
                  "Królik (卯)",
                  "Zderzenie",
                  "{scoreChung}"
                ],
                [
                  "Smok (辰)",
                  "Sześć harmonii",
                  "{scoreYukhap}"
                ],
                [
                  "Wąż (巳)",
                  "Połowa triady",
                  "{scoreBanhap}"
                ],
                [
                  "Koń (午)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Owca (未)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Małpa (申)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Kogut (酉)",
                  "Ta sama gałąź",
                  "{scoreSame}"
                ],
                [
                  "Pies (戌)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Świnia (亥)",
                  "Neutralna",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Smok — para przyciągająca (sześć harmonii)",
        "blocks": [
          {
            "p": "酉 i 辰 tworzą harmonię zaledwie dwoma znakami. Sześć harmonii to dobra relacja, która w zgodności pojawia się najczęściej, a Kogut i Smok uzyskują {scoreYukhap} — to najwyższy wynik, jaki może uzyskać Kogut."
          }
        ]
      },
      {
        "title": "Wół i Wąż — połowa triady zawierająca gałąź królewską",
        "blocks": [
          {
            "p": "巳酉丑 to jedna grupa triady (grupa metalu), a 酉 jest **gałęzią królewską** w jej środku. Inyeon-Link przyjmuje wyłącznie pary zawierające gałąź królewską, dlatego Kogut tworzy połowę triady ({scoreBanhap}) zarówno z Wołem, jak i z Wężem."
          },
          {
            "p": "**Wąż i Wół razem** natomiast nie mają środkowego znaku 酉, więc nie są liczone jako harmonia i są traktowane jako neutralne. Nawet w obrębie jednej grupy triady to Kogut tworzy połowę triady."
          }
        ]
      },
      {
        "title": "Królik — czołowe zderzenie (zderzenie)",
        "blocks": [
          {
            "p": "酉 i 卯 leżą w kole dokładnie naprzeciwko siebie. Ta usługa zachowuje {scoreChung} punktów nawet przy zderzeniu. W tradycyjnym myeongri zderzenie jest kolizją, a nie końcem relacji, a przyznanie wyniku bliskiego dna oznaczałoby wydanie wyroku na dwie osoby. Mimo to jest to najniższy wynik, jaki może otrzymać Kogut."
          }
        ]
      },
      {
        "title": "Tygrys — cicha niezgoda (niezgoda)",
        "blocks": [
          {
            "p": "酉 i 寅 leżą tuż obok 卯 (Królika), pozycji zderzenia, i tradycyjnie uważa się je za parę, która żywi do siebie urazę, a mimo to nie potrafi się rozstać. Na powierzchni wygląda to spokojnie, ale uważa się, że rozbieżność trwa długo, więc dostaje {scoreWonjin} — więcej niż zderzenie ({scoreChung}) i mniej niż neutralna ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Pozostałe 6 zwierząt oraz Kogut z innym Kogutem",
        "blocks": [
          {
            "p": "Szczur, Koń, Owca, Małpa, Pies i Świnia nie tworzą z Kogutem ani harmonii, ani zderzenia, ani niezgody: są **neutralne** i uzyskują {scoreNeutral}. To punkt odniesienia, ani dobry, ani zły."
          },
          {
            "p": "Dwie osoby spod znaku Koguta uzyskują {scoreSame}. Oznacza to, że są do siebie podobne, a nie że się przyciągają, dlatego wynik plasuje się tuż nad neutralnym."
          }
        ]
      },
      {
        "title": "Jaką część końcowego wskaźnika dopasowania zajmuje ten wynik",
        "blocks": [
          {
            "p": "Są dwa miejsca, w których gałęzie dwóch osób zestawia się obok siebie."
          },
          {
            "ul": [
              "**Zgodność zodiakalna** patrzy na gałąź roku urodzenia. Stanowi {weightZodiac} końcowego wskaźnika dopasowania.",
              "**Zgodność gałęzi dnia** patrzy na gałąź dnia urodzenia. Stanowi {weightDayBranch} zgodności saju ({weightSaju}), czyli {weightDayBranchTotal} końcowego wskaźnika dopasowania."
            ]
          },
          {
            "p": "Na przykład gdy osoba spod znaku Koguta spotyka osobę spod znaku Królika, zgodność zodiakalna daje zderzenie. Jeśli wszystko inne jest takie samo, końcowy wskaźnik dopasowania wypada o {swingZodiacChung} punktów niżej niż przy parze neutralnej. Z osobą spod znaku Smoka jest to sześć harmonii, a wskaźnik wypada o {swingZodiacYukhap} punktów wyżej."
          },
          {
            "p": "Gałąź roku i gałąź dnia mogą się różnić. Dwie osoby spod znaku Koguta, których gałęzie dnia to 酉 i 卯, otrzymują w zgodności zodiakalnej tę samą gałąź ({scoreSame}), a w zgodności gałęzi dnia zderzenie ({scoreChung})."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten przewodnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedno zwierzę nie rozstrzyga o relacji między dwiema osobami. {weightSaju} końcowego wskaźnika dopasowania wynika ze zgodności saju.",
              "Powyższe zmiany punktów zakładają, że wszystko inne jest takie samo; rzeczywisty wynik zależy od całego saju obu osób.",
              "Pełna tabela tego, ile punktów daje każda relacja, znajduje się w [tabeli dwunastu gałęzi](/guide/branches), a wyjaśnienie, dlaczego zodiak odczytuje się z gałęzi roku, w [Dlaczego zgodność zodiakalna uwzględnia gałąź roku](/guide/zodiac)."
            ]
          },
          {
            "p": "Pozostałe zwierzęta są przedstawione w ten sam sposób. [Szczur](/guide/zodiac-rat) · [Wół](/guide/zodiac-ox) · [Tygrys](/guide/zodiac-tiger) · [Królik](/guide/zodiac-rabbit) · [Smok](/guide/zodiac-dragon) · [Wąż](/guide/zodiac-snake) · [Koń](/guide/zodiac-horse) · [Owca](/guide/zodiac-goat) · [Małpa](/guide/zodiac-monkey) · [Pies](/guide/zodiac-dog) · [Świnia](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-dog": {
    "eyebrow": "Według zwierzęcia",
    "title": "Jak Pies spotyka dwanaście zwierząt zodiaku",
    "summary": "Jaką relację ma Pies (戌) z każdym z dwunastu zwierząt zodiaku, ile punktów daje każda z tych relacji i jaką część końcowego wskaźnika dopasowania zajmuje ten wynik — przedstawione dokładnie tak, jak w zasadach obliczeń Inyeon-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Pies to jedenasta z dwunastu gałęzi",
        "blocks": [
          {
            "p": "Pies to osoba, której gałąź roku urodzenia to **戌**. 戌 to jedenasta z dwunastu gałęzi ziemskich, a gdy dwanaście znaków ustawi się w kole, leży dokładnie naprzeciwko 辰 (Smoka)."
          },
          {
            "p": "Wiersz, który wynik zgodności pokazuje dla osoby spod znaku Psa, brzmi: \"Wierny do końca, gdy raz zaufa. Zdrada rani go szczególnie mocno.\" Ten wiersz nie ma nic wspólnego z wynikami relacji i nie wpływa na wyniki poniżej."
          }
        ]
      },
      {
        "title": "Dwanaście zwierząt zodiaku w skrócie",
        "blocks": [
          {
            "p": "Każde z pozostałych zwierząt jest po kolei zestawiane z Psem. Jako relacje zapisane są tylko pary, które ta usługa uznaje za harmonie; cała reszta jest neutralna."
          },
          {
            "table": {
              "caption": "Pies i dwanaście zwierząt zodiaku",
              "head": [
                "Inne zwierzę",
                "Relacja",
                "Wynik"
              ],
              "rows": [
                [
                  "Szczur (子)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Wół (丑)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Tygrys (寅)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Królik (卯)",
                  "Sześć harmonii",
                  "{scoreYukhap}"
                ],
                [
                  "Smok (辰)",
                  "Zderzenie",
                  "{scoreChung}"
                ],
                [
                  "Wąż (巳)",
                  "Niezgoda",
                  "{scoreWonjin}"
                ],
                [
                  "Koń (午)",
                  "Połowa triady",
                  "{scoreBanhap}"
                ],
                [
                  "Owca (未)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Małpa (申)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Kogut (酉)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Pies (戌)",
                  "Ta sama gałąź",
                  "{scoreSame}"
                ],
                [
                  "Świnia (亥)",
                  "Neutralna",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Królik — para przyciągająca (sześć harmonii)",
        "blocks": [
          {
            "p": "戌 i 卯 tworzą harmonię zaledwie dwoma znakami. Sześć harmonii to dobra relacja, która w zgodności pojawia się najczęściej, a Pies i Królik uzyskują {scoreYukhap} — to najwyższy wynik, jaki może uzyskać Pies."
          }
        ]
      },
      {
        "title": "Koń — połowa triady zawierająca gałąź królewską",
        "blocks": [
          {
            "p": "寅午戌 to jedna grupa triady (grupa ognia), a 午 jest **gałęzią królewską** w jej środku. Inyeon-Link przyjmuje wyłącznie pary zawierające gałąź królewską, dlatego Pies tworzy połowę triady ({scoreBanhap}) tylko z Koniem."
          },
          {
            "p": "W parze z Tygrysem (寅) z tej samej grupy brakuje środkowego znaku 午, więc para nie jest liczona jako harmonia i jest traktowana jako neutralna ({scoreNeutral}). Przynależność do tej samej grupy nie sprawia, że każda para jest harmonią."
          }
        ]
      },
      {
        "title": "Smok — czołowe zderzenie (zderzenie)",
        "blocks": [
          {
            "p": "戌 i 辰 leżą w kole dokładnie naprzeciwko siebie. Ta usługa zachowuje {scoreChung} punktów nawet przy zderzeniu. W tradycyjnym myeongri zderzenie jest kolizją, a nie końcem relacji, a przyznanie wyniku bliskiego dna oznaczałoby wydanie wyroku na dwie osoby. Mimo to jest to najniższy wynik, jaki może otrzymać Pies."
          }
        ]
      },
      {
        "title": "Wąż — cicha niezgoda (niezgoda)",
        "blocks": [
          {
            "p": "戌 i 巳 leżą tuż obok 辰 (Smoka), pozycji zderzenia, i tradycyjnie uważa się je za parę, która żywi do siebie urazę, a mimo to nie potrafi się rozstać. Na powierzchni wygląda to spokojnie, ale uważa się, że rozbieżność trwa długo, więc dostaje {scoreWonjin} — więcej niż zderzenie ({scoreChung}) i mniej niż neutralna ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Pozostałe 7 zwierząt oraz Pies z innym Psem",
        "blocks": [
          {
            "p": "Szczur, Wół, Tygrys, Owca, Małpa, Kogut i Świnia nie tworzą z Psem ani harmonii, ani zderzenia, ani niezgody: są **neutralne** i uzyskują {scoreNeutral}. To punkt odniesienia, ani dobry, ani zły."
          },
          {
            "p": "Dwie osoby spod znaku Psa uzyskują {scoreSame}. Oznacza to, że są do siebie podobne, a nie że się przyciągają, dlatego wynik plasuje się tuż nad neutralnym."
          }
        ]
      },
      {
        "title": "Jaką część końcowego wskaźnika dopasowania zajmuje ten wynik",
        "blocks": [
          {
            "p": "Są dwa miejsca, w których gałęzie dwóch osób zestawia się obok siebie."
          },
          {
            "ul": [
              "**Zgodność zodiakalna** patrzy na gałąź roku urodzenia. Stanowi {weightZodiac} końcowego wskaźnika dopasowania.",
              "**Zgodność gałęzi dnia** patrzy na gałąź dnia urodzenia. Stanowi {weightDayBranch} zgodności saju ({weightSaju}), czyli {weightDayBranchTotal} końcowego wskaźnika dopasowania."
            ]
          },
          {
            "p": "Na przykład gdy osoba spod znaku Psa spotyka osobę spod znaku Smoka, zgodność zodiakalna daje zderzenie. Jeśli wszystko inne jest takie samo, końcowy wskaźnik dopasowania wypada o {swingZodiacChung} punktów niżej niż przy parze neutralnej. Z osobą spod znaku Królika jest to sześć harmonii, a wskaźnik wypada o {swingZodiacYukhap} punktów wyżej."
          },
          {
            "p": "Gałąź roku i gałąź dnia mogą się różnić. Dwie osoby spod znaku Psa, których gałęzie dnia to 戌 i 辰, otrzymują w zgodności zodiakalnej tę samą gałąź ({scoreSame}), a w zgodności gałęzi dnia zderzenie ({scoreChung})."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten przewodnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedno zwierzę nie rozstrzyga o relacji między dwiema osobami. {weightSaju} końcowego wskaźnika dopasowania wynika ze zgodności saju.",
              "Powyższe zmiany punktów zakładają, że wszystko inne jest takie samo; rzeczywisty wynik zależy od całego saju obu osób.",
              "Pełna tabela tego, ile punktów daje każda relacja, znajduje się w [tabeli dwunastu gałęzi](/guide/branches), a wyjaśnienie, dlaczego zodiak odczytuje się z gałęzi roku, w [Dlaczego zgodność zodiakalna uwzględnia gałąź roku](/guide/zodiac)."
            ]
          },
          {
            "p": "Pozostałe zwierzęta są przedstawione w ten sam sposób. [Szczur](/guide/zodiac-rat) · [Wół](/guide/zodiac-ox) · [Tygrys](/guide/zodiac-tiger) · [Królik](/guide/zodiac-rabbit) · [Smok](/guide/zodiac-dragon) · [Wąż](/guide/zodiac-snake) · [Koń](/guide/zodiac-horse) · [Owca](/guide/zodiac-goat) · [Małpa](/guide/zodiac-monkey) · [Kogut](/guide/zodiac-rooster) · [Świnia](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-pig": {
    "eyebrow": "Według zwierzęcia",
    "title": "Jak Świnia spotyka dwanaście zwierząt zodiaku",
    "summary": "Jaką relację ma Świnia (亥) z każdym z dwunastu zwierząt zodiaku, ile punktów daje każda z tych relacji i jaką część końcowego wskaźnika dopasowania zajmuje ten wynik — przedstawione dokładnie tak, jak w zasadach obliczeń Inyeon-Link.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Świnia to dwunasta z dwunastu gałęzi",
        "blocks": [
          {
            "p": "Świnia to osoba, której gałąź roku urodzenia to **亥**. 亥 to dwunasta z dwunastu gałęzi ziemskich, a gdy dwanaście znaków ustawi się w kole, leży dokładnie naprzeciwko 巳 (Węża)."
          },
          {
            "p": "Wiersz, który wynik zgodności pokazuje dla osoby spod znaku Świni, brzmi: \"Hojna i szczera. Ufa łatwo, czasem swoim kosztem.\" Ten wiersz nie ma nic wspólnego z wynikami relacji i nie wpływa na wyniki poniżej."
          }
        ]
      },
      {
        "title": "Dwanaście zwierząt zodiaku w skrócie",
        "blocks": [
          {
            "p": "Każde z pozostałych zwierząt jest po kolei zestawiane ze Świnią. Jako relacje zapisane są tylko pary, które ta usługa uznaje za harmonie; cała reszta jest neutralna."
          },
          {
            "table": {
              "caption": "Świnia i dwanaście zwierząt zodiaku",
              "head": [
                "Inne zwierzę",
                "Relacja",
                "Wynik"
              ],
              "rows": [
                [
                  "Szczur (子)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Wół (丑)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Tygrys (寅)",
                  "Sześć harmonii",
                  "{scoreYukhap}"
                ],
                [
                  "Królik (卯)",
                  "Połowa triady",
                  "{scoreBanhap}"
                ],
                [
                  "Smok (辰)",
                  "Niezgoda",
                  "{scoreWonjin}"
                ],
                [
                  "Wąż (巳)",
                  "Zderzenie",
                  "{scoreChung}"
                ],
                [
                  "Koń (午)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Owca (未)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Małpa (申)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Kogut (酉)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Pies (戌)",
                  "Neutralna",
                  "{scoreNeutral}"
                ],
                [
                  "Świnia (亥)",
                  "Ta sama gałąź",
                  "{scoreSame}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Tygrys — para przyciągająca (sześć harmonii)",
        "blocks": [
          {
            "p": "亥 i 寅 tworzą harmonię zaledwie dwoma znakami. Sześć harmonii to dobra relacja, która w zgodności pojawia się najczęściej, a Świnia i Tygrys uzyskują {scoreYukhap} — to najwyższy wynik, jaki może uzyskać Świnia."
          }
        ]
      },
      {
        "title": "Królik — połowa triady zawierająca gałąź królewską",
        "blocks": [
          {
            "p": "亥卯未 to jedna grupa triady (grupa drewna), a 卯 jest **gałęzią królewską** w jej środku. Inyeon-Link przyjmuje wyłącznie pary zawierające gałąź królewską, dlatego Świnia tworzy połowę triady ({scoreBanhap}) tylko z Królikiem."
          },
          {
            "p": "W parze z Owcą (未) z tej samej grupy brakuje środkowego znaku 卯, więc para nie jest liczona jako harmonia i jest traktowana jako neutralna ({scoreNeutral}). Przynależność do tej samej grupy nie sprawia, że każda para jest harmonią."
          }
        ]
      },
      {
        "title": "Wąż — czołowe zderzenie (zderzenie)",
        "blocks": [
          {
            "p": "亥 i 巳 leżą w kole dokładnie naprzeciwko siebie. Ta usługa zachowuje {scoreChung} punktów nawet przy zderzeniu. W tradycyjnym myeongri zderzenie jest kolizją, a nie końcem relacji, a przyznanie wyniku bliskiego dna oznaczałoby wydanie wyroku na dwie osoby. Mimo to jest to najniższy wynik, jaki może otrzymać Świnia."
          }
        ]
      },
      {
        "title": "Smok — cicha niezgoda (niezgoda)",
        "blocks": [
          {
            "p": "亥 i 辰 leżą tuż obok 巳 (Węża), pozycji zderzenia, i tradycyjnie uważa się je za parę, która żywi do siebie urazę, a mimo to nie potrafi się rozstać. Na powierzchni wygląda to spokojnie, ale uważa się, że rozbieżność trwa długo, więc dostaje {scoreWonjin} — więcej niż zderzenie ({scoreChung}) i mniej niż neutralna ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Pozostałe 7 zwierząt oraz Świnia z inną Świnią",
        "blocks": [
          {
            "p": "Szczur, Wół, Koń, Owca, Małpa, Kogut i Pies nie tworzą ze Świnią ani harmonii, ani zderzenia, ani niezgody: są **neutralne** i uzyskują {scoreNeutral}. To punkt odniesienia, ani dobry, ani zły."
          },
          {
            "p": "Dwie osoby spod znaku Świni uzyskują {scoreSame}. Oznacza to, że są do siebie podobne, a nie że się przyciągają, dlatego wynik plasuje się tuż nad neutralnym."
          }
        ]
      },
      {
        "title": "Jaką część końcowego wskaźnika dopasowania zajmuje ten wynik",
        "blocks": [
          {
            "p": "Są dwa miejsca, w których gałęzie dwóch osób zestawia się obok siebie."
          },
          {
            "ul": [
              "**Zgodność zodiakalna** patrzy na gałąź roku urodzenia. Stanowi {weightZodiac} końcowego wskaźnika dopasowania.",
              "**Zgodność gałęzi dnia** patrzy na gałąź dnia urodzenia. Stanowi {weightDayBranch} zgodności saju ({weightSaju}), czyli {weightDayBranchTotal} końcowego wskaźnika dopasowania."
            ]
          },
          {
            "p": "Na przykład gdy osoba spod znaku Świni spotyka osobę spod znaku Węża, zgodność zodiakalna daje zderzenie. Jeśli wszystko inne jest takie samo, końcowy wskaźnik dopasowania wypada o {swingZodiacChung} punktów niżej niż przy parze neutralnej. Z osobą spod znaku Tygrysa jest to sześć harmonii, a wskaźnik wypada o {swingZodiacYukhap} punktów wyżej."
          },
          {
            "p": "Gałąź roku i gałąź dnia mogą się różnić. Dwie osoby spod znaku Świni, których gałęzie dnia to 亥 i 巳, otrzymują w zgodności zodiakalnej tę samą gałąź ({scoreSame}), a w zgodności gałęzi dnia zderzenie ({scoreChung})."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Czego ten przewodnik nie mówi",
        "blocks": [
          {
            "ul": [
              "Jedno zwierzę nie rozstrzyga o relacji między dwiema osobami. {weightSaju} końcowego wskaźnika dopasowania wynika ze zgodności saju.",
              "Powyższe zmiany punktów zakładają, że wszystko inne jest takie samo; rzeczywisty wynik zależy od całego saju obu osób.",
              "Pełna tabela tego, ile punktów daje każda relacja, znajduje się w [tabeli dwunastu gałęzi](/guide/branches), a wyjaśnienie, dlaczego zodiak odczytuje się z gałęzi roku, w [Dlaczego zgodność zodiakalna uwzględnia gałąź roku](/guide/zodiac)."
            ]
          },
          {
            "p": "Pozostałe zwierzęta są przedstawione w ten sam sposób. [Szczur](/guide/zodiac-rat) · [Wół](/guide/zodiac-ox) · [Tygrys](/guide/zodiac-tiger) · [Królik](/guide/zodiac-rabbit) · [Smok](/guide/zodiac-dragon) · [Wąż](/guide/zodiac-snake) · [Koń](/guide/zodiac-horse) · [Owca](/guide/zodiac-goat) · [Małpa](/guide/zodiac-monkey) · [Kogut](/guide/zodiac-rooster) · [Pies](/guide/zodiac-dog)"
          }
        ]
      }
    ]
  },

  "guide/ten-gods": {
    "eyebrow": "Dziesięć Bogów",
    "title": "Dziesięć Bogów i Pozycja Małżonka",
    "summary": "Patrzymy na to, czym pień dnia każdej osoby jest dla pnia dnia drugiej przez Dziesięć Bogów. Wyjaśniamy, dlaczego bezpośrednie bogactwo i pośrednie bogactwo są odczytywane inaczej, mimo że oba są bogactwem.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Pień dnia to sama osoba",
        "blocks": [
          {
            "p": "Wśród ośmiu znaków saju, **pień dnia** (niebiański pień dnia urodzenia) odnosi się do samej osoby. Pozostałe siedem znaków jest odczytywanych jako środowisko, w którym znajduje się ten pień dnia."
          },
          {
            "p": "**Dziesięć Bogów** (十神) dzieli sposób, w jaki pień dnia postrzega inne znaki, na dziesięć kategorii. To, co mnie wspiera, to **zasoby**, to, co jest takie samo jak ja, to **rówieśnik**, to, co produkuję, to **wynik**, to, co kontroluję, to **bogactwo**, a to, co mną rządzi, to **władza** — każda z pięciu kategorii jest następnie podzielona według polaryzacji, co daje dziesięć."
          }
        ]
      },
      {
        "title": "Czym pień dnia każdej osoby jest dla drugiej",
        "blocks": [
          {
            "p": "To jest pierwszy element w kompatybilności. Gdy ustali się, jak pień dnia A postrzega pień dnia B, postrzeganie A przez B również zostaje ustalone, więc istnieje **tylko sześć możliwości**."
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
                  "Gwiazda sowy kradnie jedzenie (梟神奪食)",
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
            "p": "Strona, gdzie yin i yang są niedopasowane (Właściwe Bogactwo, Właściwa Władza, Właściwy Towarzysz) jest emocjonalna, podczas gdy ta sama strona (Zasoby, Władza, Towarzysz) jest bezemocjonalna, co jest zasadą, która odróżnia właściwą stronę od strony Dziesięciu Bogów."
          }
        ]
      },
      {
        "title": "Powód, dla którego patrzymy przez Dziesięć Bogów zamiast trzech elementów",
        "blocks": [
          {
            "p": "Istnieje metoda patrzenia na relację pnia dnia z trzema elementami (wzajemne generowanie, podobieństwo, wzajemne pokonywanie). Jest to proste, ale **yin i yang znikają.** 甲 (drewno yang) i 乙 (drewno yin) stają się tym samym 'podobieństwem' jak 甲 i 甲, a wzajemne pokonywanie jest spłaszczane do jednego wyniku bez kierunku ani yin i yang."
          },
          {
            "p": "Pozycja małżonka musi być oceniana w kontekście Dziesięciu Bogów. Jeśli elementy postrzegane przez pięć elementów i elementy postrzegane przez Dziesięć Bogów są mieszane w jednym silniku, będą dwa standardy dla tych samych dwóch znaków. Dlatego ujednolicamy według Dziesięciu Bogów."
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
            "p": "Nawet jeśli są tymi samymi zasobami, tylko emocjonalny **Właściwe Bogactwo** jest uważany za pozycję małżonka, podczas gdy Zasoby są odczytywane jako natura aktywności i bogactwa. Dlatego Właściwe Bogactwo i Właściwa Władza liczą się jako 2 punkty, podczas gdy Zasoby i Władza liczą się jako 1 punkt, a obie strony są sumowane — jeśli obie są postrzegane jako pozycje małżonka, to jest to najwyższa ocena."
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
            "p": "Oprócz wyniku, opisujemy **jaki kształt** mają pary pni dnia na ekranie wyników. Czy są podobnymi pozycjami, czy jedna strona wspiera drugą, czy jedna strona jest tłumiona — jeśli jest to relacja wspierająca lub tłumiąca, wyjaśniamy, która strona zajmuje tę pozycję."
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
            "p": "Podczas liczenia mocy pięciu elementów, nie liczymy po prostu ośmiu znaków tak, jak się pojawiają. Używamy wartości, która odzwierciedla ukryte niebiańskie pnie (地藏干) w ziemskich gałęziach oraz sezon energii miesiąca (月令), w którym się urodzono."
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
                "Jaka jest oś badania",
                "Liczba przypadków"
              ],
              "rows": [
                [
                  "Relacja pnia dnia · Natura małżonka",
                  "Pnie dnia obu osób — niebiańskie pnie",
                  "10"
                ],
                [
                  "Uzupełnienie pięciu elementów",
                  "Mój wspierający element i moc pięciu elementów przeciwnika",
                  "5"
                ],
                [
                  "Relacja gałęzi dnia",
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
            "p": "Ponieważ wartości nie wymieniają się między elementami, **znalezienie najwyższego punktu dla każdej gałęzi będzie ogólnym najwyższym punktem**. Nie ma potrzeby sprawdzania wszystkich kombinacji dat urodzenia — wystarczy ustawić dziesięć niebiańskich pni, dwanaście ziemskich gałęzi i pięć elementów."
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
    "title": "Czas urodzenia każdej osoby jest korygowany osobno",
    "summary": "Zgodność oblicza czas obu osób oddzielnie. Wyjaśniamy, jak działa korekta, gdy ich miejsca i epoki urodzenia się różnią, oraz co się zmienia, gdy tylko jedna z nich nie zna swojej godziny.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Zegar i słońce się rozjeżdżają",
        "blocks": [
          {
            "p": "W saju godzinę urodzenia odczytuje się z położenia słońca, a nie z zegara. Ale cały kraj stosuje jeden czas standardowy, więc zegar i słońce w danym miejscu się rozchodzą."
          },
          {
            "p": "Koreański czas standardowy opiera się na 135°E, a Seul leży na ok. 127°E. Słońce w Seulu osiąga najwyższy punkt później, niż wskazuje zegar, o około **32 minuty**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minuty mogą przesunąć filar godziny o jeden krok",
        "blocks": [
          {
            "p": "Osoba urodzona w Seulu o 11:40 według zegara urodziła się o 11:08 według prawdziwego czasu słonecznego, co nadal mieści się w godzinie Konia (午, 11:00–13:00). Urodzona o 11:20 według zegara, urodziła się o 10:48, co wypada w godzinie Węża (巳, 9:00–11:00). Korekta istnieje dla osób stojących dokładnie na takiej granicy."
          }
        ]
      },
      {
        "title": "Korekta jest stosowana do każdej osoby osobno",
        "blocks": [
          {
            "p": "Zgodność buduje tabelę każdej osoby oddzielnie. Dlatego ekran wprowadzania pyta o miejsce urodzenia **dla każdej osoby**. Jeśli jedna osoba urodziła się w Seulu, a druga za granicą, ich czasy są korygowane osobno, z różnymi długościami geograficznymi i strefami czasowymi."
          },
          {
            "p": "Lista miast liczy obecnie {cityCount} miejsc. W krajach o bardzo zróżnicowanej długości geograficznej miasta są rozdzielone, ponieważ **15° długości geograficznej przesuwa filar godziny o jeden krok**."
          },
          {
            "p": "Jeśli nic nie wybierzesz, używany jest Seul. Jeśli tylko jedna osoba urodziła się za granicą, a obie zostały na Seulu, przesunięty jest tylko filar godziny osoby urodzonej za granicą; wartości drugiej osoby nie są dotknięte, ponieważ korekta jest stosowana osoba po osobie."
          }
        ]
      },
      {
        "title": "Różne epoki używały różnych czasów standardowych",
        "blocks": [
          {
            "p": "Dwie osoby w różnym wieku żyły według czasu standardowego różnych okresów. Dlatego sama różnica długości geograficznej nie wystarcza."
          },
          {
            "ul": [
              "**Przed 1912** — Korea nie miała jednolitego czasu standardowego (lokalny czas średni).",
              "**1954–1961** — czas standardowy wynosił UTC+8:30.",
              "**1948–51 · 1955–60 · 1987–88** — obowiązywał czas letni."
            ]
          },
          {
            "p": "Inyeon-Link nie zakodowuje na stałe południka standardowego. Sprawdza **strefę czasową IANA** miejsca urodzenia, aby poznać czas standardowy faktycznie obowiązujący w tamtym momencie, dzięki czemu epoka każdej osoby jest uwzględniona, nawet gdy lata urodzenia się różnią."
          }
        ]
      },
      {
        "title": "Tuż po północy zmienia się pień dnia",
        "blocks": [
          {
            "p": "Korekta wynosi −32 minuty, więc osoba urodzona między 00:00 a 00:32 według zegara urodziła się według prawdziwego czasu słonecznego w **godzinie 23:00 poprzedniego dnia**. Data jest cofana razem z nią."
          },
          {
            "p": "W zgodności ma to ogromne znaczenie. Gdy filar dnia cofa się o dzień, zmieniają się zarówno pień dnia, jak i gałąź dnia, więc relacja pni dnia, Gwiazda Małżonka i relacja gałęzi dnia są przeliczane z innymi znakami, a razem z nimi zmienia się siła pięciu elementów."
          }
        ]
      },
      {
        "title": "Nic się nie stanie, jeśli tylko jedna osoba nie zna godziny",
        "blocks": [
          {
            "p": "Godzina urodzenia jest opcjonalna, a zgodność jest nadal obliczana, nawet jeśli tylko jedna z dwóch osób jej nie zna. Bez filaru godziny liczona jest tylko osoba, która jej nie zna, a ekran wyników o tym informuje. Wartości drugiej osoby pozostają bez zmian."
          },
          {
            "p": "Żadna z czterech pozycji zgodności nie używa filaru godziny bezpośrednio, ale wpływa on na siłę pięciu elementów, więc dokładniej jest go podać, jeśli się go zna. Zgodność zodiakalna daje tę samą wartość z godziną lub bez niej — [patrzy tylko na gałąź roku](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Prywatność",
    "title": "Jak unikamy przechowywania danych dwóch osób",
    "summary": "Zgodność prosi o podanie także daty urodzenia drugiej osoby. Wyjaśniamy technicznie, co znaczy, że dane żadnej z osób nie są nigdzie zapisywane, i co niesie ze sobą link do wyniku.",
    "backLabel": "Podstawa obliczeń",
    "sections": [
      {
        "title": "Wpisujesz cudze dane",
        "blocks": [
          {
            "p": "Ekran zgodności przyjmuje razem Twoją datę urodzenia i datę urodzenia drugiej osoby. Data urodzenia drugiej osoby to jej dane osobowe, dlatego osobno opisujemy, jak Inyeon-Link postępuje z obiema."
          },
          {
            "p": "Nie ma konta i nie prosimy o imię, adres e-mail ani numer telefonu. Otrzymujemy tylko dwie daty urodzenia oraz opcjonalnie godzinę urodzenia, miejsce urodzenia i płeć, a po zakończeniu obliczeń nic z tego nie pozostaje."
          },
          {
            "p": "Jest pole na nazwę wyświetlaną na ekranie wyników, ale służy ona wyłącznie do wyświetlania i nie jest używana w obliczeniach. Nie musisz wpisywać prawdziwego imienia."
          }
        ]
      },
      {
        "title": "Link do wyniku zawiera obie daty urodzenia",
        "blocks": [
          {
            "p": "Gdy obliczenia są gotowe, adres wygląda tak."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Część po znaku **#** zawiera dane obu osób. Nazywa się ją fragmentem i zgodnie ze standardowym działaniem sieci **przeglądarka nie wysyła jej do serwera**. Został zaprojektowany do wskazywania miejsca w dokumencie, więc serwer nigdy go nie widzi."
          },
          {
            "p": "Gdy otwierasz link do wyniku, przeglądarka odczytuje tę wartość i prosi o obliczenie; serwer otrzymuje potrzebne mu wartości, zwraca odpowiedź i je zapomina."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Zanim wyślesz link drugiej osobie",
        "blocks": [
          {
            "p": "Brak przechowywania na serwerze nie oznacza, że link jest tajny. Każdy, kto go dostanie, zobaczy obie daty urodzenia w takiej postaci, w jakiej są, a link zostawiony w czacie pozostaje w tym czacie niezależnie od naszego serwera. Prosimy wysyłać go, pamiętając, że zawiera dane drugiej osoby."
          }
        ]
      },
      {
        "title": "Dlaczego nic nie zostaje, choć obliczenia wykonuje serwer",
        "blocks": [
          {
            "p": "Do ustawienia tabeli saju potrzebna jest tablica kalendarzowa, która jest zbyt duża, by wysyłać ją do przeglądarki, więc obliczenia wykonuje serwer. Ale **po obsłużeniu żądania wartości nie są nigdzie więcej używane.** Nie ma kodu, który zapisywałby je do bazy danych."
          },
          {
            "p": "Jedyny pozostający zapis to licznik, który powstrzymuje jedną osobę przed wysłaniem zbyt wielu żądań w krótkim czasie. Nie zawiera daty urodzenia i nie przechowuje adresu IP w postaci pierwotnej; zlicza jedną wartość, zahaszowaną razem z datą, a ta wartość zmienia się wraz ze zmianą dnia."
          }
        ]
      },
      {
        "title": "Z czego rezygnujemy, nie przechowując danych",
        "blocks": [
          {
            "p": "Ponieważ nic nie jest przechowywane, z kilku rzeczy musieliśmy zrezygnować."
          },
          {
            "ul": [
              "**Nie można odzyskać wcześniejszego wyniku zgodności.** Aby zobaczyć go ponownie, trzeba zachować link.",
              "**Te same dwie osoby są przeliczane za każdym razem.** Nie ma pamięci podręcznej. Ale każda zasada jest deterministyczna, więc [te same dane zawsze dają tę samą wartość](/guide/how-compatibility).",
              "**Odświeżenie przywraca bramkę reklamową.** Nie ma gdzie zapisać, że ją obejrzano."
            ]
          }
        ]
      },
      {
        "title": "Jeśli kupujesz raport",
        "blocks": [
          {
            "p": "Jeśli kupujesz raport, w tym momencie zapisywany jest rekord transakcji: zapisy płatności mają ustawowy okres przechowywania, a bez historii zamówień nie można zrealizować zwrotu. Nawet wtedy **dwie daty urodzenia nie są dołączone do zamówienia**; podaje się je ponownie przy tworzeniu pliku PDF po potwierdzeniu płatności i używa tylko w tym momencie."
          },
          {
            "p": "Szczegóły znajdują się w [polityce prywatności](/privacy)."
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
            "p": "W tej samej sekcji znajduje się również **wykres relacji czterech filarów**. Jedynym, który wchodzi w wskaźnik dopasowania, jest gałąź dnia (日支) — ponieważ to pozycja małżonka — ale inne gałęzie roku, miesiąca i godziny również można odczytać za pomocą tego samego wykresu relacji."
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
            "p": "Wskaźnik dopasowania porównuje tylko **pnie dnia** obu osób. Jednak pozostałe trzy filary drugiej osoby są również określane przez Dziesięć Bogów według tych samych zasad. Chociaż możesz zrozumieć **co ta osoba dla mnie znaczy** patrząc tylko na pień dnia, nie możesz wiedzieć **jaką pozycję ta osoba zajmuje dla mnie**."
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
            "p": "Ta sekcja to **ogólny ranking**. Ekran pokazuje tylko zestawy, które dobrze pasują, ale raport klasyfikuje wszystkie dziesięć niebiańskich pni i dwanaście gałęzi ziemskich **całkowicie**. Jeśli spojrzysz tylko na najlepsze zestawy, nie będziesz wiedzieć 'kto jest następny' i 'który jest najmniej kompatybilny'."
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
