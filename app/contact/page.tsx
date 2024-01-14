import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

export default function Contact() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-1 pb-8 pt-6 md:space-y-1">
        <h1 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-5xl md:leading-14">
          Contact Me
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Feel free to reach out to me if you have any questions or just want to say hello.
        </p>
        <p className="text-lg text-gray-600">
          <span className="font-bold text-teal-500">Email:</span>{' '}
          <Link className="focus:shadow-outline-blue" href={`mailto:${siteMetadata.email}`}>
            {siteMetadata.email}
          </Link>
        </p>
        <p className="pb-5"></p>
        <Link
          href="/"
          className="focus:shadow-outline-teal inline rounded-lg border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-teal-700 focus:outline-none dark:hover:bg-teal-500"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  )
}
