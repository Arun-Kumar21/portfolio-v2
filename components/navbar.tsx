import React from 'react'
import localFont from 'next/font/local';
import Link from 'next/link';

const font = localFont({src : '../app/fonts/CabinetGrotesk-Variable.woff2'});

const Navbar = () => {
  return (
    <nav className='w-full h-16 flex items-center justify-between p-2 sm:p-4 selection:bg-[#e78b71]'>
      <div className='text-sm sm:text-xl'>Portfolio V2</div>
      <div className={font.className}>
        <Link  href="/" className='sm:text-2xl font-bold text-lg'>
          Arun Kumar
        </Link>
      </div>
      <div className='sm:text-xl text-sm flex flex-col items-center justify-center'>Open for <span className='hidden sm:flex'>— collaborations</span><span className='flex sm:hidden'>— Work</span></div>
    </nav>
  )
}

export default Navbar;