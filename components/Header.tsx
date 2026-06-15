'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#050a14]/90 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image 
            src="/logo.png" 
            alt="Top 10 Spin Sites" 
            width={240} 
            height={60} 
            className="h-12 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform duration-300"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {['Home', 'Brands', 'Guide', 'About Us', 'Contact Us'].map((item) => (
            <Link 
              key={item} 
              href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              className="text-xs font-black uppercase tracking-[0.2em] text-white/60 hover:text-primary transition-all hover:scale-105"
            >
              {item}
            </Link>
          ))}
          <Link href="#brands" className="btn-primary px-6 py-2 rounded-full text-xs">
            Best Sites
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-primary p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0a1224] border-b border-primary/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {['Home', 'Brands', 'Guide', 'About Us', 'Contact Us'].map((item) => (
            <Link 
              key={item} 
              href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              className="text-xl font-black italic uppercase tracking-widest cyan-text"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
