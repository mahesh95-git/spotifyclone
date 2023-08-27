import React from 'react'
import './home.css'
import Slidebar from '../Slidebar/Slidebar'
import MusicControll from '../MusicControll/MusicControll'
import Allsong from '../Allsong/Allsong'

export default function Home() {
  return (
    <>
    <div className="homeContainer">
    <Slidebar/>
    <Allsong/>
    </div>
<MusicControll/>
    </>
  )
}
