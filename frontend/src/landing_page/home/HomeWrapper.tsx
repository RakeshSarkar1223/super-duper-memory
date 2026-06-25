import React from 'react'
// import Navbar from './MyNavbar'
import Hero from './Hero'
import SignUp from './SignUp'
import Trust from './Trust'
import Pricing from './Pricing'
import Education from './Education'
import Footer from './Footer'
import MyNavbar from './MyNavbar'
import Invest from './Invest'

function HomeWrapper() {
  return (
    <>
        <div className="pt-15">
          <MyNavbar/>
          <Hero />
          <Invest/>
          <Trust />
          <Pricing />
          <Education />
          <SignUp/>
          <Footer />
        </div>
    </>
  )
}

export default HomeWrapper
