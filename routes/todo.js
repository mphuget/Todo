//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/todo');

//CREATE
router.post("/todo", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/todos", (req, res) => {
    
    controller.reads(req, res);

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