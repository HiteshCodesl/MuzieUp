import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='bg-[#0a0a0a] h-screen w-screen'>
    <App />
    </div>
  </StrictMode>,
)
