import React from "react"

const UseCallBackButtons = ({ inc }) => {
    return (
        <div>
            <button onClick={() => inc(6)} className="btn">+6</button>
            <button onClick={() => inc(12)} className="btn">+12</button>
            <button onClick={() => inc(18)} className="btn">+18</button>
        </div>
    )
}

export default React.memo(UseCallBackButtons)