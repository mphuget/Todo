//Access the router on Express 
const router = require('express').Router();

//CREATE
router.post("/todo", (req, res) => {
    res.json({"msg": "Create a Todo"});
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