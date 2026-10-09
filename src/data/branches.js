/**
 * ==============================================================================
 * MEŞHUR TATLICI SELİM - ŞUBE VE İLETİŞİM BİLGİLERİ (BRANCHES & CONTACT DATA)
 * ==============================================================================
 * Bu dosya firmanın şube adreslerini, telefonlarını, çalışma saatlerini
 * ve sosyal medya hesaplarını içerir.
 * Telefon numarası veya adres değiştiğinde bu dosyadan güncellemek yeterlidir.
 * ==============================================================================
 */

export const BRAND_INFO = {
  name: "Meşhur Tatlıcı Selim",
  shortName: "Tatlıcı Selim",
  city: "Adana",
  tagline: "Adana'nın Geleneksel ve Eşsiz Tatlı Lezzetleri",
  description: "Ustalıkla açılan tül inceliğindeki yufkalar, taş fırının odun ateşi, Urfa'nın hakiki sade yağı ve Gaziantep'in birinci kalite boz fıstığıyla Adana'nın en prestijli tatlı durağı.",
  establishedYear: 1980,
  mainPhone: "03222241704",
  mainPhoneDisplay: "0322 224 17 04",
  whatsappNumber: "903222241704", // Uluslararası kod ile WhatsApp linki için
  whatsappDisplay: "0322 224 17 04",
  instagramHandle: "@meshurtatliciselim",
  instagramUrl: "https://www.instagram.com/meshurtatliciselim",
  workingHours: "Her Gün: 08:30 - 01:00",
  email: "info@tatliciselim.com"
};

export const BRANCHES = [
  {
    id: "yuregir",
    name: "Yüreğir Şubesi (Merkez Şube)",
    shortTitle: "Yüreğir",
    badge: "Merkez & Hızlı Sipariş",
    address: "Yüreğir, Adana (Merkez Üretim & Sipariş Noktası)",
    phone: "03222241704",
    phoneDisplay: "0322 224 17 04",
    whatsapp: "903222241704",
    workingHours: "08:30 - 01:00 (Haftanın 7 Günü)",
    features: ["Doğrudan Sipariş Hattı", "Gel Al & Paket Servis", "Taze Fırın Çıkışı", "Otopark"],
    mapQuery: "Yüreğir, Adana, Tatlıcı Selim",
    isPrimary: true
  },
  {
    id: "barajyolu",
    name: "Barajyolu Şubesi",
    shortTitle: "Barajyolu",
    badge: "Popüler Lokasyon",
    address: "Barajyolu Bulvarı Üzeri, Çukurova / Adana",
    phone: "03222241704",
    phoneDisplay: "0322 224 17 04",
    whatsapp: "903222241704",
    workingHours: "09:00 - 01:30 (Gece Açık)",
    features: ["Açık & Kapalı Oturma Alanı", "Sıcak Çıtır Halka", "Paket Servis", "Klima"],
    mapQuery: "Barajyolu, Adana",
    isPrimary: false
  },
  {
    id: "baraj",
    name: "Baraj Şubesi",
    shortTitle: "Baraj",
    badge: "Göl Manzarası Yakını",
    address: "Eski Baraj Mevkii, Adana",
    phone: "03222241704",
    phoneDisplay: "0322 224 17 04",
    whatsapp: "903222241704",
    workingHours: "09:00 - 01:00",
    features: ["Hızlı Servis", "Tepsi Siparişi", "Sıcak Şerbetliler", "Geniş Aile Alanı"],
    mapQuery: "Eski Baraj, Adana",
    isPrimary: false
  },
  {
    id: "seyhan",
    name: "Seyhan Şubesi",
    shortTitle: "Seyhan",
    badge: "Geniş Mağaza & Salon",
    address: "Dörtler Asri Bulvarı No: 34, Seyhan / Adana",
    phone: "03222241704",
    phoneDisplay: "0322 224 17 04",
    whatsapp: "903222241704",
    workingHours: "08:30 - 01:00",
    features: ["Dörtler Asri Bulvarı", "Özel Gün & Toplu Tepsi Siparişi", "Çocuk Dostu", "Vale / Park"],
    mapQuery: "Dörtler Asri Bulvarı No: 34, Seyhan, Adana",
    isPrimary: false
  }
];

export const QUALITY_PROMISES = [
  {
    title: "%100 Hakiki Pancar Şekeri",
    description: "Tatlılarımızda asla glikoz, yapay tatlandırıcı veya mısır şurubu kullanılmaz. Sadece saf şeker pancarı şerbeti kullanılır.",
    icon: "ShieldCheck"
  },
  {
    title: "1. Sınıf Antep Boz Fıstığı",
    description: "Hasat mevsiminin ilk günlerinde toplanan en aromatik ve zümrüt yeşili birinci sınıf Gaziantep boz fıstığı tercih edilir.",
    icon: "Sparkles"
  },
  {
    title: "Geleneksel Urfa Sade Yağı",
    description: "Yufkalarımızın çıtırlığı ve baş döndüren kokusu, saf süt yağından elde edilen geleneksel yayık sade yağından gelir.",
    icon: "Flame"
  },
  {
    title: "Günde 4 Kez Taze Üretim",
    description: "Tezgahlarımızda bekletilmiş tatlı bulunmaz. Gün boyu fırınlarımızdan çıkan sıcacık tepsilerle daima taze servis edilir.",
    icon: "Clock"
  }
];

export const TESTIMONIALS = [
  {
    name: "Murat Çetinkaya",
    role: "Gurme & Gezgin",
    comment: "Adana'ya her geldiğimde uğramadan dönemediğim tek yer. Fıstıklı Burma Baklava'sının çıtırtısı ve kireçte kabak tatlısının tahinle uyumu tek kelimeyle muazzam.",
    rating: 5,
    branch: "Seyhan Şubesi",
    date: "2 gün önce"
  },
  {
    name: "Ayşe Demiroğlu",
    role: "Yerel Rehber",
    comment: "Özel günlerimiz ve bayram tepsilerimiz için yıllardır Selim Tatlıcı'dan şaşmayız. Şerbeti asla boğazı yakmıyor, hakiki şeker kullanıldığı hemen anlaşılıyor.",
    rating: 5,
    branch: "Yüreğir Şubesi",
    date: "1 hafta önce"
  },
  {
    name: "Dr. Serkan Yılmaz",
    role: "Çukurova Üniversitesi",
    comment: "Barajyolu şubesindeki sıcak halka tatlısı Adana'nın en iyisi. Soğuk baklavası da hafifliğiyle ailemizin favorisi. Güler yüzlü hizmet için teşekkürler.",
    rating: 5,
    branch: "Barajyolu Şubesi",
    date: "3 hafta önce"
  }
];
