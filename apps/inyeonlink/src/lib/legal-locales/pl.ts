import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Polityka przetwarzania danych osobowych",
  "intro": "InyeonLink nie przechowuje informacji potrzebnych do obliczenia kompatybilności. Niniejsza polityka opisuje, co jest zbierane, co nie jest przechowywane oraz co jest automatycznie rejestrowane.",
  "sections": [
    {
      "heading": "1. Informacje, które nie są przechowywane",
      "paragraphs": [
        "Data urodzenia, czas urodzenia, miejsce urodzenia, płeć oraz imię podane do obliczenia kompatybilności **nie są przechowywane w żadnym miejscu.** Są one używane tylko w pamięci serwera podczas przetwarzania żądania i znikają wraz z odpowiedzią.",
        "Nie są zapisywane w bazie danych ani w oddzielnych plikach. Nie ma rejestracji użytkowników, więc wprowadzone dane nie są powiązane z żadną konkretną osobą."
      ]
    },
    {
      "heading": "2. Informacje zawarte w linku do wyników",
      "paragraphs": [
        "Adres ekranu wyników zawiera zakodowane wartości wejściowe. Jednakże, te wartości znajdują się za znakiem # w adresie, a zgodnie z normami internetowymi, zawartość za znakiem # nie jest przesyłana przez przeglądarkę do serwera. Dlatego nawet jeśli otworzysz link do wyników, w rejestrze dostępu serwera pozostanie tylko ścieżka adresu.",
        "Jeśli wyślesz link do wyników innej osobie, ta osoba również będzie mogła zobaczyć te same wyniki. Link sam w sobie zawiera wartości wejściowe, więc decyzja o udostępnieniu należy do użytkownika."
      ]
    },
    {
      "heading": "3. Informacje zbierane automatycznie",
      "paragraphs": [
        "Nie ma informacji zbieranych przez usługę w celu identyfikacji użytkownika. Jednakże, minimalne zapisy niezbędne do działania usługi są automatycznie rejestrowane przez dostawcę infrastruktury."
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
        "Obecnie w tej usłudze nie są wyświetlane reklamy. W przypadku wprowadzenia reklam w przyszłości, dostawcy reklam (np. Google) mogą używać ciasteczek do ich wyświetlania. W takim przypadku najpierw zmienimy ten punkt, aby wyjaśnić, co się zmienia, a następnie rozpoczniemy."
      ]
    },
    {
      "heading": "5. Informacje przechowywane podczas płatności",
      "paragraphs": [
        "Obecnie nie sprzedajemy płatnych produktów, więc nie ma informacji przechowywanych w związku z płatnościami.",
        "Gdy rozpoczniemy sprzedaż, poniższe informacje będą przechowywane w celu przetwarzania płatności oraz zgodnie z przepisami prawa o przechowywaniu zapisów transakcji. **Nawet wtedy wartości wprowadzone do obliczenia kompatybilności oraz utworzony PDF nie będą przechowywane**, a także nie zbieramy informacji identyfikujących użytkownika, takich jak imię, dane kontaktowe czy adres."
      ],
      "bullets": [
        "Numer zamówienia i identyfikator płatności",
        "Kwota płatności, waluta oraz status płatności (nieopłacone, opłacone, anulowane)",
        "Rodzaj produktu, status przetwarzania, liczba pobrań dokumentu, czas zamówienia",
        "Język ekranu w momencie zamówienia oraz klasyfikacja regionu płatności (krajowy, zagraniczny)",
        "Okres przechowywania — zgodnie z artykułem 6 ustawy o ochronie konsumentów w transakcjach elektronicznych, zapisy dotyczące płatności i dostawy towarów będą przechowywane przez 5 lat, a zapisy dotyczące skarg lub sporów konsumenckich przez 3 lata, po czym zostaną zniszczone."
      ]
    },
    {
      "heading": "6. Przekazywanie danych osobowych osobom trzecim i zlecanie przetwarzania",
      "paragraphs": [
        "Nie ma przechowywanych danych osobowych, więc nie ma również danych osobowych przekazywanych osobom trzecim.",
        "W celu działania usługi korzystamy z infrastruktury hostingowej {hostingProvider}, a w tym procesie zapisy dostępu z punktu 3 są przetwarzane zgodnie z polityką tego dostawcy.",
        "Gdy rozpoczniemy sprzedaż płatnych produktów, krajowe płatności będą zlecane Toss Payments, a zagraniczne PortOne (PayPal). Informacje o metodach płatności, takie jak numery kart kredytowych czy numery kont, będą przetwarzane bezpośrednio przez te firmy, a usługa ich nie otrzyma."
      ]
    },
    {
      "heading": "7. Prawa użytkowników",
      "paragraphs": [
        "Nie ma przechowywanych danych osobowych, więc nie ma również podmiotów, do których można zgłosić prośbę o wgląd, poprawę lub usunięcie.",
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
        "W przypadku zmiany niniejszej polityki, data wejścia w życie oraz zmiany zostaną opublikowane na tej stronie. W przypadku rzeczywistych zmian w treści przetwarzania, takich jak rozpoczęcie wyświetlania reklam lub sprzedaży płatnych produktów, najpierw poinformujemy o zmianach."
      ]
    }
  ],
  "effectiveLabel": "Data wejścia w życie"
};

