import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaEnvelope, FaPhone, FaSpinner } from 'react-icons/fa';
import SectionTag from './SectionTag';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        console.error('Erreur:', result.error);
      }
    } catch (error) {
      setStatus('error');
      console.error('Erreur lors de l\'envoi:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#161616] text-white">
      <div className="container mx-auto px-4">
        <SectionTag text="Contactez-nous" />
        
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Besoin d'un devis personnalisé ?</h2>
          <div className="w-24 h-1 bg-[#C28638] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Contactez GR CLEAN et obtenez une réponse rapide.
            Nous nous déplaçons gratuitement pour évaluer vos besoins.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="value-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-8 text-white">Informations de contact</h3>
            
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="bg-[#C28638]/20 p-3 rounded-full flex-shrink-0 border border-[#C28638]">
                  <FaMapMarkerAlt className="w-6 h-6 text-[#C28638]" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-white">Localisation</h4>
                  <p className="text-gray-300">Basé à Annecy / Sillingy</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="bg-[#C28638]/20 p-3 rounded-full flex-shrink-0 border border-[#C28638]">
                  <FaCalendarAlt className="w-6 h-6 text-[#C28638]" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-white">Disponibilité</h4>
                  <p className="text-gray-300">Intervention rapide</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="bg-[#C28638]/20 p-3 rounded-full flex-shrink-0 border border-[#C28638]">
                  <FaPhone className="w-6 h-6 text-[#C28638]" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-white">Téléphone</h4>
                  <p className="text-gray-300">
                    <a href="tel:+33689805698" className="hover:text-[#C28638] transition-colors">
                      06 89 80 56 98
                    </a>
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="bg-[#C28638]/20 p-3 rounded-full flex-shrink-0 border border-[#C28638]">
                  <FaEnvelope className="w-6 h-6 text-[#C28638]" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-white">Email</h4>
                  <p className="text-gray-300">
                    <a href="mailto:rgclean74@gmail.com" className="hover:text-[#C28638] transition-colors">
                      rgclean74@gmail.com
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="value-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-8 text-white">Formulaire de contact</h3>
            
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-600/20 border border-green-500 rounded-md">
                <p className="text-green-400 text-sm">
                  ✅ Votre message a été envoyé avec succès ! Nous vous répondrons rapidement.
                </p>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-600/20 border border-red-500 rounded-md">
                <p className="text-red-400 text-sm">
                  ❌ Erreur lors de l'envoi. Veuillez réessayer ou nous contacter directement.
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-gray-300">Nom *</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C28638] text-white"
                  placeholder="Votre nom"
                  disabled={isLoading}
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-gray-300">Email *</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C28638] text-white"
                  placeholder="Votre email"
                  disabled={isLoading}
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2 text-gray-300">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C28638] text-white"
                  placeholder="Votre numéro de téléphone"
                  disabled={isLoading}
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-gray-300">Message *</label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C28638] text-white resize-none"
                  placeholder="Décrivez votre besoin"
                  disabled={isLoading}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full cta-button py-3 px-6 rounded-md text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  'Demander un devis'
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 