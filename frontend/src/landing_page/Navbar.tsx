import React from 'react'
import AboutWrapper from './about/AboutWrapper'
import SignUpWrapper from './signup/SignUpWrapper'
function Navbar() {
  return (
    <div>
      <span><h3>Zerodha</h3></span>
      <span>
        <span><SignUpWrapper/></span>
        <span><AboutWrapper/></span>
        <span>SignUp</span>
        <span>SignUp</span>
      </span>
    </div>
  )
}

export default Navbar
