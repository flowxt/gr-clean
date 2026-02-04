"use client";

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar, FaUsers, FaClock } from 'react-icons/fa';
import Image from 'next/image';

export default function HomeAnnecy() {
  const annecyAdvantages = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-[#C28638]" />,
      title: "Entreprise locale à Annecy",
      description: "Basée à Annecy, nous connaissons parfaitement les besoins spécifiques des entreprises et particuliers de la région."
    },
    {
      icon: <FaClock className="text-3xl text-[#C28638]" />,
      title: "Intervention rapide sur Annecy",
      description: "Temps de déplacement réduit, disponibilité optimale et réactivité garantie pour tous nos clients d'Annecy."
    },
    {
      icon: <FaUsers className="text-3xl text-[#C28638]" />,
      title: "Réseau d'Annecy",
      description: "Clients satisfaits dans toute la région d'Annecy : commerces, bureaux, locaux médicaux et particuliers."
    },
    {
      icon: <FaStar className="text-3xl text-[#C28638]" />,
      title: "Réputation à Annecy",
      description: "Plusieurs années d'expérience au service des professionnels et particuliers d'Annecy et ses environs."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#161616] relative overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C28638] opacity-5 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#C28638] opacity-5 -ml-32 -mb-32"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-2 px-4 border border-[#C28638] text-[#C28638] text-sm tracking-wider uppercase rounded-full mb-6">
            Votre entreprise de nettoyage locale
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Pourquoi choisir GR CLEAN à <span className="text-[#C28638]">Annecy</span> ?
          </h2>
          <div className="w-24 h-1 bg-[#C28638] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            GR CLEAN est l'entreprise de nettoyage de référence à Annecy. 
            Proximité, réactivité et connaissance du terrain font notre force.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Avantages */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {annecyAdvantages.map((advantage, index) => (
              <motion.div 
                key={index}
                className="bg-[#1e1e1e] rounded-xl p-6 border border-gray-800 hover:border-[#C28638] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">{advantage.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Images d'Annecy */}
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
                  src="/photo/grand-bureau.jpeg"
                  alt="Entreprise de nettoyage Annecy - Bureau"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/photo/moquette.jpeg"
                  alt="Nettoyage moquette Annecy"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/photo/carrelage.jpeg"
                  alt="Entretien carrelage Annecy"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/photo/angle-vitre.jpeg"
                  alt="Vitrerie professionnelle Annecy"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section zones d'Annecy */}
        <motion.div
          className="bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] rounded-xl p-8 md:p-12 border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Secteurs d'Annecy desservis par GR CLEAN
            </h3>
            <p className="text-gray-300">
              Notre entreprise de nettoyage intervient dans tous les quartiers d'Annecy et communes limitrophes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              'Annecy Centre-Ville',
              'Annecy-le-Vieux', 
              'Cran-Gevrier',
              'Seynod',
              'Meythet',
              'Pringy',
              'Épagny',
              'Argonay',
              'Sillingy',
              'Poisy',
              'Saint-Jorioz',
              'La Balme-de-Sillingy'
            ].map((zone, index) => (
              <motion.div
                key={index}
                className="text-center p-3 bg-[#161616] rounded-lg border border-gray-700 hover:border-[#C28638] transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-gray-300 text-sm">{zone}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="/zones-intervention"
              className="inline-block bg-[#C28638] hover:bg-[#A66B2A] text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Voir toutes nos zones d'intervention à Annecy
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}