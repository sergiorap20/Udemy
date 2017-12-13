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


// los  delete  y get se tienen que pasar por url los parametros no por el body como con el post en nodejs al haberle puesto /api/product/:productId 
// para hacerlo la url seria localhost:3000/api/product/idquesea

// los  delete  y get se tienen que pasar por url los parametros no por el body como con el post al haberle puesto /api/product/:productId 
// para hacerlo la url seria localhost:3000/api/product/idquesea

// los  delete  y get se tienen que pasar por url los parametros no por el body como con el post al haberle puesto /api/product/:productId 
// para hacerlo la url seria localhost:3000/api/product/idquesea


//  -----EJEMPLOO------
// Añado a que urls queremos que este servidor escuche, necesitamos esto para indicar en que url entramos para que nos de esa respuesta
// por ejemplo aqui si entramos en ----localhost:3000/hola--- recibiremos un json mensaje : hola mas el parametro

//el /:parametro es como se añaden parametros por url, pero aquí en vez de poner ? se pone directamente
//  una / y el parametro que quieras, ej: aqui para entrar con un parametro seria ---localhost:3000/hola/parametroquequiera----
// app.get('/hola/:parametro', (requ, resp) => {
//         resp.send({ mensaje: `Hola ${requ.params.parametro}` })
//     })

// importo el controlador donde tengo todas las funciones
const product_controller = require("./controllers/product.js")

// El get lo utilizo para devolver datos, con la siguiente funcion devolvere todos los productos que hay en la bd
// devuelve directamente todos los productos porque creo que al haber exportado el model products con mongoose,
// al hacer el find sin pasarle parametros devuelve todos y como arriba he creado la variable Product que es un mongoose model Product
// directamente devuelve de la bd todo lo que coincide con este modelo

// NO LE TENGO QUE PASAR PARAMETROS A LAS FUNCIONES DEL CONTROLLER AUNQUE LO PIDAN YA QUE SE LLAMAN COMO UN CALLBACK
// DIRECTAMENTE CON LSO METODOS GET POST... ES DECIR AL EJECUTARSE YA ES COMO SI SE SUSTITUYERAN POR EL NOMBRE DE LA FUNCION
// CON LOS PARAMETROS CORRESPONDIENTES QUE SON LOS QUE LLEGAN CUANDO SE EJECUTA YA QUE HASTA QUE NO SE EJECUTA EL GET
// O LAS DEMAS PETICIONES LOS PARAMETROS QUE PIDEN LAS FUNCIONES CALLBACK NO EXISTEN
app.get("/api/products", product_controller.getProducts);

// Aqui devuelvo solo el producto que coincida con el id del parametro que le paso
app.get("/api/product/:productId", product_controller.getProduct);

app.post("/api/product", product_controller.saveProduct);

app.put('/api/product/:productId', product_controller.updateProduct);

// los json delete  put y get se tienen que pasar por url los parametros no por el body como con el post
app.delete('/api/product/:productId', product_controller.deleteProduct);

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