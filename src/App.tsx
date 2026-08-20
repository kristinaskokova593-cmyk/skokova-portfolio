import { useState, useCallback, useEffect } from 'react'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import CaseNoire from './pages/CaseNoire'
import CaseSavor from './pages/CaseSavor'
import CasePetDay from './pages/CasePetDay'
import CaseCoachella from './pages/CaseCoachella'

export type Page = 'home' | 'noire' | 'savor' | 'petday' | 'coachella'
export type NavigateFn = (page: Page, section?: string) => void

const pageToPath: Record<Page, string> = {
  home: '/',
  noire: '/noire',
  savor: '/savor',
  petday: '/pet-day',
  coachella: '/coachella',
}

const pathToPage = (pathname: string): Page => {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'

  switch (normalizedPath) {
    case '/noire':
      return 'noire'
    case '/savor':
      return 'savor'
    case '/pet-day':
      return 'petday'
    case '/coachella':
      return 'coachella'
    default:
      return 'home'
  }
}

export default function App() {
  const [page, setPage] = useState<Page>(() => {
    return pathToPage(window.location.pathname)
  })

  const [pendingSection, setPendingSection] = useState<string | null>(null)

  const navigate: NavigateFn = useCallback(
    (nextPage: Page, section?: string) => {
      const nextPath = pageToPath[nextPage]

      // Меняем URL без перезагрузки страницы
      if (window.location.pathname !== nextPath) {
        window.history.pushState({}, '', nextPath)
      }

      setPage(nextPage)

      window.scrollTo({
        top: 0,
        behavior: 'instant',
      })

      if (nextPage === 'home' && section) {
        setPendingSection(section)
      } else {
        setPendingSection(null)
      }
    },
    [],
  )

  // Работа кнопок Back / Forward браузера
  useEffect(() => {
    const handlePopState = () => {
      const nextPage = pathToPage(window.location.pathname)

      setPage(nextPage)
      setPendingSection(null)

      window.scrollTo({
        top: 0,
        behavior: 'instant',
      })
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const clearPendingSection = useCallback(() => {
    setPendingSection(null)
  }, [])

  return (
    <div
      style={{
        backgroundColor: '#F6F4EF',
        minHeight: '100vh',
      }}
    >
      {/* Шапка только на главной */}
      {page === 'home' && (
        <Nav
          page={page}
          navigate={navigate}
        />
      )}

      {/* Главная */}
      {page === 'home' && (
        <HomePage
          navigate={navigate}
          pendingSection={pendingSection}
          onSectionScrolled={clearPendingSection}
        />
      )}

      {/* Кейсы */}
      {page === 'noire' && (
        <CaseNoire navigate={navigate} />
      )}

      {page === 'savor' && (
        <CaseSavor navigate={navigate} />
      )}

      {page === 'petday' && (
        <CasePetDay navigate={navigate} />
      )}

      {page === 'coachella' && (
        <CaseCoachella navigate={navigate} />
      )}
    </div>
  )
}