const d1 = {
  "title": "Warunki korzystania",
  "intro": "Niniejsze warunki określają zasady korzystania z InyeonLink (dalej „Usługa”). Korzystając z Usługi, uznaje się, że zgadzasz się z niniejszymi warunkami.",
  "sections": [
    {
      "heading": "1. Charakter Usługi",
      "paragraphs": [
        "Usługa wyświetla informacje o relacji dwóch osób na podstawie wprowadzonych dat urodzenia, stosując zasady tradycyjnej numerologii (saju) oraz relacji zodiakalnych.",
        "Prezentowany wskaźnik dopasowania oraz interpretacje są **materiałem referencyjnym z perspektywy tradycyjnej interpretacji i nie stanowią naukowej prognozy ani stwierdzenia dotyczącego relacji.** Niski wynik nie oznacza, że relacja jest zła, a wysoki nie gwarantuje, że relacja jest dobra."
      ]
    },
    {
      "heading": "2. Opłata za korzystanie",
      "paragraphs": [
        "Obecnie Usługa jest całkowicie bezpłatna i nie wymaga rejestracji.",
        "W przypadku rozpoczęcia sprzedaży produktów płatnych (raporty o zgodności w formacie PDF) będą miały zastosowanie warunki określone w punkcie 3. Niniejsze warunki zostaną ponownie ogłoszone przed rozpoczęciem sprzedaży."
      ]
    },
    {
      "heading": "3. Produkty płatne i zwroty",
      "paragraphs": [
        "Sprzedawanym produktem płatnym jest **raport o zgodności w formacie PDF**. Wyniki na ekranie zostaną przekształcone w dokument PDF składający się z 3 stron, zawierający również wartości sił pięciu elementów, które nie są wyświetlane na ekranie.",
        "Cena wynosi {priceDomestic} (w tym VAT) dla płatności krajowych oraz {priceGlobal} dla płatności zagranicznych. Płatności krajowe można dokonywać za pomocą kart kredytowych/debetowych oraz płatności mobilnych (Toss Payments, KakaoPay, NaverPay, Payco itp.), a płatności zagraniczne realizowane są przez PortOne za pośrednictwem PayPal. Ostateczna kwota jest zgodna z kwotą wyświetlaną na ekranie płatności.",
        "**Usługa nie przechowuje ani wprowadzonych danych użytkownika, ani utworzonego pliku PDF.** Po zatwierdzeniu płatności dokument jest natychmiast generowany i przesyłany, a na serwerze nie pozostaje nic. Dlatego pobrany plik musi być przechowywany przez użytkownika.",
        "W przypadku przerwania pobierania lub utraty pliku, można ponownie pobrać go **do 5 razy** w ramach tego samego zamówienia. Należy jednak pamiętać, że jeśli dane wejściowe znikną po opuszczeniu ekranu wyników, nie będzie można ich ponownie wygenerować, dlatego prosimy o zapisanie pliku zaraz po dokonaniu płatności."
      ],
      "bullets": [
        "**Przed rozpoczęciem pobierania po dokonaniu płatności** można w każdej chwili anulować zamówienie i otrzymać pełny zwrot.",
        "**Po zakończeniu pobierania** zwrot z powodu zmiany zdania jest ograniczony. Jest to cyfrowa treść dostarczana natychmiast, której nie można przywrócić, co odpowiada przyczynom ograniczenia zwrotów określonym w art. 17 ust. 2 ustawy o ochronie konsumentów w transakcjach elektronicznych.",
        "**W przypadku, gdy dokument nie został wygenerowany z powodu błędu systemu, plik nie otwiera się lub kwota płatności różni się od zamówienia**, zostanie to potraktowane jako ponowne wydanie lub pełny zwrot.",
        "**Reklamacje dotyczące treści wyników** nie są podstawą do zwrotu. Wyniki zgodności są materiałem referencyjnym z perspektywy tradycyjnej interpretacji, co zostało wyjaśnione przed dokonaniem płatności (patrz punkt 1).",
        "Ponowne żądanie po wykorzystaniu wszystkich 5 możliwości ponownego wydania nie jest podstawą do zwrotu.",
        "**W przypadku, gdy osoba niepełnoletnia dokonała płatności bez zgody swojego przedstawiciela ustawowego**, ona lub jej przedstawiciel ustawowy mogą anulować tę płatność. Prosimy o kontakt pod poniższym adresem, aby uzyskać zwrot."
      ]
    },
    {
      "heading": "4. Wyniki obliczeń",
      "paragraphs": [
        "Wszystkie wyniki są obliczane zgodnie z publicznie dostępnymi zasadami, więc przy wprowadzeniu tych samych wartości zawsze uzyskuje się te same wyniki.",
        "Jeśli nie wprowadzisz godziny urodzenia, obliczenia będą dokonywane bez uwzględnienia filaru czasowego (時柱), co może prowadzić do różnych wyników. Im dokładniej wybierzesz miejsce urodzenia, tym dokładniejsze będą obliczenia filaru czasowego.",
        "Obliczenia kalendarza są oparte na publicznie dostępnym bibliotece obliczeniowej, a różne metody przetwarzania terminów i stref czasowych mogą prowadzić do różnych wyników kalendarza."
      ]
    },
    {
      "heading": "5. Odpowiedzialność użytkownika",
      "paragraphs": [
        "Użytkownik może wprowadzać daty urodzenia innych osób, jednak nie może wykorzystywać wyników w sposób, który mógłby zaszkodzić innym.",
        "Nie należy używać wyników Usługi jako podstawy do decyzji dotyczących małżeństwa, rozwodu, zatrudnienia, transakcji itp., które mogą wpływać na prawa innych osób. Usługa nie została stworzona do takich celów."
      ]
    },
    {
      "heading": "6. Zakazane działania",
      "paragraphs": [
        "Następujące działania są zabronione."
      ],
      "bullets": [
        "Wysyłanie nadmiernych żądań za pomocą narzędzi automatycznych, co zakłóca działanie Usługi",
        "Prezentowanie wyników Usługi jako faktów lub wyników ekspertyzy",
        "Kopiowanie lub modyfikowanie Usługi w celu świadczenia tej samej Usługi"
      ]
    },
    {
      "heading": "7. Zrzeczenie się odpowiedzialności",
      "paragraphs": [
        "Usługa dostarcza jedynie materiały referencyjne i nie ponosi odpowiedzialności za decyzje podjęte przez użytkownika na podstawie wyników oraz ich konsekwencje.",
        "Nie ponosimy odpowiedzialności za szkody wynikłe z przerwania Usługi z powodu okoliczności, które są poza naszą kontrolą, takich jak klęski żywiołowe czy awarie dostawców infrastruktury."
      ]
    },
    {
      "heading": "8. Prawo własności intelektualnej",
      "paragraphs": [
        "Prawa do ekranów Usługi, tekstów oraz implementacji zasad obliczeniowych należą do operatora. Użytkownik może zapisywać lub udostępniać wyniki wyłącznie do celów osobistych."
      ]
    },
    {
      "heading": "9. Zmiany warunków i prawo właściwe",
      "paragraphs": [
        "W przypadku zmiany warunków, zostaną one opublikowane na tej stronie wraz z datą wejścia w życie.",
        "Niniejsze warunki podlegają prawu Republiki Korei, a wszelkie spory związane z korzystaniem z Usługi będą rozstrzygane zgodnie z procedurami określonymi w odpowiednich przepisach prawnych."
      ]
    }
  ],
  "effectiveLabel": "Data wejścia w życie"
};

