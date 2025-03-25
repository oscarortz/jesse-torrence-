import React, { useEffect, useRef, useState } from 'react'
import TestimonialCard from '../testimonials/TestimonialCard'
import { Testimonial } from '@/types/data.type';
import './carousel.css'
import NextIcon from '../svg-components/NextIcon';
import PrevIcon from '../svg-components/PrevIcon';

type Props = {
  testimonials: Testimonial[] | undefined;
  isMobile: boolean;
  isTablet: boolean;
}

function Carousel({ testimonials, isMobile, isTablet }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const images = [];

  // const goToSlide = (index: number) => {
  //   setCurrentIndex(index);
  //   carouselRef.current?.children[index]?.scrollIntoView({ behavior: "smooth" });
  // };

  const nextSlide = () => {
    if (!testimonials) return;
    setCurrentIndex((prev) => (prev + 1) % testimonials?.length)
  }

  const prevSlide = () => {
    if (!testimonials) return;
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!testimonials) return;
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % testimonials.length;
      setCurrentIndex(nextIndex);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);



  const name = testimonials?.[currentIndex].name;
  const proffession = testimonials?.[currentIndex].profession;
  const feddback = testimonials?.[currentIndex].feedback;

  return (
    <>
    {isMobile && testimonials && (
      <div className={`${isMobile ? 'carousel-container-movil' : isTablet ? 'carousel-container-tablet' : 'carousel-container'}`}>
        <div className={isMobile ? 'card-container-movile' : isTablet ? 'card-container-tablet' : 'card-container'} ref={carouselRef}>
          {testimonials && testimonials.map(({feedback, name, profession}, index) => (
            <TestimonialCard key={index} feedback={feedback} name={name} profession={profession} isMobile={isMobile} />
          ))}
        </div>
      </div>
    )
    }

    {!isMobile && testimonials && (
      <div className='container'>
        <div className={`${isMobile ? 'carousel-container-movil' : isTablet ? 'carousel-container-tablet' : 'carousel-container'}`}>
          <button className='button-slide' onClick={prevSlide}><PrevIcon/></button>
          <div className={isMobile ? 'card-container-movile' : isTablet ? 'card-container-tablet' : 'card-container'} ref={carouselRef}>
              <TestimonialCard key={currentIndex} feedback={feddback!} name={name!} profession={proffession!} isMobile={isMobile} />
          </div>
          <button className='button-slide' onClick={nextSlide}><NextIcon /></button>
        </div>
        <div className='indicator-container'>
          {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`${currentIndex === index ? 'blue-indicator' : 'gray-indicator'}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
        </div>
      </div>
      )
    }

    </>
  )
}

export default Carousel;