// Importar config da base de dados
const Database = require('./config')

// Iniciar tabelas
const initDb = {
    async init(){
        const db = await Database()

        // Criar tabela de rooms
        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        // Criar tabela de questions
        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            read INT
        )`);

        await db.close()
    }
}

initDb.init();