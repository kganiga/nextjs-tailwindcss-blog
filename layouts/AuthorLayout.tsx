import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import ImageGallery from '@/components/ImageGallery'
import ProfileCard from '@/components/ProfileCard'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { avatar, company, email, twitter, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-3 pt-6 md:space-y-5">
          <h1 className="text-center text-xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            Behind the words
          </h1>
        </div>
        <div className="flex flex-col items-center space-x-2 pt-8 xl:hidden">
          <ProfileCard />
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            {children}
          </div>

          <div className="flex-col items-center space-x-2 pt-8 xl:flex hidden">
            <ProfileCard />
          </div>
        </div>
      </div>
      <ImageGallery />
    </>
  )
}
