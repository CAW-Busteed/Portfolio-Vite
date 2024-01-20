import Mcgill from './Dropdowns/mcgill';
import UIowa from './Dropdowns/uiowa';
import React, { useState } from 'react'

const Education = () => {
    const [dropdownVisible, setDropdownVisible] = useState({});
    // useState({}); is the same as useState(false);
    return (
        <div className="p-6 md:m-24 rounded-md">
            <h3 className="text-center text-xl font-title">EDUCATION</h3>
            < Mcgill />
            <br></br>
            < UIowa />
            <br></br>
            <h3 className="text-center text-xl font-title">CERTIFICATIONS & AWARDS</h3>
            <br />
            <ul className="font-body italic text-center">
                <li>Harvard CS50 Certificate</li>
                <li>LEED Certificate</li>
                <li>Sustainability Certificate</li>
                <li>International Baccaleaureate</li>
                <li>Emily Dickinson Award</li>
                <li>President's Education Award for Outsanding Academic Achievement</li>
            </ul>
        </div>
    );
};

export default Education;