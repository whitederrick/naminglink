// 드림링크 화면 사전의 Turkish (Türkçe)(tr) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **옛 궁합 번역을 통째로 되살린 것이 아니다.** en 원문이 글자까지 같은 자리(푸터·언어
// 선택기·광고 라벨)만 물려받고, 해몽용으로 새로 쓴 자리는 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const tr: Dictionary = {
  "brand": "Dreams-Link",
  "tagline": "Bugünün rüyası, geleneksel Kore rüya sembolleriyle okunuyor",
  "currentLanguage": "Geçerli dil",
  "moreLanguages": "Daha",
  "closeLanguages": "Kapat",
  "dream": {
    "title": "Rüya okuma",
    "subtitle": "Gördüğünüz rüyayı yazın, biz de geleneksel Kore rüya sembolleri sözlüğünde bakacağız.",
    "textLabel": "Ne hakkında rüya gördünüz?",
    "textPlaceholder": "Hatırladığınız gibi yazın. Örneğin: berrak sudan bir sazan sıçradı",
    "moodLabel": "Uyanınca nasıl hissettiniz",
    "moods": {
      "good": "İyi",
      "scary": "Korkutucu",
      "strange": "Garip",
      "sad": "Üzücü",
      "unsure": "Emin değilim"
    },
    "recurringLabel": "Bu rüyayı tekrar tekrar görüyorum",
    "submit": "Rüyamı oku",
    "submitting": "Araştırılıyor…",
    "errorEmpty": "Lütfen rüya hakkında biraz daha yazın.",
    "errorGeneric": "Okumayı yükleyemedik. Lütfen bir süre sonra tekrar deneyin.",
    "resultTitle": "Rüya yorumlama",
    "symbolsHeading": "Rüyanızda bulunan semboller",
    "noSymbols": "Bu rüyada sözlükten gelen hiçbir geleneksel sembol görünmedi. Anlam uydurmamak için burayı boş bırakıyoruz.",
    "themesHeading": "Bunlar birlikte neyi işaret ediyor",
    "conceptionNotice": "Burada geleneksel olarak 태몽 olarak okunan semboller var. Bu, hamileliği belirlemez.",
    "browseSymbols": "Geleneksel sembol sözlüğünü görüntüle",
    "popularSymbols": "Sıkça aranan semboller",
    "disclaimer": "Bu, geleneksel 해몽 perspektifinden referans materyaldir, tıbbi, finansal veya hukuki tavsiye değildir. Yazdığınız rüyayı saklamıyoruz.",
    "again": "Başka bir rüya oku"
  },
  "landing": {
    "title": "Rüyanızı okuyun\n geleneksel bir şekilde",
    "subtitle": "Rüyanızdaki sembolleri geleneksel Kore rüya bilgisi sözlüğünde arıyoruz.\nDoğum tarihi yok, kayıt yok.",
    "howTitle": "Nasıl çalışır",
    "steps": [
      "Rüyayı hatırladığınız gibi yazın. Bir veya iki cümle yeter.",
      "Rüyanızda görünen semboller için geleneksel Kore rüya sembolleri sözlüğünde arama yapıyoruz. Eğer bir sembol orada yoksa, bunu belirtiriz.",
      "Her sembolün uzun zamandır ne anlama geldiğini ve bunların birlikte neyi işaret ettiğini görüyorsunuz."
    ],
    "privacyTitle": "Yazdığınız rüya saklanmaz",
    "privacyBody": "Yazdıklarınız yalnızca okuma süresince kullanılır ve asla kaydedilmez.\nHesap açmanıza gerek yoktur ve okuma tamamlandıktan sonra sunucuda hiçbir şey kalmaz.",
    "disclaimer": "Bu, geleneksel rüya okuma perspektifinden referans materyaldir. Gelecek hakkında bir tahmin değildir, ne de olsa tıbbi veya finansal tavsiye değildir."
  },
  "ads": {
    "label": "Reklam"
  },
  "selfAds": {
    "label": "İlgili hizmetler",
    "comingSoon": "Yakında",
    "purposes": {
      "naminglink": "Anlam ve çizgi sayısına göre seçilen Korece ve Hanja isimleri",
      "inyeonlink": "İki kişinin dört sütunu ve burçları üzerinden nasıl uyum sağladığı",
      "sajulink": "Kendi dört sütununuz ve bugünün onlarla nasıl buluştuğu",
      "dreamslink": "Semboller sözlüğünden çıkarılan rüya yorumları",
      "placelink": "Kore'de buluşmak için gidilecek yerler, paylaşılan ve önerilen"
    }
  },
  "analyzing": {
    "title": "Rüyanızdaki sembolleri arıyoruz",
    "quotes": [
      "Bir rüya genellikle gelecek günlerden ziyade son birkaç günü yansıtır.",
      "Aynı sembol, kimin rüya gördüğüne bağlı olarak farklı yorumlanmıştır.",
      "Geleneksel 해몽, bir cevap anahtarı değildir. Uzun süre birikmiş hikayelerin bir derlemesidir.",
      "Korkutucu bir rüya, kötü bir rüya ile aynı değildir. Bu, şaşırmış bir zihnin bıraktığı iz olabilir.",
      "Sadece bir parça hatırlıyorsanız sorun değil. Başlamak için bir sembol yeter.",
      "Tekrar eden bir rüya genellikle tamamlanmamış bir şeyle gelir.",
      "Su ne kadar berraktı ve ne renk olduğu, eski okuyucuların en çok dikkat ettiği şeydi.",
      "Uyanırken hissettiğiniz duygu, gördüğünüz şey kadar uzun süre kalır.",
      "İyi bir rüya olsun ya da olmasın, onun gününüzü belirlemesine izin vermemek daha iyidir.",
      "Bir 해몽, ne olacağına dair bir söz değildir. Zaten olanı bir kez daha gözden geçirmektir."
    ],
    "watching": "Reklam izleniyor",
    "remaining": "Sonucunuz {seconds} sn içinde açılır"
  },
  "dreamCard": {
    "title": "Bu rüyayı bir kart olarak saklayın",
    "body": "Yazdığınız rüyayı ve bulduğumuz sembolleri tek bir görüntüye koyduk. **PDF değil, bir resim dosyasıdır**, bu yüzden onu olduğu gibi kaydedebilir veya gönderebilirsiniz.",
    "buyButton": "{price} karşılığında alın",
    "preparing": "Hazırlanıyor",
    "ordering": "Sipariş oluşturuluyor…",
    "paying": "Ödeme alınıyor…",
    "issuing": "Kart hazırlanıyor…",
    "done": "Tamamlandı. Yeniden indirmek için aşağıdaki butonu kullanın.",
    "failed": "Ödeme veya indirme başarısız oldu. Lütfen bir süre sonra tekrar deneyin.",
    "retry": "Yeniden indirin",
    "contents": [
      "Rüyanızda bulunan semboller ve bunların geleneksel olarak ne anlama geldiği",
      "Bu sembollerin birlikte işaret ettiği şey",
      "Rüyanın tarihi ve sözlük versiyonu"
    ],
    "consentLabel": "Bu, ödeme sonrasında hemen sağlanan dijital içeriktir. **İndirme tamamlandıktan sonra, fikrinizi değiştirme hakkının sınırlı olduğunu anlıyorum**.",
    "consentRequired": "Ödeme yapmadan önce iptal şartlarını kabul etmeniz gerekiyor.",
    "productInfoTitle": "Ürün bilgisi",
    "productInfo": [
      [
        "Tedarikçi",
        "{brand}"
      ],
      [
        "Format",
        "1 resim dosyası (PNG), ödeme sonrasında bu ekrandan hemen indirilecektir. PDF belgesi değildir."
      ],
      [
        "Gereksinimler",
        "Resmi açabilen herhangi bir cihaz. Kurulum veya hesap gerektirmez."
      ],
      [
        "Mevcutlık",
        "Zaman sınırlaması yok. İndirilen dosya sizin."
      ],
      [
        "Yeniden indir",
        "Aynı siparişle 5 defaya kadar. Sunucu dosyayı saklamadığından, sonuç ekranını terk ettiğinizde tekrar yapılamaz."
      ],
      [
        "İptal",
        "İndirme tamamlanmadan önce tam geri ödeme. Sonrasında, fikir değişikliği nedeniyle iptal sınırlıdır (Kore E-Ticaret Yasası madde 17(2))."
      ],
      [
        "İade masrafları",
        "Yok. Dijital içerik gönderilmez."
      ]
    ],
    "refundContact": "İadeler veya sorular için, destek masasıyla veya aşağıdaki e-posta adresiyle iletişime geçin. Dosya hiç üretilmemişse veya tahsil edilen tutar siparişle farklıysa, tam geri ödeme yaparız.",
    "pdfLanguageNotice": "Karttaki metin, bu ekranla aynı dilde çıkar."
  },
  "conceptionReport": {
    "title": "Taşınma-omen okumayı PDF olarak saklayın",
    "body": "Taşınan semboller genellikle taşınma işaretleri olarak okunduğunda, neyin taşındığı, bunun ne anlama geldiği ve bu okumanın nereden geldiği 4 sayfalık bir PDF ile sunulur. Hamileliği veya bir çocuğun cinsiyetini belirlemez.",
    "buyButton": "{price} için alın",
    "preparing": "Hazırlanıyor",
    "ordering": "Sipariş oluşturuluyor…",
    "paying": "Ödeme alınıyor…",
    "issuing": "Rapor hazırlanıyor…",
    "done": "Tamamlandı. Yeniden indirmek için aşağıdaki butonu kullanın.",
    "failed": "Ödeme veya indirme başarısız oldu. Lütfen bir süre sonra tekrar deneyin.",
    "retry": "Yeniden indir",
    "contents": [
      "Sayfa 1 — yazdığınız rüya ve içinde bulunanlar",
      "Sayfa 2 — her sembol ve geleneksel olarak ne anlama geldiği",
      "Sayfa 3 — bunların neden tae mong olarak okunduğu",
      "Sayfa 4 — saklanacak bir sayfa (tarih ve uyarılar)"
    ],
    "consentLabel": "Bu dijital içerik, ödeme yapıldıktan hemen sonra sağlanmaktadır. **İndirme tamamlandıktan sonra, fikrinizi değiştirme hakkının sınırlı olduğunu anlıyorum**.",
    "consentRequired": "Ödeme yapmadan önce iptal şartlarını kabul etmeniz gerekmektedir.",
    "productInfoTitle": "Ürün bilgisi",
    "productInfo": [
      [
        "Tedarikçi",
        "{brand}"
      ],
      [
        "Format",
        "1 PDF belgesi (4 sayfa), ödeme sonrası hemen bu ekrandan indirilecektir."
      ],
      [
        "Gereksinimler",
        "PDF açabilen herhangi bir cihaz. Kurulum veya hesap gerektirmez."
      ],
      [
        "Kullanılabilirlik",
        "Zaman sınırı yok. İndirilen dosya sizinle kalır."
      ],
      [
        "Yeniden indir",
        "Aynı siparişle 5 kez. Sunucu dosyayı saklamadığı için sonuç ekranını terk ettiğinizde tekrar oluşturulamaz."
      ],
      [
        "İptal",
        "İndirme tamamlanmadan önce tam geri ödeme. Sonrasında, fikir değişikliği nedeniyle iptal sınırlıdır (Kore E-Ticaret Yasası madde 17(2))."
      ],
      [
        "İade masrafları",
        "Yok. Dijital içerik gönderilmez."
      ]
    ],
    "refundContact": "İadeler veya sorular için, destek masasıyla veya aşağıdaki e-posta adresiyle iletişime geçin. Eğer belge hiç üretilmediyse veya tahsil edilen tutar siparişten farklıysa, tam geri ödeme yapıyoruz.",
    "pdfLanguageNotice": "PDF, bu ekranla aynı dilde çıkar."
  },
  "footer": {
    "privacy": "Gizlilik",
    "terms": "Şartlar",
    "refund": "İade",
    "pricing": "Fiyatlar",
    "legalEntity": "Şirket",
    "representative": "Temsilci",
    "businessNumber": "Kayıt No.",
    "mailOrderNumber": "Online satış",
    "address": "Adres",
    "customerCenter": "Müşteri hizmetleri",
    "email": "E-posta",
    "privacyOfficer": "Gizlilik sorumlusu",
    "hostingProvider": "Barındırma",
    "providedBy": "Sağlayan",
    "effective": "Yürürlük tarihi",
    "backHome": "Ana sayfaya dön"
  }
};
