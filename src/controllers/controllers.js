

// req --> permite acceder a información que viene en la petición
// res --> gestionar las respuestas

const registerNewUser = (req, res) => {
    console.log(req.body)
    // lógica para tomar los datos de req.body  -> guardarlos en la db
    res.status(201).json({
        msg: "Datos recibidos correctamente",
        data: {
            nombre: req.body.name,
            correo: req.body.email
        }
    })
}

const getUserDetails = (req, res) => {
    console.log(req.params.id)
    // utilizaremos el id para encontrar al usuario en la base datos
    res.status(200).json({
        msg: "Petición correcta!",
        data: {
            identificador: req.params.id
        }
    })
}

const updateUserData = (req, res) => {
    res.send("Acá estaremos actualizando los datos de un usuario!")
}

const deleteUser = (req, res) => {
    res.send("Acá estaremos eliminando los datos de un usuario")
}

const loginUser = (req, res) => {
    res.send("Acá estaremos haciendo el login del usuario")
}

module.exports = {
    registerNewUser,
    getUserDetails,
    updateUserData,
    deleteUser,
    loginUser }