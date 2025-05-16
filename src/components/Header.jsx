import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

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
    { name: 'Galerie', href: '#gallery' },
    { name: 'Zone d\'intervention', href: '#zone' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
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
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      
      {/* Menu mobile */}
      <motion.div
        className="lg:hidden fixed inset-0 bg-[#121212] z-10 flex flex-col justify-center items-center"
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : '100%'
        }}
        transition={{ duration: 0.3 }}
      >
        <nav className="flex flex-col items-center space-y-6 p-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-white hover:text-[#C28638] transition-colors text-xl uppercase tracking-wider font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="#contact"
            className="cta-button mt-4 px-6 py-3 rounded-md text-white font-medium shadow-md"
            onClick={() => setIsOpen(false)}
          >
            Demander un devis
          </a>
        </nav>
      </motion.div>
    </header>
  );
} 