const d2 = {
  "title": "Polityka zwrotów i anulacji",
  "intro": "To są zasady dotyczące anulacji i zwrotów raportu **saju** w formacie PDF. Zgromadziliśmy tutaj informacje zgodne z punktem 3 warunków umowy.",
  "sections": [
    {
      "heading": "1. Charakter produktu",
      "paragraphs": [
        "Sprzedawanym produktem jest **raport saju w formacie PDF**, który jest cyfrową treścią tworzona natychmiast po zatwierdzeniu płatności i wysyłana do pobrania.",
        "**Usługa nie przechowuje ani danych wprowadzonych przez użytkownika, ani utworzonego pliku PDF.** Dlatego pobrany plik musi być przechowywany przez użytkownika."
      ]
    },
    {
      "heading": "2. Anulowanie zamówienia",
      "paragraphs": [
        "Zasady określone w prawie o transakcjach elektronicznych są stosowane."
      ],
      "bullets": [
        "**Przed rozpoczęciem pobierania** można anulować zamówienie w dowolnym momencie i otrzymać pełny zwrot pieniędzy.",
        "**Po zakończeniu pobierania** anulowanie zamówienia z powodu zmiany zdania jest ograniczone. Jest to cyfrowa treść, która jest dostarczana natychmiast po płatności i nie może być przywrócona, co odpowiada przyczynom ograniczenia określonym w artykule 17 ust. 2 ustawy o ochronie konsumentów w transakcjach elektronicznych. Informujemy o tym na ekranie płatności i uzyskujemy zgodę."
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
        "**Gdy osoba niepełnoletnia dokonała płatności bez zgody opiekuna prawnego** — Wniosek o anulowanie może złożyć osoba pełnoletnia lub opiekun prawny."
      ]
    },
    {
      "heading": "4. Przypadki, które nie kwalifikują się do zwrotu",
      "paragraphs": [],
      "bullets": [
        "**Niezadowolenie z treści wyników.** Wyniki saju są materiałem referencyjnym z tradycyjnej perspektywy interpretacyjnej, a ich charakter został przedstawiony przed dokonaniem płatności.",
        "Ponowne żądanie po wykorzystaniu wszystkich 5 możliwości ponownego wydania."
      ]
    },
    {
      "heading": "5. Sposób składania wniosków",
      "paragraphs": [
        "Proszę zgłaszać zwroty i zapytania do centrum obsługi klienta ({customerCenter}) lub na adres e-mail ({email}). Podanie numeru zamówienia przyspieszy proces weryfikacji.",
        "Zwrot będzie dokonany za pomocą metody płatności, którą użyto, a w zależności od warunków firmy kartowej lub płatniczej, może to zająć od 3 do 7 dni roboczych na przetworzenie."
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
        "**Obliczanie zgodności i przeglądanie wyników jest bezpłatne.** Nie jest wymagana rejestracja.",
        "Można zobaczyć na ekranie wskaźnik dopasowania, punkty w poszczególnych kategoriach, oryginalne cztery filary saju obu osób oraz siłę żywiołów, a także kształt relacji."
      ]
    },
    {
      "heading": "2. Raport zgodności PDF (płatny)",
      "paragraphs": [
        "Płatność krajowa {priceDomestic} (w tym VAT) · Płatność zagraniczna {priceGlobal}",
        "Przygotujemy dokument PDF składający się z 3 stron na podstawie wyników wyświetlonych na ekranie. Zawiera on również wartości siły żywiołów, które nie są wyświetlane na ekranie.",
        "Można pobrać ten sam raport **do 5 razy**. Należy jednak pamiętać, że jeśli dane wejściowe znikną poza ekranem wyników, nie będzie można go ponownie utworzyć, dlatego prosimy o zapisanie pliku zaraz po dokonaniu płatności."
      ]
    },
    {
      "heading": "3. Metody płatności",
      "paragraphs": [
        "**Krajowe** — Można korzystać z kart kredytowych i debetowych oraz płatności mobilnych (Toss Payments, KakaoPay, NaverPay, Payco itp.) za pośrednictwem Toss Payments.",
        "**Zagraniczne** — Można płacić przez PayPal za pośrednictwem PortOne.",
        "Ostateczna kwota płatności jest zgodna z kwotą wyświetlaną na ekranie płatności."
      ]
    },
    {
      "heading": "4. Zmiana cen",
      "paragraphs": [
        "W przypadku zmiany cen zostanie to najpierw ogłoszone na tej stronie. Zmienione ceny nie będą miały zastosowania do zamówień, które już zostały opłacone."
      ]
    }
  ],
  "effectiveLabel": "Data wejścia w życie"
};

