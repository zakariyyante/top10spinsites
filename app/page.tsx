import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandCard from '@/components/BrandCard';
import Disclaimer from '@/components/Disclaimer';
import About from '@/components/About';
import Footer from '@/components/Footer';
import MobileModal from '@/components/MobileModal';
import { brands } from '@/app/data/brands';

interface HomeProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const gclidValue = typeof params.gclid === 'string' ? params.gclid : undefined;

  return (
    <>
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        {/* Brand Cards Grid */}
        <section id="brands" className="py-24 bg-[#050a14] relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">
                THE <span className="cyan-text">ELITE</span> <span className="gold-text">TOP 10</span>
              </h2>
              <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em]">
                updated: June 2026 | verified by experts
              </p>
            </div>
            <div className="flex flex-col gap-8 max-w-6xl mx-auto">
              {brands.map((brand, index) => (
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

      {/* Mobile Popup Modal */}
      <MobileModal brands={brands} gclid={gclidValue} />
    </>
  );
}
