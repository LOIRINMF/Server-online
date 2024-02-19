// Node js

Incina JS pro cumpador.

!!VIDEO UM BEM ANTIGO ENTAO ESSE MODO AQUI E ANTIGO, (TALVEZ NÃO USER MAIS...)!!

const servidor = require("express")

const server = servidor()

// ROTA 01
server.get('/pao', (resquest,response) => {

    console.log(resquest.query.usario)
    return response.send("aoba meu amigo")
} )

// ROTA 02
server.get('/ovo' , (resquest,response) => {

    console.log(resquest.query.usario)
    return response.send("Gosta de ovo mole?")
})


server.listen(3000)

// !!VIDEO DOIS COM UM NOVO MODO DE CHAMAR O ESPRESS!!
