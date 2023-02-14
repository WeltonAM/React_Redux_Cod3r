import React from 'react'
import Client from '../core/Client'
import { EditIcon, TrashIcon } from './Icons'

interface TableProps {
    clients: Client[]
    clientSelected?: (client: Client) => void
    clientDeleted?: (client: Client) => void
}

function Table({ clients, clientDeleted, clientSelected }: TableProps) {

    const showActions = clientDeleted || clientSelected

    const renderHeader = () => {
        return (
            <tr>
                <th className='p-4 text-left'>Code</th>
                <th className='p-4 text-left'>Name</th>
                <th className='p-4 text-left'>Age</th>
                {showActions ? <th className='p-4'>Actions</th> : false}
            </tr>
        )
    }

    const renderData = () => {
        return clients?.map((client, i) => {
            return (
                <tr key={client.id}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
                `}>
                    <td className='p-4 text-left'>{client.id}</td>
                    <td className='p-4 text-left'>{client.name}</td>
                    <td className='p-4 text-left'>{client.age}</td>
                    {showActions ? renderActions(client) : false}
                </tr>
            )
        })
    }

    const renderActions = (client: Client) => {
        return (
            <td className='flex justify-center'>
                {clientSelected ? (
                    <button 
                        onClick={() => clientSelected?.(client)}
                        className={`
                            flex justify-center items-center
                            text-green-600 rounded-full
                            p-2 m-1
                            hover:bg-purple-50
                        `}>
                        {EditIcon()}
                    </button>
                ) : false}

                {clientDeleted ? (
                    <button 
                        onClick={() => clientDeleted?.(client)}
                        className={`
                            flex justify-center items-center
                            text-red-500 rounded-full
                            p-2 m-1
                            hover:bg-purple-50
                        `}>
                        {TrashIcon()}
                    </button>
                ) : false}
            </td>
        )
    }


    return (
        <table className='w-full overflow-hidden rounded-xl'>
            <thead className={`
             text-gray-100
                bg-gradient-to-l from-purple-500 to bg-purple-800
            `}>
                {renderHeader()}
            </thead>

            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}

export default Table