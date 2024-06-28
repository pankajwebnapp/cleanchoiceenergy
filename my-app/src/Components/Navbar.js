import { Link } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);
  return (
   <>
   <div className='header'>
   <div className='container'>
   <div className='row'>
   <div className='col-md-2'>
    <Link to="/"><img src={ require('../images/cce-logo-stacked.png')} width={'111'} /></Link>
   </div>
   <div className='col-md-10 d-flex justify-content-end'>
   <div className='header-right d-flex align-items-center justify-content-end'>
   <Link to="#" className='btn-green header-btn'>Get Started</Link>
   <Link to="#" className='user-login mx-4'>
   <svg xmlns="http://www.w3.org/2000/svg" width={"30px"} fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#bbbbbb" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
   </Link>
   <div onClick={() => setShow(!show)} className='header-menu-wrap'>
   <div className={show ? "closing hamburger" : "hamburger default"}>
     <span></span>
     <span></span>
     <span></span>
   </div>
   <div className={show ? "HeaderNav header-menu" : "header-menu"}>
     <ul>
      <li><Link to="/clean-electricity" >Clean Electricity</Link></li>
      <li><Link to="/about" >About</Link></li>
      <li><Link to="/contact" >Contact</Link></li>
      <li><Link to="/articles" >Articles</Link> </li>
     </ul>
   </div>
   </div>
   </div>
   </div>
   </div>
   </div>
   </div>
   </>
  )
}

export default Navbar
