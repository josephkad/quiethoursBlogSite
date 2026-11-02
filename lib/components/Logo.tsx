import { Moon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logo = ({className}: {className?: string}) => {
  return (
    <Link href='/' className={`${className? className : ''} text-2xl font-semibold flex items-center gap-2 hover:scale-105 hoverEffect w-fit`}>
        <Moon size={25} className='text-chart-2' />
        <span className='text-chart-2'>QUIET</span>
        <span>HOURS</span>
    </Link>
  )
}

export default Logo