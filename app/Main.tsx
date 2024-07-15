import Link from '@/components/Link'
import BlogPosts from '@/components/BlogPosts'
import FeaturedArticles from '@/components/FeaturedArticles'
import Intro from '@/components/Intro'
const MAX_DISPLAY = 10

export default function Home({ posts }) {
  return (
    <>
      <div>
        <Intro />
        <div className="min-h-12">
          {' '}
          {/* Adjust the height value as needed */}
          <h6 className="pt-6 text-left text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl md:text-3xl">
            Latest articles
          </h6>
        </div>

        <hr className="dark:border-white-700 border-gray-200" />
        <BlogPosts posts={posts} />
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end pb-6 pt-6 text-base font-medium leading-6">
          <Link href="/blog" aria-label="all posts" className="text-primary-600 dark:text-gray-100">
            All Posts →
          </Link>
        </div>
      )}
      <hr className="dark:border-white-700 border-gray-200 pb-12" />
      <FeaturedArticles posts={posts} />
    </>
  )
}
