"use client";

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function HomeCTA() {
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
            Prêt à bénéficier de nos services ?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Contactez GR CLEAN dès aujourd'hui pour un devis gratuit et personnalisé. 
            Notre équipe d'experts intervient rapidement à Annecy, Sillingy et dans toute la région.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
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
            <h3 className="text-xl font-bold text-white mb-2">Appelez-nous</h3>
            <p className="text-white/80 mb-4">Réponse rapide et conseil personnalisé</p>
            <a 
              href="tel:+33689805698"
              className="text-white font-semibold text-lg hover:text-white/80 transition-colors"
            >
              06 89 80 56 98
            </a>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Écrivez-nous</h3>
            <p className="text-white/80 mb-4">Demande de devis en ligne</p>
            <Link 
              href="/contact"
              className="text-white font-semibold text-lg hover:text-white/80 transition-colors"
            >
              Formulaire de contact
            </Link>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Nos zones</h3>
            <p className="text-white/80 mb-4">Annecy, Sillingy et 30 km autour</p>
            <Link 
              href="/zones-intervention"
              className="text-white font-semibold text-lg hover:text-white/80 transition-colors"
            >
              Voir toutes les zones
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pourquoi choisir GR CLEAN ?
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24h</div>
                <div className="text-sm">Réponse garantie</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm">Devis gratuits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">30km</div>
                <div className="text-sm">Zone d'intervention</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
