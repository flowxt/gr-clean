"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import ZoneIntervention from "@/components/ZoneIntervention";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <BeforeAfter />
        <ZoneIntervention />
        <WhyChooseUs />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
