import { motion } from 'framer-motion';
import { FaHandshake, FaBolt, FaLock, FaComments, FaClipboardCheck, FaUsers } from 'react-icons/fa';
import SectionTag from './SectionTag';

export default function AboutUs() {
  const values = [
    { 
      icon: <FaHandshake />, 
      text: 'Respect', 
      description: 'Nous respectons vos espaces et vos exigences avec attention'
    },
    { 
      icon: <FaBolt />, 
      text: 'Réactivité', 
      description: 'Intervention rapide et efficace selon vos besoins'
    },
    { 
      icon: <FaLock />, 
      text: 'Confiance', 
      description: 'Une relation durable basée sur des résultats constants'
    },
    { 
      icon: <FaComments />, 
      text: 'Communication', 
      description: 'Échange transparent et régulier avec nos clients'
    },
    { 
      icon: <FaClipboardCheck />, 
      text: 'Transparence', 
      description: 'Devis clairs et détaillés, sans surcoûts cachés'
    },
    { 
      icon: <FaUsers />, 
      text: 'Fidélité', 
      description: 'Nous construisons des relations durables avec nos clients'
    }
  ];

  return (
    <section id="expertise" className="py-16 md:py-24 bg-[#161616]">
      <div className="container mx-auto px-4">
        <SectionTag text="Qui sommes-nous" />
        
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Plus de 15 ans d'expertise</h2>
          <div className="w-24 h-1 bg-[#C28638] mx-auto mb-8"></div>
          <p className="text-lg mb-8 text-gray-300 leading-relaxed">
            Basée à Annecy, GR CLEAN est une entreprise locale de nettoyage spécialisée dans la vitrerie, 
            le nettoyage de bureaux, commerces, maisons, locaux professionnels et médicaux.
            Nous proposons des prestations flexibles, uniquement sur devis, 
            avec une approche personnalisée et efficace.
          </p>
        </motion.div>

        <div className="mt-12">
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-10 text-center text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Nos valeurs
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card rounded-xl overflow-hidden transform transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-[#C28638] h-2"></div>
                <div className="p-6">
                  <div className="w-14 h-14 rounded-full bg-[#C28638]/20 flex items-center justify-center text-[#C28638] text-2xl mb-4 mx-auto">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-center mb-2 text-white">{value.text}</h4>
                  <p className="text-gray-400 text-center">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA stratégique */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Prêt à bénéficier de notre expertise ?</h3>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Confiez-nous vos besoins de nettoyage et profitez d'un service sur-mesure, efficace et professionnel.
          </p>
          <a 
            href="#contact" 
            className="cta-button px-8 py-4 rounded-md text-white font-medium inline-block shadow-md"
          >
            Obtenir un devis personnalisé
          </a>
        </motion.div>
      </div>
    </section>
  );
} 