const express = require('express')
const server = express()
const routes = require('./ex05_routes.js')

server.use('/api', routes)

server.listen(3000, () => {
    console.log('Executing BackEnd...')
})