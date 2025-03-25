'use client'
import React, { useEffect, useState } from 'react';
import './header.css'
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import HeaderLogo from '../svg-components/HeaderLogo';
import { Section } from '@/types/data.type';
import MenuHeader from '../menu-header/MenuHeader';
import MobileNav from '../menu-header/MobileNav';
import NavSection from './NavSection';


interface HeaderProps {
  sections: Section[] | undefined;
  onSelect: (id: string) => void;
  activeSection: string;
  isMobile: boolean;
}

function Header({ sections, onSelect, activeSection, isMobile }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  const updateLang = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

  const handleScroll = (id: string) => {
    const newId = id.slice(1)
    const targetElement = window.document.getElementById(newId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.stopPropagation();
    handleScroll(href)
    onSelect(href);
  };

  const handleMenuClick = () => setIsMenuOpen(prev => !prev)

  return (
    <header className={`${isMobile ? 'header-movile' : 'header'}`}>
      <Link href={'#'} onClick={(e) => handleLinkClick(e, '#home')}>
        <HeaderLogo />
      </Link>
      <nav>
        {isMobile ? 
          <MenuHeader toggleMenuState={handleMenuClick}/> : 
          <NavSection 
            activeSection={activeSection} 
            handleLinkClick={handleLinkClick} 
            lang={lang} 
            sections={sections} 
            updateLang={updateLang}
          />
        }
        {isMenuOpen && isMobile ? (
          <MobileNav 
            lang={lang} 
            sections={sections} 
            activeSection={activeSection} 
            handleLinkClick={handleLinkClick} 
            isMobile={isMobile} 
            updateLang={updateLang}
            onCloseClick={handleMenuClick}
          />
        ) : null}
      </nav>
    </header>
  );
}


export default Header