'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { useSelectedService } from '@/lib/SelectedServiceContext';
import { 
  FileText, 
  Search, 
  Home, 
  Gem, 
  Heart, 
  Users,
  ArrowRight,
  MessageCircle,
  Phone,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

export default function OurServices() {
  const { t } = useLanguage();
  const { setSelectedService } = useSelectedService();
  const [isMatchmakingOpen, setIsMatchmakingOpen] = useState(false);
  const [isAskNowOpen, setIsAskNowOpen] = useState(false);
  const [matchmakingDetails, setMatchmakingDetails] = useState({
    p1Name: '',
    p1Dob: '',
    p1Tob: '',
    p1Pob: '',
    p2Name: '',
    p2Dob: '',
    p2Tob: '',
    p2Pob: ''
  });

  const handleMatchmakingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Matchmaking Analysis Inquiry:\n\n` +
      `Person 1:\nName: ${matchmakingDetails.p1Name}\nDOB: ${matchmakingDetails.p1Dob}\nTime: ${matchmakingDetails.p1Tob}\nPlace: ${matchmakingDetails.p1Pob}\n\n` +
      `Person 2:\nName: ${matchmakingDetails.p2Name}\nDOB: ${matchmakingDetails.p2Dob}\nTime: ${matchmakingDetails.p2Tob}\nPlace: ${matchmakingDetails.p2Pob}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919999999999?text=${encodedMessage}`, '_blank');
    setIsMatchmakingOpen(false);
  };

  const services = [
    {
      id: 'kundli',
      title: t('service.kundli.title'),
      desc: t('service.kundli.desc'),
      icon: FileText,
      btnText: t('service.kundli.btn'),
      color: 'from-blue-500/20 to-indigo-500/20',
      iconColor: 'text-blue-500',
      action: () => {
        setSelectedService('kundli');
        const element = document.getElementById('contact-form');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'prashna',
      title: t('service.prashna.title'),
      desc: t('service.prashna.desc'),
      icon: Search,
      btnText: t('service.prashna.btn'),
      color: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-500',
      action: () => {
        setSelectedService('prashna');
        setIsAskNowOpen(true);
      }
    },
    {
      id: 'vastu',
      title: t('service.vastu.title'),
      desc: t('service.vastu.desc'),
      icon: Home,
      btnText: t('service.vastu.btn'),
      color: 'from-emerald-500/20 to-teal-500/20',
      iconColor: 'text-emerald-500',
      action: () => {
        setSelectedService('vastu');
        const element = document.getElementById('contact-form');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'gemstone',
      title: t('service.gemstone.title'),
      desc: t('service.gemstone.desc'),
      icon: Gem,
      btnText: t('service.gemstone.btn'),
      color: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-500',
      action: () => {
        setSelectedService('gemstone');
        const element = document.getElementById('astro-mall');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'matchmaking',
      title: t('service.matchmaking.title'),
      desc: t('service.matchmaking.desc'),
      icon: Heart,
      btnText: t('service.matchmaking.btn'),
      color: 'from-rose-500/20 to-pink-500/20',
      iconColor: 'text-rose-500',
      action: () => {
        setSelectedService('matchmaking');
        setIsMatchmakingOpen(true);
      }
    },
    {
      id: 'matrimonial',
      title: t('service.matrimonial.title'),
      desc: t('service.matrimonial.desc'),
      icon: Users,
      btnText: 'Fill Form',
      color: 'from-cyan-500/20 to-blue-500/20',
      iconColor: 'text-cyan-500',
      href: '/matrimonial',
      action: () => setSelectedService('matrimonial')
    }
  ];

  return (
    <section id="services" className="pt-24 pb-16 md:pt-40 md:pb-24 relative bg-background overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2" />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight">
            {t('services.title')} <span className="text-primary italic">{t('services.title.highlight')}</span>
          </h2>
          <p className="text-muted-foreground text-base font-light max-w-2xl mx-auto leading-relaxed">
            Discover divine guidance through our curated astrological services, 
            blending ancient wisdom with modern precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group relative flex flex-col h-full p-0.5 rounded-[2rem] bg-gradient-to-b from-border/50 to-transparent hover:from-primary/20 transition-all duration-700 shadow-2xl shadow-black/5"
            >
              <div className="flex flex-col h-full p-6 rounded-[1.9rem] bg-card/80 backdrop-blur-xl border border-white/5 relative overflow-hidden">
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 relative">
                    <div className={`w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center ${service.iconColor} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-black/10`}>
                      <service.icon size={24} strokeWidth={1.5} />
                    </div>
                    {/* Decorative number */}
                    <span className="absolute top-0 right-0 text-3xl font-serif text-foreground/5 select-none">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="space-y-2 mb-6 flex-grow">
                    <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed text-xs">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-auto">
                    {service.href ? (
                      <Link href={service.href} className="block group/btn">
                        <Button 
                          onClick={service.action}
                          className="w-full py-5 rounded-xl bg-secondary/50 hover:bg-primary text-foreground hover:text-primary-foreground border border-border/50 hover:border-primary transition-all duration-500 flex items-center justify-between px-6"
                        >
                          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{service.btnText}</span>
                          <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
                        </Button>
                      </Link>
                    ) : (
                      <Button 
                        onClick={service.action}
                        className="w-full py-5 rounded-xl bg-secondary/50 hover:bg-primary text-foreground hover:text-primary-foreground border border-border/50 hover:border-primary group/btn transition-all duration-500 flex items-center justify-between px-6"
                      >
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{service.btnText}</span>
                        <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prashna Kundli - Ask Now Dialog */}
      <Dialog open={isAskNowOpen} onOpenChange={setIsAskNowOpen}>
        <DialogContent className="sm:max-w-[400px] glass-effect border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-3xl font-serif">Connect with Us</DialogTitle>
            <DialogDescription className="text-base">
              Choose your preferred way to get instant answers to your questions.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4 py-6">
            <Button 
              onClick={() => window.open('https://wa.me/919999999999', '_blank')}
              className="py-8 rounded-2xl bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-between px-8 text-lg group shadow-lg shadow-green-500/20"
            >
              <div className="flex items-center gap-4">
                <MessageCircle size={24} />
                <span className="font-serif">WhatsApp Chat</span>
              </div>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={() => window.open('tel:+919999999999', '_self')}
              className="py-8 rounded-2xl bg-primary hover:bg-foreground text-primary-foreground hover:text-background flex items-center justify-between px-8 text-lg group shadow-lg shadow-primary/20"
            >
              <div className="flex items-center gap-4">
                <Phone size={24} />
                <span className="font-serif">Direct Call</span>
              </div>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Matchmaking Birth Details Modal */}
      <Dialog open={isMatchmakingOpen} onOpenChange={setIsMatchmakingOpen}>
        <DialogContent className="sm:max-w-[600px] glass-effect border-primary/20 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-serif">Matchmaking Analysis</DialogTitle>
            <DialogDescription>
              Enter birth details for both individuals to check compatibility.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleMatchmakingSubmit} className="space-y-8 py-4">
            {/* Person 1 */}
            <div className="space-y-4 p-4 rounded-2xl bg-primary/5 border border-primary/10">
              <h4 className="font-serif text-lg text-primary flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">1</span>
                Person 1 Details
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="p1Name">Full Name</Label>
                  <Input 
                    id="p1Name" 
                    required 
                    value={matchmakingDetails.p1Name}
                    onChange={(e) => setMatchmakingDetails({...matchmakingDetails, p1Name: e.target.value})}
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="p1Dob">Date of Birth</Label>
                  <Input 
                    id="p1Dob" 
                    type="date" 
                    required 
                    value={matchmakingDetails.p1Dob}
                    onChange={(e) => setMatchmakingDetails({...matchmakingDetails, p1Dob: e.target.value})}
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="p1Tob">Time of Birth</Label>
                  <Input 
                    id="p1Tob" 
                    type="time" 
                    required 
                    value={matchmakingDetails.p1Tob}
                    onChange={(e) => setMatchmakingDetails({...matchmakingDetails, p1Tob: e.target.value})}
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="p1Pob">Place of Birth</Label>
                  <Input 
                    id="p1Pob" 
                    required 
                    placeholder="City, Country"
                    value={matchmakingDetails.p1Pob}
                    onChange={(e) => setMatchmakingDetails({...matchmakingDetails, p1Pob: e.target.value})}
                    className="bg-background/50"
                  />
                </div>
              </div>
            </div>

            {/* Person 2 */}
            <div className="space-y-4 p-4 rounded-2xl bg-accent/5 border border-accent/10">
              <h4 className="font-serif text-lg text-accent flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs">2</span>
                Person 2 Details
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="p2Name">Full Name</Label>
                  <Input 
                    id="p2Name" 
                    required 
                    value={matchmakingDetails.p2Name}
                    onChange={(e) => setMatchmakingDetails({...matchmakingDetails, p2Name: e.target.value})}
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="p2Dob">Date of Birth</Label>
                  <Input 
                    id="p2Dob" 
                    type="date" 
                    required 
                    value={matchmakingDetails.p2Dob}
                    onChange={(e) => setMatchmakingDetails({...matchmakingDetails, p2Dob: e.target.value})}
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="p2Tob">Time of Birth</Label>
                  <Input 
                    id="p2Tob" 
                    type="time" 
                    required 
                    value={matchmakingDetails.p2Tob}
                    onChange={(e) => setMatchmakingDetails({...matchmakingDetails, p2Tob: e.target.value})}
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="p2Pob">Place of Birth</Label>
                  <Input 
                    id="p2Pob" 
                    required 
                    placeholder="City, Country"
                    value={matchmakingDetails.p2Pob}
                    onChange={(e) => setMatchmakingDetails({...matchmakingDetails, p2Pob: e.target.value})}
                    className="bg-background/50"
                  />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full mt-4 btn-premium py-8 text-lg">
              Check Compatibility
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
