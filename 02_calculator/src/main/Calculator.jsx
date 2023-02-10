import React, { useState } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const Calculator = () => {

    const [displayValue, setDisplayValue] = useState('0')
    const [clearDisplay, setClearDisplay] = useState(false)
    const [op, setOp] = useState(null)
    const [values, setValues] = useState([0, 0])
    const [current, setCurrent] = useState(0)

    const initialState = () => {
        setDisplayValue('0')
        setClearDisplay(false)
        setOp(null)
        setValues([0, 0])
        setCurrent(0)
    }

    const clearMemory = () => {
        initialState()
    }

    const setOperation = (operation) => {
        console.log(operation)
    }

    const addDigit = (n) => {
        if(n === '.' && displayValue.includes('.')){
            return
        }

        const clearDis = displayValue === '0' || clearDisplay

        const currentValue = clearDis ? '' : displayValue

        const newDisplayValue = currentValue + n 

        setDisplayValue(newDisplayValue)
        setClearDisplay(false)

        if(n !== '.'){
            const i = current
            const newValue = parseFloat(displayValue)
            const newValuesArr = [...values]
            newValuesArr[i] = newValue
            setValues(newValuesArr)
            console.log(newValuesArr)
        }
    }

    return (
        <div className='calculator'>
            <Display value={displayValue} />

            <Button label="AC" triple click={() => clearMemory()} />
            <Button label="/" operation  click={setOperation}/>
            <Button label="7" click={addDigit} />
            <Button label="8" click={addDigit}/>
            <Button label="9" click={addDigit}/>
            <Button label="*" operation click={setOperation}/>
            <Button label="4" click={addDigit}/>
            <Button label="5" click={addDigit}/>
            <Button label="6" click={addDigit}/>
            <Button label="-" operation click={setOperation}/>
            <Button label="1" click={addDigit}/>
            <Button label="2" click={addDigit}/>
            <Button label="3" click={addDigit}/>
            <Button label="+" operation click={setOperation}/>
            <Button label="0" double click={addDigit}/>
            <Button label="." click={addDigit}/>
            <Button label="=" operation click={setOperation}/>
        </div>
    )
}

export default Calculator