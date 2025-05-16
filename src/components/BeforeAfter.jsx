import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowsAltH } from 'react-icons/fa';
import SectionTag from './SectionTag';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  
  // Fonction améliorée pour gérer le déplacement de la souris
  const handleMove = (e) => {
    if (!containerRef.current || !isDragging) return;
    
    e.preventDefault(); // Empêche la sélection de texte pendant le déplacement
    
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(width, e.clientX - left));
    const position = (x / width) * 100;
    
    setSliderPosition(position);
  };
  
  // Fonction améliorée pour gérer le déplacement tactile
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
  
  // Mise en place des écouteurs d'événements avec des options pour éviter les problèmes
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

  // Animation pour rendre le curseur plus interactif
  const animateSlider = () => {
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
  };
  
  // Exécuter l'animation au chargement
  useEffect(() => {
    const timer = setTimeout(animateSlider, 1000);
    return () => clearTimeout(timer);
  }, []);

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
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative mb-6">
            <div 
              className="absolute top-12 left-4 bg-black/80 text-white py-2 px-4 rounded-md z-20 font-medium"
            >
              Déplacez le curseur pour comparer
            </div>
          </div>
          
          <div 
            ref={containerRef}
            className={`relative h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-xl border border-gray-800 ${isDragging ? 'cursor-grabbing' : 'cursor-ew-resize'}`}
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
                src="/photo/garage-1.jpeg"
                alt="Après nettoyage"
                fill
                style={{ objectFit: 'cover' }}
                priority
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
                src="/photo/garage.jpeg"
                alt="Avant nettoyage"
                fill
                style={{ objectFit: 'cover' }}
                priority
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
          
          <div className="flex justify-between mt-6 text-white px-4 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#C28638]"></div>
              <span>Avant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white"></div>
              <span>Après</span>
            </div>
          </div>
        </motion.div>
        
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