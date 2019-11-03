'use strict'

const mongoose = require('mongoose'); //llamado del modulo mongoose

const Schema = mongoose.Schema; //creador de plantilla de modelo mongoose

const cancionesSchema = new Schema({

    titulo: {
        type:String
    },
    artista:{
        type: String
    },
    duracion:{
        type: String
    },
    genero:{
        type:String
    },
    album:{
        type: String
    },
    src:{
        type: String
    }
});

//exportacion del esquema
module.exports = mongoose.model('canciones', cancionesSchema)