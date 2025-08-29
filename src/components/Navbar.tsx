import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

import ThemeToggle from './ThemeToggle';
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Removed "Booking" and "Contact" from this array
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Accommodation',
    path: '/accommodation'
  }, {
    name: 'Activities',
    path: '/activities'
  }];
  const whatsappNumber = '94764519940';
  const whatsappMessage = encodeURIComponent("I'm interested in your packages");
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  return <header className={cn('fixed w-full top-0 z-50 transition-all duration-300', isScrolled ? 'bg-black/60 backdrop-blur-sm shadow-md py-3' : 'bg-black/40 backdrop-blur-sm py-6')}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-white">
          {navLinks.map(link => <Link key={link.path} to={link.path} className={cn('text-sm font-medium relative transition-all duration-300', 'after:content-["""] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0', 'after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300', 'hover:after:scale-x-100 hover:after:origin-bottom-left', location.pathname === link.path ? 'text-white after:scale-x-100' : 'text-white/80 hover:text-white')}>
              {link.name}
            </Link>)}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-600 text-white/95 hover:text-white hover:bg-green-700 transition-colors duration-300">
            <Phone size={16} />
            <span>WhatsApp Us</span>
          </a>
          <ThemeToggle />
        </div>
        
        {/* Mobile Right Controls */}
        <div className="md:hidden flex items-center gap-2 text-white">
          <ThemeToggle />
          <button
            className="text-white p-2"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn('fixed inset-0 bg-blue-700 pt-20 px-4 z-40 transition-all duration-300 ease-in-out md:hidden', isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none')}>
        <button className="absolute top-4 right-4 p-2 text-white" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
          <X size={24} />
        </button>
        
        <nav className="flex flex-col space-y-6 text-white">
          {navLinks.map(link => <Link key={link.path} to={link.path} className={cn('text-xl font-medium py-2 border-b border-white/20', location.pathname === link.path ? 'text-white' : 'text-white/80')} onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </Link>)}
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-xl font-medium py-2 border-b border-white/20 text-white/90 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <Phone size={20} className="text-white" />
            WhatsApp: +94 764519940
          </a>
        </nav>
      </div>
      
    </header>;
};
export default Navbar;