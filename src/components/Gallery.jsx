"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SectionTag from './SectionTag';
import Image from 'next/image';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const photos = [
    { src: '/photo/angle-vitre.jpeg', alt: 'Nettoyage vitrerie professionnelle Annecy' },
    { src: '/photo/bureau.jpeg', alt: 'Bureau professionnel nettoyé Annecy' },
    { src: '/photo/carrelage.jpeg', alt: 'Entretien carrelage professionnel Annecy' },
    { src: '/photo/en-cours-de-lavage.jpeg', alt: 'Nettoyage en cours Annecy' },
    { src: '/photo/espace-vitre.jpeg', alt: 'Espace vitré professionnel Annecy' },
    { src: '/photo/evier.jpeg', alt: 'Nettoyage cuisine professionnelle Annecy' },
    { src: '/photo/grand-bureau.jpeg', alt: 'Grand bureau nettoyé Annecy' },
    { src: '/photo/moquette.jpeg', alt: 'Entretien moquette bureaux Annecy' },
    { src: '/photo/moquette2.jpeg', alt: 'Nettoyage moquette professionnelle Annecy' },
    { src: '/photo/moquette3.jpeg', alt: 'Moquette bureaux propre Annecy' },
    { src: '/photo/parquet.jpeg', alt: 'Parquet entretenu Annecy' },
    { src: '/photo/sol.jpeg', alt: 'Sol professionnel nettoyé Annecy' },
    { src: '/photo/vitre-9.jpeg', alt: 'Vitres professionnelles Annecy' },
    { src: '/photo/vitre-open.jpeg', alt: 'Vitrerie ouverte nettoyée Annecy' },
    { src: '/photo/vitre-echelle.jpeg', alt: 'Nettoyage vitres en hauteur Annecy' },
    { src: '/photo/vitrage.jpeg', alt: 'Vitrage propre Annecy' },
    { src: '/photo/vitre-propre.jpeg', alt: 'Vitre professionnelle Annecy' },
    { src: '/photo/magasin.jpeg', alt: 'Nettoyage espace commercial Annecy' },
    { src: '/photo/magasin1.jpeg', alt: 'Entretien bureaux Annecy' },
    { src: '/photo/bureau-proprete.jpeg', alt: 'Bureau propre Annecy' },
    { src: '/photo/vitre-ext1.jpeg', alt: 'Nettoyage vitre extérieure Annecy' },
    { src: '/photo/garage-propre.jpeg', alt: 'Garage nettoyé Annecy' },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // * 2 for faster movement
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const scrollToActive = () => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const activeElement = container.children[activeIndex];
        if (activeElement) {
          const scrollOffset = activeElement.offsetLeft - (container.offsetWidth / 2) + (activeElement.offsetWidth / 2);
          container.scrollTo({
            left: scrollOffset,
            behavior: 'smooth'
          });
        }
      }
    };
    
    scrollToActive();
  }, [activeIndex]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTag text="Notre galerie" />
        
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Nos réalisations de nettoyage à Annecy</h2>
          <div className="w-24 h-1 bg-[#C28638] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Découvrez nos interventions de nettoyage professionnel réalisées à Annecy et dans toute la région
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main featured image */}
          <motion.div 
            className="mb-12 relative overflow-hidden rounded-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <Image 
                src={photos[activeIndex].src} 
                alt={photos[activeIndex].alt}
                className="w-full h-full object-cover transform transition-transform duration-1000 hover:scale-105"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl font-bold mb-2">{photos[activeIndex].alt}</h3>
              <p className="text-gray-200">Notre équipe à votre service</p>
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
              aria-label="Image précédente"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
              aria-label="Image suivante"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
          
          {/* Thumbnail carousel */}
          <motion.div
            className="relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div 
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto pb-4 cursor-grab scrollbar-hide"
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleMouseUp}
              onTouchMove={handleTouchMove}
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {photos.map((photo, index) => (
                <div 
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative flex-shrink-0 aspect-w-4 aspect-h-3 w-40 sm:w-56 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                    activeIndex === index ? 'ring-4 ring-[#C28638] scale-105' : 'opacity-70 grayscale-[30%]'
                  }`}
                >
                  <Image 
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 224px"
                  />
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-6 gap-2">
              {photos.slice(0, 8).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    activeIndex === idx ? 'bg-[#C28638]' : 'bg-gray-600'
                  }`}
                  aria-label={`Aller à l'image ${idx + 1}`}
                ></button>
              ))}
              {photos.length > 8 && (
                <span className="text-gray-500 px-1">...</span>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 