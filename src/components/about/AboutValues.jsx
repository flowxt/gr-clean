"use client";

import { motion } from 'framer-motion';
import { FaHandshake, FaBolt, FaLock, FaComments, FaClipboardCheck, FaUsers, FaHeart, FaLeaf } from 'react-icons/fa';

export default function AboutValues() {
  const values = [
    { 
      icon: <FaHandshake className="text-3xl" />, 
      text: 'Respect', 
      description: 'Nous respectons vos espaces, vos exigences et vos contraintes avec la plus grande attention.'
    },
    { 
      icon: <FaBolt className="text-3xl" />, 
      text: 'Réactivité', 
      description: 'Intervention rapide et efficace selon vos besoins, avec des délais de réponse garantis.'
    },
    { 
      icon: <FaLock className="text-3xl" />, 
      text: 'Confiance', 
      description: 'Une relation durable basée sur des résultats constants et une transparence totale.'
    },
    { 
      icon: <FaComments className="text-3xl" />, 
      text: 'Communication', 
      description: 'Échange transparent et régulier avec nos clients pour une satisfaction optimale.'
    },
    { 
      icon: <FaClipboardCheck className="text-3xl" />, 
      text: 'Transparence', 
      description: 'Devis clairs et détaillés, sans surcoûts cachés. Chaque prestation est expliquée.'
    },
    { 
      icon: <FaUsers className="text-3xl" />, 
      text: 'Fidélité', 
      description: 'Nous construisons des relations durables avec nos clients et nos partenaires.'
    },
    { 
      icon: <FaHeart className="text-3xl" />, 
      text: 'Passion', 
      description: 'L\'amour du travail bien fait guide chacune de nos interventions quotidiennes.'
    },
    { 
      icon: <FaLeaf className="text-3xl" />, 
      text: 'Écologie', 
      description: 'Utilisation de produits respectueux de l\'environnement quand cela est possible.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#161616]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Nos valeurs fondamentales
          </h2>
          <div className="w-24 h-1 bg-[#C28638] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ces valeurs guident notre entreprise de nettoyage au quotidien et définissent 
            notre approche du service client à Annecy, Sillingy et dans toute la région.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
              <div className="p-6 bg-[#1e1e1e] h-full">
                <div className="w-14 h-14 rounded-full bg-[#C28638]/20 flex items-center justify-center text-[#C28638] mb-4 mx-auto">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-center mb-3 text-white">{value.text}</h4>
                <p className="text-gray-400 text-center text-sm leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section engagements */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] rounded-xl p-8 md:p-12 border border-gray-800">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Nos engagements envers vous
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-[#C28638] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Ponctualité garantie</h4>
                      <p className="text-gray-300 text-sm">Respect strict des horaires convenus</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-[#C28638] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Qualité constante</h4>
                      <p className="text-gray-300 text-sm">Même niveau d'exigence à chaque intervention</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-[#C28638] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Discrétion absolue</h4>
                      <p className="text-gray-300 text-sm">Respect de votre intimité et confidentialité</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-[#C28638] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Assurance responsabilité</h4>
                      <p className="text-gray-300 text-sm">Couverture complète pour votre tranquillité</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <h4 className="text-xl font-bold text-white mb-4">
                  Une entreprise de nettoyage humaine
                </h4>
                <p className="text-gray-300 mb-6">
                  Chez GR CLEAN, nous croyons que la qualité du service passe avant tout 
                  par des relations humaines authentiques et un respect mutuel.
                </p>
                <div className="bg-[#C28638]/10 rounded-lg p-6 border border-[#C28638]/30">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#C28638]">15+</div>
                      <div className="text-xs text-gray-400">Années</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#C28638]">Devis</div>
                      <div className="text-xs text-gray-400">Gratuits</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#C28638]">100%</div>
                      <div className="text-xs text-gray-400">Satisfaits</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
