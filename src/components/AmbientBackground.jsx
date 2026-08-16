import { useEffect, useRef } from 'react'

/**
 * Subtle ambient layer for the hero: a faint grid, two slow-moving
 * gradient blobs, and a glow that follows the mouse. Kept low-opacity
 * on purpose so it reads as atmosphere, not decoration.
 * Automatically disabled for users who prefer reduced motion.
 */
export default function AmbientBackground() {
  const glowRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const handleMove = (e) => {
      if (!glowRef.current) return
      const x = e.clientX
      const y = e.clientY
      glowRef.current.style.transform = `translate(${x - 250}px, ${y - 250}px)`
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* faint grid */}
      <div className="absolute inset-0 bg-grid-faint bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black,transparent)]" />

      {/* slow moving blobs */}
      <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-accent-indigo/20 blur-[120px] animate-float-slow" />
      <div className="absolute top-1/3 right-0 h-[380px] w-[380px] rounded-full bg-accent-violet/15 blur-[120px] animate-float-slower" />

      {/* mouse-following glow */}
      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-accent-indigo/10 blur-[100px] transition-transform duration-300 ease-out will-change-transform hidden md:block"
      />
    </div>
  )
}
