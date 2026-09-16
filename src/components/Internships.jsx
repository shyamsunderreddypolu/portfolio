import { internshipsList } from '../data/portfolioData';

const InternshipCard = ({ intern, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className="bg-black/25 backdrop-blur-md border border-white/15 rounded-3xl p-8 md:p-10 hover:bg-black/35 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 flex flex-col justify-between max-w-4xl mx-auto w-full"
  >
    <div>
      {/* Header Pill & Category */}
      <div className="flex flex-wrap justify-between items-center gap-2 mb-6">
        <span className="text-white/90 text-xs font-mono font-bold tracking-widest uppercase bg-black/30 px-3.5 py-1.5 rounded-full border border-white/15">
          {intern.duration}
        </span>
        <span className="bg-white/15 text-white text-[10px] font-mono font-bold tracking-widest uppercase py-1 px-3.5 rounded-full border border-white/20">
          {intern.location}
        </span>
      </div>

      {/* Role & Company */}
      <h3 className="text-white text-2xl md:text-3xl font-black mb-1.5 tracking-tight">
        {intern.role}
      </h3>
      <p className="text-black font-black text-lg md:text-xl tracking-wide mb-4 uppercase">
        {intern.organization}
      </p>

      {/* Summary */}
      <p className="text-white/90 text-xs md:text-sm font-medium leading-relaxed mb-6 bg-black/20 p-3.5 rounded-xl border border-white/10">
        {intern.summary}
      </p>

      {/* Key Responsibilities & Achievements */}
      <div className="mb-8">
        <h4 className="text-white/80 text-xs font-bold uppercase tracking-wider mb-3">
          Key Implementation Achievements:
        </h4>
        <ul className="text-white/95 text-xs md:text-sm font-medium space-y-2.5 pl-4 list-disc leading-relaxed">
          {(intern.bullets || intern.skills).map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* Technologies used */}
    <div className="pt-6 border-t border-white/15">
      <h4 className="text-white/80 text-xs font-bold uppercase tracking-wider mb-3">
        Technologies & Tools Applied:
      </h4>
      <div className="flex flex-wrap gap-2">
        {intern.tech.map((t) => (
          <span 
            key={t}
            className="px-3 py-1 text-xs font-mono font-bold text-white bg-white/10 rounded-full border border-white/15 hover:bg-white/25 transition-all"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Internships = () => {
  return (
    <section id="experience" className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-black/20 rounded-full px-5 py-1.5 text-sm text-black font-bold mb-4 bg-black/10">
            Professional Background
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight uppercase">
            Work Experience
          </h2>
          <p className="text-white text-base md:text-lg font-medium max-w-xl mx-auto leading-relaxed drop-shadow-sm">
            Hands-on software development internship engineering backend REST APIs, authentication security, and relational database schemas.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="w-full flex justify-center">
          {internshipsList.map((intern, index) => (
            <InternshipCard key={intern.organization} intern={intern} index={index} />
          ))}
        </div>

      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute bottom-10 left-10 text-black opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Internships;
