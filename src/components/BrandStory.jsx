import React from 'react';
import { Sparkles, CheckCircle2, Flame, Award, HeartHandshake, Wheat } from 'lucide-react';
import { BRAND_STATS } from '../data/menu';

export default function BrandStory() {
  const craftPoints = [
    {
      title: "Geleneksel Taş Fırın & Odun Ateşi",
      desc: "Baklavalarımızın ve kadayıflarımızın tabanının ve üstünün eşit nar gibi kızarması için geleneksel taş fırın ısısını muhafaza ediyoruz."
    },
    {
      title: "Hakiki Urfa Sade Yağı (Karakovan)",
      desc: "Margarin veya yapay aromalar asla mutfağımıza giremez. Yalnızca koyun sütünden elde edilen saf sade yağ kullanıyoruz."
    },
    {
      title: "Gaziantep'in Erken Hasat Boz Fıstığı",
      desc: "Zümrüt yeşili rengi ve buram buram aromasıyla tatlılarımıza adını veren lezzeti tarladan özenle seçilen fıstıklara borçluyuz."
    },
    {
      title: "Asırlık Adana Halka & Şerbet Kültürü",
      desc: "Günün her anı taze, dışı cam gibi çıtır çıtır, içi yumuşacık ve sıcacık halka tatlılarımız Adana sokak kültürünün taçlandırılmış halidir."
    }
  ];

  return (
    <section id="hakkimizda" className="py-24 relative bg-gradient-to-b from-teal-950 via-teal-900/60 to-teal-950 border-t border-b border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 font-semibold">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>40 Yıllık Adana Lezzet Geleneği</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream-50">
            Ustalık, Sabır ve <span className="gold-gradient-text">Tavizsiz Kalite</span>
          </h2>
          <div className="ornament-divider my-4">
            <span className="w-2.5 h-2.5 rotate-45 bg-gold-400 inline-block"></span>
          </div>
          <p className="text-cream-200/80 text-sm sm:text-base leading-relaxed">
            Meşhur Tatlıcı Selim, 1980 yılında Adana'da atılan sağlam temellerle; dürüst esnaflığı, taze malzeme aşkını ve Türk tatlı sanatını bugüne taşıyor.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Visual Collage */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-xl group aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1598110750410-b7470433a017?auto=format&fit=crop&w=700&q=80"
                  alt="Antep fıstıklı çıtır baklava yapımı"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-xs font-semibold text-gold-300">Tül İnceliğinde Yufkalar</span>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-xl group aspect-[4/5] mt-6">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80"
                  alt="Ev yapımı tahinli kabak tatlısı"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-xs font-semibold text-gold-300">Kireçte Sertleşen Çıtır Kabak</span>
              </div>
            </div>

            {/* Bottom Quote Banner */}
            <div className="p-5 rounded-2xl bg-teal-900/60 border border-gold-500/25 flex items-start gap-4">
              <Award className="w-8 h-8 text-gold-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-serif font-bold text-cream-50 text-base">Ustanın Sözü</h4>
                <p className="text-xs sm:text-sm text-cream-300/80 italic mt-0.5">
                  "Biz tatlıya sadece fıstık ve şeker katmayız; nesilden nesile aktarılan sabrı, Adana sıcağının bereketini ve misafirimizin duasını katarız."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Craft Points */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-cream-100">
              Gerçek Tatlı Severlerin <br />
              <span className="gold-gradient-text">Vazgeçemediği Adres</span>
            </h3>
            
            <p className="text-sm sm:text-base text-cream-200/85 leading-relaxed font-light">
              Adana'nın dört bir yanındaki şubelerimizde (Yüreğir, Barajyolu, Baraj ve Seyhan), ilk günkü heyecanla her sabah erken saatlerde taş fırınlarımızı ateşliyoruz. 
              Günün her saati tezgahlara çıkan sıcak halka tatlımız, fıstığı taşan burma baklavalarımız ve hafifliğiyle mest eden soğuk baklavamızla Adana'nın tatlı hafızasını yaşatıyoruz.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {craftPoints.map((point, index) => (
                <div key={index} className="p-4 rounded-xl bg-teal-950/70 border border-gold-500/15 hover:border-gold-500/40 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <h5 className="text-xs sm:text-sm font-semibold text-cream-50">{point.title}</h5>
                  </div>
                  <p className="text-xs text-cream-300/70 leading-normal">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#subeler"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-gold-400 hover:text-gold-300 hover:underline underline-offset-4"
              >
                <span>Adana Şubelerimizi Ziyaret Edin</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6">
          {BRAND_STATS.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-teal-900/40 border border-gold-500/20 text-center space-y-2 backdrop-blur-sm hover:border-gold-500/50 transition-all hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gold-400 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-cream-200/90 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
