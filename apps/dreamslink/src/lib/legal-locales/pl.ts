import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Polityka przetwarzania danych osobowych",
  "intro": "Dreams-Link nie przechowuje informacji potrzebnych do interpretacji snów. Niniejsza polityka opisuje, co jest zbierane, co nie jest przechowywane oraz co jest automatycznie rejestrowane.",
  "sections": [
    {
      "heading": "1. Informacje, które nie są przechowywane",
      "paragraphs": [
        "Opowieści o snach, które podajesz w celu interpretacji, twoje odczucia po przebudzeniu oraz to, czy powtarzasz ten sam sen, **nie są nigdzie przechowywane.** Są one używane tylko w pamięci serwera podczas przetwarzania żądania i znikają wraz z odpowiedzią.",
        "Nie są zapisywane w bazie danych ani w osobnych plikach. Nie ma rejestracji użytkowników, więc wprowadzone dane nie są powiązane z konkretną osobą.",
        "Opowieści o snach są najbardziej osobistymi danymi, które ta usługa otrzymuje. Dlatego nie ma funkcji przeglądania wcześniejszych wyników (dziennik snów) — ta funkcja wymagałaby przechowywania podanych tekstów."
      ]
    },
    {
      "heading": "2. Informacje zawarte w linku do wyników",
      "paragraphs": [
        "Adres na stronie wyników zawiera zakodowane dane wejściowe. Jednak te dane znajdują się za znakiem # w adresie, a zgodnie z normami internetowymi, zawartość za znakiem # nie jest przesyłana przez przeglądarkę do serwera. Dlatego nawet jeśli otworzysz link do wyników, w rejestrze dostępu serwera pozostanie tylko ścieżka adresu.",
        "Jeśli wyślesz link do innej osoby, ta osoba również będzie mogła zobaczyć te same wyniki. Link sam w sobie zawiera dane wejściowe, więc decyzja o udostępnieniu należy do użytkownika."
      ]
    },
    {
      "heading": "3. Informacje zbierane automatycznie",
      "paragraphs": [
        "Nie zbieramy informacji, które mogłyby identyfikować użytkowników. Jednak minimalne zapisy niezbędne do działania usługi są automatycznie przechowywane przez dostawcę infrastruktury."
      ],
      "bullets": [
        "Adres IP, data i godzina dostępu, typ przeglądarki oraz inne ogólne zapisy dostępu do serwera",
        "Informacje o kraju — używane tylko do automatycznego określenia języka ekranu i nie są przechowywane"
      ]
    },
    {
      "heading": "4. Ciasteczka i reklamy",
      "paragraphs": [
        "Usługa sama w sobie nie używa ciasteczek do śledzenia użytkowników.",
        "Obecnie w tej usłudze nie są wyświetlane reklamy. W przyszłości, jeśli reklamy zostaną wprowadzone, dostawcy reklam (np. Google) mogą używać ciasteczek do ich wyświetlania. W takim przypadku najpierw zmienimy ten punkt, aby wyjaśnić, co się zmienia, przed rozpoczęciem ich wyświetlania."
      ]
    },
    {
      "heading": "5. Informacje przechowywane podczas płatności",
      "paragraphs": [
        "Obecnie nie sprzedajemy płatnych produktów, więc nie ma informacji przechowywanych w związku z płatnościami.",
        "Gdy rozpoczniemy sprzedaż, w celu przetwarzania płatności oraz zgodnie z przepisami prawa dotyczącego przechowywania zapisów transakcji, będą przechowywane następujące dane. **Nawet wtedy nie przechowujemy podanych snów ani utworzonych plików**, ani nie zbieramy informacji identyfikujących użytkowników, takich jak imię, dane kontaktowe czy adres."
      ],
      "bullets": [
        "Numer zamówienia i identyfikator płatności",
        "Kwota płatności, waluta oraz status płatności (nieopłacone, opłacone, anulowane)",
        "Rodzaj produktu, status przetwarzania, liczba pobrań dokumentu, czas zamówienia",
        "Język ekranu w momencie zamówienia oraz klasyfikacja regionu płatności (krajowy, zagraniczny)",
        "Okres przechowywania — zgodnie z artykułem 6 ustawy o ochronie konsumentów w handlu elektronicznym, zapisy dotyczące płatności i dostawy towarów będą przechowywane przez 5 lat, a zapisy dotyczące skarg lub sporów konsumenckich przez 3 lata, po czym zostaną zniszczone."
      ]
    },
    {
      "heading": "6. Przekazywanie danych osobowych osobom trzecim i outsourcing przetwarzania",
      "paragraphs": [
        "Nie przechowujemy danych osobowych, więc nie przekazujemy danych osobowych osobom trzecim.",
        "W celu prowadzenia usługi korzystamy z infrastruktury hostingowej {hostingProvider}, a w tym procesie zapisy dostępu z punktu 3 są przetwarzane zgodnie z polityką tego dostawcy.",
        "Gdy rozpoczniemy sprzedaż płatnych produktów, krajowe płatności będą zlecane Toss Payments, a zagraniczne PortOne (PayPal). Informacje o metodach płatności, takie jak numery kart i numery kont, będą przetwarzane bezpośrednio przez tych dostawców, a usługa ich nie otrzyma."
      ]
    },
    {
      "heading": "7. Prawa użytkowników",
      "paragraphs": [
        "Nie ma przechowywanych danych osobowych, więc nie ma podmiotów, do których można by zgłaszać prośby o wgląd, poprawę lub usunięcie.",
        "Użytkownik może usunąć wszystkie ślady wprowadzonych danych, po prostu usuwając link do wyników z paska adresu przeglądarki.",
        "W przypadku pytań dotyczących korzystania z usługi, prosimy o kontakt pod poniższymi danymi."
      ]
    },
    {
      "heading": "8. Dane osobowe dzieci",
      "paragraphs": [
        "Usługa ta nie jest skierowana do dzieci poniżej 14 roku życia i nie zbiera danych osobowych od dzieci."
      ]
    },
    {
      "heading": "9. Inspektor ochrony danych osobowych",
      "paragraphs": [
        "Inspektor ochrony danych: {privacyOfficer}",
        "Kontakt: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Zmiany w polityce",
      "paragraphs": [
        "W przypadku zmiany niniejszej polityki, data wejścia w życie oraz zmiany zostaną opublikowane na tej stronie. W przypadku rzeczywistych zmian w przetwarzaniu, takich jak wprowadzenie reklam lub sprzedaż płatnych produktów, najpierw poinformujemy o zmianach."
      ]
    }
  ],
  "effectiveLabel": "Data wejścia w życie"
};

