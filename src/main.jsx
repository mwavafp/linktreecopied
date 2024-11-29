import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { BrowserRouter, Links, Route, Routes } from 'react-router'
import Linktree from './components/LinkTree.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/linktree' element={<Linktree/>}/>
      </Route>
       
    </Routes>
    </BrowserRouter>
  
  </StrictMode>,
)
