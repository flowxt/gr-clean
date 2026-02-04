"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const services = [
    'Vitrerie - Nettoyage de vitres',
    'Nettoyage de bureaux',
    'Nettoyage commercial',
    'Nettoyage locaux médicaux',
    'Nettoyage particuliers',
    'Autre service'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Une erreur s'est produite");
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        Demandez votre devis gratuit
      </h2>
      <p className="text-gray-300 mb-8">
        Remplissez ce formulaire et nous vous recontacterons sous 48h pour établir votre devis personnalisé.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-white font-medium mb-2">
              Nom complet *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#1e1e1e] border border-gray-700 text-white focus:border-[#C28638] focus:outline-none transition-colors"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#1e1e1e] border border-gray-700 text-white focus:border-[#C28638] focus:outline-none transition-colors"
              placeholder="votre@email.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-white font-medium mb-2">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#1e1e1e] border border-gray-700 text-white focus:border-[#C28638] focus:outline-none transition-colors"
              placeholder="06 12 34 56 78"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-white font-medium mb-2">
              Service souhaité
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#1e1e1e] border border-gray-700 text-white focus:border-[#C28638] focus:outline-none transition-colors"
            >
              <option value="">Sélectionnez un service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-white font-medium mb-2">
            Votre message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#1e1e1e] border border-gray-700 text-white focus:border-[#C28638] focus:outline-none transition-colors resize-vertical"
            placeholder="Décrivez vos besoins, la superficie, la fréquence souhaitée..."
          />
        </div>

        {submitStatus === 'success' && (
          <div className="flex items-center gap-3 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400">
            <FaCheckCircle className="text-xl flex-shrink-0" />
            <p>Votre message a bien été envoyé. Nous vous recontacterons sous 48h.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400">
            <FaExclamationCircle className="text-xl flex-shrink-0" />
            <p>L&apos;envoi a échoué. Vous pouvez nous appeler au 06 89 80 56 98 ou réessayer plus tard.</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#C28638] hover:bg-[#A66B2A] disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-4 px-6 rounded-lg transition-colors flex items-center justify-center"
        >
          {isSubmitting ? (
            <>Envoi en cours...</>
          ) : (
            <>
              <FaPaperPlane className="mr-2" />
              Envoyer ma demande
            </>
          )}
        </button>

        <p className="text-gray-400 text-sm">
          * Champs obligatoires. Vos données sont utilisées uniquement pour vous répondre et ne sont jamais partagées.
        </p>
      </form>
    </motion.div>
  );
}
