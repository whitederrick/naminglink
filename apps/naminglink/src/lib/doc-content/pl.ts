import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Polski — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const PL_DOCS = {
  "about": {
    "eyebrow": "O nas",
    "title": "O Naming-Link",
    "summary": "Pomagamy w wyborze i zrozumieniu koreańskich imion. Oto, na czym opieramy nasze wyniki i czego celowo nie robimy.",
    "backLabel": "Strona główna",
    "sections": [
      {
        "title": "Co robimy",
        "blocks": [
          {
            "p": "Naming-Link pomaga Ci **wybrać i zrozumieć koreańskie imiona** — hanja stojące za imieniem dziecka, koreańskie imię do użycia za granicą, zapis Twojego imienia w Hangul oraz pamiątki, takie jak pieczęć lub wydrukowany raport."
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
            "p": "Saju i figury pięciu elementów są obliczane na podstawie **koreańskiego kalendarza lunisolarnym**, z czasem urodzenia skorygowanym do prawdziwego czasu słonecznego dla miejsca urodzenia. Odczyt jest tradycyjnym odniesieniem, a nie prognozą."
          },
          {
            "p": "Pisemne wyjaśnienia są produkowane przez AI. Aby zapobiec **wymyślaniu rzeczy**, model otrzymuje tylko Twój wkład i nasze własne dane referencyjne, i jest instruowany, aby pozostać w ich obrębie. Przewodniki wyjaśniają to szczegółowo."
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
              "**Płatność nie kupuje lepszej odpowiedzi.** Odblokowanie za pomocą reklamy i odblokowanie za pomocą płatności daje dokładnie tę samą treść."
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
            "p": "Szczegóły firmy i jak się z nami skontaktować znajdują się na [stronie kontaktowej](/contact), w tym zwroty, prośby o prywatność i zgłoszenia błędów."
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
            "p": "Większość hanja ma kilka możliwych odczytów. Imię, jednak, jest zapisane w dokumentach i wypowiadane na głos, więc potrzebuje dokładnie jednego. Tabela przypisuje zatem każdemu znakowi jego odczyt do użycia w imionach, a żaden inny odczyt nie może być zarejestrowany."
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
            "p": "Niezależnie od tego, jak dobre jest znaczenie, znak, którego odczyt nie pasuje, nie może być użyty dla tego imienia. Nigdy również nie zmieniamy dźwięku imienia, aby dopasować go do znaku — imię jest wypowiadane przez całe życie, a dźwięk jest ustalany najpierw, a hanja podąża za nim."
          }
        ]
      },
      {
        "title": "Nazwiska są poza tą tabelą",
        "blocks": [
          {
            "p": "To często jest źle rozumiane. **Tabela reguluje imię, a nie nazwisko.** Nazwisko podąża za tym, co już znajduje się w rejestrze rodzinnym, więc niektórzy ludzie używają znaków, które nie znajdują się w tabeli hanja imion."
          },
          {
            "p": "Dlatego Naming-Link traktuje hanja nazwisk inaczej. Pomagamy tylko w znalezieniu nazwiska i zostawiamy pole do bezpośredniego wprowadzenia jednego, dla osób, których znak znajduje się poza tabelą. Nazwiska dwu-sylabowe, takie jak Namgung i Seonwoo, wprowadza się w ten sam sposób."
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
        "title": "Zachowujemy dźwięk, nie znaczenie",
        "blocks": [
          {
            "p": "Ta usługa zapisuje **Twoje imię** w Hangul. Nie daje Ci koreańskiego imienia. Michael staje się 마이클 — to samo imię, zapisane tak, aby Koreańczycy mogli je przeczytać i powiedzieć. Nie zamieniamy go na koreańskie imię, które przypadkiem ma podobne znaczenie."
          },
          {
            "p": "Jeśli chcesz koreańskiego imienia, **to jest inna usługa.** Jedna zachowuje Twoje imię i zmienia tylko skrypt; druga proponuje nowe imię."
          }
        ]
      },
      {
        "title": "Dźwięki, których nie ma w koreańskim",
        "blocks": [
          {
            "p": "Każdy język ma dźwięki, których brakuje w koreańskim — f, v, z, th i różnice samogłoskowe, których koreański nie robi. Dlatego zapisujemy to, co **koreański mówca faktycznie mówi**, gdy czyta Twoje imię na głos, zamiast transkrybować oryginalną fonetykę znak po znaku. Celem jest zapis, który będzie używany, a nie najbardziej technicznie wierny."
          },
          {
            "p": "Ten sam zapis może się różnić w zależności od tego, skąd pochodzi imię, więc pytamy o Twój język i kraj i pracujemy na tej wymowie."
          }
        ]
      },
      {
        "title": "Kilka zapisów, obok siebie",
        "blocks": [
          {
            "p": "Nie ma jednej poprawnej odpowiedzi. Zapis najbliższy oryginalnemu dźwiękowi, ten najczęściej używany w Korei i ten najłatwiejszy do zapisania to często trzy różne rzeczy. Dlatego pokazujemy je razem i mówimy, co je różni."
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
            "p": "Nie dołączamy hanja do transliteracji. Hanja niosą znaczenie, a ten proces dotyczy dźwięku. Dopasowanie znaków tylko do dźwięku może prowadzić do znaczenia, którego nigdy nie chciałeś."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Jak to działa",
    "title": "Jak budujemy koreańskie imię",
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
            "p": "Jeśli Twoje własne nazwisko przypadkiem pokrywa się z prawdziwym koreańskim pod względem dźwięku — Wang z 왕, Ye z 예 — stawiamy je na pierwszym miejscu. Utrzymanie wątku do Twojego oryginalnego imienia jest ważniejsze niż losowo wybrane nazwisko."
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
            "p": "To jest imię, którym ludzie w Korei będą Cię faktycznie nazywać, więc pierwszą rzeczą, którą sprawdzamy, jest to, czy Koreańczyk może usłyszeć je raz i zapisać. Imię, które wymaga literowania za każdym razem, to ciężar, który nosisz, a nie my."
          },
          {
            "p": "Znaczenie również ma znaczenie. Koreańskie imiona zazwyczaj niosą znaczenie, więc mówimy Ci, co imię oznacza i dlaczego je wybraliśmy — nie tylko samo imię."
          }
        ]
      },
      {
        "title": "Pytamy, do czego imię ma służyć",
        "blocks": [
          {
            "p": "Imię do dokumentów uniwersyteckich nie jest tym samym, co imię, które przyjaciele będą wołać przez pokój, lub pseudonim, którego będziesz używać w internecie. Pytamy, jak zamierzasz go używać i bierzemy to pod uwagę."
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
    "summary": "Jak się z nami skontaktować w sprawie pytań, zwrotów, próśb o prywatność i zgłoszeń błędów, z naszymi danymi firmy.",
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
              "**Płatności i zwroty** — jeśli dokument nigdy nie został wyprodukowany lub kwota pobrana różni się od Twojego zamówienia, zwracamy w całości. Zobacz [politykę zwrotów](/refund-policy).",
              "**Prywatność** — prośby o dostęp, poprawienie lub usunięcie Twoich danych. Zobacz [politykę prywatności](/privacy).",
              "**Korekcje** — jeśli znaczenie, odczyt lub obliczenie hanja wydaje się błędne, powiedz nam. Wspomnienie, który ekran i co wpisałeś, bardzo pomaga.",
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
              "**E-mail** — {email}",
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
            "p": "Nie musisz dołączać imienia ani daty urodzenia w swojej wiadomości. Darmowe wyniki nigdy nie są przechowywane na naszych serwerach, więc nie możemy ich ponownie znaleźć — numer zamówienia wystarczy."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "Zwyczaje",
    "title": "Znaki tradycyjnie unikanie",
    "summary": "Nie jest to zabronione przez prawo, ale jest to zwyczaj. Napisaliśmy o tym, co było unikane i dlaczego, oraz jak sobie z tym radzimy.",
    "backLabel": "Przewodnik użytkowania",
    "sections": [
      {
        "title": "Znaki, które są prawnie akceptowalne",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} znaków",
                "label": "Zebrane znaki unikania"
              },
              {
                "value": "{avoidCommonlyUsed} znaków",
                "label": "Wśród nich znaki nadal powszechnie używane"
              }
            ]
          },
          {
            "p": "Istnieją znaki, które są zawarte na liście znaków dla imion osobistych i **są prawnie akceptowalne**, ale są uważane za nieodpowiednie dla imion."
          },
          {
            "p": "Podstawowa myśl jest taka, że **\"nadmiarowe znaczenie jest w rzeczywistości niepożądane.\"** Obejmuje to znaki, które są uważane za zbyt cenne (珍·寶), znaki postrzegane jako mające zbyt silną obecność (王·帝) oraz te, które są uważane za zbyt wielkie, aby osoba mogła je ucieleśniać, jak niebo czy bóstwa. Odzwierciedla to starożytne poczucie powściągliwości, wierząc, że imię może przyćmić osobę."
          },
          {
            "p": "**Jednak te znaki nie są bezużyteczne.** Nie jest to zakaz prawny, ale zwyczaj, a zwyczaje różnią się w zależności od regionu, rodziny i pokolenia oraz mogą zmieniać się z czasem."
          },
          {
            "p": "W rzeczywistości, wśród {avoidTotal} znaków, które zebraliśmy, {avoidCommonlyUsed} są nadal powszechnie używane w imionach. Fakt, że są znane jako unikanie, a mimo to są szeroko stosowane, wskazuje, że ten zwyczaj nie jest absolutny."
          }
        ]
      },
      {
        "title": "Jakie są kategorie?",
        "blocks": [
          {
            "p": "Obecnie zebrane znaki są podzielone na siedem kategorii."
          },
          {
            "ul": [
              "**Skarby i przedmioty** — znaki, które bezpośrednio odnoszą się do bogactwa lub przedmiotów",
              "**Niebo i natura** — rzeczy takie jak słońce, księżyc i niebo, które są uważane za zbyt wielkie, aby osoba mogła je ucieleśniać",
              "**Królowie i szlachta** — znaki, które oznaczają status, takie jak król czy cesarz",
              "**Bóstwa** — znaki odnoszące się do świętych sfer, takich jak bogowie czy duchy",
              "**Pory roku i inne** — znaki związane z określonymi czasami lub stanami",
              "**Zwierzęta** — zwierzęta uważane za mające silną energię, takie jak smoki czy tygrysy",
              "**Nadmiarowość** — znaki postrzegane jako mające zbyt duże lub przepełnione znaczenia"
            ]
          }
        ]
      },
      {
        "title": "Możesz dodać lub usunąć znaki samodzielnie",
        "blocks": [
          {
            "p": "Nie usuwamy tych znaków arbitralnie. **Na ekranie wejściowym zapewniliśmy dwie opcje, aby nadawca mógł wybrać, jak je traktować.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Opcje dostępne na ekranie wejściowym",
        "blocks": [
          {
            "p": "**Wyklucz znaki unikania z kandydatów** — jeśli włączone, są całkowicie wykluczone. Jeśli wyłączone, pozostają w wynikach z etykietą \"Tradycyjnie unikanie\" i dołączonym powodem."
          },
          {
            "p": "**Wyklucz nawet powszechnie używane znaki** — to wyklucza znaki, które są na liście unikania, ale są faktycznie szeroko używane (圭·琳·玲·元·太·星·海 itp.). Jeśli włączone, kandydaci będą znacznie ograniczeni."
          },
          {
            "p": "Domyślnie **nie wykluczamy, a jedynie wyświetlamy** je. Jeśli są cicho usuwane z listy, może się wydawać tym, którzy chcą użyć tego znaku, że nie istnieje."
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
    "title": "Na jakiej podstawie opiera się globalna konwersja imion?",
    "summary": "Dostarczamy kandydatów z pięciu perspektyw, zachowując systemy pisma każdego języka i używając tylko istniejących imion.",
    "backLabel": "Przewodnik użytkowania",
    "sections": [
      {
        "title": "Kandydaci są dostarczani z pięciu perspektyw",
        "blocks": [
          {
            "p": "Nie ma tylko jednego sposobu na przetłumaczenie imienia na inny język. W zależności od tego, czy zachować dźwięk, czy znaczenie, wybrać naturalne imię w lokalnym kontekście lub priorytetować indywidualność, odpowiedzi będą się różnić. Dlatego zamiast przedstawiać jedną opcję, dostarczamy **jedną z każdej z pięciu różnych perspektyw**."
          },
          {
            "ul": [
              "**Opcja zachowania dźwięku** — zachowuje dźwięk oryginalnego imienia tak bardzo, jak to możliwe",
              "**Opcja tłumaczenia znaczenia** — tłumaczy znaczenie zawarte w imieniu na imię w tym języku",
              "**Opcja kompromisu dźwięku i znaczenia** — bierze po połowie z każdego",
              "**Opcja lokalnej autentyczności** — wybiera imiona, które są faktycznie powszechnie używane w tym kontekście kulturowym",
              "**Opcja indywidualności i marki** — priorytetuje imiona, które są zapadające w pamięć i charakterystyczne"
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
            "p": "Podczas tłumaczenia na język, który nie używa liter rzymskich, musi być zapisane w skrypcie tego języka. Dla japońskiego byłyby to kana i kanji; dla rosyjskiego, mongolskiego i kazachskiego byłoby to cyrylica; dla arabskiego byłoby to pismo arabskie; a dla tajskiego, khmerskiego i hindi byłyby to ich odpowiednie skrypty. Jeśli zapiszesz to w literach rzymskich i nazwiesz to \"japońskim imieniem\", nie może być używane w tym kraju."
          },
          {
            "p": "Dlatego mamy osobne zasady dla każdego systemu pisma języka, a serwer sprawdza jeszcze raz, aby upewnić się, że wyniki są w tym systemie pisma. Błędy, takie jak pomijanie nazwisk lub mieszanie w Hangul, są tutaj filtrowane."
          }
        ]
      },
      {
        "title": "Używamy imion, które są faktycznie używane",
        "blocks": [
          {
            "p": "Aby uniknąć tworzenia imion, które brzmią wiarygodnie, ale nie istnieją w tym kraju, opieramy nasze opcje na istniejących imionach. Imiona są używane w dokumentach i przedstawieniach, więc jeśli lokalna osoba myśli \"nie ma takiego imienia\", nie może być używane."
          }
        ]
      },
      {
        "title": "Oddzielamy wybór i opis",
        "blocks": [
          {
            "p": "Zajmujemy się zadaniem określenia pięciu kandydatów oddzielnie od zadania szczegółowego opisu każdego kandydata. Ponieważ opis zajmuje dużo czasu, oddzielamy tę część, aby stworzyć ją jednocześnie."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dlaczego to zmieniono?",
        "blocks": [
          {
            "p": "Początkowo tworzyliśmy pięć perspektyw oddzielnie. Było to szybsze, ale **liczba kandydatów różniła się za każdym razem.** Gdy każda osoba wybierała kandydatów, występowały nakładki lub rozbieżności, a jeśli jeden zawiódł, ten kandydat znikał całkowicie, co skutkowało tylko dwoma lub trzema zamiast pięciu."
          },
          {
            "p": "Teraz, ponieważ określamy zestaw kandydatów i rozkład perspektyw jednocześnie, **liczba jest stała.** Nawet jeśli jeden opis zawiedzie, kandydaci pozostają i są prezentowani z krótkimi informacjami. Uważamy, że lepiej jest mieć zawsze tę samą liczbę, nawet jeśli zajmuje to trochę dłużej."
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
  "intro": "Zmiany w Twoich warunkach korzystania — ceny, polityki — są publikowane tutaj przed ich wejściem w życie. Wewnętrzne ulepszenia nie są wymienione: to, co się tutaj pojawia, to to, co musisz wiedzieć.",
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
      "title": "Strony Kontakt i O nas są teraz otwarte",
      "body": [
        "Pytania, zwroty, prośby o prywatność i zgłoszenia błędów mają teraz jedno miejsce. Strona kontaktowa w stopce zawiera nasz e-mail i dane firmy.",
        "Na czym opierają się nasze odpowiedzi i czego celowo nie robimy, jest napisane na stronie o nas."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Raporty PDF są wydawane w języku angielskim dla arabskiego i khmerskiego",
      "body": [
        "Jeśli korzystasz z usługi w języku arabskim lub khmerskim, PDF, który kupujesz, jest produkowany w języku angielskim. Narzędzie, które układa nasze dokumenty, nie może jeszcze ustawiać akapitów w tych dwóch skryptach.",
        "Ekran pozostaje w Twoim języku, a Twoje imię jest drukowane w Twoim własnym skrypcie wewnątrz dokumentu.",
        "Ta sama uwaga pojawia się przed płatnością. Gdy narzędzie obsłuży te skrypty, powiemy o tym tutaj."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Płatności nie są jeszcze otwarte",
      "body": [
        "Tworzenie imienia i odczytywanie wyniku jest dzisiaj darmowe i nie wymaga konta.",
        "Płatne elementy nie są jeszcze w sprzedaży. Kwoty pokazane na stronie cenowej będą miały zastosowanie, gdy sprzedaż się otworzy."
      ]
    }
  }
} satisfies NoticeCopy;
