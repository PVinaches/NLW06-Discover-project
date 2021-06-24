// Importar express
const express = require('express');

// Importar o arquivo de routes
const route = require('./route');

// Importar o módulo path
const path = require('path');

// Executar o express
const server = express();

// Executar as routes
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

// Midware
server.use(express.urlencoded({extended: true}))
server.use(route);

// Chamada à pasta public
server.use(express.static("public"));

// Iniciar o servidor na porta desejada
server.listen(3000, () => console.log('RODANDO'));