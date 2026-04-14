'use client';

import { useAdminAuth } from '@/lib/adminAuth';
import AdminSidebar from '@/components/AdminSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Users, Briefcase, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
// import { supabase } from '@/lib/supabase'; // Client-side Supabase not needed for admin dashboard (read-only stats use server components/API)

interface DashboardStats {
  totalContacts: number;
  newContacts: number;
  totalServices: number;
  totalTestimonials: number;
}

export default function AdminDashboard() {
  const { user, loading, logout } = useAdminAuth();
  const [stats, setStats] = useState<DashboardStats>({
    totalContacts: 0,
    newContacts: 0,
    totalServices: 0,
    totalTestimonials: 0,
  });
  const [statsLoading, setStatsLoading] = useState(true);

  useEffect(() => {
    if (loading) return;
    fetchStats();
  }, [loading]);

  const fetchStats = async () => {
    setStatsLoading(false);
    setStats({
      totalContacts: 0,
      newContacts: 0,
      totalServices: 0,
      totalTestimonials: 0,
    });
    // Stats disabled client-side until proper auth context provided
    // Use server components or admin API routes for production stats
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">✨</div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <AdminSidebar onLogout={logout} />

      {/* Main Content */}
      <div className="md:ml-64 p-4 md:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-primary mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, <span className="text-foreground font-semibold">{user?.name}</span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Contacts */}
          <Card className="cosmic-border glass-effect">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Total Inquiries</CardTitle>
                <MessageSquare className="text-primary" size={20} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {statsLoading ? '...' : stats.totalContacts}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {stats.newContacts} new
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="cosmic-border glass-effect">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Active Services</CardTitle>
                <Briefcase className="text-secondary" size={20} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">
                {statsLoading ? '...' : stats.totalServices}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Published</p>
            </CardContent>
          </Card>

          {/* Testimonials */}
          <Card className="cosmic-border glass-effect">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Testimonials</CardTitle>
                <Users className="text-accent" size={20} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">
                {statsLoading ? '...' : stats.totalTestimonials}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Approved</p>
            </CardContent>
          </Card>

          {/* Engagement */}
          <Card className="cosmic-border glass-effect">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
                <TrendingUp className="text-primary" size={20} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {statsLoading ? '...' : stats.totalContacts > 0
                  ? Math.round(((stats.totalContacts - stats.newContacts) / stats.totalContacts) * 100)
                  : 0}%
              </div>
              <p className="text-xs text-muted-foreground mt-1">Responded</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="cosmic-border glass-effect">
            <CardHeader>
              <CardTitle className="text-lg">Recent Inquiries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <p className="text-muted-foreground text-sm">
                  View and manage contact form submissions in the Contact Responses section
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-border glass-effect">
            <CardHeader>
              <CardTitle className="text-lg">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Conversion Rate:</span>
                  <span className="font-semibold text-primary">
                    {statsLoading ? '...' : stats.totalContacts > 0
                      ? ((stats.totalTestimonials / stats.totalContacts) * 100).toFixed(1)
                      : 0}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avg Response Time:</span>
                  <span className="font-semibold text-secondary">24 hrs</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
