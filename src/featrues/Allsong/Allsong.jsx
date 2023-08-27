import React from 'react'
import './Allsong.css'
import Navbar from '../Navbar/Navbar'
import Musiccard from "../Musiccard/Musiccard"
export default function Allsong() {
  return (
    <div className='container-2-1'>
        <Navbar/>
        <Musiccard/>
        <Musiccard/>
        <Musiccard/>
        <Musiccard/>
        <Musiccard/>
        <Musiccard/>
    </div>
  )
}
