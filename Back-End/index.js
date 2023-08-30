const express=require("express")
require("dotenv").config()
const cors=require("cors")
const configDb = require("./configDb/configDb")
const usersCltr = require("./controllers.js/usrrsCltr")
const app=express()
app.use(express.json())
app.use(cors())
const Port=process.env.PORT || 3090


configDb()
app.post("/api/register",usersCltr.register)
app.get("/api/users",usersCltr.users)

app.listen(Port,()=>{
    console.log("server connected on port",Port)
})