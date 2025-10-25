const express = require('express')
const router = express.Router()
const projectController = require('./projectController')


router.post('/add-project',projectController.addProjectController)
router.get('/get-project',projectController.getProjectController)
router.delete('/delete-project/:id',projectController.deleteProjectController)
router.put('/edit-project/:id',projectController.editProjectController)
module.exports = router