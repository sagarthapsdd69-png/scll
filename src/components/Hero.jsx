import { useEffect, useState } from 'react'
import heroBg from '/images/school-background.jpg'
import { scrollTo } from './Header'

export default function Hero() {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 100)
    return () => clearTimeout(t)
  }, [])

  const anim = animated ? 'animate-in' : ''

  return (
    <section
      className="premium-hero"
      id="home"
      style={{ backgroundImage: `url('${heroBg}')` }}
    >
      <div className="hero-background-animation" />
      <div className="hero-container">
        <div className="hero-content-wrapper">
          <h1 className={`hero-headline ${anim}`}>
            Brilliant Education Foundation Pvt. Ltd.
          </h1>
          <h2 className={`hero-subheadline ${anim}`}>
            (Brilliant Pupils' Secondary School - BPSS)
          </h2>
          <p className={`hero-tagline ${anim}`}>
            "Skillful Education Is The Main Foundation Of Advancement."
          </p>
          <div className={`hero-location ${anim}`}>
            <div className="location-card">
              <p className="location-text">Arjundhara-06, Chhata Chowk, Jhapa, Nepal</p>
              <p className="education-level">Complete Education: PG to Grade 10 &amp; +2 Programs</p>
            </div>
          </div>
          <div className={`hero-cta ${anim}`}>
            <a href="#about" className="cta-button primary"
              onClick={e => { e.preventDefault(); scrollTo('#about') }}>
              Discover Excellence
            </a>
            <a href="#contact" className="cta-button secondary"
              onClick={e => { e.preventDefault(); scrollTo('#contact') }}>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
