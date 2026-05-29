import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ dark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090f]/90 dark:bg-[#09090f]/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-[60px]">
        <a href="#top" className="font-head font-extrabold text-lg text-white tracking-tight">
          SS<span className="text-accent">.</span>dev
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 list-none">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/50 hover:text-accent text-xs font-medium uppercase tracking-widest transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="text-white/50 hover:text-accent border border-white/10 hover:border-accent px-3 py-1.5 rounded-lg text-xs transition-all duration-200"
          >
            {dark ? '☀ Light' : '☾ Dark'}
          </button>
          <a
            href="mailto:polushyamsunderreddy@gmail.com"
            className="hidden md:inline-flex items-center gap-1.5 bg-accent hover:bg-[#5550e8] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            Hire Me
          </a>
          <button
            className="md:hidden text-white/70 hover:text-white"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f0f1a] border-t border-white/5 px-6 pb-4"
          >
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-white/60 hover:text-accent text-sm transition-colors"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
