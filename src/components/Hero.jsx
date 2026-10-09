import React from 'react';
import { Phone, ArrowRight, Sparkles, Award, ShieldCheck, Flame, Star } from 'lucide-react';
import { BRAND_INFO } from '../data/branches';

export default function Hero({ onOpenOrderModal }) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-800/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-700/20 rounded-full blur-2xl pointer-events-none"></div>

      {/* Decorative Traditional Geometric Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Storytelling & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-900/80 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-medium tracking-wide shadow-sm animate-pulse">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Adana'nın 1980'den Beri Değişmeyen Lezzet Mirası</span>
            </div>

            {/* Main Headline with Gold Gradient */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif font-bold text-cream-50 leading-[1.15] tracking-tight">
              Damaklarda Kalan <br className="hidden sm:inline" />
              <span className="gold-gradient-text italic font-normal">Geleneksel ve Eşsiz</span> <br />
              Tatlı Ziyafeti
            </h1>

            {/* Brand Storytelling Subtitle */}
            <p className="text-base sm:text-lg text-cream-200/80 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              {BRAND_INFO.description} Çıtır burma baklavalardan sıcak halka tatlısına, fıstıklı spesiyallerden tahinli kabak tatlısına uzanan 40 yıllık lezzet yolculuğu.
            </p>

            {/* Quality Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <div className="flex items-center gap-2 bg-teal-900/40 border border-gold-500/20 px-3 py-1.5 rounded-lg text-xs text-cream-200">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                <span>%100 Doğal Pancar Şekeri</span>
              </div>
              <div className="flex items-center gap-2 bg-teal-900/40 border border-gold-500/20 px-3 py-1.5 rounded-lg text-xs text-cream-200">
                <Flame className="w-3.5 h-3.5 text-gold-400" />
                <span>Taş Fırın & Urfa Sade Yağı</span>
              </div>
              <div className="flex items-center gap-2 bg-teal-900/40 border border-gold-500/20 px-3 py-1.5 rounded-lg text-xs text-cream-200">
                <Award className="w-3.5 h-3.5 text-gold-400" />
                <span>1. Kalite Boz Antep Fıstığı</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              {/* Explore Menu CTA */}
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase text-teal-950 gold-gradient-bg hover:opacity-95 shadow-gold-glow hover:shadow-gold-glow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Menüyü İncele</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Instant Call CTA */}
              <a
                href={`tel:${BRAND_INFO.mainPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full font-semibold text-sm tracking-wide text-cream-100 bg-teal-900/70 hover:bg-teal-900 border border-gold-500/40 hover:border-gold-400 transition-all shadow-md group"
              >
                <Phone className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
                <span>Hemen Arayın: {BRAND_INFO.mainPhoneDisplay}</span>
              </a>

              {/* Order Modal Trigger */}
              <button
                onClick={() => onOpenOrderModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs font-semibold tracking-wider uppercase text-gold-400 hover:text-gold-300 underline underline-offset-4 decoration-gold-500/40 hover:decoration-gold-400 transition-all cursor-pointer"
              >
                <span>Hızlı Sipariş Formu</span>
              </button>
            </div>

            {/* Social Proof Mini Bar */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs text-cream-300/70">
              <div className="flex items-center text-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <span className="border-l border-teal-800 pl-4 font-medium text-cream-200">
                4.9 / 5.0 (Adana Genelinde 4 Şube & Binlerce Mutlu Müşteri)
              </span>
            </div>

          </div>

          {/* Right Column: Hero Visual Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Gold Ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-gold-500/20 via-teal-800/40 to-gold-400/30 blur-lg"></div>

              {/* Main Visual Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-gold-500/30 shadow-2xl bg-teal-900/40 group">
                
                {/* Hero Dessert Image */}
                <img
                  src="https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1000&q=80"
                  alt="Meşhur Tatlıcı Selim Fıstıklı Burma Baklava ve Geleneksel Tatlılar"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to high quality Turkish pastry visual
                    e.target.src = "https://images.unsplash.com/photo-1598110750410-b7470433a017?auto=format&fit=crop&w=1000&q=80";
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/20 to-transparent"></div>

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 bg-teal-950/90 backdrop-blur-md border border-gold-500/40 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-xs font-semibold text-gold-300 uppercase tracking-wider">Şu An Fırından Çıktı</span>
                </div>

                {/* Floating Bottom Card: Signature Burma */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-teal-950/90 backdrop-blur-md border border-gold-500/30 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-gold-400 font-medium">Usta Spesiyali</span>
                      <h2 className="text-base sm:text-lg font-serif font-bold text-cream-50">Antep Fıstıklı Burma Baklava</h2>
                      <p className="text-xs text-cream-300/80">Hakiki sade yağ ve taze fıstık ile</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-cream-300/70 block">Porsiyon</span>
                      <span className="text-lg font-bold text-gold-400 font-serif">₺360</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Decorative Stamp Card */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-teal-900/95 border border-gold-500/40 shadow-2xl backdrop-blur-md">
                <div className="w-11 h-11 rounded-full gold-gradient-bg flex items-center justify-center text-teal-950 font-bold text-sm shadow-md">
                  40+
                </div>
                <div className="text-left leading-tight pr-2">
                  <p className="text-xs font-bold text-cream-100">Yıllık Tecrübe</p>
                  <p className="text-[10px] text-gold-400">Adana'nın Yerel Gururu</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
