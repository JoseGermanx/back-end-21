// export --> import ( ECMS6 )   __> 2015
// module.export  ->> require ( CommonJS )  ->> manejo en NODEJS por default
const morgan = require('morgan')
const express = require('express')
const router = require('../routes/routes') // importanción del módulo ( CommonJS )
const app = express()

// middleware --> en el medio de algún lugar
// middlewares en express
// middleware --> propios
// middleware --> personalizado
// middleware --> terceros (librerias)

app.use(morgan('dev')) // --> como un middleware de terceros
app.use(express.json()) // --> Parsea el body a json

app.use((req,res, next)=> {  // --> middleware personalizado
    console.log("Ingresando al middleware personalizado")
    next()
})

app.use('/', router) // -- middleware propio


module.exports = app
