import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './views/Home';
import Create from './views/Create';
import Details from './views/Details';
import Update from './views/Update';
import Header from './components/Header';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/dets/:id" element={<Details/>} />
          <Route path="/update/:id" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
