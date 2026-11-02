'use client'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Container from '@/lib/components/Container'
import blogs from '@/lib/data/blogData'
import { blogData } from '@/lib/data/blogs'
import { ArrowUp } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Content = () => {
    const [blog, setBlog] = useState<blogData | null>(null)
    useEffect(() => {
        setBlog(blogs.filter((item) => item.title == localStorage.getItem('blogTitle'))[0])
    }, [])
    if (!blog) return
  return (
    <div>
        <Container>
            <div className='flex flex-col gap-4'>
                <h1 className='text-4xl font-semibold'>{blog.title}</h1>

                <div className='flex w-full justify-between text-muted-foreground'>
                    <p>{blog.category}</p>
                    <p>{blog.date}</p>
                </div>

                <Separator className='' />

                <div className='flex flex-col gap-25'>
                    {blog.blog.map((item, index) => (
                        <div key={index} className='hoverEffect hover:scale-101'>
                            {item.sectionTitle && (
                                <h2 className='text-xl font-semibold my-4'>{item.sectionTitle}</h2>
                            )}
                            <p className='text-muted-foreground text-start leading-loose tracking-widest text-xl'>{item.sectionContent}</p>
                        </div>
                    ))}
                </div>

                <div className='my-4 flex justify-between'>
                    <Link href='/' className={`rounded-full hoverEffect hover:scale-110 bg-primary text-primary-foreground flex items-center justify-center p-2 font-semibold hover:bg-chart-2 hover:text-accent`} onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}>Back to all posts</Link>
                    <Button variant='default' className={`rounded-full hoverEffect hover:scale-110`} onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}><ArrowUp /></Button>
                </div>
            </div>

        </Container>
    </div>
  )
}

export default Content