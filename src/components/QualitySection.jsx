import React from 'react';
import { ShieldCheck, Sparkles, Flame, Clock, Star, Quote, Award, CheckCircle2 } from 'lucide-react';
import { QUALITY_PROMISES, TESTIMONIALS } from '../data/branches';

const iconMap = {
  ShieldCheck,
  Sparkles,
  Flame,
  Clock,
  Award,
  CheckCircle2
};

export default function QualitySection() {
  return (
    <section id="kalite" className="py-24 relative bg-gradient-to-b from-teal-950 via-teal-900/40 to-teal-950 border-t border-gold-500/10">

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px]"></div>
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-gold-500/6 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 font-semibold">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>Tavizsiz Kalite Taahhütlerimiz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream-50">
            Neden <span className="gold-gradient-text">Tatlıcı Selim?</span>
          </h2>
          <div className="ornament-divider my-4">
            <span className="w-2.5 h-2.5 rotate-45 bg-gold-400 inline-block"></span>
          </div>
          <p className="text-cream-200/80 text-sm sm:text-base leading-relaxed">
            1980'den bu yana Adana'da güven kazanmamızın sırrı; ne bir kısayol, ne bir taviz. Sadece doğru malzeme, sabırlı ustalık ve samimi bir hizmet anlayışı.
          </p>
        </div>

        {/* Quality Promise Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {QUALITY_PROMISES.map((promise, index) => {
            const IconComponent = iconMap[promise.icon] || Sparkles;
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-6 glass-card hover:-translate-y-1 transition-all duration-300 hover:shadow-gold-glow flex flex-col gap-4"
              >
                {/* Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-900 to-teal-950 border border-gold-500/30 flex items-center justify-center shadow-md group-hover:shadow-gold-glow group-hover:border-gold-400 transition-all">
                  <IconComponent className="w-6 h-6 text-gold-400" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-cream-50 group-hover:text-gold-300 transition-colors leading-snug">
                    {promise.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cream-200/75 leading-relaxed font-light">
                    {promise.description}
                  </p>
                </div>

                {/* Bottom Gold Accent Line */}
                <div className="mt-auto pt-4 border-t border-gold-500/15">
                  <div className="flex items-center gap-2 text-xs text-gold-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Garanti Ediyoruz</span>
                  </div>
                </div>

                {/* Hover shimmer overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold-500/5 via-transparent to-transparent pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Daily Fresh Banner */}
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-teal-900/80 via-teal-900 to-teal-900/80 border border-gold-500/25 mb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none rounded-3xl"></div>
          <div className="absolute top-4 right-4 w-40 h-40 bg-gold-400/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">

            <div className="md:col-span-2 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Her Gün 4 Kez Taze Üretim</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-cream-50">
                Tezgahta Eski Tatlı <span className="gold-gradient-text">Bulamazsınız</span>
              </h3>

              <p className="text-sm sm:text-base text-cream-200/80 leading-relaxed font-light max-w-2xl">
                Her sabah erken saatte fırınlarımız çalışmaya başlar. Taze çıkan tepsiler tezgaha ulaştığında siz onların sıcaklığını ve çıtırlığını hissedersiniz.
                Günün sonunda kalan tatlı kaliteden ödün vermemek adına asla satışa sunulmaz.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="text-center">
                <div className="text-5xl font-serif font-black text-gold-400">4×</div>
                <div className="text-sm text-cream-200 font-semibold">Günlük Taze Üretim</div>
                <div className="text-xs text-cream-300/60 mt-1">Her ürün için gün boyu kesintisiz</div>
              </div>
            </div>

          </div>
        </div>

        {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 font-semibold">
            <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
            <span>Müşterilerimiz Ne Diyor?</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-cream-50">
            Binlerce Mutlu <span className="gold-gradient-text">Tatlı Dostu</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-6 glass-card hover:-translate-y-1 hover:shadow-gold-glow transition-all duration-300 flex flex-col gap-5"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-gold-500/30 flex-shrink-0" />

              {/* Comment */}
              <p className="text-sm text-cream-200/85 leading-relaxed font-light italic flex-1">
                "{review.comment}"
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-0.5">
                {[...Array(review.rating)].map((_, si) => (
                  <Star key={si} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Reviewer Info */}
              <div className="pt-4 border-t border-teal-800/40 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm text-cream-50">{review.name}</div>
                  <div className="text-[11px] text-cream-300/60">{review.role}</div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-medium text-gold-400">{review.branch}</div>
                  <div className="text-[10px] text-cream-300/50">{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating Summary Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-teal-900/50 border border-gold-500/20 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
          <div>
            <div className="text-5xl font-serif font-black text-gold-400">4.9</div>
            <div className="flex items-center justify-center gap-0.5 mt-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <div className="text-xs text-cream-300/70 mt-1">Ortalama Müşteri Puanı</div>
          </div>

          <div className="hidden sm:block w-px h-16 bg-gold-500/20"></div>

          <div>
            <div className="text-5xl font-serif font-black text-gold-400">50K+</div>
            <div className="text-xs text-cream-300/70 mt-1">Yıllık Mutlu Müşteri</div>
          </div>

          <div className="hidden sm:block w-px h-16 bg-gold-500/20"></div>

          <div>
            <div className="text-5xl font-serif font-black text-gold-400">40+</div>
            <div className="text-xs text-cream-300/70 mt-1">Yıl Aralıksız Hizmet</div>
          </div>

          <div className="hidden sm:block w-px h-16 bg-gold-500/20"></div>

          <div>
            <div className="text-5xl font-serif font-black text-gold-400">4</div>
            <div className="text-xs text-cream-300/70 mt-1">Adana'daki Şube</div>
          </div>
        </div>

      </div>
    </section>
  );
}
