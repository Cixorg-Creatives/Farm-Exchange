import JournalHero from '@/components/journal/JournalHero'
import Suggestions from '@/components/journal/Suggestions'
import React from 'react'

const Journal = () => {
    return (
        <div className='px-4 md:px-6 lg:px-24 journal_bg'>
            <JournalHero />
            <Suggestions />
        </div>
    )
}

export default Journal