import React, { useEffect, useState, useRef } from 'react'
import Link from '@/components/Link'

interface Gist {
  id: string
  description: string
  html_url: string
  files: { [key: string]: { filename: string; raw_url: string } }
}

interface GistCardProps {
  gist: Gist
  cardColor: string
}

const GistCard: React.FC<GistCardProps> = ({ gist, cardColor }) => {
  const [fileContent, setFileContent] = useState<string>('')
  const [cardWidth, setCardWidth] = useState<number | undefined>()
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchGistFile = async () => {
      const fileKey = Object.keys(gist.files)[0]
      const file = gist.files[fileKey]
      try {
        const response = await fetch(file.raw_url)
        const content = await response.text()
        setFileContent(content)
      } catch (error) {
        console.error('Error fetching gist content:', error)
      }
    }

    fetchGistFile()
  }, [gist])

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.scrollWidth)
    }
  }, [fileContent])

  return (
    <div
      className="mb-5 ml-2 mt-2 line-clamp-1 h-80 overflow-y-hidden dark:bg-gray-800 dark:text-white sm:w-1/2 lg:w-1/3"
      style={{
        width: cardWidth ? `${cardWidth}px` : 'auto',
      }}
    >
      <div className="relative ml-0 mr-0 h-full" ref={cardRef}>
        <span className="absolute h-full w-full rounded-lg bg-teal-500 dark:bg-gray-800" />
        <div className="relative h-full rounded-lg border-2 border-teal-500 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="-mt-1 flex items-center">
            <h3 className="text-lg font-semibold capitalize dark:text-gray-100">
              <Link href={gist.html_url} className="dark:text-gray-100">
                {gist.description || 'No description'}
              </Link>
            </h3>
          </div>
          <p className="mb-1 mt-3 text-xs font-medium uppercase dark:text-gray-400">------------</p>
          <pre className="mb-6 line-clamp-6 text-gray-600 dark:text-gray-300">
            {fileContent || 'Loading...'}
          </pre>
          <button className="mb-2 me-2 overflow-hidden text-ellipsis rounded-lg border border-teal-700 px-3 py-1.5 text-center text-sm font-medium text-gray-700 hover:bg-teal-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-teal-300 dark:border-teal-500 dark:text-teal-500 dark:hover:bg-teal-600 dark:hover:text-white dark:focus:ring-teal-800">
            <Link href={gist.html_url} className="dark:text-gray-100">
              View Gist on Github
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default GistCard
