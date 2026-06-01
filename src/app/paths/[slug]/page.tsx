'use client'

import { useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import AppShell from '@/components/layout/AppShell'
import GlassCard from '@/components/ui/GlassCard'
import GradientButton from '@/components/ui/GradientButton'

interface Lesson {
  title: string
  duration: string
  type: 'video' | 'article' | 'quiz'
}

interface Module {
  title: string
  lessons: Lesson[]
}

interface PathData {
  title: string
  description: string
  level: string
  levelColor: string
  duration: string
  icon: string
  accent: 'cyan' | 'violet' | 'emerald'
  modules: Module[]
}

const pathsData: Record<string, PathData> = {
  'digital-marketing-basics': {
    title: 'مبادئ التسويق الرقمي',
    description:
      'تعلّم أساسيات التسويق الرقمي من الصفر — من تحسين محركات البحث وصولاً إلى إعلانات الدفع لكل نقرة.',
    level: 'مبتدئ',
    levelColor: 'bg-tertiary-container/20 text-tertiary-container',
    duration: '٦ ساعات',
    icon: 'rocket_launch',
    accent: 'cyan',
    modules: [
      {
        title: 'مقدمة في التسويق الرقمي',
        lessons: [
          { title: 'ما هو التسويق الرقمي؟', duration: '١٢ دقيقة', type: 'video' },
          { title: 'قنوات التسويق الرقمي', duration: '١٥ دقيقة', type: 'video' },
          { title: 'بناء استراتيجية رقمية', duration: '٨ دقائق', type: 'article' },
          { title: 'اختبار الوحدة الأولى', duration: '١٠ دقائق', type: 'quiz' },
        ],
      },
      {
        title: 'تحسين محركات البحث (SEO)',
        lessons: [
          { title: 'أساسيات SEO', duration: '٢٠ دقيقة', type: 'video' },
          { title: 'البحث عن الكلمات المفتاحية', duration: '١٨ دقيقة', type: 'video' },
          { title: 'تحسين المحتوى', duration: '١٢ دقيقة', type: 'article' },
          { title: 'اختبار SEO', duration: '١٠ دقائق', type: 'quiz' },
        ],
      },
      {
        title: 'إعلانات جوجل',
        lessons: [
          { title: 'مقدمة في إعلانات البحث', duration: '٢٢ دقيقة', type: 'video' },
          { title: 'إعداد حملتك الأولى', duration: '٢٥ دقيقة', type: 'video' },
          { title: 'قياس الأداء والتحسين', duration: '١٥ دقيقة', type: 'article' },
        ],
      },
      {
        title: 'التسويق عبر البريد الإلكتروني',
        lessons: [
          { title: 'بناء قائمة البريد الإلكتروني', duration: '١٦ دقيقة', type: 'video' },
          { title: 'كتابة بريد إلكتروني فعّال', duration: '٢٠ دقيقة', type: 'video' },
          { title: 'الأتمتة والتتبع', duration: '١٤ دقيقة', type: 'article' },
          { title: 'الاختبار النهائي', duration: '١٥ دقيقة', type: 'quiz' },
        ],
      },
    ],
  },
  'social-media-management': {
    title: 'إدارة السوشيال ميديا',
    description:
      'احترف إدارة منصات التواصل الاجتماعي وابنِ استراتيجية محتوى قوية تحقق نتائج حقيقية.',
    level: 'متوسط',
    levelColor: 'bg-secondary-container/20 text-secondary',
    duration: '٨ ساعات',
    icon: 'hub',
    accent: 'violet',
    modules: [
      {
        title: 'استراتيجية المحتوى',
        lessons: [
          { title: 'تحديد هوية علامتك التجارية', duration: '١٨ دقيقة', type: 'video' },
          { title: 'بناء تقويم المحتوى', duration: '٢٢ دقيقة', type: 'video' },
          { title: 'أنواع المحتوى الفعّال', duration: '١٠ دقائق', type: 'article' },
          { title: 'اختبار الاستراتيجية', duration: '١٠ دقائق', type: 'quiz' },
        ],
      },
      {
        title: 'Instagram و TikTok',
        lessons: [
          { title: 'خوارزمية Instagram', duration: '٢٠ دقيقة', type: 'video' },
          { title: 'إنشاء Reels جذابة', duration: '٢٥ دقيقة', type: 'video' },
          { title: 'استراتيجية TikTok', duration: '١٨ دقيقة', type: 'video' },
          { title: 'اختبار المنصات البصرية', duration: '١٠ دقائق', type: 'quiz' },
        ],
      },
      {
        title: 'LinkedIn والمحتوى المهني',
        lessons: [
          { title: 'بناء حضور مهني على LinkedIn', duration: '٢٢ دقيقة', type: 'video' },
          { title: 'كتابة محتوى B2B', duration: '١٦ دقيقة', type: 'article' },
          { title: 'التواصل وبناء العلاقات', duration: '١٤ دقيقة', type: 'video' },
        ],
      },
      {
        title: 'تحليلات السوشيال ميديا',
        lessons: [
          { title: 'مؤشرات الأداء الرئيسية', duration: '١٥ دقيقة', type: 'video' },
          { title: 'قراءة التقارير وتفسيرها', duration: '١٨ دقيقة', type: 'video' },
          { title: 'تحسين الأداء', duration: '١٢ دقيقة', type: 'article' },
          { title: 'الاختبار النهائي', duration: '١٥ دقيقة', type: 'quiz' },
        ],
      },
    ],
  },
  'campaign-building': {
    title: 'بناء الحملات التسويقية',
    description:
      'تعلّم كيف تخطط وتُنفّذ حملات تسويقية متكاملة تحقق أهدافك التجارية بكفاءة عالية.',
    level: 'متقدم',
    levelColor: 'bg-primary-fixed-dim/20 text-primary-fixed-dim',
    duration: '١٠ ساعات',
    icon: 'campaign',
    accent: 'emerald',
    modules: [
      {
        title: 'تخطيط الحملة',
        lessons: [
          { title: 'تحديد أهداف الحملة', duration: '٢٠ دقيقة', type: 'video' },
          { title: 'تحليل الجمهور المستهدف', duration: '٢٥ دقيقة', type: 'video' },
          { title: 'اختيار المنصات المناسبة', duration: '١٥ دقيقة', type: 'article' },
          { title: 'اختبار التخطيط', duration: '١٠ دقائق', type: 'quiz' },
        ],
      },
      {
        title: 'إدارة الميزانية',
        lessons: [
          { title: 'توزيع ميزانية الإعلانات', duration: '٢٢ دقيقة', type: 'video' },
          { title: 'تحسين تكلفة الاكتساب', duration: '٢٠ دقيقة', type: 'video' },
          { title: 'حساب العائد على الاستثمار', duration: '١٨ دقيقة', type: 'article' },
        ],
      },
      {
        title: 'إنشاء المحتوى الإعلاني',
        lessons: [
          { title: 'كتابة نصوص إعلانية فعّالة', duration: '٢٨ دقيقة', type: 'video' },
          { title: 'تصميم المرئيات الإعلانية', duration: '٢٢ دقيقة', type: 'video' },
          { title: 'اختبار A/B للإعلانات', duration: '١٦ دقيقة', type: 'article' },
          { title: 'اختبار الإبداع الإعلاني', duration: '١٠ دقائق', type: 'quiz' },
        ],
      },
      {
        title: 'قياس الأداء والتحسين',
        lessons: [
          { title: 'إعداد لوحة المتابعة', duration: '٢٠ دقيقة', type: 'video' },
          { title: 'تفسير بيانات الحملة', duration: '٢٥ دقيقة', type: 'video' },
          { title: 'التحسين المستمر', duration: '١٨ دقيقة', type: 'article' },
          { title: 'الاختبار النهائي الشامل', duration: '٢٠ دقيقة', type: 'quiz' },
        ],
      },
    ],
  },
}

const lessonTypeIcon: Record<string, string> = {
  video: 'play_circle',
  article: 'article',
  quiz: 'quiz',
}

const lessonTypeColor: Record<string, string> = {
  video: 'text-primary-fixed-dim',
  article: 'text-secondary',
  quiz: 'text-tertiary-container',
}

export default function PathDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const pathData = pathsData[params.slug]
  const [openModule, setOpenModule] = useState<number>(0)

  if (!pathData) {
    notFound()
  }

  const totalLessons = pathData.modules.reduce(
    (sum, m) => sum + m.lessons.length,
    0
  )

  return (
    <AppShell>
      <div className="max-w-4xl">
        {/* Back button */}
        <Link
          href="/paths"
          className="mb-6 inline-flex items-center gap-1 text-sm text-on-surface-variant transition-colors hover:text-primary-fixed-dim"
        >
          <span className="material-symbols-outlined text-base">arrow_forward</span>
          العودة إلى المسارات
        </Link>

        {/* Path Header */}
        <div className="mb-8 glass rounded-2xl p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-fixed-dim/10">
              <span className="material-symbols-outlined text-5xl text-primary-fixed-dim">
                {pathData.icon}
              </span>
            </div>
            <div className="flex-1">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-bold text-on-surface">{pathData.title}</h1>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${pathData.levelColor}`}>
                  {pathData.level}
                </span>
              </div>
              <p className="mb-5 text-on-surface-variant">{pathData.description}</p>
              <div className="mb-6 flex flex-wrap gap-6 text-sm text-on-surface-variant">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-primary-fixed-dim">
                    layers
                  </span>
                  {pathData.modules.length} وحدات
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-tertiary-container">
                    menu_book
                  </span>
                  {totalLessons} درس
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-secondary">
                    schedule
                  </span>
                  {pathData.duration}
                </span>
              </div>
              <GradientButton label="ابدأ التعلم الآن" variant="primary" size="md" />
            </div>
          </div>
        </div>

        {/* Module Accordion */}
        <h2 className="mb-4 text-xl font-semibold text-on-surface">محتوى المسار</h2>
        <div className="space-y-3">
          {pathData.modules.map((module, mIdx) => (
            <div
              key={mIdx}
              className="glass overflow-hidden rounded-xl"
            >
              {/* Module header */}
              <button
                type="button"
                className="flex w-full items-center justify-between px-6 py-4 text-right"
                onClick={() => setOpenModule(openModule === mIdx ? -1 : mIdx)}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-fixed-dim/10 text-sm font-bold text-primary-fixed-dim">
                    {mIdx + 1}
                  </span>
                  <span className="font-semibold text-on-surface">{module.title}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-on-surface-variant">
                    {module.lessons.length} دروس
                  </span>
                  <span
                    className={`material-symbols-outlined text-xl text-on-surface-variant transition-transform duration-200 ${
                      openModule === mIdx ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </div>
              </button>

              {/* Lessons */}
              {openModule === mIdx && (
                <div className="border-t border-outline-variant/30 divide-y divide-outline-variant/20">
                  {module.lessons.map((lesson, lIdx) => (
                    <div
                      key={lIdx}
                      className="flex items-center gap-4 px-6 py-3.5 hover:bg-surface-container/50 transition-colors"
                    >
                      <span
                        className={`material-symbols-outlined text-xl flex-shrink-0 ${
                          lessonTypeColor[lesson.type]
                        }`}
                      >
                        {lessonTypeIcon[lesson.type]}
                      </span>
                      <span className="flex-1 text-sm text-on-surface">{lesson.title}</span>
                      <span className="text-xs text-on-surface-variant">{lesson.duration}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  )
}
