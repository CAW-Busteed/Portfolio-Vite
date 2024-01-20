import Header from 'components/Header'
import Education from './Education'
import Footer from './Footer'
import Coding from './Cards/Coding'
import Wordwall from 'assets/wordwall.png'
import Sustain from './Cards/Sustain'
import Writing from './Cards/Writing'
import SkillsObj from './Cards/SkillsObj'
import React, { useState } from 'react'

const Resume = () => {
    const [active, setActive] = useState('home')
    const [dropdownVisible, setDropdownVisible] = useState(false);

    return (
        <div>
            <Header />

            <div className='flex text-2xl text-blue-950'>
                <h1 className='mx-auto p-3 md:p-6'>Resume</h1>
            </div>

            <div className='flex justify-evenly text-lg'>
                <button onClick={() => setActive("home")} className="text-blue-950 inline-flex justify-center gap-x-1.5 rounded-md px-3 py-2 mx-2 hover:font-semibold active:font-bold"> Skills </button>
                {/* <button onClick={() => setActive("coding")} className="inline-flex justify-center gap-x-1.5 rounded-md bgpx-3 py-2 mx-2 hover:font-semibold active:font-bold"> Coding </button> */}
                <button onClick={() => setActive("sustain")} className="text-blue-950 inline-flex justify-center gap-x-1.5 rounded-md bpx-3 py-2 mx-2 hover:font-semibold active:font-bold"> Sustainability Efforts </button>
                <button onClick={() => setActive("writing")} className="text-blue-950 inline-flex justify-center gap-x-1.5 rounded-md px-3 py-2 mx-2 hover:font-semibold active:font-bold"> Background </button>
            </div>
            <div className="md:mx-24">
                {/* <Prof /> */}
                <div className="p-6">
                    <div>
                        {active === 'home' && <SkillsObj />}
                        {/* {active === 'coding' && <Coding />} */}
                        {active === 'sustain' && <Sustain />}
                        {active === 'writing' && <Writing />}
                    </div>
                </div>
            </div >
            <img src={Wordwall} className="mx-auto" alt="Wordwall" />
            <Education />
            <Footer />
        </div>
    );
}

export default Resume;