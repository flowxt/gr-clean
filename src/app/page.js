"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeAbout from "@/components/home/HomeAbout";
import HomeServices from "@/components/home/HomeServices";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeCTA from "@/components/home/HomeCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <HomeAbout />
        <HomeServices />
        <HomeTestimonials />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  );
}
