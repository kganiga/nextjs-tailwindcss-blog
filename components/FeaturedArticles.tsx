import Link from '@/components/Link'
import Image from '@/components/Image'

const FeaturedArticles = ({ posts }) => {
    return (
        <section className="bg-gray-100">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                    <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                        <div className="max-w-md mx-auto text-center lg:text-left">
                            <header>
                                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">What's Popular</h2>
                                <p className="mt-4 text-gray-500">
                                    Popular, evergreen tutorials and how-to guides.
                                </p>
                            </header>
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:py-8">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {posts
                                .filter((frontMatter) => frontMatter.isfeatured === true)
                                .slice(0, 5)
                                .map((frontMatter, index) => {
                                    const { slug, title, images } = frontMatter
                                    return (
                                        <li key={index}>
                                            <div className="bg-white rounded shadow-md p-4">
                                                <Link href={`/blog/${slug}`} className="block group">
                                                    <div>
                                                        {images.map((path, i) => (
                                                            <div key={i}>
                                                                <Image
                                                                    style={{ maxWidth: '100%', height: 'auto', minHeight:'200px',maxHeight:'200px'}}
                                                                    src={path}
                                                                    alt={`${title} - Image ${i + 1}`}
                                                                    width={400}
                                                                    height={300}
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="mt-3">
                                                        <h3 className="font-medium text-gray-900">{title}</h3>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedArticles
