import React from 'react'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
const Header = () => {
  return (
    <>
    <BrowserRouter>
        <header className='header'>
            <ul className='listing'>
                <li className='menu'>
                    <NavLink className="" to="/">
                        Home
                    </NavLink>
                </li>
                <li className='menu'>
                    <NavLink className="" to="/about">
                        About
                    </NavLink>
                </li>
                <li className='menu'>
                    <NavLink className="" to="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </header>
        
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default Header