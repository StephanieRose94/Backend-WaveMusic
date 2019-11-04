'use strict' //Necesario para especificar EMAC Script6

const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    canciones = require('./rutas/rutaCanciones'),
    usuarios = require('./rutas/rutaUsuarios'),
    cancionesliked = require('./rutas/rutaCancionesliked'),
    /* cors = require('cors'), */

    app = express(),
    PORT = 3000,
    BD = 'wave'

// mongoose.connect('mongodb://localhost:27017', {
//     dbName: BD,
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// }).then(() => {
//     console.log(`Pudimos ingresar a la base de datos <<${BD}>> con exito!!`)
// }).catch((err) => {
//     console.log(`No hay conexion:${err}`)
// })  

var dev_db_url = 'mongodb://admin:12345@localhost:27017/wave?authSource=admin';
mongoose.connect(dev_db_url);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



 //Cors
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow', 'GET, PUT, POST, DELETE, OPTIONS');
    next();
})


// ----- CONEXION A LA BD LINUX ------------------------------
//Observacion: para esta version es necesario pasarle esos parametros useNewUrlParser y useUnifiedTopology
/* mongoose.connect("mongodb://localhost:27017/peliculas", { useNewUrlParser: true, useUnifiedTopology: true }) //conexion si no esta la db mongo la crea
    // ------ PROMESAS -------------------------------------
    .then(db => console.log('DB connected')) //Si se conecta
    .catch(err => console.log(err)); //Si falla la conexion

    app.set('port', process.env.PORT || 3030)
 */

// ------------CONFIGURACION PARA POSTMAN DE RUTAS-------------------------------------------
app.use(bodyParser.json()); 
app.use('/api/canciones', canciones);
app.use('/api/usuarios', usuarios);
app.use('/api/cancionesliked', cancionesliked);

//----------------------------------------------------------------------------------

/* app.use(cors({origin: 'http://localhost:4200'})) */

app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message }) //422 errores de semantica
});

//starting the server on LINUX
/* app.listen(app.get('port'), () => { //app.listen(puerto , ()=>{Mensaje a mostrar})
    console.log(`Server on port ${app.get('port')}`)
}); */
//----------------------------------------------------------------------------------
 
app.listen(PORT, () => {
    console.log(`Cuidado estamos usando el Puerto ${PORT}`)
})  
