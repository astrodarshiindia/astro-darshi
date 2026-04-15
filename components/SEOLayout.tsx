import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CosmicBackground from '@/components/CosmicBackground';
import CTABanner from '@/components/CTABanner';
import { Metadata } from 'next';

interface SEOLayoutProps {
    title: string;
    description: string;
    content: React.ReactNode;
    keywords?: string;
}

export default function SEOLayout({ title, description, content }: SEOLayoutProps) {
    return (
        <main className="relative bg-background min-h-screen">
            <CosmicBackground />
            <Header />
            
            <section className="pt-40 pb-24 md:pt-48 md:pb-32">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-7xl mb-8 leading-tight">
                            {title.split(' ').map((word, i) => (
                                <span key={i} className={i % 3 === 2 ? 'text-primary italic' : ''}>
                                    {word}{' '}
                                </span>
                            ))}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-16">
                            {description}
                        </p>
                        
                        <div className="prose prose-invert prose-primary max-w-none">
                            {content}
                        </div>
                    </div>
                </div>
            </section>
            
            <CTABanner />
            <Footer />
        </main>
    );
}
