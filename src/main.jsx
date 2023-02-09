import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Reset } from './styles/reset'
import { GlobalStyles } from './styles/globalStyles'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
