import { motion } from 'framer-motion'
import SectionWrapper, { SectionTag, SectionTitle } from './SectionWrapper'
import { projects } from '../data/portfolio'

function ProjectCard({ project, index }) {
  const isFeatured = project.featured

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className={`bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 group card-glow ${
        isFeatured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Image placeholder */}
      <div
        className={`relative flex items-center justify-center overflow-hidden ${isFeatured ? 'h-44' : 'h-32'}`}
        style={{
          background: `linear-gradient(135deg, rgba(${hexToRgb(project.accentColor)},0.08), rgba(255,255,255,0.02))`,
        }}
      >
        <span className="text-5xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300">
          {project.emoji}
        </span>
        {isFeatured && (
          <span className="absolute top-3 right-3 bg-accent/90 text-white font-mono-code text-[0.65rem] px-2.5 py-1 rounded-md">
            FEATURED
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-head font-semibold text-white text-base mb-2">{project.title}</h3>
        <p className="text-white/40 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.features.map(f => (
            <span
              key={f}
              className="text-[0.7rem] px-2.5 py-0.5 rounded-full border"
              style={{
                background: `rgba(${hexToRgb(project.accentColor)},0.08)`,
                borderColor: `rgba(${hexToRgb(project.accentColor)},0.2)`,
                color: project.accentColor,
              }}
            >
              {f}
            </span>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map(t => (
            <span key={t} className="font-mono-code text-[0.65rem] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/8 text-white/30">
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-accent2 hover:text-white text-sm font-medium transition-all duration-200 group/link"
        >
          View on GitHub
          <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
        </a>
      </div>
    </motion.div>
  )
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r},${g},${b}`
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionTag>Featured Projects</SectionTag>
      <SectionTitle>What I've built</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
