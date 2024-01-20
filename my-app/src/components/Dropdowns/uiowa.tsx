import React, { useState } from 'react'

const UIowa = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    // useState({}); is not the same as useState(false);
    return (
        <div>
            <div>
                <button type="button" onClick={() => setDropdownVisible(!dropdownVisible)} className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 font-title text-gray-900 hover:bg-gray-50" id="uiowa-button" aria-expanded="true" aria-haspopup="true">
                    UNIVERSITY OF IOWA | Bachelor of Arts | December 2020
                    <br />
                    Major in English and Creative Writing | Minor in Environmental Policy and Planning
                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            {dropdownVisible && (
                <div className="z-10 w-56 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex justify-center items-center" style={{ width: '500px' }} role="menu" aria-orientation="vertical" aria-labelledby="uiowa-button" tabIndex={-1}>
                    {/* for temp centered dropdown
                            z-10 w-56 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex justify-center items-center" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '500px' }} */}
                    <div className="py-2" role="none">
                        {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                        <li className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1}>ENGL 2020 Foundations of Creative Writing</li>
                        <li className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1}>GEOG 2013 Introduction to Sustainability</li>
                        <li className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1}>CNW 2740 Art and Craft of Environmental Writing</li>
                        <li className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1}>ECON 1100 Principles of Microeconomics</li>
                        <li className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1}>GEOG 1070 Contemporary Environmental Issues</li>
                        <li className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1}>PHIL 1033 The Meaning of Life</li>
                        <li className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1}>ANTH 3240 CRM Archaeology: Practice/Practicalities</li>
                        <li className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1}>ENGL 1510 Introduction to Environmental Literature</li>
                        <li className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1}>ENGL 4003 Honors Seminar: Lit Theory, 20/21 C <i>Climate Change and the Construction of
                            Paradise</i></li>
                        <li className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1}>ENGL 4720 Advanced Creative Writing: Special Topic <i>Fight Writing</i></li>
                        <li className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1}>GEOG 3780 U.S. Energy Policy in Global Context</li>
                        <li className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1}>ANTH 2165 Native Peoples of North America</li>
                        <li className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1}>ENGL 3444 Literatures of the American Peoples <i>Immigrant Stories</i></li>
                        <li className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1}>ENGL 4723 Advanced Writers' Seminar: Nonfiction <i>A History of the Essay and Violence</i></li>
                        <li className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1}>ENGL 2329 Topics in Modern British Lit Before 1900</li>
                        <li className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1}>CW 3004 Writing and Reading Fantasy Fiction</li>
                        <li className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1}>GEOG 3920 Planning Livable Cities</li>
                        <li className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1}>ANTH 2261 Human Impacts on the Environment</li>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UIowa;