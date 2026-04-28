import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/lib/LanguageContext'
import { SelectedServiceProvider } from '@/lib/SelectedServiceContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'Astro Darshi - Vedic Astrology & Tarot Card Reading',
  description: 'Get expert advice for your life journey with Astro Darshi. Traditional Vedic astrology and tarot card readings for your success.',
  keywords: ['vedic astrology', 'tarot reading', 'astrology consultation', 'birth chart analysis'],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            <SelectedServiceProvider>
              {children}
              {process.env.NODE_ENV === 'production' && <Analytics />}
            </SelectedServiceProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
