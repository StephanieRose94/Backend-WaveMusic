'use strict'

//MODULOS NECESARIO
const express = require('express');
const router = express.Router(); //manejador de ruts
const Usuarios = require('../modelos/usuarios'); //modelo estrenos '../modelo/estrenosModelo'

//-------------------------------------------------------------------------
// CREATE - METODO: POST / AGREGAR ESTRENO
router.post('/',(req, res, next)=>{
    Usuarios.create(req.body)
    .then((usuarios)=>{
        res.send(usuarios);
    }).catch(next);
});
//-------------------------------------------------------------------------

/* metodo get general */
router.get('/',(req,res,next)=>{
    Usuarios.find((error, usuarios)=>{
        res.status(200).send({usuarios});
    });
});

/* METODO GET POR ID */
router.get('/:id',(req,res,next)=>{
    Usuarios.findById(req.param.id,(error, usuarios)=>{
        res.status(200).send({usuarios});
    });
});

//-------------------------------------------------------------------------
// UPDATE - METODO: PUT / ACTUALIZAR
router.put('/:id',(req,res,next)=>{
    Usuarios.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(()=>{
        Usuarios.findOne({_id: req.params.id})
        .then((usuarios)=>{
            res.send(usuarios);
        })
    }).catch(next);
});
//--------------------------------------------------------------------------------
// DELETE - NETODO: DELETE / ELIMINAR
router.delete('/:id',(req,res,next)=>{
    Usuarios.findOneAndRemove({_id: req.params.id})
    .then((usuarios)=>{
        res.send(usuarios)
    }).catch(next);
});

module.exports = router


