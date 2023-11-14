// components/IntroSection.js

import React from 'react'

const Intro = () => {
  return (
    <div className="my-6 flex flex-col items-center gap-x-12 xl:mb-12 xl:flex-row">
      <div className="pt-6">
        <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          hi, I’m <span className="gkb text-slate-600">Khalil Ganiga</span>
        </h1>

        <h2 className="prose text-lg text-gray-600 dark:text-gray-400">
          {`Welcome to my blog - Thoughts from a wandering mind. I have created this site to share my thoughts and experiences.`}
          <br />
          {`Have a good read!`}
        </h2>
      </div>
    </div>
  )
}

export default Intro
