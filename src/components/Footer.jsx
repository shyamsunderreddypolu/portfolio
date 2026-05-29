import { personalInfo } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 text-center">
      <p className="text-white/20 text-xs">
        Designed & Built by{' '}
        <span className="text-accent">{personalInfo.name}</span>
        {' '}· Java Full Stack Developer · {personalInfo.location}
      </p>
      <p className="text-white/15 text-xs mt-1">
        B.Tech IT @ {personalInfo.college} · CGPA {personalInfo.cgpa} · Graduating {personalInfo.graduation}
      </p>
    </footer>
  )
}
