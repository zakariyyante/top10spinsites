import Image from 'next/image';

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#050a14] to-[#0a1224]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
            OUR <span className="cyan-text">RATING</span> <span className="gold-text">PROCESS</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Why Our Reviews Stand Out */}
          <div className="casino-card-bg rounded-3xl p-10 border border-white/5 relative group">
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">💎</div>
            <h3 className="text-2xl font-black italic mb-8 flex items-center gap-4 uppercase tracking-tight">
              Why We Are The <span className="cyan-text">Authority</span>
            </h3>
            <ul className="space-y-6">
              {[
                'Elite Security & Licensing Audits',
                'Real-Money Withdrawal Speed Tests',
                'Transparent Bonus Term Analysis',
                'Mobile Performance Benchmarking',
                'VIP Support Quality Evaluation'
              ].map((point) => (
                <li key={point} className="flex items-center gap-4 text-white/60 font-bold uppercase tracking-widest text-xs">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px]">✔</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible Gambling */}
          <div className="bg-red-950/10 rounded-3xl p-10 border border-red-900/20 relative group">
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-red-600/10 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">🛡️</div>
            <h3 className="text-2xl font-black italic mb-8 flex items-center gap-4 uppercase tracking-tight text-red-500">
              Responsible <span className="text-white">Gaming</span>
            </h3>
            <p className="text-white/50 mb-10 leading-relaxed font-bold uppercase tracking-widest text-[10px]">
              Gaming is a form of entertainment, not a way to make money. We advocate for safe play and provide resources for those who need assistance.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://www.gamstop.co.uk" 
                target="_blank" 
                className="bg-white/5 hover:bg-white/10 p-5 rounded-2xl text-center transition-all border border-white/5 group/link flex items-center justify-center"
              >
                <Image src="/gamestop.png" alt="GamStop" width={100} height={30} className="object-contain h-6 w-auto opacity-50 group-hover/link:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://www.gamcare.org.uk" 
                target="_blank" 
                className="bg-white/5 hover:bg-white/10 p-5 rounded-2xl text-center transition-all border border-white/5 group/link flex items-center justify-center"
              >
                <Image src="/gamcare.png" alt="GamCare" width={100} height={30} className="object-contain h-6 w-auto opacity-50 group-hover/link:opacity-100 transition-opacity" />
              </a>
            </div>
            <div className="mt-10 p-4 bg-red-600/10 rounded-xl border border-red-600/20 text-center">
              <div className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em]">
                Helpline: 0808 8020 133
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
