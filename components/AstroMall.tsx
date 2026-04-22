'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { useSelectedService } from '@/lib/SelectedServiceContext';
import ProductScroller from './ProductScroller';
import { useEffect, useState, useMemo } from 'react';
import { supabase } from '@/lib/supabase';

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
    const { selectedService } = useSelectedService();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data, error } = await supabase
                    .from('astro_products')
                    .select('*')
                    .eq('is_active', true);

                if (error) throw error;
                if (data) {
                    setProducts(data as Product[]);
                }
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts = useMemo(() => {
        if (!selectedService || selectedService === 'matrimonial') return products;
        
        if (selectedService === 'gemstone') {
            const gemstoneKeywords = ['sapphire', 'ruby', 'emerald', 'diamond', 'pearl', 'coral', 'eye', 'hessonite', 'stone', 'gemstone', 'panna', 'manak', 'pukhraj', 'neelam', 'moti'];
            return products.filter(p => 
                gemstoneKeywords.some(kw => p.name.toLowerCase().includes(kw)) ||
                (p.description && gemstoneKeywords.some(kw => p.description!.toLowerCase().includes(kw)))
            );
        }
        
        if (selectedService === 'vastu') {
            return products.filter(p => 
                p.name.toLowerCase().includes('vastu') || 
                (p.description && p.description.toLowerCase().includes('vastu'))
            );
        }

        return products;
    }, [products, selectedService]);

    return (
        <section id="astro-mall" className="py-24 md:py-32 relative">
            <div className="section-container">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl mb-6">
                        {t('mall.title')} <span className="text-primary italic">{t('mall.title.highlight')}</span> {t('mall.mall')}
                    </h2>
                    <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
                        {t('mall.subtitle')}
                    </p>
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20 border border-border rounded-[2rem] bg-card">
                        <p className="text-muted-foreground/50 text-lg font-light tracking-widest uppercase">
                            {selectedService ? 'No products found for this service' : t('mall.coming_soon')}
                        </p>
                    </div>
                ) : (
                    <ProductScroller products={filteredProducts} />
                )}
            </div>
        </section>
    );
}
