/* eslint-disable prettier/prettier */
import Link from './Link'
import siteMetadata from '/data/siteMetadata.js'
import SocialIcon from '../components/social-icons'
import LogoLeckerLaden from '../components/icons/svg/SVGLogoLeckerladen.js'
import Astra from '../components/icons/svg/SVGAstra.js'
import Ganter from '../components/icons/svg/SVGGanter.js'
export default function Footer() {
  return (
    <footer className="bg-red-900 w-full border-yellow-300mx-auto">

          <section className='md:p-3 md:mt-5 md:flex md:flex-row md:justify-center md:items-baseline'>
            {/*======================================== Flexbox ================================================ */}
            {/*======================================== Item 1  ================================================ */}
           
            <div className='flex flex-col w-4/12 justify-center items-center gap-x-5 md:flex md:items-ceenter first-letter:first-line:          md:gap-x-0x md:justify'>
            <p className='text-white'>Partner:</p>
            <div className="flex flex-row gap-8 justify-elderly">
            <LogoLeckerLaden className="w-28 h-9"></LogoLeckerLaden>
            <Astra className="w-12 h-8"/>
            <Ganter className="w-12 h-9"/>
            </div>
            
          </div>

            {/*======================================== Item 2  ================================================ */}
            <div className="w-4/12 flex flex-col items-center">
                  <div className="flex mb-3 space-x-4 ">
                    <SocialIcon
                      kind="mail"
                      href={`mailto:${siteMetadata.email}`}
                      size="6"
                    />
                    <SocialIcon kind="github" href={siteMetadata.github} size="6" />
                    <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
                    <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
                    <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
                    <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
                  </div>
                    <div className="mx-auto flex-row items-center justify-center mb-2 space-x-2 text-xs text-gray-300 dark:text-gray-400 font-mono ">
                      <div className="mx-auto flex flex-row lg:text-sm justify-center gap-x-2">
                             {/*<div>{siteMetadata.author}</div>
                             <div>{` ??? `}</div>*/}
                      <div>{`?? ${new Date().getFullYear()}`}</div>
                      <div>{` ??? `}</div>
                         <Link href="/">{siteMetadata.title}</Link>
                      </div>
                    <div className="mb-8 text-sx md:text-sm font-sans text-gray-300 dark:text-gray-400">
                        <p>
                          All rights reserved:
                              <span className="text-yellow-400 font-ad">
                                  {' '}
                                  Medicus Design {` ??? `} Basel Schweiz
                              </span>
                        </p>
                  </div>
                </div>
            </div>
      {/*======================================== Item 3  ================================================ */}
            
 
          
       {/*======================================== Flexbox Ende ================================================ */}      
          </section>
     
            

    </footer>
  )
}
