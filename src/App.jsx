import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Github from './components/Github'
import Hero from './components/Hero'
import Opensource from './components/Opensource'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (

      <>
  <Navbar />

  <section id="hero">
    <Hero />
  </section>

  <section id="experience">
    <Experience />
  </section>

  <section id="skills">
    <Skills />
  </section>

  <section id="opensource">
    <Opensource />
  </section>

  <section id="projects">
    <Projects />
  </section>

  <section id="contact">
    <Contact />
  </section>
</>

  )
}

export default App
