
import { Testimonial } from '@/types/data.type';
import './testimonialCard.css'
import QuotesComponent from '../svg-components/Quotes';

type Props = {
  name: string;
  profession: string;
  isMobile: boolean;
  feedback: string;
}

function TestimonialCard({ isMobile, feedback, name, profession }: Props) {
  return (
    <div className={`${isMobile ? 'card-movil' : 'card'}`}>
      <div className={`${isMobile ? 'testimonial-header-container-movil' : 'testimonial-header-container'}`}>
        <div className={`${isMobile ? 'testimonial-header-movil' : 'testimonial-header'}`}>
          <h4>{name}</h4>
          <h5>{profession}</h5>
        </div>
        <QuotesComponent/>
      </div>
      <p>{`"${feedback}"`}</p>
    </div>
  )
}

export default TestimonialCard