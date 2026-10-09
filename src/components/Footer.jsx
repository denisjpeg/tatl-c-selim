import React from 'react';
import { Phone, Instagram, MapPin, Clock, MessageCircle, ExternalLink, Heart, Code2 } from 'lucide-react';
import Logo from './Logo';
import { BRAND_INFO, BRANCHES } from '../data/branches';
import { MENU_CATEGORIES } from '../data/menu';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal-950 border-t border-gold-500/20 pt-16 pb-8 relative overflow-hidden">

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:28px_28px]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">

          {/* Column 1: Brand Identity & About */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            <Logo size="md" />

            <p className="text-xs sm:text-sm text-cream-200/70 leading-relaxed font-light">
              {BRAND_INFO.tagline}. 1980'den bu yana Adana'nın dört bir yanında taze taş fırın baklava, halka tatlısı ve geleneksel şerbetli lezzetler sunuyoruz.
            </p>

            {/* Instagram CTA */}
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-900/40 to-purple-900/30 border border-pink-500/30 text-xs font-semibold text-pink-300 hover:border-pink-400/50 hover:text-pink-200 transition-all group"
            >
              <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>{BRAND_INFO.instagramHandle}</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            {/* Working Hours */}
            <div className="flex items-start gap-3 pt-2">
              <Clock className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-cream-100 mb-0.5">Çalışma Saatleri</p>
                <p className="text-xs text-cream-300/70">{BRAND_INFO.workingHours}</p>
                <p className="text-[11px] text-cream-300/50 mt-0.5">Tüm şubeler — Haftanın 7 günü</p>
              </div>
            </div>
          </div>

          {/* Column 2: Branches List */}
          <div className="space-y-4">
            <h4 className="text-sm font-serif font-bold text-cream-50 uppercase tracking-widest pb-2 border-b border-gold-500/20">
              Şubelerimiz
            </h4>
            <div className="space-y-4">
              {BRANCHES.map((branch) => (
                <div key={branch.id} className="space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    <span className="text-xs font-semibold text-cream-100">{branch.name}</span>
                  </div>
                  {branch.address && (
                    <p className="text-[11px] text-cream-300/60 pl-5 leading-normal">{branch.address}</p>
                  )}
                  <a
                    href={`tel:${branch.phone}`}
                    className="text-[11px] text-gold-400 hover:text-gold-300 font-medium pl-5 block transition-colors"
                  >
                    ☎ {branch.phoneDisplay}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Quick Menu Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-serif font-bold text-cream-50 uppercase tracking-widest pb-2 border-b border-gold-500/20">
              Hızlı Menü
            </h4>
            <div className="space-y-2">
              {[
                { label: "Ana Sayfa", href: "#hero" },
                { label: "Hakkımızda", href: "#hakkimizda" },
                { label: "Tüm Menü", href: "#menu" },
                { label: "Şubelerimiz", href: "#subeler" },
                { label: "Kalite & Güven", href: "#kalite" },
                { label: "İletişim & Sipariş", href: "#iletisim" }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-cream-300/70 hover:text-gold-400 flex items-center gap-1.5 transition-colors py-0.5"
                >
                  <span className="text-gold-500">›</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            {/* Menu Categories */}
            <div className="pt-4 space-y-2">
              <h5 className="text-[11px] uppercase tracking-widest text-gold-400/70 font-semibold">Tatlı Kategorileri</h5>
              {MENU_CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <a
                  key={cat.id}
                  href="#menu"
                  className="text-xs text-cream-300/60 hover:text-gold-400 flex items-center gap-1.5 transition-colors py-0.5"
                >
                  <span className="text-gold-500">›</span>
                  <span>{cat.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Order & Contact CTA */}
          <div className="space-y-4">
            <h4 className="text-sm font-serif font-bold text-cream-50 uppercase tracking-widest pb-2 border-b border-gold-500/20">
              Sipariş Ver
            </h4>

            <div className="space-y-3">
              <a
                href={`tel:${BRAND_INFO.mainPhone}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-teal-900/60 border border-gold-500/20 hover:border-gold-400/50 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg gold-gradient-bg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-teal-950 fill-teal-950" />
                </div>
                <div>
                  <p className="text-[11px] text-cream-300/70">Hemen Ara</p>
                  <p className="text-sm font-bold text-cream-50">{BRAND_INFO.mainPhoneDisplay}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent("Merhaba Meşhur Tatlıcı Selim! Sipariş vermek istiyorum.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-emerald-900/30 border border-emerald-500/25 hover:border-emerald-400/50 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-4 h-4 text-white fill-white" />
                </div>
                <div>
                  <p className="text-[11px] text-cream-300/70">WhatsApp Sipariş</p>
                  <p className="text-sm font-bold text-emerald-300">Mesaj Gönder</p>
                </div>
              </a>

              <a
                href="#menu"
                className="w-full block text-center py-3 rounded-xl gold-gradient-bg text-teal-950 text-xs font-black uppercase tracking-wider shadow-gold-glow hover:opacity-95 transition-all"
              >
                Menüyü İncele
              </a>
            </div>
          </div>

        </div>

        {/* Divider Ornament */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold-500/30"></div>
          <div className="w-3 h-3 rotate-45 bg-gold-400/50"></div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold-500/30"></div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-cream-300/50">

          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {currentYear} Meşhur Tatlıcı Selim. Tüm hakları saklıdır.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Adana, Türkiye</span>
          </div>

          <div className="flex items-center gap-1.5 text-center">
            <span>Web Tasarım & Geliştirme:</span>
            <span className="inline-flex items-center gap-1 text-gold-400/80">
              <Code2 className="w-3 h-3" />
              <span>Özel Yazılım Projesi</span>
            </span>
            <span className="hidden sm:inline text-cream-300/30">•</span>
            <span className="hidden sm:inline">React & Tailwind CSS ile yapıldı</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
