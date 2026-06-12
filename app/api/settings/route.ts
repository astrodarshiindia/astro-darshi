import { NextResponse } from 'next/server';
import { fetchSiteSettings } from '@/lib/siteSettingsServer';

export async function GET() {
  try {
    const settings = await fetchSiteSettings();
    return NextResponse.json(
      { settings },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      }
    );
  } catch (error) {
    console.error('Public settings GET error:', error);
    return NextResponse.json({ error: 'Failed to load settings' }, { status: 500 });
  }
}
