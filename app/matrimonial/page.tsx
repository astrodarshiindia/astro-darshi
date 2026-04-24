'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import CosmicBackground from '@/components/CosmicBackground';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { 
  Users, 
  Heart, 
  Star, 
  Sparkles, 
  ShieldCheck, 
  HandHeart, 
  Clock,
  ArrowRight,
  Loader2,
  CheckCircle2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function MatrimonialPage() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    tob: '',
    pob: '',
    gender: '',
    caste: '',
    height: '',
    weight: '',
    education: '',
    profession: '',
    location: '',
    photo: null as File | null
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create message for WhatsApp and Email
      const message = `*New Matrimonial Registration*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*DOB:* ${formData.dob}\n` +
        `*Time:* ${formData.tob}\n` +
        `*Place:* ${formData.pob}\n` +
        `*Gender:* ${formData.gender}\n` +
        `*Caste/Gotra:* ${formData.caste}\n` +
        `*Height:* ${formData.height}\n` +
        `*Weight:* ${formData.weight}\n` +
        `*Education:* ${formData.education}\n` +
        `*Profession:* ${formData.profession}\n` +
        `*Location:* ${formData.location}`;

      // 1. Submit to Database via API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: 'matrimonial@astrodarshi.com',
          phone: 'N/A', // Collected in contact field previously, but now we have specific fields
          service_type: 'matrimonial',
          message: message.replace(/\*/g, '') // Remove markdown for email
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      // 2. Success state
      setIsSuccess(true);
      toast({
        title: t('contact.success'),
        description: "Your matrimonial profile has been submitted successfully.",
      });

      // 3. Optional: WhatsApp fallback
      setTimeout(() => {
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/919999999999?text=${encodedMessage}`, '_blank');
      }, 1500);

    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "There was a problem submitting your form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-background">
      <CosmicBackground />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <Heart size={16} className="fill-primary" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase">{t('matrimonial.hero.badge')}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1]">
              {t('matrimonial.hero.title')} <br />
              <span className="text-primary italic text-3xl md:text-5xl">{t('matrimonial.hero.subtitle')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
              {t('matrimonial.hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="btn-premium px-12 py-8 text-lg rounded-2xl group shadow-2xl shadow-primary/20"
              >
                <span>{t('matrimonial.cta.register')}</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('https://wa.me/919999999999', '_blank')}
                className="px-10 py-8 text-lg rounded-2xl border-primary/20 bg-background/50 hover:bg-primary/5 transition-all"
              >
                {t('matrimonial.cta.help')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 relative bg-secondary/10 backdrop-blur-sm overflow-hidden">
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">{t('matrimonial.how.title')}</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", key: "matrimonial.how.step1", icon: Users },
              { step: "02", key: "matrimonial.how.step2", icon: Star },
              { step: "03", key: "matrimonial.how.step3", icon: CheckCircle2 },
              { step: "04", key: "matrimonial.how.step4", icon: ShieldCheck },
            ].map((item, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-500 group">
                <div className="absolute -top-4 -right-4 text-6xl font-serif text-primary/5 font-bold group-hover:text-primary/10 transition-colors">
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <item.icon size={24} />
                </div>
                <p className="text-lg font-medium leading-relaxed">
                  {t(item.key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features & Privacy */}
      <section className="py-24 relative">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase">
                {t('matrimonial.features.title')}
              </div>
              <h2 className="text-4xl font-serif leading-tight">
                Designed for <span className="text-primary italic">Meaningful</span> Connections
              </h2>
              
              <div className="space-y-6">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Sparkles size={12} className="text-primary" />
                    </div>
                    <p className="text-lg text-muted-foreground">
                      {t(`matrimonial.features.${num}` as any)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative p-10 md:p-16 rounded-[3rem] bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <ShieldCheck size={120} />
              </div>
              
              <div className="relative z-10 space-y-8">
                <div className="w-20 h-20 rounded-3xl bg-background border border-primary/20 flex items-center justify-center text-primary shadow-xl shadow-primary/5">
                  <ShieldCheck size={40} />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif">{t('matrimonial.privacy.title')}</h3>
                  <div className="space-y-2">
                    <p className="text-xl font-medium text-primary">
                      “{t('matrimonial.privacy.text1')}”
                    </p>
                    <p className="text-muted-foreground text-lg italic">
                      {t('matrimonial.privacy.text2')}
                    </p>
                  </div>
                </div>

                <Button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-8 text-lg rounded-2xl bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  {t('matrimonial.cta.register')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-[95vw] sm:max-w-[650px] glass-effect border-primary/20 p-0 overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
          {!isSuccess ? (
            <div className="flex flex-col h-full">
              <div className="p-5 md:p-8 pb-4 border-b border-border/50 bg-primary/5">
                <DialogTitle className="text-2xl md:text-3xl font-serif flex items-center gap-3">
                  <Sparkles className="text-primary shrink-0" />
                  {t('matrimonial.form.title')}
                </DialogTitle>
                <DialogDescription className="text-sm md:text-base mt-2">
                  {t('matrimonial.hero.description')}
                </DialogDescription>
              </div>
              
              <form onSubmit={handleSubmit} className="p-5 md:p-8 space-y-4 md:space-y-5 max-h-[75vh] md:max-h-[70vh] overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('matrimonial.form.name')}</Label>
                    <Input 
                      id="name" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-background/50 py-5 rounded-xl border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">{t('matrimonial.form.gender')}</Label>
                    <Select onValueChange={(v) => setFormData({...formData, gender: v})}>
                      <SelectTrigger className="bg-background/50 py-2.5 rounded-xl border-border/50 h-auto">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male / पुरुष</SelectItem>
                        <SelectItem value="female">Female / महिला</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dob">{t('matrimonial.form.dob')}</Label>
                    <Input 
                      id="dob" 
                      type="date"
                      required 
                      value={formData.dob}
                      onChange={(e) => setFormData({...formData, dob: e.target.value})}
                      className="bg-background/50 py-5 rounded-xl border-border/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tob">{t('matrimonial.form.tob')}</Label>
                    <Input 
                      id="tob" 
                      type="time"
                      required 
                      value={formData.tob}
                      onChange={(e) => setFormData({...formData, tob: e.target.value})}
                      className="bg-background/50 py-5 rounded-xl border-border/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pob">{t('matrimonial.form.pob')}</Label>
                    <Input 
                      id="pob" 
                      required 
                      placeholder="City, State"
                      value={formData.pob}
                      onChange={(e) => setFormData({...formData, pob: e.target.value})}
                      className="bg-background/50 py-5 rounded-xl border-border/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="caste">{t('matrimonial.form.caste')}</Label>
                    <Input 
                      id="caste" 
                      required 
                      value={formData.caste}
                      onChange={(e) => setFormData({...formData, caste: e.target.value})}
                      className="bg-background/50 py-5 rounded-xl border-border/50"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <Label htmlFor="height">{t('matrimonial.form.height')}</Label>
                      <Input 
                        id="height" 
                        placeholder={"e.g. 5'8\""}
                        value={formData.height}
                        onChange={(e) => setFormData({...formData, height: e.target.value})}
                        className="bg-background/50 py-5 rounded-xl border-border/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight">{t('matrimonial.form.weight')}</Label>
                      <Input 
                        id="weight" 
                        placeholder="e.g. 70kg"
                        value={formData.weight}
                        onChange={(e) => setFormData({...formData, weight: e.target.value})}
                        className="bg-background/50 py-5 rounded-xl border-border/50"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="education">{t('matrimonial.form.education')}</Label>
                    <Input 
                      id="education" 
                      required 
                      value={formData.education}
                      onChange={(e) => setFormData({...formData, education: e.target.value})}
                      className="bg-background/50 py-5 rounded-xl border-border/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profession">{t('matrimonial.form.profession')}</Label>
                    <Input 
                      id="profession" 
                      required 
                      value={formData.profession}
                      onChange={(e) => setFormData({...formData, profession: e.target.value})}
                      className="bg-background/50 py-5 rounded-xl border-border/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">{t('matrimonial.form.location')}</Label>
                  <Input 
                    id="location" 
                    required 
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="bg-background/50 py-5 rounded-xl border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photo">{t('matrimonial.form.photo')}</Label>
                  <Input 
                    id="photo" 
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFormData({...formData, photo: e.target.files ? e.target.files[0] : null})}
                    className="bg-background/50 py-2 rounded-xl border-border/50 cursor-pointer"
                  />
                  <p className="text-[10px] text-muted-foreground italic">
                    {t('matrimonial.privacy.text1')}
                  </p>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full mt-4 btn-premium py-8 text-lg rounded-2xl relative overflow-hidden group shadow-xl shadow-primary/20"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <Loader2 size={20} className="animate-spin" />
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <>
                      <span className="relative z-10">{t('matrimonial.form.submit')}</span>
                      <Sparkles className="ml-2 group-hover:scale-125 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          ) : (
            <div className="p-8 md:p-12 text-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle2 size={40} className="text-primary" />
              </div>
              <h3 className="text-3xl font-serif">Thank You!</h3>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                {t('contact.success')}
              </p>
              <Button 
                onClick={() => setIsModalOpen(false)}
                className="w-full py-6 rounded-xl mt-4"
              >
                Close Window
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </main>
  );
}
