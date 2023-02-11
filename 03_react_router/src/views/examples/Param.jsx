import React from 'react'
import { useParams } from 'react-router-dom'

const Param = () => {

    const { id } = useParams()

    return (
        <div className='param'>
            <h1>Param</h1>
            <p>Value: {id}</p>
        </div>
    )
}

export default Param