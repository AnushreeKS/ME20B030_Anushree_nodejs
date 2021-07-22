const mongoose = require("mongoose");

const { Schema } = mongoose;

const productsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    id:{
        type: Number,
        required: true
    }
})

module.exports = productsSchema;