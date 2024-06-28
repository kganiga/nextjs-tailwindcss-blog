import React from 'react'
import Image from 'next/image'
const Intro = () => {
  return (
    <div className="container mx-auto flex flex-col items-center py-16 md:flex-row">
      <div className="relative mb-8 flex w-full justify-center md:mb-0 md:w-1/2">
        <div className="relative z-10">
          <Image
            src="/static/images/avatar.jpg"
            alt="Art materials"
            width={540}
            height={540}
            className="custom-border-radius object-cover"
          />
        </div>
        <div className="absolute left-0 top-0 z-0 h-full w-full -translate-x-12 translate-y-12 transform rounded-full bg-gray-200"></div>
      </div>
      <div className="w-full px-4 text-center md:w-1/2 md:text-left">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          hi, I’m <span className="gkb text-slate-600">Khalil Ganiga</span>
        </h2>
        <p className="mb-1">
          Welcome to my blog - Thoughts from a wandering mind. I have created this site to share my
          thoughts and experiences.
        </p>
        <p className="mb-4">Have a good read!</p>
        <a
          href="/about"
          className="inline-block rounded-lg bg-teal-500 px-4 py-2 text-lg text-white shadow-lg"
        >
          Find out more
        </a>
      </div>
    </div>
  )
}

export default Intro
