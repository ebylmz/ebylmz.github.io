import NavBar from './components/NavBar'
import Intro from './components/Intro'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Publications from './components/Publications'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Intro />
        <About />
        <Education />
        <Experience />
        <Publications />
        <Projects />
        <Footer />
      </main>
    </>
  )
}
