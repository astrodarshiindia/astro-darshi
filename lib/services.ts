import type { LucideIcon } from 'lucide-react';
import {
  FileText,
  Search,
  Wand2,
  Home,
  Gem,
  Heart,
  Users,
  TrendingUp,
} from 'lucide-react';

export interface DbService {
  id: string;
  title: string;
  slug: string;
  description: string;
  long_description: string | null;
  icon: string | null;
  price: number | null;
  duration: string | null;
  duration_minutes: number | null;
  show_price: boolean;
  features: string[] | null;
  image_url: string | null;
  is_active: boolean;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export const SERVICE_ROUTE_META: Record<
  string,
  { href: string; icon: LucideIcon; bar: string; bg: string; text: string }
> = {
  kundli: {
    href: '/contact',
    icon: FileText,
    bar: 'bg-amber-500',
    bg: 'bg-amber-50',
    text: 'text-amber-900',
  },
  prashna: {
    href: '/contact',
    icon: Search,
    bar: 'bg-orange-500',
    bg: 'bg-orange-50',
    text: 'text-orange-900',
  },
  tarot: {
    href: '/tarot-reading',
    icon: Wand2,
    bar: 'bg-violet-500',
    bg: 'bg-violet-50',
    text: 'text-violet-900',
  },
  vastu: {
    href: '/vastu-consultation',
    icon: Home,
    bar: 'bg-emerald-500',
    bg: 'bg-emerald-50',
    text: 'text-emerald-900',
  },
  gemstone: {
    href: '/astromall',
    icon: Gem,
    bar: 'bg-amber-600',
    bg: 'bg-amber-50',
    text: 'text-amber-950',
  },
  matchmaking: {
    href: '/matchmaking',
    icon: Heart,
    bar: 'bg-rose-500',
    bg: 'bg-rose-50',
    text: 'text-rose-900',
  },
  matrimonial: {
    href: '/matrimonial',
    icon: Users,
    bar: 'bg-sky-500',
    bg: 'bg-sky-50',
    text: 'text-sky-900',
  },
  business: {
    href: '/business-growth',
    icon: TrendingUp,
    bar: 'bg-slate-700',
    bg: 'bg-slate-100',
    text: 'text-slate-900',
  },
};

export function parseFeatures(value: unknown): string[] {
  if (Array.isArray(value)) return value.filter((v) => typeof v === 'string');
  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return parsed;
    } catch {
      return value.split('\n').map((s) => s.trim()).filter(Boolean);
    }
  }
  return [];
}
