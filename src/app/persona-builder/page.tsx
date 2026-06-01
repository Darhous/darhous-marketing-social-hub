'use client'

import { useState } from 'react'
import AppShell from '@/components/layout/AppShell'
import PageShell from '@/components/layout/PageShell'
import GlassCard from '@/components/ui/GlassCard'
import GradientButton from '@/components/ui/GradientButton'

interface PersonaData {
  name: string
  age: string
  location: string
  jobTitle: string
  goals: string
  painPoints: string
  platforms: string[]
}

const platformOptions = [
  { value: 'instagram', label: 'Instagram', icon: 'photo_camera' },
  { value: 'linkedin', label: 'LinkedIn', icon: 'work' },
  { value: 'facebook', label: 'Facebook', icon: 'thumb_up' },
  { value: 'tiktok', label: 'TikTok', icon: 'music_note' },
  { value: 'twitter', label: 'X (Twitter)', icon: 'close' },
  { value: 'youtube', label: 'YouTube', icon: 'play_circle' },
  { value: 'snapchat', label: 'Snapchat', icon: 'camera_alt' },
  { value: 'whatsapp', label: 'WhatsApp', icon: 'chat' },
]

const inputClass =
  'w-full rounded-xl border border-outline-variant/40 bg-surface-container px-4 py-3 text-sm text-on-surface placeholder-on-surface-variant/50 transition-colors focus:border-primary-fixed-dim focus:outline-none'

const labelClass = 'mb-1.5 block text-sm font-medium text-on-surface-variant'

