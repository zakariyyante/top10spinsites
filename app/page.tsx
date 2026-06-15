import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandCard from '@/components/BrandCard';
import Disclaimer from '@/components/Disclaimer';
import About from '@/components/About';
import Footer from '@/components/Footer';
import MobileModal from '@/components/MobileModal';
import { brands } from '@/app/data/brands';
import { headers } from 'next/headers';

interface HomeProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const isMobileDevice = /mobile|android|iphone|ipad|phone/i.test(userAgent.toLowerCase());
  
  const gclidValue = typeof params.gclid === 'string' && params.gclid.length > 0 ? params.gclid : undefined;

  // Filter brands based on conditions:
  // isMobile: true brands are ONLY shown if (isMobileDevice AND gclidValue exists)
  const filteredBrands = brands.filter(brand => {
    if (brand.isMobile) {
      return isMobileDevice && !!gclidValue;
    }
    return true; // isMobile: false brands are shown to everyone
  });

  return (
    <>
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        {/* Brand Cards Grid */}
        <section id="brands" className="py-10 bg-[#050a14] relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-2">
                OUR <span className="cyan-text">TOP RATED</span> <span className="gold-text">CASINOS</span>
              </h2>
              <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">
                updated: June 2026 | verified by experts
              </p>
            </div>
            <div className="flex flex-col gap-6 max-w-6xl mx-auto">
              {filteredBrands.map((brand, index) => (
                <BrandCard 
                  key={brand.id} 
                  brand={brand} 
                  index={index} 
                  gclid={gclidValue} 
                />
              ))}
            </div>
          </div>
        </section>

        <Disclaimer />
        <About />
      </main>

      <Footer />

      {/* Mobile Popup Modal - Only shows if conditions are met */}
      <MobileModal brands={brands} gclid={gclidValue} isMobileDevice={isMobileDevice} />
    </>
  );
}
