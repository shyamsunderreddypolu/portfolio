import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function SectionWrapper({ id, children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className={`py-24 px-6 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  )
}

export function SectionTag({ children }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="w-6 h-px bg-accent" />
      <span className="font-mono-code text-[0.72rem] text-accent uppercase tracking-[0.14em]">
        {children}
      </span>
    </div>
  )
}

export function SectionTitle({ children }) {
  return (
    <h2 className="font-head font-bold text-[clamp(1.8rem,3vw,2.4rem)] text-white leading-tight tracking-tight mb-10">
      {children}
    </h2>
  )
}
