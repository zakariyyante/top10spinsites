export default function Hero() {
  return (
    <section className="relative pt-8 pb-2 lg:pt-12 lg:pb-4 overflow-hidden felt-texture">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* H1 */}
        <h1 className="text-4xl md:text-7xl font-black italic mb-4 leading-tight tracking-tighter">
          <span className="cyan-text uppercase">BEST SPINS</span> <span className="text-white uppercase">IN CANADA</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto mb-4 font-medium italic">
          Expert-reviewed <span className="text-primary font-bold">top 10</span> sites with instant payouts and massive bonuses.
        </p>
      </div>
    </section>
  );
}
