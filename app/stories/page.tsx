import { genPageMetadata } from 'app/seo'
import CardComponent from '@/components/CardComponent'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { slug } from 'github-slugger'

export const metadata = genPageMetadata({ title: 'Stories' })

export default function Stories() {
  const storiesData = allCoreContent(
    sortPosts(
      allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes('stories'))
    )
  )

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-center text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Musings
          </h1>
        </div>
      </div>
      <hr className="border-gray-300 dark:border-gray-600" />
      <CardComponent cards={storiesData} itemsPerPage={7} />
    </>
  )
}
