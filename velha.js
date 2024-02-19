import express, { response } from "express"
import { request } from "http"

const app = express()

const users = []

app.get("/users", (request,response)  => {

    return response.json({users})
})


app.post("/users", (request,response) => {


    console.log(request)
    return response.json({ ok: true})

})

app.listen(3000)