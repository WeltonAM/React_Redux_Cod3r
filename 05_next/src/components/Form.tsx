import React, { useState } from 'react'
import Client from '../core/Client'
import Button from './Button'
import Input from './Input'

interface FormProps {
  client: Client
  changeClient?: (client: Client) => void
  canceled?: () => void
  
}

const Form = ({ client, canceled, changeClient }: FormProps) => {

  const id = client?.id

  const [name, setName] = useState(client?.name ?? '')
  const [age, setAge] = useState(client?.age ?? 0)

  return (
    <div>
      {id ? (
        <Input text="Code" value={id} readonly className="mb-5" />
      ) : false}

      <Input text="Name" value={name} changeValue={setName} className="mb-5" />

      <Input text="Age" value={age} type='number' changeValue={setAge} />

      <div className='flex justify-end mt-5'>
        <Button onClick={() => changeClient?.(new Client(name, age, id))} color='blue' className='mr-2' >{id ? 'Update' : 'Save'}</Button>
        
        <Button color='gray' onClick={canceled}>Cancel</Button>
      </div>
    </div>
  )
}

export default Form