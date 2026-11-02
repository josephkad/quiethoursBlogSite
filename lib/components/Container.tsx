import React, { ReactNode } from 'react'

const Container = ({children, className, noPadding}: {children?:ReactNode, className?: string, noPadding?: boolean}) => {
  return (
    <div className={`mx-auto w-full max-w-7xl ${noPadding? 'px-4' : 'p-4'} ${className? className : ''}`}>
        {children}
    </div>
  )
}

export default Container