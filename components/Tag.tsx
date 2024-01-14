// Import the necessary modules
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
interface Props {
  text: string
  count: number
}

const tagColors = [
  'bg-purple-100 text-purple-800',
  'bg-blue-100 text-blue-800',
  'bg-green-100 text-green-800',
]
let colorIndex = 0

const Tag = ({ text, count }: Props) => {
  // Check if the current page is the tags page
  const pathName = usePathname()

  const isTagsPage = pathName === '/tags' ? true : false
  const colorClass = tagColors[colorIndex]
  colorIndex = (colorIndex + 1) % tagColors.length

  let textSizeClass = ''
  if (count >= 0 && count < 5) {
    textSizeClass = 'text-xs'
  } else if (count >= 5 && count < 10) {
    textSizeClass = 'text-lg'
  } else if (count >= 10 && count < 15) {
    textSizeClass = 'text-2xl'
  } else if (count >= 15 && count < 20) {
    textSizeClass = 'text-3xl'
  } else if (count >= 20 && count < 25) {
    textSizeClass = 'text-4xl'
  } else {
    textSizeClass = 'text-4xl'
  }

  return (
    <>
      {isTagsPage ? (
        <Link
          href={`/tags/${slug(text)}`}
          className={`m-2 py-1 uppercase ${textSizeClass} font-semibold text-${colorClass}`}
        >
          {text.split(' ').join('-')}
        </Link>
      ) : (
        <Link
          href={`/tags/${slug(text)}`}
          className={`mx-1 mt-3 max-w-max rounded bg-[#d9dfe3] px-3 py-1 text-[12px] font-semibold capitalize text-${colorClass}`}
        >
          {text.split(' ').join('-')}
        </Link>
      )}
    </>
  )
}

export default Tag
