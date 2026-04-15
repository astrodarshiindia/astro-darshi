'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  MessageSquare,
  Briefcase,
  MessageCircle,
  Mail,
  BookOpen,
  BarChart3,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';

interface AdminSidebarProps {
  onLogout: () => void;
}

const menuItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/contacts', label: 'Contact Responses', icon: MessageSquare },
  { href: '/admin/services', label: 'Services', icon: Briefcase },
  { href: '/admin/astromall', label: 'Astro Mall', icon: Briefcase },
  { href: '/admin/blog', label: 'Blog/Resources', icon: BookOpen },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
];

export default function AdminSidebar({ onLogout }: AdminSidebarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-card border border-border rounded-lg"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen w-64 bg-card border-r border-border glass-effect transform transition-transform md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } z-40`}
      >
        {/* Header */}
        <div className="p-6 border-b border-border">
          <h1 className="text-xl font-serif text-primary">Astro Darshi</h1>
          <p className="text-xs text-muted-foreground mt-1">Admin Panel</p>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive
                  ? 'bg-primary/20 text-primary border border-primary/30'
                  : 'text-foreground hover:bg-muted'
                  }`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <Button
            onClick={onLogout}
            className="w-full flex items-center gap-2 bg-destructive/10 hover:bg-destructive/20 text-destructive"
          >
            <LogOut size={18} />
            Logout
          </Button>
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
