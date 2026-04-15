import SEOLayout from '@/components/SEOLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vastu Consultation for Home & Office - Astro Darshini',
  description: 'Traditional Vastu Shastra consultation for a harmonious home and prosperous business. Expert Vastu advice and simple remedies for Vastu Dosha.',
  keywords: 'vastu consultation, vastu shastra for home, vastu for office, vastu dosha remedies, directions and elements',
};

export default function VastuConsultation() {
  return (
    <SEOLayout
      title="Sacred Vastu Shastra"
      description="Create a harmonious living and working environment by aligning your space with the five elements and cosmic directions."
      content={
        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif">The Energy of Your Space</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Vastu Shastra is the ancient Indian science of architecture and placement. By balancing the five elements—Earth, Water, Fire, Air, and Space—we can create environments that support our health, wealth, and happiness.
            </p>
          </section>

          <section className="space-y-6 bg-card/50 p-8 md:p-12 rounded-[2rem] border border-border/50">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif text-primary">Our Vastu Services</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We offer comprehensive Vastu analysis and remedies for both residential and commercial properties:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <li className="flex items-center gap-3">✨ Residential Vastu Analysis</li>
              <li className="flex items-center gap-3">✨ Office and Industrial Vastu</li>
              <li className="flex items-center gap-3">✨ Vastu Dosha Rectification (Without Demolition)</li>
              <li className="flex items-center gap-3">✨ Land and Site Selection</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl text-foreground font-serif">Harmonious Living</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From the placement of the main door to the direction of the bedroom, every detail matters. Our goal is to help you create a sanctuary that fosters positive energy, peace, and abundance in every area of your life.
            </p>
          </section>
        </div>
      }
    />
  );
}
