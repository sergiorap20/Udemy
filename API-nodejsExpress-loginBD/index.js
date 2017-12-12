// 'use strict'

// EN EL JSON PACKAGE.JSON EN SCRIPTS LO COMENTO AQUI YA QUE COMENTANDO EL PACKAGE.JSON DA ERRROR
// añado el start para hacer que cuando hago npm start (con esto ejecuto el servidor con npm start en vez de con node index.js
// ya que node index.js lo que hacia era ejectutarme el archivo index.js y en el archivo es donde está el codigo para montar el servidor express
// ahora el index.js lo ejecuto haciendo un script en el json que haga el codigo nodemon index.js que tmb ejecuta el fichero index.jspero ahora con nodemon)
// el servidor el index.js se ejecute con la libreria nodemon
// que sirve para no tener que reiniciar el serv cada vez que hago cambios
// hay que instalarla a parte tmb

// importo express en una variable
const express = require("express");
// importo el modelo product que he creado en models
const Product = require("./models/product");
// importo bodyParser que es una libreria que se usa en express
// paracontrolar mejor las peticiones http,etc se tiene que instalar
// a parte con npm
const bodyParser = require("body-parser");

// installo mongoose con el npm que sirve para poder conectarse a mongodb, no es el oficial pero en el tutorial que vi usaban este
const mongoose = require("mongoose");
// creo una variable y le doy la funcionalidad express
const app = express();

// creo la variable de puerto del servidor
// que le da el puerto inciial o si no 3000 o algo así
const port = process.env.PORT || 3000;

conectarDB();
iniciarServidor();

//  -----EJEMPLOO------
// Añado a que urls queremos que este servidor escuche, necesitamos esto para indicar en que url entramos para que nos de esa respuesta
// por ejemplo aqui si entramos en ----localhost:3000/hola--- recibiremos un json mensaje : hola mas el parametro

//el /:parametro es como se añaden parametros por url, pero aquí en vez de poner ? se pone directamente
//  una / y el parametro que quieras, ej: aqui para entrar con un parametro seria ---localhost:3000/hola/parametroquequiera----
// app.get('/hola/:parametro', (requ, resp) => {
//         resp.send({ mensaje: `Hola ${requ.params.parametro}` })
//     })

// El get lo utilizo para devolver datos, el 200 es el codigo de todo correcto que envio con la respuesta
app.get("/api/product", (req, res) => {
    res.status(200).body({ products: [] });
});

app.get("/api/product/:productId", (req, res) => {});

// El post lo utilizo cuando paso parametros importantes desde el cliente y que iran en el cuerpo de la peticion
// para acceder a estos datos utilizo el req.body, que es del bodyparser que he instalado al principio
// poniendo el console.log(req.body) si hago una peticion con postman, el cliente recibe el producto se ha recibido
// y aqui enel servidor veré los parámetros que le he pasado con la petición del cliente
// EJEMPLO
// app.post('/api/product', (req, res) => {
//     console.log(req.body)
//     res.status(200).send({ message: 'El producto se ha recibido' })
// })

app.post("/api/product", (req, res) => {
    // el product es el modelo que he creado y obligará
    // a tener el formato que le he dado en el model
    // es parecido a una interfaz de java
    let product = new Product();
    // relleno cada campo el product con los parametros
    // que me vienen en el body de la peticion post
    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    // el category tiene qeu ser uno de los 3 valores
    // que le he dado en el model, si no no funcionará
    product.category = req.body.category;
    product.description = req.body.description;

    // es la funcion para guardar el producto en la bd
    product.save((err, productoGuardado) => {
        // como elif es de una linea lo puedo hacer asi
        if (err)
            res.status(500).send({ message: `Error al guardar los datos: ${err}` });

        // esto de abajo es el else pero al ser de una linea no hace falta poner el else
        res.status(200).send({ product: productoGuardado });
    })
})

app.put('/api/product/:productId', (req, res) => {});

app.delete('/api/product/:productId', (req, res) => {});

function conectarDB() {
    // CONEXION A LA BD CON MONGOOSE pongo_promise porque es una promesa
    var mongoDB_promise = mongoose.connect("mongodb://localhost:27017/shop", {
        useMongoClient: true
    });

    // Get Mongoose to use the global promise library
    mongoose.Promise = global.Promise;
    //Get the default connection
    var db = mongoose.connection;

    //Bind connection to error event (to get notification of connection errors)
    db.on("error", console.error.bind(console, "MongoDB connection error:"));

    // mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    //     if (err) { throw err } else {
    //         console.log('Conexion a la base de datos establecida')
    //     }
    //     //como son solo 2 lineas este if else seria equivalente a
    //     // if(err) throw err
    //     // console.log('Conexion a la base de datos establecida')
}

function iniciarServidor() {
    // configuro bodyparser en la variable app
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // inciio el servidor express , le doy el puerto 3000 y lo que quiero que haga cuando se ejecute
    app.listen(port, () => {
        console.log("API REST");
    });
}