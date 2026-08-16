import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { profile } from '../data/siteData'
import Button from '../components/Button'
import GlassCard from '../components/GlassCard'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // ── No backend on this site, so the form opens the user's email
    // client with the message pre-filled. This is the safe, frontend-only
    // way to "send" a message without exposing any API keys.
    //
    // To collect messages directly instead, sign up for a free plan at
    // a form service such as Formspree (https://formspree.io), then
    // replace this function with a fetch() POST to the endpoint they
    // give you — no backend code required on your side.
    const subject = encodeURIComponent(`New message from ${form.name || 'your website'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-base-soft/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan/80">
              06 — Contact
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-lg text-ink-dim">Let&apos;s build something great together.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={`mailto:${profile.email}`} variant="primary" icon={Mail}>
                Email Me
              </Button>
              <Button href={profile.socials.github} variant="ghost" icon={Github}>
                GitHub
              </Button>
              <Button href={profile.socials.linkedin} variant="ghost" icon={Linkedin}>
                LinkedIn
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlassCard className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-ink-dim">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent-indigo/50 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-ink-dim">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent-indigo/50 focus:outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm text-ink-dim">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent-indigo/50 focus:outline-none transition-colors"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button type="submit" variant="primary" icon={Send} className="w-full justify-center">
                  Send Message
                </Button>

                <p className="text-xs text-ink-faint">
                  This opens your email app with the message pre-filled — no data is sent to a server.
                </p>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
