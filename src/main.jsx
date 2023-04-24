import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './hooks/auth'
import { FichaProvider } from './hooks/ficha'
import { Routes } from './routes'
import { GlobalStyles } from './styles/global'
import { ToastContainer, toast } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <FichaProvider>
      <Routes/>
      <GlobalStyles/>
      <ToastContainer/>
    </FichaProvider>
  </AuthProvider>
)
