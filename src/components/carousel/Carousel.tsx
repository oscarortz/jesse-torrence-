import TestimonialCard from '../testimonials/TestimonialCard'
import { Testimonial } from '@/types/data.type';
import './carousel.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
type Props = {
  testimonials: Testimonial[] | undefined;
  isMobile: boolean;
  isTablet: boolean;
}

function Carousel({ testimonials, isMobile, isTablet }: Props) {

  return (
    <>
      {testimonials && (
        <Swiper
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={isMobile? 10 : 0}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className='mySwiper'
        >
        {testimonials &&
          testimonials.map(({ feedback, name, profession }, index) => (
            <SwiperSlide className='swiper' key={index}>
              <TestimonialCard
                feedback={feedback}
                name={name}
                profession={profession}
                isMobile={isMobile}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      )}
    </>
  )
}

export default Carousel;