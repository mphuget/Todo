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

router.get("/todo/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/todo/:id", (req, res) => {
    
    controller.update(req, res);

});

//DELETE
router.delete("/todo/:id", (req, res) => {
    
    controller.delete(req, res);

});

//COMPLETED
router.post("/todo/:id/done", (req, res) => {

    controller.done(req, res);

});

router.post("/todo/:id/undone", (req, res) => {

    controller.undone(req, res);

});

module.exports = router;