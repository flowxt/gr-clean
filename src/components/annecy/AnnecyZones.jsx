"use client";

import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function AnnecyZones() {
  const annecyQuartiers = [
    'Annecy Centre-Ville',
    'Annecy-le-Vieux',
    'Novel',
    'Seynod',
    'Cran-Gevrier',
    'Meythet',
    'Pringy',
    'Épagny',
    'Argonay',
    'Poisy',
    'Sillingy',
    'La Balme-de-Sillingy'
  ];

  return (
    <section className="py-16 md:py-24 bg-[#161616]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Tous les quartiers d'Annecy desservis
          </h2>
          <div className="w-24 h-1 bg-[#C28638] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Notre entreprise de nettoyage intervient dans tous les secteurs d'Annecy 
            et ses communes environnantes pour vous offrir un service de proximité.
          </p>
        </motion.div>

        <div className="bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] rounded-xl p-8 md:p-12 border border-gray-800">
          <div className="flex items-center justify-center mb-8">
            <FaMapMarkerAlt className="text-4xl text-[#C28638] mr-4" />
            <h3 className="text-2xl font-bold text-white">
              Zones prioritaires à Annecy
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {annecyQuartiers.map((quartier, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-[#161616] rounded-lg border border-gray-700 hover:border-[#C28638] hover:bg-[#1a1a1a] transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-gray-300 font-medium">{quartier}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="bg-[#161616] p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-bold text-white mb-3">Service 20 km</h4>
              <p className="text-gray-300 mb-4">
                Nettoyage de bureaux, locaux commerciaux et médicaux dans toute la région d'Annecy
              </p>
              <div className="text-[#C28638] font-semibold">Tous services professionnels</div>
            </div>
            
            <div className="bg-[#161616] p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-bold text-white mb-3">Service 30 km</h4>
              <p className="text-gray-300 mb-4">
                Vitrerie et nettoyage de vitres pour entreprises et particuliers autour d'Annecy
              </p>
              <div className="text-[#C28638] font-semibold">Spécialité vitrerie</div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300 mb-4">
              Intervention rapide dans toute la région d'Annecy. 
              Contactez-nous pour vérifier votre secteur.
            </p>
            <a 
              href="tel:+33689805698"
              className="inline-block bg-[#C28638] hover:bg-[#A66B2A] text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Appeler maintenant : 06 89 80 56 98
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}