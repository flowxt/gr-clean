import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#121212] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/logo_GR.jpg" 
                alt="GR Clean Logo" 
                width={60} 
                height={40} 
                className="rounded-md"
              />
              <span className="text-xl font-bold">
                <span className="text-white">Clean</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Experts du nettoyage professionnel à Annecy et alentours depuis plus de 15 ans.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/grclean74_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#C28638]/20 w-10 h-10 rounded-full flex items-center justify-center border border-[#C28638] hover:bg-[#C28638]/30 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-[#C28638]" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Nos services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-[#C28638] transition-colors">
                  Nettoyage de vitres
                </Link>
              </li>
              
              <li>
                <Link href="#services" className="text-gray-400 hover:text-[#C28638] transition-colors">
                  Entretien de bureaux
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-[#C28638] transition-colors">
                  Nettoyage locaux médicaux
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-[#C28638] transition-colors">
                  Nettoyage chez les particuliers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#C28638]" />
                <span className="text-gray-400">Sillingy, Haute-Savoie</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#C28638]" />
                <a 
                  href="tel:+33689805698" 
                  className="text-gray-400 hover:text-[#C28638] transition-colors"
                >
                  06 89 80 56 98
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#C28638]" />
                <a 
                  href="mailto:rgclean74@gmail.com" 
                  className="text-gray-400 hover:text-[#C28638] transition-colors"
                >
                  rgclean74@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} GR CLEAN. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 