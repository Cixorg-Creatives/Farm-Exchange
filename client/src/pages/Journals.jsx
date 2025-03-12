import JournalHero from '@/components/journal/JournalHero'
import Latest from '@/components/journal/Latest'
import SearchBar from '@/components/journal/SearchBar'
import Top from '@/components/journal/Top'
import React from 'react'

const Journals = () => {
  return (
    <div className='px-4 md:px-6 lg:px-24'>
      <JournalHero />
      <SearchBar />
      <Top />
      <Latest />
    </div>
  )
}

export default Journals