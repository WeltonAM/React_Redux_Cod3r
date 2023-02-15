import React from 'react'
import Grid from '../templates/Grid'
import IconButton from './IconButton'

const Form = ({ handleAddTask, description, setDescription, handleSearch, handleClear }) => {

    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? handleSearch() : handleAddTask()
        } else if (e.key === 'Escape') {
            handleClear()
        }
    }

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
                    action={handleAddTask}
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

export default Form