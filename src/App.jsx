import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Internships from './components/Internships'
import Projects from './components/Projects'
import Leadership from './components/Leadership'
import Education from './components/Education'
import Certificates from './components/Certificates'
import SoftSkills from './components/SoftSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Internships />
      <Projects />
      <Education />
      <Certificates />
      <Leadership />
      <SoftSkills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
