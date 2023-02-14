import React from 'react'

interface ButtonProps {
  color?: 'green' | 'blue' | 'gray'
  children: any
  className?: string
}

const Button = ({ children, color, className }: ButtonProps) => {

  const defaultColor = color ?? 'gray'

  return (
    <button className={`
      bg-gradient-to-r from-${defaultColor}-600 to to-${defaultColor}-800
      text-white px-4 py-2
      rounded-md
      ${className}
    `}>

      {children}
    </button>
  )
}

export default Button