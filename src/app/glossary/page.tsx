'use client'

import { useState, useMemo } from 'react'
import AppShell from '@/components/layout/AppShell'
import PageShell from '@/components/layout/PageShell'
import GlassCard from '@/components/ui/GlassCard'

interface GlossaryTerm {
  arabic: string
  english: string
  definition: string
  category: string
}

const terms: GlossaryTerm[] = [
  {
    arabic: 'تحسين محركات البحث',
    english: 'SEO (Search Engine Optimization)',
    definition:
      'مجموعة من الأساليب والتقنيات التي تهدف إلى تحسين ظهور المواقع الإلكترونية في نتائج محركات البحث بشكل مجاني وطبيعي.',
    category: 'البحث والتحسين',
  },
  {
    arabic: 'تحسين محركات البحث المدفوع',
    english: 'SEM (Search Engine Marketing)',
    definition:
      'التسويق عبر محركات البحث باستخدام الإعلانات المدفوعة مثل Google Ads للظهور في صدارة نتائج البحث.',
    category: 'الإعلانات المدفوعة',
  },
  {
    arabic: 'التسويق عبر المحتوى',
    english: 'Content Marketing',
    definition:
      'استراتيجية تسويقية تقوم على إنشاء ونشر محتوى ذي قيمة وملائم لجذب جمهور محدد وتحقيق أهداف تجارية.',
    category: 'المحتوى',
  },
  {
    arabic: 'معدل التحويل',
    english: 'Conversion Rate',
    definition:
      'النسبة المئوية للزوار الذين يقومون بالإجراء المطلوب (شراء، اشتراك، تحميل) من مجموع الزوار الكليين.',
    category: 'التحليلات',
  },
  {
    arabic: 'العميل المحتمل',
    english: 'Lead',
    definition:
      'شخص أبدى اهتماماً بمنتجك أو خدمتك من خلال تقديم بياناته الاتصالية، ويعتبر مرشحاً محتملاً لأن يصبح عميلاً.',
    category: 'المبيعات',
  },
  {
    arabic: 'مسار المبيعات',
    english: 'Sales Funnel',
    definition:
      'النموذج الذي يصف رحلة العميل من مرحلة الوعي بالعلامة التجارية وصولاً إلى إتمام عملية الشراء.',
    category: 'المبيعات',
  },
  {
    arabic: 'التسويق عبر البريد الإلكتروني',
    english: 'Email Marketing',
    definition:
      'استخدام البريد الإلكتروني للتواصل مع العملاء المحتملين والحاليين بهدف الترويج للمنتجات أو الخدمات وبناء العلاقات.',
    category: 'القنوات التسويقية',
  },
  {
    arabic: 'معدل النقر',
    english: 'CTR (Click-Through Rate)',
    definition:
      'نسبة عدد النقرات على رابط أو إعلان إلى عدد مرات ظهوره، وتُعبّر عن فاعلية المحتوى في دفع المستخدمين للتفاعل.',
    category: 'التحليلات',
  },
  {
    arabic: 'مؤشر الأداء الرئيسي',
    english: 'KPI (Key Performance Indicator)',
    definition:
      'مقياس قابل للقياس يُستخدم لتقييم مدى نجاح المنظمة في تحقيق أهدافها التجارية والتسويقية.',
    category: 'التحليلات',
  },
  {
    arabic: 'الجمهور المستهدف',
    english: 'Target Audience',
    definition:
      'مجموعة محددة من الأشخاص الذين تستهدفهم حملتك التسويقية بناءً على خصائص ديموغرافية أو سلوكية أو نفسية مشتركة.',
    category: 'الاستراتيجية',
  },
  {
    arabic: 'إدارة علاقات العملاء',
    english: 'CRM (Customer Relationship Management)',
    definition:
      'استراتيجية ونظام لإدارة تفاعلات الشركة مع عملائها الحاليين والمحتملين بهدف تحسين العلاقة وزيادة الاحتفاظ بهم.',
    category: 'إدارة العملاء',
  },
  {
    arabic: 'العلامة التجارية',
    english: 'Brand',
    definition:
      'مجموع الانطباعات والمشاعر والقيم التي يربطها الناس بمنتج أو شركة معينة، وتشمل الشعار والألوان والصوت والرسالة.',
    category: 'العلامة التجارية',
  },
  {
    arabic: 'تجربة المستخدم',
    english: 'UX (User Experience)',
    definition:
      'مجمل تجربة المستخدم أثناء تفاعله مع منتج رقمي أو موقع إلكتروني، وتشمل سهولة الاستخدام والرضا العام.',
    category: 'التصميم الرقمي',
  },
  {
    arabic: 'محتوى منشأ من المستخدمين',
    english: 'UGC (User-Generated Content)',
    definition:
      'أي محتوى ينشئه المستخدمون العاديون (وليس العلامة التجارية) ويتضمن صوراً أو تقييمات أو فيديوهات تتعلق بالمنتج.',
    category: 'المحتوى',
  },
  {
    arabic: 'العائد على الاستثمار',
    english: 'ROI (Return on Investment)',
    definition:
      'مقياس يُستخدم لتقييم كفاءة الاستثمار، ويُحسب بقسمة صافي الربح على تكلفة الاستثمار مضروباً في ١٠٠٪.',
    category: 'التحليلات',
  },
  {
    arabic: 'الصفحة المقصودة',
    english: 'Landing Page',
    definition:
      'صفحة ويب مستقلة مُصمَّمة لغرض تسويقي محدد، يصلها الزائر بعد النقر على إعلان أو رابط، وتحتوي على دعوة واضحة للعمل.',
    category: 'التصميم الرقمي',
  },
  {
    arabic: 'التسويق المؤثر',
    english: 'Influencer Marketing',
    definition:
      'نوع من التسويق يعتمد على التعاون مع أشخاص ذوي متابعة واسعة على منصات التواصل الاجتماعي للترويج لمنتج أو خدمة.',
    category: 'القنوات التسويقية',
  },
  {
    arabic: 'إعادة الاستهداف',
    english: 'Retargeting',
    definition:
      'تقنية إعلانية تستهدف المستخدمين الذين زاروا موقعك أو تفاعلوا مع إعلاناتك سابقاً بعرض إعلانات مخصصة لهم مرة أخرى.',
    category: 'الإعلانات المدفوعة',
  },
]

