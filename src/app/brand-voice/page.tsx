'use client'

import { useState } from 'react'
import AppShell from '@/components/layout/AppShell'
import PageShell from '@/components/layout/PageShell'
import GlassCard from '@/components/ui/GlassCard'
import GradientButton from '@/components/ui/GradientButton'

interface VoiceTrait {
  id: string
  rightLabel: string
  leftLabel: string
  value: number
}

interface BrandData {
  name: string
  tagline: string
  personalityTags: string[]
  traits: VoiceTrait[]
  doList: string
  dontList: string
  examplePost: string
}

const personalityTagOptions = [
  'ودود', 'احترافي', 'ملهم', 'مرح', 'موثوق', 'مبتكر',
  'جريء', 'هادئ', 'حماسي', 'واضح', 'إنساني', 'خبير',
]

const initialTraits: VoiceTrait[] = [
  { id: 'formality', rightLabel: 'رسمي', leftLabel: 'غير رسمي', value: 50 },
  { id: 'seriousness', rightLabel: 'جاد', leftLabel: 'مرح', value: 40 },
  { id: 'complexity', rightLabel: 'مبسّط', leftLabel: 'متخصص', value: 60 },
  { id: 'energy', rightLabel: 'هادئ', leftLabel: 'حماسي', value: 55 },
]

const inputClass =
  'w-full rounded-xl border border-outline-variant/40 bg-surface-container px-4 py-3 text-sm text-on-surface placeholder-on-surface-variant/50 transition-colors focus:border-primary-fixed-dim focus:outline-none'

const labelClass = 'mb-1.5 block text-sm font-medium text-on-surface-variant'

