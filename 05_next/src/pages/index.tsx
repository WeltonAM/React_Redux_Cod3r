import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import useClients from '../hooks/useClients'

export default function Home() {

  const {saveClient, clientDeleted, clientSelected, newClient, client, clients, visible, setVisible} = useClients()

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to to-purple-600
    `}>

      <Layout title="Next Crud">

        {visible === 'table' ? (
          <>
            <div className='flex justify-end'>
              <Button 
                className='mb-4' 
                color='green'
                onClick={newClient}
              >
                New client
              </Button>
            </div>

            <Table
              clients={clients}
              clientSelected={clientSelected}
              clientDeleted={clientDeleted}
            />
          </>
        ) : (
          <Form 
            client={client}
            canceled={() => setVisible('table')}
            changeClient={saveClient}
          >

          </Form>
        )}

      </Layout>

    </div>
  )
}


