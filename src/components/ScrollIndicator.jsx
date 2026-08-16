import { motion } from 'framer-motion'

export default function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      aria-label="Scroll to About section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-faint hover:text-ink-dim transition-colors"
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Scroll</span>
      <motion.span
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="h-9 w-5 rounded-full border border-white/20 flex items-start justify-center p-1.5"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent-indigo" />
      </motion.span>
    </motion.a>
  )
}
