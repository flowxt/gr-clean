import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

// Composant pour la navigation mobile - maintenant complètement séparé
function MobileNav({ isOpen, setIsOpen }) {
  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'À propos', href: '#expertise' },
    { name: 'Services', href: '#services' },
    { name: 'Zone d\'intervention', href: '#zone' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  // Scroll vers le haut lors de l'ouverture du menu
  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, 0);
    }
  }, [isOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Petit délai pour permettre la fermeture du menu avant la navigation
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 300);
  };

  // Si le menu n'est pas ouvert, ne rien afficher
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#121212] z-[100] overflow-auto">
      {/* En-tête du menu mobile avec logo et bouton fermer */}
      <div className="sticky top-0 left-0 right-0 p-4 flex justify-between items-center bg-[#121212] border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Image 
            src="/logo_GR.jpg" 
            alt="GR Clean Logo" 
            width={45} 
            height={35} 
            className="rounded-md"
          />
          <span className="text-xl font-bold text-white">Clean</span>
        </div>
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(false)}
          aria-label="Fermer le menu"
        >
          <FaTimes size={24} />
        </button>
      </div>
      
      {/* Navigation */}
      <nav className="flex flex-col items-center w-full p-6 pt-12">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-white hover:text-[#C28638] transition-colors text-xl uppercase tracking-wider font-medium w-full text-center py-4 border-b border-gray-800 last:border-0"
            onClick={(e) => handleLinkClick(e, link.href)}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#contact"
          className="cta-button mt-8 px-6 py-4 rounded-md text-white font-medium shadow-md w-full text-center"
          onClick={(e) => handleLinkClick(e, '#contact')}
        >
          Demander un devis
        </a>
      </nav>
    </div>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'À propos', href: '#expertise' },
    { name: 'Services', href: '#services' },
    { name: 'Zone d\'intervention', href: '#zone' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  // Fonction pour bloquer le défilement du body quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-[#121212]/95 backdrop-blur-sm shadow-lg' : 'py-4 bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-20">
              <Image 
                src="/logo_GR.jpg" 
                alt="GR Clean Logo" 
                width={55} 
                height={45} 
                className="rounded-md"
              />
              <span className="text-2xl font-bold text-white">
                <span className="text-white">Clean</span>
              </span>
            </Link>
            
            {/* Navigation - visible sur desktop */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white hover:text-[#C28638] transition-colors text-sm uppercase tracking-wider font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="#contact"
                className="cta-button px-5 py-2.5 rounded-md text-white font-medium shadow-md"
              >
                Demander un devis
              </a>
            </nav>
            
            {/* Bouton menu mobile */}
            <button
              className="lg:hidden z-20 text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </header>
      
      {/* Menu mobile comme composant séparé et détaché du header */}
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
} 