const d4 = {
  "title": "Polityka przetwarzania danych osobowych",
  "intro": "InyeonLink nie przechowuje informacji potrzebnych do obliczenia kompatybilności. Niniejsza polityka opisuje, co jest zbierane, co nie jest przechowywane oraz co jest automatycznie rejestrowane.",
  "sections": [
    {
      "heading": "1. Informacje, które nie są przechowywane",
      "paragraphs": [
        "Data urodzenia, czas urodzenia, miejsce urodzenia, płeć oraz imię podane w obliczeniach kompatybilności **nie są przechowywane w żadnym miejscu.** Są one używane tylko w pamięci serwera podczas przetwarzania żądania i znikają wraz z odpowiedzią.",
        "Nie są zapisywane w bazie danych ani w osobnych plikach. Nie ma rejestracji użytkowników, więc wprowadzone dane nie są powiązane z konkretną osobą."
      ]
    },
    {
      "heading": "2. Informacje zawarte w linku do wyników",
      "paragraphs": [
        "Adres URL ekranu wyników zawiera zakodowane wartości wejściowe. Jednakże, te wartości znajdują się za znakiem # w adresie, a zgodnie z normami internetowymi, zawartość za znakiem # nie jest przesyłana przez przeglądarkę do serwera. Dlatego nawet jeśli otworzysz link do wyników, w rejestrze dostępu serwera pozostanie tylko ścieżka adresu.",
        "Jeśli wyślesz link do wyników innej osobie, ta osoba również będzie mogła zobaczyć te same wyniki. Link sam w sobie zawiera wartości wejściowe, więc decyzja o udostępnieniu należy do użytkownika."
      ]
    },
    {
      "heading": "3. Informacje zbierane automatycznie",
      "paragraphs": [
        "Nie ma informacji zbieranych przez usługę w celu identyfikacji użytkownika. Jednakże, minimalne zapisy wymagane do działania usługi są automatycznie przechowywane przez dostawcę infrastruktury."
      ],
      "bullets": [
        "Ogólne zapisy dostępu serwera, takie jak adres IP, data i godzina dostępu, typ przeglądarki",
        "Informacje o kraju — używane tylko do automatycznego określenia języka ekranu i nie są przechowywane"
      ]
    },
    {
      "heading": "4. Ciasteczka i reklamy",
      "paragraphs": [
        "Usługa sama w sobie nie używa ciasteczek do identyfikacji lub śledzenia użytkowników. Informacje wprowadzone w obliczeniach kompatybilności nie są przekazywane reklamodawcom.",
        "Usługa ta wyświetla reklamy za pośrednictwem Google AdSense. W tym procesie zachodzą następujące zdarzenia."
      ],
      "bullets": [
        "Dostawcy zewnętrzni, w tym Google, mogą przechowywać lub odczytywać ciasteczka w przeglądarce użytkownika.",
        "Google używa ciasteczek do wyświetlania reklam na podstawie historii odwiedzin tej i innych stron.",
        "Użytkownicy mogą wyłączyć spersonalizowane reklamy w ustawieniach reklam Google (google.com/settings/ads). Nawet po wyłączeniu, reklamy będą nadal wyświetlane, ale ich związki z użytkownikiem będą mniejsze.",
        "Spersonalizowane reklamy od dostawców zewnętrznych można wyłączyć jednocześnie na stronie aboutads.info/choices.",
        "Istnieje również możliwość zablokowania ciasteczek w ustawieniach przeglądarki.",
        "Użytkownicy z Europejskiego Obszaru Gospodarczego, Wielkiej Brytanii i Szwajcarii są najpierw pytani o zgodę na użycie ciasteczek reklamowych."
      ]
    },
    {
      "heading": "5. Informacje przechowywane podczas płatności",
      "paragraphs": [
        "Obecnie nie sprzedajemy płatnych produktów, więc nie ma informacji przechowywanych w związku z płatnościami.",
        "Gdy rozpoczniemy sprzedaż, poniższe informacje będą przechowywane w celu przetwarzania płatności oraz zgodnie z przepisami prawa dotyczącymi przechowywania zapisów transakcji. **W tym czasie również wartości wprowadzone w obliczeniach kompatybilności oraz utworzone PDF nie będą przechowywane**, a informacje identyfikujące użytkownika, takie jak imię, kontakt, adres, nie będą zbierane."
      ],
      "bullets": [
        "Numer zamówienia i identyfikator płatności",
        "Kwota płatności, waluta i status płatności (nieopłacone, opłacone, anulowane)",
        "Rodzaj produktu, status przetwarzania, liczba pobrań dokumentów, czas zamówienia",
        "Język ekranu w momencie zamówienia oraz klasyfikacja regionu płatności (krajowy, zagraniczny)",
        "Okres przechowywania — zgodnie z artykułem 6 ustawy o ochronie konsumentów w transakcjach elektronicznych, zapisy dotyczące płatności i dostawy towarów będą przechowywane przez 5 lat, a zapisy dotyczące skarg lub sporów konsumenckich przez 3 lata, po czym zostaną zniszczone."
      ]
    },
    {
      "heading": "6. Przekazywanie danych osobowych osobom trzecim i zlecanie przetwarzania",
      "paragraphs": [
        "Nie ma przechowywanych danych osobowych, więc nie ma również danych osobowych przekazywanych osobom trzecim.",
        "Usługa korzysta z infrastruktury hostingowej {hostingProvider}, a w tym procesie zapisy dostępu z punktu 3 są przetwarzane zgodnie z polityką tego dostawcy.",
        "Gdy rozpoczniemy sprzedaż płatnych produktów, krajowe płatności będą zlecane Toss Payments, a zagraniczne płatności PortOne (PayPal). Informacje o metodach płatności, takie jak numery kart i numery kont, będą wówczas przetwarzane bezpośrednio przez te firmy, a usługa ich nie otrzyma."
      ]
    },
    {
      "heading": "7. Prawa użytkowników",
      "paragraphs": [
        "Nie ma przechowywanych danych osobowych, więc nie ma również podmiotów, od których można żądać wglądu, korekty lub usunięcia.",
        "Użytkownicy mogą usunąć wszystkie ślady wprowadzonych danych, po prostu usuwając link do wyników z paska adresu przeglądarki.",
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
        "W przypadku zmiany niniejszej polityki, data wejścia w życie oraz treść zmian zostaną opublikowane na tej stronie. W przypadku rzeczywistych zmian w przetwarzaniu, takich jak rozpoczęcie wyświetlania reklam lub sprzedaży płatnych produktów, najpierw poinformujemy o zmianach."
      ]
    }
  ],
  "effectiveLabel": "Data wejścia w życie"
};

