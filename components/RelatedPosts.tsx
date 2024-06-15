import { slug } from 'github-slugger'
import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Link from '@/components/Link'

interface RelatedPostsProps {
  tags: string[]
  currentSlug: string
}

const RelatedPosts = ({ tags, currentSlug }: RelatedPostsProps) => {
  if (!tags || tags.length === 0) {
    console.error('No tags provided.')
    return null
  }

  const tag = slug(tags[0]) // Ensure the tag is properly slugged

  // Filter posts based on the slugged tag and exclude the current post
  const relatedPosts = allCoreContent(
    sortPosts(
      allBlogs.filter(
        (post) =>
          post.tags && post.tags.map((t) => slug(t)).includes(tag) && post.slug !== currentSlug
      )
    )
  ).slice(0, 5) // Limit to 5 related posts

  if (relatedPosts.length === 0) {
    console.error('No related posts found.')
    return null
  }

  return (
    <div className="pb-10 pt-6">
      <h6 className="pt-6 text-left text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl md:text-3xl">
        You might also like to read
      </h6>
      <ul className="max-w mx-auto mt-8 divide-y divide-blue-200 border-blue-200 text-left text-lg font-medium leading-none">
        {relatedPosts.map((post) => (
          <li key={post.slug} className="mb-2">
            <Link
              href={`/blog/${post.slug}`}
              className="hover:text-white-700 hover:bg-white-50 flex items-center rounded-md px-4 py-3.5 text-primary-500"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RelatedPosts
