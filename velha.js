const servidor = require("express")
const { resquest } = require("http")

const server = servidor()

// ROTA 01
server.get('/pao', (resquest,response) => {

    console.log(resquest.query.usario)
    return response.send("aoba meu amigo")
} )

// ROTA 02
server.get('/ovo' , (resquest,response) => {

    return response.send("Gosta de ovo mole?")
})


server.listen(3000)