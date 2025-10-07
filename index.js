
const app = require('./src/app/app.js')
const { dbConnection } = require('./src/database/conexion.js')
const port = 3000


dbConnection()

//levantar el server
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})
