'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Brand } from '@/app/data/brands';
import BrandCard from './BrandCard';

interface MobileModalProps {
  brands: Brand[];
  gclid?: string;
  isMobileDevice: boolean;
}

export default function MobileModal({ brands, gclid, isMobileDevice }: MobileModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasMobileBrands = brands.some(b => b.isMobile);
    
    // Show modal ONLY if:
    // 1. It's a mobile device
    // 2. gclid is present and non-empty
    // 3. There are mobile-specific brands to show
    if (isMobileDevice && gclid && hasMobileBrands) {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [brands, gclid, isMobileDevice]);

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

      <div className="p-2 flex-1 felt-texture">
        {/* Modal Hero */}
        <div className="text-center mb-6 pt-4">
          <h2 className="text-2xl md:text-4xl font-black italic mb-1 uppercase tracking-tighter">
            <span className="text-white">NEW INSTANT</span> <span className="cyan-text">WITHDRAWAL</span>
          </h2>
          <p className="text-[8px] text-white/30 uppercase tracking-[0.3em] font-black">
            exclusive mobile access
          </p>
        </div>

        {/* Mobile Brand Cards */}
        <div className="flex flex-col gap-3 mb-8">
          {mobileBrands.map((brand, index) => (
            <div key={brand.id}>
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
