"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowsAltH } from 'react-icons/fa';
import SectionTag from './SectionTag';

export default function BeforeAfter() {
  // Définition de nos comparaisons avant/après
  const comparisons = [
    {
      id: "garage",
      title: "Porte de garage",
      description: "Nettoyage de la porte de garage",
      before: "/photo/garage.jpeg",
      after: "/photo/garage-1.jpeg"
    },
    {
      id: "vitres",
      title: "Vitres extérieures",
      description: "Nettoyage de vitres en hauteur",
      before: "/photo/vitre2.jpeg",
      after: "/photo/vitre.jpeg"
    },
    {
      id: "facade",
      title: "Façade vitrée",
      description: "Nettoyage professionnel de vitrage",
      before: "/photo/salete1.jpeg",
      after: "/photo/vitrage-ext-propre.jpeg"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#121212]">
      <div className="container mx-auto px-4">
        <SectionTag text="Résultats visibles" />
        
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Avant / Après</h2>
          <div className="w-24 h-1 bg-[#C28638] mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Constatez par vous-même la qualité de notre travail
          </p>
        </motion.div>
        
        <div className="space-y-16 md:space-y-24 max-w-4xl mx-auto">
          {comparisons.map((comparison, index) => (
            <BeforeAfterSlider
              key={comparison.id}
              title={comparison.title}
              description={comparison.description}
              beforeImage={comparison.before}
              afterImage={comparison.after}
              index={index}
            />
          ))}
        </div>
        
        {/* CTA stratégique */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Impressionné par le résultat ?</h3>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Nos équipes peuvent faire la même différence chez vous. Transformez vos espaces avec nos services professionnels.
          </p>
          <a 
            href="#contact" 
            className="cta-button px-8 py-4 rounded-md text-white font-medium inline-block shadow-md"
          >
            Transformer mes espaces
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Composant individuel pour chaque slider avant/après
function BeforeAfterSlider({ title, description, beforeImage, afterImage, index }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  
  // Fonction pour gérer le déplacement de la souris
  const handleMove = (e) => {
    if (!containerRef.current || !isDragging) return;
    
    e.preventDefault(); // Empêche la sélection de texte pendant le déplacement
    
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(width, e.clientX - left));
    const position = (x / width) * 100;
    
    setSliderPosition(position);
  };
  
  // Fonction pour gérer le déplacement tactile
  const handleTouchMove = (e) => {
    if (!containerRef.current || !isDragging || !e.touches[0]) return;
    
    e.preventDefault(); // Empêche le défilement de la page pendant le déplacement
    
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(width, e.touches[0].clientX - left));
    const position = (x / width) * 100;
    
    setSliderPosition(position);
  };
  
  const startDragging = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut
    e.stopPropagation(); // Empêche la propagation de l'événement
    setIsDragging(true);
    
    // Si l'utilisateur a cliqué directement sur le conteneur (pas sur le curseur),
    // déplacer immédiatement le curseur à cette position
    if (e.target !== sliderRef.current && containerRef.current) {
      const { left, width } = containerRef.current.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : null);
      
      if (clientX !== null) {
        const x = Math.max(0, Math.min(width, clientX - left));
        const position = (x / width) * 100;
        setSliderPosition(position);
      }
    }
  };
  
  const stopDragging = () => {
    setIsDragging(false);
  };
  
  // Ajout d'une fonction pour gérer les clics directs sur le conteneur
  const handleContainerClick = (e) => {
    if (containerRef.current && !isDragging) {
      const { left, width } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const position = Math.max(0, Math.min(100, (x / width) * 100));
      
      setSliderPosition(position);
    }
  };
  
  // Mise en place des écouteurs d'événements
  useEffect(() => {
    document.addEventListener('mouseup', stopDragging, { passive: false });
    document.addEventListener('touchend', stopDragging, { passive: false });
    
    return () => {
      document.removeEventListener('mouseup', stopDragging);
      document.removeEventListener('touchend', stopDragging);
    };
  }, []);
  
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMove, { passive: false });
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
    } else {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', handleTouchMove);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging]);

  // Animation du curseur au chargement pour le premier slider seulement
  useEffect(() => {
    if (index === 0) {
      const timer = setTimeout(() => {
        if (!isDragging && Math.abs(sliderPosition - 50) < 2) {
          const interval = setInterval(() => {
            setSliderPosition(prev => {
              const newPos = prev + 0.5;
              if (newPos >= 55) {
                clearInterval(interval);
                
                // Animation inverse après une pause
                setTimeout(() => {
                  const reverseInterval = setInterval(() => {
                    setSliderPosition(prev => {
                      const newPos = prev - 0.5;
                      if (newPos <= 45) {
                        clearInterval(reverseInterval);
                        
                        // Retour à 50% après une pause
                        setTimeout(() => {
                          setSliderPosition(50);
                        }, 500);
                        
                        return 45;
                      }
                      return newPos;
                    });
                  }, 16);
                }, 500);
                
                return 55;
              }
              return newPos;
            });
          }, 16);
        }
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [index, isDragging, sliderPosition]);

  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white text-center mb-2">
          {title}
        </h3>
        <p className="text-center text-gray-300 mb-4">
          {description}
        </p>
        <div className="text-center mb-4">
          <span className="inline-block bg-black/80 text-white py-2 px-4 rounded-md font-medium">
            Déplacez le curseur pour comparer
          </span>
        </div>
      </div>
      
      <div 
        ref={containerRef}
        className={`relative h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-xl border border-gray-800 ${isDragging ? 'cursor-grabbing' : 'cursor-ew-resize'}`}
        onMouseDown={startDragging}
        onTouchStart={startDragging}
        onClick={handleContainerClick}
      >
        {/* Labels avec animation */}
        <motion.div 
          className="absolute top-4 left-4 bg-[#C28638] text-white py-1 px-3 rounded-md z-20 font-medium"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          AVANT
        </motion.div>
        <motion.div 
          className="absolute top-4 right-4 bg-white text-[#121212] py-1 px-3 rounded-md z-20 font-medium"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          APRÈS
        </motion.div>
        
        {/* Image "après" (nettoyée) en arrière-plan */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt="Après nettoyage"
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 800px"
            quality={90}
          />
        </div>
        
        {/* Image "avant" (sale) avec masque */}
        <div 
          className="absolute inset-0 h-full overflow-hidden"
          style={{ width: `${100 - sliderPosition}%`, right: 0 }}
        >
          <Image
            src={beforeImage}
            alt="Avant nettoyage"
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 800px"
            quality={90}
          />
        </div>
        
        {/* Ligne de séparation avec poignée */}
        <div 
          className={`absolute top-0 bottom-0 w-1 bg-white shadow-lg ${isDragging ? 'opacity-100' : 'opacity-80'}`}
          style={{ left: `${sliderPosition}%`, transition: isDragging ? 'none' : 'opacity 0.3s ease' }}
        >
          <div 
            ref={sliderRef}
            className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-10 border-4 ${isDragging ? 'border-white scale-110' : 'border-[#C28638]'}`}
            style={{ transition: isDragging ? 'none' : 'transform 0.3s ease, border-color 0.3s ease' }}
            onMouseDown={(e) => {
              e.stopPropagation();
              startDragging(e);
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
              startDragging(e);
            }}
          >
            <FaArrowsAltH className={`text-xl ${isDragging ? 'text-black' : 'text-[#C28638]'}`} style={{ transition: 'color 0.3s ease' }} />
          </div>
        </div>
      </div>
      
      <div className="flex justify-between mt-4 text-white px-4 font-medium">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#C28638]"></div>
          <span className="text-sm">Avant</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-white"></div>
          <span className="text-sm">Après</span>
        </div>
      </div>
    </motion.div>
  );
} 