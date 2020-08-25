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

 function readTodo(req, res) {

    let Todo = require("../models/todo");

    Todo.findById({_id : req.params.id})
    .then((todo) => {
        res.status(200).json(todo);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function deleteTodo(req, res) {

    let Todo = require("../models/todo");

    Todo.findOneAndRemove({_id : req.params.id})
    .then((deletedTodo) => {
        res.status(200).json(deletedTodo);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createTodo;
module.exports.reads = readTodos;
module.exports.read = readTodo;
module.exports.delete = deleteTodo;
