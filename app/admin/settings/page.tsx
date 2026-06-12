'use client';

import { useEffect, useState } from 'react';
import { Settings } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import AdminPageHeader from '@/components/admin/AdminPageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import type { SiteSettings } from '@/lib/siteSettings';
import { DEFAULT_SITE_SETTINGS } from '@/lib/siteSettings';

const EMPTY: SiteSettings = { ...DEFAULT_SITE_SETTINGS, social: { ...DEFAULT_SITE_SETTINGS.social } };

export default function AdminSettingsPage() {
  const [form, setForm] = useState<SiteSettings>(EMPTY);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const getHeaders = () => ({
    Authorization: `Bearer ${localStorage.getItem('adminToken') || ''}`,
    'Content-Type': 'application/json',
  });

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/admin/settings', { headers: getHeaders() });
      const data = await res.json();
      if (res.ok && data.settings) {
        setForm({
          ...data.settings,
          social: { ...EMPTY.social, ...data.settings.social },
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const saveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'Failed to save settings');
        return;
      }
      setForm(data.settings);
      setSaved(true);
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminLayout>
      <AdminPageHeader
        title="Business Settings"
        description="Update contact details and social links shown across the website, footer, contact page, and legal policies."
      />

      {loading ? (
        <div className="rounded-xl border border-slate-200 bg-white py-16 text-center text-sm text-slate-500">
          Loading settings…
        </div>
      ) : (
        <form onSubmit={saveSettings} className="space-y-8">
          <section className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">Contact details</h2>
            <p className="mt-1 text-sm text-slate-500">
              These appear in the header, footer, contact form, and policy pages.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Mobile number (with country code)</Label>
                <Input
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  placeholder="+919876543210"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Display format</Label>
                <Input
                  value={form.phoneDisplay}
                  onChange={(e) => setForm((f) => ({ ...f, phoneDisplay: e.target.value }))}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Primary email</Label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Support email</Label>
                <Input
                  type="email"
                  value={form.supportEmail}
                  onChange={(e) => setForm((f) => ({ ...f, supportEmail: e.target.value }))}
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label>Full address (displayed on site)</Label>
                <Textarea
                  value={form.addressLine}
                  onChange={(e) => setForm((f) => ({ ...f, addressLine: e.target.value }))}
                  rows={2}
                  className="resize-none"
                  required
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label>Business hours</Label>
                <Input
                  value={form.hours}
                  onChange={(e) => setForm((f) => ({ ...f, hours: e.target.value }))}
                  placeholder="Monday to Sunday, 10:00 AM – 8:00 PM IST"
                />
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">Address (structured)</h2>
            <p className="mt-1 text-sm text-slate-500">Used for SEO and local business schema.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Street / area</Label>
                <Input
                  value={form.streetAddress}
                  onChange={(e) => setForm((f) => ({ ...f, streetAddress: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label>City</Label>
                <Input
                  value={form.addressLocality}
                  onChange={(e) => setForm((f) => ({ ...f, addressLocality: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label>State</Label>
                <Input
                  value={form.addressRegion}
                  onChange={(e) => setForm((f) => ({ ...f, addressRegion: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label>Postal code</Label>
                <Input
                  value={form.postalCode}
                  onChange={(e) => setForm((f) => ({ ...f, postalCode: e.target.value }))}
                />
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">Social media links</h2>
            <p className="mt-1 text-sm text-slate-500">
              Leave blank to hide a link in the footer. Use full URLs (https://…).
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Instagram</Label>
                <Input
                  value={form.social.instagram}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, social: { ...f.social, instagram: e.target.value } }))
                  }
                  placeholder="https://instagram.com/..."
                />
              </div>
              <div className="space-y-2">
                <Label>YouTube</Label>
                <Input
                  value={form.social.youtube}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, social: { ...f.social, youtube: e.target.value } }))
                  }
                  placeholder="https://youtube.com/..."
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label>Facebook</Label>
                <Input
                  value={form.social.facebook}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, social: { ...f.social, facebook: e.target.value } }))
                  }
                  placeholder="https://facebook.com/..."
                />
              </div>
            </div>
          </section>

          <div className="flex items-center gap-4">
            <Button type="submit" disabled={saving} className="gap-2 bg-slate-900 text-white hover:bg-slate-800">
              <Settings size={16} />
              {saving ? 'Saving…' : 'Save settings'}
            </Button>
            {saved && <p className="text-sm text-emerald-600">Settings saved. Changes are live on the website.</p>}
          </div>
        </form>
      )}
    </AdminLayout>
  );
}
