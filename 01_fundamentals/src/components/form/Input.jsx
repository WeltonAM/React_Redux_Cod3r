import React, { useState } from 'react'
import './Input.css'

const Input = () => {

    const [value, setValue] = useState('Who change whom')

    return (
        <div className='input'>
            <h2>{value}</h2>

            <p>OnChange:</p>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <hr />

            <p>Default or undefined value:</p>
            <input defaultValue={value} />
            <hr />

            <p>Read only:</p>
            <input value={value} readOnly />
        </div>
    )
}

export default Input