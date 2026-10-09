import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu as MenuIcon, X, MapPin, Instagram, Sparkles } from 'lucide-react';
import Logo from './Logo';
import { BRAND_INFO, BRANCHES } from '../data/branches';

export default function Navbar({ onOpenOrderModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Ana Sayfa", href: "#hero" },
    { name: "Hakkımızda", href: "#hakkimizda" },
    { name: "Menümüz", href: "#menu" },
    { name: "Şubelerimiz", href: "#subeler" },
    { name: "Kalite & Güven", href: "#kalite" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-header shadow-luxury py-3 border-b border-gold-500/20' 
        : 'bg-teal-950/80 backdrop-blur-md py-4 md:py-5 border-b border-gold-500/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center group">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-cream-100 hover:text-gold-400 transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Quick Order Hotline */}
            <a
              href={`tel:${BRAND_INFO.mainPhone}`}
              className="flex items-center gap-2 text-xs font-semibold text-cream-200 hover:text-gold-400 bg-teal-900/60 hover:bg-teal-900 px-3 py-2 rounded-full border border-gold-500/20 transition-all"
              title="Yüreğir Merkez Sipariş Hattı"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
              <span>0322 224 17 04</span>
            </a>

            {/* Instagram Quick Link */}
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-300 hover:text-gold-400 transition-colors p-2 rounded-full hover:bg-teal-900/50"
              title="Instagram: @meshurtatliciselim"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Prominent "Sipariş Ver" CTA */}
            <button
              onClick={() => onOpenOrderModal()}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs tracking-wider uppercase text-teal-950 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-gold-glow hover:shadow-gold-glow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-950" />
              <span>Sipariş Ver</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenOrderModal()}
              className="px-3 py-1.5 rounded-full font-semibold text-[11px] uppercase tracking-wider text-teal-950 bg-gradient-to-r from-gold-400 to-gold-500 shadow-sm"
            >
              Sipariş
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-cream-100 hover:text-gold-400 rounded-lg hover:bg-teal-900/50 transition-colors"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-header border-b border-gold-500/20 px-5 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-cream-100 hover:text-gold-400 text-base font-medium py-1.5 border-b border-teal-800/40"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Branch Phone & Order in Mobile Drawer */}
          <div className="pt-3 space-y-2.5">
            <a
              href={`tel:${BRAND_INFO.mainPhone}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-900 border border-gold-500/30 text-cream-100 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Hemen Ara: {BRAND_INFO.mainPhoneDisplay}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl gold-gradient-bg text-teal-950 font-bold text-sm tracking-wide shadow-gold-glow"
            >
              <Sparkles className="w-4 h-4" />
              <span>Hemen Sipariş Oluştur</span>
            </button>

            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 text-xs text-cream-300 hover:text-gold-400"
            >
              <Instagram className="w-4 h-4 text-gold-400" />
              <span>Instagram: {BRAND_INFO.instagramHandle}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
