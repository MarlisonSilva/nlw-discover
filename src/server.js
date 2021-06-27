//Imports
const express = require('express')
const route = require('./route')
const path = require('path')

//Iniciando o express
const server = express()

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))
//Middleware
server.use(express.urlencoded({extended: true}))

server.use(route)
//=> arrowFunction
server.listen(3000, () => console.log('RODANDO') )