const d1 = {
  "title": "Warunki korzystania",
  "intro": "Niniejsze warunki określają zasady korzystania z Dreams-Link (dalej „usługa”). Korzystając z usługi, uznaje się, że akceptujesz te warunki.",
  "effectiveLabel": "Data wejścia w życie",
  "sections": [
    {
      "heading": "1. Charakter usługi",
      "paragraphs": [
        "Usługa polega na wyszukiwaniu tradycyjnych symboli marzeń w snach podanych przez użytkownika i przedstawianiu ich znaczenia jako materiału referencyjnego. Mówimy, że nie znaleziono symboli, które nie znajdują się w słowniku, i nie wymyślamy nieistniejących znaczeń.",
        "Prezentowane symbole i interpretacje są **materiałem referencyjnym z perspektywy tradycyjnej interpretacji, a nie prognozami przyszłości ani poradami medycznymi, finansowymi czy prawnymi.** Dobry sen nie gwarantuje żadnych wydarzeń, a zły sen nie oznacza, że coś jest zaplanowane.",
        "**Wyniki związane z marzeniami o poczęciu (태몽) nie określają stanu ciąży ani płci dziecka.** Informujemy jedynie o tym, że pojawiły się symbole, które tradycyjnie uznawane są za związane z marzeniami o poczęciu oraz o ich kontekście."
      ]
    },
    {
      "heading": "2. Opłaty za korzystanie z usługi",
      "paragraphs": [
        "Obecnie usługa jest całkowicie bezpłatna i nie wymaga rejestracji.",
        "W przypadku rozpoczęcia sprzedaży produktów płatnych (obrazek karty marzeń, raport o marzeniu o poczęciu (태몽)) zastosowanie mają warunki określone w punkcie 3. Przed rozpoczęciem sprzedaży ponownie zostaną przedstawione te warunki."
      ]
    },
    {
      "heading": "3. Produkty płatne i zwroty",
      "paragraphs": [
        "Sprzedawane produkty płatne to **dwa rodzaje**. Bezpłatna interpretacja snów jest dostępna bez płatności, a poniższe dwa produkty są tworzone w formie, która pozwala na zachowanie ich wyników.",
        "**Karta snu** — to pojedynczy plik graficzny. Tworzymy ją, aby zachować symbole i tradycyjne znaczenie z snu, który został śniony danego dnia. **Nie jest to dokument (PDF).** Płatność krajowa {priceCardDomestic} (z VAT), płatność zagraniczna {priceCardGlobal}.",
        "**Raport o śnie dotyczący poczęcia (태몽 리포트) PDF** — 4 strony. Zawiera tradycyjne znaczenie symboli oraz ich kontekst w formie dokumentu. **Nie oceniamy stanu ciąży** — informujemy jedynie, że symbole, które tradycyjnie uważane są za związane z poczęciem, pojawiły się w śnie. Płatność krajowa {priceConceptionDomestic} (z VAT), płatność zagraniczna {priceConceptionGlobal}.",
        "Płatności krajowe można dokonywać za pomocą kart kredytowych i debetowych oraz płatności mobilnych (Toss Payments, KakaoPay, NaverPay, Payco itp.) przez Toss Payments, a płatności zagraniczne przez PayPal za pośrednictwem PortOne. Ostateczna kwota jest zgodna z kwotą wyświetlaną na ekranie płatności.",
        "**Usługa nie przechowuje ani danych wprowadzonych przez użytkownika, ani utworzonych plików PDF.** Po zatwierdzeniu płatności dokument jest tworzony i przesyłany natychmiastowo, a na serwerze nie pozostaje nic. Dlatego pobrany plik należy przechować samodzielnie przez użytkownika.",
        "W przypadku przerwania pobierania lub utraty pliku, można go pobrać ponownie **do 5 razy** w ramach tego samego zamówienia. Należy jednak pamiętać, że jeśli dane wejściowe znikną po opuszczeniu ekranu wyników, nie będzie można ich ponownie utworzyć, dlatego prosimy o zapisanie pliku zaraz po dokonaniu płatności."
      ],
      "bullets": [
        "**Przed rozpoczęciem pobierania po dokonaniu płatności** można w każdej chwili anulować zamówienie i otrzymać pełny zwrot.",
        "**Po zakończeniu pobierania** zwrot z powodu zmiany zdania jest ograniczony. Jest to cyfrowa treść, która jest dostarczana natychmiastowo i nie można jej przywrócić, co odpowiada przyczynom ograniczenia zwrotów określonym w art. 17 ust. 2 ustawy o ochronie konsumentów w handlu elektronicznym.",
        "**W przypadku błędu systemu, gdy dokument nie został utworzony, plik nie otwiera się lub kwota płatności różni się od zamówienia** będzie to traktowane jako ponowne wydanie lub pełny zwrot.",
        "**Reklamacje dotyczące treści wyników** nie są podstawą do zwrotu. Wyniki interpretacji snów są materiałem referencyjnym z perspektywy tradycyjnej interpretacji, co zostało wskazane przed dokonaniem płatności (punkt 1 powyżej).",
        "Ponowne żądanie po wykorzystaniu wszystkich 5 możliwości ponownego wydania nie jest podstawą do zwrotu.",
        "**W przypadku, gdy osoba niepełnoletnia dokonała płatności bez zgody swojego przedstawiciela ustawowego**, zarówno ona, jak i jej przedstawiciel ustawowy mogą anulować tę płatność. Prosimy o kontakt pod poniższymi danymi, aby uzyskać zwrot."
      ]
    },
    {
      "heading": "4. Wyniki interpretacji snów",
      "paragraphs": [
        "Zasady wyszukiwania symboli opierają się na opublikowanej słowniku i ustalonych procedurach, dlatego pisząc ten sam tekst, zawsze uzyskuje się te same symbole.",
        "Im krócej się pisze, tym mniej symboli zostanie znalezionych. Symbole, które nie znajdują się w słowniku, nie będą rozpoznawane, a w takim przypadku wyniki pozostaną puste.",
        "Słownik symboli jest zbiorem tradycyjnych tekstów dotyczących interpretacji snów oraz przekazów ustnych, a interpretacje mogą się różnić w zależności od regionu i epoki."
      ]
    },
    {
      "heading": "5. Odpowiedzialność użytkownika",
      "paragraphs": [
        "Użytkownik może zapisywać sny innych osób, jednak nie może ich wykorzystywać w sposób niekorzystny dla tych osób.",
        "Nie należy używać wyników usługi jako podstawy do podejmowania decyzji wpływających na prawa lub interesy ludzi, takich jak ciąża, zdrowie, inwestycje czy zatrudnienie. Usługa nie została stworzona do takich celów."
      ]
    },
    {
      "heading": "6. Zakazane działania",
      "paragraphs": [
        "Następujące działania są zabronione."
      ],
      "bullets": [
        "Wysyłanie nadmiernych żądań za pomocą narzędzi automatycznych, co zakłóca działanie usługi",
        "Prezentowanie wyników usługi jako faktów lub wyników ekspertyzy specjalistycznej",
        "Kopiowanie lub modyfikowanie usługi w celu świadczenia tej samej usługi"
      ]
    },
    {
      "heading": "7. Zrzeczenie się odpowiedzialności",
      "paragraphs": [
        "Usługa dostarcza jedynie materiały referencyjne i nie ponosi odpowiedzialności za decyzje podjęte przez użytkownika na podstawie wyników oraz ich konsekwencje.",
        "Nie ponosimy odpowiedzialności za szkody wynikłe z przerwania usługi z powodu okoliczności, których nie możemy kontrolować, takich jak klęski żywiołowe czy awarie dostawców infrastruktury."
      ]
    },
    {
      "heading": "8. Prawo własności intelektualnej",
      "paragraphs": [
        "Prawa do ekranów, tekstów i implementacji zasad obliczeń usługi należą do operatora. Użytkownik może zapisywać lub udostępniać wyniki wyłącznie w celach osobistych."
      ]
    },
    {
      "heading": "9. Zmiany warunków i prawo właściwe",
      "paragraphs": [
        "W przypadku zmiany warunków, zostaną one opublikowane na tej stronie wraz z datą wejścia w życie.",
        "Niniejsze warunki podlegają prawu Korei Południowej, a wszelkie spory związane z korzystaniem z usługi będą rozstrzygane zgodnie z procedurami określonymi w odpowiednich przepisach prawnych."
      ]
    }
  ]
};

