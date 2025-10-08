
const mongoose = require('mongoose')


const { Schema, model } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
},{
  timestamps: true
})

const User = model("User", userSchema) // ----> users

// modelo "Product" ---> products

module.exports = User