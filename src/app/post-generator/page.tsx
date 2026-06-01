'use client'

import { useState } from 'react'
import AppShell from '@/components/layout/AppShell'
import PageShell from '@/components/layout/PageShell'
import GlassCard from '@/components/ui/GlassCard'
import GradientButton from '@/components/ui/GradientButton'

type Platform = 'instagram' | 'linkedin' | 'facebook'
type Tone = 'professional' | 'casual' | 'inspirational' | 'educational' | 'promotional'
type Length = 'short' | 'medium' | 'long'

interface GeneratorSettings {
  platform: Platform
  topic: string
  tone: Tone
  length: Length
  hashtags: boolean
  emoji: boolean
}

const platforms: { value: Platform; label: string; icon: string; color: string; bgColor: string }[] = [
  {
    value: 'instagram',
    label: 'Instagram',
    icon: 'photo_camera',
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/15 border-pink-500/30',
  },
  {
    value: 'linkedin',
    label: 'LinkedIn',
    icon: 'work',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/15 border-blue-500/30',
  },
  {
    value: 'facebook',
    label: 'Facebook',
    icon: 'thumb_up',
    color: 'text-blue-300',
    bgColor: 'bg-blue-600/15 border-blue-600/30',
  },
]

const toneOptions: { value: Tone; label: string }[] = [
  { value: 'professional', label: 'احترافي' },
  { value: 'casual', label: 'غير رسمي' },
  { value: 'inspirational', label: 'ملهم' },
  { value: 'educational', label: 'تعليمي' },
  { value: 'promotional', label: 'ترويجي' },
]

const lengthOptions: { value: Length; label: string; desc: string }[] = [
  { value: 'short', label: 'قصير', desc: '٣-٥ أسطر' },
  { value: 'medium', label: 'متوسط', desc: '٦-١٠ أسطر' },
  { value: 'long', label: 'طويل', desc: '+١٠ أسطر' },
]

const toneAdjective: Record<Tone, string> = {
  professional: 'بأسلوب احترافي',
  casual: 'بنبرة ودية',
  inspirational: 'بأسلوب ملهم',
  educational: 'بطريقة تعليمية',
  promotional: 'بأسلوب ترويجي',
}