const d2 = {
  "title": "Polityka zwrotów i anulacji",
  "intro": "Kryteria anulacji i zwrotu płatnych produktów. Zebrano tutaj informacje zgodne z punktem 3 warunków.",
  "sections": [
    {
      "heading": "1. Charakter produktu",
      "paragraphs": [
        "Sprzedawane produkty to **karta snu (dream card)** (jedno zdjęcie) oraz **raport o śnie dotyczący poczęcia (태몽 리포트)** (PDF), które są cyfrową treścią dostarczaną natychmiast po zatwierdzeniu płatności.",
        "**Usługa nie przechowuje ani zapisanych snów, ani utworzonych plików.** Dlatego pobrany plik musi być przechowywany przez użytkownika."
      ],
      "bullets": []
    },
    {
      "heading": "2. Prawo do odstąpienia od umowy",
      "paragraphs": [
        "Zgodnie z przepisami ustawy o handlu elektronicznym."
      ],
      "bullets": [
        "**Przed rozpoczęciem pobierania** można w każdej chwili anulować zamówienie i otrzymać pełny zwrot pieniędzy.",
        "**Po zakończeniu pobierania** odstąpienie od umowy z powodu zmiany zdania jest ograniczone. Jest to cyfrowa treść, która jest dostarczana natychmiast po płatności i nie można jej przywrócić, co odpowiada przyczynom ograniczenia określonym w art. 17 ust. 2 ustawy o ochronie konsumentów w handlu elektronicznym. Informujemy o tym na ekranie płatności i uzyskujemy zgodę."
      ]
    },
    {
      "heading": "3. Przypadki pełnego zwrotu",
      "paragraphs": [
        "W następujących przypadkach po potwierdzeniu przyczyny dokonujemy ponownego wydania lub pełnego zwrotu pieniędzy."
      ],
      "bullets": [
        "W przypadku błędu systemowego, gdy plik nie został utworzony",
        "Gdy pobrany plik nie otwiera się",
        "Gdy kwota płatności różni się od zamówienia",
        "**Gdy osoba niepełnoletnia dokonała płatności bez zgody przedstawiciela ustawowego** — Wniosek o anulowanie może złożyć osoba pełnoletnia lub przedstawiciel ustawowy."
      ]
    },
    {
      "heading": "4. Przypadki, które nie kwalifikują się do zwrotu",
      "paragraphs": [],
      "bullets": [
        "**Niezadowolenie z treści wyników.** Wyniki interpretacji snów są materiałem referencyjnym z perspektywy tradycyjnej interpretacji, co zostało wcześniej wyjaśnione przed dokonaniem płatności. Dotyczy to również sytuacji, gdy nie można znaleźć symboli obecnych w śnie, co skutkuje krótkim wynikiem — nie tworzymy znaczeń, które nie istnieją.",
        "Ponowne żądanie po wykorzystaniu wszystkich 5 możliwości ponownego wydania."
      ]
    },
    {
      "heading": "5. Sposób składania wniosków",
      "paragraphs": [
        "Proszę składać wnioski o zwrot lub zapytania do centrum obsługi klienta ({customerCenter}) lub na adres e-mail ({email}). Podanie numeru zamówienia przyspieszy proces weryfikacji.",
        "Zwrot zostanie dokonany na metodę płatności, którą użyto, a w zależności od warunków firmy kartowej lub płatniczej, może zająć od 3 do 7 dni roboczych na przetworzenie."
      ]
    }
  ],
  "effectiveLabel": "Data wejścia w życie"
};

