import { useEffect, useState, useRef } from 'react'
import type { Page, NavigateFn } from '../App'
import Lightbox from '../components/Lightbox'
import noireImg from '../imports/Noire.png'
import savorImg from '../imports/______________________.png'
const businessCardPdf = '/Визитка.pdf'
import certPdf from "../imports/Сертификат для фотографа.pdf?url";
import qrPdf from "../imports/Qr для студии маникюра.pdf?url";
import fitnessPdf from "../imports/Таплинк фитнес-тренеру.pdf?url";
import weddingPdf from "../imports/Пригласительное на свадьбу Снежанна.pdf?url";
import priceListPdf from "../imports/Гайд для фотографа.pdf?url";

interface HomePageProps {
  navigate: NavigateFn
  pendingSection: string | null
  onSectionScrolled: () => void
}

const archiveItems = [
  {
    name: 'Визитка',
    category: 'Графический дизайн',
    pdfUrl: businessCardPdf,
    preview: (
      <div style={{ display: 'flex', width: '100%', height: '100%' }}>
        <div style={{ flex: 1, background: '#0A0A0A', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '20px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 30%, #2a2a2a 0%, #0a0a0a 70%)' }} />
          <p style={{ position: 'relative', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(0.7rem, 2vw, 1rem)', lineHeight: 1.2 }}>
            efedorova.pro
          </p>
        </div>
        <div style={{ flex: 1, background: '#F9F8F6', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px', gap: '0.5rem' }}>
          <p style={{ fontFamily: "'Onest', sans-serif", fontWeight: 600, fontSize: 'clamp(0.6rem, 1.5vw, 0.85rem)', color: '#111', lineHeight: 1.3 }}>Екатерина Фёдорова</p>
          <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.5rem, 1.2vw, 0.65rem)', letterSpacing: '0.08em', color: '#888', textTransform: 'uppercase' }}>женский фотограф</p>
          <div style={{ marginTop: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '0.5rem' }}>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.5rem, 1.1vw, 0.65rem)', color: '#555', marginBottom: '0.2rem' }}>+7 900 128 76 29</p>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.5rem, 1.1vw, 0.65rem)', color: '#555' }}>efedorova.pro</p>
          </div>
          <p style={{ marginTop: '0.5rem', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(0.45rem, 1vw, 0.6rem)', color: '#888' }}>Стиль. Эстетика. Минимализм.</p>
        </div>
      </div>
    ),
  },
  {
    name: 'Подарочный сертификат',
    category: 'Графический дизайн',
    pdfUrl: certPdf,
    preview: (
      <div style={{ width: '100%', height: '100%', background: '#E4E0D8', display: 'flex', flexDirection: 'column', padding: '18px', position: 'relative', overflow: 'hidden' }}>
        <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.5rem, 1.3vw, 0.7rem)', letterSpacing: '0.06em', color: '#333', lineHeight: 1.4, marginBottom: '0.5rem' }}>ПОДАРОЧНЫЙ СЕРТИФИКАТ<br />НА ФОТОСЕССИЮ</p>
        <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#8B1A1A', fontSize: 'clamp(0.6rem, 1.6vw, 0.9rem)', lineHeight: 1.3, marginBottom: 'auto' }}>Фотограф<br />Алёна Скокова</p>
        <div style={{ position: 'absolute', right: 0, top: 0, width: '40%', height: '100%', background: 'linear-gradient(160deg, #3a3a3a 0%, #1a1a1a 100%)', overflow: 'hidden' }}>
          <div style={{ width: '100%', height: '100%', background: 'radial-gradient(ellipse at 50% 35%, #666 0%, #1a1a1a 70%)', opacity: 0.8 }} />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.45rem, 1vw, 0.6rem)', color: '#555' }}>для: <span style={{ color: '#8B1A1A', fontStyle: 'italic' }}>Светланы</span></p>
          <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.45rem, 1vw, 0.6rem)', color: '#555' }}>дата: 26.07.2026 · срок: 1 год</p>
        </div>
      </div>
    ),
  },
  {
    name: 'QR Post',
    category: 'Графический дизайн',
    pdfUrl: qrPdf,
    preview: (
      <div style={{ width: '100%', height: '100%', background: 'linear-gradient(170deg, #A8D4EC 0%, #7DBDE0 50%, #A8CEE8 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '16px', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse 80% 40% at 70% 20%, rgba(255,255,255,0.5) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ textAlign: 'center', position: 'relative' }}>
          <div style={{ fontFamily: "'Onest', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 8vw, 4rem)', color: 'rgba(119,174,208,0.7)', letterSpacing: '-0.02em', lineHeight: 0.85, userSelect: 'none' }}>
            NС
          </div>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(0.45rem, 1.1vw, 0.65rem)', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.04em' }}>by Petrova Anna</p>
        </div>
        <div style={{ display: 'flex', gap: '12px', width: '100%', justifyContent: 'center' }}>
          {['WI-FI', 'СБП'].map(label => (
            <div key={label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.45rem, 1.1vw, 0.65rem)', color: 'rgba(255,255,255,0.9)', letterSpacing: '0.06em' }}>{label}</p>
              <div style={{ width: '100%', aspectRatio: '1', background: 'rgba(0,0,0,0.12)', border: '2px solid rgba(0,0,0,0.15)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr 1fr', gap: 2, padding: 4 }}>
                {[...Array(9)].map((_, i) => <div key={i} style={{ background: [0,2,6,8].includes(i) ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.12)' }} />)}
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.4rem, 0.9vw, 0.55rem)', color: 'rgba(255,255,255,0.7)', textAlign: 'center', position: 'relative' }}>
          *отсканируйте QR код камерой вашего телефона
        </p>
      </div>
    ),
  },
  {
    name: 'Fitness Coach Promo',
    category: 'Графический дизайн',
    pdfUrl: fitnessPdf,
    preview: (
      <div style={{ width: '100%', height: '100%', background: 'linear-gradient(170deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)', display: 'flex', flexDirection: 'column', padding: '16px', gap: '8px', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '55%', background: 'linear-gradient(135deg, #3a3a3a 0%, #222 100%)', overflow: 'hidden' }}>
          <div style={{ width: '100%', height: '100%', background: 'radial-gradient(ellipse at 50% 20%, #555 0%, #1a1a1a 80%)' }} />
        </div>
        <div style={{ marginTop: 'auto', position: 'relative' }}>
          <p style={{ fontFamily: "'Onest', sans-serif", fontWeight: 300, color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(0.9rem, 2.5vw, 1.4rem)', letterSpacing: '0.04em', lineHeight: 1 }}>FITNESS</p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(0.9rem, 2.5vw, 1.4rem)', lineHeight: 1 }}>coach</p>
        </div>
        <div style={{ position: 'relative' }}>
          <p style={{ fontFamily: "'Onest', sans-serif", fontWeight: 700, color: '#fff', fontSize: 'clamp(0.55rem, 1.4vw, 0.8rem)', letterSpacing: '0.04em', lineHeight: 1.2 }}>ВАША УНИКАЛЬНАЯ<br />ВОЗМОЖНОСТЬ</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', position: 'relative' }}>
          {['нутрициология', 'тренировки', 'биохакинг'].map(tag => (
            <span key={tag} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', padding: '2px 6px', borderRadius: '20px', fontFamily: "'Onest'", fontSize: 'clamp(0.38rem, 0.9vw, 0.52rem)', color: 'rgba(255,255,255,0.7)' }}>{tag}</span>
          ))}
        </div>
        <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.5rem, 1.1vw, 0.65rem)', color: 'rgba(255,255,255,0.5)', position: 'relative' }}>Евгений Артёменко</p>
      </div>
    ),
  },
  {
    name: 'Свадебное приглашение',
    category: 'Графический дизайн',
    pdfUrl: weddingPdf,
    preview: (
      <div style={{ width: '100%', height: '100%', background: '#EDE8DF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '20px 16px', textAlign: 'center' }}>
        <div style={{ width: '100%', display: 'flex', gap: '4px', height: '35%' }}>
          <div style={{ flex: 1, background: '#C8C0B4', overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '100%', background: 'radial-gradient(ellipse at 40% 30%, #aaa 0%, #888 100%)' }} />
          </div>
          <div style={{ flex: 1, background: '#C8C0B4', overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '100%', background: 'radial-gradient(ellipse at 60% 50%, #bbb 0%, #999 100%)' }} />
          </div>
        </div>
        <div>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(0.9rem, 2.5vw, 1.4rem)', color: '#2a2118', lineHeight: 1.1 }}>Дмитрий</p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(0.9rem, 2.5vw, 1.4rem)', color: '#2a2118', lineHeight: 1.1 }}>Снежанна</p>
          <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.55rem, 1.3vw, 0.75rem)', letterSpacing: '0.1em', color: '#888', marginTop: '0.4rem' }}>11 · 10 · 2025</p>
        </div>
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '0.6rem', width: '100%' }}>
          <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.4rem, 1vw, 0.58rem)', color: '#888', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Дресс-код: бежевый · коричневый · чёрный</p>
        </div>
      </div>
    ),
  },
  {
    name: 'Прайс-лист фотосессий',
    category: 'Графический дизайн',
    pdfUrl: priceListPdf,
    preview: (
      <div style={{ width: '100%', height: '100%', background: '#1C1C1C', display: 'flex', flexDirection: 'column', padding: '16px', gap: '8px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', height: '45%' }}>
          {[
            'radial-gradient(ellipse at 40% 30%, #555 0%, #222 80%)',
            'radial-gradient(ellipse at 60% 60%, #444 0%, #1a1a1a 80%)',
          ].map((bg, i) => (
            <div key={i} style={{ background: bg, overflow: 'hidden' }} />
          ))}
        </div>
        <div style={{ marginTop: 'auto' }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(0.65rem, 1.7vw, 1rem)', lineHeight: 1.3 }}>Как кайфануть<br />на съёмке</p>
          <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.4rem, 1vw, 0.58rem)', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '0.4rem' }}>Гайд для клиентов</p>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.5rem' }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#C4504A', fontSize: 'clamp(0.5rem, 1.2vw, 0.7rem)' }}>te ipsum ama</p>
          <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.38rem, 0.9vw, 0.55rem)', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>С любовью, Алена, твой фотограф</p>
        </div>
      </div>
    ),
  },
]

function useIntersection(ref: React.RefObject<Element | null>, options?: IntersectionObserverInit) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        obs.disconnect()
      }
    }, { threshold: 0.15, ...options })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [ref, options])
  return visible
}

