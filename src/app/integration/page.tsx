import AppShell from '@/components/layout/AppShell'
import PageShell from '@/components/layout/PageShell'
import GlassCard from '@/components/ui/GlassCard'

interface IntegrationPoint {
  title: string
  description: string
  icon: string
  status: string
  statusColor: string
  accent: 'cyan' | 'violet' | 'emerald' | null
  details: string[]
}

const integrationPoints: IntegrationPoint[] = [
  {
    title: 'مزامنة مسارات التعلم',
    description:
      'مزامنة تلقائية بين مسارات التعلم في درهوس للتسويق ومنصة درهوس للأكاديمية الذكية، مما يتيح متابعة التقدم في كلا المنصتين.',
    icon: 'sync',
    status: 'مخطط',
    statusColor: 'bg-outline/20 text-on-surface-variant border border-outline/30',
    accent: 'cyan',
    details: [
      'مزامنة في الوقت الفعلي لبيانات التقدم',
      'توحيد قائمة المسارات المكتملة',
      'ربط شهادات الإتمام بملف المستخدم الموحد',
    ],
  },
  {
    title: 'ملف المستخدم الموحد',
    description:
      'ملف مستخدم واحد يجمع كل بيانات المستخدم عبر منصات درهوس المختلفة، من بيانات التعلم إلى الأدوات المستخدمة والإنجازات المحققة.',
    icon: 'manage_accounts',
    status: 'مخطط',
    statusColor: 'bg-outline/20 text-on-surface-variant border border-outline/30',
    accent: 'violet',
    details: [
      'تسجيل دخول موحد (SSO) عبر جميع المنصات',
      'لوحة تحكم مركزية لكل المنصات',
      'تفضيلات المستخدم والإعدادات المشتركة',
    ],
  },
  {
    title: 'متتبع التقدم',
    description:
      'نظام متكامل لتتبع تقدم المستخدم عبر جميع منصات درهوس، مع رؤية شاملة لمسيرة التعلم والإنجازات.',
    icon: 'trending_up',
    status: 'مخطط',
    statusColor: 'bg-outline/20 text-on-surface-variant border border-outline/30',
    accent: 'emerald',
    details: [
      'تقارير تقدم موحدة عبر المنصات',
      'مؤشرات أداء مخصصة لكل مستخدم',
      'تحديات وأهداف تعليمية مشتركة',
    ],
  },
  {
    title: 'مكتبة الموارد المشتركة',
    description:
      'مكتبة موارد موحدة تجمع كل المحتوى التعليمي والأدوات والقوالب من جميع منصات درهوس في مكان واحد سهل الوصول.',
    icon: 'library_books',
    status: 'مخطط',
    statusColor: 'bg-outline/20 text-on-surface-variant border border-outline/30',
    accent: null,
    details: [
      'بحث موحد عبر جميع الموارد',
      'تصنيف ذكي للمحتوى',
      'حفظ وتنظيم الموارد المفضلة',
    ],
  },
]

export default function IntegrationPage() {
  return (
    <AppShell>
      <PageShell
        title="جاهزية التكامل"
        subtitle="نقاط التكامل المخططة مع درهوس للأكاديمية الذكية"
      >
        {/* Overview Banner */}
        <div className="mb-8 glass rounded-2xl p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary shadow-glow-cyan">
                <span className="material-symbols-outlined text-3xl text-white">
                  hub
                </span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-on-surface">
                  منصة درهوس للتسويق
                </h2>
                <p className="text-sm text-on-surface-variant">
                  جاهزة للتكامل مع منصات درهوس الأخرى
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-2xl text-outline">
                arrow_back
              </span>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-outline-variant/40 bg-surface-container">
                <span className="material-symbols-outlined text-3xl text-secondary">
                  school
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 rounded-xl bg-surface-container-low p-4">
            <p className="text-sm leading-relaxed text-on-surface-variant">
              هذه الصفحة توضح نقاط التكامل المخططة بين منصة درهوس للتسويق
              ومنصة درهوس للأكاديمية الذكية. هذه الميزات قيد التخطيط وستُنفَّذ
              في مراحل قادمة من التطوير.
            </p>
          </div>
        </div>

        {/* Integration Points */}
        <div className="grid gap-6 md:grid-cols-2">
          {integrationPoints.map((point, idx) => (
            <GlassCard key={idx} accent={point.accent} hover>
              {/* Header */}
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-fixed-dim/10">
                    <span className="material-symbols-outlined text-2xl text-primary-fixed-dim">
                      {point.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-on-surface">{point.title}</h3>
                </div>
                <span
                  className={`flex-shrink-0 rounded-full px-3 py-1 text-xs font-medium ${point.statusColor}`}
                >
                  {point.status}
                </span>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-on-surface-variant">
                {point.description}
              </p>

              {/* Details */}
              <div className="rounded-xl bg-surface-container-low p-4">
                <p className="mb-2 text-xs font-semibold text-on-surface-variant">
                  المواصفات التقنية:
                </p>
                <ul className="space-y-1.5">
                  {point.details.map((detail, dIdx) => (
                    <li
                      key={dIdx}
                      className="flex items-start gap-2 text-sm text-on-surface-variant"
                    >
                      <span className="material-symbols-outlined mt-0.5 flex-shrink-0 text-base text-outline">
                        fiber_manual_record
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* API Notice */}
        <div className="mt-8 glass rounded-2xl border border-outline-variant/30 p-6">
          <div className="flex gap-4">
            <span className="material-symbols-outlined flex-shrink-0 text-2xl text-primary-fixed-dim">
              api
            </span>
            <div>
              <h3 className="mb-2 font-semibold text-on-surface">
                واجهة برمجية مستقبلية (API)
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                ستوفر منصة درهوس للتسويق واجهة برمجية (REST API) تتيح التكامل
                مع منصات درهوس الأخرى ومنصات الجهات الخارجية. هذا النظام سيتضمن
                مصادقة آمنة وتوثيقاً شاملاً لجميع نقاط الربط.
              </p>
            </div>
          </div>
        </div>
      </PageShell>
    </AppShell>
  )
}
