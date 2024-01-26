import Avatar from 'components/Avatar'
import logo from 'assets/logo.svg'
import Picture from 'assets/cb_profile_image.jpg'

import Header from 'components/Header'
import Footer from './Footer'
import PostComp from './Cards/PostComp'
import React, { useState } from 'react'

function ProsePort() {
  const [active, setActive] = useState('home')
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <>
      <Header />
      <div className='flex text-2xl text-blue-950'>
        {/* title */}
        <h1 className='mx-auto p-3 md:p-6'>Prose</h1>

      </div>

      <PostComp
        title={'Doggone'}
        date={'Jul 16, 2022'}
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, quis aliquam nisl nisl vitae nisl. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, quis aliquam nisl nisl vitae nisl. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, quis aliquam nisl nisl vitae nisl. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, quis aliquam nisl nisl vitae nisl. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, quis aliquam nisl nisl vitae nisl. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, quis aliquam nisl nisl vitae nisl.'}
      />

      <Footer />

    </>
  )
}

export default ProsePort