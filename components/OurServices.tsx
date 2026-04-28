'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';
import VedicMandala from './VedicMandala';
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
  Sparkles,
  TrendingUp,
  Wand2,
  CheckCircle2,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function OurServices() {
  const router = useRouter();
  const { t } = useLanguage();
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
      color: 'from-amber-500/20 to-orange-600/20',
      iconColor: 'text-amber-600',
      borderColor: 'border-amber-500/20',
      glowColor: 'group-hover:shadow-amber-500/20',
      cardHref: '/services?service=kundli',
      buttonHref: '/services?service=kundli',
      actionType: 'link'
    },
    {
      id: 'prashna',
      title: t('service.prashna.title'),
      desc: t('service.prashna.desc'),
      icon: Search,
      btnText: t('service.prashna.btn'),
      color: 'from-blue-500/20 to-indigo-600/20',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-500/20',
      glowColor: 'group-hover:shadow-blue-500/20',
      cardHref: '/services?service=prashna',
      actionType: 'ask'
    },
    {
      id: 'tarot',
      title: t('service.tarot.title'),
      desc: t('service.tarot.desc'),
      icon: Wand2,
      btnText: t('service.tarot.btn'),
      color: 'from-purple-500/20 to-pink-600/20',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-500/20',
      glowColor: 'group-hover:shadow-purple-500/20',
      cardHref: '/services?service=tarot',
      buttonHref: '/tarot-reading',
      actionType: 'link'
    },
    {
      id: 'vastu',
      title: t('service.vastu.title'),
      desc: t('service.vastu.desc'),
      icon: Home,
      btnText: t('service.vastu.btn'),
      color: 'from-emerald-500/20 to-teal-600/20',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-500/20',
      glowColor: 'group-hover:shadow-emerald-500/20',
      cardHref: '/services?service=vastu',
      buttonHref: '/vastu-consultation',
      actionType: 'link'
    },
    {
      id: 'gemstone',
      title: t('service.gemstone.title'),
      desc: t('service.gemstone.desc'),
      icon: Gem,
      btnText: t('service.gemstone.btn'),
      color: 'from-red-500/20 to-rose-600/20',
      iconColor: 'text-red-600',
      borderColor: 'border-red-500/20',
      glowColor: 'group-hover:shadow-red-500/20',
      cardHref: '/services?service=gemstone',
      buttonHref: '/astromall',
      actionType: 'link'
    },
    {
      id: 'matchmaking',
      title: t('service.matchmaking.title'),
      desc: t('service.matchmaking.desc'),
      icon: Heart,
      btnText: t('service.matchmaking.btn'),
      color: 'from-rose-500/20 to-pink-600/20',
      iconColor: 'text-rose-600',
      borderColor: 'border-rose-500/20',
      glowColor: 'group-hover:shadow-rose-500/20',
      cardHref: '/services?service=matchmaking',
      actionType: 'modal'
    },
    {
      id: 'matrimonial',
      title: t('service.matrimonial.title'),
      desc: t('service.matrimonial.desc'),
      icon: Users,
      btnText: t('service.matrimonial.btn'),
      color: 'from-cyan-500/20 to-blue-600/20',
      iconColor: 'text-cyan-600',
      borderColor: 'border-cyan-500/20',
      glowColor: 'group-hover:shadow-cyan-500/20',
      cardHref: '/services?service=matrimonial',
      buttonHref: '/matrimonial',
      actionType: 'link'
    },
    {
      id: 'business',
      title: t('service.business.title'),
      desc: t('service.business.desc'),
      icon: TrendingUp,
      btnText: t('service.business.btn'),
      color: 'from-orange-500/20 to-yellow-600/20',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-500/20',
      glowColor: 'group-hover:shadow-orange-500/20',
      cardHref: '/services?service=business',
      buttonHref: '/business-growth',
      actionType: 'link'
    }
  ];

  return (
    <section id="services" className="py-12 md:py-24 relative bg-background overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3" />
        
        {/* Floating Mandalas */}
        <div className="absolute top-20 left-10 opacity-10 animate-slow-rotate hidden lg:block">
          <VedicMandala />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 animate-slow-rotate-reverse hidden lg:block">
          <VedicMandala />
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
            <Sparkles size={14} />
            Our Services
          </div>
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight leading-tight text-foreground">
            Consult for <span className="text-primary italic">Better Life</span> Decisions
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div 
              key={service.id}
              onClick={() => router.push(service.cardHref)}
              className={`group relative flex flex-col h-full rounded-[2rem] border ${service.borderColor} bg-card hover:bg-white dark:hover:bg-white/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${service.glowColor} overflow-hidden cursor-pointer`}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 p-5 flex flex-col h-full">
                <div className="mb-4 flex justify-between items-start">
                  <div className={`w-10 h-10 rounded-xl bg-white dark:bg-card border ${service.borderColor} flex items-center justify-center ${service.iconColor} shadow-lg group-hover:scale-110 transition-all duration-500`}>
                    <service.icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-2xl font-serif text-foreground/5 font-bold">
                    0{index + 1}
                  </span>
                </div>

                <div className="space-y-2 mb-4 flex-grow">
                  <h3 className="text-lg font-serif text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-[11px]">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-auto">
                  <Button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      if (service.actionType === 'ask') {
                        setIsAskNowOpen(true);
                        return;
                      }
                      if (service.actionType === 'modal') {
                        setIsMatchmakingOpen(true);
                        return;
                      }
                      if (service.buttonHref) {
                        router.push(service.buttonHref);
                      }
                    }}
                    className="w-full py-4 h-auto rounded-xl bg-secondary/80 hover:bg-primary text-foreground hover:text-primary-foreground border border-border/50 hover:border-primary transition-all duration-500 flex items-center justify-center gap-2 font-bold text-[9px] uppercase tracking-widest"
                  >
                    {service.btnText}
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-500" />
                  </Button>
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

            <Button type="submit" className="w-full py-8 rounded-2xl text-lg font-serif">
              Check Compatibility
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
