import React, { useState, useMemo } from 'react';
import { Sparkles, Layers, Flame, Crown, IceCream, Search, Star, ArrowUpRight, ShoppingBag } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menu';
import ItemModal from './ItemModal';

const iconMap = {
  Sparkles,
  Layers,
  Flame,
  Crown,
  IceCream
};

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.categoryId === activeCategory;
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.ingredients && item.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 relative bg-teal-950">
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-800/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 font-semibold">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Geleneksel Ustalıkla Hazırlanan Seçkiler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream-50">
            Eşsiz Tatlı <span className="gold-gradient-text">Menümüz</span>
          </h2>
          <div className="ornament-divider my-4">
            <span className="w-2.5 h-2.5 rotate-45 bg-gold-400 inline-block"></span>
          </div>
          <p className="text-cream-200/80 text-sm sm:text-base leading-relaxed">
            Taş fırından çıkan çıtır burma baklavalar, Adana'nın sıcacık halka tatlısı, zümrüt fıstıklı spesiyaller ve tahinli ev yapımı kabak tatlısı... Her lokmada lezzet şöleni.
          </p>
        </div>

        {/* Category Tabs & Search Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-gold-500/15">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {MENU_CATEGORIES.map((cat) => {
              const IconComponent = iconMap[cat.icon] || Sparkles;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'gold-gradient-bg text-teal-950 shadow-gold-glow scale-105'
                      : 'bg-teal-900/60 hover:bg-teal-900 text-cream-200 border border-gold-500/20 hover:border-gold-500/50'
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${isActive ? 'text-teal-950' : 'text-gold-400'}`} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Tatlı veya malzeme ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-teal-900/70 border border-gold-500/25 focus:border-gold-400 focus:outline-none text-xs sm:text-sm text-cream-50 placeholder-cream-300/40 transition-colors"
            />
            <Search className="w-4 h-4 text-gold-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

        </div>

        {/* Items Count Indicator */}
        <div className="flex items-center justify-between text-xs text-cream-300/60 mb-6 px-1">
          <span>Toplam {filteredItems.length} tatlı çeşidi listeleniyor</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-gold-400 hover:underline"
            >
              Aramayı Temizle
            </button>
          )}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group rounded-2xl overflow-hidden glass-card transition-all duration-300 hover:-translate-y-1.5 flex flex-col cursor-pointer hover:shadow-gold-glow"
            >
              {/* Card Image Container (Aspect Ratio 4:3 as required) */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-teal-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  loading="lazy"
                  onError={(e) => {
                    if (item.fallbackImage) {
                      e.target.src = item.fallbackImage;
                    }
                  }}
                />
                
                {/* Image Gradient Shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/20 to-transparent"></div>

                {/* Badge Tag */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-teal-950 gold-gradient-bg shadow-md">
                    <Sparkles className="w-3 h-3 text-teal-950" />
                    <span>{item.badge}</span>
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-teal-950/80 backdrop-blur-md border border-gold-500/30 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                  <span className="text-[11px] font-bold text-cream-100">{item.rating}</span>
                </div>

                {/* Tagline on image bottom */}
                <div className="absolute bottom-2 left-3 right-3">
                  <p className="text-[11px] font-medium text-gold-300/90 tracking-wide line-clamp-1 drop-shadow-sm">
                    {item.tagline}
                  </p>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-serif font-bold text-cream-50 group-hover:text-gold-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-cream-200/75 leading-relaxed line-clamp-2 font-light">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer: Price & Quick Order */}
                <div className="pt-3 border-t border-teal-800/40 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-cream-300/60 block">Birim Fiyat</span>
                    <span className="text-xl font-serif font-bold text-gold-400">
                      ₺{item.price}
                    </span>
                    <span className="text-[10px] text-cream-300/70 block">{item.priceUnit}</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedItem(item);
                    }}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-900 border border-gold-500/30 text-gold-300 hover:gold-gradient-bg hover:text-teal-950 transition-all text-xs font-semibold shadow-sm"
                  >
                    <span>İncele & İste</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 space-y-4">
            <p className="text-lg text-cream-200">Aradığınız kriterde bir tatlı bulunamadı.</p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 rounded-full gold-gradient-bg text-teal-950 text-xs font-bold uppercase tracking-wider"
            >
              Tüm Menüyü Göster
            </button>
          </div>
        )}

      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <ItemModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
}
