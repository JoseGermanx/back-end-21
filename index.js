
const app = require('./src/app/app.js')
const port = 3000


//levantar el server
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})
