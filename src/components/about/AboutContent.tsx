import { AboutSection } from '@/types/data.type'
import React, { useMemo } from 'react'
import './about.css'
import { getSeparateText } from '@/utils/utilities';

type Props = {
  about: AboutSection | undefined;
  isMobile: boolean;
  isTablet: boolean;
  isSmallDesk: boolean;
  isSmallHeight: boolean;
}

function AboutContent({ about, isMobile, isTablet, isSmallDesk, isSmallHeight }: Props) {

  const getImageWidth = () => {
    if (!about) return;
    if (isMobile) return 400;
    if (isTablet && isSmallHeight) return 350;
    if (isSmallDesk || isSmallHeight) return 380;
    return 450;
  }
  const getImageHeight = () => {
    if (!about) return;
    if (isMobile) return 400;
    if (isTablet || isSmallHeight) return 510;
    if (isSmallDesk ) return 520;
    return 580;
  }

  const description = useMemo(() => getSeparateText({text:about?.description}), [about])
  
    return (
    <div className={`description-card ${isMobile ? 'description-card-mobile' : ''}`}>
      <div className={`imagen-container ${isMobile ? 'image-container-mobile' : ''}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {about && <img src={about?.image_web} alt={about.name} width={getImageWidth()} height={getImageHeight()}/>}
      </div>
      <div className={`description-container ${isMobile ? 'description-container-mobile' : ''}`}>
        <div className={`description-content ${isMobile ? 'description-content-mobile' : ''}`}>
          {description && description.map((item, index) => (
            <p key={index}>
              {item}
              <br />
              <br />
            </p>
            ))}
        </div>
        <div className={`recognitions-container ${isMobile ? 'recognitions-container-mobile' : ''}`}>
        {about && about.recognitions.map((img, index) => {
          return (
            <div className='recognitions' key={index}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt={'recognitions'}/>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default AboutContent