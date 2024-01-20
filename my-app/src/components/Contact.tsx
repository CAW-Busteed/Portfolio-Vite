import Header from 'components/Header'
import Footer from './Footer'
import fb_icon from 'assets/fb_icon.svg'
import Insta from 'assets/insta_icon.svg'
import Twitter from 'assets/twit_icon.svg'
import LinkedIn from 'assets/linkedin_icon.svg'
import Medium from 'assets/medium_icon.svg'
import Github from 'assets/github_icon.svg'
import Youtube from 'assets/youtube_icon.svg'
import React, { useState } from 'react'


function Contact() {
  const [active, setActive] = useState('home')
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <>
      <Header />

      <div className='flex justify-center m-6 md:m-12 my-12'>

        <div className='hidden md:block mr-12'>
          <div className='bg-green-200 rounded-full grid grid-flow-row overflow-hidden'>
            <div className='flex justify-center m-4'>
              <div className='rounded-full hover:bg-green-400 hover:shadow-lg hover:ring-1 ring-black ring-opacity-5 p-2 md:p-6'><a href='https://m.facebook.com/cedric.busteed/'><img className='rounded-full h-12 2-24' src={fb_icon} alt='Facebook' /></a></div>
              <div className='rounded-full hover:bg-green-400 hover:shadow-lg hover:ring-1 ring-black ring-opacity-5 p-2 md:p-6'><a href='https://www.instagram.com/cedricbusteed/'><img className='rounded-full h-12 2-24' src={Insta} alt='Instagram' /></a></div>
            </div>
            <div className='grid grid-flow-col'>
              <div className='rounded-full hover:bg-green-400 hover:shadow-lg hover:ring-1 ring-black ring-opacity-5 p-2 md:p-6'><a href='https://twitter.com/YoungChronicler'><img className='rounded-full h-12 2-24' src={Twitter} alt='Twitter' /></a></div>
              <div className='rounded-full hover:bg-green-400 hover:shadow-lg hover:ring-1 ring-black ring-opacity-5 p-2 md:p-6'><a href='https://www.linkedin.com/in/cedric-andre-wayne-busteed/'><img className='rounded-full h-12 2-24' src={LinkedIn} alt='LinkedIn' /></a></div>
              <div className='rounded-full hover:bg-green-400 hover:shadow-lg hover:ring-1 ring-black ring-opacity-5 p-2 md:p-6'><a href='https://medium.com/@cedric.a.busteed'><img className='rounded-full h-12 2-24' src={Medium} alt='Medium' /></a></div>
            </div>
            <div className='flex justify-center m-4'>
              <div className='rounded-full hover:bg-green-400 hover:shadow-lg hover:ring-1 ring-black ring-opacity-5 p-2 md:p-6'><a href='https://github.com/CAW-Busteed'><img className='rounded-full h-12 2-24' src={Github} alt='Github' /></a></div>
              <div className='rounded-full hover:bg-green-400 hover:shadow-lg hover:ring-1 ring-black ring-opacity-5 p-2 md:p-6'><a href='https://www.youtube.com/channel/UCDavlJEGZUiuwLZdylF12Nw'><img className='rounded-full h-12 2-24' src={Youtube} alt='Youtube' /></a></div>
            </div>
          </div>
        </div>
        <div className=''>
          <h1 className='text-xl md:text-2xl text-blue-950 font-bold'>Contact</h1>
          <div className='m-6 md:m-12'>
            <div className='text-lg md:text-xl text-blue-950 font-bold'>Email: </div>
            <div className='text-blue-950 font-body text-sm md:text-base'><a href='mailto:cedric.a.busteed@gmail.com'> cedric.a.busteed@gmail.com</a></div>
          </div>
          <div className='m-6 md:m-12'>
            <div className='text-lg md:text-xl text-blue-950 font-bold'>Phone: </div>
            <div className='text-blue-950 font-body text-sm md:text-base'><a href='786-208-7395'> (786) 208-7395</a></div>
          </div>
        </div>


      </div>

      <Footer />

    </>
  )
}

export default Contact