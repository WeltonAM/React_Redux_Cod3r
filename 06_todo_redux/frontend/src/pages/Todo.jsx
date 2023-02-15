import { useEffect, useState } from 'react'
import axios from 'axios'
import Form from '../components/Form'
import Table from '../components/Table'
import PageHeader from '../templates/PageHeader'

const Todo = () => {

  const URL = 'http://localhost:3003/api/todos'

  const [description, setDescription] = useState('')
  const [list, setList] = useState([])

  const refresh = (description = '') => {
    
    const search = description ? `&description__regex=/${description}/` : ''

    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(res => {
        setList(res.data)
        setDescription(description)
      })
  }

  const handleClear = () => {
    refresh()
    setDescription('')
  }

  const handleSearch = () => {
    refresh(description)
  }

  const handleAddTask = () => {
    if(description !== ''){
      axios.post(URL, { description })
        .then(res => refresh())
    }
  }

  const handleRemove = (task) => {
    axios.delete(`${URL}/${task._id}`)
      .then(res => refresh(description))
  }

  const handleMarkAsDone = (task) => {
    axios.put(`${URL}/${task._id}`, {...task, done: true})
      .then(res => refresh(description))
  }

  const handleMarkAsPending = (task) => {
    axios.put(`${URL}/${task._id}`, {...task, done: false})
    .then(res => refresh(description))
  }

  useEffect(() => {
    refresh()
  }, [])


  return (
    <>
      <PageHeader title="Tasks" small="Register" />

      <div className="todo">
        <Form
          handleAddTask={handleAddTask}
          description={description}
          setDescription={setDescription}
          handleSearch={handleSearch}
          handleClear={handleClear}
        />

        <hr />

        <Table
          list={list}
          handleRemove={handleRemove}
          handleMarkAsDone={handleMarkAsDone}
          handleMarkAsPending={handleMarkAsPending}
        />
      </div>

    </>
  )
}

export default Todo