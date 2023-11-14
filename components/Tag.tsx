import Link from 'next/link'
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
  const colorClass = tagColors[colorIndex]
  colorIndex = (colorIndex + 1) % tagColors.length
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className={`mt-3 items-center px-5 py-1 text-center text-xs font-medium capitalize sm:flex ${colorClass}`}
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
