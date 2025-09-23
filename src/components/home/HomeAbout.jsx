"use client";

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeAbout() {
  return (
    <section className="py-16 md:py-24 bg-[#161616]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-1 px-3 border border-[#C28638] text-[#C28638] text-sm tracking-wider uppercase rounded-full mb-6">
              Qui sommes-nous
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Plus de 15 ans d'expertise en nettoyage professionnel
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              GR CLEAN est votre entreprise de nettoyage de confiance à Annecy et Sillingy. 
              Depuis notre création, nous nous spécialisons dans le nettoyage professionnel 
              pour les entreprises, commerces et particuliers exigeants.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Notre équipe expérimentée maîtrise toutes les techniques de nettoyage : 
              vitrerie, entretien de bureaux, locaux commerciaux et médicaux. 
              Nous intervenons dans un rayon de 30 km autour d'Annecy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#C28638] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">15+</span>
                </div>
                <span className="text-gray-300">Années d'expérience</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#C28638] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">100%</span>
                </div>
                <span className="text-gray-300">Clients satisfaits</span>
              </div>
            </div>

            <Link 
              href="/a-propos"
              className="inline-flex items-center bg-[#C28638] hover:bg-[#A66B2A] px-6 py-3 rounded-md text-white font-medium transition-colors"
            >
              En savoir plus sur nous
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/photo/bureau-proprete.jpeg"
                  alt="Bureau propre et professionnel"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/photo/vitre-propre.jpeg"
                  alt="Vitres parfaitement nettoyées"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/photo/magasin1.jpeg"
                  alt="Magasin commercial nettoyé"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/photo/vitre-echelle.jpeg"
                  alt="Nettoyage professionnel en hauteur"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
