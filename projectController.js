const projectDetail = require('./projectModel')

exports.addProjectController=async(req,res)=>{
    console.log("inside the controller");
    
    console.log(req.body);
    
    const{projectName,projectManager,github,teamMembers,startDate,endDate,status,budget} = req.body

    try{
    const existingProject = await projectDetail.findOne({github})
    if(existingProject){
        res.status(406).json("Project Already added")
    }
    else{
        const newProject = new projectDetail({projectName,projectManager,github,teamMembers,startDate,endDate,status,budget})
        await newProject.save()
        res.status(200).json(newProject)
    }
    }
    catch(err){
        res.status(401).json(err)
    }

}
exports.getProjectController=async(req,res)=>{
    

    try{
    const getProject = await projectDetail.find()
    
        res.status(200).json(getProject)
    
    }
    catch(err){
        res.status(401).json(err)
    }

}
exports.deleteProjectController=async(req,res)=>{
    const {id} = req.params

    try{
    const deleteProject = await projectDetail.findByIdAndDelete({_id:id})
    
        res.status(200).json(deleteProject)
    
    }
    catch(err){
        res.status(401).json(err)
    }

}

exports.editProjectController=async(req,res)=>{
    const {id} = req.params
     const{projectName,projectManager,github,teamMembers,startDate,endDate,status,budget} = req.body

    try{
    const updatedProject = await projectDetail.findByIdAndUpdate({_id:id},{projectName,projectManager,github,teamMembers,startDate,endDate,status,budget},{new:true})
    
        res.status(200).json(updatedProject)
    
    }
    catch(err){
        res.status(401).json(err)
    }

}