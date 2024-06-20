import express from 'express';
//get database
import tasks from '../module/tasks.js';

const router = express.Router();

//add a task given user_id
router.post('/add', (req, res) => {
    const body = req.body;
    console.log(body);
    try{
        tasks.add_task(body.id, body.user_id, body.name, body.description, body.due_date, body.difficulty, body.collaborators, body.complete);
        res.status(200).send("task added");
    } catch(err){
        res.status(400).send("Task not correctly defined");
    }

});

//get all tasks given user_id
router.get('/read/:id', (req, res) => {

    try{
        const {id} = req.params;
        const all = tasks.read_tasks(id);
        res.json({'tasks': all});

    } catch(err){
        res.status(404).send('error in reading tasks for this user');
    }
});

//update Date
router.put('/updateDate', (req, res) => {


});

//update Difficulty
router.put('/updateDifficlty', (req, res) => {


});

//add collaborators to a task
router.put('/addCollaborator', (req, res) => {
    
});

export default router;