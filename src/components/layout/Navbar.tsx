'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'الرئيسية', href: '/' },
  { label: 'مساراتي', href: '/paths' },
  { label: 'لوحة التحكم', href: '/dashboard' },
  { label: 'الأدوات', href: '/tools' },
  { label: 'القوالب', href: '/templates' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="glass-nav fixed top-0 right-0 left-0 z-50 h-16">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo — right side in RTL */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-primary"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary text-sm font-bold text-white">
            د
          </span>
          <span className="hidden sm:block">درهوس</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="التنقل الرئيسي">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200',
                pathname === link.href
                  ? 'bg-primary-fixed-dim/10 text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* CTA */}
          <Link
            href="/dashboard"
            className="hidden rounded-xl gradient-primary px-4 py-2 text-sm font-semibold text-white shadow-glow-cyan transition-all duration-200 hover:scale-105 hover:shadow-glow-cyan sm:block"
          >
            ابدأ مجاناً
          </Link>

          {/* Mobile menu toggle — left side in RTL */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            <span className="material-symbols-outlined text-xl">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/5 bg-surface-container-low px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-primary-fixed-dim/10 text-primary'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-xl gradient-primary px-4 py-3 text-center text-sm font-semibold text-white"
            >
              ابدأ مجاناً
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
