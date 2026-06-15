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
      className="relative casino-card-bg rounded-3xl p-1 flex flex-col md:flex-row items-stretch gap-0 cursor-pointer transition-all hover:scale-[1.01] casino-glow group border border-white/5"
    >
      {/* Rank Indicator */}
      <div className={`absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#050a14] border-2 ${index < 3 ? 'border-accent' : 'border-primary/30'} flex items-center justify-center z-20 shadow-2xl`}>
        <span className={`text-xl font-black italic ${index < 3 ? 'gold-text' : 'text-white/40'}`}>{index + 1}</span>
      </div>

      {/* Left Column: Logo & Rating */}
      <div className="flex flex-col items-center justify-center gap-4 w-full md:w-1/4 p-8 bg-gradient-to-b from-white/5 to-transparent rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
        <div className="relative w-full aspect-[3/2] bg-white/5 rounded-2xl flex items-center justify-center p-4 border border-white/10 group-hover:border-primary/30 transition-colors">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={160}
            height={80}
            className="relative z-10 object-contain brightness-110 group-hover:scale-110 transition-transform duration-500"
          />
          {/* Gloss overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-black italic gold-text tracking-tighter">{brand.rating.toFixed(1)}</div>
          <div className="flex gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-lg ${i < Math.floor(brand.rating / 2) ? "text-accent drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]" : "text-white/10"}`}>
                ★
              </span>
            ))}
          </div>
          <div className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">
            {brand.votes.toLocaleString()} players
          </div>
        </div>
      </div>

      {/* Middle Column: Bonus Info */}
      <div className="flex flex-col justify-center flex-1 gap-4 p-8 border-y md:border-y-0 md:border-x border-white/5">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] font-black text-primary uppercase tracking-widest">Limited Time Offer</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-black italic leading-tight group-hover:cyan-text transition-all duration-300 uppercase tracking-tighter">
            {brand.bonus}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
            {['Fast Payouts', 'Mobile App', '24/7 Support'].map(tag => (
              <span key={tag} className="text-[10px] font-bold text-white/40 uppercase tracking-widest px-2 py-1 border border-white/5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: CTA */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/4 p-8 bg-gradient-to-t from-white/5 to-transparent rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none">
        {badge && (
          <div className={`mb-4 bg-gradient-to-r ${badge.color} ${badge.textColor} text-[10px] font-black px-4 py-1 rounded-full shadow-lg uppercase tracking-[0.2em]`}>
            {badge.label} CHOICE
          </div>
        )}
        <button className="w-full btn-primary py-5 rounded-2xl text-lg font-black italic gold-shimmer group-hover:scale-105 active:scale-95">
          CLAIM NOW
        </button>
        <div className="mt-4 flex flex-col items-center gap-1">
          <div className="text-[9px] text-white/30 text-center font-bold uppercase tracking-tighter">
            *T&Cs Apply | 18+ Only
          </div>
          <div className="flex items-center gap-1 text-green-500">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[9px] font-black uppercase tracking-widest">Secure Link</span>
          </div>
        </div>
      </div>
    </div>
  );
}
