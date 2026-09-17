import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Support from './pages/Support'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Support />
  </StrictMode>,
)
