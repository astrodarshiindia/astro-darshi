'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { useLanguage } from '@/lib/LanguageContext';
import { useSiteSettings } from '@/lib/SiteSettingsContext';
import { Phone, Mail, MessageCircle, MapPin, Clock, ChevronDown } from 'lucide-react';

export default function ContactPageClient() {
  const { t } = useLanguage();
  const { settings, telHref, whatsappHref, mailtoHref } = useSiteSettings();

  const channels = [
    {
      icon: Phone,
      label: t('contact.channel.call'),
      value: settings.phoneDisplay,
      href: telHref,
      note: t('contact.page.hours'),
    },
    {
      icon: MessageCircle,
      label: t('contact.channel.whatsapp'),
      value: settings.phoneDisplay,
      href: whatsappHref,
      note: t('contact.page.whatsappNote'),
      external: true,
    },
    {
      icon: Mail,
      label: t('contact.channel.email'),
      value: settings.email,
      href: mailtoHref,
      note: t('contact.channel.responseTime'),
    },
    {
      icon: MapPin,
      label: t('contact.channel.location'),
      value: settings.addressLine,
      note: t('contact.page.locationNote'),
    },
  ];

  const faqs = [
    { q: t('contact.page.faq1.q'), a: t('contact.page.faq1.a') },
    { q: t('contact.page.faq2.q'), a: t('contact.page.faq2.a') },
    { q: t('contact.page.faq3.q'), a: t('contact.page.faq3.a') },
  ];

  return (
    <main className="min-h-screen bg-[#fafaf9] text-stone-900">
      <Header />

      <section className="border-b border-stone-200/80 bg-white pt-[110px] pb-12 md:pb-16">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-[2.35rem] leading-[1.08] tracking-tight sm:text-5xl">
              {t('contact.page.title')}{' '}
              <span className="font-serif italic text-amber-800">
                {t('contact.page.title.highlight')}
              </span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-stone-600">
              {t('contact.page.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
            <div className="min-w-0">
              <ContactForm embedded />
            </div>

            <aside className="relative z-0 space-y-8 lg:sticky lg:top-28 lg:self-start">
              <div>
                <h2 className="text-lg font-semibold">{t('contact.page.reachTitle')}</h2>
                <p className="mt-1 text-sm text-stone-500">{t('contact.page.reachSubtitle')}</p>
              </div>

              <div className="space-y-3">
                {channels.map((channel) => {
                  const Icon = channel.icon;
                  const inner = (
                    <div className="flex gap-4 rounded-2xl border border-stone-200/80 bg-white p-4 transition-colors hover:border-stone-300 hover:bg-stone-50">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-700">
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wider text-stone-400">
                          {channel.label}
                        </p>
                        <p className="mt-0.5 font-medium text-stone-900">{channel.value}</p>
                        <p className="mt-0.5 text-xs text-stone-500">{channel.note}</p>
                      </div>
                    </div>
                  );

                  if (channel.href) {
                    return (
                      <a
                        key={channel.label}
                        href={channel.href}
                        target={channel.external ? '_blank' : undefined}
                        rel={channel.external ? 'noopener noreferrer' : undefined}
                      >
                        {inner}
                      </a>
                    );
                  }
                  return <div key={channel.label}>{inner}</div>;
                })}
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-amber-200/80 bg-amber-50/60 px-4 py-3">
                <Clock size={16} className="shrink-0 text-amber-700" />
                <p className="text-xs leading-relaxed text-amber-900">{t('contact.page.replyNote')}</p>
              </div>

              <div className="border-t border-stone-200/80 pt-8">
                <h3 className="text-sm font-semibold text-stone-900">{t('contact.page.faqTitle')}</h3>
                <div className="mt-4 space-y-2">
                  {faqs.map((faq) => (
                    <details
                      key={faq.q}
                      className="group rounded-xl border border-stone-200/80 bg-white"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-stone-800 [&::-webkit-details-marker]:hidden">
                        {faq.q}
                        <ChevronDown
                          size={16}
                          className="shrink-0 text-stone-400 transition-transform group-open:rotate-180"
                        />
                      </summary>
                      <p className="border-t border-stone-100 px-4 py-3 text-sm leading-relaxed text-stone-600">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
