//Access the router on Express 
const router = require('express').Router();

//CREATE
router.post("/todo", (req, res) => {
    let Todo = require('../models/todo');
    let newTodo = Todo ({
        title: req.body.title,
        description : req.body.description
    });
  
    newTodo.save()
    .then((savedTodo) => {

        //send back the created Todo
        res.json(savedTodo);
            
    }, (err) => {
        res.status(400).json(err)
    });

});

//READ
router.get("/todos", (req, res) => {
    res.json({"msg": "Read all the todos"});
});

router.get("/todo", (req, res) => {
    res.json({"msg": "Read a todo"});
});

//UPDATE
router.put("/todo", (req, res) => {
    res.json({"msg": "Update a Todo"});
});

//DELETE
router.delete("/todo", (req, res) => {
    res.json({"msg": "Delete a Todo"});
});

module.exports = router;