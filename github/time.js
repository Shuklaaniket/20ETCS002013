const express = require('express')
const axios = require("axios")
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.listen(968547,()=>{
    console.log("the server started at http://localhost:968547")
})

app.get("/",(req,res) => res.send("its working"))