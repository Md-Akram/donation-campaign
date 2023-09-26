import React from 'react'

export const DonationPageCard = () => {
    return (

        <div className='flex flex-row gap-4 items-start justify-stretch rounded'>

            <img className='rounded w-1/3 h-full' src="/Education.png" alt="" />

            <div>
                <div className="badge">Category</div>
                <h2 className="text-2xl text-black">Title</h2>
                <p>Amount</p>
                <button>View Details</button>
            </div>
        </div>
    )
}
