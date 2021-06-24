// Importar os modulos das bases de dados
const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

// Abrir a base de dados
module.exports = () => 
    open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database,
    })
