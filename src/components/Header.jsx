import React from 'react'
import Darkmode from './Darkmode'
import '../index.css';

const Header = () => {
  return (
    <div className='flex w-full bg-bgColor shadow-header-shadow py-4 fixed top-0 transition-all ease-in-out duration-700 '>
      <header className='mx-auto'>
        <h1 className='text-2xl sm:text-3xl font-bold tracking-wider uppercase text-textColor'>codehelp blogs</h1>
      </header>

      {/* we also need to show the toogle for darkmode */}
      <div>
        <Darkmode/>
      </div>
    </div>
  )
}

export default Header