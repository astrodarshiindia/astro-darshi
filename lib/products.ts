export interface AstroProduct {
  id: string;
  name: string;
  image_url?: string;
  price: number;
  price_type: 'total' | 'per_unit';
  unit_name: 'total' | 'ratti';
  description?: string;
  is_active: boolean;
  order_index?: number;
}

export function normalizeProductPrice(price: number | string): number {
  const value = typeof price === 'string' ? parseFloat(price) : price;
  return Number.isFinite(value) ? value : 0;
}

export function formatProductPrice(product: Pick<AstroProduct, 'price' | 'price_type' | 'unit_name'>): string {
  const price = normalizeProductPrice(product.price);
  const formatted = `₹${price.toLocaleString('en-IN')}`;
  if (product.price_type === 'per_unit' && product.unit_name !== 'total') {
    return `${formatted} / ${product.unit_name}`;
  }
  return formatted;
}

export function getProductImageUrl(url?: string, width = 800): string {
  if (!url) return '';
  if (url.includes('unsplash.com') && !url.includes('w=')) {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}auto=format&fit=crop&q=80&w=${width}`;
  }
  return url;
}
