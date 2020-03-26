const express = require('express');
const app = express();
const PORT = 3000;
const PeliculasRouter = require('./routes/Peliculas.js');
const ActoresRouter = require('./routes/Actores.js');
const CinesRouter = require('./routes/Cines.js');

app.use(express.json());

app.use('/Actores', ActoresRouter);
app.use('/Peliculas', PeliculasRouter);
app.use('/Cines', CinesRouter);

app.listen(PORT, () => console.log('server running on port ' + PORT));