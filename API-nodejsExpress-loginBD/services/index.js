// libreria que hay que instalar para crear el token
const jwt = require('jwt-simple')

// libreria que ayuda con las fechas hay que instalarla
const moment = require('moment')

const config = require('../config')

function createToken(user) {
    const payload = {
        // sub se pone el id del usuario
        // para que fuera una api mas segura este id no dbeeria de ser el de mongo db
        // pero en el tutorial lo ponen igual para reducir la complejidad delt tutorial
        sub: user._id,
        // momento creado token, la libreria con esta funcion
        // da la fecha actual en formato unix
        iat: moment().unix(),
        // momento expiacion token con moment con la siguiente funcion hago que caduque en 14 dias
        exp: moment().add(14, 'days').unix,
    }

    return jwt.encode(payload, config.SECRET_TOKEN)
}

module.exports = { createToken }