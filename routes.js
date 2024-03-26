const express = require('express');
const router = express.Router();
const Task = require('./models/tasks')

// GET all tasks (READ)
router.get('/tasks', async(req, res) => {
    try{
        const allTasks = await Task.find();
        console.log(allTasks);
        res.send(allTasks);
    }
    catch {
        res.status(404);
        res.send({
            error: 'No Tasks existing.'
        })
    }


});

// POST one task (CREATE)
router.post('/tasks', async(req, res) =>{
    const newTask = new Task({task: req.body.task})
    await newTask.save();
    res.send(newTask)
} )

// DELETE one task
router.delete('/tasks/:id', async(req, res) => {
    try {
        await Task.deleteOne({ _id : req.params.id })
        res.status(204).send()
    }
    catch {
        res.status(404);
        res.send({
            error: 'Task does not exist.'
        })
    }

})

module.exports = router;