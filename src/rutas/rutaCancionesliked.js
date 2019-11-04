//CRUD Estrenos
'use strict'

//MODULOS NECESARIO
const express = require('express');
const router = express.Router(); //manejador de ruts
const Cancionesliked = require('../modelos/cancionesliked'); //modelo estrenos '../modelo/estrenosModelo'

//-------------------------------------------------------------------------
// CREATE - METODO: POST / AGREGAR ESTRENO
router.post('/',(req, res, next)=>{
    Cancionesliked.create(req.body)
    .then((canciones)=>{
        res.send(canciones);
    }).catch(next);
});
//-------------------------------------------------------------------------
// READ - METODO: GET / CONSULTAR

/* metodo get general */
router.get('/',(req,res,next)=>{
    Cancionesliked.find((error, canciones)=>{
        res.status(200).send({canciones});
    });
});

/* METODO GET POR ID */
router.get('/:id',(req,res,next)=>{
    Cancionesliked.findById(req.param.id,(error, canciones)=>{
        res.status(200).send({canciones});
    });
});

/* METODO GET POR Genero GENERO*/
router.get('/genero/:gen',(req,res,next)=>{

    Cancionesliked.find({ genero: req.params.gen })
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
    Cancionesliked.findByIdAndUpdate({_id: req.params.id}, req.body)
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
    Cancionesliked.findOneAndRemove({_id: req.params.id})
    .then((canciones)=>{
        res.send(canciones)
    }).catch(next);
});

module.exports = router


