import React, { ReactNode } from 'react'


interface WrapperProps {
    children:ReactNode
}


const Wrapper: React.FC<WrapperProps> = ({ children}) => {
  return (
    <div className=' w-full max-w-7xl m-auto '>
      {children}
    </div>
  )
}

export default Wrapper