function generatePost(settings: GeneratorSettings): string {
  const { platform, topic, tone, length, hashtags, emoji } = settings
  const toneText = toneAdjective[tone]

  const emojiOpener: Record<Platform, string> = {
    instagram: emoji ? '✨ ' : '',
    linkedin: emoji ? '💡 ' : '',
    facebook: emoji ? '🎯 ' : '',
  }

  const opener = emojiOpener[platform]

  let body = ''

  if (platform === 'instagram') {
    body =
      length === 'short'
        ? `${opener}${topic}\n\nهذا هو السر الذي يجب أن تعرفه.\n\nشارك هذا مع من يحتاجه! ${emoji ? '👇' : ''}`
        : length === 'medium'
        ? `${opener}هل تعرف ما هو أكثر شيء يؤثر على نجاحك في ${topic}؟\n\nالإجابة بسيطة لكنها تغير كل شيء.\n\n${toneText}، إليك ٣ نقاط جوهرية:\n\n١. ابدأ بوضوح في هدفك\n٢. اتخذ خطوة واحدة كل يوم\n٣. كن صبوراً ومستمراً\n\nما هي تجربتك مع ${topic}؟ أخبرني في التعليقات ${emoji ? '💬' : ''}`
        : `${opener}الحقيقة التي لا يخبرك بها أحد عن ${topic}...\n\nبعد سنوات من العمل في هذا المجال، تعلمت درساً قيّماً:\n\n${toneText} وبكل صراحة، النجاح في ${topic} لا يأتي من الصدفة.\n\nإليك الإطار الكامل الذي أستخدمه:\n\n✅ الخطوة الأولى: حدد هدفك بدقة\n✅ الخطوة الثانية: ابنِ نظامك الخاص\n✅ الخطوة الثالثة: قِس نتائجك باستمرار\n✅ الخطوة الرابعة: حسّن وكرر\n\nهذا ليس نظرية — هذا ما يفعله أصحاب النتائج الحقيقية.\n\nهل أنت مستعد للبدء؟ ${emoji ? '🚀' : ''}`
  } else if (platform === 'linkedin') {
    body =
      length === 'short'
        ? `${topic}\n\n${toneText}، هذا ما تعلمته من تجربتي المهنية.\n\nما رأيك؟`
        : length === 'medium'
        ? `لنتحدث عن ${topic} ${emoji ? '💼' : ''}\n\n${toneText}، اكتشفت أن معظم المحترفين يتجاهلون أهم جانب في هذا الموضوع.\n\nبعد بحث وتجربة، هذا ما توصلت إليه:\n\n← الوضوح في الأهداف هو الأساس\n← بناء العلاقات أهم من المهارات التقنية\n← الاتساق يتفوق على الكمال\n\nأودّ أن أسمع وجهة نظرك. هل تتفق مع هذا؟`
        : `درس قيّم تعلمته في ${topic} ${emoji ? '📊' : ''}\n\nقبل سنوات، كنت أعتقد أن النجاح في ${topic} يتطلب موارد ضخمة.\n\nكنت مخطئاً.\n\n${toneText}، إليك ما اكتشفته:\n\nأولاً: الاستراتيجية قبل التنفيذ\nلا يمكنك بناء شيء قوي بدون خطة واضحة. خصص ٢٠٪ من وقتك للتفكير.\n\nثانياً: التعلم المستمر\n${topic} يتطور باستمرار. من يتوقف عن التعلم يتأخر.\n\nثالثاً: قياس الأداء\nما لا يُقاس لا يُحسَّن. حدد مؤشراتك الأساسية.\n\nرابعاً: بناء الشبكة\nأفضل الفرص تأتي من الناس، ليس من الإعلانات.\n\nما هو أهم درس تعلمته في مسيرتك المهنية؟\nشاركه في التعليقات ${emoji ? '👇' : ''}`
  } else {
    body =
      length === 'short'
        ? `${emoji ? '🎯 ' : ''}${topic} — كل ما تحتاج معرفته في جملة واحدة.\n\nشاركنا رأيك!`
        : length === 'medium'
        ? `${emoji ? '📢 ' : ''}موضوع مهم: ${topic}\n\n${toneText}، نريد مشاركتك بعض المعلومات القيّمة.\n\nهل تعلم أن ${topic} من أكثر الموضوعات التي تشغل بال المحترفين العرب اليوم؟\n\nإليك ٣ أشياء يجب أن تعرفها:\n\n١. الفهم العميق للأساسيات\n٢. التطبيق العملي الصحيح\n٣. قياس النتائج وتطويرها\n\nأخبرنا: ما أكثر شيء يشغل تفكيرك في هذا الموضوع؟ ${emoji ? '💬' : ''}`
        : `${emoji ? '🌟 ' : ''}دليلك الشامل حول ${topic}\n\n${toneText}، نقدم لك اليوم كل ما تحتاجه لفهم هذا الموضوع المهم.\n\n📌 ما هو ${topic}؟\nموضوع يجمع بين النظرية والتطبيق العملي في بيئة الأعمال الحديثة.\n\n📌 لماذا يهمك؟\nلأن من يفهم ${topic} يمتلك ميزة تنافسية حقيقية في سوق العمل.\n\n📌 كيف تبدأ؟\nالخطوة الأولى هي بناء الفهم الصحيح قبل التطبيق.\n\n📌 أين تتعلم؟\nدرهوس يوفر لك كل الأدوات والموارد التي تحتاجها.\n\nهل أعجبك هذا المنشور؟ شاركه مع أصدقائك ${emoji ? '👫' : ''}\nواترك تعليقاً بسؤالك! ${emoji ? '⬇️' : ''}`
  }

  const hashtagSets: Record<Platform, string> = {
    instagram:
      '\n\n#تسويق_رقمي #سوشيال_ميديا #محتوى_عربي #' +
      topic.replace(/\s+/g, '_') +
      ' #درهوس',
    linkedin:
      '\n\n#' + topic.replace(/\s+/g, '') + ' #التسويق_الرقمي #مهنة #تطوير_مهني',
    facebook:
      '\n\n#' + topic.replace(/\s+/g, '_') + ' #تسويق #محتوى',
  }

  return body + (hashtags ? hashtagSets[platform] : '')
}

