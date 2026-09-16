import { certificates } from '../data/portfolioData';

const CertificateCard = ({ cert, aosDelay }) => (
  <div 
    data-aos="zoom-in"
    data-aos-delay={aosDelay}
    className="bg-black/25 backdrop-blur-md rounded-2xl p-6 border border-white/15 hover:border-white/30 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all duration-500 group flex flex-col justify-between"
  >
    <div>
      <div className="flex items-start gap-4 mb-4">
        <span className="text-3xl p-2 bg-white/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
          {cert.icon}
        </span>
        <div className="flex-1">
          <h3 className="text-white font-black text-lg md:text-xl leading-tight mb-1 group-hover:text-white transition-colors">
            {cert.name}
          </h3>
          <p className="text-red-200 text-xs font-bold uppercase tracking-wider font-mono">
            {cert.issuer} • {cert.date}
          </p>
        </div>
      </div>

      {cert.highlight && (
        <p className="text-white/80 text-xs font-semibold mb-4 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 inline-block">
          ✓ {cert.highlight}
        </p>
      )}

      {cert.verifyCode && (
        <p className="text-white/70 text-xs font-mono mb-4">
          <span className="text-white font-bold">{cert.verifyCode}</span>
        </p>
      )}
    </div>

    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
      {cert.pdfUrl && (
        <a
          href={cert.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-white bg-white/15 hover:bg-white hover:text-[#ff2a2a] px-4 py-2 rounded-full border border-white/20 transition-all flex items-center gap-1.5"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          View Certificate PDF
        </a>
      )}

      {cert.verifyUrl && (
        <a
          href={cert.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-white/70 hover:text-white underline underline-offset-4 transition-colors"
        >
          Verify Online ↗
        </a>
      )}
    </div>
  </div>
);

const Certificates = () => {
  return (
    <section id="certificates" className="bg-[#ff2a2a] pt-20 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div data-aos="fade-up" className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight uppercase">
            Certifications
          </h2>
          <p className="text-red-100 text-base md:text-lg font-semibold max-w-lg mx-auto">
            Official industry certifications verifying competence in Java development, database management, and SQL.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {certificates.featured.map((cert, index) => (
            <CertificateCard 
              key={cert.name} 
              cert={cert} 
              aosDelay={String((index + 1) * 100)} 
            />
          ))}
        </div>

        {/* View All Certificates CTA */}
        <div data-aos="fade-up" data-aos-delay="500" className="flex justify-center">
          <a
            href={certificates.viewAllUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black font-black text-sm md:text-base hover:bg-gray-100 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 group"
          >
            <svg className="w-5 h-5 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Verified Certificate PDF
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-16 left-6 md:left-16 text-black opacity-20 animate-pulse">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-20 right-8 md:right-24 text-black opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Certificates;

