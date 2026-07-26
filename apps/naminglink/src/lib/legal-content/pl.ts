import { companyInfo, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import type { LegalLocaleContent } from "./types";

const content: LegalLocaleContent = {
  labels: {
    effectiveDate: "Data wejścia w życie",
    referenceDate: "Stan na",
    login: "Zaloguj się",
    close: "Zamknij",
  },
  documents: {
    terms: {
      title: "Regulamin",
      description: `Niniejszy regulamin określa warunki korzystania z serwisu ${companyInfo.serviceName} oraz zakres świadczonych usług.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Charakter usługi",
          paragraphs: [
            "Naming-Link jest studiem nazewnictwa opartym na sztucznej inteligencji, które oferuje cztery usługi. ① Dopasowanie znaczenia znaków chińskich do imion w języku koreańskim ② Przekształcenie imion koreańskich w imiona globalne ③ Przekształcenie imion zagranicznych w imiona koreańskie ④ Transkrypcja imion globalnych na język koreański zgodnie z wymową.",
            "Wyniki są materiałami pomocniczymi w zakresie nadawania imion i interpretacji, nie gwarantują możliwości oficjalnej rejestracji w takich dokumentach jak rejestracja stanu cywilnego, paszporty, wizy, znaki towarowe, dokumenty prawne itp.",
          ],
        },
        {
          title: "2. Użytkownicy zarejestrowani i niezarejestrowani",
          paragraphs: [
            "Analiza imion oraz przegląd kandydatów w systemie wynagradzania za reklamy są dostępne również dla użytkowników niezarejestrowanych. Rejestracja lub logowanie są wymagane jedynie w przypadku funkcji, które wymagają konta, takich jak zamówienia towarów i sprawdzanie historii zamówień.",
          ],
        },
        {
          title: "3. Odpowiedzialność za wyniki AI i przegląd",
          paragraphs: [
            "Wyniki rekomendacji AI zawierają odniesienia językowe, kulturowe i tradycyjne. Użytkownicy powinni potwierdzić odpowiedniość wyboru imienia przed podjęciem decyzji, konsultując się z odpowiednimi instytucjami, ekspertami, lokalnymi użytkownikami oraz przeprowadzając przegląd prawny i znaków towarowych.",
          ],
        },
        {
          title: "4. Usługi płatne",
          paragraphs: [
            "Szczegółowe usługi dopasowania znaczenia znaków chińskich są następujące. ① Maksymalnie 5 kandydatów z szczegółowym opisem oraz kompleksowym opisem znaków chińskich: ₩2,900 ② Maksymalnie 10 kandydatów z rozszerzonym szczegółowym opisem, kompleksowym opisem znaków chińskich oraz PDF do pobrania: ₩4,900 ③ Maksymalnie 10 kandydatów z szczegółowym opisem, kompleksowym opisem znaków chińskich, analizą astrologiczną i PDF do pobrania: ₩9,900.",
            "W ramach usług przekształcania imion globalnych, przekształcania imion koreańskich oraz transkrypcji fonetycznej w języku koreańskim, może być dostępny produkt, który ujawnia wszystkie pozostałe kandydaty bez reklam w jednym kroku (płatność krajowa ₩990, płatność zagraniczna US$1.99). Przed aktywacją funkcji płatności dostępne są jedynie przeglądy w systemie wynagradzania za reklamy.",
            "Dla użytkowników globalnych dostępne są cyfrowe produkty: ④ Kompleksowy raport PDF dotyczący imion w języku koreańskim (US$9.99): sztuka nazw, interpretacja znaczenia oraz odniesienia do astrologii ⑤ PDF sztuki konwersji fonetycznej w języku koreańskim (US$2.99): sztuka nazw i wskazówki dotyczące wymowy ⑥ PDF pakietu sztuki imion (US$1.99): sztuka jednego wybranego imienia w różnych czcionkach. Ceny i liczba zastosowanych czcionek dla każdego produktu są zgodne z wartościami podanymi na ekranie.",
            "Płatne szczegółowe raporty i wyniki analizy, pliki PDF mogą być przeglądane i pobierane przez 24 godziny po zakończeniu płatności, a po upływie okresu przechowywania zostaną automatycznie usunięte.",
            "Fizyczne towary, takie jak pieczątki imienne, są oferowane w cenach ₩39,000 w kraju oraz US$34.99 za granicą (w tym koszty wysyłki międzynarodowej) w zależności od produktu. Wszystkie płatne produkty mają wyświetlane informacje o treści produktu, cenie, sposobie dostarczenia oraz warunkach zwrotu przed dokonaniem płatności.",
          ],
        },
        {
          title: "5. Usługi wynagradzania za reklamy",
          paragraphs: [
            "Odblokowanie kandydatów poprzez oglądanie reklam ma zastosowanie tylko w przypadku, gdy normalne potwierdzenie wynagrodzenia przez dostawcę reklam zostało zakończone. Automatyczne odtwarzanie reklam, manipulacja wynagrodzeniem oraz nienormalne powtarzające się żądania mogą być ograniczone.",
          ],
        },
        {
          title: "6. Zakazane działania",
          paragraphs: [
            "Zabronione jest wprowadzanie danych osobowych innych osób bez zgody, generowanie imion w celu dyskryminacji, nienawiści lub podszywania się, automatyczne nadmierne żądania, powodowanie zakłóceń w usłudze oraz fałszywe oficjalne certyfikaty wyników.",
          ],
        },
        {
          title: "7. Ograniczenie odpowiedzialności",
          paragraphs: [
            "Firma nie ponosi odpowiedzialności za pośrednie szkody, utratę oczekiwanych korzyści, odmowę rejestracji oficjalnej oraz spory z osobami trzecimi wynikające z użycia wyników rekomendacji AI, chyba że wystąpiły one z winy umyślnej lub rażącego niedbalstwa.",
          ],
        },
        {
          title: "8. Kontakt",
          paragraphs: [
            "Zapytania dotyczące usługi: platforest.inc@gmail.com",
          ],
        },
      ],
    },
    privacy: {
      title: "Polityka prywatności",
      description: `Niniejsza polityka określa zasady przetwarzania danych osobowych w serwisie ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Przetwarzane kategorie danych osobowych",
          paragraphs: [
            "Podczas korzystania z usługi nazewnictwa dla osób niebędących członkami, imię, data urodzenia, czas urodzenia, kraj, język, cel użycia oraz wskazówki dotyczące wymowy są tymczasowo przetwarzane w trakcie procesu generowania wyników analizy, jednak wprowadzone dane i wyniki generacji nie są przechowywane w bazie danych usługi.",
            "Podczas rejestracji i logowania przetwarzany jest adres e-mail oraz historia logowania (historia autoryzacji).",
            "Podczas płatności za szczegółowy raport płatny, informacje identyfikacyjne zamówienia, status płatności oraz dane wejściowe i wyniki analizy potrzebne do generowania raportu są przetwarzane przez okres przechowywania (24 godziny po płatności). Informacje o metodach płatności, takie jak numer karty, są przetwarzane bezpośrednio przez agencję płatniczą, a firma ich nie przechowuje.",
            "Dodatkowe informacje, takie jak imię zamawiającego, adres e-mail, dane kontaktowe, adres dostawy, status płatności oraz informacje o przetwarzaniu zamówienia, mogą być przetwarzane tylko podczas korzystania z funkcji zamawiania towarów.",
            "W celu zapewnienia stabilności usługi oraz zapobiegania nadużyciom, mogą być przetwarzane minimalne logi operacyjne, takie jak hasz odwiedzających bez identyfikacji, czas żądania, rodzaj usługi, liczba darmowych użyć, czas odpowiedzi AI, status przetwarzania oraz ekspozycja reklamowa i wydarzenia związane z nagrodami, które zmieniają się codziennie.",
          ],
        },
        {
          title: "2. Cel przetwarzania danych osobowych",
          paragraphs: [
            "Przetwarzamy dane osobowe w celu rekomendacji imion opartych na wprowadzonych danych, analizy wymowy, analizy języków i kultur według krajów, ograniczenia darmowego użycia, weryfikacji nagród reklamowych, obsługi zapytań klientów, przetwarzania płatności i dostaw oraz zapobiegania nadużyciom.",
          ],
        },
        {
          title: "3. Przechowywanie i usuwanie",
          paragraphs: [
            "Dane wejściowe i wyniki analizy są przechowywane na koncie tylko wtedy, gdy zalogowany użytkownik wyraźnie wybierze opcję przechowywania wyników, a po ich usunięciu przez użytkownika lub zakończeniu celu przechowywania są usuwane. Dane wejściowe i wyniki użytkowników niebędących członkami oraz tych, którzy nie wybrali opcji przechowywania, nie są przechowywane.",
            "Dane wejściowe, wyniki analizy oraz pliki PDF szczegółowego raportu płatnego są automatycznie usuwane po upływie 24 godzin od zakończenia płatności. Historia transakcji płatności i zamówień jest przechowywana oddzielnie zgodnie z ustawowymi okresami przechowywania określonymi w odpowiednich przepisach prawnych.",
            "Szczegóły dostawy zamówienia towarów (imię i nazwisko zamawiającego, adres e-mail, numer kontaktowy, adres dostawy, uwagi, tekst do wygrawerowania na pieczęci) będą niszczone po upływie 90 dni od dnia zakończenia dostawy lub anulowania zamówienia. Informacje wprowadzone w przypadku zamówienia, które nie zostało zrealizowane do etapu płatności, będą niszczone po upływie 24 godzin. Po zniszczeniu, dane dotyczące płatności i historii zamówień będą przechowywane zgodnie z ustawowymi okresami przechowywania określonymi w odpowiednich przepisach prawa.",
          ],
        },
        {
          title: "4. Udostępnianie danych osobowych osobom trzecim i zlecanie przetwarzania",
          paragraphs: [
            "W celu prowadzenia usługi, informacje niezbędne do przetwarzania lub zlecania mogą być przekazywane do Supabase (baza danych, autoryzacja), Vercel (hosting), OpenAI API (analiza AI), sieci reklamowych, agencji płatniczych (PortOne) oraz partnerów zajmujących się dostawą i produkcją.",
          ],
        },
        {
          title: "5. Przekazywanie danych osobowych za granicę",
          paragraphs: [
            "Firma przekazuje dane osobowe za granicę w celu świadczenia usług, jak opisano poniżej. Przekazanie odbywa się za pomocą transmisji przez sieć telekomunikacyjną.",
            "① OpenAI, L.L.C. (USA) — Przekazywane dane: imię, data urodzenia, czas urodzenia, płeć, kraj, język itp. — Cel przekazania: analiza imion, wymowy i znaczenia oparta na AI — Okres przechowywania i wykorzystania: czas świadczenia usługi (dane wejściowe nie są wykorzystywane do uczenia modeli zgodnie z polityką OpenAI i są przechowywane maksymalnie przez 30 dni w celach monitorowania nadużyć, a następnie usuwane).",
            "② Supabase, Inc. (USA) — Przekazywane dane: informacje o zamówieniu i statusie płatności, adres e-mail członka, dane wejściowe i wyniki płatnych raportów (24 godziny po płatności), imię zamawiającego, dane kontaktowe i adres dostawy podczas zamawiania towarów — Cel przekazania: baza danych, autoryzacja, przechowywanie — Okres przechowywania i wykorzystania: czas świadczenia usługi lub do końca okresu przechowywania dla poszczególnych danych.",
            "③ Vercel, Inc. (USA) — Przekazywane dane: informacje o dostępie i żądaniach przesyłane w trakcie korzystania z usługi — Cel przekazania: hosting aplikacji — Okres przechowywania i wykorzystania: czas świadczenia usługi.",
            "Użytkownicy mogą odmówić zgody na przekazywanie danych osobowych za granicę, jednakże ponieważ przetwarzanie to jest niezbędne do świadczenia usług, odmowa może skutkować ograniczeniem dostępu do usługi.",
          ],
        },
        {
          title: "6. Prawa użytkowników",
          paragraphs: [
            "Użytkownicy mogą żądać dostępu do danych osobowych, ich poprawy, usunięcia, wstrzymania przetwarzania oraz wycofania zgody. Żądania są przyjmowane za pośrednictwem e-maila do centrum obsługi klienta i są przetwarzane po weryfikacji tożsamości.",
          ],
        },
        {
          title: "7. Inspektor ochrony danych osobowych",
          paragraphs: [
            "Osoba odpowiedzialna: Gwak Eun-ha",
            "E-mail: platforest.inc@gmail.com",
          ],
        },
      ],
    },
    refund: {
      title: "Polityka zwrotów i anulowania",
      description:
        "Niniejsza polityka określa zasady anulowania i zwrotów dotyczące produktów cyfrowych oraz gadżetów wykonywanych na zamówienie.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Zasady ogólne",
          paragraphs: [
            "Po aktywacji funkcji płatności zakres możliwości zwrotu może się różnić w zależności od sposobu dostarczenia produktu, momentu rozpoczęcia produkcji oraz możliwości pobrania. Szczegółowe warunki będą podane na ekranie produktu przed dokonaniem płatności.",
          ],
        },
        {
          title: "2. Szczegółowy raport o znakach (₩2,900·₩4,900·₩9,900)",
          paragraphs: [
            "Można anulować zamówienie przed rozpoczęciem generowania szczegółowej analizy AI po dokonaniu płatności. Po zakończeniu generowania analizy i uzyskaniu możliwości przeglądania lub pobierania, zwroty z powodu zmiany zdania mogą być ograniczone.",
            "W przypadku stwierdzenia błędów w treści, awarii systemu prowadzącej do niepowodzenia w generowaniu, lub niezgodności kwoty płatności, zostanie przeprowadzona ponowna emisja lub zwrot. Upłynięcie okresu przechowywania (24 godziny po dokonaniu płatności) skutkuje zakończeniem możliwości pobrania i nie stanowi podstawy do zwrotu.",
          ],
        },
        {
          title: "3. Całkowite ujawnienie kandydatów (krajowe ₩990 · zagraniczne US$1.99)",
          paragraphs: [
            "Całkowite ujawnienie kandydatów dla usług konwersji nazw globalnych, konwersji nazw koreańskich oraz transkrypcji fonetycznej w hangulu jest cyfrową treścią dostarczaną natychmiast po dokonaniu płatności. Można anulować zamówienie przed rozpoczęciem przeglądania kandydatów, natomiast po przeglądaniu zwroty z powodu zmiany zdania mogą być ograniczone.",
            "W przypadku, gdy kandydaci nie są prawidłowo ujawniani z powodu błędu systemu, zostanie przeprowadzona ponowna emisja lub zwrot.",
          ],
        },
        {
          title: "4. Globalny produkt PDF (US$9.99·US$2.99·US$1.99)",
          paragraphs: [
            "Kompleksowy raport o imionach w hangulu (US$9.99), sztuka konwersji fonetycznej w hangulu (US$2.99), pakiet sztuki imienia (US$1.99) to cyfrowe treści generowane po dokonaniu płatności. Można anulować zamówienie przed rozpoczęciem generowania PDF, natomiast po zakończeniu generowania i uzyskaniu możliwości pobrania, zwroty z powodu zmiany zdania mogą być ograniczone.",
            "W przypadku stwierdzenia niepowodzenia w generowaniu, błędów w treści lub niezgodności kwoty płatności, zostanie przeprowadzona ponowna emisja lub zwrot. Upłynięcie okresu przechowywania (24 godziny po dokonaniu płatności) skutkuje zakończeniem możliwości pobrania i nie stanowi podstawy do zwrotu.",
          ],
        },
        {
          title: "5. Spersonalizowane produkty (np. pieczątki z imieniem)",
          paragraphs: [
            "Produkty spersonalizowane, takie jak pieczątki z imieniem (krajowe ₩39,000 · zagraniczne US$34.99, w tym międzynarodowe koszty wysyłki), można anulować do momentu rozpoczęcia produkcji. Po rozpoczęciu produkcji, ponieważ tekst grawerunku jest ustalany indywidualnie, zwroty z powodu zmiany zdania mogą być ograniczone, a błędy, uszkodzenia, błędna produkcja lub problemy z dostawą będą rozpatrywane w odpowiedni sposób poprzez wymianę, ponowną produkcję lub zwrot po weryfikacji.",
          ],
        },
        {
          title: "5. Odblokowanie z reklamą",
          paragraphs: [
            "Korzyści z oglądania reklam nie są produktem płatnym. W przypadku, gdy nagroda nie została przyznana z powodu błędu w sieci reklamowej, można to rozwiązać poprzez ponowną próbę w usłudze lub kontakt z obsługą klienta.",
          ],
        },
        {
          title: "6. Kontakt",
          paragraphs: [
            "Zapytania dotyczące zwrotów: platforest.inc@gmail.com",
          ],
        },
      ],
    },
    pricing: {
      title: "Cennik",
      description:
        "Niniejszy cennik przedstawia zakres usług bezpłatnych oraz ceny produktów płatnych.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "Podstawowa analiza (bezpłatnie)",
          paragraphs: [
            "Podstawowa analiza czterech usług: dopasowanie znaczenia znaków, globalna konwersja nazw, konwersja nazw koreańskich oraz transkrypcja fonetyczna w Hangulu jest dostępna bezpłatnie dla użytkowników niezarejestrowanych, z możliwością nałożenia ograniczeń dotyczących dziennego zużycia.",
          ],
        },
        {
          title: "Usługa z nagrodą za oglądanie reklam",
          paragraphs: [
            "Odblokowanie kandydatów po obejrzeniu reklamy jest oferowane jako korzyść reklamowa bez dodatkowej opłaty. Po każdej reklamie odblokowywany jest jeden kolejny kandydat. Dostępność może się różnić w zależności od zapasów reklamowych, kraju, urządzenia lub polityki dostawcy reklam.",
          ],
        },
        {
          title: "Szczegółowy produkt dopasowania znaczenia znaków",
          paragraphs: [
            "Szczegółowy opis maksymalnie 5 kandydatów oraz kompleksowe szczegóły dotyczące znaków: ₩2,900",
            "Rozszerzony szczegółowy opis maksymalnie 10 kandydatów, kompleksowe szczegóły dotyczące znaków oraz PDF do pobrania: ₩4,900",
            "Szczegóły maksymalnie 10 kandydatów, kompleksowe szczegóły dotyczące znaków, analiza BaZi i pięciu elementów oraz PDF do pobrania: ₩9,900",
            "Płatne raporty i PDF mogą być przeglądane i pobierane ponownie w ciągu 24 godzin po dokonaniu płatności, a następnie są automatycznie usuwane.",
          ],
        },
        {
          title: "Całkowite ujawnienie kandydatów",
          paragraphs: [
            "Globalna konwersja nazw, konwersja nazw koreańskich oraz usługa transkrypcji fonetycznej w Hangulu umożliwiają jednorazowe ujawnienie wszystkich pozostałych kandydatów bez reklam: płatność krajowa ₩990, płatność zagraniczna US$1.99 (funkcja płatności w przygotowaniu)",
          ],
        },
        {
          title: "Globalny produkt PDF",
          paragraphs: [
            "Kompleksowy raport PDF dotyczący nazw w Hangulu (sztuka nazw, interpretacja znaczenia, odniesienia do BaZi i pięciu elementów dla wszystkich rekomendowanych kandydatów): US$9.99",
            "PDF sztuki konwersji fonetycznej w Hangulu (sztuka nazw w wybranym kroju pisma oraz wskazówki dotyczące wymowy): US$2.99",
            "Pakiet sztuki nazw PDF (sztuka dla jednego wybranego imienia w wybranym kroju pisma): US$1.99",
            "Ceny oraz liczba zastosowanych krojów pisma są zgodne z wartościami podanymi na ekranie, a PDF mogą być pobierane ponownie w ciągu 24 godzin po dokonaniu płatności, a następnie są automatycznie usuwane. (funkcja płatności w przygotowaniu)",
          ],
        },
        {
          title: "Towary z nazwami w Hangulu",
          paragraphs: [
            "Stempel z imieniem: krajowa cena ₩39,000 · zagraniczna cena US$34.99 (w tym koszty wysyłki międzynarodowej). Inne fizyczne towary będą miały osobno podane ceny, koszty wysyłki oraz czas produkcji.",
          ],
        },
        {
          title: "Informacje przed dokonaniem płatności",
          paragraphs: [
            "Po zatwierdzeniu oceny PG, zgłoszeniu działalności handlowej oraz ustaleniu warunków współpracy produkcyjnej, rzeczywista kwota płatności, koszty wysyłki, czas produkcji oraz warunki zwrotu będą ponownie podane na ekranie produktu.",
          ],
        },
      ],
    },
  },
};

export default content;
