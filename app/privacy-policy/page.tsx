import SEOLayout from '@/components/SEOLayout';

export const metadata = {
    title: 'Privacy Policy - Astro Darshi',
    description: 'Our commitment to protecting your personal information and cosmic journey privacy.',
};

export default function PrivacyPolicy() {
    return (
        <SEOLayout
            title="Privacy Policy"
            description="Your privacy is as sacred as the cosmic alignments we study."
            content={
                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">1. Information Collection</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We collect information necessary to provide accurate astrological and tarot readings,
                            including birth details (date, time, place) and contact information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">2. Use of Information</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Your cosmic data is used exclusively for generating your personal readings and
                            consultations. We never sell your personal or birth information to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">3. Data Security</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We implement industry-standard security measures to protect your sensitive
                            information from unauthorized access or disclosure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">4. Cookies</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our website uses cookies to enhance your browsing experience and remember
                            your preferences for future visits.
                        </p>
                    </section>
                </div>
            }
        />
    );
}
