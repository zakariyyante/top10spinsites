import Link from 'next/link';

export default function Disclaimer() {
  return (
    <div className="bg-[#050a14] border-y border-primary/10 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-red-600 flex items-center justify-center text-red-600 font-black italic text-lg shadow-[0_0_10px_rgba(220,38,38,0.3)]">
            18+
          </div>
          <span className="font-black text-white uppercase tracking-[0.2em] text-sm italic">
            Strictly 18+ Only
          </span>
        </div>
        <p className="text-xs font-bold text-white/40 uppercase tracking-widest leading-relaxed max-w-xl">
          Gambling can be addictive. please play responsibly. for support, visit{' '}
          <Link href="https://www.begambleaware.org" target="_blank" className="cyan-text hover:underline font-black">
            BeGambleAware.org
          </Link>{' '}
          or call 0808 8020 133.
        </p>
      </div>
    </div>
  );
}