const d3 = {
  "title": "Informacje o cenach",
  "intro": "Informujemy o zakresie usług świadczonych bezpłatnie oraz cenach produktów płatnych.",
  "sections": [
    {
      "heading": "1. Bezpłatne",
      "paragraphs": [
        "**Sprawdzanie snów i przeglądanie wyników jest bezpłatne.** Nie jest wymagana rejestracja.",
        "Możesz zobaczyć wszystkie symbole znalezione w śnie, ich znaczenie oraz to, co one wspólnie wskazują, na ekranie. Sny są codziennym zjawiskiem, więc ta usługa nie ma ograniczeń w przeszukiwaniu."
      ]
    },
    {
      "heading": "2. Karta snu (płatna)",
      "paragraphs": [
        "Płatność krajowa {priceCardDomestic} (w tym VAT) · Płatność zagraniczna {priceCardGlobal}",
        "Wyniki na ekranie zostaną zapisane w **jednym obrazie**. Jest to forma, którą można przechować lub wysłać, **to nie jest dokument PDF.**",
        "Możesz pobrać ten sam zamówiony plik **do 5 razy**. Jednakże, jeśli dane wejściowe znikną poza ekranem wyników, nie będzie można go ponownie utworzyć, dlatego prosimy o zapisanie pliku zaraz po dokonaniu płatności."
      ]
    },
    {
      "heading": "3. Raport o śnie o poczęciu PDF (płatny)",
      "paragraphs": [
        "Płatność krajowa {priceConceptionDomestic} (w tym VAT) · Płatność zagraniczna {priceConceptionGlobal}",
        "Gdy symbole tradycyjnie uznawane za sny o poczęciu pojawią się, zebrane zostaną ich znaczenia oraz kontekst w 4-stronnym dokumencie PDF. **Nie oceniamy stanu ciąży ani płci płodu.**",
        "Warunki ponownego wydania są takie same jak w przypadku karty snu."
      ]
    },
    {
      "heading": "4. Metody płatności",
      "paragraphs": [
        "**Krajowe** — Możesz korzystać z kart kredytowych/debetowych oraz płatności mobilnych (Toss Payments, KakaoPay, NaverPay, Payco itp.) za pośrednictwem Toss Payments.",
        "**Zagraniczne** — Możesz dokonać płatności przez PayPal za pośrednictwem PortOne.",
        "Ostateczna kwota płatności jest zgodna z kwotą wyświetlaną na ekranie płatności."
      ]
    },
    {
      "heading": "5. Zmiana cen",
      "paragraphs": [
        "W przypadku zmiany cen najpierw opublikujemy to na tej stronie. Zmodyfikowane ceny nie będą miały zastosowania do zamówień, które już zostały opłacone."
      ]
    }
  ],
  "effectiveLabel": "Data wejścia w życie"
};