const d5 = {
  "title": "Polityka przetwarzania danych osobowych",
  "intro": "InyeonLink nie przechowuje informacji potrzebnych do obliczenia zgodności. Niniejsza polityka opisuje, co jest zbierane, co nie jest przechowywane oraz co jest automatycznie rejestrowane.",
  "sections": [
    {
      "heading": "1. Informacje, które nie są przechowywane",
      "paragraphs": [
        "Data urodzenia, godzina urodzenia, miejsce urodzenia, płeć oraz imię podane do obliczenia zgodności **nie są przechowywane w żadnym miejscu.** Są one używane tylko w pamięci serwera podczas przetwarzania żądania i znikają wraz z odpowiedzią.",
        "Nie są zapisywane w bazie danych ani w oddzielnych plikach. Nie ma rejestracji, więc wprowadzone dane nie są powiązane z konkretną osobą."
      ]
    },
    {
      "heading": "2. Informacje zawarte w linku do wyników",
      "paragraphs": [
        "Adres ekranu wyników zawiera zakodowane dane wejściowe. Jednak ta wartość znajduje się za znakiem # w adresie, a zgodnie z normami internetowymi, zawartość za znakiem # nie jest przesyłana przez przeglądarkę do serwera. Dlatego otwierając link do wyników, w rejestrze dostępu serwera pozostaje tylko ścieżka adresu.",
        "Jeśli wyślesz link do wyników innej osobie, ta osoba również będzie mogła zobaczyć te same wyniki. Link sam w sobie zawiera dane wejściowe, więc decyzja o udostępnieniu należy do użytkownika."
      ]
    },
    {
      "heading": "3. Informacje zbierane automatycznie",
      "paragraphs": [
        "Nie ma informacji zbieranych przez usługę w celu identyfikacji użytkowników. Jednak minimalne zapisy niezbędne do działania usługi są automatycznie przechowywane przez dostawcę infrastruktury."
      ],
      "bullets": [
        "Adres IP, data i godzina dostępu, typ przeglądarki i inne ogólne zapisy dostępu do serwera",
        "Informacje o kraju — używane tylko do automatycznego określenia języka ekranu i nie są przechowywane"
      ]
    },
    {
      "heading": "4. Ciasteczka i reklamy",
      "paragraphs": [
        "Usługa sama w sobie nie używa ciasteczek do śledzenia użytkowników.",
        "Obecnie w tej usłudze nie są wyświetlane reklamy. W przypadku wprowadzenia reklam w przyszłości, dostawcy reklam (np. Google) mogą używać ciasteczek do ich wyświetlania. W takim przypadku najpierw zmienimy ten punkt, aby wyjaśnić, co się zmienia, a następnie rozpoczniemy."
      ]
    },
    {
      "heading": "5. Informacje przechowywane podczas płatności",
      "paragraphs": [
        "Podczas zakupu płatnego produktu (raport PDF o zgodności) informacje o zamówieniu są przechowywane w celu przetworzenia płatności oraz zgodnie z przepisami prawa dotyczącymi przechowywania zapisów transakcji.",
        "**Dane wprowadzone do obliczenia zgodności oraz stworzony PDF nie są przechowywane, nawet w przypadku dokonania płatności.** Zasada z punktu 1 pozostaje w mocy niezależnie od tego, czy dokonano płatności. Przechowywane elementy są następujące, a informacje identyfikujące użytkownika, takie jak imię, kontakt, adres, nie są w nich zawarte."
      ],
      "bullets": [
        "Numer zamówienia i identyfikator płatności",
        "Kwota płatności, waluta i status płatności (nieopłacone, opłacone, anulowane)",
        "Rodzaj produktu, status przetwarzania, liczba pobrań dokumentu, czas zamówienia",
        "Język ekranu w momencie zamówienia oraz klasyfikacja regionu płatności (krajowy, zagraniczny)",
        "Okres przechowywania — zgodnie z artykułem 6 ustawy o ochronie konsumentów w transakcjach elektronicznych, zapisy dotyczące płatności i dostawy towarów są przechowywane przez 5 lat, a zapisy dotyczące skarg lub sporów konsumenckich przez 3 lata, po czym są niszczone."
      ]
    },
    {
      "heading": "6. Udostępnianie osobom trzecim i zlecanie przetwarzania",
      "paragraphs": [
        "Nie przechowując danych osobowych identyfikujących użytkowników, nie ma również danych osobowych udostępnianych osobom trzecim. Przetwarzanie płatności jest zlecane poniższym podmiotom.",
        "W celu działania usługi korzystamy z infrastruktury hostingowej {hostingProvider}, a w tym procesie zapisy dostępu z punktu 3 są przetwarzane zgodnie z polityką tego podmiotu.",
        "Płatności krajowe są przetwarzane przez Toss Payments, a płatności zagraniczne przez PayPal za pośrednictwem PortOne. Informacje o metodach płatności, takie jak numery kart i kont, są przetwarzane bezpośrednio przez te podmioty, a usługa ich nie przekazuje ani nie przechowuje."
      ]
    },
    {
      "heading": "7. Prawa użytkowników",
      "paragraphs": [
        "Nie przechowując danych wejściowych do obliczenia zgodności, nie ma podmiotu, od którego można by żądać wglądu, korekty lub usunięcia. Pozostałe zapisy zamówień związane z płatnościami są przechowywane przez okres określony w przepisach, więc nie możemy ich usunąć w tym czasie, a po upływie tego okresu są niszczone.",
        "Użytkownik może usunąć wszystkie ślady wprowadzonych danych, po prostu usuwając link do wyników z paska adresu przeglądarki.",
        "W przypadku pytań związanych z korzystaniem z usługi prosimy o kontakt pod poniższymi danymi."
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
        "W przypadku zmiany niniejszej polityki, data wejścia w życie oraz zmiany zostaną opublikowane na tej stronie. W przypadku rzeczywistych zmian w przetwarzaniu, takich jak rozpoczęcie wyświetlania reklam lub sprzedaży płatnych produktów, najpierw poinformujemy o zmianach."
      ]
    }
  ],
  "effectiveLabel": "Data wejścia w życie"
};

