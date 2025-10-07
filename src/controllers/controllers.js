

// req --> permite acceder a información que viene en la petición
// res --> gestionar las respuestas

// base de datos simulada (in memory)
let users = [] // array [{id: 1 ,name: "Jose", email:"email@email.com"},{ id: 2, name:"Alicia", email:"alicia@gmail.com"} ]


const registerNewUser = (req, res) => {
    console.log(req.body)
    // lógica para tomar los datos de req.body  -> guardarlos en la db

    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    }

    users.push(newUser) // guardar el nuevo usuario en la base de datos -- > 

    res.status(201).json({
        msg: "Usuario creado correctamente.",
        data: users
    })
}

const getUserDetails = (req, res) => {
    console.log(req.params.id)
    // utilizaremos el id para encontrar al usuario en la base datos

    const user = users.find((elem) => elem.id === parseInt(req.params.id))

    if(!user) {
        return res.status(404).json({
            msg: "Usuario no encontrado"
        })
    }


    res.status(200).json({
        msg: "Petición correcta!",
        data: user
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