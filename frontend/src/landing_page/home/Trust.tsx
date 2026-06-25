import React from 'react'

import photo from '../../assets/images/ecosystem copy.png'
import { Link } from 'react-router-dom'


function Trust() {
  return (
    <>
      <div className='grid grid-cols-[45%_60%] my-5 pt-10 px-25'>
        <div className='text-gray-600 px-8 pr-3'>
          <h2 className='text-4xl font-semibold'>Trust with confidence</h2>
          <div className='my-4 mt-6'>
            <h3 className='text-2xl font-semibold py-3'>Customer-first always</h3>
            <p className='text-md'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
          </div>
          <div className='my-4 mt-6'>
            <h3 className='text-2xl font-semibold py-3'>Customer-first always</h3>
            <p className='text-md'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
          </div>
          <div className='my-4 mt-6'>
            <h3 className='text-2xl font-semibold py-3'>Customer-first always</h3>
            <p className='text-md'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
          </div>
          <div className='my-4 mt-6'>
            <h3 className='text-2xl font-semibold py-3'>Customer-first always</h3>
            <p className='text-md'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
          </div>
            
        </div>
        <div className='pr-15'>
          <Link to="/products">
            <img src={photo} alt="ecosystem" className='h-auto w-10/12 object-contain'/>
          </Link>
          <div className='grid grid-cols-2 text-blue-400 text-center text-xl mt-2 mx-15'>
            <Link to="/products" className='hover:text-black transition-colors'>Explore our products<i className="fa-solid fa-arrow-right"></i></Link>
            <Link to="https://kite-demo.zerodha.com/dashboard" className='hover:text-black transition-colors text-left'>Try Kite demo <i className="fa-solid fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Trust
