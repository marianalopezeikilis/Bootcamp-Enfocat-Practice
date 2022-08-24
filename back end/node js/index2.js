import express from 'express';
import MOTOS from './motos.js';


const port = 3000;

const app = express()


app.get('/motos', function (req, res) {
    res.json(MOTOS)
  })

  app.get('/motos/:marca', function (req, res) {
    let marca_buscada = req.params.marca;
    let motos_marca = MOTOS.filter(e => e.marca==marca_buscada)
    res.json(motos_marca)
  })




app.listen(port, function () {
  console.log('Escuchando en puerto '+port)
})