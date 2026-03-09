import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from './components/NavBar'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'


export default function App(){

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}
