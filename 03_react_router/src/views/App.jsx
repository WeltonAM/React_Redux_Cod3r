import React from 'react'
import Content from '../components/layouts/Content'
import Menu from '../components/layouts/Menu'
import './App.css'
import { BrowserRouter } from  'react-router-dom'

const App = () => {
    return (
        <div className='app'>
            <BrowserRouter>
                <Menu />

                <Content />
            </BrowserRouter>
        </div>
    )
}

export default App