const d6 = {
  "title": "Warunki korzystania",
  "intro": "Niniejsze warunki określają zasady korzystania z InyeonLink (dalej „Usługa”). Korzystając z Usługi, uznaje się, że wyrażasz zgodę na te warunki.",
  "sections": [
    {
      "heading": "1. Charakter Usługi",
      "paragraphs": [
        "Usługa pokazuje relacje między dwiema osobami na podstawie wprowadzonych dat urodzenia, stosując zasady tradycyjnej numerologii (saju) i zodiaku koreańskiego.",
        "Prezentowany wskaźnik dopasowania i interpretacje są **materiałem referencyjnym z perspektywy tradycyjnej interpretacji i nie stanowią naukowej prognozy ani jednoznacznych stwierdzeń dotyczących relacji.** Niski wynik nie oznacza złej relacji, a wysoki nie gwarantuje jej powodzenia."
      ]
    },
    {
      "heading": "2. Opłaty za korzystanie",
      "paragraphs": [
        "Obliczenia dopasowania i przeglądanie wyników są bezpłatne i nie wymagają rejestracji.",
        "Otrzymanie wyników w formie raportu PDF jest płatne. Ceny i warunki są wyświetlane w punkcie 3 oraz na ekranie płatności."
      ]
    },
    {
      "heading": "3. Produkty płatne i zwroty",
      "paragraphs": [
        "Sprzedawanym produktem płatnym jest **raport PDF o dopasowaniu**. Wyniki wyświetlane na ekranie są przekształcane w dokument PDF o trzech stronach, zawierający również wartości sił pięciu elementów, które nie są wyświetlane na ekranie.",
        "Cena wynosi {priceDomestic} (w tym VAT) dla płatności krajowych oraz {priceGlobal} dla płatności zagranicznych. Płatności krajowe można dokonywać za pomocą kart kredytowych/debetowych oraz płatności mobilnych (Toss Payments, KakaoPay, NaverPay, Payco itp.), a płatności zagraniczne realizowane są przez PortOne za pośrednictwem PayPal. Ostateczna kwota jest zgodna z kwotą wyświetlaną na ekranie płatności.",
        "**Usługa nie przechowuje ani wartości wprowadzonych przez użytkownika, ani utworzonego pliku PDF.** Po zatwierdzeniu płatności dokument jest tworzony i przesyłany natychmiast, a na serwerze nie pozostaje nic. Dlatego pobrany plik musi być przechowywany przez użytkownika.",
        "W przypadku przerwania pobierania lub utraty pliku, można ponownie pobrać ten sam zamówienie **do 5 razy**. Należy jednak pamiętać, że jeśli wartości wprowadzone na ekranie znikną, nie będzie można ich ponownie utworzyć, dlatego prosimy o zapisanie pliku zaraz po dokonaniu płatności."
      ],
      "bullets": [
        "**Przed rozpoczęciem pobierania po dokonaniu płatności** można w każdej chwili anulować zamówienie i otrzymać pełny zwrot.",
        "**Po zakończeniu pobierania** zwrot z powodu zmiany zdania jest ograniczony. Jest to cyfrowa treść, która jest dostarczana natychmiast i nie można jej przywrócić, co odpowiada przyczynom ograniczenia zwrotów określonym w art. 17 ust. 2 ustawy o ochronie konsumentów w handlu elektronicznym.",
        "**W przypadku, gdy dokument nie został utworzony z powodu błędu systemu, plik nie otwiera się lub kwota płatności różni się od zamówienia**, zostanie to potraktowane jako ponowne wydanie lub pełny zwrot.",
        "**Reklamacje dotyczące treści wyników** nie są podstawą do zwrotu. Wyniki dopasowania są materiałem referencyjnym z perspektywy tradycyjnej interpretacji, co zostało wyjaśnione przed dokonaniem płatności (patrz punkt 1).",
        "Ponowne żądanie po wykorzystaniu wszystkich 5 możliwości ponownego wydania nie jest podstawą do zwrotu.",
        "**W przypadku, gdy osoba niepełnoletnia dokonała płatności bez zgody swojego przedstawiciela ustawowego**, ona lub jej przedstawiciel ustawowy mogą anulować tę płatność. Prosimy o kontakt pod poniższym adresem, aby uzyskać zwrot."
      ]
    },
    {
      "heading": "4. Wyniki obliczeń",
      "paragraphs": [
        "Wszystkie wyniki są obliczane zgodnie z publicznie dostępnymi zasadami, więc przy wprowadzeniu tych samych wartości zawsze uzyskuje się te same wyniki.",
        "Jeśli nie wprowadzisz godziny urodzenia, obliczenia będą dokonywane bez uwzględnienia filaru czasowego (時柱), co może prowadzić do różnych wyników. Im dokładniej wybierzesz miejsce urodzenia, tym dokładniejsze będą obliczenia filaru czasowego.",
        "Obliczenia kalendarza urodzeniowego korzystają z publicznie dostępnej biblioteki obliczeniowej, a różne metody przetwarzania terminów i stref czasowych mogą prowadzić do różnych wyników kalendarza urodzeniowego."
      ]
    },
    {
      "heading": "5. Odpowiedzialność użytkownika",
      "paragraphs": [
        "Użytkownik może wprowadzać daty urodzenia innych osób, jednak nie może wykorzystywać wyników w sposób, który mógłby zaszkodzić innym.",
        "Nie należy używać wyników Usługi jako podstawy do decyzji wpływających na prawa innych osób, takich jak małżeństwo, rozwód, zatrudnienie czy transakcje. Usługa nie została stworzona do takich celów."
      ]
    },
    {
      "heading": "6. Zakazane działania",
      "paragraphs": [
        "Następujące działania są zabronione."
      ],
      "bullets": [
        "Wysyłanie nadmiernych żądań za pomocą narzędzi automatycznych, które zakłócają działanie Usługi",
        "Prezentowanie wyników Usługi jako faktów lub wyników ekspertyzy",
        "Kopiowanie lub modyfikowanie Usługi w celu świadczenia tej samej Usługi"
      ]
    },
    {
      "heading": "7. Zrzeczenie się odpowiedzialności",
      "paragraphs": [
        "Usługa dostarcza jedynie materiały referencyjne i nie ponosi odpowiedzialności za decyzje podjęte przez użytkownika na podstawie wyników oraz ich konsekwencje.",
        "W przypadku przerwy w działaniu Usługi z powodu siły wyższej, awarii dostawcy infrastruktury itp., Usługa nie ponosi odpowiedzialności za powstałe straty."
      ]
    },
    {
      "heading": "8. Prawa własności intelektualnej",
      "paragraphs": [
        "Prawa do ekranów Usługi, tekstów i implementacji zasad obliczeniowych należą do operatora. Użytkownik może zapisywać lub udostępniać wyniki wyłącznie do celów osobistych."
      ]
    },
    {
      "heading": "9. Zmiany warunków i prawo właściwe",
      "paragraphs": [
        "W przypadku zmiany warunków, zostaną one opublikowane na tej stronie wraz z datą wejścia w życie.",
        "Niniejsze warunki podlegają prawu Republiki Korei, a wszelkie spory związane z korzystaniem z Usługi będą rozstrzygane zgodnie z procedurami określonymi w odpowiednich przepisach prawnych."
      ]
    }
  ],
  "effectiveLabel": "Data wejścia w życie"
};

