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

    
})
export default router;