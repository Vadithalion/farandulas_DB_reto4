# farandulas DataBase Reto4🚀


### Código a destacar
```
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
``` 
En este código (enspoint) se consulta la tabla en concreto de Actores, y se busca por su ID



### Instalación 🔧

previamente han de ser instaladas las siguientes dependencias

-  "express": "^4.17.1",
-   "mysql2": "^2.1.0",
-   "sequelize": "^5.21.5"


## Construido con 🛠️

* [JS] - Funciones y consulta a la appi de películas
* [Express] - Framework utilizado para crear la API de la consulta
* [Sequelize] - ORM utilizado para interactuazr con MySQL




## Autores ✒️

* **Iñigo Vadillo Ruiz** -  - [Vadithalion (github)](https://github.com/Vadithalion)