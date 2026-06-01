'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const sidebarLinks = [
  { label: 'لوحة التحكم', href: '/dashboard', icon: 'dashboard' },
  { label: 'مساراتي', href: '/paths', icon: 'school' },
  { label: 'الأدوات', href: '/tools', icon: 'build' },
  { label: 'مخطط المحتوى', href: '/calendar', icon: 'calendar_month' },
  { label: 'مخطط الحملات', href: '/campaign-planner', icon: 'campaign' },
  { label: 'القوالب', href: '/templates', icon: 'description' },
  { label: 'باني الشخصية', href: '/persona-builder', icon: 'person' },
  { label: 'صوت العلامة', href: '/brand-voice', icon: 'record_voice_over' },
  { label: 'مولّد المنشورات', href: '/post-generator', icon: 'auto_awesome' },
  { label: 'قاموس التسويق', href: '/glossary', icon: 'menu_book' },
  { label: 'التكامل', href: '/integration', icon: 'integration_instructions' },
  { label: 'لوحة الإدارة', href: '/admin-ready', icon: 'admin_panel_settings' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed right-0 top-16 z-40 hidden h-[calc(100vh-64px)] w-60 flex-col border-l border-white/5 bg-surface-container-low lg:flex">
      <nav className="flex flex-col gap-1 overflow-y-auto p-3" aria-label="قائمة التنقل الجانبية">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-primary-fixed-dim/15 text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              )}
            >
              <span
                className={cn(
                  'material-symbols-outlined text-xl',
                  isActive ? 'text-primary' : 'text-on-surface-variant'
                )}
                aria-hidden="true"
              >
                {link.icon}
              </span>
              <span className="truncate">{link.label}</span>
              {isActive && (
                <span className="mr-auto h-1.5 w-1.5 rounded-full bg-primary" />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Bottom — user area */}
      <div className="border-t border-white/5 p-3">
        <div className="flex items-center gap-3 rounded-xl p-2">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full gradient-primary text-xs font-bold text-white">
            أ
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-on-surface">أحمد</p>
            <p className="truncate text-xs text-on-surface-variant">مستخدم مجاني</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