export default function PersonaBuilderPage() {
  const [persona, setPersona] = useState<PersonaData>({
    name: '',
    age: '',
    location: '',
    jobTitle: '',
    goals: '',
    painPoints: '',
    platforms: [],
  })
  const [saved, setSaved] = useState(false)

  const update = (field: keyof PersonaData, value: string) => {
    setPersona((prev) => ({ ...prev, [field]: value }))
    setSaved(false)
  }

  const togglePlatform = (value: string) => {
    setPersona((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(value)
        ? prev.platforms.filter((p) => p !== value)
        : [...prev.platforms, value],
    }))
    setSaved(false)
  }

  const handleSave = () => {
    setSaved(true)
  }

  const goalsLines = persona.goals
    .split('\n')
    .filter((l) => l.trim())
    .slice(0, 3)

  const painLines = persona.painPoints
    .split('\n')
    .filter((l) => l.trim())
    .slice(0, 3)

  const selectedPlatforms = platformOptions.filter((p) =>
    persona.platforms.includes(p.value)
  )

  const avatarLetter = persona.name ? persona.name[0] : '؟'

  return (
    <AppShell>
      <PageShell
        title="باني الشخصية"
        subtitle="أنشئ شخصية جمهورك المستهدف بشكل مفصّل"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form — Right side (RTL) */}
          <div className="order-1">
            <GlassCard accent="cyan">
              <h2 className="mb-6 text-lg font-bold text-on-surface">
                معلومات الشخصية
              </h2>
              <div className="space-y-5">
                {/* Basic info */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>الاسم</label>
                    <input
                      type="text"
                      placeholder="مثال: سارة الأحمدي"
                      value={persona.name}
                      onChange={(e) => update('name', e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>العمر</label>
                    <input
                      type="text"
                      placeholder="مثال: ٢٨ سنة"
                      value={persona.age}
                      onChange={(e) => update('age', e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>المدينة / الدولة</label>
                  <input
                    type="text"
                    placeholder="مثال: الرياض، المملكة العربية السعودية"
                    value={persona.location}
                    onChange={(e) => update('location', e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>المسمى الوظيفي</label>
                  <input
                    type="text"
                    placeholder="مثال: مديرة تسويق، رائد أعمال..."
                    value={persona.jobTitle}
                    onChange={(e) => update('jobTitle', e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>الأهداف (سطر لكل هدف)</label>
                  <textarea
                    rows={4}
                    placeholder={
                      'مثال:\nتطوير مهاراتها التسويقية\nبناء علامة تجارية شخصية\nزيادة دخلها الشهري'
                    }
                    value={persona.goals}
                    onChange={(e) => update('goals', e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>نقاط الألم (سطر لكل نقطة)</label>
                  <textarea
                    rows={4}
                    placeholder={
                      'مثال:\nنقص الوقت لتعلم أدوات جديدة\nصعوبة إيجاد محتوى عربي متخصص\nضعف الميزانية التسويقية'
                    }
                    value={persona.painPoints}
                    onChange={(e) => update('painPoints', e.target.value)}
                    className={inputClass}
                  />
                </div>

                {/* Platforms */}
                <div>
                  <label className={labelClass}>المنصات المفضلة</label>
                  <div className="flex flex-wrap gap-2">
                    {platformOptions.map((p) => {
                      const isSelected = persona.platforms.includes(p.value)
                      return (
                        <button
                          key={p.value}
                          type="button"
                          onClick={() => togglePlatform(p.value)}
                          className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                            isSelected
                              ? 'border-primary-fixed-dim bg-primary-fixed-dim/10 text-primary-fixed-dim'
                              : 'border-outline-variant/40 bg-surface-container text-on-surface-variant hover:border-primary-fixed-dim/40'
                          }`}
                        >
                          <span className="material-symbols-outlined text-sm">{p.icon}</span>
                          {p.label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Save button */}
                <div className="pt-2">
                  <GradientButton
                    label={saved ? 'تم الحفظ ✓' : 'حفظ الشخصية'}
                    variant="primary"
                    size="md"
                    onClick={handleSave}
                    disabled={!persona.name}
                    className={saved ? 'opacity-80' : ''}
                  />
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Preview Card — Left side (RTL) */}
          <div className="order-2">
            <div className="sticky top-24">
              <h2 className="mb-4 text-lg font-semibold text-on-surface">
                معاينة الشخصية
              </h2>
              <GlassCard accent="violet" hover={false}>
                {/* Avatar & basic */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full gradient-primary text-2xl font-bold text-white shadow-glow-cyan">
                    {avatarLetter}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-on-surface">
                      {persona.name || 'اسم الشخصية'}
                    </h3>
                    <p className="text-sm text-on-surface-variant">
                      {persona.jobTitle || 'المسمى الوظيفي'}
                    </p>
                    <div className="mt-1 flex flex-wrap gap-2 text-xs text-on-surface-variant">
                      {persona.age && (
                        <span className="flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-xs">cake</span>
                          {persona.age}
                        </span>
                      )}
                      {persona.location && (
                        <span className="flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-xs">location_on</span>
                          {persona.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  {/* Goals */}
                  <div>
                    <h4 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-tertiary-container">
                      <span className="material-symbols-outlined text-base">emoji_objects</span>
                      الأهداف
                    </h4>
                    {goalsLines.length > 0 ? (
                      <ul className="space-y-1.5">
                        {goalsLines.map((goal, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-on-surface-variant">
                            <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-tertiary-container" />
                            {goal}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-on-surface-variant/50">لم تُدخل أهدافاً بعد</p>
                    )}
                  </div>

                  {/* Pain points */}
                  <div>
                    <h4 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-error">
                      <span className="material-symbols-outlined text-base">warning</span>
                      نقاط الألم
                    </h4>
                    {painLines.length > 0 ? (
                      <ul className="space-y-1.5">
                        {painLines.map((pain, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-on-surface-variant">
                            <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-error/60" />
                            {pain}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-on-surface-variant/50">لم تُدخل نقاط ألم بعد</p>
                    )}
                  </div>

                  {/* Platforms */}
                  <div>
                    <h4 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-secondary">
                      <span className="material-symbols-outlined text-base">hub</span>
                      المنصات المفضلة
                    </h4>
                    {selectedPlatforms.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {selectedPlatforms.map((p) => (
                          <span
                            key={p.value}
                            className="flex items-center gap-1 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs text-secondary"
                          >
                            <span className="material-symbols-outlined text-xs">{p.icon}</span>
                            {p.label}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-on-surface-variant/50">لم تختر منصات بعد</p>
                    )}
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </PageShell>
    </AppShell>
  )
}