const categories = ['الكل', ...Array.from(new Set(terms.map((t) => t.category)))]

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('الكل')

  const filteredTerms = useMemo(() => {
    return terms.filter((term) => {
      const matchesSearch =
        searchQuery === '' ||
        term.arabic.includes(searchQuery) ||
        term.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.includes(searchQuery)
      const matchesCategory =
        selectedCategory === 'الكل' || term.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  // Group by first Arabic letter
  const grouped = useMemo(() => {
    const map: Record<string, GlossaryTerm[]> = {}
    filteredTerms.forEach((term) => {
      const letter = term.arabic[0]
      if (!map[letter]) map[letter] = []
      map[letter].push(term)
    })
    return map
  }, [filteredTerms])

  const sortedLetters = Object.keys(grouped).sort((a, b) =>
    a.localeCompare(b, 'ar')
  )

  return (
    <AppShell>
      <PageShell
        title="قاموس التسويق"
        subtitle="مرجعك الشامل لمصطلحات التسويق الرقمي بالعربية والإنجليزية"
      >
        {/* Search & Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-xl text-on-surface-variant">
              search
            </span>
            <input
              type="text"
              placeholder="ابحث بالاسم العربي أو الإنجليزي..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-outline-variant/40 bg-surface-container py-3 pr-12 pl-4 text-sm text-on-surface placeholder-on-surface-variant/50 transition-colors focus:border-primary-fixed-dim focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            )}
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'gradient-primary text-white'
                    : 'border border-outline-variant/50 bg-surface-container/50 text-on-surface-variant hover:border-primary-fixed-dim/50 hover:text-on-surface'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="text-sm text-on-surface-variant">
            {filteredTerms.length} مصطلح
          </p>
        </div>

        {/* Glossary Content */}
        {filteredTerms.length === 0 ? (
          <GlassCard>
            <div className="py-12 text-center">
              <span className="material-symbols-outlined mb-3 block text-5xl text-outline">
                search_off
              </span>
              <p className="text-on-surface-variant">
                لا توجد مصطلحات تطابق بحثك
              </p>
            </div>
          </GlassCard>
        ) : (
          <div className="space-y-8">
            {sortedLetters.map((letter) => (
              <div key={letter}>
                {/* Letter heading */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary text-lg font-bold text-white shadow-glow-cyan">
                    {letter}
                  </div>
                  <div className="flex-1 border-b border-outline-variant/30" />
                </div>

                {/* Terms under this letter */}
                <div className="grid gap-4 md:grid-cols-2">
                  {grouped[letter].map((term) => (
                    <GlassCard key={term.english} hover>
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-base font-bold text-on-surface">
                            {term.arabic}
                          </h3>
                          <p className="mt-0.5 text-xs font-medium text-primary-fixed-dim">
                            {term.english}
                          </p>
                        </div>
                        <span className="flex-shrink-0 rounded-lg border border-outline-variant/40 px-2.5 py-0.5 text-xs text-on-surface-variant">
                          {term.category}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-on-surface-variant">
                        {term.definition}
                      </p>
                    </GlassCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </PageShell>
    </AppShell>
  )
}
