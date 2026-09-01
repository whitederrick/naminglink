import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Polski — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const PL_DOCS = {
  "guide": {
    "eyebrow": "Podstawa obliczeń",
    "title": "Jaka jest podstawa obliczeń?",
    "summary": "Ujawniamy wszystkie zasady, które stosuje Dreams-Link. Możesz sprawdzić, które symbole są obecne, co jest zapisane w słowniku — skąd pochodzą interpretacje wyświetlane na ekranie.",
    "backLabel": "Powrót do Strony Głównej",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Wszystkie liczby zapisane tutaj są **bezpośrednio odczytywane ze słownika symboli i zasad dopasowania.** Ponieważ nie przepisujemy tekstu ręcznie, jeśli słownik zostanie rozszerzony lub zasady zmienione, liczby w tych dokumentach również się zmienią."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Podstawa usługi",
    "title": "Jak znaleźć symbole w opowieściach o snach.",
    "summary": "Wyjaśnia, jak symbole są wybierane z dowolnie napisanych zdań i jak filtrujemy symbol, który przypadkowo znajduje się wewnątrz dłuższego słowa — 별 (\"gwiazda\") wewnątrz 특별할 (\"nic specjalnego\").",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Znajdujemy symbole w dostarczonym przez Ciebie tekście.",
        "blocks": [
          {
            "p": "Kiedy swobodnie piszesz swoją opowieść o śnie, szukamy symboli w tym tekście w słowniku. Nie musisz wybierać elementów ani pisać w określonym formacie. Po prostu pisz tak, jak normalnie byś pisał, na przykład 'Wczoraj w nocy ogromny pyton owinął się wokół mnie.'"
          },
          {
            "p": "Podczas wyszukiwania patrzymy nie tylko na nazwę symbolu, ale także na **{aliasTotal} alternatywne nazwy**. Są to słowa, które odnoszą się do tego samego, jak 구렁이 (gureongi) i 뱀 (baem), 떨어지다 (tteoreojida) i 빠지다 (ppajida). Uwzględniane są również wariacje z końcówkami, takie jak 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda)."
          }
        ]
      },
      {
        "title": "Znaki, które przypadkowo pojawiają się w słowie, nie są brane pod uwagę",
        "blocks": [
          {
            "p": "To jest najtrudniejszy aspekt w języku koreańskim. Wśród symboli znajdują się **{singleCharSymbolTotal} symbole jednosylabowe** takie jak **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son), które często pojawiają się w innych słowach."
          },
          {
            "ul": [
              "별 (\"gwiazda\") ukryta wewnątrz 특**별**할 (\"nic specjalnego\")",
              "게 (\"krab\") ukryte wewnątrz 누군가에**게** (\"przez kogoś\")",
              "말 (\"koń\") wewnątrz **말**했다 (\"powiedział\") oraz 배 (\"łódź, gruszka\") wewnątrz **배**가 고팠다 (\"Byliśmy głodni\")"
            ]
          },
          {
            "p": "Liczenie tych jako symboli prowadzi do nieistotnych interpretacji. Dlatego badamy otaczające znaki — jeśli **przed nimi znajduje się znak koreański**, traktujemy to jako część dłuższego słowa i nie liczymy tego, a także sprawdzamy **czy to, co następuje, to partykuła lub końcówka czasownika**, pozwalając 「소가」 (soga) przejść, podczas gdy filtrujemy 「소리」 (sori)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Tak to działało",
        "blocks": [
          {
            "p": "Przed wdrożeniem tej zasady, podczas testowania z dwunastoma rzeczywistymi zdaniami, **wszystkie dwanaście** zawierało nieistotne symbole. Jedno zdanie bez znaczącej treści zostało nawet oznaczone jako a conception dream."
          },
          {
            "p": "Teraz pozostaje jeden — 배 (bae) w 「배가 고팠다」 (bae ga gopatda). Ponieważ brzmi tak samo, ale ma inne znaczenie, nie można go odfiltrować tylko na podstawie otaczających znaków."
          },
          {
            "p": "Nie znalezienie czegoś jest uczciwą sprawą. Jednak znalezienie czegoś nieistotnego oznacza ustanowienie tradycji wokół tego słowa, której nigdy nie miało."
          }
        ]
      },
      {
        "title": "Te same znaki zawsze dają te same wyniki",
        "blocks": [
          {
            "p": "Nie ma miejsca na przypadek w zasadach dopasowania. Ponieważ słownik jest stały, a zasady ustalone, jeśli ponownie wprowadzisz to samo zdanie, **ten sam symbol pojawi się w tej samej kolejności**. Interpretacja, którą widzisz dzisiaj, nie różni się od tej, którą zobaczysz jutro."
          },
          {
            "p": "Ta cecha jest również obietnicą, którą złożyliśmy sobie. Interpretacje, które zmieniają się za każdym razem, są zabawne, ale brakuje im fundamentów. To łączy się z historią [dlaczego nie używamy modeli](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Informacje osobiste",
    "title": "Metoda nieprzechowywania zapisanych snów",
    "summary": "Wyjaśniamy, co technicznie oznacza, że opowieści o snach nie są nigdzie rejestrowane, oraz co zawiera link do wyników.",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Nie wymagana jest rejestracja",
        "blocks": [
          {
            "p": "Dreams-Link nie tworzy kont. Nie zbieramy imion, adresów e-mail ani numerów telefonów. Jedynymi rzeczami, które zbieramy, są sny, które zapisujesz, jak się czułeś po przebudzeniu oraz czy śnisz ten sam sen wielokrotnie, a to nie pozostaje po zakończeniu interpretacji."
          },
          {
            "p": "Opowieści o snach są najbardziej prywatnymi wartościami, które ta usługa otrzymuje. Dlatego zasady są surowsze niż to konieczne — nie stworzyliśmy nawet tabeli do zapisywania tego, co przesyłasz."
          }
        ]
      },
      {
        "title": "Co zawiera link do wyników",
        "blocks": [
          {
            "p": "Gdy obliczenia są zakończone, adres będzie wyglądał tak."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "To, co następuje po **#**, to wartość wejściowa. Ta część nazywana jest **fragmentem**, który jest **częścią, której przeglądarka nie wysyła do serwera**. To standardowe zachowanie w sieci, a nie zasada, którą stworzyliśmy — pierwotnie zaprojektowano to, aby wskazać lokalizację w dokumencie, więc serwer nie ma potrzeby jej widzieć."
          },
          {
            "p": "Tutaj ta właściwość jest szczególnie ważna — dostarczony przez Ciebie sen **nie pozostaje w zapisach dostępu.**"
          },
          {
            "p": "Innymi słowy, gdy otwierasz link do wyników, przeglądarka odczytuje tę wartość, aby zażądać obliczenia, a nasz serwer otrzymuje wartość do obliczenia, zwraca odpowiedź, a następnie ją zapomina."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Proszę być ostrożnym przy wysyłaniu linków do innych",
        "blocks": [
          {
            "p": "Fakt, że nie jest przechowywany na serwerze, nie oznacza, że link jest bezpieczny. Link do wyników zawiera sen, który dostarczyłeś, więc osoba, która otrzyma ten link, może przeczytać tę treść."
          }
        ]
      },
      {
        "title": "Dlaczego obliczenia są wykonywane na serwerze, ale nie są przechowywane?",
        "blocks": [
          {
            "p": "Obliczenia są wykonywane na serwerze. Znalezienie symboli wymaga całego słownika, a ten słownik jest zbyt duży, aby można go było przesłać do przeglądarki. Przechowywanie słownika na serwerze oznacza również, że gdy błąd zostanie naprawiony, jest to odzwierciedlane dla wszystkich jednocześnie. Jednak **po przetworzeniu żądania ta wartość nie jest używana nigdzie.** Nie ma kodu, który wstawia ją do bazy danych."
          },
          {
            "p": "Zachowywana jest minimalna rejestracja niezbędna do działania — licznik, aby zapobiec zbyt wielu żądaniom od tej samej osoby w krótkim czasie. To nie obejmuje treści snu, a adres IP dostępu również nie jest przechowywany. Liczona jest tylko jedna wartość, haszowana z datą, a ta wartość zmienia się, gdy zmienia się dzień."
          }
        ]
      },
      {
        "title": "Co nie może być zrobione, ponieważ nie jest przechowywane",
        "blocks": [
          {
            "p": "Szczerze mówiąc, są rzeczy, z których zrezygnowaliśmy, ponieważ nie przechowujemy danych."
          },
          {
            "ul": [
              "**Nie ma dziennika snów.** Nie możesz odzyskać interpretacji z zeszłego tygodnia, a aby ją zobaczyć ponownie, musisz mieć link. Robimy to celowo — aby stworzyć dziennik, najprywatniejsze zapisy muszą być przechowywane na bieżąco.",
              "**Obliczamy tę samą wartość za każdym razem.** Nie ma pamięci podręcznej. Zamiast tego słownik jest stały, a zasady dopasowania są deterministyczne, więc ten sam tekst zawsze da ten sam symbol — zasady zastępują to, co pamięć podręczna mogłaby zagwarantować.",
              "**Odświeżenie ponownie wywoła bramkę reklamową.** Dzieje się tak, ponieważ nie ma miejsca na pozostawienie zapisów przeglądania."
            ]
          }
        ]
      },
      {
        "title": "W przypadku zakupu",
        "blocks": [
          {
            "p": "Jeśli kupisz raport, w tym czasie zostanie zachowana rejestracja transakcji. Płatność ma ustawiony prawnie okres przechowywania, a bez historii zamówienia nie można przetworzyć zwrotu. Jednak nawet wtedy **tekst snu użyty do odczytu nie jest dołączany do zamówienia** — jest ponownie otrzymywany i zapisywany w momencie tworzenia dokumentu po potwierdzeniu płatności."
          },
          {
            "p": "Aby uzyskać szczegóły, prosimy zapoznać się z [polityką prywatności](/privacy)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Ogłoszenie",
    "title": "Ogłoszenia",
    "summary": "To jest miejsce, aby poinformować Cię o zmianach, które mogą wpłynąć na Twoje użytkowanie.",
    "backLabel": "Powrót do strony głównej",
    "sections": []
  },
  "contact": {
    "eyebrow": "Kontakt",
    "title": "Zapytania",
    "summary": "To jest kanał do zapytań dotyczących użytkowania, zwrotów, żądań dotyczących danych osobowych oraz zgłaszania błędów, a także informacji o firmie.",
    "backLabel": "Powrót do strony głównej",
    "sections": [
      {
        "title": "Kontakt przez e-mail",
        "blocks": [
          {
            "p": "Proszę wysłać zapytania na adres **{email}**. Odpowiemy w ciągu 2 dni roboczych. W przypadku zapytań dotyczących płatności i zwrotów szybciej będzie, jeśli dołączysz swój **numer zamówienia lub e-mail płatności**."
          },
          {
            "p": "Zapytania telefoniczne są przyjmowane pod numerem {customerCenter}."
          }
        ]
      },
      {
        "title": "Co można wysłać na ten kanał?",
        "blocks": [
          {
            "ul": [
              "**Płatność i zwrot** — Jeśli dokument nie został utworzony lub kwota płatności różni się od zamówienia, zostanie dokonany pełny zwrot. Warunki znajdują się w [polityce zwrotów](/refund-policy).",
              "**Dane osobowe** — Przyjmujemy wnioski o dostęp, korektę i usunięcie. Polityka przetwarzania znajduje się w [polityce prywatności](/privacy).",
              "**Zgłaszanie błędów w interpretacji** — Jeśli symbole zostały źle zinterpretowane lub interpretacja wydaje się dziwna, prosimy dać nam znać. Jeśli dołączysz, kiedy napisałeś tę historię snu, możemy ponownie ją sprawdzić z tym samym tekstem."
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
            "p": "Nie musisz przepisywać snu, który podałeś w e-mailu z zapytaniem. Nie zapisujemy danych, więc nie możemy ich ponownie sprawdzić, a numer zamówienia jest wystarczający do weryfikacji. Proszę zapisać go tylko wtedy, gdy jest to absolutnie konieczne, na przykład w przypadku zgłaszania błędów w interpretacji."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Zasady usługi",
    "title": "Czego nie robimy",
    "summary": "Nie dostarczamy numerów loterii, dzienników snów, określeń ciąży ani talizmanów. Wyjaśniamy, dlaczego zdecydowaliśmy się nie robić żadnej z tych rzeczy.",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Nie dostarczamy numerów loterii",
        "blocks": [
          {
            "p": "Chociaż jest to powszechnie poruszane w usługach interpretacji snów, my tego nie robimy. **Nie ma podstaw w tradycyjnej interpretacji snów do wyciągania numerów z snów.** Chociaż istnieją zapisy interpretacji snów o świniach jako bogactwie, nie ma żadnej zasady w literaturze, która produkuje sześć numerów z tego."
          },
          {
            "p": "Aby je stworzyć, musielibyśmy je wymyślić, a w tym momencie ta usługa przestałaby być miejscem przekazywania interpretacji przekazywanych przez tradycję. Jest to szczególnie niepokojące, ponieważ mogłoby prowadzić do strat finansowych."
          }
        ]
      },
      {
        "title": "Nie tworzymy dzienników snów",
        "blocks": [
          {
            "p": "Chociaż byłoby wygodnie mieć funkcję do zbierania przeszłych snów, wymagałoby to od nas **ciągłego przechowywania snów, które podajesz.** Narracje snów są najbardziej prywatnym aspektem tego, co ta usługa otrzymuje, i zdecydowaliśmy się nie wymieniać tego."
          },
          {
            "p": "Zamiast tego, sny, które chcesz zachować, mogą być **zrobione jako obrazy lub dokumenty.** Odpowiedzialność za przechowywanie spoczywa na użytkownikach, a nie na nas — [Dwa sposoby na zachowanie swoich snów](/guide/reports)"
          }
        ]
      },
      {
        "title": "Nie określamy ciąży ani płci",
        "blocks": [
          {
            "p": "Stwierdzimy jedynie, że symbol interpretowany jako a conception dream (sen o poczęciu) się pojawił. Czy jesteś w ciąży, czy dziecko jest córką czy synem, **nie jest czymś, co można poznać przez sny.** Takie stwierdzenia nie pojawiają się na ekranie ani w płatnych dokumentach."
          }
        ]
      },
      {
        "title": "Nie sprzedajemy talizmanów ani amuletów",
        "blocks": [
          {
            "p": "Symbol odczytany jako niepomyślny nie jest powodem do kupowania czegokolwiek. Niepomyślny sen był tradycyjnie używany do **wskazywania sytuacji do zbadania teraz**, a nie do płacenia, aby coś odwrócić."
          },
          {
            "p": "Nie tworzymy niepokoju, aby sprzedać coś na jego podstawie. Jedynymi rzeczami, które sprzedajemy, są dwie wymienione powyżej, a żadna z nich nie dostarcza dodatkowej interpretacji, lecz raczej **sposoby na zachowanie tej samej treści.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Nie składamy ostatecznych stwierdzeń o przyszłości",
        "blocks": [
          {
            "p": "Nie składamy ostatecznych stwierdzeń o tym, czy coś się wydarzy, kiedy się wydarzy, ani w kwestii zdrowia, bogactwa czy długości życia. Przekazywanie znaczeń tradycyjnych symboli a przewidywanie przyszłości to różne sprawy."
          }
        ]
      },
      {
        "title": "Nie fałszujemy interpretacji, które nie istnieją",
        "blocks": [
          {
            "p": "W przypadku symboli, które nie istnieją w słowniku, **stwierdzimy, że nie mogliśmy ich znaleźć.** Nie składamy podobnych ani nie wypełniamy przestrzeni wiarygodnymi zdaniami. Dlatego ta usługa nie [używa sztucznej inteligencji do interpretacji snów](/guide/no-ai). Model nie mówi, że nie wie, co nie wie."
          }
        ]
      }
    ]
  },
  "about": {
    "eyebrow": "Wprowadzenie",
    "title": "Wprowadzenie do Dreams-Link",
    "summary": "To jest usługa, która interpretuje sny za pomocą tradycyjnego słownika symboli interpretacji snów. Wyjaśnia, na czym się opiera i co nie jest stwierdzone.",
    "backLabel": "Powrót do strony głównej",
    "sections": [
      {
        "title": "Co robimy?",
        "blocks": [
          {
            "p": "Dreams-Link znajduje **symbole używane w tradycyjnej interpretacji snów** w snach, które piszesz, i pokazuje ich znaczenia. Ponieważ sny są czymś, co mamy każdego dnia, interpretacje, które widzisz na ekranie, są **darmowe i nie wymagają członkostwa.**"
          },
          {
            "p": "Jedynymi rzeczami sprzedawanymi za opłatą są **dwie formy zachowania** — obraz zawierający dobry sen (karta snu) oraz PDF, który zawiera tło, gdy pojawia się symbol tradycyjnie uważany za sen o poczęciu."
          }
        ]
      },
      {
        "title": "Na jakiej podstawie?",
        "blocks": [
          {
            "p": "Podstawą interpretacji jest **słownik {symbolTotal} symboli**. Znajdujemy symbole w tekście snu i pokazujemy tylko znaczenia zapisane w słowniku dla tych symboli. Jeśli symbol ma wiele znaczeń, wybieramy na podstawie sytuacji — wschodzące słońce i zachodzące słońce są tradycyjnie interpretowane jako przeciwieństwa."
          },
          {
            "p": "Wszystkie znaczenia w słowniku są **przetłumaczone z oryginalnych tekstów starych książek o interpretacji snów**, a każde znaczenie jest opatrzone oryginalnym tekstem, który stanowiło jego podstawę. Oryginalne teksty użyte jako podstawa to dwa — **Zhou Gong's Dream Interpretation**, które od dawna jest czytane w Azji Wschodniej, oraz **Miller's Dream Book** z Zachodu opublikowane w 1901 roku."
          },
          {
            "p": "Wyszukiwanie odbywa się **tylko według ustalonych zasad**. Ten sam sen zawsze przyniesie te same symbole, a interpretacje nie zmieniają się z dnia na dzień."
          }
        ]
      },
      {
        "title": "Czego nie mówimy?",
        "blocks": [
          {
            "p": "**Nie tworzymy tradycyjnych znaczeń, które nie znajdują się w słowniku.** Jeśli nie znaleziono symboli, po prostu stwierdzamy, że żadne nie zostały znalezione i kończymy. Wypełnianie tej przestrzeni wiarygodnymi słowami to to, czego ta usługa najbardziej unika."
          },
          {
            "p": "**Sny o poczęciu są jedynie wskazówkami, a nie określeniami.** Informujemy tylko, że symbol tradycyjnie uważany za sen o poczęciu pojawił się w śnie. Nie przewidujemy ciąży ani płci dziecka, i nie ma podstaw do takich twierdzeń."
          },
          {
            "p": "Nie **formułujemy ostatecznych stwierdzeń na temat zdrowia, bogactwa ani kariery.** To odniesienie z perspektywy tradycyjnej interpretacji snów i nie jest poradą medyczną, finansową ani prawną."
          }
        ]
      },
      {
        "title": "Nie przechowujemy snów, które piszesz.",
        "blocks": [
          {
            "p": "Historie snów są najbardziej prywatną częścią tego, co ta usługa otrzymuje. Dlatego **nie przechowujemy ich.** Wprowadzenia są używane tylko do obliczeń i nie są rejestrowane w żadnej formie na serwerze."
          },
          {
            "p": "Zdecydowaliśmy **nie tworzyć funkcji do zbierania snów jak dziennik snów.** To cenna funkcja, ale wymagałaby przechowywania najbardziej prywatnych zapisów."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Metoda jest opisana bardziej szczegółowo w [dokumencie przewodnim](/guide). Informacje o firmie i dane kontaktowe można znaleźć w [skontaktuj się z nami](/contact)."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Podstawa usługi",
    "title": "Jaka jest podstawa słownika symboli?",
    "summary": "Wyjaśnia, skąd pochodzą interpretacje. Kryteria podziału {symbolTotal} symboli na osiem kategorii, powód dołączania oryginalnych fragmentów tekstów do każdego znaczenia oraz zasada niewypełniania pustych miejsc.",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Pokazujemy tylko to, co jest napisane w słowniku.",
        "blocks": [
          {
            "p": "Interpretacje Dreams-Link pochodzą z **gotowego słownika symboli**. Znajdujemy symbole w tekście, który dostarczasz, i pokazujemy znaczenia zapisane w słowniku dla tych symboli tak, jak są. Nie tworzymy słów, które nie znajdują się w słowniku."
          },
          {
            "p": "Obecnie słownik zawiera **{symbolTotal} symboli**, a wszystkie te symbole mają łącznie **{meaningTotal} znaczeń**. Niektóre symbole mają tylko jedno znaczenie, ale większość ma kilka, a dla każdego znaczenia **sytuacja, w której to znaczenie ma zastosowanie** jest również zaznaczona."
          }
        ]
      },
      {
        "title": "Podzielone na osiem kategorii.",
        "blocks": [
          {
            "p": "Grupujemy to, co pojawia się w snach, w osiem kategorii na podstawie ich cech. Liczba obecnie wymieniona jest w nawiasach."
          },
          {
            "ul": [
              "**Obiekty**({categoryThing}) · **Akcje**({categoryAction}) · **Zwierzęta**({categoryAnimal}) — trzy najgrubsze kategorie. To głównie to, co omawiają stare książki o interpretacji snów: widoczne obiekty, bestie i działania podejmowane w snach.",
              "**Natura**({categoryNature}) · **Ludzie**({categoryPerson}) — wielkie i starożytne rzeczy, takie jak woda, ogień, słońce i księżyc, oraz ludzie, którzy pojawiają się w snach, tacy jak królowie, złodzieje i zmarli.",
              "**Miejsca**({categoryPlace}) · **Ciało**({categoryBody}) · **Kolory**({categoryColor}) — lokalizacje, takie jak domy i groby, części ciała, takie jak zęby, włosy i krew, oraz kolory."
            ]
          },
          {
            "p": "Aby je zobaczyć według kategorii, możesz zobaczyć pełną listę w [słowniku symboli](/dream/symbols)."
          }
        ]
      },
      {
        "title": "Każde znaczenie jest opatrzone oryginalnym fragmentem tekstu.",
        "blocks": [
          {
            "p": "Każde z **{meaningTotal} znaczeń** w słowniku jest opatrzone **oryginalnym fragmentem tekstu**, który stanowił podstawę dla tego znaczenia. Wszystkie {symbolTotal} symbole mają to — jeśli nie ma oryginalnego fragmentu tekstu, wpis sam w sobie nie może być stworzony."
          },
          {
            "p": "Oryginalne teksty użyte jako podstawa to dwa. **Zhou Gong's Dream Interpretation** to książka o interpretacji snów, która od dawna jest czytana w Azji Wschodniej, a **Miller's Dream Book** to zachodnia książka opublikowana w 1901 roku. Gdy otworzysz symbol, możesz zobaczyć, z którego oryginalnego tekstu pochodzi znaczenie, wraz z fragmentem i jego znaczeniem."
          },
          {
            "p": "**Nie wypełniamy pustych miejsc.** Dodawanie wiarygodnych źródeł sprawiłoby, że dokument byłby grubszy, ale w tym momencie ten słownik przestałby być tłumaczeniem tego, co zostało przekazane, a stałby się wytworem. Nie piszemy tego, co nie znajduje się w oryginalnym tekście, a dla tego, co piszemy, musimy dołączyć oryginalny tekst."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Podczas rozszerzania, rozszerzamy tylko z oryginalnego tekstu.",
        "blocks": [
          {
            "p": "Próbowaliśmy stworzyć wpisy na podstawie modeli symboli, ale powstałe wpisy albo powtarzają te same słowa, takie jak 「miłość → dobra relacja」, albo nie dostarczają żadnej podstawy z tradycji. Dlatego **nie uwzględniliśmy żadnych.** Obecny rozmiar słownika wynika z tłumaczenia oryginalnych tekstów, a nie tworzenia wpisów — powody, dla których nie używamy modeli, są szczegółowo opisane w [dlaczego nie używamy modeli](/guide/no-ai)."
          }
        ]
      },
      {
        "title": "Dobre i złe są określone przez słownik.",
        "blocks": [
          {
            "p": "Każdemu symbolowi towarzyszą wskazania dotyczące pomyślności i niepomyślności. **Dobre {polarityPositive}**, **ambiwalentne w zależności od sytuacji {polarityAmbivalent}**, **ostrzegawcze {polarityNegative}**, i **neutralne {polarityNeutral}**."
          },
          {
            "p": "Wśród czterech kategorii **najwięcej jest tych, które różnią się w zależności od sytuacji.** To nie jest coś, co zrównoważyliśmy; tak jest zapisane w oryginalnych tekstach — nawet dla tego samego symbolu, istnieje wiele miejsc, gdzie był on interpretowany przeciwnie w zależności od tego, co zostało zrobione. Ta wartość odzwierciedla naturę każdego symbolu, a ogólna atmosfera snu jest przeliczana poprzez zbieranie znalezionych symboli."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Podstawa usługi",
    "title": "Dlaczego ten sam symbol ma różne znaczenia.",
    "summary": "Wschodzące słońce i zachodzące słońce są tradycyjnie interpretowane jako przeciwieństwa. To omawia strukturę, w której {symbolTotal} symbole mają {meaningTotal} znaczeń i jak rozróżnić sytuację.",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Nawet jeśli symbole są takie same, różne sytuacje dają różne znaczenia.",
        "blocks": [
          {
            "p": "W starych książkach o interpretacji snów symbol nie zawsze ma jedno znaczenie. Nawet dla tego samego słońca, **wschodzące słońce i zachodzące słońce były interpretowane przeciwnie** — pierwsze wskazuje na pomyślność w gospodarstwie domowym, podczas gdy drugie wskazuje na obawy o utratę rodziców. Słownik jest napisany w ten sposób."
          },
          {
            "p": "Powód, dla którego {symbolTotal} symbole mają łącznie {meaningTotal} znaczeń, polega na tym, że dla każdego znaczenia **sytuacja, w której to znaczenie ma zastosowanie** jest również zaznaczona, więc jeśli ta sytuacja jest widoczna w tekście, który dostarczasz, wybieramy to znaczenie."
          }
        ]
      },
      {
        "title": "Jak rozróżniamy sytuację?",
        "blocks": [
          {
            "p": "Sprawdzamy, czy w tekście, który dostarczasz, są słowa wskazujące na sytuację. W zdaniu 「Widziałem zachodzące słońce」 sytuacja zachodzenia jest wskazana, podczas gdy w 「Widziałem słońce właśnie wschodzące」 sytuacja wschodzenia jest wskazana. Jeśli nie ma słów wskazujących na sytuację, interpretujemy to na podstawie **podstawowego znaczenia** tego symbolu."
          },
          {
            "p": "Dlatego, gdy zapisujesz swój sen, proszę uwzględnij **nie tylko to, co się pojawiło, ale także jakie działania zostały podjęte**; to sprawi, że interpretacja będzie dokładniejsza. Mówiąc \"Widziałem świnię\" przekazuje mniej niż \"świnia weszła do domu.\""
          }
        ]
      },
      {
        "kind": "note",
        "title": "Im więcej piszesz, tym lepiej, ale nie ma potrzeby pisać obszernie.",
        "blocks": [
          {
            "p": "Kilka zdań wystarczy. Pisanie więcej niekoniecznie oznacza znalezienie większej liczby symboli; raczej, jeśli są wymieszane niepowiązane stwierdzenia, może to prowadzić do błędnych symboli."
          }
        ]
      },
      {
        "title": "Jest {contextSplitSymbolTotal} symboli o różnych znaczeniach.",
        "blocks": [
          {
            "p": "Spośród {symbolTotal} symboli w słowniku, **{contextSplitSymbolTotal}** ma znaczenia, które różnią się w zależności od sytuacji. Pozostałe mogą być interpretowane w jednym kierunku, niezależnie od sytuacji."
          },
          {
            "p": "Te **{contextSplitSymbolTotal}** symbole są najbardziej delikatne. Błędna interpretacja sytuacji może prowadzić do przekazywania dobrych wiadomości jako złych, lub odwrotnie. Dlatego, jeśli sytuacja jest niejasna, opieramy się na **podstawowym znaczeniu symbolu** bez wymuszania wyboru — nie chcemy mówić o niepewnym, jakby było pewne."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Uczucie po przebudzeniu również jest brane pod uwagę.",
        "blocks": [
          {
            "p": "Uczucia i powtórzenia pytane poniżej treści snu nie są używane do znajdowania symboli. Są one brane pod uwagę przy określaniu, w jaki sposób interpretować w przypadkach o różnych znaczeniach. Nie musisz wybierać; wyniki i tak będą dostarczone."
          }
        ]
      },
      {
        "title": "Ogólna atmosfera snu jest liczona osobno.",
        "blocks": [
          {
            "p": "Jeśli znaleziono wiele symboli, zbieramy, czy każdy symbol jest pozytywny, czy ostrzegawczy, aby określić ogólny ton snu. Sen, który zawiera jeden dobry symbol i jeden ostrzegawczy symbol, nie jest po prostu nazywany \"dobrym snem.\""
          },
          {
            "p": "Możesz zobaczyć różne symbole i ich znaczenia w [słowniku symboli](/dream/symbols). Dobrze jest również przejrzeć, co jest zawarte, zanim zapiszesz swój sen."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Podstawa usługi",
    "title": "Kryteria rozróżniania między snami pomyślnymi a złymi",
    "summary": "Cztery wartości przypisane do każdego symbolu i ich rozkład, powody dla najbardziej zróżnicowanych znaczeń oraz dlaczego omawiamy mieszane sny jako mieszane.",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Każdemu symbolowi przypisano jedną z czterech kategorii.",
        "blocks": [
          {
            "p": "{symbolTotal} symbole w słowniku są klasyfikowane jako jeden z poniższych."
          },
          {
            "ul": [
              "**Pozytywny {polarityPositive}** — interpretowany jako przyjemne wydarzenia, takie jak bogactwo, święta lub dobroczyńcy.",
              "**Ambiwalentny {polarityAmbivalent}** — symbole takie jak słońce lub świnia, które mogą mieć swoje znaczenia odwrócone w zależności od podjętych działań. **To jest najczęstsza i najbardziej ostrożna kategoria.**",
              "**Ostrzegawczy {polarityNegative}** — interpretowany jako spory, straty lub negatywne wydarzenia.",
              "**Neutralny {polarityNeutral}** — symbole, które same w sobie nie są ani pomyślne, ani złe, jak kolory."
            ]
          }
        ]
      },
      {
        "title": "Powody dla najbardziej zróżnicowanych znaczeń",
        "blocks": [
          {
            "p": "To nie jest równowaga, którą osiągnęliśmy. **To jest sposób, w jaki napisane są oryginalne teksty.** Stare teksty dotyczące interpretacji snów rejestrowały różne znaczenia dla tego samego symbolu w zależności od sytuacji, a wiele z tych sytuacji jest przeciwstawnych — złapanie świni jest pomyślne, ale świnia umierająca sama z siebie jest złowroga, a to samo dotyczy wschodzącego i zachodzącego słońca."
          },
          {
            "p": "Dlatego fakt, że \"pojawił się dobry symbol\", nie oznacza, że \"dobrze się stanie.\" To, co możemy przekazać, jest ograniczone do tego, jak ten symbol był interpretowany w tradycji."
          }
        ]
      },
      {
        "title": "Ton snu zbierany jest z jego symboli.",
        "blocks": [
          {
            "p": "Jeśli znaleziono wiele symboli, zbieramy ich pomyślne i ostrzegawcze znaczenia, aby określić ogólny ton snu. Jeśli pojawią się tylko pozytywne symbole, to jest to dobry sen; jeśli pojawią się tylko ostrzegawcze symbole, to jest to sen ostrzegawczy; jeśli **są mieszane, omówimy to jako mieszane.**"
          },
          {
            "p": "Nie wymuszamy mieszanej interpretacji na jedną stronę. W rzeczywistości sny, które mają ludzie, są głównie mieszane, a podsumowanie ich jako \"dobrego snu\" nie jest ani dokładne, ani pomocne."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Słowa, które nie zostały wypowiedziane",
        "blocks": [
          {
            "p": "Nie składamy definitywnych stwierdzeń na temat tego, co się stanie, kiedy się stanie, ani w odniesieniu do zdrowia i bogactwa. Tłumaczenie znaczeń tradycyjnych symboli różni się od przewidywania przyszłości."
          }
        ]
      },
      {
        "title": "Kiedy pojawiają się sny ostrzegawcze",
        "blocks": [
          {
            "p": "Nawet jeśli pojawi się symbol interpretowany jako ostrzegawczy, nie oznacza to koniecznie złych wiadomości. W tradycyjnej interpretacji snów, złowrogie sny były zazwyczaj używane do wskazywania **sytuacji, która wymaga teraz zbadania.** Jeśli pojawi się symbol interpretowany jako spór, można go odczytać jako sugestię, aby powstrzymać się od mówienia."
          },
          {
            "p": "Z tego samego powodu, ta usługa nie sprzedaje talizmanów ani amuletów. Jedynymi rzeczami sprzedawanymi są [dwie metody na zachowanie swoich snów](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Sny o poczęciu",
    "title": "Jak rozróżnić sny o poczęciu",
    "summary": "Jak określamy {conceptionSymbolTotal} symbole snów o poczęciu, dlaczego nie wszystkie sny o świniach są snami o poczęciu oraz zasada, że nie określamy ciąży ani płci.",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Najpierw wyjaśnijmy.",
        "blocks": [
          {
            "p": "**Dreams-Link nie określa statusu ciąży. Nie podajemy również płci dziecka.** To nie jest coś, co można poznać przez sny, ani coś, co możemy zrobić."
          },
          {
            "p": "To, co możemy przekazać, jest ograniczone do tego — **fakt, że symbol tradycyjnie interpretowany jako sen o poczęciu pojawił się w tym śnie.** Jak ten symbol był interpretowany przez starożytnych, to wszystko, co możemy dostarczyć."
          }
        ]
      },
      {
        "title": "Istnieje {conceptionSymbolTotal} symboli interpretowanych jako sny o poczęciu.",
        "blocks": [
          {
            "p": "Spośród {symbolTotal} symboli w słowniku, **{conceptionSymbolTotal}** oznaczono jako sny o poczęciu. Wiele z nich to zwierzęta, takie jak smoki, świnie i tygrysy, a także owoce, takie jak brzoskwinie, persymony i jujuby, a także słońce i księżyc."
          },
          {
            "p": "Jednak **to, że ten symbol się pojawił, nie oznacza od razu, że jest to sen o poczęciu.** To jest miejsce, w którym ta usługa włożyła znaczną pracę."
          }
        ]
      },
      {
        "title": "Określamy na podstawie wybranego znaczenia, a nie symbolu.",
        "blocks": [
          {
            "p": "Świnia jest symbolem snów o poczęciu, ale jest również **reprezentantem snów o bogactwie.** Jeśli ogłosimy to jako sen o poczęciu tylko dlatego, że symbol się pojawił, to każdy, kto śni o świniach, miałby sny o poczęciu. W rzeczywistości większość była interpretowana jako sny o bogactwie."
          },
          {
            "p": "Dlatego patrzymy na **faktyczne wybrane znaczenie z tego symbolu, a nie tylko na sam symbol.** Oznaczamy go jako sen o poczęciu tylko wtedy, gdy znaczenie skłaniające się ku poczęciu jest wybierane na podstawie sytuacji, którą podałeś. Nawet w przypadku tej samej świni, interpretacja może się różnić w zależności od zdania."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Jeśli wspomnisz o ciąży, najpierw to rozważymy.",
        "blocks": [
          {
            "p": "Jeśli twoje pisanie zawiera terminy takie jak ciąża, sny o poczęciu lub poród, priorytetowo traktujemy znaczenie poczęcia spośród znaczeń, które ten symbol posiada. Nawet ten sam sen może być interpretowany inaczej w zależności od aktualnej sytuacji."
          }
        ]
      },
      {
        "title": "Powód posiadania oddzielnego raportu o snach o poczęciu.",
        "blocks": [
          {
            "p": "Sny o poczęciu mają inny cel niż inne sny. Często są omawiane długo po narodzinach dziecka i dzielone wśród członków rodziny. Dlatego, zamiast tylko oglądać je na ekranie, stworzyliśmy **dokument, który można zachować.**"
          },
          {
            "p": "Co jest zawarte, jest opisane w [dwóch metodach na zachowanie swoich snów](/guide/reports). Możesz zobaczyć wszystkie interpretacje bez ich kupowania."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "Jak korzystać",
    "title": "Jak napisać sen",
    "summary": "Jeśli zapiszesz to, co widziałeś i robiłeś, zostanie to dobrze zinterpretowane. Wyjaśniamy, dlaczego pojedynczy czasownik decyduje o znaczeniu, i dlaczego pytamy również, jak się czułeś i czy sen się powtarza.",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Proszę zapisać, co widziałeś i co robiłeś",
        "blocks": [
          {
            "p": "Nie ma konkretnego formatu. Dwa lub trzy zdania, jak normalnie mówisz, są wystarczające. Jednak to, co jest dobrze zinterpretowane, zależy od — **co widziałeś** i **co się wydarzyło**."
          },
          {
            "ul": [
              "Dobrze zinterpretowane — 「Duży wąż owinął się wokół mnie」, 「Widziałem czystą wodę płynącą」, 「Mój ząb wypadł sam」",
              "Nie zinterpretowane — 「Bałem się」, 「Czułem się dziwnie」, 「Wydawało się, że ktoś mnie nienawidził」"
            ]
          },
          {
            "p": "Jeśli zapiszesz tylko swoje uczucia, nie będzie symboli do znalezienia. Tradycyjna interpretacja snów mówi o [przedmiotach i działaniach](/guide/categories), a nie o emocjach."
          }
        ]
      },
      {
        "title": "Zapisanie tego, co zrobiłeś, czyni to bardziej dokładnym",
        "blocks": [
          {
            "p": "Nawet ten sam symbol może mieć różne znaczenia w zależności od sytuacji, z {contextSplitSymbolTotal} przypadkami. Wschód i zachód słońca były tradycyjnie interpretowane w przeciwny sposób."
          },
          {
            "p": "Dlatego 「Widziałem świnię」 jest mniej dokładne niż 「Świnia weszła do domu」, a 「Była woda」 jest mniej dokładne niż 「Wypiłem czystą wodę」. **Pojedynczy czasownik określa znaczenie.**"
          }
        ]
      },
      {
        "title": "Powód pytania o uczucia i powtarzalność",
        "blocks": [
          {
            "p": "Poniżej treści snu znajduje się miejsce do wyboru **jak się czułeś, gdy się obudziłeś** oraz **czy masz powtarzające się sny**. Nie musisz wybierać obu, aby wyniki zostały dostarczone."
          },
          {
            "p": "Te wartości nie są używane do znajdowania symboli. Są odniesieniem przy decydowaniu **które znaczenie wybrać** z tego samego symbolu i jak przekazać wyniki. Powtarzające się sny były tradycyjnie postrzegane inaczej niż sen, który miał miejsce tylko raz."
          }
        ]
      },
      {
        "kind": "note",
        "title": "W przypadkach wspominających o ciąży",
        "blocks": [
          {
            "p": "Jeśli tekst zawiera słowa takie jak ciąża, sen o poczęciu lub poród, najpierw patrzymy na znaczenie snu o poczęciu tego symbolu. Nawet ten sam sen o świni był interpretowany inaczej przez starożytnych ludzi w zależności od sytuacji — [jak rozróżnić 태몽](/guide/conception-dreams)"
          }
        ]
      },
      {
        "title": "Nie ma potrzeby pisać długo",
        "blocks": [
          {
            "p": "Dłuższa długość nie oznacza, że znajdzie się więcej symboli. W rzeczywistości, jeśli niepowiązane słowa są mieszane w długim opisie, zwiększa się szansa, że nieistotne słowa będą interpretowane jako symbole. Proszę zapisać tylko **zapadające w pamięć sceny**."
          },
          {
            "p": "Tekst, który piszesz, nie będzie nigdzie zapisywany. Powód, dla którego możesz pisać swobodnie, jest wyjaśniony w [metodzie braku zapisu](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Podstawa usługi",
    "title": "Kryteria podzielone na osiem kategorii",
    "summary": "Osiem kategorii — od przedmiotów, działań i zwierząt po ciało i kolory — z ilością symboli w każdej oraz dlaczego nie ma kategorii dla emocji.",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Podzielone na osiem kategorii tego, co pojawia się w snach",
        "blocks": [
          {
            "p": "Zgrupowaliśmy {symbolTotal} symboli w osiem kategorii według ich charakteru. Pytanie dzielące to **jak to się pojawia w śnie** — bestia, przedmiot, czy coś, co zrobiłeś."
          },
          {
            "ul": [
              "**Przedmioty {categoryThing}** — namacalne przedmioty, takie jak pieniądze, lustra i noże. To najgrubsza kategoria.",
              "**Działania {categoryAction}** — rzeczy robione lub doświadczane w śnie, takie jak kąpiel, impreza czy bycie bitym.",
              "**Zwierzęta {categoryAnimal}** — smoki, świnie, węże i krowy. Wiele z nich było postrzeganych jako 태몽.",
              "**Natura {categoryNature}** — duże i starożytne rzeczy, takie jak woda, ogień, słońce i księżyc.",
              "**Ludzie {categoryPerson}** — ludzie pojawiający się w snach, tacy jak królowie, złodzieje i zmarli.",
              "**Miejsca {categoryPlace}** — lokalizacje, w których odbywają się sny, takie jak domy, studnie i groby.",
              "**Ciało {categoryBody}** — zęby, włosy, krew. Znaczenie różni się w zależności od miejsca na ciele.",
              "**Kolory {categoryColor}** — nie mają inherentnie dobrego ani złego znaczenia i są interpretowane na podstawie tego, z czym są związane."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Powód braku kategorii numerycznych",
        "blocks": [
          {
            "p": "Nie stworzyliśmy kategorii dla liczb takich jak 「trzy」 czy 「siedem」. **Żaden z dwóch oryginalnych tekstów nie podaje liczby jako wpisu.** Aby otworzyć tę kategorię i ją wypełnić, musielibyśmy napisać coś, co nie pojawia się w żadnym z tekstów."
          }
        ]
      },
      {
        "title": "Dlaczego nie ma kategorii emocjonalnej",
        "blocks": [
          {
            "p": "Nie stworzyliśmy kategorii dla uczuć takich jak 「lęk」 czy 「tęsknota」. **To dlatego, że starożytne teksty dotyczące interpretacji snów nie wspominają o emocjach.** Oba oryginalne teksty mówią o tym, co jest widziane i co się dzieje, a nie o uczuciach śniącego jako przedmiocie interpretacji."
          },
          {
            "p": "Kiedyś próbowaliśmy stworzyć kategorię dla emocji, a to, co się pojawiło, to terminy takie jak 「utrata uczucia」 i 「stabilność emocjonalna」. To nie są **formy** pojawiające się w snach, lecz słownictwo z nowoczesnej psychologii. To inny typ usługi i nie jest tym, co ta słownik ma na celu."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Więc kiedy piszesz",
        "blocks": [
          {
            "p": "Proszę zapisać **co widziałeś i co robiłeś** zamiast uczuć, ponieważ będzie to znacznie lepiej interpretowane. Jednak pytamy osobno o to, jak się czułeś, gdy się obudziłeś — to jest odniesieniem w sytuacjach, w których znaczenia mogą się różnić nawet dla tego samego symbolu."
          }
        ]
      },
      {
        "title": "Kolory nie są używane samodzielnie",
        "blocks": [
          {
            "p": "Kolory {categoryColor} nie mają inherentnie dobrego ani złego znaczenia. Tak jak niebieskie węże i czerwone węże były interpretowane inaczej, ich znaczenia zmieniają się w zależności od **tego, z czym są związane**. Dlatego ta kategoria jest traktowana jako wartości odczytywane, gdy pojawiają się z innymi symbolami."
          },
          {
            "p": "Pełna lista według kategorii jest dostępna w [Słowniku Symboli](/dream/symbols). Gdy otworzysz symbol, zostanie podane przekazane znaczenie, kategoria i powiązane symbole."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "Jak korzystać",
    "title": "Gdy symbol nie zostanie znaleziony",
    "summary": "Jeśli nic nie zostanie znalezione, informujemy o tym. Wyjaśniamy, dlaczego tak się dzieje, co pokazujemy na tym ekranie zamiast tego oraz jak słownik jest rozszerzany.",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Gdy nic nie znajdziemy, mówimy, że nic nie znaleźliśmy",
        "blocks": [
          {
            "p": "Jeśli nie możemy znaleźć ani jednego symbolu w tekście, który napisałeś, **informujemy, że nic nie znaleźliśmy.** Nie narzucamy podobnego symbolu ani nie piszemy wiarygodnego zdania, aby wypełnić lukę."
          },
          {
            "p": "To jest najbardziej niepokojąca kwestia dla tej usługi. W momencie, gdy wypełniasz lukę, interpretacja, która się pojawia, i to, co faktycznie zrobiono, divergują."
          }
        ]
      },
      {
        "title": "Dlaczego nie można tego znaleźć?",
        "blocks": [
          {
            "p": "Zwykle jest to jeden z następujących powodów."
          },
          {
            "ul": [
              "**To symbol, który jeszcze nie znajduje się w słowniku.** Obecnie w spisie znajduje się {symbolTotal} symboli, ale jest wiele innych, które mogą pojawić się w snach.",
              "**Napisałeś tylko swoje uczucia.** Jeśli masz tylko emocje takie jak \"Bałem się\" lub \"Czułem się dziwnie,\" nie ma symboli, które można zidentyfikować. Tradycyjna interpretacja snów odnosi się do **widocznych obiektów i działań**, a nie emocji.",
              "**Jest za krótko.** Lepiej jest pisać w zdaniach, a nie tylko w jednym lub dwóch słowach."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kiedy spróbujesz napisać ponownie",
        "blocks": [
          {
            "p": "Proszę uwzględnić **co widziałeś i co robiłeś** w swoim śnie. Mówienie \"Czułem niepokój\" jest mniej skuteczne niż mówienie \"moje zęby wypadły same\", a \"podobało mi się\" jest mniej skuteczne niż mówienie \"widziałem czystą wodę płynącą.\""
          }
        ]
      },
      {
        "title": "Nie zostawiamy pustego ekranu",
        "blocks": [
          {
            "p": "Kiedy coś nie może być znalezione, pokazujemy również **{popularSymbolCount} często wyszukiwanych symboli** na tym ekranie. Są one wybierane z najbardziej reprezentatywnych w słowniku, co może pomóc ci przypomnieć sobie, czy któryś z nich był w twoim śnie."
          },
          {
            "p": "Jeśli chcesz przeglądać wszystko, możesz znaleźć {symbolTotal} symboli zorganizowanych według kategorii w [słowniku symboli](/dream/symbols). Każdy symbol zawiera jego przekazywane znaczenie i powiązane symbole."
          }
        ]
      },
      {
        "title": "Jak słownik będzie się rozwijał w przyszłości?",
        "blocks": [
          {
            "p": "Zamiast zwiększać liczby, najpierw koncentrujemy się na **dokładnym identyfikowaniu tego, co już istnieje**. Uwzględniliśmy {aliasTotal} alternatywnych nazw dla tych samych symboli i upewniliśmy się, że słowa z sufiksami, które zmieniają ich formy, również mogą być identyfikowane."
          },
          {
            "p": "Podczas rozszerzania samych symboli uwzględniamy tylko **to, co jest napisane w oryginalnym tekście**. Jeśli znaczenie nie ma odpowiadającej oryginalnej frazy, wpis nie zostanie utworzony — po prostu zwiększanie liczb bez podstawy zamienia to w tworzenie, a nie słownik. Powody tej próby i jej wyniki są udokumentowane w [dlaczego nie używamy modeli](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Podstawa usługi",
    "title": "Powody, dla których nie używamy sztucznej inteligencji w interpretacji snów",
    "summary": "Nie ma kodu, który wywołuje model do tworzenia interpretacji. To jest wynik próby rozszerzenia słownika przy użyciu modelu oraz tego, co zyskano i co poświęcono w wyniku.",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Sztuczna inteligencja nie jest używana w interpretacji snów",
        "blocks": [
          {
            "p": "Wiele obecnych usług interpretacji snów pokazuje teksty generowane przez wprowadzanie opowieści o snach do modeli generatywnych. Dreams-Link tego nie robi. **Nie ma kodu, który wywołuje model do tworzenia interpretacji.**"
          },
          {
            "p": "To, co robimy, jest proste. Znajdujemy symbole w tekście, który dostarczasz, i wybieramy znaczenia, które słownik napisał o tych symbolach. Nie ma miejsca na zdania, które nie znajdują się w słowniku."
          },
          {
            "p": "Słownik sam w sobie nie jest tworzony przez model. Każde znaczenie jest opatrzone **informacją, z którego fragmentu oryginalnego tekstu interpretacji snów pochodzi**, a ten fragment jest porównywany słowo w słowo z oryginalnym plikiem."
          }
        ]
      },
      {
        "title": "Dlaczego podjęto tę decyzję?",
        "blocks": [
          {
            "p": "**Modele nie mówią, że nie wiedzą, czego nie wiedzą.** Kiedy pytane o symbole bez przekazywanej podstawy, fabrykują wiarygodne pochodzenie. A czy jest to fabrykowane, czy nie, to coś, czego czytelnik nie może dostrzec. Jeśli tworzenie zostanie wstawione w miejsce przekazywania tradycji, premisa usługi się załamuje."
          },
          {
            "p": "Próbowaliśmy pozwolić modelowi tworzyć symbole, aby rozszerzyć słownik. Spośród sześćdziesięciu sześciu przykładów wybranych jako warte przyjęcia, **pięćdziesiąt pięć nie mogło dostarczyć żadnej podstawy przekazu**, a były też przykłady takie jak metro i autostrada, które nie mogą istnieć w tradycyjnej interpretacji snów. Dlatego **żaden nie został uwzględniony.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "To samo dotyczyło nawet większego modelu",
        "blocks": [
          {
            "p": "Kiedy uruchomiliśmy to samo na lepszym modelu, jeden z dziewiętnastu przeszedł, a ten jeden był jedynie powtórzeniem tego samego słowa z tą samą podstawą. Większy model tylko mówi **bardziej wiarygodnie** o tym, czego nie wie."
          }
        ]
      },
      {
        "title": "Korzyści z nieużywania modelu",
        "blocks": [
          {
            "ul": [
              "**Jeśli to ten sam sen, ta sama interpretacja się pojawi.** Słowa nie zmieniają się za każdym razem, gdy na to patrzysz.",
              "**Jest szybko.** Nie ma oczekiwania na odpowiedź modelu, więc wyniki są natychmiast dostępne.",
              "**Sen, który napisałeś, nie wychodzi na zewnątrz.** Nie ma potrzeby wysyłania go na serwer zewnętrznej firmy — proszę przeczytać to razem z [metodą, która nie zapisuje](/guide/no-storage).",
              "**Można to oferować za darmo.** Sny to coś, co mamy każdego dnia, więc jest wiele zapytań. Jeśli model byłby wywoływany dla każdego zapytania, koszty musiałyby być pokryte skądś."
            ]
          }
        ]
      },
      {
        "title": "Zamiast tego, co zostało poświęcone",
        "blocks": [
          {
            "p": "Nie możemy interpretować tego, co nie znajduje się w słowniku. Gdybyśmy użyli modelu, byłaby wiarygodna odpowiedź na cokolwiek, co napisałeś. Zdecydowaliśmy się **powiedzieć, że nie mogliśmy tego znaleźć, gdy nie mogliśmy tego znaleźć.** To, co pokazujemy w tym czasie, jest udokumentowane w [gdy symbol nie może być znaleziony](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Płatne produkty",
    "title": "Dwa sposoby na zachowanie swoich snów",
    "summary": "Sama interpretacja nie wiąże się z opłatą. Wyjaśnia, jakie są dwa płatne opcje, co zawierają i dlaczego nie są lepszymi interpretacjami.",
    "backLabel": "Podstawa interpretacji",
    "sections": [
      {
        "title": "Sama interpretacja nie wiąże się z opłatą",
        "blocks": [
          {
            "p": "Zapisanie swojego snu i zobaczenie, jakie symbole są zawarte **nie kosztuje pieniędzy i nie wymaga członkostwa.** Ponieważ ludzie śnią każdego dnia, uznaliśmy, że ta przestrzeń powinna być oferowana za darmo."
          },
          {
            "p": "**Dwie płatne opcje nie są lepszymi interpretacjami.** Są **dwoma sposobami na zachowanie tej samej interpretacji.** Treść, którą widzisz na ekranie, nie zmienia się po dokonaniu płatności."
          }
        ]
      },
      {
        "title": "Karta snu — Jeden obraz",
        "blocks": [
          {
            "p": "Dostarczamy symbole znalezione w twoim śnie i ich znaczenia w **jednym obrazie.** To jest plik graficzny, a nie PDF, więc możesz go zapisać tak jak jest lub wysłać innym."
          },
          {
            "p": "To jest dla tych, którzy czują żal, gdy dobry sen znika po zamknięciu ekranu. Ponieważ nie zapisujemy snów, to jest jedyny sposób, aby je zachować, jeśli chcesz je zachować."
          }
        ]
      },
      {
        "title": "Raport o śnie o poczęciu — Dokument {conceptionPages} stron",
        "blocks": [
          {
            "p": "Tworzymy **dokument o długości {conceptionPages} stron** dotyczący snów, które pokazują symbole wskazujące na a conception dream. Zawiera on, które symbole się pojawiły, jak te symbole były tradycyjnie interpretowane oraz miejsce na zapisanie tych informacji."
          },
          {
            "p": "Sny o poczęciu są często omawiane i dzielone wśród członków rodziny nawet po narodzinach dziecka, dlatego stworzyliśmy osobny dokument dla snów, które są zbyt cenne, aby tylko je zobaczyć na ekranie."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Słowa, które nie są używane tutaj również",
        "blocks": [
          {
            "p": "Nie dokonujemy ocen dotyczących statusu ciąży ani płci dziecka. Takie stwierdzenia nie są zawarte w dokumencie. Aby uzyskać więcej szczegółów, proszę zapoznać się z [jak sny o poczęciu są filtrowane](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Dlaczego nie ma już dokumentu?",
        "blocks": [
          {
            "p": "Usługa siostrzana produkuje dziewięciostronicowy raport. Dzieje się tak, ponieważ silnik saju wydobywa wiele wartości z jednej daty urodzenia. Interpretacja snów w koreańskiej tradycji nie działa w ten sposób."
          },
          {
            "p": "Słownik zawiera {symbolTotal} symboli i {meaningTotal} znaczeń, ale **tylko kilka symboli faktycznie odnosi się do jednego snu**. Aby rozszerzyć to na dziewięć stron, należałoby napisać rzeczy, które nie znajdują się w żadnym oryginalnym tekście, a to jest dokładnie to, czego ta usługa postanowiła nie robić. Dlatego dokument jest tak długi, jak materiały szczerze pozwalają, i nie dłużej."
          }
        ]
      },
      {
        "title": "Wartości i dostępność",
        "blocks": [
          {
            "p": "Ceny są dostępne w [przewodniku po cenach](/pricing). Powód, dla którego ten dokument nie wymienia kwot, jest zamierzony — aby zapobiec sytuacjom, w których dokument z wytycznymi pozostaje z przestarzałymi kwotami, gdy wartości się zmieniają. Ekran i warunki odczytują wszystkie kwoty z tego samego miejsca."
          },
          {
            "p": "Dokument, za który zapłaciłeś, **może być odebrany ponownie w tym samym zamówieniu.** Jednakże, ponieważ nie przechowujemy plików, nie może być odtworzony po opuszczeniu ekranu wyników — proszę zachować otrzymany plik."
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
  "intro": "Zmiany w warunkach korzystania — ceny, zasady — są publikowane tutaj przed ich wejściem w życie. Wewnętrzne ulepszenia, takie jak szybszy ekran, nie są tutaj publikowane: to, co się tutaj pojawia, to to, co musisz wiedzieć.",
  "empty": {
    "title": "Brak opublikowanych ogłoszeń",
    "body": "Jeśli będą jakiekolwiek zmiany do przekazania, zostaną one opublikowane tutaj."
  },
  "effective": "Wchodzi w życie od {date}",
  "pager": {
    "label": "Strona ogłoszeń",
    "newer": "← Najnowsze",
    "older": "Poprzednie ogłoszenia →"
  },
  "items": {
    "2026-08-06-no-storage": {
      "title": "Sen, który podałeś, nie jest przechowywany.",
      "body": [
        "Historie snów są najbardziej prywatnymi wartościami, które ta usługa otrzymuje. Dlatego nie są one rejestrowane w żadnej tabeli. Wprowadzenie jest przenoszone tylko w adresie wyniku do obliczeń, a po zamknięciu okna znika.",
        "Zdecydowaliśmy się nie tworzyć funkcji, która zbiera sny i pokazuje ich przebieg (dziennik snów). To użyteczna funkcja, ale aby to zrobić, najbardziej prywatne zapisy muszą być ciągle przechowywane.",
        "Kiedy wysyłasz link do wyniku innym, zawiera on treść snu. Proszę być ostrożnym przy udostępnianiu."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "Wyniki zawierają słownik symboli i kryteria obliczeń.",
      "body": [
        "Podstawą interpretacji jest tradycyjny słownik symboli w interpretacji snów. Wyniki i dokumenty będą zawierały wersję tego słownika (np. 1.2.0) oraz wersję reguł dopasowania (na przykład dream-1.0.0). Ten sam sen zawsze da ten sam symbol na podstawie tych samych kryteriów.",
        "Jeśli dodamy symbole do słownika lub zmienimy znaczenia w sposób, który może wpłynąć na wyniki, ten fakt zostanie tutaj przedstawiony. Dzieje się tak, ponieważ wyniki, które otrzymałeś wcześniej, mogą się zmienić.",
        "Nie tworzymy tradycyjnych znaczeń, które nie znajdują się w słowniku. Jeśli nie znaleziono symboli, po prostu stwierdzamy, że żadne nie zostały znalezione i kończymy."
      ]
    },
    "2026-08-06-conception": {
      "title": "Informujemy tylko o śnie o poczęciu i nie wydajemy osądów.",
      "body": [
        "Jeśli w śnie pojawią się symbole tradycyjnie postrzegane jako sen o poczęciu, poinformujemy cię o tym fakcie. Jednak nie określamy statusu ciąży ani płci dziecka — takie twierdzenia nie mają podstaw, a medyczne osądy są odpowiedzialnością instytucji medycznych.",
        "Wzmianka o synach i córkach w tradycyjnych narracjach jest odzwierciedleniem zwyczajów, które zostały przekazane, i nie oznacza, że przewidujemy to poprawnie."
      ]
    }
  }
} satisfies NoticeCopy;
