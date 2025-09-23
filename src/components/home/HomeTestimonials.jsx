"use client";

import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function HomeTestimonials() {
  const testimonials = [
    {
      name: "Marie Dupont",
      company: "Cabinet médical - Annecy",
      text: "GR CLEAN nettoie notre cabinet depuis 3 ans. Service irréprochable, respect des normes d'hygiène et équipe très professionnelle.",
      rating: 5
    },
    {
      name: "Jean-Pierre Martin", 
      company: "Entreprise TechSol - Sillingy",
      text: "Excellent service pour nos bureaux. L'équipe est ponctuelle, efficace et discrète. Je recommande vivement cette entreprise de nettoyage.",
      rating: 5
    },
    {
      name: "Sophie Bertrand",
      company: "Particulier - Annecy",
      text: "Nettoyage de mes baies vitrées parfait ! Travail soigné, tarifs raisonnables et personnel très sympathique. Merci à l'équipe GR CLEAN.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#161616]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-1 px-3 border border-[#C28638] text-[#C28638] text-sm tracking-wider uppercase rounded-full mb-6">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages 
            sur nos services de nettoyage à Annecy et Sillingy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-[#1e1e1e] rounded-xl p-6 border border-gray-800 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-4 left-4">
                <FaQuoteLeft className="text-[#C28638] text-2xl opacity-50" />
              </div>
              
              <div className="pt-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#C28638] text-sm" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-[#C28638] text-sm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#1e1e1e] rounded-xl p-8 max-w-2xl mx-auto border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">
              Votre satisfaction, notre engagement
            </h3>
            <p className="text-gray-300 mb-4">
              Plus de 15 ans d'expérience au service des professionnels et particuliers 
              d'Annecy, Sillingy et environs.
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C28638]">100%</div>
                <div className="text-sm text-gray-400">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C28638]">15+</div>
                <div className="text-sm text-gray-400">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#C28638]">300+</div>
                <div className="text-sm text-gray-400">Interventions/mois</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
