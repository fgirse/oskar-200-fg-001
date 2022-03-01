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
                    alt="1. slide"
                    height="160"
                    width="200"
                    layout="responsive"
                    className="slick-image"
                  />

        </div>
        <div className="embla__slide">
        <Image
                    src="/Impress02.jpg"
                    alt="2. slide"
                    height="160"
                    width="200"
                    layout="responsive"
                    className="slick-image"
                  />


        </div>
        <div className="embla__slide">

        <Image
                    src="/Impress03.jpg"
                    alt="3. slide"
                    height="160"
                    width="200"
                    layout="responsive"
                    className="slick-image"
                  />


        </div>
        <div className="embla__slide">

        <Image
                    src="/Impress04.jpg"
                    alt="4. slide"
                    height="160"
                    width="200"
                    layout="responsive"
                    className="slick-image"
                  />


        </div>
        <div className="embla__slide">

        <Image
                    src="/Impress05.jpg"
                    alt="5. slide"
                    height="160"
                    width="200"
                    layout="responsive"
                    className="slick-image"
                  />


        </div>
        <div className="embla__slide">

        <Image
                    src="/Impress06.jpg"
                    alt="6. slide"
                    height="160"
                    width="200"
                    layout="responsive"
                    className="slick-image"
                  />
        </div>
        <div className="embla__slide">

        <Image
                    src="/Impress07.jpg"
                    alt="7. slide"
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