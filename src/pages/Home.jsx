import React from 'react'
import Landing from '../components/Landing'
import Hightlights from '../components/Highlights'
import Featured from '../components/Featured'
import Discounted from '../components/Discounted'
import Explore from '../components/Explore'

export default function Home() {
    return (
        <>
            <Landing />
            <Hightlights />
            <Featured />
            <Discounted />
            <Explore />
        </>
    )
}
