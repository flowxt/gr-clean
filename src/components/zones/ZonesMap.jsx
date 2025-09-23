export default function ZonesMap() {
  return (
    <section className="py-16 bg-[#161616]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Rayons d'intervention
          </h2>
          <p className="text-gray-300">
            Visualisez nos zones de service depuis notre base d'Annecy
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1e1e1e] rounded-xl p-8 border border-gray-800">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-24 h-24 bg-[#C28638] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">20km</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Zone prioritaire</h3>
                <p className="text-gray-300 text-sm">
                  Services complets de nettoyage professionnel
                </p>
              </div>
              
              <div>
                <div className="w-24 h-24 bg-[#C28638]/70 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">30km</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Zone étendue</h3>
                <p className="text-gray-300 text-sm">
                  Principalement services de vitrerie
                </p>
              </div>
              
              <div>
                <div className="w-24 h-24 bg-[#C28638]/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">Sur demande</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Zone spéciale</h3>
                <p className="text-gray-300 text-sm">
                  Interventions ponctuelles possibles
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <h4 className="text-white font-semibold mb-4">Points de repère principaux</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-[#C28638]">📍 Centre-ville Annecy</div>
                  <div className="text-[#C28638]">📍 Sillingy centre</div>
                  <div className="text-gray-300">📍 Lac d'Annecy</div>
                  <div className="text-gray-300">📍 Zone commerciale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
