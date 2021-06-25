// Importar config da base de dados
const Database = require('../db/config')

module.exports = {
    // Obter os diferentes parametros para obter a url
    index(req, res){
        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.action
        const password = req.body.password

        res.redirect(`/room/${roomId}`)
    },

    async create(req, res){
        const db = await Database()

        // Obter a question e o número de sala
        const question = req.body.question
        const roomId = req.params.room

        // Inserir os dados
        await db.run(`INSERT INTO questions(
            title,
            room,
            read
        )VALUES(
            "${question}",
            ${roomId},
            0
        )`)

        res.redirect(`/room/${roomId}`)


        
    }
}