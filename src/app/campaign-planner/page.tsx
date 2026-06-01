'use client'

import { useState } from 'react'
import AppShell from '@/components/layout/AppShell'
import PageShell from '@/components/layout/PageShell'
import GlassCard from '@/components/ui/GlassCard'
import GradientButton from '@/components/ui/GradientButton'

interface CampaignData {
  // Step 1: Goals
  goalType: string
  goalDescription: string
  kpis: string

  // Step 2: Audience
  ageRange: string
  gender: string
  location: string
  interests: string

  // Step 3: Platforms
  platforms: string[]

  // Step 4: Budget
  totalBudget: string
  adsPercentage: string
  contentPercentage: string

  // Step 5: Timeline
  startDate: string
  endDate: string
  frequency: string
}

const steps = [
  { id: 1, label: 'الأهداف', icon: 'flag' },
  { id: 2, label: 'الجمهور', icon: 'groups' },
  { id: 3, label: 'المنصات', icon: 'hub' },
  { id: 4, label: 'الميزانية', icon: 'payments' },
  { id: 5, label: 'الجدول الزمني', icon: 'calendar_month' },
]

const goalOptions = [
  { value: 'awareness', label: 'زيادة الوعي بالعلامة التجارية' },
  { value: 'leads', label: 'توليد عملاء محتملين' },
  { value: 'sales', label: 'زيادة المبيعات' },
  { value: 'engagement', label: 'رفع معدل التفاعل' },
  { value: 'retention', label: 'الاحتفاظ بالعملاء' },
]

const platformOptions = [
  { value: 'instagram', label: 'Instagram', icon: 'photo_camera' },
  { value: 'facebook', label: 'Facebook', icon: 'thumb_up' },
  { value: 'linkedin', label: 'LinkedIn', icon: 'work' },
  { value: 'tiktok', label: 'TikTok', icon: 'music_note' },
  { value: 'twitter', label: 'X (Twitter)', icon: 'close' },
  { value: 'youtube', label: 'YouTube', icon: 'play_circle' },
]

const frequencyOptions = [
  { value: 'daily', label: 'يومي' },
  { value: '3weekly', label: '٣ مرات أسبوعياً' },
  { value: 'weekly', label: 'أسبوعي' },
  { value: 'biweekly', label: 'كل أسبوعين' },
]

const inputClass =
  'w-full rounded-xl border border-outline-variant/40 bg-surface-container px-4 py-3 text-sm text-on-surface placeholder-on-surface-variant/50 transition-colors focus:border-primary-fixed-dim focus:outline-none'

const labelClass = 'mb-1.5 block text-sm font-medium text-on-surface-variant'

