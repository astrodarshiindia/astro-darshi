'use client';

import { useEffect, useState, useMemo } from 'react';
import { supabase } from '@/lib/supabase';
import { useLanguage } from '@/lib/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Filter, Search } from 'lucide-react';
import Link from 'next/link';

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

const CATEGORIES = [
    { id: 'all', nameKey: 'gemstone.filter.all_stones' },
    { id: 'precious', nameKey: 'gemstone.filter.precious' },
    { id: 'semi-precious', nameKey: 'gemstone.filter.semi_precious' },
    { id: 'rings', nameKey: 'gemstone.filter.rings' }
];

const PLANETS = [
    { id: 'all', name: 'All Planets' },
    { id: 'sun', name: 'Sun (Ruby)' },
    { id: 'moon', name: 'Moon (Pearl)' },
    { id: 'mars', name: 'Mars (Coral)' },
    { id: 'mercury', name: 'Mercury (Emerald)' },
    { id: 'jupiter', name: 'Jupiter (Yellow Sapphire)' },
    { id: 'venus', name: 'Venus (Diamond/Opal)' },
    { id: 'saturn', name: 'Saturn (Blue Sapphire)' },
    { id: 'rahu', name: 'Rahu (Hessonite)' },
    { id: 'ketu', name: 'Ketu (Cat\'s Eye)' }
];

export default function GemstoneGrid() {
    const { t } = useLanguage();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('all');
    const [activePlanet, setActivePlanet] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data, error } = await supabase
                    .from('astro_products')
                    .select('*')
                    .eq('is_active', true)
                    .order('order_index', { ascending: true });

                if (error) throw error;
                if (data) {
                    setProducts(data as Product[]);
                }
            } catch (error) {
                console.error('Failed to fetch products:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts = useMemo(() => {
        return products.filter(p => {
            const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                 (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase()));
            
            let matchesPlanet = true;
            if (activePlanet !== 'all') {
                const keywords: Record<string, string[]> = {
                    sun: ['ruby', 'manik'],
                    moon: ['pearl', 'moti'],
                    mars: ['coral', 'moonga'],
                    mercury: ['emerald', 'panna'],
                    jupiter: ['yellow sapphire', 'pukhraj'],
                    venus: ['diamond', 'heera', 'opal'],
                    saturn: ['blue sapphire', 'neelam'],
                    rahu: ['hessonite', 'gomed'],
                    ketu: ['cat\'s eye', 'lehsuniya']
                };
                const planetKeywords = keywords[activePlanet] || [];
                matchesPlanet = planetKeywords.some(kw => 
                    p.name.toLowerCase().includes(kw) || 
                    (p.description && p.description.toLowerCase().includes(kw))
                );
            }

            let matchesCategory = true;
            if (activeCategory === 'rings') {
                matchesCategory = p.name.toLowerCase().includes('ring') || (p.description && p.description.toLowerCase().includes('ring')) || false;
            } else if (activeCategory === 'precious') {
                const precious = ['ruby', 'sapphire', 'emerald', 'diamond', 'neelam', 'pukhraj', 'panna', 'manik'];
                matchesCategory = precious.some(kw => p.name.toLowerCase().includes(kw));
            }

            return matchesSearch && matchesPlanet && matchesCategory;
        });
    }, [products, searchQuery, activePlanet, activeCategory]);

    return (
        <section id="gemstone-grid" className="py-24 bg-background">
            <div className="section-container">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-serif mb-6">
                            Our Premium <span className="text-primary italic">Collection</span>
                        </h2>
                        <p className="text-muted-foreground text-lg font-light">
                            Explore our curated selection of authentic, lab-certified gemstones energized for your spiritual journey.
                        </p>
                    </div>

                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <input 
                            type="text" 
                            placeholder="Search gemstones..."
                            className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-full focus:outline-none focus:border-primary transition-colors"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Filters */}
                <div className="space-y-8 mb-16">
                    <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-6 py-2.5 rounded-full text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 border whitespace-nowrap ${
                                    activeCategory === cat.id 
                                    ? 'bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20' 
                                    : 'bg-card border-border text-muted-foreground hover:border-primary/50'
                                }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Filter size={14} className="text-primary" />
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Planetary Filter:</span>
                        </div>
                        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap">
                            {PLANETS.map(planet => (
                                <button
                                    key={planet.id}
                                    onClick={() => setActivePlanet(planet.id)}
                                    className={`px-5 py-2 rounded-full text-[10px] font-medium transition-all duration-300 border whitespace-nowrap ${
                                        activePlanet === planet.id 
                                        ? 'bg-primary/10 border-primary text-primary shadow-sm' 
                                        : 'bg-transparent border-border text-muted-foreground hover:border-primary/30'
                                    }`}
                                >
                                    {planet.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-[500px] rounded-[2.5rem] bg-muted animate-pulse" />
                        ))}
                    </div>
                ) : filteredProducts.length === 0 ? (
                    <div className="text-center py-32 bg-card rounded-[3rem] border border-border border-dashed">
                        <p className="text-muted-foreground text-xl font-light">No gemstones found matching your criteria.</p>
                        <button 
                            onClick={() => {setActiveCategory('all'); setActivePlanet('all'); setSearchQuery('');}}
                            className="mt-6 text-primary hover:underline font-medium"
                        >
                            Reset all filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product) => (
                            <div 
                                key={product.id} 
                                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-[2.5rem] overflow-hidden hover:border-primary/30 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)]"
                            >
                                <Link href={`/product/${product.id}`} className="block">
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
                                    </div>
                                </Link>
                                
                                <div className="p-10">
                                    <Link href={`/product/${product.id}`}>
                                        <h3 className="text-2xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                                            {product.name}
                                        </h3>
                                    </Link>
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
                                    
                                    <p className="text-muted-foreground text-sm line-clamp-2 mb-8 font-light">
                                        {product.description}
                                    </p>
                                    
                                    <a
                                        href={`https://wa.me/919999999999?text=${encodeURIComponent(
                                            `Hi, I'm interested in ${product.name} priced at ₹${product.price.toLocaleString()}. Please share more details.`
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground group-hover:text-primary transition-all duration-300 relative"
                                    >
                                        <span className="relative">
                                            Enquire Now
                                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500" />
                                        </span>
                                        <MessageCircle size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
