import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CODE_LINES = [
  { text: 'const developer = {', indent: 0 },
  { text: 'name: "Mahdin",', indent: 1 },
  { text: 'role: "Web Developer",', indent: 1 },
  { text: 'passion: "Creative Websites",', indent: 1 },
  { text: 'available: true,', indent: 1 },
  { text: '};', indent: 0 },
]

const FULL_TEXT = CODE_LINES.map((l) => '  '.repeat(l.indent) + l.text).join('\n')

function highlight(line) {
  // Very small, dependency-free syntax highlighter tuned for this one snippet.
  const parts = []
  const keywordMatch = line.match(/^(const|let|var)\s/)
  let rest = line

  if (keywordMatch) {
    parts.push({ text: keywordMatch[0], cls: 'text-accent-violet' })
    rest = line.slice(keywordMatch[0].length)
  }

  const segments = rest.split(/("(?:[^"\\]|\\.)*")/g)
  segments.forEach((seg) => {
    if (!seg) return
    if (seg.startsWith('"')) {
      parts.push({ text: seg, cls: 'text-accent-cyan' })
    } else {
      parts.push({ text: seg, cls: 'text-ink-dim' })
    }
  })

  return parts
}

export default function CodeWindow() {
  const [visibleChars, setVisibleChars] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setReducedMotion(prefersReduced)
    if (prefersReduced) {
      setVisibleChars(FULL_TEXT.length)
      return
    }

    let i = 0
    const interval = setInterval(() => {
      i += 1
      setVisibleChars(i)
      if (i >= FULL_TEXT.length) clearInterval(interval)
    }, 28)

    return () => clearInterval(interval)
  }, [])

  const typedText = FULL_TEXT.slice(0, visibleChars)
  const typedLines = typedText.split('\n')

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      whileHover={{ rotate: 0, y: -6 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-md md:max-w-lg"
    >
      {/* soft glow behind the window */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-accent-indigo/25 blur-3xl scale-95" aria-hidden="true" />

      <div className="glass rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-ink-faint">developer.js</span>
        </div>

        {/* code body */}
        <div className="p-5 sm:p-6 font-mono text-[13px] sm:text-sm leading-relaxed">
          {CODE_LINES.map((line, idx) => {
            const shownLine = typedLines[idx] ?? ''
            const isCurrentLine = idx === typedLines.length - 1 && visibleChars < FULL_TEXT.length
            return (
              <div key={idx} className="flex">
                <span className="mr-4 select-none text-ink-faint/60 w-4 text-right">{idx + 1}</span>
                <span style={{ paddingLeft: `${line.indent * 16}px` }} className="whitespace-pre">
                  {highlight(shownLine.trim() ? shownLine : shownLine).map((part, pIdx) => (
                    <span key={pIdx} className={part.cls}>
                      {part.text}
                    </span>
                  ))}
                  {(isCurrentLine || (!reducedMotion && idx === CODE_LINES.length - 1 && visibleChars >= FULL_TEXT.length)) && (
                    <span className="ml-0.5 inline-block w-[7px] h-[15px] translate-y-[2px] bg-accent-cyan animate-blink" />
                  )}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* small floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="glass absolute -bottom-5 -left-5 hidden sm:flex items-center gap-2 rounded-xl px-4 py-2.5 shadow-lg"
      >
        <span className="h-2 w-2 rounded-full bg-accent-cyan animate-pulse" />
        <span className="font-mono text-xs text-ink-dim">Open to work</span>
      </motion.div>
    </motion.div>
  )
}
