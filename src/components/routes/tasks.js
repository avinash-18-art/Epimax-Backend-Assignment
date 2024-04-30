const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.post('/', TaskController.createTask)
router.get('/', TaskController.getAllTasks)
router.get('/:id', TaskController.getTaskById)
router.put('/:id', TaskController.updateTask)
router.delete('/:id', TaskController.deleteTask)

module.exports = router
