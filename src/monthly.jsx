import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MonthlyApp from './MonthlyApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MonthlyApp />
  </StrictMode>,
)
