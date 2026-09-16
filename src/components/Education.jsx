import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">

      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Academic Background
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Education & Academics
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Formal foundations in computer science, software engineering, and database systems.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/15 rounded-3xl p-8 md:p-12 hover:border-red-500/40 hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] transition-all duration-500"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/10">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#ff2a2a]/20 border border-[#ff2a2a]/40 flex items-center justify-center text-3xl shrink-0">
                🎓
              </div>
              <div>
                <span className="text-red-400 text-xs font-mono font-bold tracking-widest uppercase">
                  {education.graduation}
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-black tracking-tight mt-1">
                  {education.degree}
                </h3>
                <p className="text-white/70 text-base md:text-lg font-medium mt-1">
                  {education.institution}
                </p>
                <p className="text-white/40 text-xs font-mono mt-0.5">
                  {education.location}
                </p>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="flex flex-col items-start md:items-end bg-black/40 border border-white/10 px-6 py-4 rounded-2xl">
              <span className="text-white/50 text-xs font-mono uppercase tracking-wider">Academic Score</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-white text-3xl md:text-4xl font-black">{education.cgpa}</span>
                <span className="text-red-400 text-sm font-bold">/ 10 CGPA</span>
              </div>
            </div>
          </div>

          {/* Academic Highlights & Key Coursework */}
          <div className="pt-8">
            <h4 className="text-white/70 text-xs font-bold uppercase tracking-wider mb-4">
              Core Focus & Key Subjects:
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {[
                "Core Java & OOP",
                "Data Structures & Algorithms (DSA)",
                "Database Management Systems (DBMS)",
                "Spring Boot & Microservices",
                "Operating Systems",
                "Computer Networks",
                "Software Engineering Principles",
                "Web Technologies",
              ].map((subject) => (
                <span
                  key={subject}
                  className="px-4 py-2 text-xs md:text-sm font-semibold text-white/80 bg-white/5 rounded-xl border border-white/10 hover:border-red-500/30 hover:bg-white/10 hover:text-white transition-all"
                >
                  {subject}
                </span>
              ))}
            </div>

            {/* University Engagement */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between text-xs text-white/60">
              <div className="flex items-center gap-2">
                <span className="text-red-400 font-bold">🏛️ Campus:</span>
                <span>Guru Nanak Institutions Technical Campus (GNITC), Hyderabad</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400 font-bold">⭐ Responsibilities:</span>
                <span>Treasurer (Infonex) · Lead (Techtrix)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
