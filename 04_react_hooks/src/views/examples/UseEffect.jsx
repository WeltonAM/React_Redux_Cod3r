import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(1)
    const [numState, setNumState] = useState("Ímpar")

    const calcFactorial = (num) => {
        const n = parseInt(num)
        if (n < 0) return -1

        if (n === 0) return 1

        return calcFactorial(n - 1) * n
    }

    useEffect(() => {

        setFactorial(calcFactorial(number))

        setNumState(number % 2 === 0 ? 'Par' : 'Ímpar')

    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />

            <div className="center">
                <input
                    type="number"
                    className='input'
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />

                <div>
                    <span className='text'>Fatorial: </span>
                    <span className='text red'>{factorial === -1 ? 'Não exite' : factorial}</span>
                </div>

            </div>

            <SectionTitle title="Exercício #02" />
            <span className="text">Par ou ímpar</span>
            <span className="text red">Número é: {numState}</span>
        </div>
    )
}

export default UseEffect
