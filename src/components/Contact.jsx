import { motion } from 'framer-motion'
import SectionWrapper, { SectionTag } from './SectionWrapper'
import { personalInfo } from '../data/portfolio'

const contacts = [
  {
    icon: '📧',
    label: 'Email',
    value: 'polushyamsunderreddy@gmail.com',
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+91 9948491312',
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: '⌥',
    label: 'GitHub',
    value: 'shyamsunderreddypolu',
    href: personalInfo.github,
    external: true,
  },
  {
    icon: 'in',
    label: 'LinkedIn',
    value: 'polushyamsunderreddy',
    href: personalInfo.linkedin,
    external: true,
  },
]

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-white/[0.03] border border-white/10 rounded-3xl p-10 text-center overflow-hidden"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/6 to-accent2/4 pointer-events-none" />

        <SectionTag>Get In Touch</SectionTag>
        <h2 className="font-head font-bold text-3xl text-white mb-3 tracking-tight">
          Let's work together
        </h2>
        <p className="text-white/35 text-sm max-w-md mx-auto mb-8 leading-relaxed">
          I'm actively seeking internships and full-time roles as a Java Full Stack / Backend Developer.
          If you're hiring — let's talk.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white/[0.05] border border-white/10 hover:border-accent/40 rounded-2xl p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(108,99,255,0.15)] group no-underline"
            >
              <div className="text-2xl mb-2">{c.icon}</div>
              <div className="text-[0.65rem] uppercase tracking-widest text-white/25 mb-1">{c.label}</div>
              <div className="text-accent2 text-xs break-all group-hover:text-white transition-colors">{c.value}</div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
