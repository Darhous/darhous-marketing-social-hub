import { cn } from '@/lib/utils'

interface PageShellProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  headerAction?: React.ReactNode
}

export default function PageShell({
  title,
  subtitle,
  children,
  className,
  headerAction,
}: PageShellProps) {
  return (
    <div className={cn('w-full', className)}>
      {(title || subtitle) && (
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            {title && (
              <h1 className="text-2xl font-semibold text-on-surface md:text-3xl">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="mt-1 text-sm text-on-surface-variant">{subtitle}</p>
            )}
          </div>
          {headerAction && <div className="flex-shrink-0">{headerAction}</div>}
        </div>
      )}
      {children}
    </div>
  )
}
