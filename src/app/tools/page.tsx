'use client'

import { useState } from 'react'
import Link from 'next/link'
import AppShell from '@/components/layout/AppShell'
import PageShell from '@/components/layout/PageShell'
import GlassCard from '@/components/ui/GlassCard'
import GradientButton from '@/components/ui/GradientButton'

interface Tool {
  title: string
  description: string
  href: string
  icon: string
  category: string
  accent: 'cyan' | 'violet' | 'emerald' | null
  badge?: string
}

const tools: Tool[] = [
  {
    title: 'مولّد المنشورات',
    description: 'ولّد منشورات احترافية لجميع المنصات بنقرة واحدة مع ضبط الأسلوب والنبرة.',
    href: '/post-generator',
    icon: 'auto_awesome',
    category: 'إنشاء المحتوى',
    accent: 'cyan',
    badge: 'مميز',
  },
  {
    title: 'باني الصوت التجاري',
    description: 'حدّد شخصية علامتك التجارية وأسلوب تواصلها مع جمهورها.',
    href: '/brand-voice',
    icon: 'record_voice_over',
    category: 'العلامة التجارية',
    accent: 'violet',
  },
  {
    title: 'باني الشخصية',
    description: 'أنشئ ملفات تفصيلية لشخصيات جمهورك المستهدف.',
    href: '/persona-builder',
    icon: 'person_search',
    category: 'استراتيجية',
    accent: 'emerald',
  },
  {
    title: 'مخطط الحملات',
    description: 'خطّط حملاتك التسويقية بشكل منظم خطوة بخطوة.',
    href: '/campaign-planner',
    icon: 'campaign',
    category: 'استراتيجية',
    accent: 'cyan',
  },
  {
    title: 'مخطط المحتوى',
    description: 'نظّم جدول نشر محتواك الأسبوعي والشهري بسهولة.',
    href: '/calendar',
    icon: 'calendar_month',
    category: 'التخطيط',
    accent: 'violet',
  },
  {
    title: 'مكتبة القوالب',
    description: 'اختر من مجموعة واسعة من القوالب الجاهزة وخصّصها لعلامتك.',
    href: '/templates',
    icon: 'article',
    category: 'إنشاء المحتوى',
    accent: 'emerald',
  },
  {
    title: 'قاموس التسويق',
    description: 'مرجعك الشامل لمصطلحات التسويق الرقمي بالعربية والإنجليزية.',
    href: '/glossary',
    icon: 'menu_book',
    category: 'مرجع',
    accent: null,
  },
]

const categories = ['الكل', 'إنشاء المحتوى', 'استراتيجية', 'العلامة التجارية', 'التخطيط', 'مرجع']

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('الكل')

  const filteredTools =
    activeCategory === 'الكل'
      ? tools
      : tools.filter((t) => t.category === activeCategory)

  return (
    <AppShell>
      <PageShell
        title="أدوات التسويق"
        subtitle="مجموعة متكاملة من الأدوات لمساعدتك في كل خطوة"
      >
        {/* Category filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'gradient-primary text-white shadow-glow-cyan'
                  : 'border border-outline-variant/50 bg-surface-container/50 text-on-surface-variant hover:border-primary-fixed-dim/50 hover:text-on-surface'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => (
            <GlassCard key={tool.href} accent={tool.accent} hover>
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-fixed-dim/10">
                  <span className="material-symbols-outlined text-2xl text-primary-fixed-dim">
                    {tool.icon}
                  </span>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {tool.badge && (
                    <span className="rounded-full bg-primary-fixed-dim/15 px-2.5 py-0.5 text-xs font-medium text-primary-fixed-dim">
                      {tool.badge}
                    </span>
                  )}
                  <span className="rounded-lg border border-outline-variant/40 px-2.5 py-0.5 text-xs text-on-surface-variant">
                    {tool.category}
                  </span>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-on-surface">
                {tool.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-on-surface-variant">
                {tool.description}
              </p>
              <Link
                href={tool.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary-fixed-dim hover:underline"
              >
                فتح الأداة
                <span className="material-symbols-outlined text-base">arrow_back</span>
              </Link>
            </GlassCard>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="py-16 text-center text-on-surface-variant">
            <span className="material-symbols-outlined mb-3 block text-5xl text-outline">
              search_off
            </span>
            لا توجد أدوات في هذه الفئة
          </div>
        )}
      </PageShell>
    </AppShell>
  )
}
