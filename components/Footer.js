/* eslint-disable prettier/prettier */
import Link from './Link'
import siteMetadata from '/data/siteMetadata.js'
import SocialIcon from '../components/social-icons'

export default function Footer() {
  return (
    <footer className="bg-red-900 w-full border-yellow-300mx-auto">
      <div className="flex flex-col items-center mt-16">
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
        <div className="mx-autoflex flex-row items-center justify-center mb-2 space-x-2 text-xs text-gray-300 dark:text-gray-400 font-mono ">
          <div className="mx-auto flex flex-row lg:text-sm justify-center gap-x-2">
            {/*<div>{siteMetadata.author}</div>
          <div>{` • `}</div>*/}
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>{` • `}</div>
            <Link href="/">{siteMetadata.title}</Link>
          </div>
          <div className="mb-8 text-sx md:text-sm font-sans text-gray-300 dark:text-gray-400">
            <p>
              All rights reserved:
              <span className="text-yellow-400 font-ad">
                {' '}
                Medicus Design {` • `} Basel Schweiz
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
