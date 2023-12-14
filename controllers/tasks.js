
const Task = require('../models/Task') // Importing the schema for unified data structure.


const getAllTasks = (req,res)=>{
    res.send('all items')
}

const addNewTask = async (req, res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const getOneTask = (req, res) =>{
    res.json({id:req.params.id})
}

const editTask = (req, res)=>{
    res.send('This is editing a task')
}

const deleteTask = (req,res)=>{
    res.send('Removing task lol')
}
module.exports = {
    getAllTasks,
    addNewTask,
    getOneTask,
    editTask,
    deleteTask
}