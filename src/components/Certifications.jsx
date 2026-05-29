import { motion } from 'framer-motion'
import SectionWrapper, { SectionTag, SectionTitle } from './SectionWrapper'
import { certifications, achievements } from '../data/portfolio'

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionTag>Certifications</SectionTag>
      <SectionTitle>Credentials & Recognition</SectionTitle>

      {/* Cert cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/[0.03] border border-white/10 hover:border-[#f5a623]/40 rounded-2xl p-5 flex items-start gap-4 transition-all duration-200 hover:-translate-y-1"
          >
            <div className="w-11 h-11 rounded-xl bg-[#f5a623]/10 border border-[#f5a623]/25 flex items-center justify-center text-2xl flex-shrink-0">
              {cert.icon}
            </div>
            <div>
              <h4 className="font-head font-semibold text-white text-sm mb-1">{cert.title}</h4>
              <p className="text-white/30 text-xs">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Achievements */}
      <SectionTag>Achievements</SectionTag>
      <h3 className="font-head font-semibold text-xl text-white mb-5">Key Highlights</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {achievements.map((ach, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="bg-white/[0.03] border border-white/8 hover:border-accent2/30 rounded-xl p-4 flex items-start gap-3 transition-all duration-200"
          >
            <span className="w-7 h-7 rounded-lg bg-accent2/10 border border-accent2/20 flex items-center justify-center text-accent2 text-sm flex-shrink-0 mt-0.5">
              ✓
            </span>
            <p className="text-white/45 text-sm leading-relaxed">{ach}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
