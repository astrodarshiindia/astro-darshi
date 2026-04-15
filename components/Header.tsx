'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${isScrolled ? 'py-4 bg-background/80 backdrop-blur-lg border-b border-white/5' : 'py-6 bg-transparent'
        }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-foreground">
              ASTRO <span className="text-primary">DARSHINI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Contact', href: '/contact' }
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section: CTA & Mobile Menu */}
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="tel:+919999999999"
              className="hidden sm:flex text-foreground/70 hover:text-foreground transition-colors"
              title="Call Us"
            >
              <Phone size={18} />
            </a>

            <Link
              href="/contact"
              className="px-4 py-1.5 md:px-6 md:py-2 border border-primary/30 rounded-full text-[10px] md:text-xs font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Consult Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground p-1.5"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-background/60 backdrop-blur-md z-[70] md:hidden transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
            }`}
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`fixed top-0 right-0 bottom-0 w-[300px] bg-background border-l border-border z-[80] md:hidden transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col h-full p-8">
            <div className="flex items-center justify-between mb-12">
              <span className="text-xl font-serif font-bold tracking-tighter text-foreground">
                ASTRO <span className="text-primary">DARSHINI</span>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-foreground hover:bg-muted rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Contact', href: '/contact' }
              ].map((link, idx) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-serif text-foreground hover:text-primary transition-all duration-300 transform"
                  style={{
                    transitionDelay: `${idx * 100}ms`,
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateX(0)' : 'translateX(20px)'
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto space-y-6">
              <div className="h-[1px] bg-border w-full" />
              <div className="flex items-center gap-4">
                <a
                  href="tel:+919999999999"
                  className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Phone size={20} />
                </a>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Expert Consultation</span>
                  <span className="text-sm font-medium">+91 99999 99999</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
