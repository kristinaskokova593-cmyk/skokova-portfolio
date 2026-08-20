import { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

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

export default function Lightbox({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const item = items[currentIndex]

  const [numPages, setNumPages] = useState(0)
  const [pageWidth, setPageWidth] = useState(300)

  // Горизонтальные PDF, которые нужно центрировать
  const isHorizontalPdf =
    item.name === 'Визитка' ||
    item.name === 'QR POST' ||
    item.name === 'Подарочный сертификат'

  useEffect(() => {
    const updateSize = () => {
      const isMobile = window.innerWidth < 768

      if (isMobile) {
        // На телефоне PDF должен помещаться
        // по ширине экрана с небольшими отступами.
        setPageWidth(Math.max(280, window.innerWidth - 32))
      } else {
        // На компьютере ограничиваем максимальную ширину.
        setPageWidth(Math.min(850, window.innerWidth - 160))
      }
    }

    updateSize()

    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  useEffect(() => {
    setNumPages(0)
  }, [item.pdfUrl])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }

      if (e.key === 'ArrowLeft') {
        onPrev()
      }

      if (e.key === 'ArrowRight') {
        onNext()
      }
    }

    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const previousPosition = document.body.style.position
    const previousWidth = document.body.style.width

    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.position = previousPosition
      document.body.style.width = previousWidth
    }
  }, [])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,

        zIndex: 200,

        width: '100%',
        height: '100dvh',

        background: 'rgba(11,11,11,0.94)',

        boxSizing: 'border-box',

        padding: '70px 16px',

        overflow: 'hidden',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        overscrollBehavior: 'none',
      }}
    >
      {/* PDF VIEWER */}

      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'absolute',

          top: 70,
          bottom: 70,
          left: 0,
          right: 0,

          width: '100%',

          overflowY: 'auto',
          overflowX: 'hidden',

          display: 'flex',
          justifyContent: 'center',

          // Только горизонтальные PDF центрируем
          // по вертикали. Вертикальные остаются как раньше.
          alignItems: isHorizontalPdf ? 'center' : 'flex-start',

          boxSizing: 'border-box',

          WebkitOverflowScrolling: 'touch',

          scrollbarWidth: 'none',
        }}
      >
        <div
          style={{
            width: pageWidth,

            maxWidth: 'calc(100vw - 32px)',

            margin: '0 auto',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

            boxSizing: 'border-box',

            flexShrink: 0,
          }}
        >
          <Document
            key={item.pdfUrl}
            file={item.pdfUrl}
            onLoadSuccess={({ numPages }) => {
              setNumPages(numPages)
            }}
            loading={
              <div
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontFamily:
                    "'Onest', system-ui, sans-serif",
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  paddingTop: 40,
                }}
              >
                Загрузка…
              </div>
            }
            error={
              <div
                style={{
                  color: '#fff',
                  fontFamily:
                    "'Onest', system-ui, sans-serif",
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  padding: 40,
                }}
              >
                Не удалось открыть PDF
              </div>
            }
          >
            {Array.from(
              { length: numPages },
              (_, index) => (
                <div
                  key={`${item.pdfUrl}-${index}`}
                  style={{
                    width: pageWidth,

                    display: 'flex',
                    justifyContent: 'center',

                    marginBottom:
                      index === numPages - 1 ? 0 : 12,

                    boxSizing: 'border-box',

                    flexShrink: 0,
                  }}
                >
                  <Page
                    pageNumber={index + 1}
                    width={pageWidth}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </div>
              ),
            )}
          </Document>
        </div>
      </div>

      {/* CLOSE */}

      <button
        onClick={onClose}
        aria-label="Закрыть"
        style={{
          position: 'fixed',

          top: 'max(16px, env(safe-area-inset-top))',
          right: 'max(16px, env(safe-area-inset-right))',

          zIndex: 210,

          background: 'rgba(11,11,11,0.9)',

          border:
            '1px solid rgba(255,255,255,0.3)',

          color: '#fff',

          cursor: 'pointer',

          padding: '8px 16px',

          fontFamily:
            "'Onest', system-ui, sans-serif",

          fontSize: '0.65rem',

          letterSpacing: '0.12em',

          textTransform: 'uppercase',

          whiteSpace: 'nowrap',

          WebkitAppearance: 'none',
          appearance: 'none',
        }}
      >
        ✕ Закрыть
      </button>

      {/* NAME */}

      <div
        style={{
          position: 'fixed',

          bottom:
            'max(20px, env(safe-area-inset-bottom))',

          left: '50%',

          transform: 'translateX(-50%)',

          maxWidth:
            'calc(100vw - 140px)',

          color:
            'rgba(255,255,255,0.7)',

          fontFamily:
            "'Onest', system-ui, sans-serif",

          fontSize: '0.7rem',

          letterSpacing: '0.1em',

          textTransform: 'uppercase',

          textAlign: 'center',

          whiteSpace: 'nowrap',

          overflow: 'hidden',

          textOverflow: 'ellipsis',

          zIndex: 210,

          pointerEvents: 'none',
        }}
      >
        {item.name}
        &nbsp;·&nbsp;
        {currentIndex + 1} / {items.length}
      </div>

      {/* PREVIOUS */}

      {currentIndex > 0 && (
        <button
          onClick={e => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label="Предыдущая"
          style={{
            position: 'fixed',

            left:
              'max(12px, env(safe-area-inset-left))',

            top: '50%',

            transform: 'translateY(-50%)',

            zIndex: 210,

            background: 'rgba(11,11,11,0.9)',

            border:
              '1px solid rgba(255,255,255,0.3)',

            color: '#fff',

            cursor: 'pointer',

            width: 48,
            height: 48,

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            fontFamily: 'Arial, sans-serif',

            fontSize: '1.2rem',

            lineHeight: 1,

            padding: 0,

            WebkitAppearance: 'none',
            appearance: 'none',
          }}
        >
          ←
        </button>
      )}

      {/* NEXT */}

      {currentIndex < items.length - 1 && (
        <button
          onClick={e => {
            e.stopPropagation()
            onNext()
          }}
          aria-label="Следующая"
          style={{
            position: 'fixed',

            right:
              'max(12px, env(safe-area-inset-right))',

            top: '50%',

            transform: 'translateY(-50%)',

            zIndex: 210,

            background: 'rgba(11,11,11,0.9)',

            border:
              '1px solid rgba(255,255,255,0.3)',

            color: '#fff',

            cursor: 'pointer',

            width: 48,
            height: 48,

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            fontFamily: 'Arial, sans-serif',

            fontSize: '1.2rem',

            lineHeight: 1,

            padding: 0,

            WebkitAppearance: 'none',
            appearance: 'none',
          }}
        >
          →
        </button>
      )}
    </div>
  )
}