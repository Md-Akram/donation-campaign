import React from 'react'
import { DonationPageCard } from './DonationPageCard'

export const DonationPage = () => {
    return (
        <>
            <div className='w-4/5 grid grid-cols-1 gap-4 md:grid-cols-2 items-center mx-auto my-5'>
                <DonationPageCard />
                <DonationPageCard />
                <DonationPageCard />

            </div>
            <div className='w-max mx-auto'>
                <button className='px-4 py-2 bg-cyan-500 rounded'>See All</button>
            </div>
        </>

    )
}
