import { motion } from 'framer-motion'
import { Code, Gauge, PenTool, Smartphone } from 'lucide-react'
import { services } from '../data/siteData'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'

const icons = [Code, PenTool, Smartphone, Gauge]

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-base-soft/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="04 — Services" title="What I Can Do" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="h-full p-6 group hover:border-accent-indigo/40 hover:-translate-y-1.5 transition-all duration-300">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-accent-cyan group-hover:bg-accent-indigo/20 group-hover:text-accent-indigo transition-colors">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm text-ink-dim leading-relaxed">{service.description}</p>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
