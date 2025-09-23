"use client";

import { motion } from 'framer-motion';
import { FaWindowMaximize, FaBuilding, FaTools, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function HomeServices() {
  const services = [
    {
      id: 'vitrerie',
      icon: <FaWindowMaximize className="text-4xl text-[#C28638]" />,
      title: 'Vitrerie professionnelle',
      description: 'Nettoyage de vitres, vitrines, vérandas et baies vitrées pour un résultat impeccable.',
      features: ['Intérieur et extérieur', 'Particuliers et professionnels', 'Matériel professionnel']
    },
    {
      id: 'bureaux',
      icon: <FaBuilding className="text-4xl text-[#C28638]" />,
      title: 'Nettoyage de bureaux',
      description: 'Entretien complet de vos espaces de travail pour un environnement sain et professionnel.',
      features: ['Contrats réguliers', 'Interventions ponctuelles', 'Espaces communs']
    },
    {
      id: 'commercial',
      icon: <FaTools className="text-4xl text-[#C28638]" />,
      title: 'Nettoyage commercial',
      description: 'Showrooms, magasins, locaux médicaux - nous adaptons nos services à vos besoins.',
      features: ['Normes d\'hygiène', 'Flexibilité horaires', 'Devis personnalisé']
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#121212]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-1 px-3 border border-[#C28638] text-[#C28638] text-sm tracking-wider uppercase rounded-full mb-6">
            Nos services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Services d'entreprise de nettoyage à Annecy et Sillingy
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services de nettoyage professionnel, 
            adaptés aux entreprises et particuliers exigeants.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="bg-[#1e1e1e] rounded-xl p-6 border border-gray-800 hover:border-[#C28638] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white text-center">{service.title}</h3>
              <p className="text-gray-300 mb-4 text-center">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#C28638] mr-2">✓</span>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Besoin d'un service spécifique ? Découvrez tous nos services en détail.
          </p>
          <Link 
            href="/services"
            className="inline-flex items-center bg-[#C28638] hover:bg-[#A66B2A] px-8 py-4 rounded-md text-white font-medium transition-colors"
          >
            Voir tous nos services
            <FaArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
