import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="flex-1 py-24 bg-[#050a14]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
              TERMS OF <span className="gold-text">SERVICE</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-invert max-w-none space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-black italic cyan-text uppercase tracking-tight">1. Acceptance of Terms</h2>
              <p className="text-white/60 leading-relaxed uppercase tracking-widest text-xs font-bold">
                By accessing top10spinsites.com, you agree to comply with these Terms of Service. If you do not agree with any part of these terms, you must immediately cease using our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black italic gold-text uppercase tracking-tight">2. Age Restriction</h2>
              <p className="text-white/60 leading-relaxed uppercase tracking-widest text-xs font-bold">
                This website is strictly for individuals aged 18 and over. By using this site, you confirm that you meet this age requirement. We do not knowingly target or provide services to minors.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black italic purple-text uppercase tracking-tight">3. Content Accuracy</h2>
              <p className="text-white/60 leading-relaxed uppercase tracking-widest text-xs font-bold">
                While we strive for accuracy, casino offers and terms change frequently. We are not responsible for any discrepancies between the information on our site and the actual terms offered by casino operators. Always check the operator&apos;s site for the latest details.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black italic cyan-text uppercase tracking-tight">4. User Responsibility</h2>
              <p className="text-white/60 leading-relaxed uppercase tracking-widest text-xs font-bold">
                It is your responsibility to ensure that online gambling is legal in your jurisdiction. top10spinsites.com is not liable for any legal issues or financial losses incurred through the use of third-party gambling sites.
              </p>
            </section>

            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold text-center">
                Governed by the laws of the United Kingdom.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
