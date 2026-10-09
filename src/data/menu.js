/**
 * ==============================================================================
 * MEŞHUR TATLICI SELİM - MENÜ VERİ TABANI (MENU DATA)
 * ==============================================================================
 * Bu dosya menüdeki tüm ürünleri ve kategorileri barındırır.
 * Fiyatları, açıklamaları, ürün adlarını veya görsel bağlantılarını
 * buradan doğrudan ve kolayca güncelleyebilirsiniz.
 * 
 * Görsel Değiştirme Notu:
 * - Dilerseniz 'public/images/' klasörüne kendi çektiğiniz fotoğrafları ekleyip
 *   örneğin image: "/images/burma-baklava.jpg" şeklinde güncelleyebilirsiniz.
 * - Ya da harici resim URL'si (Unsplash vb.) kullanmaya devam edebilirsiniz.
 * ==============================================================================
 */

export const MENU_CATEGORIES = [
  { id: "all", name: "Tüm Tatlılar", icon: "Sparkles" },
  { id: "baklavalar", name: "Baklavalar", icon: "Layers" },
  { id: "serbetli", name: "Şerbetli & Halka Tatlılar", icon: "Flame" },
  { id: "ozel", name: "Özel Lezzetler", icon: "Crown" },
  { id: "sutlu-soguk", name: "Sütlü & Soğuk Tatlılar", icon: "IceCream" }
];

