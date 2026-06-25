import React from 'react'
import pricing0 from '../../assets/images/pricing0.svg'
import pricing20 from '../../assets/images/intradayTrades.svg'

function Pricing() {
  return (
    <>
      <div className='text-gray-700 mix-w-full mx-33 my-20'>
        <h2 className='text-3xl'>Unbeatable pricing</h2>
        <div className='grid grid-cols-[40%_20%_20%_20%]  py-2 '>
          <div className='mr-8 flex items-center'>
            <p className='text-lg'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          </div>
          <div className='flex justify-center items-center'>
            <img src={pricing0} alt="pricing0" className='w-6/12  h-auto object-contain pr-0'/>
            <p className='pl-0 text-xs'>Free account opening</p>
          </div>
          <div className='flex justify-center items-center'>
            <img src={pricing0} alt="pricing0" className='w-6/12 h-auto object-contain'/>
            <p className='pl-0 text-xs'>Free equity delivery
and direct mutual funds</p>
          </div>
          <div className='flex justify-center items-center'>
            <img src={pricing20} alt="pricing0" className='w-6/12  h-auto object-contain'/>
            <p className='pl-0 text-xs'>Intraday and
F&O</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing
