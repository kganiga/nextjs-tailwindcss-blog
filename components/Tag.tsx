// Import the necessary modules
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const tagColors = [
  'bg-purple-100 text-purple-800',
  'bg-blue-100 text-blue-800',
  'bg-green-100 text-green-800',
]
let colorIndex = 0

const Tag = ({ text }: Props) => {
  // Check if the current page is the tags page
  const pathName = usePathname()

  const isTagsPage = pathName === '/tags' ? true : false
  const colorClass = tagColors[colorIndex]
  colorIndex = (colorIndex + 1) % tagColors.length

  // Conditionally render the Link component based on whether it's the tags page
  return (
    <>
      {isTagsPage ? (
        <Link
          href={`/tags/${slug(text)}`}
          className={`text-s  items-center rounded-full p-3 text-center font-medium capitalize sm:flex ${colorClass}`}
        >
          {text.split(' ').join('-')}
        </Link>
      ) : (
        <Link
          href={`/tags/${slug(text)}`}
          className={`mt-3 hidden items-center px-5 py-1 text-center text-xs font-medium capitalize sm:flex ${colorClass}`}
        >
          {text.split(' ').join('-')}
        </Link>
      )}
    </>
  )
}

export default Tag
