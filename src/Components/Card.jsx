import classNames from 'classnames';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


export const Card = ({ data }) => {
    const { id, picture, title, category, category_bg, card_bg, text_bg } = data
    let dynamicCardBody = ''
    let dynamicCategoryClass = ''
    let dynamicTitleClass = ''
    let dynamicDescriptionClass = ''
    if (card_bg === 'red') {
        dynamicCardBody = 'card-body rounded-b-lg bg-red-200 '
        dynamicCategoryClass = `badge bg-red-300 text-red-500`
        dynamicTitleClass = `card-title text-red-500`
        dynamicDescriptionClass = `text-red-500`
    } else if (card_bg === 'orange') {
        dynamicCardBody = 'card-body rounded-b-lg bg-orange-200 '
        dynamicCategoryClass = `badge bg-orange-300 text-orange-500`
        dynamicTitleClass = `card-title text-orange-500`
        dynamicDescriptionClass = `text-orange-500`
    } else if (card_bg === 'green') {
        dynamicCardBody = 'card-body rounded-b-lg bg-green-200 '
        dynamicCategoryClass = `badge bg-green-300 text-green-500`
        dynamicTitleClass = `card-title text-green-500`
        dynamicDescriptionClass = `text-green-500`
    } else if (card_bg === 'blue') {
        dynamicCardBody = 'card-body rounded-b-lg bg-blue-200 '
        dynamicCategoryClass = `badge bg-blue-300 text-blue-500`
        dynamicTitleClass = `card-title text-blue-500`
        dynamicDescriptionClass = `text-blue-500`
    }

    return (

        <Link
            to={`/donations/${id.toString()}`}
            className="card shadow-xl"
            onClick={() => handleClick(id)}>
            <figure><img className='w-full' src={picture} alt={title} /></figure>
            <div className={dynamicCardBody}>
                <div className={dynamicCategoryClass}>{category}</div>
                <h2 className={dynamicTitleClass}>
                    {title}

                </h2>
            </div>
        </Link >
    )
}
