import { companyInfo, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import type { LegalLocaleContent } from "./types";

const content: LegalLocaleContent = {
  labels: {
    effectiveDate: "Yürürlük tarihi",
    referenceDate: "Geçerlilik tarihi",
    login: "Giriş yap",
    close: "Kapat",
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
            "Naming-Link, AI tabanlı bir isimlendirme stüdyosu olarak aşağıdaki dört hizmeti sunmaktadır. ① Korece isimlere uygun Hanja anlam eşleştirmesi ② Korece isimleri küresel isimlere dönüştürme ③ Yabancı isimleri Korece isimlere dönüştürme ④ Küresel isimleri telaffuzlarına göre Korece yazma.",
            "Sonuçlar, isimlendirme ve yorumlama için yardımcı referans materyallerdir ve aile kayıtları, pasaport, vize, marka, hukuki belgeler gibi resmi kayıt olasılıklarını garanti etmez.",
          ],
        },
        {
          title: "2. Üye ve Üye Olmayan Kullanım",
          paragraphs: [
            "İsim analizi ve reklam ödüllü aday görüntüleme, üye olmayanlar tarafından da kullanılabilir. Üyelik kaydı veya giriş, ürün siparişi ve sipariş geçmişi kontrolü gibi hesap gerektiren işlevlerde yalnızca talep edilebilir.",
          ],
        },
        {
          title: "3. AI Sonuçları ve İnceleme Sorumluluğu",
          paragraphs: [
            "AI öneri sonuçları dilsel, kültürel ve geleneksel referanslar içermektedir. Kullanıcılar, nihai isim seçiminden önce ilgili kurumlar, uzmanlar, yerel kullanıcılar, hukuki ve marka incelemeleri aracılığıyla uygunluğu doğrulamalıdır.",
          ],
        },
        {
          title: "4. Ücretli Hizmetler",
          paragraphs: [
            "Hanja anlam eşleştirme hizmetinin detaylı ürünleri aşağıdaki gibidir. ① Aday maksimum 5 adet detaylı açıklama ve Hanja kapsamlı detay: 2,900₩ ② Aday maksimum 10 adet genişletilmiş detaylı açıklama, Hanja kapsamlı detay ve saklama amaçlı PDF: 4,900₩ ③ Aday maksimum 10 adet detay, Hanja kapsamlı detay, doğum haritası ve beş element analizi ile saklama amaçlı PDF: 9,900₩.",
            "Küresel isim dönüştürme, Korece isim dönüştürme, Korece telaffuz yazım hizmetlerinde, kalan adayların tamamını reklamsız bir şekilde bir kerede sunan bir ürün (yurt içi ödeme 990₩, yurt dışı ödeme US$1.99) sağlanabilir. Ödeme işlevi aktif hale gelmeden önce yalnızca reklam ödüllü görüntüleme sunulmaktadır.",
            "Küresel kullanıcılar için dijital ürün olarak ④ Korece isim kapsamlı rapor PDF (US$9.99): önerilen adayların tamamının seçilen yazı tipi isim sanatı, anlam açıklaması ve beş element doğum haritası referansı ⑤ Korece telaffuz dönüşüm sanatı PDF (US$2.99): seçilen yazı tipi isim sanatı ve telaffuz rehberi ⑥ İsim sanatı paketi PDF (US$1.99): seçilen bir ismi farklı yazı tipleriyle sunma. Her ürünün fiyatı ve uygulanan yazı tipi sayısı ekranda belirtilen değerlere tabidir.",
            "Ücretli detay raporları ve analiz sonuçları, PDF dosyaları ödeme tamamlandıktan sonra 24 saat boyunca yeniden görüntülenebilir ve indirilebilir; saklama süresi dolduğunda otomatik olarak silinir.",
            "İsim mührü gibi fiziksel ürünler, yurt içinde 39,000₩, yurt dışında US$34.99 (uluslararası kargo ücreti dahil) gibi ürün bazında fiyat ve koşullarla sunulmaktadır. Tüm ücretli ürünler, ödeme öncesinde ürün içeriği, fiyat, sağlama şekli ve iade koşulları hakkında ekranda bilgi verir.",
          ],
        },
        {
          title: "5. Reklam Ödüllü Hizmetler",
          paragraphs: [
            "Reklam izleyerek adayların kilidini açma, yalnızca reklam sağlayıcısının normal ödül doğrulaması tamamlandığında geçerlidir. Otomatik reklam oynatma, ödül manipülasyonu, anormal tekrar talepleri kısıtlanabilir.",
          ],
        },
        {
          title: "6. Yasaklı Davranışlar",
          paragraphs: [
            "Başka birinin kişisel verilerini izinsiz girmek, ayrımcılık, nefret veya sahtecilik amacıyla isim oluşturmak, otomatik aşırı talepler yapmak, hizmet kesintisine neden olmak, sonuçların yanlış resmi onayını göstermek yasaktır.",
          ],
        },
        {
          title: "7. Sorumluluk Sınırlaması",
          paragraphs: [
            "Şirket, kasıtlı veya ağır ihmal yoksa, AI öneri sonuçlarının kullanımından kaynaklanan dolaylı zararlar, beklenen kazanç kaybı, resmi kayıt reddi, üçüncü taraf anlaşmazlıkları için sorumluluk kabul etmez.",
          ],
        },
        {
          title: "8. İletişim",
          paragraphs: [
            "Hizmet ile ilgili sorular: platforest.inc@gmail.com",
          ],
        },
      ],
    },
    privacy: {
      title: "Gizlilik Politikası",
      description: `Bu politika, ${companyInfo.serviceName} hizmetinin kişisel verileri nasıl işlediğini açıklar.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. İşlenen Kişisel Veriler",
          paragraphs: [
            "Üye olmayanların isim hizmetini kullanması durumunda isim, doğum tarihi, doğum saati, ülke, dil, kullanım amacı ve telaffuz ipuçları analiz sonuçları oluşturma sürecinde geçici olarak işlenmektedir, ancak girilen veriler ve oluşturulan sonuçlar hizmet veri tabanında saklanmamaktadır.",
            "Üyelik kaydı ve giriş sırasında e-posta adresi ve giriş kayıtları (kimlik doğrulama geçmişi) işlenmektedir.",
            "Ücretli detay raporları ödenirken, sipariş tanımlama bilgileri, ödeme durumu ve rapor oluşturma için gerekli giriş ve analiz sonuçları saklama süresi (ödeme sonrası 24 saat) boyunca işlenmektedir. Kart numarası gibi ödeme aracı bilgileri, ödeme aracısı tarafından doğrudan işlenmekte olup, şirket bunları saklamamaktadır.",
            "Ürün siparişi işlevi kullanıldığında yalnızca sipariş verenin adı, e-posta, iletişim bilgileri, teslimat adresi, ödeme durumu ve sipariş işleme bilgileri ek olarak işlenebilir.",
            "Hizmetin istikrarı ve kötüye kullanımın önlenmesi amacıyla günlük olarak değişen kimliksiz ziyaretçi hash'i, istek zamanı, hizmet türü, ücretsiz kullanım sayısı, AI token'ları, yanıt süresi, işleme durumu ve reklam gösterimi ile ödül etkinlikleri minimum işletim kaydı olarak işlenebilir.",
          ],
        },
        {
          title: "2. Kişisel Verilerin İşlenme Amaçları",
          paragraphs: [
            "Girdi değerlerine dayalı isim önerileri, telaffuz analizi, ülkelere göre dil ve kültür analizi, ücretsiz kullanım miktarı sınırlaması, reklam ödül doğrulaması, müşteri taleplerine yanıt verme, ödeme ve teslimat işlemleri, kötüye kullanımın önlenmesi amacıyla kişisel veriler işlenmektedir.",
          ],
        },
        {
          title: "3. Saklama ve İmha",
          paragraphs: [
            "Analiz girişi ve sonuçları, giriş yapan üyelerin sonuçları açıkça saklama seçeneğini seçtiği durumlarda yalnızca hesaplarında saklanır ve üye silme işlemi yaptığında veya saklama amacı sona erdiğinde imha edilir. Üye olmayanlar ve saklama seçeneğini seçmeyen üyelerin girdi ve sonuçları saklanmaz.",
            "Ücretli detay raporlarının girdi, analiz sonuçları ve PDF dosyası, ödeme tamamlandıktan 24 saat sonra otomatik olarak silinir. Ödeme ve sipariş işlem kayıtları, ilgili mevzuatın yasal saklama süresine göre ayrı olarak saklanır.",
            "Teslimat detay bilgileri, sipariş işleme ve iade/uyuşmazlık yanıtı için gerekli sürenin sona ermesinin ardından imha edilir veya kimliksiz hale getirilir.",
          ],
        },
        {
          title: "4. Üçüncü Taraflara Sağlama ve İşleme Dışa Yükleme",
          paragraphs: [
            "Hizmetin işletilmesi için Supabase (veritabanı, kimlik doğrulama), Vercel (barındırma), OpenAI API (AI analizi), reklam ağı, ödeme aracısı (PortOne), teslimat ve üretim ortaklarına gerekli bilgiler işlenebilir veya dışa yüklenebilir.",
          ],
        },
        {
          title: "5. Kişisel Verilerin Yurt Dışına Aktarılması",
          paragraphs: [
            "Şirket, hizmet sağlamak amacıyla aşağıda belirtilen kişisel verileri yurt dışına aktarmaktadır (işleme dışa yükleme). Aktarım, bilgi iletişim ağı üzerinden yapılmaktadır.",
            "① OpenAI, L.L.C. (ABD) — Aktarılan veriler: isim, doğum tarihi ve saati, cinsiyet, ülke, dil gibi analiz girdi değerleri — Aktarım amacı: AI tabanlı isim, telaffuz, anlam analizi — Saklama ve kullanım süresi: hizmet sağlama süresi (girdi verileri OpenAI politikası gereği model eğitimi için kullanılmaz ve kötüye kullanım izleme amacıyla en fazla 30 gün saklanır ve ardından silinir).",
            "② Supabase, Inc. (ABD) — Aktarılan veriler: sipariş ve ödeme durumu bilgileri, üye e-posta adresi, ücretli rapor girdi ve sonuçları (ödeme sonrası 24 saat), ürün siparişi sırasında sipariş verenin adı, iletişim bilgileri, teslimat adresi — Aktarım amacı: veritabanı, kimlik doğrulama, saklama — Saklama ve kullanım süresi: hizmet sağlama süresi veya her bir öğenin saklama süresine kadar.",
            "③ Vercel, Inc. (ABD) — Aktarılan veriler: hizmet kullanımı sırasında iletilen erişim ve istek bilgileri — Aktarım amacı: uygulama barındırma — Saklama ve kullanım süresi: hizmet sağlama süresi.",
            "Kullanıcı, kişisel verilerin yurt dışına aktarılmasına ilişkin onayı reddedebilir, ancak bu işlemin hizmet sağlama açısından zorunlu olması nedeniyle reddedilmesi durumunda hizmet kullanımı kısıtlanabilir.",
          ],
        },
        {
          title: "6. Kullanıcıların Hakları",
          paragraphs: [
            "Kullanıcılar, kişisel verilere erişim, düzeltme, silme, işleme durdurma ve onay iptali talep edebilirler. Talepler, müşteri hizmetleri e-posta adresine iletilir ve kimlik doğrulama sonrası işlenir.",
          ],
        },
        {
          title: "7. Kişisel Verilerin Korunmasından Sorumlu Kişi",
          paragraphs: [
            "Sorumlu kişi: Kwak Eun-ha",
            "E-posta: platforest.inc@gmail.com",
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
          title: "1. Ortak İlkeler",
          paragraphs: [
            "Ödeme işlevi etkinleştirildiğinde, her ürünün sağlanma şekli, üretim başlangıç tarihi ve indirme durumu gibi faktörlere bağlı olarak iade edilebilirlik kapsamı değişiklik gösterebilir. Belirli koşullar, ödeme öncesi ürün ekranında bildirilecektir.",
          ],
        },
        {
          title: "2. Hanja Detay Raporu (₩2,900·₩4,900·₩9,900)",
          paragraphs: [
            "Ödeme yapıldıktan sonra AI detay analizi oluşturulmadan önce iptal edilebilir. Analiz oluşturulduktan ve görüntüleme veya indirme mümkün hale geldikten sonra, basit fikir değişikliği nedeniyle iade kısıtlanabilir.",
            "İçerik hatası, sistem arızası nedeniyle oluşturma başarısızlığı veya ödeme tutarı uyuşmazlığı tespit edildiğinde, yeniden düzenleme veya iade işlemi yapılacaktır. Saklama süresi (ödeme sonrası 24 saat) dolduğunda indirme sona ererse, bu durum iade nedeni sayılmaz.",
          ],
        },
        {
          title: "3. Adayların Toplu Yayınlanması (Yerel ₩990 · Yurt Dışı US$1.99)",
          paragraphs: [
            "Küresel isim dönüştürme, Kore isim dönüştürme, Hangul telaffuz gösterim hizmetinin adayların toplu yayınlanması, ödeme anında sağlanan dijital içeriktir. Adayların görüntülenmesine başlanmadan önce iptal edilebilir; görüntüleme sonrasında basit fikir değişikliği nedeniyle iade kısıtlanabilir.",
            "Sistem hatası nedeniyle adaylar normal şekilde yayınlanmadığında, yeniden sağlama veya iade işlemi yapılacaktır.",
          ],
        },
        {
          title: "4. Küresel Dijital PDF Ürünleri (US$9.99·US$2.99·US$1.99)",
          paragraphs: [
            "Hangul isim kapsamlı raporu (US$9.99), Hangul telaffuz dönüşüm sanatı (US$2.99), isim sanatı paketi (US$1.99) ödeme sonrası oluşturulan dijital içeriklerdir. PDF oluşturulmadan önce iptal edilebilir; oluşturma tamamlandıktan ve indirme mümkün hale geldikten sonra basit fikir değişikliği nedeniyle iade kısıtlanabilir.",
            "Oluşturma başarısızlığı, içerik hatası veya ödeme tutarı uyuşmazlığı tespit edildiğinde, yeniden düzenleme veya iade işlemi yapılacaktır. Saklama süresi (ödeme sonrası 24 saat) dolduğunda indirme sona ererse, bu durum iade nedeni sayılmaz.",
          ],
        },
        {
          title: "5. Özel Üretim Ürünler (İsim Mühürü vb.)",
          paragraphs: [
            "İsim mühürü gibi kişiye özel üretilen ürünler (Yerel ₩39,000 · Yurt Dışı US$34.99, uluslararası kargo ücreti dahil) üretim başlangıcına kadar iptal edilebilir. Üretim başladıktan sonra, yazım metni kişiye özel olarak kesinleşeceğinden, basit fikir değişikliği nedeniyle iade kısıtlanabilir; yazım hatası, hasar, yanlış üretim veya teslimat sorunları tespit edildikten sonra uygun bir yöntemle değişim, yeniden üretim veya iade işlemi yapılacaktır.",
          ],
        },
        {
          title: "5. Reklam Tabanlı Kilit Açma",
          paragraphs: [
            "Reklam izleme avantajları, ödeme ürünü değildir. Reklam ağı hatası nedeniyle ödemenin yapılmadığı durumlarda, hizmet içinde yeniden deneme veya müşteri hizmetleri ile iletişim kurarak işlem yapılacaktır.",
          ],
        },
        {
          title: "6. İletişim",
          paragraphs: [
            "İade talepleri için: platforest.inc@gmail.com",
          ],
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
            "Hanja anlam eşleştirme, küresel isim dönüştürme, Kore isim dönüştürme, Hangul telaffuz gösterimi gibi dört hizmetin temel analizi, üye olmayan kullanıcılara ücretsiz olarak sunulmakta olup, günlük kullanım kısıtlamaları uygulanabilir.",
          ],
        },
        {
          title: "Reklam Tabanlı Kullanım",
          paragraphs: [
            "Reklam izledikten sonra adayların kilidinin açılması, ek bir ödeme olmaksızın sunulan reklam tabanlı bir avantajdır. Her bir reklam için bir sonraki aday açılmaktadır. Reklam stoğu, ülke, cihaz veya reklam sağlayıcısının politikalarına bağlı olarak kullanılabilirlik değişiklik gösterebilir.",
          ],
        },
        {
          title: "Hanja Anlam Eşleştirme Detaylı Ürün",
          paragraphs: [
            "Maksimum 5 aday için detaylı açıklama ve Hanja genel detay: 2,900₩",
            "Maksimum 10 aday için genişletilmiş detaylı açıklama, Hanja genel detay ve saklama amaçlı PDF: 4,900₩",
            "Maksimum 10 aday için detay, Hanja genel detay, doğum haritası ve beş element analizi ile saklama amaçlı PDF: 9,900₩",
            "Ücretli raporlar ve PDF'ler, ödeme sonrasında 24 saat boyunca tekrar görüntülenebilir veya indirilebilir ve sonrasında otomatik olarak silinir.",
          ],
        },
        {
          title: "Adayların Tam Toplu Açıklaması",
          paragraphs: [
            "Küresel isim dönüştürme, Kore isim dönüştürme, Hangul telaffuz gösterimi hizmetlerinde kalan tüm adayların reklam olmaksızın bir seferde açıklanması: Yerel ödeme 990₩, yurtdışı ödeme US$1.99 (ödeme işlevi hazırlanıyor)",
          ],
        },
        {
          title: "Küresel Dijital PDF Ürün",
          paragraphs: [
            "Hangul isim genel rapor PDF (önerilen adayların isim sanatı, anlam açıklaması, beş element doğum haritası referansı): US$9.99",
            "Hangul telaffuz dönüşüm sanatı PDF (seçilen yazı tipi isim sanatı ve telaffuz rehberi): US$2.99",
            "İsim sanatı paketi PDF (seçilen bir ismin belirlenen yazı tipine göre sanatı): US$1.99",
            "Fiyatlar ve uygulanan yazı tipi sayısı ekranda belirtilen değerlere tabidir ve PDF, ödeme sonrasında 24 saat boyunca tekrar indirilebilir ve sonrasında otomatik olarak silinir. (ödeme işlevi hazırlanıyor)",
          ],
        },
        {
          title: "Hangul İsim Ürünleri",
          paragraphs: [
            "İsim mührü: Yerel 39,000₩ · Yurtdışı US$34.99 (uluslararası kargo ücreti dahil). Diğer fiziksel ürünlerin fiyatları, kargo ücretleri ve üretim süreleri ürün bazında ayrıca bildirilecektir.",
          ],
        },
        {
          title: "Resmi Ödeme Öncesi Bilgilendirme",
          paragraphs: [
            "PG incelemesi, ticari satış kaydı, üretim ortaklık şartları kesinleştirildiğinde, gerçek ödeme tutarı, kargo ücreti, üretim süresi ve iade koşulları ürün ekranında tekrar bildirilecektir.",
          ],
        },
      ],
    },
  },
};

export default content;
