'use client';
import TestimonialCard from '../testimonials/TestimonialCard'
import { Testimonial } from '@/types/data.type';
import './carousel.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
type Props = {
  testimonials: Testimonial[] | undefined;
  isMobile: boolean;
  isTablet: boolean;
  isSmallDesk: boolean;
}
type SlideType =  number | "auto" | undefined

function Carousel({ testimonials, isMobile, isTablet, isSmallDesk }: Props) {

  const getSlidesPerview = () : SlideType  => {
    if (isMobile) return 1;
    if (isTablet || isSmallDesk) return 2;
    return 3;
  }

  return (
    <>
      {testimonials && (
        <Swiper
          slidesPerView={getSlidesPerview()}
          spaceBetween={isMobile? 15 : 30}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          loop={true}
          grabCursor={true}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          modules={[Pagination, Navigation, Autoplay]}
          className='mySwiper'
        >
        {testimonials &&
          testimonials.map(({ feedback, name, profession }, index) => (
            <SwiperSlide className='swiper' key={index} >
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