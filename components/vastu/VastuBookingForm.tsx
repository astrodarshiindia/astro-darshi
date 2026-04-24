'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Calendar, User, Phone, MapPin, Building, MessageSquare, Send } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function VastuBookingForm() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Booking Request Sent!",
      description: "Our Vastu expert will contact you shortly.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="booking-form" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-5">
            
            {/* Form Info Side */}
            <div className="lg:col-span-2 bg-slate-900 p-8 sm:p-10 lg:p-12 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-serif mb-6 italic">{t('vastu.booking.title')}</h2>
                <p className="text-slate-400 mb-8">
                  {t('vastu.booking.subtitle')}
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{t('vastu.booking.call')}</p>
                      <p className="text-white">+91 99999 99999</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{t('vastu.booking.availability')}</p>
                      <p className="text-white">{t('vastu.booking.availability.desc')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-slate-500 text-sm italic">
                  {t('vastu.booking.quote')}
                </p>
              </div>
            </div>

            {/* Form Side */}
            <form onSubmit={handleSubmit} className="lg:col-span-3 p-8 sm:p-10 lg:p-12 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <User size={14} className="text-primary" /> {t('vastu.booking.name')}
                  </label>
                  <Input required placeholder={t('vastu.booking.name')} className="rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <Phone size={14} className="text-primary" /> {t('vastu.booking.phone')}
                  </label>
                  <Input required type="tel" placeholder={t('vastu.booking.phone')} className="rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 h-12" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <MapPin size={14} className="text-primary" /> {t('vastu.booking.location')}
                  </label>
                  <Input required placeholder={t('vastu.booking.location')} className="rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <Building size={14} className="text-primary" /> {t('vastu.booking.property')}
                  </label>
                  <select 
                    required 
                    className="w-full h-12 rounded-xl border border-slate-200 px-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none bg-white"
                  >
                    <option value="">{t('vastu.booking.property.placeholder')}</option>
                    <option value="home">{t('vastu.booking.property.home')}</option>
                    <option value="shop">{t('vastu.booking.property.shop')}</option>
                    <option value="office">{t('vastu.booking.property.office')}</option>
                    <option value="factory">{t('vastu.booking.property.factory')}</option>
                    <option value="land">{t('vastu.booking.property.land')}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Calendar size={14} className="text-primary" /> {t('vastu.booking.date')}
                </label>
                <Input required type="date" className="rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 h-12" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <MessageSquare size={14} className="text-primary" /> {t('vastu.booking.problem')}
                </label>
                <Textarea 
                  required 
                  placeholder={t('vastu.booking.problem.placeholder')} 
                  className="rounded-xl border-slate-200 focus:border-primary focus:ring-primary/20 min-h-[120px] resize-none"
                />
              </div>

              <Button 
                disabled={isSubmitting}
                className="w-full h-14 rounded-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              >
                {isSubmitting ? t('vastu.booking.btn.sending') : (
                  <>
                    {t('vastu.booking.btn.book')} <Send size={18} />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
