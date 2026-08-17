import { useEffect } from 'react'

interface ArchiveItem {
  name: string
  pdfUrl: string
  preview: React.ReactNode
}

interface LightboxProps {
  items: ArchiveItem[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ items, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const item = items[currentIndex]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(11,11,11,0.94)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
      }}
    >
      {/* Main content */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '90vh',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <iframe
          src={item.pdfUrl}
          title={item.name}
          style={{
            width: '100%',
            height: '90vh',
            maxWidth: '700px',
            border: 'none',
            background: '#fff',
          }}
        />
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 24,
          right: 32,
          background: 'none',
          border: '1px solid rgba(255,255,255,0.3)',
          color: '#fff',
          cursor: 'pointer',
          padding: '8px 16px',
          fontFamily: "'Onest', system-ui, sans-serif",
          fontSize: '0.65rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          transition: 'border-color 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)')}
        onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)')}
      >
        ✕ Закрыть
      </button>

      {/* Name */}
      <div
        style={{
          position: 'fixed',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.7)',
          fontFamily: "'Onest', system-ui, sans-serif",
          fontSize: '0.7rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}
      >
        {item.name} &nbsp;·&nbsp; {currentIndex + 1} / {items.length}
      </div>

      {/* Prev */}
      {currentIndex > 0 && (
        <button
          onClick={e => { e.stopPropagation(); onPrev() }}
          style={{
            position: 'fixed',
            left: 24,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff',
            cursor: 'pointer',
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)')}
        >
          ←
        </button>
      )}

      {/* Next */}
      {currentIndex < items.length - 1 && (
        <button
          onClick={e => { e.stopPropagation(); onNext() }}
          style={{
            position: 'fixed',
            right: 24,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff',
            cursor: 'pointer',
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)')}
        >
          →
        </button>
      )}
    </div>
  )
}
