'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, ShieldCheck, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/LanguageContext';

interface Product {
    id: string;
    name: string;
    image_url?: string;
    price: number;
    price_type: 'total' | 'per_unit';
    unit_name: 'total' | 'ratti';
    description?: string;
    is_active: boolean;
}

export default function ProductDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const { t } = useLanguage();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/astro_products?id=eq.${id}&select=*`, {
                    headers: {
                        'apikey': process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '',
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    if (data.length > 0) {
                        setProduct(data[0]);
                    }
                }
            } catch (error) {
                console.error('Failed to fetch product:', error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
                <h1 className="text-2xl font-serif">Product Not Found</h1>
                <Link href="/" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowLeft size={16} /> {t('product.back')}
                </Link>
            </div>
        );
    }

    const whatsappLink = `https://wa.me/919999999999?text=${encodeURIComponent(
        t('whatsapp.message')
            .replace('{productName}', product.name)
            .replace('{price}', product.price.toLocaleString())
    )}`;

    return (
        <main className="min-h-screen pt-32 pb-24">
            <div className="section-container">
                {/* Back Link */}
                <button 
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium tracking-widest uppercase">{t('product.back')}</span>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Image Section */}
                    <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-accent/30 border border-border/50 shadow-2xl">
                        {product.image_url ? (
                            <img
                                src={product.image_url}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-8xl opacity-20">✨</div>
                        )}
                        <div className="absolute top-8 right-8">
                            <Badge className="bg-primary/90 backdrop-blur-md text-primary-foreground border-0 text-xs tracking-[0.2em] uppercase px-6 py-2 rounded-full shadow-lg">
                                {t('mall.authentic')}
                            </Badge>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-primary">
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <span className="text-muted-foreground text-sm ml-2">(5.0 Rating)</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-serif text-foreground leading-tight">
                                {product.name}
                            </h1>
                            <div className="flex items-baseline gap-3">
                                <span className="text-4xl text-primary font-light tracking-tight">
                                    ₹{product.price.toLocaleString()}
                                </span>
                                {product.price_type === 'per_unit' && (
                                    <span className="text-lg text-muted-foreground font-light tracking-widest uppercase">
                                        / {product.unit_name}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-muted-foreground border-b border-border pb-4">
                                {t('product.description')}
                            </h2>
                            <p className="text-lg text-muted-foreground/80 leading-relaxed font-light">
                                {product.description || t('mall.subtitle')}
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 pt-6">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full py-5 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-lg hover:shadow-green-900/20 active:scale-95"
                            >
                                <MessageCircle size={20} />
                                {t('product.enquire_whatsapp')}
                            </a>
                            
                            <div className="flex items-center gap-3 px-6 py-4 bg-accent/50 rounded-2xl border border-border/50">
                                <ShieldCheck className="text-primary" size={20} />
                                <span className="text-sm text-foreground/70 font-medium">
                                    {t('product.authentic_guarantee')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
