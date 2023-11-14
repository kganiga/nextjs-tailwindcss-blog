import Link from '@/components/Link'
import Intro from '@/components/Intro'
import BlogPosts from '@/components/BlogPosts'
import FeaturedArticles from '@/components/FeaturedArticles'

const MAX_DISPLAY = 10

export default function Home({ posts }) {
  return (
    <>
      <div>
        <Intro />
        <h4 className="flex pb-6 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
          Latest Stories
        </h4>
        <hr className="dark:border-white-700 border-gray-200" />
        <BlogPosts posts={posts} />
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end pb-6 pt-6 text-base font-medium leading-6">
          <Link
            href="/blog"
            aria-label="all posts"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      <hr className="dark:border-white-700 border-gray-200 pb-12" />
      <FeaturedArticles posts={posts} />
    </>
  )
}
