import SEOLayout from '@/components/SEOLayout';

export const metadata = {
    title: 'Terms of Service - Astro Darshi',
    description: 'Guidelines and agreements for using our astrological and tarot services.',
};

export default function TermsOfService() {
    return (
        <SEOLayout
            title="Terms of Service"
            description="Our sacred agreement for sharing cosmic wisdom."
            content={
                <div className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">1. Service Nature</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Astrological and tarot readings are for spiritual guidance and entertainment
                            purposes only. They should not replace professional medical, legal, or financial advice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">2. User Responsibility</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Users are responsible for the accuracy of birth details provided. Decisions made
                            based on our readings are the sole responsibility of the user.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">3. Payments & Refunds</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Fees for consultations are non-refundable once the service has been performed.
                            Cancellations must be made at least 24 hours in advance.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">4. Intellectual Property</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            All content on this website, including readings and analysis, is the
                            intellectual property of Astro Darshi.
                        </p>
                    </section>
                </div>
            }
        />
    );
}
