import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Employment from './Employment';
import Pagenotfound from './Pagenotfound';
import './Header.css';

const Header = () => {
  return (
    <div>
      <BrowserRouter>
        <nav className='navbar'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/employment">Employment</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/employment' element={<Employment />} />
          <Route path='*' element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Header;

