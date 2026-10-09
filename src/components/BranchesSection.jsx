import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Sparkles, Check } from 'lucide-react';
import { BRANCHES, BRAND_INFO } from '../data/branches';

export default function BranchesSection({ onSelectBranchForOrder }) {
  const openWhatsAppBranch = (branch) => {
    const text = encodeURIComponent(
      `Merhaba Meşhur Tatlıcı Selim!\n` +
      `${branch.name} için tatlı siparişi vermek ve bilgi almak istiyorum.`
    );
    window.open(`https://wa.me/${branch.whatsapp}?text=${text}`, '_blank');
  };

  const openGoogleMaps = (branch) => {
    const query = encodeURIComponent(`${branch.name}, ${branch.address}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <section id="subeler" className="py-24 relative bg-teal-950 border-t border-gold-500/10">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-800/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 font-semibold">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Adana Genelinde 4 Seçkin Hizmet Noktası</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream-50">
            Lezzet Dolu <span className="gold-gradient-text">Şubelerimiz</span>
          </h2>
          <div className="ornament-divider my-4">
            <span className="w-2.5 h-2.5 rotate-45 bg-gold-400 inline-block"></span>
          </div>
          <p className="text-cream-200/80 text-sm sm:text-base leading-relaxed">
            Yüreğir merkez sipariş hattımızdan Seyhan, Barajyolu ve Baraj şubelerimize kadar Adana'nın her köşesinde taze taş fırın tatlılarıyla hizmetinizdeyiz.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRANCHES.map((branch) => (
            <div
              key={branch.id}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative group hover:-translate-y-1 ${
                branch.isPrimary
                  ? 'bg-gradient-to-b from-teal-900 to-teal-950 border-2 border-gold-400 shadow-gold-glow'
                  : 'glass-card hover:border-gold-500/50 hover:shadow-lg'
              }`}
            >
              {/* Primary Ribbon if applicable */}
              {branch.isPrimary && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full gold-gradient-bg text-teal-950 text-[10px] font-black uppercase tracking-wider shadow-md">
                  Merkez Sipariş Hattı
                </div>
              )}

              <div className="space-y-4">
                
                {/* Branch Header */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gold-400 block mb-1">
                      {branch.badge}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-cream-50 group-hover:text-gold-300 transition-colors">
                      {branch.name}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-teal-950 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                {/* Address */}
                <div className="text-xs text-cream-200/80 leading-relaxed font-light min-h-[40px] flex items-start gap-2">
                  <span className="text-gold-400 mt-0.5">•</span>
                  <span>{branch.address}</span>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-2 text-xs text-cream-300/80 py-1 border-t border-b border-teal-800/40">
                  <Clock className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                  <span>{branch.workingHours}</span>
                </div>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {branch.features.map((feat, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-teal-950/60 border border-gold-500/15 text-[10px] text-cream-200"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-6 mt-4 border-t border-teal-800/40">
                
                {/* Clickable Phone Number */}
                <a
                  href={`tel:${branch.phone}`}
                  className="w-full py-2.5 px-3 rounded-xl bg-teal-900 hover:bg-teal-850 border border-gold-500/30 text-cream-100 font-semibold text-xs flex items-center justify-center gap-2 transition-all group/btn"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400 group-hover/btn:scale-110 transition-transform" />
                  <span>Ara: {branch.phoneDisplay}</span>
                </a>

                {/* Direct WhatsApp Order Button */}
                <button
                  onClick={() => openWhatsAppBranch(branch)}
                  className="w-full py-2.5 px-3 rounded-xl gold-gradient-bg text-teal-950 font-bold text-xs flex items-center justify-center gap-2 shadow-sm hover:opacity-95 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-teal-950" />
                  <span>WhatsApp Sipariş</span>
                </button>

                {/* Yol Tarifi */}
                <button
                  onClick={() => openGoogleMaps(branch)}
                  className="w-full py-1.5 text-center text-[11px] text-cream-300/70 hover:text-gold-400 flex items-center justify-center gap-1 transition-colors"
                >
                  <Navigation className="w-3 h-3 text-gold-400" />
                  <span>Haritada / Yol Tarifi Aç</span>
                </button>

              </div>

            </div>
          ))}
        </div>

        {/* Central Hotline Callout Card */}
        <div className="mt-14 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-teal-900 via-teal-850 to-teal-900 border border-gold-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gold-500/5 blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs uppercase tracking-wider text-gold-400 font-bold">Özel Gün & Toplu Tepsi Siparişleri</span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-cream-50">
                Düğün, Nişan, Bayram ve Kurumsal Siparişleriniz İçin
              </h3>
              <p className="text-xs sm:text-sm text-cream-200/80 max-w-xl">
                Özel ambalajlı lüks hediyelik kutular ve sıcak taş fırın tepsileri için Yüreğir merkez hattımızdan doğrudan bilgi ve teklif alabilirsiniz.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href={`tel:${BRAND_INFO.mainPhone}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full gold-gradient-bg text-teal-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow hover:opacity-95 transition-all"
              >
                <Phone className="w-4 h-4 fill-teal-950" />
                <span>Hemen Ara: {BRAND_INFO.mainPhoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent("Merhaba Meşhur Tatlıcı Selim, toplu tepsi ve özel gün siparişi hakkında bilgi almak istiyorum.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-teal-950 border border-gold-500/30 text-cream-100 hover:text-gold-400 font-semibold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-gold-400" />
                <span>Toplu Sipariş WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
