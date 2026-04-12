import { useState, useEffect, useRef } from 'react'
import logo from '/images/Bpss Logo.jpeg'

const NAV_LINKS = [
  { href: '#home',      label: 'Home' },
  { href: '#about',     label: 'About' },
  { href: '#founding',  label: 'Founding Members' },
  { href: '#principal', label: 'Principal' },
  { href: '#classes',   label: 'Academics' },
  { href: '#gallery',   label: 'Gallery' },
  { href: '#contact',   label: 'Contact' },
]

export function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMenuOpen(false)
    }
    document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
  }, [])

  function handleNavClick(e, href) {
    e.preventDefault()
    setMenuOpen(false)
    scrollTo(href)
  }

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="BPSS Logo" />
          <h1>Brilliant Education Foundation</h1>
        </div>
        <nav ref={navRef}>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>
          <ul className={menuOpen ? 'active' : ''}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="nav-link" onClick={(e) => handleNavClick(e, href)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
