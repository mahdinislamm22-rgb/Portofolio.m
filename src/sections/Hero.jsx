import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { profile } from '../data/siteData'
import Button from '../components/Button'
import CodeWindow from '../components/CodeWindow'
import AmbientBackground from '../components/AmbientBackground'
import ScrollIndicator from '../components/ScrollIndicator'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 md:pt-32"
    >
      <AmbientBackground />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-2">
        <div>
          <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5"
          >
            <Sparkles size={14} className="text-accent-cyan" aria-hidden="true" />
            <span className="font-mono text-xs text-ink-dim">{profile.positioning}</span>
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-semibold leading-[1.08] tracking-tight text-ink">
            <motion.span initial="hidden" animate="show" custom={0.1} variants={fadeUp} className="block">
              Hi, I&apos;m {profile.name}.
            </motion.span>
            <motion.span
              initial="hidden"
              animate="show"
              custom={0.22}
              variants={fadeUp}
              className="block text-gradient"
            >
              {profile.title}.
            </motion.span>
          </h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={0.34}
            variants={fadeUp}
            className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-ink-dim"
          >
            {profile.heroDescription}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.46}
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="#projects" variant="primary" icon={ArrowRight}>
              View My Work
            </Button>
            <Button href="#contact" variant="ghost">
              Let&apos;s Work Together
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        >
          <CodeWindow />
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
