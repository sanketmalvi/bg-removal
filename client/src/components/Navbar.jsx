import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center mx-4 py-3 lg:mx-44'>
        <img src={assets.logo} alt="" />
        <button>
            Get started <img src={assets.arrow_icon} alt="" />
        </button>
    </div>
  )
}

export default Navbar