const router =require('express').Router();
const { Cines } =require('../models/index.js')

router.get('/',(req,res)=>{
    Cines.findAll({

    })
    .then(orders => res.send(orders))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar los Cines'})
    })
})


router.get('/:id',(req,res)=>{
    Cines.findOne({
        where:{id:rec.params.id}      
    })
    .then(orders => res.send(orders))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar los Cines'})
    })
})

router.get('/location/:location',(req,res) =>{
    cine.findOne({
        where:{
            provincia:req.params.location
        }
    })
    .then(product => res.send(product))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al buscar el producto'})
    })
})

router.get('/franchise/:franchise',(req,res) =>{
    cine.findOne({
        where:{
            franquicia:req.params.franchise
        }
    })
    .then(product => res.send(product))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al buscar el producto'})
    })
})

module.exports=router;
