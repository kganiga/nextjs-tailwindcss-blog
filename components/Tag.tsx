'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'

interface Props {
  text: string
  count: number
}

const tagColors = [
  'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-200',
  'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200',
  'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200',
]
let colorIndex = 0

const Tag = ({ text, count }: Props) => {
  // Check if the current page is the tags page
  const pathName = usePathname()

  const isTagsPage = pathName === '/tags'
  const colorClass ="bg-teal-500 text-white"
  colorIndex = (colorIndex + 1) % tagColors.length

  // Determine padding based on count
  const paddingClass =
    count < 5
      ? 'px-2 py-1'
      : count < 10
        ? 'px-3 py-2'
        : count < 15
          ? 'px-4 py-2'
          : count < 20
            ? 'px-5 py-3'
            : count < 25
              ? 'px-6 py-4'
              : 'px-6 py-4'

  // Determine text size
  const textSizeClass =
    count < 5
      ? 'text-xs'
      : count < 10
        ? 'text-sm'
        : count < 15
          ? 'text-base'
          : count < 20
            ? 'text-lg'
            : 'text-xl'

  // Center content vertically and horizontally
  const alignmentClass = 'flex items-center justify-center'
  const formattedText = text.split('-').join(' ')
  return (
    <>
      {isTagsPage ? (
        <Link
          href={`/tags/${slug(text)}`}
          className={`m-2 rounded ${paddingClass} ${alignmentClass} uppercase ${textSizeClass} font-semibold ${colorClass}`}
        >
          {formattedText}
        </Link>
      ) : (
        <Link
          href={`/tags/${slug(text)}`}
          className={`mx-1 mt-3 max-w-max rounded bg-[#d9dfe3] px-2 py-1 text-[12px] font-semibold capitalize ${colorClass}`}
        >
          {formattedText}
        </Link>
      )}
    </>
  )
}

export default Tag
