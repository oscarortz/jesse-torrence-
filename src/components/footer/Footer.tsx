import React from 'react'
import './footer.css'
import HeaderLogo from '../svg-components/HeaderLogo'
import ReturnButton from './ReturnButton'
type Props = {
  onSelect: (id: string) => void;
  id: string;
}



function Footer({ onSelect , id}: Props) {

  const handleclick = () => {
    const targetElement = window.document.getElementById('header');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    onSelect('header')
  }

  return (
    <div id={id} className='container-footer-content'>
      <HeaderLogo/>
      <ReturnButton onClick={handleclick} />
    </div>
  )
}

export default Footer