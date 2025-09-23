import Image from 'next/image';

export default function ZonesHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/photo/garage-propre.jpeg" 
          alt="Zones d'intervention GR CLEAN" 
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20 mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Nos <span className="text-[#C28638]">zones d'intervention</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-light text-gray-300">
            GR CLEAN intervient à Annecy, Sillingy et dans toute la région. 
            Découvrez notre zone de service complète.
          </p>
        </div>
      </div>
    </section>
  );
}
