const express = require('express');
const router = express.Router();

const {getAllTasks, addNewTask, getOneTask, editTask, deleteTask} = require('../controllers/tasks')


router.route('/').get(getAllTasks).post(addNewTask);
router.route('/:id').get(getOneTask).patch(editTask).delete(deleteTask);



module.exports = router