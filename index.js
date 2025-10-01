
const express = require('express')
const app = express()
const port = 3000


// ruta en la raíz /
// app.get('',)

app.get('/hello', (req, res) => {
    console.log("Recibiendo la petición")
    let suma = 4 + 5
    res.send(`Resultado de la suma es: ${suma}` )

})

app.post('/user', (req, res)=>{
    // lógica para crear el usuario
     //

    res.status(201).json({
        msg: "Usuario creado con éxito"
    })
})

//levantar el server
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})
