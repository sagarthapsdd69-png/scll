import '../styles/premium-white.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Founding from './components/Founding'
import Principal from './components/Principal'
import Academics from './components/Academics'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Founding />
        <Principal />
        <Academics />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
