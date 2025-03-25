import { type ReactNode, type CSSProperties, useEffect } from 'react'
import './section.css'
import { StaticImageData } from 'next/image';

interface Props {
  children: ReactNode;
  bgImage?: string | StaticImageData;
  bgColor?: string;
  id: string;
  bgPosition?: string;
  paddingTop?: string;
  padding?: string;
  justifyContent?: CSSProperties['justifyContent'];
  flexDirection?: CSSProperties['flexDirection'];
  overflow?: string;
  overflowY?: CSSProperties['overflowY'];
  height?: string;
}

function Section({children, bgImage, id, bgColor, bgPosition = 'top', paddingTop, padding = '10px', justifyContent = 'center', overflow, overflowY, height, flexDirection }: Props) {
  const backgroundImage = bgImage
  ? `url(${typeof bgImage === 'string' ? bgImage : bgImage.src})`
  : 'none';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [children]);
  
  return (
    <div
      id={id}
      className='section'
      style={{
        backgroundImage,
        backgroundColor: bgColor,
        backgroundPosition: bgPosition,
        padding,
        paddingTop,
        justifyContent,
        overflow,
        height,
        flexDirection,
        overflowY
      }}
    >
      {children}
    </div>
  );
}

export default Section