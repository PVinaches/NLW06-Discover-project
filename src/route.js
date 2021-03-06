// Importar express
const express = require('express')

// Importar controlador para pegar os valores
const QuestionController = require('./controllers/QuestionController')

// Importar controlador para criar a sala nova
const RoomController = require('./controllers/RoomController')

// Salvar o Router
const route = express.Router()

// Indicar as páginas a renderizar
route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))
route.get('/room/:roomId', RoomController.open)

// Criar uma nova sala
route.post('/create-room', RoomController.create)

// Entrar na sala
route.post('/enterroom', RoomController.enter)

// Criar questions
route.post('/question/create/:room', QuestionController.create)

// Formato que o formulario da modal tem que passar os dados
route.post('/question/:room/:question/:action', QuestionController.index)




module.exports = route