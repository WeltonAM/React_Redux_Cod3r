import React, { useState, useMemo } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseMemo = (props) => {

    const sum = (a, b) => {
        
        const future = Date.now() + 500

        while(Date.now() < future) {}

        return a + b
    }

    const [nOne, setNOne] = useState(0)
    const [nTwo, setNTwo] = useState(0)
    const [nThree, setNThree] = useState(0)

    const result = useMemo(() => sum(nOne, nTwo), [nOne, nTwo])

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <div className="center">
                <input 
                    type="number" 
                    className="input"
                    value={nOne}
                    onChange={(e) => setNOne(parseInt(e.target.value))}
                />
                
                <input 
                    type="number" 
                    className="input"
                    value={nTwo}
                    onChange={(e) => setNTwo(parseInt(e.target.value))}
                />
                
                <input 
                    type="number" 
                    className="input"
                    value={nThree}
                    onChange={(e) => setNThree(parseInt(e.target.value))}
                />

                <span className="text">{result}</span>
            </div>
        </div>
    )
}

export default UseMemo
