import Link from 'next/link'
import AppShell from '@/components/layout/AppShell'
import PageShell from '@/components/layout/PageShell'
import GlassCard from '@/components/ui/GlassCard'
import GradientButton from '@/components/ui/GradientButton'

const statsCards = [
  { label: 'مسارات مكتملة', value: '٢', icon: 'school', accent: 'cyan' as const },
  { label: 'أدوات مستخدمة', value: '٧', icon: 'build', accent: 'violet' as const },
  { label: 'منشورات منشأة', value: '١٥', icon: 'article', accent: 'emerald' as const },
  { label: 'قوالب محفوظة', value: '٤', icon: 'bookmark', accent: null },
]

const quickActions = [
  { label: 'إنشاء منشور', href: '/post-generator', icon: 'edit_note' },
  { label: 'تخطيط حملة', href: '/campaign-planner', icon: 'campaign' },
  { label: 'بناء شخصية', href: '/persona-builder', icon: 'person_search' },
  { label: 'القوالب', href: '/templates', icon: 'article' },
]

const activityFeed = [
  {
    icon: 'check_circle',
    color: 'text-tertiary-container',
    text: 'أكملت الوحدة الثالثة من مسار مبادئ التسويق الرقمي',
    time: 'منذ ساعتين',
  },
  {
    icon: 'auto_awesome',
    color: 'text-primary-fixed-dim',
    text: 'أنشأت منشوراً لـ Instagram باستخدام مولّد المنشورات',
    time: 'منذ ٥ ساعات',
  },
  {
    icon: 'bookmark_added',
    color: 'text-secondary',
    text: 'حفظت قالب "موجز الحملة التسويقية"',
    time: 'أمس',
  },
  {
    icon: 'person_search',
    color: 'text-tertiary-container',
    text: 'بنيت شخصية جمهور جديدة: "رائد الأعمال الشاب"',
    time: 'أمس',
  },
  {
    icon: 'school',
    color: 'text-primary-fixed-dim',
    text: 'بدأت مسار إدارة السوشيال ميديا',
    time: 'منذ ٣ أيام',
  },
]

export default function DashboardPage() {
  return (
    <AppShell>
      <PageShell
        title="لوحة التحكم"
        subtitle="مرحباً، أحمد — هنا ملخص نشاطك"
      >
        {/* Stats Row */}
        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {statsCards.map((card) => (
            <GlassCard key={card.label} accent={card.accent} hover>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-on-surface-variant">{card.label}</p>
                  <p className="mt-1 text-3xl font-bold text-on-surface">{card.value}</p>
                </div>
                <span className="material-symbols-outlined text-2xl text-primary-fixed-dim">
                  {card.icon}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Progress Card + Quick Actions — Left column on LTR, right column in RTL */}
          <div className="space-y-6 lg:col-span-2">
            {/* Progress Card */}
            <GlassCard accent="cyan">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-on-surface">
                  مسارك الحالي
                </h2>
                <span className="material-symbols-outlined text-xl text-primary-fixed-dim">
                  school
                </span>
              </div>
              <p className="mb-1 font-medium text-on-surface">
                مبادئ التسويق الرقمي
              </p>
              <p className="mb-4 text-sm text-on-surface-variant">
                الوحدة ٥ من ٨ — إعلانات الدفع لكل نقرة
              </p>
              {/* Progress bar */}
              <div className="mb-2 h-2.5 w-full overflow-hidden rounded-full bg-surface-container-high">
                <div
                  className="h-full rounded-full gradient-primary transition-all duration-500"
                  style={{ width: '60%' }}
                />
              </div>
              <div className="mb-6 flex items-center justify-between text-xs text-on-surface-variant">
                <span>٦٠٪ مكتمل</span>
                <span>٣ وحدات متبقية</span>
              </div>
              <GradientButton
                label="متابعة التعلم"
                href="/paths/digital-marketing-basics"
                variant="primary"
                size="md"
              />
            </GlassCard>

            {/* Quick Actions */}
            <GlassCard>
              <h2 className="mb-4 text-lg font-semibold text-on-surface">
                إجراءات سريعة
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {quickActions.map((action) => (
                  <Link
                    key={action.href}
                    href={action.href}
                    className="flex items-center gap-3 rounded-xl border border-outline-variant/40 bg-surface-container/50 p-4 text-sm font-medium text-on-surface transition-all duration-200 hover:border-primary-fixed-dim/50 hover:text-primary-fixed-dim"
                  >
                    <span className="material-symbols-outlined text-xl text-primary-fixed-dim">
                      {action.icon}
                    </span>
                    {action.label}
                  </Link>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Activity Feed */}
          <div>
            <GlassCard className="h-full">
              <h2 className="mb-5 text-lg font-semibold text-on-surface">
                آخر النشاطات
              </h2>
              <div className="space-y-4">
                {activityFeed.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span
                      className={`material-symbols-outlined mt-0.5 flex-shrink-0 text-xl ${item.color}`}
                    >
                      {item.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm leading-snug text-on-surface">
                        {item.text}
                      </p>
                      <p className="mt-1 text-xs text-on-surface-variant">
                        {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </PageShell>
    </AppShell>
  )
}
