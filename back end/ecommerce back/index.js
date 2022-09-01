import express from "express";
import indexRouter from "./rutas/indexRouter.js";
import articuloRouter from './rutas/articuloRouter.js';
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());


app.use('/', indexRouter);
 app.use('/api/articulos', articuloRouter);


const port = 3000
app.listen(port, () => console.log(`App listening on port ${port}!`))
