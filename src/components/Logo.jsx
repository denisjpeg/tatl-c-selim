import React from 'react';

export default function Logo({ size = "md", className = "" }) {
  const isLarge = size === "lg";
  const isSmall = size === "sm";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Emblem Icon */}
      <div className={`relative flex items-center justify-center rounded-full border border-gold-400/50 bg-gradient-to-br from-teal-900 to-teal-950 shadow-gold-glow flex-shrink-0 ${
        isLarge ? 'w-16 h-16' : isSmall ? 'w-10 h-10' : 'w-12 h-12'
      }`}>
        <div className="absolute inset-1 rounded-full border border-gold-500/30 border-dashed animate-spin-slow"></div>
        {/* Crown & Flourish Silhouette */}
        <span className={`text-gold-400 font-serif font-black tracking-tighter ${
          isLarge ? 'text-2xl' : isSmall ? 'text-base' : 'text-lg'
        }`}>
          S
        </span>
        <div className="absolute -top-1 w-2 h-2 rounded-full bg-gold-400 shadow-sm"></div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-left leading-tight">
        <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-gold-400 font-medium font-sans">
          Meşhur
        </span>
        <span className={`font-serif font-bold tracking-tight text-cream-50 ${
          isLarge ? 'text-2xl md:text-3xl' : isSmall ? 'text-lg' : 'text-xl md:text-2xl'
        }`}>
          Tatlıcı <span className="gold-gradient-text">Selim</span>
        </span>
        <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-cream-300/60 font-sans">
          Adana • 1980
        </span>
      </div>
    </div>
  );
}
