import Link from 'next/link'
import AppShell from '@/components/layout/AppShell'
import PageShell from '@/components/layout/PageShell'
import GlassCard from '@/components/ui/GlassCard'
import GradientButton from '@/components/ui/GradientButton'

interface PathCard {
  slug: string
  title: string
  description: string
  level: string
  levelColor: string
  modules: number
  duration: string
  icon: string
  accent: 'cyan' | 'violet' | 'emerald'
  topics: string[]
}

const paths: PathCard[] = [
  {
    slug: 'digital-marketing-basics',
    title: 'مبادئ التسويق الرقمي',
    description:
      'رحلتك الأولى في عالم التسويق الرقمي — تعلّم الأساسيات من تحسين محركات البحث حتى التسويق عبر البريد الإلكتروني.',
    level: 'مبتدئ',
    levelColor: 'bg-tertiary-container/20 text-tertiary-container border border-tertiary-container/30',
    modules: 8,
    duration: '٦ ساعات',
    icon: 'rocket_launch',
    accent: 'cyan',
    topics: ['SEO', 'إعلانات جوجل', 'البريد الإلكتروني', 'التحليلات'],
  },
  {
    slug: 'social-media-management',
    title: 'إدارة السوشيال ميديا',
    description:
      'احترف إدارة حسابات التواصل الاجتماعي وبناء استراتيجيات محتوى فعّالة لجميع المنصات.',
    level: 'متوسط',
    levelColor: 'bg-secondary-container/20 text-secondary border border-secondary/30',
    modules: 10,
    duration: '٨ ساعات',
    icon: 'hub',
    accent: 'violet',
    topics: ['Instagram', 'LinkedIn', 'إدارة المجتمع', 'التحليلات'],
  },
  {
    slug: 'campaign-building',
    title: 'بناء الحملات التسويقية',
    description:
      'تعلّم كيف تبني وتُدير حملات تسويقية متكاملة من التخطيط حتى القياس والتحسين.',
    level: 'متقدم',
    levelColor: 'bg-primary-fixed-dim/20 text-primary-fixed-dim border border-primary-fixed-dim/30',
    modules: 12,
    duration: '١٠ ساعات',
    icon: 'campaign',
    accent: 'emerald',
    topics: ['استراتيجية الحملة', 'الميزانية', 'الإعلانات المدفوعة', 'القياس'],
  },
]

export default function PathsPage() {
  return (
    <AppShell>
      <PageShell
        title="مسارات التعلم"
        subtitle="اختر مسارك وابدأ رحلتك في التسويق الرقمي"
      >
        {/* Header stats */}
        <div className="mb-8 flex flex-wrap gap-6">
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-lg text-primary-fixed-dim">
              menu_book
            </span>
            ٣ مسارات متاحة
          </div>
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-lg text-tertiary-container">
              schedule
            </span>
            +٢٤ ساعة محتوى
          </div>
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-lg text-secondary">
              emoji_events
            </span>
            شهادات عند الإتمام
          </div>
        </div>

        {/* Path Cards */}
        <div className="grid gap-8 lg:grid-cols-1">
          {paths.map((path) => (
            <GlassCard key={path.slug} accent={path.accent} hover>
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                {/* Icon */}
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-fixed-dim/10">
                  <span className="material-symbols-outlined text-4xl text-primary-fixed-dim">
                    {path.icon}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-bold text-on-surface">{path.title}</h2>
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${path.levelColor}`}>
                      {path.level}
                    </span>
                  </div>
                  <p className="mb-4 leading-relaxed text-on-surface-variant">
                    {path.description}
                  </p>

                  {/* Meta info */}
                  <div className="mb-4 flex flex-wrap gap-4 text-sm text-on-surface-variant">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-base">layers</span>
                      {path.modules} وحدة
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-base">schedule</span>
                      {path.duration}
                    </span>
                  </div>

                  {/* Topics */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {path.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-lg border border-outline-variant/40 bg-surface-container px-3 py-1 text-xs text-on-surface-variant"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <GradientButton
                    label="ابدأ المسار"
                    href={`/paths/${path.slug}`}
                    variant="primary"
                    size="md"
                  />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </PageShell>
    </AppShell>
  )
}
