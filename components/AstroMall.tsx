'use client';

import { useLanguage } from '@/lib/LanguageContext';
import ProductScroller from './ProductScroller';
import { useEffect, useState } from 'react';

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

export default function AstroMall() {
    const { t } = useLanguage();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/astro_products?select=*`, {
                    headers: {
                        'apikey': process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '',
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data);
                }
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <section className="py-24 md:py-32 relative">
            <div className="section-container">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl mb-6">
                        {t('mall.title')} <span className="text-primary italic">{t('mall.title.highlight')}</span> {t('mall.mall')}
                    </h2>
                    <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
                        {t('mall.subtitle')}
                    </p>
                </div>

                {products.length === 0 ? (
                    <div className="text-center py-20 border border-border rounded-[2rem] bg-card">
                        <p className="text-muted-foreground/50 text-lg font-light tracking-widest uppercase">{t('mall.coming_soon')}</p>
                    </div>
                ) : (
                    <ProductScroller products={products} />
                )}
            </div>
        </section>
    );
}
