import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
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

async function fetchProducts() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/astro_products?select=*`, {
            headers: {
                'apikey': process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '',
            },
        });
        const text = await response.text();
        console.log('Supabase response status:', response.status, 'text:', text.substring(0, 500));
        const parsed = JSON.parse(text);
        console.log('Full parsed:', parsed);
        return parsed;
    } catch (error) {
        console.error('Failed to fetch products:', error);
        return [];
    }
}

export default async function AstroMall() {
    const products = await fetchProducts();

    return (
        <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
                        Astro Mall
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                        Premium gemstones and astro products, personally curated for your cosmic journey
                    </p>
                </div>

                {products.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-muted-foreground text-lg">Coming Soon - Premium Astro Products</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map((product: Product) => (
                            <Card key={product.id} className="cosmic-border glass-effect hover:shadow-xl transition-all group overflow-hidden">
                                <div className="relative h-64 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                                    {product.image_url ? (
                                        <img
                                            src={product.image_url}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                        />
                                    ) : (
                                        <div className="text-4xl opacity-50">✨</div>
                                    )}
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-xl mb-3 line-clamp-2 leading-tight">{product.name}</h3>
                                    <div className="text-2xl font-bold text-primary mb-3">
                                        ₹{product.price.toLocaleString()}
                                        {product.price_type === 'per_unit' && (
                                            <span className="text-lg font-normal ml-1">/{product.unit_name}</span>
                                        )}
                                    </div>
                                    {product.description && (
                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{product.description}</p>
                                    )}
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        <Badge variant="secondary" className="text-xs">Authentic</Badge>
                                        <Badge variant="outline" className="text-xs">Astro Certified</Badge>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="inline-block w-full text-center bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90 font-medium py-3 px-6 rounded-lg transition-all duration-300"
                                    >
                                        Inquire Now
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

