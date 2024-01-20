import React, { useState } from 'react'

const McGill = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    // useState({}); is the same as useState(false);
    return (
        <div style={{ position: 'relative' }}>

            <button type="button" onClick={() => setDropdownVisible(!dropdownVisible)} className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 font-title text-gray-900 hover:bg-gray-50" id="mcgill-button" aria-expanded="true" aria-haspopup="true">
                {/* Remember to modify hover to better fit with chosen bg */}
                MCGILL UNIVERSITY | Liberal Arts & Sciences
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </button>

            {dropdownVisible && (
                // if you want animation: <div style={{ position: 'relative' }}> and then close
                <div className="z-10 w-56 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex justify-center items-center" style={{ width: '500px' }} role="menu" aria-orientation="vertical" aria-labelledby="mcgill-button" tabIndex={-1}>
                    <div className="py-1" role="none">
                        {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                        <li className="text-gray-700 block py-2 text-sm" role="menuitem" tabIndex={-1}>Principles:Organismal Biology</li>
                        <li className="text-gray-700 block py-2 text-sm" role="menuitem" tabIndex={-1}>Litt française depuis 1800</li>
                        <li className="text-gray-700 block py-2 text-sm" role="menuitem" tabIndex={-1}>History and the Environment</li>
                        <li className="text-gray-700 block py-2 text-sm" role="menuitem" tabIndex={-1}>Intro to Philosophy 1</li>
                        <li className="text-gray-700 block py-2 text-sm" role="menuitem" tabIndex={-1}>Intro to Oceanic Sciences</li>
                        <li className="text-gray-700 block py-2 text-sm" role="menuitem" tabIndex={-1}>Cell and Molecular Biology</li>
                        <li className="text-gray-700 block py-2 text-sm" role="menuitem" tabIndex={-1}>Canadian Literature 2</li>
                        <li className="text-gray-700 block py-2 text-sm" role="menuitem" tabIndex={-1}>Linear Algebra and Geometry</li>
                        <li className="text-gray-700 block py-2 text-sm" role="menuitem" tabIndex={-1}>Dept. Survey of English Lit. 1</li>
                        <li className="text-gray-700 block py-2 text-sm" role="menuitem" tabIndex={-1}>The Global Environment</li>
                        <li className="text-gray-700 block py-2 text-sm" role="menuitem" tabIndex={-1}>Society, Environment, & Sustainability</li>
                        <li className="text-gray-700 block py-2 text-sm" role="menuitem" tabIndex={-1}>Mechanics and Waves</li>
                        <li className="text-gray-700 block py-2 text-sm" role="menuitem" tabIndex={-1}>Human Evolution</li>
                        <li className="text-gray-700 block py-2 text-sm" role="menuitem" tabIndex={-1}>Canadian Prose Fiction 1</li>
                        <li className="text-gray-700 block py-2 text-sm" role="menuitem" tabIndex={-1}>Introduction to Linguistics</li>
                        <li className="text-gray-700 block py-2 text-sm" role="menuitem" tabIndex={-1}>Phonetics</li>
                        <li className="text-gray-700 block py-2 text-sm" role="menuitem" tabIndex={-1}>Intro to Communication Studies</li>
                        <li className="text-gray-700 block py-2 text-sm" role="menuitem" tabIndex={-1}>English Literature & the Bible</li>
                        <li className="text-gray-700 block py-2 text-sm" role="menuitem" tabIndex={-1}>Poetics</li>

                    </div>
                </div>
            )}
        </div>
    );
};

export default McGill;