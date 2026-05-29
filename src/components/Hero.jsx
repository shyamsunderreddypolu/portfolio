import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolio'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

const techTags = [
  { label: 'Java', cls: 'border-[#ff6b6b]/40 text-[#ff8888]' },
  { label: 'Python', cls: 'border-[#3776ab]/40 text-[#5a9fd4]' },
  { label: 'Spring Boot', cls: 'border-[#6db33f]/40 text-[#6db33f]' },
  { label: 'React.js', cls: 'border-[#61dafb]/40 text-[#61dafb]' },
  { label: 'REST APIs', cls: 'border-white/15 text-white/50' },
  { label: 'MySQL', cls: 'border-white/15 text-white/50' },
  { label: 'GenAI', cls: 'border-accent/40 text-accent' },
  { label: 'JWT', cls: 'border-white/15 text-white/50' },
  { label: 'Maven', cls: 'border-white/15 text-white/50' },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 px-6"
    >
      {/* Background orbs */}
      <div
        className="pointer-events-none fixed top-[-120px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #6c63ff, transparent)', filter: 'blur(100px)' }}
      />
      <div
        className="pointer-events-none fixed bottom-[10%] left-[-150px] w-[400px] h-[400px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #00d4aa, transparent)', filter: 'blur(100px)' }}
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 items-center">
        {/* Left */}
        <div>
          <motion.div {...fadeUp(0.1)}>
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs text-white/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent2 animate-pulse2" />
              Open to Internships & Full-time Roles
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="font-head font-extrabold text-[clamp(2.4rem,5vw,4rem)] leading-[1.08] tracking-[-0.03em] text-white mb-4"
          >
            Hi, I'm<br />
            <span className="text-gradient">{personalInfo.name}</span>
          </motion.h1>

          <motion.p {...fadeUp(0.3)} className="text-white/60 text-lg font-medium mb-2">
            {personalInfo.title}
          </motion.p>
          <motion.p {...fadeUp(0.35)} className="text-white/35 text-sm mb-2 font-mono-code">
            {personalInfo.subtitle}
          </motion.p>

          <motion.p {...fadeUp(0.4)} className="text-white/40 text-sm leading-relaxed mb-8 max-w-lg">
            {personalInfo.tagline}
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-accent hover:bg-[#5550e8] text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(108,99,255,0.4)]"
            >
              🚀 View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-transparent border border-white/20 hover:border-accent text-white hover:text-accent font-medium px-5 py-2.5 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              📧 Contact Me
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border border-white/10 hover:bg-white/5 text-white/60 hover:text-white font-medium px-4 py-2.5 rounded-xl text-sm transition-all duration-200"
            >
              GitHub ↗
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border border-white/10 hover:bg-white/5 text-white/60 hover:text-white font-medium px-4 py-2.5 rounded-xl text-sm transition-all duration-200"
            >
              LinkedIn ↗
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-2">
            {techTags.map(t => (
              <span
                key={t.label}
                className={`font-mono-code text-[0.68rem] px-2.5 py-1 rounded-md border bg-white/[0.03] ${t.cls}`}
              >
                {t.label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:block bg-white/[0.04] border border-white/10 rounded-2xl p-6 relative overflow-hidden animate-float"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/8 to-accent2/5 pointer-events-none" />

          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent2 flex items-center justify-center font-head font-extrabold text-xl text-white mb-4">
            SS
          </div>

          <h3 className="font-head font-bold text-white text-lg mb-1">{personalInfo.name}</h3>
          <p className="text-white/30 text-xs mb-4">{personalInfo.degree}</p>

          <div className="space-y-2 text-xs text-white/40 mb-5">
            <div className="flex items-center gap-2">
              <span>🏛</span>
              <span>{personalInfo.college}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {[
              { num: personalInfo.cgpa, label: 'CGPA / 10' },
              { num: personalInfo.graduation, label: 'Graduation' },
              { num: '3+', label: 'Projects' },
              { num: '2+', label: 'Certifications' },
            ].map(s => (
              <div
                key={s.label}
                className="bg-white/[0.04] border border-white/8 rounded-xl p-3 text-center"
              >
                <div className="font-head font-bold text-xl text-white">{s.num}</div>
                <div className="text-[0.65rem] text-white/30 uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/20"
      >
        <span className="text-[0.65rem] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  )
}
