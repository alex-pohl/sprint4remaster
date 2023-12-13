



const getAllTasks = (req,res)=>{
    res.send('all items')
}

const addNewTask = (req, res)=>{
    res.send('add a new task')
}

const getOneTask = (req, res) =>{
    res.send('one specific task')
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