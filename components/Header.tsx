'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Languages } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/lib/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();

  const darkPages = ['/astromall', '/astro-mall'];
  const isDarkPage = darkPages.includes(pathname) || (pathname === '/tarot-reading' && resolvedTheme === 'dark');
  const headerTextColor = (isDarkPage && !isScrolled) ? 'text-white' : 'text-foreground';
  const navLinkColor = (isDarkPage && !isScrolled) ? 'text-white/70 hover:text-white' : 'text-foreground/70 hover:text-primary';
  const iconColor = (isDarkPage && !isScrolled) ? 'text-white/70' : 'text-foreground/70';
  const logoColor = (isDarkPage && !isScrolled) ? 'text-white' : 'text-foreground';
  const headerBgClass = isScrolled || isOpen
    ? 'py-4 bg-background/95 backdrop-blur-lg border-b border-border'
    : 'py-6 bg-transparent border-b border-transparent md:bg-transparent md:border-transparent md:backdrop-blur-0';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${headerBgClass}`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <span className={`text-xl md:text-2xl font-serif font-bold tracking-tighter transition-colors ${logoColor}`}>
              ASTRO <span className="text-primary">Darshi</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { name: t('nav.home'), href: '/' },
              { name: t('nav.services'), href: '/services' },
              { name: t('nav.about'), href: '/about' },
              { name: t('nav.contact'), href: '/contact' }
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${navLinkColor}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section: CTA & Mobile Menu */}
          <div className="flex items-center gap-4 md:gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className={`rounded-full border px-3 py-2 transition-colors ${isDarkPage && !isScrolled ? 'border-white/10 hover:bg-white/5' : 'border-black/5 hover:bg-black/5'}`}>
                  {language === 'en' ? 'En' : 'Hi'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background/90 backdrop-blur-md border-white/10">
                <DropdownMenuItem
                  onClick={() => setLanguage('en')}
                  className={`cursor-pointer ${language === 'en' ? 'text-primary' : ''}`}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('hi')}
                  className={`cursor-pointer ${language === 'hi' ? 'text-primary' : ''}`}
                >
                  हिंदी
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="tel:+919999999999"
              className={`${iconColor} hover:text-primary transition-colors hidden sm:flex`}
              title={t('hero.call')}
            >
              <Phone size={18} />
            </a>

            <Link
              href="/contact"
              className={`px-4 py-1.5 md:px-6 md:py-2 border rounded-full text-[10px] md:text-xs font-bold tracking-[0.1em] md:tracking-[0.2em] uppercase transition-all duration-300 ${isDarkPage && !isScrolled
                  ? 'border-white/30 text-white hover:bg-white hover:text-black'
                  : 'border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground'
                }`}
            >
              {t('nav.consult')}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-full transition-colors ${isDarkPage && !isScrolled ? 'bg-white/10 text-white hover:bg-white/15' : 'bg-background/80 text-foreground hover:bg-background/90'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-[95] md:hidden transition-all duration-500 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'}`}
          onClick={() => setIsOpen(false)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />
        </div>
        <div
          className={`fixed inset-y-0 right-0 z-[100] w-full max-w-[340px] bg-white dark:bg-slate-950/95 border-l border-border shadow-2xl md:hidden transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col min-h-full p-8">
            <div className="flex items-center justify-between mb-12 bg-white dark:bg-slate-950/95 px-0 py-0">
              <span className="text-xl font-serif font-bold tracking-tighter text-slate-900 dark:text-slate-100">
                ASTRO <span className="text-primary">Darshi</span>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-900 dark:text-slate-100 hover:bg-muted rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {[
                { name: t('nav.home'), href: '/' },
                { name: t('nav.services'), href: '/services' },
                { name: t('nav.about'), href: '/about' },
                { name: t('nav.contact'), href: '/contact' }
              ].map((link, idx) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-serif text-slate-900 dark:text-slate-100 hover:text-primary transition-all duration-300 transform"
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
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{t('nav.expert')}</span>
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
