import { motion } from 'framer-motion'
import { skillGroups } from '../data/siteData'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
}

const chip = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-base-soft/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="02 — Skills"
          title="Tools I work with"
          description="A practical, honest list of the technologies I currently use and am building projects with."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, gIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gIdx * 0.1 }}
            >
              <GlassCard className="h-full p-7 hover:shadow-glow-sm hover:border-white/20 transition-all">
                <h3 className="font-display text-lg font-semibold text-ink mb-5 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" aria-hidden="true" />
                  {group.category}
                </h3>

                <motion.ul
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                  className="flex flex-wrap gap-2.5"
                >
                  {group.items.map((skill) => (
                    <motion.li
                      key={skill}
                      variants={chip}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-ink-dim hover:text-ink hover:border-accent-indigo/40 hover:bg-accent-indigo/10 transition-colors"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
