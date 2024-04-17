import React from 'react'
import { useParams } from 'react-router-dom'

const Estates = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>Estates Details: {id}</h1>
        </div>
    )
}

export default Estates