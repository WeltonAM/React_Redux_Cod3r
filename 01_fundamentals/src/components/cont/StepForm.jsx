import React from 'react'

const StepForm = ({ step, setStep }) => {
    return (
        <div>
            <label htmlFor="inputStep"></label>
            <input type="number" id='inputStep' value={step} onChange={(e) => setStep(+e.target.value)} />
        </div>
    )
}

export default StepForm