import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {

    const [valueOne, setValueOne] = useState("")
    const [valueTwo, setValueTwo] = useState("")

    const count = useRef(0)
    const myInputOne = useRef(null)
    const myInputTwo = useRef(null)

    const merge = (s1, s2) => {
        return [...s1].map((e, i) => {
            return `${e}${s2[i] || ""}`
        }).join("")
    }

    useEffect(() => {
        count.current++
        myInputTwo.current.focus()
    }, [valueOne])
    
    useEffect(() => {
        count.current++
        myInputOne.current.focus()
    }, [valueTwo])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(valueOne, valueTwo)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>

                <input
                    type="text"
                    className="input"
                    value={valueOne}
                    onChange={(e) => setValueOne(e.target.value)}
                    ref={myInputOne}
                />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input
                    type="text"
                    className="input"
                    value={valueTwo}
                    onChange={(e) => setValueTwo(e.target.value)}
                    ref={myInputTwo}
                />

            </div>
        </div>
    )
}

export default UseRef
