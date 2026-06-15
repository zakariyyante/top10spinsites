'use client';

import { useState, useEffect } from 'react';
import { Brand } from '@/app/data/brands';
import BrandCard from './BrandCard';

interface MobileModalProps {
  brands: Brand[];
  gclid?: string;
}

export default function MobileModal({ brands, gclid }: MobileModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasMobileBrands = brands.some(b => b.isMobile);
    if (gclid && hasMobileBrands) {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [gclid, brands]);

  if (!isOpen) return null;

  const mobileBrands = brands.filter(b => b.isMobile);

  return (
    <div className="fixed inset-0 z-[100] bg-[#050a14] flex flex-col overflow-y-auto animate-in fade-in duration-500">
      {/* Modal Header */}
      <div className="sticky top-0 z-10 bg-[#050a14]/90 backdrop-blur-xl border-b border-primary/20 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="Top 10 Spin Sites" 
            width={120} 
            height={30} 
            className="h-8 w-auto object-contain brightness-110"
          />
          <span className="text-[10px] font-black uppercase tracking-widest cyan-text border-l border-white/10 pl-3">VIP Mobile</span>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-primary p-2 hover:scale-110 transition-transform"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="p-4 flex-1 felt-texture">
        {/* Modal Hero */}
        <div className="text-center mb-10 pt-8">
          <div className="inline-block mb-4 text-4xl">👑</div>
          <h2 className="text-5xl font-black italic mb-2 uppercase tracking-tighter">
            <span className="block text-white">ELITE</span>
            <span className="block cyan-text">SPINS</span>
          </h2>
          <p className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-black">
            exclusive mobile access granted
          </p>
        </div>

        {/* Mobile Brand Cards */}
        <div className="flex flex-col gap-6 mb-12">
          {mobileBrands.map((brand, index) => (
            <div key={brand.id} className="transform scale-95 origin-center">
              <BrandCard brand={brand} index={index} gclid={gclid} />
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="bg-white/5 rounded-3xl p-8 text-center border border-white/5 mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-3xl font-black italic text-white/20">18+</span>
            <div className="h-8 w-[1px] bg-white/10"></div>
            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] leading-tight text-left">
              Please Play<br />Responsibly
            </span>
          </div>
          <p className="text-[8px] text-white/20 uppercase tracking-[0.3em] font-bold">
            top10spinsites.com | premium authority
          </p>
        </div>
      </div>
    </div>
  );
}
