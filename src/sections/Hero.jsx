import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { profile } from '../data/siteData'
import Button from '../components/Button'
import AmbientBackground from '../components/AmbientBackground'
import ScrollIndicator from '../components/ScrollIndicator'
import portraitImage from '../assets/mahdin-portrait.jpeg'

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
          className="relative mx-auto w-full max-w-[360px]"
        >
          <div className="portrait-orbit absolute -inset-7 rounded-[2rem] border border-white/10" aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -left-8 bottom-6 z-10 hidden sm:block"
          >
            <div className="code-badge rounded-2xl border border-white/10 bg-slate-950/80 p-3 shadow-2xl shadow-black/30 backdrop-blur-md">
              <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-ink-faint">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
              </div>
              <div className="font-mono text-[10px] leading-5 text-ink-dim">
                <div className="text-accent-violet">const developer = {'{'} </div>
                <div className="pl-3 text-accent-cyan">name: &quot;Mahdin&quot;,</div>
                <div className="pl-3 text-accent-cyan">role: &quot;Web Developer&quot;,</div>
                <div className="pl-3 text-accent-cyan">passion: &quot;Creative Websites&quot;,</div>
                <div className="pl-3 text-accent-cyan">available: true,</div>
                <div className="text-accent-violet">{'};'}</div>
                <div className="mt-2 flex items-center gap-2 text-emerald-300">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
                  Open to work
                </div>
              </div>
            </div>
          </motion.div>

          <div className="portrait-shell relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-black/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.24),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.12),transparent_32%)]" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-2.5">
              <img
                src={portraitImage}
                alt="Mahdin portrait"
                className="mx-auto block h-[420px] w-auto max-w-full rounded-[1.2rem] object-cover shadow-[0_25px_75px_rgba(76,29,149,0.25)]"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
