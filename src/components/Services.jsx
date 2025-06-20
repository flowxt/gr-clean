import { motion } from 'framer-motion';
import { FaWindowMaximize, FaTools, FaBuilding, FaHospital, FaHome } from 'react-icons/fa';
import SectionTag from './SectionTag';

export default function Services() {
  const services = [
    {
      id: 'vitrerie',
      icon: <FaWindowMaximize className="text-[#C28638] text-4xl" />,
      title: 'Vitrerie – Nettoyage de vitres et vitrines',
      description: "Notre entreprise de nettoyage intervient pour les vitres de vos locaux : fenêtres, baies vitrées, vérandas, verrières, vitrines commerciales. Service en intérieur et extérieur à Annecy, Sillingy et dans un rayon de 30 km.",
      features: [
        'Intervention ponctuelle ou régulière',
        'Locaux professionnels, boutiques, maisons, appartements',
        'Vitrage plain-pied, en hauteur, cloisons vitrées'
      ]
    },
    {
      id: 'showroom',
      icon: <FaTools className="text-[#C28638] text-4xl" />,
      title: 'Nettoyage de Showroom',
      description: "Votre entreprise de nettoyage spécialisée dans l'entretien de showrooms à Annecy et Sillingy. Nous maintenons vos espaces d'exposition impeccables pour accueillir vos clients dans les meilleures conditions.",
      features: [
        'Entretien régulier par notre entreprise',
        'Nettoyage des surfaces d\'exposition',
        'Vitrines et présentoirs'
      ]
    },
    {
      id: 'bureaux',
      icon: <FaBuilding className="text-[#C28638] text-4xl" />,
      title: 'Entretien de bureaux et locaux professionnels',
      description: "GR CLEAN, entreprise de nettoyage à Annecy et Sillingy, assure l'entretien de vos bureaux pour offrir un espace de travail propre et sain à vos collaborateurs.",
      features: [
        'Nettoyage des bureaux, open-spaces, salles de réunion',
        'Vidage des corbeilles, dépoussiérage, sols, sanitaires',
        "Entretien des parties communes, halls d'entrée, ascenseurs"
      ]
    },
    {
      id: 'medicaux',
      icon: <FaHospital className="text-[#C28638] text-4xl" />,
      title: 'Nettoyage de locaux médicaux & spécialisés',
      description: "Notre entreprise de nettoyage respecte rigoureusement les normes d'hygiène pour vos locaux médicaux à Annecy, Sillingy et environs.",
      features: [
        'Cabinets médicaux et dentaires',
        'Laboratoires',
        'Petites structures de santé'
      ]
    },
    {
      id: 'particuliers',
      icon: <FaHome className="text-[#C28638] text-4xl" />,
      title: 'Nettoyage chez les particuliers',
      description: "GR CLEAN, entreprise de nettoyage, intervient chez les particuliers exclusivement pour le nettoyage de vitrerie, à Annecy, Sillingy et dans un rayon de 30 km.",
      features: [
        'Nettoyage ponctuel de vitres',
        'Fenêtres, baies vitrées, vérandas',
        'Forfaits clairs, sur devis uniquement'
      ]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-[#121212] text-white">
      <div className="container mx-auto px-4">
        <SectionTag text="Nos services" />
        
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Services d'entreprise de nettoyage</h2>
          <div className="w-24 h-1 bg-[#C28638] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            GR CLEAN, votre entreprise de nettoyage à Annecy et Sillingy, propose des solutions adaptées à tous vos besoins professionnels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="value-card rounded-xl p-6 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#C28638] mr-2">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
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
          <h3 className="text-2xl font-bold mb-4 text-white">Besoin d'une prestation sur mesure ?</h3>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins spécifiques et obtenir un devis personnalisé.
          </p>
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