
import { Link } from 'react-router-dom';

import React, { useState } from 'react'
import './Navbar.css';
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'

const navbar = () => {

// eslint-disable-next-line react-hooks/rules-of-hooks
const [menu, setMenu]=useState("shop");

  return (
    <div className='navbar'>
  <div className="nav-logo">
  <img src={logo} alt="" />
      <p>SHOPPER</p>
  </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}} > <Link to='/'style={{textDecoration:'none'}}>Shop</Link>  {menu==="shop"?<hr />:<></>} </li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/men' style={{textDecoration:'none'}}>Men</Link> {menu==="mens"?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link to='/women'style={{textDecoration:'none'}}>Women</Link> {menu==="womens"?<hr />:<></>} </li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link> {menu==="kids"?<hr />:<></>} </li>
      </ul>
      <div className="login-cart">
        <Link to='/login'>
        <button>login</button>
        </Link>
        <Link  to='/cart'>  <img src={cart_icon} alt="" /></Link>
      
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default navbar
