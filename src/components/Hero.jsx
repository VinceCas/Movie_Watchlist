import React, { useState, useEffect } from 'react';
import { slide_1, slide_2, slide_3 } from '../assets';

const Hero = () => {
  const images = [slide_1, slide_2, slide_3 ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex items-center justify-center fade-delay ">
      <div className="relative w-[1289px] h-[652px] overflow-hidden mt-5 mx-5 md:mx-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000  ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-[50px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
