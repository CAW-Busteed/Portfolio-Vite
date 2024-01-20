const Prof = () => {
    return (
        <div className="flex border-blue-800 gap-4">
            <div className="flex">
                Picture of me on left
                {/* <!-- picture of me takes up max 1/3 --> */}
            </div>
            {/* <!-- span 1 is the writer, hidden until button is clicked */}
            {/* figure out how to toggle className="hidden" --> */}
            <span className="flex">
                {/* <div className="border-2 border-red-600 bg-yellow-200 p-3">
                    <div className="tabtext">
                        <h3 className="text-center text-lg">Writer</h3>
                    </div>
                    <h4 className="text-center">Skills</h4>
                    <ul>
                        <li>Typing speed: 44 wpm</li>
                        <li>Speed Reading/Analysis</li>
                        <li>Microsoft Office suite expertise</li>
                        <li>Excellent written and verbal communication skills</li>
                    </ul>
                    <h4 className="text-center">Experiences</h4>
                    <ul>
                        <li><a className='dropdown-toggle'>Tutor | McGill University | August 2014 - May 2015</a></li>
                        <ul className="dropdown-menu">
                            <li>Assessed and corrected learning gaps among my peers.</li>
                            <li>Provided academic support to over a dozen students.</li>
                        </ul>
                        <li><a className='dropdown-toggle'>Freelance Online Editor | December 2015 - Present</a></li>
                        <ul className="dropdown-menu">
                            <li>Collaborated with Chinese, Japanese, and Korean translators to polish and correct
                                rough translations into publishable English works.</li>
                            <li>Proofread and aided original online authors.</li>
                        </ul>
                        <li><a className='dropdown-toggle'>Editor | Ki Books | December 2020 - May 2021</a></li>
                        <ul className="dropdown-menu">
                            <li>Followed guidelines maintaining tone, pacing, and necessary information for paying
                                subscribers while also developing and editing written materials.</li>
                            <li>Built and managed data in a competitive publishing industry.</li>
                        </ul>
                        <li><a className='dropdown-toggle'>Teacher | Lindamood-Bell Learning Center | February 2022 -
                            March
                            2023</a></li>
                        <ul className="dropdown-menu">
                            <li>Effectively communicated complex concepts and adapted content for different
                                audiences.
                            </li>
                            <li>Engaged student learning through various presentation programs such as Powerpoint
                                and
                                Prezi.</li>
                            <li>Facilitated development of programs between students, teachers, managers, and
                                parents
                                while actively engaging with them to find the ideal balance between needs and
                                desires.
                            </li>
                        </ul>
                    </ul>
                </div> */}
            </span>
            {/* <!-- Span 2 is programmer stuff --> */}
            <span className="flex">
                {/* <div className="border-2 border-red-600 bg-yellow-200 p-3">
                    <div className="tabtext">
                        <h3 className="text-center text-lg">Programmer</h3>
                    </div>
                    <h4 className="text-center">Skills</h4>
                    <ul>
                        <li>Languages: C, Python, HTML, JavaScript, CSS, SQL</li>
                        <li>Strong problem-solving skills</li>
                        <li>Ability to engage with others</li>
                        <li>Bold and adaptable</li>
                    </ul>
                    <h4 className="text-center">Experiences</h4>
                </div> */}
            </span>
            {/* <!-- span 3 is sustainability history and skills --> */}
            <span className="flex">
                {/* <div className="border-2 border-red-600 bg-yellow-200 p-3">
                    <div className="tabtext">
                        <h3 className="text-center text-lg">Sustainability Analyst</h3>
                    </div>
                    <h4 className="text-center">Skills</h4>
                    <ul>
                        <li>ArcGIS proficiency</li>
                        <li>Research and analytical abilities</li>
                        <li>Team player</li>
                    </ul>
                    <h4 className="text-center">Experiences</h4>
                    <li><a className='dropdown-toggle'>Community Service | Surfrider, GreenPeace, Coral Restoration
                        Foundation,
                        One World</a></li>
                    <ul className="dropdown-menu">
                        <li>Demonstrated my commitment to making a positive impact through data analytics,
                            programming,
                            and physical labor.</li>
                        <li>Established rapport, trust, and effective working relationships with people from various
                            backgrounds and lifestyles.</li>
                    </ul>
                </div> */}
            </span>
        </div>
    );
};

export default Prof;