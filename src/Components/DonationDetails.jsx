import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const DonationDetails = () => {

    const paramObj = useParams()
    console.log(paramObj.id);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div className='flex flex-col items-center my-4'>
            <div className="w-4/5 h-[60vh] bg-center rounded bg-no-repeat bg-cover relative"
                style={{ backgroundImage: 'url(/Education.png)' }}>
                <div className="w-full h-fit bg-opacity-50 bg-black absolute bottom-0 p-5 rounded-b">
                    <button className="bg-red-500 text-white rounded px-4 py-2">Get Started</button>
                </div>
            </div>
            <div className="w-4/5 flex flex-col">

                <h1 className="my-5 text-3xl font-bold text-black">Hello there</h1>
                <p className='text-black'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum vero explicabo velit nulla? Iure reprehenderit corrupti explicabo cupiditate quos incidunt repudiandae pariatur sapiente ipsum et at ab quo optio facilis officia aliquam quae magni delectus quas, sequi natus tenetur laudantium molestiae repellat. Nisi illum ut nam vitae unde quo.</p>

            </div>
        </div>
    )
}
