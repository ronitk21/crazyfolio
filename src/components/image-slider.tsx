'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

export const ImageSlider = ({
  images,
  title,
  index,
}: {
  images: string[];
  title: string;
  index: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Separate effect for featured project (index 0) - always runs
  useEffect(() => {
    if (index === 0 && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, 3500); // 1.5 seconds for featured project

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [index, images.length]);

  // Effect for other projects - only runs on hover
  useEffect(() => {
    if (index !== 0 && isHovering && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, 2000);
    } else if (index !== 0) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current && index !== 0) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering, images.length, index]);

  return (
    <div
      className="relative overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setCurrentIndex(0);
      }}
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, imgIndex) => (
          <Image
            key={imgIndex}
            src={img}
            alt={`${title} project screenshot ${imgIndex + 1}`}
            height={800}
            width={800}
            className="w-full flex-shrink-0 rounded-lg ring-[6px]"
            priority={index === 0 && imgIndex === 0}
            loading={index === 0 && imgIndex === 0 ? 'eager' : 'lazy'}
            sizes={
              index === 0 ? '(max-width: 640px) 100vw, 800px' : '(max-width: 640px) 100vw, 400px'
            }
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(800, 600))}`}
            quality={80}
          />
        ))}
      </div>

      {/* Progress dots - only show if more than 1 image */}
      {images.length > 1 && (
        <div className="absolute right-3 bottom-3 flex gap-1.5">
          {images.map((_, imgIndex) => (
            <div
              key={imgIndex}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                imgIndex === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
