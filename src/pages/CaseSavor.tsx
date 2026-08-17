import type { NavigateFn } from '../App'
import savorImg from '../imports/______________________.png'

interface CaseSavorProps {
  navigate: NavigateFn
}

export default function CaseSavor({ navigate }: CaseSavorProps) {
  const bg = '#131008'
  const warm = '#F0E8D8'
  const gold = '#C4A06B'
  const muted = 'rgba(240,232,216,0.45)'

  return (
    <div style={{ background: bg, color: warm, minHeight: '100vh' }}>
      {/* Back */}
      <div style={{ padding: 'clamp(24px, 4vw, 48px) clamp(24px, 5vw, 80px)', maxWidth: 1440, margin: '0 auto' }}>
        <button
          onClick={() => navigate('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: muted, fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px', padding: 0, transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = warm)}
          onMouseLeave={e => (e.currentTarget.style.color = muted)}
        >
          ← Назад
        </button>
      </div>

      {/* Header */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px) clamp(48px, 8vh, 80px)' }}>
        <div className="case-header-grid">
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: '0.4rem' }}>04 — Кейс</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['Веб-дизайн', 'UI'].map(t => (
                  <span key={t} style={{ border: '1px solid rgba(240,232,216,0.2)', padding: '4px 10px', fontFamily: "'Onest', sans-serif", fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: muted }}>
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
                letterSpacing: '-0.02em',
                color: warm,
              }}
            >
              SAVOR
            </h1>
          </div>
          <div>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', color: muted, lineHeight: 1.8, maxWidth: '44ch' }}>
              Веб-дизайн сайта кофейни SAVOR — уютного места для ценителей хорошего кофе и семейных моментов. Визуальный язык строится на тёмной, тёплой палитре, фотографиях интерьера и напитков.
            </p>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', color: 'rgba(240,232,216,0.3)', letterSpacing: '0.08em', marginTop: '1.5rem' }}>2025</p>
          </div>
        </div>
      </section>

      {/* Hero screenshot */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px) clamp(60px, 10vh, 100px)' }}>
        <div style={{ overflow: 'hidden' }}>
          <img
            src={savorImg}
            alt="SAVOR — главный экран сайта кофейни"
            style={{ width: '100%', display: 'block', transition: 'transform 0.6s ease' }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.01)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </div>
      </section>

      {/* Concept */}
      <section className="case-concept-grid" style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px) clamp(80px, 12vh, 120px)' }}>
        <div>
          <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted }}>02 — Концепция</p>
        </div>
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 400, color: warm, lineHeight: 1.2, marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>
            Атмосфера уюта
          </h2>
          <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)', color: muted, lineHeight: 1.8 }}>
            Главная страница SAVOR строится на контрасте тёмного фона с тёплыми фотографиями интерьера и напитков. Навигация лаконична — Меню, Услуги, О нас — и сразу задаёт ощущение камерности. CTA «Забронировать» вынесена рядом с основной, создавая прямой путь к действию.
          </p>
        </div>
      </section>

      {/* Visual system */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px) clamp(80px, 12vh, 120px)' }}>
        <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: '3rem' }}>
          03 — Цветовая система
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '3rem' }}>
          {[
            { color: '#131008', label: 'Espresso Black' },
            { color: '#2A2018', label: 'Dark Roast' },
            { color: '#C4A06B', label: 'Warm Gold' },
            { color: '#F0E8D8', label: 'Cream Latte' },
          ].map(c => (
            <div key={c.color}>
              <div style={{ height: '80px', background: c.color, border: c.color === '#F0E8D8' ? '1px solid rgba(240,232,216,0.2)' : 'none', marginBottom: '8px' }} />
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.58rem', color: muted, letterSpacing: '0.06em' }}>{c.label}</p>
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.55rem', color: 'rgba(240,232,216,0.3)' }}>{c.color}</p>
            </div>
          ))}
        </div>

        {/* Typography */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div style={{ border: '1px solid rgba(240,232,216,0.08)', padding: '2rem' }}>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: '1.5rem' }}>Заголовок</p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)', color: warm, lineHeight: 1.0 }}>
              Добро<br />пожаловать<br /><span style={{ fontStyle: 'italic', fontWeight: 400 }}>в SAVOR</span>
            </p>
          </div>
          <div style={{ border: '1px solid rgba(240,232,216,0.08)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: '1.5rem' }}>Навигация</p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                {['меню', 'услуги', 'о нас'].map(nav => (
                  <span key={nav} style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.75rem', letterSpacing: '0.06em', color: warm }}>{nav}</span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', marginTop: '2rem' }}>
              <div style={{ border: '1px solid rgba(240,232,216,0.4)', padding: '8px 18px', fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', color: warm }}>меню</div>
              <div style={{ background: warm, padding: '8px 18px', fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', color: bg }}>забронировать</div>
            </div>
          </div>
        </div>
      </section>

      {/* Web design detail */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px) clamp(80px, 12vh, 120px)' }}>
        <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: '2rem' }}>
          04 — Фотографический язык
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px' }}>
          {/* Simulate the photo grid from SAVOR */}
          <div style={{ aspectRatio: '1', overflow: 'hidden' }}>
            <img src={savorImg} alt="SAVOR интерьер" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '57% 15%' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '3px' }}>
            <div style={{ overflow: 'hidden' }}>
              <img src={savorImg} alt="SAVOR — кофе" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '90% 15%' }} />
            </div>
            <div style={{ overflow: 'hidden' }}>
              <img src={savorImg} alt="SAVOR — латте-арт" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '57% 85%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: 'clamp(48px, 8vh, 80px) clamp(24px, 5vw, 80px)',
          borderTop: '1px solid rgba(240,232,216,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: muted }}>
          Следующий проект
        </p>
        <button
          onClick={() => navigate('petday')}
          style={{ background: 'none', border: '1px solid rgba(240,232,216,0.25)', color: warm, cursor: 'pointer', padding: '14px 28px', fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px', transition: 'background 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(240,232,216,0.06)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'none')}
        >
          Yandex Pet Day <span>→</span>
        </button>
      </section>
    </div>
  )
}
