import React from 'react'

const NotStraightSon = ({ giveInfo }) => {

    const getAge = () => parseInt(Math.random() * (20) + 50)
    const getNerd = () => Math.random() > 0.5

    return (
        <div>
            <div>Not straight son</div>
            <button 
                onClick={() => giveInfo('John', getAge(), getNerd())}
            >
                Give information:
            </button>
        </div>
    )
}

export default NotStraightSon