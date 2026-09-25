import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '/images/Bpss Logo.jpeg'

const NAV_LINKS = [
  { href: '#home', label: 'Home', type: 'anchor' },
  { href: '#about', label: 'About', type: 'anchor' },
  { href: '#founding', label: 'Founding Members', type: 'anchor' },
  { href: '#principal', label: 'Principal', type: 'anchor' },
  { href: '#classes', label: 'Academics', type: 'anchor' },
  { href: '/academic-calendar', label: 'Academic Calendar', type: 'route' },
  { href: '#gallery', label: 'Gallery', type: 'anchor' },
  { href: '#contact', label: 'Contact', type: 'anchor' },
]

export function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

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

    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => scrollTo(href), 50)
      } else {
        scrollTo(href)
      }
      return
    }

    navigate(href)
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
            {NAV_LINKS.map(({ href, label, type }) => {
              const isActive = location.pathname === '/academic-calendar' && href === '/academic-calendar'
              return (
                <li key={href}>
                  {type === 'route' ? (
                    <Link
                      to={href}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  ) : (
                    <a href={href} className="nav-link" onClick={(e) => handleNavClick(e, href)}>
                      {label}
                    </a>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
