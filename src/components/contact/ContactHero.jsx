"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/photo/vitre-int.jpeg" 
          alt="Contactez GR CLEAN" 
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20 mt-24">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contactez <span className="text-[#C28638]">GR CLEAN</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl max-w-2xl mx-auto font-light text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Votre entreprise de nettoyage à Annecy et Sillingy. 
            Devis gratuit sous 48h.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
