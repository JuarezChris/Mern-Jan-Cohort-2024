import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Create from './views/Create';
import Update from './views/Update';
import Details from './views/Details';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/create" element={ <Create /> } />
          <Route path="/details/:id" element={ <Details /> } />
          <Route path="/edit/:id" element={ <Update /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
