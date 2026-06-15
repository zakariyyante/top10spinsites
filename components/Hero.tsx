export default function Hero() {
  return (
    <section className="relative py-10 lg:py-14 overflow-hidden felt-texture">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* H1 */}
        <h1 className="text-4xl md:text-7xl font-black italic mb-4 leading-tight tracking-tighter">
          <span className="cyan-text uppercase">BEST SPINS</span> <span className="text-white uppercase">IN THE UK</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto mb-8 font-medium italic">
          Expert-reviewed <span className="text-primary font-bold">top 10</span> sites with instant payouts and massive bonuses.
        </p>

        {/* Trust Badges */}
        <div className="flex justify-center gap-4">
          {[
            { label: 'Same Day Payout', icon: '💰' },
            { label: 'Same Hour Withdrawal', icon: '⚡' },
            { label: 'UKGC Licensed', icon: '🛡️' }
          ].map((badge) => (
            <div 
              key={badge.label} 
              className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2"
            >
              <span className="text-xl">{badge.icon}</span>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-wider text-white/80">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
