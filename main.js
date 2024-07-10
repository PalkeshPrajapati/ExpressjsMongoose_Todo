import express from "express"
import mongoose from "mongoose"
// import ejs from "ejs"
import todo from "./routes/todo.js"

const app = express()
const port = 3000
const conn = mongoose.connect("mongodb://localhost:27017/Todo")

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use('/todo', todo)

app.get('/', (req, res) => {
    res.render("index")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})