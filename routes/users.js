import express from 'express';

const router= express.Router();

const users = [
    {
        firstName : "Kirandeep",
        lastName : "Doe",
        age : 25
    
    
    
    },
    {
        firstName : "Raj",
        lastName : "Bebbanburg",
        age : 29
    
    
    
    }
]

router.get("/",(req,res) => {
    console.log(users);
    
    res.send(users);

});

router.post('/', (req,res) => {
    console.log('POST ROUTE REACHED');

    const user = req.body;
    users.push(user);

    res.send(`User with the name ${user.firstName} added to the Database`);
});
export default router;