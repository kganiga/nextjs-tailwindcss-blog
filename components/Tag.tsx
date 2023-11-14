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
      className={`capitalize text-center mt-3 px-5 py-1 items-center text-xs font-medium sm:flex ${colorClass}`}
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