const d4 = {
  "title": "Polityka przetwarzania danych osobowych",
  "intro": "Dreams-Link nie przechowuje informacji potrzebnych do interpretacji snów. Niniejsza polityka opisuje, co jest zbierane, co nie jest przechowywane oraz co jest automatycznie rejestrowane.",
  "sections": [
    {
      "heading": "1. Informacje, które nie są przechowywane",
      "paragraphs": [
        "Opowieści o snach, które podajesz w celu interpretacji, twoje odczucia po przebudzeniu oraz to, czy powtarzasz ten sam sen, **nie są przechowywane nigdzie.** Są one używane tylko w pamięci serwera podczas przetwarzania żądania i znikają wraz z odpowiedzią.",
        "Nie są zapisywane w bazie danych ani w osobnych plikach. Nie ma rejestracji użytkowników, więc wprowadzone dane nie są powiązane z konkretną osobą.",
        "Opowieści o snach są najbardziej osobistymi danymi, które ta usługa zbiera. Dlatego nie ma funkcji przeglądania wcześniejszych wyników (dziennik snów) — ta funkcja wymagałaby przechowywania podanych tekstów."
      ]
    },
    {
      "heading": "2. Informacje zawarte w linku do wyników",
      "paragraphs": [
        "Adres na stronie wyników zawiera zakodowane dane wejściowe. Jednak te dane znajdują się za znakiem # w adresie, a zgodnie z normami internetowymi, zawartość za znakiem # nie jest przesyłana przez przeglądarkę do serwera. Dlatego otwierając link do wyników, w rejestrze dostępu serwera pozostaje tylko ścieżka adresu.",
        "Jeśli wyślesz link do innej osoby, ta osoba również będzie mogła zobaczyć te same wyniki. Link sam w sobie zawiera dane wejściowe, więc decyzja o udostępnieniu należy do użytkownika."
      ]
    },
    {
      "heading": "3. Informacje zbierane automatycznie",
      "paragraphs": [
        "Nie zbieramy informacji, które pozwalają zidentyfikować użytkownika. Jednak minimalne zapisy wymagane do działania usługi są automatycznie rejestrowane przez dostawcę infrastruktury."
      ],
      "bullets": [
        "Ogólne zapisy dostępu serwera, takie jak adres IP, data i godzina dostępu, typ przeglądarki",
        "Informacje o kraju — używane tylko do automatycznego określenia języka ekranu i nie są przechowywane"
      ]
    },
    {
      "heading": "4. Ciasteczka i reklamy",
      "paragraphs": [
        "Usługa sama w sobie nie używa ciasteczek do identyfikacji lub śledzenia użytkowników. Opowieści o snach, które podajesz, nie są przekazywane reklamodawcom.",
        "Usługa wyświetla reklamy za pośrednictwem Google AdSense. W tym procesie zachodzą następujące zdarzenia."
      ],
      "bullets": [
        "Dostawcy zewnętrzni, w tym Google, mogą zapisywać lub odczytywać ciasteczka w przeglądarce użytkownika.",
        "Google używa ciasteczek do wyświetlania reklam na podstawie historii odwiedzin tej i innych stron.",
        "Użytkownik może wyłączyć spersonalizowane reklamy w ustawieniach reklam Google (google.com/settings/ads). Nawet po wyłączeniu reklamy będą nadal wyświetlane, ale ich związki z użytkownikiem będą mniejsze.",
        "Spersonalizowane reklamy od dostawców zewnętrznych można wyłączyć jednocześnie na stronie aboutads.info/choices.",
        "Istnieje również możliwość zablokowania ciasteczek w ustawieniach przeglądarki.",
        "Użytkownicy z Europejskiego Obszaru Gospodarczego, Wielkiej Brytanii i Szwajcarii są najpierw pytani o zgodę na użycie ciasteczek reklamowych."
      ]
    },
    {
      "heading": "5. Informacje przechowywane podczas płatności",
      "paragraphs": [
        "Obecnie nie sprzedajemy płatnych produktów, więc nie ma informacji przechowywanych w związku z płatnościami.",
        "Gdy rozpoczniemy sprzedaż, poniższe informacje będą przechowywane w celu przetwarzania płatności oraz zgodnie z przepisami prawa dotyczącymi przechowywania zapisów transakcji. **Nawet wtedy nie będziemy przechowywać podanych snów ani stworzonych plików**, ani nie będziemy zbierać informacji identyfikujących użytkownika, takich jak imię, dane kontaktowe czy adres."
      ],
      "bullets": [
        "Numer zamówienia i identyfikator płatności",
        "Kwota płatności, waluta i status płatności (nieopłacona, opłacona, anulowana)",
        "Rodzaj produktu, status przetwarzania, liczba pobrań dokumentu, czas zamówienia",
        "Język ekranu w momencie zamówienia oraz klasyfikacja regionu płatności (krajowy, zagraniczny)",
        "Okres przechowywania — zgodnie z artykułem 6 ustawy o ochronie konsumentów w handlu elektronicznym, zapisy dotyczące płatności i dostarczania towarów będą przechowywane przez 5 lat, a zapisy dotyczące skarg lub sporów konsumenckich przez 3 lata, po czym zostaną zniszczone."
      ]
    },
    {
      "heading": "6. Przekazywanie danych osobowych osobom trzecim i zlecanie przetwarzania",
      "paragraphs": [
        "Nie przechowujemy danych osobowych, więc nie przekazujemy danych osobowych osobom trzecim.",
        "W celu działania usługi korzystamy z infrastruktury hostingowej {hostingProvider}, a w tym procesie zapisy dostępu z punktu 3 są przetwarzane zgodnie z polityką tego dostawcy.",
        "Gdy rozpoczniemy sprzedaż płatnych produktów, krajowe płatności będą zlecane Toss Payments, a zagraniczne PortOne (PayPal). Informacje o metodach płatności, takie jak numery kart i kont, będą przetwarzane bezpośrednio przez tych dostawców, a usługa ich nie otrzyma."
      ]
    },
    {
      "heading": "7. Prawa użytkownika",
      "paragraphs": [
        "Nie ma przechowywanych danych osobowych, więc nie ma podmiotu, od którego można by żądać dostępu, korekty lub usunięcia.",
        "Użytkownik może usunąć wszystkie ślady wprowadzonych danych, po prostu usuwając link do wyników z paska adresu przeglądarki.",
        "W przypadku pytań związanych z korzystaniem z usługi prosimy o kontakt pod poniższymi danymi."
      ]
    },
    {
      "heading": "8. Dane osobowe dzieci",
      "paragraphs": [
        "Usługa nie jest skierowana do dzieci poniżej 14 roku życia i nie zbiera danych osobowych od dzieci."
      ]
    },
    {
      "heading": "9. Inspektor ochrony danych osobowych",
      "paragraphs": [
        "Inspektor ochrony danych: {privacyOfficer}",
        "Kontakt: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Zmiany w polityce",
      "paragraphs": [
        "W przypadku zmiany tej polityki, data wejścia w życie oraz zmiany zostaną opublikowane na tej stronie. W przypadku rzeczywistych zmian w przetwarzaniu, takich jak rozpoczęcie wyświetlania reklam lub sprzedaży płatnych produktów, najpierw poinformujemy o zmianach."
      ]
    }
  ],
  "effectiveLabel": "Data wejścia w życie"
};

const d5 = {
  "title": "Polityka przetwarzania danych osobowych",
  "intro": "Dreams-Link nie przechowuje informacji potrzebnych do interpretacji snów. Niniejsza polityka opisuje, co jest zbierane, co nie jest przechowywane oraz co jest automatycznie rejestrowane.",
  "sections": [
    {
      "heading": "1. Informacje, które nie są przechowywane",
      "paragraphs": [
        "Opowieści o snach, które podajesz w celu interpretacji, uczucia po przebudzeniu oraz to, czy powtarzasz ten sam sen, **nie są przechowywane nigdzie.** Są one używane tylko w pamięci serwera podczas przetwarzania żądania i znikają wraz z odpowiedzią.",
        "Nie są zapisywane w bazie danych ani w osobnych plikach. Nie ma rejestracji użytkowników, więc wprowadzone dane nie są powiązane z konkretną osobą.",
        "Opowieści o snach są jednymi z najbardziej prywatnych informacji, które ta usługa otrzymuje. Dlatego nie ma funkcji przeglądania wcześniejszych wyników (dziennik snów) — ta funkcja wymagałaby przechowywania wprowadzonych tekstów."
      ]
    },
    {
      "heading": "2. Informacje zawarte w linku do wyników",
      "paragraphs": [
        "Adres ekranu wyników zawiera zakodowane dane wejściowe. Jednak te dane znajdują się za znakiem # w adresie, a zgodnie z normami internetowymi, zawartość za znakiem # nie jest przesyłana przez przeglądarkę do serwera. Dlatego nawet jeśli otworzysz link do wyników, w rejestrze dostępu serwera pozostanie tylko ścieżka adresu.",
        "Jeśli wyślesz link do innej osoby, ta osoba również będzie mogła zobaczyć te same wyniki. Link sam w sobie zawiera dane wejściowe, więc decyzja o udostępnieniu należy do użytkownika."
      ]
    },
    {
      "heading": "3. Informacje zbierane automatycznie",
      "paragraphs": [
        "Nie zbieramy informacji, które mogłyby identyfikować użytkowników. Jednak minimalne zapisy niezbędne do działania usługi są automatycznie przechowywane przez dostawcę infrastruktury."
      ],
      "bullets": [
        "Ogólne zapisy dostępu do serwera, takie jak adres IP, data i godzina dostępu, typ przeglądarki",
        "Informacje o kraju — używane tylko do automatycznego określenia języka ekranu i nie są przechowywane"
      ]
    },
    {
      "heading": "4. Ciasteczka i reklamy",
      "paragraphs": [
        "Usługa sama w sobie nie używa ciasteczek do śledzenia użytkowników.",
        "Obecnie w tej usłudze nie są wyświetlane reklamy. W przypadku wprowadzenia reklam w przyszłości, dostawca reklam (np. Google) może używać ciasteczek do ich wyświetlania. W takim przypadku najpierw zmienimy ten punkt, aby wyjaśnić, co się zmienia."
      ]
    },
    {
      "heading": "5. Informacje przechowywane podczas płatności",
      "paragraphs": [
        "Podczas zakupu płatnych produktów (dream card, raport o śnie koncepcyjnym) informacje o zamówieniu są przechowywane w celu przetwarzania płatności oraz zgodnie z przepisami prawa dotyczącymi przechowywania zapisów transakcji.",
        "**Podane sny i utworzone pliki nie są przechowywane nawet po dokonaniu płatności.** Zasada z punktu 1 pozostaje niezmieniona, niezależnie od tego, czy dokonano płatności. Przechowywane elementy są następujące, a informacje identyfikujące użytkownika, takie jak imię, kontakt, adres, nie są w nich zawarte."
      ],
      "bullets": [
        "Numer zamówienia i identyfikator płatności",
        "Kwota płatności, waluta i status płatności (nieopłacone, opłacone, anulowane)",
        "Rodzaj produktu, status przetwarzania, liczba pobrań dokumentu, czas zamówienia",
        "Język ekranu w momencie zamówienia oraz rozróżnienie regionu płatności (krajowy, zagraniczny)",
        "Okres przechowywania — zgodnie z artykułem 6 ustawy o ochronie konsumentów w e-handlu, zapisy dotyczące płatności i dostawy towarów są przechowywane przez 5 lat, a zapisy dotyczące skarg lub sporów konsumenckich przez 3 lata, po czym są niszczone."
      ]
    },
    {
      "heading": "6. Przekazywanie danych osobowych osobom trzecim i zlecanie przetwarzania",
      "paragraphs": [
        "Nie przechowujemy danych osobowych identyfikujących użytkowników, więc nie ma danych osobowych przekazywanych osobom trzecim. Przetwarzanie płatności jest zlecane poniższym podmiotom.",
        "Usługa korzysta z infrastruktury hostingowej {hostingProvider}, a w tym procesie zapisy dostępu z punktu 3 są przetwarzane zgodnie z polityką tego podmiotu.",
        "Płatności krajowe są przetwarzane przez Toss Payments, a płatności zagraniczne przez PayPal za pośrednictwem PortOne. Informacje o metodach płatności, takie jak numery kart i kont, są przetwarzane bezpośrednio przez te podmioty, a usługa ich nie otrzymuje ani nie przechowuje."
      ]
    },
    {
      "heading": "7. Prawa użytkowników",
      "paragraphs": [
        "Ponieważ nie przechowujemy podanych snów, nie ma podmiotu, do którego można by zgłosić prośbę o wgląd, korektę lub usunięcie. Pozostałe zapisy zamówień związane z płatnościami muszą być przechowywane przez okres określony w przepisach, więc nie możemy ich usunąć w tym czasie, a po upływie tego okresu są niszczone.",
        "Użytkownik może usunąć wszystkie ślady wprowadzonych danych, po prostu usuwając link do wyników z paska adresu przeglądarki.",
        "W przypadku pytań związanych z korzystaniem z usługi, prosimy o kontakt pod poniższymi danymi."
      ]
    },
    {
      "heading": "8. Ochrona danych osobowych dzieci",
      "paragraphs": [
        "Usługa nie jest skierowana do dzieci poniżej 14 roku życia i nie zbiera danych osobowych od dzieci."
      ]
    },
    {
      "heading": "9. Inspektor ochrony danych osobowych",
      "paragraphs": [
        "Inspektor ochrony danych: {privacyOfficer}",
        "Kontakt: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Zmiany polityki",
      "paragraphs": [
        "W przypadku zmiany niniejszej polityki, data wejścia w życie oraz treść zmian będą publikowane na tej stronie. W przypadku rzeczywistych zmian w zakresie przetwarzania, takich jak wprowadzenie reklam lub sprzedaż płatnych produktów, najpierw poinformujemy o zmianach."
      ]
    }
  ],
  "effectiveLabel": "Data wejścia w życie"
};

const d6 = {
  "title": "Warunki korzystania",
  "intro": "Niniejsze warunki określają zasady korzystania z usługi Dreams-Link (dalej „usługa”). Korzystając z usługi, uznaje się, że użytkownik zgadza się z niniejszymi warunkami.",
  "sections": [
    {
      "heading": "1. Charakter usługi",
      "paragraphs": [
        "Usługa polega na wyszukiwaniu tradycyjnych symboli marzeń w snach podanych przez użytkownika i przedstawianiu ich znaczenia jako materiału referencyjnego. Nie odnajduje się symboli, które nie są zawarte w słowniku, i nie tworzy się znaczeń, które nie istnieją.",
        "Prezentowane symbole i interpretacje są **materiałem referencyjnym z perspektywy tradycyjnej interpretacji i nie stanowią prognozy przyszłości ani porady medycznej, finansowej czy prawnej.** Dobry sen nie gwarantuje żadnych wydarzeń, a zły sen nie oznacza, że coś jest zaplanowane.",
        "**Wyniki związane z marzeniami o poczęciu (태몽) nie określają stanu ciąży ani płci dziecka.** Informujemy jedynie o tym, że w śnie pojawiły się symbole, które tradycyjnie uznawane są za związane z marzeniami o poczęciu oraz o ich kontekście."
      ]
    },
    {
      "heading": "2. Opłaty za korzystanie",
      "paragraphs": [
        "Konsultacja i przegląd wyników są bezpłatne i nie wymagają rejestracji.",
        "Otrzymanie wyników w formie karty snu (dream card) (obraz) lub raportu o poczęciu (태몽 리포트) (PDF) jest płatne. Ceny i warunki są podane w punkcie 3 oraz na stronie płatności."
      ]
    },
    {
      "heading": "3. Produkty płatne i zwroty",
      "paragraphs": [
        "Oferowane są **dwa rodzaje** produktów płatnych. Bezpłatna interpretacja jest dostępna bez płatności, a poniższe dwa produkty są tworzone w formie, którą można zachować.",
        "**Karta snu** — to jeden plik graficzny. Zawiera symbole i tradycyjne znaczenie snu z danego dnia. **Nie jest to dokument (PDF).** Płatność krajowa {priceCardDomestic} (w tym VAT), płatność zagraniczna {priceCardGlobal}.",
        "**Raport o poczęciu (태몽 리포트) PDF** — 4 strony. Zawiera tradycyjne znaczenie symboli oraz ich kontekst w formie dokumentu. **Nie określa stanu ciąży** — informujemy jedynie o tym, że w śnie pojawiły się symbole, które tradycyjnie uznawane są za związane z marzeniami o poczęciu. Płatność krajowa {priceConceptionDomestic} (w tym VAT), płatność zagraniczna {priceConceptionGlobal}.",
        "Płatności krajowe można dokonywać za pośrednictwem Toss Payments przy użyciu kart kredytowych, debetowych oraz płatności mobilnych (Toss, KakaoPay, NaverPay, Payco itp.), a płatności zagraniczne realizowane są przez PortOne za pośrednictwem PayPal. Ostateczna kwota jest zgodna z kwotą wyświetlaną na stronie płatności.",
        "**Usługa nie przechowuje danych wprowadzonych przez użytkownika ani utworzonych plików PDF.** Po zatwierdzeniu płatności dokument jest tworzony i przesyłany natychmiast, a na serwerze nie pozostaje nic. Dlatego pobrany plik należy przechować samodzielnie przez użytkownika.",
        "W przypadku przerwania pobierania lub utraty pliku, można pobrać go ponownie **do 5 razy** w ramach tego samego zamówienia. Należy jednak pamiętać, że jeśli dane wprowadzane przez użytkownika znikną po opuszczeniu ekranu wyników, nie będzie można ich ponownie utworzyć, dlatego należy zapisać plik zaraz po dokonaniu płatności."
      ],
      "bullets": [
        "**Przed rozpoczęciem pobierania po dokonaniu płatności** można w każdej chwili anulować zamówienie i otrzymać pełny zwrot.",
        "**Po zakończeniu pobierania** zwrot z powodu zmiany zdania jest ograniczony. Jest to cyfrowa treść, która jest dostarczana natychmiast po płatności i nie można jej przywrócić, co odpowiada przyczynom ograniczenia zwrotów określonym w art. 17 ust. 2 ustawy o ochronie konsumentów w transakcjach elektronicznych.",
        "**W przypadku, gdy dokument nie został utworzony z powodu błędu systemu, plik nie otwiera się lub kwota płatności różni się od zamówienia**, zostanie to rozwiązane poprzez ponowne wydanie lub pełny zwrot.",
        "**Reklamacje dotyczące treści wyników** nie są podstawą do zwrotu. Wyniki interpretacji są materiałem referencyjnym z perspektywy tradycyjnej interpretacji, co jest jasno określone przed dokonaniem płatności (patrz punkt 1).",
        "Ponowne żądanie po wykorzystaniu wszystkich 5 możliwości ponownego wydania nie jest podstawą do zwrotu.",
        "**W przypadku, gdy osoba niepełnoletnia dokonała płatności bez zgody swojego ustawowego przedstawiciela**, może ona lub jej przedstawiciel prawny anulować tę płatność. Proszę poinformować nas o tym pod poniższym adresem kontaktowym, a dokonamy zwrotu."
      ]
    },
    {
      "heading": "4. Wyniki interpretacji",
      "paragraphs": [
        "Zasady wyszukiwania symboli opierają się na publicznie dostępnych słownikach i ustalonych procedurach, dlatego przy wpisaniu tego samego tekstu zawsze pojawią się te same symbole.",
        "Im krócej zostanie napisane, tym mniej symboli zostanie znalezionych. Nie można znaleźć symboli, które nie są zawarte w słowniku, a w takim przypadku wyniki pozostaną puste.",
        "Słownik symboli jest zbiorem tradycyjnych tekstów dotyczących interpretacji snów oraz przekazów ustnych, które mogą różnić się w zależności od regionu i epoki."
      ]
    },
    {
      "heading": "5. Odpowiedzialność użytkownika",
      "paragraphs": [
        "Użytkownik może wpisywać sny innych osób, jednak nie może wykorzystywać wyników w sposób, który mógłby zaszkodzić innym.",
        "Nie należy używać wyników usługi jako podstawy do podejmowania decyzji dotyczących ciąży, zdrowia, inwestycji, zatrudnienia itp., które mogą wpływać na prawa lub interesy innych osób. Usługa nie została stworzona do takich celów."
      ]
    },
    {
      "heading": "6. Zakazane działania",
      "paragraphs": [
        "Następujące działania są zabronione."
      ],
      "bullets": [
        "Wysyłanie nadmiernych żądań za pomocą narzędzi automatycznych, co zakłóca działanie usługi",
        "Prezentowanie wyników usługi jako faktów lub wyników ekspertyzy specjalistycznej",
        "Kopiowanie lub modyfikowanie usługi w celu świadczenia tej samej usługi"
      ]
    },
    {
      "heading": "7. Zrzeczenie się odpowiedzialności",
      "paragraphs": [
        "Usługa dostarcza jedynie materiałów referencyjnych i nie ponosi odpowiedzialności za decyzje podjęte przez użytkownika na podstawie wyników oraz ich konsekwencje.",
        "Nie ponosimy odpowiedzialności za szkody wynikłe z przerwania usługi z powodu przyczyn niezależnych od nas, takich jak klęski żywiołowe czy awarie dostawców infrastruktury."
      ]
    },
    {
      "heading": "8. Prawo własności intelektualnej",
      "paragraphs": [
        "Prawa do ekranów usługi, tekstów i implementacji zasad obliczeń należą do operatora. Użytkownik może przechowywać lub dzielić się wynikami wyłącznie w celach osobistych."
      ]
    },
    {
      "heading": "9. Zmiany warunków i prawo właściwe",
      "paragraphs": [
        "W przypadku zmiany warunków, zostaną one opublikowane na tej stronie wraz z datą wejścia w życie.",
        "Niniejsze warunki podlegają prawu Korei Południowej, a wszelkie spory związane z korzystaniem z usługi będą rozstrzygane zgodnie z procedurami określonymi w odpowiednich przepisach prawnych."
      ]
    }
  ],
  "effectiveLabel": "Data wejścia w życie"
};

const d7 = {
  "title": "Polityka przetwarzania danych osobowych",
  "intro": "Dreams-Link nie przechowuje informacji potrzebnych do interpretacji snów. Niniejsza polityka opisuje, co jest zbierane, co nie jest przechowywane oraz co jest automatycznie rejestrowane.",
  "sections": [
    {
      "heading": "1. Informacje, które nie są przechowywane",
      "paragraphs": [
        "Opowieści o snach, które podajesz w celu interpretacji, twoje odczucia po przebudzeniu oraz to, czy powtarzasz ten sam sen, **nie są nigdzie przechowywane.** Są używane tylko w pamięci serwera podczas przetwarzania żądania i znikają wraz z odpowiedzią.",
        "Nie są zapisywane w bazie danych ani w osobnych plikach. Nie ma rejestracji użytkowników, więc wprowadzone dane nie są powiązane z konkretną osobą.",
        "Opowieści o snach są najbardziej osobistymi danymi, które ta usługa otrzymuje. Dlatego nie ma funkcji przeglądania wcześniejszych wyników (dziennik snów) — ta funkcja wymagałaby przechowywania podanych tekstów."
      ]
    },
    {
      "heading": "2. Informacje zawarte w linku do wyników",
      "paragraphs": [
        "Adres na stronie wyników zawiera zakodowane dane wejściowe. Jednak te dane znajdują się za znakiem # w adresie, a zgodnie z normami internetowymi, zawartość za znakiem # nie jest przesyłana przez przeglądarkę do serwera. Dlatego otwierając link do wyników, w rejestrze dostępu serwera pozostaje tylko ścieżka adresu.",
        "Jeśli wyślesz link do innej osoby, ta osoba również może zobaczyć te same wyniki. Link sam w sobie zawiera dane wejściowe, więc decyzja o udostępnieniu należy do użytkownika."
      ]
    },
    {
      "heading": "3. Informacje zbierane automatycznie",
      "paragraphs": [
        "Nie zbieramy informacji, które pozwalałyby zidentyfikować użytkownika. Jednak minimalne zapisy wymagane do działania usługi są automatycznie przechowywane przez dostawcę infrastruktury."
      ],
      "bullets": [
        "Ogólne zapisy dostępu do serwera, takie jak adres IP, data i godzina dostępu, typ przeglądarki",
        "Informacje o kraju — używane tylko do automatycznego określenia języka ekranu i nie są przechowywane"
      ]
    },
    {
      "heading": "4. Ciasteczka i reklamy",
      "paragraphs": [
        "Usługa sama w sobie nie używa ciasteczek do identyfikacji lub śledzenia użytkowników. Opowieści o snach, które podajesz, nie są przekazywane reklamodawcom.",
        "Usługa wyświetla reklamy za pośrednictwem Google AdSense. W tym procesie zachodzą następujące zdarzenia."
      ],
      "bullets": [
        "Dostawcy zewnętrzni, w tym Google, mogą przechowywać lub odczytywać ciasteczka w przeglądarce użytkownika.",
        "Google używa ciasteczek do wyświetlania reklam na podstawie historii odwiedzin tej oraz innych stron.",
        "Użytkownik może wyłączyć spersonalizowane reklamy w ustawieniach reklam Google (google.com/settings/ads). Nawet po wyłączeniu reklamy będą się nadal wyświetlać, ale ich związki z użytkownikiem będą mniejsze.",
        "Spersonalizowane reklamy od dostawców zewnętrznych można wyłączyć jednocześnie na stronie aboutads.info/choices.",
        "Można również zablokować ciasteczka w ustawieniach przeglądarki.",
        "Użytkownicy z Europejskiego Obszaru Gospodarczego, Wielkiej Brytanii i Szwajcarii są najpierw pytani o zgodę na użycie ciasteczek reklamowych."
      ]
    },
    {
      "heading": "5. Informacje przechowywane podczas płatności",
      "paragraphs": [
        "Podczas zakupu płatnych produktów (dream card, conception dream report) informacje o zamówieniu są przechowywane w celu przetwarzania płatności oraz zgodnie z przepisami prawa dotyczącymi przechowywania zapisów transakcji.",
        "**Podane sny i utworzone pliki nie są przechowywane, nawet jeśli dokonano płatności.** Zasada z punktu 1 pozostaje w mocy, niezależnie od tego, czy dokonano płatności. Przechowywane dane obejmują następujące elementy, nie zawierają one informacji identyfikujących użytkownika, takich jak imię, dane kontaktowe czy adres."
      ],
      "bullets": [
        "Numer zamówienia i identyfikator płatności",
        "Kwota płatności, waluta i status płatności (nieopłacone, opłacone, anulowane)",
        "Rodzaj produktu, status przetwarzania, liczba pobrań dokumentu, czas zamówienia",
        "Język ekranu i klasyfikacja regionu płatności (krajowy, zagraniczny) w momencie zamówienia",
        "Okres przechowywania — zgodnie z artykułem 6 ustawy o ochronie konsumentów w transakcjach elektronicznych, zapisy dotyczące płatności i dostawy towarów są przechowywane przez 5 lat, a zapisy dotyczące skarg lub sporów konsumenckich przez 3 lata, po czym są niszczone."
      ]
    },
    {
      "heading": "6. Przekazywanie danych osobowych osobom trzecim i zlecanie przetwarzania",
      "paragraphs": [
        "Nie przechowujemy danych osobowych, które pozwalałyby zidentyfikować użytkownika, więc nie przekazujemy danych osobowych osobom trzecim. Przetwarzanie płatności jest zlecane poniższym dostawcom.",
        "W celu działania usługi korzystamy z infrastruktury hostingowej {hostingProvider}, a w tym procesie zapisy dostępu z punktu 3 są przetwarzane zgodnie z polityką tego dostawcy.",
        "Płatności krajowe są przetwarzane przez Toss Payments, a płatności zagraniczne przez PayPal za pośrednictwem PortOne. Informacje o metodach płatności, takie jak numery kart czy numery kont, są przetwarzane bezpośrednio przez tych dostawców, a usługa ich nie odbiera ani nie przechowuje."
      ]
    },
    {
      "heading": "7. Prawa użytkownika",
      "paragraphs": [
        "Nie przechowujemy podanych snów, więc nie ma podmiotu, od którego można by żądać dostępu, korekty lub usunięcia. Pozostałe zapisy zamówień związane z płatnościami muszą być przechowywane przez okres określony w przepisach, więc nie możemy ich usunąć w tym czasie, a po upływie tego okresu są niszczone.",
        "Użytkownik może usunąć wszystkie ślady wprowadzonych danych, po prostu usuwając link do wyników z paska adresu przeglądarki.",
        "W przypadku pytań związanych z korzystaniem z usługi prosimy o kontakt pod poniższymi danymi."
      ]
    },
    {
      "heading": "8. Ochrona danych osobowych dzieci",
      "paragraphs": [
        "Usługa nie jest skierowana do dzieci poniżej 14 roku życia i nie zbiera danych osobowych od dzieci."
      ]
    },
    {
      "heading": "9. Inspektor ochrony danych osobowych",
      "paragraphs": [
        "Inspektor ochrony danych: {privacyOfficer}",
        "Kontakt: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Zmiany w polityce",
      "paragraphs": [
        "W przypadku zmiany niniejszej polityki, data wejścia w życie oraz szczegóły zmian zostaną opublikowane na tej stronie. Jeśli rzeczywiście zmieniają się treści przetwarzania, takie jak rozpoczęcie wyświetlania reklam lub sprzedaży płatnych produktów, najpierw poinformujemy o tych zmianach."
      ]
    }
  ],
  "effectiveLabel": "Data wejścia w życie"
};

export const pl: LegalLocaleDocuments = {
  a0p0: {
    privacy: d0,
    terms: d1,
    refund: d2,
    pricing: d3,
  },
  a1p0: {
    privacy: d4,
    terms: d1,
    refund: d2,
    pricing: d3,
  },
  a0p1: {
    privacy: d5,
    terms: d6,
    refund: d2,
    pricing: d3,
  },
  a1p1: {
    privacy: d7,
    terms: d6,
    refund: d2,
    pricing: d3,
  },
};
