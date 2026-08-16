import { motion } from 'framer-motion'
import { ExternalLink, Github, ImageOff } from 'lucide-react'
import { projects } from '../data/projects'
import SectionHeading from '../components/SectionHeading'
import GlassCard from '../components/GlassCard'

function ProjectImage({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Preview of the ${project.name} project`}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    )
  }

  // Beautiful placeholder mockup — swap `image` in src/data/projects.js
  // for a real screenshot to replace this automatically.
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-accent-indigo/15 via-base-raised to-accent-violet/10">
      <div className="absolute inset-0 bg-grid-faint bg-[size:28px_28px] opacity-40" />
      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-ink-faint">
        <ImageOff size={20} aria-hidden="true" />
      </div>
      <p className="relative font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
        Add project preview
      </p>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="03 — Work"
          title="Selected Projects"
          description="A few projects that show how I approach building for real clients and use cases."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={i === 0 ? 'md:col-span-2' : ''}
            >
              <GlassCard className="group overflow-hidden h-full flex flex-col hover:border-white/20 hover:shadow-glow-sm transition-all duration-300">
                <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[21/9]' : 'aspect-[16/10]'}`}>
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]">
                    <ProjectImage project={project} />
                  </div>
                  {project.placeholder && (
                    <span className="absolute top-4 right-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-dim backdrop-blur-sm">
                      Placeholder
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-ink">
                    {project.name}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base text-ink-dim leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-ink-dim"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent-cyan transition-colors"
                      >
                        Live Demo <ExternalLink size={14} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-faint cursor-not-allowed">
                        Live Demo <ExternalLink size={14} aria-hidden="true" />
                      </span>
                    )}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent-cyan transition-colors"
                      >
                        GitHub <Github size={14} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-faint cursor-not-allowed">
                        GitHub <Github size={14} aria-hidden="true" />
                      </span>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
