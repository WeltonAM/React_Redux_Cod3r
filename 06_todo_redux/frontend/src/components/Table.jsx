import React from 'react'
import IconButton from './IconButton'
import './Custom.css'
import { connect } from 'react-redux'
import { markAsDone, markAsPending, remove } from '../store/actions/todoActions'

const Table = ({ list, handleRemove, handleMarkAsPending, handleMarkAsDone }) => {

  const renderRows = () => {

    return (
      list.map(task => (
        <tr key={task._id}>
          <td 
            className={task.done ? 'markAsDone' : ''}
          >
              {task.description}
          </td>

          <td>
            <IconButton 
              style='success'
              icon='check'
              action={() => handleMarkAsDone(task)}
              hide={task.done}
            />

            <IconButton 
              style='warning'
              icon='undo'
              action={() => handleMarkAsPending(task)}
              hide={!task.done}
              />

            <IconButton 
              style='danger'
              icon='trash-o'
              action={() => handleRemove(task)}
              hide={!task.done}
            />
            
          </td>
        </tr>
      ))
    )
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Description</th>
          <th className='tableActions'>Actions</th>
        </tr>
      </thead>

      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

const mapStateToProps = (state) => {
  return {
    list: state.todo.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      handleMarkAsDone(task){
          const action = markAsDone(task)
          dispatch(action)
      },
      handleMarkAsPending(task){
          const action = markAsPending(task)
          dispatch(action)
      },
      handleRemove(task){
          const action = remove(task)
          dispatch(action)
      },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)