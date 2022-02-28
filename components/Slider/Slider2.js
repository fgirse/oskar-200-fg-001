import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container w-60">
        <div className="embla__slide">
        <Image
                    src="/Impress01.jpg"
                    alt="Second slide"
                    height="160"
                    width="200"
                    layout="responsive"
                    className="slick-image"
                  />

        </div>
        <div className="embla__slide">
        <Image
                    src="/Impress02.jpg"
                    alt="Second slide"
                    height="160"
                    width="200"
                    layout="responsive"
                    className="slick-image"
                  />


        </div>
        <div className="embla__slide">

        <Image
                    src="/Impress03.jpg"
                    alt="Second slide"
                    height="160"
                    width="200"
                    layout="responsive"
                    className="slick-image"
                  />


        </div>
      </div>
    </div>
  )
}