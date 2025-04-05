import { AboutSection } from '@/types/data.type'
import React, { useMemo } from 'react'
import './about.css'
import { getSeparateText } from '@/utils/utilities';

type Props = {
  about: AboutSection | undefined;
  isMobile: boolean;
  isTablet: boolean;
}

function AboutContent({ about, isMobile, isTablet }: Props) {

  const getImage = () => {
    if (!about) return;
    const { image_movil, image_tablet, image_web } = about;
    if (isMobile) return image_movil;
    if (isTablet) return image_tablet;
    return image_web
  }

  const description = useMemo(() => getSeparateText({text:about?.description}), [about])
  return (
    <div className={`${isMobile ? 'description-card-movile': 'description-card'}`}>
      <div className={`${isMobile ? 'imagen-container-movil': isTablet ? 'image-container-tablet' : 'imagen-container'}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {about && <img src={getImage()} alt={about.name}/>}
      </div>
      <div className={isTablet ? 'description-container-tablet' :'description-container'}>
        {description && description.map((item, index) => (
          <p key={index}>
            {item}
            <br />
            <br />
          </p>
          ))}
        <div className={`${isMobile ? 'recognitions-container-movil' : 'recognitions-container'}`}>
        {about && about.recognitions.map((img, index) => {
          return (
            <div className={isMobile ? 'recognition-movil' : isTablet ? 'recognition-tablet' : 'recognition'} key={index}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt={'recognitions'} />
            </div>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default AboutContent