'use client';

import { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { AstroProduct } from '@/lib/products';
import ProductCard from './products/ProductCard';

export default function ProductScroller({ products }: { products: AstroProduct[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (!scrollerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;
    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 8);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [products]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollerRef.current) return;
    const scrollAmount = scrollerRef.current.clientWidth * 0.85;
    scrollerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      <div className="mb-4 hidden items-center justify-end gap-3 md:flex">
        <button
          type="button"
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          aria-label="Scroll products left"
          className={`flex h-11 w-11 items-center justify-center rounded-full border border-border transition-all ${
            canScrollLeft
              ? 'hover:border-primary hover:text-primary'
              : 'cursor-not-allowed opacity-30'
          }`}
        >
          <ArrowLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          aria-label="Scroll products right"
          className={`flex h-11 w-11 items-center justify-center rounded-full border border-border transition-all ${
            canScrollRight
              ? 'hover:border-primary hover:text-primary'
              : 'cursor-not-allowed opacity-30'
          }`}
        >
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="relative">
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent transition-opacity md:w-12 ${
            canScrollLeft ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent transition-opacity md:w-12 ${
            canScrollRight ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          ref={scrollerRef}
          onScroll={checkScroll}
          className="-mx-2 flex gap-4 overflow-x-auto px-2 pb-4 scrollbar-hide snap-x snap-mandatory sm:gap-5 md:gap-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[min(82vw,300px)] shrink-0 snap-start sm:w-[min(70vw,320px)] md:w-[340px]"
            >
              <ProductCard product={product} variant="carousel" className="h-full" />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-2 text-center text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:hidden">
        Swipe to explore more
      </p>
    </div>
  );
}
