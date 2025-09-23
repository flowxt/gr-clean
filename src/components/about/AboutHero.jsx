"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/photo/proprete-bureau.jpeg" 
          alt="À propos de GR CLEAN" 
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Cercles décoratifs */}
      <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-[#C28638] opacity-10 -mr-20 -mt-20 z-10"></div>
      <div className="absolute left-0 bottom-0 w-96 h-96 rounded-full bg-[#C28638] opacity-10 -ml-40 -mb-40 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20 mt-24">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-block py-2 px-4 border border-[#C28638] text-[#C28638] text-sm tracking-wider uppercase rounded-full mb-6">
              À propos de nous
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#C28638]">GR CLEAN</span>, votre entreprise de nettoyage de confiance
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-light text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Depuis plus de 15 ans, nous servons avec passion les professionnels 
            et particuliers d'Annecy, Sillingy et de toute la région.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
