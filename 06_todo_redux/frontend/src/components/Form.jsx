import React, { useEffect } from 'react'
import Grid from '../templates/Grid'
import IconButton from './IconButton'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { changeDescription, search, add, clear } from '../store/actions/todoActions'

const Form = ({ handleAddTask, description, setDescription, handleSearch, handleClear }) => {

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? handleSearch() : handleAddTask(description)
        } else if (e.key === 'Escape') {
            handleClear()
        }
    }

    useEffect(() => {
        handleSearch()
    }, [])

    return (
        <div role='form' className='todoForm'>

            <Grid cols='12 9 10' >
                <input
                    className='form-control'
                    placeholder='Add a task...'
                    value={description}
                    onKeyUp={keyHandler}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Grid>

            <Grid cols='12 3 2'>
                <IconButton
                    style="primary"
                    icon="plus"
                    action={() => handleAddTask(description)}
                />

                <IconButton
                    style="info"
                    icon="search"
                    action={handleSearch}
                />

                <IconButton
                    style="warning"
                    icon="close"
                    action={handleClear}
                />
            </Grid>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        description: state.todo.description
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDescription(newDescription){
            const action = changeDescription(newDescription)
            dispatch(action)
        },
        handleSearch(){
            const action = search()
            dispatch(action)
        },
        handleAddTask(description){
            const action = add(description)
            dispatch(action)
        },
        handleClear(){
            const action = clear()
            dispatch(action)
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form)