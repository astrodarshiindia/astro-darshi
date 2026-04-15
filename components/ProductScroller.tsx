'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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

export default function ProductScroller({ products }: { products: Product[] }) {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollerRef.current) {
            const scrollAmount = scrollerRef.current.clientWidth * 0.8;
            scrollerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative group/mall">
            {/* Navigation Buttons */}
            <div className="absolute -top-16 right-0 flex gap-4">
                <button
                    onClick={() => scroll('left')}
                    disabled={!canScrollLeft}
                    className={`w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${
                        canScrollLeft ? 'opacity-100 hover:border-primary hover:text-primary' : 'opacity-30 cursor-not-allowed'
                    }`}
                >
                    <ArrowLeft size={20} />
                </button>
                <button
                    onClick={() => scroll('right')}
                    disabled={!canScrollRight}
                    className={`w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${
                        canScrollRight ? 'opacity-100 hover:border-primary hover:text-primary' : 'opacity-30 cursor-not-allowed'
                    }`}
                >
                    <ArrowRight size={20} />
                </button>
            </div>

            <div 
                ref={scrollerRef}
                onScroll={checkScroll}
                className="flex overflow-x-auto gap-8 pb-12 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {products.map((product: Product) => (
                    <div 
                        key={product.id} 
                        className="flex-none w-[300px] md:w-[380px] snap-start group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-[2.5rem] overflow-hidden hover:border-primary/30 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)]"
                    >
                        <div className="relative h-72 overflow-hidden bg-accent/30">
                            {product.image_url ? (
                                <img
                                    src={product.image_url}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-5xl opacity-20 group-hover:scale-125 transition-transform duration-1000">✨</div>
                            )}
                            <div className="absolute top-6 right-6">
                                <Badge className="bg-primary/90 backdrop-blur-md text-primary-foreground border-0 text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
                                    Authentic
                                </Badge>
                            </div>
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        
                        <div className="p-10">
                            <h3 className="text-2xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                                {product.name}
                            </h3>
                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-3xl text-primary font-light tracking-tight">
                                    ₹{product.price.toLocaleString()}
                                </span>
                                {product.price_type === 'per_unit' && (
                                    <span className="text-sm text-muted-foreground font-light tracking-widest uppercase">
                                        / {product.unit_name}
                                    </span>
                                )}
                            </div>
                            
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground group-hover:text-primary transition-all duration-300 relative"
                            >
                                <span className="relative">
                                    Enquire Now
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500" />
                                </span>
                                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
