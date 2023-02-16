import axios from 'axios'
import Form from '../components/Form'
import Table from '../components/Table'
import PageHeader from '../templates/PageHeader'

const Todo = () => {
  return (
    <>
      <PageHeader title="Tasks" small="Register" />

      <div className="todo">
        <Form />

        <hr />

        <Table />
      </div>

    </>
  )
}

export default Todo