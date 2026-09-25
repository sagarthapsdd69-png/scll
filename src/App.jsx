import '../styles/premium-white.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Founding from './components/Founding'
import Principal from './components/Principal'
import Academics from './components/Academics'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AcademicCalendar from './components/AcademicCalendar'
import HomepageCalendarCard from './components/HomepageCalendarCard'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/academic-calendar"
            element={<AcademicCalendar />}
          />
          <Route
            path="/"
            element={(
              <>
                <Hero />
                <About />
                <Founding />
                <Principal />
                <Academics />
                <HomepageCalendarCard />
                <Gallery />
                <Contact />
              </>
            )}
          />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
