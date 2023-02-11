import React, { useEffect, useState } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const Calculator = () => {

    const [displayValue, setDisplayValue] = useState('0')
    const [clearDisplay, setClearDisplay] = useState(false)
    const [op, setOp] = useState(null)
    const [values, setValues] = useState([0, 0])
    const [current, setCurrent] = useState(0)

    const clearMemory = () => {
        setDisplayValue('0')
        setClearDisplay(false)
        setOp(null)
        setValues([0, 0])
        setCurrent(0)
    }

    const setOperation = (operation) => {
        if(current === 0){
            setOp(operation)
            setCurrent(1)
            setClearDisplay(true)
        } else {
            const equals = operation === '='
            const currentOp = op
            const newValues = [...values]

            console.log(op, equals)

            try {
                newValues[0] = eval(`${newValues[0]} ${currentOp} ${newValues[1]}`)
            } catch (error) {
                newValues[0] = values[0]
            }

            newValues[1] = 0

            setDisplayValue(newValues[0])
            setOp(equals ? null : op)
            setCurrent(equals ? 0 : 1)
            setClearDisplay(!equals)
            setValues(newValues) 
        }
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
            values[current] = parseFloat(newDisplayValue)
            setValues(values)
        }
    }

    return (
        <div className='calculator'>
            <Display value={displayValue} />

            <Button label="AC" triple click={() => clearMemory()} />
            <Button label="/" operation click={setOperation}/>
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