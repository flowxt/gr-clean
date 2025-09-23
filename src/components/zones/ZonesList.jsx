import { FaMapMarkerAlt, FaExpandArrowsAlt, FaCheckCircle } from 'react-icons/fa';

export default function ZonesList() {
  const cities = [
    { name: 'Annecy', priority: 'principale' },
    { name: 'Sillingy', priority: 'principale' },
    { name: 'La Balme-de-Sillingy', priority: 'principale' },
    { name: 'Annecy-le-Vieux', priority: 'standard' },
    { name: 'Argonay', priority: 'standard' },
    { name: 'Cran-Gevrier', priority: 'standard' },
    { name: 'Pringy', priority: 'standard' },
    { name: 'Seynod', priority: 'standard' },
    { name: 'Épagny', priority: 'standard' },
    { name: 'Meythet', priority: 'standard' },
    { name: 'Poisy', priority: 'standard' },
    { name: 'Saint-Jorioz', priority: 'standard' },
    { name: 'Sevrier', priority: 'standard' },
    { name: 'Rumilly', priority: 'étendue' },
    { name: 'Neydens', priority: 'étendue' },
    { name: 'Archamps', priority: 'étendue' },
  ];

  const zones = [
    {
      title: "Services généraux",
      icon: <FaMapMarkerAlt className="text-4xl text-[#C28638]" />,
      distance: "20 km",
      description: "Annecy et jusqu'à 20 km aux alentours",
      services: [
        "Nettoyage de bureaux",
        "Locaux commerciaux", 
        "Showrooms",
        "Locaux médicaux"
      ]
    },
    {
      title: "Services de vitrerie",
      icon: <FaExpandArrowsAlt className="text-4xl text-[#C28638]" />,
      distance: "30 km", 
      description: "Annecy et jusqu'à 30 km aux alentours",
      services: [
        "Nettoyage de vitres",
        "Vitrines commerciales",
        "Particuliers",
        "Vérandas et verrières"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Zone d'intervention détaillée
          </h2>
          <div className="w-24 h-1 bg-[#C28638] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            GR CLEAN, votre entreprise de nettoyage, couvre une large zone autour d'Annecy et Sillingy 
            pour répondre à tous vos besoins de nettoyage professionnel.
          </p>
        </div>

        {/* Zones de service */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {zones.map((zone, index) => (
            <div key={index} className="bg-[#1e1e1e] rounded-xl p-8 border border-gray-800">
              <div className="flex items-center mb-6">
                {zone.icon}
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">{zone.title}</h3>
                  <p className="text-[#C28638] font-semibold">Rayon de {zone.distance}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">{zone.description}</p>
              
              <div className="space-y-3">
                {zone.services.map((service, i) => (
                  <div key={i} className="flex items-center">
                    <FaCheckCircle className="text-[#C28638] mr-3" />
                    <span className="text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Liste des communes */}
        <div className="bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] rounded-xl p-8 border border-gray-800">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Communes desservies par GR CLEAN
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {cities.map((city, index) => (
              <div
                key={city.name}
                className={`text-center p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${
                  city.priority === 'principale' 
                    ? 'bg-[#C28638]/20 border-[#C28638] text-[#C28638]' 
                    : 'bg-[#161616] border-gray-700 text-white hover:border-[#C28638] hover:text-[#C28638]'
                }`}
              >
                <span className="font-medium">{city.name}</span>
                {city.priority === 'principale' && (
                  <div className="text-xs mt-1 opacity-80">Zone prioritaire</div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-300 mb-4">
              Votre commune n'apparaît pas dans la liste ? Contactez-nous pour vérifier 
              si nous pouvons intervenir chez vous.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-[#C28638] hover:bg-[#A66B2A] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Vérifier ma zone
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
