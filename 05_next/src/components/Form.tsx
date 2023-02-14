import React from 'react'
import Input from './Input'

interface FormProps {

}

const Form = ({}: FormProps) => {
  return (
    <div>
        <Input text="Name" value="Test" />
    </div>
  )
}

export default Form