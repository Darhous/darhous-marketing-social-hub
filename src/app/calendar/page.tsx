'use client'

import { useState } from 'react'
import AppShell from '@/components/layout/AppShell'
import PageShell from '@/components/layout/PageShell'

interface PostSlot {
  id: string
  platform: 'instagram' | 'linkedin' | 'facebook'
  title: string
  time: string
}

interface DayData {
  name: string
  date: string
  posts: PostSlot[]
}

const platformStyles: Record<string, { bg: string; text: string; label: string }> = {
  instagram: { bg: 'bg-pink-500/20', text: 'text-pink-400', label: 'Instagram' },
  linkedin: { bg: 'bg-blue-500/20', text: 'text-blue-400', label: 'LinkedIn' },
  facebook: { bg: 'bg-blue-600/20', text: 'text-blue-300', label: 'Facebook' },
}

const initialDays: DayData[] = [
  {
    name: 'السبت',
    date: '٣١ مايو',
    posts: [
      { id: 'p1', platform: 'instagram', title: 'منشور ترحيبي بالأسبوع', time: '٩:٠٠ ص' },
      { id: 'p2', platform: 'facebook', title: 'مقالة تعليمية', time: '٥:٠٠ م' },
    ],
  },
  {
    name: 'الأحد',
    date: '١ يونيو',
    posts: [
      { id: 'p3', platform: 'linkedin', title: 'نصيحة مهنية أسبوعية', time: '١١:٠٠ ص' },
    ],
  },
  {
    name: 'الاثنين',
    date: '٢ يونيو',
    posts: [
      { id: 'p4', platform: 'instagram', title: 'قصة خلف الكواليس', time: '٨:٠٠ ص' },
      { id: 'p5', platform: 'linkedin', title: 'ترند الأسبوع', time: '١:٠٠ م' },
    ],
  },
  {
    name: 'الثلاثاء',
    date: '٣ يونيو',
    posts: [
      { id: 'p6', platform: 'facebook', title: 'محتوى تفاعلي - استطلاع', time: '١٠:٠٠ ص' },
    ],
  },
  {
    name: 'الأربعاء',
    date: '٤ يونيو',
    posts: [
      { id: 'p7', platform: 'instagram', title: 'Reel تعليمي', time: '٧:٠٠ م' },
    ],
  },
  {
    name: 'الخميس',
    date: '٥ يونيو',
    posts: [
      { id: 'p8', platform: 'linkedin', title: 'مقالة LinkedIn الأسبوعية', time: '٩:٠٠ ص' },
      { id: 'p9', platform: 'instagram', title: 'شهادة عميل', time: '٣:٠٠ م' },
    ],
  },
  {
    name: 'الجمعة',
    date: '٦ يونيو',
    posts: [
      { id: 'p10', platform: 'instagram', title: 'ملخص الأسبوع', time: '١٢:٠٠ م' },
    ],
  },
]

interface NewPostForm {
  platform: 'instagram' | 'linkedin' | 'facebook'
  title: string
  time: string
}

