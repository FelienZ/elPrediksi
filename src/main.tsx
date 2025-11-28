import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Template from './frontend/Template/Template'
import MachineLearning from './frontend/Home/ML/main'
import DataScience from './frontend/Home/DS/main'
import Notfound from './NotFound'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Template/>}>
          <Route index element={<Navigate to={'ml'} replace/>}/>
          <Route path='ml' element={<MachineLearning/>}/>
          <Route path='ds' element={<DataScience/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
