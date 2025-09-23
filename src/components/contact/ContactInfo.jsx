"use client";

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: <FaPhone className="text-2xl text-[#C28638]" />,
      title: "Téléphone",
      info: "06 89 80 56 98",
      detail: "Appel gratuit, réponse rapide",
      href: "tel:+33689805698"
    },
    {
      icon: <FaEnvelope className="text-2xl text-[#C28638]" />,
      title: "Email",
      info: "contact@gr-clean.fr",
      detail: "Réponse sous 24h",
      href: "mailto:contact@gr-clean.fr"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-[#C28638]" />,
      title: "Zone d'intervention",
      info: "Annecy et Sillingy",
      detail: "Rayon de 30 km",
      href: "/zones-intervention"
    }
  ];

  const advantages = [
    "Devis gratuit sous 48h",
    "Intervention d'urgence possible",
    "Équipe professionnelle",
    "Matériel fourni",
    "Assurance responsabilité",
    "Satisfaction garantie"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Nos coordonnées
        </h2>
        <p className="text-gray-300 mb-8">
          Contactez GR CLEAN par le moyen qui vous convient le mieux. 
          Nous sommes à votre écoute pour tous vos besoins de nettoyage.
        </p>

        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              className="flex items-center p-4 bg-[#1e1e1e] rounded-lg border border-gray-800 hover:border-[#C28638] transition-colors group"
              whileHover={{ x: 5 }}
            >
              <div className="mr-4">
                {method.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold group-hover:text-[#C28638] transition-colors">
                  {method.title}
                </h3>
                <p className="text-white">{method.info}</p>
                <p className="text-gray-400 text-sm">{method.detail}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="bg-[#1e1e1e] rounded-lg p-6 border border-gray-800">
        <div className="flex items-center mb-4">
          <FaClock className="text-[#C28638] mr-3" />
          <h3 className="text-white font-semibold">Horaires d'ouverture</h3>
        </div>
        <div className="space-y-2 text-gray-300">
          <div className="flex justify-between">
            <span>Lundi - Vendredi</span>
            <span>8h00 - 18h00</span>
          </div>
          <div className="flex justify-between">
            <span>Samedi</span>
            <span>9h00 - 16h00</span>
          </div>
          <div className="flex justify-between">
            <span>Dimanche</span>
            <span>Fermé</span>
          </div>
        </div>
        <p className="text-gray-400 text-sm mt-3">
          Interventions d'urgence possibles sur demande
        </p>
      </div>

      <div className="bg-gradient-to-br from-[#C28638]/10 to-transparent rounded-lg p-6 border border-[#C28638]/30">
        <h3 className="text-white font-semibold mb-4">Pourquoi nous choisir ?</h3>
        <div className="grid grid-cols-1 gap-3">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="flex items-center"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FaCheckCircle className="text-[#C28638] mr-3 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{advantage}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center p-6 bg-[#C28638] rounded-lg">
        <h3 className="text-white font-bold text-lg mb-2">
          Intervention rapide garantie
        </h3>
        <p className="text-white/90">
          Entreprise locale • Service personnalisé • 15 ans d'expérience
        </p>
      </div>
    </motion.div>
  );
}
