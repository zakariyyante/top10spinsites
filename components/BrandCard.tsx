'use client';

import Image from 'next/image';
import { Brand } from '@/app/data/brands';
import { track } from '@vercel/analytics';

interface BrandCardProps {
  brand: Brand;
  index: number;
  gclid?: string;
}

export default function BrandCard({ brand, index, gclid }: BrandCardProps) {
  const buildUrl = (url: string, gclidValue?: string) => {
    if (!gclidValue) return url;
    return url + gclidValue;
  };

  const handleCardClick = () => {
    track('Brand Click', { brand: brand.name });
    
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion();
    }

    window.open(buildUrl(brand.url, gclid), '_blank');
  };

  const getRankBadge = (idx: number) => {
    if (idx === 0) return { label: 'ELITE', color: 'from-[#ffd700] via-[#fff7ad] to-[#b8860b]', textColor: 'text-black' };
    if (idx === 1) return { label: 'PRO', color: 'from-[#e2e8f0] via-[#f8fafc] to-[#94a3b8]', textColor: 'text-black' };
    if (idx === 2) return { label: 'TOP', color: 'from-[#d97706] via-[#fbbf24] to-[#92400e]', textColor: 'text-white' };
    return null;
  };

  const badge = getRankBadge(index);

  return (
    <div 
      onClick={handleCardClick}
      className="relative casino-card-bg rounded-3xl p-6 md:p-8 flex flex-col gap-6 cursor-pointer transition-all hover:scale-[1.01] hover:bg-white/5 casino-glow group border border-white/5"
    >
      {/* Top Row: Logo & Promotion */}
      <div className="flex flex-row items-center gap-6 md:gap-12">
        {/* Logo & Rating */}
        <div className="flex flex-col items-center gap-3 w-32 md:w-48 shrink-0">
          <div className="relative w-full aspect-[3/2] bg-white/5 rounded-2xl flex items-center justify-center p-3 border border-white/10 group-hover:border-primary/30 transition-colors">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={140}
              height={70}
              className="relative z-10 object-contain brightness-110 group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-xl font-black italic gold-text tracking-tighter leading-none">{brand.rating.toFixed(1)}</div>
            <div className="flex gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-xs ${i < Math.floor(brand.rating / 2) ? "text-accent drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]" : "text-white/10"}`}>
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Promotion Info */}
        <div className="flex flex-col justify-center flex-1 gap-3 min-w-0">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                {index % 2 === 0 ? 'Same Hour Withdrawal' : 'Same Day Payout'}
              </span>
            </div>
            {badge && (
              <div className={`hidden md:block bg-gradient-to-r ${badge.color} ${badge.textColor} text-[10px] font-black px-4 py-1 rounded-full shadow-lg uppercase tracking-[0.1em]`}>
                {badge.label} CHOICE
              </div>
            )}
          </div>
          
          <h3 className="text-xl md:text-5xl font-black italic leading-tight group-hover:cyan-text transition-all duration-300 uppercase tracking-tighter">
            {brand.bonus}
          </h3>
        </div>
      </div>

      {/* Bottom Row: Long CTA Button */}
      <div className="w-full flex flex-col gap-3">
        <button className="w-full btn-primary py-5 md:py-6 rounded-2xl text-sm md:text-xl font-black italic gold-shimmer group-hover:scale-[1.02] active:scale-95 uppercase tracking-widest shadow-[0_0_30px_rgba(0,210,255,0.2)]">
          Play at {brand.name}
        </button>
        <div className="text-[10px] text-white/30 text-center font-bold uppercase tracking-widest">
          *T&Cs Apply | 18+ Only | Please Play Responsibly
        </div>
      </div>
    </div>
  );
}
