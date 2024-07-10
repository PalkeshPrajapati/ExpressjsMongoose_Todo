import express from "express"
import { Todo } from "../modules/Todo.js"
const router = express.Router()


// // middleware that is specific to this router
// router.use((req, res, next) => {
//     console.log('Time: ', Date.now())
//     next()
// })

// define the home page route
router.get('/', async (req, res) => {
    let data = await Todo.find({})
    res.render("todo", {data: data})
})
router.get('/new-todo', (req, res) => {
    let todoname = req.query.todoname;
    let desc = req.query.desc;
    let todo = new Todo({name: todoname, desc: desc})
    todo.save()
    res.redirect("/todo")
})

// define the about route
router.get('/about', (req, res) => {
    res.send('About todo')
})



export default router // default export