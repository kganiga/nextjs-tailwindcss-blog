import Link from '@/components/Link'

const FeaturedArticles = ({ posts }) => {
  return (
    <section className="bg-gray-100 p-10">
      <h2 className="mb-1 text-center text-3xl font-extrabold leading-tight text-gray-900">
        What's Popular
      </h2>
      <p className="mb-12 text-center text-lg text-gray-500">
        Popular, evergreen tutorials, utilities and how-to guides.
      </p>
      <div className="w-full">
        <div className="mb-10 flex w-full flex-wrap">
          {posts
            .filter((frontMatter) => frontMatter.isfeatured === true)
            .map((frontMatter, index) => {
              const { slug, title, summary } = frontMatter
              return (
                <div key={index} className="mb-5 w-full p-2 sm:w-1/2 lg:w-1/3">
                  <div className="relative ml-0 mr-0 h-full">
                    <span className="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded-lg bg-teal-500" />
                    <div className="relative h-full rounded-lg border-2 border-teal-500 bg-white p-5">
                      <div className="-mt-1 flex items-center">
                        <h3 className=" text-lg font-semibold capitalize text-gray-600">
                          <Link href={`/blog/${slug}`}>{title}</Link>
                        </h3>
                      </div>
                      <p className="mb-1 mt-3 text-xs font-medium uppercase text-teal-500">
                        ------------
                      </p>
                      <p className="Capitalize mb-2 text-gray-600">{summary}</p>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default FeaturedArticles
