import React, { forwardRef } from 'react'
import './menuHeader.css'
import { Section } from '@/types/data.type';
import CloseIcon from './CloseIcon';
import NavSection from '../header/NavSection';

type Props = {
  sections: Section[] | undefined;
  activeSection: string;
  handleLinkClick: (e: React.MouseEvent, href: string) => void;
  updateLang: () => void;
  lang: string;
  isMobile: boolean;
  isHomeSection: boolean;
  onCloseClick: () => void;
}

const MobileNav = forwardRef<HTMLDivElement, Props>(
  ({ sections, activeSection, handleLinkClick, lang, updateLang, onCloseClick, isHomeSection }, ref) => {

  return (
    <div ref={ref} className={`${isHomeSection ? 'nav-mobile' : 'nav-mobile-position'}`}>
      <div className='icon-container'>
        <CloseIcon size='40px' onCloseClick={onCloseClick}/>
      </div>
      <div className='nav-container'>
        <NavSection activeSection={activeSection} handleLinkClick={handleLinkClick} lang={lang} sections={sections} updateLang={updateLang}/>
      </div>
    </div>
  )
})

MobileNav.displayName = "MobileNav";

export default MobileNav