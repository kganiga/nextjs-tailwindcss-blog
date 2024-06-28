'use client'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  const [activeLink, setActiveLink] = useState('')

  const handleLinkClick = (title) => {
    setActiveLink(title)
  }

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label="Home Page">
          <div className="flex items-center justify-between">
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="text-2xl font-semibold sm:block">{siteMetadata.headerTitle}</div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className={`hidden cursor-pointer rounded-md p-2 font-medium ${
              activeLink === link.title
                ? 'bg-teal-400 text-white'
                : 'hover:bg-teal-400 dark:hover:bg-teal-600 dark:hover:text-white'
            } sm:block`}
            onClick={() => handleLinkClick(link.title)}
          >
            {link.title}
          </Link>
        ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
