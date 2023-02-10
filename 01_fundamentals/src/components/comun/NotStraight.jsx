import React, { useState } from 'react'
import NotStraightSon from './NotStraightSon'

const NotStraight = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [nerd, setNerd] = useState(false)

    const giveInfo = (name, age, nerd) => {
        setName(name)
        setAge(age)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span>{name}</span>
                <span> - {age} - </span>
                <span>{nerd ? 'True' : 'False'}</span>
            </div>

            <NotStraightSon giveInfo={giveInfo} />
        </div>
    )
}

export default NotStraight