function FadeSection({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useIntersection(ref)
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.75s ease, transform 0.75s ease',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

interface ProjectCardProps {
  number: string
  title: string
  direction: string
  year: string
  onClick: () => void
  children: React.ReactNode
  wide?: boolean
  rightAligned?: boolean
}

function ProjectCard({ number, title, direction, year, onClick, children, wide, rightAligned }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <FadeSection style={{ width: wide ? '75%' : '100%', marginLeft: rightAligned ? 'auto' : undefined }}>
      <div
        className="project-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
        style={{ cursor: 'pointer', background: '#fff' }}
      >
        <div style={{ aspectRatio: wide ? '16/9' : '4/3', overflow: 'hidden', position: 'relative' }}>
          {children}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0)',
              transition: 'background 0.4s ease',
              ...(hovered ? { background: 'rgba(0,0,0,0.06)' } : {}),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? 'scale(1)' : 'scale(0.92)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                background: '#F6F4EF',
                padding: '14px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: "'Onest', sans-serif",
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#111',
              }}
            >
              Смотреть кейс <span>↗</span>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: '20px 0 0 0',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <span style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', color: '#888877', letterSpacing: '0.06em', paddingTop: '3px' }}>
              {number}
            </span>
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500, fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', color: '#111', marginBottom: '4px', letterSpacing: '0.01em' }}>
                {title}
              </h3>
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', color: '#888877', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {direction}
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '3px', flexShrink: 0 }}>
            <span style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', color: '#888877' }}>{year}</span>
            <span style={{ fontSize: '1rem', transition: 'transform 0.2s ease', transform: hovered ? 'translate(2px, -2px)' : 'none' }}>↗</span>
          </div>
        </div>
      </div>
    </FadeSection>
  )
}

