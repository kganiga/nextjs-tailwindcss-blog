import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 10

const BlogPosts = ({ posts }) => {
    return (
        <div className="grid gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-12">
            {posts
                .filter((frontMatter) => !frontMatter.tags.includes('stories'))
                .slice(0, MAX_DISPLAY)
                .map((frontMatter, index) => {
                    const { slug, date, title, summary, tags } = frontMatter

                    return (
                        <div key={index} className="border-t pt-8">
                            <div className="flex space-x-1 text-xs text-gray-500">
                                <time dateTime={date}>{formatDate(date)}</time>
                            </div>
                            <Link href={`/blog/${slug}`}>
                                <p className="text-base font-semibold leading-tight tracking-tight text-gray-700 dark:text-gray-100 hover:text-gray-900 sm:text-lg md:text-xl">
                                    {title}
                                </p>
                                <p className="hidden lg:block mt-3 text-sm text-gray-500 sm:line-clamp-2">
                                    {summary}
                                </p>
                            </Link>
                            <div className="flex flex-wrap">
                                {tags.map((tag) => (
                                    <Tag key={tag} text={tag} />
                                ))}
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default BlogPosts
