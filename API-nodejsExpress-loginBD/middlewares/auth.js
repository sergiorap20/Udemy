// libreria que hay que instalar para crear el token
const jwt = require('jwt-simple')

// libreria que ayuda con las fechas hay que instalarla
const moment = require('moment')

const config = require('../config')

function isAuth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'No tienes autorizacion' })
    } else {
        // cojo el token haciendo un split que lo que hace es coger el string
        // y convertirlo en array separando el array por el caracter que le paso en el split
        // en este caso cada vez que haya un espacio creara una posicion del array
        // como el header authorization tiene 2 partes así bearer tokenquesea
        // el token estara en la posicion [1] del array y es lo que meto en la variable token
        const token = req.headers.authorization.split(" ")[1]

        //creo un payload que es la decodificaicon de ese token
        //le paso como param el token recibido y el secret token que tengo
        //almacenado en el servidor para decoficarlo el token al decodificarlo ya trae el payload.exp 
        const payload = jwt.decode(token, config.SECRET_TOKEN)

        //compruebo que el token no este caducado
        // si la fecha de expiacion es menor o igual que la fecha actual significara 
        // que el token ha caducado
        if (payload.exp <= moment().unix()) {
            return res.status(401).send({ message: 'El token ha expirado' })
        }

        // antes de pasar al siguiente middelware hago que el usuario
        // que viene en el request , que sera el parametro usuario que me pase
        // el cliente por parametro sea igual al id de usuario del payloadsub
        req.user = payload.sub
            // el next del isAuth hace que si llega al next se ejecute la funcion callback que viene despues d eel ,
            // que en este caso seria la de res.status tienes acceso
        next()
    }
}

// las funciones callback hay que exportarlas con {} para que no de error
module.exports = { isAuth }