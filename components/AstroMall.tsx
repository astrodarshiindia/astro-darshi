import ProductScroller from './ProductScroller';

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
            next: { revalidate: 3600 }
        });
        if (!response.ok) return [];
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch products:', error);
        return [];
    }
}

export default async function AstroMall() {
    const products = await fetchProducts();

    return (
        <section className="py-24 md:py-32 relative">
            <div className="section-container">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl mb-6">
                        The <span className="text-primary italic">Astro</span> Mall
                    </h2>
                    <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
                        Premium gemstones and sacred artifacts, personally curated and 
                        energetically cleansed for your cosmic journey.
                    </p>
                </div>

                {products.length === 0 ? (
                    <div className="text-center py-20 border border-border rounded-[2rem] bg-card">
                        <p className="text-muted-foreground/50 text-lg font-light tracking-widest uppercase">Coming Soon - Sacred Artifacts</p>
                    </div>
                ) : (
                    <ProductScroller products={products} />
                )}
            </div>
        </section>
    );
}
