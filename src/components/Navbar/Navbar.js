import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css' 

function Navbar() {
  const btnClick=()=>{
    localStorage.clear();
    window.location.reload();
  }
  return (
    <>
        <nav className='navbar'>
            <div className='logo'><a href='#'>PIZZA</a></div>
            <div className='menu'>
                <ul className='links'>
                    <li className='item'><Link to='/Home' className='link'>HOME</Link></li>
                    {/* <li className='item'><Link to='/' className='link'>LOGOUT</Link></li> */}
                    <li className='item'><button onClick={btnClick} className="btn-logout">Logout</button></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar;