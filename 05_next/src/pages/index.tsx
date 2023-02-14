import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Client from '../core/Client'
import styles from '../styles/Home.module.css'

export default function Home() {

  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 45, '2'),
    new Client('Carlos', 23, '3'),
    new Client('Pedro', 54, '4')
  ]

  const clientSelected = (client: Client) => {

  }

  const clientDeleted = (client: Client) => {
    console.log(client.name)
  }

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to to-purple-600
    `}>

      <Layout title="Next Crud" >
        
        <div className='flex justify-end'>
          <Button className='mb-4' color='green'>
            New client
          </Button>
        </div>

        {/* <Table
          clients={clients}
          clientSelected={clientSelected}
          clientDeleted={clientDeleted}
        /> */}

        <Form />
      </Layout>

    </div>
  )
}


