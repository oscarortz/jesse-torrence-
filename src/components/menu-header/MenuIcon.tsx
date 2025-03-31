import React from 'react'

type Props = {
  size: string;
  color?: string;
}

function MenuIcon({ size = '40px', color = 'currentColor'}: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6h16M4 12h16M4 18h16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export default MenuIcon