const d7 = {
  "title": "Polityka przetwarzania danych osobowych",
  "intro": "InyeonLink nie przechowuje informacji potrzebnych do obliczenia kompatybilności. Niniejsza polityka opisuje, co jest zbierane, co nie jest przechowywane oraz co jest automatycznie rejestrowane.",
  "sections": [
    {
      "heading": "1. Informacje, które nie są przechowywane",
      "paragraphs": [
        "Data urodzenia, czas urodzenia, miejsce urodzenia, płeć oraz imię podane w obliczeniach kompatybilności **nie są przechowywane w żadnym miejscu.** Są one używane tylko w pamięci serwera podczas przetwarzania żądania i znikają wraz z odpowiedzią.",
        "Nie są zapisywane w bazie danych ani w osobnych plikach. Nie ma rejestracji użytkowników, więc wprowadzone dane nie są powiązane z konkretną osobą."
      ]
    },
    {
      "heading": "2. Informacje zawarte w linku do wyników",
      "paragraphs": [
        "Adres URL ekranu wyników zawiera zakodowane wartości wejściowe. Jednakże, te wartości znajdują się za znakiem # w adresie, a zgodnie z normami internetowymi, zawartość za znakiem # nie jest przesyłana przez przeglądarkę do serwera. Dlatego nawet jeśli otworzysz link do wyników, w rejestrze dostępu serwera pozostanie tylko ścieżka adresu.",
        "Jeśli wyślesz link do wyników innej osobie, ta osoba również będzie mogła zobaczyć te same wyniki. Link sam w sobie zawiera wartości wejściowe, więc decyzja o udostępnieniu należy do użytkownika."
      ]
    },
    {
      "heading": "3. Informacje zbierane automatycznie",
      "paragraphs": [
        "Nie zbieramy informacji, które pozwalałyby zidentyfikować użytkownika. Jednakże, minimalne zapisy niezbędne do działania usługi są automatycznie przechowywane przez dostawcę infrastruktury."
      ],
      "bullets": [
        "Adres IP, data i godzina dostępu, typ przeglądarki oraz inne ogólne zapisy dostępu do serwera",
        "Informacje o kraju — używane wyłącznie do automatycznego określenia języka ekranu i nie są przechowywane"
      ]
    },
    {
      "heading": "4. Ciasteczka i reklamy",
      "paragraphs": [
        "Usługa sama w sobie nie używa ciasteczek do identyfikacji lub śledzenia użytkowników. Informacje wprowadzone w obliczeniach kompatybilności nie są przekazywane reklamodawcom.",
        "Usługa wyświetla reklamy za pośrednictwem Google AdSense. W tym procesie zachodzą następujące zdarzenia."
      ],
      "bullets": [
        "Dostawcy zewnętrzni, w tym Google, mogą zapisywać lub odczytywać ciasteczka w przeglądarce użytkownika.",
        "Google używa ciasteczek do wyświetlania reklam na podstawie historii odwiedzin tej i innych stron.",
        "Użytkownik może wyłączyć spersonalizowane reklamy w ustawieniach reklam Google (google.com/settings/ads). Nawet po wyłączeniu reklamy będą się nadal wyświetlać, ale ich związki z użytkownikiem będą mniejsze.",
        "Spersonalizowane reklamy od dostawców zewnętrznych można wyłączyć jednocześnie na stronie aboutads.info/choices.",
        "Istnieje również możliwość zablokowania ciasteczek w ustawieniach przeglądarki.",
        "Użytkownicy z Europejskiego Obszaru Gospodarczego, Wielkiej Brytanii i Szwajcarii są najpierw pytani o zgodę na użycie ciasteczek reklamowych."
      ]
    },
    {
      "heading": "5. Informacje przechowywane podczas płatności",
      "paragraphs": [
        "Podczas zakupu płatnych produktów (raport PDF o kompatybilności) informacje o zamówieniu są przechowywane w celu przetwarzania płatności oraz zgodnie z przepisami prawa dotyczącymi przechowywania zapisów transakcji.",
        "**Wartości wprowadzone w obliczeniach kompatybilności oraz stworzony PDF nie są przechowywane, nawet w przypadku dokonania płatności.** Zasada z punktu 1 pozostaje w mocy niezależnie od tego, czy dokonano płatności. Przechowywane elementy są następujące, a informacje identyfikujące użytkownika, takie jak imię, dane kontaktowe i adres, nie są w nich zawarte."
      ],
      "bullets": [
        "Numer zamówienia i identyfikator płatności",
        "Kwota płatności, waluta oraz status płatności (nieopłacone, opłacone, anulowane)",
        "Rodzaj produktu, status przetwarzania, liczba pobrań dokumentu, czas zamówienia",
        "Język ekranu oraz klasyfikacja regionu płatności (krajowy, zagraniczny) w momencie zamówienia",
        "Okres przechowywania — zgodnie z artykułem 6 ustawy o ochronie konsumentów w handlu elektronicznym, zapisy dotyczące płatności i dostawy towarów są przechowywane przez 5 lat, a zapisy dotyczące skarg lub sporów konsumenckich przez 3 lata, po czym są niszczone."
      ]
    },
    {
      "heading": "6. Przekazywanie danych osobowych osobom trzecim i zlecanie przetwarzania",
      "paragraphs": [
        "Nie przechowujemy danych osobowych, które pozwalałyby zidentyfikować użytkownika, więc nie przekazujemy takich danych osobom trzecim. Przetwarzanie płatności jest zlecane poniższym podmiotom.",
        "W celu działania usługi korzystamy z infrastruktury hostingowej {hostingProvider}, a w tym procesie zapisy dostępu z punktu 3 są przetwarzane zgodnie z polityką tego podmiotu.",
        "Płatności krajowe są przetwarzane przez Toss Payments, a płatności zagraniczne przez PayPal za pośrednictwem PortOne. Informacje o metodach płatności, takie jak numery kart i numery kont, są przetwarzane bezpośrednio przez te podmioty, a usługa ich nie przekazuje ani nie przechowuje."
      ]
    },
    {
      "heading": "7. Prawa użytkownika",
      "paragraphs": [
        "Nie przechowujemy wartości wejściowych obliczeń kompatybilności, więc nie ma podmiotu, od którego można by żądać wglądu, korekty lub usunięcia. Pozostałe zapisy zamówień związane z płatnościami są przechowywane przez okres określony w przepisach prawa, więc nie możemy ich usunąć w tym czasie, a po upływie tego okresu są niszczone.",
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
