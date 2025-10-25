const express = require('express')
const cors = require('cors')
require('dotenv').config()
const routes = require('./router')
require('./dbConnection')
const projectServer  = express()
projectServer.use(cors())
projectServer.use(express.json())
projectServer.use(routes)
const PORT = process.env.PORT || 3000
projectServer.listen(PORT,()=>{
    console.log("Server is running at",3000);
    
})