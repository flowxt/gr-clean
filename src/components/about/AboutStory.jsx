"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutStory() {

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
                GR CLEAN est née de la volonté de créer une entreprise de nettoyage 
                différente, axée sur la qualité, la fiabilité et la proximité avec ses clients. 
                Basée à Annecy, notre entreprise s'est développée pour devenir 
                une référence dans la région grâce à notre exigence de qualité constante.
              </p>
              <p className="leading-relaxed">
                Forte de plusieurs années d'expérience, nous avons étendu nos services 
                et notre zone d'intervention pour répondre aux besoins de nos clients. 
                Aujourd'hui, nous intervenons à Annecy, Sillingy et dans toute la région, 
                toujours avec le même engagement qualité qui nous caractérise.
              </p>
              <p className="leading-relaxed">
                Notre équipe s'est agrandie et spécialisée, nous permettant d'offrir 
                des services adaptés à tous types de locaux : bureaux, commerces, 
                locaux médicaux et résidences privées. Chaque intervention est menée 
                avec le plus grand professionnalisme et le souci du détail.
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
      </div>
    </section>
  );
}
