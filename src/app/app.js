
// export --> import ( ECMS6 )   __> 2015

// module.export  ->> require ( CommonJS )  ->> manejo en NODEJS por default

const express = require('express')
const router = require('../routes/routes') // importanción del módulo ( CommonJS )
const app = express()


app.use('/', router)




module.exports = app
