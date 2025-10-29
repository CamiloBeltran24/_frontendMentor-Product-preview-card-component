import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PreviewCard } from './assets/PreviewCard/PreviewCard';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PreviewCard />
  </StrictMode>,
)
