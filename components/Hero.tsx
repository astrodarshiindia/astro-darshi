'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ArrowUp, MessageCircle, Phone, Sparkles, Briefcase, Heart, Coins, Activity, ChevronLeft, ChevronRight, Home, TrendingUp, Users, Gem } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import useEmblaCarousel from 'embla-carousel-react';
import { useIsMobile } from '@/hooks/use-mobile';

const slides = [
  {
    title: 'hero.relationship.title',
    highlight: 'hero.relationship.title.highlight',
    subtitle: 'hero.relationship.subtitle',
    bg: 'bg-[#FFF1F2]',
    accent: 'text-[#881337]',
    highlightColor: 'text-[#BE123C]',
    btnBg: 'bg-[#E11D48]',
    icon: <Heart className="w-12 h-12 md:w-20 md:h-20" />,
    image: '/love.gif',
    bottomImage: '/marriage.png',
    questions: [
      'मेरी शादी कब होगी?', 
      'क्या मुझे सच्चा प्यार मिलेगा?', 
      'पति-पत्नी के बीच अनबन कैसे दूर करें?', 
      'लव मैरिज होगी या अरेंज मैरिज?',
      'शादी में आ रही बाधाएं कैसे दूर करें?',
      'मेरा जीवनसाथी कैसा होगा?',
      'तलाक के योग तो नहीं हैं?',
      'ससुराल में संबंध कैसे रहेंगे?',
      'विवाह का शुभ मुहूर्त कब है?'
    ]
  },
  {
    title: 'hero.career.title',
    highlight: 'hero.career.title.highlight',
    subtitle: 'hero.career.subtitle',
    bg: 'bg-[#FFFBEB]',
    accent: 'text-[#78350F]',
    highlightColor: 'text-[#B45309]',
    btnBg: 'bg-[#D97706]',
    icon: <Briefcase className="w-12 h-12 md:w-20 md:h-20" />,
    image: '/career.gif',
    bottomImage: '/wealth.png',
    questions: [
      'सरकारी नौकरी कब मिलेगी?', 
      'प्रमोशन के योग कब हैं?', 
      'धन लाभ के उपाय क्या हैं?', 
      'कर्ज से मुक्ति कैसे पाएं?',
      'विदेश यात्रा के योग कब हैं?',
      'नौकरी बदलनी चाहिए या नहीं?',
      'बॉस के साथ संबंध कैसे सुधारें?',
      'सैलरी में वृद्धि कब होगी?',
      'इंटरव्यू में सफलता कैसे पाएं?'
    ]
  },
  {
    title: 'hero.health.title',
    highlight: 'hero.health.title.highlight',
    subtitle: 'hero.health.subtitle',
    bg: 'bg-[#F5F3FF]',
    accent: 'text-[#4C1D95]',
    highlightColor: 'text-[#6D28D9]',
    btnBg: 'bg-[#7C3AED]',
    icon: <Activity className="w-12 h-12 md:w-20 md:h-20" />,
    image: '/health.gif',
    bottomImage: '/health.png',
    questions: [
      'सेहत में सुधार कब होगा?', 
      'बार-बार बीमार क्यों पड़ते हैं?', 
      'मानसिक शांति के उपाय?', 
      'बीमारी से बचाव के उपाय?',
      'योग और ध्यान का सही समय?',
      'नींद न आने की समस्या का समाधान?',
      'पुरानी बीमारी से कब छुटकारा मिलेगा?',
      'तनाव मुक्त जीवन कैसे जिएं?',
      'ऊर्जा का स्तर कैसे बढ़ाएं?'
    ]
  },
  {
    title: 'hero.vastu.title',
    highlight: 'hero.vastu.title.highlight',
    subtitle: 'hero.vastu.subtitle',
    bg: 'bg-[#F0FDF4]',
    accent: 'text-[#064E3B]',
    highlightColor: 'text-[#047857]',
    btnBg: 'bg-[#059669]',
    icon: <Home className="w-12 h-12 md:w-20 md:h-20" />,
    image: '/finance.gif',
    bottomImage: '/vastu.png',
    questions: [
      'अपना घर कब बनेगा?', 
      'नया घर लेते समय क्या सावधानी बरतें?', 
      'घर में वास्तु दोष कैसे पहचानें?', 
      'संपत्ति विवाद से छुटकारा कैसे पाएं?',
      'किचन की सही दिशा क्या है?',
      'बेडरूम में खुशहाली के उपाय?',
      'वास्तु अनुसार मुख्य द्वार कहाँ हो?',
      'घर में सकारात्मक ऊर्जा कैसे बढ़ाएं?',
      'ऑफिस का वास्तु कैसा होना चाहिए?'
    ]
  },
  {
    title: 'hero.business.title',
    highlight: 'hero.business.title.highlight',
    subtitle: 'hero.business.subtitle',
    bg: 'bg-[#EEF2FF]',
    accent: 'text-[#1E3A8A]',
    highlightColor: 'text-[#1D4ED8]',
    btnBg: 'bg-[#2563EB]',
    icon: <TrendingUp className="w-12 h-12 md:w-20 md:h-20" />,
    image: '/finance.gif',
    bottomImage: '/business.png',
    questions: [
      'व्यापार में घाटा क्यों हो रहा है?', 
      'नया बिज़नेस शुरू करने का शुभ मुहूर्त?', 
      'बिजनेस में सफलता कैसे पाएं?', 
      'पार्टनरशिप में काम कैसा रहेगा?',
      'स्टॉक मार्केट में निवेश सही है?',
      'बिक्री बढ़ाने के उपाय?',
      'कर्मचारियों के साथ तालमेल कैसे बिठाएं?',
      'बिजनेस का नाम क्या रखें?',
      'नए निवेश के लिए सही समय?'
    ]
  },
  {
    title: 'hero.matchmaking.title',
    highlight: 'hero.matchmaking.title.highlight',
    subtitle: 'hero.matchmaking.subtitle',
    bg: 'bg-[#FEF2F2]',
    accent: 'text-[#7F1D1D]',
    highlightColor: 'text-[#B91C1C]',
    btnBg: 'bg-[#DC2626]',
    icon: <Users className="w-12 h-12 md:w-20 md:h-20" />,
    image: '/marriage.gif',
    bottomImage: '/match.png',
    questions: [
      'कुंडली मिलान क्यों जरूरी है?', 
      'गुण मिलान के साथ क्या देखें?', 
      'मांगलिक दोष का उपाय क्या है?', 
      'मैच मेकिंग से सुखद भविष्य कैसे?',
      'क्या हमारे स्वभाव मेल खाएंगे?',
      'भकूत और नाड़ी दोष का निवारण?',
      'संतान सुख के योग क्या हैं?',
      'शादी के बाद करियर कैसा रहेगा?',
      'क्या हम एक दूसरे के लिए सही हैं?'
    ]
  },
  {
    title: 'hero.matrimonial.title',
    highlight: 'hero.matrimonial.title.highlight',
    subtitle: 'hero.matrimonial.subtitle',
    bg: 'bg-[#FFFDF0]',
    accent: 'text-[#713F12]',
    highlightColor: 'text-[#A16207]',
    btnBg: 'bg-[#CA8A04]',
    icon: <Gem className="w-12 h-12 md:w-20 md:h-20" />,
    image: '/marriage.gif',
    bottomImage: '/matrimonial.png',
    questions: [
      'सर्वश्रेष्ठ जीवनसाथी कैसे चुनें?', 
      'विवाह में हो रही देरी के कारण?', 
      'सुखी वैवाहिक जीवन का रहस्य?', 
      'रिश्ते को मजबूत कैसे बनाएं?',
      'समान विचार वाला साथी कैसे मिले?',
      'शादी के लिए सही उम्र क्या है?',
      'क्या दूसरी शादी के योग हैं?',
      'पति/पत्नी के साथ विदेश योग?',
      'सफल वैवाहिक जीवन के ज्योतिष उपाय?'
    ]
  },
];