export default function BrandVoicePage() {
  const [brand, setBrand] = useState<BrandData>({
    name: '',
    tagline: '',
    personalityTags: [],
    traits: initialTraits,
    doList: '',
    dontList: '',
    examplePost: '',
  })

  const updateField = (field: keyof BrandData, value: string) => {
    setBrand((prev) => ({ ...prev, [field]: value }))
  }

  const toggleTag = (tag: string) => {
    setBrand((prev) => ({
      ...prev,
      personalityTags: prev.personalityTags.includes(tag)
        ? prev.personalityTags.filter((t) => t !== tag)
        : prev.personalityTags.length < 5
        ? [...prev.personalityTags, tag]
        : prev.personalityTags,
    }))
  }

  const updateTrait = (id: string, value: number) => {
    setBrand((prev) => ({
      ...prev,
      traits: prev.traits.map((t) => (t.id === id ? { ...t, value } : t)),
    }))
  }

  const doLines = brand.doList
    .split('\n')
    .filter((l) => l.trim())
    .slice(0, 5)

  const dontLines = brand.dontList
    .split('\n')
    .filter((l) => l.trim())
    .slice(0, 5)

  const formalityTrait = brand.traits.find((t) => t.id === 'formality')
  const seriousnessTrait = brand.traits.find((t) => t.id === 'seriousness')

  return (
    <AppShell>
      <PageShell
        title="باني الصوت التجاري"
        subtitle="حدّد شخصية علامتك التجارية وأسلوب تواصلها"
      >
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form — 3 columns */}
          <div className="space-y-6 lg:col-span-3">
            {/* Brand Basics */}
            <GlassCard accent="cyan">
              <h2 className="mb-5 text-lg font-bold text-on-surface">
                <span className="material-symbols-outlined ml-2 align-middle text-xl text-primary-fixed-dim">
                  business
                </span>
                أساسيات العلامة التجارية
              </h2>
              <div className="space-y-4">
                <div>
                  <label className={labelClass}>اسم العلامة التجارية</label>
                  <input
                    type="text"
                    placeholder="مثال: درهوس"
                    value={brand.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>الشعار / الرسالة الرئيسية</label>
                  <input
                    type="text"
                    placeholder="مثال: نُبسّط التسويق للمحترفين العرب"
                    value={brand.tagline}
                    onChange={(e) => updateField('tagline', e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </GlassCard>

            {/* Personality Tags */}
            <GlassCard accent="violet">
              <h2 className="mb-2 text-lg font-bold text-on-surface">
                <span className="material-symbols-outlined ml-2 align-middle text-xl text-secondary">
                  local_offer
                </span>
                الشخصية (اختر حتى ٥)
              </h2>
              <p className="mb-4 text-xs text-on-surface-variant">
                {brand.personalityTags.length}/٥ مختارة
              </p>
              <div className="flex flex-wrap gap-2">
                {personalityTagOptions.map((tag) => {
                  const isSelected = brand.personalityTags.includes(tag)
                  const atLimit =
                    brand.personalityTags.length >= 5 && !isSelected
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      disabled={atLimit}
                      className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
                        isSelected
                          ? 'border-secondary bg-secondary/15 text-secondary'
                          : atLimit
                          ? 'cursor-not-allowed border-outline-variant/20 text-on-surface-variant/30'
                          : 'border-outline-variant/40 text-on-surface-variant hover:border-secondary/50 hover:text-on-surface'
                      }`}
                    >
                      {tag}
                    </button>
                  )
                })}
              </div>
            </GlassCard>

            {/* Voice Trait Sliders */}
            <GlassCard accent="emerald">
              <h2 className="mb-5 text-lg font-bold text-on-surface">
                <span className="material-symbols-outlined ml-2 align-middle text-xl text-tertiary-container">
                  tune
                </span>
                صفات الصوت
              </h2>
              <div className="space-y-6">
                {brand.traits.map((trait) => (
                  <div key={trait.id}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-on-surface-variant">{trait.leftLabel}</span>
                      <span className="text-on-surface-variant">{trait.rightLabel}</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={trait.value}
                      onChange={(e) => updateTrait(trait.id, parseInt(e.target.value))}
                      className="h-2 w-full cursor-pointer appearance-none rounded-full bg-surface-container-high accent-primary-fixed-dim"
                    />
                    <div className="mt-1 flex justify-center">
                      <span className="text-xs text-on-surface-variant/60">
                        {trait.value < 35 ? trait.rightLabel : trait.value > 65 ? trait.leftLabel : 'متوازن'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Do / Don't Lists */}
            <GlassCard>
              <h2 className="mb-5 text-lg font-bold text-on-surface">
                <span className="material-symbols-outlined ml-2 align-middle text-xl text-primary-fixed-dim">
                  rule
                </span>
                قواعد الأسلوب
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={`${labelClass} text-tertiary-container`}>
                    ✓ نقول دائماً (سطر لكل قاعدة)
                  </label>
                  <textarea
                    rows={5}
                    placeholder={'نستخدم لغة عربية واضحة\nنشجّع ونُلهم\nنقدم قيمة عملية'}
                    value={brand.doList}
                    onChange={(e) => updateField('doList', e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={`${labelClass} text-error`}>
                    ✗ لا نقول أبداً (سطر لكل قاعدة)
                  </label>
                  <textarea
                    rows={5}
                    placeholder={'لا نستخدم مصطلحات معقدة\nلا نقارن بالمنافسين\nلا نبالغ في الوعود'}
                    value={brand.dontList}
                    onChange={(e) => updateField('dontList', e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            </GlassCard>

            {/* Example Post */}
            <GlassCard>
              <h2 className="mb-4 text-lg font-bold text-on-surface">
                <span className="material-symbols-outlined ml-2 align-middle text-xl text-secondary">
                  edit_note
                </span>
                مثال على منشور يعكس صوتك
              </h2>
              <textarea
                rows={5}
                placeholder="اكتب هنا مثالاً على منشور يُجسّد صوت علامتك التجارية..."
                value={brand.examplePost}
                onChange={(e) => updateField('examplePost', e.target.value)}
                className={inputClass}
              />
            </GlassCard>

            <div>
              <GradientButton
                label="حفظ دليل الصوت التجاري"
                variant="primary"
                size="lg"
                disabled={!brand.name}
              />
            </div>
          </div>

          {/* Preview Panel — 2 columns */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-5">
              <h2 className="text-lg font-semibold text-on-surface">
                معاينة الدليل
              </h2>

              {/* Brand card */}
              <GlassCard accent="cyan" hover={false}>
                <div className="mb-4 text-center">
                  <h3 className="text-2xl font-bold text-gradient">
                    {brand.name || 'اسم العلامة'}
                  </h3>
                  {brand.tagline && (
                    <p className="mt-1 text-sm text-on-surface-variant">
                      {brand.tagline}
                    </p>
                  )}
                </div>

                {/* Personality tags */}
                {brand.personalityTags.length > 0 && (
                  <div className="mb-4 flex flex-wrap justify-center gap-2">
                    {brand.personalityTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary/10 border border-secondary/30 px-3 py-1 text-xs text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Trait summary */}
                <div className="mb-4 space-y-2">
                  {formalityTrait && (
                    <div className="text-xs text-on-surface-variant">
                      الأسلوب:{' '}
                      <span className="text-on-surface">
                        {formalityTrait.value < 35
                          ? 'رسمي'
                          : formalityTrait.value > 65
                          ? 'غير رسمي'
                          : 'متوازن بين الرسمي وغير الرسمي'}
                      </span>
                    </div>
                  )}
                  {seriousnessTrait && (
                    <div className="text-xs text-on-surface-variant">
                      النبرة:{' '}
                      <span className="text-on-surface">
                        {seriousnessTrait.value < 35
                          ? 'جادة'
                          : seriousnessTrait.value > 65
                          ? 'مرحة'
                          : 'متوازنة'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Do/Don't preview */}
                {(doLines.length > 0 || dontLines.length > 0) && (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {doLines.length > 0 && (
                      <div>
                        <p className="mb-1.5 text-xs font-medium text-tertiary-container">نقول ✓</p>
                        <ul className="space-y-1">
                          {doLines.map((line, i) => (
                            <li key={i} className="text-xs text-on-surface-variant">
                              • {line}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {dontLines.length > 0 && (
                      <div>
                        <p className="mb-1.5 text-xs font-medium text-error">لا نقول ✗</p>
                        <ul className="space-y-1">
                          {dontLines.map((line, i) => (
                            <li key={i} className="text-xs text-on-surface-variant">
                              • {line}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </GlassCard>

              {/* Example post preview */}
              {brand.examplePost && (
                <GlassCard accent="violet" hover={false}>
                  <p className="mb-2 text-xs font-medium text-on-surface-variant">
                    مثال على المنشور
                  </p>
                  <p className="text-sm leading-relaxed text-on-surface whitespace-pre-line">
                    {brand.examplePost}
                  </p>
                </GlassCard>
              )}
            </div>
          </div>
        </div>
      </PageShell>
    </AppShell>
  )
}
