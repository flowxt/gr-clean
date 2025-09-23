import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = {
  title: "Services de nettoyage professionnel - GR CLEAN Annecy",
  description: "Découvrez tous nos services d'entreprise de nettoyage : bureaux, vitrerie, locaux commerciaux, médicaux. Interventions à Annecy, Sillingy et environs.",
  keywords: [
    "services nettoyage",
    "nettoyage bureaux",
    "vitrerie professionnelle", 
    "nettoyage commercial",
    "entretien locaux",
    "entreprise de nettoyage Annecy"
  ],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <ServicesHero />
        <ServicesList />
        <ServiceProcess />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
}
