const router =require('express').Router();
const { Cines } =require('../models/index.js')

router.get('/',(req,res)=>{
    Peliculas.findAll({

    })
    .then(orders => res.send(orders))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar las Peliculas'})
    })
})


router.get('/:id',(req,res)=>{
    Peliculas.findOne({
        where:{id:rec.params.id}      
    })
    .then(orders => res.send(orders))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar las Peliculas'})
    })
})

router.get('/title/:title',(req,res) =>{
    Pelicula.findOne({
        where:{
            titulo:req.params.title
        }
    })
    .then(product => res.send(product))
    .catch(err=>{
        console.log(err)
        res.status(500).send({message:'Ha habido un problema al buscar la pelicula'})
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
