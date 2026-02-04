"use client";

import { motion } from 'framer-motion';
import { FaBuilding, FaWindowMaximize, FaStore, FaHospital, FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

export default function AnnecyServices() {
  const services = [
    {
      icon: <FaBuilding className="text-4xl text-[#C28638]" />,
      title: "Nettoyage de bureaux à Annecy",
      description: "Entretien complet de vos bureaux et espaces de travail dans toute la région d'Annecy",
      image: "/photo/bureau.jpeg",
      features: [
        "Bureaux individuels et open-spaces Annecy",
        "Salles de réunion et espaces communs",
        "Sanitaires et cuisines d'entreprise",
        "Intervention régulière ou ponctuelle"
      ]
    },
    {
      icon: <FaWindowMaximize className="text-4xl text-[#C28638]" />,
      title: "Vitrerie professionnelle à Annecy",
      description: "Service de nettoyage de vitres pour entreprises et particuliers à Annecy",
      image: "/photo/angle-vitre.jpeg",
      features: [
        "Vitres et baies vitrées Annecy",
        "Vitrines commerciales",
        "Vérandas et verrières",
        "Intervention en hauteur"
      ]
    },
    {
      icon: <FaStore className="text-4xl text-[#C28638]" />,
      title: "Nettoyage commercial à Annecy",
      description: "Entretien de commerces, showrooms et espaces de vente à Annecy",
      image: "/photo/evier.jpeg",
      features: [
        "Magasins et boutiques Annecy",
        "Showrooms automobiles",
        "Surfaces de vente",
        "Adaptation à vos horaires"
      ]
    },
    {
      icon: <FaHospital className="text-4xl text-[#C28638]" />,
      title: "Locaux médicaux à Annecy",
      description: "Nettoyage spécialisé pour cabinets médicaux et dentaires à Annecy",
      image: "/photo/parquet.jpeg",
      features: [
        "Respect normes d'hygiène strictes",
        "Cabinets médicaux Annecy",
        "Cabinets dentaires",
        "Désinfection professionnelle"
      ]
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
            Nos services de nettoyage à Annecy
          </h2>
          <div className="w-24 h-1 bg-[#C28638] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            GR CLEAN propose une gamme complète de services de nettoyage professionnel 
            pour tous les secteurs d'activité à Annecy et ses environs.
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="grid lg:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Contenu - Alternance gauche/droite */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-white ml-4">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <FaCheckCircle className="text-[#C28638] mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href="/contact"
                  className="inline-block bg-[#C28638] hover:bg-[#A66B2A] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Demander un devis à Annecy
                </a>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}