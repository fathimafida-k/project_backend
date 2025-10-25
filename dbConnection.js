const mongoose = require('mongoose')
const connection_string = process.env.connection_string
mongoose.connect(connection_string).then(res=>{
    console.log("Connected to the db successfully");
    
}).catch(err=>{
    console.log("failed to make a connection");
    
})