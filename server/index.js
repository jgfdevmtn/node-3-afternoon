const express = require('express')
const { json } = require('body-parser')
const session = require('express-session')
require('dotenv').config()
const checkForSession = require './middlewares/checkForSession'

// controllers
const swag_controller = require('./controllers/swag_controller')
const auth_controller = require('./controllers/auth_controller')
const cart_controller = require('./controllers/cart_controller')


const app = express()

app.use(json())

app.use( session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true
}))

app.use(checkForSesssion)

app.get( '/api/swag', swag_controller.read );

app.post( '/api/login', auth_controller.login)
app.post( 'api/register', auth_controller.register)
app.post( '/api/signout', auth_controller.signout)
app.get( '/api/user', auth_controller.getUser )

const port = process.env.PORT || 3000

app.listen(port, () => { console.log('Listening on port: ' + port)})


