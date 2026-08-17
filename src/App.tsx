import { useState, useCallback } from 'react'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import CaseNoire from './pages/CaseNoire'
import CaseSavor from './pages/CaseSavor'
import CasePetDay from './pages/CasePetDay'
import CaseCoachella from './pages/CaseCoachella'

export type Page = 'home' | 'noire' | 'savor' | 'petday' | 'coachella'
export type NavigateFn = (page: Page, section?: string) => void

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [pendingSection, setPendingSection] = useState<string | null>(null)

  const navigate: NavigateFn = useCallback((nextPage: Page, section?: string) => {
    setPage(nextPage)
    window.scrollTo({ top: 0, behavior: 'instant' })
    if (nextPage === 'home' && section) {
      setPendingSection(section)
    }
  }, [])

  const clearPendingSection = useCallback(() => {
    setPendingSection(null)
  }, [])

  return (
    <div style={{ backgroundColor: '#F6F4EF', minHeight: '100vh' }}>
      <Nav page={page} navigate={navigate} />
      {page === 'home' && (
        <HomePage
          navigate={navigate}
          pendingSection={pendingSection}
          onSectionScrolled={clearPendingSection}
        />
      )}
      {page === 'noire' && <CaseNoire navigate={navigate} />}
      {page === 'savor' && <CaseSavor navigate={navigate} />}
      {page === 'petday' && <CasePetDay navigate={navigate} />}
      {page === 'coachella' && <CaseCoachella navigate={navigate} />}
    </div>
  )
}
