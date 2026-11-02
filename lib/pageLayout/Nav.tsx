import React from 'react'
import Container from '../components/Container'
import Logo from '../components/Logo'

const Nav = () => {
  return (
    <div className='fixed top-0 bg-background/70 w-full z-10 p-5 backdrop-blur-md'>
        <Container noPadding={true} className=''>
            <Logo />
        </Container>
    </div>
  )
}

export default Nav