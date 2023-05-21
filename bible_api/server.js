const express = require('express')
const cors = require('cors')
const server = express()
const router = require('./server/router')

server.use(cors())
server.use(express.json())
server.use('/api/', router)
server.listen(5000, () => {
    console.log('--server running--')
})