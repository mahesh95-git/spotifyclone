import React from 'react'
import './navbar.css'
import {GrNext} from 'react-icons/gr'
import {IoChevronBackOutline} from 'react-icons/io5'
export default function Navbar() {
  return (
    <div className='container-3-1'>
     <div className="container-3-1-button">
      <button className='back'><IoChevronBackOutline/></button>
      <button className='next'><GrNext/></button>
     </div>
     <div className="container-3-1-login-sign">
    <button className='login'>Log in</button>
    <button className='sign'>Sign up</button>
     </div>
    </div>
  )
}
