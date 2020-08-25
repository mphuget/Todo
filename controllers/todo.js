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

module.exports.create = createTodo;