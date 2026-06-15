export default function Hero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden felt-texture">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]"></div>
        {/* Floating Stars */}
        <div className="absolute top-20 right-[15%] text-accent/20 text-4xl animate-pulse">★</div>
        <div className="absolute bottom-40 left-[10%] text-primary/20 text-6xl animate-bounce">★</div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge Pill */}
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full px-6 py-2 mb-10 shadow-[0_0_20px_rgba(0,210,255,0.2)]">
          <span className="text-xl">🏆</span>
          <span className="text-xs font-black uppercase tracking-[0.3em] cyan-text">
            UK&apos;s #1 Casino Authority 2026
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-6xl md:text-8xl font-black italic mb-8 leading-[0.9] tracking-tighter">
          <span className="block text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">DISCOVER THE</span>
          <span className="block cyan-text uppercase">BEST SPINS</span>
          <span className="block gold-text uppercase">IN THE UK</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-16 font-medium italic">
          We&apos;ve analyzed over 100+ platforms to bring you the elite <span className="text-primary font-bold">top 10</span> sites with massive bonuses and lightning-fast payouts.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { label: 'UKGC Licensed', icon: '🛡️', color: 'border-primary/30' },
            { label: 'Verified RTP', icon: '📊', color: 'border-secondary/30' },
            { label: 'Instant Payouts', icon: '⚡', color: 'border-accent/30' }
          ].map((badge) => (
            <div 
              key={badge.label} 
              className={`flex items-center gap-3 bg-white/5 backdrop-blur-md border ${badge.color} rounded-2xl px-6 py-4 transition-all hover:scale-110 hover:bg-white/10 cursor-default group`}
            >
              <span className="text-3xl group-hover:animate-bounce">{badge.icon}</span>
              <div className="text-left">
                <span className="block text-[10px] font-black uppercase tracking-widest text-white/40 leading-none mb-1">Guaranteed</span>
                <span className="block text-sm font-black uppercase tracking-wider text-white">{badge.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
