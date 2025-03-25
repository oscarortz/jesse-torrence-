import { Section } from '@/types/data.type'
import './header.css'
import { useDevice } from '@/context/DeviceContext';

type Props = {
  sections: Section[] | undefined;
  activeSection: string;
  handleLinkClick: (e: React.MouseEvent, href: string) => void;
  updateLang: () => void;
  lang: string;
}

function NavSection({ sections, activeSection, handleLinkClick, updateLang, lang }: Props) {
  const device = useDevice();
  const isMobile = device === 'movil';

  return (
    <div>
      <ul className={`${isMobile ? 'listSection-mobile' : 'listSection'}`}>
        {sections?.map((section, index) => {
          const sectionId = section.href.startsWith("#") ? section.href.substring(1) : section.href
          const isActive = activeSection === section.href || activeSection === sectionId
          return (
            <li key={index}>
              <button onClick={(e) => handleLinkClick(e, section.href)} style={{backgroundColor: 'transparent', border: 'none'}}>
                <span className={isActive ? 'isActive' : ''}>{section.title}</span>
              </button>
            </li>
        )})}
        <li className={`${isMobile ? 'language-button-movile' : 'language-button'}`} onClick={updateLang}>
          <span className={lang === 'en' ? 'isActive' : ''}>ENG</span>&nbsp;/&nbsp;
          <span className={lang === 'es' ? 'isActive' : ''}>ESP</span>
        </li>
      </ul>
    </div>
  )
}

export default NavSection