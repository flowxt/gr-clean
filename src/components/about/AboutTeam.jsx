"use client";

import { motion } from 'framer-motion';
import { FaGraduationCap, FaTools, FaCertificate, FaHandsHelping } from 'react-icons/fa';
import Link from 'next/link';

export default function AboutTeam() {
  const teamHighlights = [
    {
      icon: <FaGraduationCap className="text-3xl text-[#C28638]" />,
      title: "Formation continue",
      description: "Notre équipe se forme régulièrement aux dernières techniques et aux nouveaux produits."
    },
    {
      icon: <FaTools className="text-3xl text-[#C28638]" />,
      title: "Équipement professionnel",
      description: "Matériel de pointe et produits de qualité professionnelle pour des résultats optimaux."
    },
    {
      icon: <FaCertificate className="text-3xl text-[#C28638]" />,
      title: "Certifications",
      description: "Respect des normes et certifications en vigueur dans notre secteur d'activité."
    },
    {
      icon: <FaHandsHelping className="text-3xl text-[#C28638]" />,
      title: "Esprit d'équipe",
      description: "Une équipe soudée qui partage les mêmes valeurs de qualité et de service."
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
            Notre équipe d'experts
          </h2>
          <div className="w-24 h-1 bg-[#C28638] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            L'excellence de GR CLEAN repose sur une équipe de professionnels passionnés 
            et expérimentés, tous dédiés à votre satisfaction.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Texte sur l'équipe */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Des professionnels à votre service
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Chaque membre de l'équipe GR CLEAN est soigneusement sélectionné pour 
                ses compétences techniques et son sens du service. Nous privilégions 
                la stabilité de nos équipes pour que vous ayez toujours affaire aux 
                mêmes interlocuteurs.
              </p>
              <p className="leading-relaxed">
                Notre approche humaine du nettoyage professionnel nous distingue. 
                Nous croyons que la qualité technique doit s'accompagner d'une 
                relation de confiance et de respect mutuel avec nos clients.
              </p>
              <p className="leading-relaxed">
                Que ce soit pour vos bureaux à Annecy, votre commerce à Sillingy ou 
                votre domicile, vous bénéficierez toujours du même niveau d'expertise 
                et du même engagement qualité de la part de nos équipes.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-[#1e1e1e] rounded-lg border border-gray-800">
              <h4 className="text-white font-semibold mb-3">Notre philosophie</h4>
              <p className="text-gray-300 text-sm italic">
                "Un travail bien fait avec le sourire et le respect de chacun. 
                C'est cette philosophie qui guide notre équipe au quotidien et 
                fait la différence dans chaque intervention."
              </p>
            </div>
          </motion.div>

          {/* Points forts de l'équipe */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-6">
              {teamHighlights.map((highlight, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start p-4 bg-[#1e1e1e] rounded-lg border border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-4 flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-gray-300 text-sm">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA final */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#C28638] to-[#A66B2A] rounded-xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à faire confiance à notre équipe ?
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Découvrez pourquoi tant de clients à Annecy et Sillingy nous font confiance 
              pour leurs besoins de nettoyage professionnel.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/services"
                className="bg-white text-[#C28638] px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Découvrir nos services
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-[#C28638] px-8 py-4 rounded-md font-medium transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
