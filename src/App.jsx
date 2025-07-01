import NavBar from './components/NavBar'
import Intro from './components/Intro'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </>
  )
}
