import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaExpandArrowsAlt } from 'react-icons/fa';
import SectionTag from './SectionTag';

export default function ZoneIntervention() {
  const cities = [
    'Annecy',
    'Annecy-le-Vieux',
    'Argonay',
    'Cran-Gevrier',
    'Pringy',
    'Seynod',
    'Épagny',
    'Meythet',
    'Poisy',
    'Saint-Jorioz',
    'Sevrier',
    'La Balme-de-Sillingy',
    'Sillingy',
    'Rumilly',
    'Neydens',
    'Archamps',
  ];

  return (
    <section id="zone" className="py-16 md:py-24 bg-[#161616] relative overflow-hidden">
      {/* Cercle décoratif */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C28638] opacity-5 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#C28638] opacity-5 -ml-32 -mb-32"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTag text="Où intervenons-nous" />
        
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Zone d'intervention</h2>
          <div className="w-24 h-1 bg-[#C28638] mx-auto mb-8"></div>
          
          <div className="bg-[#1e1e1e] rounded-xl p-8 md:p-10 shadow-xl border border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#191919] mb-4 border border-[#C28638]">
                  <FaMapMarkerAlt className="text-4xl text-[#C28638]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Services généraux</h3>
                <p className="text-gray-300">
                  Annecy et jusqu'à <span className="text-[#C28638] font-bold">20 km</span> aux alentours
                </p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#191919] mb-4 border border-[#C28638]">
                  <FaExpandArrowsAlt className="text-4xl text-[#C28638]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Services de vitrerie</h3>
                <p className="text-gray-300">
                  Annecy et jusqu'à <span className="text-[#C28638] font-bold">30 km</span> aux alentours
                </p>
              </motion.div>
            </div>
            
            <div className="mt-12 md:mt-16 pt-8 border-t border-gray-800">
              <p className="text-lg text-gray-300">
                Nos services couvrent Annecy et les communes environnantes. Contactez-nous pour vérifier si votre adresse est dans notre zone d'intervention.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="max-w-4xl mx-auto relative rounded-3xl p-6 md:p-10 bg-gradient-to-br from-[#C28638]/20 to-transparent border border-[#C28638]/30 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6 text-white text-center">Communes desservies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {cities.map((city, index) => (
              <motion.div
                key={city}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="py-3 px-4 rounded-lg text-white bg-[#1a1a1a] border border-gray-700 transition-all duration-300 cursor-pointer overflow-hidden relative group"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "#C28638"
                  }}
                >
                  <span className="relative z-10">{city}</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#C28638]/20 to-[#C28638]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ type: "tween", duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA stratégique */}
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Vous êtes dans notre zone ?</h3>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour bénéficier de nos services à proximité de chez vous !
          </p>
          <a 
            href="#contact" 
            className="cta-button px-8 py-4 rounded-md text-white font-medium inline-block shadow-md"
          >
            Vérifier ma localisation
          </a>
        </motion.div>
      </div>
    </section>
  );
} 