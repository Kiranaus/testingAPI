import express from "express"
import bodyparser from "body-parser"


const app = express()
const port = 3000

app.use(bodyparser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => {
  console.log(` App listening on port: http://localhost:${port}`)
})