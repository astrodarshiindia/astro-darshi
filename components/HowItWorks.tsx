'use client';

import { CalendarCheck, FileText, PhoneCall } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: "Book your service",
      description: "Select the service that fits your needs and schedule a convenient time.",
      icon: <CalendarCheck className="w-8 h-8 text-primary" />,
    },
    {
      title: "Share your details",
      description: "Provide your birth details or specific questions for a personalized reading.",
      icon: <FileText className="w-8 h-8 text-primary" />,
    },
    {
      title: "Get consultation",
      description: "Receive your reading via Call, WhatsApp, or a detailed PDF Report.",
      icon: <PhoneCall className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-background overflow-hidden relative border-y border-border/40">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-google text-foreground mb-4">
            How It <span className="text-primary italic">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg font-google max-w-2xl mx-auto">
            Three simple steps to unlock insights about your future.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-12 z-0" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-card border border-border group-hover:border-primary/30 transition-all duration-500 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-google text-sm flex items-center justify-center border-4 border-background">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-google font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground font-google leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
