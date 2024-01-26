import Avatar from 'components/Avatar'
import logo from 'assets/logo.svg'
import Picture from 'assets/cb_profile_image.jpg'

import Header from 'components/Header'
import Footer from './Footer'
import React, { useState } from 'react'

function SBoardPort() {
  const [active, setActive] = useState('home')
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <>
      <Header />

      <div className='flex m-6 md:m-12 my-12'>
        <div className='flex-1 mx-20 md:mr-20'>
          <div className='text-lg'>
            <h2>About Me</h2>
          </div>
          <div className='text-sm my-6'>
            <p>I was born near the end of the millennium to a pair of architects in Miami. As the child of artists and an avid fan of the sciences, I developed a love for the natural world and a thirst for knowledge that continues to this day. I spent summers with my extended family in various parts of France. It was in Brittany that I basked in spray as cold winds carried me on gliding sailboats through La Manche. A part of me still lives in that old stone house in Saint-Malo.</p>
            <br />
            <p>I was young when I wanted to become a writer. It was a way for me to finally communicate the depths of beauty I was blessed to witness: The elaborately elegant whorls of the systems that shape our ecosystems. The incredible feats of ingenuity by man and beast. The tapestry of emotion and memories that shaped human history, woven from the twists of the rivers, shadows of mountains, and other such whims of chaos. </p>
            <br />
            <p>I finished the rigorous International Baccalaureate program in 2014 and took the opportunity to study at the prestigious McGill University in Montreal. I didn’t anticipate how the stark differences in climate could affect me, so I left to finish my Associate of Arts degree in Miami. Then, I completed my Bachelor’s degree at the University of Iowa with a focus on Creative Writing and Sustainability.</p>
            <br />
            <p>Since then, I’ve worked as a teacher and a tutor. It was a way to help prepare the next generations for the challenges ahead, and I grew to love that moment of enlightenment on a child’s face every time they got a concept. On the side, I’ve been writing short stories, poems, novella, scripts, and other forms of prose. Recently, I’ve taught myself how to program and work with AI. As always, I enjoyed learning about a fascinating new subject and I look forward to using my new skills.</p>
          </div>
          <div className='flex-1 block md:hidden'>
            {/* mobile image */}
            <img src={Picture} className="" alt="Cedric Busteed" />
            <div className='grid grid-cols-1'>
              <div className='mx-auto text-xs p-4 italic'>Picture by Chantal Busteed</div>
            </div>
          </div>
        </div>
        <div className='flex-1 my-12 hidden md:block'>
          {/* md image */}
          <img src={Picture} className="" alt="Cedric Busteed" />
          <div className='grid grid-cols-1'>
            <div className='mx-auto text-xs p-4 italic'>Picture by Chantal Busteed</div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default SBoardPort