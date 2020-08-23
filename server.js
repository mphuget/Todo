//Use Express middleware to manage incoming requests and 
//dispatch them to corresponding behaviours
const express = require('express');

//Use chalk to add colours on the console
const chalk = require('chalk');

//The 404 middleware used when an incoming request
//hits a wrong route
const http404 = require('./middleware/route404');

//Used for logging
const morgan = require("morgan");

//Create an application 
const app = express();

//Use the morgan logging 
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

//Send back a raw message every time the server got an 
//incoming request
app.get('/', (req, res) => {

    res.json({'msg':'You are reaching homepage'});

});

//When there is no route that caught the incoming request
//use the 404 middleware
app.use(http404.notFound);

//Listen on the port 3000
app.listen(3000);

//Print out where the server is
console.log(chalk.green("Server is running on port: 3000"));