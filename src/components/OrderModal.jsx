import React, { useState, useEffect } from 'react';
import { X, Phone, MessageCircle, Sparkles, ChevronRight, MapPin } from 'lucide-react';
import { BRANCHES, BRAND_INFO } from '../data/branches';
import { MENU_ITEMS } from '../data/menu';

/**
 * Global Order Modal (Quick Order / Sipariş Ver)
 * Triggered by the "Sipariş Ver" button in the Navbar.
 * Lets user pick a branch and popular items, then sends to WhatsApp.
 */
export default function OrderModal({ isOpen, onClose }) {
  const [selectedBranch, setSelectedBranch] = useState(BRANCHES[0]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [customNote, setCustomNote] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const featuredItems = MENU_ITEMS.filter(item => item.isFeatured).slice(0, 6);

  const toggleItem = (item) => {
    setSelectedItems(prev =>
      prev.find(i => i.id === item.id)
        ? prev.filter(i => i.id !== item.id)
        : [...prev, item]
    );
  };

  const buildWhatsAppText = () => {
    let text = `Merhaba Meşhur Tatlıcı Selim!\n\n`;
    text += `📍 Şube: ${selectedBranch.name}\n\n`;
    if (selectedItems.length > 0) {
      text += `🍮 İlgilendiğim Tatlılar:\n`;
      selectedItems.forEach(item => {
        text += `• ${item.title} (₺${item.price} / ${item.priceUnit})\n`;
      });
      text += '\n';
    }
    if (customNote) {
      text += `📝 Notum / Özel İsteğim:\n${customNote}\n\n`;
    }
    text += `Sipariş durumunu ve mevcut ürünleri teyit edebilir misiniz?`;
    return encodeURIComponent(text);
  };

  const handleSendWhatsApp = () => {
    window.open(`https://wa.me/${selectedBranch.whatsapp}?text=${buildWhatsAppText()}`, '_blank');
    onClose();
  };

  const handleCallBranch = () => {
    window.location.href = `tel:${selectedBranch.phone}`;
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-teal-950/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-xl bg-teal-900 border border-gold-500/40 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold-500/20 bg-teal-950/40">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 font-semibold mb-0.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hızlı Sipariş</span>
            </div>
            <h2 className="text-xl font-serif font-bold text-cream-50">Sipariş Oluştur</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-teal-950/60 text-cream-300 hover:text-gold-400 border border-teal-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-6 space-y-6">

          {/* 1. Branch Selector */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-3 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Şube Seçin
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {BRANCHES.map(branch => (
                <button
                  key={branch.id}
                  onClick={() => setSelectedBranch(branch)}
                  className={`p-3 rounded-xl text-left border transition-all text-xs ${
                    selectedBranch.id === branch.id
                      ? 'bg-gold-500/20 border-gold-400 text-gold-200 shadow-sm'
                      : 'bg-teal-950/40 border-teal-800 text-cream-300 hover:border-gold-500/40'
                  }`}
                >
                  <p className="font-bold">{branch.shortTitle}</p>
                  <p className="text-[10px] opacity-70 mt-0.5 truncate">{branch.badge}</p>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Popular Items Quick Select */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Popüler Tatlılardan Seçin (isteğe bağlı)
            </h3>
            <div className="space-y-2">
              {featuredItems.map(item => {
                const isSelected = selectedItems.find(i => i.id === item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleItem(item)}
                    className={`w-full p-3 rounded-xl text-left border transition-all flex items-center gap-3 ${
                      isSelected
                        ? 'bg-gold-500/15 border-gold-400 text-gold-200'
                        : 'bg-teal-950/40 border-teal-800 text-cream-200 hover:border-gold-500/30'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded flex items-center justify-center border flex-shrink-0 transition-colors ${
                      isSelected ? 'bg-gold-400 border-gold-400 text-teal-950' : 'border-teal-700'
                    }`}>
                      {isSelected && <span className="text-[10px] font-black">✓</span>}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold truncate">{item.title}</p>
                      <p className="text-[10px] text-cream-300/60 truncate">{item.tagline}</p>
                    </div>
                    <span className="text-xs font-bold text-gold-400 flex-shrink-0">₺{item.price}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Custom Note */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">
              Özel Notunuz / Ek Sipariş
            </h3>
            <textarea
              rows={3}
              placeholder="Özel istek, adet bilgisi, teslimat notu, ek ürün..."
              value={customNote}
              onChange={e => setCustomNote(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-teal-950/70 border border-teal-800 focus:border-gold-400 focus:outline-none text-xs text-cream-50 placeholder-cream-300/30 resize-none"
            />
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="p-4 sm:p-5 border-t border-gold-500/20 bg-teal-950/60 space-y-2.5">

          <button
            onClick={handleSendWhatsApp}
            className="w-full py-4 rounded-xl gold-gradient-bg text-teal-950 font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-gold-glow hover:opacity-95 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-teal-950" />
            <span>WhatsApp ile Gönder</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleCallBranch}
            className="w-full py-3 rounded-xl bg-teal-950 border border-gold-500/25 text-cream-100 font-semibold text-sm flex items-center justify-center gap-2.5 hover:border-gold-400/50 transition-all"
          >
            <Phone className="w-4 h-4 text-gold-400" />
            <span>Ara: {selectedBranch.shortTitle} — {selectedBranch.phoneDisplay}</span>
          </button>

        </div>
      </div>
    </div>
  );
}
