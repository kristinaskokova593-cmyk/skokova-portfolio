import { useState } from 'react'
import type { NavigateFn } from '../App'
import noireImg from '../imports/Noire.png'

interface CaseNoireProps {
  navigate: NavigateFn
}

export default function CaseNoire({ navigate }: CaseNoireProps) {
  const [imgHovered, setImgHovered] = useState(false)

  const bg = '#0D0D0B'
  const cream = '#F0EDE6'
  const muted = 'rgba(240,237,230,0.45)'

  return (
    <div style={{ background: bg, color: cream, minHeight: '100vh' }}>
      {/* Back */}
<div
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 50,
    padding: 'clamp(24px, 4vw, 48px) clamp(24px, 5vw, 80px)',
  }}
>
  <button
    onClick={() => navigate('home')}
    style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: muted,
      fontFamily: "'Onest', sans-serif",
      fontSize: '0.65rem',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: 0,
      transition: 'color 0.2s',
    }}
    onMouseEnter={e => (e.currentTarget.style.color = cream)}
    onMouseLeave={e => (e.currentTarget.style.color = muted)}
  >
    ← Назад
  </button>
</div>

{/* Space reserved for fixed Back button */}
<div
  style={{
    height: '100px',
  }}
/>

      {/* Hero */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px) clamp(48px, 8vh, 80px)' }}>
        <div className="case-header-grid">
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: '0.4rem' }}>
                03 — Кейс
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['Веб-дизайн', 'Digital'].map(t => (
                  <span key={t} style={{ border: '1px solid rgba(240,237,230,0.2)', padding: '4px 10px', fontFamily: "'Onest', sans-serif", fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: muted }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                fontWeight: 400,
                lineHeight: 0.9,
                letterSpacing: '-0.025em',
                color: cream,
              }}
            >
              NOIRÉ
            </h1>
          </div>
          <div>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', color: muted, lineHeight: 1.75, maxWidth: '44ch' }}>
              Разработка веб-дизайна и визуальной системы для NOIRÉ — марки изысканных ювелирных украшений. Проект строится на противопоставлении чёрного и кремового, скульптурности форм и минималистичной типографики.
            </p>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', color: 'rgba(240,237,230,0.3)', letterSpacing: '0.08em', marginTop: '1.5rem' }}>2026</p>
          </div>
        </div>
      </section>

      {/* Main visual — full NOIRÉ composite */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px) clamp(60px, 10vh, 100px)' }}>
        <div
          onMouseEnter={() => setImgHovered(true)}
          onMouseLeave={() => setImgHovered(false)}
          style={{ overflow: 'hidden', position: 'relative' }}
        >
          <img
            src={noireImg}
            alt="NOIRÉ — полный обзор проекта: от главного экрана до брендированных материалов"
            style={{
              width: '100%',
              display: 'block',
              transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transform: imgHovered ? 'scale(1.01)' : 'scale(1)',
            }}
          />
        </div>
      </section>

      {/* Concept */}
      <section className="case-concept-grid" style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px) clamp(80px, 12vh, 120px)' }}>
        <div>
          <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted }}>02 — Концепция</p>
        </div>
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 400, color: cream, lineHeight: 1.2, marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>
            Ювелирность в каждой детали
          </h2>
          <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)', color: muted, lineHeight: 1.8 }}>
            NOIRÉ — это ювелирная марка, где каждое украшение — это не просто изделие, а история. Визуальная система строится на сопоставлении абсолютного чёрного и тёплого кремового, роскошных фотографий украшений на коже и минималистичной типографики с широким трекингом. Монограмма N° становится центральным элементом всей идентичности.
          </p>
        </div>
      </section>

      {/* Visual system */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px) clamp(80px, 12vh, 120px)' }}>
        <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: '3rem' }}>
          03 — Визуальная система
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '2.5rem' }}>
          {[
            { color: '#0A0A08', label: 'NOIRÉ Black' },
            { color: '#F0EDE6', label: 'Cream' },
            { color: '#2D1F14', label: 'Dark Espresso' },
            { color: '#C4A882', label: 'Warm Gold' },
          ].map(c => (
            <div key={c.color}>
              <div style={{ height: '80px', background: c.color, border: c.color === '#F0EDE6' ? '1px solid rgba(240,237,230,0.2)' : 'none', marginBottom: '8px' }} />
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.58rem', color: muted, letterSpacing: '0.06em' }}>{c.label}</p>
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.55rem', color: 'rgba(240,237,230,0.3)' }}>{c.color}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div style={{ border: '1px solid rgba(240,237,230,0.08)', padding: '2rem' }}>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: '1.5rem' }}>Дисплейная гарнитура</p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', fontWeight: 400, color: cream, lineHeight: 0.9, letterSpacing: '0.08em' }}>NOIRÉ</p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(1rem, 2vw, 1.6rem)', color: muted, marginTop: '0.5rem' }}>Playfair Display</p>
          </div>
          <div style={{ border: '1px solid rgba(240,237,230,0.08)', padding: '2rem' }}>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: '1.5rem' }}>Основная гарнитура</p>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: cream, lineHeight: 2 }}>N O I R É — Ю В Е Л И Р Н Ы Е<br />У К Р А Ш Е Н И Я</p>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.55rem', color: muted, marginTop: '0.75rem' }}>Onest Light / 400 — широкий трекинг</p>
          </div>
        </div>
      </section>

      {/* Branding materials section */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px) clamp(80px, 12vh, 120px)' }}>
        <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: '2rem' }}>
          04 — Брендинг и материалы
        </p>
        <div style={{ overflow: 'hidden' }}>
          <img
            src={noireImg}
            alt="NOIRÉ — брендированные материалы: пакеты, бирки, упаковка"
            style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: '0 40%', maxHeight: '70vh' }}
          />
        </div>
      </section>

      {/* Next project */}
      <section
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: 'clamp(48px, 8vh, 80px) clamp(24px, 5vw, 80px)',
          borderTop: '1px solid rgba(240,237,230,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: muted }}>
          Следующий проект
        </p>
        <button
          onClick={() => navigate('savor')}
          style={{
            background: 'none',
            border: '1px solid rgba(240,237,230,0.25)',
            color: cream,
            cursor: 'pointer',
            padding: '14px 28px',
            fontFamily: "'Onest', sans-serif",
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'background 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(240,237,230,0.06)'; e.currentTarget.style.borderColor = 'rgba(240,237,230,0.5)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.borderColor = 'rgba(240,237,230,0.25)' }}
        >
          SAVOR <span>→</span>
        </button>
      </section>
    </div>
  )
}
