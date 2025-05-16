import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('expertise');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen flex items-center bg-[#121212] text-white relative overflow-hidden">
      {/* Overlay de motif */}
      <div className="absolute inset-0 opacity-10 bg-[url('/photo/pattern.png')] bg-repeat"></div>
      
      {/* Cercles décoratifs */}
      <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-[#C28638] opacity-10 -mr-20 -mt-20"></div>
      <div className="absolute left-0 bottom-0 w-96 h-96 rounded-full bg-[#C28638] opacity-10 -ml-40 -mb-40"></div>
      
      {/* Background image avec overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/70 to-[#121212] z-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 mt-16">
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
            className="mb-8 text-center"
          >
            <span className="inline-block py-1 px-3 border border-[#C28638] text-[#C28638] text-sm tracking-wider uppercase rounded-full mb-6">
              Nettoyage professionnel à Annecy
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#C28638]">Le nettoyage professionnel</span> sur-mesure à Annecy et alentours
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-light text-center text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Experts du nettoyage et de la vitrerie, pour professionnels & particuliers exigeants.
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
            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer"
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