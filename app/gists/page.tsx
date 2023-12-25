'use client'
import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

import GistCard from '@/components/GistsCard'

interface Gist {
  id: string
  description: string
  html_url: string
  files: { [key: string]: { filename: string; raw_url: string } }
}

const IndexPage = (): JSX.Element => {
  const [gists, setGists] = useState<Gist[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true) // State to manage loading

  useEffect(() => {
    const fetchGists = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${siteMetadata.github_un}/gists`)
        const data = await response.json()
        setGists(data)
        setLoading(false) // Update loading state when data is fetched
      } catch (error) {
        console.error('Error fetching gists:', error)
        setLoading(false) // Handle errors by updating loading state
      }
    }

    fetchGists()
  }, [])

  const cardColors = ['bg-[#FFFBEC]', 'bg-[#F9ECFF]', 'bg-[#ECEEFF]']

  const filteredGists = gists.filter((gist) =>
    gist.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <div className="text-center text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Gists
          </div>
        </div>
      </div>
      <hr />
      <div>
        <input
          type="text"
          placeholder="Search gists..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-4 w-full rounded-md border border-teal-600 px-4 py-2 focus:border-teal-500 focus:outline-none focus:ring-teal-300 dark:bg-black"
        />
      </div>
      {/* Show spinner when loading */}
      {loading ? (
        <>
          <div className="flex h-full items-center justify-center">
            <div className="relative">
              <div className="h-20 w-20 rounded-full border-2 border-teal-200" />
              <div className="absolute left-0 top-0 h-20 w-20 animate-spin rounded-full border-t-2 border-teal-700" />
            </div>
            <div className="relative">
              <div className="h-10 w-10 rounded-full border-2 border-teal-200" />
              <div className="absolute left-0 top-0 h-10 w-10 animate-spin rounded-full border-t-2 border-teal-700" />
            </div>
            <div className="relative">
              <div className="h-5 w-5 rounded-full border-2 border-teal-200" />
              <div className="absolute left-0 top-0 h-5 w-5 animate-spin rounded-full border-t-2 border-teal-700" />
            </div>
          </div>
        </>
      ) : (
        <div className="mb-10 flex w-full flex-wrap">
          {filteredGists.map((gist, index) => (
            <GistCard key={gist.id} gist={gist} cardColor={cardColors[index % cardColors.length]} />
          ))}
        </div>
      )}
    </>
  )
}

export default IndexPage
