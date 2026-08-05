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
        "Data urodzenia, godzina urodzenia, miejsce urodzenia, płeć oraz imię podane w interpretacji saju **nie są przechowywane w żadnym miejscu.** Są one używane tylko w pamięci serwera podczas przetwarzania żądania i znikają wraz z odpowiedzią.",
        "Nie są zapisywane w bazie danych ani w osobnych plikach. Nie ma rejestracji członkowskiej, więc wprowadzone dane nie są powiązane z konkretną osobą."
      ]
    },
    {
      "heading": "2. Informacje zawarte w linku do wyników",
      "paragraphs": [
        "Adres ekranu wyników zawiera zakodowane dane wejściowe. Jednakże ta wartość znajduje się za znakiem # w adresie, a zgodnie z normami internetowymi, zawartość za znakiem # nie jest przesyłana przez przeglądarkę do serwera. Dlatego otwierając link do wyników, w rejestrze dostępu serwera pozostaje tylko ścieżka adresu.",
        "Jeśli wyślesz link do innej osoby, ta osoba również może zobaczyć te same wyniki. Link sam w sobie zawiera dane wejściowe, więc decyzja o udostępnieniu należy do użytkownika."
      ]
    },
    {
      "heading": "3. Informacje zbierane automatycznie",
      "paragraphs": [
        "Nie zbieramy informacji, które pozwalają zidentyfikować użytkownika. Jednakże minimalne zapisy wymagane do działania usługi są automatycznie przechowywane przez dostawcę infrastruktury."
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
        "Obecnie nie sprzedajemy płatnych produktów, więc nie ma informacji przechowywanych w związku z płatnościami.",
        "Gdy rozpoczniemy sprzedaż, poniższe informacje będą przechowywane w celu przetwarzania płatności oraz zgodnie z przepisami prawa o przechowywaniu zapisów transakcji. **Wtedy również wartości wprowadzone w interpretacji saju oraz utworzone PDF nie będą przechowywane**, a także nie zbieramy informacji identyfikujących użytkownika, takich jak imię, dane kontaktowe czy adres."
      ],
      "bullets": [
        "Numer zamówienia i identyfikator płatności",
        "Kwota płatności, waluta oraz status płatności (nieopłacone, opłacone, anulowane)",
        "Rodzaj produktu, status przetwarzania, liczba pobrań dokumentu, czas zamówienia",
        "Język ekranu w momencie zamówienia oraz rozróżnienie regionu płatności (krajowy, zagraniczny)",
        "Okres przechowywania — zgodnie z artykułem 6 ustawy o ochronie konsumentów w transakcjach elektronicznych, zapisy dotyczące płatności i dostawy towarów będą przechowywane przez 5 lat, a zapisy dotyczące skarg lub sporów konsumenckich przez 3 lata, po czym zostaną zniszczone."
      ]
    },
    {
      "heading": "6. Udostępnianie osobom trzecim i zlecanie przetwarzania",
      "paragraphs": [
        "Nie przechowujemy danych osobowych, więc nie ma danych osobowych do udostępnienia osobom trzecim.",
        "W celu działania usługi korzystamy z infrastruktury hostingowej {hostingProvider}, a w tym procesie zapisy dostępu z punktu 3 są przetwarzane zgodnie z polityką tego dostawcy.",
        "Gdy rozpoczniemy sprzedaż płatnych produktów, krajowe płatności będą zlecane Toss Payments, a zagraniczne PortOne (PayPal). Informacje o metodach płatności, takie jak numery kart czy numery kont, będą przetwarzane bezpośrednio przez tych dostawców, a usługa ich nie otrzyma."
      ]
    },
    {
      "heading": "7. Prawa użytkownika",
      "paragraphs": [
        "Nie ma przechowywanych danych osobowych, więc nie ma podmiotu, od którego można żądać dostępu, korekty lub usunięcia.",
        "Użytkownik może usunąć wszystkie ślady wprowadzonych danych, po prostu usuwając link do wyników z paska adresu przeglądarki.",
        "W przypadku pytań związanych z korzystaniem z usługi, prosimy o kontakt pod poniższymi danymi."
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
        "W przypadku zmiany niniejszej polityki, data wejścia w życie oraz zmiany zostaną opublikowane na tej stronie. W przypadku rzeczywistych zmian w przetwarzaniu, takich jak wprowadzenie reklam lub rozpoczęcie sprzedaży płatnych produktów, najpierw poinformujemy o zmianach."
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
        "Po rozpoczęciu sprzedaży płatnych produktów (jednego raportu PDF) stosuje się warunki określone w punkcie 3 poniżej. Przed rozpoczęciem sprzedaży ponownie informujemy o tych warunkach."
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
  "intro": "Kryteria anulacji i zwrotu saju (사주) raportu PDF. Zebraliśmy informacje zgodne z punktem 3 warunków.",
  "sections": [
    {
      "heading": "1. Charakter produktu",
      "paragraphs": [
        "Sprzedawanym produktem jest **„Raport o życiu saju (사주) i prognoza na ten rok” PDF (A4 9 stron)**, który jest cyfrową treścią tworzonym natychmiast po zatwierdzeniu płatności i wysyłanym do pobrania.",
        "**Usługa nie przechowuje ani danych wprowadzonych przez użytkownika, ani utworzonego pliku PDF.** Dlatego pobrany plik musi być przechowywany przez użytkownika."
      ]
    },
    {
      "heading": "2. Anulowanie zamówienia",
      "paragraphs": [
        "Zasady określone w ustawie o handlu elektronicznym są stosowane."
      ],
      "bullets": [
        "**Przed rozpoczęciem pobierania** można anulować zamówienie i otrzymać pełny zwrot w każdej chwili.",
        "**Po zakończeniu pobierania** anulowanie zamówienia z powodu zmiany zdania jest ograniczone. Jest to cyfrowa treść dostarczana natychmiast po płatności, co uniemożliwia przywrócenie do stanu pierwotnego, co odpowiada przyczynom ograniczenia określonym w artykule 17 ust. 2 ustawy o ochronie konsumentów w handlu elektronicznym. Informujemy o tym na ekranie płatności i uzyskujemy zgodę."
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
        "**Gdy osoba niepełnoletnia dokonała płatności bez zgody przedstawiciela ustawowego** — prośbę o anulowanie może złożyć osoba pełnoletnia lub przedstawiciel ustawowy."
      ]
    },
    {
      "heading": "4. Przypadki, które nie kwalifikują się do zwrotu",
      "paragraphs": [],
      "bullets": [
        "**Niezadowolenie z treści wyników.** Interpretacja saju (사주) jest materiałem referencyjnym z perspektywy tradycyjnej astrologii, a jego charakter został przedstawiony przed dokonaniem płatności.",
        "Ponowne żądanie po wykorzystaniu wszystkich 5 możliwości ponownego wydania."
      ]
    },
    {
      "heading": "5. Metoda składania wniosków",
      "paragraphs": [
        "Proszę zgłaszać zwroty i zapytania do centrum obsługi klienta ({customerCenter}) lub na adres e-mail ({email}). Podanie numeru zamówienia przyspieszy proces weryfikacji.",
        "Zwrot zostanie dokonany przy użyciu metody płatności, którą dokonano, a w zależności od banku lub dostawcy płatności, może to zająć od 3 do 7 dni roboczych."
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
        "Można zobaczyć wszystkie osiem znaków natalnych, siłę pięciu elementów, moc i słabość dnia, potrzebną energię, a także punkty i klasyfikację codziennej prognozy oraz punkty w czterech obszarach życia na ekranie."
      ]
    },
    {
      "heading": "2. Życiowy raport saju (사주) oraz raport prognozy na ten rok PDF (płatny)",
      "paragraphs": [
        "Płatność krajowa {priceDomestic} (z VAT) · Płatność zagraniczna {priceGlobal}",
        "Przygotujemy dokument PDF o objętości **9 stron A4** z wynikami na ekranie. Zawiera to również informacje, które nie są wyświetlane na ekranie — moc i słabość dnia, potrzebna energia, dziesięć znaków w czterech filarach oraz wyróżniające się miejsca w tym saju (사주), Wang Sang Hyu Su Sa, cztery obszary życia widziane w natalnym wykresie oraz podstawowe liczby, korekty dla godziny Jin Tai Yang, prognoza na ten rok — wszystko to jest zawarte.",
        "Można pobrać ponownie do **5 razy** w ramach tego samego zamówienia. Należy jednak pamiętać, że jeśli dane wejściowe znikną poza ekranem wyników, nie będzie można ich ponownie wygenerować, dlatego prosimy o zapisanie pliku zaraz po dokonaniu płatności."
      ]
    },
    {
      "heading": "4. Metody płatności",
      "paragraphs": [
        "**Krajowe** — Można korzystać z kart kredytowych/debetowych oraz płatności mobilnych (Toss Pay, Kakao Pay, Naver Pay, Payco itp.) za pośrednictwem Toss Payments.",
        "**Zagraniczne** — Można płacić przez PayPal za pośrednictwem PortOne.",
        "Ostateczna kwota płatności jest zgodna z kwotą wyświetlaną na ekranie płatności."
      ]
    },
    {
      "heading": "5. Zmiana cen",
      "paragraphs": [
        "W przypadku zmiany cen najpierw zostanie to ogłoszone na tej stronie. Zmodyfikowane ceny nie będą miały zastosowania do zamówień, które już zostały opłacone."
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
        "Data urodzenia, czas urodzenia, miejsce urodzenia, płeć oraz imię podawane w interpretacji saju **nie są przechowywane w żadnym miejscu.** Są one używane tylko w pamięci serwera podczas przetwarzania żądania i znikają wraz z odpowiedzią.",
        "Nie są zapisywane w bazie danych ani w osobnych plikach. Nie ma rejestracji użytkowników, więc wprowadzone dane nie są powiązane z żadną osobą."
      ]
    },
    {
      "heading": "2. Informacje zawarte w linku do wyników",
      "paragraphs": [
        "Adres ekranu wyników zawiera zakodowane dane wejściowe. Jednakże te dane znajdują się za znakiem # w adresie, a zgodnie z normami internetowymi, zawartość za znakiem # nie jest przesyłana przez przeglądarkę do serwera. Dlatego nawet jeśli otworzysz link do wyników, w rejestrze dostępu serwera pozostanie tylko ścieżka adresu.",
        "Jeśli wyślesz link do innej osoby, ta osoba również będzie mogła zobaczyć te same wyniki. Link sam w sobie zawiera dane wejściowe, więc decyzja o udostępnieniu należy do użytkownika."
      ]
    },
    {
      "heading": "3. Informacje zbierane automatycznie",
      "paragraphs": [
        "Nie zbieramy informacji, które pozwalałyby zidentyfikować użytkownika. Jednakże minimalne zapisy wymagane do działania usługi są automatycznie przechowywane przez dostawcę infrastruktury."
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
        "Obecnie nie sprzedajemy płatnych produktów, więc nie ma informacji przechowywanych w związku z płatnościami.",
        "Gdy rozpoczniemy sprzedaż, poniższe dane będą przechowywane w celu przetwarzania płatności oraz zgodnie z przepisami prawa dotyczącymi przechowywania zapisów transakcji. **W tym czasie również wartości wprowadzone w interpretacji saju oraz utworzone pliki PDF nie będą przechowywane**, a informacje identyfikujące użytkownika, takie jak imię, dane kontaktowe i adres, nie będą zbierane."
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
        "Gdy rozpoczniemy sprzedaż płatnych produktów, krajowe płatności będą zlecane Toss Payments, a zagraniczne płatności PortOne (PayPal). Informacje o metodach płatności, takie jak numery kart i numery kont, będą wówczas przetwarzane bezpośrednio przez te firmy, a usługa nie będzie ich otrzymywać."
      ]
    },
    {
      "heading": "7. Prawa użytkownika",
      "paragraphs": [
        "Nie ma przechowywanych danych osobowych, więc nie ma podmiotu, od którego można by żądać wglądu, korekty lub usunięcia.",
        "Użytkownik może usunąć wszystkie ślady wprowadzonych danych, po prostu usuwając link do wyników z paska adresu przeglądarki.",
        "W przypadku pytań dotyczących korzystania z usługi, prosimy o kontakt pod poniższymi danymi."
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
        "W przypadku zmiany niniejszej polityki, data wejścia w życie oraz treść zmian będą publikowane na tej stronie. W przypadku rzeczywistych zmian w przetwarzaniu, takich jak rozpoczęcie wyświetlania reklam lub sprzedaży płatnych produktów, najpierw poinformujemy o zmianach."
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
        "Data urodzenia, czas urodzenia, miejsce urodzenia, płeć oraz imię podawane w saju (사주) **nie są przechowywane w żadnym miejscu.** Są one używane tylko w pamięci serwera podczas przetwarzania żądania i znikają wraz z odpowiedzią.",
        "Nie są zapisywane w bazie danych ani w osobnych plikach. Nie ma rejestracji użytkowników, więc wprowadzone dane nie są powiązane z konkretną osobą."
      ]
    },
    {
      "heading": "2. Informacje zawarte w linku do wyników",
      "paragraphs": [
        "Adres ekranu wyników zawiera zakodowane dane wejściowe. Jednakże, ta wartość znajduje się za znakiem # w adresie, a zgodnie z normami internetowymi, zawartość za znakiem # nie jest przesyłana przez przeglądarkę do serwera. Dlatego nawet jeśli otworzysz link do wyników, w rejestrze dostępu serwera pozostanie tylko ścieżka adresu.",
        "Jeśli wyślesz link do innej osoby, ta osoba również będzie mogła zobaczyć te same wyniki. Link sam w sobie zawiera dane wejściowe, więc decyzja o udostępnieniu należy do użytkownika."
      ]
    },
    {
      "heading": "3. Informacje zbierane automatycznie",
      "paragraphs": [
        "Nie zbieramy informacji, które pozwalają zidentyfikować użytkownika. Jednakże, minimalne zapisy wymagane do działania usługi są automatycznie przechowywane przez dostawcę infrastruktury."
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
        "**Dane wprowadzone do saju (사주) oraz utworzony PDF nie są przechowywane, nawet jeśli dokonano płatności.** Zasada z punktu 1 pozostaje w mocy niezależnie od statusu płatności. Przechowywane elementy są następujące, a informacje identyfikujące użytkownika, takie jak imię, kontakt, adres, nie są w nie włączone."
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
        "Nie przechowujemy danych osobowych, które pozwalają zidentyfikować użytkownika, więc nie przekazujemy danych osobowych osobom trzecim. Przetwarzanie płatności jest zlecane poniższym podmiotom.",
        "Usługa korzysta z infrastruktury hostingowej {hostingProvider}, a w tym procesie zapisy dostępu z punktu 3 są przetwarzane zgodnie z polityką tego podmiotu.",
        "Płatności krajowe są przetwarzane przez Toss Payments, a płatności zagraniczne przez PayPal za pośrednictwem PortOne. Informacje o numerach kart, numerach kont itp. są przetwarzane bezpośrednio przez te podmioty, a usługa ich nie przekazuje ani nie przechowuje."
      ]
    },
    {
      "heading": "7. Prawa użytkownika",
      "paragraphs": [
        "Ponieważ dane wejściowe do saju (사주) nie są przechowywane, nie ma podmiotu, od którego można żądać wglądu, korekty lub usunięcia. Pozostałe zapisy zamówień związane z płatnościami są przechowywane przez okres określony w przepisach prawa, więc nie możemy ich usunąć w tym czasie, a po upływie tego okresu są niszczone.",
        "Użytkownik może usunąć wszystkie ślady wprowadzonych danych, po prostu usuwając link do wyników z paska adresu przeglądarki.",
        "W przypadku pytań związanych z korzystaniem z usługi, prosimy o kontakt pod poniższymi danymi."
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
        "W przypadku zmiany niniejszej polityki, data wejścia w życie oraz treść zmian zostaną opublikowane na tej stronie. W przypadku rzeczywistych zmian w zakresie przetwarzania, takich jak wprowadzenie reklam lub sprzedaż płatnych produktów, najpierw poinformujemy o zmianach."
      ]
    }
  ],
  "effectiveLabel": "Data wejścia w życie"
};

const d6 = {
  "title": "Warunki korzystania",
  "intro": "Niniejsze warunki określają zasady korzystania z Saju-Link (dalej „Usługa”). Korzystając z Usługi, uznaje się, że zgadzasz się z niniejszymi warunkami.",
  "sections": [
    {
      "heading": "1. Charakter usługi",
      "paragraphs": [
        "Usługa pokazuje natywny wykres saju (saju) oraz siłę pięciu elementów, moc i słabość dnia, a także odniesienia do codziennego losu i miejsca, w którym spotykają się natywny wykres i codzienny los, na podstawie wprowadzonych daty urodzenia i godziny urodzenia.",
        "Prezentowane wyniki i interpretacje są **materiałem referencyjnym z perspektywy tradycyjnej nauki o losie i nie stanowią naukowej prognozy ani stwierdzenia dotyczącego przyszłości, zdrowia czy majątku osoby.** Niski wynik nie oznacza, że dany dzień jest zły, a wysoki nie gwarantuje niczego.",
        "**Interpretacje płatnych raportów są pisane przez generatywną sztuczną inteligencję.** Jednak wszystkie liczby, takie jak wyniki, znaki i siły pięciu elementów, są obliczane przez silnik reguł usługi, a AI nie zmienia ani nie tworzy tych wartości. W przypadku braku możliwości stworzenia interpretacji, w tym miejscu zostanie umieszczony opis oparty na obliczonej wartości, a liczba stron dokumentu oraz zawarte w nim elementy pozostaną zgodne z opisem w punkcie 3."
      ]
    },
    {
      "heading": "2. Opłata za korzystanie",
      "paragraphs": [
        "Analiza saju i codzienne prognozy są bezpłatne i nie wymagają rejestracji.",
        "Otrzymanie wyników w formie raportu PDF jest płatne. Ceny i warunki są wyświetlane w punkcie 3 oraz na ekranie płatności."
      ]
    },
    {
      "heading": "3. Produkty płatne i zwroty",
      "paragraphs": [
        "Sprzedawanym produktem płatnym jest **jeden PDF raport „Całkowita analiza saju i prognoza na ten rok”**. To dokument, który tworzy wyniki z ekranu, a także zawiera dodatkowe informacje, które nie są widoczne na ekranie.",
        "**9 stron A4** — okładka i podsumowanie, wrodzone cechy i mocne strony, istotne punkty, osiem znaków natywnego wykresu i siły pięciu elementów, moc i słabość dnia oraz potrzebna energia (yongsin), dziesięć znaków czterech filarów oraz wyróżniające się miejsca w tym saju, cztery obszary życia widziane w natywnym wykresie (majątek, miłość, zawód, zdrowie) oraz ich podstawy, korekty czasu w systemie Jin-Tai-Yang, a także prognoza na ten rok. Płatność krajowa {priceDomestic} (z VAT), płatność zagraniczna {priceGlobal}.",
        "**Codzienna prognoza nie jest zawarta w tym dokumencie.** To wartość zmieniająca się codziennie, dlatego jest udostępniana bezpłatnie na ekranie, a ten dokument składa się z niezmiennej analizy natywnego wykresu i prognozy na ten rok.",
        "Płatności krajowe można dokonywać za pośrednictwem Toss Payments przy użyciu kart kredytowych, debetowych oraz płatności mobilnych (Toss Pay, Kakao Pay, Naver Pay, Payco itp.), a płatności zagraniczne są realizowane przez PortOne za pośrednictwem PayPal. Ostateczna kwota jest zgodna z kwotą wyświetlaną na ekranie płatności.",
        "**Usługa nie przechowuje danych wprowadzonych przez użytkownika ani utworzonych plików PDF.** Po zatwierdzeniu płatności dokument jest tworzony i przesyłany, a na serwerze nie pozostaje nic. Dlatego pobrany plik musi być przechowywany przez użytkownika.",
        "W przypadku przerwania pobierania lub zgubienia pliku, można ponownie pobrać ten sam zamówiony plik **do 5 razy**. Jednak jeśli dane wejściowe znikną poza ekranem wyników, nie można ich ponownie utworzyć, dlatego prosimy o zapisanie pliku zaraz po płatności."
      ],
      "bullets": [
        "**Przed rozpoczęciem pobierania po płatności** można w każdej chwili anulować zamówienie i otrzymać pełny zwrot.",
        "**Po zakończeniu pobierania** zwrot z powodu zmiany zdania jest ograniczony. Jest to cyfrowa treść, która jest dostarczana natychmiast po płatności i nie można jej przywrócić, co odpowiada przyczynom ograniczenia zwrotów określonym w artykule 17 ust. 2 ustawy o ochronie konsumentów w transakcjach elektronicznych.",
        "**W przypadku, gdy dokument nie został utworzony z powodu błędu systemu, plik nie otwiera się lub kwota płatności różni się od zamówienia**, zostanie to rozwiązane poprzez ponowne wydanie lub pełny zwrot.",
        "**Reklamacje dotyczące treści wyników** nie są podstawą do zwrotu. Analiza saju jest materiałem referencyjnym z perspektywy tradycyjnej nauki o losie, a jej charakter został przedstawiony przed dokonaniem płatności (patrz punkt 1).",
        "Ponowne żądanie po wykorzystaniu wszystkich 5 możliwości ponownego wydania nie jest podstawą do zwrotu.",
        "**W przypadku, gdy osoba niepełnoletnia dokona płatności bez zgody ustawowego przedstawiciela**, może ona lub jej przedstawiciel prawny anulować tę płatność. Prosimy o kontakt pod poniższym adresem, aby uzyskać zwrot."
      ]
    },
    {
      "heading": "4. Wyniki obliczeń",
      "paragraphs": [
        "Wszystkie wyniki są obliczane zgodnie z publicznymi zasadami, więc przy wprowadzeniu tych samych wartości zawsze uzyskuje się te same wyniki.",
        "Jeśli nie wprowadzisz godziny urodzenia, obliczenia będą dokonywane z pominięciem znaku godzinowego (시주), co może prowadzić do różnych wyników. Im dokładniej wybierzesz miejsce urodzenia, tym dokładniejsze będą obliczenia znaku godzinowego.",
        "Obliczenia kalendarza są oparte na publicznej bibliotece obliczeniowej, a różne metody przetwarzania terminów i stref czasowych mogą prowadzić do różnych wyników kalendarza."
      ]
    },
    {
      "heading": "5. Odpowiedzialność użytkownika",
      "paragraphs": [
        "Użytkownik może wprowadzać daty urodzenia innych osób, jednak nie może wykorzystywać wyników w sposób, który mógłby zaszkodzić innym.",
        "Nie używaj wyników usługi jako podstawy do podejmowania decyzji dotyczących małżeństwa, rozwodu, zatrudnienia, transakcji itp., które wpływają na prawa innych osób. Usługa nie została stworzona do takich celów."
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
        "Nie ponosimy odpowiedzialności za szkody wynikłe z przerwy w działaniu usługi z powodu siły wyższej, awarii dostawców infrastruktury lub innych przyczyn, których nie możemy kontrolować."
      ]
    },
    {
      "heading": "8. Prawa własności intelektualnej",
      "paragraphs": [
        "Prawa do ekranu usługi, tekstów i implementacji zasad obliczeń należą do operatora. Użytkownik może zapisywać lub udostępniać wyniki wyłącznie w celach osobistych."
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
        "Nie są zapisywane w bazie danych ani w oddzielnych plikach. Nie ma rejestracji użytkowników, więc wprowadzone dane nie są powiązane z konkretną osobą."
      ]
    },
    {
      "heading": "2. Informacje zawarte w linku do wyników",
      "paragraphs": [
        "Adres ekranu wyników zawiera zakodowane dane wejściowe. Jednakże, te dane znajdują się za znakiem # w adresie, a zgodnie z normami internetowymi, zawartość za znakiem # nie jest przesyłana przez przeglądarkę do serwera. Dlatego otwierając link do wyników, w rejestrze dostępu serwera pozostaje tylko ścieżka adresu.",
        "Jeśli wyślesz link do innej osoby, ta osoba również będzie mogła zobaczyć te same wyniki. Link sam w sobie zawiera dane wejściowe, więc decyzja o udostępnieniu należy do użytkownika."
      ]
    },
    {
      "heading": "3. Informacje zbierane automatycznie",
      "paragraphs": [
        "Nie zbieramy informacji, które pozwalają na identyfikację użytkownika. Jednakże, minimalne zapisy potrzebne do działania usługi są automatycznie przechowywane przez dostawcę infrastruktury."
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
        "Dostawcy zewnętrzni, w tym Google, mogą zapisywać lub odczytywać ciasteczka w przeglądarce użytkownika.",
        "Google używa ciasteczek do wyświetlania reklam na podstawie historii odwiedzin tej i innych stron.",
        "Użytkownik może wyłączyć spersonalizowane reklamy w ustawieniach reklam Google (google.com/settings/ads). Nawet po wyłączeniu, reklamy będą nadal wyświetlane, ale ich związki z użytkownikiem będą mniejsze.",
        "Spersonalizowane reklamy od dostawców zewnętrznych można wyłączyć jednocześnie na stronie aboutads.info/choices.",
        "Istnieje również możliwość zablokowania ciasteczek w ustawieniach przeglądarki.",
        "Użytkownicy z Europejskiego Obszaru Gospodarczego, Wielkiej Brytanii i Szwajcarii są najpierw pytani o zgodę na użycie ciasteczek reklamowych."
      ]
    },
    {
      "heading": "5. Informacje przechowywane podczas płatności",
      "paragraphs": [
        "Podczas płatności za płatne produkty (raport PDF) informacje o zamówieniu są przechowywane w celu przetwarzania płatności oraz zgodnie z przepisami prawa dotyczącymi przechowywania zapisów transakcji.",
        "**Dane wprowadzone w interpretacji saju oraz stworzony PDF nie są przechowywane, nawet po dokonaniu płatności.** Zasada z punktu 1 pozostaje w mocy niezależnie od tego, czy dokonano płatności. Przechowywane elementy są następujące, a informacje identyfikujące użytkownika, takie jak imię, kontakt i adres, nie są w nich zawarte."
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
        "Nie przechowujemy danych osobowych, które pozwalają na identyfikację użytkownika, więc nie przekazujemy danych osobowych osobom trzecim. Przetwarzanie płatności jest zlecane poniższym firmom.",
        "Usługa korzysta z infrastruktury hostingowej {hostingProvider}, a w tym procesie zapisy dostępu z punktu 3 są przetwarzane zgodnie z polityką tej firmy.",
        "Płatności krajowe są przetwarzane przez Toss Payments, a płatności zagraniczne przez PayPal za pośrednictwem PortOne. Informacje o metodach płatności, takie jak numery kart i numery kont, są przetwarzane bezpośrednio przez te firmy, a usługa ich nie odbiera ani nie przechowuje."
      ]
    },
    {
      "heading": "7. Prawa użytkownika",
      "paragraphs": [
        "Nie przechowujemy danych wejściowych do interpretacji saju, więc nie ma podmiotu, od którego można by żądać dostępu, korekty lub usunięcia. Pozostałe zapisy zamówienia związane z płatnością są przechowywane przez okres określony przez prawo, więc nie możemy ich usunąć w tym czasie, a po upływie tego okresu są niszczone.",
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
      "heading": "10. Zmiany w polityce",
      "paragraphs": [
        "W przypadku zmiany niniejszej polityki, data wejścia w życie oraz treść zmian będą publikowane na tej stronie. W przypadku rzeczywistych zmian w przetwarzaniu, takich jak rozpoczęcie wyświetlania reklam lub sprzedaży płatnych produktów, najpierw poinformujemy o zmianach."
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
