import type { Metadata } from 'next';
import Header from '@/components/Header';
import CosmicBackground from '@/components/CosmicBackground';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Astro Darshini',
  description: 'Get in touch with Astro Darshini for vedic astrology and tarot card reading consultations.',
};

export default function ContactPage() {
  return (
    <main className="relative">
      <CosmicBackground />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Get in Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with Astro Darshini and begin your cosmic journey
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-12 md:py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground">
                  Reach out through any of these channels. We&apos;re here to guide you on your cosmic journey.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href="tel:+919999999999"
                  className="flex gap-4 p-4 cosmic-border glass-effect rounded-lg hover:border-primary transition-colors"
                >
                  <div className="flex-shrink-0 flex items-center">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Call Us</h3>
                    <p className="text-muted-foreground">+91 9999999999</p>
                    <p className="text-sm text-muted-foreground mt-1">Available Mon-Sun, 10am-8pm IST</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 p-4 cosmic-border glass-effect rounded-lg hover:border-primary transition-colors"
                >
                  <div className="flex-shrink-0 flex items-center">
                    <MessageCircle className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-muted-foreground">+91 9999999999</p>
                    <p className="text-sm text-muted-foreground mt-1">Quick queries and instant support</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@astrodarshini.com"
                  className="flex gap-4 p-4 cosmic-border glass-effect rounded-lg hover:border-primary transition-colors"
                >
                  <div className="flex-shrink-0 flex items-center">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">hello@astrodarshini.com</p>
                    <p className="text-sm text-muted-foreground mt-1">Response within 24 hours</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex gap-4 p-4 cosmic-border glass-effect rounded-lg">
                  <div className="flex-shrink-0 flex items-center">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">India</p>
                    <p className="text-sm text-muted-foreground mt-1">Online consultations worldwide</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="space-y-4 pt-8 border-t border-border">
                <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>

                <div className="space-y-3">
                  <details className="group cursor-pointer">
                    <summary className="flex items-center justify-between p-3 cosmic-border glass-effect rounded-lg hover:border-primary">
                      <span className="font-medium">What is the best time to consult?</span>
                      <span className="transform group-open:rotate-180 transition-transform">▾</span>
                    </summary>
                    <p className="mt-2 text-sm text-muted-foreground px-3">
                      You can consult anytime, but morning hours are traditionally considered auspicious for spiritual consultations.
                    </p>
                  </details>

                  <details className="group cursor-pointer">
                    <summary className="flex items-center justify-between p-3 cosmic-border glass-effect rounded-lg hover:border-primary">
                      <span className="font-medium">How long does a session take?</span>
                      <span className="transform group-open:rotate-180 transition-transform">▾</span>
                    </summary>
                    <p className="mt-2 text-sm text-muted-foreground px-3">
                      Sessions typically range from 45 to 75 minutes depending on the service. Check our Services page for details.
                    </p>
                  </details>

                  <details className="group cursor-pointer">
                    <summary className="flex items-center justify-between p-3 cosmic-border glass-effect rounded-lg hover:border-primary">
                      <span className="font-medium">Can I reschedule my appointment?</span>
                      <span className="transform group-open:rotate-180 transition-transform">▾</span>
                    </summary>
                    <p className="mt-2 text-sm text-muted-foreground px-3">
                      Yes, you can reschedule up to 24 hours before your appointment. Please contact us via phone or WhatsApp.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
