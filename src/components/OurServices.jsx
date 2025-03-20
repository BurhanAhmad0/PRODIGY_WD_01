import React from 'react'

const OurServices = () => {
    return (
        <section className='px-4 md:px-8 mb-20'>
            <div className="head mb-10 flex items-center justify-center">
                <h2 className='text-3xl md:text-4xl w-full md:w-auto text-white text-center border-b border-green-600 py-2'>
                    We Provide The Best Services
                </h2>
            </div>

            <div className="main-content w-full px-4 sm:px-0 md:max-w-4xl text-white mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 mb-9">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 w-full">
                    {/* Card 1 */}
                    <div className="hover:border border-green-600 bg-neutral-800 rounded-md p-6 flex flex-col justify-between min-h-service-card transition-all">
                        <div className="flex items-start gap-4">
                            <img className="w-10 h-10" src="/img/SEO.svg" alt="SEO" />
                            <div>
                                <h2 className="text-xl font-bold mb-5">SEO Booster</h2>
                                <p className="text-sm mb-5">Elevate your online presence with Apexify’s SEO Booster Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti sapiente temporibus repudiandae officiis fugiat delectus doloribus eos ipsa error ipsum, exercitationem dolorem, modi nam pariatur!</p>
                                <button className="text-sm text-white flex items-center gap-2 mt-auto cursor-pointer hover:font-bold hover:text-green-600 transition-all">
                                    Read More
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.92865 12.947L13.2814 0.594208M13.2814 0.594208V11.4937M13.2814 0.594208H2.38192" stroke="white" strokeWidth="0.726633" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="hover:border border-green-600 bg-neutral-800 rounded-md p-6 flex flex-col justify-between min-h-service-card transition-all">
                        <div className="flex items-start gap-4">
                            <img className="w-10 h-10" src="/img/website-development.svg" alt="website-development" />
                            <div>
                                <h2 className="text-xl font-bold mb-5">Web Development</h2>
                                <p className="text-sm mb-5">We craft dynamic and user-centric websites Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti sapiente temporibus repudiandae officiis fugiat delectus doloribus eos ipsa error ipsum, exercitationem dolorem, modi nam pariatur!</p>
                                <button className="text-sm text-white flex items-center gap-2 mt-auto cursor-pointer hover:font-bold hover:text-green-600 transition-all">
                                    Read More
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.92865 12.947L13.2814 0.594208M13.2814 0.594208V11.4937M13.2814 0.594208H2.38192" stroke="white" strokeWidth="0.726633" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="hover:border border-green-600 bg-neutral-800 rounded-md p-6 flex flex-col justify-between min-h-service-card transition-all">
                        <div className="flex items-start gap-4">
                            <img className="w-10 h-10" src="/img/web-design.svg" alt="web-design" />
                            <div>
                                <h2 className="text-xl font-bold mb-5">Web Design</h2>
                                <p className="text-sm mb-5">At Apexify, we create captivating web experiences Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti sapiente temporibus repudiandae officiis fugiat delectus doloribus eos ipsa error ipsum, exercitationem dolorem, modi nam pariatur!</p>
                                <button className="text-sm text-white flex items-center gap-2 mt-auto cursor-pointer hover:font-bold hover:text-green-600 transition-all">
                                    Read More
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.92865 12.947L13.2814 0.594208M13.2814 0.594208V11.4937M13.2814 0.594208H2.38192" stroke="white" strokeWidth="0.726633" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="hover:border border-green-600 bg-neutral-800 rounded-md p-6 flex flex-col justify-between min-h-service-card transition-all">
                        <div className="flex items-start gap-4">
                            <img className="w-10 h-10" src="/img/analytics.svg" alt="analytics" />
                            <div>
                                <h2 className="text-xl font-bold mb-5">Data Analytics</h2>
                                <p className="text-sm mb-5">We harness the power of data analytics to uncover Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis, alias ut quia asperiores laudantium eaque quidem voluptatem eos sequi voluptas incidunt quisquam modi quis.</p>
                                <button className="text-sm text-white flex items-center gap-2 mt-auto cursor-pointer hover:font-bold hover:text-green-600 transition-all">
                                    Read More
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.92865 12.947L13.2814 0.594208M13.2814 0.594208V11.4937M13.2814 0.594208H2.38192" stroke="white" strokeWidth="0.726633" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </section>
    )
}

export default OurServices
