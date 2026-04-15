'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.consult': 'Consult Now',
    'nav.expert': 'Expert Consultation',
    
    // Hero
    'hero.title': 'Decode Your',
    'hero.title.highlight': "Destiny's Blueprint",
    'hero.subtitle': "wondering about your future? Gain crystal-clear clarity on your career, relationships, and life purpose with India's most trusted astrologer.",
    'hero.cta.book': 'Book Consultation',
    'hero.cta.services': 'Explore Services',
    'hero.call': 'Call',
    'hero.chat': 'Chat',
    
    // Services
    'services.title': 'Our',
    'services.title.highlight': 'Sacred Offerings',
    'services.subtitle': "We blend ancient wisdom with modern understanding to provide clarity for your life's most significant questions.",
    'services.explore_all': 'Explore All',
    'services.begin_journey': 'Begin Your Journey',
    'services.our_services': 'Our Services',
    
    // Service 1: Vedic Astrology
    'service.vedic.title': 'Vedic Astrology',
    'service.vedic.desc': 'Your cosmic blueprint revealed through ancient sidereal calculations and planetary periods.',
    'service.vedic.f1': 'Birth Chart Analysis',
    'service.vedic.f2': 'Planetary Dashas',
    'service.vedic.f3': 'Career & Wealth',
    'service.vedic.f4': 'Relationship Compatibility',
    
    // Service 2: Sacred Tarot
    'service.tarot.title': 'Sacred Tarot',
    'service.tarot.desc': 'Intuitive guidance using esoteric symbolism to illuminate your current energies and paths.',
    'service.tarot.f1': 'Intuitive Spreads',
    'service.tarot.f2': 'Spiritual Growth',
    'service.tarot.f3': 'Decision Clarity',
    'service.tarot.f4': 'Energy Alignment',
    
    // Astro Mall
    'mall.title': 'The',
    'mall.title.highlight': 'Astro',
    'mall.subtitle': 'Premium gemstones and sacred artifacts, personally curated and energetically cleansed for your cosmic journey.',
    'mall.coming_soon': 'Coming Soon - Sacred Artifacts',
    'mall.enquire': 'Enquire Now',
    'mall.authentic': 'Authentic',
    'mall.mall': 'Mall',
    
    // Footer
    'footer.description': 'Illuminating your spiritual journey through the ancient wisdom of Vedic Astrology and the intuitive guidance of Sacred Tarot. Your cosmic compass for lifes transformation.',
    'footer.address': 'Lucknow, Uttar Pradesh, India',
    'footer.navigation': 'Navigation',
    'footer.services': 'Services',
    'footer.guides': 'Expert Guides',
    'footer.connect': 'Connect',
    'footer.legal': 'Legal',
    'footer.rights': 'Astro Darshini. All Rights Reserved.',
    'footer.crafted': 'Crafted for Spiritual Evolution',
    'footer.made_with': 'Made with',
    'footer.by_team': 'by the Cosmic Team',
    
    // Links
    'link.home': 'Home',
    'link.services': 'Services',
    'link.contact': 'Contact',
    'link.horoscope': 'Daily Horoscope',
    'link.career': 'Career Astrology',
    'link.marriage': 'Marriage Astrology',
    'link.kundli': 'Kundli Matching',
    'link.vastu': 'Vastu Consultation',
    'link.numerology': 'Numerology Services',
    'link.gemstone': 'Gemstone Consultation',
    'link.guide1': 'Best Vedic Astrologer in Lucknow',
    'link.guide2': 'Best Tarot Readers in Lucknow',
    'link.guide3': 'Best Astrologers in Lucknow',
    'link.guide4': 'Best Astrologers Globally',
    'link.privacy': 'Privacy Policy',
    'link.terms': 'Terms of Service',

    // Contact Form
    'contact.title': 'Send Your Query',
    'contact.subtitle': 'Share your concerns and let the cosmic energy guide your path',
    'contact.success': "Thank you! Your query has been received. We'll get back to you soon with cosmic blessings.",
    'contact.error.name': 'Please enter your name',
    'contact.error.email': 'Please enter a valid email',
    'contact.error.phone': 'Please enter a valid phone number',
    'contact.error.service': 'Please select a service',
    'contact.error.message': 'Please enter your message',
    'contact.label.name': 'Full Name *',
    'contact.placeholder.name': 'Your name',
    'contact.label.email': 'Email *',
    'contact.placeholder.email': 'your@email.com',
    'contact.label.phone': 'Phone Number *',
    'contact.placeholder.phone': '+91 98765 43210',
    'contact.label.service': 'Service *',
    'contact.placeholder.service': 'Select a service',
    'contact.service.vedic': 'Vedic Astrology Consultation',
    'contact.service.tarot': 'Tarot Card Reading',
    'contact.service.both': 'Both Services',
    'contact.service.other': 'Other Inquiry',
    'contact.label.message': 'Your Message *',
    'contact.placeholder.message': 'Tell us about your concerns, questions, or what guidance you seek...',
    'contact.button.sending': 'Sending...',
    'contact.button.send': 'Send Query',
    'contact.privacy': 'We respect your privacy. Your information will only be used to provide you with cosmic guidance.',

    // Testimonials
    'testimonials.title': 'Celestial',
    'testimonials.title.highlight': 'Blessings',
    'testimonials.subtitle': 'Voices of those whose paths have been illuminated by cosmic wisdom.',
    'testimonials.1.name': 'Priya Sharma',
    'testimonials.1.role': 'Business Owner',
    'testimonials.1.text': "Darshini's Vedic Astrology reading gave me the clarity I needed during a challenging career transition. The insights were remarkably accurate and transformative.",
    'testimonials.2.name': 'Anjali Verma',
    'testimonials.2.role': 'Healthcare Professional',
    'testimonials.2.text': "The tarot readings have been incredibly helpful in understanding my relationships and personal growth. Darshini's intuition is truly exceptional.",
    'testimonials.3.name': 'Neha Patel',
    'testimonials.3.role': 'Creative Professional',
    'testimonials.3.text': "The birth chart analysis provided me with a deeper understanding of my strengths and potential. I've never felt more aligned with my purpose.",

    // Astrologer Profile
    'profile.title': 'Meet',
    'profile.title.highlight': 'Darshini',
    'profile.description': "A dedicated Vedic Astrologer and Tarot Reader with over a decade of experience in guiding seekers through life's cosmic journey. Darshini combines ancient Vedic wisdom with intuitive spiritual guidance to provide transformative readings tailored to your unique path.",
    'profile.cred1.title': 'Vedic Specialist',
    'profile.cred1.desc': 'Expert in Sidereal calculations and planetary periods (Dashas).',
    'profile.cred2.title': 'Certified Master',
    'profile.cred2.desc': 'Deeply trained in classical tarot symbolism and intuitive spreads.',
    'profile.expertise.title': 'Core Expertise',
    'profile.expertise.1': 'Career Guidance',
    'profile.expertise.2': 'Relationship Insights',
    'profile.expertise.3': 'Life Purpose',
    'profile.expertise.4': 'Spiritual Growth',
    'profile.expertise.5': 'Energy Alignment',

    // CTA Banner
    'cta.title': 'Unlock the Secrets of Your',
    'cta.title.highlight': 'Kundli',
    'cta.subtitle': "Get expert guidance for career, marriage, and life's biggest questions. Connect with Lucknow's most trusted astrologers for a personalized consultation.",
    'cta.button.book': 'Book Consultation',
    'cta.button.whatsapp': 'WhatsApp',
    'cta.trusted': 'Trusted by 500+ seekers worldwide',

    // WhatsApp Message
    'whatsapp.message': 'Hello, I am interested in inquiring about the product: {productName}. Price: ₹{price}. Please provide more details.',
    
    // Product Detail
    'product.details': 'Product Details',
    'product.back': 'Back to Mall',
    'product.description': 'Description',
    'product.authentic_guarantee': '100% Authentic & Energetically Cleansed',
    'product.enquire_whatsapp': 'Enquire on WhatsApp'
  },
  hi: {
    // Header
    'nav.home': 'होम',
    'nav.services': 'सेवाएं',
    'nav.contact': 'संपर्क',
    'nav.consult': 'अभी परामर्श लें',
    'nav.expert': 'विशेषज्ञ परामर्श',
    
    // Hero
    'hero.title': 'अपने भाग्य की',
    'hero.title.highlight': 'योजना को डिकोड करें',
    'hero.subtitle': 'अपने भविष्य के बारे में सोच रहे हैं? भारत के सबसे भरोसेमंद ज्योतिषी के साथ अपने करियर, रिश्तों और जीवन के उद्देश्य पर स्पष्टता प्राप्त करें।',
    'hero.cta.book': 'परामर्श बुक करें',
    'hero.cta.services': 'सेवाएं देखें',
    'hero.call': 'कॉल',
    'hero.chat': 'चैट',
    
    // Services
    'services.title': 'हमारी',
    'services.title.highlight': 'पवित्र सेवाएं',
    'services.subtitle': 'हम आपके जीवन के सबसे महत्वपूर्ण प्रश्नों के लिए स्पष्टता प्रदान करने के लिए आधुनिक समझ के साथ प्राचीन ज्ञान का मिश्रण करते हैं।',
    'services.explore_all': 'सभी देखें',
    'services.begin_journey': 'अपनी यात्रा शुरू करें',
    'services.our_services': 'हमारी सेवाएं',
    
    // Service 1: Vedic Astrology
    'service.vedic.title': 'वैदिक ज्योतिष',
    'service.vedic.desc': 'आपका ब्रह्मांडीय खाका प्राचीन नाक्षत्र गणना और ग्रहों की अवधि के माध्यम से प्रकट हुआ।',
    'service.vedic.f1': 'जन्म कुंडली विश्लेषण',
    'service.vedic.f2': 'ग्रह दशा',
    'service.vedic.f3': 'करियर और धन',
    'service.vedic.f4': 'संबंध अनुकूलता',
    
    // Service 2: Sacred Tarot
    'service.tarot.title': 'पवित्र टैरो',
    'service.tarot.desc': 'आपकी वर्तमान ऊर्जाओं और मार्गों को रोशन करने के लिए गूढ़ प्रतीकवाद का उपयोग करते हुए सहज मार्गदर्शन।',
    'service.tarot.f1': 'सहज स्प्रेड्स',
    'service.tarot.f2': 'आध्यात्मिक विकास',
    'service.tarot.f3': 'निर्णय स्पष्टता',
    'service.tarot.f4': 'ऊर्जा संरेखण',
    
    // Astro Mall
    'mall.title': 'द',
    'mall.title.highlight': 'एस्ट्रो',
    'mall.subtitle': 'प्रीमियम रत्न और पवित्र कलाकृतियाँ, व्यक्तिगत रूप से चुनी गई और आपकी ब्रह्मांडीय यात्रा के लिए ऊर्जावान रूप से शुद्ध की गई।',
    'mall.coming_soon': 'जल्द आ रहा है - पवित्र कलाकृतियाँ',
    'mall.enquire': 'अभी पूछताछ करें',
    'mall.authentic': 'प्रामाणिक',
    'mall.mall': 'मॉल',
    
    // Footer
    'footer.description': 'आध्यात्मिक पथ पर आपका विश्वसनीय साथी, प्राचीन ज्ञान को आधुनिक दुनिया में लाना।',
    'footer.navigation': 'नेविगेशन',
    'footer.services': 'सेवाएं',
    'footer.guides': 'विशेषज्ञ गाइड',
    'footer.connect': 'जुड़ें',
    'footer.legal': 'कानूनी',
    'footer.rights': 'एस्ट्रो दर्शिनी। सर्वाधिकार सुरक्षित।',
    'footer.crafted': 'आध्यात्मिक विकास के लिए निर्मित',
    'footer.made_with': 'निर्मित',
    'footer.by_team': 'कॉस्मिक टीम द्वारा',
    
    // Links
    'link.home': 'होम',
    'link.services': 'सेवाएं',
    'link.contact': 'संपर्क',
    'link.horoscope': 'दैनिक राशिफल',
    'link.career': 'करियर ज्योतिष',
    'link.marriage': 'विवाह ज्योतिष',
    'link.kundli': 'कुंडली मिलान',
    'link.vastu': 'वास्तु परामर्श',
    'link.numerology': 'अंक ज्योतिष सेवाएं',
    'link.gemstone': 'रत्न परामर्श',
    'link.guide1': 'लखनऊ के सर्वश्रेष्ठ वैदिक ज्योतिषी',
    'link.guide2': 'लखनऊ के सर्वश्रेष्ठ टैरो रीडर्स',
    'link.guide3': 'लखनऊ के सर्वश्रेष्ठ ज्योतिषी',
    'link.guide4': 'विश्व स्तर पर सर्वश्रेष्ठ ज्योतिषी',
    'link.privacy': 'गोपनीयता नीति',
    'link.terms': 'सेवा की शर्तें',

    // Contact Form
    'contact.title': 'अपनी जिज्ञासा भेजें',
    'contact.subtitle': 'अपनी चिंताओं को साझा करें और ब्रह्मांडीय ऊर्जा को अपना मार्ग प्रशस्त करने दें',
    'contact.success': 'धन्यवाद! आपकी जिज्ञासा प्राप्त हो गई है। हम जल्द ही ब्रह्मांडीय आशीर्वाद के साथ आपसे संपर्क करेंगे।',
    'contact.error.name': 'कृपया अपना नाम दर्ज करें',
    'contact.error.email': 'कृपया एक वैध ईमेल दर्ज करें',
    'contact.error.phone': 'कृपया एक वैध फोन नंबर दर्ज करें',
    'contact.error.service': 'कृपया एक सेवा चुनें',
    'contact.error.message': 'कृपया अपना संदेश दर्ज करें',
    'contact.label.name': 'पूरा नाम *',
    'contact.placeholder.name': 'आपका नाम',
    'contact.label.email': 'ईमेल *',
    'contact.placeholder.email': 'your@email.com',
    'contact.label.phone': 'फोन नंबर *',
    'contact.placeholder.phone': '+91 98765 43210',
    'contact.label.service': 'सेवा *',
    'contact.placeholder.service': 'एक सेवा चुनें',
    'contact.service.vedic': 'वैदिक ज्योतिष परामर्श',
    'contact.service.tarot': 'टैरो कार्ड रीडिंग',
    'contact.service.both': 'दोनों सेवाएं',
    'contact.service.other': 'अन्य पूछताछ',
    'contact.label.message': 'आपका संदेश *',
    'contact.placeholder.message': 'हमें अपनी चिंताओं, प्रश्नों या आप किस मार्गदर्शन की तलाश में हैं, इसके बारे में बताएं...',
    'contact.button.sending': 'भेजा जा रहा है...',
    'contact.button.send': 'जिज्ञासा भेजें',
    'contact.privacy': 'हम आपकी गोपनीयता का सम्मान करते हैं। आपकी जानकारी का उपयोग केवल आपको ब्रह्मांडीय मार्गदर्शन प्रदान करने के लिए किया जाएगा।',

    // Testimonials
    'testimonials.title': 'दिव्य',
    'testimonials.title.highlight': 'आशीर्वाद',
    'testimonials.subtitle': 'उन लोगों की आवाजें जिनके पथ ब्रह्मांडीय ज्ञान से आलोकित हुए हैं।',
    'testimonials.1.name': 'प्रिया शर्मा',
    'testimonials.1.role': 'व्यवसाय मालिक',
    'testimonials.1.text': 'दर्शिनी की वैदिक ज्योतिष रीडिंग ने मुझे करियर के चुनौतीपूर्ण बदलाव के दौरान वह स्पष्टता दी जिसकी मुझे आवश्यकता थी। अंतर्दृष्टि उल्लेखनीय रूप से सटीक और परिवर्तनकारी थी।',
    'testimonials.2.name': 'अंजलि वर्मा',
    'testimonials.2.role': 'स्वास्थ्य देखभाल पेशेवर',
    'testimonials.2.text': 'मेरे रिश्तों और व्यक्तिगत विकास को समझने में टैरो रीडिंग अविश्वसनीय रूप से मददगार रही है। दर्शिनी का अंतर्ज्ञान वास्तव में असाधारण है।',
    'testimonials.3.name': 'नेहा पटेल',
    'testimonials.3.role': 'रचनात्मक पेशेवर',
    'testimonials.3.text': 'जन्म कुंडली विश्लेषण ने मुझे अपनी शक्तियों और क्षमता की गहरी समझ प्रदान की। मैंने अपने उद्देश्य के साथ इतना संरेखित कभी महसूस नहीं किया।',

    // Astrologer Profile
    'profile.title': 'मिलें',
    'profile.title.highlight': 'दर्शिनी',
    'profile.description': 'एक समर्पित वैदिक ज्योतिषी और टैरो रीडर, जिन्हें जीवन की ब्रह्मांडीय यात्रा के माध्यम से साधकों का मार्गदर्शन करने में एक दशक से अधिक का अनुभव है। दर्शिनी आपके अद्वितीय पथ के अनुरूप परिवर्तनकारी रीडिंग प्रदान करने के लिए प्राचीन वैदिक ज्ञान को सहज आध्यात्मिक मार्गदर्शन के साथ जोड़ती हैं।',
    'profile.cred1.title': 'वैदिक विशेषज्ञ',
    'profile.cred1.desc': 'नाक्षत्र गणना और ग्रहों की अवधि (दशा) में विशेषज्ञ।',
    'profile.cred2.title': 'प्रमाणित मास्टर',
    'profile.cred2.desc': 'शास्त्रीय टैरो प्रतीकवाद और सहज स्प्रेड्स में गहराई से प्रशिक्षित।',
    'profile.expertise.title': 'मुख्य विशेषज्ञता',
    'profile.expertise.1': 'करियर मार्गदर्शन',
    'profile.expertise.2': 'रिश्तों की अंतर्दृष्टि',
    'profile.expertise.3': 'जीवन का उद्देश्य',
    'profile.expertise.4': 'आध्यात्मिक विकास',
    'profile.expertise.5': 'ऊर्जा संरेखण',

    // CTA Banner
    'cta.title': 'अपने रहस्यों को अनलॉक करें',
    'cta.title.highlight': 'कुंडली',
    'cta.subtitle': 'करियर, विवाह और जीवन के सबसे बड़े सवालों के लिए विशेषज्ञ मार्गदर्शन प्राप्त करें। व्यक्तिगत परामर्श के लिए लखनऊ के सबसे भरोसेमंद ज्योतिषियों से जुड़ें।',
    'cta.button.book': 'परामर्श बुक करें',
    'cta.button.whatsapp': 'व्हाट्सएप',
    'cta.trusted': 'दुनिया भर में 500+ साधकों द्वारा भरोसा किया गया',

    // WhatsApp Message
    'whatsapp.message': 'नमस्ते, मैं इस उत्पाद के बारे में पूछताछ करने में रुचि रखता हूं: {productName}। मूल्य: ₹{price}। कृपया अधिक विवरण प्रदान करें।',
    
    // Product Detail
    'product.details': 'उत्पाद विवरण',
    'product.back': 'मॉल पर वापस जाएं',
    'product.description': 'विवरण',
    'product.authentic_guarantee': '100% प्रामाणिक और ऊर्जावान रूप से शुद्ध',
    'product.enquire_whatsapp': 'व्हाट्सएप पर पूछताछ करें'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'hi')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string) => {
    const translation = translations[language][key as keyof typeof translations['en']];
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
