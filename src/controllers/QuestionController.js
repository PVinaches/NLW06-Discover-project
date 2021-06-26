// Importar config da base de dados
const Database = require('../db/config')

module.exports = {
    // Obter os diferentes parametros para obter a url
    async index(req, res){

        const db = await Database()

        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.action
        const password = req.body.password
        console.log(password)

        // Verificar se a senha está correta
        const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`)
        console.log(verifyRoom.pass)
        if(verifyRoom.pass == password){
            // Deletar a question
            if(action == "delete"){
                await db.run(`DELETE FROM questions WHERE id = ${questionId}`)

            }else if(action == "check"){
                await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`)

            }

            res.redirect(`/room/${roomId}`)
        }else{
            // Renderizar página de error
            res.render('numberincorrect', {roomId: roomId, option: false})
        }

        
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