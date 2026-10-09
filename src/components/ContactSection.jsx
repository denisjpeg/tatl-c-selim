import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Instagram, Send, Clock, Sparkles, Check } from 'lucide-react';
import { BRAND_INFO, BRANCHES } from '../data/branches';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '', branch: 'yuregir' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const branch = BRANCHES.find(b => b.id === formData.branch) || BRANCHES[0];
    const text = encodeURIComponent(
      `Merhaba Meşhur Tatlıcı Selim!\n\n` +
      `İsim: ${formData.name}\n` +
      `Telefon: ${formData.phone}\n` +
      `Şube Tercihi: ${branch.name}\n\n` +
      `Mesaj / Sipariş:\n${formData.message}`
    );
    window.open(`https://wa.me/${branch.whatsapp}?text=${text}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="iletisim" className="py-24 relative bg-teal-950 border-t border-gold-500/10">

      <div className="absolute top-1/3 right-10 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-teal-800/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 font-semibold">
            <MessageCircle className="w-4 h-4 text-gold-400" />
            <span>Bize Ulaşın</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream-50">
            Sipariş ve <span className="gold-gradient-text">İletişim</span>
          </h2>
          <div className="ornament-divider my-4">
            <span className="w-2.5 h-2.5 rotate-45 bg-gold-400 inline-block"></span>
          </div>
          <p className="text-cream-200/80 text-sm sm:text-base leading-relaxed">
            Telefon, WhatsApp veya aşağıdaki formu doldurarak bize kolayca ulaşabilirsiniz. Tüm soru ve siparişleriniz için hazırız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-5">

            {/* Main Phone Card */}
            <div className="p-6 rounded-2xl glass-card space-y-4">
              <h3 className="text-base font-serif font-bold text-cream-50 flex items-center gap-2">
                <Phone className="w-5 h-5 text-gold-400" />
                Merkez Sipariş Hattı
              </h3>
              <a
                href={`tel:${BRAND_INFO.mainPhone}`}
                className="block text-2xl sm:text-3xl font-serif font-bold text-gold-400 hover:text-gold-300 transition-colors"
              >
                {BRAND_INFO.mainPhoneDisplay}
              </a>
              <p className="text-xs text-cream-300/70">Yüreğir Merkez — Tüm şube siparişleri için de bu hat uygundur.</p>
              <div className="flex items-center gap-2 text-xs text-cream-300/80">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                <span>{BRAND_INFO.workingHours}</span>
              </div>
            </div>

            {/* WhatsApp Quick Order */}
            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent("Merhaba Meşhur Tatlıcı Selim! Sipariş vermek istiyorum.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-emerald-900/30 border border-emerald-500/30 hover:border-emerald-400/50 hover:bg-emerald-900/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 fill-emerald-400" />
              </div>
              <div>
                <div className="font-bold text-sm text-emerald-300">WhatsApp ile Hemen Sipariş Ver</div>
                <div className="text-xs text-cream-300/70 mt-0.5">{BRAND_INFO.whatsappDisplay} — Anında yanıt</div>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl glass-card hover:border-pink-500/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-900/20 border border-pink-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <div className="font-bold text-sm text-cream-100">Instagram'da Takip Edin</div>
                <div className="text-xs text-gold-400 mt-0.5">{BRAND_INFO.instagramHandle}</div>
                <div className="text-xs text-cream-300/70">Yeni tatlılar, fırsatlar ve haberler</div>
              </div>
            </a>

            {/* Branches Quick List */}
            <div className="p-6 rounded-2xl glass-card space-y-3">
              <h3 className="text-sm font-serif font-bold text-cream-50 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-400" />
                Tüm Adana Şubeleri
              </h3>
              <div className="space-y-2">
                {BRANCHES.map((b) => (
                  <div key={b.id} className="flex items-center justify-between text-xs py-2 border-b border-teal-800/30 last:border-none">
                    <div>
                      <span className="font-semibold text-cream-100">{b.shortTitle}</span>
                      <span className="text-cream-300/60 ml-2">— {b.features[0]}</span>
                    </div>
                    <a href={`tel:${b.phone}`} className="text-gold-400 hover:text-gold-300 font-semibold">
                      {b.phoneDisplay}
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Contact / Order Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-card h-full">

              <div className="mb-6 space-y-1">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-cream-50">
                  WhatsApp Sipariş Formu
                </h3>
                <p className="text-xs sm:text-sm text-cream-300/70">
                  Formu doldurun, mesajınız doğrudan seçtiğiniz şubenin WhatsApp'ına gönderilsin.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1.5">
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Örn: Ahmet Yılmaz"
                    className="w-full px-4 py-3 rounded-xl bg-teal-950/70 border border-teal-800 focus:border-gold-400 focus:outline-none text-sm text-cream-50 placeholder-cream-300/30 transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1.5">
                    Telefon Numaranız *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="05xx xxx xx xx"
                    className="w-full px-4 py-3 rounded-xl bg-teal-950/70 border border-teal-800 focus:border-gold-400 focus:outline-none text-sm text-cream-50 placeholder-cream-300/30 transition-colors"
                  />
                </div>

                {/* Branch Selector */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1.5">
                    Şube Seçimi
                  </label>
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-teal-950/70 border border-teal-800 focus:border-gold-400 focus:outline-none text-sm text-cream-50 transition-colors appearance-none"
                  >
                    {BRANCHES.map((b) => (
                      <option key={b.id} value={b.id} className="bg-teal-950">
                        {b.name} — {b.badge}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Order / Message */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1.5">
                    Sipariş veya Mesajınız *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Örn: 1 Kg Antep Fıstıklı Burma Baklava + 500 Gr Midye Baklava. Bugün saat 18:00 için hazır olur mu?"
                    className="w-full px-4 py-3 rounded-xl bg-teal-950/70 border border-teal-800 focus:border-gold-400 focus:outline-none text-sm text-cream-50 placeholder-cream-300/30 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-all shadow-gold-glow ${
                    submitted
                      ? 'bg-emerald-600/80 border border-emerald-500/50 text-white'
                      : 'gold-gradient-bg text-teal-950 hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0'
                  }`}
                >
                  {submitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>WhatsApp'a Yönlendiriliyorsunuz...</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5 fill-teal-950" />
                      <span>WhatsApp ile Gönder</span>
                    </>
                  )}
                </button>

                <p className="text-[10px] text-cream-300/50 text-center pt-1">
                  Bu form sizi doğrudan WhatsApp'a yönlendirir. Hiçbir kişisel veriniz sunucumuzda saklanmaz.
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
