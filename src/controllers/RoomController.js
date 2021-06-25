// Importar a base de dados
const Database = require('../db/config')

module.exports = {
    async create(req, res){
        // Chamar a base de dados
        const db = await Database()

        const pass = req.body.password

        let roomId
        let isRoom = true
        while(isRoom){
            // Gerar o código de 6 números aleatorios
            for(var i = 0; i < 6; i++){
                i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
                roomId += Math.floor(Math.random() * 10).toString()    
            }            
        
            // Comprovar que é novo e único na base de dados
            const roomsExistIds = await db.all(`SELECT id FROM rooms`)
            isRoom = roomsExistIds.some(roomsExistIds => roomsExistIds === roomId)

            if(!isRoom){
                // Inserir na base de dados
                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                ) VALUES (
                    ${parseInt(roomId)},
                    ${pass}
                )`)
            }
        }

        await db.close()
        
        // Acessar a sala
        res.redirect(`/room/${roomId}`)
        
    },

    // Abrir sala com o número de sala desejado
    async open(req, res){
        const db = await Database()

        // Obter número de sala
        const roomId = req.params.roomId

        // Obter as perguntas da sala do banco de dados        
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)

        // Renderizar a página
        res.render("room", {roomId: roomId, questions: questions, questionsRead: questionsRead})
    }
}