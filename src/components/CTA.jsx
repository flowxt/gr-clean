import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCalendarCheck, FaStar, FaArrowRight, FaShieldAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

export default function CTA() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  
  const testimonials = [
    {
      text: "GR CLEAN a réalisé un nettoyage impeccable de nos locaux professionnels. Équipe réactive, travail soigné et résultat au-delà de nos attentes. Je recommande vivement leurs services !",
      name: "Alexandre M.",
      position: "Directeur d'agence, Annecy",
      initial: "A"
    },
    {
      text: "L'appartement est nickel. Merci pour votre travail",
      name: "Vanessa D.",
      position: "Architecte",
      initial: "V"
    }
  ];
  
  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#161616] to-[#212121] text-white relative overflow-hidden">
      {/* Éléments de design en arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-[#C28638]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-[#C28638]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Contenu de gauche */}
            <div className="space-y-8">
              <div>
                <motion.span 
                  className="inline-block py-2 px-4 bg-[#C28638]/20 text-[#C28638] font-semibold rounded-full text-sm mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Un environnement impeccable vous attend
                </motion.span>
                
                <motion.h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Confiez votre <span className="text-[#C28638]">nettoyage</span> à des professionnels qualifiés
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-gray-300 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Plus de 15 ans d'expérience à votre service. Nous vous garantissons un résultat impeccable avec des produits professionnels et un savoir-faire reconnu.
                </motion.p>
              </div>
              
              {/* Avantages */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#C28638]/20 p-3 rounded-full flex-shrink-0 border border-[#C28638]">
                    <FaCalendarCheck className="w-5 h-5 text-[#C28638]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Devis sous 72h</h4>
                    <p className="text-gray-400 text-sm">Réponse rapide à vos demandes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#C28638]/20 p-3 rounded-full flex-shrink-0 border border-[#C28638]">
                    <FaStar className="w-5 h-5 text-[#C28638]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Service premium</h4>
                    <p className="text-gray-400 text-sm">Équipements et produits professionnels</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#C28638]/20 p-3 rounded-full flex-shrink-0 border border-[#C28638]">
                    <FaShieldAlt className="w-5 h-5 text-[#C28638]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Satisfaction garantie</h4>
                    <p className="text-gray-400 text-sm">Résultats à la hauteur de vos attentes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#C28638]/20 p-3 rounded-full flex-shrink-0 border border-[#C28638]">
                    <FaStar className="w-5 h-5 text-[#C28638]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Devis gratuit</h4>
                    <p className="text-gray-400 text-sm">Sans engagement et personnalisé</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Boutons d'action */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <a 
                  href="tel:+33689805698" 
                  className="bg-[#C28638] hover:bg-[#d9973e] text-white py-4 px-8 rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C28638]/20"
                >
                  Appeler maintenant
                  <FaArrowRight className="text-sm" />
                </a>
                
                <a 
                  href="#contact" 
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 py-4 px-8 rounded-lg font-medium transition-all flex items-center justify-center backdrop-blur-sm"
                >
                  Demander un devis
                </a>
              </motion.div>
              
              {/* Témoignages clients avec navigation */}
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm relative">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[#C28638] w-4 h-4" />
                    ))}
                  </div>
                  
                  <div className="min-h-[120px]">
                    <motion.div
                      key={testimonialIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="italic text-gray-300 text-sm mb-4">
                        "{testimonials[testimonialIndex].text}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#C28638]/30 rounded-full flex items-center justify-center text-[#C28638] font-bold">
                          {testimonials[testimonialIndex].initial}
                        </div>
                        <div>
                          <p className="font-medium text-white">{testimonials[testimonialIndex].name}</p>
                          <p className="text-xs text-gray-400">{testimonials[testimonialIndex].position}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="flex justify-between mt-6">
                    <button 
                      onClick={prevTestimonial}
                      className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#C28638] transition-colors"
                      aria-label="Témoignage précédent"
                    >
                      <FaChevronLeft className="w-3 h-3" />
                    </button>
                    <div className="flex gap-2">
                      {testimonials.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setTestimonialIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === testimonialIndex ? 'bg-[#C28638] w-6' : 'bg-gray-600 hover:bg-gray-500'
                          }`}
                          aria-label={`Aller au témoignage ${idx + 1}`}
                        />
                      ))}
                    </div>
                    <button 
                      onClick={nextTestimonial}
                      className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#C28638] transition-colors"
                      aria-label="Témoignage suivant"
                    >
                      <FaChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Image de droite */}
            <motion.div 
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
              <Image
                src="/photo/vitre-interieur.jpeg"
                alt="Nettoyage professionnel"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <span className="bg-[#C28638] text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
                  SATISFACTION GARANTIE
                </span>
                <h3 className="text-white text-xl font-bold">Un résultat visible dès la première intervention</h3>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 