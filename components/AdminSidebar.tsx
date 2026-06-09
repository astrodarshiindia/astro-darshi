'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Inbox,
  Briefcase,
  ShoppingBag,
  BookOpen,
  BarChart3,
  LogOut,
  Menu,
  X,
  ExternalLink,
} from 'lucide-react';
import { useState } from 'react';
import type { AdminUser } from '@/lib/adminAuth';
import { ScrollArea } from '@/components/ui/scroll-area';

interface AdminSidebarProps {
  user: AdminUser;
  onLogout: () => void;
}

const NAV_GROUPS = [
  {
    label: 'Overview',
    items: [{ href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard }],
  },
  {
    label: 'Inbox',
    items: [{ href: '/admin/contacts', label: 'Enquiries', icon: Inbox }],
  },
  {
    label: 'Catalog',
    items: [
      { href: '/admin/astromall', label: 'Astro Mall', icon: ShoppingBag },
      { href: '/admin/services', label: 'Services', icon: Briefcase },
    ],
  },
  {
    label: 'Content',
    items: [{ href: '/admin/blog', label: 'Blog', icon: BookOpen }],
  },
  {
    label: 'Insights',
    items: [{ href: '/admin/analytics', label: 'Analytics', icon: BarChart3 }],
  },
];

function NavContent({
  pathname,
  onNavigate,
  user,
  onLogout,
}: {
  pathname: string;
  onNavigate?: () => void;
  user: AdminUser;
  onLogout: () => void;
}) {
  return (
    <div className="flex h-full min-h-0 flex-1 flex-col">
      <div className="shrink-0 border-b border-white/10 px-5 py-5">
        <Link href="/admin/dashboard" onClick={onNavigate} className="block">
          <span className="text-lg font-semibold tracking-tight text-white">
            Astro <span className="text-blue-400">Darshi</span>
          </span>
          <p className="mt-0.5 text-[11px] text-slate-500">Operations Console</p>
        </Link>
      </div>

      <ScrollArea className="admin-sidebar-scroll min-h-0 flex-1">
        <nav className="space-y-6 px-3 py-5 pr-2">
          {NAV_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                {group.label}
              </p>
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onNavigate}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                        isActive
                          ? 'bg-white/10 font-medium text-white'
                          : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                      }`}
                    >
                      <Icon size={17} strokeWidth={isActive ? 2 : 1.75} />
                      {item.label}
                      {isActive && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-400" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </ScrollArea>

      <div className="shrink-0 space-y-2 border-t border-white/10 p-4">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
        >
          <ExternalLink size={15} />
          View website
        </a>
        <div className="rounded-lg bg-white/5 px-3 py-3">
          <p className="truncate text-sm font-medium text-white">{user.name}</p>
          <p className="truncate text-xs text-slate-500">{user.email}</p>
        </div>
        <button
          type="button"
          onClick={onLogout}
          className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-red-400 transition-colors hover:bg-red-500/10"
        >
          <LogOut size={16} />
          Sign out
        </button>
      </div>
    </div>
  );
}

export default function AdminSidebar({ user, onLogout }: AdminSidebarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentPage =
    NAV_GROUPS.flatMap((g) => g.items).find((i) => i.href === pathname)?.label ?? 'Admin';

  return (
    <>
      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between border-b border-slate-200 bg-white px-4 md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700"
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
        <span className="text-sm font-semibold text-slate-900">{currentPage}</span>
        <div className="w-9" />
      </header>

      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[260px] flex flex-col border-r border-slate-800 bg-[#0f1117] md:flex">
        <NavContent pathname={pathname} user={user} onLogout={onLogout} />
      </aside>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <aside className="absolute left-0 top-0 flex h-full w-[min(100vw,280px)] flex-col bg-[#0f1117] shadow-2xl">
            <div className="flex shrink-0 items-center justify-end p-3">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-white/10 hover:text-white"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex min-h-0 flex-1 flex-col">
              <NavContent
                pathname={pathname}
                onNavigate={() => setIsOpen(false)}
                user={user}
                onLogout={onLogout}
              />
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
