import React from 'react'

const Testimonials = () => {
  return (
    <section className='px-4 md:px-8 mb-20'>
      <div className="head mb-10 flex items-center justify-center">
        <h2 className='text-3xl md:text-4xl w-full md:w-auto text-white text-center border-b border-green-600 py-2'>
          Testimonials
        </h2>
      </div>

      <div className="main-content w-full md:max-w-4xl text-white mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 mb-9">
        <div className="text w-full lg:w-1/2">
          <h3 className='text-2xl md:text-3xl font-semibold mb-3'>
            Sam Jeffords, TechNova Solutions
          </h3>
          <p className='lg:w-full'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ex rem libero est dolorem explicabo natus cum sed, architecto aperiam sequi ratione dignissimos magni, nostrum ut quisquam sit molestias inventore veritatis voluptate similique minima vel dolorum quis. Quae quaerat, ipsam omnis ad blanditiis non corporis deleniti sunt in esse neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta tempora dolorem saepe delectus laudantium ab! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, eos?
          </p>
        </div>

        <div className="image w-full lg:w-1/2 flex items-center justify-center overflow-hidden">
          <img className='w-full object-cover' src="/img/testimonial.svg" alt="testimonial" />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
