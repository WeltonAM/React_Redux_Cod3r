const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    const init = Date.now()
    next()
    console.log(`Time = ${Date.now() - init} ms.`)
})

router.get('/products/:id', (req, res) => {
    res.json({ id: req.params.id, name: 'Pen' })
})

router.get('/clients/:id', (req, res) => {
    res.json({ id: req.params.id, client: 'Juliana' })
})

module.exports = router