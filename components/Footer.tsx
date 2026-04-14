'use client';

import Link from 'next/link';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-t from-muted/50 via-muted/20 backdrop-blur-sm z-40">
      <div className="section-container py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold gradient-text">Astro Darshini</h3>
            </div>
            <p className="text-muted-foreground/90 leading-relaxed">
              Illuminating your path through the cosmic wisdom of Vedic astrology and tarot guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-foreground text-lg tracking-wide uppercase mb-6 border-b border-border/30 pb-2">Quick Links</h4>
            <nav className="space-y-3">
              <Link href="/" className="block w-full py-3 px-4 rounded-xl text-foreground/90 hover:text-foreground hover:bg-accent/60 hover:shadow-md transition-all duration-300 group">
                <span className="group-hover:translate-x-2 transition-transform">Home</span>
              </Link>
              <Link href="/services" className="block w-full py-3 px-4 rounded-xl text-foreground/90 hover:text-foreground hover:bg-accent/60 hover:shadow-md transition-all duration-300 group">
                <span className="group-hover:translate-x-2 transition-transform">Services</span>
              </Link>
              <Link href="/contact" className="block w-full py-3 px-4 rounded-xl text-foreground/90 hover:text-foreground hover:bg-accent/60 hover:shadow-md transition-all duration-300 group">
                <span className="group-hover:translate-x-2 transition-transform">Contact</span>
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-bold text-foreground text-lg tracking-wide uppercase mb-6 border-b border-border/30 pb-2">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="tel:+919999999999"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-accent/50 text-foreground/90 hover:text-foreground hover:shadow-md transition-all duration-300 group"
              >
                <Phone size={20} className="text-primary shrink-0" />
                <span>+91 9999999999</span>
              </a>
              <a
                href="mailto:hello@astrodarshini.com"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-accent/50 text-foreground/90 hover:text-foreground hover:shadow-md transition-all duration-300 group"
              >
                <Mail size={20} className="text-primary shrink-0" />
                <span>hello@astrodarshini.com</span>
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/10 text-foreground/90 hover:text-foreground hover:shadow-md transition-all duration-300 group"
              >
                <MessageCircle size={20} className="text-secondary shrink-0" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent my-12"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <p className="text-sm text-muted-foreground/80">
            © {new Date().getFullYear()} Astro Darshini. All cosmic rights reserved. 🌌
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground/80 hover:text-foreground hover:underline transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground/80 hover:text-foreground hover:underline transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle Cosmic Border */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 blur-sm"></div>
    </footer>
  );
}

