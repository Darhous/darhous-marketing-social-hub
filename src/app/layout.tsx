import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | درهوس للتسويق',
    default: 'بوابة درهوس للتسويق والسوشيال ميديا',
  },
  description:
    'منصة تعليمية متكاملة للتسويق الرقمي والسوشيال ميديا — مصممة للمحترفين العرب',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`dark ${ibmPlexArabic.variable}`}>
      <body className="font-arabic bg-background text-on-surface">
        <Navbar />
        <div className="min-h-[calc(100vh-64px)]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
