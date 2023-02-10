import React from 'react'

const NotStraight = ({ text, age, nerd }) => {
    return (
        <div>
            <span>{text}</span>
            <span> - {age} - </span>
            <span>{nerd ? 'True' : 'False'}</span>
        </div>
    )
}

export default NotStraight