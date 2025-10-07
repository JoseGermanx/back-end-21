
const mongoose = require("mongoose")

const dbConnection = () => {

mongoose.connect("mongodb://localhost:27017/users_cohor21") // código asincrónico

}


module.exports = { dbConnection }