"use client";

import { motion } from 'framer-motion';
import { FaPhone, FaClipboardCheck, FaCalendarAlt, FaTools, FaStar } from 'react-icons/fa';

export default function ServiceProcess() {
  const steps = [
    {
      icon: <FaPhone className="text-3xl text-white" />,
      title: "Demande de devis",
      description: "Contactez-nous par téléphone ou formulaire. Nous analysons vos besoins et vous proposons une solution sur-mesure."
    },
    {
      icon: <FaClipboardCheck className="text-3xl text-white" />,
      title: "Évaluation et devis",
      description: "Visite sur site ou évaluation sur photos. Devis détaillé et transparent sous 48h, sans engagement."
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-white" />,
      title: "Planification",
      description: "Organisation de l'intervention selon vos contraintes horaires. Confirmation du rendez-vous et des modalités."
    },
    {
      icon: <FaTools className="text-3xl text-white" />,
      title: "Intervention",
      description: "Exécution professionnelle avec matériel adapté. Respect des délais et des normes de sécurité."
    },
    {
      icon: <FaStar className="text-3xl text-white" />,
      title: "Contrôle qualité",
      description: "Vérification du résultat et de votre satisfaction. Suivi post-intervention si nécessaire."
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
            Notre processus en 5 étapes
          </h2>
          <div className="w-24 h-1 bg-[#C28638] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            De la demande de devis à la livraison finale, découvrez comment GR CLEAN 
            assure un service de qualité à chaque étape de nos interventions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Ligne de connexion pour desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C28638] to-[#A66B2A]"></div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Numéro de l'étape */}
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 bg-[#C28638] rounded-full flex items-center justify-center relative z-10">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-[#C28638] font-bold text-sm">{index + 1}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#1e1e1e] rounded-xl p-8 max-w-4xl mx-auto border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prêt à commencer ?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Contactez GR CLEAN dès maintenant pour bénéficier de notre expertise 
              en nettoyage professionnel à Annecy et Sillingy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+33689805698"
                className="bg-[#C28638] hover:bg-[#A66B2A] px-8 py-4 rounded-md text-white font-medium transition-colors"
              >
                Appeler maintenant
              </a>
              <a 
                href="/contact"
                className="border-2 border-[#C28638] text-[#C28638] hover:bg-[#C28638] hover:text-white px-8 py-4 rounded-md font-medium transition-colors"
              >
                Demander un devis
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
