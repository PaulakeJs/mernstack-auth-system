import React from 'react'
import{Link} from'react-router-dom'

function Header() {
  return (
    <header className='bg-blue-300 flex justify-between items-center p-8'>
      <div><h3>MERNAUTH</h3></div>
    <div className='flex gap-5'>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link> 
    </div>
    </header>
  )
}

export default Header