import type { Metadata } from 'next'
import { Hind, Noto_Serif, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/lib/LanguageContext'
import { SelectedServiceProvider } from '@/lib/SelectedServiceContext'
import './globals.css'

const hind = Hind({
  subsets: ['latin', 'devanagari'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-hind',
  display: 'swap',
})

const notoSerif = Noto_Serif({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-noto-serif',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${hind.variable} ${notoSerif.variable} ${playfair.variable}`}
    >
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
