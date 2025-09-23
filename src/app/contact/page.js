import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";

export const metadata = {
  title: "Contact - GR CLEAN Annecy et Sillingy",
  description: "Contactez GR CLEAN pour vos besoins de nettoyage à Annecy et Sillingy. Devis gratuit, intervention rapide. Téléphone, formulaire et adresse.",
  keywords: [
    "contact entreprise nettoyage",
    "devis nettoyage",
    "GR CLEAN Annecy",
    "téléphone nettoyage",
    "Sillingy"
  ],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <ContactHero />
        <div className="py-16 bg-[#161616]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
        <ContactMap />
      </main>
      <Footer />
    </div>
  );
}
