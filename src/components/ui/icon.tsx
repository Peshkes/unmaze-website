import { ICONS, type IconKey } from '@/lib/icons'

interface IconProps {
  name: IconKey
  className?: string
}

export function Icon({ name, className = 'h-5 w-5' }: IconProps) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d={ICONS[name]} />
    </svg>
  )
}
