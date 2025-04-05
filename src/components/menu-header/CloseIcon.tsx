import React from 'react'
import './menuHeader.css'

type Props = {
  size: string;
  onCloseClick: () => void;
}

function CloseIcon({ size = '30px', onCloseClick }: Props) {
  return (
    <button className='close-icon' onClick={onCloseClick}>
      <svg className='close-icon' width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17L16.9 7.1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 7L16.9 16.9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}

export default CloseIcon