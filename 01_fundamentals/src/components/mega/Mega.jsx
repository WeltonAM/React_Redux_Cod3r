import React, { useState } from 'react'
import './Mega.css'

const Mega = ({ qtyNum }) => {

    const handelSortArrNumber = (min, max, arr) => {
        const num = parseInt(Math.random() * (max + 1 - min)) + min

        return arr.includes(num) ?
            handelSortArrNumber(min, max, arr) :
            num
    }

    const fillArr = (qty) => {
        const numbers = Array(qty)
            .fill(0)
            .reduce((newArr) => {
                const newNumber = handelSortArrNumber(1, 60, newArr)
                return [...newArr, newNumber]
            }, [])
            .sort((n1, n2) => n1 - n2)

        return numbers
    }

    const [qty, setQty] = useState(qtyNum || 6)
    const initialNums = fillArr(qty)
    const [numbers, setNumbers] = useState(initialNums)

    return (
        <div className='mega'>
            <h3>{numbers.join(' ')}</h3>

            <div>
                <input
                    min="6"
                    max="15"
                    type="number"
                    value={qty}
                    onChange={(e) => {
                        setQty(+e.target.value)
                        setNumbers(fillArr(+e.target.value))
                    }}
                />
            </div>

            <button onClick={() => setNumbers(fillArr(qty))}>Generate</button>
        </div>
    )
}

export default Mega