'use client'

import { useState } from 'react'
import AppShell from '@/components/layout/AppShell'
import PageShell from '@/components/layout/PageShell'
import GlassCard from '@/components/ui/GlassCard'
import GradientButton from '@/components/ui/GradientButton'

interface Template {
  id: string
  title: string
  category: string
  description: string
  icon: string
  accent: 'cyan' | 'violet' | 'emerald' | null
  preview: string
}

const templates: Template[] = [
  {
    id: 'instagram-post',
    title: 'منشور Instagram',
    category: 'سوشيال ميديا',
    description: 'قالب منشور احترافي مناسب لـ Instagram مع مساحة للهاشتاقات.',
    icon: 'photo_camera',
    accent: 'cyan',
    preview: `✨ [العنوان الرئيسي هنا]

[الفقرة الأولى: ابدأ بخطاف يجذب الانتباه ويشجع على المتابعة]

[الفقرة الثانية: قدّم قيمة حقيقية لجمهورك في هذا السطر]

[الفقرة الثالثة: اختتم بدعوة واضحة للعمل — CTA]

#تسويق_رقمي #سوشيال_ميديا #محتوى_عربي #[إضافة_هاشتاق]`,
  },
  {
    id: 'linkedin-article',
    title: 'مقال LinkedIn',
    category: 'سوشيال ميديا',
    description: 'هيكل مقال احترافي مناسب للمحتوى المهني على LinkedIn.',
    icon: 'work',
    accent: 'violet',
    preview: `[عنوان المقال: يجب أن يكون مثيراً للفضول]

في [السياق أو الموقف]، تعلّمت درساً قيّماً:

[الدرس الرئيسي في سطر واحد واضح]

---

لماذا هذا مهم؟

[الفقرة الأولى: سياق المشكلة]

[الفقرة الثانية: الحل أو الرؤية]

[الفقرة الثالثة: التطبيق العملي]

ما رأيك؟ شاركني تجربتك في التعليقات 👇`,
  },
  {
    id: 'campaign-brief',
    title: 'موجز الحملة التسويقية',
    category: 'تخطيط',
    description: 'نموذج شامل لتوثيق وتخطيط الحملات التسويقية.',
    icon: 'campaign',
    accent: 'emerald',
    preview: `اسم الحملة: _______________
التاريخ: من ___ إلى ___

الهدف الرئيسي:
□ زيادة الوعي  □ توليد العملاء  □ المبيعات  □ الاحتفاظ

الجمهور المستهدف:
العمر: ___ | الجنس: ___ | الاهتمامات: ___

المنصات: □ Instagram  □ Facebook  □ LinkedIn  □ Google

الميزانية الإجمالية: ___ ريال
توزيع الميزانية:
- إعلانات: ___%
- محتوى: ___%
- إدارة: ___%

مؤشرات النجاح (KPIs):
1. _______________
2. _______________`,
  },
  {
    id: 'persona-profile',
    title: 'ملف الشخصية',
    category: 'استراتيجية',
    description: 'نموذج تفصيلي لتوثيق شخصية جمهورك المستهدف.',
    icon: 'person_search',
    accent: 'cyan',
    preview: `اسم الشخصية: [اسم وهمي يعكس الشخصية]
العمر: ___ | المهنة: ___
المدينة: _______________

الخلفية:
[وصف مختصر للحياة اليومية والسياق المهني]

الأهداف:
• _______________
• _______________

التحديات:
• _______________
• _______________

المنصات المفضلة:
□ Instagram  □ LinkedIn  □ Twitter  □ YouTube

رسالة تسويقية مناسبة:
"_______________"`,
  },
  {
    id: 'brand-voice-guide',
    title: 'دليل الصوت التجاري',
    category: 'العلامة التجارية',
    description: 'وثيقة توجيهية لتوحيد أسلوب التواصل لعلامتك التجارية.',
    icon: 'record_voice_over',
    accent: 'violet',
    preview: `اسم العلامة التجارية: _______________
الشعار: _______________

الشخصية: [مثال: ودود، خبير، ملهم]

نبرة الصوت:
• رسمي ←————→ غير رسمي  [علّم المستوى]
• جاد  ←————→ مرح       [علّم المستوى]

نقول دائماً:
✓ _______________
✓ _______________

لا نقول أبداً:
✗ _______________
✗ _______________

مثال على منشور يعكس صوتنا:
"_______________"`,
  },
  {
    id: 'content-calendar',
    title: 'تقويم المحتوى',
    category: 'تخطيط',
    description: 'جدول أسبوعي منظم لتخطيط ونشر المحتوى.',
    icon: 'calendar_month',
    accent: 'emerald',
    preview: `الأسبوع: من ___ إلى ___
الهدف الأسبوعي: _______________

السبت:
• Instagram: _______________
• LinkedIn: _______________

الأحد:
• Stories: _______________

الاثنين:
• منشور تعليمي: _______________

الثلاثاء:
• محتوى تفاعلي: _______________

الأربعاء:
• قصص نجاح / شهادات: _______________

الخميس:
• خلف الكواليس: _______________

الجمعة:
• ملخص الأسبوع: _______________`,
  },
]

export default function TemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const [copied, setCopied] = useState(false)

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <AppShell>
      <PageShell
        title="مكتبة القوالب"
        subtitle="قوالب جاهزة للتخصيص والاستخدام الفوري"
      >
        {/* Templates Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <GlassCard key={template.id} accent={template.accent} hover>
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-fixed-dim/10">
                  <span className="material-symbols-outlined text-2xl text-primary-fixed-dim">
                    {template.icon}
                  </span>
                </div>
                <span className="rounded-lg border border-outline-variant/40 px-2.5 py-0.5 text-xs text-on-surface-variant">
                  {template.category}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-on-surface">
                {template.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-on-surface-variant">
                {template.description}
              </p>
              <button
                type="button"
                onClick={() => setSelectedTemplate(template)}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary-fixed-dim hover:underline"
              >
                <span className="material-symbols-outlined text-base">visibility</span>
                معاينة القالب
              </button>
            </GlassCard>
          ))}
        </div>

        {/* Preview Modal */}
        {selectedTemplate && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTemplate(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" aria-hidden="true" />

            {/* Modal */}
            <div
              className="relative z-10 w-full max-w-2xl glass rounded-2xl p-8 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-fixed-dim/10">
                    <span className="material-symbols-outlined text-2xl text-primary-fixed-dim">
                      {selectedTemplate.icon}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-on-surface">
                      {selectedTemplate.title}
                    </h2>
                    <p className="text-sm text-on-surface-variant">
                      {selectedTemplate.category}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedTemplate(null)}
                  className="rounded-lg p-2 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              {/* Preview Content */}
              <div className="mb-6 rounded-xl bg-surface-container-low p-5">
                <pre className="whitespace-pre-wrap font-arabic text-sm leading-loose text-on-surface">
                  {selectedTemplate.preview}
                </pre>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => handleCopy(selectedTemplate.preview)}
                  className="inline-flex items-center gap-2 rounded-xl border border-outline-variant/40 bg-surface-container/50 px-5 py-2.5 text-sm font-medium text-on-surface transition-all hover:border-primary-fixed-dim/50 hover:text-primary-fixed-dim"
                >
                  <span className="material-symbols-outlined text-base">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  {copied ? 'تم النسخ!' : 'نسخ القالب'}
                </button>
                <GradientButton
                  label="استخدام القالب"
                  variant="primary"
                  size="md"
                  onClick={() => setSelectedTemplate(null)}
                />
              </div>
            </div>
          </div>
        )}
      </PageShell>
    </AppShell>
  )
}
