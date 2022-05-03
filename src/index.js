import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppContextProvider } from './contexts/AppContext'
import { ThemeContextProvider } from './contexts/ThemeContext'
import App from './App'
import './styles.scss'

const container = document.getElementById('root') 
const root = createRoot(container)

root.render(
  <StrictMode>
    <AppContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AppContextProvider>
  </StrictMode>
)