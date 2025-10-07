
const mongoose = require("mongoose")

const dbConnection = async () => {

    try { //intentar hacer 
        await mongoose.connect("mongodb://localhost:27017/users_cohor21") // código asincrónico
        console.log("Servidor de base de datos ejecuntado correctamente!")
    } catch (error) {
        console.log(error)
    }
}


module.exports = { dbConnection }