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
        "Data urodzenia, czas urodzenia, miejsce urodzenia, płeć oraz imię podawane w interpretacji saju **nie są przechowywane w żadnym miejscu.** Są one używane tylko w pamięci serwera podczas przetwarzania żądania i znikają wraz z odpowiedzią.",
        "Nie są zapisywane w bazie danych ani w osobnych plikach. Nie ma rejestracji użytkowników, więc wprowadzone dane nie są powiązane z żadną osobą."
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
        "Nie zbieramy informacji, które pozwalają zidentyfikować użytkownika. Jednak minimalne zapisy wymagane do działania usługi są automatycznie pozostawiane przez dostawcę infrastruktury."
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
        "Obecnie w tej usłudze nie są wyświetlane reklamy. W przyszłości, jeśli reklamy będą wyświetlane, dostawcy reklam (np. Google) mogą używać ciasteczek do ich wyświetlania. W takim przypadku najpierw zmienimy ten punkt, aby wyjaśnić, co się zmienia, zanim to zaczniemy."
      ]
    },
    {
      "heading": "5. Informacje przechowywane podczas płatności",
      "paragraphs": [
        "Obecnie nie sprzedajemy płatnych produktów, więc nie ma informacji przechowywanych w związku z płatnościami.",
        "Gdy rozpoczniemy sprzedaż, poniższe elementy będą przechowywane w celu przetwarzania płatności oraz zgodnie z przepisami prawa dotyczącymi przechowywania zapisów transakcji. **Wtedy również wartości wprowadzone w interpretacji saju oraz utworzone PDF nie będą przechowywane**, a także nie będziemy zbierać informacji identyfikujących użytkownika, takich jak imię, kontakt czy adres."
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
        "Nie przechowujemy danych osobowych, więc nie przekazujemy danych osobowych osobom trzecim.",
        "W celu działania usługi korzystamy z infrastruktury hostingowej {hostingProvider}, a w tym procesie zapisy dostępu z punktu 3 są przetwarzane zgodnie z polityką tego dostawcy.",
        "Gdy rozpoczniemy sprzedaż płatnych produktów, krajowe płatności będą zlecane Toss Payments, a zagraniczne PortOne (PayPal). Informacje o metodach płatności, takie jak numery kart i kont, będą wówczas przetwarzane bezpośrednio przez te firmy, a usługa nie będzie ich otrzymywać."
      ]
    },
    {
      "heading": "7. Prawa użytkowników",
      "paragraphs": [
        "Nie ma przechowywanych danych osobowych, więc nie ma podmiotu, od którego można żądać wglądu, korekty lub usunięcia.",
        "Użytkownik może usunąć wszystkie ślady wprowadzonych danych, po prostu usuwając link do wyników z paska adresu przeglądarki.",
        "W przypadku pytań związanych z korzystaniem z usługi, prosimy o kontakt pod poniższymi danymi."
      ]
    },
    {
      "heading": "8. Dane osobowe dzieci",
      "paragraphs": [
        "Usługa ta nie jest skierowana do dzieci poniżej 14. roku życia i nie zbiera danych osobowych od dzieci."
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
        "W przypadku zmiany niniejszej polityki, data wejścia w życie oraz zmiany zostaną opublikowane na tej stronie. W przypadku rzeczywistych zmian w przetwarzaniu, takich jak rozpoczęcie wyświetlania reklam lub sprzedaży płatnych produktów, najpierw poinformujemy o zmianach."
      ]
    }
  ],
  "effectiveLabel": "Data wejścia w życie"
};

