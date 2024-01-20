import React, { useState } from 'react'

const Header = () => {
    const [active, setActive] = useState('home')
    const [dropdownVisible, setDropdownVisible] = useState(false);

    return (
        <header className="m-6 md:m-12">
            <div className='flex justify-between'>

                <nav className='block md:hidden'>
                    {/* Mobile navigation */}
                    <div className="relative inline-block text-left">
                        <div>
                            <button type="button" onClick={() => setDropdownVisible(!dropdownVisible)} className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 m-2 text-sm font-semibold text-gray-900" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                <svg className="-mr-1 h-5 w-5 text-blue-950" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M1,4 H18 V6 H1 V4 M1,9 H18 V11 H1 V7 M3,14 H18 V16 H1 V14" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        {dropdownVisible && (
                            <div className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                                <div className="py-1" role="none">
                                    {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                                    <p className="text-gray-900 block px-4 py-1 text-sm font-semibold" role="menuitem" tabIndex={-1} id="menu-item-0">Portfolio</p>
                                    <div className='py-2' role="none">
                                        <a href="port-prog.html" className="text-gray-700 block px-8 py-1 text-sm hover:bg-slate-200" role="menuitem" tabIndex={-1} id="menu-item-1">Programs</a>
                                        <a href="port-write.html" className="text-gray-700 block px-8 py-1 text-sm hover:bg-slate-200" role="menuitem" tabIndex={-1} id="menu-item-2">Prose</a>
                                        <a href="port-sboards.html" className="text-gray-700 block px-8 py-1 text-sm hover:bg-slate-200" role="menuitem" tabIndex={-1} id="menu-item-3">Storyboards</a>
                                        <a href="port-sustain.html" className="text-gray-700 block px-8 py-1 text-sm hover:bg-slate-200" role="menuitem" tabIndex={-1} id="menu-item-4">Sustainability Projects</a>
                                    </div>
                                    <a href="resume.html" className="text-gray-900 block px-4 py-2 text-sm font-semibold hover:bg-slate-200" role="menuitem" tabIndex={-1} id="menu-item-5">Resume</a>
                                    <a href="blog.html" className="text-gray-900 block px-4 py-2 text-sm font-semibold hover:bg-slate-200" role="menuitem" tabIndex={-1} id="menu-item-6">Blog</a>
                                    <a href="contact.html" className="text-gray-900 block px-4 py-2 text-sm font-semibold hover:bg-slate-200" role="menuitem" tabIndex={-1} id="menu-item-7">Contact</a>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>

                <nav className='hidden md:block mr-12'>
                    <div className='flex justify-center'>
                        <div className="relative inline-block text-left">
                            <div>
                                <button type="button" onClick={() => setDropdownVisible(!dropdownVisible)} className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 m-2 text-sm font-semibold text-blue-950" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    Portfolio
                                    {/* <svg className="-mr-1 h-5 w-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg> 
                                ^ this is how to put in the little arrow*/}
                                </button>
                            </div>
                            {dropdownVisible && (
                                <div className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                                    <div className="py-1" role="none">
                                        {/* <!-- Active: "bg-gray-100 text-blue-950", Not Active: "text-gray-700" --> */}
                                        <a href="coder-port.html" className="text-gray-700 block px-4 py-2 text-sm  hover:bg-slate-200" role="menuitem" tabIndex={-1} id="menu-item-0">Programs</a>
                                        <a href="writer-port.html" className="text-gray-700 block px-4 py-2 text-sm  hover:bg-slate-200" role="menuitem" tabIndex={-1} id="menu-item-1">Prose</a>
                                        <a href="storyboard-port.html" className="text-gray-700 block px-4 py-2 text-sm  hover:bg-slate-200" role="menuitem" tabIndex={-1} id="menu-item-2">Storyboards</a>
                                        <a href="sustainability-port.html" className="text-gray-700 block px-4 py-2 text-sm  hover:bg-slate-200" role="menuitem" tabIndex={-1} id="menu-item-3">Sustainability Projects</a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 m-2 text-sm font-semibold text-blue-950">
                            <a href="resume.html">Resume</a>
                        </div>
                    </div>
                </nav>
                <div className="mx-auto">
                    <a href='index.html'>
                        <h1 className="text-center text-3xl text-blue-950 pb-4">CEDRIC BUSTEED</h1>
                        <h2 className="text-center italic text-xl text-blue-950">Art, Technology, Environment</h2>
                    </a>
                </div>
                <nav className='hidden md:block ml-12'>
                    <div className='flex justify-center'>
                        <div className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 m-2 text-sm font-semibold text-blue-950">
                            <a href="blog.html">Blog</a>
                        </div>
                        <div className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 m-2 text-sm font-semibold text-blue-950">
                            <a href="contact.html">Contact</a>
                        </div>
                    </div>
                </nav>

            </div >

        </header >
    );
};

export default Header;