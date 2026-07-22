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
            "Naming-Link to studio nazewnicze oparte na sztucznej inteligencji, oferujące cztery usługi: (1) dopasowywanie znaczeń hanja (znaków chińskich) do imion zapisanych w hangul, (2) przekształcanie imion koreańskich w imiona międzynarodowe, (3) przekształcanie imion obcych w imiona koreańskie oraz (4) zapisywanie imion międzynarodowych w hangul zgodnie z wymową.",
            "Wyniki stanowią materiał pomocniczy wspierający nadawanie imion i ich interpretację. Nie gwarantują one możliwości oficjalnej rejestracji, na przykład w rejestrach stanu cywilnego, paszportach, wizach, znakach towarowych ani dokumentach prawnych.",
          ],
        },
        {
          title: "2. Korzystanie przez członków i gości",
          paragraphs: [
            "Analiza imion oraz odblokowywanie kandydatów za obejrzenie reklamy są dostępne również bez konta. Rejestracja lub logowanie mogą być wymagane wyłącznie w przypadku funkcji wymagających konta, takich jak zamawianie gadżetów i przeglądanie historii zamówień.",
          ],
        },
        {
          title: "3. Wyniki AI i obowiązek weryfikacji",
          paragraphs: [
            "Rekomendacje AI zawierają odniesienia językowe, kulturowe i tradycyjne. Przed ostatecznym wyborem imienia użytkownik powinien potwierdzić jego odpowiedniość u właściwych instytucji, ekspertów, rodzimych użytkowników języka oraz poprzez weryfikację prawną i w zakresie znaków towarowych.",
          ],
        },
        {
          title: "4. Usługi płatne",
          paragraphs: [
            "Usługa dopasowywania znaczeń hanja oferuje następujące produkty szczegółowe: (1) szczegółowe opisy maksymalnie 5 kandydatów oraz kompleksowa analiza hanja: ₩2,900 (KRW); (2) rozszerzone opisy maksymalnie 10 kandydatów, kompleksowa analiza hanja oraz pamiątkowy plik PDF: ₩4,900; (3) szczegóły maksymalnie 10 kandydatów, kompleksowa analiza hanja, analiza saju (Cztery Filary) i Pięciu Żywiołów oraz pamiątkowy plik PDF: ₩9,900.",
            "W usługach przekształcania na imiona międzynarodowe, przekształcania na imiona koreańskie oraz zapisu wymowy w hangul może być oferowany produkt odblokowujący jednorazowo wszystkich pozostałych kandydatów bez reklam (₩990). Do czasu aktywacji funkcji płatności dostępne jest wyłącznie odblokowywanie za obejrzenie reklamy.",
            "Płatne raporty szczegółowe, wyniki analiz i pliki PDF pozostają dostępne do ponownego przeglądania i pobierania przez 24 godziny od dokonania płatności, po czym są automatycznie usuwane.",
            "Produkty fizyczne, takie jak gadżety z imieniem w hangul, mogą być oferowane po odrębnych cenach i na odrębnych warunkach. W przypadku każdego płatnego produktu treść produktu, cena, sposób dostarczenia oraz warunki zwrotu są podawane na ekranie przed dokonaniem płatności.",
          ],
        },
        {
          title: "5. Usługi z nagrodą za reklamę",
          paragraphs: [
            "Odblokowanie kandydatów poprzez obejrzenie reklamy następuje wyłącznie po prawidłowym potwierdzeniu nagrody przez dostawcę reklam. Zautomatyzowane odtwarzanie reklam, manipulowanie nagrodami oraz nietypowe, powtarzające się żądania mogą podlegać ograniczeniom.",
          ],
        },
        {
          title: "6. Działania zabronione",
          paragraphs: [
            "Zabronione są: wprowadzanie danych osobowych innych osób bez ich zgody, generowanie imion w celach dyskryminacyjnych, nienawistnych lub w celu podszywania się, zautomatyzowane nadmierne żądania, powodowanie zakłóceń w działaniu serwisu oraz fałszywe przedstawianie wyników jako oficjalnie certyfikowanych.",
          ],
        },
        {
          title: "7. Ograniczenie odpowiedzialności",
          paragraphs: [
            "O ile nie zachodzi wina umyślna lub rażące niedbalstwo, spółka nie ponosi odpowiedzialności za szkody pośrednie, utratę spodziewanych korzyści, odmowę oficjalnej rejestracji ani spory z osobami trzecimi wynikające z korzystania z rekomendacji AI.",
          ],
        },
        {
          title: "8. Kontakt",
          paragraphs: [`Zapytania dotyczące usługi: ${companyInfo.email}`],
        },
      ],
    },
    privacy: {
      title: "Polityka prywatności",
      description: `Niniejsza polityka określa zasady przetwarzania danych osobowych w serwisie ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Przetwarzane dane osobowe",
          paragraphs: [
            "Podczas korzystania z usług nazewniczych jako gość imię, data i godzina urodzenia, kraj, język, cel korzystania oraz wskazówki dotyczące wymowy są przetwarzane tymczasowo w procesie generowania wyników analizy, jednak wprowadzone dane i wygenerowane wyniki nie są zapisywane w bazie danych serwisu.",
            "Przy zakupie płatnego raportu szczegółowego identyfikatory zamówienia, status płatności oraz dane wejściowe i wyniki analizy niezbędne do wygenerowania raportu są przetwarzane przez okres przechowywania (24 godziny od płatności). Dane instrumentów płatniczych, takie jak numery kart, są przetwarzane bezpośrednio przez operatora płatności; spółka ich nie przechowuje.",
            "Wyłącznie przy korzystaniu z funkcji zamawiania gadżetów dodatkowo mogą być przetwarzane: imię i nazwisko zamawiającego, adres e-mail, numer telefonu, adres dostawy, status płatności oraz informacje o realizacji zamówienia.",
            "W celu zapewnienia stabilności serwisu i zapobiegania nadużyciom możemy przetwarzać minimalne logi operacyjne: zanonimizowany hash odwiedzającego zmieniany codziennie, czas żądania, rodzaj usługi, liczbę bezpłatnych użyć, zużycie tokenów AI, czas odpowiedzi, status przetwarzania oraz zdarzenia wyświetleń reklam i przyznania nagród.",
          ],
        },
        {
          title: "2. Cele przetwarzania danych osobowych",
          paragraphs: [
            "Dane osobowe są przetwarzane w celu: rekomendowania imion na podstawie wprowadzonych danych, analizy wymowy, analizy językowej i kulturowej według krajów, egzekwowania limitów bezpłatnego użycia, weryfikacji nagród za reklamy, obsługi zapytań klientów, realizacji płatności i dostaw oraz zapobiegania nadużyciom.",
          ],
        },
        {
          title: "3. Przechowywanie i usuwanie",
          paragraphs: [
            "Dane wejściowe i wyniki analizy są przechowywane na koncie wyłącznie wtedy, gdy zalogowany członek wyraźnie wybierze opcję ich zapisania, i są usuwane, gdy członek je usunie lub gdy ustanie cel przechowywania. Dane wejściowe i wyniki gości oraz członków, którzy nie wybrali zapisania, nie są przechowywane.",
            "Dane wejściowe, wyniki analizy oraz pliki PDF płatnych raportów szczegółowych są automatycznie usuwane po upływie 24 godzin od dokonania płatności. Zapisy transakcji płatności i zamówień są przechowywane odrębnie przez ustawowe okresy wymagane właściwymi przepisami prawa.",
            "Szczegółowe dane dostawy są usuwane lub anonimizowane po upływie okresu niezbędnego do realizacji zamówienia, obsługi zwrotów i rozstrzygania sporów.",
          ],
        },
        {
          title: "4. Udostępnianie osobom trzecim i powierzenie przetwarzania",
          paragraphs: [
            "W celu prowadzenia serwisu niezbędne informacje mogą być przetwarzane przez lub powierzane następującym podmiotom: Supabase (baza danych i uwierzytelnianie), Vercel (hosting), OpenAI API (analiza AI), sieci reklamowe, operator płatności (PortOne) oraz partnerzy zajmujący się dostawą i produkcją.",
          ],
        },
        {
          title: "5. Możliwość przekazywania danych za granicę",
          paragraphs: [
            "W ramach niektórych procesów przetwarzania, takich jak hosting w chmurze, uwierzytelnianie, wywołania API AI, reklamy i wysyłka e-maili, dane osobowe mogą być przetwarzane na serwerach zagranicznych. Kraje docelowe, podmioty przetwarzające, cele i okresy przechowywania zostaną szczegółowo podane po ostatecznym ustaleniu dostawców usług.",
          ],
        },
        {
          title: "6. Prawa użytkowników",
          paragraphs: [
            "Użytkownik może żądać dostępu do swoich danych osobowych, ich sprostowania, usunięcia lub wstrzymania przetwarzania, a także wycofać zgodę. Żądania przyjmowane są za pośrednictwem adresu e-mail centrum obsługi klienta i realizowane po weryfikacji tożsamości.",
          ],
        },
        {
          title: "7. Inspektor ochrony danych osobowych",
          paragraphs: [
            `Osoba odpowiedzialna: ${companyInfo.privacyOfficer}`,
            `E-mail: ${companyInfo.email}`,
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
            "Po aktywacji funkcji płatności zakres możliwych zwrotów może się różnić w zależności od sposobu dostarczenia danego produktu, momentu rozpoczęcia produkcji oraz statusu pobrania. Szczegółowe warunki są podawane na ekranie produktu przed dokonaniem płatności.",
          ],
        },
        {
          title: "2. Szczegółowe raporty hanja (₩2,900 / ₩4,900 / ₩9,900)",
          paragraphs: [
            "Anulowanie po dokonaniu płatności jest możliwe, dopóki nie rozpoczęło się generowanie szczegółowej analizy AI. Po zakończeniu generowania, gdy raport staje się dostępny do przeglądania lub pobrania, zwrot z powodu zwykłej zmiany zdania może być ograniczony.",
            "W przypadku potwierdzenia błędów w treści, niepowodzenia generowania z powodu awarii systemu lub niezgodności kwoty płatności raport zostanie wydany ponownie lub nastąpi zwrot pieniędzy. Zakończenie możliwości pobrania wskutek upływu okresu przechowywania (24 godziny od płatności) nie stanowi podstawy do zwrotu.",
          ],
        },
        {
          title: "3. Jednorazowe odblokowanie wszystkich kandydatów (₩990)",
          paragraphs: [
            "Jednorazowe odblokowanie kandydatów w usługach przekształcania na imiona międzynarodowe, przekształcania na imiona koreańskie oraz zapisu wymowy w hangul to treść cyfrowa dostarczana natychmiast po dokonaniu płatności. Anulowanie jest możliwe przed rozpoczęciem przeglądania kandydatów; po rozpoczęciu przeglądania zwrot z powodu zwykłej zmiany zdania może być ograniczony.",
            "Jeżeli z powodu błędu systemu kandydaci nie zostaną prawidłowo odblokowani, zapewniamy ponowne dostarczenie lub zwrot pieniędzy.",
          ],
        },
        {
          title: "4. Gadżety wykonywane na zamówienie",
          paragraphs: [
            "Produkty personalizowane można anulować do momentu rozpoczęcia produkcji. Po rozpoczęciu produkcji zwrot z powodu zwykłej zmiany zdania może być ograniczony, a literówki, uszkodzenia, błędy produkcyjne lub problemy z dostawą są rozpatrywane po weryfikacji poprzez wymianę, ponowne wykonanie lub zwrot pieniędzy — w zależności od tego, co jest właściwe.",
          ],
        },
        {
          title: "5. Odblokowanie za obejrzenie reklamy",
          paragraphs: [
            "Korzyści uzyskiwane za obejrzenie reklamy nie są produktami płatnymi. Jeżeli nagroda nie zostanie przyznana z powodu błędu sieci reklamowej, należy ponowić próbę w serwisie lub skontaktować się z centrum obsługi klienta.",
          ],
        },
        {
          title: "6. Kontakt",
          paragraphs: [`Zapytania dotyczące zwrotów: ${companyInfo.email}`],
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
          title: "Analiza podstawowa (bezpłatna)",
          paragraphs: [
            "Analiza podstawowa czterech usług — dopasowywania znaczeń hanja (znaków chińskich), przekształcania na imiona międzynarodowe, przekształcania na imiona koreańskie oraz zapisu wymowy w hangul — jest dostępna bezpłatnie dla gości; mogą obowiązywać dzienne limity użycia.",
          ],
        },
        {
          title: "Korzystanie z nagrodą za reklamę",
          paragraphs: [
            "Odblokowanie kandydata po obejrzeniu reklamy to korzyść reklamowa udostępniana bez dodatkowej płatności. Jedna reklama odblokowuje jednego kolejnego kandydata. Dostępność może się różnić w zależności od dostępności reklam, kraju, urządzenia lub zasad dostawcy reklam.",
          ],
        },
        {
          title: "Produkty szczegółowe dopasowywania znaczeń hanja",
          paragraphs: [
            "Szczegółowe opisy maksymalnie 5 kandydatów oraz kompleksowa analiza hanja: ₩2,900 (KRW)",
            "Rozszerzone opisy maksymalnie 10 kandydatów, kompleksowa analiza hanja oraz pamiątkowy plik PDF: ₩4,900",
            "Szczegóły maksymalnie 10 kandydatów, kompleksowa analiza hanja, analiza saju (Cztery Filary) i Pięciu Żywiołów oraz pamiątkowy plik PDF: ₩9,900",
            "Płatne raporty i pliki PDF pozostają dostępne do ponownego przeglądania i pobierania przez 24 godziny od płatności, po czym są automatycznie usuwane.",
          ],
        },
        {
          title: "Jednorazowe odblokowanie wszystkich kandydatów",
          paragraphs: [
            "Jednorazowe odblokowanie wszystkich pozostałych kandydatów bez reklam w usługach przekształcania na imiona międzynarodowe, przekształcania na imiona koreańskie oraz zapisu wymowy w hangul: ₩990 (funkcja płatności w przygotowaniu)",
          ],
        },
        {
          title: "Gadżety z imieniem w hangul",
          paragraphs: [
            "Ceny poszczególnych produktów fizycznych, takich jak pieczątka z imieniem, koszty dostawy i czas produkcji są podawane odrębnie dla każdego produktu.",
          ],
        },
        {
          title: "Informacja przed pełnym uruchomieniem płatności",
          paragraphs: [
            "Po ostatecznym ustaleniu weryfikacji operatora płatności (PG), rejestracji działalności w zakresie sprzedaży wysyłkowej oraz warunków partnerstwa produkcyjnego rzeczywista kwota płatności, koszty dostawy, czas produkcji i warunki zwrotu zostaną ponownie podane na ekranie każdego produktu.",
          ],
        },
      ],
    },
  },
};

export default content;
