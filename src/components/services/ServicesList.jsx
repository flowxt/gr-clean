"use client";

import { motion } from 'framer-motion';
import { FaWindowMaximize, FaBuilding, FaTools, FaHospital, FaHome, FaCheck } from 'react-icons/fa';
import Image from 'next/image';

export default function ServicesList() {
  const services = [
    {
      id: 'vitrerie',
      icon: <FaWindowMaximize className="text-4xl text-[#C28638]" />,
      title: 'Vitrerie - Nettoyage de vitres et vitrines',
      description: "Service complet de nettoyage de vitres pour professionnels et particuliers à Annecy, Sillingy et dans un rayon de 30 km.",
      image: "/photo/vitre-ext1.jpeg",
      features: [
        'Fenêtres, baies vitrées, vérandas',
        'Vitrines commerciales et showrooms', 
        'Nettoyage intérieur et extérieur',
        'Intervention en hauteur (échelle, perche)',
        'Matériel professionnel adapté',
        'Résultat sans traces garanti'
      ],
      process: "Inspection → Préparation → Nettoyage → Séchage → Contrôle qualité"
    },
    {
      id: 'bureaux',
      icon: <FaBuilding className="text-4xl text-[#C28638]" />,
      title: 'Entretien de bureaux et locaux professionnels',
      description: "Nettoyage complet de vos espaces de travail pour maintenir un environnement professionnel et sain à Annecy et Sillingy.",
      image: "/photo/bureau-proprete.jpeg",
      features: [
        'Bureaux individuels et open-spaces',
        'Salles de réunion et espaces communs',
        'Sanitaires et cuisines d\'entreprise',
        'Sols, surfaces et mobilier',
        'Vidage des corbeilles',
        'Dépoussiérage minutieux'
      ],
      process: "Planning → Intervention → Nettoyage → Désinfection → Rapport"
    },
    {
      id: 'commercial',
      icon: <FaTools className="text-4xl text-[#C28638]" />,
      title: 'Nettoyage commercial et showrooms',
      description: "Entretien spécialisé pour commerces, magasins et showrooms à Annecy et Sillingy. Votre image de marque préservée.",
      image: "/photo/magasin1.jpeg",
      features: [
        'Surfaces d\'exposition et présentoirs',
        'Sols commerciaux et zones de passage',
        'Vitrines et éclairages',
        'Espaces clients et cabines d\'essayage',
        'Stockage et zones de travail',
        'Adaptation aux horaires d\'ouverture'
      ],
      process: "Étude → Planification → Exécution → Suivi → Ajustements"
    },
    {
      id: 'medicaux',
      icon: <FaHospital className="text-4xl text-[#C28638]" />,
      title: 'Nettoyage de locaux médicaux',
      description: "Respect strict des normes d'hygiène pour cabinets médicaux, dentaires et laboratoires à Annecy et Sillingy.",
      image: "/photo/sdb1.jpeg",
      features: [
        'Protocoles d\'hygiène renforcés',
        'Produits adaptés aux normes médicales',
        'Désinfection complète des surfaces',
        'Traitement des déchets spéciaux',
        'Salles d\'attente et de consultation',
        'Équipements médicaux (surfaces)'
      ],
      process: "Formation → Protocole → Désinfection → Traçabilité → Contrôle"
    },
    {
      id: 'particuliers',
      icon: <FaHome className="text-4xl text-[#C28638]" />,
      title: 'Nettoyage chez les particuliers',
      description: "Service de vitrerie pour particuliers à Annecy, Sillingy et dans un rayon de 30 km. Intervention sur devis uniquement.",
      image: "/photo/vitre-interieur.jpeg",
      features: [
        'Nettoyage de vitres résidentielles',
        'Fenêtres et baies vitrées',
        'Vérandas et verrières',
        'Intervention ponctuelle',
        'Devis gratuit et personnalisé',
        'Respect de votre domicile'
      ],
      process: "Demande → Devis → Planification → Intervention → Satisfaction"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#121212]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Notre gamme complète de services
          </h2>
          <div className="w-24 h-1 bg-[#C28638] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            GR CLEAN, votre entreprise de nettoyage à Annecy et Sillingy, propose des solutions 
            professionnelles adaptées à chaque type de client et d'environnement.
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Contenu - Alternance gauche/droite */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-2xl md:text-3xl font-bold text-white ml-4">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <FaCheck className="text-[#C28638] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#1e1e1e] p-4 rounded-lg border border-gray-800">
                  <h4 className="text-white font-semibold mb-2">Notre processus :</h4>
                  <p className="text-gray-300 text-sm">{service.process}</p>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
