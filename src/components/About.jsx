import stackImage from '../assets/about/shyam-avatar.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons with official brand colors in high-contrast cards for maximum visibility
const JavaIcon = () => (
  <div className="bg-[#0f0f0f] border border-white/20 hover:border-white/40 p-4 md:p-5 rounded-2xl flex flex-col items-center gap-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.45)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.65)] hover:-translate-y-1 transition-all duration-300 w-28 sm:w-32 md:w-36 group">
    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
      <svg className="w-full h-full drop-shadow-md" viewBox="0 0 128 128">
        {/* Steam: Java Blue */}
        <path fill="#5382a1" d="M76.203 0s11.752 11.752-11.146 29.835c-18.359 14.499-4.187 22.754-.005 32.198-10.7-9.662-18.555-18.159-13.29-26.074C59.003 24.494 80.823 18.793 76.203 0z" />
        {/* Cup: Java Orange */}
        <path fill="#e76f00" d="M83.528 71.122s5.58 5.784-6.154 10.372c-22.342 8.725-46.496.666-29.911-6.023 6.238-2.515 9.738-2.728 9.738-2.728s-3.397-2.4-11.715 2.103c-24.692 13.36 11.12 19.441 39.654 8.366 5.363-2.077 8.162-5.965 8.162-5.965-.001.001-9.774-6.125-9.774-6.125zM91.625 96.106c-.198.395-.461.781-.791 1.159 0 0 13.189-3.404 8.545-11.964-4.591-8.454-8.145-12.625 10.927-27.179 0 0-29.855 7.447-18.681 37.984z" />
        {/* Saucer: Java Blue */}
        <path fill="#5382a1" d="M47.617 98.12c-19.192 5.362 11.677 16.439 36.115 5.969-4.003-1.556-6.874-3.391-6.874-3.391-10.897 5.163-31.934 2.759-25.932-2.097 4.501-3.631 0 0-3.309-.481zM65.856 86.36c-11.756 6.392-26.996 7.086-18.907 1.186 0 0-7.915 5.163-16.747 9.202 0 0-2.31 2.259 8.003 2.981 17.168 1.199 43.879-.749 45.026-8.065 0 0 1.243-3.178-17.375-5.304z" />
        <path fill="#5382a1" d="M66.414 113.085c21.023 1.345 53.358-.745 54.156-10.672 0 0-1.473 3.777-17.441 6.776-18.02 3.384-40.215 2.988-53.367.819 0 .001 2.695 2.228 16.652 3.077z" />
      </svg>
    </div>
    <div className="text-center">
      <span className="text-xs md:text-sm font-bold text-white tracking-wide block">Java</span>
      <span className="text-[10px] font-mono text-white/60 block">Core & OOP</span>
    </div>
  </div>
);

const SpringBootIcon = () => (
  <div className="bg-[#0f0f0f] border border-white/20 hover:border-white/40 p-4 md:p-5 rounded-2xl flex flex-col items-center gap-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.45)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.65)] hover:-translate-y-1 transition-all duration-300 w-28 sm:w-32 md:w-36 group">
    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
      <svg className="w-full h-full drop-shadow-md" viewBox="0 0 128 128">
        <path fill="#6DB33F" d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205-.026C28.984-.026 0 28.958 0 64.179c0 35.22 28.984 64.205 64.205 64.205 35.221 0 64.179-28.985 64.179-64.205 0-10.632-2.624-20.672-7.26-29.508a59.03 59.03 0 01-4.672-8.028zm-53.478 99.75c-23.407 0-42.392-18.985-42.392-42.393 0-23.407 18.985-42.392 42.392-42.392 4.016 0 7.907.563 11.591 1.607l-4.756 8.229a34.498 34.498 0 00-6.835-.683c-19.152 0-34.673 15.521-34.673 34.673 0 19.153 15.521 34.674 34.673 34.674 12.322 0 23.146-6.443 29.29-16.146l7.621 4.397c-7.966 12.614-22.043 20.984-37.911 20.034z"/>
        <path fill="#6DB33F" d="M96.118 56.392l-32.22 18.604-8.816-15.273 32.221-18.604z"/>
        <circle cx="64" cy="64" r="7" fill="#ffffff" />
        <path d="M64 42v15m0 14v15" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
    <div className="text-center">
      <span className="text-xs md:text-sm font-bold text-white tracking-wide block">Spring Boot</span>
      <span className="text-[10px] font-mono text-white/60 block">REST & Security</span>
    </div>
  </div>
);

