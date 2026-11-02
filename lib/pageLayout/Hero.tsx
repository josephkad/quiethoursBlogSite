'use client'
import React from 'react'
import Container from '../components/Container'
import clouds from '@/lib/images/clouds.png'
import blogs from '../data/blogData'
import Link from 'next/link'

const Hero = () => {
  return (
    <Container>
        <div className='flex justify-between bg-accent/20 rounded-xl shadow-sm p-20 my-4 hover:scale-101 hoverEffect relative overflow-hidden mt-20'>
            <h2 className='text-3xl font-semibold text-accent-foreground'>Stories and thoughts from <br />the end of the day.</h2>
            <img  src={clouds.src} className='w-80 h-80 absolute right-50 top-0 opacity-50' />
        </div>

        <div className='grid lg:grid-cols-2 gap-4'>
            {blogs.map((item, index) => (
                <Link href='/blog' onClick={() => {localStorage.setItem('blogTitle', item.title)}} key={index} className='flex flex-col rounded-md overflow-hidden p-4 gap-2 hoverEffect hover:-translate-y-2'>
                    <img src={item.image} className='w-full h-100 rounded-md' />
                    <h2 className='text-xl font-semibold line-clamp-1'>{item.title}</h2>
                    <p className='text-sm italic text-primary/80'>{item.exerpt}</p>
                    <p className='text-muted-foreground text-xs'>{item.category}</p>
                    <p className='text-xs text-muted-foreground/60'>{item.date}</p>
                </Link>
            ))}
        </div>
    </Container>
  )
}

export default Hero