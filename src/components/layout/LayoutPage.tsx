import { type ReactNode } from 'react'
import './layout.css'

interface Props {
  children: ReactNode;
}

const LayoutPage = ({children}: Props) => {
  return (
    <div className='layout-page'>{children}</div>
  )
}

export default LayoutPage