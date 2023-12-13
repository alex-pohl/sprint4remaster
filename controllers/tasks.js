



const getAllTasks = (req,res)=>{
    res.send('all items')
}

const addNewTask = (req, res)=>{
    console.log(req.body)
    res.json(req.body)
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