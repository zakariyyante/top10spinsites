import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050a14] pt-24 pb-12 border-t border-primary/10">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-20">
          <Link href="/" className="relative group mb-4">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Image 
              src="/logo.png" 
              alt="Top 10 Spin Sites" 
              width={320} 
              height={80} 
              className="h-16 w-auto object-contain relative z-10 brightness-110"
            />
          </Link>
          <p className="text-xs font-black tracking-[0.5em] uppercase text-white/20">
            the ultimate casino authority
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* About */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8 border-l-2 border-primary pl-4">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Brands', 'Guide', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`} className="text-white/40 hover:text-primary transition-all text-xs font-black uppercase tracking-widest flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8 border-l-2 border-secondary pl-4">Compliance</h4>
            <ul className="space-y-4">
              {[
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' },
                { name: 'Affiliate Disclosure', path: '/disclosure' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-white/40 hover:text-secondary transition-all text-xs font-black uppercase tracking-widest flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/20 group-hover:bg-secondary transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8 border-l-2 border-accent pl-4">Legal Disclaimer</h4>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
              <p className="text-[10px] text-white/30 leading-relaxed uppercase tracking-widest font-bold">
                top10spinsites.com is an independent review hub. We receive advertising compensation from the operators featured on this site. This may influence their ranking and placement. We do not feature all operators in the market. Our analysis is expert-driven but for informational use only. All featured brands are regulated by the UK Gambling Commission.
              </p>
            </div>
          </div>
        </div>

        {/* Responsible Gambling Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 py-12 border-y border-white/5 mb-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="text-4xl font-black text-white italic">18+</div>
          <Image src="/gamestop.png" alt="GAMSTOP" width={120} height={40} className="object-contain h-8 w-auto" />
          <Image src="/gambleaware.png" alt="BeGambleAware" width={120} height={40} className="object-contain h-8 w-auto" />
          <Image src="/gamcare.png" alt="GamCare" width={120} height={40} className="object-contain h-8 w-auto" />
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[9px] font-black text-white/10 uppercase tracking-[0.6em]">
            © {year} top10spinsites.com | built for winners
          </p>
        </div>
      </div>
    </footer>
  );
}
