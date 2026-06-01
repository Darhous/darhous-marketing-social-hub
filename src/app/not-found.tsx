import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-4 pt-16 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-surface-container">
        <span className="material-symbols-outlined text-4xl text-on-surface-variant">
          search_off
        </span>
      </div>
      <h1 className="mb-2 text-4xl font-bold text-on-surface">٤٠٤</h1>
      <h2 className="mb-4 text-xl font-semibold text-on-surface">الصفحة غير موجودة</h2>
      <p className="mb-8 max-w-md text-sm text-on-surface-variant">
        عذراً، الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها.
      </p>
      <Link
        href="/"
        className="rounded-xl gradient-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
      >
        العودة للرئيسية
      </Link>
    </div>
  )
}
