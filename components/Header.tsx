'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${isScrolled ? 'pt-[6px] md:pt-8 backdrop-blur-md bg-slate-900/95 border-b border-white/10 shadow-xl py-2 md:py-3' : 'pt-12 md:pt-14 py-4 md:py-6'}`}>
      <div className="section-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`w-12 h-12 bg-gradient-to-br rounded-xl flex items-center justify-center shadow-lg transition-all backdrop-blur-sm ${isScrolled ? 'border border-white/20 bg-white/90' : 'bg-white/80'}`}>
              <span className="text-slate-900 font-bold text-xl drop-shadow-md">✨</span>
            </div>
            <span className={`text-xl md:text-2xl font-black bg-clip-text drop-shadow-lg transition-all ${isScrolled ? 'bg-gradient-to-r from-white via-sky-50 to-white text-transparent' : 'bg-gradient-to-r from-white via-sky-100 to-white text-transparent'}`}>
              Astro Darshini
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-12">
            {['/', '/services', '/contact'].map((href, i) => (
              <Link
                key={href}
                href={href}
                className="text-white/90 hover:text-white font-semibold px-5 py-3 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:scale-[1.02]"
              >
                {href === '/' ? 'Home' : href === '/services' ? 'Services' : 'Contact'}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919999999999" className="p-3 hover:bg-white/20 rounded-2xl transition-all duration-300 text-white backdrop-blur-sm hover:shadow-lg">
              <Phone size={20} />
            </a>
            <Button className={`px-8 py-4 font-bold rounded-2xl shadow-2xl hover:shadow-white/30 hover:-translate-y-px transition-all backdrop-blur-sm ${isScrolled ? 'bg-white/95 text-slate-900 hover:bg-white' : 'bg-white/80 hover:bg-white text-slate-900'}`}>
              Book Now
            </Button>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-4">
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener" className="p-3 hover:bg-white/20 rounded-2xl transition-all duration-300 text-white backdrop-blur-sm hover:shadow-lg">
              <MessageCircle size={20} />
            </a>
            <button onClick={toggleMenu} className="p-3 hover:bg-white/20 rounded-2xl transition-all duration-300 text-white backdrop-blur-sm hover:shadow-lg">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`lg:hidden mt-4 p-8 backdrop-blur-md rounded-3xl shadow-2xl transition-all ${isScrolled ? 'bg-slate-900/90 border border-white/10' : 'bg-white/5 border border-white/10'}`}>
            <nav className="space-y-4">
              <Link href="/" className="block py-5 px-8 font-semibold rounded-2xl hover:bg-white/20 backdrop-blur-sm text-white/95 transition-all text-xl" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/services" className="block py-5 px-8 font-semibold rounded-2xl hover:bg-white/20 backdrop-blur-sm text-white/95 transition-all text-xl" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link href="/contact" className="block py-5 px-8 font-semibold rounded-2xl hover:bg-white/20 backdrop-blur-sm text-white/95 transition-all text-xl" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Button className="w-full mt-6 py-5 text-lg font-bold bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-emerald-500/50 rounded-2xl backdrop-blur-md border-0" onClick={() => setIsOpen(false)}>
                Book Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

