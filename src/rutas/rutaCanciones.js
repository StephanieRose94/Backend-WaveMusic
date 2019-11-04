//CRUD Estrenos
'use strict'

//MODULOS NECESARIO
const express = require('express');
const router = express.Router(); //manejador de ruts
const Canciones = require('../modelos/canciones'); //modelo estrenos '../modelo/estrenosModelo'

//-------------------------------------------------------------------------
// CREATE - METODO: POST / AGREGAR ESTRENO
router.post('/',(req, res, next)=>{
    Canciones.create(req.body)
    .then((canciones)=>{
        res.send(canciones);
    }).catch(next);
});
//-------------------------------------------------------------------------
// READ - METODO: GET / CONSULTAR

/* metodo get general */
router.get('/',(req,res,next)=>{
    Canciones.find((error, canciones)=>{
        res.status(200).send({canciones});
    });
});

/* METODO GET POR ID */
router.get('/:id',(req,res,next)=>{
    Canciones.findById(req.param.id,(error, canciones)=>{
        res.status(200).send({canciones});
    });
});

/* METODO GET POR Genero GENERO*/
router.get('/genero/:gen',(req,res,next)=>{

    Canciones.find({ genero: req.params.gen })
            .then((bikes) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(bikes);
            }, (err) => next(err))
            .catch((err) => next(err));
});

/* METODO GET POR Genero TITULO*/
router.get('/titulo/:titulo',(req,res,next)=>{

    Canciones.find({ titulo: req.params.titulo })
            .then((bikes) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(bikes);
            }, (err) => next(err))
            .catch((err) => next(err));
});

/* METODO GET POR Genero ARTISTA*/
router.get('/artista/:artista',(req,res,next)=>{

    Canciones.find({ artista: req.params.artista })
            .then((bikes) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(bikes);
            }, (err) => next(err))
            .catch((err) => next(err));
});


//-------------------------------------------------------------------------
// UPDATE - METODO: PUT / ACTUALIZAR
router.put('/:id',(req,res,next)=>{
    Canciones.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(()=>{
        Canciones.findOne({_id: req.params.id})
        .then((canciones)=>{
            res.send(canciones);
        })
    }).catch(next);
});
//--------------------------------------------------------------------------------
// DELETE - NETODO: DELETE / ELIMINAR
router.delete('/:id',(req,res,next)=>{
    Canciones.findOneAndRemove({_id: req.params.id})
    .then((canciones)=>{
        res.send(canciones)
    }).catch(next);
});

module.exports = router


