'use client';

import { useMemo, useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { useProducts } from '@/hooks/useProducts';
import ProductCard, { ProductCardSkeleton } from '@/components/products/ProductCard';

const CATEGORIES = [
  { id: 'all', nameKey: 'gemstone.filter.all_stones' },
  { id: 'precious', nameKey: 'gemstone.filter.precious' },
  { id: 'semi-precious', nameKey: 'gemstone.filter.semi_precious' },
  { id: 'rings', nameKey: 'gemstone.filter.rings' },
] as const;

const PLANETS = [
  { id: 'all', nameKey: 'gemstone.planet.all' },
  { id: 'sun', nameKey: 'gemstone.planet.sun' },
  { id: 'moon', nameKey: 'gemstone.planet.moon' },
  { id: 'mars', nameKey: 'gemstone.planet.mars' },
  { id: 'mercury', nameKey: 'gemstone.planet.mercury' },
  { id: 'jupiter', nameKey: 'gemstone.planet.jupiter' },
  { id: 'venus', nameKey: 'gemstone.planet.venus' },
  { id: 'saturn', nameKey: 'gemstone.planet.saturn' },
  { id: 'rahu', nameKey: 'gemstone.planet.rahu' },
  { id: 'ketu', nameKey: 'gemstone.planet.ketu' },
] as const;

const PLANET_KEYWORDS: Record<string, string[]> = {
  sun: ['ruby', 'manik'],
  moon: ['pearl', 'moti'],
  mars: ['coral', 'moonga'],
  mercury: ['emerald', 'panna'],
  jupiter: ['yellow sapphire', 'pukhraj'],
  venus: ['diamond', 'heera', 'opal'],
  saturn: ['blue sapphire', 'neelam', 'sapphire'],
  rahu: ['hessonite', 'gomed'],
  ketu: ["cat's eye", 'lehsuniya'],
};

function matchesKeywords(
  product: { name: string; description?: string },
  keywords: string[]
) {
  const haystack = `${product.name} ${product.description || ''}`.toLowerCase();
  return keywords.some((kw) => haystack.includes(kw));
}

export default function GemstoneGrid() {
  const { t } = useLanguage();
  const { products, loading, error } = useProducts();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePlanet, setActivePlanet] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.description &&
          product.description.toLowerCase().includes(searchQuery.toLowerCase()));

      let matchesPlanet = true;
      if (activePlanet !== 'all') {
        const planetKeywords = PLANET_KEYWORDS[activePlanet] || [];
        matchesPlanet = matchesKeywords(product, planetKeywords);
      }

      let matchesCategory = true;
      if (activeCategory === 'rings') {
        matchesCategory = matchesKeywords(product, ['ring', 'navratna', 'jewelry', 'jewellery']);
      } else if (activeCategory === 'precious') {
        matchesCategory = matchesKeywords(product, [
          'ruby', 'sapphire', 'emerald', 'diamond', 'neelam', 'pukhraj', 'panna', 'manik',
        ]);
      } else if (activeCategory === 'semi-precious') {
        matchesCategory = matchesKeywords(product, [
          'coral', 'pearl', 'hessonite', 'cat\'s eye', 'gomed', 'moti', 'moonga', 'opal',
        ]);
      }

      return matchesSearch && matchesPlanet && matchesCategory;
    });
  }, [products, searchQuery, activePlanet, activeCategory]);

  const resetFilters = () => {
    setActiveCategory('all');
    setActivePlanet('all');
    setSearchQuery('');
  };

  return (
    <section id="gemstone-grid" className="bg-background py-16 md:py-24">
      <div className="section-container">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="mb-4 font-serif text-3xl sm:text-4xl md:text-5xl">
              {t('gemstone.collection.title')}{' '}
              <span className="text-primary italic">{t('gemstone.collection.highlight')}</span>
            </h2>
            <p className="text-base font-light text-muted-foreground sm:text-lg">
              {t('gemstone.collection.subtitle')}
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            <input
              type="text"
              placeholder={t('gemstone.search.placeholder')}
              className="w-full rounded-full border border-border bg-card py-3 pl-12 pr-4 transition-colors focus:border-primary focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-10 space-y-5 md:mb-12">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-all sm:px-5 sm:text-xs ${
                  activeCategory === cat.id
                    ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'border-border bg-card text-muted-foreground hover:border-primary/50'
                }`}
              >
                {t(cat.nameKey)}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter size={14} className="text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                {t('gemstone.filter.planet')}
              </span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {PLANETS.map((planet) => (
                <button
                  key={planet.id}
                  type="button"
                  onClick={() => setActivePlanet(planet.id)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-[10px] font-medium transition-all sm:text-xs ${
                    activePlanet === planet.id
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border text-muted-foreground hover:border-primary/30'
                  }`}
                >
                  {t(planet.nameKey)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {!loading && !error && (
          <p className="mb-6 text-sm text-muted-foreground">
            {t('gemstone.showing')}{' '}
            <span className="font-medium text-foreground">{filteredProducts.length}</span>{' '}
            {filteredProducts.length === 1 ? t('gemstone.product') : t('gemstone.products')}
          </p>
        )}

        {loading ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        ) : error ? (
          <div className="rounded-3xl border border-border bg-card px-6 py-20 text-center">
            <p className="text-muted-foreground">{error}</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border bg-card px-6 py-20 text-center">
            <p className="text-lg font-light text-muted-foreground">
              {t('gemstone.empty')}
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 text-sm font-medium text-primary hover:underline"
            >
              {t('gemstone.reset')}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} variant="grid" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
