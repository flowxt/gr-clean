import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SectionTag from './SectionTag';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const photos = [
    { src: '/photo/vitre-echelle.jpeg', alt: 'Nettoyage de vitres en hauteur' },
    { src: '/photo/vitrage.jpeg', alt: 'Vitrage propre' },
    { src: '/photo/vitre-propre.jpeg', alt: 'Vitre nettoyée' },
    { src: '/photo/bureau-proprete.jpeg', alt: 'Bureau propre' },
    { src: '/photo/proprete-bureau.jpeg', alt: 'Propreté de bureau' },
    { src: '/photo/vitre-ext1.jpeg', alt: 'Nettoyage vitre extérieure' },
    { src: '/photo/bureau-vitre1.jpeg', alt: 'Vitre de bureau' },
    { src: '/photo/vitre-bureau.jpeg', alt: 'Vitre de bureau propre' },
    { src: '/photo/vitrage propre.jpeg', alt: 'Vitrage propre' },
    { src: '/photo/vitre-int1.jpeg', alt: 'Vitre intérieure' },
    { src: '/photo/garage-propre.jpeg', alt: 'Garage propre' },
    { src: '/photo/garage-propre2.jpeg', alt: 'Garage nettoyé' },
    { src: '/photo/garage-1.jpeg', alt: 'Nettoyage garage' },
    { src: '/photo/garage.jpeg', alt: 'Garage' },
    { src: '/photo/mur-vitre.jpeg', alt: 'Mur vitré' },
    { src: '/photo/vitre-interieur.jpeg', alt: 'Vitre intérieure' },
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Galerie de réalisations</h2>
          <div className="w-24 h-1 bg-[#C28638] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Découvrez notre savoir-faire à travers nos interventions
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
              <img 
                src={photos[activeIndex].src} 
                alt={photos[activeIndex].alt}
                className="w-full h-full object-cover transform transition-transform duration-1000 hover:scale-105"
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
                  <img 
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
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