export const MENU_ITEMS = [
  {
    id: "burma-baklava",
    categoryId: "baklavalar",
    title: "Antep Fıstıklı Burma Baklava",
    tagline: "Ustanın İmzası & Adana Klasiği",
    description: "Altın sarısı çıtır burma yufkası içerisine cömertçe sarılmış 1. kalite boz fıstık, hakiki Urfa sade yağı ve odun fırını lezzeti.",
    price: 360,
    priceUnit: "₺ / Porsiyon (1 Kg: ₺950)",
    badge: "Usta Tavsiyesi",
    isFeatured: true,
    rating: 5.0,
    reviewCount: 342,
    ingredients: ["Boz Antep Fıstığı", "Urfa Sade Yağı", "Hakiki Pancar Şekeri", "Özel El Açması Yufka"],
    servingOptions: ["Porsiyon (3 Adet)", "500 Gr Paket", "1 Kg Tepsi"],
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1598110750410-b7470433a017?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "adana-halka-tatlisi",
    categoryId: "serbetli",
    title: "Adana Çıtır Halka Tatlısı",
    tagline: "Sıcak, Taze & Efsanevi Çıtırlık",
    description: "Adana'nın geleneksel sokak tatlı kültürünün zirvesi. Günün her saati taze kızartılan, dışı cam gibi çıtır, içi şerbet dolu meşhur lezzet.",
    price: 90,
    priceUnit: "₺ / Porsiyon (Adet: ₺30)",
    badge: "En Çok Tercih Edilen",
    isFeatured: true,
    rating: 4.9,
    reviewCount: 520,
    ingredients: ["Özel İrmik Hamuru", "Pancar Şekeri Şerbeti", "Limon", "Taze Kızartma Yağı"],
    servingOptions: ["1 Adet", "3 Adet Porsiyon", "10'lu Kutu"],
    image: "https://images.unsplash.com/photo-1621236378699-8597fee6a1ce?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "ev-yapimi-kabak-tatlisi",
    categoryId: "ozel",
    title: "Ev Yapımı Çıtır Kabak Tatlısı",
    tagline: "Kireçte Sertleştirilmiş Hatay & Adana Usulü",
    description: "Geleneksel yöntemle kireç suyunda bekletilerek dışı çıtır çıtır, içi lokum kıvamında pişirilen doğal bal kabağı. Bol çifte kavrulmuş tahin ve taze ceviz ile.",
    price: 220,
    priceUnit: "₺ / Porsiyon",
    badge: "Özel Spesiyal",
    isFeatured: true,
    rating: 5.0,
    reviewCount: 284,
    ingredients: ["Bal Kabağı", "Çifte Kavrulmuş Tahin", "Taze Toros Cevizi", "Doğal Pancar Şekeri"],
    servingOptions: ["Tahinli & Cevizli Porsiyon", "Kaymaklı Porsiyon", "750 Gr Kutu"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "midye-baklava",
    categoryId: "baklavalar",
    title: "Antep Fıstıklı Midye Baklava",
    tagline: "Zümrüt Yeşili & İpeksi Kaymak",
    description: "Özel midye formuyla şekillendirilmiş, içi saf Antep boz fıstığı ve hakiki manda sütü kaymağıyla doldurulmuş lüks ve zarif bir şaheser.",
    price: 390,
    priceUnit: "₺ / Porsiyon (1 Kg: ₺1.050)",
    badge: "Gurme Seçimi",
    isFeatured: true,
    rating: 4.95,
    reviewCount: 198,
    ingredients: ["Saf Boz Fıstık", "Hakiki Manda Kaymağı", "Urfa Sade Yağı", "İnce Baklava Yufkası"],
    servingOptions: ["Porsiyon (3 Adet)", "500 Gr Kutu", "1 Kg Özel Kutu"],
    image: "https://images.unsplash.com/photo-1598110750410-b7470433a017?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "antep-fistikli-kadayif",
    categoryId: "serbetli",
    title: "Antep Fıstıklı Burma Kadayıf",
    tagline: "Tepside Nar Gibi Kızarmış",
    description: "İnce tel kadayıfın arasına serpiştirilmiş yoğun Antep fıstığı, bakır tepside kısık ateşte nar gibi kızartılarak sıcak şerbetle buluşur.",
    price: 310,
    priceUnit: "₺ / Porsiyon (1 Kg: ₺850)",
    badge: "Geleneksel Lezzet",
    isFeatured: false,
    rating: 4.88,
    reviewCount: 165,
    ingredients: ["Taze Tel Kadayıf", "Boz Antep Fıstığı", "Doğal Sade Yağ", "Pancar Şerbeti"],
    servingOptions: ["Tek Porsiyon", "Dondurmalı Porsiyon", "1 Kg Tepsi"],
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "soguk-baklava",
    categoryId: "sutlu-soguk",
    title: "Belçika Çikolatalı Soğuk Baklava",
    tagline: "Sütlü Şerbet & İpeksi Kakao",
    description: "Geleneksel baklava katlarının hafif soğuk süt şerbetiyle demlenmesi, bol fıstık dolgusu ve üzeri rendelenmiş birinci sınıf Belçika çikolatası.",
    price: 340,
    priceUnit: "₺ / Porsiyon (1 Kg: ₺920)",
    badge: "Yeni Nesil Favori",
    isFeatured: true,
    rating: 4.96,
    reviewCount: 412,
    ingredients: ["Belçika Sütlü Çikolatası", "Antep Fıstığı", "Taze Günlük Süt", "İnce Yufka Katları"],
    servingOptions: ["Porsiyon (4 Dilim)", "500 Gr Kutu", "1 Kg Kutu"],
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "karakus-ve-dilber-dudagi",
    categoryId: "serbetli",
    title: "Karakuş Tatlısı & Dilber Dudağı",
    tagline: "Asırlık Adana Bayram Tatlısı",
    description: "Adana mutfağının en köklü şerbetlilerinden; içi ceviz ve tarçın kokulu, açılıp kıvrılarak kızartılan gevrek Karakuş ve kat kat Dilber Dudağı ikilisi.",
    price: 240,
    priceUnit: "₺ / Karışık Porsiyon",
    badge: "Adana Mirası",
    isFeatured: false,
    rating: 4.85,
    reviewCount: 140,
    ingredients: ["Toros Cevizi", "Hakiki Tarçın", "Özel Açma Hamur", "Doğal Şerbet"],
    servingOptions: ["Porsiyon", "500 Gr Paket", "1 Kg Paket"],
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1621236378699-8597fee6a1ce?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "sobiyet-ve-fistik-dolmasi",
    categoryId: "baklavalar",
    title: "Özel Şöbiyet & Zümrüt Fıstık Dolması",
    tagline: "Kaymak ve Fıstığın Doruk Noktası",
    description: "Kare formda kaymakla zenginleştirilmiş çıtır Şöbiyet ve hamuru neredeyse hissedilmeyen sırf zümrüt fıstık püresiyle sarılmış Fıstık Dolması.",
    price: 420,
    priceUnit: "₺ / Lüks Porsiyon",
    badge: "Saray Usulü",
    isFeatured: true,
    rating: 5.0,
    reviewCount: 270,
    ingredients: ["%90 Saf Antep Fıstığı", "Manda Sütü İrmik Kaymağı", "Sade Yağ"],
    servingOptions: ["Karışık Lüks Porsiyon", "Fıstık Dolması 500 Gr", "Şöbiyet 1 Kg"],
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "havuc-dilim-baklava",
    categoryId: "baklavalar",
    title: "Havuç Dilim Baklava (Fıstıklı)",
    tagline: "Maraş Dondurması İle Kusursuz Uyum",
    description: "Geniş üçgen formuyla 30 kat incecik yufkanın arasına gizlenmiş bol Antep fıstığı. Isıtılarak sunulan çıtır lezzet.",
    price: 350,
    priceUnit: "₺ / Büyük Dilim (Dondurmalı: ₺410)",
    badge: "Klasik Lezzet",
    isFeatured: false,
    rating: 4.92,
    reviewCount: 220,
    ingredients: ["Antep Fıstığı", "Hakiki Sade Yağ", "Doğal Pancar Şekeri"],
    servingOptions: ["1 Büyük Dilim", "Dondurmalı Porsiyon", "Tepsi"],
    image: "https://images.unsplash.com/photo-1505253758473-96b3015f27eb?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1598110750410-b7470433a017?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "tas-kadayif",
    categoryId: "serbetli",
    title: "Adana Taş Kadayıf (Cevizli)",
    tagline: "Sıcak Şerbet & Tarçınlı Toros Cevizi",
    description: "Mayalı özel hamurun tek yüzü pişirilip içine bol ceviz ve tarçın koyularak yarım ay şeklinde kapatılır ve altın sarısı kızartılıp sıcak şerbetlenir.",
    price: 180,
    priceUnit: "₺ / Porsiyon (4 Adet)",
    badge: "Çok Sevilen",
    isFeatured: false,
    rating: 4.89,
    reviewCount: 175,
    ingredients: ["Mayalı Kadayıf Hamuru", "Toros Dağ Cevizi", "Pancar Şekeri", "Tarçın"],
    servingOptions: ["Porsiyon (4 Adet)", "Yarım Kilo", "1 Kilo"],
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1621236378699-8597fee6a1ce?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "cevizli-ev-baklavasi",
    categoryId: "baklavalar",
    title: "Geleneksel Cevizli Ev Baklavası",
    tagline: "Hafif Şerbet & Bol Ceviz",
    description: "Annelerimizin bayram sabahı açtığı o nostaljik lezzet. İncecik el açması katlar, yoğun ceviz içi ve hafifletilmiş dengeli şerbet oranı.",
    price: 270,
    priceUnit: "₺ / Porsiyon (1 Kg: ₺680)",
    badge: "Ev Yapımı Usulü",
    isFeatured: false,
    rating: 4.87,
    reviewCount: 160,
    ingredients: ["İnce El Açması Katlar", "Toros Cevizi", "Köy Tereyağı", "Pancar Şekeri"],
    servingOptions: ["Porsiyon", "500 Gr Kutu", "1 Kg Tepsi"],
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "fistikli-prenses-sarma",
    categoryId: "ozel",
    title: "Zümrüt Fıstıklı Prenses Sarma",
    tagline: "Yalnızca %5 Yufka, %95 Antep Fıstığı",
    description: "Hamuru adeta tül gibi incecik, sadece saf yemyeşil Antep fıstığının lezzetini hissedeceğiniz tatlı severlerin en gözde lüks spesiyali.",
    price: 450,
    priceUnit: "₺ / Lüks Porsiyon (1 Kg: ₺1.200)",
    badge: "Lüks Spesiyal",
    isFeatured: true,
    rating: 5.0,
    reviewCount: 310,
    ingredients: ["Saf Zümrüt Boz Fıstık", "Hakiki Urfa Sade Yağı", "Eser Miktarda Tül Yufka"],
    servingOptions: ["Porsiyon (4 Adet)", "500 Gr Lüks Kutu", "1 Kg Lüks Kutu"],
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=900&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1598110750410-b7470433a017?auto=format&fit=crop&w=900&q=80"
  }
];

export const BRAND_STATS = [
  { value: "40+", label: "Yıllık Ustalık & Deneyim" },
  { value: "4", label: "Adana İçi Seçkin Şube" },
  { value: "%100", label: "Doğal Pancar Şekeri & Sade Yağ" },
  { value: "50.000+", label: "Yıllık Memnun Tatlı Dostu" }
];