const platformPreviewStyles: Record<Platform, { bg: string; border: string; header: string; headerText: string; labelBg: string; labelText: string }> = {
  instagram: {
    bg: 'bg-gradient-to-br from-pink-950/40 to-purple-950/40',
    border: 'border-pink-500/20',
    header: 'bg-gradient-to-r from-pink-600 to-purple-600',
    headerText: 'text-white',
    labelBg: 'bg-pink-500/20',
    labelText: 'text-pink-400',
  },
  linkedin: {
    bg: 'bg-blue-950/30',
    border: 'border-blue-500/20',
    header: 'bg-blue-700',
    headerText: 'text-white',
    labelBg: 'bg-blue-500/20',
    labelText: 'text-blue-400',
  },
  facebook: {
    bg: 'bg-blue-950/20',
    border: 'border-blue-600/20',
    header: 'bg-blue-800',
    headerText: 'text-white',
    labelBg: 'bg-blue-600/20',
    labelText: 'text-blue-300',
  },
}

export default function PostGeneratorPage() {
  const [settings, setSettings] = useState<GeneratorSettings>({
    platform: 'instagram',
    topic: '',
    tone: 'professional',
    length: 'medium',
    hashtags: true,
    emoji: true,
  })

  const [generatedPost, setGeneratedPost] = useState<string>('')
  const [copied, setCopied] = useState(false)

  const updateSetting = <K extends keyof GeneratorSettings>(
    key: K,
    value: GeneratorSettings[K]
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
    setGeneratedPost('')
  }

  const handleGenerate = () => {
    if (!settings.topic.trim()) return
    const post = generatePost(settings)
    setGeneratedPost(post)
  }

  const handleCopy = async () => {
    if (!generatedPost) return
    try {
      await navigator.clipboard.writeText(generatedPost)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const activePlatform = platforms.find((p) => p.value === settings.platform)
  const previewStyle = platformPreviewStyles[settings.platform]

  const inputClass =
    'w-full rounded-xl border border-outline-variant/40 bg-surface-container px-4 py-3 text-sm text-on-surface placeholder-on-surface-variant/50 transition-colors focus:border-primary-fixed-dim focus:outline-none'

  const labelClass = 'mb-1.5 block text-sm font-medium text-on-surface-variant'

  return (
    <AppShell>
      <PageShell
        title="مولّد المنشورات"
        subtitle="ولّد منشورات احترافية لجميع المنصات"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left panel: Settings */}
          <div className="space-y-6">
            {/* Platform selector */}
            <GlassCard accent="cyan">
              <h2 className="mb-4 text-lg font-bold text-on-surface">اختر المنصة</h2>
              <div className="grid grid-cols-3 gap-3">
                {platforms.map((p) => (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => updateSetting('platform', p.value)}
                    className={`flex flex-col items-center gap-2 rounded-xl border p-4 transition-all ${
                      settings.platform === p.value
                        ? `${p.bgColor} ${p.color}`
                        : 'border-outline-variant/40 bg-surface-container/50 text-on-surface-variant hover:border-primary-fixed-dim/40'
                    }`}
                  >
                    <span className="material-symbols-outlined text-2xl">{p.icon}</span>
                    <span className="text-xs font-medium">{p.label}</span>
                  </button>
                ))}
              </div>
            </GlassCard>

            {/* Topic & Settings */}
            <GlassCard accent="violet">
              <h2 className="mb-4 text-lg font-bold text-on-surface">إعدادات المنشور</h2>
              <div className="space-y-4">
                <div>
                  <label className={labelClass}>الموضوع *</label>
                  <input
                    type="text"
                    placeholder="مثال: أهمية SEO للشركات الصغيرة"
                    value={settings.topic}
                    onChange={(e) => updateSetting('topic', e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>النبرة</label>
                  <select
                    value={settings.tone}
                    onChange={(e) => updateSetting('tone', e.target.value as Tone)}
                    className={inputClass}
                  >
                    {toneOptions.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>الطول</label>
                  <div className="grid grid-cols-3 gap-2">
                    {lengthOptions.map((l) => (
                      <button
                        key={l.value}
                        type="button"
                        onClick={() => updateSetting('length', l.value)}
                        className={`rounded-xl border p-3 text-center transition-all ${
                          settings.length === l.value
                            ? 'border-primary-fixed-dim bg-primary-fixed-dim/10 text-primary-fixed-dim'
                            : 'border-outline-variant/40 bg-surface-container/50 text-on-surface-variant hover:border-primary-fixed-dim/40'
                        }`}
                      >
                        <p className="text-sm font-medium">{l.label}</p>
                        <p className="text-xs opacity-70">{l.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Toggles */}
                <div className="flex flex-col gap-3 rounded-xl border border-outline-variant/30 p-4">
                  <label className="flex cursor-pointer items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-on-surface">الهاشتاقات</p>
                      <p className="text-xs text-on-surface-variant">
                        إضافة هاشتاقات مناسبة
                      </p>
                    </div>
                    <div
                      onClick={() => updateSetting('hashtags', !settings.hashtags)}
                      className={`relative h-6 w-11 cursor-pointer rounded-full transition-colors ${
                        settings.hashtags ? 'bg-primary-fixed-dim' : 'bg-surface-container-high'
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all duration-200 ${
                          settings.hashtags ? 'right-0.5' : 'left-0.5'
                        }`}
                      />
                    </div>
                  </label>

                  <label className="flex cursor-pointer items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-on-surface">الإيموجي</p>
                      <p className="text-xs text-on-surface-variant">
                        إضافة إيموجي مناسبة
                      </p>
                    </div>
                    <div
                      onClick={() => updateSetting('emoji', !settings.emoji)}
                      className={`relative h-6 w-11 cursor-pointer rounded-full transition-colors ${
                        settings.emoji ? 'bg-primary-fixed-dim' : 'bg-surface-container-high'
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all duration-200 ${
                          settings.emoji ? 'right-0.5' : 'left-0.5'
                        }`}
                      />
                    </div>
                  </label>
                </div>

                <GradientButton
                  label="توليد المنشور"
                  variant="primary"
                  size="lg"
                  onClick={handleGenerate}
                  disabled={!settings.topic.trim()}
                  className="w-full"
                />
              </div>
            </GlassCard>
          </div>

          {/* Right panel: Post preview */}
          <div>
            <div className="sticky top-24">
              <h2 className="mb-4 text-lg font-semibold text-on-surface">
                معاينة المنشور
              </h2>

              <div
                className={`overflow-hidden rounded-2xl border ${previewStyle.bg} ${previewStyle.border}`}
              >
                {/* Platform header */}
                <div className={`flex items-center gap-3 px-5 py-3 ${previewStyle.header}`}>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                    <span className={`material-symbols-outlined text-base ${previewStyle.headerText}`}>
                      {activePlatform?.icon}
                    </span>
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${previewStyle.headerText}`}>
                      درهوس للتسويق
                    </p>
                    <p className={`text-xs opacity-75 ${previewStyle.headerText}`}>
                      {activePlatform?.label}
                    </p>
                  </div>
                </div>

                {/* Post content */}
                <div className="p-5">
                  {generatedPost ? (
                    <>
                      <p className="whitespace-pre-line text-sm leading-loose text-on-surface">
                        {generatedPost}
                      </p>

                      {/* Copy button */}
                      <div className="mt-5 flex items-center justify-between border-t border-outline-variant/20 pt-4">
                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${previewStyle.labelBg} ${previewStyle.labelText}`}>
                          {activePlatform?.label}
                        </span>
                        <button
                          type="button"
                          onClick={handleCopy}
                          className="flex items-center gap-1.5 rounded-lg border border-outline-variant/40 px-4 py-2 text-sm text-on-surface-variant transition-all hover:border-primary-fixed-dim/50 hover:text-primary-fixed-dim"
                        >
                          <span className="material-symbols-outlined text-base">
                            {copied ? 'check' : 'content_copy'}
                          </span>
                          {copied ? 'تم النسخ!' : 'نسخ'}
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center text-on-surface-variant">
                      <span className="material-symbols-outlined mb-3 text-5xl text-outline">
                        edit_note
                      </span>
                      <p className="text-sm">
                        أدخل موضوع المنشور واضغط
                        <br />
                        &ldquo;توليد المنشور&rdquo; لتظهر المعاينة هنا
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageShell>
    </AppShell>
  )
}

