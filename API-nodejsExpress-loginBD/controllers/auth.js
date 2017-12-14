const mongoose = require('mongoose')
const User = require('../models/user')
const service = require('../services')

function signUp(req, res) {
    const user = new User({
        email: req.body.email,
        name: req.body.name,
        // el password es lo que se crea con la funcion ddel model user
        // el last login ya se creará cuando nos volvamos a loguear
    })

    user.save((err) => {
        if (err) res.status(500).send({ message: `Error al crear el usuario ${err}` })

        //else
        // llamo al servicio que crea el token, los sevicios son codigos que se utilizaran en mas de una libreria
        // y por eso se crean en un fichero a parte
        return res.status(200).send({ token: service.createToken(user) })
    })
}

function signIn(req, res) {

}