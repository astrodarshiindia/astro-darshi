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
    age: '',
    gender: '',
    profession: '',
    location: '',
    contact: '',
    requirements: ''
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
      // 1. Submit to Database via API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: 'matrimonial@astrodarshi.com', // Placeholder for internal tracking
          phone: formData.contact,
          service_type: 'matrimonial',
          message: `Age: ${formData.age} | Gender: ${formData.gender} | Profession: ${formData.profession} | Location: ${formData.location} | Requirements: ${formData.requirements}`
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      // 2. Success state
      setIsSuccess(true);
      toast({
        title: "Registration Successful",
        description: "Your matrimonial profile has been submitted successfully.",
      });

      // 3. Optional: WhatsApp fallback (delay slightly for better UX)
      setTimeout(() => {
        const message = `*New Matrimonial Registration*\n\n` +
          `*Name:* ${formData.name}\n` +
          `*Age:* ${formData.age}\n` +
          `*Gender:* ${formData.gender}\n` +
          `*Profession:* ${formData.profession}\n` +
          `*Location:* ${formData.location}\n` +
          `*Contact:* ${formData.contact}\n` +
          `*Requirements:* ${formData.requirements}`;
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
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary animate-pulse">
              <Heart size={16} className="fill-primary" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Sacred Unions</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif leading-[1.1]">
              Find Your <span className="text-primary italic">Cosmic</span> Partner
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
              We blend the ancient science of Vedic Astrology with modern matchmaking 
              to help you find a partner whose soul resonates with yours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="btn-premium px-12 py-8 text-lg rounded-2xl group shadow-2xl shadow-primary/20"
              >
                <span>Register Your Profile</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('https://wa.me/919999999999', '_blank')}
                className="px-10 py-8 text-lg rounded-2xl border-primary/20 bg-background/50 hover:bg-primary/5 transition-all"
              >
                Talk to Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative bg-secondary/30 backdrop-blur-sm">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: "Verified Profiles", 
                desc: "Every profile undergoes a strict manual verification process for your safety.",
                color: "text-blue-500"
              },
              { 
                icon: Star, 
                title: "Astro-Matching", 
                desc: "In-depth Kundli matching included to ensure long-term harmony.",
                color: "text-amber-500"
              },
              { 
                icon: HandHeart, 
                title: "Personalized Care", 
                desc: "Dedicated relationship managers to guide you at every step.",
                color: "text-rose-500"
              },
              { 
                icon: Clock, 
                title: "Time-Tested", 
                desc: "Decades of experience in bringing families together successfully.",
                color: "text-emerald-500"
              }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-[2.5rem] bg-card border border-border hover:border-primary/30 transition-all duration-500">
                <div className={`w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 ${feature.color} shadow-lg shadow-black/5 group-hover:scale-110 transition-transform`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-[95vw] sm:max-w-[550px] glass-effect border-primary/20 p-0 overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
          {!isSuccess ? (
            <div className="flex flex-col h-full">
              <div className="p-5 md:p-8 pb-4 border-b border-border/50 bg-primary/5">
                <DialogTitle className="text-2xl md:text-3xl font-serif flex items-center gap-3">
                  <Sparkles className="text-primary shrink-0" />
                  Profile Registration
                </DialogTitle>
                <DialogDescription className="text-sm md:text-base mt-2">
                  Complete your profile to begin your journey towards a sacred union.
                </DialogDescription>
              </div>
              
              <form onSubmit={handleSubmit} className="p-5 md:p-8 space-y-4 md:space-y-5 max-h-[75vh] md:max-h-[70vh] overflow-y-auto custom-scrollbar">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    required 
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-background/50 py-5 md:py-6 rounded-xl border-border/50 focus:border-primary"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input 
                      id="age" 
                      type="number" 
                      required 
                      placeholder="e.g. 28"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      className="bg-background/50 py-5 md:py-6 rounded-xl border-border/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select onValueChange={(v) => setFormData({...formData, gender: v})}>
                      <SelectTrigger className="bg-background/50 py-5 md:py-6 rounded-xl border-border/50 h-auto">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="profession">Profession / Occupation</Label>
                  <Input 
                    id="profession" 
                    required 
                    placeholder="e.g. Software Engineer"
                    value={formData.profession}
                    onChange={(e) => setFormData({...formData, profession: e.target.value})}
                    className="bg-background/50 py-5 md:py-6 rounded-xl border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Current Location (City)</Label>
                  <Input 
                    id="location" 
                    required 
                    placeholder="e.g. Lucknow, UP"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="bg-background/50 py-5 md:py-6 rounded-xl border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Phone Number / WhatsApp</Label>
                  <Input 
                    id="contact" 
                    type="tel" 
                    required 
                    placeholder="Enter your contact number"
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    className="bg-background/50 py-5 md:py-6 rounded-xl border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Partner Preferences</Label>
                  <Textarea 
                    id="requirements" 
                    placeholder="Briefly describe what you are looking for in a partner..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                    className="bg-background/50 rounded-xl border-border/50 min-h-[80px] md:min-h-[100px] resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full mt-4 btn-premium py-6 md:py-8 text-base md:text-lg rounded-2xl relative overflow-hidden group shadow-xl shadow-primary/20"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <Loader2 size={20} className="animate-spin" />
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <>
                      <span className="relative z-10">Submit Profile</span>
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
                Your profile has been securely submitted. Our relationship manager 
                will reach out to you shortly for the next steps.
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
