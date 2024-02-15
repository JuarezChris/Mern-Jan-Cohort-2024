import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Create from './views/Create';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/create" element={ <Create /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
