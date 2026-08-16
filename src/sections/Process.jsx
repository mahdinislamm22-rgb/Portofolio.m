import { motion } from 'framer-motion'
import { processSteps } from '../data/siteData'
import SectionHeading from '../components/SectionHeading'

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="05 — Process" title="How I Work" />

        <div className="relative">
          {/* connecting line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-indigo/50 via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-0">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 md:grid md:grid-cols-2 md:gap-10 md:py-8 ${
                  i % 2 === 1 ? '' : ''
                }`}
              >
                <div
                  className={`hidden md:block ${
                    i % 2 === 0 ? 'order-1 text-right pr-14' : 'order-3 pl-14'
                  }`}
                >
                  <p className="font-display text-lg font-semibold text-ink">{step.title}</p>
                  <p className="mt-2 text-sm text-ink-dim leading-relaxed max-w-xs md:ml-auto">
                    {step.description}
                  </p>
                </div>

                <div className={`flex-shrink-0 md:order-2 md:mx-auto z-10`}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full glass font-mono text-sm font-medium text-accent-cyan shadow-glow-sm">
                    {step.number}
                  </div>
                </div>

                <div className="md:hidden">
                  <p className="font-display text-lg font-semibold text-ink">{step.title}</p>
                  <p className="mt-1.5 text-sm text-ink-dim leading-relaxed">{step.description}</p>
                </div>

                {/* spacer to balance grid on desktop for even/odd */}
                <div className={`hidden md:block ${i % 2 === 0 ? 'order-3' : 'order-1'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
