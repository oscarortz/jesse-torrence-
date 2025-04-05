import React from 'react'
import './footer.css'

type Props = {
  onClick: () => void;
}

function ReturnButton({ onClick }: Props) {
  return (
    <button className='return-button' onClick={onClick}>
      <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1729 8.61548L8.94116 1.38379L1.70946 8.61548" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}

export default ReturnButton