"use client";

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaStar, FaClock } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function AnnecyCTA() {
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
            Besoin d'une entreprise de nettoyage à Annecy ?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            GR CLEAN, votre partenaire de confiance pour tous vos besoins de nettoyage 
            professionnel à Annecy et dans toute la région.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Réactivité</h3>
            <p className="text-white/80">Intervention rapide à Annecy</p>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaStar className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Qualité</h3>
            <p className="text-white/80">Service professionnel garanti</p>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Disponibilité</h3>
            <p className="text-white/80">Devis sous 48h</p>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Contact</h3>
            <p className="text-white/80">Devis gratuit</p>
          </motion.div>
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
                Pourquoi les entreprises d'Annecy nous font confiance ?
              </h3>
              <div className="space-y-3 text-white/90">
                <div className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Équipe locale basée à Annecy</span>
                </div>
                <div className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Connaissance parfaite de la région</span>
                </div>
                <div className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Temps de déplacement réduit</span>
                </div>
                <div className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Disponibilité et réactivité maximales</span>
                </div>
                <div className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Tarifs compétitifs pour Annecy</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <h4 className="text-xl font-bold text-white mb-4">
                Contactez votre entreprise de nettoyage à Annecy
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
                  Demander un devis à Annecy
                </Link>
                <Link 
                  href="/services"
                  className="block text-white/80 hover:text-white underline"
                >
                  Découvrir tous nos services
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Galerie photos Annecy */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Nos réalisations à Annecy
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/photo/parquet.jpeg"
                alt="Nettoyage parquet Annecy"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/photo/moquette2.jpeg"
                alt="Entretien moquette Annecy"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/photo/espace-vitre.jpeg"
                alt="Vitrerie Annecy"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/photo/sol.jpeg"
                alt="Nettoyage sol professionnel Annecy"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}