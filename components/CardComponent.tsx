import React from 'react'
import Link from '@/components/Link'
import Image from '@/components/Image'

const CardComponent = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2">
      {cards.map((frontMatter, index) => {
        const { summary, slug, title, images } = frontMatter
        return (
          <div
            key={index}
            className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-md dark:bg-gray-900 dark:shadow-lg"
          >
            <Link href={`/blog/${slug}`} className="group block">
              {images.map((path, i) => (
                <div key={i}>
                  <Image
                    className="mx-auto rounded-t-lg"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      minHeight: '200px',
                      maxHeight: '200px',
                    }}
                    src={path}
                    alt={`${title} - Image ${i + 1}`}
                    width={400}
                    height={300}
                  />
                </div>
              ))}
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-100">
                  {title}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-300">{summary}</p>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default CardComponent
