'use client';

import { useAdminAuth } from '@/lib/adminAuth';
import AdminSidebar from '@/components/AdminSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';

export default function BlogPage() {
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
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-serif text-primary mb-2">Blog & Resources</h1>
            <p className="text-muted-foreground">Share vedic wisdom and astrology insights</p>
          </div>
          <Button className="btn-gold gap-2">
            <Plus size={18} /> New Article
          </Button>
        </div>

        {/* Coming Soon */}
        <Card className="cosmic-border glass-effect">
          <CardContent className="py-16">
            <div className="text-center">
              <div className="text-6xl mb-4 opacity-50">📚</div>
              <h2 className="text-2xl font-serif text-primary mb-2">Blog & Resources</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Create and publish articles about vedic astrology, tarot readings, and cosmic wisdom.
              </p>
              <div className="mt-8 space-y-2 text-sm text-muted-foreground">
                <p>✓ Rich text editor</p>
                <p>✓ SEO optimization</p>
                <p>✓ Article categories</p>
                <p>✓ View analytics</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
