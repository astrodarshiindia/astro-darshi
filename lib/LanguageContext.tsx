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
    'hero.career.title': 'Illuminate Your',
    'hero.career.title.highlight': 'Professional Path',
    'hero.career.subtitle': 'Navigate your career journey with cosmic precision and achieve the success you deserve.',
    'hero.love.title': 'Harmonize Your',
    'hero.love.title.highlight': "Heart's Connection",
    'hero.love.subtitle': 'Discover the secrets of your relationships and find lasting harmony with your soulmate.',
    'hero.wealth.title': 'Manifest Your',
    'hero.wealth.title.highlight': 'Abundant Prosperity',
    'hero.wealth.subtitle': 'Unlock the cosmic keys to financial abundance and build a secure future for yourself.',
    'hero.health.title': 'Vitalize Your',
    'hero.health.title.highlight': 'Mind & Body',
    'hero.health.subtitle': 'Balance your inner energies for optimal physical health and mental peace through Vedic wisdom.',
    'hero.cta.book': 'Book Consultation',
    'hero.cta.services': 'Explore Services',
    'hero.call': 'Call',
    'hero.chat': 'Chat',

    // Services
    'services.title': 'Our',
    'services.title.highlight': 'Services',
    'services.subtitle': "We blend ancient wisdom with modern understanding to provide clarity for your life's most significant questions.",
    'services.sacred': 'Sacred Services',
    'services.sacred.subtitle': 'Comprehensive vedic astrology and tarot card readings designed to illuminate your cosmic path',
    'services.includes': 'Includes:',
    'services.duration': 'Duration:',
    'services.ready': 'Ready to Begin Your Journey?',
    'services.ready.subtitle': 'Choose the service that resonates with your soul and let cosmic wisdom guide you.',
    'services.book': 'Book Your Session',
    'services.explore_all': 'Explore All',
    'services.begin_journey': 'Begin Your Journey',
    'services.our_services': 'Our Services',

    // Service 1: Birth Chart Analysis
    'service.birth.title': 'Birth Chart Analysis',
    'service.birth.desc': 'Deep analysis of your natal chart to understand your personality, strengths, and life path.',
    'service.birth.f1': 'Planetary positions at birth',
    'service.birth.f2': 'House analysis and meanings',
    'service.birth.f3': 'Zodiac sign interpretations',
    'service.birth.f4': 'Aspect analysis for relationships',
    'service.birth.f5': 'Dasha predictions',
    'service.birth.duration': '60 minutes',

    // Service 2: Planetary Predictions
    'service.planetary.title': 'Planetary Predictions',
    'service.planetary.desc': 'Get insights into upcoming planetary transits and their influence on your life.',
    'service.planetary.f1': 'Current planetary movements',
    'service.planetary.f2': 'Upcoming opportunities',
    'service.planetary.f3': 'Challenges and solutions',
    'service.planetary.f4': 'Timing for important decisions',
    'service.planetary.f5': 'Remedial measures (Upayes)',
    'service.planetary.duration': '45 minutes',

    // Service 3: Career Guidance
    'service.career.title': 'Career Guidance',
    'service.career.desc': 'Vedic insights to help you find your ideal career path and professional growth.',
    'service.career.f1': '10th house analysis',
    'service.career.f2': 'Career compatibility',
    'service.career.f3': 'Best time for career changes',
    'service.career.f4': 'Business opportunities',
    'service.career.f5': 'Success indicators',
    'service.career.duration': '50 minutes',

    // Service 4: Relationship Insights
    'service.relationship.title': 'Relationship Insights',
    'service.relationship.desc': 'Understand your relationship patterns and compatibility with your partner.',
    'service.relationship.f1': 'Synastry analysis',
    'service.relationship.f2': 'Compatibility report',
    'service.relationship.f3': 'Timing for commitments',
    'service.relationship.f4': 'Family harmony insights',
    'service.relationship.f5': 'Guidance for challenges',
    'service.relationship.duration': '60 minutes',

    // Service 5: Tarot Card Reading
    'service.tarot.title.main': 'Tarot Card Reading',
    'service.tarot.desc.main': 'Intuitive guidance through tarot to illuminate your current situation and future path.',
    'service.tarot.main.f1': 'Three-card spread',
    'service.tarot.main.f2': 'Detailed card interpretations',
    'service.tarot.main.f3': 'Life advice and guidance',
    'service.tarot.main.f4': 'Energy clearing insights',
    'service.tarot.main.f5': 'Spiritual messages',
    'service.tarot.main.duration': '45 minutes',

    // Service 6: Life Purpose Session
    'service.purpose.title': 'Life Purpose Session',
    'service.purpose.desc': "Discover your soul's purpose and life mission through vedic wisdom.",
    'service.purpose.f1': 'Nodal axis analysis',
    'service.purpose.f2': 'Soul karmic lessons',
    'service.purpose.f3': 'Life purpose indicators',
    'service.purpose.f4': 'Spiritual growth path',
    'service.purpose.f5': 'Fulfillment strategies',
    'service.purpose.duration': '75 minutes',

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

    // New Services Section
    'service.kundli.title': 'Janm Kundli Reading',
    'service.kundli.desc': 'Understand your life, career, marriage & future deeply',
    'service.kundli.btn': 'Book Now',
    'service.prashna.title': 'Prashna Kundli',
    'service.prashna.desc': 'Get answers to your specific questions instantly',
    'service.prashna.btn': 'Ask Now',
    'service.vastu.title': 'Vastu Consultation',
    'service.vastu.desc': 'Home / Shop / Office solutions',
    'service.vastu.btn': 'Book Visit',
    'service.gemstone.title': 'Gemstone Consultation & Purchase',
    'service.gemstone.desc': 'Get correct gemstone with certification',
    'service.gemstone.btn': 'View Stones',
    'service.matchmaking.title': 'Matchmaking Analysis',
    'service.matchmaking.desc': 'Deep compatibility check for successful marriage',
    'service.matchmaking.btn': 'Check Compatibility',
    'service.matrimonial.title': 'Matrimonial Services',
    'service.matrimonial.desc': 'Just Fill our matrimonial form and get your suitable partner',
    'service.matrimonial.btn': 'Fill Form',

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
    'footer.rights': 'Astro Darshi. All Rights Reserved.',
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
    'testimonials.1.text': "Darshi's Vedic Astrology reading gave me the clarity I needed during a challenging career transition. The insights were remarkably accurate and transformative.",
    'testimonials.2.name': 'Anjali Verma',
    'testimonials.2.role': 'Healthcare Professional',
    'testimonials.2.text': "The tarot readings have been incredibly helpful in understanding my relationships and personal growth. Darshi's intuition is truly exceptional.",
    'testimonials.3.name': 'Neha Patel',
    'testimonials.3.role': 'Creative Professional',
    'testimonials.3.text': "The birth chart analysis provided me with a deeper understanding of my strengths and potential. I've never felt more aligned with my purpose.",

    // Astrologer Profile
    'profile.title': 'Meet',
    'profile.title.highlight': 'Darshi',
    'profile.description': "A dedicated Vedic Astrologer and Tarot Reader with over a decade of experience in guiding seekers through life's cosmic journey. Darshi combines ancient Vedic wisdom with intuitive spiritual guidance to provide transformative readings tailored to your unique path.",
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
    'product.enquire_whatsapp': 'Enquire on WhatsApp',

    // Gemstone Page
    'gemstone.collection.title': 'Our Premium',
    'gemstone.collection.highlight': 'Collection',
    'gemstone.collection.subtitle': 'Explore our curated selection of authentic, lab-certified gemstones energized for your spiritual journey.',
    'gemstone.search.placeholder': 'Search gemstones...',
    'gemstone.filter.category': 'Category:',
    'gemstone.filter.planet': 'Planetary Filter:',
    'gemstone.filter.all_stones': 'All Stones',
    'gemstone.filter.precious': 'Precious',
    'gemstone.filter.semi_precious': 'Semi-Precious',
    'gemstone.filter.rings': 'Rings & Jewelry',
    'gemstone.empty': 'No gemstones found matching your criteria.',
    'gemstone.reset': 'Reset all filters',
    'gemstone.enquire': 'Enquire Now',

    // Vastu Page
    'vastu.hero.title': 'Vastu Solutions for',
    'vastu.hero.highlight': 'Home, Shop & Office',
    'vastu.hero.subtitle': 'Align your living and working spaces with cosmic energies to invite prosperity, health, and peace without any structural changes.',
    'vastu.hero.home': 'Home Vastu',
    'vastu.hero.business': 'Business Growth',
    'vastu.hero.office': 'Office Harmony',
    'vastu.hero.book': 'Book Vastu Consultation',
    'vastu.hero.whatsapp': 'WhatsApp Now',
    'vastu.hero.success': '98% Success Rate',
    'vastu.hero.success.desc': 'In Energy Correction',
    'vastu.hero.badge': 'Ancient Science of Architecture',

    'vastu.problems.badge': 'Identify the Signs',
    'vastu.problems.title': 'Are You Facing These Challenges?',
    'vastu.problems.subtitle': "Often, the root cause of life's persistent challenges lies in the unbalanced energy of your living or working environment.",
    'vastu.problems.1.title': 'Constant Family Arguments',
    'vastu.problems.1.desc': 'Constant arguments and lack of peace among family members despite your best efforts.',
    'vastu.problems.2.title': 'Business Loss or Stagnation',
    'vastu.problems.2.desc': 'Sudden stagnation in business growth or facing unexpected financial losses.',
    'vastu.problems.3.title': 'Unexplained Health Issues',
    'vastu.problems.3.desc': 'Recurring health problems or low energy levels without any clear medical reason.',
    'vastu.problems.4.title': 'Low Customer Footfall',
    'vastu.problems.4.desc': 'Low footfall in your shop or lack of new projects in your office space.',

    'vastu.process.badge': 'Our Methodology',
    'vastu.process.title': 'What We Do:',
    'vastu.process.highlight': 'Our Expert Approach',
    'vastu.process.subtitle': 'We follow a systematic and scientific approach to Vastu Shastra, focusing on creating harmony without requiring expensive structural changes.',
    'vastu.process.1.title': 'Property Analysis',
    'vastu.process.1.desc': 'Complete Vastu analysis of the property through layout study and energy mapping.',
    'vastu.process.2.title': 'Dosha Identification',
    'vastu.process.2.desc': 'Identify direction-wise Doshas to understand which areas are affecting your life.',
    'vastu.process.3.title': 'No-Demolition Remedies',
    'vastu.process.3.desc': 'Practical remedies without any demolition using colors, elements, and simple placements.',
    'vastu.process.4.title': 'Energy Balancing',
    'vastu.process.4.desc': 'Energy balance techniques (placement / correction) to harmonize your space.',
    'vastu.process.f1': 'Scientific Energy Mapping',
    'vastu.process.f2': 'Practical & Modern Solutions',
    'vastu.process.f3': 'No Structural Demolition',
    'vastu.process.f4': 'Results-Oriented Approach',

    'vastu.types.title': 'Choose Your Consultation Mode',
    'vastu.types.subtitle': 'Whether you are anywhere in the world or right here in our city, we have the perfect consultation mode for you.',
    'vastu.types.online.title': 'Online Vastu Consultation',
    'vastu.types.online.desc': 'Perfect for quick analysis and remote assistance. Get expert advice from the comfort of your home.',
    'vastu.types.online.f1': 'Video / WhatsApp analysis',
    'vastu.types.online.f2': 'Photos / layout analysis',
    'vastu.types.online.f3': 'Remote energy scanning',
    'vastu.types.online.f4': 'Digital correction report',
    'vastu.types.online.btn': 'Book Online Session',
    'vastu.types.online.badge': 'Most Popular',
    'vastu.types.visit.title': 'Physical Visit',
    'vastu.types.visit.desc': 'In-depth on-site inspection for large properties, factories, or complex Vastu issues.',
    'vastu.types.visit.f1': 'On-site inspection',
    'vastu.types.visit.f2': 'Detailed correction plan',
    'vastu.types.visit.f3': 'Personalized interaction',
    'vastu.types.visit.f4': 'Comprehensive remedial setup',
    'vastu.types.visit.btn': 'Request On-Site Visit',

    'vastu.booking.title': 'Book Your Consultation',
    'vastu.booking.subtitle': 'Take the first step towards a balanced and prosperous environment. Fill out the form, and our experts will reach out to you.',
    'vastu.booking.call': 'Call Us',
    'vastu.booking.availability': 'Availability',
    'vastu.booking.availability.desc': 'Mon - Sat: 10AM - 7PM',
    'vastu.booking.quote': '"Alignment with cosmic energies brings peace to mind and prosperity to home."',
    'vastu.booking.name': 'Full Name',
    'vastu.booking.phone': 'Mobile Number',
    'vastu.booking.location': 'Location',
    'vastu.booking.property': 'Property Type',
    'vastu.booking.property.placeholder': 'Select Property Type',
    'vastu.booking.property.home': 'Home / Villa',
    'vastu.booking.property.shop': 'Shop / Showroom',
    'vastu.booking.property.office': 'Office Space',
    'vastu.booking.property.factory': 'Industrial / Factory',
    'vastu.booking.property.land': 'Open Land',
    'vastu.booking.date': 'Preferred Date',
    'vastu.booking.problem': 'Problem Description',
    'vastu.booking.problem.placeholder': 'Tell us about the issues you are facing...',
    'vastu.booking.btn.sending': 'Sending...',
    'vastu.booking.btn.book': 'Book Vastu Consultation'
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
    'hero.career.title': 'अपने व्यावसायिक',
    'hero.career.title.highlight': 'पथ को रोशन करें',
    'hero.career.subtitle': 'ब्रह्मांडीय सटीकता के साथ अपनी करियर यात्रा को नेविगेट करें और वह सफलता प्राप्त करें जिसके आप हकदार हैं।',
    'hero.love.title': 'अपने दिल के',
    'hero.love.title.highlight': 'रिश्ते को संवारें',
    'hero.love.subtitle': 'अपने रिश्तों के रहस्यों को जानें और अपने जीवनसाथी के साथ स्थायी सामंजस्य पाएं।',
    'hero.wealth.title': 'अपनी प्रचुर',
    'hero.wealth.title.highlight': 'समृद्धि को प्रकट करें',
    'hero.wealth.subtitle': 'वित्तीय प्रचुरता की ब्रह्मांडीय कुंजियों को अनलॉक करें और अपने लिए एक सुरक्षित भविष्य बनाएं।',
    'hero.health.title': 'अपने मन और',
    'hero.health.title.highlight': 'शरीर को जीवंत करें',
    'hero.health.subtitle': 'वैदिक ज्ञान के माध्यम से इष्टतम शारीरिक स्वास्थ्य और मानसिक शांति के लिए अपनी आंतरिक ऊर्जा को संतुलित करें।',
    'hero.cta.book': 'परामर्श बुक करें',
    'hero.cta.services': 'सेवाएं देखें',
    'hero.call': 'कॉल',
    'hero.chat': 'चैट',

    // Services
    'services.title': 'हमारी',
    'services.title.highlight': 'सेवाएं',
    'services.subtitle': 'हम आपके जीवन के सबसे महत्वपूर्ण प्रश्नों के लिए स्पष्टता प्रदान करने के लिए आधुनिक समझ के साथ प्राचीन ज्ञान का मिश्रण करते हैं।',
    'services.sacred': 'हमारी सेवाएं',
    'services.sacred.subtitle': 'आपकी ब्रह्मांडीय यात्रा को रोशन करने के लिए डिज़ाइन की गई व्यापक वैदिक ज्योतिष और टैरो कार्ड रीडिंग',
    'services.includes': 'शामिल है:',
    'services.duration': 'अवधि:',
    'services.ready': 'अपनी यात्रा शुरू करने के लिए तैयार हैं?',
    'services.ready.subtitle': 'उस सेवा को चुनें जो आपकी आत्मा के साथ गूंजती है और ब्रह्मांडीय ज्ञान को अपना मार्गदर्शन करने दें।',
    'services.book': 'अपना सत्र बुक करें',
    'services.explore_all': 'सभी देखें',
    'services.begin_journey': 'अपनी यात्रा शुरू करें',
    'services.our_services': 'हमारी सेवाएं',

    // Service 1: Birth Chart Analysis
    'service.birth.title': 'जन्म कुंडली विश्लेषण',
    'service.birth.desc': 'अपने व्यक्तित्व, शक्तियों और जीवन पथ को समझने के लिए अपनी जन्म कुंडली का गहरा विश्लेषण।',
    'service.birth.f1': 'जन्म के समय ग्रहों की स्थिति',
    'service.birth.f2': 'भाव विश्लेषण और अर्थ',
    'service.birth.f3': 'राशि चक्र की व्याख्या',
    'service.birth.f4': 'रिश्तों के लिए दृष्टि विश्लेषण',
    'service.birth.f5': 'दशा भविष्यवाणियां',
    'service.birth.duration': '60 मिनट',

    // Service 2: Planetary Predictions
    'service.planetary.title': 'ग्रह भविष्यवाणियां',
    'service.planetary.desc': 'आगामी ग्रहों के गोचर और आपके जीवन पर उनके प्रभाव के बारे में जानकारी प्राप्त करें।',
    'service.planetary.f1': 'वर्तमान ग्रहों की चाल',
    'service.planetary.f2': 'आगामी अवसर',
    'service.planetary.f3': 'चुनौतियां और समाधान',
    'service.planetary.f4': 'महत्वपूर्ण निर्णयों के लिए समय',
    'service.planetary.f5': 'उपचारात्मक उपाय (उपाय)',
    'service.planetary.duration': '45 मिनट',

    // Service 3: Career Guidance
    'service.career.title': 'करियर मार्गदर्शन',
    'service.career.desc': 'अपने आदर्श करियर पथ और व्यावसायिक विकास को खोजने में मदद करने के लिए वैदिक अंतर्दृष्टि।',
    'service.career.f1': 'दसवें भाव का विश्लेषण',
    'service.career.f2': 'करियर अनुकूलता',
    'service.career.f3': 'करियर परिवर्तन के लिए सबसे अच्छा समय',
    'service.career.f4': 'व्यापार के अवसर',
    'service.career.f5': 'सफलता के संकेतक',
    'service.career.duration': '50 मिनट',

    // Service 4: Relationship Insights
    'service.relationship.title': 'संबंध अंतर्दृष्टि',
    'service.relationship.desc': 'अपने रिश्ते के पैटर्न और अपने साथी के साथ अनुकूलता को समझें।',
    'service.relationship.f1': 'सिनस्ट्री विश्लेषण',
    'service.relationship.f2': 'अनुकूलता रिपोर्ट',
    'service.relationship.f3': 'प्रतिबद्धताओं के लिए समय',
    'service.relationship.f4': 'पारिवारिक सद्भाव अंतर्दृष्टि',
    'service.relationship.f5': 'चुनौतियों के लिए मार्गदर्शन',
    'service.relationship.duration': '60 मिनट',

    // Service 5: Tarot Card Reading
    'service.tarot.title.main': 'टैरो कार्ड रीडिंग',
    'service.tarot.desc.main': 'आपकी वर्तमान स्थिति और भविष्य के पथ को रोशन करने के लिए टैरो के माध्यम से सहज मार्गदर्शन।',
    'service.tarot.main.f1': 'तीन-कार्ड स्प्रेड',
    'service.tarot.main.f2': 'विस्तृत कार्ड व्याख्या',
    'service.tarot.main.f3': 'जीवन सलाह और मार्गदर्शन',
    'service.tarot.main.f4': 'ऊर्जा समाशोधन अंतर्दृष्टि',
    'service.tarot.main.f5': 'आध्यात्मिक संदेश',
    'service.tarot.main.duration': '45 मिनट',

    // Service 6: Life Purpose Session
    'service.purpose.title': 'जीवन उद्देश्य सत्र',
    'service.purpose.desc': 'वैदिक ज्ञान के माध्यम से अपनी आत्मा के उद्देश्य और जीवन मिशन की खोज करें।',
    'service.purpose.f1': 'नोडल अक्ष विश्लेषण',
    'service.purpose.f2': 'आत्मा के कर्म सबक',
    'service.purpose.f3': 'जीवन उद्देश्य संकेतक',
    'service.purpose.f4': 'आध्यात्मिक विकास पथ',
    'service.purpose.f5': 'पूर्ति रणनीतियाँ',
    'service.purpose.duration': '75 मिनट',

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

    // New Services Section
    'service.kundli.title': 'जन्म कुंडली विश्लेषण',
    'service.kundli.desc': 'अपने जीवन, करियर, विवाह और भविष्य को गहराई से समझें',
    'service.kundli.btn': 'अभी बुक करें',
    'service.prashna.title': 'प्रश्न कुंडली',
    'service.prashna.desc': 'अपने विशिष्ट प्रश्नों के उत्तर तुरंत प्राप्त करें',
    'service.prashna.btn': 'अभी पूछें',
    'service.vastu.title': 'वास्तु परामर्श',
    'service.vastu.desc': 'घर / दुकान / कार्यालय समाधान',
    'service.vastu.btn': 'विजिट बुक करें',
    'service.gemstone.title': 'रत्न परामर्श और खरीद',
    'service.gemstone.desc': 'प्रमाणन के साथ सही रत्न प्राप्त करें',
    'service.gemstone.btn': 'पत्थर देखें',
    'service.matchmaking.title': 'गुण मिलान विश्लेषण',
    'service.matchmaking.desc': 'सफल विवाह के लिए गहरी अनुकूलता जांच',
    'service.matchmaking.btn': 'अनुकूलता जांचें',
    'service.matrimonial.title': 'वैवाहिक सेवाएं',
    'service.matrimonial.desc': 'बस हमारा वैवाहिक फॉर्म भरें और अपना उपयुक्त साथी पाएं',
    'service.matrimonial.btn': 'फॉर्म भरें',

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
    'footer.rights': 'एस्ट्रो दर्शी। सर्वाधिकार सुरक्षित।',
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
    'testimonials.1.text': 'दर्शी की वैदिक ज्योतिष रीडिंग ने मुझे करियर के चुनौतीपूर्ण बदलाव के दौरान वह स्पष्टता दी जिसकी मुझे आवश्यकता थी। अंतर्दृष्टि उल्लेखनीय रूप से सटीक और परिवर्तनकारी थी।',
    'testimonials.2.name': 'अंजलि वर्मा',
    'testimonials.2.role': 'स्वास्थ्य देखभाल पेशेवर',
    'testimonials.2.text': 'मेरे रिश्तों और व्यक्तिगत विकास को समझने में टैरो रीडिंग अविश्वसनीय रूप से मददगार रही है। दर्शी का अंतर्ज्ञान वास्तव में असाधारण है।',
    'testimonials.3.name': 'नेहा पटेल',
    'testimonials.3.role': 'रचनात्मक पेशेवर',
    'testimonials.3.text': 'जन्म कुंडली विश्लेषण ने मुझे अपनी शक्तियों और क्षमता की गहरी समझ प्रदान की। मैंने अपने उद्देश्य के साथ इतना संरेखित कभी महसूस नहीं किया।',

    // Astrologer Profile
    'profile.title': 'मिलें',
    'profile.title.highlight': 'दर्शी',
    'profile.description': 'एक समर्पित वैदिक ज्योतिषी और टैरो रीडर, जिन्हें जीवन की ब्रह्मांडीय यात्रा के माध्यम से साधकों का मार्गदर्शन करने में एक दशक से अधिक का अनुभव है। दर्शी आपके अद्वितीय पथ के अनुरूप परिवर्तनकारी रीडिंग प्रदान करने के लिए प्राचीन वैदिक ज्ञान को सहज आध्यात्मिक मार्गदर्शन के साथ जोड़ती हैं।',
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
    'product.enquire_whatsapp': 'व्हाट्सएप पर पूछताछ करें',

    // Gemstone Page
    'gemstone.collection.title': 'हमारा प्रीमियम',
    'gemstone.collection.highlight': 'कलेक्शन',
    'gemstone.collection.subtitle': 'आपकी आध्यात्मिक यात्रा के लिए ऊर्जावान और लैब-प्रमाणित रत्नों के हमारे चुनिंदा संग्रह को देखें।',
    'gemstone.search.placeholder': 'रत्न खोजें...',
    'gemstone.filter.category': 'श्रेणी:',
    'gemstone.filter.planet': 'ग्रह फिल्टर:',
    'gemstone.filter.all_stones': 'सभी रत्न',
    'gemstone.filter.precious': 'कीमती',
    'gemstone.filter.semi_precious': 'अर्ध-कीमती',
    'gemstone.filter.rings': 'अंगूठियां और आभूषण',
    'gemstone.empty': 'आपके मानदंडों से मेल खाने वाला कोई रत्न नहीं मिला।',
    'gemstone.reset': 'सभी फिल्टर रीसेट करें',
    'gemstone.enquire': 'अभी पूछताछ करें',

    // Vastu Page
    'vastu.hero.title': 'वास्तु समाधान',
    'vastu.hero.highlight': 'घर, दुकान और कार्यालय के लिए',
    'vastu.hero.subtitle': 'बिना किसी संरचनात्मक परिवर्तन के समृद्धि, स्वास्थ्य और शांति को आमंत्रित करने के लिए अपने रहने और काम करने के स्थानों को ब्रह्मांडीय ऊर्जा के साथ संरेखित करें।',
    'vastu.hero.home': 'घर का वास्तु',
    'vastu.hero.business': 'व्यवसाय विकास',
    'vastu.hero.office': 'कार्यालय सद्भाव',
    'vastu.hero.book': 'वास्तु परामर्श बुक करें',
    'vastu.hero.whatsapp': 'अभी व्हाट्सएप करें',
    'vastu.hero.success': '98% सफलता दर',
    'vastu.hero.success.desc': 'ऊर्जा सुधार में',
    'vastu.hero.badge': 'वास्तुकला का प्राचीन विज्ञान',

    'vastu.problems.badge': 'संकेतों को पहचानें',
    'vastu.problems.title': 'क्या आपको ये समस्याएं आ रही हैं?',
    'vastu.problems.subtitle': 'अक्सर, जीवन की निरंतर चुनौतियों का मूल कारण आपके रहने या काम करने के माहौल की असंतुलित ऊर्जा में निहित होता है।',
    'vastu.problems.1.title': 'घर में लगातार झगड़े',
    'vastu.problems.1.desc': 'आपके सर्वोत्तम प्रयासों के बावजूद परिवार के सदस्यों के बीच लगातार बहस और शांति की कमी।',
    'vastu.problems.2.title': 'बिज़नेस में नुकसान या रुकावट',
    'vastu.problems.2.desc': 'व्यापार वृद्धि में अचानक ठहराव या अप्रत्याशित वित्तीय नुकसान का सामना करना।',
    'vastu.problems.3.title': 'बिना कारण स्वास्थ्य समस्याएं',
    'vastu.problems.3.desc': 'बिना किसी स्पष्ट चिकित्सा कारण के बार-बार स्वास्थ्य समस्याएं या निम्न ऊर्जा स्तर।',
    'vastu.problems.4.title': 'ग्राहकों की कमी',
    'vastu.problems.4.desc': 'आपकी दुकान में कम फुटफॉल या आपके कार्यालय स्थान में नई परियोजनाओं की कमी।',

    'vastu.process.badge': 'हमारी कार्यप्रणाली',
    'vastu.process.title': 'हम क्या करेंगे:',
    'vastu.process.highlight': 'हमारा विशेषज्ञ दृष्टिकोण',
    'vastu.process.subtitle': 'हम वास्तु शास्त्र के लिए एक व्यवस्थित और वैज्ञानिक दृष्टिकोण का पालन करते हैं, जो महंगे संरचनात्मक परिवर्तनों की आवश्यकता के बिना सद्भाव बनाने पर ध्यान केंद्रित करते हैं।',
    'vastu.process.1.title': 'संपत्ति विश्लेषण',
    'vastu.process.1.desc': 'लेआउट अध्ययन और ऊर्जा मानचित्रण के माध्यम से संपत्ति का पूर्ण वास्तु विश्लेषण।',
    'vastu.process.2.title': 'दोष पहचान',
    'vastu.process.2.desc': 'यह समझने के लिए कि कौन से क्षेत्र आपके जीवन को प्रभावित कर रहे हैं, दिशा वार दोषों की पहचान करें।',
    'vastu.process.3.title': 'बिना तोड़-फोड़ के उपचार',
    'vastu.process.3.desc': 'रंगों, तत्वों और सरल प्लेसमेंट का उपयोग करके बिना किसी तोड़-फोड़ के व्यावहारिक उपचार।',
    'vastu.process.4.title': 'ऊर्जा संतुलन',
    'vastu.process.4.desc': 'आपके स्थान को सामंजस्यपूर्ण बनाने के लिए ऊर्जा संतुलन तकनीक (प्लेसमेंट / सुधार)।',
    'vastu.process.f1': 'वैज्ञानिक ऊर्जा मानचित्रण',
    'vastu.process.f2': 'व्यावहारिक और आधुनिक समाधान',
    'vastu.process.f3': 'कोई संरचनात्मक तोड़-फोड़ नहीं',
    'vastu.process.f4': 'परिणामोन्मुखी दृष्टिकोण',

    'vastu.types.title': 'अपना परामर्श मोड चुनें',
    'vastu.types.subtitle': 'चाहे आप दुनिया में कहीं भी हों या ठीक यहीं हमारे शहर में, हमारे पास आपके लिए सही परामर्श मोड है।',
    'vastu.types.online.title': 'ऑनलाइन वास्तु परामर्श',
    'vastu.types.online.desc': 'त्वरित विश्लेषण और दूरस्थ सहायता के लिए बिल्कुल सही। अपने घर के आराम से विशेषज्ञ की सलाह लें।',
    'vastu.types.online.f1': 'वीडियो / व्हाट्सएप विश्लेषण',
    'vastu.types.online.f2': 'फोटो / लेआउट विश्लेषण',
    'vastu.types.online.f3': 'रिमोट ऊर्जा स्कैनिंग',
    'vastu.types.online.f4': 'डिजिटल सुधार रिपोर्ट',
    'vastu.types.online.btn': 'ऑनलाइन सत्र बुक करें',
    'vastu.types.online.badge': 'सबसे लोकप्रिय',
    'vastu.types.visit.title': 'भौतिक विजिट',
    'vastu.types.visit.desc': 'बड़ी संपत्तियों, कारखानों या जटिल वास्तु मुद्दों के लिए गहन ऑन-साइट निरीक्षण।',
    'vastu.types.visit.f1': 'ऑन-साइट निरीक्षण',
    'vastu.types.visit.f2': 'विस्तृत सुधार योजना',
    'vastu.types.visit.f3': 'व्यक्तिगत बातचीत',
    'vastu.types.visit.f4': 'व्यापक उपचारात्मक सेटअप',
    'vastu.types.visit.btn': 'ऑन-साइट विजिट का अनुरोध करें',

    'vastu.booking.title': 'अपना परामर्श बुक करें',
    'vastu.booking.subtitle': 'एक संतुलित और समृद्ध वातावरण की ओर पहला कदम उठाएं। फॉर्म भरें, और हमारे विशेषज्ञ आपसे संपर्क करेंगे।',
    'vastu.booking.call': 'हमें कॉल करें',
    'vastu.booking.availability': 'उपलब्धता',
    'vastu.booking.availability.desc': 'सोम - शनि: सुबह 10 बजे - शाम 7 बजे',
    'vastu.booking.quote': '"ब्रह्मांडीय ऊर्जाओं के साथ संरेखण मन को शांति और घर में समृद्धि लाता है।"',
    'vastu.booking.name': 'पूरा नाम',
    'vastu.booking.phone': 'मोबाइल नंबर',
    'vastu.booking.location': 'स्थान',
    'vastu.booking.property': 'संपत्ति का प्रकार',
    'vastu.booking.property.placeholder': 'संपत्ति का प्रकार चुनें',
    'vastu.booking.property.home': 'घर / विला',
    'vastu.booking.property.shop': 'दुकान / शोरूम',
    'vastu.booking.property.office': 'कार्यालय स्थान',
    'vastu.booking.property.factory': 'औद्योगिक / कारखाना',
    'vastu.booking.property.land': 'खुली जमीन',
    'vastu.booking.date': 'पसंदीदा तारीख',
    'vastu.booking.problem': 'समस्या का विवरण',
    'vastu.booking.problem.placeholder': 'हमें उन समस्याओं के बारे में बताएं जिनका आप सामना कर रहे हैं...',
    'vastu.booking.btn.sending': 'भेजा जा रहा है...',
    'vastu.booking.btn.book': 'वास्तु परामर्श बुक करें'
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
