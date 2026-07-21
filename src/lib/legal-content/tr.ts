import { companyInfo, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import type { LegalLocaleContent } from "./types";

const content: LegalLocaleContent = {
  labels: {
    effectiveDate: "Yürürlük tarihi",
    referenceDate: "Geçerlilik tarihi",
    login: "Giriş yap",
  },
  documents: {
    terms: {
      title: "Kullanım Koşulları",
      description: `Bu koşullar, ${companyInfo.serviceName} hizmetinin kullanım şartlarını ve kapsamını açıklar.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Hizmetin Niteliği",
          paragraphs: [
            "Naming-Link, yapay zekâ destekli bir isim stüdyosu olarak şu dört hizmeti sunar: (1) Korece isimlere anlamlı Hanja (Çince karakterler) eşleştirme, (2) Korece isimleri küresel isimlere dönüştürme, (3) yabancı isimleri Korece isimlere dönüştürme ve (4) küresel isimleri telaffuzlarına göre Hangıl (Hangul) alfabesiyle yazma.",
            "Sonuçlar, isim seçimine ve yorumlamaya yardımcı olmayı amaçlayan referans materyalidir; aile kütüğü, pasaport, vize, marka tescili veya hukuki belgeler gibi resmi kayıtlara uygunluğu garanti etmez.",
          ],
        },
        {
          title: "2. Üyeler ve Misafir Kullanıcılar",
          paragraphs: [
            "İsim analizi ve reklam ödüllü aday görüntüleme, üye olmayan kullanıcılar tarafından da kullanılabilir. Üyelik kaydı veya giriş, yalnızca hediyelik ürün siparişi ve sipariş geçmişini görüntüleme gibi hesap gerektiren özellikler için istenebilir.",
          ],
        },
        {
          title: "3. Yapay Zekâ Sonuçları ve İnceleme Sorumluluğu",
          paragraphs: [
            "Yapay zekâ öneri sonuçları dilsel, kültürel ve geleneksel referanslar içerir. Kullanıcılar, nihai isim seçiminden önce ilgili kurumlar, uzmanlar, yerel konuşurlar ve hukuki veya marka incelemesi yoluyla ismin uygunluğunu doğrulamalıdır.",
          ],
        },
        {
          title: "4. Ücretli Hizmetler",
          paragraphs: [
            "Hanja anlam eşleştirme hizmetinin ayrıntılı ürünleri şunlardır: (1) En fazla 5 aday için ayrıntılı açıklama ve kapsamlı Hanja analizi: ₩2,900 (KRW); (2) en fazla 10 aday için genişletilmiş ayrıntılı açıklama, kapsamlı Hanja analizi ve saklanabilir PDF: ₩4,900; (3) en fazla 10 aday için ayrıntılı açıklama, kapsamlı Hanja analizi, Saju (Dört Sütun) ve Beş Element analizi ve saklanabilir PDF: ₩9,900.",
            "Küresel isim dönüştürme, Korece isim dönüştürme ve Hangıl telaffuz yazımı hizmetlerinde, kalan tüm adayları reklamsız olarak tek seferde açan bir ürün (₩990) sunulabilir. Ödeme özellikleri etkinleştirilene kadar yalnızca reklam ödüllü görüntüleme sağlanır.",
            "Ücretli ayrıntılı raporlar, analiz sonuçları ve PDF dosyaları, ödemenin tamamlanmasından sonra 24 saat boyunca yeniden görüntülenebilir ve indirilebilir; saklama süresi dolduğunda otomatik olarak silinir.",
            "Korece isim hediyelik ürünleri gibi fiziksel ürünler ayrı fiyat ve koşullarla sunulabilir. Tüm ücretli ürünlerde ürün içeriği, fiyat, teslim yöntemi ve iade koşulları ödeme öncesinde ekranda bildirilir.",
          ],
        },
        {
          title: "5. Reklam Ödüllü Hizmetler",
          paragraphs: [
            "Reklam izleyerek aday kilidini açma, yalnızca reklam sağlayıcısının geçerli ödül doğrulaması tamamlandığında uygulanır. Otomatikleştirilmiş reklam oynatma, ödül manipülasyonu ve olağan dışı tekrarlanan istekler kısıtlanabilir.",
          ],
        },
        {
          title: "6. Yasak Davranışlar",
          paragraphs: [
            "Başkalarının kişisel verilerinin izinsiz girilmesi; ayrımcılık, nefret veya kimliğe bürünme amaçlı isim oluşturulması; otomatikleştirilmiş aşırı istekler; hizmetin aksamasına yol açılması ve sonuçların resmi olarak onaylanmış gibi yanlış biçimde sunulması yasaktır.",
          ],
        },
        {
          title: "7. Sorumluluğun Sınırlandırılması",
          paragraphs: [
            "Şirket, kast veya ağır ihmal bulunmadıkça, yapay zekâ öneri sonuçlarının kullanımından doğan dolaylı zararlardan, beklenen kâr kaybından, resmi kayıt başvurularının reddinden veya üçüncü taraflarla yaşanan uyuşmazlıklardan sorumlu değildir.",
          ],
        },
        {
          title: "8. İletişim",
          paragraphs: [`Hizmetle ilgili sorular: ${companyInfo.email}`],
        },
      ],
    },
    privacy: {
      title: "Gizlilik Politikası",
      description: `Bu politika, ${companyInfo.serviceName} hizmetinin kişisel verileri nasıl işlediğini açıklar.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. İşlenen Kişisel Veri Kategorileri",
          paragraphs: [
            "İsim hizmetlerinin üye olmadan kullanılması sırasında isim, doğum tarihi, doğum saati, ülke, dil, kullanım amacı ve telaffuz ipuçları, analiz sonuçlarının oluşturulması sürecinde geçici olarak işlenir; ancak girilen bilgiler ve oluşturulan sonuçlar hizmet veritabanına kaydedilmez.",
            "Ücretli ayrıntılı rapor satın alındığında; sipariş tanımlama bilgileri, ödeme durumu ile raporun oluşturulması için gereken girdiler ve analiz sonuçları, saklama süresi (ödemeden sonra 24 saat) boyunca işlenir. Kart numarası gibi ödeme aracı bilgileri doğrudan ödeme aracı kuruluşu tarafından işlenir; şirket bu bilgileri saklamaz.",
            "Yalnızca hediyelik ürün sipariş özelliği kullanıldığında; sipariş verenin adı, e-posta adresi, telefon numarası, teslimat adresi, ödeme durumu ve sipariş işleme bilgileri ek olarak işlenebilir.",
            "Hizmet kararlılığı ve kötüye kullanımın önlenmesi amacıyla; günlük olarak değişen kimliksizleştirilmiş ziyaretçi karma değeri (hash), istek zamanı, hizmet türü, ücretsiz kullanım sayısı, yapay zekâ token kullanımı, yanıt süresi, işlem durumu ile reklam gösterim ve ödül olayları asgari işletim günlükleri olarak işlenebilir.",
          ],
        },
        {
          title: "2. Kişisel Verilerin İşlenme Amaçları",
          paragraphs: [
            "Kişisel veriler; girdilere dayalı isim önerisi, telaffuz analizi, ülkeye göre dil ve kültür analizi, ücretsiz kullanım sınırlaması, reklam ödülü doğrulaması, müşteri sorularının yanıtlanması, ödeme ve teslimat işlemleri ile hizmetin kötüye kullanılmasının önlenmesi amaçlarıyla işlenir.",
          ],
        },
        {
          title: "3. Saklama ve İmha",
          paragraphs: [
            "Analiz girdileri ve sonuçları, yalnızca giriş yapmış bir üyenin sonuçları kaydetmeyi açıkça seçmesi hâlinde hesabında saklanır; üye bunları sildiğinde veya saklama amacı sona erdiğinde imha edilir. Üye olmayan kullanıcıların ve kaydetmeyi seçmeyen üyelerin girdileri ile sonuçları saklanmaz.",
            "Ücretli ayrıntılı raporların girdileri, analiz sonuçları ve PDF dosyaları, ödemenin tamamlanmasından 24 saat sonra otomatik olarak silinir. Ödeme ve sipariş işlem kayıtları, ilgili mevzuatın öngördüğü yasal saklama sürelerine göre ayrıca saklanır.",
            "Teslimat ayrıntıları; sipariş işleme, iade ve uyuşmazlık çözümü için gereken süre dolduğunda imha edilir veya kimliksizleştirilir.",
          ],
        },
        {
          title: "4. Üçüncü Taraflara Aktarım ve İşleme Faaliyetinin Devri",
          paragraphs: [
            "Hizmetin işletilmesi için gerekli bilgiler; Supabase (veritabanı ve kimlik doğrulama), Vercel (barındırma), OpenAI API (yapay zekâ analizi), reklam ağları, ödeme aracı kuruluşu (PortOne) ile teslimat ve üretim iş ortakları tarafından işlenebilir veya bunlara devredilebilir.",
          ],
        },
        {
          title: "5. Yurt Dışına Aktarım Olasılığı",
          paragraphs: [
            "Bulut barındırma, kimlik doğrulama, yapay zekâ API çağrıları, reklamcılık ve e-posta gönderimi gibi bazı işleme süreçlerinde kişisel veriler yurt dışındaki sunucularda işlenebilir. Aktarım yapılan ülkeler, veri işleyenler, amaçlar ve saklama süreleri, hizmet sağlayıcılar kesinleştiğinde ayrıntılı olarak bildirilecektir.",
          ],
        },
        {
          title: "6. Kullanıcı Hakları",
          paragraphs: [
            "Kullanıcılar; kişisel verilerine erişim, bunların düzeltilmesi, silinmesi, işlenmesinin durdurulması ve verdikleri onayın geri alınmasını talep edebilir. Talepler müşteri hizmetleri e-posta adresi üzerinden alınır ve kimlik doğrulamasının ardından işleme konulur.",
          ],
        },
        {
          title: "7. Kişisel Verilerin Korunması Sorumlusu",
          paragraphs: [
            `Sorumlu: ${companyInfo.privacyOfficer}`,
            `E-posta: ${companyInfo.email}`,
          ],
        },
      ],
    },
    refund: {
      title: "İade ve İptal Politikası",
      description:
        "Bu politika, dijital ürünler ile kişiye özel üretilen hediyelik ürünlerin iptal ve iade koşullarını açıklar.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Genel İlkeler",
          paragraphs: [
            "Ödeme özellikleri etkinleştirildiğinde; iade edilebilecek kapsam, her ürünün teslim yöntemine, üretime başlama zamanına ve indirme durumuna göre değişebilir. Ayrıntılı koşullar ödeme öncesinde ürün ekranında bildirilir.",
          ],
        },
        {
          title: "2. Ayrıntılı Hanja Raporları (₩2,900 / ₩4,900 / ₩9,900)",
          paragraphs: [
            "Ödeme sonrasında, yapay zekâ ayrıntılı analiz oluşturma işlemi başlamadan önce iptal mümkündür. Analiz oluşturma tamamlanıp rapor görüntülenebilir veya indirilebilir hâle geldikten sonra, yalnızca fikir değişikliğine dayanan iadeler kısıtlanabilir.",
            "İçerik hatası, sistem arızası nedeniyle oluşturma başarısızlığı veya ödeme tutarı uyuşmazlığı tespit edilirse, rapor yeniden düzenlenir veya ücret iade edilir. Saklama süresinin (ödemeden sonra 24 saat) dolması nedeniyle indirmenin sona ermesi iade sebebi sayılmaz.",
          ],
        },
        {
          title: "3. Tüm Adayların Tek Seferde Açılması (₩990)",
          paragraphs: [
            "Küresel isim dönüştürme, Korece isim dönüştürme ve Hangıl telaffuz yazımı hizmetlerinde adayların topluca açılması, ödemenin hemen ardından sunulan dijital bir içeriktir. Aday görüntüleme başlamadan önce iptal mümkündür; görüntüleme başladıktan sonra yalnızca fikir değişikliğine dayanan iadeler kısıtlanabilir.",
            "Adayların sistem hatası nedeniyle düzgün biçimde açılmaması hâlinde içerik yeniden sunulur veya ücret iade edilir.",
          ],
        },
        {
          title: "4. Kişiye Özel Üretilen Hediyelik Ürünler",
          paragraphs: [
            "Kişiye özel üretilen ürünler, üretime başlanana kadar iptal edilebilir. Üretime başlandıktan sonra yalnızca fikir değişikliğine dayanan iadeler kısıtlanabilir; yazım hatası, hasar, hatalı üretim veya teslimat sorunları, incelemenin ardından duruma uygun olarak değişim, yeniden üretim veya iade yoluyla çözülür.",
          ],
        },
        {
          title: "5. Reklam Yoluyla Kilit Açma",
          paragraphs: [
            "Reklam izleme karşılığı sunulan avantajlar ücretli ürün değildir. Reklam ağı hatası nedeniyle ödülün verilmemesi hâlinde, hizmet içinde yeniden deneme yapılır veya müşteri hizmetlerine başvurularak çözülür.",
          ],
        },
        {
          title: "6. İletişim",
          paragraphs: [`İadeyle ilgili sorular: ${companyInfo.email}`],
        },
      ],
    },
    pricing: {
      title: "Fiyat Rehberi",
      description:
        "Bu rehber, ücretsiz hizmetlerin kapsamını ve ücretli ürünlerin fiyatlarını açıklar.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "Temel Analiz (Ücretsiz)",
          paragraphs: [
            "Hanja (Çince karakterler) anlam eşleştirme, küresel isim dönüştürme, Korece isim dönüştürme ve Hangıl (Hangul) telaffuz yazımı olmak üzere dört hizmetin temel analizi, üye olmayan kullanıcılara ücretsiz sunulur; günlük kullanım sınırları uygulanabilir.",
          ],
        },
        {
          title: "Reklam Ödüllü Kullanım",
          paragraphs: [
            "Reklam izledikten sonra aday kilidinin açılması, ek ödeme gerektirmeyen reklam tabanlı bir avantajdır. Her reklam izlemesi bir sonraki adayı açar. Kullanılabilirlik; reklam envanterine, ülkeye, cihaza veya reklam sağlayıcısının politikasına göre değişebilir.",
          ],
        },
        {
          title: "Hanja Anlam Eşleştirme Ayrıntılı Ürünleri",
          paragraphs: [
            "En fazla 5 aday için ayrıntılı açıklama ve kapsamlı Hanja analizi: ₩2,900 (KRW)",
            "En fazla 10 aday için genişletilmiş ayrıntılı açıklama, kapsamlı Hanja analizi ve saklanabilir PDF: ₩4,900",
            "En fazla 10 aday için ayrıntılı açıklama, kapsamlı Hanja analizi, Saju (Dört Sütun) ve Beş Element analizi ve saklanabilir PDF: ₩9,900",
            "Ücretli raporlar ve PDF dosyaları, ödemeden sonra 24 saat boyunca yeniden görüntülenebilir ve indirilebilir; bu sürenin ardından otomatik olarak silinir.",
          ],
        },
        {
          title: "Tüm Adayların Tek Seferde Açılması",
          paragraphs: [
            "Küresel isim dönüştürme, Korece isim dönüştürme ve Hangıl telaffuz yazımı hizmetlerinde kalan tüm adayların reklamsız olarak tek seferde açılması: ₩990 (ödeme özelliği hazırlık aşamasındadır)",
          ],
        },
        {
          title: "Korece İsim Hediyelik Ürünleri",
          paragraphs: [
            "İsim mührü gibi fiziksel hediyelik ürünlerin fiyatı, kargo ücreti ve üretim süresi her ürün için ayrıca bildirilir.",
          ],
        },
        {
          title: "Resmi Ödeme Öncesi Bilgilendirme",
          paragraphs: [
            "Ödeme kuruluşu incelemesi, mesafeli satış işletmesi bildirimi ve üretim iş birliği koşulları kesinleştiğinde; gerçek ödeme tutarı, kargo ücreti, üretim süresi ve iade koşulları ürün ekranında yeniden bildirilecektir.",
          ],
        },
      ],
    },
  },
};

export default content;
