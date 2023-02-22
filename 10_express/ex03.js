const express = require('express')
const server = express()

server.use('/api', (req, res, next) => {
    console.log('Start...')
    next()
    console.log('End...')
})

server.use('/api', (req, res) => {
    console.log('Answer...')
    res.send("<h1>API!</h1>")
})

server.listen(3000, () => {
    console.log('Executing BackEnd...')
})