import React, { ReactNode } from 'react'
import Navbar from '../Navbar/Navbar'

const DefaultLayout : React.FC<{children : ReactNode}> = ({children}) => {
  return (
    <main className='w-full h-full'>
        {children}
        <Navbar />
    </main>
  )
}

export default DefaultLayout