import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Polski — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const PL_DOCS = {
  "about": {
    "eyebrow": "O nas",
    "title": "O Naming-Link",
    "summary": "Pomagamy w wyborze i zrozumieniu koreańskich imion. Oto na czym opieramy nasze wyniki i czego celowo nie robimy.",
    "backLabel": "Strona główna",
    "sections": [
      {
        "title": "Co robimy",
        "blocks": [
          {
            "p": "Naming-Link pomaga w **wyborze i zrozumieniu koreańskich imion** — hanja za imieniem dziecka, koreańskie imię do użycia za granicą, zapisanie swojego imienia w Hangul oraz pamiątki, takie jak pieczęć czy wydrukowany raport."
          },
          {
            "p": "Zobaczenie wyników jest **darmowe i nie wymaga konta.** Płatne elementy nigdy nie sprzedają tego, co już pokazał ekran: otwierają więcej kandydatów, dodają pisemną analizę lub przekształcają wynik w coś, co możesz zatrzymać."
          }
        ]
      },
      {
        "title": "Na czym opierają się nasze odpowiedzi",
        "blocks": [
          {
            "p": "Hanja pochodzi z **oficjalnej tabeli hanja dla imion** wydanej przez Sąd Najwyższy Korei. Każdy znak ma ustalone odczytanie do użycia w imionach, a znaki spoza tabeli nie mogą być zarejestrowane. Nie dodajemy do tej listy ani nie wybieramy ulubionych."
          },
          {
            "p": "Saju i figury pięciu elementów są obliczane na podstawie **koreańskiego kalendarza lunisolarnym**, z czasem urodzenia skorygowanym do rzeczywistego czasu słonecznego dla miejsca urodzenia. Odczyt jest tradycyjnym odniesieniem, a nie prognozą."
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
              "**Płatność nie kupuje lepszej odpowiedzi.** Odkrycie z reklamą i odkrycie z płatnością daje dokładnie tę samą treść."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Usługa jest dostępna w 23 językach. Płatne PDF-y są wydawane w języku angielskim dla arabskiego i khmerskiego — renderer PDF nie obsługuje tych skryptów — i informujemy o tym na ekranie przed dokonaniem płatności."
          }
        ]
      },
      {
        "title": "Kontakt",
        "blocks": [
          {
            "p": "Szczegóły firmy i jak się z nami skontaktować znajdują się na stronie [kontaktowej](/contact), w tym zwroty, prośby o prywatność i zgłoszenia błędów."
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "Odczyty",
    "title": "Ustalone odczyty — jedno wymówienie na znak",
    "summary": "Oficjalna tabela nie tylko wymienia znaki. Ustala również, jak każdy z nich jest odczytywany, gdy jest używany w imieniu.",
    "backLabel": "Przewodnik",
    "sections": [
      {
        "title": "Ustalony odczyt dla każdego znaku",
        "blocks": [
          {
            "p": "Tabela hanja dla imion nie tylko decyduje, które znaki mogą być używane. **Ustala również, jak każdy znak jest odczytywany, gdy pojawia się w imieniu.** To ustalone odczytanie jest tym, na co opiera się rejestracja."
          },
          {
            "p": "Większość hanja ma kilka możliwych odczytów. Imię jednak jest zapisane w dokumentach i wypowiadane na głos, więc potrzebuje dokładnie jednego. Tabela przypisuje zatem każdemu znakowi jego odczyt do użycia w imionach, a żaden inny odczyt nie może być zarejestrowany."
          }
        ]
      },
      {
        "title": "Dlatego dźwięk jest najważniejszy",
        "blocks": [
          {
            "p": "Dlatego Naming-Link ustala dźwięk przed szukaniem hanja. Jeśli imię to \"지은\", znaczenie można wybrać tylko spośród znaków przypisanych do odczytu **지** i znaków przypisanych do odczytu **은**."
          },
          {
            "p": "Jakiekolwiek dobre znaczenie, znak, którego odczyt nie pasuje, nie może być użyty dla tego imienia. Nigdy również nie zmieniamy dźwięku imienia, aby dopasować go do znaku — imię jest wypowiadane przez całe życie, a dźwięk jest ustalany najpierw, a hanja podąża za nim."
          }
        ]
      },
      {
        "title": "Nazwiska są poza tą tabelą",
        "blocks": [
          {
            "p": "To często jest źle rozumiane. **Tabela reguluje imię, a nie nazwisko.** Nazwisko podąża za tym, co już znajduje się w rejestrze rodzinnym, więc niektórzy ludzie używają znaków, które nie znajdują się w tabeli hanja dla imion."
          },
          {
            "p": "Dlatego Naming-Link traktuje hanja nazwisk inaczej. Pomagamy tylko w znalezieniu nazwiska, a dla osób, których znak jest poza tabelą, zostawiamy pole do bezpośredniego wpisania. Dwusylabowe nazwiska, takie jak Namgung i Seonwoo, są wprowadzane w ten sam sposób."
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
            "p": "Każdy język ma dźwięki, których brakuje w koreańskim — f, v, z, th oraz różnice samogłoskowe, których koreański nie robi. Dla tych zapisujemy to, co **koreański mówca rzeczywiście mówi**, gdy czyta twoje imię na głos, zamiast transkrybować oryginalną fonetykę symbol po symbolu. Celem jest zapis, który będzie używany, a nie najbardziej technicznie wierny."
          },
          {
            "p": "Ten sam zapis może się różnić w zależności od tego, skąd pochodzi imię, więc pytamy o twój język i kraj i pracujemy na podstawie tej wymowy."
          }
        ]
      },
      {
        "title": "Kilka zapisów obok siebie",
        "blocks": [
          {
            "p": "Nie ma jednego poprawnego rozwiązania. Zapis najbliższy oryginalnemu dźwiękowi, ten najczęściej używany w Korei i ten najłatwiejszy do napisania to często trzy różne rzeczy. Dlatego pokazujemy je razem i mówimy, co je różni."
          },
          {
            "p": "Jeśli żaden z nich nie wydaje się odpowiedni, możesz dodać wskazówkę dotyczącą dźwięku, którego chcesz, i uruchomić to ponownie — na przykład, że konkretna sylaba powinna być zapisana inaczej."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nie ma tutaj hanja",
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
    "title": "Jak tworzymy koreańskie imię",
    "summary": "Wybieramy spośród istniejących nazwisk, oceniamy, jak łatwo imię jest wypowiadane i pisane, oraz pytamy, do czego imię ma służyć.",
    "backLabel": "Przewodnik",
    "sections": [
      {
        "title": "Zaczynamy od nazwiska",
        "blocks": [
          {
            "p": "W Korei nazwisko jest na pierwszym miejscu, a w przeciwieństwie do imion nie jest swobodnie wymyślane — dziedziczysz je. Dlatego sugerujemy tylko nazwiska, które rzeczywiście mają Koreańczycy. Nasza domyślna pula to **20 najczęstszych nazwisk**, które razem obejmują około 80% populacji."
          },
          {
            "p": "Jeśli twoje własne nazwisko przypadkiem pokrywa się z prawdziwym koreańskim pod względem dźwięku — Wang z 왕, Ye z 예 — pokazujemy to jako pierwsze. Utrzymanie związku z twoim oryginalnym imieniem jest ważniejsze niż losowo wybrane nazwisko."
          },
          {
            "p": "Możesz samodzielnie wybrać nazwisko lub pozwolić nam je polecić. Tak czy inaczej, będzie to **istniejące nazwisko**."
          }
        ]
      },
      {
        "title": "Łatwe do powiedzenia, łatwe do napisania",
        "blocks": [
          {
            "p": "To jest imię, którym ludzie w Korei będą cię rzeczywiście nazywać, więc pierwszą rzeczą, którą sprawdzamy, jest to, czy Koreańczyk może usłyszeć je raz i zapisać. Imię, które wymaga literowania za każdym razem, to ciężar, który nosisz, a nie my."
          },
          {
            "p": "Znaczenie również ma znaczenie. Koreańskie imiona zazwyczaj niosą znaczenie, więc mówimy, jak odczytuje się imię i dlaczego je wybraliśmy — nie tylko samo imię."
          }
        ]
      },
      {
        "title": "Pytamy, do czego imię ma służyć",
        "blocks": [
          {
            "p": "Imię do dokumentów uniwersyteckich nie jest tym samym, co imię, które przyjaciele będą wołać przez pokój, lub pseudonim, którego będziesz używać w Internecie. Pytamy, jak planujesz je używać i bierzemy to pod uwagę."
          }
        ]
      },
      {
        "kind": "note",
        "title": "To nie jest transliteracja",
        "blocks": [
          {
            "p": "Tutaj proponujemy **nowe koreańskie imię**. Jeśli chcesz, aby twoje istniejące imię było zapisane w Hangul — Michael jako 마이클 — zobacz [przewodnik po zapisie w Hangul](/guide/how-hangul-transliteration)."
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
    "summary": "Jak się z nami skontaktować w sprawie pytań, zwrotów, próśb o prywatność i zgłoszeń błędów, wraz z danymi naszej firmy.",
    "backLabel": "Strona główna",
    "sections": [
      {
        "title": "Napisz do nas",
        "blocks": [
          {
            "p": "Napisz na **{email}**. Odpowiadamy w ciągu dwóch dni roboczych. W przypadku jakichkolwiek pytań dotyczących zamówienia — płatności, zwrotu, pliku, którego nie otrzymałeś — prosimy o podanie **numeru zamówienia lub e-maila, którym dokonano płatności**."
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
              "**Płatności i zwroty** — jeśli dokument nigdy nie został wyprodukowany lub kwota pobrana różni się od twojego zamówienia, zwracamy pełną kwotę. Zobacz [politykę zwrotów](/refund-policy).",
              "**Prywatność** — prośby o dostęp, poprawę lub usunięcie twoich danych. Zobacz [politykę prywatności](/privacy).",
              "**Poprawki** — jeśli znaczenie, odczyt lub obliczenie hanja wydaje się błędne, powiedz nam. Wspomnienie, na którym ekranie i co wpisałeś, bardzo pomaga.",
              "**Cokolwiek innego** — partnerstwa i prasa kierują się na ten sam adres."
            ]
          }
        ]
      },
      {
        "title": "Szczegóły firmy",
        "blocks": [
          {
            "ul": [
              "**Podmiot prawny** — {companyName}",
              "**Przedstawiciel** — {representative}",
              "**Numer rejestracji działalności** — {businessNumber}",
              "**Numer rejestracji sprzedaży wysyłkowej** — {mailOrderNumber}",
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
  }
} satisfies Record<DocKey, DocPage>;

export const PL_NOTICES = {
  "kindLabels": {
    "service": "Usługa",
    "product": "Produkty",
    "policy": "Polityka",
    "support": "Wsparcie"
  },
  "intro": "Zmiany w twoich warunkach korzystania — ceny, polityki — są publikowane tutaj przed ich wejściem w życie. Wewnętrzne ulepszenia nie są wymieniane: to, co się tutaj pojawia, to to, co musisz wiedzieć.",
  "empty": {
    "title": "Brak ogłoszeń",
    "body": "Gdy coś się zmieni, pojawi się tutaj."
  },
  "effective": "Wchodzi w życie {date}",
  "pager": {
    "label": "Strony ogłoszeń",
    "newer": "← Nowsze",
    "older": "Starsze →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Strony kontaktowe i o nas są teraz otwarte",
      "body": [
        "Pytania, zwroty, prośby o prywatność i zgłoszenia błędów mają teraz jedno miejsce, do którego można się zgłosić. Strona kontaktowa w stopce zawiera nasz e-mail i dane firmy.",
        "Na czym opieramy nasze odpowiedzi i czego celowo nie robimy, jest napisane na stronie o nas."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Raporty PDF są wydawane w języku angielskim dla arabskiego i khmerskiego",
      "body": [
        "Jeśli korzystasz z usługi w języku arabskim lub khmerskim, PDF, który kupujesz, jest produkowany w języku angielskim. Narzędzie, które układa nasze dokumenty, nie może jeszcze ustawiać akapitów w tych dwóch skryptach.",
        "Ekran pozostaje w twoim języku, a twoje imię jest drukowane w twoim własnym skrypcie wewnątrz dokumentu.",
        "Ta sama uwaga pojawia się przed płatnością. Gdy narzędzie obsłuży te skrypty, powiemy o tym tutaj."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Płatności nie są jeszcze otwarte",
      "body": [
        "Tworzenie imienia i odczytywanie wyniku jest dzisiaj darmowe i nie wymaga konta.",
        "Płatne elementy nie są jeszcze w sprzedaży. Kwoty podane na stronie cenowej będą miały zastosowanie po otwarciu sprzedaży."
      ]
    }
  }
} satisfies NoticeCopy;
