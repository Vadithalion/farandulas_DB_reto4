const express = require('express');
const router = express.Router();
const { Actores } =require('../models/index.js')

router.get('/',(req,res)=>{
    Actores.findAll({
    })
    .then(orders => res.send(orders))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar los Actores'})
    })
})


router.get('/:id',(req,res)=>{
    Actores.findOne({
        where:{id:rec.params.id}      
    })
    .then(orders => res.send(orders))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar el actor'})
    })
})

router.get('/name/:name',(req,res) =>{
    Actores.findOne({
        where:{
            nombre:req.params.name
        }
    })
    .then(product => res.send(product))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al buscar el actor'})
    })
})


module.exports=router;
