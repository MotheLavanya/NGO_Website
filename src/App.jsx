import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ImpactStats from './components/ImpactStats'
import Hero from './sections/Hero'
import About from './sections/About'
import Programs from './sections/Programs'
import ImpactStories from './sections/ImpactStories'
import Donate from './sections/Donate'
import GetInvolved from './sections/GetInvolved'
import Transparency from './sections/Transparency'
import Partners from './components/Partners'
import Blog from './sections/Blog'
import FAQ from './sections/FAQ'
import Testimonials from './sections/Testimonials'
import Newsletter from './sections/Newsletter'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages
import AboutPage from './pages/AboutPage'
import ProgramsPage from './pages/ProgramsPage'
import ImpactPage from './pages/ImpactPage'
import DonatePage from './pages/DonatePage'
import ContactPage from './pages/ContactPage'
import TransparencyPage from './pages/TransparencyPage'
import BlogPage from './pages/BlogPage'

import CommunityPage from './pages/CommunityPage'
import TestimonialsPage from './pages/TestimonialsPage'

const Home = () => (
  <>
    <Hero />
    <ImpactStats />
    <About />
    <Programs />
    <Donate />
    <Newsletter />
  </>
)

function App() {
  return (
    <Router>
      <ScrollToTop />
      <main className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/transparency" element={<TransparencyPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}


export default App

