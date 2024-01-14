// Import React and Next.js components
import siteMetadata from '@/data/siteMetadata'
import React from 'react'
import SocialIcon from './social-icons'

// Create the Next.js component using TypeScript
const ProfileCard = () => {
  return (
    <div className="w-full bg-gray-100 px-5 pt-2">
      <div className="relative mx-auto mb-16 mt-16 mt-24 max-w-sm">
        <div className="overflow-hidden rounded bg-white shadow-md">
          <div className="absolute -mt-20 flex w-full justify-center">
            <div className="h-32 w-32">
              <img
                src={'/static/images/avatar.jpg'}
                className="h-full w-full rounded-full object-cover shadow-md"
                alt={siteMetadata.author}
              />
            </div>
          </div>
          <div className="mt-16 px-6">
            <h1 className="mb-1 text-center text-xl font-bold">{siteMetadata.author}</h1>
            <div className="flex w-full justify-center space-x-3 pb-5 pt-5">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.instagram} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
