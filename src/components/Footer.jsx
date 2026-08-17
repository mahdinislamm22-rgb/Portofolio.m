import { Instagram, Linkedin, Mail } from 'lucide-react'
import { navLinks, profile } from '../data/siteData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-base-soft">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <p className="font-display text-xl font-semibold text-ink">
              {profile.name}
              <span className="text-accent-indigo">.</span>
            </p>
            <p className="mt-1 text-sm text-ink-dim">{profile.title}</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-dim">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-ink transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={profile.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="text-ink-dim hover:text-ink transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-ink-dim hover:text-ink transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send an email"
              className="text-ink-dim hover:text-ink transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-white/5 pt-6 text-xs text-ink-faint">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
