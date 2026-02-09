import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Analytics} from '@vercel/analytics/react'

// App bootstrap (single-page site)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Analytics />

  </React.StrictMode>
)
