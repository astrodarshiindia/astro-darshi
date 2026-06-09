import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminRequest } from '@/lib/adminRequest';
import { supabaseAdmin } from '@/lib/supabaseServer';

function groupByDay(items: { created_at: string }[], days = 7) {
  const map: Record<string, number> = {};
  const now = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    map[d.toISOString().slice(0, 10)] = 0;
  }
  items.forEach((item) => {
    const key = item.created_at.slice(0, 10);
    if (key in map) map[key]++;
  });
  return Object.entries(map).map(([date, count]) => ({ date, count }));
}

export async function GET(request: NextRequest) {
  const auth = await verifyAdminRequest(request);
  if ('error' in auth) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  try {
    const [contactsRes, servicesRes, blogRes, productsRes, analyticsRes] = await Promise.all([
      supabaseAdmin.from('contact_responses').select('*').order('created_at', { ascending: false }),
      supabaseAdmin.from('services').select('id, is_active'),
      supabaseAdmin.from('blog_posts').select('id, is_published, view_count'),
      supabaseAdmin.from('astro_products').select('id, is_active'),
      supabaseAdmin
        .from('analytics')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(500),
    ]);

    const contacts = contactsRes.data || [];
    const services = servicesRes.data || [];
    const posts = blogRes.data || [];
    const products = productsRes.data || [];
    const events = analyticsRes.data || [];

    const statusBreakdown = {
      new: contacts.filter((c) => c.status === 'new').length,
      read: contacts.filter((c) => c.status === 'read').length,
      responded: contacts.filter((c) => c.status === 'responded').length,
    };

    const serviceTypeMap: Record<string, number> = {};
    contacts.forEach((c) => {
      const key = c.service_type || 'General';
      serviceTypeMap[key] = (serviceTypeMap[key] || 0) + 1;
    });

    const enquiriesByService = Object.entries(serviceTypeMap)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);

    const pageViews: Record<string, number> = {};
    events
      .filter((e) => e.event_type === 'page_view')
      .forEach((e) => {
        const page = e.page || 'unknown';
        pageViews[page] = (pageViews[page] || 0) + 1;
      });

    const topPages = Object.entries(pageViews)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 6);

    return NextResponse.json({
      summary: {
        totalEnquiries: contacts.length,
        newEnquiries: statusBreakdown.new,
        activeServices: services.filter((s) => s.is_active).length,
        totalServices: services.length,
        publishedPosts: posts.filter((p) => p.is_published).length,
        totalPostViews: posts.reduce((sum, p) => sum + (p.view_count || 0), 0),
        activeProducts: products.filter((p) => p.is_active).length,
        pageViewEvents: events.filter((e) => e.event_type === 'page_view').length,
      },
      enquiriesByDay: groupByDay(contacts),
      statusBreakdown,
      enquiriesByService,
      topPages,
    });
  } catch (error) {
    console.error('Admin analytics GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }
}
