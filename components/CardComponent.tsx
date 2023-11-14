// CardComponent.js

import React from 'react';
import Link from '@/components/Link'
import Image from '@/components/Image'

const CardComponent = ({ cards }) => {
  return (<>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
      {cards.map((frontMatter, index) => {
        const { summary, slug, title, images } = frontMatter
        return (<>
          <div key={index} className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-slate-700 sm:shrink-0 sm:grow sm:basis-0">
            <Link href={`/blog/${slug}`} className="block group">
              {images.map((path, i) => (
                <div key={i}>
                  <Image
                    className="rounded-t-lg mx-auto"
                    style={{ maxWidth: '100%', height: 'auto', minHeight: '200px', maxHeight: '200px' }}
                    src={path}
                    alt={`${title} - Image ${i + 1}`}
                    width={400}
                    height={300}
                  />
                </div>
              ))}
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {title}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {summary}
                </p>
              </div>
            </Link>

          </div>
        </>
        )
      })}

    </div >
  </>

  );
};

export default CardComponent;
