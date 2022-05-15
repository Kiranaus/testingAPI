import express from "express"
const app = express()
const port= process.env.PORT//3000;

app.post ("/students",(req,res) => {
    res.send("hello from other sides ");
    
})

app.listen(port, () =>{
    console.log('connection is ready at ${port}');
})