import React, { useState } from 'react';
import { X, Phone, MessageCircle, Sparkles, Check, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';
import { BRANCHES } from '../data/branches';

export default function ItemModal({ item, onClose }) {
  if (!item) return null;

  const [selectedServing, setSelectedServing] = useState(item.servingOptions ? item.servingOptions[0] : "Porsiyon");
  const [selectedBranchId, setSelectedBranchId] = useState("yuregir");
  const [quantity, setQuantity] = useState(1);

  const selectedBranch = BRANCHES.find(b => b.id === selectedBranchId) || BRANCHES[0];

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Merhaba Meşhur Tatlıcı Selim!\n\n${selectedBranch.name} için sipariş vermek istiyorum:\n` +
      `• Ürün: ${item.title}\n` +
      `• Porsiyon / Boyut: ${selectedServing}\n` +
      `• Adet / Miktar: ${quantity}\n` +
      `• Yaklaşık Tutar: ${item.price * quantity} ₺\n\n` +
      `Sipariş durumunu ve teslimat bilgisini teyit edebilir misiniz?`
    );
    window.open(`https://wa.me/${selectedBranch.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-teal-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-teal-900 border border-gold-500/40 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-teal-950/80 text-cream-200 hover:text-gold-400 border border-gold-500/30 transition-colors"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Top Image & Badge Header */}
          <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 aspect-[16/9] sm:aspect-[2/1] bg-teal-950">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                if (item.fallbackImage) e.target.src = item.fallbackImage;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/20 to-transparent"></div>
            
            {/* Top Badges */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold gold-gradient-bg text-teal-950 shadow-md">
                {item.badge}
              </span>
            </div>

            {/* Bottom Title overlay */}
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
              <div>
                <p className="text-xs text-gold-400 font-medium">{item.tagline}</p>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-cream-50">{item.title}</h3>
              </div>
              <div className="text-right">
                <span className="text-xl sm:text-2xl font-serif font-bold text-gold-400">₺{item.price}</span>
                <span className="block text-[11px] text-cream-300/70">{item.priceUnit}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-1">Lezzet Detayı</h4>
            <p className="text-sm sm:text-base text-cream-200/90 leading-relaxed font-light">
              {item.description}
            </p>
          </div>

          {/* Natural Ingredients */}
          {item.ingredients && (
            <div>
              <h4 className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">Özel Malzemeler & İçerik</h4>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ing, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-teal-950/60 border border-gold-500/20 text-xs text-cream-100">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                    <span>{ing}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Serving / Portion Selector */}
          {item.servingOptions && (
            <div>
              <h4 className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">Porsiyon / Paket Seçimi</h4>
              <div className="grid grid-cols-3 gap-2">
                {item.servingOptions.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedServing(opt)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                      selectedServing === opt
                        ? 'bg-gold-500/20 border-gold-400 text-gold-300 shadow-sm'
                        : 'bg-teal-950/40 border-teal-800 text-cream-300 hover:border-gold-500/30'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-teal-950/50 border border-teal-800">
            <span className="text-xs uppercase tracking-wider text-cream-200 font-semibold">Miktar / Adet</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg bg-teal-900 border border-gold-500/20 text-cream-100 flex items-center justify-center font-bold text-sm hover:border-gold-400"
              >
                -
              </button>
              <span className="font-serif font-bold text-gold-300 text-base min-w-[20px] text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg bg-teal-900 border border-gold-500/20 text-cream-100 flex items-center justify-center font-bold text-sm hover:border-gold-400"
              >
                +
              </button>
            </div>
          </div>

          {/* Branch Picker */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">Teslim Alınacak / Sipariş Verilecek Şube</h4>
            <div className="grid grid-cols-2 gap-2">
              {BRANCHES.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBranchId(b.id)}
                  className={`p-2.5 rounded-xl text-left border transition-all ${
                    selectedBranchId === b.id
                      ? 'bg-gold-500/20 border-gold-400 text-gold-300'
                      : 'bg-teal-950/40 border-teal-800 text-cream-300 hover:border-gold-500/30'
                  }`}
                >
                  <p className="text-xs font-bold leading-tight">{b.shortTitle}</p>
                  <p className="text-[10px] text-cream-300/70 truncate">{b.badge}</p>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-6 bg-teal-950 border-t border-gold-500/20 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleWhatsAppOrder}
            className="w-full sm:flex-1 py-3.5 px-4 rounded-xl gold-gradient-bg text-teal-950 font-bold text-xs sm:text-sm tracking-wide uppercase flex items-center justify-center gap-2 shadow-gold-glow hover:opacity-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-teal-950" />
            <span>WhatsApp ile Hemen İste</span>
          </button>

          <a
            href={`tel:${selectedBranch.phone}`}
            className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-teal-900 border border-gold-500/30 text-cream-100 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-teal-850 transition-all"
          >
            <Phone className="w-4 h-4 text-gold-400" />
            <span>Şubeyi Ara ({selectedBranch.shortTitle})</span>
          </a>
        </div>

      </div>
    </div>
  );
}
