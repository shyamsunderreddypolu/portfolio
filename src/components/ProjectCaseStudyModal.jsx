import { useEffect } from 'react';

const ProjectCaseStudyModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d0d0d] border border-white/15 rounded-3xl p-6 md:p-10 text-white overflow-y-auto shadow-[0_25px_70px_rgba(0,0,0,0.8)] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
          aria-label="Close Case Study"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-8 pb-6 border-b border-white/10 pr-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-white/50">
              Case Study
            </span>
          </div>
          <h2 id="modal-title" className="text-2xl md:text-4xl font-black text-white tracking-tight mb-2">
            {project.title}
          </h2>
          <p className="text-xs md:text-sm font-mono text-white/60">
            {project.techLine}
          </p>
        </div>

        {/* Section: Overview */}
        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
            01. Overview
          </h3>
          <p className="text-white/85 text-sm md:text-base leading-relaxed font-medium">
            {caseStudy.overview}
          </p>
        </div>

        {/* Section: Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              02. Real-World Problem
            </h3>
            <p className="text-white/80 text-xs md:text-sm leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              03. Technical Solution
            </h3>
            <p className="text-white/80 text-xs md:text-sm leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Section: Key Features */}
        <div className="mb-8 bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-4">
            04. Key Architectural Features
          </h3>
          <ul className="space-y-2.5">
            {caseStudy.features.map((feature, i) => (
              <li key={i} className="text-xs md:text-sm text-white/85 flex items-start gap-2.5 leading-relaxed">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section: Clean Architecture Visual Flow */}
        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-4">
            05. System Architecture Flow
          </h3>
          <div className="bg-black/60 border border-white/10 rounded-2xl p-6 font-mono text-xs">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
              <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 w-full md:w-auto">
                <div className="text-[10px] text-white/50 uppercase">Client Tier</div>
                <div className="font-bold text-white text-sm">React (SPA)</div>
              </div>
              
              <div className="text-red-500 font-bold hidden md:block">→</div>
              <div className="text-red-500 font-bold md:hidden">↓</div>

              <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 w-full md:w-auto">
                <div className="text-[10px] text-white/50 uppercase">Transport</div>
                <div className="font-bold text-white text-sm">REST API / JSON</div>
              </div>

              <div className="text-red-500 font-bold hidden md:block">→</div>
              <div className="text-red-500 font-bold md:hidden">↓</div>

              <div className="bg-white/10 border border-red-500/40 rounded-xl px-4 py-3 w-full md:w-auto">
                <div className="text-[10px] text-red-400 uppercase">Application Tier</div>
                <div className="font-bold text-white text-sm">Spring Boot</div>
              </div>

              <div className="text-red-500 font-bold hidden md:block">→</div>
              <div className="text-red-500 font-bold md:hidden">↓</div>

              <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 w-full md:w-auto">
                <div className="text-[10px] text-white/50 uppercase">Auth & Filter</div>
                <div className="font-bold text-white text-sm">Spring Security / JWT</div>
              </div>

              <div className="text-red-500 font-bold hidden md:block">→</div>
              <div className="text-red-500 font-bold md:hidden">↓</div>

              <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 w-full md:w-auto">
                <div className="text-[10px] text-white/50 uppercase">Data Tier</div>
                <div className="font-bold text-white text-sm">MySQL Database</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Relational Database Schema */}
        {caseStudy.databaseSchema && (
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3">
              06. Relational Database Design (MySQL)
            </h3>
            <div className="bg-black/40 border border-white/10 rounded-2xl p-4 md:p-5 font-mono text-xs overflow-x-auto">
              <div className="space-y-2">
                {caseStudy.databaseSchema.map((schemaLine, i) => (
                  <div key={i} className="text-white/80 border-b border-white/5 pb-1.5 last:border-0 last:pb-0">
                    <span className="text-red-400 font-bold font-mono mr-2">TABLE:</span>
                    {schemaLine}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Section: REST Endpoints */}
        {caseStudy.apiEndpoints && (
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3">
              07. Core REST API Endpoints
            </h3>
            <div className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden font-mono text-xs">
              <div className="divide-y divide-white/10">
                {caseStudy.apiEndpoints.map((ep, i) => (
                  <div key={i} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${ep.method === 'POST' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-green-500/20 text-green-400 border border-green-500/30'}`}>
                        {ep.method}
                      </span>
                      <span className="text-white font-medium">{ep.path}</span>
                    </div>
                    <span className="text-white/60 text-[11px] font-sans sm:text-right">{ep.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Section: Challenges & Technical Implementation */}
        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3">
            08. Technical Challenges & Solutions
          </h3>
          <div className="space-y-3">
            {caseStudy.challenges.map((challenge, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs md:text-sm text-white/80 leading-relaxed">
                {challenge}
              </div>
            ))}
          </div>
        </div>

        {/* Section: What I Built */}
        <div className="mb-8 bg-red-600/10 border border-red-500/25 rounded-2xl p-5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
            09. What I Built (Individual Contribution)
          </h3>
          <p className="text-white/90 text-xs md:text-sm leading-relaxed">
            {caseStudy.myContribution}
          </p>
        </div>

        {/* Links / Footer Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a 
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white text-black text-xs md:text-sm font-bold hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View Repository on GitHub
              </a>
            )}
            {project.links.demo ? (
              <a 
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#ff2a2a] text-white text-xs md:text-sm font-bold hover:bg-red-600 transition-colors"
              >
                Live Demo
              </a>
            ) : (
              <span className="text-xs text-white/40 font-mono">
                Live deployment coming soon
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-white/20 text-white text-xs md:text-sm font-semibold hover:bg-white/10 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCaseStudyModal;
