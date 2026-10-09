import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { BRAND_INFO } from '../data/branches';

/**
 * Floating action buttons: scroll-to-top, WhatsApp and phone shortcuts.
 * Only visible after the user scrolls down a bit.
 */
export default function FloatingActions({ onOpenOrderModal }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-center gap-3">

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent("Merhaba Meşhur Tatlıcı Selim! Sipariş vermek istiyorum.")}`}
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp ile Sipariş Ver"
        className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center transition-all hover:scale-110 active:scale-100"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${BRAND_INFO.mainPhone}`}
        title="Hemen Ara"
        className="w-12 h-12 rounded-full gold-gradient-bg text-teal-950 shadow-gold-glow hover:shadow-gold-glow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-100"
      >
        <Phone className="w-5 h-5 fill-teal-950" />
      </a>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Sayfanın Başına Dön"
        className="w-10 h-10 rounded-full bg-teal-900 border border-gold-500/30 hover:border-gold-400 text-cream-200 hover:text-gold-400 flex items-center justify-center transition-all hover:scale-110"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

    </div>
  );
}
