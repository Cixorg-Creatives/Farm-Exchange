import JournalHero from '@/components/journals/JournalHero'
import Latest from '@/components/journals/Latest'
import SearchBar from '@/components/journals/SearchBar'
import Top from '@/components/journals/Top'
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