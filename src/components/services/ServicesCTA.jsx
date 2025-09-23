"use client";

import { motion } from 'framer-motion';
import { FaClock, FaShieldAlt, FaThumbsUp, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function ServicesCTA() {
  const advantages = [
    {
      icon: <FaClock className="text-2xl text-[#C28638]" />,
      title: "Réactivité",
      description: "Devis sous 48h, intervention rapide"
    },
    {
      icon: <FaShieldAlt className="text-2xl text-[#C28638]" />,
      title: "Qualité garantie", 
      description: "15 ans d'expérience, matériel professionnel"
    },
    {
      icon: <FaThumbsUp className="text-2xl text-[#C28638]" />,
      title: "Satisfaction",
      description: "Suivi personnalisé, résultat garanti"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-[#C28638]" />,
      title: "Proximité",
      description: "Service local Annecy et Sillingy"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#C28638] to-[#A66B2A]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Pourquoi choisir GR CLEAN ?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Votre entreprise de nettoyage de confiance à Annecy et Sillingy, 
            alliant expertise, proximité et engagement qualité.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {advantages.map((advantage, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
              <p className="text-white/80">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-white/10 rounded-xl p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Besoin d'un service personnalisé ?
              </h3>
              <p className="text-white/90 mb-6">
                Chaque client est unique. Nous adaptons nos services à vos besoins spécifiques, 
                vos contraintes et votre budget. Contactez-nous pour discuter de votre projet.
              </p>
              <ul className="text-white/80 space-y-2">
                <li>• Devis gratuit et sans engagement</li>
                <li>• Intervention d'urgence possible</li>
                <li>• Contrats d'entretien régulier</li>
                <li>• Flexibilité horaire</li>
              </ul>
            </div>
            
            <div className="text-center lg:text-right">
              <h4 className="text-xl font-bold text-white mb-4">
                Contactez-nous dès maintenant
              </h4>
              <div className="space-y-4">
                <a 
                  href="tel:+33689805698"
                  className="block bg-white text-[#C28638] px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  06 89 80 56 98
                </a>
                <Link 
                  href="/contact"
                  className="block border-2 border-white text-white hover:bg-white hover:text-[#C28638] px-8 py-4 rounded-md font-medium transition-colors"
                >
                  Formulaire de contact
                </Link>
                <Link 
                  href="/zones-intervention"
                  className="block text-white/80 hover:text-white underline"
                >
                  Vérifier votre zone d'intervention
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
