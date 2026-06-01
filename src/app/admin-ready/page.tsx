import AppShell from '@/components/layout/AppShell'
import PageShell from '@/components/layout/PageShell'
import GlassCard from '@/components/ui/GlassCard'

interface AdminFeature {
  title: string
  description: string
  icon: string
  accent: 'cyan' | 'violet' | 'emerald' | null
  capabilities: string[]
  estimatedPhase: string
}

const adminFeatures: AdminFeature[] = [
  {
    title: 'إدارة المستخدمين',
    description:
      'لوحة تحكم متكاملة لإدارة حسابات المستخدمين والصلاحيات والمجموعات عبر المنصة.',
    icon: 'group',
    accent: 'cyan',
    capabilities: [
      'عرض وتعديل بيانات المستخدمين',
      'إدارة صلاحيات الوصول والأدوار',
      'تعليق الحسابات أو حذفها',
      'إرسال إشعارات جماعية',
      'إدارة الاشتراكات والخطط',
    ],
    estimatedPhase: 'المرحلة الثانية',
  },
  {
    title: 'تحليلات الاستخدام',
    description:
      'رؤى تفصيلية حول كيفية استخدام المنصة — الأدوات الأكثر استخداماً، أنماط التفاعل، ومسارات التنقل.',
    icon: 'analytics',
    accent: 'violet',
    capabilities: [
      'إحصائيات المستخدمين النشطين يومياً وشهرياً',
      'تتبع استخدام كل أداة ومسار',
      'تحليل معدلات الإتمام للمسارات التعليمية',
      'خرائط حرارية لصفحات المنصة',
      'تقارير قابلة للتصدير',
    ],
    estimatedPhase: 'المرحلة الثانية',
  },
  {
    title: 'إدارة المحتوى',
    description:
      'نظام شامل لإدارة محتوى المنصة من مسارات تعليمية وأدوات وقوالب ومصطلحات.',
    icon: 'edit_document',
    accent: 'emerald',
    capabilities: [
      'إضافة وتعديل وحذف المسارات التعليمية',
      'إدارة مكتبة القوالب',
      'تحديث قاموس المصطلحات',
      'جدولة المحتوى ونشره',
      'إدارة الوسائط والصور',
    ],
    estimatedPhase: 'المرحلة الثانية',
  },
  {
    title: 'إعدادات المنصة',
    description:
      'تحكم كامل في إعدادات المنصة من مظهر وتوطين ومتطلبات الأداء والأمان.',
    icon: 'settings',
    accent: null,
    capabilities: [
      'تخصيص ألوان ومظهر المنصة',
      'إدارة إعدادات اللغة والتوطين',
      'إعدادات الأمان والمصادقة',
      'إدارة التكاملات الخارجية',
      'ضبط إشعارات البريد الإلكتروني',
    ],
    estimatedPhase: 'المرحلة الثالثة',
  },
  {
    title: 'التقارير والتصدير',
    description:
      'إمكانية إنشاء تقارير مفصلة وتصديرها بصيغ متعددة لتحليل أداء المنصة واتخاذ قرارات مبنية على البيانات.',
    icon: 'summarize',
    accent: 'cyan',
    capabilities: [
      'تقارير نمو المستخدمين والاشتراكات',
      'تقارير الأداء والإيرادات',
      'تصدير البيانات بصيغ CSV و PDF',
      'تقارير مجدولة عبر البريد الإلكتروني',
      'لوحة مؤشرات الأداء التنفيذي',
    ],
    estimatedPhase: 'المرحلة الثالثة',
  },
]

export default function AdminReadyPage() {
  return (
    <AppShell>
      <PageShell
        title="جاهزية الإدارة"
        subtitle="الميزات الإدارية المخططة لمنصة درهوس للتسويق"
      >
        {/* Status Banner */}
        <div className="mb-8 glass rounded-2xl p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl gradient-primary shadow-glow-cyan">
              <span className="material-symbols-outlined text-3xl text-white">
                admin_panel_settings
              </span>
            </div>
            <div className="flex-1">
              <h2 className="mb-1 text-lg font-bold text-on-surface">
                لوحة إدارة المنصة
              </h2>
              <p className="text-sm text-on-surface-variant">
                هذه الصفحة تعرض الميزات الإدارية المخططة للتطوير المستقبلي.
                جميع الميزات المدرجة ستكون متاحة للمستخدمين ذوي صلاحية المشرف فقط.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="rounded-full border border-outline/30 bg-outline/10 px-4 py-2 text-sm text-on-surface-variant">
                قيد التخطيط
              </span>
            </div>
          </div>
        </div>

        {/* Admin Features Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {adminFeatures.map((feature, idx) => (
            <GlassCard key={idx} accent={feature.accent} hover>
              {/* Card header */}
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-fixed-dim/10">
                    <span className="material-symbols-outlined text-2xl text-primary-fixed-dim">
                      {feature.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-on-surface">{feature.title}</h3>
                </div>
                <span className="flex-shrink-0 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                  قريباً
                </span>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-on-surface-variant">
                {feature.description}
              </p>

              {/* Capabilities */}
              <div className="mb-4 rounded-xl bg-surface-container-low p-4">
                <p className="mb-3 text-xs font-semibold text-on-surface-variant">
                  الإمكانيات المخططة:
                </p>
                <ul className="space-y-2">
                  {feature.capabilities.map((cap, cIdx) => (
                    <li
                      key={cIdx}
                      className="flex items-center gap-2 text-sm text-on-surface-variant"
                    >
                      <span className="material-symbols-outlined flex-shrink-0 text-base text-outline">
                        radio_button_unchecked
                      </span>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Phase badge */}
              <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-base text-outline">
                  schedule
                </span>
                <span>{feature.estimatedPhase}</span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Roadmap note */}
        <div className="mt-8 glass rounded-2xl border border-outline-variant/30 p-6">
          <div className="flex gap-4">
            <span className="material-symbols-outlined flex-shrink-0 text-2xl text-tertiary-container">
              route
            </span>
            <div>
              <h3 className="mb-2 font-semibold text-on-surface">
                خريطة تطوير الإدارة
              </h3>
              <div className="space-y-2 text-sm text-on-surface-variant">
                <p>
                  <span className="font-medium text-primary-fixed-dim">المرحلة الثانية (Q3 2026):</span>{' '}
                  إدارة المستخدمين، التحليلات، إدارة المحتوى
                </p>
                <p>
                  <span className="font-medium text-secondary">المرحلة الثالثة (Q4 2026):</span>{' '}
                  إعدادات المنصة، التقارير والتصدير
                </p>
                <p>
                  <span className="font-medium text-tertiary-container">المرحلة الرابعة (2027):</span>{' '}
                  لوحة تحليلات متقدمة وتكاملات إضافية
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageShell>
    </AppShell>
  )
}
