'use client';

import { useAdminAuth } from '@/lib/adminAuth';
import AdminSidebar from '@/components/AdminSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AnalyticsPage() {
  const { loading, logout } = useAdminAuth();

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
          <h1 className="text-4xl font-serif text-primary mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Track website and business metrics</p>
        </div>

        {/* Coming Soon */}
        <Card className="cosmic-border glass-effect">
          <CardContent className="py-16">
            <div className="text-center">
              <div className="text-6xl mb-4 opacity-50">📊</div>
              <h2 className="text-2xl font-serif text-primary mb-2">Analytics Dashboard</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Track visitors, conversion rates, popular services, and business growth metrics.
              </p>
              <div className="mt-8 space-y-2 text-sm text-muted-foreground">
                <p>✓ Visitor statistics</p>
                <p>✓ Conversion tracking</p>
                <p>✓ Service popularity</p>
                <p>✓ Monthly reports</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
