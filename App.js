import React from 'react';
import './App.css';
// import Header from './components/Header';
import Home from './components/Home';
import Employment from './components/Employment';
import Pagenotfound from './components/Pagenotfound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Training from './components/Training';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/employment' element={<Employment />} />
          <Route path='/training' element={<Training />} />
          <Route path='*' element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
