/* eslint-disable @next/next/no-img-element */
import { Service } from '@/types/data.type'
import './serviceCard.css'
type Props = {
  service: Service; 
  style?: React.CSSProperties;
  isMobile: boolean;
  isTablet: boolean;
}

function ServiceCard ({ service, style, isMobile, isTablet }: Props) {
  return (
    <div className={`${isMobile ? 'service-card-container-movil' : isTablet ? 'service-card-container-tablet' : 'service-card-container'}`} style={style}>
    <div className={`${isMobile ? 'service-image-container-movile' : isTablet ? 'service-image-container-tablet' : 'service-image-container'}`}>
      <img src={service.image} alt='image about my services' />
    </div>
    <div className={`${isMobile ? 'service-content-container-movil' : 'service-content-container'}`}>
      <h4>{service.title}</h4>
      <div className='service-description-container'>
        <p>{service.description}</p>
      </div>
    </div>
  </div>
  )
}

export default ServiceCard;