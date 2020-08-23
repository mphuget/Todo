//Use Express middleware to manage incoming requests and 
//dispatch them to corresponding behaviours
const express = require('express');

//Use chalk to add colours on the console
const chalk = require('chalk');

//Create an application 
const app = express();

//Send back a raw message every time the server got an 
//incoming request
app.get('/', (req, res) => {

    res.json({'msg':'You are reaching homepage'});

});

//Listen on the port 3000
app.listen(3000);

//Print out where the server is
console.log(chalk.green("Server is running on port: 3000"));