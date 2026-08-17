import { useState, useEffect } from 'react'
import type { Page, NavigateFn } from '../App'

interface NavProps {
  page: Page
  navigate: NavigateFn
}

export default function Nav({ page, navigate }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    if (page !== 'home') {
      navigate('home', id)
    } else {
      const el = document.getElementById(id)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const goHome = () => {
    setMenuOpen(false)
    navigate('home')
  }

  const navBg = scrolled
    ? 'rgba(246,244,239,0.96)'
    : 'transparent'
  const navBorder = scrolled ? '1px solid rgba(17,17,17,0.08)' : '1px solid transparent'

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: navBg,
          borderBottom: navBorder,
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
          padding: scrolled ? '14px 64px' : '22px 64px',
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <button
            onClick={goHome}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              fontFamily: "'Onest', system-ui, sans-serif",
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#111111',
            }}
          >
            КРИСТИНА СКОКОВА
          </button>

          {/* Desktop nav */}
          <div className="desktop-nav">
            <button className="nav-link" onClick={() => scrollTo('works')}>
              Работы
            </button>
            <button className="nav-link" onClick={() => scrollTo('about')}>
              Обо мне
            </button>
            <button className="nav-link" onClick={() => scrollTo('services')}>
              Услуги
            </button>
            <button className="nav-link" onClick={() => scrollTo('contact')}>
              Контакты
            </button>
            <button
              onClick={() => window.open('https://t.me/skokova_kris', '_blank')}
              style={{
                background: 'transparent',
color: '#111111',
border: '1px solid #111111',
                padding: '10px 20px',
                fontFamily: "'Onest', system-ui, sans-serif",
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              onMouseEnter={e => {
  e.currentTarget.style.background = '#111111'
  e.currentTarget.style.color = '#F6F4EF'
}}
onMouseLeave={e => {
  e.currentTarget.style.background = 'transparent'
  e.currentTarget.style.color = '#111111'
}}
            >
              Обсудить проект <span style={{ fontSize: '0.8em' }}>↗</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px 8px',
              fontFamily: "'Onest', system-ui, sans-serif",
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#111111',
            }}
          >
            {menuOpen ? '✕ ЗАКРЫТЬ' : 'МЕНЮ'}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            background: '#F6F4EF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '0 32px',
            gap: '2rem',
          }}
        >
          {[
            { label: 'Работы', id: 'works' },
            { label: 'Обо мне', id: 'about' },
            { label: 'Услуги', id: 'services' },
            { label: 'Контакты', id: 'contact' },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2rem, 10vw, 3.5rem)',
                fontWeight: 400,
                color: '#111111',
                textAlign: 'left',
                lineHeight: 1.1,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.4')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              {item.label}
            </button>
          ))}
          <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(17,17,17,0.12)', paddingTop: '2rem', width: '100%' }}>
            <p style={{ fontFamily: "'Onest', system-ui, sans-serif", fontSize: '0.75rem', letterSpacing: '0.08em', color: '#888877', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              Контакты
            </p>
            <a href="https://t.me/skokova_kris" style={{ display: 'block', color: '#111111', textDecoration: 'none', fontFamily: "'Onest'", fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              @skokova_kris — Telegram
            </a>
            <a href="mailto:kristinaskokova593@gmail.com" style={{ display: 'block', color: '#111111', textDecoration: 'none', fontFamily: "'Onest'", fontSize: '0.9rem' }}>
              kristinaskokova593@gmail.com
            </a>
          </div>
        </div>
      )}
    </>
  )
}
