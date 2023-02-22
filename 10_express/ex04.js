const express = require('express')
const server = express()

server.route('/clients')
    .get((req, res) => res.send('Clients list'))
    .post((req, res) => res.send('New client'))
    .put((req, res) => res.send('Alter client'))
    .delete((req, res) => res.send('Client removed'))

server.listen(3000, () => {
    console.log('Executing BackEnd...')
})