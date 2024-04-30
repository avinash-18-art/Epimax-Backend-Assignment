const {Task} = require('../models')

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json(task)
  } catch (error) {
    res.status(500).json({error: 'Failed to create task'})
  }
}

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll()
    res.status(200).json(tasks)
  } catch (error) {
    res.status(500).json({error: 'Failed to retrieve tasks'})
  }
}

module.exports = {
  createTask,
  getAllTasks,
}
