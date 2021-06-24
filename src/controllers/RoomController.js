// Importar a base de dados
const Database = require('../db/config')

module.exports = {
    async create(req, res){
        // Chamar a base de dados
        const db = await Database()

        const pass = req.body.password

        let roomId

        // Gerar o código de 6 números aleatorios
        for(var i = 0; i < 6; i++){
            i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
            roomId += Math.floor(Math.random() * 10).toString()
        }

        // Inserir na base de dados
        await db.run(`INSERT INTO rooms (
            id,
            pass
        ) VALUES (
            ${parseInt(roomId)},
            ${pass}
        )`)

        await db.close()
        
        // Acessar a sala
        res.redirect(`/room/${roomId}`)
        
    }
}