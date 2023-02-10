import React from 'react'
import StraightSon from './StraightSon'

const Straight = () => {
  return (
    <div>
        <StraightSon
            text="Junior"
            age={1}
            nerd={true}
        />
        
        <StraightSon
            text="Gabriel"
            age={2}
            nerd={false}
        />
    </div>
  )
}

export default Straight