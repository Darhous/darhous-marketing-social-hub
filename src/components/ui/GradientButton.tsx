import Link from 'next/link'
import { cn } from '@/lib/utils'

interface GradientButtonProps {
  label: string
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function GradientButton({
  label,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  disabled,
}: GradientButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200',
    sizes[size],
    variant === 'primary'
      ? 'gradient-primary text-white shadow-glow-cyan hover:scale-105 hover:shadow-glow-cyan'
      : 'border border-white/10 bg-transparent text-on-surface hover:border-primary hover:text-primary',
    disabled && 'cursor-not-allowed opacity-50',
    className
  )

  if (href) {
    return (
      <Link href={href} className={base}>
        {label}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {label}
    </button>
  )
}
