import type { DocPage, NoticeCopy } from "./types";
import type { GlobalDocKey } from "./keys";

/** Polski — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const PL_DOCS = {
  "about": {
    "eyebrow": "O nas",
    "title": "O Naming-Link",
    "summary": "Pomagamy w wyborze i zrozumieniu koreańskich imion. Oto na czym opieramy nasze wyniki i co celowo pomijamy.",
    "backLabel": "Strona główna",
    "sections": [
      {
        "title": "Co robimy",
        "blocks": [
          {
            "p": "Naming-Link pomaga **wybrać i zrozumieć koreańskie imiona** — hanja stojące za imieniem dziecka, koreańskie imię do użycia za granicą, zapis Hangul twojego własnego imienia oraz pamiątki, takie jak pieczęć czy wydrukowany raport."
          },
          {
            "p": "Zobaczenie wyników jest **darmowe i nie wymaga konta.** Płatne elementy nigdy nie sprzedają tego, co już pokazano na ekranie: otwierają więcej kandydatów, dodają pisemną analizę lub przekształcają wynik w coś, co możesz zachować."
          }
        ]
      },
      {
        "title": "Dla kogo jest każda usługa",
        "blocks": [
          {
            "p": "Są dwa rodzaje usług: jedna dla osób, które **już mają koreańskie imię**, i jedna dla osób, które **potrzebują jednego**. Wymagają różnych rzeczy od ciebie, więc są oferowane w różnych językach."
          },
          {
            "ul": [
              "**Oferowane w twoim języku** — zapisanie własnego imienia w Hangul oraz budowanie koreańskiego imienia. Te usługi są dla osób bez koreańskiego imienia, więc podążają za językiem, w którym przybywasz.",
              "**Oferowane tylko w języku koreańskim** — znalezienie hanja dla dziecka oraz przekształcenie koreańskiego imienia na takie do użycia za granicą. Obie wymagają **istniejącego imienia w Hangul**, aby działać, więc ekrany i ich przewodniki pozostają w języku koreańskim."
            ]
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
            "p": "Saju i figury pięciu elementów są obliczane na podstawie **koreańskiego kalendarza lunisolarnego**, z czasem urodzenia skorygowanym do prawdziwego czasu słonecznego dla miejsca urodzenia. Odczyt jest tradycyjnym odniesieniem, a nie prognozą."
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
                "label": "znaki hanja"
              },
              {
                "value": "{syllableCount}",
                "label": "syllaby Hangul objęte"
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
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Przewodniki poniżej obejmują usługi oferowane w twoim języku. Naming-Link ma również dwie usługi dla osób, które **już mają koreańskie imię** — znalezienie hanja dla dziecka oraz przekształcenie koreańskiego imienia na takie do użycia za granicą. Te wymagają istniejącego imienia w Hangul, więc zarówno usługi, jak i ich przewodniki są w języku koreańskim."
          },
          {
            "p": "[O nas](/about) wyjaśnia, która usługa jest dla kogo."
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
            "p": "Ta usługa zapisuje **twoje imię** w Hangul. Nie daje ci koreańskiego imienia. Michael staje się 마이클 — to samo imię, zapisane tak, aby Koreańczycy mogli je przeczytać i wymówić. Nie zamieniamy go na koreańskie imię, które przypadkiem ma podobne znaczenie."
          },
          {
            "p": "Jeśli chcesz koreańskiego imienia, **to jest inna usługa**. Jedna zachowuje twoje imię i zmienia tylko skrypt; druga proponuje nowe imię."
          }
        ]
      },
      {
        "title": "Dźwięki, których nie ma w koreańskim",
        "blocks": [
          {
            "p": "Każdy język ma dźwięki, których brakuje w koreańskim — f, v, z, th oraz różnice samogłoskowe, których koreański nie rozróżnia. Dla tych zapisujemy to, co **koreański mówca faktycznie mówi**, gdy czyta twoje imię na głos, zamiast transkrybować oryginalną fonetykę symbol po symbolu. Celem jest zapis, który będzie używany, a nie najbardziej technicznie wierny."
          },
          {
            "p": "Ten sam zapis może się różnić w zależności od pochodzenia imienia, więc pytamy o twój język i kraj i pracujemy na podstawie tej wymowy."
          }
        ]
      },
      {
        "title": "Kilka zapisów obok siebie",
        "blocks": [
          {
            "p": "Nie ma jedynej poprawnej odpowiedzi. Zapis najbliższy oryginalnemu dźwiękowi, ten najczęściej używany w Korei i ten najłatwiejszy do zapisania to często trzy różne rzeczy. Dlatego pokazujemy je razem i mówimy, co je różni."
          },
          {
            "p": "Jeśli żaden z nich nie wydaje się odpowiedni, możesz dodać wskazówkę na temat dźwięku, który chcesz, i uruchomić to ponownie — na przykład, że konkretna sylaba powinna być zapisana inaczej."
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
    "summary": "Wybieramy spośród istniejących nazwisk, oceniamy, jak łatwo imię jest wypowiedzieć i napisać, oraz pytamy, do czego ma służyć.",
    "backLabel": "Przewodnik",
    "sections": [
      {
        "title": "Zaczynamy od nazwiska",
        "blocks": [
          {
            "p": "W Korei nazwisko jest na pierwszym miejscu, a w przeciwieństwie do imion nie jest swobodnie wymyślane — dziedziczysz je. Dlatego sugerujemy tylko nazwiska, które rzeczywiście mają Koreańczycy. Nasza domyślna pula to **20 najczęściej występujących nazwisk**, które razem obejmują około 80% populacji."
          },
          {
            "p": "Jeśli twoje nazwisko przypadkiem pokrywa się z prawdziwym koreańskim pod względem dźwięku — Wang z 왕, Ye z 예 — stawiamy je na pierwszym miejscu. Utrzymanie związku z twoim oryginalnym imieniem jest ważniejsze niż losowo wybrane nazwisko."
          },
          {
            "p": "Możesz samodzielnie wybrać nazwisko lub pozwolić nam zaproponować jedno. Tak czy inaczej, będzie to **istniejące nazwisko**."
          }
        ]
      },
      {
        "title": "Łatwe do wypowiedzenia, łatwe do napisania",
        "blocks": [
          {
            "p": "To jest imię, którym ludzie w Korei będą cię rzeczywiście nazywać, więc pierwszą rzeczą, którą sprawdzamy, jest to, czy Koreańczyk może usłyszeć je raz i zapisać. Imię, które trzeba literować za każdym razem, to ciężar, który nosisz, a nie my."
          },
          {
            "p": "Znaczenie też ma znaczenie. Koreańskie imiona zazwyczaj niosą ze sobą znaczenie, więc informujemy cię, jak imię się czyta i dlaczego je wybraliśmy — nie tylko samo imię."
          }
        ]
      },
      {
        "title": "Pytamy, do czego ma służyć imię",
        "blocks": [
          {
            "p": "Imię do dokumentów uniwersyteckich nie jest tym samym, co imię, które przyjaciele będą wołać przez pokój, czy pseudonim, którego będziesz używać online. Pytamy, jak planujesz je używać i bierzemy to pod uwagę."
          }
        ]
      },
      {
        "kind": "note",
        "title": "To nie jest transliteracja",
        "blocks": [
          {
            "p": "Tutaj proponujemy **nowe koreańskie imię**. Jeśli chcesz, aby twoje istniejące imię było zapisane w Hangul — Michael jako 마이클 — zobacz [przewodnik po pisowni Hangul](/guide/how-hangul-transliteration)."
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
    "summary": "Jak się z nami skontaktować w sprawie pytań, zwrotów, próśb o prywatność i zgłaszania błędów, z danymi naszej firmy.",
    "backLabel": "Strona główna",
    "sections": [
      {
        "title": "Napisz do nas",
        "blocks": [
          {
            "p": "Napisz na **{email}**. Odpowiadamy w ciągu dwóch dni roboczych. W przypadku jakichkolwiek pytań dotyczących zamówienia — płatności, zwrotu, pliku, którego nie otrzymałeś — prosimy o dołączenie **numeru zamówienia lub e-maila, którym płaciłeś**."
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
              "**Płatności i zwroty** — jeśli dokument nigdy nie został wyprodukowany lub kwota pobrana różni się od twojego zamówienia, zwracamy w całości. Zobacz [politykę zwrotów](/refund-policy).",
              "**Prywatność** — prośby o dostęp, poprawienie lub usunięcie twoich danych. Zobacz [politykę prywatności](/privacy).",
              "**Korekcje** — jeśli znaczenie, odczyt lub obliczenia hanja wydają się błędne, daj nam znać. Wspomnienie, na którym ekranie i co wpisałeś, bardzo pomaga.",
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
            "p": "Nie musisz dołączać imienia ani daty urodzenia w swojej wiadomości. Darmowe wyniki nigdy nie są przechowywane na naszych serwerach, więc nie możemy ich ponownie wyszukać — numer zamówienia wystarczy."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Nasze standardy",
    "title": "Czego nie używamy",
    "summary": "Nie przypisujemy całkowitego szczęścia ani punktów liczbowych, ani nie używamy liczby kresek. Pięć elementów jest używanych tylko jako dodatkowa oś. Oto powody.",
    "backLabel": "Przewodnik po użytkowaniu",
    "sections": [
      {
        "title": "Powody, dla których nie przypisujemy całkowitego szczęścia ani punktów liczbowych",
        "blocks": [
          {
            "p": "Istnieją metody, które przypisują całkowite szczęście lub punkty liczbowe do imion, aby je ocenić. Naming-Link nie dostarcza tych liczb. Powody są cztery."
          },
          {
            "p": "**Po pierwsze, nie ma tylko jednego standardu.** Metody obliczania fortuny różnią się w zależności od szkoły, a to samo imię może być oceniane pozytywnie według jednego standardu i negatywnie według innego. Nie mamy podstaw, aby zdecydować, który z nich jest poprawny. Niezgodne jest przedstawianie jednego jako odpowiedzi."
          },
          {
            "p": "**Po drugie, te obliczenia opierają się na liczbie kresek.** Jednak dane z Sądu Najwyższego w ogóle nie zawierają liczby kresek. Co więcej, liczba kresek może się różnić w zależności od tego, czy są liczone jako znaki zwykłe czy uproszczone oraz jak liczone są elementy podstawowe. Ponieważ podstawowe liczby nie są definitywnie ustalone, wyniki oparte na nich nie mogą być definitywne."
          },
          {
            "p": "**Po trzecie, liczby wydają się bardziej solidne niż rzeczywistość.** Kiedy mówi \"87 punktów\", brzmi to jak zmierzona wartość, a nie konwencjonalna interpretacja. Osoby wybierające imię mogą czuć presję ze strony tej liczby, odsuwając na bok to, co naprawdę ważne (Czy jest przyjemnie je wymawiać? Czy znaczenie pasuje? Czy zawiera pożądane życzenia?)."
          },
          {
            "p": "**Po czwarte, nie ma sposobu na weryfikację.** Związek między imieniem a życiem osoby nie może być zweryfikowany. Przekształcenie czegoś, co nie może być uznane za dobre lub złe, w wynik prowadzi do liczby, której nie można potwierdzić, mimo że nie może być błędna."
          },
          {
            "p": "Używamy tylko tego, co można **uzasadnić.** Oficjalna tabela imiennych hanja z Sądu Najwyższego, przypisane odczyty dla każdego znaku oraz znaczenia wymienione w tabeli. Zamiast tego podajemy powody, dla których ten kandydat został wybrany i dlaczego niektóre znaki zostały wykluczone, pokazując **powody zamiast wyników**."
          }
        ]
      },
      {
        "title": "Nie używamy liczby kresek",
        "blocks": [
          {
            "p": "Oficjalne dane dotyczące imiennych hanja dostarczone przez Sąd Najwyższy nie zawierają liczby kresek. Spośród {characterTotal} znaków, które otrzymaliśmy, **ani jeden znak nie ma liczby kresek.**"
          },
          {
            "p": "Aby użyć liczby kresek, musielibyśmy uzyskać liczby z innego źródła, ale jeśli nie możemy wyjaśnić, skąd te liczby pochodzą i jakie kryteria zostały użyte do ich policzenia, oznaczałoby to ocenianie imion na podstawie nieuzasadnionych liczb. Zdecydowaliśmy się nie oceniać imion na podstawie wartości, które nie mogą być uzasadnione."
          }
        ]
      },
      {
        "title": "Używamy pięciu elementów tylko jako odniesienia",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Pięć elementów umieszczonych w kole: generacja przebiega między sąsiadami, kontrola pomija jeden",
              "wood": "drewno",
              "fire": "ogień",
              "earth": "ziemia",
              "metal": "metal",
              "water": "woda",
              "saeng": "Generacja — każdy rodzi swojego sąsiada",
              "geuk": "Kontrola — każdy ogranicza tego, którego pomija"
            },
            "caption": "Relacje między pięcioma elementami. Poruszanie się wzdłuż koła reprezentuje wzajemną generację (相生), podczas gdy pomijanie jednego i naciskanie reprezentuje wzajemne ograniczenie (相剋). Używamy tej relacji tylko jako dodatkowej osi do porównywania kandydatów."
          },
          {
            "p": "Jeśli wprowadziłeś swój miesiąc urodzenia, używamy uproszczonego odniesienia pięciu elementów na podstawie tego miesiąca jako dodatkowej osi do porównywania kandydatów. Jednak nie jest to precyzyjna analiza saju, a **nie twierdzimy, że imiona determinują los lub charakter osoby.**"
          },
          {
            "p": "W ostatecznym wyborze priorytetem są dźwięki, kombinacje znaczeń, wartości, które rodzina chce przekazać, oraz to, czy można je faktycznie zarejestrować. Jeśli nie wprowadziłeś swojego miesiąca urodzenia, całkowicie wykluczamy odniesienie pięciu elementów z analizy — nie robimy arbitralnych założeń na temat nieznanych informacji."
          },
          {
            "p": "Jeśli chcesz precyzyjnej analizy opartej na saju, obejmujemy to w osobnym szczegółowym raporcie. Powód, dla którego nie priorytetujemy pięciu elementów w darmowym dopasowywaniu hanja, polega na tym, że nie chcemy przedstawiać ocen opartych na pięciu elementach wyprowadzonych z niekompletnej daty i godziny urodzenia, jakby były definitywne."
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
            "p": "Płatne produkty **nie odsprzedają tego, co już zostało pokazane na ekranie.** Otwierają więcej kandydatów, dodają więcej wyjaśnień lub tworzą format, który można przechowywać lub przesyłać."
          }
        ]
      },
      {
        "title": "Pełne ujawnienie wszystkich kandydatów — {priceUnlock}",
        "blocks": [
          {
            "p": "Zalecane wyniki są strukturalnie otwierane jeden po drugim. Podczas przeglądania reklam, jeden otwiera się na raz, podczas gdy ten produkt **otwiera wszystkie pozostałe kandydatów jednocześnie**."
          },
          {
            "p": "Jeśli nie spieszysz się, nie musisz kupować. **Wyniki z otwierania przez reklamy i te z płatności są całkowicie takie same** — to tylko kwestia czekania, a płatność nie przynosi lepszych kandydatów."
          }
        ]
      },
      {
        "title": "Szczegóły hanja — trzy etapy",
        "blocks": [
          {
            "p": "Istnieją trzy szczegółowe produkty w procesie wyboru hanja do dołączenia do imienia w Hangul."
          },
          {
            "ul": [
              "**Maksymalnie 5 szczegółowych kandydatów hanja** — {priceFiveDetail}. Możesz rozszerzyć wyjaśnienia dla maksymalnie pięciu kandydatów na ekranie. Nie ma PDF.",
              "**Maksymalnie 10 rozszerzonych szczegółowych kandydatów hanja w PDF** — {priceTenDetail}. Liczba kandydatów wzrasta do dziesięciu, a dokument PDF jest dołączony.",
              "**Maksymalnie 10 kandydatów hanja z raportem saju i pięciu elementów** — {priceTenSaju}. Oprócz powyższego, zawiera wykres saju wyprowadzony z daty urodzenia oraz siły pięciu elementów, badając, dlaczego konkretne hanja pasuje do tego imienia z perspektywy pięciu elementów."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja jest publicznie dostępną informacją",
        "blocks": [
          {
            "p": "Użyteczne hanja i ich znaczenia pochodzą z oficjalnej tabeli imiennych hanja ustalonej przez Sąd Najwyższy Korei, a wszystkie są publicznie dostępne w dokumentach pomocniczych usługi. To, co sprzedają płatne produkty, to nie informacje o hanja, ale **akt wyboru i wyjaśnienia go zgodnie z imieniem**."
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
              "**Raport premium o koreańskim imieniu** — 3 strony. Zawiera okładkę kaligraficzną, znaczenie imienia i powód jego wyboru oraz interpretację saju i pięciu elementów.",
              "**Sztuka imienia w Hangul** — 2 strony. Zawiera okładkę kaligraficzną i przewodnik po wymowie. Zawiera, jak napisać imię w Hangul i jak je wymówić."
            ]
          }
        ]
      },
      {
        "title": "Stempel imienny",
        "blocks": [
          {
            "p": "Wycinamy imię stworzone na ekranie w fizyczny stempel i wysyłamy do Ciebie. Ceny różnią się w zależności od modelu — okrągły stempel {priceStampRound}, kwadratowy stempel {priceStampSquare}, stempel z hebanu {priceStampEbony}. Dostawa międzynarodowa jest również dostępna."
          },
          {
            "p": "**Od tego momentu, produkty obejmują wysyłkę.** W przeciwieństwie do poprzednich przedmiotów, produkcja i wysyłka zajmują czas, a wymagany jest adres dostawy. Informacje o wysyłce są używane tylko do przetwarzania zamówienia i prawnego przechowywania, a po zakończeniu przetwarzania zostaną zniszczone po okresie określonym w polityce."
          }
        ]
      },
      {
        "title": "Rzeczy do wiedzenia przed zakupem",
        "blocks": [
          {
            "p": "**Produkty cyfrowe są dostarczane natychmiast po dokonaniu płatności.** Możesz anulować i otrzymać pełny zwrot w dowolnym momencie przed rozpoczęciem pobierania, ale po zakończeniu pobierania, wycofanie z powodu prostych zmian zdania jest ograniczone (Artykuł 17, Akapit 2 Ustawy o handlu elektronicznym). Ten warunek jest osobno uzgadniany na ekranie płatności."
          },
          {
            "p": "**Reklamacje dotyczące treści wyników nie są powodem do zwrotu.** Jednak jeśli dokument nie został utworzony, plik nie może być otwarty lub kwota płatności różni się od zamówienia, zostanie to przetworzone jako ponowne wydanie lub pełny zwrot."
          },
          {
            "p": "Szczegółowe warunki są opisane w [Polityce zwrotów](/refund-policy) oraz [Przewodniku po cenach](/pricing). Ten tekst służy jako przewodnik po tym, co jest zawarte, a warunki prawne mają pierwszeństwo w tych dwóch dokumentach."
          }
        ]
      }
    ]
  }
} satisfies Record<GlobalDocKey, DocPage>;

export const PL_NOTICES = {
  "kindLabels": {
    "service": "Usługa",
    "product": "Produkty",
    "policy": "Polityka",
    "support": "Wsparcie"
  },
  "intro": "Zmiany w warunkach użytkowania — ceny, polityki — są publikowane tutaj przed ich wejściem w życie. Ulepszenia wewnętrzne nie są wymienione: to, co się tutaj pojawia, to to, co musisz wiedzieć.",
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
        "Pytania, zwroty, prośby o prywatność i raporty o błędach mają teraz jedno miejsce, do którego można się zgłaszać. Strona kontaktowa w stopce zawiera nasz adres e-mail i dane firmy.",
        "Na czym opierają się nasze odpowiedzi i co celowo nie robimy, jest napisane na stronie o nas."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Raporty PDF są wydawane w języku angielskim dla arabskiego i khmerskiego",
      "body": [
        "Jeśli korzystasz z usługi w języku arabskim lub khmerskim, PDF, który kupujesz, jest produkowany w języku angielskim. Narzędzie, które układa nasze dokumenty, nie może jeszcze ustawiać akapitów w tych dwóch skryptach.",
        "Ekran pozostaje w twoim języku, a twoje imię jest drukowane w twoim własnym skrypcie wewnątrz dokumentu.",
        "Ta sama uwaga pojawia się przed płatnością. Gdy narzędzie będzie wspierać te skrypty, powiemy o tym tutaj."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Płatności nie są jeszcze otwarte",
      "body": [
        "Tworzenie imienia i odczytywanie wyniku jest dzisiaj darmowe i nie jest wymagane konto.",
        "Płatne przedmioty nie są jeszcze w sprzedaży. Kwoty pokazane na stronie cenowej będą obowiązywać, gdy sprzedaż się otworzy."
      ]
    }
  }
} satisfies NoticeCopy;
