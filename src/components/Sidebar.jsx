import React from 'react'

const Sidebar = ({ isSidebarVisible, toggleSidebar }) => {
    return (
        <aside className={`fixed top-0 left-0 z-10 h-full w-full bg-green-400 ${(isSidebarVisible) ? 'translate-x-0' : '-translate-x-full'} transition-all block md:hidden`}>
            <div className="close-btn py-5 pr-5 flex items-center justify-end">
                <svg
                    onClick={toggleSidebar}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    style={{ fill: 'black' }}
                >
                    <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
                </svg>
            </div>

            <div className="buttons">
                <ul>
                    <li className="rounded-lg my-3 mx-8">
                        <a href="/" className="flex gap-4 py-3 px-4 rounded-lg hover:bg-green-300 transition-all">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                style={{ fill: 'black' }}
                            >
                                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                            </svg>
                            About
                        </a>
                    </li>
                    <li className="rounded-lg my-3 mx-8">
                        <a href="/products" className="flex gap-4 py-3 px-4 rounded-lg hover:bg-green-300 transition-all">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                style={{ fill: 'black' }}
                            >
                                <path d="M20 18v-3a8 8 0 0 0-5-7.4V13h-1V5h-4v8H9V7.6A8 8 0 0 0 4 15v3H2v2h20v-2z" />
                            </svg>
                            Services
                        </a>
                    </li>
                    <li className="rounded-lg my-3 mx-8">
                        <a href="/orders" className="flex gap-4 py-3 px-4 rounded-lg hover:bg-green-300 transition-all">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                style={{ fill: 'black' }}
                            >
                                <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v3h20V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm5 10h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8v2z" />
                            </svg>
                            Work
                        </a>
                    </li>
                    <li className="rounded-lg my-3 mx-8">
                        <a href="/orders" className="flex gap-4 py-3 px-4 rounded-lg hover:bg-green-300 transition-all">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                style={{ fill: 'black' }}
                            >
                                <path d="M20.954 10.667c-.072-.322-.272-.621-.502-.745-.07-.039-.522-.088-1.004-.109-.809-.036-.898-.052-1.152-.201-.405-.237-.516-.493-.518-1.187-.002-1.327-.554-2.559-1.646-3.67-.776-.793-1.645-1.329-2.634-1.629-.236-.072-.768-.097-2.545-.118-2.787-.033-3.405.024-4.356.402-1.748.697-3.008 2.166-3.465 4.05-.087.353-.103.92-.124 4.177-.025 4.08.004 4.68.258 5.488.212.668.425 1.077.861 1.657.835 1.108 2.083 1.907 3.334 2.133.595.107 7.931.135 8.683.032 1.306-.178 2.331-.702 3.293-1.684.694-.71 1.129-1.479 1.414-2.499.117-.424.127-.63.149-3.117.017-1.878.002-2.758-.046-2.98zM8.007 8.108c.313-.316.399-.329 2.364-.329 1.764 0 1.822.004 2.081.134.375.189.538.456.538.88 0 .384-.153.653-.493.869-.184.115-.293.123-2.021.133-1.067.007-1.916-.013-2.043-.048-.669-.184-.918-1.143-.426-1.639zm7.706 8.037-.597.098-3.114.035c-2.736.033-3.511-.018-3.652-.08-.288-.124-.554-.472-.602-.78-.042-.292.104-.696.33-.9.285-.257.409-.266 3.911-.27 3.602-.002 3.583-.003 3.925.315.482.45.381 1.251-.201 1.582z" />
                            </svg>
                            Blog
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar
