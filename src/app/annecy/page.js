import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnecyHero from "@/components/annecy/AnnecyHero";
import AnnecyServices from "@/components/annecy/AnnecyServices";
import AnnecyZones from "@/components/annecy/AnnecyZones";
import AnnecyCTA from "@/components/annecy/AnnecyCTA";

export const metadata = {
  title: "Entreprise de nettoyage Annecy - GR CLEAN | Service professionnel 74",
  description: "GR CLEAN, entreprise de nettoyage à Annecy. Nettoyage bureaux, vitrerie, locaux commerciaux et médicaux. Intervention rapide dans toute la région d'Annecy.",
  keywords: [
    "entreprise de nettoyage Annecy",
    "nettoyage Annecy",
    "société nettoyage Annecy",
    "entreprise nettoyage Annecy-le-Vieux",
    "nettoyage professionnel Annecy",
    "vitrerie Annecy",
    "nettoyage bureaux Annecy"
  ],
  openGraph: {
    title: "Entreprise de nettoyage Annecy - GR CLEAN",
    description: "Votre entreprise de nettoyage professionnelle à Annecy. Services complets pour bureaux, commerces et particuliers.",
  },
};

export default function AnnecyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <AnnecyHero />
        <AnnecyServices />
        <AnnecyZones />
        <AnnecyCTA />
      </main>
      <Footer />
    </div>
  );
}