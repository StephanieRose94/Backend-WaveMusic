'use strict'

const mongoose = require('mongoose'); //llamado del modulo mongoose

const Schema = mongoose.Schema; //creador de plantilla de modelo mongoose

const usuariosSchema = new Schema({
    nombre: {
        type:String, required: true
    },
    edad:{
        type: Number, default: 15
    },
    password:{
        type: String, required : true
    },
    correo:{
        type:String
    },
    role: {
        type: String, default: "regular"
    },
    imagen: {
        type: String
    }

});

//exportacion del esquema
module.exports = mongoose.model('usuarios', usuariosSchema)