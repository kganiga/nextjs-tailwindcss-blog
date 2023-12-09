import React, { FC, memo } from 'react'
import Link from '@/components/Link'

interface FeaturedArticleProps {
  slug: string
  title: string
  summary: string
}

const FeaturedArticle: FC<FeaturedArticleProps> = memo(({ slug, title, summary }) => (
  <div className="mb-5 w-full p-2 dark:bg-gray-800 dark:text-white sm:w-1/2 lg:w-1/3">
    <div className="relative ml-0 mr-0 h-full">
      <span className="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-teal-500 dark:bg-gray-800" />
      <div className="relative h-full rounded-lg border-2 border-teal-500 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <div className="-mt-1 flex items-center">
          <h3 className="text-lg font-semibold capitalize dark:text-gray-100">
            <Link href={`/blog/${slug}`} className="dark:text-gray-100">
              {title}
            </Link>
          </h3>
        </div>
        <p className="mb-1 mt-3 text-xs font-medium uppercase dark:text-gray-400">------------</p>
        <p className="Capitalize mb-2 dark:text-gray-300">{summary}</p>
      </div>
    </div>
  </div>
))

interface FeaturedArticlesProps {
  posts: {
    slug: string
    title: string
    summary: string
    isfeatured: boolean
  }[]
}

const FeaturedArticles: FC<FeaturedArticlesProps> = memo(({ posts }) => (
  <section className="dark:border-white-700 bg-gray-100 p-10 dark:bg-gray-950">
    <div className="text-black dark:text-white">
      <h2 className="mb-1 text-center text-3xl font-extrabold leading-tight text-gray-900 dark:text-gray-100">
        What's Popular
      </h2>
      <p className="mb-12 text-center text-lg text-gray-500">
        Popular, evergreen tutorials, utilities and how-to guides.
      </p>
    </div>

    <div className="w-full">
      <div className="mb-10 flex w-full flex-wrap">
        {posts
          .filter((frontMatter) => frontMatter.isfeatured === true)
          .map(({ slug, title, summary }) => (
            <FeaturedArticle key={slug} slug={slug} title={title} summary={summary} />
          ))}
      </div>
    </div>
  </section>
))

export default FeaturedArticles
