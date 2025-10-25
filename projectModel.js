const mongoose = require('mongoose')
const projectSchema = new mongoose.Schema({
    projectName:{
        type:String,
        required:true
    },
      projectManager:{
        type:String,
        required:true
    },
    github:{
      type:String,
        required:true
    },
    teamMembers:{
       type:Array,
        required:true 
    },
    startDate:{
       type:Date,
        required:true 
    },
        endDate:{
       type:Date,
        required:true 
    },
        status:{
       type:String,
        required:true 
    },
        budget:{
       type:Number,
        required:true 
    }
})
const projectDetail = mongoose.model("projectDetail",projectSchema)
module.exports = projectDetail