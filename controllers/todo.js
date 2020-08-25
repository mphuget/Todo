function createTodo(req, res) {
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

}

function readTodos(req, res) {

    let Todo = require("../models/todo");

    Todo.find({})
    .then((todos) => {
        res.status(200).json(todos);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createTodo;
module.exports.reads = readTodos;
