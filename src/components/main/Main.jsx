import React from 'react'
import Navbar from '../Navbar'
import SwipeImages from '../SwipeImages'
import Bestshoes from '../Bestshoes/Bestshoes'
import Review from '../Review/Review'
import Footer from '../footer/Footer'
function Main() {
  return (
    <div>
        <Navbar/>
        <SwipeImages/>
        <Bestshoes/>
        <Review/>
        <Footer/> 
    </div>
  )
}

export default Main