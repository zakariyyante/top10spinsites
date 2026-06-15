import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="flex-1 py-24 bg-[#050a14]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4">
              PRIVACY <span className="cyan-text">POLICY</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-invert max-w-none space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-black italic cyan-text uppercase tracking-tight">1. Data Collection</h2>
              <p className="text-white/60 leading-relaxed uppercase tracking-widest text-xs font-bold">
                We collect information that helps us improve your experience on top10spinsites.com. This includes technical data like your IP address, device type, and browsing patterns. We do not collect personal identification unless you voluntarily provide it through contact forms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black italic gold-text uppercase tracking-tight">2. Cookie Usage</h2>
              <p className="text-white/60 leading-relaxed uppercase tracking-widest text-xs font-bold">
                Our site uses cookies to track performance and remember your preferences. We also use third-party cookies from partners like Google Analytics and Vercel Analytics to understand how users interact with our content. You can manage cookie settings in your browser at any time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black italic purple-text uppercase tracking-tight">3. Data Security</h2>
              <p className="text-white/60 leading-relaxed uppercase tracking-widest text-xs font-bold">
                We implement industry-standard security measures to protect any data we collect. However, please be aware that no method of transmission over the internet is 100% secure. We encourage you to use secure connections when browsing.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black italic cyan-text uppercase tracking-tight">4. Third-Party Partners</h2>
              <p className="text-white/60 leading-relaxed uppercase tracking-widest text-xs font-bold">
                When you click on links to our partner casinos, you are subject to their own privacy policies. We recommend reviewing the privacy terms of any operator before sharing personal information or making deposits.
              </p>
            </section>

            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold text-center">
                Last Updated: June 2026 | top10spinsites.com
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
