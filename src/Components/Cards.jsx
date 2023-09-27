import { useEffect, useState } from 'react'
import { Card } from './Card'

export const Cards = () => {
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(result => setInfo(result))
    }, [])

    return <div className="md:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
        {info.map((item) => (
            <Card key={item.id} data={item} />
        ))}
    </div>
}
