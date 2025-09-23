"use client";

import { motion } from 'framer-motion';

export default function ContactMap() {
  return (
    <motion.section 
      className="py-16 bg-[#1e1e1e]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Notre zone d'intervention
          </h2>
          <p className="text-gray-300">
            GR CLEAN intervient à Annecy, Sillingy et dans un rayon de 30 km
          </p>
        </div>
        
        <div className="bg-[#2a2a2a] rounded-xl p-8 text-center">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#C28638] mb-2">20 km</div>
              <div className="text-white font-semibold mb-1">Services généraux</div>
              <div className="text-gray-300 text-sm">Bureaux, commerces, locaux médicaux</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-[#C28638] mb-2">30 km</div>
              <div className="text-white font-semibold mb-1">Services de vitrerie</div>
              <div className="text-gray-300 text-sm">Nettoyage de vitres, particuliers</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-[#C28638] mb-2">24h</div>
              <div className="text-white font-semibold mb-1">Délai de réponse</div>
              <div className="text-gray-300 text-sm">Pour devis et interventions</div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700">
            <h3 className="text-white font-semibold mb-4">Principales communes desservies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              {[
                'Annecy', 'Sillingy', 'La Balme-de-Sillingy', 'Argonay',
                'Poisy', 'Épagny', 'Meythet', 'Cran-Gevrier',
                'Seynod', 'Pringy', 'Rumilly', 'Saint-Jorioz'
              ].map((city, index) => (
                <div key={index} className="text-gray-300 hover:text-[#C28638] transition-colors">
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
