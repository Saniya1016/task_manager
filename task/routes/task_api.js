import express from 'express';
//get database

const router = express.Router();

//add a task given user_id
router.post('/add', (req,res) => {

});

//get all tasks given user_id
router.get('/read/:id', (req, res) => {

});

//update Date
router.put('/updateDate', (req, res) => {


});

//add collaborators to a task
router.put('/addCollaborator', (req, res) => {
    
});

export default router;