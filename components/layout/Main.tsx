import React from 'react'

interface MainProps {
    children: React.ReactNode
}

const Main: React.FC<MainProps> = ({children}) => {
  return (
    <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
        {children}
    </div>
  )
}

export default Main