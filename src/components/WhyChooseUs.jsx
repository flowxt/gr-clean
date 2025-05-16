import { motion } from 'framer-motion';
import { FaAward, FaUserTie, FaHandHoldingHeart, FaRecycle } from 'react-icons/fa';
import SectionTag from './SectionTag';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaAward className="text-[#C28638] text-4xl" />,
      title: "Expertise",
      description: "Plus de 15 ans d'expérience dans le nettoyage professionnel"
    },
    {
      icon: <FaUserTie className="text-[#C28638] text-4xl" />,
      title: "Professionnalisme",
      description: "Une équipe formée, rigoureuse et attentive au moindre détail"
    },
    {
      icon: <FaHandHoldingHeart className="text-[#C28638] text-4xl" />,
      title: "Service client",
      description: "À l'écoute de vos besoins, disponible et réactif"
    },
    {
      icon: <FaRecycle className="text-[#C28638] text-4xl" />,
      title: "Respect de l'environnement",
      description: "Utilisation de produits éco-responsables quand c'est possible"
    }
  ];

  return (
    <section id="pourquoi" className="py-16 md:py-24 bg-[#121212]">
      <div className="container mx-auto px-4">
        <SectionTag text="Pourquoi nous choisir" />
        
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Pourquoi choisir GR CLEAN</h2>
          <div className="w-24 h-1 bg-[#C28638] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Faire appel à GR CLEAN, c'est choisir une entreprise locale qui place la qualité et la satisfaction client au centre de ses préoccupations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              className="value-card p-8 rounded-xl flex items-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 bg-[#1a1a1a] rounded-full p-4">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-white">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a 
            href="#contact" 
            className="cta-button px-8 py-4 rounded-md text-white font-medium inline-block shadow-md"
          >
            Demander un devis
          </a>
        </motion.div>
      </div>
    </section>
  );
} 