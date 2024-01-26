import Twitter from 'assets/twit_icon.svg'
import LinkedIn from 'assets/linkedin_icon.svg'
import Medium from 'assets/medium_icon.svg'

const Footer = () => {
    return (
        <footer>
            <div className="bg-green-200 mx-auto justify-center">
                <div>
                    {/* Other stuff I'd want to put in the footer later
                    Newsletter subscription, buy book, etc... */}
                </div>



                <div className="py-6 md:py-12">
                    {/* Accessible links */}
                    <div className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 m-2 mx-auto">
                        <a href="resume.html" className="text-gray-900 px-2">Resume</a>
                        <a href="blog.html" className="text-gray-900 px-2">Blog</a>
                        <a href="contact.html" className="text-gray-900 px-2">Contact</a>
                    </div>
                    <div className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 m-2 text-sm mx-auto">
                        <a href="coder-port.html" className="text-gray-700 px-2">Programs</a>
                        <a href="writer-port.html" className="text-gray-700 px-2">Prose</a>
                        <a href="storyboard-port.html" className="text-gray-700 px-2">Storyboards</a>
                        <a href="sustainability-port.html" className="text-gray-700 px-2">Sustainability</a>
                    </div>

                </div>

                <div className=' pb-6'>
                    <div className='flex justify-center'>
                        <div className='rounded-full p-2 filter grayscale hover:grayscale-0'><a href='https://twitter.com/YoungChronicler'><img className='rounded-full h-6 2-24' src={Twitter} alt='Twitter' /></a></div>
                        <div className='rounded-full p-2 filter grayscale hover:grayscale-0'><a href='https://www.linkedin.com/in/cedric-andre-wayne-busteed/'><img className='rounded-full h-6 2-24' src={LinkedIn} alt='LinkedIn' /></a></div>
                        <div className='rounded-full p-2 filter grayscale hover:grayscale-0'><a href='https://medium.com/@cedric.a.busteed'><img className='rounded-full h-6 2-24' src={Medium} alt='Medium' /></a></div>
                    </div>
                </div>

                <div className="text-xs pb-12 ">
                    {/* copyright information and who made the site (me) */}
                    <p className="inline-flex w-full justify-center mx-auto">© Copyright {new Date().getFullYear()} Cedric Busteed. All rights reserved.</p>
                    <p className="inline-flex w-full justify-center mx-auto">Site by Cedric Busteed</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;