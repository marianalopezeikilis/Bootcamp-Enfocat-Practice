// importem llibreries utilitzades
import express from 'express';
import cors from 'cors';

// carreguem array de motos definit a motos.js
import CITAS from './server.js';

// definim port on e'executarà el servidor
const PORT = 5001;

//np creem express app
const app = express();

// activem cors per no tenir problemes des del front
app.use(cors());

// definim public com a ruta per axius estàtics
app.use(express.static('public'))

// ruta /motos retorna tota la llista

app.get('/api/todascitas', function (req, res) {
     res.json(CITAS)
 })



 app.get('/api/citasrandom', function (req, res) {
    let numcita = Math.floor(Math.random()*4);
   let cita_mostrada = CITAS[numcita];
    // let cita_mostrada = CITAS.filter((e,i)=> i==numcita);
    res.json(cita_mostrada);

    
})

 // ruta /motos/honda retorna només les honda
// app.get('/motos/:marca', function (req, res) {
//     let marca_buscada = req.params.marca;
//     let motos_marca = MOTOS.filter(e => e.marca == marca_buscada)
//     res.json(motos_marca)
// })



// iniciem el servidor al port indicat
app.listen(PORT, function () {
    console.log('Escoltant port ' + PORT)
})
