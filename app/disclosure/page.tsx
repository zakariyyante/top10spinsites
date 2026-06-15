import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AffiliateDisclosure() {
  return (
    <>
      <Header />
      <main className="flex-1 py-24 bg-[#050a14]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
              AFFILIATE <span className="cyan-text">DISCLOSURE</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <div className="bg-white/5 rounded-3xl p-8 border border-white/5">
              <p className="text-lg text-white/80 leading-relaxed font-medium italic">
                Transparency is at the core of top10spinsites.com. We believe in providing our users with honest, expert-driven information while being clear about how our business operates.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-black italic cyan-text uppercase tracking-tight">How We Earn Commissions</h2>
              <p className="text-white/60 leading-relaxed uppercase tracking-widest text-xs font-bold">
                top10spinsites.com is a professional review site that receives compensation from the companies whose products we review. We test each product thoroughly and give high marks to only the very best. We are independently owned and the opinions expressed here are our own.
              </p>
              <p className="text-white/60 leading-relaxed uppercase tracking-widest text-xs font-bold">
                When you click on a link to a casino brand on our site and make a deposit, we may receive a commission from that operator. This comes at no extra cost to you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black italic gold-text uppercase tracking-tight">Impact on Rankings</h2>
              <p className="text-white/60 leading-relaxed uppercase tracking-widest text-xs font-bold">
                The compensation we receive may impact the order in which brands are presented on our website. While we strive to provide a comprehensive list of the best spin sites, we do not feature every operator available in the UK market.
              </p>
              <p className="text-white/60 leading-relaxed uppercase tracking-widest text-xs font-bold">
                Our rankings are determined by a combination of our expert analysis, user feedback, and the commercial agreements we have in place with our partners.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black italic purple-text uppercase tracking-tight">Our Commitment to You</h2>
              <p className="text-white/60 leading-relaxed uppercase tracking-widest text-xs font-bold">
                Despite receiving commissions, our primary goal is to provide accurate and helpful information to help you make informed decisions. We only partner with licensed and regulated UK casino operators to ensure your safety and security.
              </p>
            </section>

            <div className="p-8 bg-primary/5 rounded-3xl border border-primary/20 text-center">
              <p className="text-sm font-black text-primary uppercase tracking-[0.2em]">
                If you have any questions regarding our disclosure, please contact us.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
