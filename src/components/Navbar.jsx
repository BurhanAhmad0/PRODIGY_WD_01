import React from 'react'
import { useState, useEffect } from 'react'

const Navbar = ({ toggleSidebar }) => {

  const [isOnTop, setIsOnTop] = useState(true);

  const handlePageScroll = () => {
    if (window.scrollY > 0) {
      setIsOnTop(false);
    } else {
      setIsOnTop(true);
    }
  };

  useEffect(() => {
    // Add event listener on component mount
    window.addEventListener('scroll', handlePageScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handlePageScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 z-10 flex items-center justify-center xsm:justify-between px-7 md:px-0 md:justify-around h-20 ${(!isOnTop) ? 'bg-green-400' : 'bg-transparent'} transition-all duration-300`}>
      <div className="logo">
        <svg
          onClick={toggleSidebar}
          className='absolute top-7 left-4 z-10 block md:hidden'
          xmlns="http://www.w3.org/2000/svg"
          width='24'
          height='24'
          viewBox="0 0 24 24"
          style={{ fill: 'white' }}
        >
          <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z" />
        </svg>
        <a href="/"><img title='Home' className={`w-40 cursor-pointer`} src="/img/text-logo.png" alt="text-logo" /></a>
      </div>
      <div className="nav-links hidden md:block">
        <ul className='flex items-center justify-center gap-16 text-white'>
          <li><a className='nav-link-underline-animation text-lg hover:scale-125 hover:font-bold hover:text-green-600 transition-all' href="#">About</a></li>
          <li><a className='nav-link-underline-animation text-lg hover:scale-125 hover:font-bold hover:text-green-600 transition-all' href="#">Services</a></li>
          <li><a className='nav-link-underline-animation text-lg hover:scale-125 hover:font-bold hover:text-green-600 transition-all' href="#">Work</a></li>
          <li><a className='nav-link-underline-animation text-lg hover:scale-125 hover:font-bold hover:text-green-600 transition-all' href="#">Blog</a></li>
        </ul>
      </div>
      <div className="contact-btn hidden xsm:block">
        <button title='Contact Page' className='CTA-btn'>Contact Us</button>
      </div>
    </nav>
  )
}

export default Navbar
