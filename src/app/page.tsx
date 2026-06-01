import type { Metadata } from 'next'
import Link from 'next/link'
import GlassCard from '@/components/ui/GlassCard'
import GradientButton from '@/components/ui/GradientButton'

export const metadata: Metadata = {
  title: 'الرئيسية | درهوس للتسويق',
  description: 'بوابة التسويق الرقمي العربية — منصة متكاملة للتعلم والأدوات والمحتوى، مصممة للمحترفين العرب.',
}

const stats = [
  { value: '+١٠٠', label: 'مسار تعليمي' },
  { value: '+٥٠', label: 'أداة تسويقية' },
  { value: '+٢٠٠', label: 'قالب جاهز' },
  { value: '٣', label: 'منصات سوشيال' },
]

const features = [
  {
    icon: 'school',
    title: 'مسارات تعليمية منظمة',
    desc: 'تعلّم التسويق الرقمي خطوة بخطوة من خلال مسارات منظمة ومصممة للمحترفين العرب.',
    accent: 'cyan' as const,
  },
  {
    icon: 'psychology',
    title: 'أدوات التسويق الذكية',
    desc: 'مجموعة متكاملة من الأدوات التي تساعدك على بناء استراتيجيات تسويقية فعّالة.',
    accent: 'violet' as const,
  },
  {
    icon: 'article',
    title: 'قوالب جاهزة للنشر',
    desc: 'اختر من مكتبة غنية بالقوالب الجاهزة وعدّلها لتناسب علامتك التجارية.',
    accent: 'emerald' as const,
  },
  {
    icon: 'calendar_month',
    title: 'مخطط المحتوى',
    desc: 'خطّط منشوراتك على جميع المنصات بمنظور أسبوعي وشهري واضح.',
    accent: 'cyan' as const,
  },
  {
    icon: 'person_search',
    title: 'باني الشخصية',
    desc: 'أنشئ شخصيات جمهورك المستهدف بشكل مفصّل لتوجيه استراتيجيتك التسويقية.',
    accent: 'violet' as const,
  },
  {
    icon: 'auto_awesome',
    title: 'مولّد المنشورات',
    desc: 'ولّد منشورات جذابة لجميع المنصات الاجتماعية بنقرة واحدة.',
    accent: 'emerald' as const,
  },
]

const paths = [
  {
    slug: 'digital-marketing-basics',
    title: 'مبادئ التسويق الرقمي',
    level: 'مبتدئ',
    levelColor: 'bg-tertiary-container/20 text-tertiary-container',
    modulesLabel: '٨ وحدات',
    icon: 'rocket_launch',
    accent: 'cyan' as const,
  },
  {
    slug: 'social-media-management',
    title: 'إدارة السوشيال ميديا',
    level: 'متوسط',
    levelColor: 'bg-secondary-container/20 text-secondary',
    modulesLabel: '١٠ وحدات',
    icon: 'hub',
    accent: 'violet' as const,
  },
  {
    slug: 'campaign-building',
    title: 'بناء الحملات التسويقية',
    level: 'متقدم',
    levelColor: 'bg-primary-fixed-dim/20 text-primary-fixed-dim',
    modulesLabel: '١٢ وحدة',
    icon: 'campaign',
    accent: 'emerald' as const,
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-arabic" dir="rtl">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-16">
        {/* Radial glow background */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-primary-fixed-dim/5 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-secondary-container/10 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-right">
          {/* Eyebrow chip */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-fixed-dim/40 bg-primary-fixed-dim/10 px-4 py-2 text-sm text-primary-fixed-dim">
            <span className="material-symbols-outlined text-base">language</span>
            بوابة التسويق الرقمي العربية
          </div>

          {/* H1 */}
          <h1 className="mb-6 text-5xl font-bold leading-tight text-gradient md:text-7xl">
            أتقن التسويق الرقمي بالعربية
          </h1>

          {/* Subtext */}
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
            منصة متكاملة للتعلم والأدوات والمحتوى — مصممة للمحترفين العرب
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <GradientButton
              label="ابدأ رحلتك"
              href="/paths"
              variant="primary"
              size="lg"
            />
            <GradientButton
              label="استكشف الأدوات"
              href="/tools"
              variant="ghost"
              size="lg"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-on-surface-variant">
          <span className="material-symbols-outlined text-3xl">keyboard_arrow_down</span>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-outline-variant/30 bg-surface-container/50 py-10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gradient md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-on-surface-variant">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-on-surface md:text-4xl">
              كل ما تحتاجه في مكان واحد
            </h2>
            <p className="text-on-surface-variant">
              أدوات ومسارات وقوالب — مصممة خصيصاً للسوق العربي
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <GlassCard key={feature.title} accent={feature.accent} hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-fixed-dim/10">
                  <span className="material-symbols-outlined text-2xl text-primary-fixed-dim">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-on-surface">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  {feature.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths Preview */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-on-surface">
                مسارات التعلم
              </h2>
              <p className="text-on-surface-variant">
                ابدأ من حيث أنت وتقدّم بخطوات واضحة
              </p>
            </div>
            <Link
              href="/paths"
              className="flex items-center gap-1 text-sm text-primary-fixed-dim hover:underline"
            >
              عرض الكل
              <span className="material-symbols-outlined text-base">arrow_back</span>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {paths.map((path) => (
              <GlassCard key={path.slug} accent={path.accent} hover>
                <div className="mb-4 flex items-start justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${path.levelColor}`}
                  >
                    {path.level}
                  </span>
                  <span className="material-symbols-outlined text-2xl text-primary-fixed-dim">
                    {path.icon}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-on-surface">
                  {path.title}
                </h3>
                <p className="mb-5 text-sm text-on-surface-variant">
                  {path.modulesLabel}
                </p>
                <Link
                  href={`/paths/${path.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary-fixed-dim hover:underline"
                >
                  ابدأ المسار
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="glass rounded-3xl p-12 gradient-primary">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              جاهز للبدء؟
            </h2>
            <p className="mb-8 text-white/80">
              انضم إلى آلاف المحترفين العرب الذين يتعلمون التسويق الرقمي على درهوس
            </p>
            <Link
              href="/paths"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-secondary-container shadow-glow-violet transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <span className="material-symbols-outlined text-xl">rocket_launch</span>
              ابدأ مجاناً
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
