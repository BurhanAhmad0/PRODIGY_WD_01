import React from 'react'

const Footer = () => {
  return (
    <footer className='h-auto py-4 flex flex-col items-center justify-center px-4 md:px-8'>
      <div className="w-full md:w-4xl mx-auto flex flex-col md:flex-row items-center justify-between text-center border-t-2 border-white pt-5">
        <div className="cpy-right-text mb-4 md:mb-0">
          <p className='text-white'>@2025 Circle All Rights Reserved</p>
        </div>
        <div className="icons flex items-center gap-5">
          <img className='invert w-6 h-6' src="/img/bxl-facebook-circle.svg" alt="facebook" />
          <img className='invert w-6 h-6' src="/img/bxl-instagram-alt.svg" alt="instagram" />
          <img className='invert w-6 h-6' src="/img/bxl-twitter.svg" alt="twitter" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
