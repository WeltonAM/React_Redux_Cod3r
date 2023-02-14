import { read } from 'fs'
import React from 'react'

interface InputProps {
    text: string
    type?: 'text' | 'number'
    value: any
    readonly?: boolean
    className?: string
    changeValue?: (value: any) => void
}

const Input = ({ className, text, type, value, readonly, changeValue }: InputProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
        <label className='mb-2'>{text}</label>
        
        <input 
            className={`
                border border-purple-500 rounded-lg
                focus:outline-none bg-gray-50
                px-4 py-2
                ${readonly ? '' : 'focus:bg-white'}
            `}
            type={type ?? 'text'}
            value={value}
            readOnly={readonly}
            onChange={(e) => changeValue?.(e.target.value)}
        />
    </div>
  )
}

export default Input