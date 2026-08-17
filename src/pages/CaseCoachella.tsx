import type { NavigateFn } from '../App'

interface CaseCoachellaProps {
  navigate: NavigateFn
}

export default function CaseCoachella({ navigate }: CaseCoachellaProps) {
  const bg = '#110820'
  const purple = '#7B2FBE'
  const orange = '#FF5A1F'
  const light = '#F5F0FF'
  const muted = 'rgba(245,240,255,0.45)'

  return (
    <div style={{ background: bg, color: light, minHeight: '100vh' }}>
      {/* Back */}
      <div style={{ padding: 'clamp(24px, 4vw, 48px) clamp(24px, 5vw, 80px)', maxWidth: 1440, margin: '0 auto' }}>
        <button
          onClick={() => navigate('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: muted, fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px', padding: 0, transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = light)}
          onMouseLeave={e => (e.currentTarget.style.color = muted)}
        >
          ← Назад
        </button>
      </div>

      {/* Hero */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px) clamp(48px, 8vh, 80px)' }}>
        <div className="case-header-grid">
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: '0.4rem' }}>01 — Кейс</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['Айдентика', 'Веб-дизайн', 'Digital'].map(t => (
                  <span key={t} style={{ border: '1px solid rgba(245,240,255,0.15)', padding: '4px 10px', fontFamily: "'Onest', sans-serif", fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: muted }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
                fontWeight: 400,
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
                color: light,
              }}
            >
              Coachella
            </h1>
          </div>
          <div>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', color: muted, lineHeight: 1.8, maxWidth: '44ch', marginBottom: '1.5rem' }}>
              Ребрендинг Coachella через тему природы. Новая визуальная идентичность соединяет иконическую принадлежность фестиваля к пустыне с органическими формами — ботаникой, текстурами, живым цветом.
            </p>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', color: 'rgba(245,240,255,0.3)', letterSpacing: '0.08em' }}>2026</p>
          </div>
        </div>
      </section>

      {/* Main visual — atmospheric gradient */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px) clamp(60px, 10vh, 100px)' }}>
        <div
          style={{
            aspectRatio: '16/9',
            background: `linear-gradient(135deg, #1E0040 0%, #3D0A6E 30%, #7B2FBE 60%, ${orange} 85%, #FF8C4B 100%)`,
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'flex-end',
            padding: 'clamp(24px, 4vw, 56px)',
          }}
        >
          {/* Abstract nature circles */}
          <div style={{ position: 'absolute', top: '-20%', right: '-5%', width: '45%', height: '140%', borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%', background: 'rgba(255,90,31,0.18)', filter: 'blur(1px)' }} />
          <div style={{ position: 'absolute', top: '10%', right: '12%', width: '30%', height: '80%', borderRadius: '50%', background: 'rgba(123,47,190,0.3)', filter: 'blur(2px)' }} />
          <div style={{ position: 'absolute', top: '20%', left: '25%', width: '50px', height: '50px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)' }} />
          <div style={{ position: 'absolute', top: '15%', left: '30%', width: '120px', height: '120px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }} />
          <div style={{ position: 'absolute', top: '5%', left: '35%', width: '200px', height: '200px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)' }} />
          {/* Decorative typography */}
          <div style={{ position: 'absolute', top: '8%', left: '50%', transform: 'translateX(-50%)', opacity: 0.06 }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(6rem, 18vw, 18rem)', fontWeight: 400, color: '#fff', letterSpacing: '-0.04em', whiteSpace: 'nowrap', lineHeight: 1 }}>
              C
            </p>
          </div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.75rem' }}>Ребрендинг через тему природы</p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', fontWeight: 400, color: '#fff', letterSpacing: '-0.01em', lineHeight: 1 }}>Coachella</p>
          </div>
          <a
            href="https://coachella-ebon.vercel.app"
            target="_blank"
            rel="noreferrer"
            style={{
              position: 'absolute',
              right: 'clamp(24px, 4vw, 56px)',
              bottom: 'clamp(24px, 4vw, 56px)',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff',
              padding: '10px 20px',
              fontFamily: "'Onest', sans-serif",
              fontSize: '0.62rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backdropFilter: 'blur(8px)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.22)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
          >
            Открыть сайт ↗
          </a>
        </div>
      </section>

      {/* Concept */}
      <section className="case-concept-grid" style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px) clamp(80px, 12vh, 120px)' }}>
        <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted }}>02 — Концепция</p>
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 400, color: light, lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Природа как основа фестивальной идентичности
          </h2>
          <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)', color: muted, lineHeight: 1.8 }}>
            Ребрендинг Coachella строится на переосмыслении пустынного фестиваля через органику природы. Палитра переходит от глубокого пурпурного к живому оранжевому — как закат над долиной. Типографика сочетает классический Playfair с геометрией без засечек, создавая баланс между наследием и современностью.
          </p>
        </div>
      </section>

      {/* Color system */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px) clamp(80px, 12vh, 120px)' }}>
        <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: '3rem' }}>
          03 — Цвет
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', marginBottom: '4rem' }}>
          {[
            { color: '#1E0040', label: 'Deep Violet' },
            { color: '#3D0A6E', label: 'Dark Purple' },
            { color: '#7B2FBE', label: 'Coachella Purple' },
            { color: '#FF5A1F', label: 'Desert Orange' },
            { color: '#FF8C4B', label: 'Warm Amber' },
          ].map(c => (
            <div key={c.color}>
              <div style={{ height: '80px', background: c.color, marginBottom: '8px' }} />
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.55rem', color: muted, letterSpacing: '0.06em' }}>{c.label}</p>
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.5rem', color: 'rgba(245,240,255,0.25)' }}>{c.color}</p>
            </div>
          ))}
        </div>

        {/* Typography */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div style={{ border: '1px solid rgba(245,240,255,0.06)', padding: '2rem', background: 'rgba(123,47,190,0.08)' }}>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: '1.5rem' }}>04 — Типографика</p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4.5vw, 4rem)', fontWeight: 400, color: light, letterSpacing: '-0.01em', lineHeight: 0.95 }}>
              Coachella
            </p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)', color: `rgba(255,90,31,0.8)`, marginTop: '0.5rem' }}>
              Valley Music & Arts Festival
            </p>
          </div>
          <div style={{ border: '1px solid rgba(245,240,255,0.06)', padding: '2rem', background: 'rgba(255,90,31,0.06)' }}>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.55rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: '1.5rem' }}>05 — Графические элементы</p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: `1px solid rgba(255,90,31,0.4)` }} />
              <div style={{ width: '40px', height: '80px', borderRadius: '40px', border: '1px solid rgba(123,47,190,0.4)' }} />
              <div style={{ width: '60px', height: '60px', background: `linear-gradient(135deg, ${purple}, ${orange})`, borderRadius: '50%', opacity: 0.7 }} />
            </div>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', color: muted, marginTop: '1rem', lineHeight: 1.6 }}>Органические формы, вдохновлённые пустынной флорой.</p>
          </div>
        </div>
      </section>

      {/* Web screens */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px) clamp(80px, 12vh, 120px)' }}>
        <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: '2rem' }}>
          06 — Веб-дизайн
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3px' }}>
          <div
            style={{
              background: 'linear-gradient(140deg, #1E0040 0%, #7B2FBE 100%)',
              padding: 'clamp(24px, 4vw, 48px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '400px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', color: light }}>Coachella</p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                {['Line-Up', 'Experience', 'Info', 'Tickets'].map(n => (
                  <span key={n} style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.55rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em' }}>{n}</span>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 400, color: '#fff', lineHeight: 0.9, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                Where<br />the wild<br />things grow.
              </p>
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>INDIO, CALIFORNIA · APRIL 2026</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div
              style={{
                flex: 1,
                background: `linear-gradient(170deg, ${orange} 0%, #FF8C4B 100%)`,
                padding: 'clamp(16px, 2.5vw, 28px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.55rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Tickets</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(0.85rem, 1.5vw, 1.3rem)', color: '#fff' }}>Get yours now ↗</p>
            </div>
            <div
              style={{
                flex: 1,
                background: '#1E0040',
                border: '1px solid rgba(245,240,255,0.06)',
                padding: 'clamp(16px, 2.5vw, 28px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.55rem', letterSpacing: '0.12em', color: muted, textTransform: 'uppercase', marginBottom: '0.25rem' }}>Line-Up 2026</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(0.85rem, 1.5vw, 1.2rem)', color: light }}>200+ artists</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to live site */}
      <section
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: 'clamp(48px, 8vh, 80px) clamp(24px, 5vw, 80px)',
          borderTop: '1px solid rgba(245,240,255,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        <div>
          <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: muted, marginBottom: '0.5rem' }}>Финальный результат</p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1rem, 2vw, 1.5rem)', color: light }}>Сайт доступен онлайн</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="https://coachella-ebon.vercel.app"
            target="_blank"
            rel="noreferrer"
            style={{
              background: `linear-gradient(90deg, ${purple}, ${orange})`,
              color: '#fff',
              border: 'none',
              padding: '14px 28px',
              fontFamily: "'Onest', sans-serif",
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
            }}
          >
            Открыть сайт ↗
          </a>
          <button
            onClick={() => navigate('noire')}
            style={{ background: 'none', border: '1px solid rgba(245,240,255,0.2)', color: light, cursor: 'pointer', padding: '14px 28px', fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(245,240,255,0.05)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'none')}
          >
            Следующий: NOIRÉ →
          </button>
        </div>
      </section>
    </div>
  )
}
