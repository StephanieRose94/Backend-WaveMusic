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


