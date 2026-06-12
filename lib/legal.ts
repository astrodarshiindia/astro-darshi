import { SITE_NAME, getSiteUrl } from '@/lib/seo';
import type { SiteSettings } from '@/lib/siteSettings';
import { DEFAULT_SITE_SETTINGS } from '@/lib/siteSettings';

export const LEGAL_LAST_UPDATED = '12 June 2025';

export function buildLegalBusiness(settings: SiteSettings = DEFAULT_SITE_SETTINGS) {
  return {
    name: SITE_NAME,
    email: settings.email,
    phone: settings.phone,
    phoneDisplay: settings.phoneDisplay,
    address: settings.addressLine,
    website: getSiteUrl(),
    hours: settings.hours,
  };
}
