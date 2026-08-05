import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Polityka przetwarzania danych osobowych",
  "intro": "Saju-Link nie przechowuje informacji potrzebnych do interpretacji saju (사주). Niniejsza polityka opisuje, co jest zbierane, co nie jest przechowywane oraz co jest automatycznie rejestrowane.",
  "sections": [
    {
      "heading": "1. Informacje, które nie są przechowywane",
      "paragraphs": [
        "Data urodzenia, czas urodzenia, miejsce urodzenia, płeć oraz imię podawane w trakcie interpretacji saju **nie są przechowywane w żadnym miejscu.** Są one używane tylko w pamięci serwera podczas przetwarzania żądania i znikają wraz z odpowiedzią.",
        "Nie są zapisywane w bazie danych ani w osobnych plikach. Nie ma rejestracji użytkowników, więc wprowadzone dane nie są powiązane z żadną konkretną osobą."
      ]
    },
    {
      "heading": "2. Informacje zawarte w linku do wyników",
      "paragraphs": [
        "Adres ekranu wyników zawiera zakodowane dane wejściowe. Jednakże te wartości znajdują się za znakiem # w adresie, a zgodnie z normami internetowymi, zawartość za znakiem # nie jest przesyłana przez przeglądarkę do serwera. Dlatego nawet jeśli otworzysz link do wyników, w rejestrze dostępu serwera pozostanie tylko ścieżka adresu.",
        "Jeśli wyślesz link do innej osoby, ta osoba również będzie mogła zobaczyć te same wyniki. Link sam w sobie zawiera dane wejściowe, więc decyzja o udostępnieniu należy do użytkownika."
      ]
    },
    {
      "heading": "3. Informacje zbierane automatycznie",
      "paragraphs": [
        "Nie zbieramy informacji, które pozwoliłyby zidentyfikować użytkownika. Jednakże minimalne zapisy wymagane do działania usługi są automatycznie rejestrowane przez dostawcę infrastruktury."
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
        "Obecnie w tej usłudze nie są wyświetlane reklamy. W przypadku wprowadzenia reklam w przyszłości, dostawca reklam (np. Google) może używać ciasteczek do ich wyświetlania. W takim przypadku najpierw zmienimy ten punkt, aby wyjaśnić, co się zmienia, zanim to zaczniemy."
      ]
    },
    {
      "heading": "5. Informacje przechowywane podczas płatności",
      "paragraphs": [
        "Obecnie nie sprzedajemy płatnych produktów, więc nie ma informacji przechowywanych w związku z płatnościami.",
        "Gdy rozpoczniemy sprzedaż, poniższe elementy będą przechowywane w celu przetwarzania płatności oraz zgodnie z przepisami prawa dotyczącymi przechowywania zapisów transakcji. **W tym czasie również wartości wprowadzone do interpretacji saju oraz utworzone pliki PDF nie będą przechowywane**, a także nie zbieramy informacji identyfikujących użytkownika, takich jak imię, dane kontaktowe czy adres."
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
      "heading": "6. Udostępnianie osobom trzecim i zlecanie przetwarzania",
      "paragraphs": [
        "Nie przechowujemy danych osobowych, więc nie udostępniamy danych osobowych osobom trzecim.",
        "W celu działania usługi korzystamy z infrastruktury hostingowej {hostingProvider}, a w tym procesie zapisy dostępu z punktu 3 są przetwarzane zgodnie z polityką tego dostawcy.",
        "Gdy rozpoczniemy sprzedaż płatnych produktów, krajowe płatności będą zlecane Toss Payments, a zagraniczne płatności PortOne (PayPal). Informacje o metodach płatności, takie jak numery kart czy numery kont, będą w tym czasie przetwarzane bezpośrednio przez te firmy, a usługa ich nie otrzyma."
      ]
    },
    {
      "heading": "7. Prawa użytkownika",
      "paragraphs": [
        "Nie ma przechowywanych danych osobowych, więc nie ma podmiotu, od którego można by żądać wglądu, korekty czy usunięcia.",
        "Użytkownik może usunąć wszystkie ślady wprowadzonych danych, po prostu usuwając link do wyników z paska adresu przeglądarki.",
        "W przypadku pytań związanych z korzystaniem z usługi, prosimy o kontakt pod poniższymi danymi."
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
      "heading": "10. Zmiany polityki",
      "paragraphs": [
        "W przypadku zmiany niniejszej polityki, data wejścia w życie oraz zmiany zostaną opublikowane na tej stronie. W przypadku rzeczywistych zmian w zakresie przetwarzania, takich jak wprowadzenie reklam lub rozpoczęcie sprzedaży płatnych produktów, najpierw poinformujemy o zmianach."
      ]
    }
  ],
  "effectiveLabel": "Data wejścia w życie"
};

const d1 = {
  "title": "Warunki korzystania",
  "intro": "Niniejsze warunki określają zasady korzystania z usługi Saju-Link (dalej „Usługa”). Korzystając z Usługi, uznaje się, że wyrażasz zgodę na te warunki.",
  "sections": [
    {
      "heading": "1. Charakter usługi",
      "paragraphs": [
        "Usługa pokazuje natywny wykres saju (saju) oraz siłę pięciu elementów, moc dnia i odniesienia do codziennego losu, stosując zasady tradycyjnej numerologii (saju) na podstawie wprowadzonych daty urodzenia i godziny urodzenia.",
        "Przedstawione wyniki i interpretacje są **materiałem referencyjnym z perspektywy tradycyjnej numerologii i nie stanowią naukowej prognozy ani stwierdzenia dotyczącego przyszłości, zdrowia czy majątku osoby.** Niski wynik nie oznacza, że dany dzień jest zły, a wysoki nie gwarantuje niczego.",
        "**Interpretacje płatnych raportów są pisane przez generatywną sztuczną inteligencję.** Jednak wszystkie wartości, takie jak wyniki, znaki i siły pięciu elementów, są obliczane przez silnik reguł usługi, a AI nie zmienia ani nie tworzy tych wartości. W przypadku braku możliwości stworzenia interpretacji, w tym miejscu umieszczany jest opis oparty na obliczonej wartości, a liczba stron dokumentu oraz zawarte w nim elementy są takie same jak opisano w punkcie 3 poniżej."
      ]
    },
    {
      "heading": "2. Opłata za korzystanie",
      "paragraphs": [
        "Obecnie usługa jest całkowicie bezpłatna i nie wymaga rejestracji.",
        "Po rozpoczęciu sprzedaży płatnych produktów (dwa raporty PDF) będą miały zastosowanie warunki opisane w punkcie 3 poniżej. Przed rozpoczęciem sprzedaży ponownie zostaną ogłoszone te warunki."
      ]
    },
    {
      "heading": "3. Płatne produkty i zwroty",
      "paragraphs": [
        "Sprzedawane płatne produkty to **dwa raporty PDF**. Oba tworzą dokument na podstawie wyników wyświetlanych na ekranie, a także zawierają dodatkowe informacje, które nie są widoczne na ekranie.",
        "**Raport o życiu saju PDF (A4 5 stron)** — zawiera wrodzone cechy, mocne strony i rzeczy, na które warto zwrócić uwagę, osiem znaków natywnego wykresu saju, siły pięciu elementów i moc dnia, a także codzienny los w czterech obszarach życia (majątek, miłość, zawód, zdrowie). Płatność krajowa {priceDomestic} (w tym VAT), płatność zagraniczna {priceGlobal}.",
        "**Raport premium o życiu saju PDF (A4 7 stron)** — zawiera pięć stron raportu o życiu saju oraz dodatkowe dwie strony. Zawiera dziesięć znaków czterech filarów oraz analizę, jak pory roku wpływają na umiejscowienie energii, roczny los, szczegółowe zmiany punktów dzisiejszych oraz korekty dla godziny prawdziwej. Płatność krajowa {priceAffinityDomestic} (w tym VAT), płatność zagraniczna {priceAffinityGlobal}.",
        "Płatności krajowe można dokonywać za pośrednictwem Toss Payments przy użyciu kart kredytowych, debetowych oraz płatności mobilnych (Toss Pay, Kakao Pay, Naver Pay, Payco itp.), a płatności zagraniczne są realizowane przez PortOne za pośrednictwem PayPal. Ostateczna kwota jest zgodna z kwotą wyświetlaną na ekranie płatności.",
        "**Usługa nie przechowuje ani wprowadzonych przez użytkownika danych, ani utworzonych plików PDF.** Po zatwierdzeniu płatności dokument jest tworzony i przesyłany, a na serwerze nie pozostaje nic. Dlatego pobrany plik musi być przechowywany przez użytkownika.",
        "W przypadku przerwania pobierania lub utraty pliku, można ponownie pobrać ten sam zamówienie **do 5 razy**. Jednakże, jeśli dane wejściowe znikną poza ekranem wyników, nie będzie można ich ponownie utworzyć, dlatego prosimy o zapisanie pliku zaraz po dokonaniu płatności."
      ],
      "bullets": [
        "**Przed rozpoczęciem pobierania po dokonaniu płatności** można w każdej chwili anulować zamówienie i otrzymać pełny zwrot.",
        "**Po zakończeniu pobierania** zwrot z powodu zmiany zdania jest ograniczony. Jest to cyfrowa treść, która jest dostarczana natychmiast po dokonaniu płatności i nie może być przywrócona, co odpowiada przyczynom ograniczenia zwrotów określonym w art. 17 ust. 2 ustawy o ochronie konsumentów w handlu elektronicznym.",
        "**W przypadku, gdy dokument nie został utworzony z powodu błędu systemu, plik nie otwiera się lub kwota płatności różni się od zamówienia**, zostanie to rozwiązane poprzez ponowne wydanie lub pełny zwrot.",
        "**Reklamacje dotyczące treści wyników** nie są podstawą do zwrotu. Interpretacja saju jest materiałem referencyjnym z perspektywy tradycyjnej numerologii, co zostało wyjaśnione przed dokonaniem płatności (patrz punkt 1 powyżej).",
        "Ponowne żądanie po wykorzystaniu wszystkich 5 możliwości ponownego wydania nie jest podstawą do zwrotu.",
        "**W przypadku, gdy osoba niepełnoletnia dokonała płatności bez zgody swojego przedstawiciela ustawowego**, ona lub jej przedstawiciel ustawowy mogą anulować tę płatność. Prosimy o kontakt pod poniższym adresem, aby uzyskać zwrot."
      ]
    },
    {
      "heading": "4. Wyniki obliczeń",
      "paragraphs": [
        "Wszystkie wyniki są obliczane zgodnie z publicznie dostępnymi zasadami, więc przy wprowadzeniu tych samych wartości zawsze uzyskuje się te same wyniki.",
        "Jeśli nie wprowadzisz godziny urodzenia, obliczenia będą pomijane dla filaru czasu (時柱), co może prowadzić do różnych wyników. Im dokładniej wybierzesz miejsce urodzenia, tym dokładniejsze będą obliczenia filaru czasu.",
        "Obliczenia kalendarza są oparte na publicznie dostępnej bibliotece obliczeniowej, a wyniki mogą się różnić w zależności od sposobu przetwarzania terminów i stref czasowych."
      ]
    },
    {
      "heading": "5. Odpowiedzialność użytkownika",
      "paragraphs": [
        "Użytkownik może wprowadzać daty urodzenia innych osób, ale nie może wykorzystywać wyników w sposób, który mógłby zaszkodzić innym.",
        "Nie należy używać wyników usługi jako podstawy do decyzji dotyczących małżeństwa, rozwodu, zatrudnienia czy transakcji, które mogą wpływać na prawa innych osób. Usługa nie została stworzona do takich celów."
      ]
    },
    {
      "heading": "6. Zakazane działania",
      "paragraphs": [
        "Następujące działania są zabronione."
      ],
      "bullets": [
        "Wysyłanie nadmiernych żądań za pomocą narzędzi automatycznych, które zakłócają działanie usługi",
        "Prezentowanie wyników usługi jako faktów lub wyników ekspertyzy specjalistycznej",
        "Kopiowanie lub modyfikowanie usługi w celu świadczenia tej samej usługi"
      ]
    },
    {
      "heading": "7. Zrzeczenie się odpowiedzialności",
      "paragraphs": [
        "Usługa dostarcza jedynie materiały referencyjne i nie ponosi odpowiedzialności za decyzje podjęte przez użytkownika na podstawie wyników oraz ich konsekwencje.",
        "Nie ponosimy odpowiedzialności za szkody wynikłe z przerwania usługi z powodu siły wyższej, awarii dostawców infrastruktury lub innych przyczyn, których nie możemy kontrolować."
      ]
    },
    {
      "heading": "8. Prawa własności intelektualnej",
      "paragraphs": [
        "Prawa do ekranów usługi, tekstów i implementacji zasad obliczeń należą do operatora. Użytkownik może zapisywać lub udostępniać wyniki wyłącznie do celów osobistych."
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

const d2 = {
  "title": "Polityka zwrotów i anulacji",
  "intro": "Zasady anulacji i zwrotów dla raportu życia saju (사주) PDF. Zebraliśmy informacje zgodne z punktem 3 warunków.",
  "sections": [
    {
      "heading": "1. Charakter produktu",
      "paragraphs": [
        "Sprzedawane produkty to **raport życia saju (사주) PDF (A4 5 stron)** oraz **raport premium życia saju (사주) PDF (A4 7 stron)**, które są cyfrową treścią tworzonymi natychmiast po zatwierdzeniu płatności i przesyłanymi bezpośrednio.",
        "**Usługa nie przechowuje danych wprowadzonych przez użytkownika ani utworzonych plików PDF.** Dlatego pobrany plik musi być przechowywany przez użytkownika."
      ]
    },
    {
      "heading": "2. Anulowanie umowy",
      "paragraphs": [
        "Zasady określone w ustawie o handlu elektronicznym są stosowane."
      ],
      "bullets": [
        "**Przed rozpoczęciem pobierania** można anulować w dowolnym momencie i otrzymać pełny zwrot pieniędzy.",
        "**Po zakończeniu pobierania** anulowanie umowy z powodu zmiany zdania jest ograniczone. Jest to cyfrowa treść, która jest dostarczana natychmiast po płatności i nie może być przywrócona, co odpowiada przyczynom ograniczenia określonym w artykule 17 ustęp 2 ustawy o ochronie konsumentów w handlu elektronicznym. Informujemy o tym na ekranie płatności i uzyskujemy zgodę."
      ]
    },
    {
      "heading": "3. Przypadki pełnego zwrotu",
      "paragraphs": [
        "W następujących przypadkach po potwierdzeniu przyczyny dokonujemy ponownego wydania lub pełnego zwrotu."
      ],
      "bullets": [
        "W przypadku błędu systemu, gdy dokument nie został utworzony",
        "Gdy pobrany plik nie otwiera się",
        "Gdy kwota płatności różni się od zamówienia",
        "**Gdy osoba niepełnoletnia dokonała płatności bez zgody opiekuna prawnego** — Osoba ta lub jej opiekun prawny mogą złożyć wniosek o anulowanie."
      ]
    },
    {
      "heading": "4. Przypadki, które nie kwalifikują się do zwrotu",
      "paragraphs": [],
      "bullets": [
        "**Niezadowolenie z treści wyników.** Interpretacja saju (사주) jest materiałem referencyjnym z tradycyjnej perspektywy, co zostało wcześniej wyjaśnione przed dokonaniem płatności.",
        "Ponowne żądanie po wykorzystaniu wszystkich 5 możliwości ponownego wydania."
      ]
    },
    {
      "heading": "5. Metoda składania wniosków",
      "paragraphs": [
        "Proszę zgłaszać zwroty i zapytania do centrum obsługi klienta ({customerCenter}) lub na adres e-mail ({email}). Podanie numeru zamówienia przyspieszy proces weryfikacji.",
        "Zwrot zostanie dokonany na metodę płatności, którą użyto, a w zależności od polityki firmy kartowej lub płatniczej, może to zająć od 3 do 7 dni roboczych na odzwierciedlenie."
      ]
    }
  ],
  "effectiveLabel": "Data wejścia w życie"
};

const d3 = {
  "title": "Informacje o cenach",
  "intro": "Informujemy o zakresie usług oferowanych bezpłatnie oraz cenach produktów płatnych.",
  "sections": [
    {
      "heading": "1. Bezpłatne",
      "paragraphs": [
        "**Interpretacja saju (사주) i codzienna prognoza są bezpłatne.** Nie jest wymagana rejestracja.",
        "Można zobaczyć wszystkie osiem znaków natalnych, siłę pięciu elementów, moc i słabość dnia, potrzebną energię, a także punkty i klasyfikację codziennej prognozy oraz punkty w czterech obszarach życia na ekranie."
      ]
    },
    {
      "heading": "2. Raport o życiu saju (사주) PDF (płatny)",
      "paragraphs": [
        "Płatność krajowa {priceDomestic} (z VAT) · Płatność zagraniczna {priceGlobal}",
        "Wyniki na ekranie zostaną przekształcone w dokument PDF o objętości **5 stron A4**. Zawiera on okładkę i podsumowanie, wrodzone cechy i mocne strony, punkty do obserwacji, siłę i słabość elementów oraz codzienną prognozę, a także punkty w czterech obszarach życia w jednym dokumencie.",
        "Można pobrać ponownie **do 5 razy** w ramach tego samego zamówienia. Należy jednak pamiętać, że jeśli dane wejściowe znikną poza ekranem wyników, nie będzie można ich ponownie wygenerować, dlatego prosimy o zapisanie pliku zaraz po dokonaniu płatności."
      ]
    },
    {
      "heading": "3. Premium raport o życiu saju (사주) PDF (płatny)",
      "paragraphs": [
        "Płatność krajowa {priceAffinityDomestic} (z VAT) · Płatność zagraniczna {priceAffinityGlobal}",
        "Raport o życiu składa się z **7 stron A4**, w tym **dodatkowych dwóch stron**. Dodatkowe informacje obejmują dziesięć znaków czterech filarów oraz szczegóły dotyczące rocznej prognozy i punktów dzisiejszych z uwzględnieniem korekty czasu słonecznego. Są to dane, które nie pojawiają się na ekranie.",
        "Warunki ponownego wydania są takie same jak w przypadku raportu o życiu."
      ]
    },
    {
      "heading": "4. Metody płatności",
      "paragraphs": [
        "**Krajowe** — Można korzystać z kart kredytowych i debetowych oraz płatności mobilnych (Toss Pay, Kakao Pay, Naver Pay, Payco itp.) za pośrednictwem Toss Payments.",
        "**Zagraniczne** — Można płacić przez PayPal za pośrednictwem PortOne.",
        "Ostateczna kwota płatności jest zgodna z kwotą wyświetlaną na ekranie płatności."
      ]
    },
    {
      "heading": "5. Zmiana cen",
      "paragraphs": [
        "W przypadku zmiany cen zostanie to najpierw ogłoszone na tej stronie. Zmiana cen nie dotyczy zamówień, które zostały już opłacone."
      ]
    }
  ],
  "effectiveLabel": "Data wejścia w życie"
};

const d4 = {
  "title": "Polityka przetwarzania danych osobowych",
  "intro": "Saju-Link nie przechowuje informacji potrzebnych do interpretacji saju (사주). Niniejsza polityka opisuje, co jest zbierane, co nie jest przechowywane oraz co jest automatycznie rejestrowane.",
  "sections": [
    {
      "heading": "1. Informacje, które nie są przechowywane",
      "paragraphs": [
        "Data urodzenia, czas urodzenia, miejsce urodzenia, płeć oraz imię podane w interpretacji saju **nie są przechowywane w żadnym miejscu.** Są one używane tylko w pamięci serwera podczas przetwarzania żądania i znikają wraz z odpowiedzią.",
        "Nie są zapisywane w bazie danych ani w osobnych plikach. Nie ma rejestracji użytkowników, więc wprowadzone dane nie są powiązane z konkretną osobą."
      ]
    },
    {
      "heading": "2. Informacje zawarte w linku do wyników",
      "paragraphs": [
        "Adres ekranu wyników zawiera zakodowane dane wejściowe. Jednakże ta wartość znajduje się za znakiem # w adresie, a zgodnie z normami internetowymi, zawartość za znakiem # nie jest przesyłana przez przeglądarkę do serwera. Dlatego nawet jeśli otworzysz link do wyników, w rejestrze dostępu serwera pozostanie tylko ścieżka adresu.",
        "Jeśli wyślesz link do wyników innej osobie, ta osoba również będzie mogła zobaczyć te same wyniki. Link sam w sobie zawiera dane wejściowe, więc decyzja o udostępnieniu należy do użytkownika."
      ]
    },
    {
      "heading": "3. Informacje zbierane automatycznie",
      "paragraphs": [
        "Nie zbieramy informacji, które pozwoliłyby zidentyfikować użytkownika. Jednak minimalne zapisy wymagane do działania usługi są automatycznie przechowywane przez dostawcę infrastruktury."
      ],
      "bullets": [
        "Adres IP, data i godzina dostępu, typ przeglądarki oraz inne ogólne zapisy dostępu do serwera",
        "Informacje o kraju — używane tylko do automatycznego określenia języka ekranu i nie są przechowywane"
      ]
    },
    {
      "heading": "4. Ciasteczka i reklamy",
      "paragraphs": [
        "Usługa sama w sobie nie używa ciasteczek do identyfikacji lub śledzenia użytkowników. Informacje wprowadzone w interpretacji saju nie są przekazywane reklamodawcom.",
        "Usługa ta wyświetla reklamy za pośrednictwem Google AdSense. W tym procesie zachodzą następujące zdarzenia."
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
        "Gdy rozpoczniemy sprzedaż, poniższe elementy będą przechowywane w celu przetwarzania płatności oraz zgodnie z przepisami prawa o przechowywaniu zapisów transakcji. **W tym czasie również wartości wprowadzone w interpretacji saju oraz utworzone pliki PDF nie będą przechowywane**, a informacje identyfikujące użytkownika, takie jak imię, dane kontaktowe i adres, nie będą zbierane."
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
      "heading": "6. Przekazywanie danych osobowych osobom trzecim i zlecanie przetwarzania",
      "paragraphs": [
        "Nie ma przechowywanych danych osobowych, więc nie ma również danych osobowych przekazywanych osobom trzecim.",
        "Usługa korzysta z infrastruktury hostingowej {hostingProvider}, a w tym procesie zapisy dostępu z punktu 3 są przetwarzane zgodnie z polityką tego dostawcy.",
        "Gdy rozpoczniemy sprzedaż płatnych produktów, krajowe płatności będą zlecane Toss Payments, a zagraniczne PortOne (PayPal). Informacje o metodach płatności, takie jak numery kart i numery kont, będą wówczas przetwarzane bezpośrednio przez te firmy, a usługa ich nie otrzyma."
      ]
    },
    {
      "heading": "7. Prawa użytkownika",
      "paragraphs": [
        "Nie ma przechowywanych danych osobowych, więc nie ma również podmiotu, od którego można żądać dostępu, korekty lub usunięcia.",
        "Użytkownik może usunąć wszystkie ślady wprowadzonych danych, po prostu usuwając link do wyników z paska adresu przeglądarki.",
        "W przypadku pytań związanych z korzystaniem z usługi, prosimy o kontakt pod poniższymi danymi."
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
        "W przypadku zmiany niniejszej polityki, data wejścia w życie oraz treść zmian zostaną opublikowane na tej stronie. W przypadku rzeczywistych zmian w przetwarzaniu, takich jak rozpoczęcie wyświetlania reklam lub sprzedaży płatnych produktów, najpierw poinformujemy o zmianach."
      ]
    }
  ],
  "effectiveLabel": "Data wejścia w życie"
};

const d5 = {
  "title": "Polityka przetwarzania danych osobowych",
  "intro": "Saju-Link nie przechowuje informacji potrzebnych do interpretacji saju (사주). Niniejsza polityka opisuje, co jest zbierane, co nie jest przechowywane oraz co jest automatycznie rejestrowane.",
  "sections": [
    {
      "heading": "1. Informacje, które nie są przechowywane",
      "paragraphs": [
        "Data urodzenia, godzina urodzenia, miejsce urodzenia, płeć oraz imię podane w interpretacji saju **nie są przechowywane w żadnym miejscu.** Są one używane tylko w pamięci serwera podczas przetwarzania żądania i znikają wraz z odpowiedzią.",
        "Nie są zapisywane w bazie danych ani w osobnych plikach. Nie ma rejestracji użytkowników, więc wprowadzone dane nie są powiązane z konkretną osobą."
      ]
    },
    {
      "heading": "2. Informacje zawarte w linku do wyników",
      "paragraphs": [
        "Adres ekranu wyników zawiera zakodowane dane wejściowe. Jednak ta wartość znajduje się za znakiem # w adresie, a zgodnie z normami internetowymi, zawartość za znakiem # nie jest przesyłana przez przeglądarkę do serwera. Dlatego nawet jeśli otworzysz link do wyników, w rejestrze dostępu serwera pozostanie tylko ścieżka adresu.",
        "Jeśli wyślesz link do wyników innej osobie, ta osoba również będzie mogła zobaczyć te same wyniki. Link sam w sobie zawiera dane wejściowe, więc decyzja o udostępnieniu należy do użytkownika."
      ]
    },
    {
      "heading": "3. Informacje zbierane automatycznie",
      "paragraphs": [
        "Nie zbieramy informacji, które pozwalałyby zidentyfikować użytkownika. Jednak minimalne zapisy wymagane do działania usługi są automatycznie przechowywane przez dostawcę infrastruktury."
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
        "Obecnie w tej usłudze nie są wyświetlane reklamy. W przypadku wprowadzenia reklam w przyszłości, dostawcy reklam (np. Google) mogą używać ciasteczek do ich wyświetlania. W takim przypadku najpierw zmienimy ten punkt, aby wyjaśnić, co się zmienia, a następnie rozpoczniemy ich wyświetlanie."
      ]
    },
    {
      "heading": "5. Informacje przechowywane podczas płatności",
      "paragraphs": [
        "Podczas płatności za płatny produkt (raport PDF) informacje o zamówieniu są przechowywane w celu przetwarzania płatności oraz zgodnie z przepisami prawa dotyczącymi przechowywania zapisów transakcji.",
        "**Dane wprowadzone do interpretacji saju oraz stworzony PDF nie są przechowywane, nawet jeśli dokonano płatności.** Zasada z punktu 1 pozostaje w mocy, niezależnie od tego, czy dokonano płatności. Przechowywane elementy są następujące, a informacje identyfikujące użytkownika, takie jak imię, kontakt, adres, nie są w nie włączone."
      ],
      "bullets": [
        "Numer zamówienia i identyfikator płatności",
        "Kwota płatności, waluta oraz status płatności (nieopłacone, opłacone, anulowane)",
        "Rodzaj produktu, status przetwarzania, liczba pobrań dokumentu, czas zamówienia",
        "Język ekranu w momencie zamówienia oraz podział na region płatności (krajowy, zagraniczny)",
        "Okres przechowywania — zgodnie z artykułem 6 ustawy o ochronie konsumentów w handlu elektronicznym, zapisy dotyczące płatności i dostawy towarów są przechowywane przez 5 lat, a zapisy dotyczące skarg lub sporów konsumenckich przez 3 lata, po czym są niszczone."
      ]
    },
    {
      "heading": "6. Przekazywanie danych osobowych osobom trzecim i zlecanie przetwarzania",
      "paragraphs": [
        "Nie przechowujemy danych osobowych identyfikujących użytkownika, więc nie ma danych osobowych przekazywanych osobom trzecim. Przetwarzanie płatności jest zlecane poniższym podmiotom.",
        "Usługa korzysta z infrastruktury hostingowej {hostingProvider}, a w tym procesie zapisy dostępu z punktu 3 są przetwarzane zgodnie z polityką tego podmiotu.",
        "Płatności krajowe są przetwarzane przez Toss Payments, a płatności zagraniczne przez PayPal za pośrednictwem PortOne. Informacje o metodach płatności, takie jak numery kart kredytowych czy numery kont, są przetwarzane bezpośrednio przez te podmioty, a usługa ich nie przekazuje ani nie przechowuje."
      ]
    },
    {
      "heading": "7. Prawa użytkownika",
      "paragraphs": [
        "Nie przechowujemy danych wejściowych do interpretacji saju, więc nie ma podmiotu, od którego można żądać dostępu, korekty lub usunięcia. Pozostałe zapisy zamówień związane z płatnościami są przechowywane przez okres określony w przepisach prawa, więc nie możemy ich usunąć w tym czasie, a po upływie tego okresu są niszczone.",
        "Użytkownik może usunąć wszystkie ślady wprowadzonych danych, po prostu usuwając link do wyników z paska adresu przeglądarki.",
        "W przypadku pytań związanych z korzystaniem z usługi, prosimy o kontakt pod poniższymi danymi."
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
      "heading": "10. Zmiany polityki",
      "paragraphs": [
        "W przypadku zmiany niniejszej polityki, data wejścia w życie oraz zmiany zostaną opublikowane na tej stronie. W przypadku rzeczywistych zmian w zakresie przetwarzania, takich jak rozpoczęcie wyświetlania reklam lub sprzedaży płatnych produktów, najpierw poinformujemy o zmianach."
      ]
    }
  ],
  "effectiveLabel": "Data wejścia w życie"
};

const d6 = {
  "title": "Warunki korzystania",
  "intro": "Niniejsze warunki określają zasady korzystania z usługi Saju-Link (dalej „Usługa”). Korzystając z Usługi, uznaje się, że użytkownik zgadza się z niniejszymi warunkami.",
  "sections": [
    {
      "heading": "1. Charakterystyka usługi",
      "paragraphs": [
        "Usługa pokazuje natywny wykres saju (saju) oraz siłę pięciu elementów, moc dnia, a także odniesienia do codziennego losu i miejsca, w którym spotykają się natywny wykres i codzienny los, na podstawie wprowadzonych daty urodzenia i godziny urodzenia.",
        "Prezentowane wyniki i interpretacje są **materiałem referencyjnym z perspektywy tradycyjnej astrologii, a nie naukowym przewidywaniem ani stwierdzeniem dotyczącym przyszłości, zdrowia czy majątku osoby.** Niski wynik nie oznacza, że dany dzień jest zły, a wysoki nie gwarantuje niczego.",
        "**Interpretacje płatnych raportów są pisane przez generatywną sztuczną inteligencję.** Jednak wszystkie liczby, takie jak wyniki, znaki i siły pięciu elementów, są obliczane przez silnik reguł usługi, a AI nie zmienia ani nie tworzy tych wartości. W przypadku braku możliwości stworzenia interpretacji, w tym samym miejscu umieszczany jest opis oparty na obliczonej wartości, a liczba stron dokumentu oraz zawarte w nim elementy są zgodne z opisanymi w punkcie 3."
      ]
    },
    {
      "heading": "2. Opłaty za korzystanie",
      "paragraphs": [
        "Interpretacja saju oraz codzienne losy są bezpłatne i nie wymagają rejestracji.",
        "Otrzymanie wyników w formacie PDF jest płatne. Ceny i warunki są wyświetlane w punkcie 3 oraz na ekranie płatności."
      ]
    },
    {
      "heading": "3. Produkty płatne i zwroty",
      "paragraphs": [
        "Sprzedawane płatne produkty to **dwa rodzaje raportów PDF**. Oba tworzą dokument na podstawie wyników wyświetlanych na ekranie, a także zawierają dodatkowe informacje, które nie są widoczne na ekranie.",
        "**Raport życiowy saju PDF (A4 5 stron)** — zawiera wrodzone cechy, mocne strony, istotne punkty, osiem znaków natywnego wykresu saju, siły pięciu elementów oraz moc dnia, aktualnie potrzebną energię, codzienne losy oraz cztery obszary życia (majątek, miłość, zawód, zdrowie). Płatność krajowa {priceDomestic} (w tym VAT), płatność zagraniczna {priceGlobal}.",
        "**Raport premium PDF (A4 7 stron)** — dodaje dwie strony do raportu życiowego. Zawiera dziesięć znaków czterech filarów oraz analizę, jak pory roku wpływają na energię, roczne losy, szczegółowe zmiany punktów dziennych oraz korekty dla godziny Yin. Płatność krajowa {priceAffinityDomestic} (w tym VAT), płatność zagraniczna {priceAffinityGlobal}.",
        "Płatności krajowe można dokonywać za pośrednictwem Toss Payments przy użyciu kart kredytowych, debetowych oraz płatności mobilnych (Toss Pay, Kakao Pay, Naver Pay, Payco itp.), a płatności zagraniczne realizowane są przez PortOne za pośrednictwem PayPal. Ostateczna kwota jest zgodna z kwotą wyświetlaną na ekranie płatności.",
        "**Usługa nie przechowuje ani danych wprowadzonych przez użytkownika, ani utworzonych plików PDF.** Po zatwierdzeniu płatności dokument jest generowany i przesyłany, a na serwerze nie pozostaje nic. Dlatego pobrany plik musi być przechowywany przez użytkownika.",
        "W przypadku przerwania pobierania lub utraty pliku, można ponownie pobrać ten sam zamówiony plik **do 5 razy**. Należy jednak pamiętać, że jeśli dane wejściowe znikną poza ekranem wyników, nie będzie można ich ponownie wygenerować, dlatego prosimy o zapisanie pliku zaraz po dokonaniu płatności."
      ],
      "bullets": [
        "**Przed rozpoczęciem pobierania po dokonaniu płatności** można w każdej chwili anulować zamówienie i otrzymać pełny zwrot.",
        "**Po zakończeniu pobierania** zwrot z powodu zmiany zdania jest ograniczony. Jest to cyfrowa treść, która jest dostarczana natychmiast i nie można jej przywrócić, co odpowiada przyczynom ograniczenia zwrotów określonym w art. 17 ust. 2 ustawy o ochronie konsumentów w e-handlu.",
        "**W przypadku, gdy dokument nie został utworzony z powodu błędu systemu, plik nie otwiera się, lub kwota płatności różni się od zamówienia**, zostanie to rozwiązane poprzez ponowne wydanie lub pełny zwrot.",
        "**Reklamacje dotyczące treści wyników** nie są podstawą do zwrotu. Interpretacja saju jest materiałem referencyjnym z perspektywy tradycyjnej astrologii, co zostało wyjaśnione przed dokonaniem płatności (patrz punkt 1).",
        "Ponowne żądanie po wykorzystaniu wszystkich 5 możliwości ponownego wydania nie jest podstawą do zwrotu.",
        "**W przypadku, gdy osoba niepełnoletnia dokonała płatności bez zgody swojego przedstawiciela prawnego**, ona lub jej przedstawiciel prawny mogą anulować tę płatność. Prosimy o kontakt pod poniższym adresem, aby uzyskać zwrot."
      ]
    },
    {
      "heading": "4. Wyniki obliczeń",
      "paragraphs": [
        "Wszystkie wyniki są obliczane zgodnie z publicznymi zasadami, więc przy wprowadzeniu tych samych wartości zawsze uzyskuje się te same wyniki.",
        "Jeśli nie wprowadzono godziny urodzenia, obliczenia będą pomijały filar czasu (時柱), co może prowadzić do różnych wyników. Im dokładniej wybierzesz miejsce urodzenia, tym dokładniejsze będą obliczenia filaru czasu.",
        "Obliczenia astrologiczne korzystają z publicznej biblioteki obliczeniowej, a wyniki mogą różnić się w zależności od sposobu przetwarzania terminów i stref czasowych."
      ]
    },
    {
      "heading": "5. Odpowiedzialność użytkownika",
      "paragraphs": [
        "Użytkownik może wprowadzać daty urodzenia innych osób, jednak nie może wykorzystywać wyników w sposób, który mógłby zaszkodzić innym.",
        "Nie należy używać wyników usługi jako podstawy do decyzji dotyczących małżeństwa, rozwodu, zatrudnienia, transakcji itp., które mogą wpływać na prawa innych osób. Usługa nie została stworzona do takich celów."
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
        "Nie ponosimy odpowiedzialności za szkody wynikłe z przerwania usługi z powodu siły wyższej, awarii dostawców infrastruktury lub innych przyczyn, których nie możemy kontrolować."
      ]
    },
    {
      "heading": "8. Prawa własności intelektualnej",
      "paragraphs": [
        "Prawa do ekranów usługi, tekstów oraz implementacji zasad obliczeń należą do operatora. Użytkownik może przechowywać lub udostępniać wyniki wyłącznie do celów osobistych."
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
  "intro": "Saju-Link nie przechowuje informacji potrzebnych do interpretacji saju (사주). Niniejsza polityka opisuje, co jest zbierane, co nie jest przechowywane oraz co jest automatycznie rejestrowane.",
  "sections": [
    {
      "heading": "1. Informacje, które nie są przechowywane",
      "paragraphs": [
        "Data urodzenia, czas urodzenia, miejsce urodzenia, płeć oraz imię podane w interpretacji saju **nie są przechowywane w żadnym miejscu.** Są one używane tylko w pamięci serwera podczas przetwarzania żądania i znikają wraz z odpowiedzią.",
        "Nie są zapisywane w bazie danych ani w osobnych plikach. Nie ma rejestracji użytkowników, więc wprowadzone dane nie są powiązane z konkretną osobą."
      ]
    },
    {
      "heading": "2. Informacje zawarte w linku do wyników",
      "paragraphs": [
        "Adres ekranu wyników zawiera zakodowane dane wejściowe. Jednakże, ta wartość znajduje się za znakiem # w adresie, a zgodnie z normami internetowymi, zawartość za znakiem # nie jest przesyłana przez przeglądarkę do serwera. Dlatego otwierając link do wyników, w rejestrze dostępu serwera pozostaje tylko ścieżka adresu.",
        "Jeśli wyślesz link do wyników innej osobie, ta osoba również może zobaczyć te same wyniki. Link sam w sobie zawiera dane wejściowe, więc decyzja o udostępnieniu należy do użytkownika."
      ]
    },
    {
      "heading": "3. Informacje zbierane automatycznie",
      "paragraphs": [
        "Nie zbieramy informacji, które pozwalałyby na identyfikację użytkownika. Jednakże, minimalne zapisy wymagane do działania usługi są automatycznie przechowywane przez dostawcę infrastruktury."
      ],
      "bullets": [
        "Adres IP, data i godzina dostępu, typ przeglądarki oraz inne ogólne zapisy dostępu do serwera",
        "Informacje o kraju — używane tylko do automatycznego określenia języka ekranu i nie są przechowywane"
      ]
    },
    {
      "heading": "4. Ciasteczka i reklamy",
      "paragraphs": [
        "Usługa sama w sobie nie używa ciasteczek do identyfikacji lub śledzenia użytkowników. Informacje wprowadzone w interpretacji saju nie są przekazywane reklamodawcom.",
        "Usługa ta wyświetla reklamy za pośrednictwem Google AdSense. W tym procesie zachodzą następujące zdarzenia."
      ],
      "bullets": [
        "Dostawcy zewnętrzni, w tym Google, mogą przechowywać lub odczytywać ciasteczka w przeglądarce użytkownika.",
        "Google używa ciasteczek na podstawie historii odwiedzin tej i innych stron do wyświetlania reklam.",
        "Użytkownik może wyłączyć spersonalizowane reklamy w ustawieniach reklam Google (google.com/settings/ads). Nawet po wyłączeniu, reklamy będą nadal wyświetlane, ale ich związki z użytkownikiem będą mniejsze.",
        "Spersonalizowane reklamy od dostawców zewnętrznych można wyłączyć jednocześnie na stronie aboutads.info/choices.",
        "Istnieje również możliwość zablokowania ciasteczek w ustawieniach przeglądarki.",
        "Użytkownicy z Europejskiego Obszaru Gospodarczego, Wielkiej Brytanii i Szwajcarii są najpierw pytani o zgodę na użycie ciasteczek reklamowych."
      ]
    },
    {
      "heading": "5. Informacje przechowywane podczas płatności",
      "paragraphs": [
        "Po dokonaniu płatności za płatny produkt (raport PDF) informacje o zamówieniu są przechowywane w celu przetwarzania płatności oraz zgodnie z przepisami prawa dotyczącymi przechowywania zapisów transakcji.",
        "**Wartości wprowadzone w interpretacji saju oraz utworzony PDF nie są przechowywane, nawet po dokonaniu płatności.** Zasada z punktu 1 pozostaje w mocy niezależnie od tego, czy dokonano płatności. Przechowywane elementy są następujące, a informacje identyfikujące użytkownika, takie jak imię, dane kontaktowe i adres, nie są w nich zawarte."
      ],
      "bullets": [
        "Numer zamówienia i identyfikator płatności",
        "Kwota płatności, waluta oraz status płatności (nieopłacone, opłacone, anulowane)",
        "Rodzaj produktu, status przetwarzania, liczba pobrań dokumentu, czas zamówienia",
        "Język ekranu w momencie zamówienia oraz klasyfikacja regionu płatności (krajowy, zagraniczny)",
        "Okres przechowywania — zgodnie z artykułem 6 ustawy o ochronie konsumentów w handlu elektronicznym, zapisy dotyczące płatności i dostawy towarów są przechowywane przez 5 lat, a zapisy dotyczące skarg lub sporów konsumenckich przez 3 lata, po czym są niszczone."
      ]
    },
    {
      "heading": "6. Przekazywanie danych osobowych osobom trzecim i zlecanie przetwarzania",
      "paragraphs": [
        "Nie przechowujemy danych osobowych, które pozwalałyby na identyfikację użytkownika, więc nie przekazujemy danych osobowych osobom trzecim. Przetwarzanie płatności jest zlecane poniższym podmiotom.",
        "W celu obsługi usługi korzystamy z infrastruktury hostingowej {hostingProvider}, a w tym procesie zapisy dostępu z punktu 3 są przetwarzane zgodnie z polityką tego podmiotu.",
        "Płatności krajowe są obsługiwane przez Toss Payments, a płatności zagraniczne przez PayPal za pośrednictwem PortOne. Informacje o metodach płatności, takie jak numery kart i numery kont, są przetwarzane bezpośrednio przez te podmioty, a usługa ich nie otrzymuje ani nie przechowuje."
      ]
    },
    {
      "heading": "7. Prawa użytkownika",
      "paragraphs": [
        "Ponieważ wartości wprowadzone w interpretacji saju nie są przechowywane, nie ma podmiotu, do którego można by zgłosić prośbę o wgląd, korektę lub usunięcie. Pozostałe zapisy zamówień związane z płatnościami muszą być przechowywane przez okres określony w przepisach, więc nie możemy ich usunąć w tym czasie, a po upływie tego okresu są niszczone.",
        "Użytkownik może usunąć wszystkie ślady wprowadzonych danych, po prostu usuwając link do wyników z paska adresu przeglądarki.",
        "W przypadku pytań związanych z korzystaniem z usługi, prosimy o kontakt pod poniższymi danymi."
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
      "heading": "10. Zmiany polityki",
      "paragraphs": [
        "W przypadku zmiany niniejszej polityki, data wejścia w życie oraz treść zmian zostaną opublikowane na tej stronie. W przypadku rzeczywistych zmian w zakresie przetwarzania, takich jak rozpoczęcie wyświetlania reklam lub sprzedaży płatnych produktów, najpierw poinformujemy o zmianach."
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