export default function HomePage({ navigate, pendingSection, onSectionScrolled }: HomePageProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    if (pendingSection) {
      const el = document.getElementById(pendingSection)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
          onSectionScrolled()
        }, 80)
      }
    }
  }, [pendingSection, onSectionScrolled])

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevItem = () => setLightboxIndex(i => (i !== null && i > 0 ? i - 1 : i))
  const nextItem = () => setLightboxIndex(i => (i !== null && i < archiveItems.length - 1 ? i + 1 : i))

  const px = 'clamp(24px, 5vw, 80px)'

  return (
    <>
      {/* HERO */}
      <section
        className="hero-grid"
        style={{
          minHeight: '100vh',
          paddingTop: '80px',
          paddingLeft: px,
          paddingRight: px,
          maxWidth: 1440,
          margin: '0 auto',
          gap: '0 40px',
          alignItems: 'center',
        }}
      >
        {/* Left: text */}
        <div style={{ paddingTop: 'clamp(40px, 8vh, 80px)', paddingBottom: '40px' }}>
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#888877', marginBottom: '0.5rem' }}>
              Кристина Скокова
            </p>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#888877' }}>
              Графический и веб-дизайнер
            </p>
          </div>

          <h1
            className="fade-in"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              color: '#111111',
              marginBottom: 'clamp(1.5rem, 4vh, 2.5rem)',
            }}
          >
            Дизайн,<br />который<br />запоминается.
          </h1>

          <p
            style={{
              fontFamily: "'Onest', sans-serif",
              fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
              color: '#888877',
              lineHeight: 1.7,
              maxWidth: '38ch',
              marginBottom: 'clamp(2rem, 5vh, 3rem)',
            }}
          >
            Графический и веб-дизайнер, специализирующийся на визуальных идентичностях, digital-продуктах и выразительной визуальной коммуникации.
          </p>

          <button
            onClick={() => {
              const el = document.getElementById('works')
              el?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="arrow-btn"
            style={{
              background: 'none',
              border: '1px solid #111111',
              padding: '14px 28px',
              cursor: 'pointer',
              fontFamily: "'Onest', sans-serif",
              color: '#111',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#111'; e.currentTarget.style.color = '#F6F4EF' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#111' }}
          >
            Смотреть избранные работы <span>↓</span>
          </button>

          <div
            style={{
              marginTop: 'clamp(2.5rem, 6vh, 4rem)',
              display: 'flex',
              gap: '2rem',
              borderTop: '1px solid rgba(17,17,17,0.1)',
              paddingTop: '1.5rem',
            }}
          >
            <div>
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888877', marginBottom: '2px' }}>Локация</p>
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.75rem', color: '#111' }}>Москва</p>
            </div>
            <div>
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888877', marginBottom: '2px' }}>Статус</p>
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.75rem', color: '#111', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2D7A3A', display: 'inline-block' }} />
                Открыта к новым проектам
              </p>
            </div>
          </div>
        </div>

        {/* Right: visual */}
        <div
          className="mobile-hide"
          style={{
            height: '90vh',
            position: 'relative',
            overflow: 'hidden',
            marginTop: '80px',
          }}
        >
          <img
            src={noireImg}
            alt="NOIRÉ — проект брендинга ювелирной марки"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
              display: 'block',
            }}
          />
        </div>
      </section>

      {/* Mobile hero image */}
      <div className="mobile-show" style={{ margin: '0 0 48px', height: '50vw', overflow: 'hidden' }}>
        <img src={noireImg} alt="NOIRÉ brand identity" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
      </div>

      {/* SELECTED WORKS */}
      <section
        id="works"
        style={{
          paddingLeft: px,
          paddingRight: px,
          paddingTop: 'clamp(80px, 12vh, 140px)',
          paddingBottom: 'clamp(60px, 10vh, 120px)',
          maxWidth: 1440,
          margin: '0 auto',
        }}
      >
        <FadeSection style={{ marginBottom: 'clamp(48px, 8vh, 80px)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem' }}>
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                fontWeight: 400,
                lineHeight: 0.92,
                letterSpacing: '-0.015em',
                color: '#111',
              }}
            >
              Избранные<br />работы
            </h2>
          </div>
          <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.8rem', color: '#888877', maxWidth: '28ch', lineHeight: 1.6, textAlign: 'right' }}>
            Подборка проектов в области айдентики, веб- и digital-дизайна.
          </p>
        </FadeSection>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(56px, 10vh, 96px)' }}>

          {/* Block 1: COACHELLA - large left */}
          <ProjectCard
            number="01"
            title="Coachella"
            direction="Айдентика / Веб-дизайн / Digital"
            year="2026"
            onClick={() => navigate('coachella')}
            wide
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #1E0040 0%, #3D0A6E 40%, #7B1FA2 65%, #FF5A1F 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                padding: 'clamp(24px, 4vw, 48px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(255,90,31,0.25) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(120,30,200,0.3) 0%, transparent 50%)' }} />
              <div style={{ position: 'absolute', top: '15%', right: '8%', width: 'clamp(80px, 15vw, 160px)', height: 'clamp(80px, 15vw, 160px)', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)' }} />
              <div style={{ position: 'absolute', top: '10%', right: '15%', width: 'clamp(50px, 10vw, 100px)', height: 'clamp(50px, 10vw, 100px)', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)' }} />
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 7vw, 6rem)', fontWeight: 400, color: 'rgba(255,255,255,0.95)', letterSpacing: '-0.02em', lineHeight: 1, position: 'relative' }}>
                Coachella
              </p>
              <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginTop: '0.5rem', position: 'relative' }}>
                Ребрендинг через тему природы
              </p>
            </div>
          </ProjectCard>

          {/* Block 2: YPD + NOIRÉ side by side */}
          <div className="two-col-grid">
            <ProjectCard
              number="02"
              title="Yandex Pet Day"
              direction="Веб / UI / Digital"
              year="2025"
              onClick={() => navigate('petday')}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: '#080E0A',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: 'clamp(20px, 3vw, 36px)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 'clamp(100px, 20vw, 200px)', height: 'clamp(100px, 20vw, 200px)', borderRadius: '50%', border: '1px solid rgba(197,255,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '60%', height: '60%', borderRadius: '50%', border: '1px solid rgba(197,255,0,0.12)' }} />
                </div>
                <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 'clamp(100px, 20vw, 200px)', height: 'clamp(100px, 20vw, 200px)', background: 'radial-gradient(circle, rgba(197,255,0,0.06) 0%, transparent 70%)' }} />
                <div>
                  <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.55rem', letterSpacing: '0.18em', color: 'rgba(197,255,0,0.6)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Yandex Reklama</p>
                  <p style={{ fontFamily: "'Onest', sans-serif", fontWeight: 700, fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: '#C5FF00', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
                    YANDEX<br />PET DAY
                  </p>
                </div>
              </div>
            </ProjectCard>

            <ProjectCard
              number="03"
              title="NOIRÉ"
              direction="Веб-дизайн / Digital"
              year="2026"
              onClick={() => navigate('noire')}
            >
              <img
                src={noireImg}
                alt="NOIRÉ — ювелирный брендинг"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '0% 8%' }}
              />
            </ProjectCard>
          </div>

          {/* Block 3: SAVOR - wide right-aligned */}
          <ProjectCard
            number="04"
            title="SAVOR"
            direction="Веб-дизайн / UI"
            year="2025"
            onClick={() => navigate('savor')}
            wide
            rightAligned
          >
            <img
              src={savorImg}
              alt="SAVOR — сайт кофейни"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </ProjectCard>

        </div>
      </section>

      {/* ARCHIVE */}
      <section
        style={{
          paddingLeft: px,
          paddingRight: px,
          paddingTop: 'clamp(60px, 10vh, 120px)',
          paddingBottom: 'clamp(60px, 10vh, 120px)',
          maxWidth: 1440,
          margin: '0 auto',
          borderTop: '1px solid rgba(17,17,17,0.1)',
        }}
      >
        <FadeSection style={{ marginBottom: 'clamp(40px, 7vh, 64px)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem' }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: '-0.01em',
                color: '#111',
              }}
            >
              Ещё работы
            </h2>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.75rem', color: '#888877', maxWidth: '22ch', lineHeight: 1.6, textAlign: 'right' }}>
              Графический дизайн — визитки, сертификаты, промо-материалы.
            </p>
          </div>
        </FadeSection>

        <div
          style={{
          }}
          className="three-col-archive"
        >
          {archiveItems.map((item, i) => (
            <FadeSection key={item.name}>
              <div
                className="archive-card"
                onClick={() => openLightbox(i)}
                style={{
                  background: '#fff',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
              >
                <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
                  {item.preview}
                </div>
                <div style={{ padding: '14px 0 0 0' }}>
                  <p style={{ fontFamily: "'Onest', sans-serif", fontWeight: 500, fontSize: '0.78rem', color: '#111', marginBottom: '2px' }}>{item.name}</p>
                  <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.62rem', color: '#888877', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{item.category}</p>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          paddingLeft: px,
          paddingRight: px,
          paddingTop: 'clamp(80px, 14vh, 160px)',
          paddingBottom: 'clamp(80px, 14vh, 160px)',
          maxWidth: 1440,
          margin: '0 auto',
          borderTop: '1px solid rgba(17,17,17,0.1)',
        }}
        className="about-grid"
      >
        <FadeSection>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4.5vw, 4rem)',
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: '-0.015em',
              color: '#111',
            }}
          >
            Немного<br />обо мне
          </h2>
        </FadeSection>

        <FadeSection>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', color: '#111', lineHeight: 1.75 }}>
              Я Кристина — графический и веб-дизайнер, специализирующийся на визуальных идентичностях, digital-продуктах и выразительной визуальной коммуникации.
            </p>
            <p style={{ fontFamily: "'Onest', sans-serif", fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', color: '#888877', lineHeight: 1.75 }}>
              Мне нравится превращать идеи в визуальные системы — от типографики и графического языка до сайтов и digital-продуктов.
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Графический дизайн', 'Айдентика', 'Веб-дизайн', 'UI-дизайн', 'Digital'].map(tag => (
                <span
                  key={tag}
                  style={{
                    border: '1px solid rgba(17,17,17,0.2)',
                    padding: '6px 14px',
                    fontFamily: "'Onest', sans-serif",
                    fontSize: '0.65rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#111',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeSection>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          paddingLeft: px,
          paddingRight: px,
          paddingTop: 'clamp(60px, 10vh, 120px)',
          paddingBottom: 'clamp(60px, 10vh, 120px)',
          maxWidth: 1440,
          margin: '0 auto',
          borderTop: '1px solid rgba(17,17,17,0.1)',
        }}
      >
        <FadeSection style={{ marginBottom: 'clamp(40px, 7vh, 64px)' }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: '-0.01em',
              color: '#111',
            }}
          >
            Что я делаю
          </h2>
        </FadeSection>

        <div>
          {[
            {
              num: '01',
              title: 'Айдентика',
              desc: 'Визуальная идентичность, логотипы, типографика и графический язык бренда.',
            },
            {
              num: '02',
              title: 'Веб-дизайн',
              desc: 'Лендинги, корпоративные сайты и digital-продукты.',
            },
            {
              num: '03',
              title: 'Графический дизайн',
              desc: 'Афиши, сертификаты, презентации, социальные сети и рекламные материалы.',
            },
            {
              num: '04',
              title: 'UI-дизайн',
              desc: 'Интерфейсы, визуальные системы и адаптивные макеты.',
            },
          ].map((s, i) => (
            <FadeSection key={s.num}>
              <ServiceRow {...s} />
            </FadeSection>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          paddingLeft: px,
          paddingRight: px,
          paddingTop: 'clamp(80px, 14vh, 160px)',
          paddingBottom: 'clamp(80px, 14vh, 160px)',
          maxWidth: 1440,
          margin: '0 auto',
          borderTop: '1px solid rgba(17,17,17,0.1)',
        }}
      >
        <FadeSection>
          <h2
  style={{
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(2.2rem, 6vw, 6rem)',
    fontWeight: 400,
    lineHeight: 0.9,
    letterSpacing: '-0.03em',
    color: '#111',
    marginBottom: 'clamp(40px, 6vh, 60px)',
  }}
>
  <span>Есть проект?</span>
  <br />

  <span style={{ display: 'inline-block', marginTop: '0.35em' }}>
    Давайте
  </span>
  <br />

  создадим что-то<br />
  запоминающееся.
</h2>
        </FadeSection>

        <FadeSection>
          <div className="contact-grid" style={{ alignItems: 'start' }}>
            <div>
              <a
                href="https://t.me/skokova_kris"
  target="_blank"
  rel="noopener noreferrer"
  className="arrow-btn"
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    background: 'transparent',
    color: '#111',
    border: '1px solid #111',
    padding: '16px 32px',
    textDecoration: 'none',
    fontFamily: "'Onest', sans-serif",
    fontSize: '0.7rem',
    fontWeight: 500,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    transition: 'background 0.2s ease, color 0.2s ease',
    marginBottom: '2rem',
  }}
  onMouseEnter={e => {
    e.currentTarget.style.background = '#111'
    e.currentTarget.style.color = '#F6F4EF'
  }}
  onMouseLeave={e => {
    e.currentTarget.style.background = 'transparent'
    e.currentTarget.style.color = '#111'
  }}
