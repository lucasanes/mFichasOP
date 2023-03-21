import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './hooks/auth'
import { AppLayout } from './layout/AppLayout'
import { Routes } from './routes'
import { GlobalStyles } from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Routes/>
    <GlobalStyles/>
  </AuthProvider>
)
