import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  accent?: 'cyan' | 'violet' | 'emerald' | null
}

export default function GlassCard({
  children,
  className,
  hover = true,
  accent = null,
}: GlassCardProps) {
  const accentBorder = {
    cyan: 'border-t-2 border-t-primary-fixed-dim',
    violet: 'border-t-2 border-t-secondary',
    emerald: 'border-t-2 border-t-tertiary-container',
  }

  return (
    <div
      className={cn(
        'glass rounded-2xl p-6',
        hover && 'transition-all duration-200 hover:border-white/15 hover:shadow-glow-cyan/10 glow-card',
        accent && accentBorder[accent],
        className
      )}
    >
      {children}
    </div>
  )
}
