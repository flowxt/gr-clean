"use client";

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUsers, FaTrophy, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function AboutStory() {
  const milestones = [
    {
      icon: <FaCalendarAlt className="text-2xl text-[#C28638]" />,
      title: "2008",
      subtitle: "Création de GR CLEAN",
      description: "Lancement de notre entreprise de nettoyage à Annecy avec une vision : offrir un service de qualité irréprochable."
    },
    {
      icon: <FaUsers className="text-2xl text-[#C28638]" />,
      title: "2012",
      subtitle: "Développement de l'équipe",
      description: "Constitution d'une équipe d'experts spécialisés dans différents domaines du nettoyage professionnel."
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-[#C28638]" />,
      title: "2016",
      subtitle: "Extension à Sillingy",
      description: "Élargissement de notre zone d'intervention pour mieux servir la région d'Annecy et ses communes environnantes."
    },
    {
      icon: <FaTrophy className="text-2xl text-[#C28638]" />,
      title: "2023",
      subtitle: "15 ans d'excellence",
      description: "Plus de 15 ans d'expertise, des centaines de clients satisfaits et une réputation solidement établie."
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
            Notre histoire
          </h2>
          <div className="w-24 h-1 bg-[#C28638] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Découvrez l'évolution de GR CLEAN, de nos débuts modestes à notre position 
            de leader du nettoyage professionnel dans la région d'Annecy et Sillingy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Histoire */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Une passion devenue expertise
            </h3>
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed">
                GR CLEAN est née en 2008 de la passion de créer une entreprise de nettoyage 
                différente, axée sur la qualité, la fiabilité et la proximité avec ses clients. 
                Basée à Annecy, notre entreprise s'est rapidement développée pour devenir 
                une référence dans la région.
              </p>
              <p className="leading-relaxed">
                Au fil des années, nous avons étendu nos services et notre zone d'intervention 
                pour répondre aux besoins croissants de nos clients. Aujourd'hui, nous 
                intervenons à Annecy, Sillingy et dans toute la région, avec la même 
                exigence de qualité qui nous anime depuis le premier jour.
              </p>
              <p className="leading-relaxed">
                Notre équipe s'est agrandie et spécialisée, nous permettant d'offrir 
                des services adaptés à tous types de locaux : bureaux, commerces, 
                locaux médicaux et résidences privées. Chaque intervention est menée 
                avec le plus grand professionnalisme.
              </p>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/photo/vitre-bureau.jpeg"
                  alt="Équipe GR CLEAN au travail"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/photo/garage-propre.jpeg"
                  alt="Résultat nettoyage professionnel"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/photo/vitrage-ext-propre.jpeg"
                  alt="Service vitrerie GR CLEAN"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/photo/sdb2.jpeg"
                  alt="Nettoyage locaux médicaux"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Les grandes étapes de notre développement
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-[#C28638] rounded-full flex items-center justify-center mx-auto mb-4">
                  {milestone.icon}
                </div>
                <h4 className="text-2xl font-bold text-[#C28638] mb-2">{milestone.title}</h4>
                <h5 className="text-lg font-semibold text-white mb-3">{milestone.subtitle}</h5>
                <p className="text-gray-300 text-sm">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
