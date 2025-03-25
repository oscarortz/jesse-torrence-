import React from 'react'
import './layout.css'

interface Props {
  children: React.ReactNode;
}

function LayoutContent({ children }: Props) {
  return (
    <div className='layout-content'>{children}</div>
  )
}

export default LayoutContent