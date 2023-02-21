import React, { useEffect } from "react"
import { connect } from 'react-redux'
import { setDescription, setMonth, setYear, create } from "./billingCycleActions"

const BillingCycleForm = ({ description, month, year, setDescription, setMonth, setYear, create }) => {
 
    const handleSubmit = (e) => {
        e.preventDefault()
        create(`${description}_${month}_${year}`)
    }

    useEffect(() => {
        
    }, [description, month, year])

    // console.log(props)

    return (
        <form role='form' onSubmit={handleSubmit}>
            <div className='box-body'>
                <input 
                    name='name' 
                    type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <input 
                    name='month' 
                    type='number'
                    maxLength={1}
                    value={month}
                    onChange={(e) => setMonth(+e.target.value)}
                    />

                <input 
                    name='year'
                    type='number'
                    maxLength={4}
                    value={year}
                    onChange={(e) => setYear(+e.target.value)}
                />
            </div>

            <div className='box-footer'>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        description: state.billingCycle.description,
        month: state.billingCycle.month,
        year: state.billingCycle.year,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDescription(newDescription){
            const action = setDescription(newDescription)
            dispatch(action)
        },
        setMonth(newMonth){
            const action = setMonth(newMonth)
            dispatch(action)
        },
        setYear(newYear){
            const action = setYear(newYear)
            dispatch(action)
        },
        create(...value){
            const action = create(...value)
            dispatch(action)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)