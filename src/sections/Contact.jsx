import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Mail, Send } from 'lucide-react'
import { profile } from '../data/siteData'
import Button from '../components/Button'
import GlassCard from '../components/GlassCard'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzepjdzn'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'sending', message: 'Sending your message...' })

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        setForm({ name: '', email: '', message: '' })
        setStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' })
        return
      }

      const data = await response.json().catch(() => ({}))
      const errorMessage = data?.errors?.[0]?.message || 'Something went wrong. Please email me directly.'
      setStatus({ type: 'error', message: errorMessage })
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please email me directly.' })
    }
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
            <p className="mt-4 text-lg text-ink-dim">Let&apos;s build something polished, useful, and memorable.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={`mailto:${profile.email}`} variant="primary" icon={Mail}>
                Email Me
              </Button>
              <Button href={profile.socials.instagram} variant="ghost" icon={Instagram}>
                Instagram
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

                <Button type="submit" variant="primary" icon={Send} className="w-full justify-center" disabled={status.type === 'sending'}>
                  {status.type === 'sending' ? 'Sending...' : 'Send Message'}
                </Button>

                {status.message && (
                  <p
                    className={`text-sm ${
                      status.type === 'success'
                        ? 'text-emerald-300'
                        : status.type === 'error'
                          ? 'text-rose-300'
                          : 'text-ink-dim'
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
