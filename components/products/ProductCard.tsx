'use client';

import Link from 'next/link';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/LanguageContext';
import { useSiteSettings } from '@/lib/SiteSettingsContext';
import { whatsappHref as buildWhatsappHref } from '@/lib/siteSettings';
import {
  type AstroProduct,
  formatProductPrice,
  getProductImageUrl,
} from '@/lib/products';

interface ProductCardProps {
  product: AstroProduct;
  variant?: 'grid' | 'carousel';
  className?: string;
}

export default function ProductCard({
  product,
  variant = 'grid',
  className = '',
}: ProductCardProps) {
  const { t } = useLanguage();
  const { settings } = useSiteSettings();
  const imageUrl = getProductImageUrl(product.image_url, variant === 'carousel' ? 640 : 800);
  const isCompact = variant === 'carousel';

  const whatsappMessage = t('whatsapp.message')
    .replace('{productName}', product.name)
    .replace('{price}', product.price.toLocaleString('en-IN'));

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/80 shadow-sm transition-all duration-500 hover:border-primary/35 hover:shadow-[0_16px_40px_rgba(37,99,235,0.12)] sm:rounded-3xl ${className}`}
    >
      <Link href={`/product/${product.id}`} className="block">
        <div
          className={`relative overflow-hidden bg-muted/40 ${
            isCompact ? 'aspect-[5/4]' : 'aspect-[4/3]'
          }`}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-5xl opacity-20">
              ✨
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
          <div className="absolute left-4 top-4">
            <Badge className="border-0 bg-primary/90 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-primary-foreground backdrop-blur-sm">
              {t('mall.authentic')}
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-lg font-serif leading-tight text-white drop-shadow-sm sm:text-xl">
              {product.name}
            </p>
          </div>
        </div>
      </Link>

      <div className={`flex flex-1 flex-col ${isCompact ? 'p-4 sm:p-5' : 'p-5 sm:p-6'}`}>
        <div className="mb-3 flex items-baseline gap-2">
          <span className="text-2xl font-light tracking-tight text-primary sm:text-3xl">
            {formatProductPrice(product).split(' / ')[0]}
          </span>
          {product.price_type === 'per_unit' && product.unit_name !== 'total' && (
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              / {product.unit_name}
            </span>
          )}
        </div>

        {!isCompact && product.description && (
          <p className="mb-5 line-clamp-2 text-sm font-light leading-relaxed text-muted-foreground">
            {product.description}
          </p>
        )}

        <div className="mt-auto flex items-center gap-2">
          <Link
            href={`/product/${product.id}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View Details
            <ArrowUpRight size={14} />
          </Link>
          <a
            href={buildWhatsappHref(settings.phone, whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-green-600 hover:bg-green-600 hover:text-white"
          >
            <MessageCircle size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

export function ProductCardSkeleton({ variant = 'grid' }: { variant?: 'grid' | 'carousel' }) {
  const isCompact = variant === 'carousel';
  return (
    <div className="overflow-hidden rounded-2xl border border-border/50 bg-card sm:rounded-3xl">
      <div className={`animate-pulse bg-muted ${isCompact ? 'aspect-[5/4]' : 'aspect-[4/3]'}`} />
      <div className={`space-y-3 ${isCompact ? 'p-4 sm:p-5' : 'p-5 sm:p-6'}`}>
        <div className="h-8 w-28 animate-pulse rounded bg-muted" />
        <div className="h-4 w-full animate-pulse rounded bg-muted" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
        <div className="h-10 animate-pulse rounded-full bg-muted" />
      </div>
    </div>
  );
}
