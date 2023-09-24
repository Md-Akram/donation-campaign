import React from 'react'

export const Card = ({ data }) => {
    const { id, picture, title, category, category_bg, card_bg, text_bg, description } = data
    console.log(card_bg);
    return (

        <div className="card shadow-xl">
            <figure><img className='w-full' src={picture} alt={title} /></figure>
            <div className={`card-body rounded-b-lg bg-${card_bg}-200 bg--200`}>
                <div className={`badge bg-${card_bg}-300 text-${card_bg}-500`}>{category}</div>
                <h2 className={`card-title text-${card_bg}-500`}>
                    {title}

                </h2>
                <p className={`text-${card_bg}-500`}>{description}</p>

            </div>
        </div>
    )
}
