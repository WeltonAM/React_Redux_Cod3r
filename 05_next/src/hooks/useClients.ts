import { useEffect, useState } from "react"
import ClientCollection from "../backend/db/ClientCollection"
import Client from "../core/Client"
import ClientRepo from "../core/ClientRepo"

export default function useClients() {
    const repo: ClientRepo = new ClientCollection()
  
    const [visible, setVisible] = useState<'table' | 'form'>('table')
    const [client, setClient] = useState<Client>(Client.voidClient())
    const [clients, setClients] = useState<Client[]>([])
  
    const getAll = () => {
      repo.getAll().then(clients => {
        setClients(clients)
        setVisible('table')
      })
    }
  
    useEffect(getAll, [])
  
    const clientSelected = (client: Client) => {
      setClient(client)
      setVisible('form')
    }
  
    const clientDeleted = async (client: Client) => {
      await repo.delete(client)
      getAll()
    }
  
     const saveClient = async (client: Client) => {
      await repo.save(client)
      getAll()
    }
  
    const newClient = (client: Client) => {
      setClient(Client.voidClient())
      setVisible('form')
    }

    return {
        newClient,
        saveClient,
        clientDeleted,
        clientSelected,
        visible, 
        client,
        clients,
        setVisible
    }
}