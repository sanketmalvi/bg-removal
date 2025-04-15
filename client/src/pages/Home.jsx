import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import BgSlider from '../components/BgSlider'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Header />
        <Steps />
        <BgSlider />
        <Testimonials />
    </div>
  )
}

export default Home