import Footer from '@/lib/pageLayout/Footer'
import Nav from '@/lib/pageLayout/Nav'
import React from 'react'
import Content from './Content'

const page = () => {
  return (
    <div className='flex flex-col h-screen'>
        <Nav />
        <Content />
        <Footer />
    </div>
  )
}

export default page