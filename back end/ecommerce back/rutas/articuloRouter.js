import express from 'express';
import { DataTypes } from "sequelize";
import sequelize from "../loadSequelize.js";


const Articulo = sequelize.define('Articulo', {

    nombre: DataTypes.STRING, precio: DataTypes.INTEGER
}, { tableName: 'articulos', timestamps: false });



const router = express.Router();

// GET lista de todos los alumnes
// vinculamos la ruta /api/alumnes a la función declarada
// si todo ok devolveremos un objeto tipo:
//     {ok: true, data: [lista_de_objetos_alumne...]}
// si se produce un error:
//     {ok: false, error: mensaje_de_error}

router.get('/', function (req, res, next) {

    sequelize.sync().then(() => {
        Articulo.findAll()
            .then(articulo => res.json({
                ok: true,
                data:   articulo
            }))
            .catch(error => res.json({
                ok: false,
                error: error
            }))
    }).catch((error) => {
        res.json({
            ok: false,
            error: error
        })
    });

});

export default articuloRouter;
