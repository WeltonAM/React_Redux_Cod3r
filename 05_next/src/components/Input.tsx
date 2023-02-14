import React from 'react'

interface InputProps {
    text: string
    type?: 'text' | 'number'
    value: any
    readonly?: boolean
}

const Input = ({ text, type, value, readonly }: InputProps) => {
  return (
    <div className='flex flex-col'>
        <label className='mb-3'>{text}</label>
        
        <input 
            type={type ?? 'text'}
            value={value}
            readOnly={readonly}
            className={`
                border border-purple-500 rounded-lg
                focus:outline-none bg-gray-50
                px-4 py-2 
            `}
        />
    </div>
  )
}

export default Input