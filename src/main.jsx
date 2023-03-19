import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppLayout } from './layout/AppLayout'
import { Routes } from './routes'
import { GlobalStyles } from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Routes/>
    <GlobalStyles/>
  </>
)
