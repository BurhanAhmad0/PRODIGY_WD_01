import React from 'react'

const HeroSection = () => {
  return (
    <section className='h-hero-height flex flex-col items-center justify-center px-4 md:px-8'>
      <div className="main-text mx-auto flex flex-col items-center justify-center mb-9 text-center">
        <h1 className='w-full md:w-4/5 lg:w-4xl leading-snug text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-5'>
          Your Path To A Digital Revolution Starts Here!
        </h1>
        <p className='w-full md:w-3/4 lg:w-xl text-white text-base md:text-lg lg:text-xl'>
          We strive to empower businesses with cutting-edge solutions, propelling them to new heights of success.
        </p>
      </div>

      <div className="CTA-btns flex flex-col md:flex-row items-center gap-5 mt-6">
        <button className='CTA-btn'>Schedule A Call</button>
        <button className='px-8 py-2 font-semibold bg-transparent text-white hover:text-green-200 outline-2 outline-green-600 rounded-sm cursor-pointer transition-all'>
          Explore More
        </button>
      </div>
    </section>

  )
}

export default HeroSection
