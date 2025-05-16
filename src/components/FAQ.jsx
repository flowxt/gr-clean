import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import SectionTag from './SectionTag';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const faqs = [
    {
      question: "Quelles sont vos zones d'intervention ?",
      answer: "Nous intervenons principalement à Annecy et dans un rayon de 20 km pour les services généraux, et jusqu'à 30 km pour les services de vitrerie. Contactez-nous pour vérifier si votre localisation est couverte."
    },
    {
      question: "Proposez-vous des contrats d'entretien régulier ?",
      answer: "Oui, nous proposons des contrats d'entretien adaptés à vos besoins, que ce soit hebdomadaire, bi-mensuel ou mensuel. Chaque contrat est personnalisé selon vos exigences spécifiques."
    },
    {
      question: "Comment sont calculés vos tarifs ?",
      answer: "Nos tarifs sont établis au forfait, après une visite sur site pour évaluer précisément l'ampleur du travail. Nous vous fournissons ensuite un devis détaillé et transparent, sans surprises."
    },
    {
      question: "Fournissez-vous le matériel et les produits de nettoyage ?",
      answer: "Oui, nous apportons tout le matériel et les produits nécessaires. Nous utilisons des équipements professionnels et des produits adaptés à chaque surface pour garantir un résultat optimal."
    },
    {
      question: "Est-il possible d'avoir les mêmes personnes à chaque intervention ?",
      answer: "Oui, nous privilégions la stabilité des équipes pour assurer une continuité dans la qualité de service et pour que nos intervenants connaissent parfaitement vos locaux et vos exigences."
    },
    {
      question: "Quel est le délai pour obtenir un rendez-vous ?",
      answer: "Nous nous efforçons de répondre rapidement à toutes les demandes. En général, nous pouvons organiser une visite pour établir un devis sous 48h à 72h. Pour les interventions urgentes, nous faisons notre maximum pour nous adapter."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#161616]">
      <div className="container mx-auto px-4">
        <SectionTag text="Questions fréquentes" />
        
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Questions fréquentes</h2>
          <div className="w-24 h-1 bg-[#C28638] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Vous vous posez des questions sur nos services ? Consultez notre FAQ ci-dessous.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className={`w-full text-left p-6 rounded-lg flex justify-between items-center transition-all ${
                  activeIndex === index ? 'bg-[#1a1a1a] shadow-md' : 'bg-[#1c1c1c] hover:bg-[#1a1a1a]'
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <FaChevronDown className={`text-[#C28638] transition-transform ${
                  activeIndex === index ? 'transform rotate-180' : ''
                }`} />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-[#1d1d1d] rounded-b-lg border-t border-gray-800">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
          <p className="text-lg text-gray-300 mb-6">
            Vous avez d'autres questions ? N'hésitez pas à nous contacter.
          </p>
          <a 
            href="#contact" 
            className="cta-button px-8 py-4 rounded-md text-white font-medium inline-block shadow-md"
          >
            Contactez-nous
          </a>
        </motion.div>
      </div>
    </section>
  );
} 