import Image from 'next/image'

import { SRLWrapper } from 'simple-react-lightbox'
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import { SRLWrapper } from 'simple-react-lightbox-pro'

function MyComponent() {
  return (
    <SRLWrapper>
      <a href="/Impress01.jpg">
        <img src="Impress01.jpg" alt="Umbrella" />
      </a>
      <a href="Impress03.jpg">
        <img src="Impress03.jpg" alt="Blue sky" />
      </a>

      <a href="/Impress02jpg">
        <Image
          src="/Impress02.jpg"
          alt="Picture of the author"
          width={220}
          height={166}
          srl_gallery_image="true"
        />
      </a>
    </SRLWrapper>
  )
}

export default MyComponent
