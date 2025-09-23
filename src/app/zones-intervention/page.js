import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ZonesHero from "@/components/zones/ZonesHero";
import ZonesList from "@/components/zones/ZonesList";
import ZonesMap from "@/components/zones/ZonesMap";
import ZonesCTA from "@/components/zones/ZonesCTA";

export const metadata = {
  title: "Zones d'intervention - GR CLEAN Annecy et Sillingy",
  description: "GR CLEAN intervient à Annecy, Sillingy, La Balme-de-Sillingy et dans un rayon de 30 km. Découvrez toutes nos zones de service.",
  keywords: [
    "zone intervention nettoyage",
    "Annecy nettoyage",
    "Sillingy nettoyage", 
    "Haute-Savoie",
    "entreprise de nettoyage"
  ],
};

export default function ZonesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <ZonesHero />
        <ZonesList />
        <ZonesMap />
        <ZonesCTA />
      </main>
      <Footer />
    </div>
  );
}