const d1 = {
  "title": "Warunki korzystania",
  "intro": "Niniejsze warunki określają zasady korzystania z Saju-Link (dalej „Usługa”). Korzystając z Usługi, uznaje się, że zgadzasz się z niniejszymi warunkami.",
  "effectiveLabel": "Data wejścia w życie",
  "sections": [
    {
      "heading": "1. Charakter usługi",
      "paragraphs": [
        "Usługa opiera się na wprowadzonym dacie urodzenia oraz godzinie urodzenia, stosując zasady tradycyjnej numerologii (saju) do przedstawienia natalnego wykresu saju oraz siły pięciu elementów, siły dnia oraz miejsca, w którym spotykają się dzienne znaki i wykres natalny jako materiały referencyjne.",
        "Przedstawione wyniki i interpretacje są **materiałem referencyjnym z perspektywy tradycyjnej astrologii, a nie naukowym przewidywaniem ani stwierdzeniem dotyczącym przyszłości, zdrowia czy majątku osoby.** Niski wynik nie oznacza, że dany dzień jest zły, a wysoki wynik nie gwarantuje niczego.",
        "**Interpretacje płatnych raportów są pisane przez generatywną sztuczną inteligencję.** Niemniej jednak wszystkie wartości, takie jak punkty, znaki i siły pięciu elementów, są obliczane przez silnik reguł usług, a AI nie zmienia ani nie tworzy tych wartości. W przypadku, gdy nie uda się stworzyć interpretacji, w tym samym miejscu zostanie umieszczony opis oparty na wartościach obliczonych przez silnik, a liczba stron dokumentu oraz zawarte w nim elementy pozostają takie, jak opisano w punkcie 3 poniżej."
      ]
    },
    {
      "heading": "2. Opłata za korzystanie",
      "paragraphs": [
        "Usługa jest obecnie oferowana całkowicie za darmo i nie wymaga rejestracji.",
        "Po rozpoczęciu sprzedaży płatnych produktów (dwa raporty PDF) stosuje się warunki określone w punkcie 3 poniżej. Przed rozpoczęciem sprzedaży ponownie przedstawimy te warunki."
      ]
    },
    {
      "heading": "3. Płatne usługi i zwroty",
      "paragraphs": [
        "Sprzedawanym płatnym produktem jest **„Raport o życiu saju (사주) i prognozie na ten rok” PDF**. Oferujemy stworzenie dokumentu na podstawie wyników wyświetlanych na ekranie, a także zawierającego dodatkowe informacje, które nie są widoczne na ekranie.",
        "**A4 9 stron** — okładka i podsumowanie, wrodzone skłonności oraz mocne strony, istotne punkty, osiem znaków w natalnym wykresie i siła pięciu elementów, siła i słabość dnia oraz potrzebna energia (yongsin), dziesięć znaków czterech filarów oraz wyróżniające się miejsca w tym saju (사주), cztery obszary życia widziane w wykresie (finanse, miłość, zawód, zdrowie) oraz ich podstawy, szczegóły korekty czasu prawdziwego słońca, a także prognoza na ten rok. Płatność krajowa {priceDomestic} (w tym VAT), płatność zagraniczna {priceGlobal}.",
        "**Dzienna fortuna nie jest zawarta w tym dokumencie.** Jest to wartość, która zmienia się codziennie i jest udostępniana bezpłatnie na ekranie, natomiast ten dokument składa się z interpretacji natalnej, która nie zmienia się przez całe życie, oraz prognozy na ten rok.",
        "Płatności krajowe można dokonywać za pośrednictwem Toss Payments, korzystając z kart kredytowych, debetowych oraz płatności mobilnych (Toss Pay, Kakao Pay, Naver Pay, Payco itp.), natomiast płatności zagraniczne realizowane są przez PortOne za pomocą PayPal. Ostateczna kwota jest zgodna z kwotą wyświetlaną na ekranie płatności.",
        "**Usługa nie przechowuje ani danych wprowadzonych przez użytkownika, ani utworzonych plików PDF.** Po zatwierdzeniu płatności dokument jest tworzony i natychmiast pobierany, a na serwerze nie pozostaje nic. Dlatego pobrany plik musi być przechowywany przez użytkownika.",
        "W przypadku przerwania pobierania lub utraty pliku, można go pobrać ponownie **do 5 razy** w ramach tego samego zamówienia. Należy jednak pamiętać, że jeśli dane wejściowe znikną poza ekranem wyników, nie będzie można ich ponownie utworzyć, dlatego prosimy o zapisanie pliku zaraz po dokonaniu płatności."
      ],
      "bullets": [
        "**Można anulować i otrzymać pełny zwrot pieniędzy w dowolnym momencie przed rozpoczęciem pobierania po dokonaniu płatności.**",
        "**Po zakończeniu pobierania** ogranicza się możliwość odstąpienia od umowy z powodu zmiany zdania. Jest to cyfrowa treść, która jest dostarczana natychmiast po dokonaniu płatności i nie może być przywrócona do stanu pierwotnego, co odpowiada przyczynom ograniczenia odstąpienia od umowy określonym w art. 17 ust. 2 ustawy o ochronie konsumentów w transakcjach elektronicznych.",
        "**W przypadku, gdy dokument nie został utworzony z powodu błędu systemu, plik nie otwiera się lub kwota płatności różni się od zamówienia** nastąpi ponowne wydanie lub pełny zwrot.",
        "**Reklamacje dotyczące treści wyników** nie stanowią podstawy do zwrotu. Interpretacja saju (사주) jest materiałem referencyjnym z perspektywy tradycyjnej numerologii i jej charakter jest przedstawiany przed dokonaniem płatności (punkt 1 powyżej).",
        "Ponowna prośba po wykorzystaniu wszystkich 5 wydanych ponownie nie stanowi podstawy do zwrotu.",
        "**W przypadku, gdy osoba niepełnoletnia dokonała płatności bez zgody swojego przedstawiciela ustawowego** zarówno osoba dokonująca płatności, jak i jej przedstawiciel ustawowy mogą anulować tę płatność. Proszę poinformować nas o tym pod poniższym adresem kontaktowym, a dokonamy zwrotu."
      ]
    },
    {
      "heading": "4. W odniesieniu do wyników obliczeń",
      "paragraphs": [
        "Wszystkie wyniki są obliczane zgodnie z publicznie dostępnymi zasadami, więc wprowadzenie tych samych wartości zawsze przynosi ten sam rezultat.",
        "Niepodanie godziny urodzenia spowoduje, że obliczenia będą dokonywane z pominięciem filaru czasu (時柱), co może wpłynąć na wyniki. Im dokładniej wybierzesz miejsce urodzenia, tym dokładniejsze będą obliczenia filaru czasu.",
        "Obliczenia dotyczące saju (사주) korzystają z publicznie dostępnej biblioteki obliczeniowej, a w zależności od sposobu przetwarzania terminów i stref czasowych, różne obliczenia saju mogą prowadzić do różnych wyników."
      ]
    },
    {
      "heading": "5. Odpowiedzialność użytkownika",
      "paragraphs": [
        "Użytkownik może wprowadzać daty urodzenia innych osób, jednak nie może wykorzystywać wyników w sposób niekorzystny dla tych osób.",
        "Nie używaj wyników usługi jako podstawy do podejmowania decyzji wpływających na prawa innych osób, takich jak małżeństwo, rozwód, zatrudnienie czy transakcje. Usługa nie została stworzona do takich celów."
      ]
    },
    {
      "heading": "6. Zakazane działania",
      "paragraphs": [
        "Następujące działania są zabronione."
      ],
      "bullets": [
        "Działania polegające na wysyłaniu nadmiernych żądań za pomocą narzędzi automatyzacyjnych, które zakłócają działanie usługi.",
        "Działanie polegające na przedstawianiu wyników usługi jako faktów lub wyników oceny ekspertów.",
        "działania polegające na reprodukcji lub przeróbce usługi w celu świadczenia identycznej usługi"
      ]
    },
    {
      "heading": "7. Zrzeczenie się odpowiedzialności",
      "paragraphs": [
        "Usługa ma charakter wyłącznie informacyjny i nie ponosimy odpowiedzialności za decyzje podjęte przez użytkownika na podstawie wyników oraz ich konsekwencje.",
        "Nie ponosimy odpowiedzialności za szkody wynikłe z przerwy w świadczeniu usług spowodowanej siłą wyższą, taką jak klęski żywiołowe, awarie dostawcy infrastruktury lub inne okoliczności, które są poza naszą kontrolą."
      ]
    },
    {
      "heading": "8. Prawo własności intelektualnej",
      "paragraphs": [
        "Prawa do implementacji ekranów, tekstów i zasad obliczeń usługi przysługują operatorowi. Użytkownik może zapisywać lub udostępniać wyniki w celach osobistych."
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
  "intro": "Kryteria anulacji i zwrotu saju (사주) raportów PDF. Zebrano je w osobnym miejscu, zgodnie z punktem 3 warunków.",
  "sections": [
    {
      "heading": "1. Charakter produktu",
      "paragraphs": [
        "Sprzedawane produkty to **raport o życiu saju (사주) PDF (A4 5 stron)** oraz **raport premium o życiu saju (사주) PDF (A4 7 stron)**, a oba są cyfrowymi treściami, które są tworzone natychmiast po zatwierdzeniu płatności i wysyłane do pobrania.",
        "**Usługa nie przechowuje ani danych wprowadzonych przez użytkownika, ani utworzonych plików PDF.** Dlatego pobrany plik musi być przechowywany przez użytkownika."
      ],
      "bullets": []
    },
    {
      "heading": "2. Anulowanie zamówienia",
      "paragraphs": [
        "Zgodnie z kryteriami określonymi w ustawie o handlu elektronicznym."
      ],
      "bullets": [
        "**Przed rozpoczęciem pobierania** można anulować zamówienie i otrzymać pełny zwrot pieniędzy w dowolnym momencie.",
        "**Po zakończeniu pobierania** anulowanie zamówienia z powodu zmiany zdania jest ograniczone. Jest to cyfrowa treść, która jest dostarczana natychmiast po płatności i nie może być przywrócona, co odpowiada przyczynom ograniczającym określonym w artykule 17 ustęp 2 ustawy o ochronie konsumentów w handlu elektronicznym. Informujemy o tym na ekranie płatności i uzyskujemy zgodę."
      ]
    },
    {
      "heading": "3. Przypadki pełnego zwrotu",
      "paragraphs": [
        "W następujących przypadkach po potwierdzeniu przyczyny dokonujemy ponownego wydania lub pełnego zwrotu pieniędzy."
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
        "**Niezadowolenie z treści wyników.** Interpretacja saju (사주) jest materiałem referencyjnym z tradycyjnego punktu widzenia i jej charakter został przedstawiony przed dokonaniem płatności.",
        "Ponowne żądanie po wykorzystaniu wszystkich 5 możliwości ponownego wydania."
      ]
    },
    {
      "heading": "5. Metoda składania wniosków",
      "paragraphs": [
        "Proszę zgłaszać zwroty i zapytania do centrum obsługi klienta ({customerCenter}) lub na adres e-mail ({email}). Podanie numeru zamówienia przyspieszy weryfikację.",
        "Zwrot pieniędzy zostanie dokonany tą samą metodą płatności, a w zależności od warunków firmy kartowej lub płatniczej, może zająć od 3 do 7 dni roboczych na przetworzenie."
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
        "**Interpretacja saju (사주) oraz codzienna prognoza są bezpłatne.** Nie jest wymagana rejestracja.",
        "Możesz zobaczyć wszystkie osiem znaków natalnych, siłę pięciu elementów, moc i słabość dnia, potrzebną energię, a także punkty i klasyfikację codziennej prognozy oraz punkty w czterech obszarach życia na ekranie."
      ]
    },
    {
      "heading": "2. Raport PDF o życiu saju (사주) oraz prognoza na ten rok (płatne)",
      "paragraphs": [
        "Płatność krajowa {priceDomestic} (z VAT) · Płatność zagraniczna {priceGlobal}",
        "Przygotujemy dla Ciebie dokument PDF o objętości **9 stron A4** z wynikami na ekranie. Zawiera to, co nie jest wyświetlane na ekranie — moc i słabość dnia, potrzebną energię, dziesięć znaków w czterech filarach oraz wyróżniające się miejsca w tym saju (사주), Wang Sang Hyu Su Sa, cztery obszary życia widziane w natalnym wykresie oraz podstawowe liczby, korekty dla godziny prawdziwego słońca, prognoza na ten rok — wszystko to jest zawarte w dokumencie.",
        "Możesz pobrać ten sam raport **do 5 razy**. Jednakże, jeśli dane wejściowe znikną poza ekranem wyników, nie będzie można go ponownie wygenerować, dlatego prosimy o zapisanie pliku zaraz po dokonaniu płatności."
      ]
    },
    {
      "heading": "4. Metody płatności",
      "paragraphs": [
        "**Krajowe** — Możesz korzystać z kart kredytowych i debetowych oraz płatności mobilnych (Toss Pay, Kakao Pay, Naver Pay, Payco itp.) za pośrednictwem Toss Payments.",
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
  "intro": "Saju-Link nie przechowuje informacji potrzebnych do interpretacji saju (사주). Niniejsza polityka opisuje, co jest zbierane, co nie jest przechowywane oraz co jest automatycznie rejestrowane.",
  "sections": [
    {
      "heading": "1. Informacje, które nie są przechowywane",
      "paragraphs": [
        "Data urodzenia, czas urodzenia, miejsce urodzenia, płeć oraz imię podawane w trakcie interpretacji saju **nie są przechowywane w żadnym miejscu.** Są one używane tylko w pamięci serwera podczas przetwarzania żądania i znikają wraz z odpowiedzią.",
        "Nie są zapisywane w bazie danych ani w osobnych plikach. Nie ma rejestracji użytkowników, więc wprowadzone dane nie są powiązane z konkretną osobą."
      ]
    },
    {
      "heading": "2. Informacje zawarte w linku do wyników",
      "paragraphs": [
        "Adres ekranu wyników zawiera zakodowane dane wejściowe. Jednakże, ta wartość znajduje się za znakiem # w adresie, a zgodnie z normami internetowymi, zawartość za znakiem # nie jest przesyłana przez przeglądarkę do serwera. Dlatego nawet jeśli otworzysz link do wyników, w rejestrze dostępu serwera pozostanie tylko ścieżka adresu.",
        "Jeśli wyślesz link do wyników innej osobie, ta osoba również będzie mogła zobaczyć te same wyniki. Link sam w sobie zawiera dane wejściowe, więc decyzja o udostępnieniu należy do użytkownika."
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
        "Usługa sama w sobie nie używa ciasteczek do identyfikacji lub śledzenia użytkowników. Informacje wprowadzone w trakcie interpretacji saju nie są przekazywane reklamodawcom.",
        "Usługa wyświetla reklamy za pośrednictwem Google AdSense. W tym procesie zachodzą następujące zdarzenia."
      ],
      "bullets": [
        "Dostawcy zewnętrzni, w tym Google, mogą zapisywać lub odczytywać ciasteczka w przeglądarce użytkownika.",
        "Google używa ciasteczek do wyświetlania reklam na podstawie historii odwiedzin tej oraz innych stron.",
        "Użytkownik może wyłączyć spersonalizowane reklamy w ustawieniach reklam Google (google.com/settings/ads). Nawet po wyłączeniu reklamy będą nadal wyświetlane, ale ich powiązanie z użytkownikiem zostanie zmniejszone.",
        "Spersonalizowane reklamy od dostawców zewnętrznych można wyłączyć jednocześnie na stronie aboutads.info/choices.",
        "Można również zablokować ciasteczka w ustawieniach przeglądarki.",
        "Użytkownicy z Europejskiego Obszaru Gospodarczego, Wielkiej Brytanii i Szwajcarii są najpierw pytani o zgodę na użycie ciasteczek reklamowych."
      ]
    },
    {
      "heading": "5. Informacje przechowywane podczas płatności",
      "paragraphs": [
        "Obecnie nie sprzedajemy płatnych produktów, więc nie ma informacji przechowywanych w związku z płatnościami.",
        "Gdy rozpoczniemy sprzedaż, poniższe elementy będą przechowywane w celu przetwarzania płatności oraz zgodnie z przepisami prawa dotyczącymi przechowywania zapisów transakcji. **W tym czasie również wartości wprowadzone w trakcie interpretacji saju oraz utworzone pliki PDF nie będą przechowywane**, a także nie zbieramy informacji identyfikujących użytkownika, takich jak imię, dane kontaktowe czy adres."
      ],
      "bullets": [
        "Numer zamówienia i identyfikator płatności",
        "Kwota płatności, waluta oraz status płatności (nieopłacone, opłacone, anulowane)",
        "Rodzaj produktu, status przetwarzania, liczba pobrań dokumentu, czas zamówienia",
        "Język ekranu w momencie zamówienia oraz klasyfikacja regionu płatności (krajowy, zagraniczny)",
        "Okres przechowywania — zgodnie z artykułem 6 ustawy o ochronie konsumentów w e-handlu, zapisy dotyczące płatności i dostawy towarów będą przechowywane przez 5 lat, a zapisy dotyczące skarg lub sporów konsumenckich przez 3 lata, po czym zostaną zniszczone."
      ]
    },
    {
      "heading": "6. Przekazywanie danych osobowych osobom trzecim i zlecanie przetwarzania",
      "paragraphs": [
        "Nie ma przechowywanych danych osobowych, więc nie ma również danych osobowych przekazywanych osobom trzecim.",
        "W celu działania usługi korzystamy z infrastruktury hostingowej {hostingProvider}, a w tym procesie zapisy dostępu z punktu 3 są przetwarzane zgodnie z polityką tego dostawcy.",
        "Gdy rozpoczniemy sprzedaż płatnych produktów, krajowe płatności będą zlecane Toss Payments, a zagraniczne płatności PortOne (PayPal). Informacje o metodach płatności, takie jak numery kart czy numery kont, będą wówczas przetwarzane bezpośrednio przez te firmy, a usługa nie będzie ich otrzymywać."
      ]
    },
    {
      "heading": "7. Prawa użytkownika",
      "paragraphs": [
        "Nie ma przechowywanych danych osobowych, więc nie ma również podmiotów, od których można żądać dostępu, korekty lub usunięcia.",
        "Użytkownik może usunąć wszystkie ślady wprowadzonych danych, po prostu usuwając link do wyników z paska adresu przeglądarki.",
        "W przypadku pytań związanych z korzystaniem z usługi, prosimy o kontakt pod poniższymi danymi."
      ]
    },
    {
      "heading": "8. Dane osobowe dzieci",
      "paragraphs": [
        "Usługa nie jest skierowana do dzieci poniżej 14. roku życia i nie zbiera danych osobowych od dzieci."
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
        "W przypadku zmiany niniejszej polityki, data wejścia w życie oraz szczegóły zmian będą publikowane na tej stronie. W przypadku rzeczywistych zmian w zakresie przetwarzania, takich jak rozpoczęcie wyświetlania reklam lub sprzedaży płatnych produktów, najpierw poinformujemy o zmianach."
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
        "Data urodzenia, czas urodzenia, miejsce urodzenia, płeć oraz imię podane w interpretacji saju **nie są przechowywane w żadnym miejscu.** Są używane tylko w pamięci serwera podczas przetwarzania żądania i znikają wraz z odpowiedzią.",
        "Nie są zapisywane w bazie danych ani w osobnych plikach. Nie ma rejestracji użytkowników, więc wprowadzone dane nie są powiązane z żadną osobą."
      ]
    },
    {
      "heading": "2. Informacje zawarte w linku do wyników",
      "paragraphs": [
        "Adres ekranu wyników zawiera zakodowane dane wejściowe. Jednakże, ta wartość znajduje się za znakiem # w adresie, a zgodnie z normami internetowymi, zawartość za znakiem # nie jest przesyłana przez przeglądarkę do serwera. Dlatego nawet jeśli otworzysz link do wyników, w rejestrze dostępu serwera pozostanie tylko ścieżka adresu.",
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
        "Obecnie w tej usłudze nie są wyświetlane reklamy. W przypadku wprowadzenia reklam w przyszłości, dostawcy reklam (np. Google) mogą używać ciasteczek do ich wyświetlania. W takim przypadku najpierw zmienimy ten punkt, aby wyjaśnić, co się zmienia, zanim to zaczniemy."
      ]
    },
    {
      "heading": "5. Informacje przechowywane podczas płatności",
      "paragraphs": [
        "Podczas zakupu płatnych produktów (raport PDF) informacje o zamówieniu są przechowywane w celu przetwarzania płatności oraz zgodnie z przepisami prawa dotyczącymi przechowywania zapisów transakcji.",
        "**Dane wprowadzone do interpretacji saju oraz stworzony PDF nie są przechowywane, nawet jeśli dokonano płatności.** Zasada z punktu 1 pozostaje w mocy niezależnie od statusu płatności. Przechowywane elementy są następujące, a informacje identyfikujące użytkownika, takie jak imię, kontakt, adres, nie są w nich zawarte."
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
      "heading": "6. Przekazywanie danych osobowych osobom trzecim oraz zlecanie przetwarzania",
      "paragraphs": [
        "Nie przechowujemy danych osobowych, które pozwalałyby zidentyfikować użytkownika, więc nie ma danych osobowych przekazywanych osobom trzecim. Przetwarzanie płatności jest zlecane poniższym podmiotom.",
        "Usługa korzysta z infrastruktury hostingowej {hostingProvider}, a w tym procesie zapisy dostępu z punktu 3 są przetwarzane zgodnie z polityką tego podmiotu.",
        "Płatności krajowe są przetwarzane przez Toss Payments, a płatności zagraniczne przez PayPal za pośrednictwem PortOne. Informacje o metodach płatności, takie jak numery kart czy numery kont, są przetwarzane bezpośrednio przez te podmioty, a usługa ich nie przekazuje ani nie przechowuje."
      ]
    },
    {
      "heading": "7. Prawa użytkownika",
      "paragraphs": [
        "Nie przechowujemy danych wejściowych do interpretacji saju, więc nie ma podmiotu, od którego można by żądać dostępu, korekty lub usunięcia. Pozostałe zapisy zamówień związane z płatnościami muszą być przechowywane przez okres określony w przepisach, więc w tym czasie nie możemy ich usunąć, a po upływie tego okresu są niszczone.",
        "Użytkownik może usunąć wszystkie ślady wejścia, po prostu usuwając link do wyników z paska adresu przeglądarki.",
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
        "W przypadku zmiany niniejszej polityki, data wejścia w życie oraz zmiany będą publikowane na tej stronie. W przypadku rzeczywistych zmian w zakresie przetwarzania, takich jak rozpoczęcie wyświetlania reklam lub sprzedaży płatnych produktów, najpierw poinformujemy o zmianach."
      ]
    }
  ],
  "effectiveLabel": "Data wejścia w życie"
};

const d6 = {
  "title": "Warunki korzystania",
  "intro": "Niniejsze warunki określają zasady korzystania z usługi Saju-Link (dalej „Usługa”). Korzystając z Usługi, uznaje się, że wyrażasz zgodę na te warunki.",
  "sections": [
    {
      "heading": "1. Charakterystyka Usługi",
      "paragraphs": [
        "Usługa pokazuje podstawowy wykres saju (saju - 四柱) oraz siłę pięciu elementów, moc dnia, a także odniesienia do codziennego losu i miejsca, w którym spotykają się wykres i los.",
        "Przedstawione wyniki i interpretacje są **materiałem referencyjnym z perspektywy tradycyjnej analizy saju i nie stanowią naukowej prognozy ani pewności dotyczącej przyszłości, zdrowia czy majątku jednostki.** Niski wynik nie oznacza, że dany dzień jest zły, a wysoki nie gwarantuje niczego.",
        "**Interpretacje płatnych raportów są pisane przez generatywną sztuczną inteligencję.** Jednak wszystkie liczby, takie jak wyniki, znaki i siły elementów, są obliczane przez silnik reguł Usługi, a AI nie zmienia ani nie tworzy tych wartości. W przypadku braku możliwości stworzenia interpretacji, w tym miejscu umieszczany jest opis oparty na obliczonych wartościach, a liczba stron dokumentu oraz zawarte w nim elementy są zgodne z opisem w punkcie 3."
      ]
    },
    {
      "heading": "2. Opłata za korzystanie",
      "paragraphs": [
        "Analiza saju i codzienna prognoza są bezpłatne i nie wymagają rejestracji.",
        "Otrzymanie wyników w formacie PDF jest płatne. Ceny i warunki są wyświetlane w punkcie 3 oraz na ekranie płatności."
      ]
    },
    {
      "heading": "3. Produkty płatne i zwroty",
      "paragraphs": [
        "Sprzedawanym produktem płatnym jest **jeden PDF „Raport o życiu saju i prognoza na ten rok”**. To dokument, który tworzy wyniki wyświetlane na ekranie, a także zawiera dodatkowe informacje, które nie są widoczne na ekranie.",
        "**9 stron A4** — okładka i podsumowanie, wrodzone cechy i mocne strony, istotne punkty, osiem znaków wykresu saju i siły pięciu elementów, moc dnia oraz potrzebna energia (yongsin), dziesięć znaków czterech filarów oraz wyróżniające się miejsca w tym saju, cztery obszary życia widziane z wykresu (majątek, miłość, zawód, zdrowie) oraz ich podstawy, korekta czasu w systemie Jin-Tai-Yang, a także prognoza na ten rok. Płatności krajowe {priceDomestic} (z VAT), płatności zagraniczne {priceGlobal}.",
        "**Codzienna prognoza nie jest zawarta w tym dokumencie.** Zmienia się codziennie, dlatego jest udostępniana bezpłatnie na ekranie, a ten dokument składa się z niezmiennej analizy wykresu oraz prognozy na ten rok.",
        "Płatności krajowe można dokonywać za pomocą kart kredytowych, debetowych oraz płatności mobilnych (Toss Payments, KakaoPay, NaverPay, Payco itp.) przez Toss Payments, a płatności zagraniczne są realizowane przez PortOne za pomocą PayPal. Ostateczna kwota jest zgodna z kwotą wyświetlaną na ekranie płatności.",
        "**Usługa nie przechowuje ani danych wprowadzonych przez użytkownika, ani utworzonego pliku PDF.** Po zatwierdzeniu płatności dokument jest generowany i przesyłany natychmiast, a na serwerze nie pozostaje nic. Dlatego pobrany plik musi być przechowywany przez użytkownika.",
        "W przypadku przerwania pobierania lub utraty pliku, można go pobrać ponownie **do 5 razy** w ramach tego samego zamówienia. Jednak jeśli dane wejściowe znikną poza ekranem wyników, nie będzie można ich ponownie wygenerować, dlatego prosimy o zapisanie pliku zaraz po dokonaniu płatności."
      ],
      "bullets": [
        "**Przed rozpoczęciem pobierania po płatności** można w każdej chwili anulować zamówienie i otrzymać pełny zwrot.",
        "**Po zakończeniu pobierania** zwrot z powodu zmiany zdania jest ograniczony. Jest to cyfrowa treść, która jest dostarczana natychmiast i nie może być przywrócona, co odpowiada przyczynom ograniczenia zwrotów określonym w artykule 17 ust. 2 ustawy o ochronie konsumentów w transakcjach elektronicznych.",
        "**W przypadku, gdy dokument nie został utworzony z powodu błędu systemu, plik nie otwiera się lub kwota płatności różni się od zamówienia**, zostanie to rozwiązane poprzez ponowne wydanie lub pełny zwrot.",
        "**Reklamacje dotyczące treści wyników** nie są podstawą do zwrotu. Analiza saju jest materiałem referencyjnym z perspektywy tradycyjnej analizy saju, co zostało wyjaśnione przed dokonaniem płatności (punkt 1 powyżej).",
        "Ponowne żądanie po wykorzystaniu wszystkich 5 możliwości ponownego wydania nie jest podstawą do zwrotu.",
        "**W przypadku, gdy osoba niepełnoletnia dokonała płatności bez zgody swojego przedstawiciela ustawowego**, ona lub jej przedstawiciel ustawowy mogą anulować tę płatność. Proszę poinformować nas o tym pod poniższymi danymi kontaktowymi, a dokonamy zwrotu."
      ]
    },
    {
      "heading": "4. Wyniki obliczeń",
      "paragraphs": [
        "Wszystkie wyniki są obliczane zgodnie z publicznymi zasadami, więc przy wprowadzeniu tych samych wartości zawsze uzyskuje się te same wyniki.",
        "Jeśli nie wprowadzisz godziny urodzenia, obliczenia będą dokonywane z pominięciem filaru czasu (시주), co może prowadzić do różnych wyników. Im dokładniej wybierzesz miejsce urodzenia, tym dokładniejsze będą obliczenia filaru czasu.",
        "Obliczenia kalendarza manse (manse - 万岁历) korzystają z publicznej biblioteki obliczeniowej, a wyniki mogą się różnić w zależności od sposobu przetwarzania terminów i stref czasowych."
      ]
    },
    {
      "heading": "5. Odpowiedzialność użytkownika",
      "paragraphs": [
        "Użytkownik może wprowadzać daty urodzenia innych osób, jednak nie może wykorzystywać wyników w sposób, który mógłby zaszkodzić innym.",
        "Nie używaj wyników Usługi jako podstawy do decyzji dotyczących małżeństwa, rozwodu, zatrudnienia, transakcji itp., które mogą wpływać na prawa innych osób. Usługa nie została stworzona do takich celów."
      ]
    },
    {
      "heading": "6. Zakazane działania",
      "paragraphs": [
        "Następujące działania są zabronione."
      ],
      "bullets": [
        "Wysyłanie nadmiernych żądań za pomocą narzędzi automatycznych, co zakłóca działanie Usługi",
        "Prezentowanie wyników Usługi jako faktów lub wyników ekspertyzy specjalistycznej",
        "Kopiowanie lub modyfikowanie Usługi w celu świadczenia tej samej Usługi"
      ]
    },
    {
      "heading": "7. Zrzeczenie się odpowiedzialności",
      "paragraphs": [
        "Usługa dostarcza jedynie materiały referencyjne i nie ponosi odpowiedzialności za decyzje podjęte przez użytkownika na podstawie wyników oraz ich konsekwencje.",
        "Nie ponosimy odpowiedzialności za szkody wynikłe z przerwy w Usłudze z powodu siły wyższej, awarii dostawców infrastruktury lub innych przyczyn, których nie możemy kontrolować."
      ]
    },
    {
      "heading": "8. Prawa własności intelektualnej",
      "paragraphs": [
        "Prawa do ekranów Usługi, tekstów i implementacji zasad obliczeniowych należą do operatora. Użytkownik może zapisywać lub udostępniać wyniki wyłącznie w celach osobistych."
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
  "intro": "Saju-Link nie przechowuje informacji potrzebnych do interpretacji saju (사주). Niniejsza polityka opisuje, co jest zbierane, co nie jest przechowywane oraz co jest automatycznie rejestrowane.",
  "sections": [
    {
      "heading": "1. Informacje, które nie są przechowywane",
      "paragraphs": [
        "Data urodzenia, godzina urodzenia, miejsce urodzenia, płeć oraz imię podane w interpretacji saju **nie są przechowywane w żadnym miejscu.** Są używane tylko w pamięci serwera podczas przetwarzania żądania i znikają wraz z odpowiedzią.",
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
        "Nie zbieramy informacji, które pozwalają zidentyfikować użytkownika. Jednak minimalne zapisy wymagane do działania usługi są automatycznie przechowywane przez dostawcę infrastruktury."
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
        "Usługa wyświetla reklamy za pośrednictwem Google AdSense. W tym procesie zachodzą następujące zdarzenia."
      ],
      "bullets": [
        "Dostawcy zewnętrzni, w tym Google, mogą przechowywać lub odczytywać ciasteczka w przeglądarce użytkownika.",
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
        "Po dokonaniu płatności za płatny produkt (raport PDF) informacje o zamówieniu są przechowywane w celu przetwarzania płatności oraz zgodnie z przepisami prawa dotyczącymi przechowywania zapisów transakcji.",
        "**Wartości wprowadzone w interpretacji saju oraz stworzony PDF nie są przechowywane nawet po dokonaniu płatności.** Zasada z punktu 1 pozostaje w mocy niezależnie od statusu płatności. Przechowywane elementy są następujące, a informacje identyfikujące użytkownika, takie jak imię, dane kontaktowe i adres, nie są w nich zawarte."
      ],
      "bullets": [
        "Numer zamówienia i identyfikator płatności",
        "Kwota płatności, waluta i status płatności (nieopłacone, opłacone, anulowane)",
        "Rodzaj produktu, status przetwarzania, liczba pobrań dokumentu, czas zamówienia",
        "Język ekranu w momencie zamówienia oraz klasyfikacja regionu płatności (krajowy, zagraniczny)",
        "Okres przechowywania — zgodnie z artykułem 6 ustawy o ochronie konsumentów w handlu elektronicznym, zapisy dotyczące płatności i dostawy towarów są przechowywane przez 5 lat, a zapisy dotyczące skarg lub sporów konsumenckich przez 3 lata, po czym są niszczone."
      ]
    },
    {
      "heading": "6. Przekazywanie danych osobowych osobom trzecim i zlecanie przetwarzania",
      "paragraphs": [
        "Nie przechowujemy danych osobowych, które pozwalają zidentyfikować użytkownika, więc nie przekazujemy danych osobowych osobom trzecim. Przetwarzanie płatności jest zlecane poniższym podmiotom.",
        "Usługa korzysta z infrastruktury hostingowej {hostingProvider}, a w tym procesie zapisy dostępu z punktu 3 są przetwarzane zgodnie z polityką tego podmiotu.",
        "Płatności krajowe są przetwarzane przez Toss Payments, a płatności zagraniczne przez PayPal za pośrednictwem PortOne. Informacje o metodach płatności, takie jak numery kart i numery kont, są przetwarzane bezpośrednio przez te podmioty, a usługa ich nie otrzymuje ani nie przechowuje."
      ]
    },
    {
      "heading": "7. Prawa użytkowników",
      "paragraphs": [
        "Ponieważ wartości wprowadzone w interpretacji saju nie są przechowywane, nie ma podmiotu, do którego można by zgłosić prośbę o wgląd, korektę lub usunięcie. Pozostałe zapisy zamówień związane z płatnościami są przechowywane przez okres określony przez prawo, więc nie możemy ich usunąć w tym czasie, a po upływie tego okresu są niszczone.",
        "Użytkownik może usunąć wszystkie ślady wprowadzonych danych, po prostu usuwając link do wyników z paska adresu przeglądarki.",
        "W przypadku pytań związanych z korzystaniem z usługi prosimy o kontakt pod poniższymi danymi."
      ]
    },
    {
      "heading": "8. Dane osobowe dzieci",
      "paragraphs": [
        "Usługa nie jest skierowana do dzieci poniżej 14. roku życia i nie zbiera danych osobowych od dzieci."
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
