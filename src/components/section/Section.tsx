import { type ReactNode, type CSSProperties, useEffect } from 'react'
import './section.css'
import { StaticImageData } from 'next/image';

interface Props {
  children: ReactNode;
  bgImage?: string | StaticImageData;
  bgColor?: string;
  id: string;
  bgPosition?: string;
  padding?: string;
  justifyContent?: CSSProperties['justifyContent'];
  flexDirection?: CSSProperties['flexDirection'];
  overflow?: string;
  overflowY?: CSSProperties['overflowY'];
  height?: string;
  marginBottom?: CSSProperties['marginBottom']
  marginTop?: CSSProperties['marginTop']
}

function Section({children, bgImage, id, bgColor, bgPosition = 'top', padding = '10px', justifyContent = 'center', overflow, overflowY, height, flexDirection, marginBottom, marginTop }: Props) {
  const backgroundImage = bgImage
  ? `url(${typeof bgImage === 'string' ? bgImage : bgImage.src})`
  : 'none';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div
      id={id}
      className='section'
      style={{
        backgroundImage,
        backgroundColor: bgColor,
        backgroundPosition: bgPosition,
        padding,
        justifyContent,
        overflow,
        height,
        flexDirection,
        overflowY,
        marginBottom,
        marginTop,
      }}
    >
      {children}
    </div>
  );
}

export default Section