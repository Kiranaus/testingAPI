import express from "express"
import bodyparser from "body-parser"


const app = express()
app.use(bodyparser.json())

app.get('/', function(req,res){
    res.send("hiiii")
})
app.listen(3000 , function (){
    console.log('Hey server ready ');

})