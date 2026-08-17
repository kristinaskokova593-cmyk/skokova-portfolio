import type { NavigateFn } from '../App'

interface CasePetDayProps {
  navigate: NavigateFn
}

export default function CasePetDay({ navigate }: CasePetDayProps) {
  const bg = '#080E0A'
  const neon = '#C5FF00'
  const light = '#E8F4E8'
  const muted = 'rgba(232,244,232,0.45)'

  const Divider = () => (
    <div style={{ height: '1px', background: 'rgba(197,255,0,0.1)', margin: '0 clamp(24px, 5vw, 80px)' }} />
  )

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

      {/* Hero visual */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px) clamp(48px, 8vh, 80px)' }}>
        <div className="case-header-grid">
          <div>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: `rgba(197,255,0,0.6)`, marginBottom: '1rem' }}>
              02 — Кейс · Yandex Reklama
            </p>
            <h1
              style={{
                fontFamily: "'Onest', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 7vw, 6.5rem)',
                lineHeight: 0.88,
                letterSpacing: '-0.02em',
                color: neon,
              }}
            >
              YANDEX<br />PET<br />DAY
            </h1>
          </div>
          <div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {['Веб-дизайн', 'UI', 'Digital'].map(t => (
                <span key={t} style={{ border: '1px solid rgba(197,255,0,0.2)', padding: '4px 10px', fontFamily: "'Onest', sans-serif", fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: muted }}>
                  {t}
                </span>
              ))}
            </div>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', color: muted, lineHeight: 1.8, maxWidth: '44ch' }}>
              Сайт-конференции по digital-продуктам в сфере зообизнеса от Яндекс Рекламы. Разбираем кейсы: зооморфизм, ИИ-диагностика питомцев, монетизация лояльной аудитории.
            </p>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', color: 'rgba(197,255,0,0.3)', marginTop: '1.5rem' }}>20 июня 2025 · Москва + Онлайн</p>
          </div>
        </div>
      </section>

      {/* Hero mockup */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px) clamp(60px, 10vh, 100px)' }}>
        <div style={{ background: '#080E0A', border: '1px solid rgba(197,255,0,0.08)', overflow: 'hidden', position: 'relative', aspectRatio: '16/9', display: 'flex', flexDirection: 'column', padding: 'clamp(24px, 4vw, 48px)' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(197,255,0,0.04) 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '40%', height: '40%', borderRadius: '50%', border: '1px solid rgba(197,255,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '60%', height: '60%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(197,255,0,0.08) 0%, transparent 70%)' }} />
          </div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.18em', color: neon, textTransform: 'uppercase' }}>Yandex Reklama</p>
              <button style={{ background: neon, color: bg, border: 'none', padding: '8px 20px', fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.1em', cursor: 'pointer' }}>
                Участвовать →
              </button>
            </div>
            <div style={{ maxWidth: '55%' }}>
              <p style={{ fontFamily: "'Onest', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 4.5rem)', color: neon, lineHeight: 0.9, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                YANDEX<br />PET DAY
              </p>
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.7rem, 1vw, 0.85rem)', color: muted, lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Конференция по digital-продуктам в сфере зообизнеса и сервисов для животных.
              </p>
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', color: `rgba(197,255,0,0.5)`, letterSpacing: '0.08em' }}>20 июня 2025 · 11:00 · Москва + Онлайн</p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Concept */}
      <section className="case-concept-grid" style={{ maxWidth: 1440, margin: '0 auto', padding: 'clamp(60px, 10vh, 100px) clamp(24px, 5vw, 80px)' }}>
        <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted }}>02 — Концепция</p>
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 400, color: light, lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Digital и зообизнес
          </h2>
          <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)', color: muted, lineHeight: 1.8 }}>
            Дизайн сайта строится вокруг тёмного, технологичного фона с неоново-зелёным акцентом — образ digital-события. Круговая геометрия в Hero отсылает к природе и экосистеме. Страница последовательно раскрывает преимущества участия, спикеров, программу и регистрацию.
          </p>
        </div>
      </section>

      <Divider />

      {/* Benefits */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: 'clamp(60px, 10vh, 100px) clamp(24px, 5vw, 80px)' }}>
        <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: '3rem' }}>
          03 — Что вы получите
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'clamp(16px, 2.5vw, 28px)' }}>
          {[
            { num: '01', icon: 'N E R K', title: 'Новые знакомства', desc: 'Ключевые представители pet-индустрии, владельцы digital-продуктов, топ-менеджеры технологических компаний и инвесторы' },
            { num: '02', icon: 'N', title: 'Тренды и реальные кейсы', desc: 'Ведущие эксперты покажут, как внедрение ИИ, работа с лояльностью и новые форматы монетизации приносят рост выручки' },
            { num: '03', icon: 'L K', title: 'Практические инструменты', desc: 'Унесёте с собой не только впечатления, но и готовые механики для применения в своём продукте' },
            { num: '04', icon: 'R E A M', title: 'Удобный формат', desc: 'Выбрать удобный формат участия: прийти лично или подключиться к онлайн-трансляции из любой точки мира' },
          ].map(b => (
            <div
              key={b.num}
              style={{
                border: '1px solid rgba(197,255,0,0.08)',
                padding: 'clamp(20px, 3vw, 32px)',
                transition: 'border-color 0.25s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(197,255,0,0.2)')}
              onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(197,255,0,0.08)')}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.55rem', color: muted, letterSpacing: '0.08em' }}>{b.num}</span>
                <span style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.55rem', color: neon, letterSpacing: '0.12em', opacity: 0.6 }}>{b.icon}</span>
              </div>
              <h3 style={{ fontFamily: "'Onest', sans-serif", fontWeight: 600, fontSize: 'clamp(0.85rem, 1.3vw, 1rem)', color: light, marginBottom: '0.75rem' }}>{b.title}</h3>
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.78rem', color: muted, lineHeight: 1.65 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Speakers */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: 'clamp(60px, 10vh, 100px) clamp(24px, 5vw, 80px)' }}>
        <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: '3rem' }}>
          04 — Спикеры
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          {[
            { num: '01', name: 'Андрей Соколов', role: 'Head of Product Design, Яндекс', talk: 'Компьютерное зрение в ветеринарии' },
            { num: '02', name: 'Мария Подольская', role: 'Head of AI, Лаборатория инноваций', talk: 'Зооморфизм как драйвер лояльности' },
            { num: '03', name: 'Павел Сидоров', role: 'CEO, маркетплейс «Зоо-Маркет»', talk: 'От стартапа до маркетплейса №1' },
          ].map((s, i) => (
            <div
              key={s.num}
              style={{
                display: 'grid',
                gridTemplateColumns: '40px 1fr 1fr auto',
                gap: '1.5rem',
                alignItems: 'center',
                padding: 'clamp(16px, 2.5vh, 24px) 0',
                borderBottom: '1px solid rgba(197,255,0,0.06)',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.background = 'rgba(197,255,0,0.02)')}
              onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.background = 'none')}
            >
              <span style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.55rem', color: muted }}>{s.num}</span>
              <div>
                <p style={{ fontFamily: "'Onest', sans-serif", fontWeight: 600, fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)', color: light }}>{s.name}</p>
                <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', color: muted, marginTop: '2px' }}>{s.role}</p>
              </div>
              <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(0.8rem, 1.2vw, 1rem)', color: `rgba(197,255,0,0.7)` }}>
                «{s.talk}»
              </p>
              <span style={{ color: neon, fontSize: '1rem' }}>→</span>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Schedule + Registration */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: 'clamp(60px, 10vh, 100px) clamp(24px, 5vw, 80px)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px, 5vw, 80px)' }}>
        <div>
          <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: '2rem' }}>
            05 — Программа
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { time: '10:00', event: 'Нетворкинг с участниками и партнёрами' },
              { time: '11:00', event: 'Вводное слово' },
              { time: '11:30', event: 'Компьютерное зрение в ветеринарии — Андрей Соколов', accent: true },
              { time: '12:10', event: 'Зооморфизм как драйвер лояльности — Мария Подольская', accent: true },
              { time: '12:50', event: 'Перерыв' },
              { time: '13:10', event: 'От стартапа до маркетплейса №1 — Павел Сидоров', accent: true },
              { time: '13:40', event: 'Дискуссия «Инвестиции в Pet-технологии»' },
              { time: '15:00', event: 'Нетворкинг' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr',
                  gap: '1rem',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(197,255,0,0.06)',
                }}
              >
                <span style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', color: muted, letterSpacing: '0.04em' }}>{item.time}</span>
                <span style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.75rem', color: (item as any).accent ? neon : muted, lineHeight: 1.5 }}>{item.event}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Registration form mockup */}
        <div>
          <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: muted, marginBottom: '2rem' }}>
            06 — Регистрация
          </p>
          <div style={{ border: '1px solid rgba(197,255,0,0.1)', padding: 'clamp(20px, 3vw, 36px)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontFamily: "'Onest', sans-serif", fontWeight: 600, fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)', color: light }}>
              Зарегистрируйтесь<br />на конференцию
            </h3>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.75rem', color: muted, lineHeight: 1.6 }}>
              Все зарегистрированные участники получат доступ к видеозаписям, презентациям и именной сертификат.
            </p>
            {['Видеозаписи всех докладов', 'Именной сертификат участника', 'Презентации и расшифровки', 'Нетворкинг с лидерами рынка'].map(b => (
              <div key={b} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: neon, flexShrink: 0 }} />
                <span style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.72rem', color: muted }}>{b}</span>
              </div>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '0.5rem' }}>
              <div style={{ border: '1px solid rgba(197,255,0,0.15)', padding: '10px 14px' }}>
                <span style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', color: 'rgba(197,255,0,0.4)' }}>Алексей Иванов</span>
              </div>
              <div style={{ border: '1px solid rgba(197,255,0,0.15)', padding: '10px 14px' }}>
                <span style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', color: 'rgba(197,255,0,0.4)' }}>alex@example.com</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{ flex: 1, background: neon, border: 'none', padding: '10px', fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.08em', cursor: 'pointer', color: bg }}>Офлайн</button>
                <button style={{ flex: 1, background: 'none', border: '1px solid rgba(197,255,0,0.2)', padding: '10px', fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', color: muted, cursor: 'pointer', letterSpacing: '0.08em' }}>Онлайн</button>
              </div>
              <button style={{ background: neon, border: 'none', padding: '12px', fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', cursor: 'pointer', color: bg, width: '100%' }}>
                Зарегистрироваться →
              </button>
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
          borderTop: '1px solid rgba(197,255,0,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: muted }}>
          Следующий проект
        </p>
        <button
          onClick={() => navigate('coachella')}
          style={{ background: 'none', border: `1px solid rgba(197,255,0,0.2)`, color: light, cursor: 'pointer', padding: '14px 28px', fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px', transition: 'background 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(197,255,0,0.04)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'none')}
        >
          Coachella <span>→</span>
        </button>
      </section>
    </div>
  )
}
