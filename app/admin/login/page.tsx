'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json().catch(async () => {
        const text = await response.text();
        return { error: `Server error ${response.status}: ${text || response.statusText}` };
      });

      if (!response.ok) {
        setError(data?.error || 'Login failed');
        return;
      }

      localStorage.setItem('adminToken', data.token);
      router.push('/admin/dashboard');
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen bg-[#f6f7f9]">
      <div className="hidden w-1/2 flex-col justify-between bg-[#0f1117] p-12 text-white lg:flex">
        <div>
          <span className="text-xl font-semibold tracking-tight">
            Astro <span className="text-blue-400">Paramarsh</span>
          </span>
          <p className="mt-1 text-sm text-slate-500">Operations Console</p>
        </div>
        <div className="max-w-md">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight">
            Manage enquiries, products, and content in one place.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Secure access for authorised team members only.
          </p>
        </div>
        <p className="text-xs text-slate-600">© Astro Paramarsh</p>
      </div>

      <div className="flex flex-1 flex-col justify-center px-6 py-12 sm:px-12">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-800 lg:mb-12"
        >
          <ArrowLeft size={16} />
          Back to website
        </Link>

        <div className="mx-auto w-full max-w-sm">
          <div className="mb-8 lg:hidden">
            <span className="text-xl font-semibold text-slate-900">
              Astro <span className="text-blue-600">Paramarsh</span>
            </span>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Sign in</h2>
          <p className="mt-2 text-sm text-slate-500">Enter your admin credentials to continue.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Email</label>
              <Input
                type="email"
                placeholder="admin@astroparamarsh.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="h-11 border-slate-200 bg-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                  className="h-11 border-slate-200 bg-white pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="h-11 w-full bg-slate-900 text-white hover:bg-slate-800"
            >
              {loading ? 'Signing in…' : 'Sign in'}
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-slate-400">
            Protected area. Contact your administrator for access.
          </p>
        </div>
      </div>
    </main>
  );
}
