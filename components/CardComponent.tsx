'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CardComponent = ({ cards, itemsPerPage = 6 }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(cards.length / itemsPerPage)

  const currentCards = cards.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1))

  return (
    <div className="p-6">
      {/* Grid Layout - Ensures uniform card size */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {currentCards.map((story, index) => {
          const { summary, slug, title, images } = story
          const imageUrl = images[0]

          return (
            <Link key={index} href={`/blog/${slug}`} className="group">
              <div className="relative flex flex-col overflow-hidden rounded-l bg-white shadow-md transition-all hover:shadow-lg dark:bg-gray-900">
                {/* Image - Fixed Size */}
                <div className="relative h-[200px] w-full">
                  <Image
                    src={imageUrl}
                    alt={title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-opacity duration-300 ease-in-out"
                  />
                </div>
                {/* Content */}
                <div className="p-4">
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{summary}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Stylish Pagination Controls */}
      <div className="mt-8 flex justify-center space-x-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`rounded-full px-4 py-2 text-white ${
            currentPage === 1
              ? 'cursor-not-allowed bg-gray-300'
              : 'bg-primary-600 hover:bg-primary-700'
          }`}
        >
          ← Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`h-10 w-10 rounded-full text-white ${
              currentPage === i + 1
                ? 'bg-primary-600 font-bold'
                : 'bg-gray-300 transition-all hover:bg-primary-500'
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`rounded-full px-4 py-2 text-white ${
            currentPage === totalPages
              ? 'cursor-not-allowed bg-gray-300'
              : 'bg-primary-600 hover:bg-primary-700'
          }`}
        >
          Next →
        </button>
      </div>
    </div>
  )
}

export default CardComponent