>
  Обсудить проект <span>↗</span>
</a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ContactLink label="Telegram" href="https://t.me/skokova_kris" value="@skokova_kris" />
              <ContactLink label="Instagram" href="https://instagram.com/skokova_kris" value="@skokova_kris" />
              <ContactLink label="Email" href="mailto:kristinaskokova593@gmail.com" value="kristinaskokova593@gmail.com" />
            </div>
          </div>
        </FadeSection>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          paddingLeft: px,
          paddingRight: px,
          paddingTop: '2.5rem',
          paddingBottom: '2.5rem',
          maxWidth: 1440,
          margin: '0 auto',
          borderTop: '1px solid rgba(17,17,17,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div>
          <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111', marginBottom: '2px' }}>
            Кристина Скокова
          </p>
          <p style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', color: '#888877', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Графический и веб-дизайнер · © 2026
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="https://t.me/skokova_kris" className="nav-link" target="_blank" rel="noreferrer">Telegram</a>
          <a href="https://instagram.com/skokova_kris" className="nav-link" target="_blank" rel="noreferrer">Instagram</a>
          <a href="mailto:kristinaskokova593@gmail.com" className="nav-link">Email</a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="nav-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Onest', sans-serif" }}
          >
            Наверх ↑
          </button>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={archiveItems}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevItem}
          onNext={nextItem}
        />
      )}
    </>
  )
}

function ServiceRow({ num, title, desc }: { num: string; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="service-row service-row-grid"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ padding: 'clamp(20px, 3vh, 28px) 0' }}
    >
      <span style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.65rem', color: '#888877', letterSpacing: '0.06em' }}>{num}</span>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)', fontWeight: 400, color: '#111', letterSpacing: '-0.01em' }}>{title}</h3>
      <p className="service-desc" style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.8rem', color: '#888877', lineHeight: 1.6 }}>{desc}</p>
      <span style={{ fontSize: '1.1rem', transition: 'transform 0.25s ease', transform: hovered ? 'translate(4px, -4px)' : 'none', color: '#111' }}>↗</span>
    </div>
  )
}

function ContactLink({ label, href, value }: { label: string; href: string; value: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', borderBottom: '1px solid rgba(17,17,17,0.1)', paddingBottom: '0.75rem' }}>
      <span style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888877', minWidth: '70px' }}>{label}</span>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{ fontFamily: "'Onest', sans-serif", fontSize: '0.85rem', color: '#111', textDecoration: 'none' }}
        className="nav-link"
      >
        {value}
      </a>
    </div>
  )
}
