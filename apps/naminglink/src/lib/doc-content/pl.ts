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
            "p": "Naming-Link pomaga w **wyborze i zrozumieniu koreańskich imion** — hanja stojącego za imieniem dziecka, koreańskiego imienia do użycia za granicą, zapisu swojego imienia w Hangul oraz pamiątek, takich jak pieczęć czy wydrukowany raport."
          },
          {
            "p": "Zobaczenie wyników jest **darmowe i nie wymaga konta.** Płatne elementy nigdy nie sprzedają tego, co już pokazał ekran: otwierają więcej kandydatów, dodają pisemną analizę lub przekształcają wynik w coś, co możesz zachować."
          }
        ]
      },
      {
        "title": "Na czym opierają się nasze odpowiedzi",
        "blocks": [
          {
            "p": "Hanja pochodzą z **oficjalnej tabeli hanja imion wydanej przez Sąd Najwyższy Korei.** Każdy znak ma przypisaną stałą wymowę do użycia w imionach, a znaki spoza tabeli nie mogą być rejestrowane. Nie dodajemy do tej listy ani nie wybieramy ulubionych."
          },
          {
            "p": "Saju i figury pięciu elementów są obliczane na podstawie **koreańskiego kalendarza lunisolarnym**, z czasem urodzenia skorygowanym do rzeczywistego czasu słonecznego dla miejsca urodzenia. Odczyt jest tradycyjnym odniesieniem, a nie prognozą."
          },
          {
            "p": "Pisemne wyjaśnienia są generowane przez AI. Aby zapobiec **wymyślaniu rzeczy**, model otrzymuje tylko twoje dane wejściowe i nasze własne dane referencyjne, i jest instruowany, aby pozostać w ich obrębie. Przewodniki wyjaśniają to szczegółowo."
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
            "p": "Szczegóły firmy i jak się z nami skontaktować znajdują się na [stronie kontaktowej](/contact), w tym informacje o zwrotach, prośbach o prywatność i raportach o błędach."
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "Odczyty",
    "title": "Stałe odczyty — jedna wymowa na znak",
    "summary": "Oficjalna tabela nie tylko wymienia znaki. Ustala również, jak każdy z nich jest odczytywany, gdy jest używany w imieniu.",
    "backLabel": "Przewodnik",
    "sections": [
      {
        "title": "Stały odczyt dla każdego znaku",
        "blocks": [
          {
            "p": "Tabela hanja imion nie tylko decyduje, które znaki mogą być używane. **Ustala również, jak każdy znak jest odczytywany, gdy pojawia się w imieniu.** Ten stały odczyt jest tym, na co opiera się rejestracja."
          },
          {
            "p": "Większość hanja ma kilka możliwych odczytów. Imię, jednak, jest zapisane w dokumentach i wypowiadane na głos, więc potrzebuje dokładnie jednego. Tabela zatem przypisuje każdemu znakowi jego odczyt do użycia w imionach, a żaden inny odczyt nie może być zarejestrowany."
          }
        ]
      },
      {
        "title": "Dlatego dźwięk jest na pierwszym miejscu",
        "blocks": [
          {
            "p": "Dlatego Naming-Link ustala dźwięk przed poszukiwaniem hanja. Jeśli imię to \"지은\", znaczenie można wybrać tylko spośród znaków przypisanych do odczytu **지** i znaków przypisanych do odczytu **은**."
          },
          {
            "p": "Niezależnie od tego, jak dobre jest znaczenie, znak, którego odczyt nie pasuje, nie może być użyty dla tego imienia. Nigdy również nie zmieniamy dźwięku imienia, aby dopasować go do znaku — imię jest wypowiadane przez całe życie, a dźwięk jest ustalany najpierw, a hanja podąża za nim."
          }
        ]
      },
      {
        "title": "Nazwiska są poza tą tabelą",
        "blocks": [
          {
            "p": "To często jest źle rozumiane. **Tabela reguluje imię, a nie nazwisko.** Nazwisko podąża za tym, co już znajduje się w rejestrze rodzinnym, więc niektórzy ludzie używają znaków, które nie są w tabeli hanja imion."
          },
          {
            "p": "Dlatego Naming-Link traktuje hanja nazwisk inaczej. Pomagamy tylko w znalezieniu nazwiska, a także pozostawiamy pole do bezpośredniego wprowadzenia jednego, dla osób, których znak znajduje się poza tabelą. Nazwiska dwusylabowe, takie jak Namgung i Seonwoo, są wprowadzane w ten sam sposób."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Jak to działa",
    "title": "Jak zapisujemy twoje imię w Hangul",
    "summary": "Jak wybieramy dźwięki przy pisaniu obcego imienia w Hangul i dlaczego nie dołączamy hanja.",
    "backLabel": "Przewodnik",
    "sections": [
      {
        "title": "Przenosimy dźwięk, nie znaczenie",
        "blocks": [
          {
            "p": "Ta usługa zapisuje **twoje imię** w Hangul. Nie daje ci koreańskiego imienia. Michael staje się 마이클 — to samo imię, zapisane tak, aby Koreańczycy mogli je przeczytać i powiedzieć. Nie zamieniamy go na koreańskie imię, które przypadkowo ma podobne znaczenie."
          },
          {
            "p": "Jeśli chcesz koreańskiego imienia, **to jest inna usługa.** Jedna zachowuje twoje imię i zmienia tylko skrypt; druga proponuje nowe imię."
          }
        ]
      },
      {
        "title": "Dźwięki, których nie ma w koreańskim",
        "blocks": [
          {
            "p": "Każdy język ma dźwięki, których brakuje w koreańskim — f, v, z, th oraz różnice w samogłoskach, których koreański nie rozróżnia. Dlatego piszemy to, co **koreański mówca faktycznie mówi**, gdy czyta twoje imię na głos, zamiast transkrybować oryginalną fonetykę symbol po symbolu. Celem jest zapis, który będzie używany, a nie najbardziej technicznie wierny."
          },
          {
            "p": "Ten sam zapis może się różnić w zależności od pochodzenia imienia, dlatego pytamy o twój język i kraj i pracujemy na podstawie tej wymowy."
          }
        ]
      },
      {
        "title": "Kilka zapisów obok siebie",
        "blocks": [
          {
            "p": "Nie ma jedynej poprawnej odpowiedzi. Zapis najbliższy oryginalnemu dźwiękowi, ten najczęściej używany w Korei i ten najłatwiejszy do zapisania często są trzema różnymi rzeczami. Dlatego pokazujemy je razem i mówimy, co je różni."
          },
          {
            "p": "Jeśli żaden z nich nie wydaje się odpowiedni, możesz dodać wskazówkę dotyczącą dźwięku, którego chcesz, i uruchomić to ponownie — na przykład, że konkretna sylaba powinna być zapisana inaczej."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Brak hanja tutaj",
        "blocks": [
          {
            "p": "Nie dołączamy hanja do transliteracji. Hanja niosą znaczenie, a ten proces dotyczy dźwięku. Dopasowanie znaków tylko do dźwięku może prowadzić do znaczenia, którego nigdy nie chciałeś."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Jak to działa",
    "title": "Jak budujemy koreańskie imię",
    "summary": "Wybieramy spośród istniejących nazwisk, oceniamy, jak łatwo imię jest wypowiadane i pisane, oraz pytamy, do czego imię ma służyć.",
    "backLabel": "Przewodnik",
    "sections": [
      {
        "title": "Zaczynamy od nazwiska",
        "blocks": [
          {
            "p": "W Korei nazwisko znajduje się na pierwszym miejscu, a w przeciwieństwie do imion nie jest swobodnie wymyślane — dziedziczy się je. Dlatego sugerujemy tylko nazwiska, które rzeczywiście mają Koreańczycy. Nasza domyślna pula to **20 najczęściej występujących nazwisk**, które razem obejmują około 80% populacji."
          },
          {
            "p": "Jeśli twoje własne nazwisko przypadkiem pokrywa się z prawdziwym koreańskim pod względem brzmienia — Wang z 왕, Ye z 예 — stawiamy je na pierwszym miejscu. Utrzymanie związku z twoim oryginalnym imieniem jest ważniejsze niż losowo wybrane nazwisko."
          },
          {
            "p": "Możesz samodzielnie wybrać nazwisko lub pozwolić nam na rekomendację. Tak czy inaczej, będzie to **nazwisko, które istnieje**."
          }
        ]
      },
      {
        "title": "Łatwe do wymówienia, łatwe do napisania",
        "blocks": [
          {
            "p": "To jest imię, którym ludzie w Korei będą cię rzeczywiście nazywać, więc pierwszą rzeczą, którą sprawdzamy, jest to, czy Koreańczyk może usłyszeć je raz i zapisać. Imię, które trzeba literować za każdym razem, to ciężar, który nosisz, a nie my."
          },
          {
            "p": "Znaczenie też ma znaczenie. Koreańskie imiona zazwyczaj niosą ze sobą jakieś znaczenie, więc informujemy cię, jak imię się czyta i dlaczego je wybraliśmy — nie tylko o samym imieniu."
          }
        ]
      },
      {
        "title": "Pytamy, do czego imię jest potrzebne",
        "blocks": [
          {
            "p": "Imię do dokumentów uniwersyteckich nie jest tym samym, co imię, które przyjaciele będą wołać przez pokój, czy pseudonim, którego będziesz używać w Internecie. Pytamy, jak zamierzasz je używać i bierzemy to pod uwagę."
          }
        ]
      },
      {
        "kind": "note",
        "title": "To nie jest transliteracja",
        "blocks": [
          {
            "p": "Tutaj proponujemy **nowe koreańskie imię**. Jeśli chcesz, aby twoje istniejące imię zostało zapisane w Hangul — Michael jako 마이클 — zobacz [przewodnik po pisowni w Hangul](/guide/how-hangul-transliteration)."
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
            "p": "Napisz na **{email}**. Odpowiadamy w ciągu dwóch dni roboczych. W przypadku jakichkolwiek pytań dotyczących zamówienia — płatności, zwrotu, pliku, którego nie otrzymałeś — prosimy o podanie **numeru zamówienia lub e-maila, którym płacono**."
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
              "**Płatności i zwroty** — jeśli dokument nigdy nie został wydany lub kwota pobrana różni się od twojego zamówienia, zwracamy pełną kwotę. Zobacz [politykę zwrotów](/refund-policy).",
              "**Prywatność** — prośby o dostęp, poprawienie lub usunięcie twoich danych. Zobacz [politykę prywatności](/privacy).",
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
              "**E-mail** — {email}",
              "**Inspektor ochrony danych** — {privacyOfficer}",
              "**Dostawca hostingu** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Nie musisz podawać imienia ani daty urodzenia w swojej wiadomości. Darmowe wyniki nigdy nie są przechowywane na naszych serwerach, więc nie możemy ich ponownie znaleźć — numer zamówienia wystarczy."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "Zwyczaje",
    "title": "Znaki Tradycyjnie Unikane",
    "summary": "Nie jest to zabronione przez prawo, ale jest to zwyczaj. Napisaliśmy o tym, co było unikane i dlaczego, oraz jak to obsługujemy.",
    "backLabel": "Przewodnik użytkownika",
    "sections": [
      {
        "title": "Znaki, Które Są Prawnie Akceptowalne",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} znaków",
                "label": "Sporządzone znaki unikane"
              },
              {
                "value": "{avoidCommonlyUsed} znaków",
                "label": "Wśród nich znaki nadal powszechnie używane"
              }
            ]
          },
          {
            "p": "Istnieją znaki, które są uwzględnione na liście znaków do imion i **są prawnie akceptowalne**, ale są uważane za nieodpowiednie do imion."
          },
          {
            "p": "Podstawowa myśl jest taka, że **\"nadmierne znaczenie jest w rzeczywistości niepożądane.\"** Obejmuje to znaki, które są uważane za zbyt cenne (珍·寶), znaki postrzegane jako mające zbyt silną obecność (王·帝), oraz te, które są uważane za zbyt wielkie, aby osoba mogła je ucieleśniać, jak niebo czy bóstwa. Odzwierciedla to starą poczucie powściągliwości, wierząc, że imię może przyćmić osobę."
          },
          {
            "p": "**Jednak te znaki nie są bezużyteczne.** Nie jest to zakaz prawny, ale zwyczaj, a zwyczaje różnią się w zależności od regionu, rodziny i pokolenia, i mogą zmieniać się z czasem."
          },
          {
            "p": "W rzeczywistości, spośród {avoidTotal} znaków, które skompilowaliśmy, {avoidCommonlyUsed} są nadal powszechnie używane w imionach. Fakt, że są znane jako unikać, a mimo to są szeroko stosowane, wskazuje, że ten zwyczaj nie jest absolutny."
          }
        ]
      },
      {
        "title": "Jakie są kategorie?",
        "blocks": [
          {
            "p": "Obecnie skompilowane znaki są podzielone na siedem kategorii."
          },
          {
            "ul": [
              "**Skarby i przedmioty** — Znaki, które bezpośrednio odnoszą się do bogactwa lub przedmiotów",
              "**Niebo i natura** — Rzeczy takie jak słońce, księżyc i niebo, które są uważane za zbyt wielkie, by osoba mogła je ucieleśniać",
              "**Królowie i szlachta** — Znaki, które oznaczają status, takie jak król czy cesarz",
              "**Bóstwa** — Znaki odnoszące się do świętych krain, takie jak bogowie czy duchy",
              "**Pory roku i inne** — Znaki związane z określonymi czasami lub stanami",
              "**Zwierzęta** — Zwierzęta uważane za mające silną energię, takie jak smoki czy tygrysy",
              "**Nadmierność** — Znaki postrzegane jako mające zbyt duże lub przepełnione znaczenia"
            ]
          }
        ]
      },
      {
        "title": "Możesz dodać lub usunąć znaki samodzielnie",
        "blocks": [
          {
            "p": "Nie usuwamy tych znaków arbitralnie. **Na ekranie wejściowym udostępniliśmy dwie opcje, aby nadawca mógł wybrać, jak je obsłużyć.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Opcje dostępne na ekranie wejściowym",
        "blocks": [
          {
            "p": "**Wyklucz znaki unikać z kandydatów** — Jeśli włączone, są całkowicie wykluczone. Jeśli wyłączone, pozostają w wynikach z etykietą \"Tradycyjnie unikać\" oraz dołączonym powodem."
          },
          {
            "p": "**Wyklucz nawet powszechnie używane znaki** — To wyklucza znaki, które są na liście unikania, ale są rzeczywiście szeroko używane (圭·琳·玲·元·太·星·海, itd.). Jeśli włączone, liczba kandydatów zostanie znacznie zmniejszona."
          },
          {
            "p": "Domyślnie **nie wyklucza, a tylko wyświetla** je. Jeśli zostaną cicho usunięte z listy, może się wydawać tym, którzy chcą użyć tego znaku, że nie istnieje."
          }
        ]
      },
      {
        "title": "Zapewnienie, że opcje nie znikają",
        "blocks": [
          {
            "p": "Jeśli nie ma użytecznych znaków dla tej sylaby, zniesiemy wykluczenie dla tej sylaby i pokażemy kandydatów. Uważamy, że to lepsze niż brak jakichkolwiek opcji."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Podstawa usługi",
    "title": "Jaka jest podstawa konwersji imion na globalne?",
    "summary": "Dostarczamy kandydatów z pięciu perspektyw, zachowując systemy pisma każdego języka i używając tylko istniejących imion.",
    "backLabel": "Przewodnik użytkownika",
    "sections": [
      {
        "title": "Kandydaci są dostarczani z pięciu perspektyw",
        "blocks": [
          {
            "p": "Nie ma tylko jednego sposobu na przetłumaczenie imienia na inny język. W zależności od tego, czy zachować dźwięk, czy znaczenie, wybierz naturalne imię w lokalnym kontekście lub priorytetuj indywidualność, odpowiedzi będą się różnić. Dlatego zamiast przedstawiać jedną opcję, dostarczamy **jedną z każdej z pięciu różnych perspektyw**."
          },
          {
            "ul": [
              "**Opcja zachowania dźwięku** — Zachowuje dźwięk oryginalnego imienia tak bardzo, jak to możliwe",
              "**Opcja tłumaczenia znaczenia** — Tłumaczy znaczenie zawarte w imieniu na imię w tym języku",
              "**Opcja kompromisu dźwięku i znaczenia** — Bierze połowę z każdego",
              "**Opcja lokalnej autentyczności** — Wybiera imiona, które są rzeczywiście powszechnie używane w tym kontekście kulturowym",
              "**Opcja indywidualności i marki** — Priorytetuje imiona, które są zapadające w pamięć i charakterystyczne"
            ]
          },
          {
            "p": "Gwarantowane jest dostarczenie pięciu opcji. Ponieważ preferencje różnią się w zależności od osoby, uważamy, że lepiej jest umożliwić wybór, niż przedstawiać jedną jako poprawną odpowiedź."
          }
        ]
      },
      {
        "title": "Każdy język ma różne zasady systemu pisma",
        "blocks": [
          {
            "p": "Podczas tłumaczenia na język, który nie używa liter rzymskich, musi być zapisany w skrypcie tego języka. Dla japońskiego byłoby to kana i kanji; dla rosyjskiego, mongolskiego i kazachskiego byłoby to cyrylica; dla arabskiego byłoby to pismo arabskie; a dla tajskiego, khmerskiego i hindi byłoby to ich odpowiednie skrypty. Jeśli zapiszesz to w literach rzymskich i nazwiesz to \"japońskim imieniem\", nie może być używane w tym kraju."
          },
          {
            "p": "Dlatego mamy osobne zasady dla każdego systemu pisma języka, a serwer sprawdza jeszcze raz, aby upewnić się, że wyniki są w tym systemie pisma. Błędy, takie jak pomijanie nazwisk lub mieszanie w Hangul, są tutaj filtrowane."
          }
        ]
      },
      {
        "title": "Używamy imion, które są rzeczywiście używane",
        "blocks": [
          {
            "p": "Aby uniknąć tworzenia imion, które brzmią wiarygodnie, ale nie istnieją w tym kraju, opieramy nasze opcje na istniejących imionach. Imiona są używane w dokumentach i wprowadzeniach, więc jeśli lokalna osoba pomyśli \"nie ma takiego imienia\", nie może być używane."
          }
        ]
      },
      {
        "title": "Oddzielamy wybór i opis",
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
            "p": "Początkowo stworzyliśmy pięć perspektyw oddzielnie. Było to szybsze, ale **liczba kandydatów różniła się za każdym razem.** Gdy każda osoba wybierała kandydatów, występowały nakładki lub rozbieżności, a jeśli jeden nie powiódł się, ten kandydat całkowicie znikał, co skutkowało tylko dwoma lub trzema zamiast pięciu."
          },
          {
            "p": "Teraz, ponieważ określamy zestaw kandydatów i rozkład perspektyw jednocześnie, **liczba jest stała.** Nawet jeśli jeden opis się nie powiedzie, kandydaci pozostają i są prezentowani z krótkimi informacjami. Uważamy, że lepiej jest mieć zawsze tę samą liczbę, nawet jeśli zajmuje to trochę więcej czasu."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Podstawa usługi",
    "title": "Jaka jest podstawa dopasowywania znaczeń hanja?",
    "summary": "Najpierw dźwięki są ustalone, a tylko hanja, które mogą być zarejestrowane z tym dźwiękiem, są zbierane, a znaczenie jest postrzegane jako kombinacja, a nie pojedynczy znak.",
    "backLabel": "Przewodnik użytkownika",
    "sections": [
      {
        "title": "Najpierw ustal dźwięki",
        "blocks": [
          {
            "p": "Jeśli zdecydowałeś się na \"지은\", to **지** i **은** nie zmieniają się. Nie zmieniamy dźwięku imienia, aby dopasować go do hanja. Imię to coś, co jest wymawiane przez całe życie, i uważamy, że kolejność jest taka, że dźwięk jest najpierw ustalany, a następnie hanja."
          },
          {
            "figure": "hanja-match-flow",
            "caption": "To jest kolejność, w jakiej kandydaci są zawężani. Nie chodzi o wybór hanja najpierw i dopasowanie dźwięków, ale raczej o to, że dźwięki są najpierw, a tylko znaki wyznaczone do odczytu z tym dźwiękiem stają się kandydatami."
          }
        ]
      },
      {
        "title": "Zbieraj tylko hanja, które mogą być zarejestrowane z tym dźwiękiem",
        "blocks": [
          {
            "p": "Oficjalna tabela imion-hanja ma wyznaczone odczyty dla każdego znaku, gdy jest używany w imionach. Tylko znaki wyznaczone do odczytu jako **지** i **은** stają się kandydatami. Niezależnie od tego, jak dobre jest znaczenie, jeśli odczyt się nie zgadza, nie może być to hanja dla tego imienia."
          },
          {
            "p": "Zakres wyboru kandydatów to {characterTotal} znaków z tabeli Sądu Najwyższego. Znaki, które nie znajdują się w tej tabeli, nie są w ogóle prezentowane — nawet jeśli są pokazane, nie mogą być zarejestrowane."
          },
          {
            "p": "Liczba znaków w tabeli opublikowanej przez Sąd Najwyższy jest nieco większa niż ta. Tabela zawiera również **znaki bez standardowych kodów znaków**, które nie mogą być poprawnie wyświetlane na ekranach i dokumentach, dlatego te znaki zostały wykluczone z kandydatów. Musisz sprawdzić z odpowiednim organem, czy możesz zarejestrować te znaki."
          }
        ]
      },
      {
        "title": "Znaczenie postrzegane jest jako kombinacja, a nie pojedynczy znak",
        "blocks": [
          {
            "p": "Znaczenie każdego pojedynczego znaku jako dobrego i znaczenie odczytywane, gdy dwa znaki są połączone jako dobre, są różne. Imiona są odczytywane jako kombinacje, więc patrzymy na kombinacje razem. Jeśli masz konkretne znaczenia, które chcesz uwzględnić lub unikać, są one brane pod uwagę."
          },
          {
            "p": "Jeśli używasz znaku generacyjnego, ten znak jest stały, a kombinacje są poszukiwane z pozostałych pozycji. Nazwisko (성) nie jest ograniczone przez oficjalną tabelę imienną-hanja, więc traktuje się je oddzielnie."
          }
        ]
      },
      {
        "title": "Wskazujemy zwyczaje unikania bez ich usuwania",
        "blocks": [
          {
            "p": "Jeśli znak tradycyjnie uważany za unikany jest zawarty w kandydatach, nie usuwamy go, ale pokazujemy powód wraz z nim. To jest kwestia zwyczaju, a nie prawa, i możesz zdecydować się na całkowite wykluczenie go z ekranu wejściowego. Aby uzyskać więcej szczegółów, zobacz [Tradycyjnie Unikane Hanja](/guide/avoid)."
          }
        ]
      },
      {
        "title": "Informujemy również o powodach wykluczenia",
        "blocks": [
          {
            "p": "Pokazujemy, dlaczego niektóre znaki zostały wykluczone z kandydatów. Jeśli pokażemy tylko to, co zostało wybrane, nie będziesz mógł wiedzieć \"dlaczego ten?\" Jeśli nie ma użytecznych znaków dla tej sylaby, zniesiemy wykluczenie dla tej sylaby i pokażemy kandydatów."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jak odczytać wyniki",
        "blocks": [
          {
            "p": "Kandydaci to **perspektywy, a nie rankingi**. Pierwszy nie oznacza, że jest to najlepsze imię; są wybierane z różnych perspektyw. Te, które priorytetowo traktują kombinację znaczeń, te, które wybierają rzadkie znaki, i te, które podkreślają neutralność, są prezentowane obok siebie. Odpowiedź różni się w zależności od tego, którą perspektywę cenisz."
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
            "p": "Istnieją metody, które przypisują całkowite szczęście lub punkty liczbowe imionom, aby je ocenić. Naming-Link nie dostarcza tych liczb. Powody są czterokrotne."
          },
          {
            "p": "**Po pierwsze, nie ma tylko jednego standardu.** Metody obliczania szczęścia różnią się w zależności od szkoły, a to samo imię może być oceniane pozytywnie według jednego standardu i negatywnie według innego. Nie mamy podstaw, aby zdecydować, który z nich jest poprawny. To nieuczciwe przedstawiać jeden jako odpowiedź."
          },
          {
            "p": "**Po drugie, te obliczenia opierają się na liczbie pociągnięć.** Jednak dane Sądu Najwyższego w ogóle nie zawierają liczby pociągnięć. Co więcej, liczby pociągnięć mogą się różnić w zależności od tego, czy są liczone jako znaki zwykłe czy uproszczone oraz jak liczone są elementy. Ponieważ podstawowe liczby nie są definitywnie ustalone, wyniki zbudowane na ich podstawie nie mogą być definitywne."
          },
          {
            "p": "**Po trzecie, liczby wydają się bardziej solidne niż rzeczywistość.** Kiedy mówi \"87 punktów\", brzmi to jak wartość mierzona, a nie konwencjonalna interpretacja. Osoby nadające imiona mogą czuć presję związaną z tą liczbą, odsuwając na bok to, co naprawdę ważne (Czy jest przyjemnie je wymawiać? Czy znaczenie pasuje? Czy zawiera pożądane życzenia?)."
          },
          {
            "p": "**Po czwarte, nie ma sposobu na weryfikację.** Związek między imieniem a życiem osoby nie może być zweryfikowany. Przekształcenie czegoś, co nie może być uznane za dobre lub złe, w wynik prowadzi do liczby, której nie można potwierdzić, mimo że nie może być błędna."
          },
          {
            "p": "Używamy tylko tego, co można **udowodnić.** Oficjalna tabela imienno-hanja Sądu Najwyższego, wyznaczone odczyty dla każdego znaku oraz znaczenia wymienione w tabeli. Zamiast tego podajemy powody, dla których ten kandydat został wybrany i dlaczego niektóre znaki zostały wykluczone, pokazując **powody zamiast punktów**."
          }
        ]
      },
      {
        "title": "Nie używamy liczby pociągnięć",
        "blocks": [
          {
            "p": "Oficjalne dane imienne-hanja dostarczone przez Sąd Najwyższy nie zawierają liczby pociągnięć. Spośród {characterTotal} znaków, które otrzymaliśmy, **ani jeden znak nie ma liczby pociągnięć.**"
          },
          {
            "p": "Aby użyć liczby pociągnięć, musielibyśmy uzyskać liczby z innego źródła, ale jeśli nie możemy wyjaśnić, skąd te liczby pochodzą i jakie kryteria zostały użyte do ich policzenia, oznaczałoby to ocenianie imion na podstawie nieuzasadnionych liczb. Zdecydowaliśmy się nie oceniać imion na podstawie wartości, które nie mogą być udowodnione."
          }
        ]
      },
      {
        "title": "Używamy pięciu elementów tylko jako odniesienia",
        "blocks": [
          {
            "figure": "five-elements",
            "caption": "Relacje między pięcioma elementami. Poruszanie się wzdłuż okręgu reprezentuje wzajemne generowanie (相生), podczas gdy pomijanie jednego i naciskanie na inny reprezentuje wzajemne ograniczenie (相剋). Używamy tej relacji tylko jako pomocniczej osi do porównywania kandydatów."
          },
          {
            "p": "Jeśli wpisałeś swój miesiąc urodzenia, używamy uproszczonego odniesienia pięciu elementów na podstawie tego miesiąca jako pomocniczej osi do porównywania kandydatów. Jednak nie jest to precyzyjna analiza saju, i **nie twierdzimy, że imiona determinują los lub charakter osoby.**"
          },
          {
            "p": "W ostatecznym wyborze priorytetowo traktujemy dźwięki, kombinacje znaczeń, wartości, które rodzina chce przekazać, oraz to, czy można je rzeczywiście zarejestrować. Jeśli nie wpisałeś swojego miesiąca urodzenia, całkowicie wykluczamy odniesienie pięciu elementów z analizy — nie robimy arbitralnych założeń na temat nieznanych informacji."
          },
          {
            "p": "Jeśli chcesz precyzyjnej analizy opartej na saju, obejmujemy to w osobnym szczegółowym raporcie. Powód, dla którego nie priorytetujemy pięciu elementów w darmowym dopasowywaniu hanja, jest taki, że nie chcemy przedstawiać osądów opartych na pięciu elementach wyprowadzonych z niepełnej daty i godziny urodzenia, jakby były definitywne."
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
  "intro": "Zmiany w twoich warunkach użytkowania — ceny, polityki — są publikowane tutaj przed ich wejściem w życie. Wewnętrzne ulepszenia nie są wymienione: to, co się tutaj pojawia, to to, co musisz wiedzieć.",
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
      "title": "Strony kontaktowe i o nas są teraz otwarte",
      "body": [
        "Pytania, zwroty, prośby o prywatność i zgłoszenia błędów mają teraz jedno miejsce, do którego można się zgłosić. Strona kontaktowa w stopce zawiera nasz adres e-mail i dane firmy.",
        "Na czym opierają się nasze odpowiedzi i czego celowo nie robimy, jest napisane na stronie o nas."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Raporty PDF są wydawane w języku angielskim dla arabskiego i khmerskiego",
      "body": [
        "Jeśli korzystasz z usługi w języku arabskim lub khmerskim, PDF, który kupujesz, jest produkowany w języku angielskim. Narzędzie, które układa nasze dokumenty, nie może jeszcze ustawiać akapitów w tych dwóch skryptach.",
        "Ekran pozostaje w twoim języku, a twoje imię jest drukowane w twoim własnym skrypcie wewnątrz dokumentu.",
        "Ta sama uwaga pojawia się przed płatnością. Gdy narzędzie obsługuje te skrypty, powiemy o tym tutaj."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Płatności nie są jeszcze otwarte",
      "body": [
        "Tworzenie imienia i odczytywanie wyniku jest dzisiaj darmowe, a konto nie jest potrzebne.",
        "Płatne usługi nie są jeszcze dostępne w sprzedaży. Kwoty pokazane na stronie cenowej będą obowiązywać, gdy sprzedaż się rozpocznie."
      ]
    }
  }
} satisfies NoticeCopy;
