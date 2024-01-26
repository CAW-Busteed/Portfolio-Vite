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
            <div className='md:flex'>
                <div className='hidden md:block justify-evenly text-lg md:ml-24 text-center md:my-24'>
                    <div><button onClick={() => setActive("writing")} className="text-blue-950 inline-flex my-5 justify-center gap-x-1.5 bg-green-500 rounded-2xl px-5 py-4 mx-2 hover:text-white hover:drop-shadow-lg active:font-bold"> Background </button></div>
                    <div><button onClick={() => setActive("home")} className="text-blue-950 inline-flex my-3 justify-center gap-x-1.5 bg-blue-400 rounded-2xl px-5 py-4 mx-2 hover:text-white hover:drop-shadow-lg active:font-bold"> Skills </button> </div>
                    {/* <div><button onClick={() => setActive("coding")} className="inline-flex justify-center gap-x-1.5 rounded-md bgpx-3 py-2 mx-2 hover:text-white hover:drop-shadow-lg active:font-bold"> Coding </button> </div> */}
                    <div><button onClick={() => setActive("sustain")} className="text-blue-950 inline-flex my-5 justify-center gap-x-1.5 bg-green-400 rounded-2xl px-5 py-4 mx-2 hover:text-white hover:drop-shadow-lg active:font-bold"> Sustainability Efforts </button></div>

                </div>
                <div className="md:mr-24">
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
            </div>
            <img src={Wordwall} className="mx-auto" alt="Wordwall" />
            <Education />
            <Footer />
        </div>
    );
}

export default Resume;