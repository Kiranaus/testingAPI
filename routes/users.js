import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router= express.Router();

const users = [];

router.get("/",(req,res) => {
    console.log(users);
    
    res.send(users);

});

router.post('/', (req,res) => {
    const user = req.body;
    
    
    users.push({...user,id: uuidv4()});

    res.send(`User with the name ${user.firstName} added to the Database`);
});

router.get('/:id', (req,res) => {
    console.log(req.params);
    res.send(req.params);

});
export default router;