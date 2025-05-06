'use client'
import './page.css'
import { type CSSProperties, useEffect, useMemo, useState } from 'react';
import Header from '@/components/header/Header';
import Section from '@/components/section/Section';
import LayoutPage from '@/components/layout/LayoutPage';
import LayoutContent from '@/components/layout/LayoutContent';
import { useFetch } from '@/hooks/useFetch';
import { useLanguage } from '@/hooks/useLanguage';
import { LanguageContent, Translations } from '@/types/data.type';
import { useDevice } from '@/context/DeviceContext';
import Carousel from '@/components/carousel/Carousel';
import ContactForm from '@/components/contact/contactForm';
import ServiceCard from '@/components/services/ServiceCard';
import AboutContent from '@/components/about/AboutContent';
import useObserver from '../hooks/useObserver'
import { getSeparateText } from '@/utils/utilities';
import MenuHeader from '@/components/menu-header/MenuHeader';
import Footer from '@/components/footer/Footer';

const URL = '/data.json'

export default function Home () {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuMobilOpen, setIsMenuMobileOpen] = useState(false);
  const { lang } = useLanguage();
  const [dataPerLang, setDataPerLang] = useState<LanguageContent>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [observer, setElements, entries] = useObserver({ threshold: 0.35, root: null });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, error, loading } = useFetch<Translations>(URL);
  const { device, deviceHeight } = useDevice();
  const isMobile = device === 'movil';
  const isTablet = device === 'tablet';
  const isSmallDesk = device === 'small-desktop';
  const isHomeSection = activeSection === 'home';
  const isSmallScreenHeight = deviceHeight === 'small-desktop';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    setElements(Array.from(sections));
  }, [setElements]);

  useEffect(() => {
    if (!data) return; 
    setDataPerLang(lang === 'en' ? data.en : data.es);
  }, [lang, data]);

  useEffect(() => {
    const visibleSection = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visibleSection) {
      setActiveSection(visibleSection.target.id);
    }
  }, [entries]);

  const onSelect = (id: string) => setActiveSection(id);
  const homeMessage = useMemo(() => getSeparateText({text: dataPerLang?.home?.title}), [dataPerLang?.home]);
  const movilStyles: CSSProperties = {flexDirection: 'column', justifyContent: 'flex-start'};
  const toggleMenuMobile = () => setIsMenuMobileOpen(prev => !prev)

  return (
    <LayoutPage>
      <LayoutContent>
        <Header
          sections={dataPerLang?.sections} 
          onSelect={onSelect} 
          activeSection={activeSection} 
          isMobile={isMobile} 
          handleMenuClick={toggleMenuMobile} 
          isMenuMobilOpen={isMenuMobilOpen}
          isHomeSection={isHomeSection}
        />
        <Section id='home' bgImage={dataPerLang?.home?.image}>
          <div className={`home-message ${isMobile ? 'home-message-center' : ''}`}>{homeMessage && homeMessage.map((message, index) => (
            <h2 key={index}>{message}</h2>
          ))}</div>
        </Section>

        {activeSection !== 'home' && activeSection !== '#home' ? <MenuHeader toggleMenuState={toggleMenuMobile} size='25px' color={'#168F34'} isFloatMenu/> : <></>}

        <Section id='about' bgColor='#fff' marginTop={'100px'}>
          <div className={isMobile ? 'about-container-movile' : isTablet ? 'about-container-tablet' : 'about-container'} style={{marginTop: `${isMobile ? '0px' : '100px'}`}}>
            {!isMobile && <h4 className='about-header-little-message'>{dataPerLang?.about?.littleMessage}</h4>}
            <h2 className='about-header'>{dataPerLang?.about?.header}</h2>
            <AboutContent about={dataPerLang?.about} isMobile={isMobile} isTablet={isTablet} isSmallDesk={isSmallDesk} isSmallHeight={isSmallScreenHeight}/>
          </div>
        </Section>
  
        <Section id='services' bgColor='#A1B88E' padding={isMobile ? '10px 10px 0px 10px' : '30px 20px'}>
          <div className={isMobile ? 'services-container-mobile' : isTablet ? 'services-container-tablet' : 'services-container'}  style={{marginTop: `${isMobile ? '0px' : '100px'}`}}>
            <h4 className={`${isMobile ? 'service-header-little-message-mobile' : 'service-header-little-message'}`}>{dataPerLang?.services?.littleMessage}</h4>
            <h2 className={`${isMobile ? 'service-header-mobile' : 'service-header'}`}>{dataPerLang?.services?.header}</h2>
            <div className={`${isMobile ? 'page-services-card-container-mobile' : isTablet ? 'page-services-card-container-tablet' : 'page-services-card-container'}`}>
              {dataPerLang?.services?.services.map((service, index) => (
                <ServiceCard key={index} service={service} style={isMobile ? movilStyles : undefined} isMobile={isMobile} isTablet={isTablet} isSmallDesktop={isSmallDesk} isSmallHeight={isSmallScreenHeight}/>
              ))}
            </div>
          </div>
        </Section>

        <Section id='testimonials' bgColor='#fff' padding={isMobile ? '10px 0px 10px 0px' : `${isSmallScreenHeight ? '100px' : '0px'} 0px 10px 0px`}>
          <h4 className={`${isMobile ? 'testimonial-little-message-mobile' : 'testimonial-little-message'}`}>{dataPerLang?.testimonials?.littleMessage}</h4>
          <h2 className={`${isMobile ? 'testimonial-title-mobile' : 'testimonial-title'}`}>{dataPerLang?.testimonials?.header}</h2>
          <div className={`${isMobile ? 'testimonial-container-carousel-mobile' : 'testimonial-container-carousel'}`}>
            <Carousel testimonials={dataPerLang?.testimonials?.testimonials} isMobile={isMobile} isTablet={isTablet} isSmallDesk={isSmallDesk}/>
          </div>
        </Section>

        <Section id='contact' bgColor='#A1B88E' padding={isMobile ? '25px 20px 20px 20px' : '0px 0px 30px 0px'} justifyContent={!isMobile && !isSmallScreenHeight ? 'center' : ( isSmallScreenHeight && !isMobile) ? 'flex-end' : 'normal'}>
          <div className={`${isMobile ? 'contact-header-container-mobile' : 'contact-header-container'}`}>
            {lang === 'es' && !isMobile && <h4>{dataPerLang?.contact?.littleMessage}</h4>}
            {lang === 'es' && !isMobile && <h2>{dataPerLang?.contact?.header}</h2>}
            {isMobile && <h2>{dataPerLang?.contact?.title}</h2>}
            {isMobile && <h3>{dataPerLang?.contact?.subtitle}</h3>}
          </div>
          <ContactForm contact={dataPerLang?.contact} isMobile={isMobile}/>
        </Section>
        {isMobile ? <Footer id='footer' onSelect={onSelect}/> : <></>}
      </LayoutContent>
    </LayoutPage>
  );
}
