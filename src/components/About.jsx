import { motion } from 'framer-motion'
import SectionWrapper, { SectionTag, SectionTitle } from './SectionWrapper'
import { personalInfo, about } from '../data/portfolio'

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionTag>About Me</SectionTag>
      <SectionTitle>Driven by curiosity,<br />built on strong fundamentals</SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Text */}
        <div className="space-y-4">
          {about.map((para, i) => (
            <p key={i} className="text-white/50 leading-[1.85] text-[0.92rem]">
              {para}
            </p>
          ))}
        </div>

        {/* Right column */}
        <div className="space-y-5">
          {/* Education card */}
          <div className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-6 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-accent to-accent2 rounded-l-2xl" />
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent2/10 border border-accent/20 flex items-center justify-center text-2xl flex-shrink-0">
                🎓
              </div>
              <div>
                <h3 className="font-head font-semibold text-white text-base mb-1">{personalInfo.degree}</h3>
                <p className="text-white/40 text-sm mb-1">{personalInfo.college}</p>
                <p className="text-white/25 text-xs mb-3">Expected Graduation: {personalInfo.graduation}</p>
                <span className="inline-flex items-center gap-1.5 bg-[#f5a623]/10 border border-[#f5a623]/25 text-[#f5a623] px-3 py-1 rounded-lg text-xs font-semibold">
                  ⭐ CGPA: {personalInfo.cgpa} / 10
                </span>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <ul className="space-y-3">
            {[
              { icon: '📧', label: personalInfo.email, href: `mailto:${personalInfo.email}`, colored: true },
              { icon: '📱', label: personalInfo.phone, href: `tel:${personalInfo.phone}`, colored: false },
              { icon: '⌥', label: 'github.com/shyamsunderreddypolu', href: personalInfo.github, colored: true, external: true },
              { icon: 'in', label: 'linkedin.com/in/polushyamsunderreddy', href: personalInfo.linkedin, colored: true, external: true },
            ].map(item => (
              <li key={item.label} className="flex items-center gap-3 text-sm">
                <span className="w-8 h-8 bg-white/[0.05] border border-white/10 rounded-lg flex items-center justify-center text-sm flex-shrink-0">
                  {item.icon}
                </span>
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  className={item.colored ? 'text-accent2 hover:underline truncate' : 'text-white/40'}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}
