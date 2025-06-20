import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('expertise');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen flex items-center text-white relative overflow-hidden">
      {/* Élément décoratif */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-[#222222] via-black to-[#333333] z-10"></div>
      
      {/* Cercles décoratifs */}
      <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-[#C28638] opacity-10 -mr-20 -mt-20 z-10"></div>
      <div className="absolute left-0 bottom-0 w-96 h-96 rounded-full bg-[#C28638] opacity-10 -ml-40 -mb-40 z-10"></div>
      
      {/* Background image avec overlay sombre */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image 
            src="/photo/vitre-ext1.jpeg" 
            alt="Nettoyage de vitres professionnel" 
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="absolute inset-0 bg-black/60 z-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20 mt-24 sm:mt-16">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-center pt-12 sm:pt-0"
          >
            <span className="inline-block py-1 px-3 border border-[#C28638] text-[#C28638] text-sm tracking-wider uppercase rounded-full mb-6">
              Entreprise de nettoyage professionnel
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#C28638]">Entreprise de nettoyage</span> à Annecy et Sillingy
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-light text-center text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Votre entreprise de nettoyage de confiance pour bureaux, locaux professionnels et particuliers exigeants à Annecy, Sillingy et environs.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-24"
          >
            <a 
              href="#contact" 
              className="cta-button px-8 py-4 rounded-md text-white text-lg font-medium shadow-lg"
            >
              Demander un devis gratuit
            </a>
            <a 
              href="#services" 
              className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white/10 transition-colors"
            >
              Découvrir nos services
            </a>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer hidden sm:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              duration: 2, 
              delay: 1.5,
              repeat: Infinity,
              repeatType: "loop" 
            }}
            onClick={scrollToNext}
          >
            <FaArrowDown className="text-[#C28638] text-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 