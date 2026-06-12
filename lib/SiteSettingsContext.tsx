'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  DEFAULT_SITE_SETTINGS,
  mailtoHref,
  telHref,
  whatsappHref,
  type SiteSettings,
} from '@/lib/siteSettings';

interface SiteSettingsContextValue {
  settings: SiteSettings;
  loading: boolean;
  refresh: () => Promise<void>;
  telHref: string;
  whatsappHref: string;
  mailtoHref: string;
  supportMailtoHref: string;
}

const SiteSettingsContext = createContext<SiteSettingsContextValue | undefined>(undefined);

export function SiteSettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SITE_SETTINGS);
  const [loading, setLoading] = useState(true);

  const loadSettings = async () => {
    try {
      const res = await fetch('/api/settings', { cache: 'no-store' });
      const data = await res.json();
      if (res.ok && data.settings) {
        setSettings(data.settings);
      }
    } catch (error) {
      console.error('Failed to load site settings:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSettings();
  }, []);

  const value = useMemo<SiteSettingsContextValue>(
    () => ({
      settings,
      loading,
      refresh: loadSettings,
      telHref: telHref(settings.phone),
      whatsappHref: whatsappHref(settings.phone),
      mailtoHref: mailtoHref(settings.email),
      supportMailtoHref: mailtoHref(settings.supportEmail),
    }),
    [settings, loading]
  );

  return <SiteSettingsContext.Provider value={value}>{children}</SiteSettingsContext.Provider>;
}

export function useSiteSettings() {
  const context = useContext(SiteSettingsContext);
  if (!context) {
    throw new Error('useSiteSettings must be used within SiteSettingsProvider');
  }
  return context;
}
