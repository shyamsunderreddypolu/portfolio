import { motion } from 'framer-motion'
import SectionWrapper, { SectionTag, SectionTitle } from './SectionWrapper'
import { skills } from '../data/portfolio'

function SkillItem({ name, color }) {
  return (
    <div className="flex items-center gap-2.5 bg-white/[0.03] border border-white/8 hover:border-accent/40 rounded-xl px-3 py-2.5 text-sm text-white/70 font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.06] cursor-default group">
      <span
        className="w-2 h-2 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform"
        style={{ background: color }}
      />
      {name}
    </div>
  )
}

function SkillGroup({ group, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`bg-white/[0.03] border rounded-2xl p-5 ${
        group.accent ? 'border-accent/25' : 'border-white/8'
      }`}
    >
      <div className={`flex items-center gap-2 mb-4 text-xs font-mono-code uppercase tracking-widest ${
        group.accent ? 'text-accent' : 'text-white/30'
      }`}>
        <span>{group.icon}</span>
        {group.category}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {group.items.map(item => (
          <SkillItem key={item.name} {...item} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionTag>Technical Skills</SectionTag>
      <SectionTitle>Technologies I work with</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((group, i) => (
          <SkillGroup key={group.category} group={group} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
