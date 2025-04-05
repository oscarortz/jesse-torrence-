
import './testimonialCard.css'
import QuotesComponent from '../svg-components/Quotes';
import { CSSProperties } from 'react';

type Props = {
  name: string;
  profession: string;
  isMobile: boolean;
  feedback: string;
  marginLeft?: CSSProperties['marginLeft']
}

function TestimonialCard({ isMobile, feedback, name, profession, marginLeft }: Props) {
  return (
    <div className={isMobile ? 'card-movil' : 'card'} style={{marginLeft}}>
      <div className={isMobile ? 'testimonial-header-container-movil' : 'testimonial-header-container'}>
        <div className={isMobile ? 'testimonial-header-movil' : 'testimonial-header'}>
          <div className={isMobile ? 'testimonial-heading-container-movile' : 'testimonial-heading-container'}>
            <h4>{name}</h4>
            <QuotesComponent/>
          </div>
          <h5>{profession}</h5>
        </div>
      </div>
      <p>{`"${feedback}"`}</p>
    </div>
  )
}

export default TestimonialCard