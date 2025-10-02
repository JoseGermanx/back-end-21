


const registerNewUser = (req, res) => {
    res.send("Acá estaremos creando un nuevo usuario")
}

const getUserDetails = (req, res) => {
    res.send("Acá estaremos obteniendo los datos de un usuario")
}

const updateUserData = (req, res) => {
    res.send("Acá estaremos actualizando los datos de un usuario")
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