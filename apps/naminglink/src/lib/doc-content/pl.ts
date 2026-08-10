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
            "p": "Naming-Link pomaga w **wyborze i zrozumieniu koreańskich imion** — hanja stojącego za imieniem dziecka, koreańskiego imienia do użycia za granicą, zapisu swojego imienia w Hangul oraz pamiątek, takich jak pieczęć czy wydrukowany raport."
          },
          {
            "p": "Zobaczenie swoich wyników jest **darmowe i nie wymaga konta.** Płatne elementy nigdy nie sprzedają tego, co już pokazano na ekranie: otwierają więcej kandydatów, dodają pisemną analizę lub przekształcają wynik w coś, co możesz zachować."
          }
        ]
      },
      {
        "title": "Dla kogo jest każda usługa",
        "blocks": [
          {
            "p": "Są dwa rodzaje usług: jedna dla osób, które **już mają koreańskie imię**, i jedna dla osób, które **potrzebują jednego**. Wymagają one różnych rzeczy od Ciebie, dlatego są oferowane w różnych językach."
          },
          {
            "ul": [
              "**Oferowane w Twoim języku** — zapisanie swojego imienia w Hangul oraz budowanie koreańskiego imienia. Te usługi są dla osób bez koreańskiego imienia, więc podążają za językiem, w którym przybywasz.",
              "**Oferowane tylko w języku koreańskim** — znajdowanie hanja dla dziecka oraz przekształcanie koreańskiego imienia w jedno do użycia za granicą. Obie wymagają **istniejącego imienia w Hangul**, aby działać, więc ekrany i ich przewodniki pozostają w języku koreańskim."
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
            "p": "Saju i figury pięciu elementów są obliczane na podstawie **koreańskiego kalendarza lunisolarnym**, z czasem urodzenia skorygowanym do rzeczywistego czasu słonecznego dla miejsca urodzenia. Odczyt jest tradycyjnym odniesieniem, a nie prognozą."
          },
          {
            "p": "Pisemne wyjaśnienia są produkowane przez AI. Aby zapobiec **wymyślaniu rzeczy**, model otrzymuje tylko Twoje dane wejściowe i nasze własne dane referencyjne, i jest instruowany, aby pozostać w ich ramach. Przewodniki wyjaśniają to szczegółowo."
          }
        ]
      },
      {
        "title": "Czego nie robimy",
        "blocks": [
          {
            "ul": [
              "**Nie wróżymy.** Nic tutaj nie obiecuje szczęścia, bogactwa ani ochrony.",
              "**Nie przechowujemy Twojego imienia.** Darmowe wyniki nigdy nie są zapisywane na naszych serwerach, a płatne dokumenty są dostarczane bez zachowywania kopii pliku.",
              "**Płatność nie kupuje lepszej odpowiedzi.** Odblokowanie za pomocą reklamy i odblokowanie za pomocą płatności dają dokładnie tę samą treść."
            ]
          }
        ]
      },
      {
        "title": "Gdzie stoją nasze dane i tłumaczenia",
        "blocks": [
          {
            "p": "**Wolimy to powiedzieć wprost.** Informowanie Cię o tym, co osoba sprawdziła, a co nikt nie sprawdził, jest bardziej użyteczne niż twierdzenie, że wszystko zostało zweryfikowane."
          },
          {
            "ul": [
              "**Dane hanja** — tabela hanja {publisher}, na dzień {effectiveDate}. Przechowujemy skrót pliku źródłowego, więc jeśli tabela się zmieni, możemy powiedzieć, co się zmieniło.",
              "**Skompilowane przez** Platforest. Znaki, odczyty i znaczenia są przenoszone z tabeli tak, jak są; nie dodajemy ani nie usuwamy.",
              "**Tłumaczenie** — napisane najpierw w języku koreańskim, potem angielskim, a następnie w innych językach. **To są tłumaczenia maszynowe, automatycznie sprawdzane** — pod kątem brakujących zdań, spójnej terminologii i zachowania wstawionych wartości. Nie zostały one sprawdzone przez rodzimych użytkowników.",
              "**Pisemne wyjaśnienia** są produkowane przez AI, ograniczone do Twojego wejścia i naszych własnych danych referencyjnych, aby nie wymyślały faktów."
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
  "guide": {
    "eyebrow": "Jak działa Naming-Link",
    "title": "Na czym opieramy Twoje imię",
    "summary": "Jak wybieramy koreańskie nazwisko, co sprawdzamy przed zasugerowaniem imienia oraz jak zapisujemy Twoje imię w Hangul — z częściami, które celowo pomijamy.",
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
                "label": "znaki tradycyjnie unikanie"
              }
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Przewodniki poniżej obejmują usługi oferowane w Twoim języku. Naming-Link ma również dwie usługi dla osób, które **już mają koreańskie imię** — znajdowanie hanja dla dziecka oraz przekształcanie koreańskiego imienia w jedno do użycia za granicą. Te wymagają istniejącego imienia w Hangul, więc zarówno usługi, jak i ich przewodniki są w języku koreańskim."
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
    "title": "Jak zapisujemy Twoje imię w Hangul",
    "summary": "Jak wybieramy dźwięki przy zapisywaniu obcego imienia w Hangul i dlaczego nie dołączamy hanja.",
    "backLabel": "Przewodnik",
    "sections": [
      {
        "title": "Przenosimy dźwięk, nie znaczenie",
        "blocks": [
          {
            "p": "Ta usługa zapisuje **Twoje imię** w Hangul. Nie daje Ci koreańskiego imienia. Michael staje się 마이클 — to samo imię, zapisane tak, aby Koreańczycy mogli je przeczytać i powiedzieć. Nie zamieniamy go na koreańskie imię, które przypadkowo oznacza coś podobnego."
          },
          {
            "p": "Jeśli chcesz koreańskiego imienia, **to jest inna usługa**. Jedna zachowuje Twoje imię i zmienia tylko skrypt; druga proponuje nowe imię."
          }
        ]
      },
      {
        "title": "Dźwięki, których brakuje w koreańskim",
        "blocks": [
          {
            "p": "Każdy język ma dźwięki, których brakuje w koreańskim — f, v, z, th oraz różnice w samogłoskach, których koreański nie rozróżnia. Dlatego piszemy to, co **koreański mówca rzeczywiście mówi** podczas głośnego czytania twojego imienia, zamiast transkrybować oryginalną fonetykę symbol po symbolu. Celem jest pisownia, która będzie używana, a nie najbardziej technicznie wierna."
          },
          {
            "p": "Ta sama pisownia może się różnić w zależności od pochodzenia imienia, dlatego prosimy o podanie twojego języka i kraju i pracujemy na podstawie tej wymowy."
          }
        ]
      },
      {
        "title": "Kilka pisowni obok siebie",
        "blocks": [
          {
            "p": "Nie ma jednej poprawnej odpowiedzi. Pisownia najbliższa oryginalnemu dźwiękowi, ta najczęściej używana w Korei i ta najłatwiejsza do napisania to często trzy różne rzeczy. Dlatego pokazujemy je razem i mówimy, co je różni."
          },
          {
            "p": "Jeśli żadna z nich nie wydaje się odpowiednia, możesz dodać wskazówkę na temat dźwięku, który chcesz uzyskać, i uruchomić to ponownie — na przykład, że konkretna sylaba powinna być napisana inaczej."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Brak hanja tutaj",
        "blocks": [
          {
            "p": "Nie dołączamy hanja do transliteracji. Hanja niosą ze sobą znaczenie, a ten proces dotyczy dźwięku. Dopasowanie znaków tylko do dźwięku może prowadzić do znaczenia, którego nigdy nie chciałeś."
          }
        ]
      },
      {
        "title": "To działa w przeciwnym kierunku niż romanizacja paszportowa",
        "blocks": [
          {
            "p": "Te dwa są łatwe do pomylenia, więc oto różnica: **działają w przeciwnych kierunkach.**"
          },
          {
            "ul": [
              "**Romanizacja** bierze koreańskie imię zapisane w Hangul i zapisuje je w alfabecie łacińskim. Jest ustalana w momencie wydania paszportu, a od tego momentu bilety, wizy i konta bankowe wszystkie podążają za tą pisownią. 김민준 staje się Kim Minjun.",
              "**Transliteracja Hangul** — to, co robi ta usługa — działa w przeciwnym kierunku. Bierze imię zapisane w alfabecie łacińskim i zapisuje, jak brzmi w Hangul. Daniel staje się 대니얼."
            ]
          },
          {
            "p": "Więc to, co otrzymujesz tutaj, **nie zmienia pisowni w twoim paszporcie.** Ta romanizacja jest już ustalona; to jest to imię zapisane z powrotem w Hangul. Te dwa nie zawsze konwertują się nawzajem dokładnie — zapisanie dźwięku, którego koreański nie ma, traci trochę informacji po drodze."
          }
        ]
      },
      {
        "title": "Gdzie użyjesz tej pisowni",
        "blocks": [
          {
            "p": "Pisownia w Hangul jest zazwyczaj potrzebna w takich miejscach."
          },
          {
            "ul": [
              "**Przedstawiając się** — pokazując swoje imię w Hangul lub mówiąc je po koreańsku",
              "**Pole na imię w Hangul w formularzu** — rejestracje i aplikacje, które proszą o twoje imię w Hangul. Zauważ, że **instytucja decyduje, co znajduje się w oficjalnym dokumencie** — to, co otrzymujesz tutaj, nie zastępuje tego.",
              "**Stempel imienia lub pamiątka** — pisownia do wyrycia"
            ]
          },
          {
            "p": "**To normalne, że więcej niż jedna pisownia może być uzasadniona.** Kiedy imię można zapisać na kilka sposobów w Hangul, pokazujemy je obok siebie i zostawiamy wybór tobie."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Jak to działa",
    "title": "Jak budujemy koreańskie imię",
    "summary": "Wybieramy spośród istniejących nazwisk, oceniamy, jak łatwo imię jest wypowiedzieć i napisać, oraz pytamy, do czego imię ma służyć.",
    "backLabel": "Przewodnik",
    "sections": [
      {
        "title": "Zaczynamy od nazwiska",
        "blocks": [
          {
            "p": "W Korei nazwisko jest na pierwszym miejscu, a w przeciwieństwie do imion nie jest swobodnie wymyślane — dziedziczysz je. Dlatego sugerujemy tylko nazwiska, które rzeczywiście mają Koreańczycy. Nasza domyślna pula to **20 najczęstszych nazwisk**, które razem pokrywają około 80% populacji."
          },
          {
            "p": "Jeśli twoje własne nazwisko przypadkiem pokrywa się z rzeczywistym koreańskim pod względem dźwięku — Wang z 왕, Ye z 예 — stawiamy je na pierwszym miejscu. Utrzymanie związku z twoim oryginalnym imieniem jest ważniejsze niż losowo wybrane nazwisko."
          },
          {
            "p": "Możesz samodzielnie wybrać nazwisko lub pozwolić nam je polecić. Tak czy inaczej, będzie to **nazwisko, które istnieje**."
          }
        ]
      },
      {
        "title": "Jest dwadzieścia sześć nazwisk do wyboru",
        "blocks": [
          {
            "p": "Celowo zawęziliśmy listę. **Koreańskie nazwiska naprawdę są skoncentrowane** — Kim, Lee i Park same w sobie stanowią około 45% populacji, a dwadzieścia najczęstszych to około 80%. Dodanie rzadkich nazwisk poszerzyłoby menu, ale również wytworzyłoby imiona, które Koreańczycy nie słyszą jako imiona."
          },
          {
            "ul": [
              "**Dwadzieścia najczęstszych** (około 80% populacji) — 김 Kim · 이 Lee · 박 Park · 최 Choi · 정 Jung · 강 Kang · 조 Cho · 윤 Yoon · 장 Jang · 임 Lim · 한 Han · 오 Oh · 서 Seo · 신 Shin · 권 Kwon · 황 Hwang · 안 Ahn · 송 Song · 전 Jeon · 홍 Hong",
              "**Rzeczywiste nazwiska dodane, aby zachować dźwięk** — 왕 Wang · 진 Jin · 백 Baek · 마 Ma · 나 Na · 유 Yoo"
            ]
          },
          {
            "p": "Druga grupa istnieje, aby **twoje własne nazwisko mogło przejść przez dźwięk**. Wang, Jin, Baek, Ma, Na i Yoo to nazwiska, które Koreańczycy już mają, więc mówienie twojego imienia utrzymuje związek z tym, od czego zaczynałeś. Wszystkie dwadzieścia sześć to nazwiska w rzeczywistym użyciu — żadne z nich nie jest naszym wynalazkiem."
          }
        ]
      },
      {
        "title": "Łatwe do powiedzenia, łatwe do napisania",
        "blocks": [
          {
            "p": "To jest imię, którym ludzie w Korei będą cię naprawdę nazywać, więc pierwszą rzeczą, którą sprawdzamy, jest to, czy Koreańczyk może usłyszeć je raz i zapisać. Imię, które trzeba literować za każdym razem, to ciężar, który nosisz, a nie my."
          },
          {
            "p": "Znaczenie też ma znaczenie. Koreańskie imiona zazwyczaj niosą ze sobą znaczenie, więc informujemy cię, jak imię się czyta i dlaczego je wybraliśmy — nie tylko samo imię."
          }
        ]
      },
      {
        "title": "Pytamy, do czego imię ma służyć",
        "blocks": [
          {
            "p": "Imię do dokumentów uniwersyteckich nie jest tym samym, co imię, które przyjaciele będą wołać przez pokój, czy pseudonim, którego będziesz używać online. Pytamy, jak zamierzasz je używać i bierzemy to pod uwagę."
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
    "summary": "Gdzie ogłaszamy zmiany, które wpływają na to, jak korzystasz z usługi.",
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
            "p": "Napisz na **{email}**. Odpowiadamy w ciągu dwóch dni roboczych. W sprawach dotyczących zamówienia — płatności, zwrotu, pliku, którego nie otrzymałeś — prosimy o dołączenie **numeru zamówienia lub e-maila, którym płaciłeś**."
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
              "**Poprawki** — jeśli znaczenie, odczyt lub obliczenia hanja wyglądają na błędne, daj nam znać. Wspomnienie, który ekran i co wpisałeś, bardzo pomaga.",
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
            "p": "Nie musisz podawać imienia ani daty urodzenia w swojej wiadomości. Darmowe wyniki nigdy nie są przechowywane na naszych serwerach, więc nie możemy ich ponownie znaleźć — numer zamówienia wystarczy."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Nasze standardy",
    "title": "Czego nie używamy",
    "summary": "Nie przypisujemy całkowitego majątku ani punktów liczbowych, ani nie używamy liczby kresek. Pięć elementów jest używane tylko jako dodatkowa oś. Oto powody.",
    "backLabel": "Przewodnik użytkowania",
    "sections": [
      {
        "title": "Powody, dla których nie przypisujemy całkowitego majątku ani punktów liczbowych",
        "blocks": [
          {
            "p": "Istnieją metody, które przypisują całkowity majątek lub punkty liczbowe imionom, aby je ocenić. Naming-Link nie dostarcza tych liczb. Powody są cztery."
          },
          {
            "p": "**Po pierwsze, nie ma tylko jednego standardu.** Metody obliczania majątku różnią się w zależności od szkoły, a to samo imię może być oceniane pozytywnie według jednego standardu i negatywnie według innego. Nie mamy podstaw, aby zdecydować, który z nich jest poprawny. To nieuczciwe przedstawiać jeden jako odpowiedź."
          },
          {
            "p": "**Po drugie, te obliczenia opierają się na liczbie kresek.** Jednak dane Sądu Najwyższego w ogóle nie zawierają liczby kresek. Ponadto liczba kresek może się różnić w zależności od tego, czy są liczone jako znaki zwykłe czy uproszczone oraz jak liczone są elementy. Ponieważ podstawowe liczby nie są definitywnie ustalone, wyniki oparte na nich nie mogą być definitywne."
          },
          {
            "p": "**Po trzecie, liczby wydają się bardziej solidne niż rzeczywistość.** Kiedy mówi się \"87 punktów\", brzmi to jak wartość mierzona, a nie konwencjonalna interpretacja. Te imiona mogą czuć presję związaną z tą liczbą, odsuwając na bok to, co naprawdę ważne (Czy jest przyjemne w wymawianiu? Czy znaczenie pasuje? Czy zawiera pożądane życzenia?)."
          },
          {
            "p": "**Po czwarte, nie ma sposobu na weryfikację.** Związek między imieniem a życiem osoby nie może być zweryfikowany. Przekształcenie czegoś, co nie może być uznane za dobre lub złe, w wynik skutkuje liczbą, której nie można potwierdzić, mimo że nie może być błędna."
          },
          {
            "p": "Używamy tylko tego, co można **uzasadnić.** Oficjalna tabela hanja Sądu Najwyższego, wyznaczone odczyty dla każdego znaku oraz znaczenia wymienione w tabeli. Zamiast tego podajemy powody, dla których ten kandydat został wybrany i dlaczego niektóre znaki zostały wykluczone, pokazując **powody zamiast punktów**."
          }
        ]
      },
      {
        "title": "Nie używamy liczby kresek",
        "blocks": [
          {
            "p": "Oficjalne dane hanja dostarczone przez Sąd Najwyższy nie zawierają liczby kresek. Spośród {characterTotal} znaków, które otrzymaliśmy, **żaden znak nie ma liczby kresek.**"
          },
          {
            "p": "Aby używać liczby kresek, musielibyśmy uzyskać liczby z innego źródła, ale jeśli nie możemy wyjaśnić, skąd te liczby pochodzą i jakie kryteria zostały użyte do ich zliczenia, oznaczałoby to ocenianie imion na podstawie nieuzasadnionych liczb. Zdecydowaliśmy się nie oceniać imion na podstawie wartości, które nie mogą być uzasadnione."
          }
        ]
      },
      {
        "title": "Używamy pięciu elementów tylko jako odniesienia",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Pięć elementów umieszczonych w okręgu: generacja przebiega między sąsiadami, kontrola pomija jeden",
              "wood": "drewno",
              "fire": "ogień",
              "earth": "ziemia",
              "metal": "metal",
              "water": "woda",
              "saeng": "Generacja — każdy rodzi swojego sąsiada",
              "geuk": "Kontrola — każdy powstrzymuje ten, który pomija"
            },
            "caption": "Relacje między pięcioma elementami. Poruszanie się wzdłuż okręgu reprezentuje wzajemną generację (相生), podczas gdy pomijanie jednego i naciskanie na niego reprezentuje wzajemne powstrzymywanie (相剋). Używamy tej relacji tylko jako dodatkowej osi do porównywania kandydatów."
          },
          {
            "p": "Jeśli wpisałeś swój miesiąc urodzenia, używamy uproszczonego odniesienia pięciu elementów na podstawie tego miesiąca jako dodatkowej osi do porównywania kandydatów. Jednak nie jest to precyzyjna analiza saju, a **nie twierdzimy, że imiona determinują los lub charakter osoby.**"
          },
          {
            "p": "W ostatecznym wyborze priorytetem są dźwięki, kombinacje znaczeń, wartości, które rodzina chce przekazać, oraz to, czy można je rzeczywiście zarejestrować. Jeśli nie wpisałeś swojego miesiąca urodzenia, całkowicie wykluczamy odniesienie pięciu elementów z analizy — nie robimy arbitralnych założeń na temat nieznanych informacji."
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
    "backLabel": "Przewodnik użytkowania",
    "sections": [
      {
        "title": "Co jest widoczne za darmo?",
        "blocks": [
          {
            "p": "Tworzenie imienia i przeglądanie wyników jest **darmowe**. Nie jest wymagana rejestracja członkowska. Możesz zobaczyć dopasowane znaczenia hanja, tworzenie koreańskich imion, konwersję nazw globalnych oraz notację wymowy w Hangul, wraz z zalecanymi wynikami i ich uzasadnieniami na ekranie."
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
            "p": "Zalecane wyniki są uporządkowane tak, aby otwierać kandydatów jeden po drugim. Podczas przeglądania reklam, otwiera się jeden na raz, podczas gdy ten produkt **otwiera wszystkich pozostałych kandydatów jednocześnie**."
          },
          {
            "p": "Jeśli nie spieszysz się, nie musisz kupować. **Wyniki z otwierania przez reklamy i te z płatności są całkowicie takie same** — to tylko kwestia czekania, a płacenie nie przynosi lepszych kandydatów."
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
              "**Maksymalnie 10 rozszerzonych szczegółowych kandydatów hanja w PDF** — {priceTenDetail}. Liczba kandydatów zwiększa się do dziesięciu, a dokument PDF jest dołączony.",
              "**Maksymalnie 10 kandydatów hanja z raportem saju i pięciu elementów** — {priceTenSaju}. Oprócz powyższego, zawiera wykres saju wyprowadzony z daty urodzenia oraz siły pięciu elementów, badając, dlaczego konkretne hanja pasuje do tego imienia z perspektywy pięciu elementów."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja jest ogólnie dostępną informacją",
        "blocks": [
          {
            "p": "Użyteczne hanja i ich znaczenia pochodzą z oficjalnej tabeli hanja imiennych ustalonej przez Sąd Najwyższy Korei, a wszystkie są ogólnie dostępne w dokumentach pomocniczych usługi. To, co sprzedają płatne produkty, to nie informacje o hanja, ale **akt wyboru i wyjaśnienia go zgodnie z imieniem**."
          }
        ]
      },
      {
        "title": "PDF dla użytkowników globalnych",
        "blocks": [
          {
            "p": "Dokumenty dostępne do przekształcania zagranicznych imion w imiona koreańskie lub pisania imion w Hangul. Ceny są zgodne z kwotami wyświetlanymi na ekranie płatności."
          },
          {
            "ul": [
              "**Raport premium imienia koreańskiego** — 3 strony. Zawiera okładkę kaligraficzną, znaczenie imienia oraz powód jego wyboru, a także interpretację saju i pięciu elementów.",
              "**Sztuka imienia w Hangul** — 2 strony. Zawiera okładkę kaligraficzną i przewodnik po wymowie. Zawiera, jak napisać imię w Hangul i jak je wymówić."
            ]
          }
        ]
      },
      {
        "title": "Stempel imienia",
        "blocks": [
          {
            "p": "Wycinamy imię stworzone na ekranie w fizyczny stempel i wysyłamy do Ciebie. Ceny różnią się w zależności od modelu — stempel okrągły {priceStampRound}, stempel kwadratowy {priceStampSquare}, stempel z hebanu {priceStampEbony}. Wysyłka międzynarodowa jest również dostępna."
          },
          {
            "p": "**Od teraz produkty obejmują wysyłkę.** W przeciwieństwie do poprzednich przedmiotów, produkcja i wysyłka zajmują czas, a wymagany jest adres dostawy. Informacje o wysyłce są używane tylko do przetwarzania zamówień i przechowywania prawnego, a po zakończeniu przetwarzania zostaną zniszczone po okresie określonym w polityce."
          }
        ]
      },
      {
        "title": "Rzeczy do wiedzenia przed zakupem",
        "blocks": [
          {
            "p": "**Produkty cyfrowe są dostarczane natychmiast po płatności.** Możesz anulować i otrzymać pełny zwrot w dowolnym momencie przed rozpoczęciem pobierania, ale po zakończeniu pobierania, wycofanie z powodu prostej zmiany zdania jest ograniczone (Artykuł 17, Paragraf 2 Ustawy o handlu elektronicznym). Ten warunek jest osobno uzgadniany na ekranie płatności."
          },
          {
            "p": "**Reklamacje dotyczące treści wyników nie są powodem do zwrotu.** Jednak jeśli dokument nie został stworzony, plik nie może być otwarty lub kwota płatności różni się od zamówienia, zostanie to przetworzone jako ponowne wydanie lub pełny zwrot."
          },
          {
            "p": "Szczegółowe warunki są opisane w [Polityce zwrotów](/refund-policy) i [Przewodniku po cenach](/pricing). Ten tekst służy jako przewodnik po tym, co jest zawarte, a warunki prawne mają pierwszeństwo w tych dwóch dokumentach."
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
  "intro": "Zmiany w warunkach korzystania — ceny, polityki — są publikowane tutaj przed ich wejściem w życie. Wewnętrzne ulepszenia nie są wymienione: to, co się tutaj pojawia, to to, co musisz wiedzieć.",
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
        "Jeśli korzystasz z usługi w języku arabskim lub khmerskim, PDF, który kupujesz, jest produkowany w języku angielskim. Narzędzie, które układa nasze dokumenty, nie może jeszcze ustawić akapitów w tych dwóch skryptach.",
        "Ekran pozostaje w Twoim języku, a Twoje imię jest drukowane w Twoim własnym skrypcie wewnątrz dokumentu.",
        "Ta sama uwaga pojawia się przed płatnością. Gdy narzędzie obsłuży te skrypty, powiemy o tym tutaj."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Płatności nie są jeszcze otwarte",
      "body": [
        "Tworzenie imienia i odczytywanie wyniku jest dzisiaj darmowe i nie jest wymagane konto.",
        "Płatne przedmioty nie są jeszcze w sprzedaży. Kwoty wyświetlane na stronie cenowej to te, które będą obowiązywać po otwarciu sprzedaży."
      ]
    }
  }
} satisfies NoticeCopy;
