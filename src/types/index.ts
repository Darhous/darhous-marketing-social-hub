export type AccentColor = 'cyan' | 'violet' | 'emerald'

export type Level = 'مبتدئ' | 'متوسط' | 'متقدم'

export type Platform = 'instagram' | 'linkedin' | 'facebook' | 'tiktok' | 'x'

export interface NavItem {
  label: string
  href: string
  icon: string
}

export interface User {
  name: string
  initials: string
}
