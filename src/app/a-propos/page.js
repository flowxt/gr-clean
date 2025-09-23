import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutTeam from "@/components/about/AboutTeam";

export const metadata = {
  title: "À propos de GR CLEAN - Entreprise de nettoyage Annecy",
  description: "Découvrez GR CLEAN, votre entreprise de nettoyage à Annecy et Sillingy. Plus de 15 ans d'expertise au service des professionnels et particuliers.",
  keywords: [
    "entreprise de nettoyage",
    "histoire GR CLEAN",
    "équipe nettoyage",
    "expertise Annecy",
    "Sillingy"
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutTeam />
      </main>
      <Footer />
    </div>
  );
}
