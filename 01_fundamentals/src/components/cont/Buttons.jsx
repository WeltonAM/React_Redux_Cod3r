import React from 'react'

const Buttons = ({ inc, dec }) => {
    return (
        <>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </>
    )
}

export default Buttons