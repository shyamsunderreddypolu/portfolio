import { useState } from 'react';
import { projects, socialLinks } from '../data/portfolioData';
import ProjectCaseStudyModal from './ProjectCaseStudyModal';

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const BookOpenIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const ProjectCard = ({ project, aosDelay, onOpenCaseStudy }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className="relative rounded-3xl p-[1px] group transition-all duration-500 bg-white/10 hover:border-red-500/40 hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] flex flex-col justify-between"
  >
    <div className="rounded-3xl p-6 md:p-10 h-full backdrop-blur-md bg-[#111111]/95 transition-all duration-500 flex flex-col justify-between border border-white/10 group-hover:border-red-500/30">
      <div>
        {/* Badge & Number */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-400 bg-red-500/10 px-3.5 py-1 rounded-full border border-red-500/20">
            {project.badge}
          </span>
          <span className="text-4xl md:text-5xl font-black text-white/15 font-serif italic">
            {project.number}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
          {project.title}
        </h3>

        {/* Short One-Line Problem Statement */}
        <div className="mb-5 bg-white/5 border border-white/10 rounded-xl p-3.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block mb-1">
            Problem Addressed:
          </span>
          <p className="text-white/80 text-xs md:text-sm font-medium leading-relaxed">
            {project.oneLineProblem}
          </p>
        </div>

        {/* Key Features List */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white/70 mb-3">
            Key Architectural Features:
          </h4>
          <ul className="space-y-2">
            {project.keyFeatures.map((feat, i) => (
              <li key={i} className="text-xs md:text-sm text-white/85 flex items-start gap-2.5 leading-relaxed">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Area: Tech Line + Action Buttons */}
      <div className="pt-6 border-t border-white/10 mt-6">
        {/* Tech Line */}
        <div className="mb-5">
          <span className="text-[11px] font-mono uppercase text-white/40 block mb-1">Tech Stack:</span>
          <div className="text-xs md:text-sm font-mono font-bold text-red-400">
            {project.techLine}
          </div>
        </div>

        {/* Buttons: [GitHub] [Live Demo] [Case Study] */}
        <div className="flex flex-wrap items-center gap-3">
          {/* GitHub Button */}
          {project.links.github && (
            <a 
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-xs md:text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              <GitHubIcon />
              GitHub
            </a>
          )}

          {/* Live Demo Button */}
          {project.links.demo ? (
            <a 
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#ff2a2a] text-white text-xs md:text-sm font-bold hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] transition-all duration-300"
            >
              <ExternalLinkIcon />
              Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs md:text-sm font-medium cursor-not-allowed">
              <ExternalLinkIcon />
              Demo Coming Soon
            </span>
          )}

          {/* Case Study Button */}
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 hover:bg-[#ff2a2a] hover:text-white text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer"
          >
            <BookOpenIcon />
            View Case Study
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center md:text-left">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Featured Engineering Projects
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Production-Ready Systems & Applications
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
            Full-stack platforms and cryptographic backend architectures engineered with Java, Spring Boot, React, REST APIs, and MySQL.
          </p>
        </div>

        {/* Project Cards (Consistent dimensions & spacing) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              aosDelay={String((index + 1) * 150)}
              onOpenCaseStudy={setSelectedProject}
            />
          ))}
        </div>

        {/* Case Study Modal */}
        {selectedProject && (
          <ProjectCaseStudyModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}

        {/* GitHub CTA */}
        <div data-aos="fade-up" data-aos-delay="400" className="mt-16 flex justify-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-base md:text-lg hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 group"
          >
            <GitHubIcon />
            Explore All Repositories on GitHub
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
