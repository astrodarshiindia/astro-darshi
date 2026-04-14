'use client';

import { useAdminAuth } from '@/lib/adminAuth';
import AdminSidebar from '@/components/AdminSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  is_active: boolean;
}

export default function ServicesPage() {
  const { loading, logout } = useAdminAuth();
  const [services, setServices] = useState<Service[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (!loading) fetchServices();
  }, [loading]);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('order_index');

      if (!error && data) {
        setServices(data);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setDataLoading(false);
    }
  };

  const toggleActive = async (id: string, isActive: boolean) => {
    try {
      const { error } = await supabase
        .from('services')
        .update({ is_active: !isActive })
        .eq('id', id);

      if (!error) {
        setServices(services.map((s) => (s.id === id ? { ...s, is_active: !isActive } : s)));
      }
    } catch (error) {
      console.error('Error updating service:', error);
    }
  };

  const deleteService = async (id: string) => {
    if (confirm('Delete this service?')) {
      try {
        const { error } = await supabase.from('services').delete().eq('id', id);
        if (!error) {
          setServices(services.filter((s) => s.id !== id));
        }
      } catch (error) {
        console.error('Error deleting service:', error);
      }
    }
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
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-serif text-primary mb-2">Services Management</h1>
            <p className="text-muted-foreground">Manage your astrology services</p>
          </div>
          <Button className="btn-gold gap-2">
            <Plus size={18} /> Add Service
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataLoading ? (
            <div className="col-span-full text-center py-12">Loading...</div>
          ) : services.length === 0 ? (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No services yet. Create your first service!
            </div>
          ) : (
            services.map((service) => (
              <Card
                key={service.id}
                className="cosmic-border glass-effect hover:border-primary transition-all"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <p className="text-xs text-muted-foreground mt-1">{service.duration}</p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        service.is_active
                          ? 'bg-primary/20 text-primary'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {service.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <p className="font-semibold text-primary">₹{service.price}</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="gap-1">
                        <Edit size={16} /> Edit
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => deleteService(service.id)}
                        className="bg-destructive/20 hover:bg-destructive/30 text-destructive gap-1"
                      >
                        <Trash2 size={16} /> Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
