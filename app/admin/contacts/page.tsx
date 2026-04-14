'use client';

import { useAdminAuth } from '@/lib/adminAuth';
import AdminSidebar from '@/components/AdminSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import { Eye, Trash2, Download, Filter } from 'lucide-react';

interface ContactResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  service_type: string;
  message: string;
  status: 'new' | 'read' | 'responded';
  created_at: string;
  notes?: string;
}

export default function ContactsPage() {
  const { loading, logout } = useAdminAuth();
  const [contacts, setContacts] = useState<ContactResponse[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<ContactResponse[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [dataLoading, setDataLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<ContactResponse | null>(null);

  useEffect(() => {
    if (!loading) fetchContacts();
  }, [loading]);

  useEffect(() => {
    let filtered = contacts;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (c) =>
          c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter((c) => c.status === statusFilter);
    }

    setFilteredContacts(filtered);
  }, [contacts, searchTerm, statusFilter]);

  const fetchContacts = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_responses')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setContacts(data);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setDataLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('contact_responses')
        .update({ status: newStatus, read_at: new Date().toISOString() })
        .eq('id', id);

      if (!error) {
        setContacts(contacts.map((c) => (c.id === id ? { ...c, status: newStatus as any } : c)));
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const deleteContact = async (id: string) => {
    if (confirm('Are you sure you want to delete this contact?')) {
      try {
        const { error } = await supabase.from('contact_responses').delete().eq('id', id);
        if (!error) {
          setContacts(contacts.filter((c) => c.id !== id));
          setSelectedContact(null);
        }
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    }
  };

  const exportToCSV = () => {
    const csv = [
      ['Name', 'Email', 'Phone', 'Service', 'Status', 'Date'],
      ...filteredContacts.map((c) => [
        c.name,
        c.email,
        c.phone || '',
        c.service_type || '',
        c.status,
        new Date(c.created_at).toLocaleDateString(),
      ]),
    ]
      .map((row) => row.map((cell) => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contacts-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
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
          <h1 className="text-4xl font-serif text-primary mb-2">Contact Responses</h1>
          <p className="text-muted-foreground">Manage and respond to customer inquiries</p>
        </div>

        {/* Filters & Search */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Input
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="cosmic-border"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 bg-card border border-border rounded-lg text-foreground"
          >
            <option value="all">All Status</option>
            <option value="new">New</option>
            <option value="read">Read</option>
            <option value="responded">Responded</option>
          </select>
          <Button onClick={exportToCSV} className="gap-2">
            <Download size={18} /> Export CSV
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contacts List */}
          <div className="lg:col-span-2">
            <Card className="cosmic-border glass-effect">
              <CardHeader>
                <CardTitle>Inquiries ({filteredContacts.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {dataLoading ? (
                  <div className="text-center py-8">Loading...</div>
                ) : filteredContacts.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">No inquiries found</div>
                ) : (
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {filteredContacts.map((contact) => (
                      <div
                        key={contact.id}
                        onClick={() => setSelectedContact(contact)}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          selectedContact?.id === contact.id
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-foreground">{contact.name}</h3>
                            <p className="text-sm text-muted-foreground">{contact.email}</p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {new Date(contact.created_at).toLocaleDateString()}
                            </p>
                          </div>
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              contact.status === 'new'
                                ? 'bg-accent/20 text-accent'
                                : contact.status === 'read'
                                ? 'bg-primary/20 text-primary'
                                : 'bg-secondary/20 text-secondary'
                            }`}
                          >
                            {contact.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Detail View */}
          <div>
            {selectedContact ? (
              <Card className="cosmic-border glass-effect sticky top-8">
                <CardHeader>
                  <CardTitle className="text-lg">Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Name</p>
                    <p className="font-semibold">{selectedContact.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Email</p>
                    <a
                      href={`mailto:${selectedContact.email}`}
                      className="text-primary hover:underline"
                    >
                      {selectedContact.email}
                    </a>
                  </div>
                  {selectedContact.phone && (
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Phone</p>
                      <a
                        href={`tel:${selectedContact.phone}`}
                        className="text-primary hover:underline"
                      >
                        {selectedContact.phone}
                      </a>
                    </div>
                  )}
                  {selectedContact.service_type && (
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Service</p>
                      <p className="font-medium">{selectedContact.service_type}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Message</p>
                    <p className="text-sm leading-relaxed">{selectedContact.message}</p>
                  </div>
                  <div className="pt-4 space-y-2 border-t border-border">
                    <div className="flex gap-2">
                      <Button
                        onClick={() => updateStatus(selectedContact.id, 'read')}
                        size="sm"
                        className="flex-1 bg-primary/20 text-primary hover:bg-primary/30"
                      >
                        Mark Read
                      </Button>
                      <Button
                        onClick={() => updateStatus(selectedContact.id, 'responded')}
                        size="sm"
                        className="flex-1 bg-secondary/20 text-secondary hover:bg-secondary/30"
                      >
                        Mark Responded
                      </Button>
                    </div>
                    <Button
                      onClick={() => deleteContact(selectedContact.id)}
                      size="sm"
                      className="w-full bg-destructive/20 text-destructive hover:bg-destructive/30"
                    >
                      <Trash2 size={16} className="mr-2" /> Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="cosmic-border glass-effect">
                <CardContent className="py-8">
                  <p className="text-center text-muted-foreground">Select an inquiry to view details</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
