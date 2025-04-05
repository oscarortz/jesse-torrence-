import './header.css'
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import HeaderLogo from '../svg-components/HeaderLogo';
import { Section } from '@/types/data.type';
import MenuHeader from '../menu-header/MenuHeader';
import MobileNav from '../menu-header/MobileNav';
import NavSection from './NavSection';
import { useEffect, useRef } from 'react';


interface HeaderProps {
  sections: Section[] | undefined;
  onSelect: (id: string) => void;
  activeSection: string;
  isMobile: boolean;
  handleMenuClick: () => void;
  isMenuMobilOpen: boolean;
  isHomeSection: boolean;
}

function Header({ sections, onSelect, activeSection, isMobile, handleMenuClick, isMenuMobilOpen, isHomeSection }: HeaderProps) {
  const menuMobileRef = useRef<HTMLDivElement | null>(null);
  const { lang, setLang } = useLanguage();

  const updateLang = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

  const colorLetterFill = isHomeSection && !isMobile ? '#fff' : '#000';
  const colorFill = isHomeSection && !isMobile ? '#fff' : '#168F34';

  const handleScroll = (id: string) => {
    let newId = id.slice(1);
    
    if (newId === 'home' && isMobile) {
      newId = 'header'
    }

    const targetElement = window.document.getElementById(newId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.stopPropagation();
    e.preventDefault();
    if(activeSection === 'home' && activeSection === href) return;
    handleScroll(href);
    onSelect(href);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuMobileRef.current && !menuMobileRef.current.contains(event.target as Node)) {
        handleMenuClick();
      }
    };

    if (isMenuMobilOpen) {
      document.addEventListener('pointerdown', handleClickOutside);
    }

    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, [isMenuMobilOpen])
  

  return (
    <header  id='header' className={`${isMobile ? 'header-movile' : 'header'}`}>
      <button className='logo-button' onClick={(e) => handleLinkClick(e, '#home')}>
        <HeaderLogo colorFill={colorFill} colorLetter={colorLetterFill}/>
      </button>
      <nav>
        {isMobile 
          ? <MenuHeader toggleMenuState={handleMenuClick}/> 
          : <NavSection 
              activeSection={activeSection} 
              handleLinkClick={handleLinkClick} 
              lang={lang} 
              sections={sections} 
              updateLang={updateLang}
            />
        }
        {isMenuMobilOpen && isMobile ? (
          <MobileNav
            ref={menuMobileRef}
            lang={lang} 
            sections={sections} 
            activeSection={activeSection} 
            handleLinkClick={handleLinkClick} 
            isMobile={isMobile} 
            updateLang={updateLang}
            onCloseClick={handleMenuClick}
            isHomeSection={isHomeSection}
          />
        ) : null}
      </nav>
    </header>
  );
}


export default Header