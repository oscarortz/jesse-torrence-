/* eslint-disable @next/next/no-img-element */
import { Service } from '@/types/data.type'
import './serviceCard.css'
type Props = {
  service: Service; 
  style?: React.CSSProperties;
  isMobile?: boolean;
  isTablet?: boolean;
  isSmallDesktop?: boolean;
}

function ServiceCard ({ service, isMobile, isTablet, isSmallDesktop }: Props) {
  const containsHTML = /<\/?[a-z][\s\S]*>/i.test(service.description);

  const getImageHeight = () => {
    if (isSmallDesktop || isTablet) return 200;
    return 250;
  }

  return (
    <div className={`service-card-wrapper ${isMobile ? 'service-card-wrapper-mobile' : ''}`}>
    <div className='service-image-container'>
      <img src={service.image} alt='image about my services' width={400} height={getImageHeight()}/>
    </div>
    <div className={`service-wrapper-content ${isMobile ? 'service-wrapper-content-mobile' : ''}`}>
      <h4>{service.title}</h4>
      <div className={`service-content ${isMobile ? 'service-content-mobile' : ''}`}>
      {
        containsHTML 
        ? <p dangerouslySetInnerHTML={{ __html: service.description }} />
        : <p>{service.description}</p>
      }
      </div>
    </div>
  </div>
  )
}

export default ServiceCard;