export default function CalendarPage() {
  const [days, setDays] = useState<DayData[]>(initialDays)
  const [openFormDay, setOpenFormDay] = useState<string | null>(null)
  const [newPost, setNewPost] = useState<NewPostForm>({
    platform: 'instagram',
    title: '',
    time: '',
  })

  const handleAddPost = (dayName: string) => {
    if (!newPost.title.trim()) return
    const id = `p${Date.now()}`
    setDays((prev) =>
      prev.map((d) =>
        d.name === dayName
          ? { ...d, posts: [...d.posts, { id, ...newPost }] }
          : d
      )
    )
    setNewPost({ platform: 'instagram', title: '', time: '' })
    setOpenFormDay(null)
  }

  const handleRemovePost = (dayName: string, postId: string) => {
    setDays((prev) =>
      prev.map((d) =>
        d.name === dayName
          ? { ...d, posts: d.posts.filter((p) => p.id !== postId) }
          : d
      )
    )
  }

  return (
    <AppShell>
      <PageShell
        title="مخطط المحتوى"
        subtitle="نظرة أسبوعية على جدول نشر محتواك"
      >
        {/* Week header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-on-surface">
            الأسبوع: ٣١ مايو — ٦ يونيو ٢٠٢٦
          </h2>
          <div className="flex gap-4 text-sm">
            {Object.entries(platformStyles).map(([key, val]) => (
              <span key={key} className={`flex items-center gap-1.5 ${val.text}`}>
                <span className={`h-2.5 w-2.5 rounded-full ${val.bg} border border-current`} />
                {val.label}
              </span>
            ))}
          </div>
        </div>

        {/* Calendar Grid — RTL: السبت on right */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {days.map((day) => (
            <div
              key={day.name}
              className="glass rounded-xl p-3 flex flex-col gap-2 min-h-[220px]"
            >
              {/* Day header */}
              <div className="mb-1 border-b border-outline-variant/30 pb-2">
                <p className="font-semibold text-on-surface text-sm">{day.name}</p>
                <p className="text-xs text-on-surface-variant">{day.date}</p>
              </div>

              {/* Post slots */}
              <div className="flex flex-col gap-2 flex-1">
                {day.posts.map((post) => {
                  const style = platformStyles[post.platform]
                  return (
                    <div
                      key={post.id}
                      className={`group relative rounded-lg p-2 text-xs ${style.bg}`}
                    >
                      <p className={`font-medium leading-snug ${style.text}`}>
                        {post.title}
                      </p>
                      <p className="mt-0.5 text-on-surface-variant">{post.time}</p>
                      <button
                        type="button"
                        onClick={() => handleRemovePost(day.name, post.id)}
                        className="absolute left-1 top-1 hidden rounded p-0.5 text-on-surface-variant hover:text-error group-hover:block"
                        aria-label="حذف المنشور"
                      >
                        <span className="material-symbols-outlined text-sm">close</span>
                      </button>
                    </div>
                  )
                })}
              </div>

              {/* Add button */}
              {openFormDay === day.name ? (
                <div className="mt-1 space-y-2">
                  <select
                    value={newPost.platform}
                    onChange={(e) =>
                      setNewPost((p) => ({
                        ...p,
                        platform: e.target.value as 'instagram' | 'linkedin' | 'facebook',
                      }))
                    }
                    className="w-full rounded-lg border border-outline-variant/40 bg-surface-container px-2 py-1.5 text-xs text-on-surface focus:border-primary-fixed-dim focus:outline-none"
                  >
                    <option value="instagram">Instagram</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="facebook">Facebook</option>
                  </select>
                  <input
                    type="text"
                    placeholder="عنوان المنشور"
                    value={newPost.title}
                    onChange={(e) => setNewPost((p) => ({ ...p, title: e.target.value }))}
                    className="w-full rounded-lg border border-outline-variant/40 bg-surface-container px-2 py-1.5 text-xs text-on-surface placeholder-on-surface-variant/50 focus:border-primary-fixed-dim focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="الوقت (مثال: ٩:٠٠ ص)"
                    value={newPost.time}
                    onChange={(e) => setNewPost((p) => ({ ...p, time: e.target.value }))}
                    className="w-full rounded-lg border border-outline-variant/40 bg-surface-container px-2 py-1.5 text-xs text-on-surface placeholder-on-surface-variant/50 focus:border-primary-fixed-dim focus:outline-none"
                  />
                  <div className="flex gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleAddPost(day.name)}
                      className="flex-1 rounded-lg bg-primary-fixed-dim/20 py-1.5 text-xs font-medium text-primary-fixed-dim hover:bg-primary-fixed-dim/30 transition-colors"
                    >
                      إضافة
                    </button>
                    <button
                      type="button"
                      onClick={() => setOpenFormDay(null)}
                      className="rounded-lg border border-outline-variant/40 px-2 py-1.5 text-xs text-on-surface-variant hover:bg-surface-container transition-colors"
                    >
                      إلغاء
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setOpenFormDay(day.name)}
                  className="mt-auto flex items-center justify-center gap-1 rounded-lg border border-dashed border-outline-variant/40 py-1.5 text-xs text-on-surface-variant transition-colors hover:border-primary-fixed-dim/50 hover:text-primary-fixed-dim"
                >
                  <span className="material-symbols-outlined text-sm">add</span>
                  إضافة
                </button>
              )}
            </div>
          ))}
        </div>
      </PageShell>
    </AppShell>
  )
}