export default function Hero() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);

    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(intervalId);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className={`relative h-[80svh] min-h-[500px] md:h-[700px] flex items-center justify-center overflow-hidden transition-colors duration-1000 ${slides[selectedIndex].bg}`}>
      {/* Zodiac Circle - Background Animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[650px] md:h-[650px] border border-black/5 rounded-full animate-slow-rotate pointer-events-none">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-lg transition-colors duration-1000 ${slides[selectedIndex].btnBg}`} />
      </div>

      <div className="w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 h-full flex items-center justify-center relative px-4">
              <div className="max-w-4xl mx-auto text-center z-10 -mt-60 md:-mt-64">
                {/* Main Heading */}
                <div className="space-y-1 md:space-y-2 mb-4 md:mb-8 pt-4 md:pt-6">
                  <h1 className={`text-3xl md:text-6xl lg:text-8xl font-serif leading-tight tracking-tight transition-all duration-700 ${index === selectedIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${slide.accent}`}>
                    {t(slide.title)} <br />
                    <span className={`${slide.highlightColor} italic`}>{t(slide.highlight)}</span>
                  </h1>

                  <p className={`text-sm md:text-xl text-black/60 font-light tracking-wide max-w-[90vw] md:max-w-2xl mx-auto transition-all duration-700 delay-200 ${index === selectedIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {t(slide.subtitle)}
                  </p>

                  {/* Hindi Questions Scrollable Marquee */}
                  <div className={`mt-6 md:mt-12 overflow-x-auto scrollbar-hide relative transition-all duration-700 delay-300 ${index === selectedIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="animate-marquee flex gap-3 md:gap-6 py-1.5 md:py-2 hover:[animation-play-state:paused] active:[animation-play-state:paused]">
                      {slide.questions.map((q, i) => (
                        <div 
                          key={i} 
                          className={`flex-shrink-0 px-3 py-1.5 md:px-6 md:py-3 rounded-xl md:rounded-3xl text-[10px] md:text-base font-medium border border-black/5 shadow-sm backdrop-blur-sm transition-all hover:scale-105 ${slide.bg} ${slide.accent}`}
                        >
                          {q}
                        </div>
                      ))}
                      {/* Duplicate for seamless loop */}
                      {slide.questions.map((q, i) => (
                        <div 
                          key={`dup-${i}`} 
                          className={`flex-shrink-0 px-3 py-1.5 md:px-6 md:py-3 rounded-xl md:rounded-3xl text-[10px] md:text-base font-medium border border-black/5 shadow-sm backdrop-blur-sm transition-all hover:scale-105 ${slide.bg} ${slide.accent}`}
                        >
                          {q}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className={`flex flex-row items-center justify-center gap-2 md:gap-4 transition-all duration-700 delay-500 ${index === selectedIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <Link
                    href="/services"
                    className={`group relative px-4 py-2 md:px-8 md:py-3 ${slide.btnBg} text-white rounded-full text-[10px] md:text-sm font-bold tracking-[0.05em] md:tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl whitespace-nowrap`}
                  >
                    <span className="relative z-10">{t('hero.cta.services')}</span>
                    <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Link>

                  <Link
                    href="/contact"
                    className={`px-4 py-2 md:px-8 md:py-3 border border-black/10 text-black/70 rounded-full text-[10px] md:text-sm font-bold tracking-[0.05em] md:tracking-[0.2em] uppercase hover:bg-black/5 transition-all duration-300 whitespace-nowrap`}
                  >
                    {t('hero.cta.book')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide-specific image at the very bottom center */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none z-0">
        <img 
          src={slides[selectedIndex].bottomImage} 
          alt="Bottom Background" 
          className="w-full max-w-2xl md:max-w-3xl object-contain translate-y-0 transition-all duration-1000" 
        />
      </div>

      {/* Navigation Arrows - Desktop Only */}
      <button 
        onClick={scrollPrev}
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-all z-20"
      >
        <ChevronLeft className="text-black/50" />
      </button>
      <button 
        onClick={scrollNext}
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-all z-20"
      >
        <ChevronRight className="text-black/50" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${index === selectedIndex ? `w-8 ${slides[index].btnBg}` : 'w-2 bg-black/20'}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className={`w-[1px] h-12 bg-gradient-to-b from-black/50 to-transparent`} />
      </div>

      {/* Floating Call/Chat - Premium Version */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2 p-1 bg-white/80 backdrop-blur-xl border border-black/5 rounded-full shadow-2xl">
        <a
          href="tel:+919999999999"
          className={`flex items-center gap-3 px-6 py-3 ${slides[selectedIndex].btnBg} text-white rounded-full hover:opacity-90 transition-all font-medium text-sm shadow-md`}
        >
          <Phone size={16} className="shrink-0" /> {t('hero.call')}
        </a>
        <a
          href="https://wa.me/919999999999?text=Hi%20AstroDarshi!%20I'd%20like%20a%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 bg-green-600 text-white rounded-full hover:opacity-90 transition-all font-medium text-sm shadow-md"
        >
          <MessageCircle size={16} className="shrink-0" /> {t('hero.chat')}
        </a>
      </div>

      {/* Back to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 z-50 w-12 h-12 bg-white border border-black/5 text-black/70 rounded-full shadow-2xl flex items-center justify-center hover:bg-black/5 transition-all"
          aria-label="Scroll to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </section>
  );
}
