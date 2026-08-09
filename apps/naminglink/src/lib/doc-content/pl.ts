import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Polski — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const PL_DOCS = {
  "about": {
    "eyebrow": "O nas",
    "title": "O Naming-Link",
    "summary": "Pomagamy w wyborze i zrozumieniu koreańskich imion. Oto, na czym opieramy nasze wyniki i co celowo pomijamy.",
    "backLabel": "Strona główna",
    "sections": [
      {
        "title": "Co robimy",
        "blocks": [
          {
            "p": "Naming-Link pomaga **wybrać i zrozumieć koreańskie imiona** — hanja stojące za imieniem dziecka, koreańskie imię do użycia za granicą, zapis imienia w Hangul oraz pamiątki, takie jak pieczęć lub wydrukowany raport."
          },
          {
            "p": "Zobaczenie wyników jest **darmowe i nie wymaga konta.** Płatne elementy nigdy nie sprzedają tego, co już pokazano na ekranie: otwierają więcej kandydatów, dodają pisemną analizę lub przekształcają wynik w coś, co możesz zachować."
          }
        ]
      },
      {
        "title": "Na czym opierają się nasze odpowiedzi",
        "blocks": [
          {
            "p": "Hanja pochodzą z **oficjalnej tabeli imion-hanja wydanej przez Sąd Najwyższy Korei.** Każdy znak ma przypisaną stałą wymowę do użycia w imionach, a znaki spoza tabeli nie mogą być rejestrowane. Nie dodajemy do tej listy ani nie wybieramy ulubionych."
          },
          {
            "p": "Saju i figury pięciu elementów są obliczane na podstawie **koreańskiego kalendarza lunisolarnym**, z czasem urodzenia skorygowanym do prawdziwego czasu słonecznego dla miejsca urodzenia. Odczyt jest tradycyjnym odniesieniem, a nie prognozą."
          },
          {
            "p": "Pisemne wyjaśnienia są produkowane przez AI. Aby zapobiec **wymyślaniu rzeczy**, model otrzymuje tylko twoje dane wejściowe i nasze własne dane referencyjne, i jest instruowany, aby pozostać w ich obrębie. Przewodniki wyjaśniają to szczegółowo."
          }
        ]
      },
      {
        "title": "Czego nie robimy",
        "blocks": [
          {
            "ul": [
              "**Nie wróżymy.** Nic tutaj nie obiecuje szczęścia, bogactwa ani ochrony.",
              "**Nie przechowujemy twojego imienia.** Darmowe wyniki nigdy nie są zapisywane na naszych serwerach, a płatne dokumenty są dostarczane bez zachowywania kopii pliku.",
              "**Płatność nie kupuje lepszej odpowiedzi.** Odblokowanie za pomocą reklamy i odblokowanie za pomocą płatności dają dokładnie tę samą treść."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Usługa jest dostępna w 23 językach. Płatne pliki PDF są wydawane w języku angielskim dla arabskiego i khmerskiego — renderer PDF nie obsługuje tych skryptów — i informujemy o tym na ekranie przed dokonaniem płatności."
          }
        ]
      },
      {
        "title": "Kontakt",
        "blocks": [
          {
            "p": "Szczegóły firmy i jak się z nami skontaktować znajdują się na [stronie kontaktowej](/contact), w tym informacje o zwrotach, prośbach o prywatność i zgłaszaniu błędów."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Jak działa Naming-Link",
    "title": "Na czym opieramy twoje imię",
    "summary": "Jak wybieramy koreańskie nazwisko, co sprawdzamy przed zasugerowaniem imienia oraz jak zapisujemy twoje imię w Hangul — z częściami, które celowo pomijamy.",
    "backLabel": "Przewodnik",
    "sections": [
      {
        "title": "",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal}",
                "label": "znaki imion-hanja"
              },
              {
                "value": "{syllableCount}",
                "label": "pokryte sylaby Hangul"
              },
              {
                "value": "{effectiveDate}",
                "label": "data wejścia tabeli"
              },
              {
                "value": "{avoidTotal}",
                "label": "tradycyjnie unikanie znaków"
              }
            ]
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "Odczyty",
    "title": "Stałe odczyty — jedna wymowa na znak",
    "summary": "Oficjalna tabela nie tylko wymienia znaki. Określa również, jak każdy z nich jest odczytywany, gdy jest używany w imieniu.",
    "backLabel": "Przewodnik",
    "sections": [
      {
        "title": "Stały odczyt dla każdego znaku",
        "blocks": [
          {
            "p": "Tabela imion-hanja nie tylko decyduje, które znaki mogą być używane. **Określa również, jak każdy znak jest odczytywany, gdy pojawia się w imieniu.** Ten stały odczyt jest tym, na co opiera się rejestracja."
          },
          {
            "p": "Większość hanja ma kilka możliwych odczytów. Imię jednak jest zapisane na dokumentach i wypowiadane na głos, więc potrzebuje dokładnie jednego. Tabela zatem przypisuje każdemu znakowi jego odczyt do użycia w imionach, a żaden inny odczyt nie może być zarejestrowany."
          }
        ]
      },
      {
        "title": "Dlatego dźwięk jest na pierwszym miejscu",
        "blocks": [
          {
            "p": "Dlatego Naming-Link ustala dźwięk przed szukaniem hanja. Jeśli imię to \"지은\", znaczenie można wybrać tylko spośród znaków przypisanych do odczytu **지** i znaków przypisanych do odczytu **은**."
          },
          {
            "p": "Niezależnie od tego, jak dobre jest znaczenie, znak, którego odczyt nie pasuje, nie może być użyty dla tego imienia. Nigdy również nie zmieniamy dźwięku imienia, aby dopasować go do znaku — imię jest wypowiadane przez całe życie, a dźwięk jest ustalany najpierw, a hanja następuje później."
          }
        ]
      },
      {
        "title": "Nazwiska są poza tą tabelą",
        "blocks": [
          {
            "p": "To często jest źle rozumiane. **Tabela reguluje imię, a nie nazwisko.** Nazwisko podąża za tym, co już znajduje się w rejestrze rodzinnym, więc niektórzy ludzie używają znaków, które nie znajdują się w tabeli imion-hanja."
          },
          {
            "p": "Dlatego Naming-Link traktuje hanja nazwisk inaczej. Pomagamy tylko w znalezieniu nazwiska i zostawiamy pole do bezpośredniego wprowadzenia, dla osób, których znak jest poza tabelą. Nazwiska dwu-sylabowe, takie jak Namgung i Seonwoo, są wprowadzane w ten sam sposób."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Jak to działa",
    "title": "Jak zapisujemy twoje imię w Hangul",
    "summary": "Jak wybieramy dźwięki przy zapisywaniu obcego imienia w Hangul i dlaczego nie dołączamy hanja.",
    "backLabel": "Przewodnik",
    "sections": [
      {
        "title": "Przenosimy dźwięk, nie znaczenie",
        "blocks": [
          {
            "p": "Ta usługa zapisuje **twoje imię** w Hangul. Nie daje ci koreańskiego imienia. Michael staje się 마이클 — to samo imię, zapisane tak, aby Koreańczycy mogli je przeczytać i powiedzieć. Nie zamieniamy go na koreańskie imię, które przypadkowo ma podobne znaczenie."
          },
          {
            "p": "Jeśli chcesz koreańskiego imienia, **to jest inna usługa**. Jedna zachowuje Twoje imię i zmienia tylko skrypt; druga proponuje nowe imię."
          }
        ]
      },
      {
        "title": "Brzmienia, których nie ma w koreańskim",
        "blocks": [
          {
            "p": "Każdy język ma dźwięki, których brakuje w koreańskim — f, v, z, th oraz różnice w samogłoskach, których koreański nie rozróżnia. Dla tych dźwięków zapisujemy to, co **koreański mówca faktycznie mówi**, gdy czyta Twoje imię na głos, zamiast transkrybować oryginalną fonetykę symbol po symbolu. Celem jest zapis, który będzie używany, a nie najbardziej technicznie wierny."
          },
          {
            "p": "Ten sam zapis może się różnić w zależności od miejsca pochodzenia imienia, dlatego pytamy o Twój język i kraj oraz pracujemy na podstawie tej wymowy."
          }
        ]
      },
      {
        "title": "Kilka zapisów obok siebie",
        "blocks": [
          {
            "p": "Nie ma jednej poprawnej odpowiedzi. Zapis najbliższy oryginalnemu dźwiękowi, ten najczęściej używany w Korei i ten najłatwiejszy do zapisania to często trzy różne rzeczy. Dlatego pokazujemy je razem i mówimy, co je różni."
          },
          {
            "p": "Jeśli żaden z nich nie wydaje się odpowiedni, możesz dodać wskazówkę na temat dźwięku, którego chcesz, i uruchomić to ponownie — na przykład, że konkretna sylaba powinna być zapisana inaczej."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Brak hanja tutaj",
        "blocks": [
          {
            "p": "Nie dołączamy hanja do transliteracji. Hanja mają znaczenie, a ten proces dotyczy dźwięku. Dopasowanie znaków tylko do dźwięku może prowadzić do znaczenia, którego nigdy nie chciałeś."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Jak to działa",
    "title": "Jak tworzymy koreańskie imię",
    "summary": "Wybieramy spośród istniejących nazwisk, oceniamy, jak łatwo imię jest wypowiedzieć i zapisać, oraz pytamy, do czego imię ma służyć.",
    "backLabel": "Przewodnik",
    "sections": [
      {
        "title": "Zaczynamy od nazwiska",
        "blocks": [
          {
            "p": "W Korei nazwisko jest na pierwszym miejscu, a w przeciwieństwie do imion nie jest swobodnie wymyślane — dziedziczysz je. Dlatego sugerujemy tylko nazwiska, które faktycznie mają Koreańczycy. Nasza domyślna pula to **20 najczęściej występujących nazwisk**, które razem obejmują około 80% populacji."
          },
          {
            "p": "Jeśli Twoje nazwisko przypadkiem pokrywa się z prawdziwym koreańskim pod względem dźwięku — Wang z 왕, Ye z 예 — stawiamy je na pierwszym miejscu. Utrzymanie wątku do Twojego oryginalnego imienia jest ważniejsze niż losowo wybrane nazwisko."
          },
          {
            "p": "Możesz samodzielnie wybrać nazwisko lub pozwolić nam je polecić. Tak czy inaczej, będzie to **istniejące nazwisko**."
          }
        ]
      },
      {
        "title": "Łatwe do powiedzenia, łatwe do zapisania",
        "blocks": [
          {
            "p": "To jest imię, którym ludzie w Korei będą Cię faktycznie nazywać, więc pierwszą rzeczą, którą sprawdzamy, jest to, czy Koreańczyk może usłyszeć je raz i zapisać. Imię, które trzeba literować za każdym razem, to ciężar, który nosisz, a nie my."
          },
          {
            "p": "Znaczenie też ma znaczenie. Koreańskie imiona zazwyczaj mają jakieś znaczenie, więc mówimy Ci, jak imię się czyta i dlaczego je wybraliśmy — nie tylko samo imię."
          }
        ]
      },
      {
        "title": "Pytamy, do czego imię ma służyć",
        "blocks": [
          {
            "p": "Imię do dokumentów uniwersyteckich nie jest tym samym, co imię, które przyjaciele będą wołać przez pokój, czy pseudonim, którego będziesz używać w Internecie. Pytamy, jak planujesz je używać i bierzemy to pod uwagę."
          }
        ]
      },
      {
        "kind": "note",
        "title": "To nie jest transliteracja",
        "blocks": [
          {
            "p": "Tutaj proponujemy **nowe koreańskie imię**. Jeśli chcesz, aby Twoje istniejące imię było zapisane w Hangul — Michael jako 마이클 — zobacz [przewodnik po zapisie w Hangul](/guide/how-hangul-transliteration)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Ogłoszenia",
    "title": "Ogłoszenia",
    "summary": "Gdzie ogłaszamy zmiany, które wpływają na sposób korzystania z usługi.",
    "backLabel": "Strona główna",
    "sections": []
  },
  "contact": {
    "eyebrow": "Kontakt",
    "title": "Skontaktuj się z nami",
    "summary": "Jak się z nami skontaktować w sprawie pytań, zwrotów, żądań dotyczących prywatności i zgłaszania błędów, z naszymi danymi firmy.",
    "backLabel": "Strona główna",
    "sections": [
      {
        "title": "Napisz do nas",
        "blocks": [
          {
            "p": "Napisz na **{email}**. Odpowiadamy w ciągu dwóch dni roboczych. W przypadku jakichkolwiek pytań dotyczących zamówienia — płatności, zwrotu, pliku, którego nie otrzymałeś — prosimy o podanie **numeru zamówienia lub e-maila, którym płaciłeś**."
          },
          {
            "p": "Zapytania telefoniczne: {customerCenter} (koreańskie godziny pracy)."
          }
        ]
      },
      {
        "title": "Co wysłać tutaj",
        "blocks": [
          {
            "ul": [
              "**Płatności i zwroty** — jeśli dokument nigdy nie został wyprodukowany lub kwota pobrana różni się od Twojego zamówienia, zwracamy pełną kwotę. Zobacz [politykę zwrotów](/refund-policy).",
              "**Prywatność** — prośby o dostęp, poprawienie lub usunięcie Twoich danych. Zobacz [politykę prywatności](/privacy).",
              "**Poprawki** — jeśli znaczenie, odczyt lub obliczenie hanja wydaje się błędne, daj nam znać. Wspomnienie, na którym ekranie i co wpisałeś, bardzo pomaga.",
              "**Cokolwiek innego** — partnerstwa i prasa kierują się na ten sam adres."
            ]
          }
        ]
      },
      {
        "title": "Dane firmy",
        "blocks": [
          {
            "ul": [
              "**Podmiot prawny** — {companyName}",
              "**Przedstawiciel** — {representative}",
              "**Numer rejestracji działalności** — {businessNumber}",
              "**Numer sprzedaży wysyłkowej** — {mailOrderNumber}",
              "**Adres** — {address}",
              "**Obsługa klienta** — {customerCenter}",
              "**Email** — {email}",
              "**Inspektor ochrony prywatności** — {privacyOfficer}",
              "**Dostawca hostingu** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Nie musisz podawać imienia ani daty urodzenia w swojej wiadomości. Darmowe wyniki nigdy nie są przechowywane na naszych serwerach, więc nie możemy ich ponownie wyszukać — wystarczy numer zamówienia."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "Zwyczaje",
    "title": "Postacie Tradycyjnie Unikane",
    "summary": "Nie jest to zabronione przez prawo, ale jest to zwyczaj. Napisaliśmy o tym, co było unikane i dlaczego, oraz jak to traktujemy.",
    "backLabel": "Przewodnik Użytkowania",
    "sections": [
      {
        "title": "Postacie, Które Są Prawnie Akceptowalne",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} postaci",
                "label": "Zebrane Unikane Postacie"
              },
              {
                "value": "{avoidCommonlyUsed} postaci",
                "label": "Wśród nich, postacie nadal powszechnie używane"
              }
            ]
          },
          {
            "p": "Są postacie, które są zawarte na liście postaci do imion i **są prawnie akceptowalne**, ale uważane są za nieodpowiednie do imion."
          },
          {
            "p": "Podstawowa myśl jest taka, że **\"nadmiarowe znaczenie jest w rzeczywistości niepożądane.\"** Obejmuje to postacie, które są uważane za zbyt cenne (珍 skarb, 寶 klejnot), postacie postrzegane jako mające zbyt silną obecność (王 król, 帝 cesarz) oraz te, które są uważane za zbyt wielkie, aby osoba mogła je ucieleśniać, jak niebo czy bóstwa. Odzwierciedla to starą poczucie powściągliwości, wierząc, że imię może przyćmić osobę."
          },
          {
            "p": "**Jednak te postacie nie są nieużywalne.** Nie jest to zakaz prawny, ale zwyczaj, a zwyczaje różnią się w zależności od regionu, rodziny i pokolenia, i mogą się zmieniać z czasem."
          },
          {
            "p": "W rzeczywistości, wśród {avoidTotal} postaci, które zebraliśmy, {avoidCommonlyUsed} są nadal powszechnie używane w imionach. Fakt, że są znane jako unikane, a mimo to nadal szeroko używane, wskazuje, że ten zwyczaj nie jest absolutny."
          }
        ]
      },
      {
        "title": "Jakie Kategorie Istnieją?",
        "blocks": [
          {
            "p": "Obecnie zebrane postacie są podzielone na siedem kategorii."
          },
          {
            "ul": [
              "**Skarby i Przedmioty** — Postacie, które bezpośrednio odnoszą się do bogactwa lub przedmiotów",
              "**Niebo i Natura** — Rzeczy takie jak słońce, księżyc i niebo, które są uważane za zbyt wielkie, aby osoba mogła je ucieleśniać",
              "**Królowie i Szlachta** — Postacie, które oznaczają status, jak król czy cesarz",
              "**Bóstwa** — Postacie, które odnoszą się do świętych sfer, jak bogowie czy duchy",
              "**Pory Roku i Inne** — Postacie związane z określonymi czasami lub stanami",
              "**Zwierzęta** — Zwierzęta uważane za mające silną energię, jak smoki czy tygrysy",
              "**Nadmierność** — Postacie postrzegane jako mające zbyt duże lub przepełnione znaczenia"
            ]
          }
        ]
      },
      {
        "title": "Możesz Dodać lub Usunąć Postacie Samodzielnie",
        "blocks": [
          {
            "p": "Nie usuwamy tych postaci arbitralnie. **Zapewniliśmy dwie opcje na ekranie wejściowym, aby nadawca mógł wybrać, jak je traktować.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dostępne Opcje na Ekranie Wejściowym",
        "blocks": [
          {
            "p": "**Wyklucz Unikane Postacie z Kandydatów** — Jeśli włączone, są całkowicie wykluczone. Jeśli wyłączone, pozostają w wynikach z etykietą \"Tradycyjnie Unikane\" oraz dołączonym powodem."
          },
          {
            "p": "**Wyklucz Nawet Powszechnie Używane Postacie** — To wyklucza postacie, które są na liście unikanych, ale są faktycznie szeroko używane (圭·琳·玲·元·太·星·海 itp.). Jeśli włączone, kandydaci będą znacznie ograniczeni."
          },
          {
            "p": "Domyślnie **nie wyklucza, a jedynie wyświetla** je. Jeśli zostaną cicho usunięte z listy, może to wyglądać dla tych, którzy chcą użyć tej postaci, jakby nie istniała."
          }
        ]
      },
      {
        "title": "Zapewnienie, że Opcje Nie Znikają",
        "blocks": [
          {
            "p": "Jeśli nie ma użytecznych postaci dla tej sylaby, zniesiemy wykluczenie dla tej sylaby i pokażemy kandydatów. Uważamy, że to lepsze niż brak jakichkolwiek opcji."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Podstawa Usługi",
    "title": "Na Jakiej Podstawie Opiera się Globalna Konwersja Imion?",
    "summary": "Zapewniamy kandydatów z pięciu perspektyw, zachowując systemy pisma każdego języka i używając tylko istniejących imion.",
    "backLabel": "Przewodnik Użytkowania",
    "sections": [
      {
        "title": "Kandydaci Są Dostarczani z Pięciu Perspektyw",
        "blocks": [
          {
            "p": "Nie ma tylko jednego sposobu na przetłumaczenie imienia na inny język. W zależności od tego, czy zachować dźwięk, czy znaczenie, wybrać naturalne imię w lokalnym kontekście lub priorytetować indywidualność, odpowiedzi będą się różnić. Dlatego zamiast przedstawiać jedną opcję, zapewniamy **jedną z każdej z pięciu różnych perspektyw**."
          },
          {
            "ul": [
              "**Opcja Zachowania Dźwięku** — Zachowuje dźwięk oryginalnego imienia tak bardzo, jak to możliwe",
              "**Opcja Tłumaczenia Znaczenia** — Tłumaczy znaczenie zawarte w imieniu na imię w tym języku",
              "**Opcja Kompromisu Dźwięku i Znaczenia** — Bierze połowę z każdego",
              "**Opcja Lokalnej Autentyczności** — Wybiera imiona, które są faktycznie powszechnie używane w tym kontekście kulturowym",
              "**Opcja Indywidualności i Marki** — Priorytetuje imiona, które są zapadające w pamięć i charakterystyczne"
            ]
          },
          {
            "p": "Gwarantowane jest dostarczenie pięciu opcji. Ponieważ preferencje różnią się w zależności od osoby, uważamy, że lepiej jest pozwolić na wybór, niż przedstawiać jedną jako poprawną odpowiedź."
          }
        ]
      },
      {
        "title": "Każdy Język Ma Różne Zasady Systemu Pisania",
        "blocks": [
          {
            "p": "Podczas tłumaczenia na język, który nie używa liter rzymskich, musi być zapisany w skrypcie tego języka. Dla japońskiego byłoby to kana i kanji; dla rosyjskiego, mongolskiego i kazachskiego byłoby to cyrylica; dla arabskiego, byłoby to pismo arabskie; a dla tajskiego, khmerskiego i hindi, byłoby to ich odpowiednie skrypty. Jeśli zapiszesz to w literach rzymskich i nazwiesz to \"japońskim imieniem\", nie może być używane w tym kraju."
          },
          {
            "p": "Dlatego mamy oddzielne zasady dla każdego systemu pisania języka, a serwer sprawdza jeszcze raz, aby upewnić się, że wyniki są w tym systemie pisania. Błędy takie jak pomijanie nazwisk lub mieszanie w Hangul są tutaj filtrowane."
          }
        ]
      },
      {
        "title": "Używamy Imion, Które Są Faktycznie Używane",
        "blocks": [
          {
            "p": "Aby uniknąć tworzenia imion, które brzmią wiarygodnie, ale nie istnieją w tym kraju, opieramy nasze opcje na istniejących imionach. Imiona są używane w dokumentach i wprowadzeniach, więc jeśli lokalna osoba myśli, że \"nie ma takiego imienia\", nie może być używane."
          }
        ]
      },
      {
        "title": "Oddzielamy Wybór i Opis",
        "blocks": [
          {
            "p": "Zajmujemy się zadaniem określenia pięciu kandydatów oddzielnie od zadania opisywania każdego kandydata w szczegółach. Ponieważ opis zajmuje dużo czasu, oddzielamy tę część, aby stworzyć ją jednocześnie."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dlaczego to zmieniono?",
        "blocks": [
          {
            "p": "Początkowo stworzyliśmy pięć perspektyw oddzielnie. Było to szybsze, ale **liczba kandydatów różniła się za każdym razem.** Gdy każda osoba wybierała kandydatów, występowały nakładki lub rozbieżności, a jeśli jeden kandydat nie przeszedł, znikał całkowicie, co skutkowało tylko dwoma lub trzema zamiast pięciu."
          },
          {
            "p": "Teraz, ponieważ określamy zestaw kandydatów i rozkład perspektyw jednocześnie, **liczba jest stała.** Nawet jeśli jedna z opisów nie zadziała, kandydaci pozostają i są prezentowani z krótkimi informacjami. Uważamy, że lepiej jest mieć zawsze tę samą liczbę, nawet jeśli zajmuje to trochę więcej czasu."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Podstawa usługi",
    "title": "Na jakiej podstawie dopasowuje się znaczenia hanja?",
    "summary": "Po pierwsze, dźwięki są ustalone, a tylko hanja, które można zarejestrować z tym dźwiękiem, są zbierane, a znaczenie jest postrzegane jako kombinacja, a nie pojedynczy znak.",
    "backLabel": "Przewodnik użytkownika",
    "sections": [
      {
        "title": "Po pierwsze, ustal dźwięki",
        "blocks": [
          {
            "p": "Jeśli zdecydowałeś się na \"지은\", to **지** i **은** nie zmieniają się. Nie zmieniamy dźwięku imienia, aby dopasować go do hanja. Imię to coś, co jest wymawiane przez całe życie, i uważamy, że kolejność jest taka, że dźwięk jest ustalany najpierw, a następnie hanja."
          },
          {
            "figure": "hanja-match-flow",
            "labels": {
              "soundStep": "① Ustal dźwięk",
              "soundNote": "Nigdy nie zmieniamy go, aby dopasować do znaku",
              "tableStep": "② Filtruj według oficjalnej tabeli",
              "tableBody": "tylko znaki przypisane do tego odczytu",
              "tableNote": "z wszystkich {total} znaków w tabeli",
              "tableNoteNoCount": "tylko znaki, które są w tabeli",
              "combineStep": "③ Odczytaj dwa razem",
              "combineNote": "znaczenie to sposób, w jaki para jest odczytywana, a nie każdy znak osobno"
            },
            "caption": "To jest kolejność, w jakiej kandydaci są zawężani. Nie chodzi o wybieranie hanja najpierw i dopasowywanie dźwięków, ale raczej o to, że dźwięki są najpierw, a tylko znaki wyznaczone do odczytu z tym dźwiękiem stają się kandydatami."
          }
        ]
      },
      {
        "title": "Zbieraj tylko hanja, które można zarejestrować z tym dźwiękiem",
        "blocks": [
          {
            "p": "Oficjalna tabela hanja imiennych ma przypisany odczyt dla każdego znaku, gdy jest używana w imionach. Tylko znaki przypisane do odczytu jako **지** i **은** stają się kandydatami. Niezależnie od tego, jak dobre jest znaczenie, jeśli odczyt się nie zgadza, nie może to być hanja dla tego imienia."
          },
          {
            "p": "Zakres wyboru kandydatów to {characterTotal} znaków z tabeli Sądu Najwyższego. Znaki, które nie znajdują się w tej tabeli, nie są w ogóle prezentowane — nawet jeśli są pokazane, nie mogą być zarejestrowane."
          },
          {
            "p": "Liczba znaków w tabeli opublikowanej przez Sąd Najwyższy jest nieco większa niż ta. Tabela zawiera również **znaki bez standardowych kodów znaków**, które nie mogą być prawidłowo wyświetlane na ekranach i dokumentach, więc te znaki zostały wykluczone z kandydatów. Musisz sprawdzić z odpowiednim organem, czy możesz zarejestrować te znaki."
          }
        ]
      },
      {
        "title": "Znaczenie postrzegane jest jako kombinacja, a nie pojedynczy znak",
        "blocks": [
          {
            "p": "Znaczenie każdego pojedynczego znaku jest dobre, a znaczenie odczytywane, gdy dwa znaki są połączone, jest inne. Imiona są odczytywane jako kombinacje, więc patrzymy na kombinacje razem. Jeśli masz konkretne znaczenia, które chcesz uwzględnić lub unikać, są one brane pod uwagę."
          },
          {
            "p": "Jeśli używasz znaku pokolenia, ten znak jest ustalony, a kombinacje są poszukiwane z pozostałych pozycji. Nazwisko (성) nie jest ograniczone przez oficjalną tabelę hanja imiennych, więc jest traktowane osobno."
          }
        ]
      },
      {
        "title": "Wskazujemy zwyczaje unikania bez ich usuwania",
        "blocks": [
          {
            "p": "Jeśli znak tradycyjnie uważany za unikany jest zawarty w kandydatach, nie usuwamy go, ale pokazujemy powód wraz z nim. To kwestia zwyczaju, a nie prawa, i możesz zdecydować się na całkowite wykluczenie go z ekranu wejściowego. Aby uzyskać więcej szczegółów, zobacz [Tradycyjnie Unikane Hanja](/guide/avoid)."
          }
        ]
      },
      {
        "title": "Informujemy również o powodach wykluczenia",
        "blocks": [
          {
            "p": "Pokazujemy, dlaczego niektóre znaki zostały wykluczone z kandydatów. Jeśli pokażemy tylko to, co zostało wybrane, nie będziesz wiedział \"dlaczego ten?\" Jeśli nie ma użytecznych znaków pozostałych dla tej sylaby, zniesiemy wykluczenie dla tej sylaby i pokażemy kandydatów."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jak odczytać wyniki",
        "blocks": [
          {
            "p": "Kandydaci to **perspektywy, a nie rankingi**. Pierwszy nie oznacza, że jest to najlepsze imię; są wybierani z różnych perspektyw. Te, które priorytetowo traktują kombinację znaczeń, te, które wybierają rzadkie znaki, i te, które podkreślają neutralność, są prezentowane obok siebie. Odpowiedź różni się w zależności od tego, którą perspektywę cenisz."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Nasze standardy",
    "title": "Czego nie używamy",
    "summary": "Nie przypisujemy całkowitego szczęścia ani punktów liczbowych, ani nie używamy liczby pociągnięć. Pięć elementów jest używane tylko jako oś pomocnicza. Oto powody.",
    "backLabel": "Przewodnik użytkownika",
    "sections": [
      {
        "title": "Powody, dla których nie przypisujemy całkowitego szczęścia ani punktów liczbowych",
        "blocks": [
          {
            "p": "Istnieją metody, które przypisują całkowite szczęście lub punkty liczbowe do imion, aby je ocenić. Naming-Link nie dostarcza tych liczb. Powody są cztery."
          },
          {
            "p": "**Po pierwsze, nie ma tylko jednego standardu.** Metody obliczania szczęścia różnią się w zależności od szkoły, a to samo imię może być oceniane pozytywnie według jednego standardu i negatywnie według innego. Nie mamy podstaw, aby zdecydować, który z nich jest poprawny. To nieuczciwe przedstawiać jeden jako odpowiedź."
          },
          {
            "p": "**Po drugie, te obliczenia opierają się na liczbie pociągnięć.** Jednak dane Sądu Najwyższego w ogóle nie zawierają liczby pociągnięć. Ponadto liczba pociągnięć może się różnić w zależności od tego, czy są liczone jako znaki zwykłe czy uproszczone oraz jak liczone są elementy. Ponieważ podstawowe liczby nie są definitywnie ustalone, wyniki oparte na nich nie mogą być definitywne."
          },
          {
            "p": "**Po trzecie, liczby wydają się bardziej solidne niż rzeczywistość.** Kiedy mówi się \"87 punktów\", brzmi to jak wartość mierzona, a nie konwencjonalna interpretacja. Osoby nadające mogą czuć presję związaną z tą liczbą, odsuwając na bok to, co naprawdę ważne (Czy jest przyjemnie wymawiać? Czy znaczenie pasuje? Czy zawiera pożądane życzenia?)."
          },
          {
            "p": "**Po czwarte, nie ma sposobu na weryfikację.** Związek między imieniem a życiem osoby nie może być zweryfikowany. Przekształcenie czegoś, co nie może być uznane za dobre lub złe, w wynik prowadzi do liczby, której nie można potwierdzić, mimo że nie może być błędna."
          },
          {
            "p": "Używamy tylko tego, co można **uzasadnić.** Oficjalna tabela hanja imiennych Sądu Najwyższego, przypisane odczyty dla każdego znaku oraz znaczenia wymienione w tabeli. Zamiast tego podajemy powody, dla których ten kandydat został wybrany i dlaczego niektóre znaki zostały wykluczone, pokazując **powody zamiast punktów**."
          }
        ]
      },
      {
        "title": "Nie używamy liczby pociągnięć",
        "blocks": [
          {
            "p": "Oficjalne dane hanja imiennych dostarczone przez Sąd Najwyższy nie zawierają liczby pociągnięć. Spośród {characterTotal} znaków, które otrzymaliśmy, **żaden znak nie ma liczby pociągnięć.**"
          },
          {
            "p": "Aby używać liczby pociągnięć, musielibyśmy uzyskać liczby z innego źródła, ale jeśli nie możemy wyjaśnić, skąd te liczby pochodzą i jakie kryteria były użyte do ich policzenia, oznaczałoby to ocenianie imion na podstawie nieuzasadnionych liczb. Zdecydowaliśmy się nie oceniać imion na podstawie wartości, które nie mogą być uzasadnione."
          }
        ]
      },
      {
        "title": "Używamy pięciu elementów tylko jako odniesienia",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Pięć elementów umieszczonych w kole: pokolenie przebiega między sąsiadami, kontrola pomija jeden",
              "wood": "drewno",
              "fire": "ogień",
              "earth": "ziemia",
              "metal": "metal",
              "water": "water",
              "saeng": "Pokolenie — każde rodzi swoje sąsiednie",
              "geuk": "Kontrola — każde powstrzymuje to, do którego przeskakuje"
            },
            "caption": "Relacje między pięcioma elementami. Poruszanie się wzdłuż koła reprezentuje wzajemne rodzenie się (相生), podczas gdy pomijanie jednego i naciskanie na kolejny reprezentuje wzajemne powstrzymywanie (相剋). Używamy tej relacji tylko jako dodatkowej osi do porównywania kandydatów."
          },
          {
            "p": "Jeśli wpisałeś swój miesiąc urodzenia, używamy uproszczonego odniesienia do pięciu elementów na podstawie tego miesiąca jako dodatkowej osi do porównywania kandydatów. Jednak nie jest to precyzyjna analiza saju, a **nie twierdzimy, że imiona determinują los lub charakter osoby.**"
          },
          {
            "p": "W ostatecznym wyborze priorytetem są dźwięki, kombinacje znaczeń, wartości, które rodzina chce przekazać, oraz to, czy można je faktycznie zarejestrować. Jeśli nie wpisałeś swojego miesiąca urodzenia, całkowicie wykluczamy odniesienie do pięciu elementów z analizy — nie robimy arbitralnych założeń na temat nieznanych informacji."
          },
          {
            "p": "Jeśli chcesz precyzyjnej analizy opartej na saju, obejmujemy to w osobnym szczegółowym raporcie. Powodem, dla którego nie priorytetujemy pięciu elementów w darmowym dopasowywaniu hanja, jest to, że nie chcemy przedstawiać osądów opartych na pięciu elementach pochodzących z niepełnej daty i godziny urodzenia, jakby były one ostateczne."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Płatne produkty",
    "title": "Co jest zawarte w płatnych produktach?",
    "summary": "Wyjaśniamy, co jest widoczne za darmo i jakie dodatkowe funkcje są dostępne po dokonaniu płatności za każdy produkt. Ceny są pobierane z rzeczywistych ustawień produktu.",
    "backLabel": "Przewodnik użytkownika",
    "sections": [
      {
        "title": "Co jest widoczne za darmo?",
        "blocks": [
          {
            "p": "Tworzenie imienia i przeglądanie wyników jest **darmowe**. Nie jest wymagana rejestracja członkowska. Możesz zobaczyć dopasowane znaczenia hanja, tworzenie koreańskich imion, globalną konwersję imion oraz notację wymowy w Hangul, wraz z zalecanymi wynikami i ich uzasadnieniami na ekranie."
          },
          {
            "p": "Płatne produkty **nie odsprzedają tego, co już zostało pokazane na ekranie.** Oferują więcej kandydatów, dodają więcej wyjaśnień lub tworzą format, który można przechowywać lub przesyłać."
          }
        ]
      },
      {
        "title": "Pełne ujawnienie wszystkich kandydatów — {priceUnlock}",
        "blocks": [
          {
            "p": "Zalecane wyniki są strukturalnie otwierane jeden po drugim. Podczas przeglądania reklam, jeden otwiera się na raz, podczas gdy ten produkt **otwiera wszystkie pozostałe kandydaty jednocześnie**."
          },
          {
            "p": "Jeśli nie spieszysz się, nie musisz kupować. **Wyniki z otwierania przez reklamy i te z płatności są całkowicie takie same** — to tylko kwestia czekania, a płatność nie przynosi lepszych kandydatów."
          }
        ]
      },
      {
        "title": "Szczegóły Hanja — Trzy etapy",
        "blocks": [
          {
            "p": "Istnieją trzy szczegółowe produkty w procesie wyboru hanja do dołączenia do imienia w Hangul."
          },
          {
            "ul": [
              "**Maksymalnie 5 szczegółowych kandydatów hanja** — {priceFiveDetail}. Możesz rozszerzyć wyjaśnienia dla maksymalnie pięciu kandydatów na ekranie. Nie ma PDF.",
              "**Maksymalnie 10 kandydatów hanja w rozszerzonym szczegółowym PDF** — {priceTenDetail}. Liczba kandydatów zwiększa się do dziesięciu, a dokument PDF jest dołączony.",
              "**Maksymalnie 10 kandydatów hanja z raportem saju i pięciu elementów** — {priceTenSaju}. Oprócz powyższego, zawiera wykres saju pochodzący z daty urodzenia oraz siły pięciu elementów, badając, dlaczego konkretne hanja pasuje do tego imienia z perspektywy pięciu elementów."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja jest ogólnie dostępną informacją",
        "blocks": [
          {
            "p": "Użyteczne hanja i ich znaczenia pochodzą z oficjalnej tabeli hanja nazw, ustalonej przez Sąd Najwyższy Korei, i wszystkie są ogólnie dostępne w dokumentach informacyjnych usługi. To, co sprzedają płatne produkty, nie jest informacją o hanja, ale **działaniem wyboru i wyjaśnienia go zgodnie z imieniem**."
          }
        ]
      },
      {
        "title": "PDF dla użytkowników globalnych",
        "blocks": [
          {
            "p": "Dokumenty dostępne do konwersji zagranicznych imion na koreańskie imiona lub pisania imion w Hangul. Ceny są zgodne z kwotami wyświetlanymi na ekranie płatności."
          },
          {
            "ul": [
              "**Raport Premium o Koreańskim Imieniu** — 3 strony. Zawiera okładkę kaligraficzną, znaczenie imienia oraz powód jego wyboru, a także interpretację saju i pięciu elementów.",
              "**Sztuka Imienia w Hangul** — 2 strony. Zawiera okładkę kaligraficzną i przewodnik po wymowie. Zawiera sposób pisania imienia w Hangul i sposób jego wymowy."
            ]
          }
        ]
      },
      {
        "title": "Stempel z imieniem",
        "blocks": [
          {
            "p": "Wycinamy imię stworzone na ekranie w fizyczny stempel i wysyłamy do Ciebie. Ceny różnią się w zależności od modelu — okrągły stempel {priceStampRound}, kwadratowy stempel {priceStampSquare}, stempel z hebanu {priceStampEbony}. Dostawa międzynarodowa jest również dostępna."
          },
          {
            "p": "**Od tego momentu produkty obejmują wysyłkę.** W przeciwieństwie do poprzednich przedmiotów, produkcja i wysyłka zajmują czas, a wymagany jest adres dostawy. Informacje o wysyłce są używane tylko do przetwarzania zamówienia i prawnego przechowywania, a po zakończeniu przetwarzania zostaną zniszczone po okresie określonym w polityce."
          }
        ]
      },
      {
        "title": "Rzeczy do wiedzenia przed zakupem",
        "blocks": [
          {
            "p": "**Produkty cyfrowe są dostarczane natychmiast po dokonaniu płatności.** Możesz anulować i otrzymać pełny zwrot w dowolnym momencie przed rozpoczęciem pobierania, ale po zakończeniu pobierania, wycofanie z powodu prostej zmiany zdania jest ograniczone (Artykuł 17, Ustęp 2 Ustawy o Handlu Elektronicznym). Ten warunek jest osobno uzgadniany na ekranie płatności."
          },
          {
            "p": "**Reklamacje dotyczące treści wyników nie są powodem do zwrotu.** Jednak jeśli dokument nie został utworzony, plik nie może być otwarty lub kwota płatności różni się od zamówienia, zostanie to przetworzone jako ponowne wydanie lub pełny zwrot."
          },
          {
            "p": "Szczegółowe warunki są opisane w [Polityce Zwrotów](/refund-policy) i [Przewodniku po Cennikach](/pricing). Ten tekst służy jako przewodnik po tym, co jest zawarte, a warunki prawne mają pierwszeństwo w tych dwóch dokumentach."
          }
        ]
      }
    ]
  },
  "guide/hanja-basics": {
    "eyebrow": "System",
    "title": "Czym jest oficjalna tabela hanja nazw?",
    "summary": "Hanja, które mogą być używane do imion dzieci, zostały ustalone przez Sąd Najwyższy w tabeli. To podsumowuje, czym jest tabela i dlaczego została ustalona.",
    "backLabel": "Przewodnik użytkownika",
    "sections": [
      {
        "title": "Czym jest oficjalna tabela hanja nazw?",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal} znaków",
                "label": "Oficjalna tabela hanja"
              },
              {
                "value": "{syllableCount} sylaby",
                "label": "Sylaby Hangul włączone"
              },
              {
                "value": "{effectiveDate}",
                "label": "Data odniesienia tabeli"
              }
            ]
          },
          {
            "p": "Nie możesz używać dowolnego znaku jako imienia dla dziecka. **Hanja, które mogą być używane do rejestracji urodzenia, zostały ustalone przez Sąd Najwyższy w tabeli, a tylko znaki w tej tabeli mogą być rejestrowane jako hanja dla imion.** To nazywa się oficjalną tabelą hanja nazw."
          }
        ]
      },
      {
        "title": "Dlaczego została ustalona?",
        "blocks": [
          {
            "p": "Istnieją dziesiątki tysięcy hanja. Wśród nich niektóre mają nieprzyjemne znaczenia, niektóre nie są już używane i nie mają znanych odczytów, a niektóre w ogóle nie mogą być wyświetlane na komputerach. Jeśli takie znaki są zawarte w imieniu, ostatecznym ciężarem jest osoba, która będzie nosić to imię przez całe życie. Imiona mogą być błędnie zapisane lub odczytywane w różnych miejscach, takich jak rejestracja mieszkańców, paszporty, banki i szkoły, co wymaga od jednostki wyjaśnienia swojego imienia."
          },
          {
            "p": "Dlatego wybrano metodę wstępnego określenia zakresu hanja, które mogą być używane w imionach. Zamiast być restrykcyjną regulacją, jest to bardziej mechanizm zapewniający, że imiona mogą być używane bez problemów przez całe życie danej osoby."
          }
        ]
      },
      {
        "title": "Na jakiej podstawie są definiowane te zasady?",
        "blocks": [
          {
            "p": "Sąd Najwyższy ustanawia oficjalną tabelę imienną hanja, która jest w razie potrzeby aktualizowana, a znaki są dodawane."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Materiały użyte w tym ekranie",
        "blocks": [
          {
            "p": "{publisher} oficjalne dane hanja · Stan na {effectiveDate}"
          },
          {
            "p": "{characterTotal} znaków obejmuje {syllableCount} sylab Hangul. Wartość skrótu oryginalnego pliku jest również przechowywana, więc jeśli tabela ulegnie zmianie, można sprawdzić, kiedy i co się zmieniło."
          }
        ]
      },
      {
        "title": "Liczba znaków ogłoszona przez Sąd Najwyższy różni się od tego, co pokazujemy",
        "blocks": [
          {
            "p": "**Oficjalna liczba hanja ogłoszona przez Sąd Najwyższy wynosi {announcedTotal} znaków, podczas gdy to, co prezentujemy jako kandydatów, to {characterTotal} znaków.** Nie ma powodu, aby ukrywać tę różnicę, więc stwierdzamy to wprost."
          },
          {
            "p": "Jeśli sprawdzisz dane zapytania Sądu Najwyższego, zawiera ono {listedTotal} znaków. Wśród nich **{excludedNoStandardCode} znaków** to **znaki, które nie mają miejsca w globalnym wspólnym kodzie znaków (Unicode).** System Sądu Najwyższego traktuje takie znaki numerami, które działają tylko w jego własnym systemie, a na ekranie są wyświetlane jako **obrazy** zamiast znaków."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dodanie większej liczby czcionek nie rozwiąże problemu",
        "blocks": [
          {
            "p": "Aby znak mógł pojawić się na ekranie, musi mieć **numer uzgodniony przez świat**, a czcionka zawiera obraz odpowiadający temu numerowi. Znaki, które nie mają numeru, nie mogą być uwzględnione w żadnej czcionce. Niezależnie od tego, ile czcionek dodamy, te znaki będą się pojawiać jako puste kwadraty."
          }
        ]
      },
      {
        "title": "Dlatego zostały usunięte z kandydatów",
        "blocks": [
          {
            "p": "**Wypełnianie listy znakami, które nie mogą być wyświetlane, nie jest pomocne.** Większość znaczeń tych znaków jest również pusta w naszych danych, co nie jest zgodne z metodą wyboru imion opartą na znaczeniach."
          },
          {
            "p": "**Bardziej istotny powód leży w osobie, która będzie używać imienia.** Imię to wartość, która będzie wprowadzana w różnych miejscach przez całe życie danej osoby. Znaki bez kodów znaków mogą nie być wprowadzane ani drukowane w systemach banków, szkół, szpitali czy paszportów, nawet po zakończeniu procesu rejestracji urodzenia. Dlatego nie możemy polecać takich znaków."
          },
          {
            "p": "Jednak **nie decydujemy, czy te znaki mogą być używane, czy nie.** Ponieważ są to znaki w tabeli Sądu Najwyższego, sama rejestracja może być możliwa. Jeśli naprawdę chcesz użyć tego znaku, sprawdź bezpośrednio w elektronicznym systemie rejestracji rodzinnej Sądu Najwyższego i **zapytaj odpowiedni organ o rzeczywistą użyteczność.**"
          }
        ]
      },
      {
        "title": "Jeśli chcesz użyć hanja, które nie znajduje się w tabeli",
        "blocks": [
          {
            "p": "Nie możesz ich użyć. Dokładniej mówiąc, te znaki nie będą rejestrowane jako hanja dla imienia, a imię zostanie zapisane tylko w Hangul. Jeśli chcesz używać hanja obok, musisz wybierać z tabeli."
          },
          {
            "p": "Dlatego nie prezentujemy znaków, które nie znajdują się w tabeli, jako kandydatów. Wszystkie hanja widoczne na ekranie to znaki, które mogą być faktycznie używane do rejestracji urodzenia. Pełna lista jest dostępna w [Pełnej Liście Oficjalnych Hanja](/guide/hanja)."
          }
        ]
      }
    ]
  },
  "guide/hanja": {
    "eyebrow": "Lista",
    "title": "Pełna Lista Oficjalnych Hanja",
    "summary": "Zorganizowaliśmy hanja, które mogą być używane do rejestracji urodzenia według spółgłoski początkowej. Możesz zobaczyć przypisaną wymowę i znaczenie dla każdego znaku, gdy jest używany w imionach.",
    "backLabel": "Przewodnik Użytkowania",
    "sections": [
      {
        "title": "Wyszukiwanie według Spółgłoski Początkowej",
        "slot": "chosung",
        "blocks": [
          {
            "p": "To obejmuje wszystkie {characterTotal} znaki z oficjalnej tabeli hanja Sądu Najwyższego. Każdy znak zawiera **wymowę, gdy jest używany w imionach** oraz jego znaczenie. Znaki, które nie są uwzględnione w tabeli, nie mogą być rejestrowane jako hanja imienne, więc powinieneś wybierać spośród znaków wymienionych tutaj."
          },
          {
            "p": "Dwie liczby na przycisku poniżej reprezentują **liczbę znaków z tą spółgłoską początkową** oraz **liczbę objętych sylab.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jeśli szukany znak nie znajduje się na liście",
        "blocks": [
          {
            "p": "Liczba znaków ogłoszona przez Sąd Najwyższy wynosi {announcedTotal}, ale ta lista zawiera {characterTotal} znaków. **Różnica {excludedNoStandardCode} znaków to te, które nie mogą być wyświetlane w żadnej czcionce z powodu braku miejsca w uniwersalnym kodzie znaków.** System Sądu Najwyższego pokazuje te znaki jako obrazy."
          },
          {
            "p": "Szczegółowo opisaliśmy powody tego oraz dlaczego nie polecamy tych znaków w [Czym jest Oficjalne Hanja?](/guide/hanja-basics). Powinieneś skonsultować się z odpowiednim organem w sprawie rzeczywistej użyteczności tych znaków."
          }
        ]
      },
      {
        "title": "Spółgłoski Początkowe z Nielicznymi Znakami",
        "slot": "tiny",
        "blocks": [
          {
            "p": "Poniższe spółgłoski początkowe mają bardzo niewiele oficjalnych hanja imiennych, dlatego wyświetliliśmy je tutaj bez osobnej strony."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jak Czytać Tę Listę",
        "blocks": [
          {
            "p": "Dla **伽 · 가 · 절**, gdy używasz \"伽\" w imieniu, jest on czytany jako **가** i oznacza \"świątynia\". Nawet dla tego samego hanja, wymowa, gdy jest używana w imionach, jest ustalana przez tabelę i nie może być używana w inny sposób."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const PL_NOTICES = {
  "kindLabels": {
    "service": "Usługa",
    "product": "Produkty",
    "policy": "Polityka",
    "support": "Wsparcie"
  },
  "intro": "Zmiany w warunkach korzystania — ceny, polityki — są publikowane tutaj przed ich wejściem w życie. Ulepszenia wewnętrzne nie są wymienione: to, co się tutaj pojawia, to to, co musisz wiedzieć.",
  "empty": {
    "title": "Brak powiadomień",
    "body": "Gdy coś się zmienia, pojawi się tutaj."
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
        "Pytania, zwroty, prośby o prywatność i zgłoszenia błędów mają teraz jedno miejsce. Strona kontaktowa w stopce zawiera nasz adres e-mail i dane firmy.",
        "Na czym opierają się nasze odpowiedzi i co celowo nie robimy, jest napisane na stronie o nas."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Raporty PDF są wydawane w języku angielskim dla arabskiego i khmerskiego",
      "body": [
        "Jeśli korzystasz z usługi w języku arabskim lub khmerskim, PDF, który kupujesz, jest produkowany w języku angielskim. Narzędzie, które układa nasze dokumenty, nie może jeszcze ustawiać akapitów w tych dwóch skryptach.",
        "Ekran pozostaje w Twoim języku, a Twoje imię jest wydrukowane w Twoim własnym skrypcie wewnątrz dokumentu.",
        "Ta sama uwaga pojawia się przed płatnością. Gdy narzędzie będzie wspierać te skrypty, powiemy o tym tutaj."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Płatności nie są jeszcze otwarte",
      "body": [
        "Tworzenie imienia i odczytywanie wyniku jest dzisiaj darmowe, a konto nie jest potrzebne.",
        "Płatne przedmioty nie są jeszcze w sprzedaży. Kwoty pokazane na stronie cenowej będą obowiązywać, gdy sprzedaż się otworzy."
      ]
    }
  }
} satisfies NoticeCopy;
