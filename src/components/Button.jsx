import { motion } from 'framer-motion'

/**
 * Shared button used across the site.
 * variant: 'primary' | 'ghost'
 * Renders an <a> when `href` is passed, otherwise a <button>.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  icon: Icon,
  className = '',
  type = 'button',
}) {
  const base =
    'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium font-display transition-colors duration-200'

  const styles = {
    primary:
      'bg-accent-indigo text-white shadow-glow-sm hover:bg-[#5a52e0]',
    ghost:
      'border border-white/15 text-ink hover:border-white/35 hover:bg-white/5',
  }

  const content = (
    <motion.span
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
      {Icon && <Icon size={16} aria-hidden="true" />}
    </motion.span>
  )

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto')
    return (
      <a
        href={href}
        onClick={onClick}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="inline-block"
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className="inline-block">
      {content}
    </button>
  )
}