const MySQLIcon = () => (
  <div className="bg-[#0f0f0f] border border-white/20 hover:border-white/40 p-4 md:p-5 rounded-2xl flex flex-col items-center gap-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.45)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.65)] hover:-translate-y-1 transition-all duration-300 w-28 sm:w-32 md:w-36 group">
    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
      <svg className="w-full h-full drop-shadow-md" viewBox="0 0 128 128">
        <path fill="#00758F" d="M117.688 98.242c-6.973-.191-12.297.461-16.852 2.379-1.293.547-3.355.559-3.566 2.18.711.746.82 1.859 1.387 2.777 1.086 1.754 2.922 4.113 4.559 5.352 1.789 1.348 3.633 2.793 5.551 3.961 3.414 2.082 7.223 3.27 10.504 5.352 1.938 1.23 3.859 2.777 5.75 4.164.934.684 1.563 1.75 2.773 2.18v-.195c-.637-.812-.801-1.93-1.387-2.777l-2.578-2.578c-2.52-3.344-5.719-6.281-9.117-8.719-2.711-1.949-8.781-4.578-9.91-7.73l-.199-.199c1.922-.219 4.172-.914 5.949-1.391 2.98-.797 5.645-.59 8.719-1.387l4.164-1.187v-.793c-1.555-1.594-2.664-3.707-4.359-5.152-4.441-3.781-9.285-7.555-14.273-10.703-2.766-1.746-6.184-2.883-9.117-4.363-.988-.496-2.719-.758-3.371-1.586-1.539-1.961-2.379-4.449-3.566-6.738-2.488-4.793-4.93-10.023-7.137-15.066-1.504-3.437-2.484-6.828-4.359-9.91-9-14.797-18.687-23.73-33.695-32.508-3.195-1.867-7.039-2.605-11.102-3.57l-6.543-.395c-1.332-.555-2.715-2.184-3.965-2.977C16.977 3.52 4.223-3.312.539 5.672-1.785 11.34 4.016 16.871 6.09 19.746c1.457 2.012 3.32 4.273 4.359 6.539.688 1.492.805 2.984 1.391 4.559 1.438 3.883 2.695 8.109 4.559 11.695.941 1.816 1.98 3.727 3.172 5.352.727.996 1.98 1.438 2.18 2.973-1.227 1.715-1.297 4.375-1.984 6.543-3.098 9.77-1.926 21.91 2.578 29.137 1.383 2.223 4.641 6.98 9.117 5.156 3.918-1.598 3.043-6.539 4.164-10.902.254-.988.098-1.715.594-2.379v.199l3.57 7.133c2.641 4.254 7.324 8.699 11.297 11.699 2.059 1.555 3.68 4.242 6.344 5.152v-.199h-.199c-.516-.805-1.324-1.137-1.98-1.781-1.551-1.523-3.277-3.414-4.559-5.156-3.613-4.902-6.805-10.27-9.711-15.855-1.391-2.668-2.598-5.609-3.77-8.324-.453-1.047-.445-2.633-1.387-3.172-1.281 1.988-3.172 3.598-4.164 5.945-1.582 3.754-1.789 8.336-2.375 13.082-.348.125-.195.039-.398.199-2.762-.668-3.73-3.508-4.758-5.949-2.594-6.164-3.078-16.09-.793-23.191.59-1.836 3.262-7.617 2.18-9.316-.516-1.691-2.219-2.672-3.172-3.965-1.18-1.598-2.355-3.703-3.172-5.551-2.125-4.805-3.113-10.203-5.352-15.062-1.07-2.324-2.875-4.676-4.359-6.738-1.645-2.289-3.484-3.977-4.758-6.742-.453-.984-1.066-2.559-.398-3.566.215-.684.516-.969 1.191-1.191 1.148-.887 4.352.297 5.547.793 3.18 1.32 5.832 2.578 8.527 4.363 1.289.855 2.598 2.512 4.16 2.973h1.785c2.789.641 5.914.195 8.523.988 4.609 1.402 8.738 3.582 12.488 5.949 11.422 7.215 20.766 17.48 27.156 29.734 1.027 1.973 1.473 3.852 2.379 5.945 1.824 4.219 4.125 8.559 5.941 12.688 1.816 4.113 3.582 8.27 6.148 11.695 1.348 1.801 6.551 2.766 8.918 3.766 1.66.699 4.379 1.43 5.949 2.379 3 1.809 5.906 3.965 8.723 5.945 1.402.992 5.73 3.168 5.945 4.957zm-88.605-75.52c-1.453-.027-2.48.156-3.566.395v.199h.195c.695 1.422 1.918 2.34 2.777 3.566l1.98 4.164.199-.195c1.227-.867 1.789-2.25 1.781-4.363-.492-.52-.562-1.164-.992-1.785-.562-.824-1.66-1.289-2.375-1.98zm0 0" />
        <circle cx="85" cy="40" r="5" fill="#F29111" />
      </svg>
    </div>
    <div className="text-center">
      <span className="text-xs md:text-sm font-bold text-white tracking-wide block">MySQL</span>
      <span className="text-[10px] font-mono text-white/60 block">Relational DB</span>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Polu Shyam Sunder Reddy — Java Developer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <div className="inline-block border border-black/20 rounded-full px-4 py-1 text-xs font-mono font-bold text-black/80 uppercase mb-3 bg-black/10">
            {aboutContent.tagline}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">{aboutContent.heading}</h2>
          <p 
            className="text-base md:text-lg font-medium mb-8 leading-relaxed max-w-3xl text-white drop-shadow-sm"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Recruiter Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {aboutContent.stats.map((stat, i) => (
              <div 
                key={i}
                data-aos="fade-up"
                data-aos-delay={300 + i * 50}
                className="bg-black/20 backdrop-blur-sm border border-black/15 rounded-xl p-3.5 text-center"
              >
                <div className="text-xl md:text-2xl font-black text-white mb-0.5">{stat.value}</div>
                <div className="text-[11px] font-bold text-red-100 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Horizontal Skills Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-black/15">
            <div data-aos="zoom-in" data-aos-delay="450">
              <JavaIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="550">
              <SpringBootIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="650">
              <MySQLIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
