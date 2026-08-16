import { motion } from 'framer-motion'
import { Code2, Layers, Palette, Wand2 } from 'lucide-react'
import { aboutHighlights, profile } from '../data/siteData'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'

const icons = [Code2, Layers, Palette, Wand2]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="01 — About" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 text-lg leading-relaxed text-ink-dim"
          >
            {profile.aboutText}
          </motion.p>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {aboutHighlights.map((item, i) => {
              const Icon = icons[i % icons.length]
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <GlassCard className="h-full p-6 hover:border-white/20 transition-colors">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-indigo/15 text-accent-indigo">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-base font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-ink-dim leading-relaxed">{item.desc}</p>
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
