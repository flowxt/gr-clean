import { FaPhone, FaEnvelope, FaQuestionCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function ZonesCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#C28638] to-[#A66B2A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Votre zone n'est pas listée ?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Pas de souci ! Contactez GR CLEAN pour vérifier si nous pouvons intervenir 
            dans votre secteur. Nous étudions chaque demande avec attention.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Appelez-nous</h3>
            <p className="text-white/80 mb-4">Réponse immédiate sur votre zone</p>
            <a 
              href="tel:+33689805698"
              className="text-white font-semibold text-lg hover:text-white/80 transition-colors"
            >
              06 89 80 56 98
            </a>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Écrivez-nous</h3>
            <p className="text-white/80 mb-4">Demande par formulaire</p>
            <Link 
              href="/contact"
              className="text-white font-semibold text-lg hover:text-white/80 transition-colors"
            >
              Formulaire de contact
            </Link>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaQuestionCircle className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Demande spéciale</h3>
            <p className="text-white/80 mb-4">Intervention ponctuelle</p>
            <span className="text-white font-semibold text-lg">
              Étude au cas par cas
            </span>
          </div>
        </div>

        <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Extensions possibles de zone
              </h3>
              <div className="space-y-3 text-white/90">
                <div className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Interventions d'urgence dans un rayon élargi</span>
                </div>
                <div className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Contrats réguliers avec adaptation géographique</span>
                </div>
                <div className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Projets spéciaux selon la demande</span>
                </div>
                <div className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Partenariats avec d'autres entreprises locales</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <h4 className="text-xl font-bold text-white mb-4">
                Entreprise locale, service personnalisé
              </h4>
              <p className="text-white/90 mb-6">
                Basée à Annecy, GR CLEAN privilégie la proximité et s'adapte 
                aux besoins spécifiques de chaque client de la région.
              </p>
              <div className="space-y-3">
                <Link 
                  href="/services"
                  className="block bg-white text-[#C28638] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  Découvrir nos services
                </Link>
                <Link 
                  href="/a-propos"
                  className="block text-white hover:text-white/80 underline"
                >
                  En savoir plus sur GR CLEAN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
