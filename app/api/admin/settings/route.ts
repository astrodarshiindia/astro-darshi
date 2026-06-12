import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminRequest } from '@/lib/adminRequest';
import { fetchSiteSettings, normalizeSiteSettings, saveSiteSettings } from '@/lib/siteSettings';
import type { SiteSettings } from '@/lib/siteSettings';

export async function GET(request: NextRequest) {
  const auth = await verifyAdminRequest(request);
  if ('error' in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  try {
    const settings = await fetchSiteSettings();
    return NextResponse.json({ settings });
  } catch (error) {
    console.error('Admin settings GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const auth = await verifyAdminRequest(request);
  if ('error' in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  try {
    const body = (await request.json()) as Partial<SiteSettings>;
    const settings = await saveSiteSettings(normalizeSiteSettings(body));
    return NextResponse.json({ settings });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to save settings';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
