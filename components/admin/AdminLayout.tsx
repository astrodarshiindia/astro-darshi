'use client';

import type { ReactNode } from 'react';
import { useAdminAuth } from '@/lib/adminAuth';
import AdminSidebar from '@/components/AdminSidebar';
import AdminLoading from '@/components/admin/AdminLoading';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { user, loading, logout } = useAdminAuth();

  if (loading) {
    return <AdminLoading />;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f6f7f9]">
      <AdminSidebar user={user} onLogout={logout} />
      <div className="min-h-screen pt-14 md:ml-[260px] md:pt-0">
        <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </div>
      </div>
    </div>
  );
}