export default function CampaignPlannerPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [data, setData] = useState<CampaignData>({
    goalType: '',
    goalDescription: '',
    kpis: '',
    ageRange: '',
    gender: '',
    location: '',
    interests: '',
    platforms: [],
    totalBudget: '',
    adsPercentage: '60',
    contentPercentage: '30',
    startDate: '',
    endDate: '',
    frequency: '',
  })

  const update = (field: keyof CampaignData, value: string | string[]) => {
    setData((prev) => ({ ...prev, [field]: value }))
  }

  const togglePlatform = (value: string) => {
    setData((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(value)
        ? prev.platforms.filter((p) => p !== value)
        : [...prev.platforms, value],
    }))
  }

  const canProceed = (): boolean => {
    if (currentStep === 1) return !!data.goalType
    if (currentStep === 2) return !!data.ageRange && !!data.location
    if (currentStep === 3) return data.platforms.length > 0
    if (currentStep === 4) return !!data.totalBudget
    if (currentStep === 5) return !!data.startDate && !!data.endDate
    return true
  }

  const goalLabel =
    goalOptions.find((g) => g.value === data.goalType)?.label ?? data.goalType

  const platformLabels = data.platforms
    .map((p) => platformOptions.find((o) => o.value === p)?.label ?? p)
    .join('، ')

  const frequencyLabel =
    frequencyOptions.find((f) => f.value === data.frequency)?.label ?? data.frequency

  const managementPercentage =
    100 - parseInt(data.adsPercentage || '0') - parseInt(data.contentPercentage || '0')

  return (
    <AppShell>
      <PageShell
        title="مخطط الحملات"
        subtitle="خطّط حملتك التسويقية خطوة بخطوة"
      >
        {/* Step indicator */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex min-w-max items-center gap-0">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex items-center">
                <button
                  type="button"
                  onClick={() => currentStep > step.id && setCurrentStep(step.id)}
                  className={`flex flex-col items-center gap-1.5 px-3 ${
                    currentStep > step.id ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 ${
                      step.id === currentStep
                        ? 'gradient-primary text-white shadow-glow-cyan'
                        : step.id < currentStep
                        ? 'bg-tertiary-container/20 text-tertiary-container'
                        : 'border border-outline-variant/50 bg-surface-container text-on-surface-variant'
                    }`}
                  >
                    {step.id < currentStep ? (
                      <span className="material-symbols-outlined text-base">check</span>
                    ) : (
                      <span className="material-symbols-outlined text-base">{step.icon}</span>
                    )}
                  </div>
                  <span
                    className={`text-xs ${
                      step.id === currentStep
                        ? 'font-semibold text-primary-fixed-dim'
                        : 'text-on-surface-variant'
                    }`}
                  >
                    {step.label}
                  </span>
                </button>
                {idx < steps.length - 1 && (
                  <div
                    className={`h-px w-8 transition-all duration-300 ${
                      step.id < currentStep
                        ? 'bg-primary-fixed-dim/50'
                        : 'bg-outline-variant/40'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl">
          {/* Step 1: Goals */}
          {currentStep === 1 && (
            <GlassCard accent="cyan">
              <h2 className="mb-6 text-xl font-bold text-on-surface">
                <span className="material-symbols-outlined ml-2 align-middle text-2xl text-primary-fixed-dim">
                  flag
                </span>
                أهداف الحملة
              </h2>
              <div className="space-y-5">
                <div>
                  <label className={labelClass}>نوع الهدف الرئيسي *</label>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {goalOptions.map((goal) => (
                      <button
                        key={goal.value}
                        type="button"
                        onClick={() => update('goalType', goal.value)}
                        className={`rounded-xl border p-3 text-right text-sm transition-all ${
                          data.goalType === goal.value
                            ? 'border-primary-fixed-dim bg-primary-fixed-dim/10 text-primary-fixed-dim'
                            : 'border-outline-variant/40 bg-surface-container/50 text-on-surface-variant hover:border-primary-fixed-dim/40'
                        }`}
                      >
                        {goal.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>وصف الهدف (اختياري)</label>
                  <textarea
                    rows={3}
                    placeholder="اشرح هدف حملتك بمزيد من التفصيل..."
                    value={data.goalDescription}
                    onChange={(e) => update('goalDescription', e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>مؤشرات النجاح (KPIs)</label>
                  <input
                    type="text"
                    placeholder="مثال: ١٠٠٠ متابع جديد، ٥٠ عميل محتمل..."
                    value={data.kpis}
                    onChange={(e) => update('kpis', e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </GlassCard>
          )}

          {/* Step 2: Audience */}
          {currentStep === 2 && (
            <GlassCard accent="violet">
              <h2 className="mb-6 text-xl font-bold text-on-surface">
                <span className="material-symbols-outlined ml-2 align-middle text-2xl text-secondary">
                  groups
                </span>
                الجمهور المستهدف
              </h2>
              <div className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>الفئة العمرية *</label>
                    <select
                      value={data.ageRange}
                      onChange={(e) => update('ageRange', e.target.value)}
                      className={inputClass}
                    >
                      <option value="">اختر الفئة العمرية</option>
                      <option value="18-24">١٨ - ٢٤ سنة</option>
                      <option value="25-34">٢٥ - ٣٤ سنة</option>
                      <option value="35-44">٣٥ - ٤٤ سنة</option>
                      <option value="45+">٤٥ سنة فأكثر</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>الجنس</label>
                    <select
                      value={data.gender}
                      onChange={(e) => update('gender', e.target.value)}
                      className={inputClass}
                    >
                      <option value="">الكل</option>
                      <option value="male">ذكر</option>
                      <option value="female">أنثى</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelClass}>الموقع الجغرافي *</label>
                  <input
                    type="text"
                    placeholder="مثال: المملكة العربية السعودية، الإمارات، مصر..."
                    value={data.location}
                    onChange={(e) => update('location', e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>الاهتمامات</label>
                  <input
                    type="text"
                    placeholder="مثال: ريادة الأعمال، التقنية، التسويق الرقمي..."
                    value={data.interests}
                    onChange={(e) => update('interests', e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </GlassCard>
          )}

          {/* Step 3: Platforms */}
          {currentStep === 3 && (
            <GlassCard accent="emerald">
              <h2 className="mb-6 text-xl font-bold text-on-surface">
                <span className="material-symbols-outlined ml-2 align-middle text-2xl text-tertiary-container">
                  hub
                </span>
                المنصات المستهدفة
              </h2>
              <p className="mb-5 text-sm text-on-surface-variant">
                اختر المنصات التي ستنشر عليها حملتك (يمكنك اختيار أكثر من منصة) *
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {platformOptions.map((platform) => {
                  const isSelected = data.platforms.includes(platform.value)
                  return (
                    <button
                      key={platform.value}
                      type="button"
                      onClick={() => togglePlatform(platform.value)}
                      className={`flex flex-col items-center gap-2 rounded-xl border p-4 transition-all ${
                        isSelected
                          ? 'border-primary-fixed-dim bg-primary-fixed-dim/10 text-primary-fixed-dim'
                          : 'border-outline-variant/40 bg-surface-container/50 text-on-surface-variant hover:border-primary-fixed-dim/40'
                      }`}
                    >
                      <span className="material-symbols-outlined text-2xl">
                        {platform.icon}
                      </span>
                      <span className="text-sm font-medium">{platform.label}</span>
                      {isSelected && (
                        <span className="material-symbols-outlined text-base text-primary-fixed-dim">
                          check_circle
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
            </GlassCard>
          )}

          {/* Step 4: Budget */}
          {currentStep === 4 && (
            <GlassCard accent="cyan">
              <h2 className="mb-6 text-xl font-bold text-on-surface">
                <span className="material-symbols-outlined ml-2 align-middle text-2xl text-primary-fixed-dim">
                  payments
                </span>
                الميزانية
              </h2>
              <div className="space-y-5">
                <div>
                  <label className={labelClass}>الميزانية الإجمالية (بالريال السعودي) *</label>
                  <input
                    type="number"
                    placeholder="مثال: ٥٠٠٠"
                    value={data.totalBudget}
                    onChange={(e) => update('totalBudget', e.target.value)}
                    className={inputClass}
                    min="0"
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    توزيع الميزانية — الإعلانات المدفوعة: {data.adsPercentage}٪
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={data.adsPercentage}
                    onChange={(e) => update('adsPercentage', e.target.value)}
                    className="h-2 w-full cursor-pointer appearance-none rounded-full bg-surface-container-high accent-primary-fixed-dim"
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    إنتاج المحتوى: {data.contentPercentage}٪
                  </label>
                  <input
                    type="range"
                    min="0"
                    max={100 - parseInt(data.adsPercentage || '0')}
                    value={data.contentPercentage}
                    onChange={(e) => update('contentPercentage', e.target.value)}
                    className="h-2 w-full cursor-pointer appearance-none rounded-full bg-surface-container-high accent-secondary"
                  />
                </div>
                {data.totalBudget && (
                  <div className="rounded-xl bg-surface-container-low p-4">
                    <p className="mb-2 text-sm font-medium text-on-surface">ملخص توزيع الميزانية</p>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant">الإعلانات المدفوعة</span>
                        <span className="font-medium text-primary-fixed-dim">
                          {Math.round((parseInt(data.adsPercentage) / 100) * parseFloat(data.totalBudget))} ريال
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant">إنتاج المحتوى</span>
                        <span className="font-medium text-secondary">
                          {Math.round((parseInt(data.contentPercentage) / 100) * parseFloat(data.totalBudget))} ريال
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant">الإدارة والتشغيل</span>
                        <span className="font-medium text-tertiary-container">
                          {Math.round((managementPercentage / 100) * parseFloat(data.totalBudget))} ريال
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </GlassCard>
          )}

          {/* Step 5: Timeline */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <GlassCard accent="violet">
                <h2 className="mb-6 text-xl font-bold text-on-surface">
                  <span className="material-symbols-outlined ml-2 align-middle text-2xl text-secondary">
                    calendar_month
                  </span>
                  الجدول الزمني
                </h2>
                <div className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>تاريخ البداية *</label>
                      <input
                        type="date"
                        value={data.startDate}
                        onChange={(e) => update('startDate', e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>تاريخ النهاية *</label>
                      <input
                        type="date"
                        value={data.endDate}
                        onChange={(e) => update('endDate', e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>تكرار النشر</label>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {frequencyOptions.map((freq) => (
                        <button
                          key={freq.value}
                          type="button"
                          onClick={() => update('frequency', freq.value)}
                          className={`rounded-xl border p-3 text-right text-sm transition-all ${
                            data.frequency === freq.value
                              ? 'border-primary-fixed-dim bg-primary-fixed-dim/10 text-primary-fixed-dim'
                              : 'border-outline-variant/40 bg-surface-container/50 text-on-surface-variant hover:border-primary-fixed-dim/40'
                          }`}
                        >
                          {freq.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Campaign Summary */}
              <GlassCard accent="emerald">
                <h3 className="mb-5 text-lg font-bold text-on-surface">
                  <span className="material-symbols-outlined ml-2 align-middle text-xl text-tertiary-container">
                    summarize
                  </span>
                  ملخص الحملة
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-surface-container-low p-4">
                    <p className="mb-1 text-xs text-on-surface-variant">الهدف</p>
                    <p className="text-sm font-medium text-on-surface">
                      {goalLabel || '—'}
                    </p>
                  </div>
                  <div className="rounded-xl bg-surface-container-low p-4">
                    <p className="mb-1 text-xs text-on-surface-variant">الجمهور</p>
                    <p className="text-sm font-medium text-on-surface">
                      {data.ageRange && data.location
                        ? `${data.ageRange} • ${data.location}`
                        : '—'}
                    </p>
                  </div>
                  <div className="rounded-xl bg-surface-container-low p-4">
                    <p className="mb-1 text-xs text-on-surface-variant">المنصات</p>
                    <p className="text-sm font-medium text-on-surface">
                      {platformLabels || '—'}
                    </p>
                  </div>
                  <div className="rounded-xl bg-surface-container-low p-4">
                    <p className="mb-1 text-xs text-on-surface-variant">الميزانية</p>
                    <p className="text-sm font-medium text-on-surface">
                      {data.totalBudget ? `${data.totalBudget} ريال` : '—'}
                    </p>
                  </div>
                  <div className="rounded-xl bg-surface-container-low p-4">
                    <p className="mb-1 text-xs text-on-surface-variant">المدة</p>
                    <p className="text-sm font-medium text-on-surface">
                      {data.startDate && data.endDate
                        ? `${data.startDate} — ${data.endDate}`
                        : '—'}
                    </p>
                  </div>
                  <div className="rounded-xl bg-surface-container-low p-4">
                    <p className="mb-1 text-xs text-on-surface-variant">تكرار النشر</p>
                    <p className="text-sm font-medium text-on-surface">
                      {frequencyLabel || '—'}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep((s) => s - 1)}
                className="flex items-center gap-2 rounded-xl border border-outline-variant/40 px-5 py-3 text-sm font-medium text-on-surface transition-all hover:border-primary-fixed-dim/50 hover:text-primary-fixed-dim"
              >
                <span className="material-symbols-outlined text-base">arrow_forward</span>
                السابق
              </button>
            ) : (
              <div />
            )}

            {currentStep < 5 ? (
              <GradientButton
                label="التالي"
                variant="primary"
                size="md"
                onClick={() => setCurrentStep((s) => s + 1)}
                disabled={!canProceed()}
              />
            ) : (
              <GradientButton
                label="حفظ الحملة"
                variant="primary"
                size="md"
                disabled={!canProceed()}
              />
            )}
          </div>
        </div>
      </PageShell>
    </AppShell>
  )
}
