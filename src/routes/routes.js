const { registerNewUser, getUserDetails, updateUserData, deleteUser, loginUser } = require('../controllers/controllers')

const router = require('express').Router()

// API Rest
// rutas para acceder a servicios

router.get('/checkhealth', (req,res)=> {
    res.send("Todo ok!")
})

// /user (POST) --> Crear un nuevo usuario
router.post('/user', registerNewUser )

// /user (GET) --> Obtener los datos de un usuario
router.get('/user/:id', getUserDetails )

// /user (PUT) --> Actualzar los datos de un usuario
router.put('/user/:id', updateUserData )

// /user (DELETE) --> Actualzar los datos de un usuario
router.delete('/user/:id', deleteUser )

// /user (POST) --> lOGIN
router.post('/login', (req,res, next)=> {  
    console.log("Middleware intermedio antes de ejecutar el login")
    next()
}, loginUser )


module.exports = router